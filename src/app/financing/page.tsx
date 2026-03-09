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

// ─── Hero content map por ?ref= ───────────────────────────────────────────────
type HeroContent = {
    headline: string;
    subheadline: string;
    anchor: string;
    anchorSuffix: string;
};

const heroMap: Record<string, HeroContent> = {
    pest: {
        headline: "Something's Living in Your Soffit. Fix It Today, Pay $19/mo.",
        subheadline:
            "Open holes in your soffit are an open invitation. Approved in 60 seconds — protect your home now.",
        anchor: "$19",
        anchorSuffix: "/mo",
    },
    hoa: {
        headline: "HOA Notice? Get It Fixed Before the Fine.",
        subheadline:
            "Don't let a letter turn into a fine. Fix your soffit this week — payments start at $38/mo.",
        anchor: "$38",
        anchorSuffix: "/mo",
    },
    selling: {
        headline: "Inspector Found It. Buyer's Waiting. Fix It Fast.",
        subheadline:
            "Don't lose your sale over soffit. We move fast. Pay later, starting at $38/mo.",
        anchor: "$38",
        anchorSuffix: "/mo",
    },
    water: {
        headline: "Water Gets In. Mold Follows. Fix the Soffit First.",
        subheadline:
            "A small soffit gap becomes a big mold problem fast. Fix it today — $19/mo, approved in 60 seconds.",
        anchor: "$19",
        anchorSuffix: "/mo",
    },
    curb: {
        headline: "Your House Is Worth More Than It Looks.",
        subheadline:
            "New soffit and fascia transforms your curb appeal overnight. Starting at $38/mo — check your rate now.",
        anchor: "$38",
        anchorSuffix: "/mo",
    },
};

const defaultHero: HeroContent = {
    headline: "Your Home Deserves It. Your Wallet Doesn't Have To Feel It.",
    subheadline:
        "Get your soffit and fascia fixed today. Pay as little as $19/mo. Check your rate in 60 seconds — no impact on your credit score.",
    anchor: "$19",
    anchorSuffix: "/mo",
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
function ExitIntentBanner({ refParam }: { refParam: string }) {
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

    const waMsg = encodeURIComponent(
        "Hi, I was checking the financing page and had a question about the application."
    );
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
                    Have questions about the application?
                </h3>
                <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                    The form can feel like a lot. Our team answers personally — in English or Spanish —
                    and walks you through it in minutes.
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
                        Message on WhatsApp
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
                        Call (407) 715-1790
                    </a>

                    <button
                        onClick={() => { setDismissed(true); setVisible(false); }}
                        className="text-xs text-gray-400 hover:text-gray-600 transition-colors py-1"
                    >
                        No thanks, I&apos;ll figure it out myself
                    </button>
                </div>
            </div>
        </div>
    );
}

