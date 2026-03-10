import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://bubblesenterprise.com"),
};

// Root layout — mínimo. O [locale]/layout.tsx é o layout real com next-intl.
// Este arquivo existe apenas para satisfazer o Next.js App Router.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <SpeedInsights />
    </>
  );
}
