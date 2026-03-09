import type { Metadata } from "next";
import Link from "next/link";
import { Shield, AlertTriangle, CheckCircle2, FileText, Phone, Wrench, Zap, Droplets, Trees, Car, CreditCard, XCircle, Scale, ChevronRight } from "lucide-react";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "terms" });
    return {
        title: t("metaTitle"),
        description: t("metaDesc"),
        openGraph: {
            title: t("metaOgTitle"),
            description: t("metaOgDesc"),
            url: "https://bubblesenterprise.com/terms",
        },
        alternates: {
            canonical: locale === "en" ? "https://bubblesenterprise.com/terms" : `https://bubblesenterprise.com/${locale}/terms`,
            languages: {
                en: "https://bubblesenterprise.com/terms",
                es: "https://bubblesenterprise.com/es/terms",
                pt: "https://bubblesenterprise.com/pt/terms",
                "x-default": "https://bubblesenterprise.com/terms",
            },
        },
    };
}

// LegalDocument schema — allows AI agents to discover our terms via WebMCP
const legalSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms of Service — Bubbles Enterprise LLC",
    "url": "https://bubblesenterprise.com/terms",
    "description": "Full service agreement covering warranty, rotten wood policy, gutter policy, payment, cancellation, and all Florida mandatory notices.",
    "dateModified": "2026-03-05",
    "publisher": {
        "@type": "LocalBusiness",
        "name": "Bubbles Enterprise LLC",
        "telephone": "+14077151790",
        "address": { "@type": "PostalAddress", "addressLocality": "Orlando", "addressRegion": "FL", "addressCountry": "US" }
    },
    "about": [
        { "@type": "Thing", "name": "1-Year Workmanship Warranty" },
        { "@type": "Thing", "name": "Chapter 713 Florida Statutes — Construction Lien" },
        { "@type": "Thing", "name": "Chapter 558 Florida Statutes — Construction Defects" }
    ]
};

