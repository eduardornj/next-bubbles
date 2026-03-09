import type { Metadata } from "next";
import Link from "next/link";
import {
    CheckCircle2, ArrowRight, FileText, Factory, ShieldCheck,
    Award, Truck, Home as HomeIcon, PhoneCall,
    Zap, DollarSign, Clock, Thermometer, Wrench
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
    title: "New Construction Soffit Installation | Orlando, FL | Bubbles Enterprise",
    description: "Professional soffit and fascia installation for new construction homes in Orlando and Central Florida. IRC Section 806 compliant, optimal ventilation, aluminum and vinyl. Free quote.",
    openGraph: {
        title: "New Construction Soffit Installation | Bubbles Enterprise Orlando",
        description: "Expert soffit installation for new builds. Building code compliant, energy efficient, coordinated with your construction timeline.",
        url: "https://bubblesenterprise.com/new-construction",
    },
    alternates: {
        canonical: "https://bubblesenterprise.com/new-construction",
        languages: {
            en: "https://bubblesenterprise.com/new-construction",
            es: "https://bubblesenterprise.com/es/new-construction",
            pt: "https://bubblesenterprise.com/pt/new-construction",
            "x-default": "https://bubblesenterprise.com/new-construction",
        },
    },
};

const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "New Construction Soffit & Fascia Installation",
    serviceType: "Soffit and Fascia Installation for New Construction",
    description: "Professional installation of aluminum and vinyl soffit and fascia for new construction homes in Orlando and Central Florida. IRC Section 806 compliant. $4/LF labor rate.",
    dateModified: "2026-03-05",
    "@id": "https://bubblesenterprise.com/new-construction#service",
    provider: { "@id": "https://bubblesenterprise.com/#business" },
    areaServed: [
        { "@type": "City", name: "Orlando", addressRegion: "FL" },
        { "@type": "City", name: "Kissimmee", addressRegion: "FL" },
        { "@type": "City", name: "Winter Park", addressRegion: "FL" },
        { "@type": "City", name: "Clermont", addressRegion: "FL" },
        { "@type": "City", name: "Sanford", addressRegion: "FL" },
    ],
    offers: [
        { "@type": "Offer", name: "Aluminum Soffit — New Construction", description: "Labor: $4/linear foot. Overhang material rate varies by depth. IRC 806 ventilation design included.", priceCurrency: "USD" },
        { "@type": "Offer", name: "Vinyl Soffit — New Construction", description: "Labor: $4/linear foot. Cost-effective builder option. Rot and moisture resistant.", priceCurrency: "USD" },
    ],
};

const reasons = [
    { icon: FileText, color: "blue", title: "Passes Inspection. First Time.", body: "We design ventilation to IRC Section 806 before touching a single panel. The inspector gets documentation on arrival. No rework, no delays, no excuses." },
    { icon: Factory, color: "green", title: "Ventilation That Actually Works", body: "Balanced intake and exhaust, calculated by attic square footage. Proper airflow prevents moisture, extends roof shingle life by 20-30%, and reduces HVAC costs." },
    { icon: ShieldCheck, color: "purple", title: "Lower Energy Bills From Day One", body: "When soffit ventilation is designed alongside insulation and HVAC, homeowners see 15-25% cooling cost reduction. In Florida, that's real money." },
    { icon: Award, color: "amber", title: "Materials That Last Decades", body: "Aluminum soffit lasts 20-30 years under Florida's sun, heat, and hurricanes. Vinyl is a solid budget option at 10-15 years. We help pick what fits the build and the budget." },
    { icon: HomeIcon, color: "rose", title: "No Callbacks. No Headaches.", body: "Bad soffit comes back to haunt you: mold complaints, pest entry, fallen panels, warranty claims. Do it right the first time with a crew that only does this." },
    { icon: Truck, color: "cyan", title: "We Work on YOUR Schedule", body: "Pre-drywall, post-roofing, between trades. We show up when you need us, work clean, and stay out of the way. Coordination via text or phone — no runaround." },
];

