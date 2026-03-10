import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, XCircle } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "materialsHub" });
    return {
        title: t("metaTitle"),
        description: t("metaDesc"),
        openGraph: {
            title: t("metaOgTitle"),
            description: t("metaOgDesc"),
            url: "https://bubblesenterprise.com/materials",
        },
        alternates: {
            canonical: locale === "en" ? "https://bubblesenterprise.com/materials" : `https://bubblesenterprise.com/${locale}/materials`,
            languages: {
                en: "https://bubblesenterprise.com/materials",
                es: "https://bubblesenterprise.com/es/materials",
                pt: "https://bubblesenterprise.com/pt/materials",
                "x-default": "https://bubblesenterprise.com/materials",
            },
        },
    };
}

const schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "ItemList",
            "@id": "https://bubblesenterprise.com/materials#itemlist",
            name: "Soffit & Fascia Materials Comparison",
            description: "Comparison of aluminum and vinyl soffit materials for Central Florida homes.",
            dateModified: "2026-03-05",
            url: "https://bubblesenterprise.com/materials",
            itemListElement: [
                {
                    "@type": "ListItem",
                    position: 1,
                    name: "Aluminum Soffit",
                    url: "https://bubblesenterprise.com/materials/aluminum",
                    description: "Fire-resistant, hurricane-rated aluminum soffit. 20-30 year lifespan. 10 color options. The professional standard for Florida new construction.",
                },
                {
                    "@type": "ListItem",
                    position: 2,
                    name: "Vinyl Soffit",
                    url: "https://bubblesenterprise.com/materials/vinyl",
                    description: "Cost-effective vinyl soffit. 15-20 year lifespan. Wider color selection. Good choice for shaded locations and budget-constrained projects.",
                },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": "https://bubblesenterprise.com/materials#faq",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "What is the best soffit material for Florida?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Aluminum is the best soffit material for most Florida homes. It is non-combustible, hurricane-rated, moisture-resistant, and has a 20-30 year lifespan with no maintenance required. Vinyl is an acceptable alternative for budget-constrained projects in shaded locations.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How long does aluminum soffit last vs vinyl in Florida?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Aluminum soffit lasts 20-30 years in Florida. Vinyl soffit lasts 15-20 years under normal conditions, but south-facing vinyl exposed to intense Florida UV may show fading and brittleness in 10-12 years.",
                    },
                },
            ],
        },
    ],
};

