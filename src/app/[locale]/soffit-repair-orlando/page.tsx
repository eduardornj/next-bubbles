import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Phone, ArrowRight, Thermometer, Bug, Wind } from "lucide-react";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "soffitRepairOrlando" });
    return {
        title: t("metaTitle"),
        description: t("metaDesc"),
        openGraph: {
            title: t("metaOgTitle"),
            description: t("metaOgDesc"),
            url: "https://bubblesenterprise.com/soffit-repair-orlando",
        },
        alternates: {
            canonical: locale === "en" ? "https://bubblesenterprise.com/soffit-repair-orlando" : `https://bubblesenterprise.com/${locale}/soffit-repair-orlando`,
            languages: {
                en: "https://bubblesenterprise.com/soffit-repair-orlando",
                es: "https://bubblesenterprise.com/es/soffit-repair-orlando",
                pt: "https://bubblesenterprise.com/pt/soffit-repair-orlando",
                "x-default": "https://bubblesenterprise.com/soffit-repair-orlando",
            },
        },
    };
}

const schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            "@id": "https://bubblesenterprise.com/soffit-repair-orlando#service",
            name: "Soffit Repair Orlando",
            serviceType: "Soffit Repair, Attic Ventilation, Animal Damage Repair",
            description: "Expert soffit repair in Orlando, FL. Fix attic ventilation, lower energy bills, block pest entry. Storm damage, rot, and animal intrusion repairs. Same-day estimates.",
            dateModified: "2026-03-05",
            provider: { "@id": "https://bubblesenterprise.com/#business" },
            areaServed: [
                { "@type": "City", name: "Orlando", addressRegion: "FL" },
                { "@type": "City", name: "Winter Park", addressRegion: "FL" },
                { "@type": "City", name: "Kissimmee", addressRegion: "FL" },
                { "@type": "City", name: "Sanford", addressRegion: "FL" },
                { "@type": "City", name: "Oviedo", addressRegion: "FL" },
            ],
            offers: {
                "@type": "Offer",
                description: "Free on-site estimate. Same-week scheduling.",
                priceSpecification: {
                    "@type": "PriceSpecification",
                    priceCurrency: "USD",
                    description: "60-80% cheaper than full replacement for localized damage",
                },
            },
        },
        {
            "@type": "FAQPage",
            "@id": "https://bubblesenterprise.com/soffit-repair-orlando#faq",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "Is soffit repair common in older Orlando homes?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes, extremely. Many older homes in Winter Park and Downtown Orlando have wooden soffits suffering from rot due to Florida's humidity. Upgrading to aluminum or vinyl is a lasting fix.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can damaged soffit increase AC costs in Florida?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Absolutely. Blocked soffit vents trap heat in your attic, forcing your AC to work harder. Proper airflow helps your AC run more efficiently — we've seen 10–15% cooling cost reductions.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Do animals enter through soffit gaps?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "They sure do. It's the most common entry point for squirrels, rats, and bats in Orlando. We don't just cover the hole — we secure the entire perimeter.",
                    },
                },
            ],
        },
    ],
};

export default async function SoffitRepairOrlandoPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "soffitRepairOrlando" });
    const lp = (path: string) => locale === "en" ? path : `/${locale}${path}`;

    const whyItems = [
        { icon: <Thermometer className="w-6 h-6" />, bg: "bg-yellow-100 text-yellow-600", title: t("why1Title"), desc: t("why1Desc") },
        { icon: <Bug className="w-6 h-6" />, bg: "bg-red-100 text-red-600", title: t("why2Title"), desc: t("why2Desc") },
        { icon: <Wind className="w-6 h-6" />, bg: "bg-blue-100 text-blue-600", title: t("why3Title"), desc: t("why3Desc") },
    ];

    const standards = [t("std1"), t("std2"), t("std3"), t("std4"), t("std5")];

    const faqs = [
        { q: t("faq1q"), a: t("faq1a") },
        { q: t("faq2q"), a: t("faq2a") },
        { q: t("faq3q"), a: t("faq3a") },
    ];

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <div className="flex flex-col min-h-screen">
                <section className="py-28 bg-gradient-to-br from-blue-900 to-indigo-950 text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="container mx-auto px-4 max-w-7xl relative z-10">
                        <div className="max-w-3xl">
                            <span className="inline-block bg-blue-600 px-3 py-1 rounded-full text-xs font-bold mb-6 uppercase tracking-wider">{t("heroBadge")}</span>
                            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">{t("heroTitle")}</h1>
                            <p className="text-xl text-blue-100 mb-10 leading-relaxed">{t("heroSubtitle")}</p>
                            <div className="flex flex-wrap gap-4">
                                <a href="#why-it-matters" className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition shadow-lg">{t("heroWhyMatters")}</a>
                                <Link href={lp("/contact")} className="bg-bubble-primary text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition shadow-lg">{t("heroInspection")}</Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="why-it-matters" className="py-20 bg-white">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">{t("whyTitle")}</h2>
                                <p className="text-lg text-gray-600 mb-8">{t("whyDesc")}</p>
                                <div className="space-y-6">
                                    {whyItems.map(item => (
                                        <div key={item.title} className="flex gap-5">
                                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${item.bg}`}>{item.icon}</div>
                                            <div>
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                                                <p className="text-gray-600 text-sm">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-gray-100 rounded-2xl p-10 border border-gray-200">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">{t("standardTitle")}</h3>
                                <ul className="space-y-4">
                                    {standards.map(item => (
                                        <li key={item} className="flex items-center gap-3 text-gray-700">
                                            <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /> {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                                    <Link href={lp("/areas")} className="text-bubble-primary font-bold hover:underline inline-flex items-center gap-1">{t("checkServiceMap")} <ArrowRight className="w-4 h-4" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-blue-50">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t("faqTitle")}</h2>
                        </div>
                        <div className="space-y-6">
                            {faqs.map((faq, i) => (
                                <div key={i} className="bg-white rounded-xl p-6 border border-blue-100 shadow-sm">
                                    <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-3">
                                        <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shrink-0">Q</span>
                                        {faq.q}
                                    </h3>
                                    <p className="text-gray-600 ml-11 leading-relaxed">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-gray-900 text-white text-center">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("ctaTitle")}</h2>
                        <p className="text-xl text-gray-300 mb-10">{t("ctaSubtitle")}</p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link href={lp("/contact")} className="px-10 py-5 bg-bubble-primary text-white rounded-full font-bold text-lg hover:bg-blue-600 transition shadow-xl">{t("ctaSchedule")}</Link>
                            <a href="tel:4077151790" className="px-10 py-5 border-2 border-gray-600 text-white rounded-full font-bold text-lg hover:bg-gray-800 transition flex items-center justify-center gap-2">
                                <Phone className="w-5 h-5" /> (407) 715-1790
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
