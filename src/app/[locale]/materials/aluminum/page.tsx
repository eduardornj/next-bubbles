import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ArrowRight, Phone, Shield, Zap, Droplets, Wind, PanelTop, CircleDot, Sparkles, Thermometer } from "lucide-react";
// Phone is used in CTA section tel: link
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "materialsAluminum" });
    const basePath = "/materials/aluminum";
    const canonical = locale === "en" ? `https://bubblesenterprise.com${basePath}` : `https://bubblesenterprise.com/${locale}${basePath}`;
    return {
        title: t("metaTitle"),
        description: t("metaDesc"),
        openGraph: {
            title: t("metaOgTitle"),
            description: t("metaOgDesc"),
            url: canonical,
        },
        alternates: {
            canonical,
            languages: {
                en: `https://bubblesenterprise.com${basePath}`,
                es: `https://bubblesenterprise.com/es${basePath}`,
                pt: `https://bubblesenterprise.com/pt${basePath}`,
                "x-default": `https://bubblesenterprise.com${basePath}`,
            },
        },
    };
}

const aluminumColors = [
    { name: "White", inStock: true, img: "images/soffit_aluminum/aluminum-soffit-White-SG.webp" },
    { name: "Black", inStock: true, img: "images/soffit_aluminum/aluminum-soffit-black.webp" },
    { name: "Chocolate Brown", inStock: false, img: "images/soffit_aluminum/aluminum-soffit-Chocolate-Brown.webp" },
    { name: "Beige", inStock: false, img: "images/soffit_aluminum/aluminum-soffit-Beige-MC.webp" },
    { name: "Mocha", inStock: false, img: "images/soffit_aluminum/aluminum-soffit-Mocha.webp" },
    { name: "Pearl Grey", inStock: false, img: "images/soffit_aluminum/aluminum-soffit-Pearl-Grey.webp" },
    { name: "Sandalwood", inStock: false, img: "images/soffit_aluminum/aluminum-soffit-Sandalwood.webp" },
    { name: "Ivory", inStock: false, img: "images/soffit_aluminum/aluminum-soffit-ivory.webp" },
    { name: "Khaki", inStock: false, img: "images/soffit_aluminum/aluminum-soffit-khaki.webp" },
    { name: "Linen", inStock: false, img: "images/soffit_aluminum/aluminum-soffit-linen.webp" },
];

const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://bubblesenterprise.com/materials/aluminum#service",
    name: "Aluminum Soffit Installation",
    serviceType: "Aluminum Soffit and Fascia Installation",
    description: "Premium aluminum soffit installation in Orlando, FL. Fire-resistant, durable 20-30 year lifespan, 10 color options. IRC 806 compliant.",
    dateModified: "2026-03-05",
    provider: { "@id": "https://bubblesenterprise.com/#business" },
    areaServed: [
        { "@type": "City", name: "Orlando", addressRegion: "FL" },
        { "@type": "City", name: "Kissimmee", addressRegion: "FL" },
        { "@type": "City", name: "Winter Park", addressRegion: "FL" },
        { "@type": "City", name: "Sanford", addressRegion: "FL" },
        { "@type": "City", name: "Clermont", addressRegion: "FL" },
    ],
};


export default async function AluminumSoffitPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "materialsAluminum" });
    const lp = (path: string) => locale === "en" ? path : `/${locale}${path}`;
