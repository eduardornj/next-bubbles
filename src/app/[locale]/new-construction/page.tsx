import type { Metadata } from "next";
import Link from "next/link";
import {
    CheckCircle2, ArrowRight, FileText, Factory, ShieldCheck,
    Award, Truck, Home as HomeIcon, PhoneCall,
    Zap, DollarSign, Clock, Thermometer, Wrench
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { getTranslations } from "next-intl/server";

const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "New Construction Soffit & Fascia Installation",
    serviceType: "Soffit and Fascia Installation for New Construction",
    description: "Professional installation of aluminum and vinyl soffit and fascia for new construction homes in Orlando and Central Florida. IRC Section 806 compliant. $4/LF labor rate.",
    dateModified: "2026-03-05",
    "@id": "https://bubblesenterprise.com/new-construction#service",
    provider: { "@id": "https://bubblesenterprise.com/#business" },
    areaServed: [
        { "@type": "City", name: "Orlando", addressRegion: "FL" },
        { "@type": "City", name: "Kissimmee", addressRegion: "FL" },
        { "@type": "City", name: "Winter Park", addressRegion: "FL" },
        { "@type": "City", name: "Clermont", addressRegion: "FL" },
        { "@type": "City", name: "Sanford", addressRegion: "FL" },
    ],
    offers: [
        { "@type": "Offer", name: "Aluminum Soffit, New Construction", description: "IRC 806 ventilation design included. Free on-site estimate.", priceCurrency: "USD" },
        { "@type": "Offer", name: "Vinyl Soffit, New Construction", description: "Cost-effective builder option. Rot and moisture resistant. Free estimate.", priceCurrency: "USD" },
    ],
};

const colorMap: Record<string, string> = {
    blue: "bg-blue-50 border-blue-100",
    green: "bg-emerald-50 border-emerald-100",
    purple: "bg-purple-50 border-purple-100",
    amber: "bg-amber-50 border-amber-100",
    rose: "bg-rose-50 border-rose-100",
    cyan: "bg-cyan-50 border-cyan-100",
};
const iconMap: Record<string, string> = {
    blue: "text-blue-600",
    green: "text-emerald-600",
    purple: "text-purple-600",
    amber: "text-amber-600",
    rose: "text-rose-600",
    cyan: "text-cyan-600",
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "newConstruction" });
    return {
        title: t("metaTitle"),
        description: t("metaDesc"),
        openGraph: {
            title: t("metaOgTitle"),
            description: t("metaOgDesc"),
            url: "https://bubblesenterprise.com/new-construction",
        },
        alternates: {
            canonical: locale === "en" ? "https://bubblesenterprise.com/new-construction" : `https://bubblesenterprise.com/${locale}/new-construction`,
            languages: {
                en: "https://bubblesenterprise.com/new-construction",
                es: "https://bubblesenterprise.com/es/new-construction",
                pt: "https://bubblesenterprise.com/pt/new-construction",
                "x-default": "https://bubblesenterprise.com/new-construction",
            },
        },
    };
}

