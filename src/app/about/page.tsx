import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Shield, Zap, Users, DollarSign, Leaf, Star } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
    title: "About Bubbles Enterprise | Orlando's Soffit Specialists",
    description:
        "Discover our story, mission \u0026 values. 500+ Orlando homes protected. Expert soffit \u0026 fascia — New Construction \u0026 Remove \u0026 Replace. KB Home \u0026 DR Horton partner.",
    openGraph: {
        title: "About Bubbles Enterprise | Who We Are",
        description:
            "One of Orlando's most trusted soffit \u0026 fascia companies. Premium aluminum \u0026 vinyl, 1–3 day completion, 100% satisfaction guarantee.",
        url: "https://bubblesenterprise.com/about",
    },
    alternates: {
        canonical: "https://bubblesenterprise.com/about",
        languages: {
            en: "https://bubblesenterprise.com/about",
            es: "https://bubblesenterprise.com/es/about",
            pt: "https://bubblesenterprise.com/pt/about",
            "x-default": "https://bubblesenterprise.com/about",
        },
    },
};

const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": "https://bubblesenterprise.com/about#page",
    url: "https://bubblesenterprise.com/about",
    name: "About Bubbles Enterprise",
    dateModified: "2026-03-05",
    mainEntity: {
        "@id": "https://bubblesenterprise.com/#business",
        knowsAbout: ["Aluminum Soffit", "Vinyl Soffit", "Fascia Repair", "Roof Ventilation", "IRC 806 Compliance"],
    },
};

const stats = [
    { value: "500+", label: "Homes Protected", icon: <Shield className="w-5 h-5" />, color: "text-blue-400" },
    { value: "1–3", label: "Days to Complete", icon: <Zap className="w-5 h-5" />, color: "text-yellow-400" },
    { value: "100%", label: "Satisfaction Rate", icon: <Star className="w-5 h-5" />, color: "text-green-400" },
    { value: "30+", label: "Year Warranty", icon: <CheckCircle2 className="w-5 h-5" />, color: "text-purple-400" },
];

const values = [
    {
        icon: <CheckCircle2 className="w-7 h-7" />,
        bg: "bg-blue-600",
        title: "Quality Excellence",
        desc: "Every material, every technique, every detail meets our rigorous standards. We never cut corners.",
    },
    {
        icon: <Users className="w-7 h-7" />,
        bg: "bg-green-600",
        title: "Customer First",
        desc: "Your satisfaction drives everything. Clear communication, realistic timelines, results that exceed expectations.",
    },
    {
        icon: <Zap className="w-7 h-7" />,
        bg: "bg-purple-600",
        title: "Innovation & Speed",
        desc: "Most projects done in 1–3 days. Efficient processes, experienced teams, zero compromise on quality.",
    },
    {
        icon: <DollarSign className="w-7 h-7" />,
        bg: "bg-orange-600",
        title: "Transparent Pricing",
        desc: "No hidden fees. No surprise charges. We quote it, we honor it — from first call to final sign-off.",
    },
    {
        icon: <Shield className="w-7 h-7" />,
        bg: "bg-red-600",
        title: "Reliability & Trust",
        desc: "We show up. We finish on time. We stand behind our work with warranties up to 30 years.",
    },
    {
        icon: <Leaf className="w-7 h-7" />,
        bg: "bg-teal-600",
        title: "Environmental Care",
        desc: "Sustainable materials, minimal waste, and proper ventilation systems that lower your energy bills.",
    },
];

const timeline = [
    { phase: "Founded", desc: "He starts Bubbles Enterprise with a simple focus: master soffit & fascia and nothing else." },
    { phase: "First 100 Homes", desc: "Serves 100+ homeowners in the Orlando area, earning 5-star reviews for precision and reliability." },
    { phase: "Builder Partnerships", desc: "Selected as preferred contractor by KB Home and certified partner of DR Horton across Central Florida." },
    { phase: "500+ Projects", desc: "Over 500 homes protected. ABC Supply authorized dealer status earned. NAHB Standards certified." },
    { phase: "Today", desc: "The most specialized soffit & fascia company in Central Florida — setting the standard for the entire region." },
];

