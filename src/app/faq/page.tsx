import type { Metadata } from "next";
import FAQClient from "./FAQClient";

export const metadata: Metadata = {
    title: "FAQ — Soffit & Fascia Questions | Bubbles Enterprise Orlando",
    description:
        "Common questions about soffit and fascia repair, costs, warranty, rotten wood policy, and our process in Orlando, FL. Expert answers.",
    openGraph: {
        title: "FAQ — Soffit & Fascia Questions | Bubbles Enterprise",
        description: "Get answers about soffit repair, material choices, pricing, warranty, cancellation policy, and our process in Orlando.",
        url: "https://bubblesenterprise.com/faq",
    },
    alternates: {
        canonical: "https://bubblesenterprise.com/faq",
        languages: {
            en: "https://bubblesenterprise.com/faq",
            es: "https://bubblesenterprise.com/es/faq",
            pt: "https://bubblesenterprise.com/pt/faq",
            "x-default": "https://bubblesenterprise.com/faq",
        },
    },
};

// FAQPage ld+json schema — picked up by Google, Bing, and AI agents via WebMCP
const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    dateModified: "2026-03-05",
    mainEntity: [
        // About Soffit & Fascia
        {
            "@type": "Question",
            name: "What is the difference between soffit and fascia?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Soffit is the exposed surface beneath the overhanging section of a roof eave. Fascia is the vertical finishing edge connected to the ends of the rafters, where the gutter is attached. Together, they protect your home's exterior and provide essential attic ventilation.",
            },
        },
        {
            "@type": "Question",
            name: "Why is soffit ventilation important in Florida?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Proper soffit ventilation allows fresh air into your attic, preventing moisture buildup that causes mold, wood rot, and premature roof failure. In Florida's climate, this is critical for energy efficiency and structural longevity.",
            },
        },
        {
            "@type": "Question",
            name: "Can you repair animal damage to soffits?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Absolutely. Squirrels, raccoons, rats, and birds are common in Florida attics. We repair the damage and reinforce the area to prevent future entry.",
            },
        },
        // Materials & Pricing
        {
            "@type": "Question",
            name: "What materials do you use for soffit installation?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "We use high-quality aluminum (20-30 year lifespan, fire-resistant) and vinyl (10 year lifespan, rot-resistant, cost-effective). We recommend the right material based on your home and budget.",
            },
        },
        {
            "@type": "Question",
            name: "How much does soffit installation cost?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Cost depends on linear footage, overhang depth, material (aluminum vs vinyl), and job type (new construction or remove-and-replace). Typical pricing: $6/LF for 1-story R&R, $7/LF for 2-story. Use the online calculator at bubblesenterprise.com/calculator for an instant estimate.",
            },
        },
        {
            "@type": "Question",
            name: "How long does soffit and fascia installation take?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Most single-story homes take 1-2 days. Two-story homes or full Replace & Remove jobs take 2-3 days. We provide a specific timeline before starting.",
            },
        },
        // Process & Policies
        {
            "@type": "Question",
            name: "What happens if rotten wood is found during installation?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "If we find rotten wood in the sub-fascia or trusses after removing old material, we stop work immediately and notify you. We do not perform structural framing repairs. You will need to hire a licensed carpenter before we can continue.",
            },
        },
        {
            "@type": "Question",
            name: "Will my gutters be reinstalled after the fascia work?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "No. Old gutters will not be reinstalled after removal — they deform and warp upon removal. You will need to hire a specialized gutter company for a new system. We specialize exclusively in Soffit and Fascia.",
            },
        },
        {
            "@type": "Question",
            name: "What about outdoor lights, satellites, and security cameras?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "We remove and reinstall soffit lights as a courtesy. If old fixtures break in our hands, we are not responsible. Antennas and cameras are repositioned but we do not guarantee signal alignment after reinstallation.",
            },
        },
        {
            "@type": "Question",
            name: "How do you handle cleanup after the job?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "We perform a full sweep and magnetic sweep for nails. If insulation falls during soffit replacement, we clean the bulk with a blower. Fine particles in grass are unavoidable in this type of renovation.",
            },
        },
        // Warranty & Payment
        {
            "@type": "Question",
            name: "What does the Bubbles Enterprise warranty cover?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "We offer a 1-Year Workmanship Warranty. It covers any piece that comes loose or falls due to installation error. It does NOT cover storm/hurricane damage, animal damage, or third-party modifications.",
            },
        },
        {
            "@type": "Question",
            name: "When is payment due after the job?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "The final balance is due immediately upon completion and walkthrough, before the crew leaves. The company retains a purchase-money security interest per Chapter 713, Florida Statutes, until full payment is received.",
            },
        },
        {
            "@type": "Question",
            name: "What is your cancellation policy?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "If you cancel after materials have been purchased, a 20% fee of the deposit value is charged to cover the supplier restocking fee and preparation costs. This represents liquidated damages as agreed at booking.",
            },
        },
        {
            "@type": "Question",
            name: "Do you offer free estimates?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. We provide free, no-obligation on-site estimates for all soffit and fascia projects in Orlando and surrounding Central Florida areas. Transparent pricing, no hidden fees.",
            },
        },
        // Service Area
        {
            "@type": "Question",
            name: "What areas do you serve?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "We serve Orlando, Winter Park, Kissimmee, Altamonte Springs, Clermont, Sanford, Oviedo, Lake Mary, Apopka, Maitland, and surrounding Central Florida areas. We also travel to South Florida for larger projects.",
            },
        },
    ],
};

export default function FAQPage() {
    return (
        <>
            {/* FAQPage Schema — indexed by Google Rich Results + AI agents via WebMCP */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        itemListElement: [
                            { "@type": "ListItem", position: 1, name: "Home", item: "https://bubblesenterprise.com" },
                            { "@type": "ListItem", position: 2, name: "FAQ", item: "https://bubblesenterprise.com/faq" },
                        ],
                    }),
                }}
            />
            <FAQClient />
        </>
    );
}
