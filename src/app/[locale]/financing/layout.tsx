import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "financing" });
    const url = locale === "en" ? "https://bubblesenterprise.com/financing" : `https://bubblesenterprise.com/${locale}/financing`;
    return {
        title: t("metaTitle"),
        description: t("metaDesc"),
        openGraph: {
            title: t("metaOgTitle"),
            description: t("metaOgDesc"),
            url,
        },
        alternates: {
            canonical: url,
            languages: {
                en: "https://bubblesenterprise.com/financing",
                es: "https://bubblesenterprise.com/es/financing",
                pt: "https://bubblesenterprise.com/pt/financing",
                "x-default": "https://bubblesenterprise.com/financing",
            },
        },
    };
}

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
            {children}
        </>
    );
}
