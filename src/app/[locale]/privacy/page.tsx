import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Eye, Lock, Trash2, Mail, Phone, FileText, Database, UserCheck, Globe } from "lucide-react";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "privacy" });
    return {
        title: t("metaTitle"),
        description: t("metaDesc"),
        openGraph: {
            title: t("metaOgTitle"),
            description: t("metaOgDesc"),
            url: "https://bubblesenterprise.com/privacy",
        },
        alternates: {
            canonical: locale === "en" ? "https://bubblesenterprise.com/privacy" : `https://bubblesenterprise.com/${locale}/privacy`,
            languages: {
                en: "https://bubblesenterprise.com/privacy",
                es: "https://bubblesenterprise.com/es/privacy",
                pt: "https://bubblesenterprise.com/pt/privacy",
                "x-default": "https://bubblesenterprise.com/privacy",
            },
        },
    };
}

// WebPage schema for Privacy — makes the data policy discoverable by AI agents
const privacySchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy — Bubbles Enterprise LLC",
    "url": "https://bubblesenterprise.com/privacy",
    "description": "Privacy policy for Bubbles Enterprise LLC. We collect only information you provide, never sell data, and protect it with HTTPS and multi-layer spam detection.",
    "publisher": {
        "@type": "LocalBusiness",
        "name": "Bubbles Enterprise LLC",
        "telephone": "+14077151790",
        "address": { "@type": "PostalAddress", "addressLocality": "Orlando", "addressRegion": "FL", "addressCountry": "US" }
    },
    "dateModified": "2026-02-27"
};

