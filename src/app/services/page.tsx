import type { Metadata } from "next";
import Link from "next/link";
import {
    CheckCircle2, ShieldAlert, Wrench, RefreshCw, Home,
    ArrowRight, PhoneCall, ChevronDown, Layers, Wind,
    Clock, Star, Calculator
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
    title: "Soffit & Fascia Services Orlando | Bubbles Enterprise",
    description: "Expert soffit and fascia services in Orlando: repairs, remove & replace, and new construction. Aluminum & vinyl specialists. Free estimates. Call (407) 715-1790.",
    openGraph: {
        title: "Soffit & Fascia Services | Bubbles Enterprise Orlando",
        description: "Repairs, Remove & Replace, and New Construction soffit services across Central Florida.",
        url: "https://bubblesenterprise.com/services",
    },
    alternates: {
        canonical: "https://bubblesenterprise.com/services",
        languages: {
            en: "https://bubblesenterprise.com/services",
            es: "https://bubblesenterprise.com/es/services",
            pt: "https://bubblesenterprise.com/pt/services",
            "x-default": "https://bubblesenterprise.com/services",
        },
    },
};

// ── Schemas for AI discoverability ───────────────────────────────────────────
const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Soffit & Fascia Services",
    "@id": "https://bubblesenterprise.com/services#service",
    "dateModified": "2026-03-05",
    "provider": { "@id": "https://bubblesenterprise.com/#business" },
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Soffit Services",
        "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Soffit Repairs", "url": "https://bubblesenterprise.com/repairs", "description": "Storm damage, panel replacement, ventilation restoration. Fast turnaround." } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Remove & Replace", "url": "https://bubblesenterprise.com/remove-replace", "description": "Complete soffit system replacement. 1-story: $6/LF, 2-story: $7/LF labor." } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "New Construction", "url": "https://bubblesenterprise.com/new-construction", "description": "IRC 806 compliant soffit installation for new builds. $4/LF labor." } }
        ]
    }
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "How long does soffit installation take?",
            "acceptedAnswer": { "@type": "Answer", "text": "Most residential soffit installations in Orlando take 1-3 days depending on home size and complexity. We work efficiently while maintaining our high quality standards." }
        },
        {
            "@type": "Question",
            "name": "What's the difference between aluminum and vinyl soffit?",
            "acceptedAnswer": { "@type": "Answer", "text": "Aluminum soffit offers superior durability and fire resistance, lasting 20-30 years in Orlando's climate. Vinyl soffit is more cost-effective upfront but may need replacement sooner due to UV exposure and heat." }
        },
        {
            "@type": "Question",
            "name": "Do you provide warranties on soffit installation?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes! We offer warranties on both materials and workmanship. Aluminum soffit comes with manufacturer warranties up to 30 years, plus our 1-year installation guarantee." }
        },
        {
            "@type": "Question",
            "name": "How much does soffit replacement cost in Orlando?",
            "acceptedAnswer": { "@type": "Answer", "text": "Soffit replacement costs vary by material, home size, and project type. Use our free online calculator at bubblesenterprise.com/calculator for instant estimates, or contact us for a tailored quote." }
        },
        {
            "@type": "Question",
            "name": "Why is proper soffit ventilation important in Florida?",
            "acceptedAnswer": { "@type": "Answer", "text": "Florida's humid climate requires excellent attic ventilation to prevent moisture buildup, mold growth, and energy inefficiency. Properly vented soffit systems maintain airflow and protect your home's structure." }
        }
    ]
};

// ── Data ──────────────────────────────────────────────────────────────────────
const services = [
    {
        id: "repairs",
        href: "/repairs",
        icon: Wrench,
        color: "green",
        label: "Most Requested",
        title: "Soffit Repairs",
        description: "Fast, precise repairs for storm-damaged, rotted, or compromised soffit and fascia. Same-week service available.",
        features: ["Storm & hurricane damage", "Open holes & pest entry", "Ventilation restoration", "Panel replacement", "Emergency same-day service"],
        cta: "View Repair Services",
    },
    {
        id: "remove-replace",
        href: "/remove-replace",
        icon: RefreshCw,
        color: "blue",
        label: "Most Popular",
        title: "Remove & Replace",
        description: "Complete soffit system replacement with premium aluminum or vinyl. The best investment for aging or extensively damaged systems.",
        features: ["Full system removal", "Aluminum or vinyl install", "Improved ventilation design", "Fascia wrap included", "Warranty on materials & labor"],
        cta: "View R&R Services",
    },
    {
        id: "new-construction",
        href: "/new-construction",
        icon: Home,
        color: "indigo",
        label: "Builder Preferred",
        title: "New Construction",
        description: "Professional soffit installation for new homes and additions, coordinated with your construction timeline. IRC 806 compliant.",
        features: ["New home installations", "Home additions & garages", "Builder partnerships", "IRC 806 code compliance", "Ventilation design included"],
        cta: "View Construction Services",
    },
];

