import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, ArrowRight, MapPin, Phone } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { cities, getCityData } from "./data";

type Props = {
    params: Promise<{ city: string }>;
};

export async function generateStaticParams() {
    return cities.map(c => ({ city: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { city: slug } = await params;
    const city = getCityData(slug);
    if (!city) return {};
    return {
        title: `Soffit & Fascia Repair in ${city.name}, FL | Bubbles Enterprise`,
        description: `Expert soffit and fascia repair, replacement, and installation in ${city.name}, FL (${city.county}). Licensed & insured. Free estimates. Call (407) 715-1790.`,
        openGraph: {
            title: `Soffit & Fascia Repair ${city.name}, FL | Bubbles Enterprise`,
            description: `Serving ${city.name} and surrounding ${city.county} communities. Free on-site estimates. Same-week scheduling.`,
            url: `https://bubblesenterprise.com/areas/${city.slug}`,
        },
        alternates: {
            canonical: `https://bubblesenterprise.com/areas/${city.slug}`,
            languages: {
                en: `https://bubblesenterprise.com/areas/${city.slug}`,
                es: `https://bubblesenterprise.com/es/areas/${city.slug}`,
                pt: `https://bubblesenterprise.com/pt/areas/${city.slug}`,
                "x-default": `https://bubblesenterprise.com/areas/${city.slug}`,
            },
        },
    };
}

function buildSchema(city: ReturnType<typeof getCityData>) {
    if (!city) return null;
    return {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                "@id": `https://bubblesenterprise.com/areas/${city.slug}#service`,
                name: `Soffit & Fascia Services — ${city.name}, FL`,
                serviceType: "Soffit and Fascia Repair, Removal and Replacement, New Construction Installation",
                description: `Expert soffit and fascia repair and replacement in ${city.name}, FL. Storm damage, animal intrusion, rotted wood, and full removal and replacement. Licensed and insured.`,
                dateModified: "2026-03-05",
                provider: { "@id": "https://bubblesenterprise.com/#business" },
                areaServed: {
                    "@type": "City",
                    name: city.name,
                    addressRegion: "FL",
                    containedInPlace: {
                        "@type": "AdministrativeArea",
                        name: city.county,
                        addressRegion: "FL",
                    },
                },
            },
            {
                "@type": "FAQPage",
                "@id": `https://bubblesenterprise.com/areas/${city.slug}#faq`,
                mainEntity: [
                    {
                        "@type": "Question",
                        name: `Do you offer soffit and fascia repair in ${city.name}, FL?`,
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: `Yes. Bubbles Enterprise serves ${city.name} and all of ${city.county} for soffit and fascia repair, remove and replace, and new construction installation. Call (407) 715-1790 for a free estimate.`,
                        },
                    },
                    {
                        "@type": "Question",
                        name: `How much does soffit replacement cost in ${city.name}?`,
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: `Cost depends on the home's size, material choice (aluminum vs vinyl), and whether fascia boards need replacement. Every property is different — we give you a written itemized quote after a free on-site estimate. Use the calculator at bubblesenterprise.com/calculator for a starting estimate.`,
                        },
                    },
                    {
                        "@type": "Question",
                        name: `How quickly can you come to ${city.name}?`,
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: `We offer same-day estimates and same-week scheduling for ${city.name}. For urgent issues like animal intrusion or storm damage, emergency service is available. Call (407) 715-1790.`,
                        },
                    },
                ],
            },
        ],
    };
}

// Service descriptions vary by city's common issue — built inline from city data

