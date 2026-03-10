import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Shield, Zap, Users, DollarSign, Leaf, Star } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "about" });
    return {
        title: t("title"),
        description: t("subtitle"),
        openGraph: {
            title: t("title"),
            description: t("subtitle"),
            url: "https://bubblesenterprise.com/about",
        },
        alternates: {
            canonical: locale === "en" ? "https://bubblesenterprise.com/about" : `https://bubblesenterprise.com/${locale}/about`,
            languages: {
                en: "https://bubblesenterprise.com/about",
                es: "https://bubblesenterprise.com/es/about",
                pt: "https://bubblesenterprise.com/pt/about",
                "x-default": "https://bubblesenterprise.com/about",
            },
        },
    };
}

const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": "https://bubblesenterprise.com/about#page",
    url: "https://bubblesenterprise.com/about",
    name: "About Bubbles Enterprise",
    dateModified: "2026-03-05",
    mainEntity: {
        "@id": "https://bubblesenterprise.com/#business",
        knowsAbout: ["Aluminum Soffit", "Vinyl Soffit", "Fascia Repair", "Roof Ventilation", "IRC 806 Compliance"],
    },
};

const statIcons = [
    <Shield key="shield" className="w-5 h-5" />,
    <Zap key="zap" className="w-5 h-5" />,
    <Star key="star" className="w-5 h-5" />,
    <CheckCircle2 key="check" className="w-5 h-5" />,
];
const statValues = ["500+", "1–3", "100%", "30+"];
const statColors = ["text-blue-400", "text-yellow-400", "text-green-400", "text-purple-400"];

const valueIcons = [
    { icon: <CheckCircle2 className="w-7 h-7" />, bg: "bg-blue-600" },
    { icon: <Users className="w-7 h-7" />, bg: "bg-green-600" },
    { icon: <Zap className="w-7 h-7" />, bg: "bg-purple-600" },
    { icon: <DollarSign className="w-7 h-7" />, bg: "bg-orange-600" },
    { icon: <Shield className="w-7 h-7" />, bg: "bg-red-600" },
    { icon: <Leaf className="w-7 h-7" />, bg: "bg-teal-600" },
];

const certIcons = ["📋", "🏆", "⚡", "🛡️"];

