import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WebMCPProvider } from "@/components/WebMCPProvider";
import Script from "next/script";
import { Phone, MessageCircle } from "lucide-react";
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "optional",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "optional",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  return {
    metadataBase: new URL("https://bubblesenterprise.com"),
    title: t("siteTitle"),
    description: t("siteDescription"),
    openGraph: {
      images: [{ url: "/opengraph-image", width: 1200, height: 630, type: "image/png" }],
    },
    twitter: {
      card: "summary_large_image",
      title: t("siteTitle"),
      description: t("siteDescription"),
      images: ["/opengraph-image"],
    },
    other: {
      "robots": "max-image-preview:large",
    },
    alternates: {
      canonical: locale === "en" ? "https://bubblesenterprise.com" : `https://bubblesenterprise.com/${locale}`,
      languages: {
        en: "https://bubblesenterprise.com",
        es: "https://bubblesenterprise.com/es",
        pt: "https://bubblesenterprise.com/pt",
        "x-default": "https://bubblesenterprise.com",
      },
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate locale
  if (!routing.locales.includes(locale as "en" | "es" | "pt")) {
    notFound();
  }

  const messages = await getMessages();

  // WhatsApp message per locale
  const whatsappMessages: Record<string, string> = {
    en: "Hi, I visited your website and would like a free estimate for soffit and fascia.",
    es: "Hola, vi su sitio web y me gustaría un presupuesto gratis para soffit y fascia.",
    pt: "Olá, vi o site de vocês e gostaria de um orçamento para soffit e fascia.",
  };
  const whatsappMsg = encodeURIComponent(whatsappMessages[locale] ?? whatsappMessages.en);
  const whatsappHref = `https://wa.me/14077151790?text=${whatsappMsg}`;

  return (
    <html lang={locale} className={`${inter.variable} ${poppins.variable} scroll-smooth`}>
      <head>
        {/* Preconnect for analytics (production only) */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.clarity.ms" />
        <link rel="preconnect" href="https://connect.facebook.net" />
        {/* Bing Webmaster Tools verification */}
        <meta name="msvalidate.01" content="CB1FE7A80A1DB0E8717B86B5BD81AE24" />
        {/* WebMCP Manifest */}
        <link rel="mcp-manifest" href="/mcp.json" type="application/json" />
        {/* hreflang — gerado automaticamente pelo next-intl via alternates no generateMetadata */}
        {/* Schema JSON-LD Global — LocalBusiness em TODAS as páginas */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
              "@id": "https://bubblesenterprise.com/#business",
              name: "Bubbles Enterprise Soffit & Fascia",
              url: "https://bubblesenterprise.com",
              telephone: "+14077151790",
              priceRange: "$$",
              image: "https://bubblesenterprise.com/opengraph-image",
              description:
                "Expert soffit and fascia installation, repair, and replacement in Orlando and Central Florida. Licensed and insured.",
              dateModified: "2026-03-05",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Orlando",
                addressRegion: "FL",
                postalCode: "32801",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 28.5383,
                longitude: -81.3792,
              },
              areaServed: [
                { "@type": "City", name: "Orlando", addressRegion: "FL" },
                { "@type": "City", name: "Kissimmee", addressRegion: "FL" },
                { "@type": "City", name: "Winter Park", addressRegion: "FL" },
                { "@type": "City", name: "Winter Garden", addressRegion: "FL" },
                { "@type": "City", name: "Clermont", addressRegion: "FL" },
                { "@type": "City", name: "Sanford", addressRegion: "FL" },
                { "@type": "City", name: "Oviedo", addressRegion: "FL" },
                { "@type": "City", name: "Lake Mary", addressRegion: "FL" },
                { "@type": "City", name: "Apopka", addressRegion: "FL" },
                { "@type": "City", name: "Altamonte Springs", addressRegion: "FL" },
                { "@type": "City", name: "Maitland", addressRegion: "FL" },
                { "@type": "City", name: "Casselberry", addressRegion: "FL" },
                { "@type": "City", name: "Longwood", addressRegion: "FL" },
                { "@type": "City", name: "Celebration", addressRegion: "FL" },
                { "@type": "City", name: "St. Cloud", addressRegion: "FL" },
                { "@type": "City", name: "Dr. Phillips", addressRegion: "FL" },
                { "@type": "City", name: "Windermere", addressRegion: "FL" },
                { "@type": "City", name: "Daytona Beach", addressRegion: "FL" },
                { "@type": "City", name: "Palm Bay", addressRegion: "FL" },
                { "@type": "City", name: "Port St. Lucie", addressRegion: "FL" },
                { "@type": "City", name: "Lake Nona", addressRegion: "FL" },
              ],
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                opens: "08:00",
                closes: "18:00",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Soffit & Fascia Services",
                itemListElement: [
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Soffit & Fascia Repair" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Remove & Replace" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "New Construction Installation" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Emergency Repair" } },
                ],
              },
              sameAs: [
                "https://www.google.com/maps/place/Bubble+Soffit+and+Fascia/data=!4m2!3m1!1s0x0:0x85136cefb8389b4b",
                "https://www.instagram.com/bubblesoffit",
                "https://www.facebook.com/bubblesoffit",
                "https://www.yelp.com/biz/bubble-enterprises-soffit-orlando",
                "https://nextdoor.com/page/bubble-enterprises-soffit-fascia",
                "https://www.angi.com/companylist/us/fl/orlando/bubble-enterprises-soffit-fascia",
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <NextIntlClientProvider messages={messages}>
          {/* CSS Scroll-Driven Animation progress bar */}
          <div id="scroll-progress" aria-hidden="true" />
          <WebMCPProvider />
          <Header locale={locale as "en" | "es" | "pt"} />
          <main id="main-content" className="flex-grow pt-[68px] md:pt-[108px]">
            {children}
          </main>
          <Footer locale={locale as "en" | "es" | "pt"} />

          {/* Floating Global CTA — WhatsApp por idioma */}
          <div className="fixed bottom-6 right-4 sm:right-6 z-[100] flex flex-col gap-3">
            <a
              href="tel:4077151790"
              className="group flex items-center justify-center w-14 h-14 bg-bubble-primary text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 relative"
              aria-label="Call Now"
            >
              <Phone className="w-6 h-6" />
              <span className="absolute right-full mr-4 bg-white text-gray-900 px-3 py-1.5 rounded-lg shadow-md font-bold text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0">
                {locale === "es" ? "Llamar Ahora" : locale === "pt" ? "Ligar Agora" : "Call Us Now"}
              </span>
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 relative"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-6 h-6" />
              <span className="absolute right-full mr-4 bg-white text-gray-900 px-3 py-1.5 rounded-lg shadow-md font-bold text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0">
                {locale === "es" ? "Presupuesto Gratis" : locale === "pt" ? "Orçamento Grátis" : "Free Quote"}
              </span>
            </a>
          </div>

          {/* Speculation Rules — locale-aware */}
          <script
            type="speculationrules"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                prerender: [
                  { where: { href_matches: locale === "en" ? "/contact" : `/${locale}/contact` }, eagerness: "moderate" },
                  { where: { href_matches: locale === "en" ? "/contact/emergency" : `/${locale}/contact/emergency` }, eagerness: "moderate" },
                  { where: { href_matches: locale === "en" ? "/calculator" : `/${locale}/calculator` }, eagerness: "moderate" },
                ],
                prefetch: [
                  { where: { href_matches: locale === "en" ? "/services" : `/${locale}/services` }, eagerness: "conservative" },
                  { where: { href_matches: locale === "en" ? "/repairs" : `/${locale}/repairs` }, eagerness: "conservative" },
                  { where: { href_matches: locale === "en" ? "/faq" : `/${locale}/faq` }, eagerness: "conservative" },
                  { where: { href_matches: locale === "en" ? "/gallery" : `/${locale}/gallery` }, eagerness: "conservative" },
                ],
              }),
            }}
          />
        </NextIntlClientProvider>
        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8CB2E6CK1H"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-8CB2E6CK1H');`}
        </Script>
        {/* Microsoft Clarity */}
        <Script id="clarity-init" strategy="lazyOnload">
          {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y)})(window,document,"clarity","script","vpskc9bkyk");`}
        </Script>
        {/* Facebook / Meta Pixel */}
        <Script id="fb-pixel" strategy="lazyOnload">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','1981946709023806');fbq('track','PageView');`}
        </Script>
        {/* Auto-track phone & WhatsApp clicks as Contact events */}
        <Script id="fb-contact-events" strategy="lazyOnload">
          {`document.addEventListener('click',function(e){var a=e.target.closest('a');if(!a)return;var h=a.href||'';if(h.startsWith('tel:'))typeof fbq==='function'&&fbq('track','Contact',{method:'phone'});if(h.includes('wa.me'))typeof fbq==='function'&&fbq('track','Contact',{method:'whatsapp'});});`}
        </Script>
        <noscript>
          <img height="1" width="1" style={{display:'none'}} src="https://www.facebook.com/tr?id=1981946709023806&ev=PageView&noscript=1" alt="" />
        </noscript>
      </body>
    </html>
  );
}
