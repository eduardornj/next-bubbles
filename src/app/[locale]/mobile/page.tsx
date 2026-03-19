import type { Metadata } from "next";
import MobileClient from "./MobileClient";

export const metadata: Metadata = {
  title: "Bubbles Enterprise - Quick Quote",
  description: "Send photos and get a fast quote for soffit and fascia services in Orlando.",
  robots: { index: false, follow: false },
};

export default async function MobilePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <MobileClient locale={locale} />;
}
