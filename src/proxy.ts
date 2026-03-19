import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

// ── Edge-compatible HMAC token verification (Web Crypto API) ──

async function verifyTokenEdge(token: string): Promise<boolean> {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret || !token) return false;

  const parts = token.split('.');
  if (parts.length !== 2) return false;
  const [payloadB64, sigB64] = parts;
  if (!payloadB64 || !sigB64) return false;

  try {
    const key = await crypto.subtle.importKey(
      'raw',
      new TextEncoder().encode(secret),
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['verify'],
    );

    const sig = Uint8Array.from(atob(sigB64), c => c.charCodeAt(0));
    const valid = await crypto.subtle.verify(
      'HMAC',
      key,
      sig,
      new TextEncoder().encode(payloadB64),
    );
    if (!valid) return false;

    const payload = JSON.parse(atob(payloadB64));
    if (typeof payload.ts !== 'number') return false;

    // 8-hour expiry
    return Date.now() - payload.ts < 28800000;
  } catch {
    return false;
  }
}

// ── Block admin on preview deploys ──

function isPreviewDeploy(host: string): boolean {
  if (!host.includes('vercel.app')) return false;
  // Allow production Vercel domain if configured, block all other previews
  const prodDomain = process.env.NEXT_PUBLIC_SITE_URL?.replace(/^https?:\/\//, '');
  if (prodDomain && host === prodDomain) return false;
  return true;
}

// ── Main proxy ──

export default async function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const host = req.headers.get('host') ?? '';

  // ── Admin page routes ──
  if (pathname.startsWith('/admin')) {
    // Block preview deploys entirely
    if (isPreviewDeploy(host)) {
      return new NextResponse('Not Found', { status: 404 });
    }

    // Login page is public
    if (pathname === '/admin/login') {
      return NextResponse.next();
    }

    // Verify session
    const token = req.cookies.get('admin_session')?.value;
    const valid = token ? await verifyTokenEdge(token) : false;

    if (!valid) {
      const loginUrl = req.nextUrl.clone();
      loginUrl.pathname = '/admin/login';
      return NextResponse.redirect(loginUrl);
    }

    return NextResponse.next();
  }

  // ── Admin API routes ──
  if (pathname.startsWith('/api/admin')) {
    // Block preview deploys entirely
    if (isPreviewDeploy(host)) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }

    // Login/logout endpoints are public (login handles its own auth)
    if (pathname === '/api/admin/login' || pathname === '/api/admin/logout') {
      return NextResponse.next();
    }

    // Verify session
    const token = req.cookies.get('admin_session')?.value;
    const valid = token ? await verifyTokenEdge(token) : false;

    if (!valid) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    return NextResponse.next();
  }

  // ── API routes — skip intl middleware entirely ──
  if (pathname.startsWith('/api/')) {
    return NextResponse.next();
  }

  // ── Mobile app route — set header for layout detection ──
  if (pathname.includes('/mobile')) {
    const response = intlMiddleware(req);
    response.headers.set('x-is-mobile-app', '1');
    return response;
  }

  // ── All other routes — next-intl ──
  return intlMiddleware(req);
}

export const config = {
  matcher: [
    '/((?!_next|_vercel|.*\\..*).*)',
    '/([\\w-]+)?/',
    '/(en|es|pt)/:path*',
  ],
};
