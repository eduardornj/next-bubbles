"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { Star, ArrowRight, ExternalLink, Phone, Check, Trophy, Gift } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

const STORAGE_KEY = "bubbles-reviews-done";

const PLATFORMS = [
  {
    key: "google" as const,
    url: "https://g.page/r/CUubOLjvbBOFEAE/review",
    badge: true,
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24">
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
      </svg>
    ),
  },
  {
    key: "yelp" as const,
    url: "https://www.yelp.com/writeareview/biz/bubble-enterprises-soffit-orlando",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="#D32323">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
      </svg>
    ),
  },
  {
    key: "facebook" as const,
    url: "https://www.facebook.com/bubblesoffit/reviews",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="#1877F2">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    key: "nextdoor" as const,
    url: "https://nextdoor.com/choose_address/?next=%2Fpages%2Fbubble-enterprises-soffit-fascia%2F&utm_medium=local_business_public_page&utm_source=local_business_public_page",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="#00B246">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.5 14.5h-2v-4c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5v4h-2v-4c0-1.933 1.567-3.5 3.5-3.5s3.5 1.567 3.5 3.5v4z" />
      </svg>
    ),
  },
  {
    key: "angi" as const,
    url: "https://www.angi.com/companylist/us/fl/orlando/bubbles-enterprise-reviews-10813498.htm",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="#FF6153">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    ),
  },
];

