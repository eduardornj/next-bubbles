import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Phone, Shield, Award, Zap, Droplets, Thermometer } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "certificationsPage" });
    return {
        title: t("metaTitle"),
        description: t("metaDesc"),
        openGraph: {
            title: t("metaOgTitle"),
            description: t("metaOgDesc"),
            url: "https://bubblesenterprise.com/certifications",
        },
        alternates: {
            canonical: locale === "en" ? "https://bubblesenterprise.com/certifications" : `https://bubblesenterprise.com/${locale}/certifications`,
            languages: {
                en: "https://bubblesenterprise.com/certifications",
                es: "https://bubblesenterprise.com/es/certifications",
                pt: "https://bubblesenterprise.com/pt/certifications",
                "x-default": "https://bubblesenterprise.com/certifications",
            },
        },
    };
}

const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Bubbles Enterprise Soffit",
    description: "Professional soffit and fascia installation meeting IRC Section 806, NAHB NGBS, and Energy Star standards. Trusted by DR Horton, Lennar, KB Home, PulteGroup, and more.",
    dateModified: "2026-03-05",
    telephone: "+14077151790",
    url: "https://bubblesenterprise.com",
    address: { "@type": "PostalAddress", addressLocality: "Orlando", addressRegion: "FL", addressCountry: "US" },
    hasCredential: [
        { "@type": "EducationalOccupationalCredential", name: "IRC Section 806 Roof Ventilation Compliance", credentialCategory: "Building Code" },
        { "@type": "EducationalOccupationalCredential", name: "NAHB National Green Building Standard (NGBS)", credentialCategory: "Industry Standard" },
        { "@type": "EducationalOccupationalCredential", name: "Energy Star Certified Installation", credentialCategory: "Energy Certification" },
        { "@type": "EducationalOccupationalCredential", name: "ABC Supply Certified Partner", credentialCategory: "Supplier Partnership" },
    ],
};

