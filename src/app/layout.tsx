import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://bubblesenterprise.com"),
};

// Root layout — mínimo. O [locale]/layout.tsx é o layout real com next-intl.
// CSS importado aqui para garantir estilos na página 404 raiz.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