export default async function AboutPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "about" });
const breadcrumbSchema = {        "@context": "https://schema.org",        "@type": "BreadcrumbList",        "itemListElement": [            { "@type": "ListItem", "position": 1, "name": "Home", "item": locale === "en" ? "https://bubblesenterprise.com" : `https://bubblesenterprise.com/${locale}` },            { "@type": "ListItem", "position": 2, "name": "About", "item": locale === "en" ? "https://bubblesenterprise.com/about" : `https://bubblesenterprise.com/${locale}/about` },        ],    };

    const lp = (path: string) => locale === "en" ? path : `/${locale}${path}`;

    const stats = [
        { value: statValues[0], label: t("stat1Label"), icon: statIcons[0], color: statColors[0] },
        { value: statValues[1], label: t("stat2Label"), icon: statIcons[1], color: statColors[1] },
        { value: statValues[2], label: t("stat3Label"), icon: statIcons[2], color: statColors[2] },
        { value: statValues[3], label: t("stat4Label"), icon: statIcons[3], color: statColors[3] },
    ];

    const values = [
        { ...valueIcons[0], title: t("value1Title"), desc: t("value1Desc") },
        { ...valueIcons[1], title: t("value2Title"), desc: t("value2Desc") },
        { ...valueIcons[2], title: t("value3Title"), desc: t("value3Desc") },
        { ...valueIcons[3], title: t("value4Title"), desc: t("value4Desc") },
        { ...valueIcons[4], title: t("value5Title"), desc: t("value5Desc") },
        { ...valueIcons[5], title: t("value6Title"), desc: t("value6Desc") },
    ];

    const timeline = [
        { phase: t("timeline1Phase"), desc: t("timeline1Desc") },
        { phase: t("timeline2Phase"), desc: t("timeline2Desc") },
        { phase: t("timeline3Phase"), desc: t("timeline3Desc") },
        { phase: t("timeline4Phase"), desc: t("timeline4Desc") },
        { phase: t("timeline5Phase"), desc: t("timeline5Desc") },
    ];

    const builders = [
        { label: "KB Home", role: t("kbRole") },
        { label: "DR Horton", role: t("drHortonRole") },
        { label: "ABC Supply", role: t("abcRole") },
    ];

    const certs = [
        { label: t("cert1Label"), sub: t("cert1Sub"), icon: certIcons[0] },
        { label: t("cert2Label"), sub: t("cert2Sub"), icon: certIcons[1] },
        { label: t("cert3Label"), sub: t("cert3Sub"), icon: certIcons[2] },
        { label: t("cert4Label"), sub: t("cert4Sub"), icon: certIcons[3] },
    ];

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <div className="flex flex-col min-h-screen">

                {/* ── DARK HERO ── */}
                <section className="relative overflow-hidden bg-bubble-navy min-h-[80vh] flex items-center py-24">
                    <div className="absolute inset-0 opacity-[0.07]">
                        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <defs>
                                <pattern id="grid-about" width="10" height="10" patternUnits="userSpaceOnUse">
                                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                                </pattern>
                            </defs>
                            <rect width="100" height="100" fill="url(#grid-about)" />
                        </svg>
                    </div>
                    <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

                    <div className="container mx-auto px-4 max-w-7xl relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest mb-8">
                                <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                                {t("heroBadge")}
                            </div>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6 leading-[1.05]">
                                {t("heroTitle1")}<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                                    {t("heroTitle2")}
                                </span>
                                <br />
                                {t("heroTitle3")}
                            </h1>
                            <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
                                {t("heroSubtitle")}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href={lp("/contact")} className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-bubble-navy font-bold hover:bg-blue-50 transition hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.15)]">
                                    {t("heroCta1")} <ArrowRight className="w-4 h-4" />
                                </Link>
                                <Link href={lp("/gallery")} className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 border border-white/20 text-white font-bold hover:bg-white/20 transition">
                                    {t("heroCta2")}
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── BENTO STATS GRID ── */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                            {stats.map((s, i) => (
                                <AnimatedSection key={i} from="scale" delay={i * 80}>
                                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition-all group text-center">
                                        <div className={`flex justify-center mb-3 ${s.color} opacity-70 group-hover:opacity-100 transition-opacity`}>{s.icon}</div>
                                        <div className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-1">{s.value}</div>
                                        <div className="text-sm text-gray-500 font-medium">{s.label}</div>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── BENTO GRID — Story + Mission + Promise ── */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className="grid lg:grid-cols-3 gap-4">

                            <AnimatedSection from="left" className="lg:col-span-2">
                                <div className="bg-gray-50 rounded-3xl p-10 border border-gray-100 h-full">
                                    <span className="text-xs font-extrabold uppercase tracking-widest text-bubble-primary mb-4 block">{t("storyTag")}</span>
                                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                                        {t("storyTitle")}
                                    </h2>
                                    <div className="space-y-4 text-gray-600 leading-relaxed">
                                        <p><strong className="text-gray-900">Bubbles Enterprise</strong> {t("storyP1")}</p>
                                        <p>{t("storyP2")}</p>
                                        <p>{t("storyP3")}</p>
                                    </div>
                                    <Link href={lp("/gallery")} className="inline-flex items-center gap-2 mt-8 text-bubble-primary font-bold hover:underline">
                                        {t("storyGalleryLink")} <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </AnimatedSection>

                            <div className="flex flex-col gap-4">
                                <div className="bg-bubble-navy text-white rounded-3xl p-8 flex-1">
                                    <h3 className="text-lg font-extrabold mb-3 text-blue-300 uppercase tracking-wider text-xs">{t("missionLabel")}</h3>
                                    <p className="text-white/80 leading-relaxed text-sm">{t("missionText")}</p>
                                </div>
                                <div className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white rounded-3xl p-8 flex-1">
                                    <h3 className="text-lg font-extrabold mb-3 text-blue-100 uppercase tracking-wider text-xs">{t("promiseLabel")}</h3>
                                    <p className="text-white/90 leading-relaxed text-sm">{t("promiseText")}</p>
                                </div>
                                <div className="bg-gray-900 text-white rounded-3xl p-8 flex-1">
                                    <blockquote className="italic text-white/80 text-sm leading-relaxed mb-3">
                                        &ldquo;{t("quoteText")}&rdquo;
                                    </blockquote>
                                    <p className="font-bold text-white text-sm">{t("quoteAuthor")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── COMPACT TIMELINE ── */}
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="text-center mb-14">
                            <span className="text-xs font-extrabold uppercase tracking-widest text-bubble-primary">{t("journeyTag")}</span>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3">{t("journeyTitle")}</h2>
                        </div>
                        <div className="relative">
                            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block" />
                            <div className="space-y-8">
                                {timeline.map((item, i) => (
                                    <AnimatedSection key={i} from="left" delay={i * 60}>
                                        <div className="flex gap-6 items-start">
                                            <div className="shrink-0 w-12 h-12 rounded-full bg-bubble-primary text-white flex items-center justify-center text-lg font-extrabold shadow-lg z-10 relative">
                                                {i + 1}
                                            </div>
                                            <div className="bg-white rounded-2xl p-6 flex-1 shadow-sm border border-gray-100 hover:shadow-md transition">
                                                <p className="text-xs font-extrabold text-bubble-primary uppercase tracking-widest mb-1">{item.phase}</p>
                                                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                                            </div>
                                        </div>
                                    </AnimatedSection>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── 6 VALUES GRID ── */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className="text-center mb-14">
                            <span className="text-xs font-extrabold uppercase tracking-widest text-bubble-primary">{t("valuesTag")}</span>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3">{t("valuesTitle")}</h2>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {values.map((v, i) => (
                                <AnimatedSection key={i} from="bottom" delay={i * 80}>
                                    <div className="group bg-gray-50 hover:bg-white border border-gray-100 hover:border-gray-200 hover:shadow-lg rounded-2xl p-8 transition-all hover:-translate-y-0.5 h-full">
                                        <div className={`w-14 h-14 ${v.bg} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                                            {v.icon}
                                        </div>
                                        <h3 className="text-lg font-extrabold text-gray-900 mb-3">{v.title}</h3>
                                        <p className="text-gray-600 leading-relaxed text-sm">{v.desc}</p>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── BUILDER TRUST + CERTS ── */}
                <section className="py-20 bg-bubble-navy text-white">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <span className="text-xs font-extrabold uppercase tracking-widest text-blue-400 mb-4 block">{t("buildersTag")}</span>
                                <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
                                    {t("buildersTitle1")}<br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                                        {t("buildersTitle2")}
                                    </span>
                                </h2>
                                <p className="text-white/60 leading-relaxed mb-8">{t("buildersSubtitle")}</p>
                                <div className="space-y-4">
                                    {builders.map(b => (
                                        <div key={b.label} className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl px-5 py-4 hover:bg-white/10 transition">
                                            <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center shrink-0">
                                                <CheckCircle2 className="w-4 h-4 text-blue-900" />
                                            </div>
                                            <div>
                                                <span className="font-extrabold text-white">{b.label}</span>
                                                <span className="text-white/50 text-sm ml-2">— {b.role}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                {certs.map(c => (
                                    <div key={c.label} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition text-center">
                                        <div className="text-3xl mb-3">{c.icon}</div>
                                        <p className="font-extrabold text-white text-sm">{c.label}</p>
                                        <p className="text-white/40 text-xs mt-1">{c.sub}</p>
                                    </div>
                                ))}
                                <div className="col-span-2">
                                    <Link href={lp("/certifications")} className="flex items-center justify-center gap-2 w-full bg-white/10 border border-white/20 text-white rounded-2xl py-4 font-bold hover:bg-white/20 transition text-sm">
                                        {t("viewCerts")} <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── FINAL CTA ── */}
                <section className="py-24 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white text-center">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <h2 className="text-3xl md:text-5xl font-extrabold mb-6">{t("ctaTitle")}</h2>
                        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">{t("ctaSubtitle")}</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                            <Link href={lp("/contact")} className="bg-yellow-400 text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition shadow-lg inline-flex items-center gap-2">
                                {t("ctaEstimate")} <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link href={lp("/calculator")} className="border-2 border-white/40 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition inline-flex items-center gap-2">
                                {t("ctaCalculate")}
                            </Link>
                        </div>
                        <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
                            {[
                                { v: t("ctaStat1V"), l: t("ctaStat1L") },
                                { v: t("ctaStat2V"), l: t("ctaStat2L") },
                                { v: t("ctaStat3V"), l: t("ctaStat3L") },
                            ].map(i => (
                                <div key={i.l} className="bg-white/10 rounded-xl p-4">
                                    <p className="text-xl font-extrabold text-yellow-400">{i.v}</p>
                                    <p className="text-blue-100 text-xs">{i.l}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