export default async function MaterialsHubPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "materialsHub" });
const breadcrumbSchema = {        "@context": "https://schema.org",        "@type": "BreadcrumbList",        "itemListElement": [            { "@type": "ListItem", "position": 1, "name": "Home", "item": locale === "en" ? "https://bubblesenterprise.com" : `https://bubblesenterprise.com/${locale}` },            { "@type": "ListItem", "position": 2, "name": "Materials", "item": locale === "en" ? "https://bubblesenterprise.com/materials" : `https://bubblesenterprise.com/${locale}/materials` },        ],    };
    const lp = (path: string) => locale === "en" ? path : `/${locale}${path}`;

    const comparison = [
        { category: t("cmpCat1"), aluminum: t("cmpAlum1"), vinyl: t("cmpVinyl1"), winner: "aluminum" },
        { category: t("cmpCat2"), aluminum: t("cmpAlum2"), vinyl: t("cmpVinyl2"), winner: "aluminum" },
        { category: t("cmpCat3"), aluminum: t("cmpAlum3"), vinyl: t("cmpVinyl3"), winner: "aluminum" },
        { category: t("cmpCat4"), aluminum: t("cmpAlum4"), vinyl: t("cmpVinyl4"), winner: "aluminum" },
        { category: t("cmpCat5"), aluminum: t("cmpAlum5"), vinyl: t("cmpVinyl5"), winner: "tie" },
        { category: t("cmpCat6"), aluminum: t("cmpAlum6"), vinyl: t("cmpVinyl6"), winner: "aluminum" },
        { category: t("cmpCat7"), aluminum: t("cmpAlum7"), vinyl: t("cmpVinyl7"), winner: "aluminum" },
        { category: t("cmpCat8"), aluminum: t("cmpAlum8"), vinyl: t("cmpVinyl8"), winner: "vinyl" },
        { category: t("cmpCat9"), aluminum: t("cmpAlum9"), vinyl: t("cmpVinyl9"), winner: "vinyl" },
        { category: t("cmpCat10"), aluminum: t("cmpAlum10"), vinyl: t("cmpVinyl10"), winner: "aluminum" },
        { category: t("cmpCat11"), aluminum: t("cmpAlum11"), vinyl: t("cmpVinyl11"), winner: "aluminum" },
    ];

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <div className="flex flex-col min-h-screen">

                {/* ── HERO ──────────────────────────────────────────────── */}
                <section className="py-24 lg:py-28 bg-gradient-to-br from-slate-900 via-indigo-950 to-blue-950 text-white">
                    <div className="container mx-auto px-4 max-w-5xl text-center">
                        <AnimatedSection>
                            <span className="inline-block bg-blue-500/20 border border-blue-400/30 text-blue-200 text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
                                {t("heroBadge")}
                            </span>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                                {t("heroTitle")}
                            </h1>
                            <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
                                {t("heroSubtitle")}
                            </p>
                        </AnimatedSection>
                    </div>
                </section>

                {/* ── MATERIAL CARDS ──────────────────────────────────────── */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <AnimatedSection className="text-center mb-14">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">{t("cardsTitle")}</h2>
                            <p className="text-gray-500 text-lg max-w-2xl mx-auto">{t("cardsSubtitle")}</p>
                        </AnimatedSection>
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Aluminum Card */}
                            <AnimatedSection from="left">
                                <Link
                                    href={lp("/materials/aluminum")}
                                    className="group block bg-gradient-to-br from-blue-900 to-indigo-950 rounded-3xl p-8 text-white hover:shadow-2xl hover:shadow-blue-900/30 transition-all hover:-translate-y-1 relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl" aria-hidden />
                                    <div className="relative z-10">
                                        <div className="flex items-center justify-between mb-6">
                                            <span className="text-xs font-bold bg-blue-500/30 border border-blue-400/30 text-blue-200 px-3 py-1 rounded-full uppercase tracking-widest">
                                                {t("alumBadge")}
                                            </span>
                                            <span className="text-xs bg-green-500 text-white font-bold px-3 py-1 rounded-full">{t("alumInStock")}</span>
                                        </div>
                                        <h2 className="text-3xl font-extrabold mb-3">{t("alumTitle")}</h2>
                                        <p className="text-blue-200 mb-6 leading-relaxed">
                                            {t("alumDesc")}
                                        </p>
                                        <div className="space-y-2.5 mb-8">
                                            {[
                                                t("alumFeat1"),
                                                t("alumFeat2"),
                                                t("alumFeat3"),
                                                t("alumFeat4"),
                                                t("alumFeat5"),
                                                t("alumFeat6"),
                                            ].map(item => (
                                                <div key={item} className="flex items-center gap-2.5 text-sm text-blue-100">
                                                    <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                                                    {item}
                                                </div>
                                            ))}
                                        </div>
                                        <div className="flex items-center gap-2 font-bold group-hover:gap-3 transition-all">
                                            {t("alumLink")} <ArrowRight className="w-5 h-5" />
                                        </div>
                                    </div>
                                </Link>
                            </AnimatedSection>

                            {/* Vinyl Card */}
                            <AnimatedSection from="right">
                                <Link
                                    href={lp("/materials/vinyl")}
                                    className="group block bg-gradient-to-br from-purple-900 to-violet-950 rounded-3xl p-8 text-white hover:shadow-2xl hover:shadow-purple-900/30 transition-all hover:-translate-y-1 relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl" aria-hidden />
                                    <div className="relative z-10">
                                        <div className="flex items-center justify-between mb-6">
                                            <span className="text-xs font-bold bg-purple-500/30 border border-purple-400/30 text-purple-200 px-3 py-1 rounded-full uppercase tracking-widest">
                                                {t("vinylBadge")}
                                            </span>
                                            <span className="text-xs bg-purple-500 text-white font-bold px-3 py-1 rounded-full">{t("vinylOrder")}</span>
                                        </div>
                                        <h2 className="text-3xl font-extrabold mb-3">{t("vinylTitle")}</h2>
                                        <p className="text-purple-200 mb-6 leading-relaxed">
                                            {t("vinylDesc")}
                                        </p>
                                        <div className="space-y-2.5 mb-8">
                                            {[
                                                t("vinylFeat1"),
                                                t("vinylFeat2"),
                                                t("vinylFeat3"),
                                                t("vinylFeat4"),
                                                t("vinylFeat5"),
                                            ].map(item => (
                                                <div key={item} className="flex items-center gap-2.5 text-sm text-purple-100">
                                                    <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                                                    {item}
                                                </div>
                                            ))}
                                            <div className="flex items-center gap-2.5 text-sm text-purple-300">
                                                <XCircle className="w-4 h-4 text-orange-400 shrink-0" />
                                                {t("vinylCon")}
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 font-bold group-hover:gap-3 transition-all">
                                            {t("vinylLink")} <ArrowRight className="w-5 h-5" />
                                        </div>
                                    </div>
                                </Link>
                            </AnimatedSection>
                        </div>
                    </div>
                </section>

                {/* ── COMPARISON TABLE ───────────────────────────────────── */}
                <section className="py-20 bg-slate-50 border-y border-gray-100">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <AnimatedSection className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">{t("compareTitle")}</h2>
                            <p className="text-gray-500 text-lg">{t("compareSubtitle")}</p>
                        </AnimatedSection>
                        <AnimatedSection delay={60}>
                            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
                                <table className="w-full bg-white text-sm">
                                    <thead>
                                        <tr className="border-b-2 border-gray-200">
                                            <th className="text-left p-5 font-bold text-gray-400 uppercase text-xs tracking-wider w-1/3">{t("thCategory")}</th>
                                            <th className="text-center p-5 font-extrabold text-blue-700 uppercase text-xs tracking-wider w-1/3">{t("thAluminum")}</th>
                                            <th className="text-center p-5 font-extrabold text-purple-700 uppercase text-xs tracking-wider w-1/3">{t("thVinyl")}</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {comparison.map((row, i) => (
                                            <tr key={i} className={`hover:bg-gray-50 transition-colors ${row.winner === "tie" ? "" : ""}`}>
                                                <td className="p-4 font-semibold text-gray-700">{row.category}</td>
                                                <td className={`p-4 text-center ${row.winner === "aluminum" ? "text-blue-700 font-bold" : "text-gray-500"}`}>
                                                    <span className="flex items-center justify-center gap-1.5">
                                                        {row.winner === "aluminum" && <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />}
                                                        {row.aluminum}
                                                    </span>
                                                </td>
                                                <td className={`p-4 text-center ${row.winner === "vinyl" ? "text-purple-700 font-bold" : "text-gray-500"}`}>
                                                    <span className="flex items-center justify-center gap-1.5">
                                                        {row.winner === "vinyl" && <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />}
                                                        {row.vinyl}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-xs text-gray-400 mt-3 text-center">
                                {t("compareReadMore")}{" "}
                                <Link href={lp("/blog/aluminum-vs-vinyl-soffit")} className="text-blue-600 hover:underline">
                                    Aluminum vs Vinyl — Complete 2026 Guide →
                                </Link>
                            </p>
                        </AnimatedSection>
                    </div>
                </section>

                {/* ── OUR RECOMMENDATION ─────────────────────────────────── */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <AnimatedSection>
                            <h2 className="text-3xl font-extrabold text-gray-900 mb-8">{t("recTitle")}</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-blue-50 rounded-2xl border border-blue-200 p-7">
                                    <h3 className="font-extrabold text-blue-900 mb-4">{t("recAlumTitle")}</h3>
                                    <ul className="space-y-3">
                                        {[
                                            t("recAlumItem1"),
                                            t("recAlumItem2"),
                                            t("recAlumItem3"),
                                            t("recAlumItem4"),
                                            t("recAlumItem5"),
                                            t("recAlumItem6"),
                                        ].map(item => (
                                            <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                                                <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-purple-50 rounded-2xl border border-purple-200 p-7">
                                    <h3 className="font-extrabold text-purple-900 mb-4">{t("recVinylTitle")}</h3>
                                    <ul className="space-y-3">
                                        {[
                                            t("recVinylItem1"),
                                            t("recVinylItem2"),
                                            t("recVinylItem3"),
                                            t("recVinylItem4"),
                                        ].map(item => (
                                            <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                                                <CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-5 pt-4 border-t border-purple-200">
                                        <p className="text-xs text-purple-700 font-semibold flex items-start gap-2">
                                            <XCircle className="w-4 h-4 shrink-0 mt-0.5 text-orange-500" />
                                            {t("recVinylWarning")}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* ── FAQ ───────────────────────────────────────────────── */}
                <section className="py-16 bg-slate-50 border-t border-gray-100">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <AnimatedSection className="mb-10">
                            <h2 className="text-2xl font-extrabold text-gray-900">{t("faqTitle")}</h2>
                        </AnimatedSection>
                        <div className="space-y-4">
                            {[
                                {
                                    q: t("faq1Q"),
                                    a: t("faq1A"),
                                },
                                {
                                    q: t("faq2Q"),
                                    a: t("faq2A"),
                                },
                            ].map((faq, i) => (
                                <AnimatedSection key={i} delay={i * 60} from="bottom">
                                    <div className="bg-white rounded-2xl border border-gray-200 p-6">
                                        <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── CTA ───────────────────────────────────────────────── */}
                <section className="py-20 bg-gradient-to-br from-bubble-primary to-blue-800 text-white text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.07),transparent_60%)]" aria-hidden />
                    <div className="container mx-auto px-4 max-w-3xl relative z-10">
                        <AnimatedSection>
                            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">{t("ctaTitle")}</h2>
                            <p className="text-lg text-blue-200 mb-8 max-w-xl mx-auto">
                                {t("ctaSubtitle")}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href={lp("/contact")}
                                    className="inline-flex items-center justify-center gap-2 bg-white text-bubble-navy px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition shadow-xl"
                                >
                                    {t("ctaEstimate")} <ArrowRight className="w-5 h-5" />
                                </Link>
                                <Link
                                    href={lp("/calculator")}
                                    className="inline-flex items-center justify-center gap-2 bg-white/10 border-2 border-white/40 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition"
                                >
                                    {t("ctaCalculator")}
                                </Link>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>
            </div>
        </>
    );
}
