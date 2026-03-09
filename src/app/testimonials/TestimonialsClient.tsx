"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Phone, Star } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

type Category = "all" | "installation" | "repair" | "replacement";

const reviews = [
    {
        initials: "CR",
        name: "Camila Rodriguez",
        location: "Winter Park, FL",
        category: "replacement" as Category,
        text: "Honestly, I was super worried about the mess because we just redid our driveway, but Eduardo was a total pro. He kept everything spotless while installing the new soffits. It completely changed the look of my house! Super chill guy, knows his stuff, and didn't try to upsell me. 10/10 would recommend the Bubbles team!",
        time: "2 weeks ago",
        featured: true,
    },
    {
        initials: "TS",
        name: "Thiago Silva",
        location: "Orlando, FL",
        category: "repair" as Category,
        text: "Had a raccoon trying to move into my attic through the soffit. Called Bubbles Enterprise and Marcos came out the same day. He didn't just patch it, he reinforced it so nothing's getting back in. Really appreciate the fast help!",
        time: "1 month ago",
    },
    {
        initials: "MG",
        name: "Maria Gonzales",
        location: "Kissimmee, FL",
        category: "replacement" as Category,
        text: "First time calling, spoke with Ana. She was so patient with all my questions about vinyl vs aluminum. The crew that came out was on time and polite. Great experience from the phone call to the finished job.",
        time: "2 months ago",
    },
    {
        initials: "JP",
        name: "João Pereira",
        location: "Sanford, FL",
        category: "installation" as Category,
        text: "Eduardo and Marcos are a dream team! They replaced all the fascia on my two-story home in this heat and didn't cut any corners. You can tell they take pride in their work. Highly recommend.",
        time: "3 weeks ago",
    },
    {
        initials: "SC",
        name: "Sofia Costa",
        location: "Altamonte Springs, FL",
        category: "repair" as Category,
        text: "Prices were fair, no hidden fees. Just good honest work. My neighbor recommended them and I'm glad I listened. The repair blends in perfectly with the existing soffit.",
        time: "2 months ago",
    },
    {
        initials: "CM",
        name: "Carlos Mendez",
        location: "Lake Mary, FL",
        category: "replacement" as Category,
        text: "Ana Santos made scheduling a breeze. I had to reschedule twice because of work and she was so understanding. The Bubbles crew was in and out in one day. Five stars!",
        time: "3 months ago",
    },
    {
        initials: "MO",
        name: "Mateus Oliveira",
        location: "Orlando, FL",
        category: "installation" as Category,
        text: "If you need soffit work, ask for Eduardo. The attention to detail is next level. My house looks brand new again. Thanks Bubbles Enterprise for the amazing work!",
        time: "4 months ago",
    },
];

const stats = [
    { value: "500+", label: "Projects Completed", color: "text-bubble-primary" },
    { value: "100%", label: "Satisfaction Rate", color: "text-green-600" },
    { value: "10+", label: "Years Experience", color: "text-yellow-500" },
    { value: "5.0", label: "Average Rating", color: "text-purple-600" },
];

const categoryLabels: Record<Category, string> = {
    all: "All Reviews",
    installation: "New Installation",
    repair: "Repairs",
    replacement: "Replacement",
};

const categoryColors: Record<Category, string> = {
    all: "bg-bubble-primary text-white",
    installation: "bg-orange-100 text-orange-700",
    repair: "bg-blue-100 text-blue-700",
    replacement: "bg-purple-100 text-purple-700",
};

function StarRow({ size = "w-5 h-5" }: { size?: string }) {
    return (
        <div className="flex text-yellow-400 gap-0.5" aria-label="5 stars">
            {[...Array(5)].map((_, i) => (
                <Star key={i} className={`${size} fill-yellow-400`} />
            ))}
        </div>
    );
}

