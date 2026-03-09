import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, AlertTriangle, Droplets, ShieldCheck, Clock, Phone, Wrench } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "fasciaRepairOrlando" });
    return {
        title: t("metaTitle"),
        description: t("metaDesc"),
        openGraph: {
            title: t("metaOgTitle"),
            description: t("metaOgDesc"),
            url: "https://bubblesenterprise.com/fascia-repair-orlando",
        },
        alternates: {
            canonical: locale === "en" ? "https://bubblesenterprise.com/fascia-repair-orlando" : `https://bubblesenterprise.com/${locale}/fascia-repair-orlando`,
            languages: {
                en: "https://bubblesenterprise.com/fascia-repair-orlando",
                es: "https://bubblesenterprise.com/es/fascia-repair-orlando",
                pt: "https://bubblesenterprise.com/pt/fascia-repair-orlando",
                "x-default": "https://bubblesenterprise.com/fascia-repair-orlando",
            },
        },
    };
}

const schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            "@id": "https://bubblesenterprise.com/fascia-repair-orlando#service",
            name: "Fascia Repair & Replacement — Orlando, FL",
            serviceType: "Fascia Repair, Fascia Board Replacement, Roofline Repair",
            description: "Expert fascia repair and replacement in Orlando, FL. Rotted wood, water damage, storm damage, gutter-related fascia deterioration. Licensed & insured.",
            dateModified: "2026-03-05",
            provider: { "@id": "https://bubblesenterprise.com/#business" },
            areaServed: [
                { "@type": "City", name: "Orlando", addressRegion: "FL" },
                { "@type": "City", name: "Winter Park", addressRegion: "FL" },
                { "@type": "City", name: "Kissimmee", addressRegion: "FL" },
                { "@type": "City", name: "Sanford", addressRegion: "FL" },
                { "@type": "City", name: "Oviedo", addressRegion: "FL" },
                { "@type": "City", name: "Apopka", addressRegion: "FL" },
            ],
            offers: {
                "@type": "Offer",
                description: "Free on-site fascia inspection and estimate. Same-week scheduling available.",
                priceCurrency: "USD",
            },
        },
        {
            "@type": "FAQPage",
            "@id": "https://bubblesenterprise.com/fascia-repair-orlando#faq",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "What is fascia on a house?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Fascia is the vertical board that runs along the edge of your roofline, where the roof meets the outer walls. It's the board your gutters attach to. Fascia protects the roof rafters from water exposure and gives the roofline a clean, finished appearance.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What causes fascia to rot in Orlando?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "In Orlando, fascia rot is primarily caused by clogged or overflowing gutters that push water back against the wood, Florida's intense humidity, and aging wood that loses its protective coating. Homes built before 2000 with original wood fascia are especially vulnerable.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can you repair fascia without replacing the soffit?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes, in many cases. Fascia and soffit are separate components. If only the fascia is damaged, we can replace just the fascia boards and leave the existing soffit panels in place — provided they are still in good condition.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How much does fascia repair cost in Orlando?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Fascia repair in Orlando costs $6–$12 per linear foot installed, depending on material and extent of damage. A typical single-story home with 150–200 linear feet of fascia runs $900–$2,400. Most jobs also include soffit work done at the same time.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Do you reinstall gutters after fascia replacement?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "We do not reinstall old gutters — gutters warp and deform when removed. You will need a gutter company to install new gutters after the fascia work is complete. We specialize exclusively in soffit and fascia.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What is the difference between soffit and fascia?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Soffit is the horizontal surface on the underside of the roof overhang — it faces the ground. Fascia is the vertical board at the front edge of the roofline — it faces outward. They work together: the soffit ventilates your attic, the fascia protects the structural edge and supports your gutters.",
                    },
                },
            ],
        },
        {
            "@type": "HowTo",
            "@id": "https://bubblesenterprise.com/fascia-repair-orlando#process",
            name: "Our Fascia Repair Process",
            description: "How Bubbles Enterprise repairs and replaces fascia boards in Orlando, FL.",
            step: [
                { "@type": "HowToStep", position: 1, name: "Free On-Site Inspection", text: "We inspect the full fascia perimeter, identify rot or damage extent, and check for sub-fascia structural issues." },
                { "@type": "HowToStep", position: 2, name: "Written Estimate", text: "You receive a transparent, itemized quote — labor, material, and linear footage — before any work starts." },
                { "@type": "HowToStep", position: 3, name: "Remove Damaged Fascia", text: "We carefully remove old or rotted fascia boards and inspect the exposed sub-fascia for structural issues." },
                { "@type": "HowToStep", position: 4, name: "Sub-Fascia Check", text: "If structural wood rot is found, we stop and notify you immediately. A licensed carpenter must repair structural wood before we continue." },
                { "@type": "HowToStep", position: 5, name: "Install New Fascia", text: "New aluminum or vinyl fascia is installed, secured properly, and finished to match your home's trim." },
                { "@type": "HowToStep", position: 6, name: "Final Walkthrough & Cleanup", text: "Full site cleanup including magnetic sweep. You inspect the work before we leave." },
            ],
        },
    ],
};

