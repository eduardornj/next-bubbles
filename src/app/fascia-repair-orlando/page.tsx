import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, AlertTriangle, Droplets, ShieldCheck, Clock, Phone, Wrench } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
    title: "Fascia Repair & Replacement in Orlando, FL | Bubbles Enterprise",
    description:
        "Expert fascia repair and replacement in Orlando, FL. Rotted wood fascia, damaged fascia boards, gutter-related fascia damage. Licensed & insured. Free estimates. (407) 715-1790.",
    openGraph: {
        title: "Fascia Repair Orlando | Bubbles Enterprise",
        description: "Fascia protects your roofline from water damage. Expert repair and replacement across Orlando and Central Florida.",
        url: "https://bubblesenterprise.com/fascia-repair-orlando",
    },
    alternates: {
        canonical: "https://bubblesenterprise.com/fascia-repair-orlando",
        languages: {
            en: "https://bubblesenterprise.com/fascia-repair-orlando",
            es: "https://bubblesenterprise.com/es/fascia-repair-orlando",
            pt: "https://bubblesenterprise.com/pt/fascia-repair-orlando",
            "x-default": "https://bubblesenterprise.com/fascia-repair-orlando",
        },
    },
};

const schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            "@id": "https://bubblesenterprise.com/fascia-repair-orlando#service",
            name: "Fascia Repair & Replacement — Orlando, FL",
            serviceType: "Fascia Repair, Fascia Board Replacement, Roofline Repair",
            description: "Expert fascia repair and replacement in Orlando, FL. Rotted wood, water damage, storm damage, gutter-related fascia deterioration. Licensed & insured.",
            dateModified: "2026-03-05",
            provider: { "@id": "https://bubblesenterprise.com/#business" },
            areaServed: [
                { "@type": "City", name: "Orlando", addressRegion: "FL" },
                { "@type": "City", name: "Winter Park", addressRegion: "FL" },
                { "@type": "City", name: "Kissimmee", addressRegion: "FL" },
                { "@type": "City", name: "Sanford", addressRegion: "FL" },
                { "@type": "City", name: "Oviedo", addressRegion: "FL" },
                { "@type": "City", name: "Apopka", addressRegion: "FL" },
            ],
            offers: {
                "@type": "Offer",
                description: "Free on-site fascia inspection and estimate. Same-week scheduling available.",
                priceCurrency: "USD",
            },
        },
        {
            "@type": "FAQPage",
            "@id": "https://bubblesenterprise.com/fascia-repair-orlando#faq",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "What is fascia on a house?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Fascia is the vertical board that runs along the edge of your roofline, where the roof meets the outer walls. It's the board your gutters attach to. Fascia protects the roof rafters from water exposure and gives the roofline a clean, finished appearance.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What causes fascia to rot in Orlando?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "In Orlando, fascia rot is primarily caused by clogged or overflowing gutters that push water back against the wood, Florida's intense humidity, and aging wood that loses its protective coating. Homes built before 2000 with original wood fascia are especially vulnerable.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can you repair fascia without replacing the soffit?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes, in many cases. Fascia and soffit are separate components. If only the fascia is damaged, we can replace just the fascia boards and leave the existing soffit panels in place — provided they are still in good condition.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How much does fascia repair cost in Orlando?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Fascia repair in Orlando costs $6–$12 per linear foot installed, depending on material and extent of damage. A typical single-story home with 150–200 linear feet of fascia runs $900–$2,400. Most jobs also include soffit work done at the same time.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Do you reinstall gutters after fascia replacement?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "We do not reinstall old gutters — gutters warp and deform when removed. You will need a gutter company to install new gutters after the fascia work is complete. We specialize exclusively in soffit and fascia.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What is the difference between soffit and fascia?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Soffit is the horizontal surface on the underside of the roof overhang — it faces the ground. Fascia is the vertical board at the front edge of the roofline — it faces outward. They work together: the soffit ventilates your attic, the fascia protects the structural edge and supports your gutters.",
                    },
                },
            ],
        },
        {
            "@type": "HowTo",
            "@id": "https://bubblesenterprise.com/fascia-repair-orlando#process",
            name: "Our Fascia Repair Process",
            description: "How Bubbles Enterprise repairs and replaces fascia boards in Orlando, FL.",
            step: [
                {
                    "@type": "HowToStep",
                    position: 1,
                    name: "Free On-Site Inspection",
                    text: "We inspect the full fascia perimeter, identify rot or damage extent, and check for sub-fascia structural issues.",
                },
                {
                    "@type": "HowToStep",
                    position: 2,
                    name: "Written Estimate",
                    text: "You receive a transparent, itemized quote — labor, material, and linear footage — before any work starts.",
                },
                {
                    "@type": "HowToStep",
                    position: 3,
                    name: "Remove Damaged Fascia",
                    text: "We carefully remove old or rotted fascia boards and inspect the exposed sub-fascia for structural issues.",
                },
                {
                    "@type": "HowToStep",
                    position: 4,
                    name: "Sub-Fascia Check",
                    text: "If structural wood rot is found, we stop and notify you immediately. A licensed carpenter must repair structural wood before we continue.",
                },
                {
                    "@type": "HowToStep",
                    position: 5,
                    name: "Install New Fascia",
                    text: "New aluminum or vinyl fascia is installed, secured properly, and finished to match your home's trim.",
                },
                {
                    "@type": "HowToStep",
                    position: 6,
                    name: "Final Walkthrough & Cleanup",
                    text: "Full site cleanup including magnetic sweep. You inspect the work before we leave.",
                },
            ],
        },
    ],
};