export default async function CityPage({ params }: Props) {
    const { city: slug } = await params;
    const city = getCityData(slug);
    if (!city) notFound();
    const schema = buildSchema(city);

    const services = [
        { title: "Soffit Repair", href: "/repairs", desc: `Targeted repairs for ${city.commonIssue}. When damage is isolated, repair can save you vs full replacement — we'll tell you honestly which is the right call.` },
        { title: "Remove & Replace", href: "/remove-replace", desc: `Full soffit and fascia removal and replacement. ${city.topService} is our most common job type in ${city.name}. Written quote before any work starts.` },
        { title: "New Construction", href: "/new-construction", desc: `IRC 806 compliant soffit installation for new builds in ${city.county}. Builder coordination available — contact us for a project quote.` },
        { title: "Emergency Repair", href: "/contact/emergency", desc: `Same-day response for animal intrusion, storm damage, and open holes in ${city.name}. Available Mon–Sat 8am–6pm.` },
    ];

    return (
        <>
            {schema && (
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            )}
            <div className="flex flex-col min-h-screen">

                {/* ── HERO ─────────────────────────────────────────────── */}
                <section className="py-24 lg:py-28 bg-gradient-to-br from-blue-900 to-indigo-950 text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/10" aria-hidden />
                    <div className="container mx-auto px-4 max-w-6xl relative z-10">
                        <AnimatedSection>
                            <div className="flex items-center gap-2 text-blue-300 text-sm font-semibold mb-4">
                                <MapPin className="w-4 h-4" />
                                <Link href="/areas" className="hover:text-white transition">All Service Areas</Link>
                                <span>/</span>
                                <span className="text-white">{city.name}, FL</span>
                            </div>
                            <h1 className="text-4xl sm:text-5xl font-extrabold mb-5 leading-tight">
                                Soffit & Fascia in<br />
                                <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                                    {city.name}, FL
                                </span>
                            </h1>
                            <p className="text-lg text-blue-100 max-w-2xl mb-8 leading-relaxed">
                                Expert soffit and fascia repair, replacement, and new construction installation
                                serving {city.name} and {city.county}. Licensed & insured. Free estimates.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center gap-2 bg-bubble-primary text-white px-8 py-4 rounded-full font-bold hover:bg-blue-600 transition shadow-lg"
                                >
                                    Free Estimate in {city.name}
                                </Link>
                                <a
                                    href="tel:4077151790"
                                    className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition"
                                >
                                    <Phone className="w-5 h-5" /> (407) 715-1790
                                </a>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* ── LOCAL CONTEXT ────────────────────────────────────── */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="grid md:grid-cols-2 gap-12 items-start">
                            <AnimatedSection>
                                <h2 className="text-3xl font-extrabold text-gray-900 mb-5">
                                    Serving {city.name} Homeowners
                                </h2>
                                <p className="text-gray-600 leading-relaxed mb-6">{city.description}</p>
                                <p className="text-gray-600 leading-relaxed">{city.localNote}</p>
                            </AnimatedSection>
                            <AnimatedSection delay={100}>
                                <div className="bg-slate-50 rounded-2xl p-7 border border-gray-100">
                                    <h3 className="font-bold text-gray-900 mb-5 text-lg">{city.name} Quick Facts</h3>
                                    <div className="space-y-0 divide-y divide-gray-100">
                                        {[
                                            { label: "County", value: city.county },
                                            { label: "Population", value: city.population },
                                            { label: "Common Home Style", value: city.homeStyle },
                                            { label: "ZIP Codes Served", value: city.zipCodes.join(", ") },
                                        ].map(row => (
                                            <div key={row.label} className="flex flex-col sm:flex-row sm:justify-between py-3 gap-1">
                                                <span className="text-sm text-gray-500 font-medium">{row.label}</span>
                                                <span className="text-sm text-gray-900 font-semibold sm:text-right max-w-[220px]">{row.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </section>

                {/* ── SERVICES ─────────────────────────────────────────── */}
                <section className="py-20 bg-slate-50">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <AnimatedSection className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                                Our Services in {city.name}
                            </h2>
                        </AnimatedSection>
                        <div className="grid sm:grid-cols-2 gap-6">
                            {services.map((s, i) => (
                                <AnimatedSection key={s.title} delay={i * 80} from="bottom">
                                    <Link href={s.href} className="block bg-white rounded-2xl p-7 border border-gray-200 hover:shadow-lg hover:border-blue-200 transition h-full group">
                                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-bubble-primary transition flex items-center justify-between">
                                            {s.title}
                                            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-bubble-primary transition" />
                                        </h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                                    </Link>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── WHY BUBBLES ──────────────────────────────────────── */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <AnimatedSection className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                                Why {city.name} Homeowners Choose Us
                            </h2>
                        </AnimatedSection>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {city.whyBullets.map((item, i) => (
                                <AnimatedSection key={item} delay={i * 50} from="bottom">
                                    <div className="flex items-start gap-3 bg-blue-50 rounded-xl p-4 border border-blue-100">
                                        <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                                        <span className="text-gray-700 text-sm font-medium">{item}</span>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── NEARBY AREAS ─────────────────────────────────────── */}
                <section className="py-16 bg-slate-50 border-t border-gray-100">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <AnimatedSection className="text-center mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Also Serving Near {city.name}</h2>
                            <p className="text-gray-500 text-sm">We cover {city.name} and all surrounding communities</p>
                        </AnimatedSection>
                        <AnimatedSection delay={80} className="flex flex-wrap justify-center gap-3">
                            {city.nearbyAreas.map(area => (
                                <span key={area} className="bg-white text-gray-700 px-4 py-2 rounded-full text-sm font-medium border border-gray-200 shadow-sm">
                                    {area}, FL
                                </span>
                            ))}
                            <Link href="/areas" className="bg-bubble-primary text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition">
                                View All Areas →
                            </Link>
                        </AnimatedSection>
                    </div>
                </section>

                {/* ── FAQ ──────────────────────────────────────────────── */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <AnimatedSection className="text-center mb-12">
                            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
                                Common Questions — {city.name}
                            </h2>
                        </AnimatedSection>
                        <div className="space-y-4">
                            {city.faqs.map((faq, i) => (
                                <AnimatedSection key={i} delay={i * 70} from="bottom">
                                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                                        <h3 className="text-base font-bold text-gray-900 mb-3">{faq.q}</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── CTA ──────────────────────────────────────────────── */}
                <section className="py-20 bg-gradient-to-br from-bubble-primary to-blue-800 text-white text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.07),transparent_60%)]" aria-hidden />
                    <div className="container mx-auto px-4 max-w-3xl relative z-10">
                        <AnimatedSection>
                            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
                                Ready to Fix Your Soffit in {city.name}?
                            </h2>
                            <p className="text-lg text-blue-200 mb-8 max-w-xl mx-auto">
                                Free on-site inspection. Written estimate before any work starts.
                                Same-week scheduling available.
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
                                    Cost Calculator
                                </Link>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

            </div>
        </>
    );
}