export default async function TermsPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "terms" });
    const lp = (path: string) => locale === "en" ? path : `/${locale}${path}`;

    const clauses = [
        {
            id: 1, icon: <Wrench className="w-5 h-5" />, color: "text-orange-600 bg-orange-50",
            title: t("c1Title"),
            content: (<><p>{t("c1Body")}</p><div className="mt-3 p-3 bg-orange-50 border border-orange-100 rounded-lg text-sm"><strong>{t("c1NoteBold")}</strong> {t("c1Note")}</div></>),
        },
        {
            id: 2, icon: <Droplets className="w-5 h-5" />, color: "text-blue-600 bg-blue-50",
            title: t("c2Title"),
            content: (<><p>{t("c2Body")}</p><div className="mt-3 p-3 bg-blue-50 border border-blue-100 rounded-lg text-sm">{t("c2Note")}</div></>),
        },
        {
            id: 3, icon: <Zap className="w-5 h-5" />, color: "text-yellow-600 bg-yellow-50",
            title: t("c3Title"),
            content: (<ul className="space-y-2 text-gray-600"><li><strong>{t("c3LightsBold")}</strong> {t("c3Lights")}</li><li><strong>{t("c3CamerasBold")}</strong> {t("c3Cameras")}</li></ul>),
        },
        {
            id: 4, icon: <Zap className="w-5 h-5" />, color: "text-red-600 bg-red-50",
            title: t("c4Title"),
            content: (<p>{t("c4Body")}</p>),
        },
        {
            id: 5, icon: <Trees className="w-5 h-5" />, color: "text-green-600 bg-green-50",
            title: t("c5Title"),
            content: (<><p>{t("c5Body")}</p><div className="mt-3 p-3 bg-green-50 border border-green-100 rounded-lg text-sm"><strong>{t("c5NoteBold")}</strong> {t("c5Note")}</div></>),
        },
        {
            id: 6, icon: <Shield className="w-5 h-5" />, color: "text-bubble-primary bg-blue-50",
            title: t("c6Title"),
            content: (<><p className="font-semibold text-gray-900 mb-3">{t("c6Intro")}</p><div className="grid sm:grid-cols-2 gap-4"><div className="p-3 bg-green-50 border border-green-100 rounded-lg"><p className="font-semibold text-green-700 text-sm mb-2 flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4" /> {t("c6CoveredLabel")}</p><p className="text-sm text-gray-600">{t("c6Covered")}</p></div><div className="p-3 bg-red-50 border border-red-100 rounded-lg"><p className="font-semibold text-red-600 text-sm mb-2 flex items-center gap-1.5"><XCircle className="w-4 h-4" /> {t("c6NotCoveredLabel")}</p><p className="text-sm text-gray-600">{t("c6NotCovered")}</p></div></div></>),
        },
        {
            id: 7, icon: <Trees className="w-5 h-5" />, color: "text-emerald-600 bg-emerald-50",
            title: t("c7Title"),
            content: (<ul className="space-y-2 text-gray-600"><li><strong>{t("c7PlantsBold")}</strong> {t("c7Plants")}</li><li><strong>{t("c7SprinklersBold")}</strong> {t("c7Sprinklers")}</li></ul>),
        },
        {
            id: 8, icon: <Car className="w-5 h-5" />, color: "text-slate-600 bg-slate-50",
            title: t("c8Title"),
            content: (<p>{t("c8Body")}</p>),
        },
        {
            id: 9, icon: <CreditCard className="w-5 h-5" />, color: "text-indigo-600 bg-indigo-50",
            title: t("c9Title"),
            content: (<><p>{t("c9Body")}</p><div className="mt-3 p-3 bg-indigo-50 border border-indigo-100 rounded-lg text-sm">{t("c9Note")}</div></>),
        },
        {
            id: 10, icon: <XCircle className="w-5 h-5" />, color: "text-red-600 bg-red-50",
            title: t("c10Title"),
            content: (<p>{t("c10Body")}</p>),
        },
        {
            id: 11, icon: <Scale className="w-5 h-5" />, color: "text-gray-600 bg-gray-50",
            title: t("c11Title"),
            content: (<ul className="space-y-1.5 text-gray-600"><li>{t("c11Law")}</li><li>{t("c11Venue")}</li><li>{t("c11Fees")}</li><li>{t("c11Agreement")}</li></ul>),
        },
    ];

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(legalSchema) }} />
            <div className="flex flex-col min-h-screen bg-gray-50">
                {/* Hero */}
                <section className="bg-bubble-navy text-white pt-32 pb-16 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-white to-transparent" />
                    <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
                        <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/10 text-bubble-light text-sm font-bold uppercase tracking-wider mb-6 border border-white/20">
                            <FileText className="w-4 h-4" /> {t("heroBadge")}
                        </span>
                        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">{t("heroTitle")}</h1>
                        <p className="text-blue-200 text-lg max-w-2xl mx-auto">
                            {t("heroSubtitle")}
                        </p>
                        <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm text-blue-200">
                            <span>📍 Orlando, FL</span>
                            <span>•</span>
                            <span>📞 (407) 715-1790</span>
                            <span>•</span>
                            <span>🔒 Chapter 713, FL Statutes</span>
                        </div>
                    </div>
                </section>

                <section className="py-16">
                    <div className="container mx-auto px-4 max-w-4xl">

                        {/* Quick nav */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-10">
                            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">{t("tocLabel")}</p>
                            <div className="grid sm:grid-cols-2 gap-1">
                                {clauses.map(c => (
                                    <a key={c.id} href={`#clause-${c.id}`}
                                        className="flex items-center gap-2 text-sm text-gray-600 hover:text-bubble-primary py-1 transition-colors">
                                        <ChevronRight className="w-3.5 h-3.5 shrink-0 text-bubble-primary" />
                                        {c.id}. {c.title}
                                    </a>
                                ))}
                                <a href="#florida-notices"
                                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-bubble-primary py-1 transition-colors">
                                    <ChevronRight className="w-3.5 h-3.5 shrink-0 text-orange-500" />
                                    {t("floridaNoticesLink")}
                                </a>
                            </div>
                        </div>

                        {/* Clauses */}
                        <div id="service-agreement" className="scroll-mt-24 space-y-5 mb-12">
                            {clauses.map(c => (
                                <div key={c.id} id={`clause-${c.id}`} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden scroll-mt-24">
                                    <div className="px-6 py-5 border-b border-gray-50 flex items-center gap-3">
                                        <span className={`p-2 rounded-lg ${c.color}`}>
                                            {c.icon}
                                        </span>
                                        <h2 className="font-extrabold text-gray-900 text-lg">
                                            {c.id}. {c.title}
                                        </h2>
                                    </div>
                                    <div className="px-6 py-5 text-gray-600 leading-relaxed">
                                        {c.content}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Florida Mandatory Notices */}
                        <div id="florida-notices" className="scroll-mt-24">
                            <div className="flex items-center gap-3 mb-6">
                                <AlertTriangle className="w-6 h-6 text-orange-500 shrink-0" />
                                <h2 className="text-2xl font-extrabold text-gray-900">{t("floridaNoticesTitle")}</h2>
                            </div>

                            <div className="space-y-4">
                                <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
                                    <h3 className="font-bold text-orange-800 mb-3 uppercase text-sm tracking-wide">{t("fn1Title")}</h3>
                                    <p className="text-sm text-orange-900 leading-relaxed">{t("fn1Body")}</p>
                                </div>

                                <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
                                    <h3 className="font-bold text-red-800 mb-3 uppercase text-sm tracking-wide">{t("fn2Title")}</h3>
                                    <p className="text-sm text-red-900 leading-relaxed">{t("fn2Body")}</p>
                                </div>

                                <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
                                    <h3 className="font-bold text-yellow-800 mb-3 uppercase text-sm tracking-wide">{t("fn3Title")}</h3>
                                    <p className="text-sm text-yellow-900 leading-relaxed">{t("fn3Body")}</p>
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="mt-12 bg-gradient-to-r from-bubble-primary to-bubble-dark text-white rounded-2xl p-8 text-center">
                            <h3 className="text-xl font-extrabold mb-2">{t("ctaTitle")}</h3>
                            <p className="text-blue-100 mb-6 text-sm">{t("ctaSubtitle")}</p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a href="tel:4077151790"
                                    className="inline-flex items-center justify-center gap-2 bg-white text-bubble-primary font-bold px-6 py-3 rounded-full hover:bg-blue-50 transition text-sm">
                                    <Phone className="w-4 h-4" /> (407) 715-1790
                                </a>
                                <Link href={lp("/contact")}
                                    className="inline-flex items-center justify-center gap-2 bg-white/20 border border-white/30 text-white font-bold px-6 py-3 rounded-full hover:bg-white/30 transition text-sm">
                                    {t("ctaSend")}
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
