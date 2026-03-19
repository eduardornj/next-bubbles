import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import Script from "next/script";
import "../../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Bubbles Enterprise - Mobile Quote",
  description: "Get a quick quote for soffit and fascia services.",
  robots: { index: false, follow: false },
  manifest: undefined,
};

export default async function MobileLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <html lang={locale} className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="theme-color" content="#0f172a" />
      </head>
      <body className="antialiased bg-[#0f172a] text-slate-200 min-h-dvh overflow-x-hidden">
        {children}
        {/* reCAPTCHA v3 */}
        <Script
          src="https://www.google.com/recaptcha/api.js?render=6LfcYYosAAAAAFuEjO8kGDIqOjwsXMoKmWgBGyuh"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
