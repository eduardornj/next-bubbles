import { randomBytes, scryptSync, createHmac, timingSafeEqual } from 'crypto';

// ── Constants ──

export const SESSION_COOKIE_NAME = 'admin_session';

export const SESSION_COOKIE_OPTIONS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'lax' as const,
  path: '/admin',
  maxAge: 28800, // 8 hours
};

const SESSION_MAX_AGE_MS = 28800 * 1000;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX_ATTEMPTS = 5;

// ── Password hashing (scrypt) ──

export function hashPassword(password: string): string {
  const salt = randomBytes(32).toString('hex');
  const hash = scryptSync(password, salt, 64).toString('hex');
  return `${salt}:${hash}`;
}

export function verifyPassword(password: string, storedHash: string): boolean {
  const [salt, hash] = storedHash.split(':');
  if (!salt || !hash) return false;

  const derived = scryptSync(password, salt, 64);
  const expected = Buffer.from(hash, 'hex');

  if (derived.length !== expected.length) return false;
  return timingSafeEqual(derived, expected);
}

// ── Session tokens (HMAC-SHA256) ──

function getSessionSecret(): string {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret) throw new Error('ADMIN_SESSION_SECRET env var is not set');
  return secret;
}

export function createSessionToken(): string {
  const payload = JSON.stringify({ ts: Date.now() });
  const payloadB64 = Buffer.from(payload).toString('base64');
  const sig = createHmac('sha256', getSessionSecret())
    .update(payloadB64)
    .digest('base64');
  return `${payloadB64}.${sig}`;
}

export function verifySessionToken(token: string): boolean {
  try {
    const [payloadB64, sigB64] = token.split('.');
    if (!payloadB64 || !sigB64) return false;

    const expectedSig = createHmac('sha256', getSessionSecret())
      .update(payloadB64)
      .digest('base64');

    // Constant-time comparison
    if (expectedSig.length !== sigB64.length) return false;
    let mismatch = 0;
    for (let i = 0; i < expectedSig.length; i++) {
      mismatch |= expectedSig.charCodeAt(i) ^ sigB64.charCodeAt(i);
    }
    if (mismatch !== 0) return false;

    const payload = JSON.parse(Buffer.from(payloadB64, 'base64').toString());
    if (typeof payload.ts !== 'number') return false;

    return Date.now() - payload.ts < SESSION_MAX_AGE_MS;
  } catch {
    return false;
  }
}

// ── Rate limiting (login-specific) ──

const loginRateMap = new Map<string, { count: number; blockedUntil: number }>();

export function checkRateLimit(ip: string): { allowed: boolean; retryAfter?: number } {
  const now = Date.now();

  // Periodic cleanup
  if (loginRateMap.size > 500) {
    for (const [key, val] of loginRateMap) {
      if (now > val.blockedUntil && val.count <= RATE_LIMIT_MAX_ATTEMPTS) {
        loginRateMap.delete(key);
      }
    }
  }

  const entry = loginRateMap.get(ip);

  if (!entry) {
    loginRateMap.set(ip, { count: 1, blockedUntil: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true };
  }

  // Currently blocked
  if (entry.count >= RATE_LIMIT_MAX_ATTEMPTS && now < entry.blockedUntil) {
    return { allowed: false, retryAfter: Math.ceil((entry.blockedUntil - now) / 1000) };
  }

  // Window expired — reset
  if (now > entry.blockedUntil) {
    loginRateMap.set(ip, { count: 1, blockedUntil: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true };
  }

  // Increment
  entry.count++;
  if (entry.count >= RATE_LIMIT_MAX_ATTEMPTS) {
    entry.blockedUntil = now + RATE_LIMIT_WINDOW_MS;
    return { allowed: false, retryAfter: Math.ceil(RATE_LIMIT_WINDOW_MS / 1000) };
  }

  return { allowed: true };
}

export function clearRateLimit(ip: string): void {
  loginRateMap.delete(ip);
}

// ── Session revocation (server-side) ──
// In-memory set of revoked tokens. On serverless cold start this resets,
// but tokens also expire via TTL so the worst case is an 8h window.
const revokedSessions = new Set<string>();

export function revokeSession(token: string): void {
  revokedSessions.add(token);
  // Cleanup: remove old entries when set gets large (tokens expire naturally via TTL)
  if (revokedSessions.size > 200) {
    const arr = Array.from(revokedSessions);
    arr.slice(0, arr.length - 100).forEach(t => revokedSessions.delete(t));
  }
}

export function isSessionRevoked(token: string): boolean {
  return revokedSessions.has(token);
}

// ── Audit logging ──

export function audit(action: string, ip: string, details?: Record<string, unknown>): void {
  console.log(JSON.stringify({
    level: 'AUDIT',
    action,
    ip,
    timestamp: new Date().toISOString(),
    ...details,
  }));
}
