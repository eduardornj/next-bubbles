import type { Metadata } from "next";
import Link from "next/link";
import {
    CheckCircle2, ArrowRight, AlertTriangle, CloudRain, Wind,
    Bug, Paintbrush, Wrench, PhoneCall, ShieldCheck, Clock, DollarSign
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
    title: "Soffit & Fascia Repair Services Orlando | Bubbles Enterprise",
    description: "Fast soffit and fascia repairs in Orlando: storm damage, animal intrusion, water damage, pest gaps. Same-week service. Licensed & Insured. (407) 715-1790.",
    openGraph: {
        title: "Soffit & Fascia Repair | Bubbles Enterprise Orlando",
        description: "Fast, honest soffit repairs in Orlando. Emergency service available. 60-80% cheaper than full replacement for isolated damage.",
        url: "https://bubblesenterprise.com/repairs",
    },
    alternates: {
        canonical: "https://bubblesenterprise.com/repairs",
        languages: {
            en: "https://bubblesenterprise.com/repairs",
            es: "https://bubblesenterprise.com/es/repairs",
            pt: "https://bubblesenterprise.com/pt/repairs",
            "x-default": "https://bubblesenterprise.com/repairs",
        },
    },
};

const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://bubblesenterprise.com/repairs#service",
    name: "Soffit & Fascia Repair",
    serviceType: "Soffit Repair — Storm Damage, Animal Intrusion, Water Damage, Pest Gaps",
    description: "Professional soffit and fascia repair in Orlando, FL. Storm damage, animal intrusion, water damage, ventilation issues, pest gaps. 60-80% cheaper than replacement for localized damage.",
    dateModified: "2026-03-05",
    provider: { "@id": "https://bubblesenterprise.com/#business" },
    areaServed: [
        { "@type": "City", name: "Orlando", addressRegion: "FL" },
        { "@type": "City", name: "Kissimmee", addressRegion: "FL" },
        { "@type": "City", name: "Winter Park", addressRegion: "FL" },
        { "@type": "City", name: "Sanford", addressRegion: "FL" },
        { "@type": "City", name: "Clermont", addressRegion: "FL" },
    ],
    offers: {
        "@type": "Offer",
        description: "Soffit repair — pricing varies by damage extent. 60-80% cheaper than full replacement for isolated damage. Free on-site estimate.",
        priceCurrency: "USD",
    },
};

const damageTypes = [
    {
        icon: AlertTriangle,
        color: "red",
        title: "Visible Damage",
        body: "Cracks, holes, dents, or sagging sections that expose your attic to water, insects, and wildlife.",
    },
    {
        icon: CloudRain,
        color: "blue",
        title: "Water & Moisture",
        body: "Staining, rot, and moisture infiltration — common after Florida storms. Leads to mold if left untreated.",
    },
    {
        icon: Wind,
        color: "amber",
        title: "Poor Ventilation",
        body: "Blocked or crushed vents cutting attic airflow, increasing cooling costs and shortening roof life.",
    },
    {
        icon: Bug,
        color: "purple",
        title: "Pest Intrusion",
        body: "Birds, wasps, squirrels, or lizards entering through open soffit gaps and nesting in your attic.",
    },
    {
        icon: Paintbrush,
        color: "orange",
        title: "Peeling & Fading",
        body: "Florida's UV intensity causes accelerated deterioration. Cosmetic repairs protect structure and curb appeal.",
    },
    {
        icon: Wrench,
        color: "gray",
        title: "Installation Issues",
        body: "Missing fasteners, panels pulling away from fascia, or improper original installation causing gaps.",
    },
];

const colorMap: Record<string, string> = {
    red: "bg-red-50 border-red-100",
    blue: "bg-blue-50 border-blue-100",
    amber: "bg-amber-50 border-amber-100",
    purple: "bg-purple-50 border-purple-100",
    orange: "bg-orange-50 border-orange-100",
    gray: "bg-gray-50 border-gray-200",
};
const iconMap: Record<string, string> = {
    red: "text-red-500",
    blue: "text-blue-500",
    amber: "text-amber-500",
    purple: "text-purple-500",
    orange: "text-orange-500",
    gray: "text-gray-500",
};

const benefits = [
    { icon: DollarSign, title: "60-80% Cheaper", body: "Isolated repairs cost a fraction of full replacement. We only replace what's damaged." },
    { icon: Clock, title: "Same-Week Service", body: "Most repairs completed within 1-2 days of estimate. Emergency same-day available." },
    { icon: ShieldCheck, title: "Prevent Bigger Problems", body: "A small gap today becomes a pest nest or mold problem in weeks. Act early." },
    { icon: CheckCircle2, title: "1-Year Workmanship Warranty", body: "All repair work is covered by our labor guarantee — fully in writing." },
];

