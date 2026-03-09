import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Factory, ShieldAlert, AlertCircle, Wind, ShieldCheck, Thermometer, PhoneCall, ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "removeReplace" });
    return {
        title: t("metaTitle"),
        description: t("metaDesc"),
        openGraph: {
            title: t("metaOgTitle"),
            description: t("metaOgDesc"),
            url: "https://bubblesenterprise.com/remove-replace",
        },
        alternates: {
            canonical: locale === "en" ? "https://bubblesenterprise.com/remove-replace" : `https://bubblesenterprise.com/${locale}/remove-replace`,
            languages: {
                en: "https://bubblesenterprise.com/remove-replace",
                es: "https://bubblesenterprise.com/es/remove-replace",
                pt: "https://bubblesenterprise.com/pt/remove-replace",
                "x-default": "https://bubblesenterprise.com/remove-replace",
            },
        },
    };
}

const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Soffit & Fascia Remove & Replace (R&R)",
    serviceType: "Complete Soffit and Fascia Remove and Replace",
    description:
        "Full removal of old, damaged, or rotted soffit and fascia, followed by professional installation of new aluminum or vinyl systems. 1-story and 2-story homes in Orlando, FL.",
    dateModified: "2026-03-05",
    "@id": "https://bubblesenterprise.com/remove-replace#service",
    provider: { "@id": "https://bubblesenterprise.com/#business" },
    areaServed: [
        { "@type": "City", name: "Orlando", addressRegion: "FL" },
        { "@type": "City", name: "Kissimmee", addressRegion: "FL" },
        { "@type": "City", name: "Winter Park", addressRegion: "FL" },
        { "@type": "City", name: "Clermont", addressRegion: "FL" },
        { "@type": "City", name: "Sanford", addressRegion: "FL" },
    ],
    offers: [
        {
            "@type": "Offer",
            name: "Remove & Replace — 1-Story Home",
            description: "Complete removal of old soffit and installation of new aluminum or vinyl system. Free estimate available.",
            priceCurrency: "USD",
        },
        {
            "@type": "Offer",
            name: "Remove & Replace — 2-Story Home",
            description: "Complete removal of old soffit and installation of new aluminum or vinyl on 2-story homes. Free estimate available.",
            priceCurrency: "USD",
        },
    ],
};

