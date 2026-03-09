import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "areasPage" });
    return {
        title: t("metaTitle"),
        description: t("metaDesc"),
        openGraph: {
            title: t("metaOgTitle"),
            description: t("metaOgDesc"),
            url: "https://bubblesenterprise.com/areas",
        },
        alternates: {
            canonical: locale === "en" ? "https://bubblesenterprise.com/areas" : `https://bubblesenterprise.com/${locale}/areas`,
            languages: {
                en: "https://bubblesenterprise.com/areas",
                es: "https://bubblesenterprise.com/es/areas",
                pt: "https://bubblesenterprise.com/pt/areas",
                "x-default": "https://bubblesenterprise.com/areas",
            },
        },
    };
}

// Cities with dedicated pages (slug -> display name)
const linkedCities: Record<string, string> = {
    "orlando": "Orlando",
    "kissimmee": "Kissimmee",
    "winter-park": "Winter Park",
    "winter-garden": "Winter Garden",
    "clermont": "Clermont",
    "altamonte-springs": "Altamonte Springs",
    "sanford": "Sanford",
    "oviedo": "Oviedo",
    "lake-mary": "Lake Mary",
    "apopka": "Apopka",
    "celebration": "Celebration",
    "st-cloud": "St. Cloud",
    "daytona-beach": "Daytona Beach",
    "palm-bay": "Palm Bay",
    "port-st-lucie": "Port St. Lucie",
    "maitland": "Maitland",
    "casselberry": "Casselberry",
    "longwood": "Longwood",
    "lake-nona": "Lake Nona",
    "dr-phillips": "Dr. Phillips",
    "windermere": "Windermere",
};

const centralFlorida = [
    "Orlando", "Kissimmee", "Winter Park", "Winter Garden", "Clermont",
    "Altamonte Springs", "Sanford", "Oviedo", "Lake Mary", "Apopka",
    "Maitland", "Casselberry", "Longwood", "Celebration", "St. Cloud",
    "Daytona Beach", "Palm Bay", "Port St. Lucie", "Lake Nona", "Dr. Phillips",
    "Windermere",
];

const southFlorida = [
    "Miami", "Hialeah", "Fort Lauderdale", "Pembroke Pines", "Hollywood",
    "Miramar", "Coral Springs", "Miami Gardens", "West Palm Beach", "Pompano Beach",
    "Davie", "Boca Raton", "Sunrise", "Plantation", "Deerfield Beach",
    "Miami Beach", "Homestead", "Boynton Beach", "Kendall", "Doral",
    "North Miami", "Lauderhill", "Tamarac", "Weston", "Delray Beach",
    "Wellington", "Jupiter",
];

const areasSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Soffit and Fascia Installation & Repair",
    serviceType: "Soffit and Fascia Installation, Repair, Remove & Replace",
    dateModified: "2026-03-05",
    provider: {
        "@type": "LocalBusiness",
        name: "Bubbles Enterprise Soffit",
        telephone: "+14077151790",
        url: "https://bubblesenterprise.com",
        address: { "@type": "PostalAddress", addressLocality: "Orlando", addressRegion: "FL", addressCountry: "US" },
    },
    areaServed: [
        ...centralFlorida.map(c => ({ "@type": "City", name: c, addressRegion: "FL" })),
        ...southFlorida.map(c => ({ "@type": "City", name: c, addressRegion: "FL" })),
    ],
};

