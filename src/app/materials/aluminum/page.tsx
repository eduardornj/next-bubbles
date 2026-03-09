import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ArrowRight, Phone, Shield, Zap, Droplets, Wind } from "lucide-react";
// Phone is used in CTA section tel: link
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
    title: "Aluminum Soffit Orlando | 20-30 Yr Lifespan | Bubbles",
    description: "Premium aluminum soffit in Orlando FL. Fire-resistant, non-combustible, hurricane-rated, 10 color options, 20-30 year lifespan. Trusted by Florida's top home builders. Free estimate.",
    openGraph: {
        title: "Aluminum Soffit Installation | Bubbles Enterprise Orlando",
        description: "The professional choice. Fire-resistant aluminum soffit with 20-30 year lifespan. 10 colors. Free estimate.",
        url: "https://bubblesenterprise.com/materials/aluminum",
    },
    alternates: {
        canonical: "https://bubblesenterprise.com/materials/aluminum",
        languages: {
            en: "https://bubblesenterprise.com/materials/aluminum",
            es: "https://bubblesenterprise.com/es/materials/aluminum",
            pt: "https://bubblesenterprise.com/pt/materials/aluminum",
            "x-default": "https://bubblesenterprise.com/materials/aluminum",
        },
    },
};

const aluminumColors = [
    { name: "White", inStock: true, img: "images/soffit_aluminum/aluminum-soffit-White-SG.webp" },
    { name: "Black", inStock: true, img: "images/soffit_aluminum/aluminum-soffit-black.webp" },
    { name: "Chocolate Brown", inStock: false, img: "images/soffit_aluminum/aluminum-soffit-Chocolate-Brown.webp" },
    { name: "Beige", inStock: false, img: "images/soffit_aluminum/aluminum-soffit-Beige-MC.webp" },
    { name: "Mocha", inStock: false, img: "images/soffit_aluminum/aluminum-soffit-Mocha.webp" },
    { name: "Pearl Grey", inStock: false, img: "images/soffit_aluminum/aluminum-soffit-Pearl-Grey.webp" },
    { name: "Sandalwood", inStock: false, img: "images/soffit_aluminum/aluminum-soffit-Sandalwood.webp" },
    { name: "Ivory", inStock: false, img: "images/soffit_aluminum/aluminum-soffit-ivory.webp" },
    { name: "Khaki", inStock: false, img: "images/soffit_aluminum/aluminum-soffit-khaki.webp" },
    { name: "Linen", inStock: false, img: "images/soffit_aluminum/aluminum-soffit-linen.webp" },
];

const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://bubblesenterprise.com/materials/aluminum#service",
    name: "Aluminum Soffit Installation",
    serviceType: "Aluminum Soffit and Fascia Installation",
    description: "Premium aluminum soffit installation in Orlando, FL. Fire-resistant, durable 20-30 year lifespan, 10 color options. IRC 806 compliant.",
    dateModified: "2026-03-05",
    provider: { "@id": "https://bubblesenterprise.com/#business" },
    areaServed: [
        { "@type": "City", name: "Orlando", addressRegion: "FL" },
        { "@type": "City", name: "Kissimmee", addressRegion: "FL" },
        { "@type": "City", name: "Winter Park", addressRegion: "FL" },
        { "@type": "City", name: "Sanford", addressRegion: "FL" },
        { "@type": "City", name: "Clermont", addressRegion: "FL" },
    ],
};

const benefits = [
    { icon: Shield, title: "Hurricane Rated", body: "Engineered to withstand Florida hurricane-force winds — standard aluminum soffit rating." },
    { icon: Zap, title: "Fire Resistant", body: "Non-combustible material. Won't spread flame, won't fuel a fire. Critical for Florida code." },
    { icon: Wind, title: "Superior Ventilation", body: "Available in solid and vented (perforated) profiles for maximum attic airflow." },
    { icon: Droplets, title: "Won't Rot or Warp", body: "100% moisture resistant. Florida humidity and rain will never cause deterioration." },
];