const signIcons = [Droplets, AlertTriangle, Wrench, ShieldCheck];
const signColors: Record<string, { card: string; icon: string }> = {
    blue: { card: "bg-blue-50 border-blue-100", icon: "text-blue-500" },
    orange: { card: "bg-orange-50 border-orange-100", icon: "text-orange-500" },
    red: { card: "bg-red-50 border-red-100", icon: "text-red-500" },
    purple: { card: "bg-purple-50 border-purple-100", icon: "text-purple-500" },
};
const signColorKeys = ["blue", "orange", "red", "purple"];

export default async function FasciaRepairOrlandoPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "fasciaRepairOrlando" });
    const lp = (path: string) => locale === "en" ? path : `/${locale}${path}`;

    const signs = [
        { icon: signIcons[0], color: signColorKeys[0], title: t("sign1Title"), body: t("sign1Body") },
        { icon: signIcons[1], color: signColorKeys[1], title: t("sign2Title"), body: t("sign2Body") },
        { icon: signIcons[2], color: signColorKeys[2], title: t("sign3Title"), body: t("sign3Body") },
        { icon: signIcons[3], color: signColorKeys[3], title: t("sign4Title"), body: t("sign4Body") },
    ];

    const fasciaFacts = [t("fasciaFact1"), t("fasciaFact2"), t("fasciaFact3"), t("fasciaFact4")];

    const vsRows = [
        [t("vsRow1f"), t("vsRow1fascia"), t("vsRow1soffit")],
        [t("vsRow2f"), t("vsRow2fascia"), t("vsRow2soffit")],
        [t("vsRow3f"), t("vsRow3fascia"), t("vsRow3soffit")],
        [t("vsRow4f"), t("vsRow4fascia"), t("vsRow4soffit")],
        [t("vsRow5f"), t("vsRow5fascia"), t("vsRow5soffit")],
        [t("vsRow6f"), t("vsRow6fascia"), t("vsRow6soffit")],
    ];

    const processSteps = [
        { step: "01", title: t("proc1Title"), desc: t("proc1Desc") },
        { step: "02", title: t("proc2Title"), desc: t("proc2Desc") },
        { step: "03", title: t("proc3Title"), desc: t("proc3Desc") },
        { step: "04", title: t("proc4Title"), desc: t("proc4Desc") },
        { step: "05", title: t("proc5Title"), desc: t("proc5Desc") },
    ];

    const faqs = [
        { q: t("faq1q"), a: t("faq1a") },
        { q: t("faq2q"), a: t("faq2a") },
        { q: t("faq3q"), a: t("faq3a") },
        { q: t("faq4q"), a: t("faq4a") },
        { q: t("faq5q"), a: t("faq5a") },
        { q: t("faq6q"), a: t("faq6a") },
    ];

    const cities = ["Orlando", "Winter Park", "Kissimmee", "Sanford", "Oviedo", "Apopka", "Lake Mary", "Altamonte Springs", "Clermont", "Winter Garden", "Maitland", "Casselberry"];

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <div className="flex flex-col min-h-screen">

                {/* ── HERO ─────────────────────────────────────────────── */}
                <section className="py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[120px]" aria-hidden />
                    <div className="container mx-auto px-4 max-w-6xl relative z-10">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <AnimatedSection>
                                <span className="inline-block bg-indigo-500/20 border border-indigo-400/30 px-4 py-2 rounded-full text-xs font-bold mb-6 uppercase tracking-widest">
                                    {t("heroBadge")}
                                </span>
                                <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
                                    {t("heroTitle1")}<br />
                                    <span className="bg-gradient-to-r from-indigo-300 to-blue-300 bg-clip-text text-transparent">
                                        {t("heroTitle2")}
                                    </span>
                                </h1>
                                <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                                    {t("heroSubtitle")}
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link
                                        href={lp("/contact")}
                                        className="inline-flex items-center justify-center gap-2 bg-bubble-primary text-white px-8 py-4 rounded-full font-bold hover:bg-blue-600 transition shadow-lg"
                                    >
                                        {t("heroInspection")}
                                    </Link>
                                    <a
                                        href="tel:4077151790"
                                        className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition"
                                    >
                                        <Phone className="w-5 h-5" /> (407) 715-1790
                                    </a>
                                </div>
                            </AnimatedSection>
                            <AnimatedSection delay={100}>
                                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                                    <h2 className="text-lg font-bold text-white mb-6">{t("whatIsFasciaTitle")}</h2>
                                    <p className="text-slate-300 text-sm leading-relaxed mb-6">
                                        {t("whatIsFasciaDesc")}
                                    </p>
                                    <div className="space-y-3">
                                        {fasciaFacts.map(item => (
                                            <div key={item} className="flex items-center gap-3 text-sm text-slate-300">
                                                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </section>

                {/* ── SIGNS YOU NEED FASCIA REPAIR ─────────────────────── */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <AnimatedSection className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                                {t("signsTitle")}
                            </h2>
                            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                                {t("signsSubtitle")}
                            </p>
                        </AnimatedSection>
                        <div className="grid sm:grid-cols-2 gap-6">
                            {signs.map((s, i) => {
                                const Icon = s.icon;
                                return (
                                    <AnimatedSection key={s.title} delay={i * 80} from="bottom">
                                        <div className={`rounded-2xl p-7 border-2 h-full ${signColors[s.color].card}`}>
                                            <Icon className={`w-10 h-10 mb-4 ${signColors[s.color].icon}`} />
                                            <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">{s.body}</p>
                                        </div>
                                    </AnimatedSection>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* ── FASCIA VS SOFFIT ─────────────────────────────────── */}
                <section className="py-20 bg-slate-50">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <AnimatedSection className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                                {t("vsTitle")}
                            </h2>
                        </AnimatedSection>
                        <AnimatedSection delay={80}>
                            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="bg-slate-900 text-white">
                                            <th className="text-left px-5 py-4 font-semibold rounded-tl-2xl">{t("vsFeature")}</th>
                                            <th className="text-center px-5 py-4 font-semibold text-indigo-300">Fascia</th>
                                            <th className="text-center px-5 py-4 font-semibold text-cyan-300 rounded-tr-2xl">Soffit</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {vsRows.map(([feature, fascia, soffit], i) => (
                                            <tr key={feature} className={`border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
                                                <td className="px-5 py-4 font-medium text-gray-900">{feature}</td>
                                                <td className="px-5 py-4 text-center text-gray-700">{fascia}</td>
                                                <td className="px-5 py-4 text-center text-gray-700">{soffit}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* ── PROCESS ──────────────────────────────────────────── */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <AnimatedSection className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                                {t("processTitle")}
                            </h2>
                            <p className="text-gray-500 text-lg">{t("processSubtitle")}</p>
                        </AnimatedSection>
                        <div className="space-y-4">
                            {processSteps.map((s, i) => (
                                <AnimatedSection key={s.step} delay={i * 80} from="bottom">
                                    <div className="flex gap-6 items-start bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition">
                                        <div className="w-12 h-12 bg-bubble-primary rounded-xl flex items-center justify-center text-white font-extrabold text-sm shrink-0">
                                            {s.step}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 mb-1">{s.title}</h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                                        </div>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── FAQ ──────────────────────────────────────────────── */}
                <section className="py-20 bg-blue-50">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <AnimatedSection className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                                {t("faqTitle")}
                            </h2>
                        </AnimatedSection>
                        <div className="space-y-5">
                            {faqs.map((faq, i) => (
                                <AnimatedSection key={i} delay={i * 50} from="bottom">
                                    <div className="bg-white rounded-2xl p-6 border border-blue-100 shadow-sm">
                                        <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.q}</h3>
                                        <p className="text-gray-600 leading-relaxed text-sm">{faq.a}</p>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── SERVICE AREAS ────────────────────────────────────── */}
                <section className="py-16 bg-white border-t border-gray-100">
                    <div className="container mx-auto px-4 max-w-5xl text-center">
                        <AnimatedSection>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("areasTitle")}</h2>
                            <p className="text-gray-500 mb-8">{t("areasSubtitle")}</p>
                            <div className="flex flex-wrap justify-center gap-3">
                                {cities.map(city => (
                                    <span key={city} className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold border border-blue-100">
                                        {city}, FL
                                    </span>
                                ))}
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* ── CTA ──────────────────────────────────────────────── */}
                <section className="py-20 bg-gradient-to-br from-bubble-primary to-blue-800 text-white text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.07),transparent_60%)]" aria-hidden />
                    <div className="container mx-auto px-4 max-w-3xl relative z-10">
                        <AnimatedSection>
                            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
                                {t("ctaTitle")}
                            </h2>
                            <p className="text-lg text-blue-200 mb-8 max-w-xl mx-auto">
                                {t("ctaSubtitle")}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href={lp("/contact")}
                                    className="inline-flex items-center justify-center gap-2 bg-white text-bubble-navy px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition shadow-xl"
                                >
                                    {t("ctaSchedule")} <ArrowRight className="w-5 h-5" />
                                </Link>
                                <a
                                    href="tel:4077151790"
                                    className="inline-flex items-center justify-center gap-2 bg-white/10 border-2 border-white/40 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition"
                                >
                                    <Phone className="w-5 h-5" /> (407) 715-1790
                                </a>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

            </div>
        </>
    );
}
