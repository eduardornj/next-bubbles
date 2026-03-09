import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const blogUrl =
        locale === "en"
            ? "https://bubblesenterprise.com/blog"
            : `https://bubblesenterprise.com/${locale}/blog`;
    return {
        title: {
            template: "%s | Bubbles Enterprise Blog",
            default: "Soffit & Fascia Blog | Bubbles Enterprise Orlando",
        },
        description:
            "Expert guides on soffit and fascia installation, repair, materials, and costs for Central Florida homeowners. Written by licensed contractors.",
        openGraph: {
            siteName: "Bubbles Enterprise Blog",
            url: blogUrl,
        },
        alternates: {
            canonical: blogUrl,
            languages: {
                en: "https://bubblesenterprise.com/blog",
                es: "https://bubblesenterprise.com/es/blog",
                pt: "https://bubblesenterprise.com/pt/blog",
                "x-default": "https://bubblesenterprise.com/blog",
            },
        },
    };
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