const colorMap: Record<string, string> = {
    blue: "bg-blue-50 border-blue-100",
    green: "bg-emerald-50 border-emerald-100",
    purple: "bg-purple-50 border-purple-100",
    amber: "bg-amber-50 border-amber-100",
    rose: "bg-rose-50 border-rose-100",
    cyan: "bg-cyan-50 border-cyan-100",
};
const iconMap: Record<string, string> = {
    blue: "text-blue-600",
    green: "text-emerald-600",
    purple: "text-purple-600",
    amber: "text-amber-600",
    rose: "text-rose-600",
    cyan: "text-cyan-600",
};

const phases = [
    {
        label: "Pre-Drywall",
        color: "blue",
        items: ["Coordinate with framing completion", "Plan ventilation layout before walls close", "Ensure proper attic access positioning", "Work alongside electrical for soffit lighting"],
    },
    {
        label: "Exterior Completion",
        color: "green",
        items: ["Install after roofing completion", "Coordinate with siding schedule", "Complete before exterior trim crew", "Align panel colors with paint plan"],
    },
    {
        label: "Final Inspection",
        color: "amber",
        items: ["Verify IRC 806 ventilation ratios", "Confirm vent airflow functionality", "Full quality assurance walkthrough", "Deliver warranty documentation"],
    },
];

const processSteps = [
    { n: "01", title: "Blueprint Review", body: "Send us the plans. We calculate exact ventilation requirements, material quantities, and identify problem areas before a single panel gets cut." },
    { n: "02", title: "Ventilation Design", body: "We design a balanced intake/exhaust system per IRC 806 and hand you the documentation your building inspector needs." },
    { n: "03", title: "Material Delivery", body: "Aluminum or vinyl, delivered on your schedule. No sitting on the jobsite for weeks collecting dust and damage." },
    { n: "04", title: "Installation", body: "Our crew works clean, coordinates with other trades, and installs to code. We don't slow down your build." },
    { n: "05", title: "Inspection-Ready", body: "We stay on site until the inspector signs off. If anything needs adjustment, we handle it immediately." },
    { n: "06", title: "Handover & Warranty", body: "You get full documentation, warranty certificate, and a team that picks up the phone if you need us again." },
];

