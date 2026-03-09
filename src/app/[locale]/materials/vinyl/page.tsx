import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ArrowRight, Phone, DollarSign, Trophy } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "materialsVinyl" });
    return {
        title: t("metaTitle"),
        description: t("metaDesc"),
        openGraph: {
            title: t("metaOgTitle"),
            description: t("metaOgDesc"),
            url: "https://bubblesenterprise.com/materials/vinyl",
        },
    };
}

const vinylColors = [
    { name: "White", slug: "white", inStock: true },
    { name: "Azure", slug: "azure", inStock: false },
    { name: "Flagstone", slug: "flagstone", inStock: false },
    { name: "Ivory", slug: "ivory", inStock: false },
    { name: "Khaki", slug: "khaki", inStock: false },
    { name: "Linen", slug: "linen", inStock: false },
    { name: "Mocha", slug: "mocha", inStock: false },
    { name: "Prestige Beige", slug: "prestige_beige", inStock: false },
    { name: "Sandelwood", slug: "sandelwood", inStock: false },
    { name: "Slate Grey", slug: "slate_grey", inStock: false },
    { name: "Terraverde", slug: "terraverde", inStock: false },
    { name: "Wicker", slug: "wicker", inStock: false },
];

const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://bubblesenterprise.com/materials/vinyl#service",
    name: "Vinyl Soffit Installation",
    serviceType: "Vinyl Soffit and Fascia Installation",
    description: "Cost-effective vinyl soffit installation in Orlando, FL. Moisture, pest, and UV resistant. 12 color options. 15+ year lifespan.",
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