export default function TestimonialsClient() {
    const [activeFilter, setActiveFilter] = useState<Category>("all");

    const filtered = reviews.filter(r => activeFilter === "all" || r.category === activeFilter);

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero */}
            <section className="py-24 bg-gradient-to-br from-slate-900 via-bubble-navy to-bubble-dark text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
                    <span className="inline-block bg-bubble-primary text-white text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider border border-blue-500/50">
                        5-Star Rated
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
                        Customer Testimonials
                    </h1>
                    <p className="text-xl text-blue-100 leading-relaxed">
                        See what our satisfied homeowners across Central Florida have to say about our work.
                    </p>
                </div>
            </section>

            {/* Trust Bar */}
            <div className="bg-white border-b border-gray-100 py-6">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-gray-600">
                        <div className="flex items-center gap-2 font-bold">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" /></svg>
                            Google 4.9/5
                        </div>
                        <div className="flex items-center gap-2 font-bold">Angi <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Super Service</span></div>
                        <div className="flex items-center gap-2 font-bold">BBB <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">A+ Accredited</span></div>
                        <div className="flex items-center gap-2 font-bold">HomeAdvisor <span className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full">Top Rated</span></div>
                    </div>
                </div>
            </div>

            {/* Stats */}
            <section className="py-12 bg-white border-b border-gray-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {stats.map((s, i) => (
                            <AnimatedSection key={s.label} from="bottom" delay={i * 80}>
                                <div className={`text-4xl font-extrabold ${s.color} mb-1`}>{s.value}</div>
                                <div className="text-sm text-gray-500 font-medium">{s.label}</div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Reviews Grid */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                            Real feedback from real homeowners who trusted Bubbles Enterprise with their home.
                        </p>
                        {/* Filters */}
                        <div className="flex flex-wrap justify-center gap-3">
                            {(Object.keys(categoryLabels) as Category[]).map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveFilter(cat)}
                                    className={`px-6 py-2 rounded-full font-medium transition-all shadow-sm ${activeFilter === cat
                                        ? "bg-bubble-primary text-white shadow-md"
                                        : "bg-white text-gray-600 border border-gray-200 hover:border-bubble-primary"
                                        }`}
                                >
                                    {categoryLabels[cat]}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filtered.map((r, i) => (
                            <AnimatedSection key={r.name} from="bottom" delay={i * 60} className={r.featured ? "md:col-span-2 lg:col-span-3" : ""}>
                                <div
                                    className={`bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-xl transition-all flex flex-col h-full ${r.featured ? "border-bubble-primary/20" : ""
                                        }`}
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 rounded-full bg-bubble-primary flex items-center justify-center text-white font-bold text-sm shadow">
                                                {r.initials}
                                            </div>
                                            <div>
                                                <p className="font-bold text-gray-900">{r.name}</p>
                                                <p className="text-xs text-gray-500 flex items-center gap-1">
                                                    <span className="w-2 h-2 bg-green-500 rounded-full inline-block" />
                                                    Verified · {r.location}
                                                </p>
                                            </div>
                                        </div>
                                        <span className="text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded">{r.time}</span>
                                    </div>
                                    <StarRow size={r.featured ? "w-6 h-6" : "w-5 h-5"} />
                                    <blockquote className={`text-gray-600 italic my-4 flex-grow leading-relaxed ${r.featured ? "text-lg" : "text-sm"}`}>
                                        "{r.text}"
                                    </blockquote>
                                    <span className={`text-xs font-semibold px-3 py-1 rounded-full w-max ${categoryColors[r.category]}`}>
                                        {categoryLabels[r.category]}
                                    </span>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-bubble-primary text-white text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
                <div className="container mx-auto px-4 max-w-4xl relative z-10">
                    <AnimatedSection from="bottom">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Satisfied Customers?</h2>
                        <p className="text-xl text-blue-100 mb-10">Contact us for a free estimate and experience the Bubbles Enterprise difference.</p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-bubble-primary px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-xl">
                                Get Your Free Quote <ArrowRight className="w-5 h-5" />
                            </Link>
                            <a href="tel:4077151790" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition">
                                <Phone className="w-5 h-5" /> (407) 715-1790
                            </a>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
}
