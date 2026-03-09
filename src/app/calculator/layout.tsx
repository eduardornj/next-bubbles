import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Soffit & Fascia Cost Calculator | Bubbles Enterprise Orlando",
    description:
        "Free online calculator for soffit and fascia installation costs in Orlando. Get instant estimates for new construction, remove & replace, or repairs.",
    keywords: [
        "soffit cost calculator",
        "fascia estimate Orlando",
        "soffit price calculator",
        "soffit installation cost",
        "fascia replacement cost Florida",
        "soffit repair estimate",
    ],
    openGraph: {
        title: "Free Soffit & Fascia Cost Calculator | Orlando",
        description:
            "Calculate your soffit and fascia project cost instantly. Aluminum & vinyl pricing for Orlando and Central Florida.",
        url: "https://bubblesenterprise.com/calculator",
    },
    alternates: {
        canonical: "https://bubblesenterprise.com/calculator",
        languages: {
            en: "https://bubblesenterprise.com/calculator",
            es: "https://bubblesenterprise.com/es/calculator",
            pt: "https://bubblesenterprise.com/pt/calculator",
            "x-default": "https://bubblesenterprise.com/calculator",
        },
    },
};

const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://bubblesenterprise.com" },
        { "@type": "ListItem", position: 2, name: "Calculator", item: "https://bubblesenterprise.com/calculator" },
    ],
};

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
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            {children}
        </>
    );
}