export default function NewConstructionPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        itemListElement: [
                            { "@type": "ListItem", position: 1, name: "Home", item: "https://bubblesenterprise.com" },
                            { "@type": "ListItem", position: 2, name: "Services", item: "https://bubblesenterprise.com/services" },
                            { "@type": "ListItem", position: 3, name: "New Construction", item: "https://bubblesenterprise.com/new-construction" },
                        ],
                    }),
                }}
            />
            <div className="flex flex-col min-h-screen">

                {/* ── HERO ─────────────────────────────────────────────── */}
                <section className="relative overflow-hidden py-24 lg:py-32 bg-gradient-to-br from-gray-950 via-indigo-950 to-gray-900 text-white">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[100px]" aria-hidden />
                    <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-blue-500/10 rounded-full blur-[80px]" aria-hidden />
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                        <AnimatedSection>
                            <div className="inline-flex items-center gap-2 bg-indigo-500/20 border border-indigo-400/30 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold mb-6 uppercase tracking-widest">
                                <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" aria-hidden />
                                Builder Preferred
                            </div>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                                New Construction<br />
                                <span className="bg-gradient-to-r from-indigo-300 to-blue-300 bg-clip-text text-transparent">
                                    Soffit Installation
                                </span>
                            </h1>
                            <p className="text-lg md:text-xl text-indigo-100/80 max-w-2xl mx-auto mb-10 leading-relaxed">
                                Most builders treat soffit as an afterthought. Install it however and hope it passes inspection.
                                We do the opposite: every vent calculated, every panel aligned, every code requirement documented.
                                Specialists — not generalists.
                            </p>
                        </AnimatedSection>
                        <AnimatedSection delay={130}>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full font-bold transition shadow-xl text-base"
                                >
                                    Get Construction Quote
                                </Link>
                                <Link
                                    href="/calculator"
                                    className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition text-base"
                                >
                                    Estimate Project Cost <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* ── WHY PROFESSIONAL INSTALLATION ────────────────────── */}
                <section className="py-20 md:py-28 bg-white">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <AnimatedSection className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                                Why Builders Trust Our Crew
                            </h2>
                            <p className="text-xl text-gray-500 max-w-xl mx-auto">
                                Because getting it wrong means callbacks, failed inspections, and unhappy homeowners. We get it right the first time.
                            </p>
                        </AnimatedSection>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {reasons.map((r, i) => {
                                const Icon = r.icon;
                                return (
                                    <AnimatedSection key={r.title} delay={i * 80} from="bottom">
                                        <div className={`h-full p-8 rounded-2xl border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${colorMap[r.color]}`}>
                                            <Icon className={`w-10 h-10 mb-4 ${iconMap[r.color]}`} />
                                            <h3 className="text-lg font-bold text-gray-900 mb-2">{r.title}</h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">{r.body}</p>
                                        </div>
                                    </AnimatedSection>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* ── CODE & STATS ─────────────────────────────────────── */}
                <section className="py-20 bg-gray-50 border-y border-gray-100">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <AnimatedSection className="text-center mb-14">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">The Numbers That Matter</h2>
                        </AnimatedSection>
                        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
                            <div className="space-y-6">
                                <AnimatedSection from="left">
                                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
                                        <h3 className="text-xl font-bold text-gray-900 mb-4">IRC Section 806 Compliance</h3>
                                        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                                            Florida residential code requires balanced ventilation between soffit intake and ridge/gable exhaust. We calculate and document everything.
                                        </p>
                                        <ul className="space-y-3">
                                            {[
                                                "Min. 1 sq ft per 300 sq ft of attic space",
                                                "50% intake (soffit) / 50% exhaust (ridge)",
                                                "Continuous ventilation preferred over spot vents",
                                            ].map(item => (
                                                <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                                                    <CheckCircle2 className="w-4 h-4 text-bubble-primary shrink-0 mt-0.5" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </AnimatedSection>
                                <AnimatedSection from="left" delay={100}>
                                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
                                        <h3 className="text-xl font-bold text-gray-900 mb-4">What Proper Ventilation Does</h3>
                                        <ul className="space-y-3">
                                            {[
                                                "Prevents moisture buildup, mold, and wood rot",
                                                "Reduces cooling costs by 15-25% in Florida homes",
                                                "Extends roof shingle lifespan by 20-30%",
                                                "Keeps attic temperatures stable year-round",
                                                "May qualify for energy efficiency credits",
                                            ].map(b => (
                                                <li key={b} className="flex items-start gap-2.5 text-sm text-gray-700">
                                                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                                    {b}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </AnimatedSection>
                            </div>

                            <AnimatedSection from="right">
                                <div className="space-y-4">
                                    <h3 className="text-xl font-bold text-gray-900 mb-6">New Build Advantages</h3>
                                    {[
                                        { icon: Zap, label: "Installation speed", value: "40% Faster", gradient: "from-emerald-500 to-green-600", bg: "bg-emerald-50", border: "border-emerald-200", text: "text-emerald-700" },
                                        { icon: DollarSign, label: "Cost savings", value: "25-35% Less", gradient: "from-emerald-500 to-green-600", bg: "bg-emerald-50", border: "border-emerald-200", text: "text-emerald-700" },
                                        { icon: Clock, label: "Vinyl soffit lifespan", value: "10-15 Years", gradient: "from-blue-500 to-indigo-600", bg: "bg-blue-50", border: "border-blue-200", text: "text-blue-700" },
                                        { icon: ShieldCheck, label: "Aluminum soffit lifespan", value: "20-30 Years", gradient: "from-blue-500 to-indigo-600", bg: "bg-blue-50", border: "border-blue-200", text: "text-blue-700" },
                                        { icon: Thermometer, label: "Cooling cost reduction", value: "15-25%", gradient: "from-amber-500 to-orange-600", bg: "bg-amber-50", border: "border-amber-200", text: "text-amber-700" },
                                        { icon: Wrench, label: "Workmanship warranty", value: "1 Year", gradient: "from-purple-500 to-indigo-600", bg: "bg-purple-50", border: "border-purple-200", text: "text-purple-700" },
                                    ].map((r, i) => {
                                        const Icon = r.icon;
                                        return (
                                            <div key={i} className={`flex items-center gap-4 p-4 rounded-xl border ${r.border} ${r.bg} hover:shadow-md transition-all`}>
                                                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${r.gradient} flex items-center justify-center shrink-0 shadow-sm`}>
                                                    <Icon className="w-5 h-5 text-white" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-sm text-gray-600">{r.label}</p>
                                                </div>
                                                <span className={`text-lg font-extrabold ${r.text} shrink-0`}>{r.value}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </section>

                {/* ── PROCESS ───────────────────────────────────────────── */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <AnimatedSection className="text-center mb-14">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">How We Work With Builders</h2>
                            <p className="text-gray-500 text-xl">Six steps. Zero surprises. Inspection-ready every time.</p>
                        </AnimatedSection>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {processSteps.map((step, i) => (
                                <AnimatedSection key={step.n} delay={i * 80} from="bottom">
                                    <div className="bg-gray-50 rounded-2xl p-7 border border-gray-100 hover:border-indigo-200 hover:shadow-lg group transition-all">
                                        <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform">
                                            <span className="text-white font-extrabold text-sm">{step.n}</span>
                                        </div>
                                        <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">{step.body}</p>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── PHASES ───────────────────────────────────────────── */}
                <section className="py-20 bg-gray-50 border-t border-gray-100">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <AnimatedSection className="text-center mb-14">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">We Fit Your Build Schedule</h2>
                            <p className="text-gray-500 text-xl">Tell us when. We'll be there.</p>
                        </AnimatedSection>
                        <div className="grid md:grid-cols-3 gap-6">
                            {phases.map((phase, i) => (
                                <AnimatedSection key={phase.label} delay={i * 100}>
                                    <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-bubble-primary hover:shadow-xl transition-all h-full">
                                        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                            <span className="w-7 h-7 bg-bubble-primary text-white rounded-full text-xs font-bold flex items-center justify-center shrink-0">{i + 1}</span>
                                            {phase.label}
                                        </h3>
                                        <ul className="space-y-3">
                                            {phase.items.map(item => (
                                                <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                                                    <CheckCircle2 className="w-4 h-4 text-bubble-primary shrink-0 mt-0.5" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── CTA ─────────────────────────────────────────────── */}
                <section className="py-20 bg-gradient-to-br from-indigo-700 to-blue-900 text-white text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.06),transparent_60%)]" aria-hidden />
                    <div className="container mx-auto px-4 max-w-3xl relative z-10">
                        <AnimatedSection>
                            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">Your Next Build Deserves Soffit Done by Specialists.</h2>
                            <p className="text-lg text-indigo-200 mb-10 max-w-xl mx-auto">
                                Send us the blueprints or call (407) 715-1790. We'll prepare the ventilation plan, material quote, and a schedule that fits your build. No runaround.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-indigo-900 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition shadow-xl text-base">
                                    Get Construction Quote <ArrowRight className="w-5 h-5" />
                                </Link>
                                <a href="tel:4077151790" className="inline-flex items-center justify-center gap-2 bg-white/10 border-2 border-white/40 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition text-base">
                                    <PhoneCall className="w-5 h-5" /> (407) 715-1790
                                </a>
                            </div>
                            <p className="mt-6 text-indigo-300 text-sm font-medium">We only do soffit and fascia. Every build we touch passes inspection the first time.</p>
                        </AnimatedSection>
                    </div>
                </section>
            </div>
        </>
    );
}