export default async function CertificationsPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "certificationsPage" });
    const lp = (path: string) => locale === "en" ? path : `/${locale}${path}`;

    const serviceCards = [
        { icon: <Award className="w-8 h-8" />, bg: "bg-blue-100 text-blue-600", title: t("install1Title"), desc: t("install1Desc") },
        { icon: <Zap className="w-8 h-8" />, bg: "bg-green-100 text-green-600", title: t("install2Title"), desc: t("install2Desc") },
        { icon: <Shield className="w-8 h-8" />, bg: "bg-purple-100 text-purple-600", title: t("install3Title"), desc: t("install3Desc") },
    ];

    const ircBullets = [t("irc1"), t("irc2"), t("irc3"), t("irc4")];
    const nahbBullets = [t("nahb1"), t("nahb2"), t("nahb3"), t("nahb4")];

    const energyStats = [
        { icon: <Zap className="w-10 h-10" />, stat: t("stat1V"), label: t("stat1L"), desc: t("stat1Desc") },
        { icon: <Thermometer className="w-10 h-10" />, stat: t("stat2V"), label: t("stat2L"), desc: t("stat2Desc") },
        { icon: <Droplets className="w-10 h-10" />, stat: t("stat3V"), label: t("stat3L"), desc: t("stat3Desc") },
    ];

    const process = [
        { step: "1", title: t("process1Title"), desc: t("process1Desc"), icon: "📋" },
        { step: "2", title: t("process2Title"), desc: t("process2Desc"), icon: "🔧" },
        { step: "3", title: t("process3Title"), desc: t("process3Desc"), icon: "⚡" },
        { step: "4", title: t("process4Title"), desc: t("process4Desc"), icon: "✅" },
    ];

    const builders = [
        { name: t("builder1Name"), desc: t("builder1Desc"), badge: t("builder1Badge") },
        { name: t("builder2Name"), desc: t("builder2Desc"), badge: t("builder2Badge") },
        { name: t("builder3Name"), desc: t("builder3Desc"), badge: t("builder3Badge") },
        { name: t("builder4Name"), desc: t("builder4Desc"), badge: t("builder4Badge") },
        { name: t("builder5Name"), desc: t("builder5Desc"), badge: t("builder5Badge") },
        { name: t("builder6Name"), desc: t("builder6Desc"), badge: t("builder6Badge") },
        { name: t("builder7Name"), desc: t("builder7Desc"), badge: t("builder7Badge") },
        { name: t("builder8Name"), desc: t("builder8Desc"), badge: t("builder8Badge") },
    ];

    const features = [
        { label: t("feature1Title"), desc: t("feature1Desc") },
        { label: t("feature2Title"), desc: t("feature2Desc") },
        { label: t("feature3Title"), desc: t("feature3Desc") },
    ];

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <div className="flex flex-col min-h-screen">
                {/* Hero */}
                <section className="py-28 bg-gradient-to-br from-slate-900 via-blue-900 to-teal-800 text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
                        <span className="inline-block bg-blue-600 px-4 py-1.5 rounded-full text-xs font-bold mb-6 uppercase tracking-wider border border-blue-500/50">{t("heroBadge")}</span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">{t("heroTitle")}</h1>
                        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
                            {t("heroSubtitle")}
                        </p>
                        <Link href={lp("/contact")} className="inline-block bg-bubble-primary border border-blue-400 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition shadow-lg">
                            {t("heroQuote")}
                        </Link>
                    </div>
                </section>

                {/* Installation Excellence */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t("installTitle")}</h2>
                            <p className="text-lg text-gray-600">{t("installSubtitle")}</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8 mb-16">
                            {serviceCards.map((item, i) => (
                                <AnimatedSection key={item.title} from="bottom" delay={i * 100}>
                                    <div className="text-center p-8 bg-gray-50 rounded-2xl border border-gray-100">
                                        <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 ${item.bg}`}>{item.icon}</div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                        <p className="text-gray-600">{item.desc}</p>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
                                <h3 className="text-2xl font-bold text-blue-900 mb-5">{t("ircTitle")}</h3>
                                <ul className="space-y-3">
                                    {ircBullets.map(item => (
                                        <li key={item} className="flex items-start gap-3 text-gray-700">
                                            <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-green-50 p-8 rounded-2xl border border-green-100">
                                <h3 className="text-2xl font-bold text-green-900 mb-5">{t("nahbTitle")}</h3>
                                <ul className="space-y-3">
                                    {nahbBullets.map(item => (
                                        <li key={item} className="flex items-start gap-3 text-gray-700">
                                            <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Energy Stats */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className="grid md:grid-cols-3 gap-8">
                            {energyStats.map((item, i) => (
                                <AnimatedSection key={item.label} from="scale" delay={i * 80}>
                                    <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100">
                                        <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-5 text-bubble-primary">{item.icon}</div>
                                        <div className="text-3xl font-extrabold text-gray-900 mb-1">{item.stat}</div>
                                        <div className="text-sm font-bold text-bubble-primary uppercase tracking-wide mb-3">{item.label}</div>
                                        <p className="text-gray-600 text-sm">{item.desc}</p>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Installation Process */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t("processTitle")}</h2>
                            <p className="text-lg text-gray-600">{t("processSubtitle")}</p>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {process.map((p, i) => (
                                <AnimatedSection key={p.step} from="bottom" delay={i * 80}>
                                    <div className="bg-white p-6 rounded-2xl shadow-md text-center border border-gray-100">
                                        <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">{p.icon}</div>
                                        <div className="text-bubble-primary font-extrabold text-sm uppercase tracking-wider mb-2">{t("step")} {p.step}</div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">{p.title}</h3>
                                        <p className="text-gray-600 text-sm">{p.desc}</p>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Trusted Builders */}
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t("buildersTitle")}</h2>
                            <p className="text-lg text-gray-600">{t("buildersSubtitle")}</p>
                        </div>
                        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                            {builders.map((b, i) => (
                                <AnimatedSection key={b.name} from="bottom" delay={i * 60}>
                                    <div className="bg-white p-6 rounded-2xl text-center border border-gray-100 hover:shadow-lg transition-shadow">
                                        <h3 className="text-lg font-bold text-gray-900 mb-1">{b.name}</h3>
                                        <p className="text-sm text-gray-500 mb-2">{b.desc}</p>
                                        <span className="text-xs text-bubble-primary font-semibold">{b.badge}</span>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                        <div className="bg-gradient-to-r from-bubble-primary to-blue-700 p-8 rounded-2xl text-white">
                            <div className="grid md:grid-cols-3 gap-8 text-center">
                                {features.map(item => (
                                    <div key={item.label}>
                                        <h4 className="text-lg font-bold mb-2">{item.label}</h4>
                                        <p className="text-blue-100 text-sm">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 bg-gradient-to-r from-bubble-primary to-blue-700 text-white text-center">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("ctaTitle")}</h2>
                        <p className="text-xl text-blue-100 mb-10">{t("ctaSubtitle")}</p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link href={lp("/contact")} className="px-10 py-5 bg-white text-bubble-primary rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-xl">{t("ctaQuote")}</Link>
                            <Link href={lp("/services")} className="px-10 py-5 border-2 border-white text-white rounded-full font-bold text-lg hover:bg-blue-800 transition">{t("ctaServices")}</Link>
                            <a href="tel:4077151790" className="px-10 py-5 bg-blue-900/50 text-white rounded-full font-bold text-lg hover:bg-blue-900 transition flex items-center justify-center gap-2">
                                <Phone className="w-5 h-5" /> (407) 715-1790
                            </a>
                        </div>
                        <p className="text-xs text-blue-200 mt-8 italic">
                            {t("ctaDisclaimer")}
                        </p>
                    </div>
                </section>
            </div>
        </>
    );
}
