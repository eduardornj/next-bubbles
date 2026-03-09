import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Phone, Shield, Award, Zap, Droplets, Thermometer } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
    title: "Certifications & Installation Standards | Bubbles Enterprise Soffit Orlando",
    description:
        "Bubbles Enterprise meets America's top home builder installation standards. IRC Section 806 compliant ventilation, NAHB NGBS certified, sourced from ABC Supply. Orlando licensed & insured.",
    openGraph: {
        title: "Certifications & Standards | Bubbles Enterprise Orlando",
        description: "Professional installation standards — IRC 806, NAHB NGBS, Energy Star. Trusted by America's largest home builders.",
        url: "https://bubblesenterprise.com/certifications",
    },
    alternates: {
        canonical: "https://bubblesenterprise.com/certifications",
        languages: {
            en: "https://bubblesenterprise.com/certifications",
            es: "https://bubblesenterprise.com/es/certifications",
            pt: "https://bubblesenterprise.com/pt/certifications",
            "x-default": "https://bubblesenterprise.com/certifications",
        },
    },
};

const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Bubbles Enterprise Soffit",
    description: "Professional soffit and fascia installation meeting IRC Section 806, NAHB NGBS, and Energy Star standards. Trusted by DR Horton, Lennar, KB Home, PulteGroup, and more.",
    dateModified: "2026-03-05",
    telephone: "+14077151790",
    url: "https://bubblesenterprise.com",
    address: { "@type": "PostalAddress", addressLocality: "Orlando", addressRegion: "FL", addressCountry: "US" },
    hasCredential: [
        { "@type": "EducationalOccupationalCredential", name: "IRC Section 806 Roof Ventilation Compliance", credentialCategory: "Building Code" },
        { "@type": "EducationalOccupationalCredential", name: "NAHB National Green Building Standard (NGBS)", credentialCategory: "Industry Standard" },
        { "@type": "EducationalOccupationalCredential", name: "Energy Star Certified Installation", credentialCategory: "Energy Certification" },
        { "@type": "EducationalOccupationalCredential", name: "ABC Supply Certified Partner", credentialCategory: "Supplier Partnership" },
    ],
};

const builders = [
    { name: "DR Horton", desc: "#1 builder by volume", badge: "Smart Home Technology" },
    { name: "Lennar", desc: "2nd largest US builder", badge: "Everything's Included®" },
    { name: "PulteGroup", desc: "3rd largest US builder", badge: "775,000+ homes built" },
    { name: "Taylor Morrison", desc: "5th largest US builder", badge: "America's Most Trusted" },
    { name: "KB Home", desc: "7th largest US builder", badge: "Energy Star Certified®" },
    { name: "Toll Brothers", desc: "Luxury home specialist", badge: "Fortune 500" },
    { name: "Ryan Homes", desc: "Part of NVR Inc.", badge: "460,000+ homes built" },
    { name: "Ashton Woods", desc: "National private builder", badge: "Top 4 Most Trusted" },
];

const process = [
    { step: "1", title: "Site Assessment", desc: "Thorough inspection and measurement of existing conditions", icon: "📋" },
    { step: "2", title: "Professional Removal", desc: "Safe removal of old materials with proper disposal", icon: "🔧" },
    { step: "3", title: "Expert Installation", desc: "Precise installation following IRC ventilation codes", icon: "⚡" },
    { step: "4", title: "Quality Inspection", desc: "Final inspection and cleanup with warranty documentation", icon: "✅" },
];

