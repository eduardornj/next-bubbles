import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  matcher: [
    // Root
    '/',
    // Locale-prefixed routes
    '/(es|pt)/:path*',
    // Everything else except API, Next.js internals, and files with extensions
    '/((?!api|_next|_vercel|admin|.*\\..*).*)',
  ],
};
