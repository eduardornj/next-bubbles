import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, ArrowRight, MapPin, Phone } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { getTranslations } from "next-intl/server";
import { cities, getCityData } from "@/app/[locale]/areas/[city]/data";

type Props = {
    params: Promise<{ locale: string; city: string }>;
};

export async function generateStaticParams() {
    const locales = ["en", "es", "pt"];
    return locales.flatMap(locale => cities.map(c => ({ locale, city: c.slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale, city: slug } = await params;
    const city = getCityData(slug);
    if (!city) return {};
    const t = await getTranslations({ locale, namespace: "cityPage" });
    const title = t("metaTitle", { city: city.name });
    // Use city-specific meta description when available, fallback to generic template
    const description = locale === "pt" && city.metaDescriptionPt
        ? city.metaDescriptionPt
        : locale === "es" && city.metaDescriptionEs
            ? city.metaDescriptionEs
            : city.metaDescription && locale === "en"
                ? city.metaDescription
                : t("metaDesc", { city: city.name, county: city.county });
    const basePath = `/areas/${city.slug}`;
    const canonical = locale === "en"
        ? `https://bubblesenterprise.com${basePath}`
        : `https://bubblesenterprise.com/${locale}${basePath}`;
    return {
        title,
        description,
        openGraph: { title, description, url: canonical },
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

function buildSchema(city: ReturnType<typeof getCityData>) {
    if (!city) return null;
    return {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                "@id": `https://bubblesenterprise.com/areas/${city.slug}#service`,
                name: `Soffit & Fascia Services — ${city.name}, FL`,
                serviceType: "Soffit and Fascia Repair, Removal and Replacement, New Construction Installation",
                description: `Expert soffit and fascia repair and replacement in ${city.name}, FL. Storm damage, animal intrusion, rotted wood, and full removal and replacement. Licensed and insured.`,
                dateModified: "2026-03-05",
                provider: { "@id": "https://bubblesenterprise.com/#business" },
                areaServed: {
                    "@type": "City",
                    name: city.name,
                    addressRegion: "FL",
                    containedInPlace: {
                        "@type": "AdministrativeArea",
                        name: city.county,
                        addressRegion: "FL",
                    },
                },
            },
            {
                "@type": "FAQPage",
                "@id": `https://bubblesenterprise.com/areas/${city.slug}#faq`,
                mainEntity: [
                    {
                        "@type": "Question",
                        name: `Do you offer soffit and fascia repair in ${city.name}, FL?`,
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: `Yes. Bubbles Enterprise serves ${city.name} and all of ${city.county} for soffit and fascia repair, remove and replace, and new construction installation. Call (407) 715-1790 for a free estimate.`,
                        },
                    },
                    {
                        "@type": "Question",
                        name: `How much does soffit replacement cost in ${city.name}?`,
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: `Cost depends on the home's size, material choice (aluminum vs vinyl), and whether fascia boards need replacement. Every property is different — we give you a written itemized quote after a free on-site estimate. Use the calculator at bubblesenterprise.com/calculator for a starting estimate.`,
                        },
                    },
                    {
                        "@type": "Question",
                        name: `How quickly can you come to ${city.name}?`,
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: `We offer same-day estimates and same-week scheduling for ${city.name}. For urgent issues like animal intrusion or storm damage, emergency service is available. Call (407) 715-1790.`,
                        },
                    },
                ],
            },
        ],
    };
}

