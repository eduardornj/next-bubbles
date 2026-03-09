import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Factory, ShieldAlert, AlertCircle, Wind, ShieldCheck, Thermometer, PhoneCall, ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
    title: "Soffit Remove & Replace Orlando | Bubbles Enterprise",
    description:
        "Complete soffit and fascia Remove & Replace in Orlando. 1-story ($6/LF) and 2-story ($7/LF) homes. Aluminum and vinyl. Licensed & Insured. Free estimate.",
    openGraph: {
        title: "Soffit Remove & Replace | Bubbles Enterprise Orlando",
        description:
            "Full Remove & Replace soffit installation in Orlando. Old materials removed, new aluminum or vinyl installed. Free estimate.",
        url: "https://bubblesenterprise.com/remove-replace",
    },
    alternates: {
        canonical: "https://bubblesenterprise.com/remove-replace",
        languages: {
            en: "https://bubblesenterprise.com/remove-replace",
            es: "https://bubblesenterprise.com/es/remove-replace",
            pt: "https://bubblesenterprise.com/pt/remove-replace",
            "x-default": "https://bubblesenterprise.com/remove-replace",
        },
    },
};

const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Soffit & Fascia Remove & Replace (R&R)",
    serviceType: "Complete Soffit and Fascia Remove and Replace",
    description:
        "Full removal of old, damaged, or rotted soffit and fascia, followed by professional installation of new aluminum or vinyl systems. 1-story and 2-story homes in Orlando, FL.",
    dateModified: "2026-03-05",
    "@id": "https://bubblesenterprise.com/remove-replace#service",
    provider: { "@id": "https://bubblesenterprise.com/#business" },
    areaServed: [
        { "@type": "City", name: "Orlando", addressRegion: "FL" },
        { "@type": "City", name: "Kissimmee", addressRegion: "FL" },
        { "@type": "City", name: "Winter Park", addressRegion: "FL" },
        { "@type": "City", name: "Clermont", addressRegion: "FL" },
        { "@type": "City", name: "Sanford", addressRegion: "FL" },
    ],
    offers: [
        {
            "@type": "Offer",
            name: "Remove & Replace — 1-Story Home",
            description: "Remove old soffit and install new aluminum or vinyl. Labor rate: $6/linear foot. Overhang rate added based on depth.",
            priceCurrency: "USD",
        },
        {
            "@type": "Offer",
            name: "Remove & Replace — 2-Story Home",
            description: "Remove old soffit and install new aluminum or vinyl on 2-story homes. Labor rate: $7/linear foot. Overhang rate added based on depth.",
            priceCurrency: "USD",
        },
    ],
};

