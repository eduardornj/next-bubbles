import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ArrowRight, Phone, DollarSign } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
    title: "Vinyl Soffit Orlando | Best Value, 12 Colors | Bubbles",
    description: "Vinyl soffit installation in Orlando — excellent cost-benefit, moisture and pest resistant, available in 12 colors. Ideal for budget-conscious homeowners. Free estimate. (407) 715-1790.",
    openGraph: {
        title: "Vinyl Soffit Installation | Best Value | Bubbles Enterprise Orlando",
        description: "Cost-effective vinyl soffit for Orlando homes. 12 color options, rot resistant, 15+ year lifespan. Free estimate.",
        url: "https://bubblesenterprise.com/materials/vinyl",
    },
    alternates: {
        canonical: "https://bubblesenterprise.com/materials/vinyl",
        languages: {
            en: "https://bubblesenterprise.com/materials/vinyl",
            es: "https://bubblesenterprise.com/es/materials/vinyl",
            pt: "https://bubblesenterprise.com/pt/materials/vinyl",
            "x-default": "https://bubblesenterprise.com/materials/vinyl",
        },
    },
};

const vinylColors = [
    { name: "White", slug: "white", inStock: true },
    { name: "Azure", slug: "azure", inStock: false },
    { name: "Flagstone", slug: "flagstone", inStock: false },
    { name: "Ivory", slug: "ivory", inStock: false },
    { name: "Khaki", slug: "khaki", inStock: false },
    { name: "Linen", slug: "linen", inStock: false },
    { name: "Mocha", slug: "mocha", inStock: false },
    { name: "Prestige Beige", slug: "prestige_beige", inStock: false },
    { name: "Sandelwood", slug: "sandelwood", inStock: false },
    { name: "Slate Grey", slug: "slate_grey", inStock: false },
    { name: "Terraverde", slug: "terraverde", inStock: false },
    { name: "Wicker", slug: "wicker", inStock: false },
];

const compareRows = [
    { feature: "Initial Cost", vinyl: "Lower ✓", alum: "Higher", vinylWins: true },
    { feature: "Lifespan", vinyl: "15+ years", alum: "25+ years ✓", vinylWins: false },
    { feature: "Maintenance", vinyl: "Low", alum: "Very Low ✓", vinylWins: false },
    { feature: "Fire Resistance", vinyl: "Moderate", alum: "Excellent ✓", vinylWins: false },
    { feature: "Color Options", vinyl: "12 ✓", alum: "10", vinylWins: true },
    { feature: "Install Complexity", vinyl: "Simple ✓", alum: "Moderate", vinylWins: true },
];

const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://bubblesenterprise.com/materials/vinyl#service",
    name: "Vinyl Soffit Installation",
    serviceType: "Vinyl Soffit and Fascia Installation",
    description: "Cost-effective vinyl soffit installation in Orlando, FL. Moisture, pest, and UV resistant. 12 color options. 15+ year lifespan.",
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