const breadcrumbSchema = {        "@context": "https://schema.org",        "@type": "BreadcrumbList",        "itemListElement": [            { "@type": "ListItem", "position": 1, "name": "Home", "item": locale === "en" ? "https://bubblesenterprise.com" : `https://bubblesenterprise.com/${locale}` },            { "@type": "ListItem", "position": 2, "name": "Materials", "item": locale === "en" ? "https://bubblesenterprise.com/materials" : `https://bubblesenterprise.com/${locale}/materials` },            { "@type": "ListItem", "position": 3, "name": "Aluminum Soffit", "item": locale === "en" ? "https://bubblesenterprise.com/materials/aluminum" : `https://bubblesenterprise.com/${locale}/materials/aluminum` },        ],    };

    const benefits = [
        { icon: Shield, title: t("ben1Title"), body: t("ben1Body") },
        { icon: Zap, title: t("ben2Title"), body: t("ben2Body") },
        { icon: Wind, title: t("ben3Title"), body: t("ben3Body") },
        { icon: Droplets, title: t("ben4Title"), body: t("ben4Body") },
    ];

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <div className="flex flex-col min-h-screen">

                {/* ── HERO ─────────────────────────────────────────────── */}
                <section className="relative overflow-hidden py-24 lg:py-32 bg-gradient-to-br from-blue-950 via-indigo-950 to-gray-950 text-white">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px]" aria-hidden />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[80px]" aria-hidden />
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
                        <AnimatedSection className="text-center">
                            <span className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold mb-6 uppercase tracking-widest">
                                <span className="w-2 h-2 bg-blue-300 rounded-full animate-pulse" aria-hidden />
                                {t("heroBadge")}
                            </span>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                                {t("heroTitle1")}<br />
                                <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                                    {t("heroTitle2")}
                                </span>
                            </h1>
                            <p className="text-lg md:text-xl text-blue-100/80 max-w-2xl mx-auto mb-10 leading-relaxed">
                                {t("heroSubtitle")}
                            </p>
                        </AnimatedSection>
                        <AnimatedSection delay={130} className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="#colors" className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition shadow-xl text-base">
                                {t("heroViewColors")}
                            </a>
                            <Link href={lp("/calculator")} className="inline-flex items-center justify-center gap-2 bg-bubble-primary border border-blue-500/50 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-600 transition shadow-lg text-base">
                                {t("heroEstimate")} <ArrowRight className="w-4 h-4" />
                            </Link>
                        </AnimatedSection>
                    </div>
                </section>

                {/* ── WHY ALUMINUM ─────────────────────────────────────── */}
                <section className="py-20 md:py-28 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                            <AnimatedSection from="left">
                                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                                    {t("whyTitle")}
                                </h2>
                                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                    {t("whyDesc")}
                                </p>

                                {/* Stats */}
                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    <div className="bg-blue-50 p-5 rounded-2xl border border-blue-100 text-center">
                                        <div className="text-3xl font-extrabold text-bubble-primary mb-1">20-30</div>
                                        <div className="text-xs text-gray-600 font-semibold uppercase tracking-wide">{t("statLifespan")}</div>
                                    </div>
                                    <div className="bg-blue-50 p-5 rounded-2xl border border-blue-100 text-center">
                                        <div className="text-3xl font-extrabold text-bubble-primary mb-1">100%</div>
                                        <div className="text-xs text-gray-600 font-semibold uppercase tracking-wide">{t("statRecyclable")}</div>
                                    </div>
                                </div>

                                <ul className="space-y-3">
                                    {[t("feat1"), t("feat2"), t("feat3"), t("feat4"), t("feat5")].map(f => (
                                        <li key={f} className="flex items-center gap-3 text-gray-700 text-sm">
                                            <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                            </AnimatedSection>

                            <AnimatedSection from="right">
                                <div className="bg-gradient-to-br from-blue-900 to-indigo-950 rounded-2xl p-10 text-white text-center shadow-2xl relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl" aria-hidden />
                                    <div className="relative z-10">
                                        <div className="w-20 h-20 bg-white/10 border border-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                                            <Shield className="w-10 h-10 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-bold mb-4">{t("warrantyTitle")}</h3>
                                        <p className="text-blue-100 leading-relaxed mb-6 text-sm">
                                            {t("warrantyDesc")}
                                        </p>
                                        <div className="space-y-2 text-left">
                                            {[
                                                [t("wMaterial"), t("wMaterialVal")],
                                                [t("wLabor"), t("wLaborVal")],
                                                [t("wHurricane"), t("wHurricaneVal")],
                                                [t("wFire"), t("wFireVal")],
                                            ].map(([k, v]) => (
                                                <div key={k} className="flex justify-between py-2 border-b border-white/10 text-sm">
                                                    <span className="text-blue-200">{k}</span>
                                                    <span className="font-bold text-white">{v}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <Link href={lp("/contact")} className="inline-flex items-center gap-2 mt-6 text-blue-300 font-bold hover:text-white text-sm transition">
                                            {t("warrantyLink")} <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </section>

                {/* ── BENEFIT CARDS ────────────────────────────────────── */}
                <section className="py-16 bg-gray-50 border-y border-gray-100">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            {benefits.map((b, i) => {
                                const Icon = b.icon;
                                return (
                                    <AnimatedSection key={b.title} delay={i * 80} from="bottom">
                                        <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-lg transition text-center">
                                            <div className="w-14 h-14 bg-bubble-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                                <Icon className="w-7 h-7 text-bubble-primary" />
                                            </div>
                                            <h3 className="font-bold text-gray-900 mb-2">{b.title}</h3>
                                            <p className="text-gray-500 text-sm leading-relaxed">{b.body}</p>
                                        </div>
                                    </AnimatedSection>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* ── SOLID vs VENTED ──────────────────────────────────── */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                        <AnimatedSection className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">{t("svTitle")}</h2>
                            <p className="text-gray-500 text-xl">{t("svSubtitle")}</p>
                        </AnimatedSection>
                        <div className="grid md:grid-cols-2 gap-6">
                            {/* ── SOLID ALUMINUM ── */}
                            <AnimatedSection from="left">
                                <div className="h-full flex flex-col bg-white rounded-2xl border-2 border-amber-200/60 hover:border-amber-300 hover:shadow-xl transition-all overflow-hidden group">
                                    <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 border-b border-amber-100 text-center">
                                        <div className="w-20 h-20 bg-white rounded-2xl shadow-md flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform border border-amber-100">
                                            <PanelTop className="w-10 h-10 text-amber-600" />
                                        </div>
                                        <h3 className="text-xl font-extrabold text-gray-900">{t("solidTitle")}</h3>
                                        <span className="text-sm text-amber-600 font-medium">{t("solidSub")}</span>
                                    </div>
                                    <div className="p-8 flex flex-col flex-1">
                                        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                                            {t("solidDesc")}
                                        </p>
                                        <div className="space-y-3 mt-auto">
                                            {([
                                                { text: t("solidTag1"), icon: Sparkles },
                                                { text: t("solidTag2"), icon: Shield },
                                                { text: t("solidTag3"), icon: Zap },
                                                { text: t("solidTag4"), icon: Wind },
                                            ] as const).map(({ text, icon: TagIcon }) => (
                                                <div key={text} className="flex items-center gap-3 px-4 py-2.5 bg-amber-50 rounded-xl border border-amber-100">
                                                    <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-amber-200 transition">
                                                        <TagIcon className="w-4 h-4 text-amber-700" />
                                                    </div>
                                                    <span className="text-sm font-medium text-gray-700">{text}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>

                            {/* ── VENTED ALUMINUM ── */}
                            <AnimatedSection from="right">
                                <div className="h-full flex flex-col bg-white rounded-2xl border-2 border-bubble-primary/30 hover:border-bubble-primary hover:shadow-xl transition-all overflow-hidden group relative">
                                    <div className="absolute top-4 right-4 z-10">
                                        <span className="text-[10px] font-extrabold px-3 py-1 rounded-full bg-bubble-primary text-white uppercase tracking-wider shadow-md">
                                            {t("ventedSub")}
                                        </span>
                                    </div>
                                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 border-b border-blue-100 text-center">
                                        <div className="w-20 h-20 bg-white rounded-2xl shadow-md flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform border border-blue-100">
                                            <CircleDot className="w-10 h-10 text-bubble-primary" />
                                        </div>
                                        <h3 className="text-xl font-extrabold text-gray-900">{t("ventedTitle")}</h3>
                                    </div>
                                    <div className="p-8 flex flex-col flex-1">
                                        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                                            {t("ventedDesc")}
                                        </p>
                                        <div className="space-y-3">
                                            {([
                                                { text: t("ventedTag1"), icon: Thermometer },
                                                { text: t("ventedTag2"), icon: Droplets },
                                                { text: t("ventedTag3"), icon: Shield },
                                                { text: t("ventedTag4"), icon: CheckCircle2 },
                                            ] as const).map(({ text, icon: TagIcon }) => (
                                                <div key={text} className="flex items-center gap-3 px-4 py-2.5 bg-blue-50 rounded-xl border border-blue-100">
                                                    <div className="w-8 h-8 bg-bubble-primary/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-bubble-primary/20 transition">
                                                        <TagIcon className="w-4 h-4 text-bubble-primary" />
                                                    </div>
                                                    <span className="text-sm font-medium text-gray-700">{text}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
                                            <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center shrink-0">
                                                <Zap className="w-4 h-4 text-amber-600" />
                                            </div>
                                            <div>
                                                <span className="text-xs font-extrabold text-amber-700 uppercase tracking-wider">Florida Tip</span>
                                                <p className="text-xs text-amber-800 mt-1 leading-relaxed">
                                                    {t("ventedFloridaTip")}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </section>

                {/* ── COLORS ───────────────────────────────────────────── */}
                <section id="colors" className="py-20 bg-gray-50 border-t border-gray-100">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                        <AnimatedSection className="text-center mb-8">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">{t("colorsTitle")}</h2>
                            <p className="text-gray-500 text-lg">{t("colorsSubtitle")}</p>
                        </AnimatedSection>

                        {/* Legend */}
                        <AnimatedSection>
                            <div className="flex justify-center gap-6 mb-10 flex-wrap">
                                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-200 text-sm shadow-sm">
                                    <span className="w-3 h-3 bg-green-500 rounded-full" />
                                    <span className="font-bold text-gray-900">{t("inStockLabel")}:</span>
                                    <span className="text-gray-600">{t("inStockDesc")}</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-200 text-sm shadow-sm">
                                    <span className="w-3 h-3 bg-blue-400 rounded-full" />
                                    <span className="font-bold text-gray-900">{t("orderLabel")}:</span>
                                    <span className="text-gray-600">{t("orderDesc")}</span>
                                </div>
                            </div>
                        </AnimatedSection>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
                            {aluminumColors.map((color, i) => (
                                <AnimatedSection key={color.name} delay={i * 50} from="bottom">
                                    <div className="group rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 bg-white">
                                        <div className="relative aspect-square overflow-hidden">
                                            {color.inStock && (
                                                <div className="absolute top-2 right-2 bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase z-10 shadow-sm">
                                                    {t("inStock")}
                                                </div>
                                            )}
                                            <Image
                                                src={`/${color.img}`}
                                                alt={`${color.name} Aluminum Soffit sample`}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                loading="lazy"
                                            />
                                        </div>
                                        <p className="text-center font-semibold text-gray-900 text-xs py-3 px-2">{color.name}</p>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>

                        <AnimatedSection delay={200}>
                            <p className="text-center text-xs text-gray-400 italic mt-8 max-w-2xl mx-auto">
                                {t("colorsDisclaimer")}
                            </p>
                        </AnimatedSection>
                    </div>
                </section>

                {/* ── CTA ─────────────────────────────────────────────── */}
                <section className="py-20 bg-gray-950 text-white text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/15 rounded-full blur-[80px]" aria-hidden />
                    <div className="container mx-auto px-4 max-w-4xl relative z-10">
                        <AnimatedSection>
                            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">{t("ctaTitle")}</h2>
                            <p className="text-xl text-gray-400 mb-10 max-w-xl mx-auto">
                                {t("ctaSubtitle")}
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Link href={lp("/contact")} className="inline-flex items-center justify-center gap-2 bg-bubble-primary text-white px-10 py-4 rounded-full font-bold text-base hover:bg-blue-600 transition shadow-xl">
                                    {t("ctaQuote")} <ArrowRight className="w-5 h-5" />
                                </Link>
                                <Link href={lp("/calculator")} className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-10 py-4 rounded-full font-bold text-base hover:bg-gray-100 transition">
                                    {t("ctaEstimate")}
                                </Link>
                                <a href="tel:4077151790" className="inline-flex items-center justify-center gap-2 bg-white/5 border-2 border-gray-700 text-white px-10 py-4 rounded-full font-bold text-base hover:bg-white/10 transition">
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
