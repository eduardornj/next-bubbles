import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leave a Review — Bubbles Enterprise",
  description: "Leave a review for Bubbles Enterprise soffit and fascia services. Share your experience on Google, Yelp, Facebook, Nextdoor, or Angi.",
  robots: { index: false, follow: false },
};

export default function ReviewLayout({ children }: { children: React.ReactNode }) {
  return children;
}
