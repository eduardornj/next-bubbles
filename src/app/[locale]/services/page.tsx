import type { Metadata } from "next";
import Link from "next/link";
import {
    CheckCircle2, ShieldAlert, Wrench, RefreshCw, Home,
    ArrowRight, PhoneCall, ChevronDown, Layers, Wind,
    Clock, Star, Calculator
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "services" });
    return {
        title: t("metaTitle"),
        description: t("metaDesc"),
        openGraph: {
            title: t("metaOgTitle"),
            description: t("metaOgDesc"),
            url: "https://bubblesenterprise.com/services",
        },
        alternates: {
            canonical: locale === "en" ? "https://bubblesenterprise.com/services" : `https://bubblesenterprise.com/${locale}/services`,
            languages: {
                en: "https://bubblesenterprise.com/services",
                es: "https://bubblesenterprise.com/es/services",
                pt: "https://bubblesenterprise.com/pt/services",
                "x-default": "https://bubblesenterprise.com/services",
            },
        },
    };
}

// ── Schemas for AI discoverability ───────────────────────────────────────────
const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Soffit & Fascia Services",
    "@id": "https://bubblesenterprise.com/services#service",
    "dateModified": "2026-03-05",
    "provider": { "@id": "https://bubblesenterprise.com/#business" },
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Soffit Services",
        "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Soffit Repairs", "url": "https://bubblesenterprise.com/repairs", "description": "Storm damage, panel replacement, ventilation restoration. Fast turnaround." } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Remove & Replace", "url": "https://bubblesenterprise.com/remove-replace", "description": "Complete soffit system replacement. 1-story: $6/LF, 2-story: $7/LF labor." } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "New Construction", "url": "https://bubblesenterprise.com/new-construction", "description": "IRC 806 compliant soffit installation for new builds. $4/LF labor." } }
        ]
    }
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        { "@type": "Question", "name": "How long will my soffit project take?", "acceptedAnswer": { "@type": "Answer", "text": "Most homes are done in 1-3 days. Simple repairs are often same-day. A full Remove & Replace on a two-story takes about 3 days." } },
        { "@type": "Question", "name": "Should I choose aluminum or vinyl soffit?", "acceptedAnswer": { "@type": "Answer", "text": "Aluminum lasts 20-30 years, is fire-resistant, and handles Florida's UV and hurricanes. Vinyl costs less upfront and works great for budget projects. Most Orlando homeowners choose aluminum." } },
        { "@type": "Question", "name": "What warranty do you offer on soffit installation?", "acceptedAnswer": { "@type": "Answer", "text": "Every installation comes with a 1-year workmanship guarantee. Aluminum soffit also carries manufacturer warranties up to 30 years." } },
        { "@type": "Question", "name": "How much does soffit replacement cost in Orlando?", "acceptedAnswer": { "@type": "Answer", "text": "Every home is different — cost depends on material, linear footage, and project type. Use our free calculator at bubblesenterprise.com/calculator for an instant estimate, or contact us for a personalized quote." } },
        { "@type": "Question", "name": "Why does soffit need ventilation in Florida?", "acceptedAnswer": { "@type": "Answer", "text": "Florida's heat and humidity trap moisture in your attic. Proper soffit ventilation prevents mold, wood rot, and can cut cooling costs by 15-25%." } },
        { "@type": "Question", "name": "Do you only do soffit and fascia?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — soffit and fascia is all we do. No roofing, no gutters, no painting. That focus is why we're faster and more precise than general contractors." } },
        { "@type": "Question", "name": "What if there is rotten wood behind my soffit?", "acceptedAnswer": { "@type": "Answer", "text": "We stop work and show you the damage. A licensed carpenter replaces the rotten wood, then we continue installation. We won't install over bad structure." } },
        { "@type": "Question", "name": "Can I finance my soffit project?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Through Acorn Finance, 30+ lenders, credit scores as low as 550, terms up to 144 months. Visit our financing page for details." } }
    ]
};