export default function AluminumSoffitPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <div className="flex flex-col min-h-screen">

                {/* ── HERO ─────────────────────────────────────────────── */}
                <section className="relative overflow-hidden py-24 lg:py-32 bg-gradient-to-br from-blue-950 via-indigo-950 to-gray-950 text-white">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px]" aria-hidden />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[80px]" aria-hidden />
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
                        <AnimatedSection className="text-center">
                            <span className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold mb-6 uppercase tracking-widest">
                                <span className="w-2 h-2 bg-blue-300 rounded-full animate-pulse" aria-hidden />
                                Premium Materials
                            </span>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                                Aluminum Soffit:<br />
                                <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                                    The Professional&apos;s Choice
                                </span>
                            </h1>
                            <p className="text-lg md:text-xl text-blue-100/80 max-w-2xl mx-auto mb-10 leading-relaxed">
                                Fire-resistant, hurricane-rated, and maintenance-free for 20-30 years.
                                Trusted by Florida&apos;s top builders for a reason.
                            </p>
                        </AnimatedSection>
                        <AnimatedSection delay={130} className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="#colors" className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition shadow-xl text-base">
                                View 10 Colors
                            </a>
                            <Link href="/calculator" className="inline-flex items-center justify-center gap-2 bg-bubble-primary border border-blue-500/50 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-600 transition shadow-lg text-base">
                                Get Instant Estimate <ArrowRight className="w-4 h-4" />
                            </Link>
                        </AnimatedSection>
                    </div>
                </section>

                {/* ── WHY ALUMINUM ─────────────────────────────────────── */}
                <section className="py-20 md:py-28 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                            <AnimatedSection from="left">
                                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                                    Why Professionals Choose Aluminum
                                </h2>
                                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                    Builders and architects specify aluminum for any project where durability matters.
                                    50-year manufacturer warranty options available. The only non-combustible soffit material.
                                </p>

                                {/* Stats */}
                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    <div className="bg-blue-50 p-5 rounded-2xl border border-blue-100 text-center">
                                        <div className="text-3xl font-extrabold text-bubble-primary mb-1">20-30</div>
                                        <div className="text-xs text-gray-600 font-semibold uppercase tracking-wide">Year Lifespan</div>
                                    </div>
                                    <div className="bg-blue-50 p-5 rounded-2xl border border-blue-100 text-center">
                                        <div className="text-3xl font-extrabold text-bubble-primary mb-1">100%</div>
                                        <div className="text-xs text-gray-600 font-semibold uppercase tracking-wide">Recyclable</div>
                                    </div>
                                </div>

                                <ul className="space-y-3">
                                    {[
                                        "Hurricane and strong wind resistant",
                                        "Fire resistant — Non-combustible",
                                        "Superior ventilation options (vented & solid)",
                                        "Low maintenance — won't rot, crack, or warp",
                                        "10+ premium color options in stock",
                                    ].map(f => (
                                        <li key={f} className="flex items-center gap-3 text-gray-700 text-sm">
                                            <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                            </AnimatedSection>

                            <AnimatedSection from="right">
                                <div className="bg-gradient-to-br from-blue-900 to-indigo-950 rounded-2xl p-10 text-white text-center shadow-2xl relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl" aria-hidden />
                                    <div className="relative z-10">
                                        <div className="w-20 h-20 bg-white/10 border border-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                                            <Shield className="w-10 h-10 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-bold mb-4">Manufacturer Warranty</h3>
                                        <p className="text-blue-100 leading-relaxed mb-6 text-sm">
                                            Our aluminum soffit comes with manufacturer warranty up to <strong>30 years</strong>,
                                            plus our <strong>1-year installation workmanship guarantee</strong>.
                                        </p>
                                        <div className="space-y-2 text-left">
                                            {[
                                                ["Material warranty", "Up to 30 years"],
                                                ["Labor warranty", "1 year"],
                                                ["Hurricane rating", "Standard"],
                                                ["Fire classification", "Non-combustible"],
                                            ].map(([k, v]) => (
                                                <div key={k} className="flex justify-between py-2 border-b border-white/10 text-sm">
                                                    <span className="text-blue-200">{k}</span>
                                                    <span className="font-bold text-white">{v}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <Link href="/contact" className="inline-flex items-center gap-2 mt-6 text-blue-300 font-bold hover:text-white text-sm transition">
                                            Get Warranty Details <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </section>

                {/* ── BENEFIT CARDS ────────────────────────────────────── */}
                <section className="py-16 bg-gray-50 border-y border-gray-100">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            {benefits.map((b, i) => {
                                const Icon = b.icon;
                                return (
                                    <AnimatedSection key={b.title} delay={i * 80} from="bottom">
                                        <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-lg transition text-center">
                                            <div className="w-14 h-14 bg-bubble-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                                <Icon className="w-7 h-7 text-bubble-primary" />
                                            </div>
                                            <h3 className="font-bold text-gray-900 mb-2">{b.title}</h3>
                                            <p className="text-gray-500 text-sm leading-relaxed">{b.body}</p>
                                        </div>
                                    </AnimatedSection>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* ── SOLID vs VENTED ──────────────────────────────────── */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                        <AnimatedSection className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Solid vs. Vented Aluminum</h2>
                            <p className="text-gray-500 text-xl">Choose the right profile for each area of your roof</p>
                        </AnimatedSection>
                        <div className="grid md:grid-cols-2 gap-6">
                            <AnimatedSection from="left">
                                <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200 hover:border-gray-400 hover:shadow-xl transition-all group">
                                    <div className="flex items-center gap-4 mb-5">
                                        <div className="w-14 h-14 bg-gray-200 rounded-xl flex items-center justify-center text-2xl font-bold text-gray-500 group-hover:bg-gray-300 transition">▬</div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900">Solid Aluminum</h3>
                                            <span className="text-sm text-gray-500 font-medium">Protective & Sleek</span>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 mb-5 text-sm leading-relaxed">
                                        Non-perforated panels for areas where ventilation isn&apos;t needed — like garage eaves or architectural details.
                                        Provides a smooth, elegant finish that completely seals the exterior.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {["Easy Cleaning", "Pest Barrier", "Modern Look", "No ventilation required"].map(b => (
                                            <span key={b} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-600">{b}</span>
                                        ))}
                                    </div>
                                </div>
                            </AnimatedSection>
                            <AnimatedSection from="right">
                                <div className="bg-blue-50 rounded-2xl p-8 border-2 border-bubble-primary/30 hover:border-bubble-primary hover:shadow-xl transition-all group">
                                    <div className="flex items-center gap-4 mb-5">
                                        <div className="w-14 h-14 bg-bubble-primary/20 rounded-xl flex items-center justify-center text-2xl text-bubble-primary group-hover:bg-bubble-primary group-hover:text-white transition">⚬</div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900">Vented Aluminum</h3>
                                            <span className="text-sm text-bubble-primary font-medium">Breathable & Functional</span>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 mb-5 text-sm leading-relaxed">
                                        Precision perforations allow continuous air circulation. Critical for attic health,
                                        mold prevention, and energy efficiency in Florida&apos;s humid climate.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {["Reduces Cooling Costs", "Prevents Mold", "Extends Roof Life", "IRC 806 compliant"].map(b => (
                                            <span key={b} className="px-3 py-1 bg-blue-100 border border-blue-200 rounded-full text-xs font-medium text-blue-700">{b}</span>
                                        ))}
                                    </div>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </section>

                {/* ── COLORS ───────────────────────────────────────────── */}
                <section id="colors" className="py-20 bg-gray-50 border-t border-gray-100">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                        <AnimatedSection className="text-center mb-8">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">10 Available Colors</h2>
                            <p className="text-gray-500 text-lg">White & Black in stock for immediate installation. Other colors: 1–3 business days.</p>
                        </AnimatedSection>

                        {/* Legend */}
                        <AnimatedSection>
                            <div className="flex justify-center gap-6 mb-10 flex-wrap">
                                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-200 text-sm shadow-sm">
                                    <span className="w-3 h-3 bg-green-500 rounded-full" />
                                    <span className="font-bold text-gray-900">In Stock:</span>
                                    <span className="text-gray-600">Ready to install</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-200 text-sm shadow-sm">
                                    <span className="w-3 h-3 bg-blue-400 rounded-full" />
                                    <span className="font-bold text-gray-900">Order:</span>
                                    <span className="text-gray-600">1–3 business days</span>
                                </div>
                            </div>
                        </AnimatedSection>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
                            {aluminumColors.map((color, i) => (
                                <AnimatedSection key={color.name} delay={i * 50} from="bottom">
                                    <div className="group rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 bg-white">
                                        <div className="relative aspect-square overflow-hidden">
                                            {color.inStock && (
                                                <div className="absolute top-2 right-2 bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase z-10 shadow-sm">
                                                    In Stock
                                                </div>
                                            )}
                                            <Image
                                                src={`/${color.img}`}
                                                alt={`${color.name} Aluminum Soffit sample`}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                loading="lazy"
                                            />
                                        </div>
                                        <p className="text-center font-semibold text-gray-900 text-xs py-3 px-2">{color.name}</p>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>

                        <AnimatedSection delay={200}>
                            <p className="text-center text-xs text-gray-400 italic mt-8 max-w-2xl mx-auto">
                                Colors are digitally represented. We recommend requesting physical samples before your final decision.
                            </p>
                        </AnimatedSection>
                    </div>
                </section>

                {/* ── CTA ─────────────────────────────────────────────── */}
                <section className="py-20 bg-gray-950 text-white text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/15 rounded-full blur-[80px]" aria-hidden />
                    <div className="container mx-auto px-4 max-w-4xl relative z-10">
                        <AnimatedSection>
                            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Upgrade to Aluminum Today</h2>
                            <p className="text-xl text-gray-400 mb-10 max-w-xl mx-auto">
                                Durable, beautiful, built to last 20-30 years in Florida&apos;s climate.
                                One installation you won&apos;t think about for decades.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-bubble-primary text-white px-10 py-4 rounded-full font-bold text-base hover:bg-blue-600 transition shadow-xl">
                                    Request Free Quote <ArrowRight className="w-5 h-5" />
                                </Link>
                                <Link href="/calculator" className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-10 py-4 rounded-full font-bold text-base hover:bg-gray-100 transition">
                                    Instant Estimate
                                </Link>
                                <a href="tel:4077151790" className="inline-flex items-center justify-center gap-2 bg-white/5 border-2 border-gray-700 text-white px-10 py-4 rounded-full font-bold text-base hover:bg-white/10 transition">
                                    <Phone className="w-5 h-5" /> (407) 715-1790
                                </a>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>
            </div>
        </>
    );
}
