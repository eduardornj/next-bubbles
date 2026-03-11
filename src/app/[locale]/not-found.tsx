import { getLocale } from "next-intl/server";
import Link from "next/link";
import { Home, Phone, Wrench, Calculator, MapPin, ArrowRight } from "lucide-react";

const c = {
    en: {
        badge: "404 — Page Not Found",
        title: "Lost in the roofline?",
        accent: "We'll get you home.",
        subtitle: "This page doesn't exist or was moved. Everything you need is one click away.",
        tagline: "Soffit & Fascia specialists serving Orlando and Central Florida.",
        home: "Back to Home",
        quote: "Get a Free Quote",
        services: "Our Services",
        calculator: "Cost Calculator",
        areas: "Service Areas",
        callLabel: "Or call us directly:",
    },
    es: {
        badge: "404 — Página No Encontrada",
        title: "¿Perdido en el techo?",
        accent: "Lo llevamos al inicio.",
        subtitle: "Esta página no existe o fue movida. Todo lo que necesita está a un clic.",
        tagline: "Especialistas en Soffit y Fascia en Orlando y el Centro de Florida.",
        home: "Ir al Inicio",
        quote: "Cotización Gratis",
        services: "Nuestros Servicios",
        calculator: "Calculadora de Costos",
        areas: "Áreas de Servicio",
        callLabel: "O llámenos directamente:",
    },
    pt: {
        badge: "404 — Página Não Encontrada",
        title: "Perdido no telhado?",
        accent: "A gente te leva de volta.",
        subtitle: "Esta página não existe ou foi movida. Tudo que você precisa está a um clique.",
        tagline: "Especialistas em Soffit e Fascia em Orlando e na Florida Central.",
        home: "Voltar ao Início",
        quote: "Orçamento Grátis",
        services: "Nossos Serviços",
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
        <div className="flex flex-col min-h-[80vh] relative overflow-hidden bg-bubble-navy items-center justify-center px-4 py-24 text-center">

            {/* Grid overlay */}
            <div className="absolute inset-0 opacity-[0.25] pointer-events-none">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="nf-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                        </pattern>
                        <linearGradient id="nf-fade" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stopColor="white" stopOpacity="1" />
                            <stop offset="60%" stopColor="white" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="white" stopOpacity="0" />
                        </linearGradient>
                        <mask id="nf-mask">
                            <rect width="100%" height="100%" fill="url(#nf-fade)" />
                        </mask>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#nf-grid)" mask="url(#nf-mask)" />
                </svg>
            </div>

            {/* Glow orbs */}
            <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/15 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-500/8 rounded-full blur-[80px] pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">

                {/* Badge */}
                <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_4px_24px_rgba(0,0,0,0.2)]">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-300" />
                    </span>
                    <span className="text-white/90 text-xs font-semibold">{t.badge}</span>
                </div>

                {/* 404 number */}
                <div className="text-[110px] sm:text-[150px] font-extrabold leading-none text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-300 to-white mb-2 select-none">
                    404
                </div>

                {/* Headline */}
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">
                    {t.title}
                </h1>
                <p className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-300 to-white mb-6">
                    {t.accent}
                </p>

                <p className="text-white/70 text-lg leading-relaxed mb-2 max-w-md mx-auto">
                    {t.subtitle}
                </p>
                <p className="text-blue-300 font-semibold text-sm mb-10">
                    {t.tagline}
                </p>

                {/* Primary CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                    <Link
                        href={lp("/")}
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-bubble-navy font-bold rounded-full hover:bg-blue-50 hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)]"
                    >
                        <Home className="w-4 h-4" />
                        {t.home}
                    </Link>
                    <Link
                        href={lp("/contact")}
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-full hover:bg-white/20 transition-all"
                    >
                        {t.quote} <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                {/* Quick links */}
                <div className="grid grid-cols-3 gap-3 max-w-md mx-auto mb-10">
                    {[
                        { href: lp("/services"), icon: Wrench, label: t.services },
                        { href: lp("/calculator"), icon: Calculator, label: t.calculator },
                        { href: lp("/areas"), icon: MapPin, label: t.areas },
                    ].map(({ href, icon: Icon, label }) => (
                        <Link
                            key={href}
                            href={href}
                            className="flex flex-col items-center gap-1.5 px-3 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white/80 font-semibold text-xs hover:bg-white/20 hover:text-white transition-all"
                        >
                            <Icon className="w-4 h-4" />
                            {label}
                        </Link>
                    ))}
                </div>

                {/* Phone */}
                <p className="text-white/40 text-xs mb-2">{t.callLabel}</p>
                <a
                    href="tel:4077151790"
                    className="inline-flex items-center gap-2 text-white font-extrabold text-xl hover:text-blue-300 transition-colors"
                >
                    <Phone className="w-5 h-5" />
                    (407) 715-1790
                </a>
            </div>
        </div>
    );
}
