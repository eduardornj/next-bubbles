"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, PhoneCall, ChevronDown, Building2, RefreshCcw, Wrench, Package, Disc3 } from "lucide-react";
import { cn } from "@/lib/utils";
import { ViewTransitionLink } from "@/components/ui/ViewTransitionLink";
import { LanguageSwitcherClient } from "@/components/ui/LanguageSwitcher";

type Locale = "en" | "es" | "pt";

interface HeaderProps {
  locale?: Locale;
}

// Nav labels per locale
const navLabels: Record<Locale, {
  services: string; materials: string; gallery: string; calculator: string;
  financing: string; blog: string; about: string; freeEstimate: string;
  allServices: string; openMenu: string; closeMenu: string;
  monSat: string; servingOrlando: string; getFreeEstimate: string;
  faq: string; testimonials: string; serviceAreas: string;
}> = {
  en: {
    services: "Services", materials: "Materials", gallery: "Gallery",
    calculator: "Calculator", financing: "Financing", blog: "Blog", about: "About",
    freeEstimate: "Free Estimate", allServices: "All Services →", openMenu: "Open menu",
    closeMenu: "Close", monSat: "Mon–Sat 8am–6pm", servingOrlando: "Serving Orlando & Central Florida",
    getFreeEstimate: "Get Free Estimate", faq: "FAQ", testimonials: "Testimonials", serviceAreas: "Service Areas",
  },
  es: {
    services: "Servicios", materials: "Materiales", gallery: "Galería",
    calculator: "Calculadora", financing: "Financiamiento", blog: "Blog", about: "Nosotros",
    freeEstimate: "Presupuesto Gratis", allServices: "Todos los Servicios →", openMenu: "Abrir menú",
    closeMenu: "Cerrar", monSat: "Lun–Sáb 8am–6pm", servingOrlando: "Servimos a Orlando y Florida Central",
    getFreeEstimate: "Obtener Presupuesto Gratis", faq: "Preguntas", testimonials: "Testimonios", serviceAreas: "Áreas de Servicio",
  },
  pt: {
    services: "Serviços", materials: "Materiais", gallery: "Galeria",
    calculator: "Calculadora", financing: "Financiamento", blog: "Blog", about: "Sobre Nós",
    freeEstimate: "Orçamento Grátis", allServices: "Todos os Serviços →", openMenu: "Abrir menu",
    closeMenu: "Fechar", monSat: "Seg–Sáb 8h–18h", servingOrlando: "Atendemos Orlando e a Flórida Central",
    getFreeEstimate: "Obter Orçamento Grátis", faq: "Perguntas", testimonials: "Depoimentos", serviceAreas: "Áreas de Atendimento",
  },
};

// Service dropdown labels per locale
const serviceLabels: Record<Locale, Array<{ name: string; href: string; desc: string }>> = {
  en: [
    { name: "New Construction", href: "/new-construction", desc: "Brand-new soffit for builders" },
    { name: "Remove & Replace", href: "/remove-replace", desc: "Out with the old, in with the new" },
    { name: "Repairs", href: "/repairs", desc: "Fast, reliable soffit repair" },
  ],
  es: [
    { name: "Construcción Nueva", href: "/new-construction", desc: "Soffit nuevo para constructores" },
    { name: "Quitar y Reemplazar", href: "/remove-replace", desc: "Fuera lo viejo, adentro lo nuevo" },
    { name: "Reparaciones", href: "/repairs", desc: "Reparación de soffit rápida y confiable" },
  ],
  pt: [
    { name: "Construção Nova", href: "/new-construction", desc: "Soffit novo para construtores" },
    { name: "Remover e Substituir", href: "/remove-replace", desc: "Fora o velho, dentro o novo" },
    { name: "Reparos", href: "/repairs", desc: "Reparo de soffit rápido e confiável" },
  ],
};