const materials = [
    {
        href: "/materials/aluminum",
        color: "blue",
        title: "Aluminum Soffit",
        tagline: "The Professional's Choice",
        stats: [{ n: "20-30", label: "Year Lifespan" }, { n: "100%", label: "Recyclable" }],
        features: ["Hurricane & wind resistant", "Fire-resistant / Non-combustible", "Solid & vented options", "Low maintenance", "10 premium colors"],
        badge: "Recommended",
    },
    {
        href: "/materials/vinyl",
        color: "green",
        title: "Vinyl Soffit",
        tagline: "Budget-Friendly Performance",
        stats: [{ n: "10+", label: "Year Lifespan" }, { n: "20+", label: "Color Options" }],
        features: ["Cost-effective solution", "Moisture & pest resistant", "Wide color variety", "Lightweight & easy to install", "Good for budget projects"],
        badge: "Budget Option",
    },
];

const process = [
    { n: "01", title: "Free Inspection", body: "We assess your current soffit system at no charge — in person or via photos." },
    { n: "02", title: "Transparent Quote", body: "Detailed written quote, no hidden fees. We explain every line item." },
    { n: "03", title: "Expert Installation", body: "Certified crew installs to code within 1-3 days, depending on project scope." },
    { n: "04", title: "Quality Guarantee", body: "We don't leave until you're satisfied. Warranty on all materials and labor." },
];

const faqs = [
    { q: "How long does soffit installation take?", a: "Most residential installations take 1-3 days depending on home size and complexity. We work efficiently while maintaining high quality." },
    { q: "What's the difference between aluminum and vinyl soffit?", a: "Aluminum lasts 20-30 years in Orlando's climate and is fire-resistant. Vinyl is more cost-effective upfront but may need replacement sooner due to Florida's intense UV exposure and heat." },
    { q: "Do you provide warranties?", a: "Yes! Aluminum soffit comes with manufacturer warranties up to 30 years, plus our 1-year workmanship guarantee on all installations." },
    { q: "How much does soffit replacement cost in Orlando?", a: "Costs vary by material, home size, and project type. Use our free online calculator for instant estimates, or contact us for a personalized quote." },
    { q: "Why is soffit ventilation important in Florida?", a: "Florida's humidity requires excellent attic ventilation. Properly vented soffit prevents moisture buildup, mold, and reduces cooling costs by 15-25%." },
];

// ── Color maps ────────────────────────────────────────────────────────────────
const colorMap: Record<string, string> = {
    green: "from-emerald-500 to-green-600",
    blue: "from-blue-500 to-indigo-600",
    indigo: "from-indigo-500 to-violet-600",
};
const bgMap: Record<string, string> = {
    green: "bg-emerald-50 border-emerald-200 hover:border-emerald-400",
    blue: "bg-blue-50 border-bubble-primary/30 hover:border-bubble-primary",
    indigo: "bg-indigo-50 border-indigo-200 hover:border-indigo-400",
};
const labelMap: Record<string, string> = {
    green: "bg-emerald-100 text-emerald-700",
    blue: "bg-blue-100 text-blue-700",
    indigo: "bg-indigo-100 text-indigo-700",
};
const checkMap: Record<string, string> = {
    green: "text-emerald-500",
    blue: "text-bubble-primary",
    indigo: "text-indigo-500",
};