export default function VinylSoffitPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <div className="flex flex-col min-h-screen">

                {/* ── HERO ─────────────────────────────────────────────── */}
                <section className="relative overflow-hidden py-24 lg:py-32 bg-gradient-to-br from-gray-950 via-emerald-950 to-gray-900 text-white">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-600/20 rounded-full blur-[100px]" aria-hidden />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[80px]" aria-hidden />
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
                        <AnimatedSection className="text-center">
                            <span className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold mb-6 uppercase tracking-widest">
                                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" aria-hidden />
                                Best Value Option
                            </span>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                                Vinyl Soffit:<br />
                                <span className="bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">
                                    Quality That Fits Your Budget
                                </span>
                            </h1>
                            <p className="text-lg md:text-xl text-emerald-100/80 max-w-2xl mx-auto mb-10 leading-relaxed">
                                Rot-resistant, moisture-proof, and available in 12 colors.
                                Excellent performance at a price point that makes sense.
                            </p>
                        </AnimatedSection>
                        <AnimatedSection delay={130} className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="#colors" className="inline-flex items-center justify-center gap-2 bg-white text-emerald-900 px-8 py-4 rounded-full font-bold hover:bg-emerald-50 transition shadow-xl text-base">
                                View 12 Colors
                            </a>
                            <Link href="/calculator" className="inline-flex items-center justify-center gap-2 bg-emerald-700 border border-emerald-500/50 text-white px-8 py-4 rounded-full font-bold hover:bg-emerald-600 transition shadow-lg text-base">
                                Get Instant Estimate <ArrowRight className="w-4 h-4" />
                            </Link>
                        </AnimatedSection>
                    </div>
                </section>

                {/* ── WHY VINYL ────────────────────────────────────────── */}
                <section className="py-20 md:py-28 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                            <AnimatedSection from="left">
                                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                                    Why Choose Vinyl Soffit?
                                </h2>
                                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                    Vinyl delivers excellent value for homeowners who want quality without overpaying.
                                    A smart choice combining functionality, color variety, and economy.
                                </p>

                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    <div className="bg-emerald-50 p-5 rounded-2xl border border-emerald-100 text-center">
                                        <div className="text-3xl font-extrabold text-emerald-600 mb-1">15+</div>
                                        <div className="text-xs text-gray-600 font-semibold uppercase tracking-wide">Year Lifespan</div>
                                    </div>
                                    <div className="bg-emerald-50 p-5 rounded-2xl border border-emerald-100 text-center">
                                        <div className="text-3xl font-extrabold text-emerald-600 mb-1">12</div>
                                        <div className="text-xs text-gray-600 font-semibold uppercase tracking-wide">Color Options</div>
                                    </div>
                                </div>

                                <ul className="space-y-3">
                                    {[
                                        "Most economical soffit option available",
                                        "100% moisture and rot resistant",
                                        "Pest and insect resistant",
                                        "Easy lightweight installation",
                                        "Low maintenance — never needs painting",
                                    ].map(f => (
                                        <li key={f} className="flex items-center gap-3 text-gray-700 text-sm">
                                            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                            </AnimatedSection>

                            <AnimatedSection from="right">
                                <div className="bg-gradient-to-br from-emerald-900 to-teal-950 rounded-2xl p-10 text-white text-center shadow-2xl relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl" aria-hidden />
                                    <div className="relative z-10">
                                        <div className="w-20 h-20 bg-white/10 border border-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                                            <DollarSign className="w-10 h-10 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-bold mb-4">Best Cost-Benefit</h3>
                                        <p className="text-emerald-100 leading-relaxed mb-6 text-sm">
                                            Get premium soffit protection without breaking your renovation budget.
                                            Vinyl delivers the essentials at the best price point we offer.
                                        </p>
                                        <div className="space-y-2 text-left">
                                            {[
                                                ["Lifespan", "15+ years"],
                                                ["Labor warranty", "1 year"],
                                                ["Color options", "12 colors"],
                                                ["Paint required", "Never"],
                                            ].map(([k, v]) => (
                                                <div key={k} className="flex justify-between py-2 border-b border-white/10 text-sm">
                                                    <span className="text-emerald-200">{k}</span>
                                                    <span className="font-bold text-white">{v}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <Link href="/calculator" className="inline-flex items-center gap-2 mt-6 text-emerald-300 font-bold hover:text-white text-sm transition">
                                            Calculate Your Cost <ArrowRight className="w-4 h-4" />
                                        </Link>
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
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">12 Available Colors</h2>
                            <p className="text-gray-500 text-lg">White in stock. Other colors available in 1–3 business days.</p>
                        </AnimatedSection>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
                            {vinylColors.map((color, i) => (
                                <AnimatedSection key={color.name} delay={i * 50} from="bottom">
                                    <div className="group rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 bg-white">
                                        <div className="relative aspect-square overflow-hidden">
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 z-10" />
                                            <Image
                                                src={`/images/soffit_vinyl/vinyl_soffit_${color.slug}.webp`}
                                                alt={`${color.name} vinyl soffit sample`}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="p-3 text-center border-t border-gray-100">
                                            {color.inStock ? (
                                                <span className="text-[10px] bg-green-100 text-green-700 font-bold px-2 py-0.5 rounded-full block mb-1 uppercase tracking-wide">✓ In Stock</span>
                                            ) : (
                                                <span className="text-[10px] bg-gray-100 text-gray-500 font-medium px-2 py-0.5 rounded-full block mb-1">Order 1-3 days</span>
                                            )}
                                            <p className="font-semibold text-gray-900 text-sm">{color.name}</p>
                                        </div>
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

                {/* ── COMPARISON TABLE ─────────────────────────────────── */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
                        <AnimatedSection className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Vinyl vs. Aluminum</h2>
                            <p className="text-gray-500 text-xl">Compare to pick the right material for your home</p>
                        </AnimatedSection>

                        <AnimatedSection>
                            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                                <table className="w-full">
                                    <thead>
                                        <tr className="bg-gray-50">
                                            <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Feature</th>
                                            <th className="px-6 py-4 text-center text-sm font-bold text-emerald-600 bg-emerald-50">Vinyl</th>
                                            <th className="px-6 py-4 text-center text-sm font-bold text-bubble-primary bg-blue-50/50">Aluminum</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {compareRows.map((r, i) => (
                                            <tr key={r.feature} className={i % 2 === 1 ? "bg-gray-50/50" : ""}>
                                                <td className="px-6 py-4 text-sm font-medium text-gray-900">{r.feature}</td>
                                                <td className={`px-6 py-4 text-center text-sm font-medium ${r.vinylWins ? "text-emerald-600" : "text-gray-500"}`}>{r.vinyl}</td>
                                                <td className={`px-6 py-4 text-center text-sm font-medium ${!r.vinylWins ? "text-bubble-primary" : "text-gray-500"}`}>{r.alum}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={100} className="mt-8 text-center">
                            <Link href="/materials/aluminum" className="inline-flex items-center gap-2 text-bubble-primary font-bold hover:underline text-sm">
                                View Aluminum Soffit Details <ArrowRight className="w-4 h-4" />
                            </Link>
                        </AnimatedSection>
                    </div>
                </section>

                {/* ── CTA ─────────────────────────────────────────────── */}
                <section className="py-20 bg-gray-950 text-white text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-600/15 rounded-full blur-[80px]" aria-hidden />
                    <div className="container mx-auto px-4 max-w-4xl relative z-10">
                        <AnimatedSection>
                            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Ready for Quality Vinyl Soffit?</h2>
                            <p className="text-xl text-gray-400 mb-10 max-w-xl mx-auto">
                                Great value, professional install, 1-year labor warranty.
                                Get your free quote today.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-emerald-600 text-white px-10 py-4 rounded-full font-bold text-base hover:bg-emerald-500 transition shadow-xl">
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