export default function ReviewPage() {
  const t = useTranslations("review");
  const params = useParams();
  const locale = (params?.locale as string) ?? "en";
  const lp = (path: string) => locale === "en" ? path : `/${locale}${path}`;

  const [completed, setCompleted] = useState<Set<string>>(new Set());
  const [showCelebration, setShowCelebration] = useState(false);

  // Load from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setCompleted(new Set(JSON.parse(saved)));
    } catch { /* ignore */ }
  }, []);

  // Track page view
  useEffect(() => {
    if (typeof window !== "undefined" && typeof (window as never as { gtag: (...args: unknown[]) => void }).gtag === "function") {
      (window as never as { gtag: (...args: unknown[]) => void }).gtag("event", "review_page_view", {
        event_category: "engagement",
      });
    }
  }, []);

  const markDone = useCallback((key: string) => {
    setCompleted(prev => {
      const next = new Set(prev);
      next.add(key);
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify([...next])); } catch { /* ignore */ }

      // Track GA4
      if (typeof window !== "undefined" && typeof (window as never as { gtag: (...args: unknown[]) => void }).gtag === "function") {
        (window as never as { gtag: (...args: unknown[]) => void }).gtag("event", "review_click", {
          event_category: "engagement",
          event_label: key,
        });
      }

      // Celebration when all 5 done
      if (next.size === PLATFORMS.length) {
        setTimeout(() => setShowCelebration(true), 500);
        if (typeof window !== "undefined" && typeof (window as never as { gtag: (...args: unknown[]) => void }).gtag === "function") {
          (window as never as { gtag: (...args: unknown[]) => void }).gtag("event", "review_all_complete", {
            event_category: "engagement",
          });
        }
      }

      return next;
    });
  }, []);

  const progress = completed.size;
  const allDone = progress === PLATFORMS.length;
  const progressPercent = (progress / PLATFORMS.length) * 100;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-bubble-navy to-bubble-dark text-white relative overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-cyan-500/8 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl relative z-10">
          <span className="inline-block bg-bubble-primary text-white text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider border border-blue-500/50">
            {t("heroBadge")}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
            {t("heroTitle")}
          </h1>
          <p className="text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto">
            {t("heroSubtitle")}
          </p>
        </div>
      </section>

      {/* Trust bar */}
      <div className="bg-white border-b border-gray-100 py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-400 gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400" />
                ))}
              </div>
              <span className="text-sm font-bold text-gray-700">{t("trustStars")}</span>
            </div>
            <div className="flex items-center gap-2 text-sm font-bold text-gray-700">
              <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {t("trustInsured")}
            </div>
            <div className="flex items-center gap-2 text-sm font-bold text-gray-700">
              <svg className="w-5 h-5 text-bubble-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {t("trustArea")}
            </div>
          </div>
        </div>
      </div>

      {/* Progress + Platforms */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Progress tracker */}
          <AnimatedSection>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8 mb-10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${allDone ? "bg-yellow-100" : "bg-blue-50"} transition-colors`}>
                    {allDone ? <Trophy className="w-6 h-6 text-yellow-600" /> : <Gift className="w-6 h-6 text-bubble-primary" />}
                  </div>
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                      {allDone ? t("challengeComplete") : t("challengeTitle")}
                    </h2>
                    <p className="text-sm text-gray-500">
                      {allDone
                        ? t("challengeCompleteDesc")
                        : t("challengeProgress", { done: progress, total: PLATFORMS.length })}
                    </p>
                  </div>
                </div>
                <span className={`text-2xl font-extrabold ${allDone ? "text-yellow-600" : "text-bubble-primary"}`}>
                  {progress}/{PLATFORMS.length}
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-700 ease-out ${allDone ? "bg-gradient-to-r from-yellow-400 to-yellow-500" : "bg-gradient-to-r from-bubble-primary to-cyan-500"}`}
                  style={{ width: `${progressPercent}%` }}
                />
              </div>

              {/* Step dots */}
              <div className="flex justify-between mt-3 px-1">
                {PLATFORMS.map((p) => (
                  <div key={p.key} className="flex flex-col items-center gap-1">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all ${completed.has(p.key) ? "bg-green-500 text-white scale-110" : "bg-gray-200 text-gray-400"}`}>
                      {completed.has(p.key) ? <Check className="w-3.5 h-3.5" /> : null}
                    </div>
                    <span className={`text-[10px] font-medium ${completed.has(p.key) ? "text-green-600" : "text-gray-400"}`}>{t(`platforms.${p.key}`)}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Section header */}
          <AnimatedSection>
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t("sectionTitle")}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {t("sectionSubtitle")}
              </p>
            </div>
          </AnimatedSection>

          {/* Platform cards */}
          <div className="space-y-4">
            {PLATFORMS.map((p, i) => {
              const isDone = completed.has(p.key);
              return (
                <AnimatedSection key={p.key} from="bottom" delay={i * 80}>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => markDone(p.key)}
                    className={`group flex items-center gap-5 w-full rounded-2xl border p-5 md:p-6 transition-all ${isDone ? "bg-green-50 border-green-200 shadow-sm" : "bg-white border-gray-100 shadow-sm hover:shadow-xl hover:border-bubble-primary/30 hover:-translate-y-0.5"}`}
                  >
                    {/* Step number / check */}
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-bold text-sm transition-all ${isDone ? "bg-green-500 text-white" : "bg-gray-100 text-gray-500 group-hover:bg-bubble-primary group-hover:text-white"}`}>
                      {isDone ? <Check className="w-5 h-5" /> : i + 1}
                    </div>

                    {/* Platform icon */}
                    <div className={`w-14 h-14 rounded-xl border flex items-center justify-center shrink-0 transition-colors ${isDone ? "bg-green-50 border-green-200" : "bg-gray-50 border-gray-100 group-hover:bg-blue-50 group-hover:border-blue-200"}`}>
                      {p.icon}
                    </div>

                    {/* Text */}
                    <div className="flex-grow min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className={`font-bold text-lg ${isDone ? "text-green-700" : "text-gray-900"}`}>{t(`platforms.${p.key}`)}</span>
                        {p.badge && !isDone && (
                          <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-green-100 text-green-700">
                            {t("badge")}
                          </span>
                        )}
                        {isDone && (
                          <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-green-100 text-green-700">
                            {t("done")}
                          </span>
                        )}
                      </div>
                      <p className={`text-sm mt-0.5 ${isDone ? "text-green-600" : "text-gray-500"}`}>{t(`descriptions.${p.key}`)}</p>
                    </div>

                    {/* Arrow / check */}
                    <div className={`shrink-0 w-10 h-10 rounded-full border flex items-center justify-center transition-all ${isDone ? "bg-green-500 border-green-500 text-white" : "bg-gray-50 border-gray-200 text-gray-400 group-hover:bg-bubble-primary group-hover:border-bubble-primary group-hover:text-white"}`}>
                      {isDone ? <Check className="w-4 h-4" /> : <ExternalLink className="w-4 h-4" />}
                    </div>
                  </a>
                </AnimatedSection>
              );
            })}
          </div>

          {/* Encouragement message */}
          {progress > 0 && !allDone && (
            <AnimatedSection>
              <div className="mt-8 text-center p-6 bg-blue-50 rounded-2xl border border-blue-100">
                <p className="text-lg font-semibold text-bubble-primary">
                  {t(`encourage${progress}` as "encourage1" | "encourage2" | "encourage3" | "encourage4")}
                </p>
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>

      {/* Celebration overlay */}
      {showCelebration && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={() => setShowCelebration(false)}>
          <div className="bg-white rounded-3xl p-8 md:p-12 max-w-lg mx-4 text-center shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Trophy className="w-10 h-10 text-yellow-600" />
            </div>
            <h3 className="text-3xl font-extrabold text-gray-900 mb-3">
              {t("celebrationTitle")}
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              {t("celebrationDesc")}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href={lp("/contact")}
                className="inline-flex items-center justify-center gap-2 bg-bubble-primary text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition"
              >
                {t("celebrationCta")} <ArrowRight className="w-5 h-5" />
              </Link>
              <button
                onClick={() => setShowCelebration(false)}
                className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-600 px-8 py-4 rounded-full font-bold hover:bg-gray-50 transition"
              >
                {t("celebrationClose")}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-20 bg-bubble-primary text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <AnimatedSection from="bottom">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("ctaTitle")}</h2>
            <p className="text-xl text-blue-100 mb-10">{t("ctaSubtitle")}</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href={lp("/contact")}
                className="inline-flex items-center justify-center gap-2 bg-white text-bubble-primary px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-xl"
              >
                {t("ctaQuote")} <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:4077151790"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition"
              >
                <Phone className="w-5 h-5" /> (407) 715-1790
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
