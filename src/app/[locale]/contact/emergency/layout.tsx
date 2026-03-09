import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Emergency Soffit Repair — Same-Day Service | Bubbles Enterprise",
    description: "Emergency soffit repair in Orlando and Central Florida. Same-day response for animal intrusion, storm damage, and open holes. Call (407) 715-1790 now.",
    openGraph: {
        title: "Emergency Soffit Repair — Same-Day | Bubbles Enterprise",
        description: "Open holes, animal intrusion, storm damage — we respond the same day. Serving all of Central Florida. Call (407) 715-1790.",
        url: "https://bubblesenterprise.com/contact/emergency",
    },
    alternates: {
        canonical: "https://bubblesenterprise.com/contact/emergency",
        languages: {
            en: "https://bubblesenterprise.com/contact/emergency",
            es: "https://bubblesenterprise.com/es/contact/emergency",
            pt: "https://bubblesenterprise.com/pt/contact/emergency",
            "x-default": "https://bubblesenterprise.com/contact/emergency",
        },
    },
};

const schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "ContactPage",
            "@id": "https://bubblesenterprise.com/contact/emergency#page",
            url: "https://bubblesenterprise.com/contact/emergency",
            name: "Emergency Soffit Repair Request — Bubbles Enterprise",
            description: "Submit an emergency soffit repair request. Same-day response for animal intrusion, storm damage, and open holes in Orlando and Central Florida.",
            dateModified: "2026-03-05",
            mainEntity: { "@id": "https://bubblesenterprise.com/#business" },
            potentialAction: {
                "@type": "ReserveAction",
                name: "Submit Emergency Repair Request",
                target: {
                    "@type": "EntryPoint",
                    urlTemplate: "https://bubblesenterprise.com/contact/emergency",
                    inLanguage: "en-US",
                    actionPlatform: ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform"],
                },
            },
        },
        {
            "@type": "Service",
            "@id": "https://bubblesenterprise.com/contact/emergency#service",
            name: "Emergency Soffit Repair",
            serviceType: "Emergency Soffit and Fascia Repair",
            description: "Same-day emergency soffit repair for animal intrusion, storm damage, and open holes in Central Florida. Available Monday–Saturday 8am–6pm.",
            provider: { "@id": "https://bubblesenterprise.com/#business" },
            areaServed: { "@type": "State", name: "Florida", addressRegion: "FL" },
            availableChannel: {
                "@type": "ServiceChannel",
                servicePhone: { "@type": "ContactPoint", telephone: "+14077151790", contactType: "emergency" },
                serviceUrl: "https://bubblesenterprise.com/contact/emergency",
            },
        },
    ],
};

export default function EmergencyLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            {children}
        </>
    );
}