export default function CertificationsPage() {
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
                            { "@type": "ListItem", position: 2, name: "Certifications", item: "https://bubblesenterprise.com/certifications" },
                        ],
                    }),
                }}
            />
            <div className="flex flex-col min-h-screen">
                {/* Hero */}
                <section className="py-28 bg-gradient-to-br from-slate-900 via-blue-900 to-teal-800 text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
                        <span className="inline-block bg-blue-600 px-4 py-1.5 rounded-full text-xs font-bold mb-6 uppercase tracking-wider border border-blue-500/50">Quality Assurance</span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">Professional Installation Standards</h1>
                        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
                            We work with the highest industry standards, meeting the requirements of America&apos;s largest home builders.
                        </p>
                        <Link href="/contact" className="inline-block bg-bubble-primary border border-blue-400 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition shadow-lg">
                            Get a Quote
                        </Link>
                    </div>
                </section>

                {/* Installation Excellence */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Expert Installation Services</h2>
                            <p className="text-lg text-gray-600">Professional soffit and fascia installation following strict building codes</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8 mb-16">
                            {[
                                { icon: <Award className="w-8 h-8" />, bg: "bg-blue-100 text-blue-600", title: "Professional Installation", desc: "Expert technicians with years of experience" },
                                { icon: <Zap className="w-8 h-8" />, bg: "bg-green-100 text-green-600", title: "Fast & Efficient", desc: "Quick turnaround without compromising quality" },
                                { icon: <Shield className="w-8 h-8" />, bg: "bg-purple-100 text-purple-600", title: "Quality Guaranteed", desc: "1-year installation warranty with ongoing support" },
                            ].map((item, i) => (
                                <AnimatedSection key={item.title} from="bottom" delay={i * 100}>
                                    <div className="text-center p-8 bg-gray-50 rounded-2xl border border-gray-100">
                                        <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 ${item.bg}`}>{item.icon}</div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                        <p className="text-gray-600">{item.desc}</p>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
                                <h3 className="text-2xl font-bold text-blue-900 mb-5">IRC Section 806 — Roof Ventilation</h3>
                                <ul className="space-y-3">
                                    {[
                                        "Minimum ventilation area: 1/150 of ventilated area",
                                        "Balanced system: 40–50% upper / 50–60% lower ventilation",
                                        "Protection against rain, snow, and pest entry",
                                        "Screen openings between 1/16\" and 1/4\"",
                                    ].map(item => (
                                        <li key={item} className="flex items-start gap-3 text-gray-700">
                                            <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-green-50 p-8 rounded-2xl border border-green-100">
                                <h3 className="text-2xl font-bold text-green-900 mb-5">NAHB — National Standards</h3>
                                <ul className="space-y-3">
                                    {[
                                        "National Green Building Standard (NGBS) Certified",
                                        "Residential Construction Performance Guidelines",
                                        "Energy efficiency and indoor air quality standards",
                                        "Moisture management and vapor control systems",
                                    ].map(item => (
                                        <li key={item} className="flex items-start gap-3 text-gray-700">
                                            <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Energy Stats */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { icon: <Zap className="w-10 h-10" />, stat: "Up to 15%", label: "AC Cost Reduction", desc: "Proper ventilation lowers air conditioning bills" },
                                { icon: <Thermometer className="w-10 h-10" />, stat: "20–30°F", label: "Cooler Attic", desc: "Temperature reduction in summer months" },
                                { icon: <Droplets className="w-10 h-10" />, stat: "100%", label: "Mold Prevention", desc: "Proper airflow eliminates moisture buildup" },
                            ].map((item, i) => (
                                <AnimatedSection key={item.label} from="scale" delay={i * 80}>
                                    <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100">
                                        <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-5 text-bubble-primary">{item.icon}</div>
                                        <div className="text-3xl font-extrabold text-gray-900 mb-1">{item.stat}</div>
                                        <div className="text-sm font-bold text-bubble-primary uppercase tracking-wide mb-3">{item.label}</div>
                                        <p className="text-gray-600 text-sm">{item.desc}</p>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Installation Process */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Installation Process</h2>
                            <p className="text-lg text-gray-600">Systematic approach ensuring perfect installation every time</p>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {process.map((p, i) => (
                                <AnimatedSection key={p.step} from="bottom" delay={i * 80}>
                                    <div className="bg-white p-6 rounded-2xl shadow-md text-center border border-gray-100">
                                        <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">{p.icon}</div>
                                        <div className="text-bubble-primary font-extrabold text-sm uppercase tracking-wider mb-2">Step {p.step}</div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">{p.title}</h3>
                                        <p className="text-gray-600 text-sm">{p.desc}</p>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Trusted Builders */}
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by America&apos;s Top Home Builders</h2>
                            <p className="text-lg text-gray-600">We meet the strict installation standards required by the nation&apos;s leading construction companies</p>
                        </div>
                        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                            {builders.map((b, i) => (
                                <AnimatedSection key={b.name} from="bottom" delay={i * 60}>
                                    <div className="bg-white p-6 rounded-2xl text-center border border-gray-100 hover:shadow-lg transition-shadow">
                                        <h3 className="text-lg font-bold text-gray-900 mb-1">{b.name}</h3>
                                        <p className="text-sm text-gray-500 mb-2">{b.desc}</p>
                                        <span className="text-xs text-bubble-primary font-semibold">{b.badge}</span>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                        <div className="bg-gradient-to-r from-bubble-primary to-blue-700 p-8 rounded-2xl text-white">
                            <div className="grid md:grid-cols-3 gap-8 text-center">
                                {[
                                    { label: "Precision Installation", desc: "Every cut, measurement, and fastener placed with professional precision" },
                                    { label: "Efficient Process", desc: "Streamlined installation minimizes disruption to your home" },
                                    { label: "Long-Term Protection", desc: "Professional installation ensures maximum material lifespan" },
                                ].map(item => (
                                    <div key={item.label}>
                                        <h4 className="text-lg font-bold mb-2">{item.label}</h4>
                                        <p className="text-blue-100 text-sm">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 bg-gradient-to-r from-bubble-primary to-blue-700 text-white text-center">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Work with Certified Installation Professionals</h2>
                        <p className="text-xl text-blue-100 mb-10">We guarantee your project meets all standards required by America&apos;s largest home builders</p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link href="/contact" className="px-10 py-5 bg-white text-bubble-primary rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-xl">Get Free Quote</Link>
                            <Link href="/services" className="px-10 py-5 border-2 border-white text-white rounded-full font-bold text-lg hover:bg-blue-800 transition">View Services</Link>
                            <a href="tel:4077151790" className="px-10 py-5 bg-blue-900/50 text-white rounded-full font-bold text-lg hover:bg-blue-900 transition flex items-center justify-center gap-2">
                                <Phone className="w-5 h-5" /> (407) 715-1790
                            </a>
                        </div>
                        <p className="text-xs text-blue-200 mt-8 italic">
                            All references to codes and standards are for general informational purposes. Final code requirements are determined by local authorities.
                        </p>
                    </div>
                </section>
            </div>
        </>
    );
}
