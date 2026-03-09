import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, XCircle } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
    title: "Aluminum vs Vinyl Soffit | Materials Guide Orlando",
    description: "Compare aluminum and vinyl soffit for Central Florida. Lifespan, cost, maintenance, hurricane rating, and which to choose for your home.",
    openGraph: {
        title: "Soffit Materials Guide: Aluminum vs Vinyl | Bubbles Enterprise",
        description: "Compare aluminum and vinyl soffit for Florida homes — lifespan, cost, hurricane resistance, and the right choice for your project.",
        url: "https://bubblesenterprise.com/materials",
    },
    alternates: {
        canonical: "https://bubblesenterprise.com/materials",
        languages: {
            en: "https://bubblesenterprise.com/materials",
            es: "https://bubblesenterprise.com/es/materials",
            pt: "https://bubblesenterprise.com/pt/materials",
            "x-default": "https://bubblesenterprise.com/materials",
        },
    },
};

const schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "ItemList",
            "@id": "https://bubblesenterprise.com/materials#itemlist",
            name: "Soffit & Fascia Materials Comparison",
            description: "Comparison of aluminum and vinyl soffit materials for Central Florida homes.",
            dateModified: "2026-03-05",
            url: "https://bubblesenterprise.com/materials",
            itemListElement: [
                {
                    "@type": "ListItem",
                    position: 1,
                    name: "Aluminum Soffit",
                    url: "https://bubblesenterprise.com/materials/aluminum",
                    description: "Fire-resistant, hurricane-rated aluminum soffit. 20-30 year lifespan. 10 color options. The professional standard for Florida new construction.",
                },
                {
                    "@type": "ListItem",
                    position: 2,
                    name: "Vinyl Soffit",
                    url: "https://bubblesenterprise.com/materials/vinyl",
                    description: "Cost-effective vinyl soffit. 15-20 year lifespan. Wider color selection. Good choice for shaded locations and budget-constrained projects.",
                },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": "https://bubblesenterprise.com/materials#faq",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "What is the best soffit material for Florida?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Aluminum is the best soffit material for most Florida homes. It is non-combustible, hurricane-rated, moisture-resistant, and has a 20-30 year lifespan with no maintenance required. Vinyl is an acceptable alternative for budget-constrained projects in shaded locations.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How long does aluminum soffit last vs vinyl in Florida?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Aluminum soffit lasts 20-30 years in Florida. Vinyl soffit lasts 15-20 years under normal conditions, but south-facing vinyl exposed to intense Florida UV may show fading and brittleness in 10-12 years.",
                    },
                },
            ],
        },
    ],
};

const comparison = [
    { category: "Lifespan (Florida)", aluminum: "20–30 years", vinyl: "15–20 years", winner: "aluminum" },
    { category: "Hurricane resistance", aluminum: "Hurricane rated", vinyl: "Adequate for most storms", winner: "aluminum" },
    { category: "Fire resistance", aluminum: "Non-combustible", vinyl: "Will burn", winner: "aluminum" },
    { category: "Heat tolerance (Florida)", aluminum: "No warping", vinyl: "May warp above 140°F", winner: "aluminum" },
    { category: "Rot resistance", aluminum: "100%", vinyl: "100%", winner: "tie" },
    { category: "Pest resistance", aluminum: "Very good", vinyl: "Moderate (can be chewed)", winner: "aluminum" },
    { category: "Maintenance", aluminum: "None required", vinyl: "Occasional cleaning", winner: "aluminum" },
    { category: "Color options", aluminum: "10 colors", vinyl: "Wider variety", winner: "vinyl" },
    { category: "Cost (project total)", aluminum: "Slightly higher", vinyl: "Slightly lower", winner: "vinyl" },
    { category: "Recyclable", aluminum: "100%", vinyl: "No", winner: "aluminum" },
    { category: "Manufacturer warranty", aluminum: "Up to 30 years", vinyl: "10–15 years typical", winner: "aluminum" },
];

