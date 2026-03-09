import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "gallery" });
    const url = locale === "en" ? "https://bubblesenterprise.com/gallery" : `https://bubblesenterprise.com/${locale}/gallery`;
    return {
        title: t("metaTitle"),
        description: t("metaDesc"),
        openGraph: {
            title: t("metaOgTitle"),
            description: t("metaOgDesc"),
            url,
            images: [{ url: "https://bubblesenterprise.com/images/works/IMG_3511.webp", width: 1200, height: 800, alt: "Fascia wrap and aluminum soffit installation - residential project in Florida" }],
        },
        alternates: {
            canonical: url,
            languages: {
                en: "https://bubblesenterprise.com/gallery",
                es: "https://bubblesenterprise.com/es/gallery",
                pt: "https://bubblesenterprise.com/pt/gallery",
                "x-default": "https://bubblesenterprise.com/gallery",
            },
        },
    };
}

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
            {children}
        </>
    );
}
