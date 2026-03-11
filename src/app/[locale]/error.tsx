"use client";

import { Phone, RefreshCw } from "lucide-react";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div role="alert" className="flex flex-col min-h-[80vh] relative overflow-hidden bg-bubble-navy items-center justify-center px-4 py-24 text-center">

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.25] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="err-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
            <linearGradient id="err-fade" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="white" stopOpacity="1" />
              <stop offset="60%" stopColor="white" stopOpacity="0.3" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <mask id="err-mask">
              <rect width="100%" height="100%" fill="url(#err-fade)" />
            </mask>
          </defs>
          <rect width="100%" height="100%" fill="url(#err-grid)" mask="url(#err-mask)" />
        </svg>
      </div>

      {/* Glow orbs */}
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-red-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-xl mx-auto">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_4px_24px_rgba(0,0,0,0.2)]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-300" />
          </span>
          <span className="text-white/90 text-xs font-semibold">500 — Unexpected Error</span>
        </div>

        {/* Icon */}
        <div className="w-20 h-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-300 via-orange-300 to-yellow-300">!</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">
          Something went wrong.
        </h1>
        <p className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-300 to-white mb-6">
          We&apos;re on it.
        </p>

        <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-md mx-auto">
          An unexpected error occurred. Try refreshing — or call us and we&apos;ll help you directly.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-bubble-navy font-bold rounded-full hover:bg-blue-50 hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)]"
          >
            <RefreshCw className="w-4 h-4" /> Try Again
          </button>
          <a
            href="tel:4077151790"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-full hover:bg-white/20 transition-all"
          >
            <Phone className="w-4 h-4" /> (407) 715-1790
          </a>
        </div>
      </div>
    </div>
  );
}