export default async function PrivacyPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "privacy" });
    const lp = (path: string) => locale === "en" ? path : `/${locale}${path}`;

    const summaryItems = [
        { icon: "🚫", title: t("sum1Title"), desc: t("sum1Desc") },
        { icon: "🔒", title: t("sum2Title"), desc: t("sum2Desc") },
        { icon: "📧", title: t("sum3Title"), desc: t("sum3Desc") },
    ];

    const sections = [
        {
            id: "collect",
            icon: <Database className="w-5 h-5" />,
            color: "text-blue-600 bg-blue-50",
            arrowColor: "text-blue-500",
            title: t("collectTitle"),
            content: (
                <>
                    <p className="mb-3">{t("collectIntro")}</p>
                    <ul className="space-y-2">
                        <li className="flex items-start gap-2"><span className="text-blue-500 font-bold mt-0.5">→</span><span><strong>{t("collectItem1Bold")}</strong> — {t("collectItem1")}</span></li>
                        <li className="flex items-start gap-2"><span className="text-blue-500 font-bold mt-0.5">→</span><span><strong>{t("collectItem2Bold")}</strong> — {t("collectItem2")}</span></li>
                        <li className="flex items-start gap-2"><span className="text-blue-500 font-bold mt-0.5">→</span><span><strong>{t("collectItem3Bold")}</strong> — {t("collectItem3")}</span></li>
                    </ul>
                    <div className="mt-4 p-3 bg-blue-50 border border-blue-100 rounded-lg text-sm">
                        {t("collectNote")}
                    </div>
                </>
            ),
        },
        {
            id: "use",
            icon: <Eye className="w-5 h-5" />,
            color: "text-purple-600 bg-purple-50",
            arrowColor: "text-purple-500",
            title: t("useTitle"),
            content: (
                <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2"><span className="text-purple-500 font-bold mt-0.5">→</span><span>{t("useItem1")}</span></li>
                    <li className="flex items-start gap-2"><span className="text-purple-500 font-bold mt-0.5">→</span><span>{t("useItem2")}</span></li>
                    <li className="flex items-start gap-2"><span className="text-purple-500 font-bold mt-0.5">→</span><span>{t("useItem3")}</span></li>
                    <li className="flex items-start gap-2"><span className="text-purple-500 font-bold mt-0.5">→</span><span>{t("useItem4")}</span></li>
                    <li className="flex items-start gap-2"><span className="text-purple-500 font-bold mt-0.5">→</span><span>{t("useItem5")}</span></li>
                </ul>
            ),
        },
        {
            id: "sharing",
            icon: <UserCheck className="w-5 h-5" />,
            color: "text-green-600 bg-green-50",
            arrowColor: "text-green-500",
            title: t("sharingTitle"),
            content: (
                <>
                    <div className="p-4 bg-green-50 border border-green-200 rounded-xl mb-4 flex items-start gap-3">
                        <Shield className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                        <p className="font-semibold text-green-800">{t("sharingPromise")}</p>
                    </div>
                    <p className="text-gray-600 mb-3">{t("sharingIntro")}</p>
                    <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start gap-2"><span className="text-green-500 font-bold mt-0.5">→</span><span><strong>{t("sharingItem1Bold")}</strong> — {t("sharingItem1")}</span></li>
                        <li className="flex items-start gap-2"><span className="text-green-500 font-bold mt-0.5">→</span><span><strong>{t("sharingItem2Bold")}</strong> — {t("sharingItem2")}</span></li>
                    </ul>
                </>
            ),
        },
        {
            id: "cookies",
            icon: <Globe className="w-5 h-5" />,
            color: "text-orange-600 bg-orange-50",
            arrowColor: "text-orange-500",
            title: t("cookiesTitle"),
            content: (
                <>
                    <p className="text-gray-600 mb-3">{t("cookiesIntro")}</p>
                    <ul className="space-y-1.5 text-gray-600 mb-3">
                        <li className="flex items-start gap-2"><span className="text-red-400 font-bold mt-0.5">✗</span><span>{t("cookiesNo1")}</span></li>
                        <li className="flex items-start gap-2"><span className="text-red-400 font-bold mt-0.5">✗</span><span>{t("cookiesNo2")}</span></li>
                    </ul>
                    <p className="text-gray-600 text-sm">{t("cookiesLocal")}</p>
                </>
            ),
        },
        {
            id: "security",
            icon: <Lock className="w-5 h-5" />,
            color: "text-slate-600 bg-slate-50",
            arrowColor: "text-slate-500",
            title: t("securityTitle"),
            content: (
                <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2"><span className="text-slate-500 font-bold mt-0.5">→</span><span>{t("securityItem1")}</span></li>
                    <li className="flex items-start gap-2"><span className="text-slate-500 font-bold mt-0.5">→</span><span>{t("securityItem2")}</span></li>
                    <li className="flex items-start gap-2"><span className="text-slate-500 font-bold mt-0.5">→</span><span>{t("securityItem3")}</span></li>
                    <li className="flex items-start gap-2"><span className="text-slate-500 font-bold mt-0.5">→</span><span>{t("securityItem4")}</span></li>
                </ul>
            ),
        },
        {
            id: "retention",
            icon: <Trash2 className="w-5 h-5" />,
            color: "text-red-600 bg-red-50",
            arrowColor: "text-red-500",
            title: t("retentionTitle"),
            content: (
                <>
                    <p className="text-gray-600 mb-3">{t("retentionBody")}</p>
                    <div className="p-3 bg-red-50 border border-red-100 rounded-lg text-sm">
                        <strong>{t("retentionDeleteBold")}</strong> {t("retentionDeleteText")} <a href="tel:4077151790" className="text-bubble-primary hover:underline">(407) 715-1790</a> {t("retentionOr")} <a href="mailto:contact@bubblesenterprise.com" className="text-bubble-primary hover:underline">contact@bubblesenterprise.com</a>. {t("retentionDeleteTime")}
                    </div>
                </>
            ),
        },
        {
            id: "contact",
            icon: <Mail className="w-5 h-5" />,
            color: "text-indigo-600 bg-indigo-50",
            arrowColor: "text-indigo-500",
            title: t("contactTitle"),
            content: (
                <div className="space-y-3 text-gray-600">
                    <p>{t("contactBody")}</p>
                    <div className="grid sm:grid-cols-2 gap-3">
                        <a href="tel:4077151790" className="flex items-center gap-3 p-3 bg-indigo-50 border border-indigo-100 rounded-xl hover:bg-indigo-100 transition">
                            <Phone className="w-5 h-5 text-indigo-600 shrink-0" />
                            <div>
                                <p className="text-xs font-bold text-indigo-600 uppercase tracking-wide">{t("phoneLabel")}</p>
                                <p className="font-semibold text-gray-900">(407) 715-1790</p>
                            </div>
                        </a>
                        <a href="mailto:contact@bubblesenterprise.com" className="flex items-center gap-3 p-3 bg-indigo-50 border border-indigo-100 rounded-xl hover:bg-indigo-100 transition">
                            <Mail className="w-5 h-5 text-indigo-600 shrink-0" />
                            <div>
                                <p className="text-xs font-bold text-indigo-600 uppercase tracking-wide">{t("emailLabel")}</p>
                                <p className="font-semibold text-gray-900 text-sm break-all">contact@bubblesenterprise.com</p>
                            </div>
                        </a>
                    </div>
                </div>
            ),
        },
    ];

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(privacySchema) }} />
            <div className="flex flex-col min-h-screen bg-gray-50">
                {/* Hero */}
                <section className="bg-bubble-navy text-white pt-32 pb-16 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-white to-transparent" />
                    <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
                        <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/10 text-bubble-light text-sm font-bold uppercase tracking-wider mb-6 border border-white/20">
                            <Shield className="w-4 h-4" /> {t("heroBadge")}
                        </span>
                        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">{t("heroTitle")}</h1>
                        <p className="text-blue-200 text-lg max-w-2xl mx-auto">
                            {t("heroSubtitle")}
                        </p>
                        <p className="text-blue-300 text-sm mt-4">{t("heroDate")}</p>
                    </div>
                </section>

                <section className="py-16">
                    <div className="container mx-auto px-4 max-w-4xl">

                        {/* Summary card */}
                        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-10">
                            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">{t("summaryLabel")}</p>
                            <div className="grid sm:grid-cols-3 gap-4">
                                {summaryItems.map(item => (
                                    <div key={item.title} className="text-center p-4 bg-gray-50 rounded-xl">
                                        <div className="text-2xl mb-2">{item.icon}</div>
                                        <p className="font-bold text-gray-900 text-sm">{item.title}</p>
                                        <p className="text-gray-500 text-xs mt-1">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Table of contents */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-10">
                            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 flex items-center gap-2">
                                <FileText className="w-3.5 h-3.5" /> {t("tocLabel")}
                            </p>
                            <div className="grid sm:grid-cols-2 gap-1">
                                {sections.map((s, i) => (
                                    <a key={s.id} href={`#${s.id}`}
                                        className="flex items-center gap-2 text-sm text-gray-600 hover:text-bubble-primary py-1 transition-colors">
                                        <span className="w-5 h-5 rounded-full bg-gray-100 text-gray-500 text-xs flex items-center justify-center font-bold shrink-0">{i + 1}</span>
                                        {s.title}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Sections */}
                        <div className="space-y-5">
                            {sections.map((s, i) => (
                                <div key={s.id} id={s.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden scroll-mt-24">
                                    <div className="px-6 py-5 border-b border-gray-50 flex items-center gap-3">
                                        <span className={`p-2 rounded-lg ${s.color}`}>
                                            {s.icon}
                                        </span>
                                        <h2 className="font-extrabold text-gray-900 text-lg">
                                            {i + 1}. {s.title}
                                        </h2>
                                    </div>
                                    <div className="px-6 py-5 text-gray-600 leading-relaxed">
                                        {s.content}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="mt-12 bg-gradient-to-r from-bubble-primary to-bubble-dark text-white rounded-2xl p-8 text-center">
                            <Shield className="w-8 h-8 mx-auto mb-3 opacity-80" />
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