export default async function RemoveReplacePage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "removeReplace" });
    const lp = (path: string) => locale === "en" ? path : `/${locale}${path}`;

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <div className="flex flex-col min-h-screen">
                {/* Hero Section */}
                <section className="relative py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-indigo-100">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
                                {t("heroTitle1")} <span className="text-bubble-primary block mb-2">Remove & Replace</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                                {t("heroSubtitle")}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href={lp("/contact")} className="bg-bubble-primary text-white px-8 py-4 rounded-full font-bold hover:bg-bubble-navy transition shadow-lg text-lg">
                                    {t("heroEstimate")}
                                </Link>
                                <Link href={lp("/calculator")} className="bg-white border-2 border-bubble-primary text-bubble-primary px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition shadow-sm text-lg">
                                    {t("heroCostCalc")}
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* When You Need Complete Replacement */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-16">
                            {t("whenTitle")}
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-red-50 p-8 rounded-2xl border border-red-100 hover:shadow-lg transition">
                                <AlertCircle className="w-12 h-12 text-red-600 mb-6" />
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{t("when1Title")}</h3>
                                <p className="text-gray-600 leading-relaxed">{t("when1Body")}</p>
                            </div>
                            <div className="bg-orange-50 p-8 rounded-2xl border border-orange-100 hover:shadow-lg transition">
                                <ShieldAlert className="w-12 h-12 text-orange-600 mb-6" />
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{t("when2Title")}</h3>
                                <p className="text-gray-600 leading-relaxed">{t("when2Body")}</p>
                            </div>
                            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 hover:shadow-lg transition">
                                <Wind className="w-12 h-12 text-blue-600 mb-6" />
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{t("when3Title")}</h3>
                                <p className="text-gray-600 leading-relaxed">{t("when3Body")}</p>
                            </div>
                            <div className="bg-purple-50 p-8 rounded-2xl border border-purple-100 hover:shadow-lg transition">
                                <Factory className="w-12 h-12 text-purple-600 mb-6" />
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{t("when4Title")}</h3>
                                <p className="text-gray-600 leading-relaxed">{t("when4Body")}</p>
                            </div>
                            <div className="bg-yellow-50 p-8 rounded-2xl border border-yellow-100 hover:shadow-lg transition">
                                <Thermometer className="w-12 h-12 text-yellow-600 mb-6" />
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{t("when5Title")}</h3>
                                <p className="text-gray-600 leading-relaxed">{t("when5Body")}</p>
                            </div>
                            <div className="bg-amber-50 p-8 rounded-2xl border border-amber-100 hover:shadow-lg transition">
                                <ShieldCheck className="w-12 h-12 text-amber-600 mb-6" />
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{t("when6Title")}</h3>
                                <p className="text-gray-600 leading-relaxed">{t("when6Body")}</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits of Complete Replacement */}
                <section className="py-20 bg-gray-50 border-t border-gray-100">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-16">
                            {t("benefitsTitle")}
                        </h2>
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div className="space-y-10">
                                <div className="flex gap-6">
                                    <div className="w-12 h-12 bg-bubble-navy text-white rounded-full flex items-center justify-center font-bold text-xl shrink-0">1</div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{t("ben1Title")}</h3>
                                        <p className="text-gray-600 text-lg leading-relaxed">{t("ben1Body")}</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-12 h-12 bg-bubble-navy text-white rounded-full flex items-center justify-center font-bold text-xl shrink-0">2</div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{t("ben2Title")}</h3>
                                        <p className="text-gray-600 text-lg leading-relaxed">{t("ben2Body")}</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-12 h-12 bg-bubble-navy text-white rounded-full flex items-center justify-center font-bold text-xl shrink-0">3</div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{t("ben3Title")}</h3>
                                        <p className="text-gray-600 text-lg leading-relaxed">{t("ben3Body")}</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-12 h-12 bg-bubble-navy text-white rounded-full flex items-center justify-center font-bold text-xl shrink-0">4</div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{t("ben4Title")}</h3>
                                        <p className="text-gray-600 text-lg leading-relaxed">{t("ben4Body")}</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-12 h-12 bg-bubble-navy text-white rounded-full flex items-center justify-center font-bold text-xl shrink-0">5</div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{t("ben5Title")}</h3>
                                        <p className="text-gray-600 text-lg leading-relaxed">{t("ben5Body")}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
                                <h3 className="text-2xl font-bold text-gray-900 mb-8">{t("factsTitle")}</h3>
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center py-4 border-b border-gray-100">
                                        <span className="text-gray-600 font-medium">{t("factLabel1")}</span>
                                        <span className="font-bold text-gray-900 text-lg">{t("factValue1")}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-4 border-b border-gray-100">
                                        <span className="text-gray-600 font-medium">{t("factLabel2")}</span>
                                        <span className="font-bold text-bubble-primary text-lg">{t("factValue2")}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-4 border-b border-gray-100">
                                        <span className="text-gray-600 font-medium">{t("factLabel3")}</span>
                                        <span className="font-bold text-gray-900 text-lg">{t("factValue3")}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-4 border-b border-gray-100">
                                        <span className="text-gray-600 font-medium">{t("factLabel4")}</span>
                                        <span className="font-bold text-gray-900 text-lg">{t("factValue4")}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-4 border-b border-gray-100">
                                        <span className="text-gray-600 font-medium">{t("factLabel5")}</span>
                                        <span className="font-bold text-gray-900 text-lg">{t("factValue5")}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-4">
                                        <span className="text-gray-600 font-medium">{t("factLabel6")}</span>
                                        <span className="font-bold text-gray-900 text-lg">{t("factValue6")}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Extreme Detail: Energy Efficiency & Savings */}
                <section className="py-20 bg-blue-50">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-16">
                            {t("energyTitle")}
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8 mb-16">
                            <div className="bg-white p-10 rounded-2xl shadow-md text-center">
                                <div className="w-20 h-20 bg-blue-100 text-4xl flex items-center justify-center rounded-full mx-auto mb-6">❄️</div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{t("energy1Title")}</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">{t("energy1Body")}</p>
                                <div className="bg-blue-50 py-3 px-4 rounded-lg">
                                    <span className="font-bold text-blue-800">{t("energy1Stat")}</span>
                                </div>
                            </div>
                            <div className="bg-white p-10 rounded-2xl shadow-md text-center">
                                <div className="w-20 h-20 bg-amber-100 text-4xl flex items-center justify-center rounded-full mx-auto mb-6">🔥</div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{t("energy2Title")}</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">{t("energy2Body")}</p>
                                <div className="bg-amber-50 py-3 px-4 rounded-lg">
                                    <span className="font-bold text-amber-800">{t("energy2Stat")}</span>
                                </div>
                            </div>
                            <div className="bg-white p-10 rounded-2xl shadow-md text-center">
                                <div className="w-20 h-20 bg-purple-100 text-4xl flex items-center justify-center rounded-full mx-auto mb-6">🏠</div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{t("energy3Title")}</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">{t("energy3Body")}</p>
                                <div className="bg-purple-50 py-3 px-4 rounded-lg">
                                    <span className="font-bold text-purple-800">{t("energy3Stat")}</span>
                                </div>
                            </div>
                        </div>

                        {/* Highlight Card */}
                        <div className="bg-gradient-to-r from-bubble-navy to-bubble-primary p-10 rounded-3xl text-white shadow-xl">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h3 className="text-3xl font-bold mb-6">{t("highlightTitle")}</h3>
                                    <ul className="space-y-4 text-lg">
                                        <li className="flex gap-4 items-start"><span className="text-amber-300 font-black">✓</span> <span><strong>{t("hl1Bold")}</strong> {t("hl1")}</span></li>
                                        <li className="flex gap-4 items-start"><span className="text-amber-300 font-black">✓</span> <span><strong>{t("hl2Bold")}</strong> {t("hl2")}</span></li>
                                        <li className="flex gap-4 items-start"><span className="text-amber-300 font-black">✓</span> <span><strong>{t("hl3Bold")}</strong> {t("hl3")}</span></li>
                                        <li className="flex gap-4 items-start"><span className="text-amber-300 font-black">✓</span> <span><strong>{t("hl4Bold")}</strong> {t("hl4")}</span></li>
                                    </ul>
                                </div>
                                <div className="text-center">
                                    <div className="bg-white/20 p-10 rounded-2xl backdrop-blur-sm border border-white/30">
                                        <h4 className="text-6xl font-black mb-4">{t("hlStat")}</h4>
                                        <p className="text-2xl font-medium mb-2">{t("hlStatLabel")}</p>
                                        <p className="text-md opacity-80">{t("hlStatSub")}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 bg-bubble-navy text-white text-center">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <h2 className="text-3xl md:text-5xl font-bold mb-8">{t("ctaTitle")}</h2>
                        <p className="text-xl text-blue-200 mb-12 leading-relaxed">
                            {t("ctaSubtitle")}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link href={lp("/contact")} className="bg-white text-bubble-navy px-10 py-5 rounded-full font-bold hover:bg-gray-100 transition shadow-xl text-lg inline-flex items-center gap-2">
                                {t("ctaEstimate")} <ArrowRight className="w-5 h-5" />
                            </Link>
                            <a href="tel:4077151790" className="bg-white/10 border-2 border-white/40 text-white px-10 py-5 rounded-full font-bold hover:bg-white/20 transition text-lg inline-flex items-center gap-2">
                                <PhoneCall className="w-5 h-5" /> (407) 715-1790
                            </a>
                        </div>
                        <p className="mt-6 text-blue-300 text-sm font-medium">{t("ctaSubtext")}</p>
                    </div>
                </section>
            </div>
        </>
    );
}