export default function RemoveReplacePage() {
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
                            { "@type": "ListItem", position: 3, name: "Remove & Replace", item: "https://bubblesenterprise.com/remove-replace" },
                        ],
                    }),
                }}
            />
            <div className="flex flex-col min-h-screen">
                {/* Hero Section */}
                <section className="relative py-24 lg:py-32 bg-gradient-to-br from-green-50 to-emerald-100">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
                                Complete <span className="text-green-600 block mb-2">Remove & Replace</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                                Full soffit and fascia replacement for maximum protection, energy efficiency, and long-term value.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/contact" className="bg-green-600 text-white px-8 py-4 rounded-full font-bold hover:bg-green-700 transition shadow-lg text-lg">
                                    Get Free Estimate
                                </Link>
                                <Link href="/calculator" className="bg-white border-2 border-green-600 text-green-600 px-8 py-4 rounded-full font-bold hover:bg-green-50 transition shadow-sm text-lg">
                                    Cost Calculator
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* When You Need Complete Replacement */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-16">
                            When Is Complete Replacement Necessary?
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-red-50 p-8 rounded-2xl border border-red-100 hover:shadow-lg transition">
                                <AlertCircle className="w-12 h-12 text-red-600 mb-6" />
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Extensive Damage</h3>
                                <p className="text-gray-600 leading-relaxed">Widespread rot, structural damage, or multiple failing sections beyond repair.</p>
                            </div>
                            <div className="bg-orange-50 p-8 rounded-2xl border border-orange-100 hover:shadow-lg transition">
                                <ShieldAlert className="w-12 h-12 text-orange-600 mb-6" />
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Age & Obsolescence</h3>
                                <p className="text-gray-600 leading-relaxed">Old wood soffits reaching end of life or outdated materials needing upgrade.</p>
                            </div>
                            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 hover:shadow-lg transition">
                                <Wind className="w-12 h-12 text-blue-600 mb-6" />
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Poor Ventilation System</h3>
                                <p className="text-gray-600 leading-relaxed">Inadequate or non-existent ventilation causing energy efficiency issues.</p>
                            </div>
                            <div className="bg-purple-50 p-8 rounded-2xl border border-purple-100 hover:shadow-lg transition">
                                <Factory className="w-12 h-12 text-purple-600 mb-6" />
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Home Renovation</h3>
                                <p className="text-gray-600 leading-relaxed">Upgrading exterior appearance or matching new siding installation.</p>
                            </div>
                            <div className="bg-yellow-50 p-8 rounded-2xl border border-yellow-100 hover:shadow-lg transition">
                                <Thermometer className="w-12 h-12 text-yellow-600 mb-6" />
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Energy Efficiency</h3>
                                <p className="text-gray-600 leading-relaxed">Upgrading to modern materials for better insulation and lower energy costs.</p>
                            </div>
                            <div className="bg-green-50 p-8 rounded-2xl border border-green-100 hover:shadow-lg transition">
                                <ShieldCheck className="w-12 h-12 text-green-600 mb-6" />
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Long-term Investment</h3>
                                <p className="text-gray-600 leading-relaxed">Choosing maintenance-free materials for decades of worry-free protection.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits of Complete Replacement */}
                <section className="py-20 bg-gray-50 border-t border-gray-100">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-16">
                            Benefits of Complete Remove & Replace
                        </h2>
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div className="space-y-10">
                                <div className="flex gap-6">
                                    <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl shrink-0">1</div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Maximum Longevity</h3>
                                        <p className="text-gray-600 text-lg leading-relaxed">New materials provide decades of maintenance-free protection, with vinyl lasting 10 years and aluminum 20-30 years.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl shrink-0">2</div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Enhanced Energy Efficiency</h3>
                                        <p className="text-gray-600 text-lg leading-relaxed">Proper ventilation and modern materials reduce energy costs by improving attic airflow and temperature control.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl shrink-0">3</div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Complete Protection</h3>
                                        <p className="text-gray-600 text-lg leading-relaxed">Fresh installation ensures optimal protection against moisture, pests, and weather damage for your entire roof system.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl shrink-0">4</div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Increased Home Value</h3>
                                        <p className="text-gray-600 text-lg leading-relaxed">New soffit and fascia significantly boost curb appeal and property value with a fresh, professional appearance.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl shrink-0">5</div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Code Compliance</h3>
                                        <p className="text-gray-600 text-lg leading-relaxed">Modern installation meets current building codes for ventilation, ensuring optimal attic health and preventing issues.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
                                <h3 className="text-2xl font-bold text-gray-900 mb-8">Replacement Investment Facts</h3>
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center py-4 border-b border-gray-100">
                                        <span className="text-gray-600 font-medium">Installation Time</span>
                                        <span className="font-bold text-gray-900 text-lg">2-5 Days</span>
                                    </div>
                                    <div className="flex justify-between items-center py-4 border-b border-gray-100">
                                        <span className="text-gray-600 font-medium">ROI on Home Value</span>
                                        <span className="font-bold text-green-600 text-lg">75-85%</span>
                                    </div>
                                    <div className="flex justify-between items-center py-4 border-b border-gray-100">
                                        <span className="text-gray-600 font-medium">Vinyl Lifespan</span>
                                        <span className="font-bold text-gray-900 text-lg">10 Years</span>
                                    </div>
                                    <div className="flex justify-between items-center py-4 border-b border-gray-100">
                                        <span className="text-gray-600 font-medium">Aluminum Lifespan</span>
                                        <span className="font-bold text-gray-900 text-lg">20-30 Years</span>
                                    </div>
                                    <div className="flex justify-between items-center py-4 border-b border-gray-100">
                                        <span className="text-gray-600 font-medium">Energy Savings</span>
                                        <span className="font-bold text-gray-900 text-lg">10-15%</span>
                                    </div>
                                    <div className="flex justify-between items-center py-4">
                                        <span className="text-gray-600 font-medium">Installation Warranty</span>
                                        <span className="font-bold text-gray-900 text-lg">1 Year</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Extreme Detail: Energy Efficiency & Savings */}
                <section className="py-20 bg-blue-50">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-16">
                            Maximize Energy Savings with Professional Installation
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8 mb-16">
                            <div className="bg-white p-10 rounded-2xl shadow-md text-center">
                                <div className="w-20 h-20 bg-blue-100 text-4xl flex items-center justify-center rounded-full mx-auto mb-6">❄️</div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Summer Cooling Savings</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">Proper attic ventilation can reduce cooling costs by up to 15-20% during hot summer months by preventing heat buildup in your attic space.</p>
                                <div className="bg-blue-50 py-3 px-4 rounded-lg">
                                    <span className="font-bold text-blue-800">Average Savings: $200-400/year</span>
                                </div>
                            </div>
                            <div className="bg-white p-10 rounded-2xl shadow-md text-center">
                                <div className="w-20 h-20 bg-green-100 text-4xl flex items-center justify-center rounded-full mx-auto mb-6">🔥</div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Winter Heating Efficiency</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">Balanced ventilation prevents ice dams and moisture buildup, reducing heating system strain and maintaining consistent indoor temperatures.</p>
                                <div className="bg-green-50 py-3 px-4 rounded-lg">
                                    <span className="font-bold text-green-800">Average Savings: $150-300/year</span>
                                </div>
                            </div>
                            <div className="bg-white p-10 rounded-2xl shadow-md text-center">
                                <div className="w-20 h-20 bg-purple-100 text-4xl flex items-center justify-center rounded-full mx-auto mb-6">🏠</div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Long-term Protection</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">Prevents costly damage from moisture, mold, and structural issues that can cost thousands in repairs and health concerns.</p>
                                <div className="bg-purple-50 py-3 px-4 rounded-lg">
                                    <span className="font-bold text-purple-800">Prevents: $5,000-15,000 in damage</span>
                                </div>
                            </div>
                        </div>

                        {/* Highlight Card */}
                        <div className="bg-gradient-to-r from-blue-600 to-green-600 p-10 rounded-3xl text-white shadow-xl">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h3 className="text-3xl font-bold mb-6">How Proper Ventilation Saves Energy</h3>
                                    <ul className="space-y-4 text-lg">
                                        <li className="flex gap-4 items-start"><span className="text-yellow-300 font-black">✓</span> <span><strong>Reduces Attic Temperature:</strong> Up to 30°F cooler in summer, reducing AC workload</span></li>
                                        <li className="flex gap-4 items-start"><span className="text-yellow-300 font-black">✓</span> <span><strong>Prevents Moisture Buildup:</strong> Eliminates condensation that reduces insulation effectiveness</span></li>
                                        <li className="flex gap-4 items-start"><span className="text-yellow-300 font-black">✓</span> <span><strong>Maintains Insulation Performance:</strong> Dry insulation works 3x more effectively</span></li>
                                        <li className="flex gap-4 items-start"><span className="text-yellow-300 font-black">✓</span> <span><strong>Extends HVAC Lifespan:</strong> Less strain means longer equipment life and fewer repairs</span></li>
                                    </ul>
                                </div>
                                <div className="text-center">
                                    <div className="bg-white/20 p-10 rounded-2xl backdrop-blur-sm border border-white/30">
                                        <h4 className="text-6xl font-black mb-4">$350-700</h4>
                                        <p className="text-2xl font-medium mb-2">Average Annual Energy Savings</p>
                                        <p className="text-md opacity-80">Based on typical 2,000 sq ft home</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 bg-green-600 text-white text-center">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <h2 className="text-3xl md:text-5xl font-bold mb-8">Transform Your Home with Professional Remove & Replace</h2>
                        <p className="text-xl text-green-100 mb-12 leading-relaxed">
                            Join thousands of satisfied homeowners who've invested in long-term protection, energy savings, and increased home value with our expert installation services.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link href="/contact" className="bg-white text-green-600 px-10 py-5 rounded-full font-bold hover:bg-gray-100 transition shadow-xl text-lg">
                                Get Free Estimate
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
