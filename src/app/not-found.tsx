import Link from "next/link";
import { Home, Phone, Wrench, Calculator, MapPin, ArrowRight } from "lucide-react";

export default function NotFound() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <section className="flex-1 flex flex-col items-center justify-center px-4 py-24 text-center">
                <div className="max-w-2xl mx-auto">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-bubble-primary font-bold text-sm px-4 py-2 rounded-full mb-8">
                        404 — Page Not Found
                    </div>

                    {/* Big 404 */}
                    <div className="text-[120px] sm:text-[160px] font-extrabold leading-none text-transparent bg-clip-text bg-gradient-to-br from-bubble-navy via-bubble-primary to-bubble-secondary mb-2 select-none">
                        404
                    </div>

                    <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">
                        This page doesn&apos;t exist.
                    </h1>
                    <p className="text-gray-500 text-lg leading-relaxed mb-2 max-w-md mx-auto">
                        It may have been moved, renamed, or removed. Don&apos;t worry — everything you need is below.
                    </p>
                    <p className="text-bubble-primary font-semibold text-base mb-10">
                        Bubbles Enterprise — Soffit & Fascia specialists serving Orlando and Central Florida.
                    </p>

                    {/* Primary CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-bubble-primary text-white font-bold rounded-full hover:bg-bubble-dark transition shadow-lg"
                        >
                            <Home className="w-4 h-4" />
                            Back to Home
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-bubble-primary text-bubble-primary font-bold rounded-full hover:bg-blue-50 transition"
                        >
                            Get a Free Quote <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    {/* Quick links */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-lg mx-auto mb-10">
                        <Link
                            href="/services"
                            className="flex items-center justify-center gap-2 px-4 py-3 bg-white border border-gray-200 rounded-2xl text-gray-700 font-semibold text-sm hover:border-bubble-primary hover:text-bubble-primary transition shadow-sm"
                        >
                            <Wrench className="w-4 h-4" /> Our Services
                        </Link>
                        <Link
                            href="/calculator"
                            className="flex items-center justify-center gap-2 px-4 py-3 bg-white border border-gray-200 rounded-2xl text-gray-700 font-semibold text-sm hover:border-bubble-primary hover:text-bubble-primary transition shadow-sm"
                        >
                            <Calculator className="w-4 h-4" /> Cost Calculator
                        </Link>
                        <Link
                            href="/areas"
                            className="flex items-center justify-center gap-2 px-4 py-3 bg-white border border-gray-200 rounded-2xl text-gray-700 font-semibold text-sm hover:border-bubble-primary hover:text-bubble-primary transition shadow-sm"
                        >
                            <MapPin className="w-4 h-4" /> Service Areas
                        </Link>
                    </div>

                    {/* Phone */}
                    <p className="text-gray-400 text-sm mb-2">Or call us directly:</p>
                    <a
                        href="tel:4077151790"
                        className="inline-flex items-center gap-2 text-bubble-primary font-extrabold text-xl hover:underline"
                    >
                        <Phone className="w-5 h-5" />
                        (407) 715-1790
                    </a>
                </div>
            </section>
        </div>
    );
}
