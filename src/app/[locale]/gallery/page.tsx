import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, Instagram } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { WORKS, BEFORE_AFTER } from "./gallery-data";
import GalleryClient from "./GalleryClient";

export default async function GalleryPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "gallery" });
    const lp = (path: string) => locale === "en" ? path : `/${locale}${path}`;

    return (
        <div className="flex flex-col min-h-screen">

            {/* HERO (static - Server Component) */}
            <section className="relative overflow-hidden bg-gray-950 text-white py-20 md:py-28">
                <Image
                    src="/images/works/IMG_3511.webp"
                    alt=""
                    aria-hidden="true"
                    fill
                    sizes="100vw"
                    className="object-cover opacity-10 blur-sm scale-105"
                />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[80px]" aria-hidden="true" />
                <div className="absolute -bottom-16 -left-16 w-[400px] h-[400px] bg-cyan-500/15 rounded-full blur-[60px]" aria-hidden="true" />

                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                        <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" aria-hidden="true" />
                        {t("heroBadge")}
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-5 leading-tight tracking-tight">
                        {t("heroTitle1")}<br />
                        <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                            {t("heroTitle2")}
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-blue-100/80 max-w-2xl mx-auto mb-10 leading-relaxed">
                        {t("heroDesc")}
                    </p>

                    <div className="flex justify-center gap-6 sm:gap-12 flex-wrap">
                        {[
                            { n: "500+", label: t("stat1") },
                            { n: "10+", label: t("stat2") },
                            { n: "100%", label: t("stat3") },
                        ].map(s => (
                            <div key={s.label} className="text-center">
                                <div className="text-2xl sm:text-3xl font-extrabold text-white">{s.n}</div>
                                <div className="text-xs text-blue-300/80 font-semibold uppercase tracking-wider mt-0.5">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* BEFORE/AFTER (static - Server Component, renders only when photos exist) */}
            {BEFORE_AFTER.length > 0 && (
                <section className="py-16 md:py-20 bg-white border-b border-gray-100">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">{t("beforeAfterTitle")}</h2>
                            <p className="text-gray-500 text-lg max-w-xl mx-auto">{t("beforeAfterSubtitle")}</p>
                        </div>
                        <div className="space-y-10">
                            {BEFORE_AFTER.map((item, i) => (
                                <div key={i} className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden">
                                    <div className="grid md:grid-cols-2">
                                        <div className="relative">
                                            <span className="absolute top-4 left-4 z-10 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                                {t("beforeLabel")}
                                            </span>
                                            <Image
                                                src={`/images/works/${item.before}`}
                                                alt={`Before - ${t(item.titleKey as Parameters<typeof t>[0])}`}
                                                width={800}
                                                height={600}
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="relative">
                                            <span className="absolute top-4 left-4 z-10 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                                {t("afterLabel")}
                                            </span>
                                            <Image
                                                src={`/images/works/${item.after}`}
                                                alt={`After - ${t(item.titleKey as Parameters<typeof t>[0])}`}
                                                width={800}
                                                height={600}
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-lg font-bold text-gray-900 mb-1">{t(item.titleKey as Parameters<typeof t>[0])}</h3>
                                        <p className="text-gray-500 text-sm">{t(item.descKey as Parameters<typeof t>[0])}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* GALLERY (interactive - Client Component) */}
            <section className="flex-1 py-10 md:py-16 bg-gray-100">
                <div className="container mx-auto px-3 sm:px-5 lg:px-8 max-w-7xl">
                    <GalleryClient works={WORKS} />
                </div>
            </section>

            {/* CTA (static - Server Component) */}
            <section className="py-16 md:py-20 bg-white text-center border-t border-gray-100">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">{t("ctaTitle")}</h2>
                    <p className="text-gray-500 text-lg mb-8">{t("ctaSubtitle")}</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href={lp("/contact")}
                            className="inline-flex items-center justify-center gap-2 bg-bubble-primary text-white px-8 py-4 rounded-full font-bold hover:bg-bubble-dark transition-all shadow-lg text-base"
                        >
                            {t("ctaEstimate")} <ArrowRight className="w-5 h-5" />
                        </Link>
                        <a
                            href="tel:4077151790"
                            className="inline-flex items-center justify-center gap-2 border-2 border-bubble-primary text-bubble-primary px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-all text-base"
                        >
                            <Phone className="w-5 h-5" /> (407) 715-1790
                        </a>
                        <a
                            href="https://www.instagram.com/bubblesoffit"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 border-2 border-pink-400 text-pink-600 px-8 py-4 rounded-full font-bold hover:bg-pink-50 transition-all text-base"
                        >
                            <Instagram className="w-5 h-5" /> @bubblesoffit
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
