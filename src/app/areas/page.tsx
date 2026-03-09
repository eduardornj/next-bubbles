import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
    title: "Areas We Serve | Soffit & Fascia Central Florida",
    description:
        "Bubbles Enterprise serves Orlando, Kissimmee, Winter Park, Clermont, and across Central Florida. Expert soffit and fascia installation built for Florida's climate.",
    openGraph: {
        title: "Areas We Serve | Soffit & Fascia | Bubbles Enterprise",
        description:
            "Professional soffit and fascia services across Orlando and all of Central Florida. We know Florida homes.",
        url: "https://bubblesenterprise.com/areas",
    },
    alternates: {
        canonical: "https://bubblesenterprise.com/areas",
        languages: {
            en: "https://bubblesenterprise.com/areas",
            es: "https://bubblesenterprise.com/es/areas",
            pt: "https://bubblesenterprise.com/pt/areas",
            "x-default": "https://bubblesenterprise.com/areas",
        },
    },
};

// Cities with dedicated pages
const linkedCities: Record<string, string> = {
    "orlando": "Orlando",
    "kissimmee": "Kissimmee",
    "winter-park": "Winter Park",
    "winter-garden": "Winter Garden",
    "clermont": "Clermont",
    "altamonte-springs": "Altamonte Springs",
    "sanford": "Sanford",
    "oviedo": "Oviedo",
    "lake-mary": "Lake Mary",
    "apopka": "Apopka",
    "celebration": "Celebration",
    "st-cloud": "St. Cloud",
    "daytona-beach": "Daytona Beach",
    "palm-bay": "Palm Bay",
    "port-st-lucie": "Port St. Lucie",
    "maitland": "Maitland",
    "casselberry": "Casselberry",
    "longwood": "Longwood",
    "lake-nona": "Lake Nona",
    "dr-phillips": "Dr. Phillips",
    "windermere": "Windermere",
};

const centralFlorida = [
    "Orlando", "Kissimmee", "Winter Park", "Winter Garden", "Clermont",
    "Altamonte Springs", "Sanford", "Oviedo", "Lake Mary", "Apopka",
    "Maitland", "Casselberry", "Longwood", "Celebration", "St. Cloud",
    "Daytona Beach", "Palm Bay", "Port St. Lucie", "Lake Nona", "Dr. Phillips",
    "Windermere",
];

const southFlorida = [
    "Miami", "Hialeah", "Fort Lauderdale", "Pembroke Pines", "Hollywood",
    "Miramar", "Coral Springs", "Miami Gardens", "West Palm Beach", "Pompano Beach",
    "Davie", "Boca Raton", "Sunrise", "Plantation", "Deerfield Beach",
    "Miami Beach", "Homestead", "Boynton Beach", "Kendall", "Doral",
    "North Miami", "Lauderhill", "Tamarac", "Weston", "Delray Beach",
    "Wellington", "Jupiter",
];

const whyFlorida = [
    {
        icon: "🌡️",
        title: "Intense Heat & Humidity",
        desc: "Florida's average temperatures demand proper soffit ventilation to keep attics cool and prevent moisture buildup that leads to mold.",
    },
    {
        icon: "🌧️",
        title: "Tropical Downpours",
        desc: "Fascia boards must be sturdy enough to hold heavy, water-filled gutters during frequent Florida afternoon storms.",
    },
    {
        icon: "🐿️",
        title: "Pest Defense",
        desc: "Squirrels, raccoons, and wasps love Florida attics. Secure, sealed soffits are your first line of defense against intrusion.",
    },
    {
        icon: "🏠",
        title: "Diverse Architecture",
        desc: "From stucco homes in South Florida to colonial styles in Orlando, we have solutions for every home style and overhang depth.",
    },
];

const areasSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Soffit and Fascia Installation & Repair",
    serviceType: "Soffit and Fascia Installation, Repair, Remove & Replace",
    dateModified: "2026-03-05",
    provider: {
        "@type": "LocalBusiness",
        name: "Bubbles Enterprise Soffit",
        telephone: "+14077151790",
        url: "https://bubblesenterprise.com",
        address: { "@type": "PostalAddress", addressLocality: "Orlando", addressRegion: "FL", addressCountry: "US" },
    },
    areaServed: [
        ...centralFlorida.map(c => ({ "@type": "City", name: c, addressRegion: "FL" })),
        ...southFlorida.map(c => ({ "@type": "City", name: c, addressRegion: "FL" })),
    ],
};

