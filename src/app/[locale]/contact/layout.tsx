import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Script from "next/script";

const BASE = "https://bubblesenterprise.com";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const url = locale === "en" ? `${BASE}/contact` : `${BASE}/${locale}/contact`;
    return {
        title: "Contact Us | Free Soffit & Fascia Estimate | Bubbles Enterprise",
        description: "Get a free soffit and fascia estimate in Orlando, FL. Contact Bubbles Enterprise for repairs, new installations, and emergency services. Call (407) 715-1790.",
        openGraph: {
            title: "Contact Bubbles Enterprise | Free Soffit Estimate",
            description: "Request a free estimate or call us directly for soffit and fascia services across Central Florida.",
            url,
        },
        alternates: {
            canonical: url,
            languages: {
                en: `${BASE}/contact`,
                es: `${BASE}/es/contact`,
                pt: `${BASE}/pt/contact`,
                "x-default": `${BASE}/contact`,
            },
        },
    };
}

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
            {children}
            {/* reCAPTCHA v3 — loaded only on contact pages */}
            <Script
                src="https://www.google.com/recaptcha/api.js?render=6LfcYYosAAAAAFuEjO8kGDIqOjwsXMoKmWgBGyuh"
                strategy="lazyOnload"
            />
        </>
    );
}
