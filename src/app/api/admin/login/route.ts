import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import {
  verifyPassword,
  createSessionToken,
  checkRateLimit,
  clearRateLimit,
  audit,
  SESSION_COOKIE_NAME,
  SESSION_COOKIE_OPTIONS,
} from '@/lib/admin-auth';
import { checkOrigin } from '@/lib/api-utils';

const loginSchema = z.object({
  password: z.string().min(1).max(256),
});

function getClientIp(req: NextRequest): string {
  // Use LAST entry from x-forwarded-for (Vercel appends the real IP at the end)
  // x-real-ip is NOT set by Vercel and can be spoofed — do not use as fallback
  return (
    req.headers.get('x-forwarded-for')?.split(',').pop()?.trim() ??
    '0.0.0.0'
  );
}

export async function POST(req: NextRequest) {
  // Origin check — block requests from unknown origins
  const originErr = checkOrigin(req);
  if (originErr) return originErr;

  const ip = getClientIp(req);

  // Rate limit check
  const rateCheck = checkRateLimit(ip);
  if (!rateCheck.allowed) {
    audit('LOGIN_RATE_LIMITED', ip);
    return NextResponse.json(
      { error: 'Too many attempts. Try again later.' },
      {
        status: 429,
        headers: { 'Retry-After': String(rateCheck.retryAfter ?? 900) },
      },
    );
  }

  // Parse body
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  const parsed = loginSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
  }

  // Verify password
  const adminHash = process.env.ADMIN_HASH;
  if (!adminHash) {
    audit('LOGIN_CONFIG_ERROR', ip, { reason: 'ADMIN_HASH not set' });
    return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
  }

  const valid = verifyPassword(parsed.data.password, adminHash);
  if (!valid) {
    audit('LOGIN_FAILED', ip);
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }

  // Success — create session
  const token = createSessionToken();
  clearRateLimit(ip);
  audit('LOGIN_SUCCESS', ip);

  const res = NextResponse.json({ success: true }, { status: 200 });
  res.cookies.set(SESSION_COOKIE_NAME, token, SESSION_COOKIE_OPTIONS);
  return res;
}
