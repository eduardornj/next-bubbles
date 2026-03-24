import { NextRequest, NextResponse } from 'next/server';
import { audit, SESSION_COOKIE_NAME, revokeSession } from '@/lib/admin-auth';
import { getClientIp } from '@/lib/api-utils';

export async function POST(req: NextRequest) {
  const ip = getClientIp(req);
  const token = req.cookies.get(SESSION_COOKIE_NAME)?.value;

  // Revoke session server-side so stolen tokens become invalid immediately
  if (token) revokeSession(token);

  audit('LOGOUT', ip);

  const res = NextResponse.json({ success: true }, { status: 200 });
  res.cookies.set(SESSION_COOKIE_NAME, '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/admin',
    maxAge: 0,
  });
  return res;
}