export default async function AreasPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "areasPage" });
    const lp = (path: string) => locale === "en" ? path : `/${locale}${path}`;

    // Find slug for a city name (if it has a dedicated page)
    const getCitySlug = (name: string) =>
        Object.entries(linkedCities).find(([, v]) => v === name)?.[0] ?? null;

    const whyFlorida = [
        { icon: "🌡️", title: t("why1Title"), desc: t("why1Desc") },
        { icon: "🌧️", title: t("why2Title"), desc: t("why2Desc") },
        { icon: "🐿️", title: t("why3Title"), desc: t("why3Desc") },
        { icon: "🏠", title: t("why4Title"), desc: t("why4Desc") },
    ];

    const isPt = locale === "pt";

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(areasSchema) }} />

            <div className="flex flex-col min-h-screen">
                {/* ── HERO ─────────────────────────────────────────────── */}
                <section className="relative overflow-hidden py-28 lg:py-36 bg-bubble-navy text-white">
                    {/* Accent glow */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[160px] pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/8 rounded-full blur-[120px] pointer-events-none" />

                    <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                        <AnimatedSection>
                            <div className="max-w-3xl mx-auto text-center lg:text-left lg:mx-0">
                                <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 rounded-full bg-white/8 border border-white/15">
                                    <MapPin className="w-4 h-4 text-blue-300" />
                                    <span className="text-white/80 text-sm font-medium">
                                        <span className="text-white font-bold">45+</span> {t("heroBadgeCities")}
                                    </span>
                                </div>
                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-[1.1]">
                                    {t("heroTitle1")}{" "}
                                    <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                                        {t("heroTitle2")}
                                    </span>
                                </h1>
                                <p className="text-lg sm:text-xl text-white/70 mb-10 leading-relaxed max-w-2xl lg:max-w-none">
                                    {t("heroSubtitle")}
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                    <a
                                        href="#cities"
                                        className="inline-flex items-center justify-center gap-2.5 bg-white text-bubble-navy font-bold px-10 py-5 rounded-full text-lg hover:bg-blue-50 hover:scale-[1.02] transition-all shadow-[0_8px_30px_rgba(255,255,255,0.15)]"
                                    >
                                        <MapPin className="w-5 h-5" /> {t("heroViewAreas")}
                                    </a>
                                    <Link
                                        href={lp("/contact")}
                                        className="inline-flex items-center justify-center gap-2.5 bg-transparent border-2 border-white/30 text-white font-bold px-10 py-5 rounded-full text-lg hover:bg-white/10 hover:border-white/50 transition-all"
                                    >
                                        {t("heroRequestQuote")} <ArrowRight className="w-5 h-5" />
                                    </Link>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* ── WHY FLORIDA HOMES ARE DIFFERENT ─────────────────── */}
                <section className="py-20 lg:py-24 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                        <AnimatedSection className="text-center mb-14">
                            <span className="text-bubble-primary font-bold tracking-wider uppercase text-sm">{t("whyTag")}</span>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-4">{t("whyTitle")}</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                {t("whySubtitle")}
                            </p>
                        </AnimatedSection>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {whyFlorida.map((item, i) => (
                                <AnimatedSection key={item.title} from="bottom" delay={i * 80}>
                                    <div className="relative bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 group overflow-hidden">
                                        <div className="absolute top-0 left-0 w-full h-1 bg-bubble-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                                        <div className="text-4xl mb-4">{item.icon}</div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-bubble-primary transition-colors">{item.title}</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── CITIES ─────────────────────────────────────────── */}
                <section id="cities" className="py-20 lg:py-24 bg-gray-50">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                        <AnimatedSection className="text-center mb-14">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">{t("citiesTitle")}</h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                {t("citiesSubtitle")}
                            </p>
                        </AnimatedSection>

                        {/* Central Florida */}
                        <AnimatedSection from="bottom">
                            <div className="mb-12">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="w-10 h-10 rounded-xl bg-bubble-primary flex items-center justify-center">
                                        <MapPin className="w-5 h-5 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">{t("centralLabel")}</h3>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                    {centralFlorida.map((city, i) => {
                                        const slug = getCitySlug(city);
                                        return slug ? (
                                            <AnimatedSection key={city} from="bottom" delay={i * 30}>
                                                <Link
                                                    href={lp(`/areas/${slug}`)}
                                                    className="group flex items-center gap-3 bg-white px-5 py-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-bubble-primary/40 hover:bg-blue-50/40 transition-all duration-200"
                                                >
                                                    <CheckCircle2 className="w-5 h-5 text-bubble-primary shrink-0" />
                                                    <span className="font-semibold text-gray-800">{city}</span>
                                                    <ArrowRight className="w-4 h-4 text-gray-300 ml-auto shrink-0 group-hover:text-bubble-primary group-hover:translate-x-1 transition-all" />
                                                </Link>
                                            </AnimatedSection>
                                        ) : (
                                            <AnimatedSection key={city} from="bottom" delay={i * 30}>
                                                <div className="flex items-center gap-3 bg-white px-5 py-4 rounded-xl border border-gray-200 shadow-sm">
                                                    <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                                                    <span className="font-semibold text-gray-800">{city}</span>
                                                </div>
                                            </AnimatedSection>
                                        );
                                    })}
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* South Florida */}
                        <AnimatedSection from="bottom" delay={100}>
                            <div>
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                                        <MapPin className="w-5 h-5 text-blue-500" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">{t("southLabel")}</h3>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                    {southFlorida.map((city, i) => (
                                        <AnimatedSection key={city} from="bottom" delay={i * 25}>
                                            <div className="flex items-center gap-3 bg-white px-5 py-4 rounded-xl border border-gray-200 shadow-sm">
                                                <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                                                <span className="font-semibold text-gray-800">{city}</span>
                                            </div>
                                        </AnimatedSection>
                                    ))}
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* Not on the list */}
                        <AnimatedSection delay={200}>
                            <div className="mt-16 relative">
                                <div className="bg-white rounded-2xl p-10 lg:p-12 shadow-lg border border-gray-200 max-w-2xl mx-auto text-center">
                                    <div className="w-14 h-14 bg-bubble-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                                        <Phone className="w-7 h-7 text-bubble-primary" />
                                    </div>
                                    <p className="font-extrabold text-gray-900 text-2xl mb-3">{t("notListedTitle")}</p>
                                    <p className="text-gray-600 mb-8 text-lg">{t("notListedDesc")}</p>
                                    {isPt ? (
                                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                            <a
                                                href="https://wa.me/14077151790?text=Oi%2C%20preciso%20de%20um%20or%C3%A7amento%20para%20soffit%20e%20fascia"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center gap-2.5 bg-green-600 text-white font-bold px-8 py-5 rounded-full text-lg hover:bg-green-700 hover:scale-[1.02] transition-all shadow-lg hover:shadow-xl"
                                            >
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.638l4.716-1.244A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.319 0-4.476-.654-6.32-1.785l-.44-.268-2.898.764.778-2.84-.295-.467A9.948 9.948 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/></svg>
                                                WhatsApp
                                            </a>
                                            <a
                                                href="tel:4077151790"
                                                className="inline-flex items-center justify-center gap-2.5 bg-bubble-primary text-white font-bold px-8 py-5 rounded-full text-lg hover:bg-blue-700 hover:scale-[1.02] transition-all shadow-lg hover:shadow-xl"
                                            >
                                                <Phone className="w-5 h-5" /> (407) 715-1790
                                            </a>
                                        </div>
                                    ) : (
                                        <a
                                            href="tel:4077151790"
                                            className="inline-flex items-center justify-center gap-2.5 bg-bubble-primary text-white font-bold px-10 py-5 rounded-full text-lg hover:bg-blue-700 hover:scale-[1.02] transition-all shadow-lg hover:shadow-xl"
                                        >
                                            <Phone className="w-5 h-5" /> (407) 715-1790
                                        </a>
                                    )}
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* ── CTA ─────────────────────────────────────────────── */}
                <section className="relative overflow-hidden py-24 lg:py-28 bg-gradient-to-br from-bubble-primary to-blue-800 text-white text-center">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_60%)]" aria-hidden />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.05),transparent_60%)]" aria-hidden />
                    <div className="relative z-10 container mx-auto px-4 max-w-4xl">
                        <AnimatedSection>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6">{t("ctaTitle")}</h2>
                            <p className="text-lg sm:text-xl text-blue-200 mb-10 max-w-2xl mx-auto leading-relaxed">
                                {t("ctaSubtitle")}
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Link
                                    href={lp("/contact")}
                                    className="inline-flex items-center justify-center gap-2.5 px-10 py-5 bg-white text-blue-900 rounded-full font-bold text-lg hover:bg-gray-100 hover:scale-[1.02] transition-all shadow-[0_8px_30px_rgba(255,255,255,0.2)]"
                                >
                                    {t("ctaQuote")} <ArrowRight className="w-5 h-5" />
                                </Link>
                                {isPt ? (
                                    <a
                                        href="https://wa.me/14077151790?text=Oi%2C%20preciso%20de%20um%20or%C3%A7amento%20para%20soffit%20e%20fascia"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2.5 px-10 py-5 bg-green-600 border-2 border-green-500 text-white rounded-full font-bold text-lg hover:bg-green-700 transition-all"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.638l4.716-1.244A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.319 0-4.476-.654-6.32-1.785l-.44-.268-2.898.764.778-2.84-.295-.467A9.948 9.948 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/></svg>
                                        WhatsApp
                                    </a>
                                ) : (
                                    <a
                                        href="tel:4077151790"
                                        className="inline-flex items-center justify-center gap-2.5 px-10 py-5 bg-transparent border-2 border-white/40 text-white rounded-full font-bold text-lg hover:bg-white/10 hover:border-white/60 transition-all"
                                    >
                                        <Phone className="w-5 h-5" /> {t("ctaCall")}
                                    </a>
                                )}
                            </div>
                        </AnimatedSection>
                    </div>
                </section>
            </div>
        </>
    );
}
