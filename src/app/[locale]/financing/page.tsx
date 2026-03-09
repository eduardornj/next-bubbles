"use client";

import { Suspense, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
    CheckCircle,
    Clock,
    DollarSign,
    Shield,
    Star,
    Phone,
    ChevronDown,
    ChevronUp,
    MessageCircle,
    X,
} from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

// ─── PENDENTE: substituir quando Eduardo criar conta na Acorn Finance ──────────
const ACORN_FINANCE_URL = "https://acornfinance.com/apply?partner=BUBBLES";
// ─── PENDENTE: número WhatsApp Eduardo (formato internacional sem +) ──────────
const WHATSAPP_NUMBER = "14077151790";
// ─────────────────────────────────────────────────────────────────────────────

// ─── GA4 event helper ─────────────────────────────────────────────────────────
function trackEvent(name: string, params?: Record<string, string>) {
    if (typeof window !== "undefined" && (window as unknown as { gtag?: Function }).gtag) {
        (window as unknown as { gtag: Function }).gtag("event", name, params);
    }
}

// ─── Hero content type ────────────────────────────────────────────────────────
type HeroContent = {
    headline: string;
    subheadline: string;
    anchor: string;
    anchorSuffix: string;
};

// ─── PMT calculator — ~9.9% APR ──────────────────────────────────────────────
function calcPayment(principal: number, months: number): number {
    const r = 0.099 / 12;
    return (principal * r) / (1 - Math.pow(1 + r, -months));
}

// ─── FAQ item ─────────────────────────────────────────────────────────────────
function FaqItem({ q, a }: { q: string; a: string | React.ReactNode }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="border-b border-gray-200 last:border-0">
            <button
                className="w-full flex items-center justify-between py-5 text-left gap-4 group"
                onClick={() => setOpen((o) => !o)}
                aria-expanded={open}
            >
                <span className="text-base font-semibold text-gray-900 group-hover:text-[#1B2A4A] transition-colors">
                    {q}
                </span>
                {open ? (
                    <ChevronUp className="w-5 h-5 text-[#F97316] shrink-0" />
                ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 shrink-0 group-hover:text-[#F97316] transition-colors" />
                )}
            </button>
            {open && (
                <div className="pb-5 text-sm text-gray-600 leading-relaxed">{a}</div>
            )}
        </div>
    );
}