const signs = [
    {
        icon: Droplets,
        color: "blue",
        title: "Water Stains or Rot",
        body: "Dark staining, soft spots, or visibly rotted wood on your fascia boards. This is the #1 sign in Florida — often caused by gutters overflowing onto the fascia.",
    },
    {
        icon: AlertTriangle,
        color: "orange",
        title: "Peeling or Bubbling Paint",
        body: "Paint peeling off your fascia usually means moisture is getting into the wood underneath. Fix the fascia before repainting — paint alone won't stop the rot.",
    },
    {
        icon: Wrench,
        color: "red",
        title: "Sagging or Pulling Away",
        body: "If your fascia board is pulling away from the roofline or sagging, the wood may be structurally compromised. Your gutters are probably also off-pitch.",
    },
    {
        icon: ShieldCheck,
        color: "purple",
        title: "Gutter Pulling Fascia",
        body: "Heavy Florida rain loads and clogged gutters create weight and water pressure that physically pull fascia boards away from the roof. Needs immediate attention.",
    },
];

const colorMap: Record<string, { card: string; icon: string }> = {
    blue: { card: "bg-blue-50 border-blue-100", icon: "text-blue-500" },
    orange: { card: "bg-orange-50 border-orange-100", icon: "text-orange-500" },
    red: { card: "bg-red-50 border-red-100", icon: "text-red-500" },
    purple: { card: "bg-purple-50 border-purple-100", icon: "text-purple-500" },
};

const processSteps = [
    { step: "01", title: "Free Inspection", desc: "We assess the full fascia perimeter and identify all damage — rot, structural issues, and attachment problems." },
    { step: "02", title: "Written Estimate", desc: "Transparent quote with labor, material, and linear footage before any work begins. No surprises." },
    { step: "03", title: "Remove & Check", desc: "Old fascia removed. Sub-fascia inspected. If structural rot is found, we stop and notify you immediately." },
    { step: "04", title: "Install New Fascia", desc: "New aluminum or vinyl fascia installed and secured to your roofline. Color-matched to existing trim." },
    { step: "05", title: "Cleanup & Walkthrough", desc: "Full site cleanup including magnetic nail sweep. You inspect before we leave." },
];