const materialLabels: Record<Locale, Array<{ name: string; href: string; desc: string }>> = {
  en: [
    { name: "Aluminum Soffit", href: "/materials/aluminum", desc: "20–30 yr lifespan, fire-resistant" },
    { name: "Vinyl Soffit", href: "/materials/vinyl", desc: "Best cost-benefit, 12 colors" },
  ],
  es: [
    { name: "Soffit de Aluminio", href: "/materials/aluminum", desc: "20–30 años de vida útil, resistente al fuego" },
    { name: "Soffit de Vinilo", href: "/materials/vinyl", desc: "Mejor costo-beneficio, 12 colores" },
  ],
  pt: [
    { name: "Soffit de Alumínio", href: "/materials/aluminum", desc: "20–30 anos de vida útil, resistente ao fogo" },
    { name: "Soffit de Vinil", href: "/materials/vinyl", desc: "Melhor custo-benefício, 12 cores" },
  ],
};

// Detect Popover API support (Chrome 114+, Firefox 125+, Safari 17+)
const supportsPopover = () =>
    typeof window !== "undefined" && typeof HTMLElement.prototype.showPopover === "function";

export function Header({ locale = "en" }: HeaderProps) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [materialsOpen, setMaterialsOpen] = useState(false);
    const [hasPopover, setHasPopover] = useState(false);
    const pathname = usePathname();
    const servicesRef = useRef<HTMLDivElement>(null);
    const materialsRef = useRef<HTMLDivElement>(null);
    const servicesPopoverRef = useRef<HTMLDivElement>(null);
    const materialsPopoverRef = useRef<HTMLDivElement>(null);
    const hamburgerRef = useRef<HTMLButtonElement>(null);

    const t = navLabels[locale];
    const servicesDropdown = serviceLabels[locale];
    const materialsDropdown = materialLabels[locale];

    // Prefix hrefs with locale
    const localeHref = (path: string) => {
      if (locale === "en") return path;
      return `/${locale}${path}`;
    };

    const flatLinks = [
      { name: t.gallery, href: localeHref("/gallery") },
      { name: t.calculator, href: localeHref("/calculator") },
      { name: t.financing, href: localeHref("/financing") },
      { name: t.blog, href: localeHref("/blog") },
      { name: t.about, href: localeHref("/about") },
    ];

    useEffect(() => {
        setHasPopover(supportsPopover());
    }, []);

    // Sync Popover API toggle events with React state for aria-expanded
    useEffect(() => {
        if (!hasPopover) return;

        const servicesPopover = document.getElementById('services-popover');
        const materialsPopover = document.getElementById('materials-popover');

        const handleServicesToggle = (e: Event) => {
            const toggle = e as ToggleEvent;
            setServicesOpen(toggle.newState === 'open');
        };
        const handleMaterialsToggle = (e: Event) => {
            const toggle = e as ToggleEvent;
            setMaterialsOpen(toggle.newState === 'open');
        };

        servicesPopover?.addEventListener('toggle', handleServicesToggle);
        materialsPopover?.addEventListener('toggle', handleMaterialsToggle);

        return () => {
            servicesPopover?.removeEventListener('toggle', handleServicesToggle);
            materialsPopover?.removeEventListener('toggle', handleMaterialsToggle);
        };
    }, [hasPopover]);

    useEffect(() => {
        if (hasPopover) return;
        const handler = (e: MouseEvent) => {
            if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) setServicesOpen(false);
            if (materialsRef.current && !materialsRef.current.contains(e.target as Node)) setMaterialsOpen(false);
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, [hasPopover]);

    useEffect(() => {
        const handle = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handle, { passive: true });
        return () => window.removeEventListener("scroll", handle);
    }, []);

    useEffect(() => { setMobileOpen(false); }, [pathname]);

    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [mobileOpen]);

    // Focus trap for mobile menu (WCAG 2.4.3)
    useEffect(() => {
        if (!mobileOpen) return;
        const menu = document.getElementById('mobile-menu-panel');
        if (!menu) return;

        const focusableEls = menu.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        const firstEl = focusableEls[0];
        const lastEl = focusableEls[focusableEls.length - 1];

        // Focus the close button
        firstEl?.focus();

        const handleTab = (e: KeyboardEvent) => {
            if (e.key !== 'Tab') return;
            if (e.shiftKey) {
                if (document.activeElement === firstEl) {
                    e.preventDefault();
                    lastEl?.focus();
                }
            } else {
                if (document.activeElement === lastEl) {
                    e.preventDefault();
                    firstEl?.focus();
                }
            }
        };

        menu.addEventListener('keydown', handleTab);
        return () => {
            menu.removeEventListener('keydown', handleTab);
            // Return focus to hamburger button when menu closes
            hamburgerRef.current?.focus();
        };
    }, [mobileOpen]);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setMobileOpen(false);
                setServicesOpen(false);
                setMaterialsOpen(false);
            }
        };
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, []);

    const isActive = (href: string) => pathname === href;
    const isActiveGroup = (hrefs: string[]) => hrefs.some(h => pathname.includes(h));

    const togglePopover = (ref: React.RefObject<HTMLDivElement | null>, otherRef: React.RefObject<HTMLDivElement | null>) => {
        if (!hasPopover) return;
        const el = ref.current as HTMLElement & { showPopover?: () => void; hidePopover?: () => void };
        const other = otherRef.current as HTMLElement & { hidePopover?: () => void };
        if (!el) return;
        other?.hidePopover?.();
        const btn = el.previousElementSibling as HTMLElement;
        if (btn) {
            const rect = btn.getBoundingClientRect();
            el.style.top = `${rect.bottom + 6}px`;
            el.style.left = `${rect.left}px`;
        }
        el.showPopover?.();
    };

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 inset-x-0 z-50 transition-all duration-300",
                    scrolled
                        ? "bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100"
                        : "bg-white/80 backdrop-blur-sm border-b border-gray-100/50"
                )}
            >
                <a href="#main-content" style={{position:'fixed',top:'-100px',left:'8px',zIndex:9999}} className="bg-white px-4 py-2 rounded-lg shadow-lg text-bubble-primary font-bold text-sm focus:!top-2 transition-all">Skip to content</a>
                {/* Top bar */}
                <div className="bg-bubble-navy text-white text-xs py-1.5 px-4 hidden md:block">
                    <div className="container mx-auto max-w-7xl flex items-center justify-between">
                        <span className="text-blue-200">📍 {t.servingOrlando}</span>
                        <div className="flex items-center gap-6">
                            <span className="text-blue-200">{t.monSat}</span>
                            <a href="tel:4077151790" className="font-bold text-white hover:text-blue-200 transition flex items-center gap-1.5">
                                <PhoneCall className="w-3 h-3" />
                                (407) 715-1790
                            </a>
                        </div>
                    </div>
                </div>

                <nav className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl" aria-label="Global">
                    <div className="flex items-center justify-between h-16">

                        {/* Logo */}
                        <Link href={localeHref("/")} className="flex items-center gap-3 group vt-logo" aria-label="Bubbles Enterprise Home">
                            <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-bubble-primary to-bubble-dark text-white shadow-md group-hover:shadow-lg transition-shadow">
                                <span className="font-extrabold text-lg leading-none">B</span>
                            </div>
                            <div className="hidden sm:flex flex-col leading-tight">
                                <span className="font-extrabold text-base text-bubble-navy tracking-tight">Bubbles Enterprise</span>
                                <span className="text-[10px] text-gray-500 font-medium tracking-wider uppercase">Soffit & Fascia</span>
                            </div>
                        </Link>

                        {/* Desktop nav */}
                        <div className="hidden lg:flex items-center gap-1">

                            {/* Services dropdown */}
                            <div ref={servicesRef} className="relative">
                                <button
                                    className={cn(
                                        "flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-semibold transition-colors",
                                        isActiveGroup(["/new-construction", "/remove-replace", "/repairs", "/services"])
                                            ? "text-bubble-primary bg-blue-50"
                                            : "text-gray-700 hover:text-bubble-primary hover:bg-gray-50"
                                    )}
                                    onClick={() => {
                                        if (hasPopover) togglePopover(servicesPopoverRef, materialsPopoverRef);
                                        else { setServicesOpen(o => !o); setMaterialsOpen(false); }
                                    }}
                                    aria-haspopup="true"
                                    aria-expanded={servicesOpen}
                                    aria-controls={hasPopover ? "services-popover" : "services-dropdown"}
                                >
                                    {t.services}
                                    <ChevronDown className={cn("w-4 h-4 transition-transform", servicesOpen && !hasPopover && "rotate-180")} />
                                </button>

                                {hasPopover && (
                                    <div id="services-popover" popover="auto" ref={servicesPopoverRef} className="w-64 z-[200]">
                                        <div className="popover-panel bg-white rounded-xl shadow-xl border border-gray-100 py-2">
                                            <Link href={localeHref("/services")} className="flex items-center px-4 py-2 text-xs font-bold text-bubble-primary uppercase tracking-wider hover:bg-gray-50">
                                                {t.allServices}
                                            </Link>
                                            <div className="border-t border-gray-100 my-1" />
                                            {servicesDropdown.map(item => (
                                                <ViewTransitionLink
                                                    key={item.href}
                                                    href={localeHref(item.href)}
                                                    className={cn("flex items-start gap-3 px-4 py-3 hover:bg-blue-50 transition-colors group", isActive(localeHref(item.href)) && "bg-blue-50")}
                                                >
                                                    <span className="mt-0.5 text-bubble-primary shrink-0">
                                                        {item.href === "/new-construction" ? <Building2 className="w-4 h-4" /> : item.href === "/remove-replace" ? <RefreshCcw className="w-4 h-4" /> : <Wrench className="w-4 h-4" />}
                                                    </span>
                                                    <span>
                                                        <span className={cn("block text-sm font-semibold", isActive(localeHref(item.href)) ? "text-bubble-primary" : "text-gray-900 group-hover:text-bubble-primary")}>{item.name}</span>
                                                        <span className="block text-xs text-gray-500">{item.desc}</span>
                                                    </span>
                                                </ViewTransitionLink>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {!hasPopover && servicesOpen && (
                                    <div id="services-dropdown" className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                                        <Link href={localeHref("/services")} onClick={() => setServicesOpen(false)} className="flex items-center px-4 py-2 text-xs font-bold text-bubble-primary uppercase tracking-wider hover:bg-gray-50">
                                            {t.allServices}
                                        </Link>
                                        <div className="border-t border-gray-100 my-1" />
                                        {servicesDropdown.map(item => (
                                            <Link key={item.href} href={localeHref(item.href)} onClick={() => setServicesOpen(false)}
                                                className={cn("flex items-start gap-3 px-4 py-3 hover:bg-blue-50 transition-colors group", isActive(localeHref(item.href)) && "bg-blue-50")}>
                                                <span className="mt-0.5 text-bubble-primary shrink-0">
                                                    {item.href === "/new-construction" ? <Building2 className="w-4 h-4" /> : item.href === "/remove-replace" ? <RefreshCcw className="w-4 h-4" /> : <Wrench className="w-4 h-4" />}
                                                </span>
                                                <span>
                                                    <span className={cn("block text-sm font-semibold", isActive(localeHref(item.href)) ? "text-bubble-primary" : "text-gray-900 group-hover:text-bubble-primary")}>{item.name}</span>
                                                    <span className="block text-xs text-gray-500">{item.desc}</span>
                                                </span>
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Materials dropdown */}
                            <div ref={materialsRef} className="relative">
                                <button
                                    className={cn(
                                        "flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-semibold transition-colors",
                                        isActiveGroup(["/materials"])
                                            ? "text-bubble-primary bg-blue-50"
                                            : "text-gray-700 hover:text-bubble-primary hover:bg-gray-50"
                                    )}
                                    onClick={() => {
                                        if (hasPopover) togglePopover(materialsPopoverRef, servicesPopoverRef);
                                        else { setMaterialsOpen(o => !o); setServicesOpen(false); }
                                    }}
                                    aria-haspopup="true"
                                    aria-expanded={materialsOpen}
                                    aria-controls={hasPopover ? "materials-popover" : "materials-dropdown"}
                                >
                                    {t.materials}
                                    <ChevronDown className={cn("w-4 h-4 transition-transform", materialsOpen && !hasPopover && "rotate-180")} />
                                </button>

                                {hasPopover && (
                                    <div id="materials-popover" popover="auto" ref={materialsPopoverRef} className="w-64 z-[200]">
                                        <div className="popover-panel bg-white rounded-xl shadow-xl border border-gray-100 py-2">
                                            {materialsDropdown.map(item => (
                                                <ViewTransitionLink
                                                    key={item.href}
                                                    href={localeHref(item.href)}
                                                    className={cn("flex items-start gap-3 px-4 py-3 hover:bg-blue-50 transition-colors group", isActive(localeHref(item.href)) && "bg-blue-50")}
                                                >
                                                    <span className="mt-0.5 text-bubble-primary shrink-0">
                                                        {item.href.includes("aluminum") ? <Package className="w-4 h-4" /> : <Disc3 className="w-4 h-4" />}
                                                    </span>
                                                    <span>
                                                        <span className={cn("block text-sm font-semibold", isActive(localeHref(item.href)) ? "text-bubble-primary" : "text-gray-900 group-hover:text-bubble-primary")}>{item.name}</span>
                                                        <span className="block text-xs text-gray-500">{item.desc}</span>
                                                    </span>
                                                </ViewTransitionLink>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {!hasPopover && materialsOpen && (
                                    <div id="materials-dropdown" className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                                        {materialsDropdown.map(item => (
                                            <Link key={item.href} href={localeHref(item.href)} onClick={() => setMaterialsOpen(false)}
                                                className={cn("flex items-start gap-3 px-4 py-3 hover:bg-blue-50 transition-colors group", isActive(localeHref(item.href)) && "bg-blue-50")}>
                                                <span className="mt-0.5 text-bubble-primary shrink-0">
                                                    {item.href.includes("aluminum") ? <Package className="w-4 h-4" /> : <Disc3 className="w-4 h-4" />}
                                                </span>
                                                <span>
                                                    <span className={cn("block text-sm font-semibold", isActive(localeHref(item.href)) ? "text-bubble-primary" : "text-gray-900 group-hover:text-bubble-primary")}>{item.name}</span>
                                                    <span className="block text-xs text-gray-500">{item.desc}</span>
                                                </span>
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {flatLinks.map(item => (
                                <ViewTransitionLink
                                    key={item.name}
                                    href={item.href}
                                    className={cn(
                                        "px-3 py-2 rounded-lg text-sm font-semibold transition-colors",
                                        isActive(item.href)
                                            ? "text-bubble-primary bg-blue-50"
                                            : "text-gray-700 hover:text-bubble-primary hover:bg-gray-50"
                                    )}
                                >
                                    {item.name}
                                </ViewTransitionLink>
                            ))}
                        </div>

                        {/* Desktop CTA */}
                        <div className="hidden lg:flex items-center gap-3">
                            <a
                                href="tel:4077151790"
                                className="text-sm font-semibold text-gray-700 hover:text-bubble-primary transition-colors flex items-center gap-1.5"
                            >
                                <PhoneCall className="w-4 h-4" />
                                <span className="hidden xl:inline">(407) 715-1790</span>
                            </a>
                            <ViewTransitionLink
                                href={localeHref("/contact")}
                                className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold shadow-sm transition-all hover:scale-105 bg-bubble-primary text-white hover:bg-bubble-dark hover:shadow-md"
                            >
                                {t.freeEstimate}
                            </ViewTransitionLink>
                        </div>

                        {/* Mobile hamburger */}
                        <button
                            ref={hamburgerRef}
                            type="button"
                            className="lg:hidden -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:text-bubble-primary transition-colors"
                            onClick={() => setMobileOpen(true)}
                            aria-label={t.openMenu}
                        >
                            <Menu className="h-6 w-6" />
                        </button>
                    </div>
                </nav>
            </header>

            {/* Mobile menu */}
            {mobileOpen && (
                <div className="lg:hidden">
                    <div
                        className="fixed inset-0 z-[9998] bg-gray-900/80 backdrop-blur-sm"
                        onClick={() => setMobileOpen(false)}
                    />
                    <div id="mobile-menu-panel" className="fixed inset-y-0 right-0 z-[9999] w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm shadow-2xl" role="dialog" aria-modal="true" aria-label={t.closeMenu}>
                        <div className="flex items-center justify-between mb-6">
                            <Link href={localeHref("/")} className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-bubble-primary to-bubble-dark text-white flex items-center justify-center">
                                    <span className="font-extrabold text-sm">B</span>
                                </div>
                                <span className="font-extrabold text-bubble-navy">Bubbles Enterprise</span>
                            </Link>
                            <button onClick={() => setMobileOpen(false)} className="p-2 text-gray-700 hover:text-bubble-primary" aria-label={t.closeMenu}>
                                <X className="h-6 w-6" />
                            </button>
                        </div>

                        <a href="tel:4077151790" className="flex items-center gap-3 bg-blue-50 rounded-xl px-4 py-3 mb-4 text-bubble-primary font-bold">
                            <PhoneCall className="w-5 h-5" />
                            (407) 715-1790 — {locale === "es" ? "Llamar Ahora" : locale === "pt" ? "Ligar Agora" : "Call Now"}
                        </a>

                        {/* Language selector mobile */}
                        <LanguageSwitcherClient locale={locale} variant="mobile" />

                        <div className="space-y-1">
                            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 px-3 mb-2">{t.services}</p>
                            {servicesDropdown.map(item => (
                                <Link key={item.href} href={localeHref(item.href)}
                                    className={cn("flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-colors",
                                        isActive(localeHref(item.href)) ? "bg-blue-50 text-bubble-primary" : "text-gray-800 hover:bg-gray-50 hover:text-bubble-primary")}>
                                    <span className="text-bubble-primary">
                                        {item.href === "/new-construction" ? <Building2 className="w-4 h-4" /> : item.href === "/remove-replace" ? <RefreshCcw className="w-4 h-4" /> : <Wrench className="w-4 h-4" />}
                                    </span>
                                    {item.name}
                                </Link>
                            ))}

                            <div className="border-t border-gray-100 my-3" />
                            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 px-3 mb-2">{t.materials}</p>
                            {materialsDropdown.map(item => (
                                <Link key={item.href} href={localeHref(item.href)}
                                    className={cn("flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-colors",
                                        isActive(localeHref(item.href)) ? "bg-blue-50 text-bubble-primary" : "text-gray-800 hover:bg-gray-50 hover:text-bubble-primary")}>
                                    <span className="text-bubble-primary">
                                        {item.href.includes("aluminum") ? <Package className="w-4 h-4" /> : <Disc3 className="w-4 h-4" />}
                                    </span>
                                    {item.name}
                                </Link>
                            ))}

                            <div className="border-t border-gray-100 my-3" />
                            {[
                                { name: t.gallery, href: localeHref("/gallery") },
                                { name: t.calculator, href: localeHref("/calculator") },
                                { name: t.financing, href: localeHref("/financing") },
                                { name: t.blog, href: localeHref("/blog") },
                                { name: t.about, href: localeHref("/about") },
                                { name: t.faq, href: localeHref("/faq") },
                                { name: t.testimonials, href: localeHref("/testimonials") },
                                { name: t.serviceAreas, href: localeHref("/areas") },
                            ].map(item => (
                                <Link key={item.href} href={item.href}
                                    className={cn("flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-colors",
                                        isActive(item.href) ? "bg-blue-50 text-bubble-primary" : "text-gray-800 hover:bg-gray-50 hover:text-bubble-primary")}>
                                    {item.name}
                                </Link>
                            ))}
                        </div>

                        <div className="mt-6 pt-6 border-t border-gray-100">
                            <Link href={localeHref("/contact")} className="flex items-center justify-center gap-2 w-full bg-bubble-primary text-white rounded-full py-4 font-bold text-base hover:bg-bubble-dark transition">
                                {t.getFreeEstimate}
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
