import type { NextConfig } from "next";
import path from "path";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  reactCompiler: true,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2592000,
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  turbopack: {
    root: path.resolve(__dirname),
  },
  async headers() {
    const isProd = process.env.NODE_ENV === "production";
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
          ...(isProd ? [
            { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" },
            {
              key: "Content-Security-Policy",
              value: "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.clarity.ms https://scripts.clarity.ms https://connect.facebook.net; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: https:; font-src 'self'; connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com https://*.clarity.ms https://www.facebook.com; object-src 'none'; frame-ancestors 'none'; form-action 'self'; base-uri 'self';",
            },
          ] : []),
        ],
      },
      {
        source: "/_next/static/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/images/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=2592000, stale-while-revalidate=86400" },
        ],
      },
    ];
  },
};

export default withNextIntl(nextConfig);