// ── Color maps ────────────────────────────────────────────────────────────────
const colorMap: Record<string, string> = {
    red: "from-red-500 to-orange-600",
    green: "from-emerald-500 to-green-600",
    blue: "from-blue-500 to-indigo-600",
    indigo: "from-indigo-500 to-violet-600",
};
const bgMap: Record<string, string> = {
    red: "bg-red-50 border-red-200 hover:border-red-400",
    green: "bg-emerald-50 border-emerald-200 hover:border-emerald-400",
    blue: "bg-blue-50 border-bubble-primary/30 hover:border-bubble-primary",
    indigo: "bg-indigo-50 border-indigo-200 hover:border-indigo-400",
};
const labelMap: Record<string, string> = {
    red: "bg-red-100 text-red-700",
    green: "bg-emerald-100 text-emerald-700",
    blue: "bg-blue-100 text-blue-700",
    indigo: "bg-indigo-100 text-indigo-700",
};
const checkMap: Record<string, string> = {
    red: "text-red-500",
    green: "text-emerald-500",
    blue: "text-bubble-primary",
    indigo: "text-indigo-500",
};

export default async function ServicesPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "services" });
    const lp = (path: string) => locale === "en" ? path : `/${locale}${path}`;
const breadcrumbSchema = {        "@context": "https://schema.org",        "@type": "BreadcrumbList",        "itemListElement": [            { "@type": "ListItem", "position": 1, "name": "Home", "item": locale === "en" ? "https://bubblesenterprise.com" : `https://bubblesenterprise.com/${locale}` },            { "@type": "ListItem", "position": 2, "name": "Services", "item": locale === "en" ? "https://bubblesenterprise.com/services" : `https://bubblesenterprise.com/${locale}/services` },        ],    };

    const services = [
        {
            id: "repairs",
            href: lp("/repairs"),
            icon: Wrench,
            color: "red",
            label: t("svc1Label"),
            title: t("svc1Title"),
            description: t("svc1Desc"),
            features: [t("svc1f1"), t("svc1f2"), t("svc1f3"), t("svc1f4"), t("svc1f5")],
            cta: t("svc1Cta"),
        },
        {
            id: "remove-replace",
            href: lp("/remove-replace"),
            icon: RefreshCw,
            color: "blue",
            label: t("svc2Label"),
            title: t("svc2Title"),
            description: t("svc2Desc"),
            features: [t("svc2f1"), t("svc2f2"), t("svc2f3"), t("svc2f4"), t("svc2f5")],
            cta: t("svc2Cta"),
        },
        {
            id: "new-construction",
            href: lp("/new-construction"),
            icon: Home,
            color: "indigo",
            label: t("svc3Label"),
            title: t("svc3Title"),
            description: t("svc3Desc"),
            features: [t("svc3f1"), t("svc3f2"), t("svc3f3"), t("svc3f4"), t("svc3f5")],
            cta: t("svc3Cta"),
        },
    ];

    const materials = [
        {
            href: lp("/materials/aluminum"),
            color: "blue",
            title: t("mat1Title"),
            tagline: t("mat1Tagline"),
            stats: [{ n: t("mat1Stat1N"), label: t("mat1Stat1L") }, { n: t("mat1Stat2N"), label: t("mat1Stat2L") }],
            features: [t("mat1f1"), t("mat1f2"), t("mat1f3"), t("mat1f4"), t("mat1f5")],
            badge: t("mat1Badge"),
            cta: t("mat1Cta"),
        },
        {
            href: lp("/materials/vinyl"),
            color: "green",
            title: t("mat2Title"),
            tagline: t("mat2Tagline"),
            stats: [{ n: t("mat2Stat1N"), label: t("mat2Stat1L") }, { n: t("mat2Stat2N"), label: t("mat2Stat2L") }],
            features: [t("mat2f1"), t("mat2f2"), t("mat2f3"), t("mat2f4"), t("mat2f5")],
            badge: t("mat2Badge"),
            cta: t("mat2Cta"),
        },
    ];

    const process = [
        { n: t("proc1N"), title: t("proc1Title"), body: t("proc1Body") },
        { n: t("proc2N"), title: t("proc2Title"), body: t("proc2Body") },
        { n: t("proc3N"), title: t("proc3Title"), body: t("proc3Body") },
        { n: t("proc4N"), title: t("proc4Title"), body: t("proc4Body") },
    ];

    const faqs = [
        { q: t("faq1q"), a: t("faq1a") },
        { q: t("faq2q"), a: t("faq2a") },
        { q: t("faq3q"), a: t("faq3a") },
        { q: t("faq4q"), a: t("faq4a") },
        { q: t("faq5q"), a: t("faq5a") },
        { q: t("faq6q"), a: t("faq6a") },
        { q: t("faq7q"), a: t("faq7a") },
        { q: t("faq8q"), a: t("faq8a") },
    ];

    const trustItems = [
        { icon: Star, label: t("trust1") },
        { icon: Clock, label: t("trust2") },
        { icon: Wind, label: t("trust3") },
        { icon: Layers, label: t("trust4") },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* ── HERO ─────────────────────────────────────────────────── */}
            <section className="relative overflow-hidden py-24 lg:py-32 bg-gradient-to-br from-gray-950 via-bubble-navy to-gray-900 text-white">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[100px] pointer-events-none" aria-hidden />
                <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none" aria-hidden />

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <AnimatedSection>
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-xs font-bold mb-6 uppercase tracking-widest">
                            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" aria-hidden />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
                            {t("heroBadge")}
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                            {t("heroTitle1")}<br />
                            <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                                {t("heroTitle2")}
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-blue-100/90 max-w-2xl mx-auto mb-10 leading-relaxed">
                            {t("heroSubtitle")}
                        </p>
                    </AnimatedSection>

                    <AnimatedSection delay={150}>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="#services" className="inline-flex items-center justify-center gap-2 bg-white text-bubble-navy px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition shadow-lg text-base">
                                {t("heroExplore")} <ChevronDown className="w-4 h-4" />
                            </Link>
                            <Link href={lp("/contact")} className="inline-flex items-center justify-center gap-2 bg-bubble-primary border border-blue-400/50 text-white px-8 py-4 rounded-full font-bold hover:bg-bubble-dark transition shadow-lg text-base">
                                {t("heroQuote")} <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </AnimatedSection>

                    {/* Trust bar */}
                    <AnimatedSection delay={250}>
                        <div className="mt-16 flex flex-wrap justify-center gap-6 md:gap-12">
                            {trustItems.map(({ icon: Icon, label }) => (
                                <div key={label} className="flex items-center gap-2 text-sm text-blue-200 font-medium">
                                    <Icon className="w-4 h-4 text-blue-400" />
                                    {label}
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* ── SCOPE DISCLAIMER ─────────────────────────────────────── */}
            <section className="bg-amber-50 border-b border-amber-100 py-5">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto bg-white rounded-xl border-l-4 border-amber-500 shadow-sm p-5 flex items-start gap-4">
                        <ShieldAlert className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" aria-hidden />
                        <div>
                            <h2 className="font-bold text-gray-900 text-base mb-1">{t("specialtyTitle")}</h2>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                {t("specialtyDesc")}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SERVICES GRID ─────────────────────────────────────────── */}
            <section id="services" className="py-20 md:py-28 bg-white">
                <div className="container mx-auto px-4 max-w-7xl">
                    <AnimatedSection className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">{t("servicesTitle")}</h2>
                        <p className="text-xl text-gray-500 max-w-xl mx-auto">{t("servicesSubtitle")}</p>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                        {services.map((svc, i) => {
                            const Icon = svc.icon;
                            return (
                                <AnimatedSection key={svc.id} delay={i * 100} from="bottom">
                                    <div className={`h-full flex flex-col rounded-2xl border-2 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${bgMap[svc.color]}`}>
                                        <div className="flex items-start justify-between mb-6">
                                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${colorMap[svc.color]} flex items-center justify-center shadow-md`}>
                                                <Icon className="w-7 h-7 text-white" />
                                            </div>
                                            <span className={`text-xs font-bold px-3 py-1 rounded-full ${labelMap[svc.color]}`}>
                                                {svc.label}
                                            </span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{svc.title}</h3>
                                        <p className="text-gray-600 mb-6 leading-relaxed text-sm flex-1">{svc.description}</p>
                                        <ul className="space-y-2.5 mb-8">
                                            {svc.features.map(f => (
                                                <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                                                    <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${checkMap[svc.color]}`} />
                                                    {f}
                                                </li>
                                            ))}
                                        </ul>
                                        <Link
                                            href={svc.href}
                                            className={`mt-auto flex items-center justify-center gap-2 bg-gradient-to-r ${colorMap[svc.color]} text-white py-3.5 rounded-xl font-bold hover:opacity-90 transition text-sm shadow-md`}
                                        >
                                            {svc.cta} <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </AnimatedSection>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── MATERIALS ─────────────────────────────────────────────── */}
            <section className="py-20 bg-gray-50 border-y border-gray-100">
                <div className="container mx-auto px-4 max-w-7xl">
                    <AnimatedSection className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">{t("materialsTitle")}</h2>
                        <p className="text-xl text-gray-500">{t("materialsSubtitle")}</p>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-2 gap-8 items-stretch">
                        {/* ── ALUMINUM — Premium Dark Card ── */}
                        <AnimatedSection delay={0} from="left">
                            <div className="relative h-full flex flex-col rounded-2xl bg-gradient-to-br from-blue-950 via-bubble-navy to-indigo-950 p-8 shadow-2xl overflow-hidden text-white">
                                <div className="absolute top-0 right-0 w-60 h-60 bg-blue-500/15 rounded-full blur-[80px] pointer-events-none" aria-hidden="true" />
                                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-[60px] pointer-events-none" aria-hidden="true" />

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="flex items-start justify-between mb-6">
                                        <div>
                                            <h3 className="text-2xl font-extrabold text-white">{materials[0].title}</h3>
                                            <p className="text-blue-300 text-sm font-medium mt-1">{materials[0].tagline}</p>
                                        </div>
                                        <div className="flex flex-col items-end gap-2">
                                            <span className="text-[10px] font-extrabold px-3 py-1 rounded-full bg-yellow-400 text-blue-950 uppercase tracking-wider">
                                                {t("mat1PopularTag")}
                                            </span>
                                            <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/10 border border-white/20 text-blue-200">
                                                {materials[0].badge}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                        {materials[0].stats.map(s => (
                                            <div key={s.label} className="text-center p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                                                <div className="text-2xl font-extrabold text-white mb-1">{s.n}</div>
                                                <div className="text-xs text-blue-300 font-medium">{s.label}</div>
                                            </div>
                                        ))}
                                    </div>

                                    <ul className="space-y-2.5 mb-8 flex-1">
                                        {materials[0].features.map(f => (
                                            <li key={f} className="flex items-center gap-2.5 text-sm text-blue-100">
                                                <CheckCircle2 className="w-4 h-4 shrink-0 text-yellow-400" />
                                                {f}
                                            </li>
                                        ))}
                                    </ul>

                                    <Link
                                        href={materials[0].href}
                                        className="mt-auto flex items-center justify-center gap-2 bg-white text-bubble-navy py-3.5 rounded-xl font-bold hover:bg-blue-50 transition text-sm shadow-lg"
                                    >
                                        {materials[0].cta} <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* ── VINYL — Green Gradient Card ── */}
                        <AnimatedSection delay={120} from="right">
                            <div className="relative h-full flex flex-col rounded-2xl bg-gradient-to-br from-emerald-950 via-emerald-900 to-green-950 p-8 shadow-2xl overflow-hidden text-white">
                                <div className="absolute top-0 right-0 w-60 h-60 bg-emerald-500/15 rounded-full blur-[80px] pointer-events-none" aria-hidden="true" />
                                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-green-500/10 rounded-full blur-[60px] pointer-events-none" aria-hidden="true" />

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="flex items-start justify-between mb-6">
                                        <div>
                                            <h3 className="text-2xl font-extrabold text-white">{materials[1].title}</h3>
                                            <p className="text-emerald-300 text-sm font-medium mt-1">{materials[1].tagline}</p>
                                        </div>
                                        <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/10 border border-white/20 text-emerald-200">
                                            {materials[1].badge}
                                        </span>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                        {materials[1].stats.map(s => (
                                            <div key={s.label} className="text-center p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                                                <div className="text-2xl font-extrabold text-white mb-1">{s.n}</div>
                                                <div className="text-xs text-emerald-300 font-medium">{s.label}</div>
                                            </div>
                                        ))}
                                    </div>

                                    <ul className="space-y-2.5 mb-8 flex-1">
                                        {materials[1].features.map(f => (
                                            <li key={f} className="flex items-center gap-2.5 text-sm text-emerald-100">
                                                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                                                {f}
                                            </li>
                                        ))}
                                    </ul>

                                    <Link
                                        href={materials[1].href}
                                        className="mt-auto flex items-center justify-center gap-2 bg-white text-emerald-900 py-3.5 rounded-xl font-bold hover:bg-emerald-50 transition text-sm shadow-lg"
                                    >
                                        {materials[1].cta} <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* ── PROCESS ───────────────────────────────────────────────── */}
            <section className="py-20 md:py-28 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <AnimatedSection className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">{t("processTitle")}</h2>
                        <p className="text-xl text-gray-500">{t("processSubtitle")}</p>
                    </AnimatedSection>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {process.map((step, i) => (
                            <AnimatedSection key={step.n} delay={i * 90} from="bottom">
                                <div className="relative text-center p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:border-bubble-primary/30 hover:shadow-lg transition-all group">
                                    <div className="w-16 h-16 bg-gradient-to-br from-bubble-primary to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-md group-hover:scale-110 transition-transform">
                                        <span className="text-white font-extrabold text-xl">{step.n}</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{step.body}</p>
                                    {i < process.length - 1 && (
                                        <div className="hidden lg:block absolute top-12 -right-3 w-6 h-0.5 bg-gray-200" aria-hidden />
                                    )}
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CALCULATOR CTA STRIP ──────────────────────────────────── */}
            <section className="py-12 bg-gradient-to-r from-bubble-navy to-blue-900 text-white">
                <div className="container mx-auto px-4">
                    <AnimatedSection>
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl mx-auto">
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center">
                                    <Calculator className="w-7 h-7 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">{t("calcTitle")}</h3>
                                    <p className="text-blue-300 text-sm">{t("calcSubtitle")}</p>
                                </div>
                            </div>
                            <Link
                                href={lp("/calculator")}
                                className="shrink-0 bg-white text-bubble-navy px-8 py-3.5 rounded-xl font-bold hover:bg-blue-50 transition shadow-xl text-sm"
                            >
                                {t("calcCta")}
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* ── FAQ ───────────────────────────────────────────────────── */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 max-w-3xl">
                    <AnimatedSection className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">{t("faqTitle")}</h2>
                        <p className="text-gray-500">{t("faqSubtitle")}</p>
                    </AnimatedSection>

                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <AnimatedSection key={i} delay={i * 60}>
                                <details className="group bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                                    <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none font-bold text-gray-900 text-base">
                                        {faq.q}
                                        <ChevronDown className="w-5 h-5 text-gray-400 shrink-0 group-open:rotate-180 transition-transform duration-300" />
                                    </summary>
                                    <div className="px-6 pb-6 text-gray-600 leading-relaxed text-sm border-t border-gray-100 pt-4">
                                        {faq.a}
                                    </div>
                                </details>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ───────────────────────────────────────────────────── */}
            <section className="py-20 md:py-28 bg-gradient-to-br from-bubble-primary to-blue-800 text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_60%)]" aria-hidden />
                <div className="container mx-auto px-4 max-w-3xl relative z-10">
                    <AnimatedSection>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                            {t("ctaTitle")}
                        </h2>
                        <p className="text-lg md:text-xl text-blue-200 mb-10 max-w-xl mx-auto">
                            {t("ctaSubtitle")}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href={lp("/contact")}
                                className="inline-flex items-center justify-center gap-2 bg-white text-bubble-navy px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition shadow-xl text-base"
                            >
                                {t("ctaEstimate")} <ArrowRight className="w-5 h-5" />
                            </Link>
                            <a
                                href="tel:4077151790"
                                className="inline-flex items-center justify-center gap-2 bg-white/10 border-2 border-white/40 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition shadow-lg text-base"
                            >
                                <PhoneCall className="w-5 h-5" /> (407) 715-1790
                            </a>
                        </div>
                        <p className="mt-6 text-blue-300 text-sm font-medium">{t("ctaSubtext")}</p>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
}