export default function MaterialsHubPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([
                        {
                            "@context": "https://schema.org",
                            "@type": "Product",
                            name: "Aluminum Soffit Installation",
                            description: "Premium aluminum soffit installation for Florida homes. Fire-resistant, hurricane-rated, 20-30 year lifespan. Available in solid, vented, and hidden-vent profiles.",
                            brand: { "@type": "Brand", name: "Bubbles Enterprise" },
                            offers: {
                                "@type": "AggregateOffer",
                                priceCurrency: "USD",
                                lowPrice: "4.00",
                                highPrice: "7.00",
                                offerCount: "3",
                                description: "Per linear foot. Price varies by overhang depth and job type.",
                                url: "https://bubblesenterprise.com/calculator",
                                availability: "https://schema.org/InStock",
                            },
                            additionalProperty: [
                                { "@type": "PropertyValue", name: "Material", value: "Aluminum" },
                                { "@type": "PropertyValue", name: "Lifespan", value: "20-30 years" },
                                { "@type": "PropertyValue", name: "Fire Resistance", value: "Yes" },
                                { "@type": "PropertyValue", name: "Hurricane Rated", value: "Yes" },
                            ],
                        },
                        {
                            "@context": "https://schema.org",
                            "@type": "Product",
                            name: "Vinyl Soffit Installation",
                            description: "Cost-effective vinyl soffit installation for Florida homes. Rot-resistant, lightweight, easy maintenance. 10-15 year lifespan. Ideal for budget-conscious projects.",
                            brand: { "@type": "Brand", name: "Bubbles Enterprise" },
                            offers: {
                                "@type": "AggregateOffer",
                                priceCurrency: "USD",
                                lowPrice: "3.50",
                                highPrice: "6.50",
                                offerCount: "3",
                                description: "Per linear foot. Price varies by overhang depth and job type.",
                                url: "https://bubblesenterprise.com/calculator",
                                availability: "https://schema.org/InStock",
                            },
                            additionalProperty: [
                                { "@type": "PropertyValue", name: "Material", value: "Vinyl" },
                                { "@type": "PropertyValue", name: "Lifespan", value: "10-15 years" },
                                { "@type": "PropertyValue", name: "Fire Resistance", value: "No" },
                                { "@type": "PropertyValue", name: "Rot Resistant", value: "Yes" },
                            ],
                        },
                    ]),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        itemListElement: [
                            { "@type": "ListItem", position: 1, name: "Home", item: "https://bubblesenterprise.com" },
                            { "@type": "ListItem", position: 2, name: "Materials", item: "https://bubblesenterprise.com/materials" },
                        ],
                    }),
                }}
            />
            <div className="flex flex-col min-h-screen">

                {/* ── HERO ──────────────────────────────────────────────── */}
                <section className="py-24 lg:py-28 bg-gradient-to-br from-slate-900 via-indigo-950 to-blue-950 text-white">
                    <div className="container mx-auto px-4 max-w-5xl text-center">
                        <AnimatedSection>
                            <span className="inline-block bg-blue-500/20 border border-blue-400/30 text-blue-200 text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
                                Materials Guide
                            </span>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                                Soffit & Fascia Materials
                            </h1>
                            <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
                                Aluminum or vinyl? Here&apos;s everything you need to choose the right material for your Central Florida home — lifespan, cost, hurricane rating, and maintenance.
                            </p>
                        </AnimatedSection>
                    </div>
                </section>

                {/* ── MATERIAL CARDS ──────────────────────────────────────── */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <AnimatedSection className="text-center mb-14">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Choose Your Material</h2>
                            <p className="text-gray-500 text-lg max-w-2xl mx-auto">We install both aluminum and vinyl. Each has a different set of trade-offs.</p>
                        </AnimatedSection>
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Aluminum Card */}
                            <AnimatedSection from="left">
                                <Link
                                    href="/materials/aluminum"
                                    className="group block bg-gradient-to-br from-blue-900 to-indigo-950 rounded-3xl p-8 text-white hover:shadow-2xl hover:shadow-blue-900/30 transition-all hover:-translate-y-1 relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl" aria-hidden />
                                    <div className="relative z-10">
                                        <div className="flex items-center justify-between mb-6">
                                            <span className="text-xs font-bold bg-blue-500/30 border border-blue-400/30 text-blue-200 px-3 py-1 rounded-full uppercase tracking-widest">
                                                Professional Choice
                                            </span>
                                            <span className="text-xs bg-green-500 text-white font-bold px-3 py-1 rounded-full">In Stock</span>
                                        </div>
                                        <h2 className="text-3xl font-extrabold mb-3">Aluminum Soffit</h2>
                                        <p className="text-blue-200 mb-6 leading-relaxed">
                                            The industry standard for Florida new construction and replacement. Fire-resistant, hurricane-rated, and maintenance-free for 20–30 years.
                                        </p>
                                        <div className="space-y-2.5 mb-8">
                                            {[
                                                "20–30 year lifespan",
                                                "Non-combustible (fire rated)",
                                                "Hurricane rated",
                                                "Won't warp in Florida heat",
                                                "10 color options — 2 in stock",
                                                "30-year manufacturer warranty available",
                                            ].map(item => (
                                                <div key={item} className="flex items-center gap-2.5 text-sm text-blue-100">
                                                    <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                                                    {item}
                                                </div>
                                            ))}
                                        </div>
                                        <div className="flex items-center gap-2 font-bold group-hover:gap-3 transition-all">
                                            View Aluminum Options <ArrowRight className="w-5 h-5" />
                                        </div>
                                    </div>
                                </Link>
                            </AnimatedSection>

                            {/* Vinyl Card */}
                            <AnimatedSection from="right">
                                <Link
                                    href="/materials/vinyl"
                                    className="group block bg-gradient-to-br from-purple-900 to-violet-950 rounded-3xl p-8 text-white hover:shadow-2xl hover:shadow-purple-900/30 transition-all hover:-translate-y-1 relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl" aria-hidden />
                                    <div className="relative z-10">
                                        <div className="flex items-center justify-between mb-6">
                                            <span className="text-xs font-bold bg-purple-500/30 border border-purple-400/30 text-purple-200 px-3 py-1 rounded-full uppercase tracking-widest">
                                                Budget Option
                                            </span>
                                            <span className="text-xs bg-purple-500 text-white font-bold px-3 py-1 rounded-full">Order: 1–3 days</span>
                                        </div>
                                        <h2 className="text-3xl font-extrabold mb-3">Vinyl Soffit</h2>
                                        <p className="text-purple-200 mb-6 leading-relaxed">
                                            Cost-effective choice for shaded locations and budget-sensitive projects. Good performance under normal Florida conditions.
                                        </p>
                                        <div className="space-y-2.5 mb-8">
                                            {[
                                                "15–20 year lifespan",
                                                "100% moisture resistant",
                                                "Lower project cost",
                                                "Wider color variety available",
                                                "Good for shaded north-facing soffit",
                                            ].map(item => (
                                                <div key={item} className="flex items-center gap-2.5 text-sm text-purple-100">
                                                    <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                                                    {item}
                                                </div>
                                            ))}
                                            <div className="flex items-center gap-2.5 text-sm text-purple-300">
                                                <XCircle className="w-4 h-4 text-orange-400 shrink-0" />
                                                Can warp in extreme Florida heat (south/west facing)
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 font-bold group-hover:gap-3 transition-all">
                                            View Vinyl Colors <ArrowRight className="w-5 h-5" />
                                        </div>
                                    </div>
                                </Link>
                            </AnimatedSection>
                        </div>
                    </div>
                </section>

                {/* ── COMPARISON TABLE ───────────────────────────────────── */}
                <section className="py-20 bg-slate-50 border-y border-gray-100">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <AnimatedSection className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Head-to-Head Comparison</h2>
                            <p className="text-gray-500 text-lg">For Central Florida conditions — 2026 data</p>
                        </AnimatedSection>
                        <AnimatedSection delay={60}>
                            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
                                <table className="w-full bg-white text-sm">
                                    <thead>
                                        <tr className="border-b-2 border-gray-200">
                                            <th className="text-left p-5 font-bold text-gray-400 uppercase text-xs tracking-wider w-1/3">Category</th>
                                            <th className="text-center p-5 font-extrabold text-blue-700 uppercase text-xs tracking-wider w-1/3">Aluminum</th>
                                            <th className="text-center p-5 font-extrabold text-purple-700 uppercase text-xs tracking-wider w-1/3">Vinyl</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {comparison.map((row, i) => (
                                            <tr key={i} className={`hover:bg-gray-50 transition-colors ${row.winner === "tie" ? "" : ""}`}>
                                                <td className="p-4 font-semibold text-gray-700">{row.category}</td>
                                                <td className={`p-4 text-center ${row.winner === "aluminum" ? "text-blue-700 font-bold" : "text-gray-500"}`}>
                                                    <span className="flex items-center justify-center gap-1.5">
                                                        {row.winner === "aluminum" && <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />}
                                                        {row.aluminum}
                                                    </span>
                                                </td>
                                                <td className={`p-4 text-center ${row.winner === "vinyl" ? "text-purple-700 font-bold" : "text-gray-500"}`}>
                                                    <span className="flex items-center justify-center gap-1.5">
                                                        {row.winner === "vinyl" && <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />}
                                                        {row.vinyl}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-xs text-gray-400 mt-3 text-center">
                                Read the full comparison: <Link href="/blog/aluminum-vs-vinyl-soffit" className="text-blue-600 hover:underline">Aluminum vs Vinyl — Complete 2026 Guide →</Link>
                            </p>
                        </AnimatedSection>
                    </div>
                </section>

                {/* ── OUR RECOMMENDATION ─────────────────────────────────── */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <AnimatedSection>
                            <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Our Recommendation for Florida Homes</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-blue-50 rounded-2xl border border-blue-200 p-7">
                                    <h3 className="font-extrabold text-blue-900 mb-4">Choose Aluminum When…</h3>
                                    <ul className="space-y-3">
                                        {[
                                            "Maximum durability is the priority",
                                            "South or west-facing exposure (high UV/heat)",
                                            "History of pest or animal intrusion",
                                            "New construction or full replacement",
                                            "You want the longest warranty",
                                            "Gutters are attached to the fascia",
                                        ].map(item => (
                                            <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                                                <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-purple-50 rounded-2xl border border-purple-200 p-7">
                                    <h3 className="font-extrabold text-purple-900 mb-4">Vinyl is Acceptable When…</h3>
                                    <ul className="space-y-3">
                                        {[
                                            "Budget is the primary constraint",
                                            "Shaded north-facing location",
                                            "Shorter-term ownership (selling in 5–10 yrs)",
                                            "Matching existing vinyl on the house",
                                        ].map(item => (
                                            <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                                                <CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-5 pt-4 border-t border-purple-200">
                                        <p className="text-xs text-purple-700 font-semibold flex items-start gap-2">
                                            <XCircle className="w-4 h-4 shrink-0 mt-0.5 text-orange-500" />
                                            Avoid vinyl on south/west-facing soffit in Florida — heat warping risk is real.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* ── FAQ ───────────────────────────────────────────────── */}
                <section className="py-16 bg-slate-50 border-t border-gray-100">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <AnimatedSection className="mb-10">
                            <h2 className="text-2xl font-extrabold text-gray-900">Common Questions</h2>
                        </AnimatedSection>
                        <div className="space-y-4">
                            {[
                                {
                                    q: "What is the best soffit material for Florida?",
                                    a: "Aluminum is the best choice for most Florida homes. Non-combustible, hurricane-rated, 20–30 year lifespan, no maintenance. Vinyl is acceptable for budget-constrained projects in shaded locations, but it may warp in extreme heat and is not fire-resistant.",
                                },
                                {
                                    q: "How long does aluminum soffit last vs vinyl in Florida?",
                                    a: "Aluminum lasts 20–30 years in Florida with no maintenance. Vinyl lasts 15–20 years under normal conditions. South-facing vinyl in full Florida sun may start fading and becoming brittle in 10–12 years.",
                                },
                            ].map((faq, i) => (
                                <AnimatedSection key={i} delay={i * 60} from="bottom">
                                    <div className="bg-white rounded-2xl border border-gray-200 p-6">
                                        <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── CTA ───────────────────────────────────────────────── */}
                <section className="py-20 bg-gradient-to-br from-bubble-primary to-blue-800 text-white text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.07),transparent_60%)]" aria-hidden />
                    <div className="container mx-auto px-4 max-w-3xl relative z-10">
                        <AnimatedSection>
                            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Not Sure Which Material?</h2>
                            <p className="text-lg text-blue-200 mb-8 max-w-xl mx-auto">
                                We'll assess your home and recommend the right material for your specific situation. Free estimate, written quote before any work starts.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center gap-2 bg-white text-bubble-navy px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition shadow-xl"
                                >
                                    Get Free Estimate <ArrowRight className="w-5 h-5" />
                                </Link>
                                <Link
                                    href="/calculator"
                                    className="inline-flex items-center justify-center gap-2 bg-white/10 border-2 border-white/40 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition"
                                >
                                    Try the Calculator
                                </Link>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>
            </div>
        </>
    );
}
