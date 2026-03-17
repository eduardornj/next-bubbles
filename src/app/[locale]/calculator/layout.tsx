import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Script from "next/script";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "calculator" });
    return {
        title: t("metaTitle"),
        description: t("metaDesc"),
        openGraph: {
            title: t("metaOgTitle"),
            description: t("metaOgDesc"),
            url: "https://bubblesenterprise.com/calculator",
        },
        alternates: {
            canonical: locale === "en" ? "https://bubblesenterprise.com/calculator" : `https://bubblesenterprise.com/${locale}/calculator`,
            languages: {
                en: "https://bubblesenterprise.com/calculator",
                es: "https://bubblesenterprise.com/es/calculator",
                pt: "https://bubblesenterprise.com/pt/calculator",
                "x-default": "https://bubblesenterprise.com/calculator",
            },
        },
    };
}

const schemaJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Bubbles Enterprise Soffit & Fascia Cost Calculator",
    applicationCategory: "BusinessApplication",
    description:
        "Free online calculator for soffit and fascia installation costs in Orlando and Central Florida. Get instant estimates for new construction, remove & replace, or repairs.",
    dateModified: "2026-03-05",
    url: "https://bubblesenterprise.com/calculator",
    provider: {
        "@type": "LocalBusiness",
        name: "Bubbles Enterprise Soffit & Fascia",
        telephone: "+14077151790",
        address: {
            "@type": "PostalAddress",
            addressLocality: "Orlando",
            addressRegion: "FL",
            addressCountry: "US",
        },
    },
};

export default function CalculatorLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }}
            />
            {children}
            {/* reCAPTCHA v3 — loaded only on calculator page */}
            <Script
                src="https://www.google.com/recaptcha/api.js?render=6LfcYYosAAAAAFuEjO8kGDIqOjwsXMoKmWgBGyuh"
                strategy="lazyOnload"
            />
        </>
    );
}
