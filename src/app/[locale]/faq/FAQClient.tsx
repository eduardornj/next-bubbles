"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Phone, MessageCircle } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

export default function FAQClient() {
    const t = useTranslations("faqPage");
    const params = useParams();
    const locale = (params?.locale as string) ?? "en";
    const lp = (path: string) => locale === "en" ? path : `/${locale}${path}`;

    const categories = [
        {
            label: t("cat1Label"),
            emoji: "🏠",
            faqs: [
                { q: t("cat1q1"), a: t("cat1a1") },
                { q: t("cat1q2"), a: t("cat1a2") },
                { q: t("cat1q3"), a: t("cat1a3") },
            ],
        },
        {
            label: t("cat2Label"),
            emoji: "💰",
            faqs: [
                { q: t("cat2q1"), a: t("cat2a1") },
                { q: t("cat2q2"), a: t("cat2a2") },
                { q: t("cat2q3"), a: t("cat2a3") },
            ],
        },
        {
            label: t("cat3Label"),
            emoji: "📋",
            faqs: [
                { q: t("cat3q1"), a: t("cat3a1") },
                { q: t("cat3q2"), a: t("cat3a2") },
                { q: t("cat3q3"), a: t("cat3a3") },
                { q: t("cat3q4"), a: t("cat3a4") },
            ],
        },
        {
            label: t("cat4Label"),
            emoji: "🛡️",
            faqs: [
                { q: t("cat4q1"), a: t("cat4a1") },
                { q: t("cat4q2"), a: t("cat4a2") },
                { q: t("cat4q3"), a: t("cat4a3") },
                { q: t("cat4q4"), a: t("cat4a4") },
            ],
        },
        {
            label: t("cat5Label"),
            emoji: "📍",
            faqs: [
                { q: t("cat5q1"), a: t("cat5a1") },
            ],
        },
    ];

    const [openKeys, setOpenKeys] = useState<Record<string, boolean>>({ "0-0": true });

    const toggle = (key: string) =>
        setOpenKeys(prev => ({ ...prev, [key]: !prev[key] }));

    const totalQuestions = categories.reduce((acc, c) => acc + c.faqs.length, 0);

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero */}
            <section className="py-24 bg-gradient-to-br from-bubble-navy via-[#0f1f4a] to-bubble-dark text-white relative overflow-hidden">
                {/* Decorative orbs */}
                <div className="absolute top-10 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-cyan-400/10 rounded-full blur-2xl pointer-events-none" />
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl relative z-10">
                    <AnimatedSection from="bottom">
                        <span className="inline-block bg-white/10 border border-white/20 text-white text-sm font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider">
                            {t("heroBadge")}
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
                            {t("heroTitle1")} <span className="text-bubble-light">{t("heroTitle2")}</span>
                        </h1>
                        <p className="text-xl text-blue-100 leading-relaxed">
                            {t("heroSubtitle")}
                        </p>
                        <p className="text-sm text-blue-300 mt-4">
                            {t("questionsCount", { count: totalQuestions, cats: categories.length })}
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* FAQ Accordion by Category */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 max-w-3xl">
                    {categories.map((cat, ci) => (
                        <AnimatedSection key={ci} from="bottom" delay={ci * 60} className="mb-10">
                            {/* Category header */}
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-2xl">{cat.emoji}</span>
                                <h2 className="text-xl font-extrabold text-gray-900">{cat.label}</h2>
                            </div>

                            <div className="space-y-3">
                                {cat.faqs.map((faq, fi) => {
                                    const key = `${ci}-${fi}`;
                                    const isOpen = !!openKeys[key];
                                    return (
                                        <div
                                            key={fi}
                                            className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
                                        >
                                            <button
                                                onClick={() => toggle(key)}
                                                className="w-full text-left px-6 py-5 flex justify-between items-center hover:bg-gray-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-bubble-primary"
                                                aria-expanded={isOpen}
                                            >
                                                <span className="font-bold text-gray-900 text-base sm:text-lg pr-8">{faq.q}</span>
                                                <ChevronDown
                                                    className={`w-5 h-5 text-bubble-primary shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                                                />
                                            </button>
                                            <div
                                                className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}
                                            >
                                                <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                                                    {faq.a}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </AnimatedSection>
                    ))}

                    {/* CTA */}
                    <AnimatedSection from="scale" delay={300}>
                        <div className="mt-6 bg-gradient-to-br from-bubble-navy to-bubble-dark text-white rounded-2xl p-8 text-center shadow-xl">
                            <h2 className="text-2xl font-extrabold mb-2">{t("stillQuestions")}</h2>
                            <p className="text-blue-200 mb-6">{t("stillQSubtitle")}</p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href={lp("/contact")}
                                    className="inline-flex items-center justify-center gap-2 bg-white text-bubble-primary font-bold px-8 py-4 rounded-full hover:bg-blue-50 transition shadow-lg"
                                >
                                    <MessageCircle className="w-5 h-5" />
                                    {t("ctaEstimate")}
                                </Link>
                                <a
                                    href="tel:4077151790"
                                    className="inline-flex items-center justify-center gap-2 bg-white/20 border border-white/30 text-white font-bold px-8 py-4 rounded-full hover:bg-white/30 transition"
                                >
                                    <Phone className="w-5 h-5" />
                                    (407) 715-1790
                                </a>
                            </div>
                            <div className="mt-6 pt-6 border-t border-white/20 flex flex-wrap justify-center gap-4 text-sm text-blue-200">
                                <Link href={lp("/terms")} className="hover:text-white transition">{t("termsLink")}</Link>
                                <span>·</span>
                                <Link href={lp("/privacy")} className="hover:text-white transition">{t("privacyLink")}</Link>
                                <span>·</span>
                                <Link href={lp("/calculator")} className="hover:text-white transition">{t("calculatorLink")}</Link>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
}
