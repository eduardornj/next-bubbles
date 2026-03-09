import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Soffit & Fascia Financing Orlando | Starting at $19/mo | Bubbles Enterprise",
    description:
        "Finance your soffit and fascia project with payments starting at $19/mo. Instant pre-approval, soft credit check — no impact on your credit score. Serving Orlando & Central Florida.",
    keywords: [
        "soffit financing Orlando",
        "soffit payment plan",
        "soffit repair no credit check",
        "fascia financing Florida",
        "home improvement financing Orlando",
        "soffit monthly payment",
    ],
    openGraph: {
        title: "Soffit & Fascia Financing — Starting at $19/mo | Bubbles Enterprise",
        description:
            "Finance your soffit and fascia project. Soft credit check, 30+ lenders, FICO 550+. Serving Orlando & Central Florida.",
        url: "https://bubblesenterprise.com/financing",
    },
    alternates: {
        canonical: "https://bubblesenterprise.com/financing",
        languages: {
            en: "https://bubblesenterprise.com/financing",
            es: "https://bubblesenterprise.com/es/financing",
            pt: "https://bubblesenterprise.com/pt/financing",
            "x-default": "https://bubblesenterprise.com/financing",
        },
    },
};

const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://bubblesenterprise.com" },
        { "@type": "ListItem", position: 2, name: "Financing", item: "https://bubblesenterprise.com/financing" },
    ],
};

// Schema JSON-LD FinancialProduct
const schemaJsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    name: "Soffit & Fascia Financing",
    description:
        "Home improvement financing for soffit and fascia projects in Orlando, FL. Starting at $19/mo.",
    dateModified: "2026-03-05",
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
    feesAndCommissionsSpecification:
        "No fees charged to the homeowner by Bubbles Enterprise. Financing provided by Acorn Finance lending partners.",
    annualPercentageRate: "6.99 to 35.99",
};

export default function FinancingLayout({
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
