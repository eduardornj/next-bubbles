import { getLocale } from "next-intl/server";
import Link from "next/link";
import { Home, Phone, Wrench, Calculator, MapPin, ArrowRight } from "lucide-react";

const c = {
    en: {
        badge: "404 — Page Not Found",
        title: "This page doesn't exist.",
        subtitle: "It may have been moved, renamed, or removed. Don't worry — everything you need is below.",
        home: "Back to Home",
        services: "Our Services",
        quote: "Get a Free Quote",
        calculator: "Cost Calculator",
        areas: "Service Areas",
        callLabel: "Or call us directly:",
    },
    es: {
        badge: "404 — Página No Encontrada",
        title: "Esta página no existe.",
        subtitle: "Puede haber sido movida, renombrada o eliminada. Todo lo que necesita está abajo.",
        home: "Ir al Inicio",
        services: "Nuestros Servicios",
        quote: "Cotización Gratis",
        calculator: "Calculadora de Costos",
        areas: "Áreas de Servicio",
        callLabel: "O llámenos directamente:",
    },
    pt: {
        badge: "404 — Página Não Encontrada",
        title: "Esta página não existe.",
        subtitle: "Ela pode ter sido movida, renomeada ou removida. Tudo que você precisa está abaixo.",
        home: "Voltar ao Início",
        services: "Nossos Serviços",
        quote: "Orçamento Grátis",
        calculator: "Calculadora de Custo",
        areas: "Áreas de Atendimento",
        callLabel: "Ou ligue diretamente:",
    },
} as const;

export default async function NotFound() {
    const locale = await getLocale();
    const t = c[locale as keyof typeof c] ?? c.en;
    const lp = (path: string) => locale === "en" ? path : `/${locale}${path}`;

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            {/* Hero */}
            <section className="flex-1 flex flex-col items-center justify-center px-4 py-24 text-center">
                <div className="max-w-2xl mx-auto">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-bubble-primary font-bold text-sm px-4 py-2 rounded-full mb-8">
                        {t.badge}
                    </div>

                    {/* Big 404 */}
                    <div className="text-[120px] sm:text-[160px] font-extrabold leading-none text-transparent bg-clip-text bg-gradient-to-br from-bubble-navy via-bubble-primary to-bubble-secondary mb-2 select-none">
                        404
                    </div>

                    <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">
                        {t.title}
                    </h1>
                    <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-md mx-auto">
                        {t.subtitle}
                    </p>

                    {/* Primary CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <Link
                            href={lp("/")}
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-bubble-primary text-white font-bold rounded-full hover:bg-bubble-dark transition shadow-lg"
                        >
                            <Home className="w-4 h-4" />
                            {t.home}
                        </Link>
                        <Link
                            href={lp("/contact")}
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-bubble-primary text-bubble-primary font-bold rounded-full hover:bg-blue-50 transition"
                        >
                            {t.quote} <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    {/* Quick links */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-lg mx-auto mb-10">
                        <Link
                            href={lp("/services")}
                            className="flex items-center justify-center gap-2 px-4 py-3 bg-white border border-gray-200 rounded-2xl text-gray-700 font-semibold text-sm hover:border-bubble-primary hover:text-bubble-primary transition shadow-sm"
                        >
                            <Wrench className="w-4 h-4" /> {t.services}
                        </Link>
                        <Link
                            href={lp("/calculator")}
                            className="flex items-center justify-center gap-2 px-4 py-3 bg-white border border-gray-200 rounded-2xl text-gray-700 font-semibold text-sm hover:border-bubble-primary hover:text-bubble-primary transition shadow-sm"
                        >
                            <Calculator className="w-4 h-4" /> {t.calculator}
                        </Link>
                        <Link
                            href={lp("/areas")}
                            className="flex items-center justify-center gap-2 px-4 py-3 bg-white border border-gray-200 rounded-2xl text-gray-700 font-semibold text-sm hover:border-bubble-primary hover:text-bubble-primary transition shadow-sm"
                        >
                            <MapPin className="w-4 h-4" /> {t.areas}
                        </Link>
                    </div>

                    {/* Phone */}
                    <p className="text-gray-400 text-sm mb-2">{t.callLabel}</p>
                    <a
                        href="tel:4077151790"
                        className="inline-flex items-center gap-2 text-bubble-primary font-extrabold text-xl hover:underline"
                    >
                        <Phone className="w-5 h-5" />
                        (407) 715-1790
                    </a>
                </div>
            </section>
        </div>
    );
}
