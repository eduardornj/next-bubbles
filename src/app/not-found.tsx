import Link from "next/link";
import { Home, Phone, Wrench, Calculator, MapPin, ArrowRight } from "lucide-react";

export default function NotFound() {
    return (
        <div className="flex flex-col min-h-screen relative overflow-hidden bg-bubble-navy items-center justify-center px-4 py-24 text-center">

            {/* Grid overlay */}
            <div className="absolute inset-0 opacity-[0.25] pointer-events-none">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="nf-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                        </pattern>
                        <linearGradient id="nf-fade" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stopColor="white" stopOpacity="1" />
                            <stop offset="60%" stopColor="white" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="white" stopOpacity="0" />
                        </linearGradient>
                        <mask id="nf-mask">
                            <rect width="100%" height="100%" fill="url(#nf-fade)" />
                        </mask>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#nf-grid)" mask="url(#nf-mask)" />
                </svg>
            </div>

            {/* Glow orbs */}
            <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/15 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-500/8 rounded-full blur-[80px] pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">

                {/* Badge */}
                <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_4px_24px_rgba(0,0,0,0.2)]">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-300" />
                    </span>
                    <span className="text-white/90 text-xs font-semibold">404 — Page Not Found</span>
                </div>

                {/* 404 */}
                <div className="text-[110px] sm:text-[150px] font-extrabold leading-none text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-300 to-white mb-2 select-none">
                    404
                </div>

                <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">
                    Lost in the roofline?
                </h1>
                <p className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-300 to-white mb-6">
                    We&apos;ll get you home.
                </p>

                <p className="text-white/70 text-lg leading-relaxed mb-2 max-w-md mx-auto">
                    This page doesn&apos;t exist or was moved. Everything you need is one click away.
                </p>
                <p className="text-blue-300 font-semibold text-sm mb-10">
                    Soffit &amp; Fascia specialists serving Orlando and Central Florida.
                </p>

                {/* Primary CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-bubble-navy font-bold rounded-full hover:bg-blue-50 hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)]"
                    >
                        <Home className="w-4 h-4" /> Back to Home
                    </Link>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-full hover:bg-white/20 transition-all"
                    >
                        Get a Free Quote <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                {/* Quick links */}
                <div className="grid grid-cols-3 gap-3 max-w-md mx-auto mb-10">
                    <Link href="/services" className="flex flex-col items-center gap-1.5 px-3 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white/80 font-semibold text-xs hover:bg-white/20 hover:text-white transition-all">
                        <Wrench className="w-4 h-4" /> Our Services
                    </Link>
                    <Link href="/calculator" className="flex flex-col items-center gap-1.5 px-3 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white/80 font-semibold text-xs hover:bg-white/20 hover:text-white transition-all">
                        <Calculator className="w-4 h-4" /> Cost Calculator
                    </Link>
                    <Link href="/areas" className="flex flex-col items-center gap-1.5 px-3 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white/80 font-semibold text-xs hover:bg-white/20 hover:text-white transition-all">
                        <MapPin className="w-4 h-4" /> Service Areas
                    </Link>
                </div>

                {/* Phone */}
                <p className="text-white/40 text-xs mb-2">Or call us directly:</p>
                <a href="tel:4077151790" className="inline-flex items-center gap-2 text-white font-extrabold text-xl hover:text-blue-300 transition-colors">
                    <Phone className="w-5 h-5" /> (407) 715-1790
                </a>
            </div>
        </div>
    );
}