export default function AboutPage() {
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
                            { "@type": "ListItem", position: 2, name: "About", item: "https://bubblesenterprise.com/about" },
                        ],
                    }),
                }}
            />
            <div className="flex flex-col min-h-screen">

                {/* ── DARK HERO ── */}
                <section className="relative overflow-hidden bg-bubble-navy min-h-[80vh] flex items-center py-24">
                    {/* Grid overlay */}
                    <div className="absolute inset-0 opacity-[0.07]">
                        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <defs>
                                <pattern id="grid-about" width="10" height="10" patternUnits="userSpaceOnUse">
                                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                                </pattern>
                            </defs>
                            <rect width="100" height="100" fill="url(#grid-about)" />
                        </svg>
                    </div>
                    {/* Gradient orbs */}
                    <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

                    <div className="container mx-auto px-4 max-w-7xl relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest mb-8">
                                <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                                Orlando&apos;s Soffit Specialists
                            </div>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6 leading-[1.05]">
                                We Don&apos;t Do<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                                    Everything.
                                </span>
                                <br />
                                We Master One Thing.
                            </h1>
                            <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
                                Soffit &amp; Fascia — installed, repaired, and replaced flawlessly across Central Florida. When hyper-focus meets premium craftsmanship, that&apos;s the Bubbles difference.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-bubble-navy font-bold hover:bg-blue-50 transition hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.15)]">
                                    Work With Us <ArrowRight className="w-4 h-4" />
                                </Link>
                                <Link href="/gallery" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 border border-white/20 text-white font-bold hover:bg-white/20 transition">
                                    See Our Work
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── BENTO STATS GRID ── */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                            {stats.map((s, i) => (
                                <AnimatedSection key={s.label} from="scale" delay={i * 80}>
                                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition-all group text-center">
                                        <div className={`flex justify-center mb-3 ${s.color} opacity-70 group-hover:opacity-100 transition-opacity`}>{s.icon}</div>
                                        <div className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-1">{s.value}</div>
                                        <div className="text-sm text-gray-500 font-medium">{s.label}</div>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── BENTO GRID — Story + Mission + Promise ── */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className="grid lg:grid-cols-3 gap-4">

                            {/* Story — large card */}
                            <AnimatedSection from="left" className="lg:col-span-2">
                                <div className="bg-gray-50 rounded-3xl p-10 border border-gray-100 h-full">
                                    <span className="text-xs font-extrabold uppercase tracking-widest text-bubble-primary mb-4 block">Our Story</span>
                                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                                        Why Did We Choose to Specialize?
                                    </h2>
                                    <div className="space-y-4 text-gray-600 leading-relaxed">
                                        <p>
                                            <strong className="text-gray-900">Bubbles Enterprise</strong> was founded in Orlando with a clear vision: instead of being a general contractor who does everything poorly, become the absolute best at one thing — soffit and fascia.
                                        </p>
                                        <p>
                                            Orlando&apos;s climate is unforgiving. Intense heat, hurricane-force winds, and Florida humidity demand systems built to last. We recognized this and built our expertise around exactly those conditions.
                                        </p>
                                        <p>
                                            That single-minded focus is why major builders like <strong className="text-gray-900">KB Home and DR Horton</strong> trust us. And why 500+ homeowners across Central Florida choose us by name.
                                        </p>
                                    </div>
                                    <Link href="/gallery" className="inline-flex items-center gap-2 mt-8 text-bubble-primary font-bold hover:underline">
                                        See the results in our gallery <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </AnimatedSection>

                            {/* Mission + Vision stacked */}
                            <div className="flex flex-col gap-4">
                                <div className="bg-bubble-navy text-white rounded-3xl p-8 flex-1">
                                    <h3 className="text-lg font-extrabold mb-3 text-blue-300 uppercase tracking-wider text-xs">Mission</h3>
                                    <p className="text-white/80 leading-relaxed text-sm">
                                        Protect and enhance Orlando homes through superior soffit and fascia — exceptional craftsmanship, premium materials, uncompromising service.
                                    </p>
                                </div>
                                <div className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white rounded-3xl p-8 flex-1">
                                    <h3 className="text-lg font-extrabold mb-3 text-blue-100 uppercase tracking-wider text-xs">Promise</h3>
                                    <p className="text-white/90 leading-relaxed text-sm">
                                        Every project gets our full attention. We don&apos;t leave until the job is perfect — backed by a 100% satisfaction guarantee and warranties up to 30 years.
                                    </p>
                                </div>
                                <div className="bg-gray-900 text-white rounded-3xl p-8 flex-1">
                                    <blockquote className="italic text-white/80 text-sm leading-relaxed mb-3">
                                        &ldquo;Our reputation isn&apos;t built on cutting corners. It&apos;s built on perfect installations that stand for decades.&rdquo;
                                    </blockquote>
                                    <p className="font-bold text-white text-sm">— Bubbles Enterprise, Founder</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── COMPACT TIMELINE ── */}
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="text-center mb-14">
                            <span className="text-xs font-extrabold uppercase tracking-widest text-bubble-primary">Our Journey</span>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3">How We Got Here</h2>
                        </div>
                        <div className="relative">
                            {/* Vertical line */}
                            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block" />
                            <div className="space-y-8">
                                {timeline.map((item, i) => (
                                    <AnimatedSection key={item.phase} from="left" delay={i * 60}>
                                        <div className="flex gap-6 items-start">
                                            <div className="shrink-0 w-12 h-12 rounded-full bg-bubble-primary text-white flex items-center justify-center text-lg font-extrabold shadow-lg z-10 relative">
                                                {i + 1}
                                            </div>
                                            <div className="bg-white rounded-2xl p-6 flex-1 shadow-sm border border-gray-100 hover:shadow-md transition">
                                                <p className="text-xs font-extrabold text-bubble-primary uppercase tracking-widest mb-1">{item.phase}</p>
                                                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                                            </div>
                                        </div>
                                    </AnimatedSection>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── 6 VALUES GRID ── */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className="text-center mb-14">
                            <span className="text-xs font-extrabold uppercase tracking-widest text-bubble-primary">What Drives Us</span>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3">What Values Drive Our Work?</h2>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {values.map((v, i) => (
                                <AnimatedSection key={v.title} from="bottom" delay={i * 80}>
                                    <div className="group bg-gray-50 hover:bg-white border border-gray-100 hover:border-gray-200 hover:shadow-lg rounded-2xl p-8 transition-all hover:-translate-y-0.5 h-full">
                                        <div className={`w-14 h-14 ${v.bg} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                                            {v.icon}
                                        </div>
                                        <h3 className="text-lg font-extrabold text-gray-900 mb-3">{v.title}</h3>
                                        <p className="text-gray-600 leading-relaxed text-sm">{v.desc}</p>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── BUILDER TRUST + CERTS — dark panel ── */}
                <section className="py-20 bg-bubble-navy text-white">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <span className="text-xs font-extrabold uppercase tracking-widest text-blue-400 mb-4 block">Trusted By Industry Leaders</span>
                                <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
                                    Builders Choose Us.<br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                                        Homeowners Trust Us.
                                    </span>
                                </h2>
                                <p className="text-white/60 leading-relaxed mb-8">
                                    Our partnership with Central Florida&apos;s largest builders is built on one thing: zero callbacks. Our installations are right the first time, every time.
                                </p>
                                <div className="space-y-4">
                                    {[
                                        { label: "KB Home", role: "Preferred Contractor" },
                                        { label: "DR Horton", role: "Certified Partner" },
                                        { label: "ABC Supply", role: "Authorized Dealer" },
                                    ].map(b => (
                                        <div key={b.label} className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl px-5 py-4 hover:bg-white/10 transition">
                                            <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center shrink-0">
                                                <CheckCircle2 className="w-4 h-4 text-blue-900" />
                                            </div>
                                            <div>
                                                <span className="font-extrabold text-white">{b.label}</span>
                                                <span className="text-white/50 text-sm ml-2">— {b.role}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { label: "IRC Section 806", sub: "Building Code Compliant", icon: "📋" },
                                    { label: "NAHB Certified", sub: "National Standards", icon: "🏆" },
                                    { label: "Energy Star", sub: "Ventilation Partner", icon: "⚡" },
                                    { label: "Licensed & Insured", sub: "Florida State Certified", icon: "🛡️" },
                                ].map(c => (
                                    <div key={c.label} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition text-center">
                                        <div className="text-3xl mb-3">{c.icon}</div>
                                        <p className="font-extrabold text-white text-sm">{c.label}</p>
                                        <p className="text-white/40 text-xs mt-1">{c.sub}</p>
                                    </div>
                                ))}
                                <div className="col-span-2">
                                    <Link href="/certifications" className="flex items-center justify-center gap-2 w-full bg-white/10 border border-white/20 text-white rounded-2xl py-4 font-bold hover:bg-white/20 transition text-sm">
                                        View All Certifications <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── FINAL CTA ── */}
                <section className="py-24 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white text-center">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
                            Ready to Experience the Difference?
                        </h2>
                        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                            Join 500+ satisfied Orlando homeowners. Get your free estimate today.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                            <Link href="/contact" className="bg-yellow-400 text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition shadow-lg inline-flex items-center gap-2">
                                Free Estimate <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link href="/calculator" className="border-2 border-white/40 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition inline-flex items-center gap-2">
                                Calculate My Project
                            </Link>
                        </div>
                        <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
                            {[{ v: "FREE", l: "Estimates" }, { v: "1–3 Days", l: "Completion" }, { v: "100%", l: "Guaranteed" }].map(i => (
                                <div key={i.l} className="bg-white/10 rounded-xl p-4">
                                    <p className="text-xl font-extrabold text-yellow-400">{i.v}</p>
                                    <p className="text-blue-100 text-xs">{i.l}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