const getCitySlug = (name: string) =>
    Object.entries(linkedCities).find(([, v]) => v === name)?.[0] ?? null;

export default function AreasPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(areasSchema) }} />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        itemListElement: [
                            { "@type": "ListItem", position: 1, name: "Home", item: "https://bubblesenterprise.com" },
                            { "@type": "ListItem", position: 2, name: "Areas We Serve", item: "https://bubblesenterprise.com/areas" },
                        ],
                    }),
                }}
            />

            <div className="flex flex-col min-h-screen">
                {/* ── HERO ─────────────────────────────────────────────── */}
                <section className="relative overflow-hidden py-28 lg:py-36 bg-bubble-navy text-white">
                    {/* Accent glow */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[160px] pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/8 rounded-full blur-[120px] pointer-events-none" />

                    <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                        <AnimatedSection>
                            <div className="max-w-3xl mx-auto text-center lg:text-left lg:mx-0">
                                <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 rounded-full bg-white/8 border border-white/15">
                                    <MapPin className="w-4 h-4 text-blue-300" />
                                    <span className="text-white/80 text-sm font-medium">
                                        <span className="text-white font-bold">45+</span> cities across Florida
                                    </span>
                                </div>
                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-[1.1]">
                                    Expert Soffit & Fascia{" "}
                                    <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                                        Across Florida
                                    </span>
                                </h1>
                                <p className="text-lg sm:text-xl text-white/70 mb-10 leading-relaxed max-w-2xl lg:max-w-none">
                                    From Orlando to Miami and every city in between. Licensed, insured, and built for Florida&apos;s toughest climate.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                    <a
                                        href="#cities"
                                        className="inline-flex items-center justify-center gap-2.5 bg-white text-bubble-navy font-bold px-10 py-5 rounded-full text-lg hover:bg-blue-50 hover:scale-[1.02] transition-all shadow-[0_8px_30px_rgba(255,255,255,0.15)]"
                                    >
                                        <MapPin className="w-5 h-5" /> View Service Areas
                                    </a>
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center justify-center gap-2.5 bg-transparent border-2 border-white/30 text-white font-bold px-10 py-5 rounded-full text-lg hover:bg-white/10 hover:border-white/50 transition-all"
                                    >
                                        Request a Quote <ArrowRight className="w-5 h-5" />
                                    </Link>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* ── WHY FLORIDA HOMES ARE DIFFERENT ─────────────────── */}
                <section className="py-20 lg:py-24 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                        <AnimatedSection className="text-center mb-14">
                            <span className="text-bubble-primary font-bold tracking-wider uppercase text-sm">Local Expertise</span>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-4">Why Florida Homes Are Different</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Florida&apos;s unique climate demands specific protection. We understand the challenges your home faces every day.
                            </p>
                        </AnimatedSection>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {whyFlorida.map((item, i) => (
                                <AnimatedSection key={item.title} from="bottom" delay={i * 80}>
                                    <div className="relative bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 group overflow-hidden">
                                        <div className="absolute top-0 left-0 w-full h-1 bg-bubble-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                                        <div className="text-4xl mb-4">{item.icon}</div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-bubble-primary transition-colors">{item.title}</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── CITIES ─────────────────────────────────────────── */}
                <section id="cities" className="py-20 lg:py-24 bg-gray-50">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                        <AnimatedSection className="text-center mb-14">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Cities We Serve</h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                Click any city below to see local details, pricing info, and how we serve your specific area.
                            </p>
                        </AnimatedSection>

                        {/* Central Florida */}
                        <AnimatedSection from="bottom">
                            <div className="mb-12">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="w-10 h-10 rounded-xl bg-bubble-primary flex items-center justify-center">
                                        <MapPin className="w-5 h-5 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">Central Florida</h3>
                                    <span className="text-xs font-bold text-bubble-primary bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Primary</span>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                    {centralFlorida.map((city, i) => {
                                        const slug = getCitySlug(city);
                                        return slug ? (
                                            <AnimatedSection key={city} from="bottom" delay={i * 30}>
                                                <Link
                                                    href={`/areas/${slug}`}
                                                    className="group flex items-center gap-3 bg-white px-5 py-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-bubble-primary/40 hover:bg-blue-50/40 transition-all duration-200"
                                                >
                                                    <CheckCircle2 className="w-5 h-5 text-bubble-primary shrink-0" />
                                                    <span className="font-semibold text-gray-800">{city}</span>
                                                    <ArrowRight className="w-4 h-4 text-gray-300 ml-auto shrink-0 group-hover:text-bubble-primary group-hover:translate-x-1 transition-all" />
                                                </Link>
                                            </AnimatedSection>
                                        ) : (
                                            <AnimatedSection key={city} from="bottom" delay={i * 30}>
                                                <div className="flex items-center gap-3 bg-white px-5 py-4 rounded-xl border border-gray-200 shadow-sm">
                                                    <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                                                    <span className="font-semibold text-gray-800">{city}</span>
                                                </div>
                                            </AnimatedSection>
                                        );
                                    })}
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* South Florida */}
                        <AnimatedSection from="bottom" delay={100}>
                            <div>
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                                        <MapPin className="w-5 h-5 text-blue-500" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">South Florida</h3>
                                    <span className="text-xs font-bold text-blue-500 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Extended</span>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                    {southFlorida.map((city, i) => (
                                        <AnimatedSection key={city} from="bottom" delay={i * 25}>
                                            <div className="flex items-center gap-3 bg-white px-5 py-4 rounded-xl border border-gray-200 shadow-sm">
                                                <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                                                <span className="font-semibold text-gray-800">{city}</span>
                                            </div>
                                        </AnimatedSection>
                                    ))}
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* Not on the list */}
                        <AnimatedSection delay={200}>
                            <div className="mt-16 relative">
                                <div className="bg-white rounded-2xl p-10 lg:p-12 shadow-lg border border-gray-200 max-w-2xl mx-auto text-center">
                                    <div className="w-14 h-14 bg-bubble-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                                        <Phone className="w-7 h-7 text-bubble-primary" />
                                    </div>
                                    <p className="font-extrabold text-gray-900 text-2xl mb-3">Not on the list?</p>
                                    <p className="text-gray-600 mb-8 text-lg">Call us — we cover a wide area across Florida and would love to help.</p>
                                    <a
                                        href="tel:4077151790"
                                        className="inline-flex items-center justify-center gap-2.5 bg-bubble-primary text-white font-bold px-10 py-5 rounded-full text-lg hover:bg-blue-700 hover:scale-[1.02] transition-all shadow-lg hover:shadow-xl"
                                    >
                                        <Phone className="w-5 h-5" /> (407) 715-1790
                                    </a>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* ── CTA ─────────────────────────────────────────────── */}
                <section className="relative overflow-hidden py-24 lg:py-28 bg-gradient-to-br from-bubble-primary to-blue-800 text-white text-center">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_60%)]" aria-hidden />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.05),transparent_60%)]" aria-hidden />
                    <div className="relative z-10 container mx-auto px-4 max-w-4xl">
                        <AnimatedSection>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6">Ready to Protect Your Home?</h2>
                            <p className="text-lg sm:text-xl text-blue-200 mb-10 max-w-2xl mx-auto leading-relaxed">
                                Whether you&apos;re in Miami, Orlando, or anywhere in between, our team is ready to help.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center gap-2.5 px-10 py-5 bg-white text-blue-900 rounded-full font-bold text-lg hover:bg-gray-100 hover:scale-[1.02] transition-all shadow-[0_8px_30px_rgba(255,255,255,0.2)]"
                                >
                                    Get a Free Quote <ArrowRight className="w-5 h-5" />
                                </Link>
                                <a
                                    href="tel:4077151790"
                                    className="inline-flex items-center justify-center gap-2.5 px-10 py-5 bg-transparent border-2 border-white/40 text-white rounded-full font-bold text-lg hover:bg-white/10 hover:border-white/60 transition-all"
                                >
                                    <Phone className="w-5 h-5" /> Call (407) 715-1790
                                </a>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>
            </div>
        </>
    );
}
