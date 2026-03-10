import type { Metadata } from "next";
import TestimonialsClient from "./TestimonialsClient";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "testimonials" });
    return {
        title: t("title"),
        description: t("subtitle"),
        openGraph: {
            title: t("title"),
            description: t("subtitle"),
            url: "https://bubblesenterprise.com/testimonials",
        },
        alternates: {
            canonical: locale === "en" ? "https://bubblesenterprise.com/testimonials" : `https://bubblesenterprise.com/${locale}/testimonials`,
            languages: {
                en: "https://bubblesenterprise.com/testimonials",
                es: "https://bubblesenterprise.com/es/testimonials",
                pt: "https://bubblesenterprise.com/pt/testimonials",
                "x-default": "https://bubblesenterprise.com/testimonials",
            },
        },
    };
}

const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://bubblesenterprise.com/#business",
    dateModified: "2026-03-05",
    aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "7",
        bestRating: "5",
        worstRating: "1",
    },
    review: [
        {
            "@type": "Review",
            author: { "@type": "Person", name: "Camila Rodriguez" },
            datePublished: "2025-02-10",
            reviewBody: "Eduardo was a total pro. He kept everything spotless while installing the new soffits. It completely changed the look of my house! Didn't try to upsell me. 10/10 would recommend.",
            reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        },
        {
            "@type": "Review",
            author: { "@type": "Person", name: "Thiago Silva" },
            datePublished: "2025-01-15",
            reviewBody: "Had a raccoon trying to move into my attic through the soffit. Marcos came out the same day and reinforced it so nothing's getting back in. Really appreciate the fast help!",
            reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        },
        {
            "@type": "Review",
            author: { "@type": "Person", name: "Maria Gonzales" },
            datePublished: "2024-12-20",
            reviewBody: "Ana was so patient with all my questions about vinyl vs aluminum. The crew was on time and polite. Great experience from the phone call to the finished job.",
            reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        },
        {
            "@type": "Review",
            author: { "@type": "Person", name: "João Pereira" },
            datePublished: "2025-02-04",
            reviewBody: "Eduardo and Marcos are a dream team! They replaced all the fascia on my two-story home in this heat and didn't cut any corners.",
            reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        },
        {
            "@type": "Review",
            author: { "@type": "Person", name: "Sofia Costa" },
            datePublished: "2024-12-15",
            reviewBody: "Prices were fair, no hidden fees. Just good honest work. My neighbor recommended them and I'm glad I listened. The repair blends in perfectly with the existing soffit.",
            reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        },
        {
            "@type": "Review",
            author: { "@type": "Person", name: "Carlos Mendez" },
            datePublished: "2024-11-20",
            reviewBody: "Ana Santos made scheduling a breeze. I had to reschedule twice because of work and she was so understanding. The Bubbles crew was in and out in one day. Five stars!",
            reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        },
        {
            "@type": "Review",
            author: { "@type": "Person", name: "Mateus Oliveira" },
            datePublished: "2024-10-30",
            reviewBody: "If you need soffit work, ask for Eduardo. The attention to detail is next level. My house looks brand new again. Thanks Bubbles Enterprise for the amazing work!",
            reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        },
    ],
};

export default async function TestimonialsPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": locale === "en" ? "https://bubblesenterprise.com" : `https://bubblesenterprise.com/${locale}` },
            { "@type": "ListItem", "position": 2, "name": "Testimonials", "item": locale === "en" ? "https://bubblesenterprise.com/testimonials" : `https://bubblesenterprise.com/${locale}/testimonials` },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
            />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <TestimonialsClient />
        </>
    );
}