export default async function CityPage({ params }: Props) {
    const { locale, city: slug } = await params;
    const city = getCityData(slug);
    if (!city) notFound();
    const schema = buildSchema(city);
    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://bubblesenterprise.com" },
            { "@type": "ListItem", position: 2, name: "Service Areas", item: "https://bubblesenterprise.com/areas" },
            { "@type": "ListItem", position: 3, name: city.name, item: `https://bubblesenterprise.com/areas/${city.slug}` },
        ],
    };
    const t = await getTranslations({ locale, namespace: "cityPage" });

    // Pick cultural description and localNote by locale
    const description = locale === "pt" && city.descriptionPt
        ? city.descriptionPt
        : locale === "es" && city.descriptionEs
            ? city.descriptionEs
            : city.description;

    const localNote = locale === "pt" && city.localNotePt
        ? city.localNotePt
        : locale === "es" && city.localNoteEs
            ? city.localNoteEs
            : city.localNote;

    // Pick locale-specific whyBullets and faqs
    const whyBullets = locale === "pt" && city.whyBulletsPt
        ? city.whyBulletsPt
        : locale === "es" && city.whyBulletsEs
            ? city.whyBulletsEs
            : city.whyBullets;

    const faqs = locale === "pt" && city.faqsPt
        ? city.faqsPt
        : locale === "es" && city.faqsEs
            ? city.faqsEs
            : city.faqs;

    const homeStyle = locale === "pt" && city.homeStylePt
        ? city.homeStylePt
        : locale === "es" && city.homeStyleEs
            ? city.homeStyleEs
            : city.homeStyle;

    // Locale-aware path prefix
    const lp = (path: string) => locale === "en" ? path : `/${locale}${path}`;

    const services = [
        { title: t("svc1Title"), href: lp("/repairs"),           desc: t("svc1Desc", { issue: (locale === "pt" && city.commonIssuePt) ? city.commonIssuePt : city.commonIssue }) },
        { title: t("svc2Title"), href: lp("/remove-replace"),    desc: t("svc2Desc", { topService: city.topService, city: city.name }) },
        { title: t("svc3Title"), href: lp("/new-construction"),  desc: t("svc3Desc", { county: city.county }) },
        { title: t("svc4Title"), href: lp("/contact/emergency"), desc: t("svc4Desc", { city: city.name }) },
    ];

    return (
        <>
            {schema && (
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            )}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            <div className="flex flex-col min-h-screen">

                {/* ── HERO ─────────────────────────────────────────────── */}
                <section className="py-24 lg:py-28 bg-gradient-to-br from-blue-900 to-indigo-950 text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/10" aria-hidden />
                    <div className="container mx-auto px-4 max-w-6xl relative z-10">
                        <AnimatedSection>
                            <div className="flex items-center gap-2 text-blue-300 text-sm font-semibold mb-4">
                                <MapPin className="w-4 h-4" />
                                <Link href={lp("/areas")} className="hover:text-white transition">{t("breadcrumb")}</Link>
                                <span>/</span>
                                <span className="text-white">{city.name}, FL</span>
                            </div>
                            <h1 className="text-4xl sm:text-5xl font-extrabold mb-5 leading-tight">
                                {t("heroTitle")}<br />
                                <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                                    {city.name}, FL
                                </span>
                            </h1>
                            <p className="text-lg text-blue-100 max-w-2xl mb-8 leading-relaxed">
                                {t("heroSubtitle", { city: city.name, county: city.county })}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href={lp("/contact")}
                                    className="inline-flex items-center justify-center gap-2 bg-bubble-primary text-white px-8 py-4 rounded-full font-bold hover:bg-blue-600 transition shadow-lg"
                                >
                                    {t("heroCta", { city: city.name })}
                                </Link>
                                <a
                                    href="tel:4077151790"
                                    className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition"
                                >
                                    <Phone className="w-5 h-5" /> (407) 715-1790
                                </a>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* ── LOCAL CONTEXT ────────────────────────────────────── */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="grid md:grid-cols-2 gap-12 items-start">
                            <AnimatedSection>
                                <h2 className="text-3xl font-extrabold text-gray-900 mb-5">
                                    {t("localTitle", { city: city.name })}
                                </h2>
                                <p className="text-gray-600 leading-relaxed mb-6">{description}</p>
                                <p className="text-gray-600 leading-relaxed">{localNote}</p>
                            </AnimatedSection>
                            <AnimatedSection delay={100}>
                                <div className="bg-slate-50 rounded-2xl p-7 border border-gray-100">
                                    <h3 className="font-bold text-gray-900 mb-5 text-lg">{t("quickFactsTitle", { city: city.name })}</h3>
                                    <div className="space-y-0 divide-y divide-gray-100">
                                        {[
                                            { label: t("factCounty"),    value: city.county },
                                            { label: t("factPop"),       value: city.population },
                                            { label: t("factHomeStyle"), value: homeStyle },
                                            { label: t("factZip"),       value: city.zipCodes.join(", ") },
                                        ].map(row => (
                                            <div key={row.label} className="flex flex-col sm:flex-row sm:justify-between py-3 gap-1">
                                                <span className="text-sm text-gray-500 font-medium">{row.label}</span>
                                                <span className="text-sm text-gray-900 font-semibold sm:text-right max-w-[220px]">{row.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </section>

                {/* ── SERVICES ─────────────────────────────────────────── */}
                <section className="py-20 bg-slate-50">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <AnimatedSection className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                                {t("servicesTitle", { city: city.name })}
                            </h2>
                        </AnimatedSection>
                        <div className="grid sm:grid-cols-2 gap-6">
                            {services.map((s, i) => (
                                <AnimatedSection key={s.title} delay={i * 80} from="bottom">
                                    <Link href={s.href} className="block bg-white rounded-2xl p-7 border border-gray-200 hover:shadow-lg hover:border-blue-200 transition h-full group">
                                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-bubble-primary transition flex items-center justify-between">
                                            {s.title}
                                            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-bubble-primary transition" />
                                        </h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                                    </Link>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── WHY BUBBLES ──────────────────────────────────────── */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <AnimatedSection className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                                {t("whyTitle", { city: city.name })}
                            </h2>
                        </AnimatedSection>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {whyBullets.map((item, i) => (
                                <AnimatedSection key={item} delay={i * 50} from="bottom">
                                    <div className="flex items-start gap-3 bg-blue-50 rounded-xl p-4 border border-blue-100">
                                        <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                                        <span className="text-gray-700 text-sm font-medium">{item}</span>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── NEARBY AREAS ─────────────────────────────────────── */}
                <section className="py-16 bg-slate-50 border-t border-gray-100">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <AnimatedSection className="text-center mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">{t("nearbyTitle", { city: city.name })}</h2>
                            <p className="text-gray-500 text-sm">{t("nearbySub", { city: city.name })}</p>
                        </AnimatedSection>
                        <AnimatedSection delay={80} className="flex flex-wrap justify-center gap-3">
                            {city.nearbyAreas.map(area => (
                                <span key={area} className="bg-white text-gray-700 px-4 py-2 rounded-full text-sm font-medium border border-gray-200 shadow-sm">
                                    {area}, FL
                                </span>
                            ))}
                            <Link href={lp("/areas")} className="bg-bubble-primary text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition">
                                {t("nearbyViewAll")} →
                            </Link>
                        </AnimatedSection>
                    </div>
                </section>

                {/* ── FAQ ──────────────────────────────────────────────── */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <AnimatedSection className="text-center mb-12">
                            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
                                {t("faqTitle", { city: city.name })}
                            </h2>
                        </AnimatedSection>
                        <div className="space-y-4">
                            {faqs.map((faq, i) => (
                                <AnimatedSection key={i} delay={i * 70} from="bottom">
                                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                                        <h3 className="text-base font-bold text-gray-900 mb-3">{faq.q}</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── CTA ──────────────────────────────────────────────── */}
                <section className="py-20 bg-gradient-to-br from-bubble-primary to-blue-800 text-white text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.07),transparent_60%)]" aria-hidden />
                    <div className="container mx-auto px-4 max-w-3xl relative z-10">
                        <AnimatedSection>
                            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
                                {t("ctaTitle", { city: city.name })}
                            </h2>
                            <p className="text-lg text-blue-200 mb-8 max-w-xl mx-auto">
                                {t("ctaSub")}
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