export default function FasciaRepairOrlandoPage() {
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
                            { "@type": "ListItem", position: 3, name: "Fascia Repair Orlando", item: "https://bubblesenterprise.com/fascia-repair-orlando" },
                        ],
                    }),
                }}
            />
            <div className="flex flex-col min-h-screen">

                {/* ── HERO ─────────────────────────────────────────────── */}
                <section className="py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[120px]" aria-hidden />
                    <div className="container mx-auto px-4 max-w-6xl relative z-10">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <AnimatedSection>
                                <span className="inline-block bg-indigo-500/20 border border-indigo-400/30 px-4 py-2 rounded-full text-xs font-bold mb-6 uppercase tracking-widest">
                                    Fascia Specialists — Orlando, FL
                                </span>
                                <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
                                    Fascia Repair &<br />
                                    <span className="bg-gradient-to-r from-indigo-300 to-blue-300 bg-clip-text text-transparent">
                                        Replacement Orlando
                                    </span>
                                </h1>
                                <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                                    Your fascia holds your gutters and seals your roofline. When it rots or pulls away,
                                    water damage follows fast. We replace it right — aluminum or vinyl, same week.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center justify-center gap-2 bg-bubble-primary text-white px-8 py-4 rounded-full font-bold hover:bg-blue-600 transition shadow-lg"
                                    >
                                        Free Fascia Inspection
                                    </Link>
                                    <a
                                        href="tel:4077151790"
                                        className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition"
                                    >
                                        <Phone className="w-5 h-5" /> (407) 715-1790
                                    </a>
                                </div>
                            </AnimatedSection>
                            <AnimatedSection delay={100}>
                                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                                    <h2 className="text-lg font-bold text-white mb-6">What Is Fascia?</h2>
                                    <p className="text-slate-300 text-sm leading-relaxed mb-6">
                                        Fascia is the vertical finishing board that runs along the outer edge of your roofline —
                                        right where the roof meets the top of your exterior walls. It&apos;s the board your gutters
                                        attach to, and it protects your roof rafters from direct weather exposure.
                                    </p>
                                    <div className="space-y-3">
                                        {[
                                            "Attaches directly to roof rafters/trusses",
                                            "Gutter system mounts directly to fascia",
                                            "Seals the roofline edge from moisture",
                                            "Works with soffit to protect your attic",
                                        ].map(item => (
                                            <div key={item} className="flex items-center gap-3 text-sm text-slate-300">
                                                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </section>

                {/* ── SIGNS YOU NEED FASCIA REPAIR ─────────────────────── */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <AnimatedSection className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                                4 Signs Your Fascia Needs Attention
                            </h2>
                            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                                Fascia damage worsens fast in Florida&apos;s humidity. Catching it early saves thousands in water damage.
                            </p>
                        </AnimatedSection>
                        <div className="grid sm:grid-cols-2 gap-6">
                            {signs.map((s, i) => {
                                const Icon = s.icon;
                                return (
                                    <AnimatedSection key={s.title} delay={i * 80} from="bottom">
                                        <div className={`rounded-2xl p-7 border-2 h-full ${colorMap[s.color].card}`}>
                                            <Icon className={`w-10 h-10 mb-4 ${colorMap[s.color].icon}`} />
                                            <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">{s.body}</p>
                                        </div>
                                    </AnimatedSection>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* ── FASCIA VS SOFFIT ─────────────────────────────────── */}
                <section className="py-20 bg-slate-50">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <AnimatedSection className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                                Fascia vs. Soffit — What&apos;s the Difference?
                            </h2>
                        </AnimatedSection>
                        <AnimatedSection delay={80}>
                            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="bg-slate-900 text-white">
                                            <th className="text-left px-5 py-4 font-semibold rounded-tl-2xl">Feature</th>
                                            <th className="text-center px-5 py-4 font-semibold text-indigo-300">Fascia</th>
                                            <th className="text-center px-5 py-4 font-semibold text-cyan-300 rounded-tr-2xl">Soffit</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            ["Position", "Vertical — front edge of roof", "Horizontal — underside of overhang"],
                                            ["Faces", "Outward (visible from street)", "Downward (visible from ground below)"],
                                            ["Main function", "Protects roof rafters, holds gutters", "Ventilates attic, closes overhang gap"],
                                            ["Vulnerability", "Water from overflowing gutters", "Pests, rot, blocked vent holes"],
                                            ["Can be replaced alone?", "Yes — if soffit is intact", "Yes — if fascia is intact"],
                                            ["Material options", "Aluminum or vinyl wrap", "Aluminum or vinyl vented panels"],
                                        ].map(([feature, fascia, soffit], i) => (
                                            <tr key={feature} className={`border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
                                                <td className="px-5 py-4 font-medium text-gray-900">{feature}</td>
                                                <td className="px-5 py-4 text-center text-gray-700">{fascia}</td>
                                                <td className="px-5 py-4 text-center text-gray-700">{soffit}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* ── PROCESS ──────────────────────────────────────────── */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <AnimatedSection className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                                Our Fascia Repair Process
                            </h2>
                            <p className="text-gray-500 text-lg">From call to cleanup — usually completed in one day.</p>
                        </AnimatedSection>
                        <div className="space-y-4">
                            {processSteps.map((s, i) => (
                                <AnimatedSection key={s.step} delay={i * 80} from="bottom">
                                    <div className="flex gap-6 items-start bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition">
                                        <div className="w-12 h-12 bg-bubble-primary rounded-xl flex items-center justify-center text-white font-extrabold text-sm shrink-0">
                                            {s.step}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 mb-1">{s.title}</h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                                        </div>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── FAQ ──────────────────────────────────────────────── */}
                <section className="py-20 bg-blue-50">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <AnimatedSection className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                                Fascia Repair — Common Questions
                            </h2>
                        </AnimatedSection>
                        <div className="space-y-5">
                            {[
                                {
                                    q: "What is fascia on a house?",
                                    a: "Fascia is the vertical board running along the outer edge of your roofline. It's where your gutters attach, and it protects your roof rafters from direct weather exposure. Without a solid fascia, your entire roofline edge is vulnerable to water intrusion.",
                                },
                                {
                                    q: "What causes fascia to rot in Orlando?",
                                    a: "The main culprit in Orlando is overflowing or clogged gutters pushing water back against the wood fascia. Florida's humidity accelerates the rot once moisture gets in. Most homes built before 2000 have wood fascia that has already started deteriorating.",
                                },
                                {
                                    q: "Can you repair fascia without replacing the soffit?",
                                    a: "Yes — fascia and soffit are separate components. If only the fascia is damaged, we replace just the fascia boards. If both are deteriorated (common in older Florida homes), doing both together is more cost-efficient.",
                                },
                                {
                                    q: "How much does fascia repair cost in Orlando?",
                                    a: "Fascia replacement in Orlando runs $6–$12 per linear foot installed. A typical single-story home with 150–200 LF runs $900–$2,400 for fascia alone. Most jobs are done together with soffit for a combined project.",
                                },
                                {
                                    q: "Do you reinstall gutters after fascia replacement?",
                                    a: "We do not reinstall old gutters — they warp and deform on removal. You'll need a gutter company for new gutters after our work. We specialize exclusively in soffit and fascia.",
                                },
                                {
                                    q: "What is the difference between soffit and fascia?",
                                    a: "Soffit is horizontal — on the underside of your roof overhang, facing the ground. Fascia is vertical — at the front edge of the roofline, facing outward. Soffit ventilates your attic; fascia seals the structural edge and supports your gutters. They are usually replaced together.",
                                },
                            ].map((faq, i) => (
                                <AnimatedSection key={i} delay={i * 50} from="bottom">
                                    <div className="bg-white rounded-2xl p-6 border border-blue-100 shadow-sm">
                                        <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.q}</h3>
                                        <p className="text-gray-600 leading-relaxed text-sm">{faq.a}</p>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── SERVICE AREAS ────────────────────────────────────── */}
                <section className="py-16 bg-white border-t border-gray-100">
                    <div className="container mx-auto px-4 max-w-5xl text-center">
                        <AnimatedSection>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Serving All of Central Florida</h2>
                            <p className="text-gray-500 mb-8">Fascia repair and replacement in Orlando and surrounding areas</p>
                            <div className="flex flex-wrap justify-center gap-3">
                                {["Orlando", "Winter Park", "Kissimmee", "Sanford", "Oviedo", "Apopka", "Lake Mary", "Altamonte Springs", "Clermont", "Winter Garden", "Maitland", "Casselberry"].map(city => (
                                    <span key={city} className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold border border-blue-100">
                                        {city}, FL
                                    </span>
                                ))}
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* ── CTA ──────────────────────────────────────────────── */}
                <section className="py-20 bg-gradient-to-br from-bubble-primary to-blue-800 text-white text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.07),transparent_60%)]" aria-hidden />
                    <div className="container mx-auto px-4 max-w-3xl relative z-10">
                        <AnimatedSection>
                            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
                                Rotted Fascia? Let&apos;s Fix It.
                            </h2>
                            <p className="text-lg text-blue-200 mb-8 max-w-xl mx-auto">
                                Free on-site inspection. Written estimate before any work starts.
                                Most fascia jobs completed same week.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center gap-2 bg-white text-bubble-navy px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition shadow-xl"
                                >
                                    Schedule Free Inspection <ArrowRight className="w-5 h-5" />
                                </Link>
                                <a
                                    href="tel:4077151790"
                                    className="inline-flex items-center justify-center gap-2 bg-white/10 border-2 border-white/40 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition"
                                >
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
