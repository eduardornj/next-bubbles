"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Phone, MessageCircle } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const categories = [
    {
        label: "About Soffit & Fascia",
        emoji: "🏠",
        faqs: [
            {
                q: "What is the difference between soffit and fascia?",
                a: "Soffit is the exposed surface beneath the overhanging section of a roof eave — it bridges the gap between your siding and the roofline. Fascia is the vertical finishing edge connected to the ends of the rafters, where the gutter is attached. Together, they protect your home's exterior structure and provide essential attic ventilation.",
            },
            {
                q: "Why is soffit ventilation so important in Florida?",
                a: "Proper soffit ventilation allows fresh air to flow into your attic while hot air escapes through ridge vents. In Florida's heat and humidity, without this airflow you get moisture buildup that causes mold, wood rot, and premature roof shingle failure. Good ventilation can reduce your cooling costs and extend your roof's lifespan significantly.",
            },
            {
                q: "Can you repair animal damage to soffits?",
                a: "Absolutely. Squirrels, raccoons, rats, and birds are common in Florida attics. We don't just patch the hole — we repair the damaged section and reinforce the area with durable materials to prevent future entry. Address these issues immediately to avoid electrical fire risks and insulation contamination.",
            },
        ],
    },
    {
        label: "Materials & Pricing",
        emoji: "💰",
        faqs: [
            {
                q: "What materials do you use?",
                a: "We primarily use high-quality aluminum and vinyl. Aluminum is durable, fire-resistant, low-maintenance, and lasts 20–30 years. Vinyl is cost-effective, rot-resistant, and ideal for high-moisture environments — lifespan around 10 years. We'll recommend the right material based on your home's architecture and budget.",
            },
            {
                q: "How much does soffit installation cost?",
                a: "Cost depends on linear footage, overhang depth, material choice (aluminum vs. vinyl), and whether it's new construction or a remove-and-replace job. Use our online calculator for an instant estimate, or contact us for a free on-site quote. Typical ranges: $6/LF for 1-story remove & replace, $7/LF for 2-story.",
            },
            {
                q: "How long does a soffit and fascia installation take?",
                a: "Most standard single-story homes take 1–2 days. Two-story homes and full Remove & Replace projects typically take 2–3 days. New construction is coordinated with your build timeline. We always give you a specific timeline before starting.",
            },
        ],
    },
    {
        label: "Process & Policies",
        emoji: "📋",
        faqs: [
            {
                q: "What happens if rotten wood is found during installation?",
                a: "If we remove the old material and discover rotten wood in the sub-fascia or trusses, we stop work in that area immediately and notify you. We do not perform structural framing repairs (we don't hold a framing license). You'll need to hire a licensed carpenter to replace the wood before we continue. This is always communicated up front — no surprise charges.",
            },
            {
                q: "Will my gutters be removed and reinstalled?",
                a: "If gutters need to be removed to install new fascia, the old gutters will NOT be reinstalled. They deform and warp upon removal, making a proper seal impossible. You'll need to hire a gutter company to install a new system after our work is complete. We only perform Soffit and Fascia.",
            },
            {
                q: "What about my outdoor lights, satellites, or security cameras?",
                a: "We remove and reinstall soffit lights as a courtesy of access. However, if a fixture is old and breaks in our hands, or if wiring is brittle and fails, we are not responsible for replacement. Satellite dishes and cameras are returned to their position, but we don't guarantee signal alignment — the customer's provider handles recalibration.",
            },
            {
                q: "How do you handle cleanup after the job?",
                a: "Our cleanup is standard job-site quality: full sweeping and a magnetic sweep for nails. If thermal insulation falls from your attic during soffit replacement, we clean the bulk with a blower. Fine particles in grass or rocks are unavoidable in this type of renovation and do not constitute mess left behind.",
            },
        ],
    },
    {
        label: "Warranty & Payment",
        emoji: "🛡️",
        faqs: [
            {
                q: "What does your warranty cover?",
                a: "We offer a 1-Year Workmanship Warranty on all installations. This covers any piece that comes loose, unclips, or falls due to an installation error. It does NOT cover damage from storms/hurricanes ('Acts of God'), animals chewing through the material, or damage caused by third parties modifying the work after us.",
            },
            {
                q: "When is final payment due?",
                a: "The final balance is due immediately upon job completion and walkthrough — before we leave the property. Deposits are required prior to scheduling. We accept check, Zelle, or cash. The company retains a purchase-money security interest in installed materials per Chapter 713, Florida Statutes, until full payment is received.",
            },
            {
                q: "What is your cancellation policy?",
                a: "If you cancel after materials have been purchased, a fee of 20% of the deposit value will be charged to cover the supplier's restocking fee and our project preparation costs. This fee is disclosed upfront and represents liquidated damages as agreed upon at booking.",
            },
            {
                q: "Do you offer free estimates?",
                a: "Yes. We provide free, no-obligation on-site estimates for all soffit and fascia projects in Orlando and surrounding Central Florida areas. We visit your property, assess the current condition, and provide a transparent quote with no hidden fees. You can also get an instant online estimate using our calculator.",
            },
        ],
    },
    {
        label: "Service Area",
        emoji: "📍",
        faqs: [
            {
                q: "What areas do you serve?",
                a: "We serve the entire Greater Orlando area and Central Florida, including Orlando, Winter Park, Kissimmee, Altamonte Springs, Clermont, Sanford, Oviedo, Lake Mary, Apopka, and Maitland. We also travel to South Florida for larger projects. If you're unsure we cover your area, just call!",
            },
        ],
    },
];

