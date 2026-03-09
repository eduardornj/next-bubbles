import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

interface ServiceLink {
    title: string;
    href: string;
    desc: string;
}

const SERVICES: Record<string, ServiceLink> = {
    repairs: {
        title: "Soffit Repair",
        href: "/repairs",
        desc: "Targeted soffit and fascia repairs for storm damage, animal intrusion, and deterioration.",
    },
    "remove-replace": {
        title: "Remove & Replace",
        href: "/remove-replace",
        desc: "Full soffit and fascia removal and replacement with modern aluminum or vinyl.",
    },
    "new-construction": {
        title: "New Construction",
        href: "/new-construction",
        desc: "IRC 806 compliant soffit installation for new builds across Central Florida.",
    },
    materials: {
        title: "Materials Guide",
        href: "/materials",
        desc: "Compare aluminum, vinyl, and fiber cement soffit — durability, cost, and best use cases.",
    },
    calculator: {
        title: "Cost Calculator",
        href: "/calculator",
        desc: "Get an instant estimate for your soffit and fascia project.",
    },
    services: {
        title: "All Services",
        href: "/services",
        desc: "See everything we offer — repairs, replacement, new construction, and emergency service.",
    },
};

interface Props {
    serviceKeys: string[];
    locale: string;
}

export function RelatedServices({ serviceKeys, locale }: Props) {
    const prefix = locale === "en" ? "" : `/${locale}`;
    const links = serviceKeys
        .map((k) => SERVICES[k])
        .filter(Boolean);

    if (links.length === 0) return null;

    return (
        <section className="py-12 bg-slate-50 border-t border-gray-100">
            <div className="container mx-auto px-4 max-w-3xl">
                <AnimatedSection>
                    <h2 className="text-lg font-bold text-gray-900 mb-5">Related Services</h2>
                    <div className="grid sm:grid-cols-2 gap-3">
                        {links.map((s) => (
                            <Link
                                key={s.href}
                                href={`${prefix}${s.href}`}
                                className="group flex items-start gap-3 bg-white rounded-xl border border-gray-200 p-4 hover:border-blue-300 hover:shadow-md transition"
                            >
                                <div className="flex-1">
                                    <span className="font-semibold text-gray-900 group-hover:text-bubble-primary transition text-sm">
                                        {s.title}
                                    </span>
                                    <p className="text-gray-500 text-xs mt-1 leading-relaxed">{s.desc}</p>
                                </div>
                                <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-bubble-primary transition shrink-0 mt-1" />
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