export default async function NewConstructionPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "newConstruction" });
    const lp = (path: string) => locale === "en" ? path : `/${locale}${path}`;

    const reasons = [
        { icon: FileText, color: "blue", title: t("reason1Title"), body: t("reason1Body") },
        { icon: Factory, color: "green", title: t("reason2Title"), body: t("reason2Body") },
        { icon: ShieldCheck, color: "purple", title: t("reason3Title"), body: t("reason3Body") },
        { icon: Award, color: "amber", title: t("reason4Title"), body: t("reason4Body") },
        { icon: HomeIcon, color: "rose", title: t("reason5Title"), body: t("reason5Body") },
        { icon: Truck, color: "cyan", title: t("reason6Title"), body: t("reason6Body") },
    ];

    const processSteps = [
        { n: "01", title: t("step1Title"), body: t("step1Body") },
        { n: "02", title: t("step2Title"), body: t("step2Body") },
        { n: "03", title: t("step3Title"), body: t("step3Body") },
        { n: "04", title: t("step4Title"), body: t("step4Body") },
        ...(t("step5Title") ? [{ n: "05", title: t("step5Title"), body: t("step5Body") }] : []),
        ...(t("step6Title") ? [{ n: "06", title: t("step6Title"), body: t("step6Body") }] : []),
    ];

    const phases = [
        {
            label: t("phase1Label"),
            color: "blue",
            items: [t("phase1Item1"), t("phase1Item2"), t("phase1Item3"), t("phase1Item4")],
        },
        {
            label: t("phase2Label"),
            color: "green",
            items: [t("phase2Item1"), t("phase2Item2"), t("phase2Item3"), t("phase2Item4")],
        },
        {
            label: t("phase3Label"),
            color: "amber",
            items: [t("phase3Item1"), t("phase3Item2"), t("phase3Item3"), t("phase3Item4")],
        },
    ];

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <div className="flex flex-col min-h-screen">

                {/* ── HERO ─────────────────────────────────────────────── */}
                <section className="relative overflow-hidden py-24 lg:py-32 bg-gradient-to-br from-gray-950 via-indigo-950 to-gray-900 text-white">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[100px]" aria-hidden />
                    <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-blue-500/10 rounded-full blur-[80px]" aria-hidden />
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                        <AnimatedSection>
                            <div className="inline-flex items-center gap-2 bg-indigo-500/20 border border-indigo-400/30 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold mb-6 uppercase tracking-widest">
                                <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" aria-hidden />
                                {t("heroBadge")}
                            </div>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                                {t("heroTitle1")}<br />
                                <span className="bg-gradient-to-r from-indigo-300 to-blue-300 bg-clip-text text-transparent">
                                    {t("heroTitle2")}
                                </span>
                            </h1>
                            <p className="text-lg md:text-xl text-indigo-100/80 max-w-2xl mx-auto mb-10 leading-relaxed">
                                {t("heroSubtitle")}
                            </p>
                        </AnimatedSection>
                        <AnimatedSection delay={130}>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href={lp("/contact")}
                                    className="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full font-bold transition shadow-xl text-base"
                                >
                                    {t("heroQuote")}
                                </Link>
                                <Link
                                    href={lp("/calculator")}
                                    className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition text-base"
                                >
                                    {t("heroEstimate")} <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* ── WHY PROFESSIONAL INSTALLATION ────────────────────── */}
                <section className="py-20 md:py-28 bg-white">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <AnimatedSection className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                                {t("whyTitle")}
                            </h2>
                            <p className="text-xl text-gray-500 max-w-xl mx-auto">
                                {t("whySubtitle")}
                            </p>
                        </AnimatedSection>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {reasons.map((r, i) => {
                                const Icon = r.icon;
                                return (
                                    <AnimatedSection key={i} delay={i * 80} from="bottom">
                                        <div className={`h-full p-8 rounded-2xl border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${colorMap[r.color]}`}>
                                            <Icon className={`w-10 h-10 mb-4 ${iconMap[r.color]}`} />
                                            <h3 className="text-lg font-bold text-gray-900 mb-2">{r.title}</h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">{r.body}</p>
                                        </div>
                                    </AnimatedSection>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* ── CODE & STATS ─────────────────────────────────────── */}
                <section className="py-20 bg-gray-50 border-y border-gray-100">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <AnimatedSection className="text-center mb-14">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">{t("codeTitle")}</h2>
                        </AnimatedSection>
                        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
                            <div className="space-y-6">
                                <AnimatedSection from="left">
                                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
                                        <h3 className="text-xl font-bold text-gray-900 mb-4">{t("ircTitle")}</h3>
                                        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                                            {t("ircDesc")}
                                        </p>
                                        <ul className="space-y-3">
                                            {[t("ircItem1"), t("ircItem2"), t("ircItem3")].map((item, i) => (
                                                <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                                                    <CheckCircle2 className="w-4 h-4 text-bubble-primary shrink-0 mt-0.5" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </AnimatedSection>
                                <AnimatedSection from="left" delay={100}>
                                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
                                        <h3 className="text-xl font-bold text-gray-900 mb-4">{t("ventTitle")}</h3>
                                        <ul className="space-y-3">
                                            {[t("ventItem1"), t("ventItem2"), t("ventItem3"), t("ventItem4"), t("ventItem5")].map((b, i) => (
                                                <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                                                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                                    {b}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </AnimatedSection>
                            </div>

                            <AnimatedSection from="right">
                                <div className="space-y-4">
                                    <h3 className="text-xl font-bold text-gray-900 mb-6">{t("advTitle")}</h3>
                                    {[
                                        { icon: Zap, label: t("advLabel1"), value: t("advValue1"), gradient: "from-emerald-500 to-green-600", bg: "bg-emerald-50", border: "border-emerald-200", text: "text-emerald-700" },
                                        { icon: DollarSign, label: t("advLabel2"), value: t("advValue2"), gradient: "from-emerald-500 to-green-600", bg: "bg-emerald-50", border: "border-emerald-200", text: "text-emerald-700" },
                                        { icon: Clock, label: t("advLabel3"), value: t("advValue3"), gradient: "from-blue-500 to-indigo-600", bg: "bg-blue-50", border: "border-blue-200", text: "text-blue-700" },
                                        { icon: ShieldCheck, label: t("advLabel4"), value: t("advValue4"), gradient: "from-blue-500 to-indigo-600", bg: "bg-blue-50", border: "border-blue-200", text: "text-blue-700" },
                                        { icon: Thermometer, label: t("advLabel5"), value: t("advValue5"), gradient: "from-amber-500 to-orange-600", bg: "bg-amber-50", border: "border-amber-200", text: "text-amber-700" },
                                        { icon: Wrench, label: t("advLabel6"), value: t("advValue6"), gradient: "from-purple-500 to-indigo-600", bg: "bg-purple-50", border: "border-purple-200", text: "text-purple-700" },
                                    ].map((r, i) => {
                                        const Icon = r.icon;
                                        return (
                                            <div key={i} className={`flex items-center gap-4 p-4 rounded-xl border ${r.border} ${r.bg} hover:shadow-md transition-all`}>
                                                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${r.gradient} flex items-center justify-center shrink-0 shadow-sm`}>
                                                    <Icon className="w-5 h-5 text-white" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-sm text-gray-600">{r.label}</p>
                                                </div>
                                                <span className={`text-lg font-extrabold ${r.text} shrink-0`}>{r.value}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </section>

                {/* ── PROCESS ───────────────────────────────────────────── */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <AnimatedSection className="text-center mb-14">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">{t("processTitle")}</h2>
                            <p className="text-gray-500 text-xl">{t("processSubtitle")}</p>
                        </AnimatedSection>
                        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
                            {processSteps.map((step, i) => (
                                <AnimatedSection key={step.n} delay={i * 80} from="bottom">
                                    <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-indigo-200 hover:shadow-lg group transition-all h-full">
                                        <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
                                            <span className="text-white font-extrabold text-base">{step.n}</span>
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                                        <p className="text-gray-600 text-[15px] leading-relaxed">{step.body}</p>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── PHASES ───────────────────────────────────────────── */}
                <section className="py-20 bg-gray-50 border-t border-gray-100">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <AnimatedSection className="text-center mb-14">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">{t("timelineTitle")}</h2>
                            <p className="text-gray-500 text-xl">{t("timelineSubtitle")}</p>
                        </AnimatedSection>
                        <div className="grid md:grid-cols-3 gap-6">
                            {phases.map((phase, i) => (
                                <AnimatedSection key={i} delay={i * 100}>
                                    <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-bubble-primary hover:shadow-xl transition-all h-full">
                                        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                            <span className="w-7 h-7 bg-bubble-primary text-white rounded-full text-xs font-bold flex items-center justify-center shrink-0">{i + 1}</span>
                                            {phase.label}
                                        </h3>
                                        <ul className="space-y-3">
                                            {phase.items.map((item, j) => (
                                                <li key={j} className="flex items-start gap-2.5 text-sm text-gray-700">
                                                    <CheckCircle2 className="w-4 h-4 text-bubble-primary shrink-0 mt-0.5" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── CTA ─────────────────────────────────────────────── */}
                <section className="py-20 bg-gradient-to-br from-indigo-700 to-blue-900 text-white text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.06),transparent_60%)]" aria-hidden />
                    <div className="container mx-auto px-4 max-w-3xl relative z-10">
                        <AnimatedSection>
                            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">{t("ctaTitle")}</h2>
                            <p className="text-lg text-indigo-200 mb-10 max-w-xl mx-auto">
                                {t("ctaSubtitle")}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href={lp("/contact")} className="inline-flex items-center justify-center gap-2 bg-white text-indigo-900 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition shadow-xl text-base">
                                    {t("ctaQuote")} <ArrowRight className="w-5 h-5" />
                                </Link>
                                <a href="tel:4077151790" className="inline-flex items-center justify-center gap-2 bg-white/10 border-2 border-white/40 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition text-base">
                                    <PhoneCall className="w-5 h-5" /> (407) 715-1790
                                </a>
                            </div>
                            <p className="mt-6 text-indigo-300 text-sm font-medium">{t("ctaSubtext")}</p>
                        </AnimatedSection>
                    </div>
                </section>
            </div>
        </>
    );
}