// Flatten for schema (used in page.tsx)
export const allFaqs = categories.flatMap(c => c.faqs);

export default function FAQClient() {
    const [openKeys, setOpenKeys] = useState<Record<string, boolean>>({ "0-0": true });

    const toggle = (key: string) =>
        setOpenKeys(prev => ({ ...prev, [key]: !prev[key] }));

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero */}
            <section className="py-24 bg-gradient-to-br from-bubble-navy via-[#0f1f4a] to-bubble-dark text-white relative overflow-hidden">
                {/* Decorative orbs */}
                <div className="absolute top-10 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-cyan-400/10 rounded-full blur-2xl pointer-events-none" />
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl relative z-10">
                    <AnimatedSection from="bottom">
                        <span className="inline-block bg-white/10 border border-white/20 text-white text-sm font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider">
                            Knowledge Base
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
                            Frequently Asked <span className="text-bubble-light">Questions</span>
                        </h1>
                        <p className="text-xl text-blue-100 leading-relaxed">
                            Honest answers about soffit, fascia, costs, material policies, and our process — no fluff.
                        </p>
                        <p className="text-sm text-blue-300 mt-4">{categories.reduce((acc, c) => acc + c.faqs.length, 0)} questions across {categories.length} categories</p>
                    </AnimatedSection>
                </div>
            </section>

            {/* FAQ Accordion by Category */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 max-w-3xl">
                    {categories.map((cat, ci) => (
                        <AnimatedSection key={ci} from="bottom" delay={ci * 60} className="mb-10">
                            {/* Category header */}
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-2xl">{cat.emoji}</span>
                                <h2 className="text-xl font-extrabold text-gray-900">{cat.label}</h2>
                            </div>

                            <div className="space-y-3">
                                {cat.faqs.map((faq, fi) => {
                                    const key = `${ci}-${fi}`;
                                    const isOpen = !!openKeys[key];
                                    return (
                                        <div
                                            key={fi}
                                            className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
                                        >
                                            <button
                                                onClick={() => toggle(key)}
                                                className="w-full text-left px-6 py-5 flex justify-between items-center hover:bg-gray-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-bubble-primary"
                                                aria-expanded={isOpen}
                                            >
                                                <span className="font-bold text-gray-900 text-base sm:text-lg pr-8">{faq.q}</span>
                                                <ChevronDown
                                                    className={`w-5 h-5 text-bubble-primary shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                                                />
                                            </button>
                                            <div
                                                className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}
                                            >
                                                <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                                                    {faq.a}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </AnimatedSection>
                    ))}

                    {/* CTA */}
                    <AnimatedSection from="scale" delay={300}>
                        <div className="mt-6 bg-gradient-to-br from-bubble-navy to-bubble-dark text-white rounded-2xl p-8 text-center shadow-xl">
                            <h2 className="text-2xl font-extrabold mb-2">Still have questions?</h2>
                            <p className="text-blue-200 mb-6">We're here to help. No pressure, no sales pitch.</p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center gap-2 bg-white text-bubble-primary font-bold px-8 py-4 rounded-full hover:bg-blue-50 transition shadow-lg"
                                >
                                    <MessageCircle className="w-5 h-5" />
                                    Get Free Estimate
                                </Link>
                                <a
                                    href="tel:4077151790"
                                    className="inline-flex items-center justify-center gap-2 bg-white/20 border border-white/30 text-white font-bold px-8 py-4 rounded-full hover:bg-white/30 transition"
                                >
                                    <Phone className="w-5 h-5" />
                                    (407) 715-1790
                                </a>
                            </div>
                            <div className="mt-6 pt-6 border-t border-white/20 flex flex-wrap justify-center gap-4 text-sm text-blue-200">
                                <Link href="/terms" className="hover:text-white transition">Terms of Service</Link>
                                <span>·</span>
                                <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
                                <span>·</span>
                                <Link href="/calculator" className="hover:text-white transition">Price Calculator</Link>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
}