// ─── Exit Intent Banner ───────────────────────────────────────────────────────
function ExitIntentBanner({ refParam, t }: { refParam: string; t: (key: string) => string }) {
    const [visible, setVisible] = useState(false);
    const [dismissed, setDismissed] = useState(false);

    useEffect(() => {
        if (dismissed) return;

        // Desktop: detecta mouse saindo pelo topo da janela
        const handleMouseLeave = (e: MouseEvent) => {
            if (e.clientY <= 10 && !dismissed) {
                setVisible(true);
                trackEvent("exit_intent_shown", { ref: refParam || "default" });
            }
        };

        // Mobile: detecta quando a aba fica oculta (tab switch / minimize)
        const handleVisibilityChange = () => {
            if (document.visibilityState === "hidden" && !dismissed) {
                setVisible(true);
            }
        };

        document.addEventListener("mouseleave", handleMouseLeave);
        document.addEventListener("visibilitychange", handleVisibilityChange);

        return () => {
            document.removeEventListener("mouseleave", handleMouseLeave);
            document.removeEventListener("visibilitychange", handleVisibilityChange);
        };
    }, [dismissed, refParam]);

    if (!visible) return null;

    const waMsg = encodeURIComponent(t("exitWhatsappMsg"));
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${waMsg}`;

    return (
        <div className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-6 relative animate-in slide-in-from-bottom-4 duration-300">
                {/* Fechar */}
                <button
                    onClick={() => { setDismissed(true); setVisible(false); }}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                    aria-label="Close"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Ícone */}
                <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center mb-4">
                    <MessageCircle className="w-6 h-6 text-green-600" />
                </div>

                <h3 className="text-lg font-extrabold text-[#1B2A4A] mb-2">
                    {t("exitTitle")}
                </h3>
                <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                    {t("exitBody")}
                </p>

                <div className="flex flex-col gap-3">
                    {/* WhatsApp */}
                    <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 rounded-xl bg-green-500 text-white font-bold py-3 text-sm hover:bg-green-600 transition-colors"
                        onClick={() => {
                            trackEvent("exit_intent_whatsapp_click", { ref: refParam || "default" });
                            setDismissed(true);
                            setVisible(false);
                        }}
                    >
                        <MessageCircle className="w-4 h-4" />
                        {t("exitWhatsapp")}
                    </a>

                    {/* Telefone */}
                    <a
                        href="tel:4077151790"
                        className="flex items-center justify-center gap-2 rounded-xl bg-[#1B2A4A] text-white font-bold py-3 text-sm hover:bg-[#253d6a] transition-colors"
                        onClick={() => {
                            trackEvent("exit_intent_call_click", { ref: refParam || "default" });
                            setDismissed(true);
                            setVisible(false);
                        }}
                    >
                        <Phone className="w-4 h-4" />
                        {t("exitCall")}
                    </a>

                    <button
                        onClick={() => { setDismissed(true); setVisible(false); }}
                        className="text-xs text-gray-400 hover:text-gray-600 transition-colors py-1"
                    >
                        {t("exitDismiss")}
                    </button>
                </div>
            </div>
        </div>
    );
}

// ─── Inner page (needs Suspense for useSearchParams) ──────────────────────────
function FinancingContent() {
    const t = useTranslations("financing");
    const locale = useLocale();
    const lp = (path: string) => locale === "en" ? path : `/${locale}${path}`;
    const searchParams = useSearchParams();
    const ref = searchParams.get("ref") ?? "";

    const heroMap: Record<string, HeroContent> = {
        pest: { headline: t("heroPest"), subheadline: t("heroPestSub"), anchor: "$19", anchorSuffix: "/mo" },
        hoa: { headline: t("heroHoa"), subheadline: t("heroHoaSub"), anchor: "$38", anchorSuffix: "/mo" },
        selling: { headline: t("heroSelling"), subheadline: t("heroSellingSub"), anchor: "$38", anchorSuffix: "/mo" },
        water: { headline: t("heroWater"), subheadline: t("heroWaterSub"), anchor: "$19", anchorSuffix: "/mo" },
        curb: { headline: t("heroCurb"), subheadline: t("heroCurbSub"), anchor: "$38", anchorSuffix: "/mo" },
    };
    const defaultHero: HeroContent = { headline: t("heroDefault"), subheadline: t("heroDefaultSub"), anchor: "$19", anchorSuffix: "/mo" };
    const hero = heroMap[ref] ?? defaultHero;

    const [projectValue, setProjectValue] = useState(3000);

    const p36 = calcPayment(projectValue, 36);
    const p84 = calcPayment(projectValue, 84);
    const p144 = calcPayment(projectValue, 144);

    const fmtUSD = (n: number) => `$${Math.round(n).toLocaleString("en-US")}`;
    const fmtMo = (n: number) => `$${Math.round(n)}/mo`;

    return (
        <>
            <ExitIntentBanner refParam={ref} t={t} />

            {/* ── SECTION 1 — Hero ──────────────────────────────────────────────── */}
            <section className="bg-[#1B2A4A] text-white relative overflow-hidden">
                <div
                    className="absolute bottom-0 left-0 right-0 h-16 bg-white"
                    style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}
                />

                <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
                    <div className="mb-6 inline-flex items-end gap-1">
                        <span className="text-[6rem] sm:text-[8rem] leading-none font-extrabold text-[#F97316]">
                            {hero.anchor}
                        </span>
                        <span className="text-2xl sm:text-3xl font-bold text-[#F97316] mb-4">
                            {hero.anchorSuffix}
                        </span>
                    </div>

                    <h1 className="text-2xl sm:text-4xl font-extrabold leading-tight mb-4 text-white">
                        {hero.headline}
                    </h1>
                    <p className="text-base sm:text-lg text-white/75 max-w-2xl mx-auto mb-8">
                        {hero.subheadline}
                    </p>

                    <a
                        href={ACORN_FINANCE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F97316] px-8 py-4 text-base font-bold text-white shadow-lg hover:bg-orange-500 transition-all hover:scale-105 active:scale-100"
                        onClick={() =>
                            trackEvent("financing_cta_click", { location: "hero", ref: ref || "default" })
                        }
                    >
                        {t("heroCheckRate")}
                    </a>

                    <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/60">
                        <span className="flex items-center gap-1.5">
                            <CheckCircle className="w-4 h-4 text-green-400" /> {t("trustSoftCredit")}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <CheckCircle className="w-4 h-4 text-green-400" /> {t("trustNoFees")}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <CheckCircle className="w-4 h-4 text-green-400" /> {t("trustLenders")}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <CheckCircle className="w-4 h-4 text-green-400" /> {t("trustApproved")}
                        </span>
                    </div>

                    <p className="mt-6 text-[11px] text-white/35 max-w-2xl mx-auto leading-relaxed">
                        {t("heroDisclaimer")}{" "}
                        <Link href={lp("/terms#service-agreement")} className="underline hover:text-white/60 transition-colors">
                            {t("heroServiceAgreement")}
                        </Link>
                        .
                    </p>
                </div>
            </section>

            {/* ── SECTION 2 — Como funciona ─────────────────────────────────────── */}
            <section className="bg-white py-16 sm:py-20">
                <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B2A4A] text-center mb-12">
                        {t("stepsTitle")}
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                        {[
                            { num: "1", title: t("step1Title"), desc: t("step1Desc"), icon: <Clock className="w-7 h-7" /> },
                            { num: "2", title: t("step2Title"), desc: t("step2Desc"), icon: <DollarSign className="w-7 h-7" /> },
                            { num: "3", title: t("step3Title"), desc: t("step3Desc"), icon: <CheckCircle className="w-7 h-7" /> },
                        ].map((step) => (
                            <div key={step.num} className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 rounded-2xl bg-[#1B2A4A] text-[#F97316] flex items-center justify-center mb-4 shadow-lg">
                                    {step.icon}
                                </div>
                                <div className="text-4xl font-extrabold text-[#F97316] mb-1">{step.num}</div>
                                <h3 className="text-lg font-bold text-[#1B2A4A] mb-2">{step.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SECTION 3 — Calculadora Interativa ───────────────────────────── */}
            <section className="bg-gray-50 py-16 sm:py-20">
                <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B2A4A] text-center mb-3">
                        {t("calcTitle")}
                    </h2>
                    <p className="text-center text-gray-500 text-sm mb-10">
                        {t("calcSubtitle")}
                    </p>

                    <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 sm:p-8">
                        <div className="flex items-center justify-between mb-2">
                            <label className="text-sm font-semibold text-gray-700">{t("calcProjectValue")}</label>
                            <span className="text-2xl font-extrabold text-[#1B2A4A]">{fmtUSD(projectValue)}</span>
                        </div>
                        <input
                            type="range"
                            min={1000}
                            max={15000}
                            step={500}
                            value={projectValue}
                            onChange={(e) => {
                                setProjectValue(Number(e.target.value));
                                trackEvent("financing_calculator_interaction", { value: e.target.value });
                            }}
                            className="w-full h-2 rounded-full appearance-none bg-gray-200 accent-[#F97316] cursor-pointer mb-8"
                        />

                        <div className="grid grid-cols-3 gap-3 sm:gap-6">
                            {[
                                { label: t("calc36mo"), value: p36, highlight: false },
                                { label: t("calc84mo"), value: p84, highlight: false },
                                { label: t("calc144mo"), value: p144, highlight: true },
                            ].map((col) => (
                                <div
                                    key={col.label}
                                    className={`rounded-xl p-4 text-center border-2 transition-all ${col.highlight ? "border-[#F97316] bg-orange-50" : "border-gray-100 bg-gray-50"}`}
                                >
                                    <div className={`text-2xl sm:text-3xl font-extrabold ${col.highlight ? "text-[#F97316]" : "text-[#1B2A4A]"}`}>
                                        {fmtMo(col.value)}
                                    </div>
                                    <div className="text-xs text-gray-500 mt-1 font-medium">{col.label}</div>
                                    {col.highlight && (
                                        <div className="mt-2 text-[10px] bg-[#F97316] text-white rounded-full px-2 py-0.5 inline-block font-bold">
                                            {t("calcBestValue")}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <p className="text-[11px] text-gray-400 text-center mt-4 italic">
                            {t("calcDisclaimer")}
                        </p>

                        <a
                            href={ACORN_FINANCE_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 w-full flex items-center justify-center gap-2 rounded-full bg-[#F97316] px-6 py-3.5 text-sm font-bold text-white hover:bg-orange-500 transition-all hover:scale-105 active:scale-100"
                            onClick={() =>
                                trackEvent("financing_cta_click", {
                                    location: "calculator",
                                    ref: ref || "default",
                                    project_value: String(projectValue),
                                })
                            }
                        >
                            {t("calcGetRate")}
                        </a>
                    </div>
                </div>
            </section>

            {/* ── SECTION 4 — Por que financiar ─────────────────────────────────── */}
            <section className="bg-[#1B2A4A] py-16 sm:py-20">
                <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white text-center mb-12">
                        {t("whyTitle")}
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: <Clock className="w-6 h-6" />, title: t("why1Title"), desc: t("why1Desc") },
                            { icon: <Shield className="w-6 h-6" />, title: t("why2Title"), desc: t("why2Desc") },
                            { icon: <DollarSign className="w-6 h-6" />, title: t("why3Title"), desc: t("why3Desc") },
                            { icon: <CheckCircle className="w-6 h-6" />, title: t("why4Title"), desc: t("why4Desc") },
                            { icon: <Star className="w-6 h-6" />, title: t("why5Title"), desc: t("why5Desc") },
                            { icon: <Phone className="w-6 h-6" />, title: t("why6Title"), desc: t("why6Desc") },
                        ].map((card) => (
                            <div key={card.title} className="bg-white/10 rounded-xl p-6 border border-white/10 hover:bg-white/15 transition-colors">
                                <div className="text-[#F97316] mb-3">{card.icon}</div>
                                <h3 className="text-base font-bold text-white mb-2">{card.title}</h3>
                                <p className="text-sm text-white/65 leading-relaxed">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SECTION 5 — Prova Social REAL ────────────────────────────────── */}
            {/* ⚠️  PENDENTE: substituir pelos depoimentos reais dos clientes       */}
            {/* Não usar depoimentos fictícios — prejudica SEO e confiança         */}
            <section className="bg-white py-16 sm:py-20">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B2A4A] mb-4">
                        {t("socialTitle")}
                    </h2>
                    <p className="text-gray-500 text-sm max-w-xl mx-auto mb-10">
                        {t("socialSubtitle")}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                        {[
                            { stat: "500+", label: t("socialStat1") },
                            { stat: "5★", label: t("socialStat2") },
                            { stat: "1-day", label: t("socialStat3") },
                        ].map((item) => (
                            <div key={item.label} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                                <div className="text-3xl font-extrabold text-[#F97316] mb-1">{item.stat}</div>
                                <div className="text-sm text-gray-600">{item.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* CTA para reviews reais */}
                    <a
                        href="https://www.google.com/search?q=Bubbles+Enterprise+Soffit+Orlando+reviews"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border-2 border-[#1B2A4A] text-[#1B2A4A] font-bold px-6 py-3 text-sm hover:bg-[#1B2A4A] hover:text-white transition-all"
                        onClick={() => trackEvent("google_reviews_click", { location: "financing" })}
                    >
                        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                        {t("socialGoogleReviews")}
                    </a>
                </div>
            </section>

            {/* ── SECTION 6 — FAQ ───────────────────────────────────────────────── */}
            <section className="bg-gray-50 py-16 sm:py-20">
                <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B2A4A] text-center mb-10">
                        {t("faqTitle")}
                    </h2>
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-6 divide-y divide-gray-100">
                        <FaqItem q={t("faq1Q")} a={t("faq1A")} />
                        <FaqItem q={t("faq2Q")} a={t("faq2A")} />
                        <FaqItem q={t("faq3Q")} a={t("faq3A")} />
                        <FaqItem q={t("faq4Q")} a={t("faq4A")} />
                        <FaqItem q={t("faq5Q")} a={t("faq5A")} />
                        <FaqItem
                            q={t("faq6Q")}
                            a={
                                <span>
                                    {t("faq6A")}{" "}
                                    <a href="tel:4077151790" className="text-[#F97316] font-semibold hover:underline">
                                        (407) 715-1790
                                    </a>{" "}
                                    — {t("faq6A2")}
                                </span>
                            }
                        />
                        <FaqItem q={t("faq7Q")} a={t("faq7A")} />
                        <FaqItem q={t("faq8Q")} a={t("faq8A")} />
                        <FaqItem
                            q={t("faq9Q")}
                            a={
                                <span>
                                    {t("faq9A")}{" "}
                                    <a
                                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t("faq9WhatsappMsg"))}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-green-600 font-semibold hover:underline"
                                    >
                                        {t("faq9WhatsappLink")}
                                    </a>{" "}
                                    {t("faq9A2")}
                                </span>
                            }
                        />
                    </div>
                </div>
            </section>

            {/* ── SECTION 7 — CTA Final ─────────────────────────────────────────── */}
            <section className="bg-[#1B2A4A] relative overflow-hidden py-20 sm:py-28">
                <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-[#F97316] to-transparent pointer-events-none" />
                <div className="relative mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                        {t("ctaFinalTitle")}
                    </h2>
                    <p className="text-white/70 text-base sm:text-lg mb-8">
                        {t("ctaFinalSubtitle")}
                    </p>
                    <a
                        href={ACORN_FINANCE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F97316] px-10 py-4 text-base font-bold text-white shadow-xl hover:bg-orange-500 transition-all hover:scale-105 active:scale-100"
                        onClick={() =>
                            trackEvent("financing_cta_click", { location: "cta_final", ref: ref || "default" })
                        }
                    >
                        {t("ctaFinalApply")}
                    </a>

                    {/* Opções de contato direto */}
                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="tel:4077151790"
                            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm font-semibold"
                            onClick={() => trackEvent("financing_call_click", { location: "cta_final" })}
                        >
                            <Phone className="w-4 h-4" />
                            (407) 715-1790
                        </a>
                        <span className="hidden sm:block text-white/30">·</span>
                        <a
                            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t("ctaFinalWhatsappMsg"))}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors text-sm font-semibold"
                            onClick={() => trackEvent("financing_whatsapp_click", { location: "cta_final" })}
                        >
                            <MessageCircle className="w-4 h-4" />
                            {t("ctaFinalWhatsapp")}
                        </a>
                        <span className="hidden sm:block text-white/30">·</span>
                        <span className="text-white/40 text-xs">{t("ctaFinalLangs")}</span>
                    </div>
                </div>
            </section>

            {/* ── MOBILE STICKY ─────────────────────────────────────────────────── */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex shadow-[0_-4px_20px_rgba(0,0,0,0.25)]">
                <a
                    href="tel:4077151790"
                    className="flex items-center justify-center gap-1.5 bg-[#1B2A4A] text-white font-bold text-xs py-4"
                    style={{ width: "35%" }}
                    onClick={() => trackEvent("financing_call_click", { location: "mobile_sticky" })}
                >
                    <Phone className="w-4 h-4" />
                    <span>(407) 715-1790</span>
                </a>
                <a
                    href={ACORN_FINANCE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#F97316] text-white font-bold text-sm py-4"
                    style={{ width: "65%" }}
                    onClick={() =>
                        trackEvent("financing_cta_click", { location: "mobile_sticky", ref: ref || "default" })
                    }
                >
                    {t("mobileCheckRate")}
                </a>
            </div>

            <div className="md:hidden h-16" />
        </>
    );
}

export default function FinancingPage() {
    return (
        <div>
            <Suspense fallback={<div className="min-h-screen bg-[#1B2A4A]" />}>
                <FinancingContent />
            </Suspense>
        </div>
    );
}
