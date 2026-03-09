import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Project Gallery — Soffit & Fascia Work | Bubbles Enterprise",
    description: "Real soffit and fascia project photos across Orlando and Central Florida. See our workmanship on residential installations, new builds, and repair projects.",
    openGraph: {
        title: "Soffit & Fascia Project Gallery | Bubbles Enterprise Orlando",
        description: "Real photos from real projects — aluminum and vinyl soffit installations across Central Florida.",
        url: "https://bubblesenterprise.com/gallery",
        images: [{ url: "https://bubblesenterprise.com/images/works/IMG_3511.webp", width: 1200, height: 800, alt: "Completed soffit installation project in Orlando FL" }],
    },
    alternates: {
        canonical: "https://bubblesenterprise.com/gallery",
        languages: {
            en: "https://bubblesenterprise.com/gallery",
            es: "https://bubblesenterprise.com/es/gallery",
            pt: "https://bubblesenterprise.com/pt/gallery",
            "x-default": "https://bubblesenterprise.com/gallery",
        },
    },
};

const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://bubblesenterprise.com" },
        { "@type": "ListItem", position: 2, name: "Gallery", item: "https://bubblesenterprise.com/gallery" },
    ],
};

const schema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "@id": "https://bubblesenterprise.com/gallery#gallery",
    "name": "Bubbles Enterprise Soffit Project Gallery",
    "description": "Portfolio of soffit and fascia installation, removal & replacement, and repair projects in Orlando and Central Florida.",
    "dateModified": "2026-03-05",
    "url": "https://bubblesenterprise.com/gallery",
    "provider": { "@id": "https://bubblesenterprise.com/#business" },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            {children}
        </>
    );
}

