import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | Free Soffit & Fascia Estimate | Bubbles Enterprise",
    description: "Get a free soffit and fascia estimate in Orlando, FL. Contact Bubbles Enterprise for repairs, new installations, and emergency services. Call (407) 715-1790.",
    openGraph: {
        title: "Contact Bubbles Enterprise | Free Soffit Estimate",
        description: "Request a free estimate or call us directly for soffit and fascia services across Central Florida.",
        url: "https://bubblesenterprise.com/contact",
    },
    alternates: {
        canonical: "https://bubblesenterprise.com/contact",
        languages: {
            en: "https://bubblesenterprise.com/contact",
            es: "https://bubblesenterprise.com/es/contact",
            pt: "https://bubblesenterprise.com/pt/contact",
            "x-default": "https://bubblesenterprise.com/contact",
        },
    },
};

const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://bubblesenterprise.com" },
        { "@type": "ListItem", position: 2, name: "Contact", item: "https://bubblesenterprise.com/contact" },
    ],
};

const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": "https://bubblesenterprise.com/contact#page",
    url: "https://bubblesenterprise.com/contact",
    name: "Contact Bubbles Enterprise — Free Soffit & Fascia Estimate",
    description: "Request a free on-site soffit and fascia estimate in Orlando and Central Florida. Same-week scheduling available.",
    dateModified: "2026-03-05",
    mainEntity: {
        "@type": "LocalBusiness",
        "@id": "https://bubblesenterprise.com/#business",
    },
    potentialAction: {
        "@type": "ReserveAction",
        name: "Request Free Estimate",
        target: {
            "@type": "EntryPoint",
            urlTemplate: "https://bubblesenterprise.com/contact",
            inLanguage: "en-US",
            actionPlatform: ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform"],
        },
    },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            {children}
        </>
    );
}
