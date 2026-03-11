"use client";

import { RefreshCw, Phone } from "lucide-react";

export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
    return (
        <html lang="en">
            <body className="flex items-center justify-center min-h-screen bg-[#1E3A8A] px-4 text-center font-sans">

                {/* Glow */}
                <div className="fixed top-1/4 right-1/4 w-[400px] h-[400px] bg-red-500/10 rounded-full blur-[120px] pointer-events-none" />
                <div className="fixed bottom-0 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

                <div className="relative z-10 max-w-md mx-auto">
                    <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-2xl bg-white/10 border border-white/20">
                        <span className="w-2 h-2 rounded-full bg-red-400 animate-ping" />
                        <span className="text-white/90 text-xs font-semibold">500 — Unexpected Error</span>
                    </div>

                    <div className="w-16 h-16 bg-white/10 border border-white/20 rounded-3xl flex items-center justify-center mx-auto mb-6">
                        <span className="text-3xl font-extrabold text-red-300">!</span>
                    </div>

                    <h1 className="text-3xl font-extrabold text-white mb-2">Something went wrong.</h1>
                    <p className="text-xl font-extrabold text-blue-300 mb-6">We&apos;re on it.</p>
                    <p className="text-white/70 text-base leading-relaxed mb-10">
                        An unexpected error occurred. Try refreshing or call us directly.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={reset}
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#1E3A8A] font-bold rounded-full hover:bg-blue-50 transition-all"
                        >
                            <RefreshCw className="w-4 h-4" /> Try Again
                        </button>
                        <a
                            href="tel:4077151790"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white font-bold rounded-full hover:bg-white/20 transition-all"
                        >
                            <Phone className="w-4 h-4" /> (407) 715-1790
                        </a>
                    </div>
                </div>
            </body>
        </html>
    );
}