export default function ServicesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        itemListElement: [
                            { "@type": "ListItem", position: 1, name: "Home", item: "https://bubblesenterprise.com" },
                            { "@type": "ListItem", position: 2, name: "Services", item: "https://bubblesenterprise.com/services" },
                        ],
                    }),
                }}
            />

            {/* ── HERO ─────────────────────────────────────────────────── */}
            <section className="relative overflow-hidden py-24 lg:py-32 bg-gradient-to-br from-gray-950 via-bubble-navy to-gray-900 text-white">
                {/* Animated orbs */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[100px] pointer-events-none" aria-hidden />
                <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none" aria-hidden />

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <AnimatedSection>
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-xs font-bold mb-6 uppercase tracking-widest">
                            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" aria-hidden />
                            Professional Solutions
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                            Soffit & Fascia<br />
                            <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                                Done Right
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-blue-100/90 max-w-2xl mx-auto mb-10 leading-relaxed">
                            Professional aluminum and vinyl soffit solutions for Orlando homes.
                            From emergency repairs to complete installations — we specialize exclusively in soffit and fascia.
                        </p>
                    </AnimatedSection>

                    <AnimatedSection delay={150}>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="#services" className="inline-flex items-center justify-center gap-2 bg-white text-bubble-navy px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition shadow-lg text-base">
                                Explore Services <ChevronDown className="w-4 h-4" />
                            </Link>
                            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-bubble-primary border border-blue-400/50 text-white px-8 py-4 rounded-full font-bold hover:bg-bubble-dark transition shadow-lg text-base">
                                Get Free Quote <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </AnimatedSection>

                    {/* Trust bar */}
                    <AnimatedSection delay={250}>
                        <div className="mt-16 flex flex-wrap justify-center gap-6 md:gap-12">
                            {[
                                { icon: Star, label: "5-Star Rated" },
                                { icon: Clock, label: "Same-Week Service" },
                                { icon: Wind, label: "IRC 806 Compliant" },
                                { icon: Layers, label: "Aluminum & Vinyl" },
                            ].map(({ icon: Icon, label }) => (
                                <div key={label} className="flex items-center gap-2 text-sm text-blue-200 font-medium">
                                    <Icon className="w-4 h-4 text-blue-400" />
                                    {label}
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* ── SCOPE DISCLAIMER ─────────────────────────────────────── */}
            <section className="bg-amber-50 border-b border-amber-100 py-5">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto bg-white rounded-xl border-l-4 border-amber-500 shadow-sm p-5 flex items-start gap-4">
                        <ShieldAlert className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" aria-hidden />
                        <div>
                            <h2 className="font-bold text-gray-900 text-base mb-1">Our Specialty</h2>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                We focus exclusively on <strong>soffit and fascia systems</strong>.
                                We do not perform roofing, structural framing, electrical, plumbing, or interior repairs —
                                giving us unmatched expertise in exactly what we do.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SERVICES GRID ─────────────────────────────────────────── */}
            <section id="services" className="py-20 md:py-28 bg-white">
                <div className="container mx-auto px-4 max-w-7xl">
                    <AnimatedSection className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">What Soffit Services Do We Offer?</h2>
                        <p className="text-xl text-gray-500 max-w-xl mx-auto">Three service categories. One expert team.</p>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                        {services.map((svc, i) => {
                            const Icon = svc.icon;
                            return (
                                <AnimatedSection key={svc.id} delay={i * 100} from="bottom">
                                    <div className={`h-full flex flex-col rounded-2xl border-2 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${bgMap[svc.color]}`}>
                                        {/* Badge */}
                                        <div className="flex items-start justify-between mb-6">
                                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${colorMap[svc.color]} flex items-center justify-center shadow-md`}>
                                                <Icon className="w-7 h-7 text-white" />
                                            </div>
                                            <span className={`text-xs font-bold px-3 py-1 rounded-full ${labelMap[svc.color]}`}>
                                                {svc.label}
                                            </span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{svc.title}</h3>
                                        <p className="text-gray-600 mb-6 leading-relaxed text-sm flex-1">{svc.description}</p>
                                        <ul className="space-y-2.5 mb-8">
                                            {svc.features.map(f => (
                                                <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                                                    <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${checkMap[svc.color]}`} />
                                                    {f}
                                                </li>
                                            ))}
                                        </ul>
                                        <Link
                                            href={svc.href}
                                            className={`mt-auto flex items-center justify-center gap-2 bg-gradient-to-r ${colorMap[svc.color]} text-white py-3.5 rounded-xl font-bold hover:opacity-90 transition text-sm shadow-md`}
                                        >
                                            {svc.cta} <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </AnimatedSection>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── MATERIALS ─────────────────────────────────────────────── */}
            <section className="py-20 bg-gray-50 border-y border-gray-100">
                <div className="container mx-auto px-4 max-w-7xl">
                    <AnimatedSection className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Which Material Should You Choose?</h2>
                        <p className="text-xl text-gray-500">We specialize in two premium soffit materials</p>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-2 gap-8">
                        {materials.map((mat, i) => (
                            <AnimatedSection key={mat.href} delay={i * 120} from={i === 0 ? "left" : "right"}>
                                <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                                    <div className="flex items-center justify-between mb-6">
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-900">{mat.title}</h3>
                                            <p className="text-gray-500 text-sm font-medium mt-0.5">{mat.tagline}</p>
                                        </div>
                                        <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${mat.color === "blue" ? "bg-blue-100 text-blue-700" : "bg-green-100 text-green-700"}`}>
                                            {mat.badge}
                                        </span>
                                    </div>

                                    {/* Stats */}
                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                        {mat.stats.map(s => (
                                            <div key={s.label} className={`text-center p-4 rounded-xl ${mat.color === "blue" ? "bg-blue-50" : "bg-green-50"}`}>
                                                <div className={`text-2xl font-extrabold mb-1 ${mat.color === "blue" ? "text-bubble-primary" : "text-emerald-600"}`}>{s.n}</div>
                                                <div className="text-xs text-gray-600 font-medium">{s.label}</div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Features */}
                                    <ul className="space-y-2.5 mb-8">
                                        {mat.features.map(f => (
                                            <li key={f} className="flex items-center gap-2.5 text-sm text-gray-700">
                                                <CheckCircle2 className={`w-4 h-4 shrink-0 ${mat.color === "blue" ? "text-bubble-primary" : "text-emerald-500"}`} />
                                                {f}
                                            </li>
                                        ))}
                                    </ul>

                                    <Link
                                        href={mat.href}
                                        className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-sm text-white transition group-hover:opacity-90 shadow-md ${mat.color === "blue" ? "bg-bubble-primary" : "bg-emerald-600"}`}
                                    >
                                        Explore {mat.title} <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── PROCESS ───────────────────────────────────────────────── */}
            <section className="py-20 md:py-28 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <AnimatedSection className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">How Does Our 4-Step Process Work?</h2>
                        <p className="text-xl text-gray-500">Simple, transparent, and professional from start to finish</p>
                    </AnimatedSection>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {process.map((step, i) => (
                            <AnimatedSection key={step.n} delay={i * 90} from="bottom">
                                <div className="relative text-center p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:border-bubble-primary/30 hover:shadow-lg transition-all group">
                                    <div className="w-16 h-16 bg-gradient-to-br from-bubble-primary to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-md group-hover:scale-110 transition-transform">
                                        <span className="text-white font-extrabold text-xl">{step.n}</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{step.body}</p>
                                    {/* Connector line (desktop only, not last item) */}
                                    {i < process.length - 1 && (
                                        <div className="hidden lg:block absolute top-12 -right-3 w-6 h-0.5 bg-gray-200" aria-hidden />
                                    )}
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CALCULATOR CTA STRIP ──────────────────────────────────── */}
            <section className="py-12 bg-gradient-to-r from-bubble-navy to-blue-900 text-white">
                <div className="container mx-auto px-4">
                    <AnimatedSection>
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl mx-auto">
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center">
                                    <Calculator className="w-7 h-7 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">Want an instant price estimate?</h3>
                                    <p className="text-blue-300 text-sm">Use our free calculator — results in under 60 seconds.</p>
                                </div>
                            </div>
                            <Link
                                href="/calculator"
                                className="shrink-0 bg-white text-bubble-navy px-8 py-3.5 rounded-xl font-bold hover:bg-blue-50 transition shadow-xl text-sm"
                            >
                                Open Free Calculator →
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* ── FAQ ───────────────────────────────────────────────────── */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 max-w-3xl">
                    <AnimatedSection className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Frequently Asked Questions</h2>
                        <p className="text-gray-500">Everything homeowners ask before calling us</p>
                    </AnimatedSection>

                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <AnimatedSection key={i} delay={i * 60}>
                                <details className="group bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                                    <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none font-bold text-gray-900 text-base">
                                        {faq.q}
                                        <ChevronDown className="w-5 h-5 text-gray-400 shrink-0 group-open:rotate-180 transition-transform duration-300" />
                                    </summary>
                                    <div className="px-6 pb-6 text-gray-600 leading-relaxed text-sm border-t border-gray-100 pt-4">
                                        {faq.a}
                                    </div>
                                </details>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ───────────────────────────────────────────────────── */}
            <section className="py-20 md:py-28 bg-gradient-to-br from-bubble-primary to-blue-800 text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_60%)]" aria-hidden />
                <div className="container mx-auto px-4 max-w-3xl relative z-10">
                    <AnimatedSection>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                            Ready to Get Started?
                        </h2>
                        <p className="text-lg md:text-xl text-blue-200 mb-10 max-w-xl mx-auto">
                            Free inspection, transparent quote, expert installation.
                            Orlando&apos;s soffit specialists are one call away.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 bg-white text-bubble-navy px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition shadow-xl text-base"
                            >
                                Get Free Estimate <ArrowRight className="w-5 h-5" />
                            </Link>
                            <a
                                href="tel:4077151790"
                                className="inline-flex items-center justify-center gap-2 bg-white/10 border-2 border-white/40 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition shadow-lg text-base"
                            >
                                <PhoneCall className="w-5 h-5" /> (407) 715-1790
                            </a>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
}