export default async function VinylSoffitPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "materialsVinyl" });
    const lp = (path: string) => locale === "en" ? path : `/${locale}${path}`;

    const compareRows = [
        { feature: t("cmp1Feature"), vinyl: t("cmp1Vinyl"), alum: t("cmp1Alum"), vinylWins: true },
        { feature: t("cmp2Feature"), vinyl: t("cmp2Vinyl"), alum: t("cmp2Alum"), vinylWins: false },
        { feature: t("cmp3Feature"), vinyl: t("cmp3Vinyl"), alum: t("cmp3Alum"), vinylWins: false },
        { feature: t("cmp4Feature"), vinyl: t("cmp4Vinyl"), alum: t("cmp4Alum"), vinylWins: false },
        { feature: t("cmp5Feature"), vinyl: t("cmp5Vinyl"), alum: t("cmp5Alum"), vinylWins: true },
        { feature: t("cmp6Feature"), vinyl: t("cmp6Vinyl"), alum: t("cmp6Alum"), vinylWins: true },
    ];

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <div className="flex flex-col min-h-screen">

                {/* ── HERO ─────────────────────────────────────────────── */}
                <section className="relative overflow-hidden py-24 lg:py-32 bg-gradient-to-br from-gray-950 via-emerald-950 to-gray-900 text-white">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-600/20 rounded-full blur-[100px]" aria-hidden />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[80px]" aria-hidden />
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
                        <AnimatedSection className="text-center">
                            <span className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold mb-6 uppercase tracking-widest">
                                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" aria-hidden />
                                {t("heroBadge")}
                            </span>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                                {t("heroTitle1")}<br />
                                <span className="bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">
                                    {t("heroTitle2")}
                                </span>
                            </h1>
                            <p className="text-lg md:text-xl text-emerald-100/80 max-w-2xl mx-auto mb-10 leading-relaxed">
                                {t("heroSubtitle")}
                            </p>
                        </AnimatedSection>
                        <AnimatedSection delay={130} className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="#colors" className="inline-flex items-center justify-center gap-2 bg-white text-emerald-900 px-8 py-4 rounded-full font-bold hover:bg-emerald-50 transition shadow-xl text-base">
                                {t("heroViewColors")}
                            </a>
                            <Link href={lp("/calculator")} className="inline-flex items-center justify-center gap-2 bg-emerald-700 border border-emerald-500/50 text-white px-8 py-4 rounded-full font-bold hover:bg-emerald-600 transition shadow-lg text-base">
                                {t("heroEstimate")} <ArrowRight className="w-4 h-4" />
                            </Link>
                        </AnimatedSection>
                    </div>
                </section>

                {/* ── WHY VINYL ────────────────────────────────────────── */}
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

                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    <div className="bg-emerald-50 p-5 rounded-2xl border border-emerald-100 text-center">
                                        <div className="text-3xl font-extrabold text-emerald-600 mb-1">15+</div>
                                        <div className="text-xs text-gray-600 font-semibold uppercase tracking-wide">{t("statLifespan")}</div>
                                    </div>
                                    <div className="bg-emerald-50 p-5 rounded-2xl border border-emerald-100 text-center">
                                        <div className="text-3xl font-extrabold text-emerald-600 mb-1">12</div>
                                        <div className="text-xs text-gray-600 font-semibold uppercase tracking-wide">{t("statColors")}</div>
                                    </div>
                                </div>

                                <ul className="space-y-3">
                                    {[t("feat1"), t("feat2"), t("feat3"), t("feat4"), t("feat5")].map(f => (
                                        <li key={f} className="flex items-center gap-3 text-gray-700 text-sm">
                                            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                            </AnimatedSection>

                            <AnimatedSection from="right">
                                <div className="bg-gradient-to-br from-emerald-900 to-teal-950 rounded-2xl p-10 text-white text-center shadow-2xl relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl" aria-hidden />
                                    <div className="relative z-10">
                                        <div className="w-20 h-20 bg-white/10 border border-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                                            <DollarSign className="w-10 h-10 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-bold mb-4">{t("costTitle")}</h3>
                                        <p className="text-emerald-100 leading-relaxed mb-6 text-sm">
                                            {t("costDesc")}
                                        </p>
                                        <div className="space-y-2 text-left">
                                            {[
                                                [t("specLifespan"), t("specLifespanVal")],
                                                [t("specLabor"), t("specLaborVal")],
                                                [t("specColors"), t("specColorsVal")],
                                                [t("specPaint"), t("specPaintVal")],
                                            ].map(([k, v]) => (
                                                <div key={k} className="flex justify-between py-2 border-b border-white/10 text-sm">
                                                    <span className="text-emerald-200">{k}</span>
                                                    <span className="font-bold text-white">{v}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <Link href={lp("/calculator")} className="inline-flex items-center gap-2 mt-6 text-emerald-300 font-bold hover:text-white text-sm transition">
                                            {t("costLink")} <ArrowRight className="w-4 h-4" />
                                        </Link>
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

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
                            {vinylColors.map((color, i) => (
                                <AnimatedSection key={color.name} delay={i * 50} from="bottom">
                                    <div className="group rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 bg-white">
                                        <div className="relative aspect-square overflow-hidden">
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 z-10" />
                                            <Image
                                                src={`/images/soffit_vinyl/vinyl_soffit_${color.slug}.webp`}
                                                alt={`${color.name} vinyl soffit sample`}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="p-3 text-center border-t border-gray-100">
                                            {color.inStock ? (
                                                <span className="text-[10px] bg-green-100 text-green-700 font-bold px-2 py-0.5 rounded-full block mb-1 uppercase tracking-wide">✓ {t("inStock")}</span>
                                            ) : (
                                                <span className="text-[10px] bg-gray-100 text-gray-500 font-medium px-2 py-0.5 rounded-full block mb-1">{t("orderDays")}</span>
                                            )}
                                            <p className="font-semibold text-gray-900 text-sm">{color.name}</p>
                                        </div>
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

                {/* ── COMPARISON TABLE ─────────────────────────────────── */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
                        <AnimatedSection className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">{t("compareTitle")}</h2>
                            <p className="text-gray-500 text-xl">{t("compareSubtitle")}</p>
                        </AnimatedSection>

                        <AnimatedSection>
                            <div className="space-y-3">
                                {compareRows.map((r) => (
                                    <div
                                        key={r.feature}
                                        className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all overflow-hidden"
                                    >
                                        <div className="px-6 pt-4 pb-2">
                                            <span className="text-xs font-extrabold uppercase tracking-widest text-gray-400">
                                                {r.feature}
                                            </span>
                                        </div>
                                        <div className="grid grid-cols-2 gap-3 px-4 pb-4">
                                            <div className={`rounded-xl px-4 py-3 text-center transition-all ${
                                                r.vinylWins
                                                    ? "bg-emerald-50 border-2 border-emerald-200 ring-1 ring-emerald-100"
                                                    : "bg-gray-50 border border-gray-100"
                                            }`}>
                                                {r.vinylWins && (
                                                    <div className="flex items-center justify-center gap-1 mb-1">
                                                        <Trophy className="w-3 h-3 text-emerald-600" />
                                                        <span className="text-[10px] font-extrabold text-emerald-600 uppercase tracking-wider">
                                                            {t("compareVinylWinLabel")}
                                                        </span>
                                                    </div>
                                                )}
                                                <p className="text-xs font-bold text-gray-400 mb-0.5">{t("thVinyl")}</p>
                                                <p className={`text-sm font-bold ${r.vinylWins ? "text-emerald-700" : "text-gray-600"}`}>
                                                    {r.vinyl}
                                                </p>
                                            </div>
                                            <div className={`rounded-xl px-4 py-3 text-center transition-all ${
                                                !r.vinylWins
                                                    ? "bg-blue-50 border-2 border-blue-200 ring-1 ring-blue-100"
                                                    : "bg-gray-50 border border-gray-100"
                                            }`}>
                                                {!r.vinylWins && (
                                                    <div className="flex items-center justify-center gap-1 mb-1">
                                                        <Trophy className="w-3 h-3 text-bubble-primary" />
                                                        <span className="text-[10px] font-extrabold text-bubble-primary uppercase tracking-wider">
                                                            {t("compareAlumWinLabel")}
                                                        </span>
                                                    </div>
                                                )}
                                                <p className="text-xs font-bold text-gray-400 mb-0.5">{t("thAluminum")}</p>
                                                <p className={`text-sm font-bold ${!r.vinylWins ? "text-bubble-primary" : "text-gray-600"}`}>
                                                    {r.alum}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={100}>
                            <div className="mt-6 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl p-5 border border-gray-100 flex items-center justify-center gap-8 flex-wrap">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                                    <span className="text-sm font-bold text-gray-700">{t("thVinyl")}</span>
                                    <span className="text-sm font-extrabold text-emerald-600">
                                        {compareRows.filter(r => r.vinylWins).length}/{compareRows.length}
                                    </span>
                                </div>
                                <div className="w-px h-6 bg-gray-200" />
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-bubble-primary" />
                                    <span className="text-sm font-bold text-gray-700">{t("thAluminum")}</span>
                                    <span className="text-sm font-extrabold text-bubble-primary">
                                        {compareRows.filter(r => !r.vinylWins).length}/{compareRows.length}
                                    </span>
                                </div>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={150} className="mt-6 text-center">
                            <Link href={lp("/materials/aluminum")} className="inline-flex items-center gap-2 text-bubble-primary font-bold hover:underline text-sm">
                                {t("compareLink")} <ArrowRight className="w-4 h-4" />
                            </Link>
                        </AnimatedSection>
                    </div>
                </section>

                {/* ── CTA ─────────────────────────────────────────────── */}
                <section className="py-20 bg-gray-950 text-white text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-600/15 rounded-full blur-[80px]" aria-hidden />
                    <div className="container mx-auto px-4 max-w-4xl relative z-10">
                        <AnimatedSection>
                            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">{t("ctaTitle")}</h2>
                            <p className="text-xl text-gray-400 mb-10 max-w-xl mx-auto">
                                {t("ctaSubtitle")}
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Link href={lp("/contact")} className="inline-flex items-center justify-center gap-2 bg-emerald-600 text-white px-10 py-4 rounded-full font-bold text-base hover:bg-emerald-500 transition shadow-xl">
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