// ─── Inner page (needs Suspense for useSearchParams) ──────────────────────────
function FinancingContent() {
    const searchParams = useSearchParams();
    const ref = searchParams.get("ref") ?? "";
    const hero = heroMap[ref] ?? defaultHero;

    const [projectValue, setProjectValue] = useState(3000);

    const p36 = calcPayment(projectValue, 36);
    const p84 = calcPayment(projectValue, 84);
    const p144 = calcPayment(projectValue, 144);

    const fmtUSD = (n: number) => `$${Math.round(n).toLocaleString("en-US")}`;
    const fmtMo = (n: number) => `$${Math.round(n)}/mo`;

    return (
        <>
            <ExitIntentBanner refParam={ref} />

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
                        Check My Rate — It&apos;s Free
                    </a>

                    <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/60">
                        <span className="flex items-center gap-1.5">
                            <CheckCircle className="w-4 h-4 text-green-400" /> Soft Credit Check
                        </span>
                        <span className="flex items-center gap-1.5">
                            <CheckCircle className="w-4 h-4 text-green-400" /> No Hidden Fees
                        </span>
                        <span className="flex items-center gap-1.5">
                            <CheckCircle className="w-4 h-4 text-green-400" /> 30+ Lenders
                        </span>
                        <span className="flex items-center gap-1.5">
                            <CheckCircle className="w-4 h-4 text-green-400" /> Approved in 60 Seconds
                        </span>
                    </div>

                    <p className="mt-6 text-[11px] text-white/35 max-w-2xl mx-auto leading-relaxed">
                        Estimated payments shown for illustrative purposes only. Example: $1,500 project / 144 months / ~9.9% APR.
                        Final terms, APR, and approval depend on creditworthiness as determined by Acorn Finance lending partners.
                        Bubbles Enterprise is not a lender and makes no guarantee of approval, rate, or loan terms.
                        All services subject to our{" "}
                        <Link href="/terms#service-agreement" className="underline hover:text-white/60 transition-colors">
                            Service Agreement
                        </Link>
                        .
                    </p>
                </div>
            </section>

            {/* ── SECTION 2 — Como funciona ─────────────────────────────────────── */}
            <section className="bg-white py-16 sm:py-20">
                <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B2A4A] text-center mb-12">
                        How It Works — 3 Simple Steps
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                        {[
                            {
                                num: "1",
                                title: "Fill out a short form",
                                desc: "Less than 2 minutes on your phone. No paperwork, no branch visit.",
                                icon: <Clock className="w-7 h-7" />,
                            },
                            {
                                num: "2",
                                title: "See your real offers",
                                desc: "Compare rates from 30+ lenders. No credit impact — soft pull only.",
                                icon: <DollarSign className="w-7 h-7" />,
                            },
                            {
                                num: "3",
                                title: "Choose & schedule",
                                desc: "Accept an offer and we book your project. That's it.",
                                icon: <CheckCircle className="w-7 h-7" />,
                            },
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
                        Estimate Your Monthly Payment
                    </h2>
                    <p className="text-center text-gray-500 text-sm mb-10">
                        Slide to your estimated project value and see what it looks like monthly.
                    </p>

                    <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 sm:p-8">
                        <div className="flex items-center justify-between mb-2">
                            <label className="text-sm font-semibold text-gray-700">Project value</label>
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
                                { label: "36 months", value: p36, highlight: false },
                                { label: "84 months", value: p84, highlight: false },
                                { label: "144 months", value: p144, highlight: true },
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
                                            Best value
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <p className="text-[11px] text-gray-400 text-center mt-4 italic">
                            ~9.9% APR for illustrative purposes. Actual rate depends on creditworthiness.
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
                            Get My Real Rate
                        </a>
                    </div>
                </div>
            </section>

            {/* ── SECTION 4 — Por que financiar ─────────────────────────────────── */}
            <section className="bg-[#1B2A4A] py-16 sm:py-20">
                <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white text-center mb-12">
                        Why Finance Your Project?
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                icon: <Clock className="w-6 h-6" />,
                                title: "Start Now, Pay Later",
                                desc: "Don't wait months to save up. Your home is protected while you pay over time.",
                            },
                            {
                                icon: <Shield className="w-6 h-6" />,
                                title: "Soft Pull Only",
                                desc: "Checking your rate won't affect your credit score. Only a hard pull when you formally accept.",
                            },
                            {
                                icon: <DollarSign className="w-6 h-6" />,
                                title: "30+ Lenders Competing",
                                desc: "You get real offers from multiple lenders at once. Best rate wins — you choose.",
                            },
                            {
                                icon: <CheckCircle className="w-6 h-6" />,
                                title: "FICO 550+ Accepted",
                                desc: "Even if your credit isn't perfect, you may still qualify. Acorn works with diverse lenders.",
                            },
                            {
                                icon: <Star className="w-6 h-6" />,
                                title: "Lock In Today's Price",
                                desc: "Financing locks in current material and labor rates. Aluminum prices rise constantly — what costs $X today may cost more next month.",
                            },
                            {
                                icon: <Phone className="w-6 h-6" />,
                                title: "We're Here Either Way",
                                desc: "Not approved? Call (407) 715-1790. Our team reviews each case personally and may work out a direct payment schedule.",
                            },
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
                        Real Customers. Real Results.
                    </h2>
                    <p className="text-gray-500 text-sm max-w-xl mx-auto mb-10">
                        We're building our review library. In the meantime, see what customers say about
                        Bubbles Enterprise directly on Google.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                        {[
                            { stat: "500+", label: "Homes served in Central Florida" },
                            { stat: "5★", label: "Average rating on Google" },
                            { stat: "1-day", label: "Typical project completion" },
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
                        Read Our Google Reviews
                    </a>
                </div>
            </section>

            {/* ── SECTION 6 — FAQ ───────────────────────────────────────────────── */}
            <section className="bg-gray-50 py-16 sm:py-20">
                <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B2A4A] text-center mb-10">
                        Frequently Asked Questions
                    </h2>
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-6 divide-y divide-gray-100">
                        <FaqItem
                            q="What is a soft credit pull and how is it different from a hard pull?"
                            a="A soft pull lets you see your rate options without any impact on your credit score — you can check 30+ offers and nothing shows up on your report. A hard pull only happens when you formally accept a specific loan offer. Acorn Finance only does a soft pull during the rate-check phase."
                        />
                        <FaqItem
                            q="How fast do I get pre-approved?"
                            a="Pre-approval takes about 60 seconds after you fill out the short form. Once you accept an offer, funding typically arrives in your account within 24–48 hours."
                        />
                        <FaqItem
                            q="My credit score isn't great. Can I still get financing?"
                            a="Possibly, yes. Acorn Finance works with 30+ lending partners, some of which accept FICO scores starting at 550. There's no cost to check — the worst that can happen is you don't qualify, and we explore other options together."
                        />
                        <FaqItem
                            q="What's the minimum and maximum loan amount?"
                            a="Minimum is $1,000. Maximum is $100,000. Most Bubbles Enterprise projects fall between $1,500 and $12,000 depending on home size, linear feet, and scope of work."
                        />
                        <FaqItem
                            q="Is Bubbles Enterprise the lender? Who do I actually owe money to?"
                            a="Bubbles Enterprise is not a lender. We connect you to Acorn Finance, which works with independent banks and lending partners. You'll pay them directly — we receive our payment after the job is complete, same as any normal project."
                        />
                        <FaqItem
                            q="What if I'm not approved by any lender?"
                            a={
                                <span>
                                    No problem. Call us at{" "}
                                    <a href="tel:4077151790" className="text-[#F97316] font-semibold hover:underline">
                                        (407) 715-1790
                                    </a>{" "}
                                    — Our team reviews each case personally and may be able to arrange a direct payment schedule for qualified customers.
                                </span>
                            }
                        />
                        <FaqItem
                            q="Do I need to be the homeowner to apply?"
                            a="Yes. Financing for home improvement projects requires the applicant to be the legal owner of the property where the work will be done."
                        />
                        <FaqItem
                            q="Can I pay off the loan early without a penalty?"
                            a="Most lenders in the Acorn network have no prepayment penalties, meaning you can pay off your loan early without extra fees. Confirm the specific terms when you review your offer — it will be clearly stated before you accept."
                        />
                        <FaqItem
                            q="I speak Spanish. Can someone help me in Spanish?"
                            a={
                                <span>
                                    Absolutely —{" "}
                                    <a
                                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola, tengo preguntas sobre el financiamiento.")}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-green-600 font-semibold hover:underline"
                                    >
                                        message us on WhatsApp
                                    </a>{" "}
                                    or call (407) 715-1790. Our team is bilingual (English/Spanish) and will walk you through the entire process.
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
                        Ready to Protect Your Home?
                    </h2>
                    <p className="text-white/70 text-base sm:text-lg mb-8">
                        Check your rate now. No commitment. No credit impact. Takes 60 seconds.
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
                        Apply for Financing
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
                            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I have a question about financing my soffit project.")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors text-sm font-semibold"
                            onClick={() => trackEvent("financing_whatsapp_click", { location: "cta_final" })}
                        >
                            <MessageCircle className="w-4 h-4" />
                            WhatsApp Us
                        </a>
                        <span className="hidden sm:block text-white/30">·</span>
                        <span className="text-white/40 text-xs">English &amp; Español</span>
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
                    Check My Rate →
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