export default function RepairsPage() {
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
                            { "@type": "ListItem", position: 3, name: "Repairs", item: "https://bubblesenterprise.com/repairs" },
                        ],
                    }),
                }}
            />
            <div className="flex flex-col min-h-screen">

                {/* ── HERO ─────────────────────────────────────────────── */}
                <section className="relative overflow-hidden py-24 lg:py-32 bg-gradient-to-br from-gray-950 via-red-950 to-gray-900 text-white">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-700/20 rounded-full blur-[100px]" aria-hidden />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-600/10 rounded-full blur-[80px]" aria-hidden />
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                        <AnimatedSection>
                            <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-400/30 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold mb-6 uppercase tracking-widest">
                                <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse" aria-hidden />
                                Emergency & Scheduled Repairs
                            </div>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                                Soffit Damage?<br />
                                <span className="bg-gradient-to-r from-red-300 to-orange-300 bg-clip-text text-transparent">
                                    We Fix It Fast.
                                </span>
                            </h1>
                            <p className="text-lg md:text-xl text-red-100/80 max-w-2xl mx-auto mb-10 leading-relaxed">
                                Storm holes, pest gaps, rotted panels — we diagnose and repair damaged soffit and fascia quickly,
                                saving you 60-80% versus full replacement.
                            </p>
                        </AnimatedSection>
                        <AnimatedSection delay={120}>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/contact/emergency"
                                    className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold transition shadow-xl text-base"
                                >
                                    🚨 Emergency Repair Request
                                </Link>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition text-base"
                                >
                                    Get Free Estimate <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </AnimatedSection>

                        {/* Quick facts */}
                        <AnimatedSection delay={220}>
                            <div className="mt-16 flex flex-wrap justify-center gap-8">
                                {["Same-week scheduling", "1-2 day completion", "1-year warranty", "Licensed & Insured"].map(t => (
                                    <div key={t} className="flex items-center gap-2 text-sm text-red-200 font-medium">
                                        <CheckCircle2 className="w-4 h-4 text-red-400" />
                                        {t}
                                    </div>
                                ))}
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* ── WHEN DO YOU NEED REPAIRS ─────────────────────────── */}
                <section className="py-20 md:py-28 bg-white">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <AnimatedSection className="text-center mb-14">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                                6 Signs You Need Soffit Repairs
                            </h2>
                            <p className="text-xl text-gray-500 max-w-xl mx-auto">
                                Most of these worsen fast in Florida's climate. Don't wait.
                            </p>
                        </AnimatedSection>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {damageTypes.map((d, i) => {
                                const Icon = d.icon;
                                return (
                                    <AnimatedSection key={d.title} delay={i * 80} from="bottom">
                                        <div className={`h-full p-7 rounded-2xl border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${colorMap[d.color]}`}>
                                            <Icon className={`w-10 h-10 mb-4 ${iconMap[d.color]}`} />
                                            <h3 className="text-lg font-bold text-gray-900 mb-2">{d.title}</h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">{d.body}</p>
                                        </div>
                                    </AnimatedSection>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* ── BENEFITS ─────────────────────────────────────────── */}
                <section className="py-20 bg-gray-50 border-y border-gray-100">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <AnimatedSection className="text-center mb-14">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Why Repair Instead of Replace?</h2>
                            <p className="text-gray-500 text-xl">Smaller scope = faster turnaround, lower cost, same quality.</p>
                        </AnimatedSection>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {benefits.map((b, i) => {
                                const Icon = b.icon;
                                return (
                                    <AnimatedSection key={b.title} delay={i * 90} from="bottom">
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

                        {/* Stats card */}
                        <AnimatedSection delay={200}>
                            <div className="mt-10 bg-white rounded-2xl shadow-xl border border-gray-100 p-8 max-w-2xl mx-auto">
                                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Quick Repair Facts</h3>
                                <div className="space-y-0 divide-y divide-gray-100">
                                    {[
                                        { label: "Average completion time", value: "1-2 Days" },
                                        { label: "Cost vs full replacement", value: "60-80% Less", highlight: "text-green-600" },
                                        { label: "Emergency service", value: "Same Day Available" },
                                        { label: "Workmanship warranty", value: "1 Year" },
                                    ].map(r => (
                                        <div key={r.label} className="flex justify-between items-center py-4">
                                            <span className="text-gray-600 text-sm">{r.label}</span>
                                            <span className={`font-bold text-sm ${r.highlight ?? "text-gray-900"}`}>{r.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* ── CTA ───────────────────────────────────────────────── */}
                <section className="py-20 bg-gradient-to-br from-bubble-primary to-blue-800 text-white text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.07),transparent_60%)]" aria-hidden />
                    <div className="container mx-auto px-4 max-w-3xl relative z-10">
                        <AnimatedSection>
                            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">Ready to Fix Your Soffit?</h2>
                            <p className="text-lg text-blue-200 mb-10 max-w-xl mx-auto">
                                Free inspection + written quote. We tell you exactly what needs fixing — nothing more.
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
                                    className="inline-flex items-center justify-center gap-2 bg-white/10 border-2 border-white/40 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition text-base"
                                >
                                    <PhoneCall className="w-5 h-5" /> (407) 715-1790
                                </a>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>
            </div>
        </>
    );
}
