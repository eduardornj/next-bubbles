import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { LanguageSwitcherClient } from "@/components/ui/LanguageSwitcher";

type Locale = "en" | "es" | "pt";

interface FooterProps {
  locale?: Locale;
}

function getFooterLinks(locale: Locale, lp: (path: string) => string) {
  const labels: Record<Locale, {
    services: string; newConstruction: string; removeReplace: string;
    repairs: string; allServices: string; financingOptions: string;
    materials: string; materialsGuide: string; aluminumSoffit: string;
    vinylSoffit: string; soffitRepairOrlando: string; fasciaRepairOrlando: string;
    company: string; aboutUs: string; blog: string; gallery: string;
    testimonials: string; leaveReview: string; certifications: string; serviceAreas: string; faq: string;
    legal: string; privacyPolicy: string; termsOfService: string; serviceAgreement: string;
    requestFreeEstimate: string; brandDesc: string; monSat: string;
    licensedInsured: string; specialists: string; allRightsReserved: string;
    subjectToAgreement: string; address: string;
  }> = {
    en: {
      services: "Services", newConstruction: "New Construction", removeReplace: "Remove & Replace",
      repairs: "Repairs", allServices: "All Services", financingOptions: "Financing Options",
      materials: "Materials", materialsGuide: "Materials Guide", aluminumSoffit: "Aluminum Soffit",
      vinylSoffit: "Vinyl Soffit", soffitRepairOrlando: "Soffit Repair — Orlando", fasciaRepairOrlando: "Fascia Repair — Orlando",
      company: "Company", aboutUs: "About Us", blog: "Blog", gallery: "Gallery",
      testimonials: "Testimonials", leaveReview: "Leave a Review", certifications: "Certifications", serviceAreas: "Service Areas", faq: "FAQ",
      legal: "Legal", privacyPolicy: "Privacy Policy", termsOfService: "Terms of Service", serviceAgreement: "Service Agreement",
      requestFreeEstimate: "Request Free Estimate",
      brandDesc: "Orlando's leading specialists in professional Soffit and Fascia installation and replacement. Protecting homes across Central Florida with premium aluminum and vinyl solutions.",
      monSat: "Mon–Sat 8am–6pm", licensedInsured: "Licensed & Insured", specialists: "Soffit & Fascia Specialists",
      allRightsReserved: "All rights reserved. Orlando, FL.",
      subjectToAgreement: "All services are subject to our",
      address: "Orlando, FL & Central Florida",
    },
    es: {
      services: "Servicios", newConstruction: "Construcción Nueva", removeReplace: "Quitar y Reemplazar",
      repairs: "Reparaciones", allServices: "Todos los Servicios", financingOptions: "Opciones de Financiamiento",
      materials: "Materiales", materialsGuide: "Guía de Materiales", aluminumSoffit: "Soffit de Aluminio",
      vinylSoffit: "Soffit de Vinilo", soffitRepairOrlando: "Reparación de Soffit — Orlando", fasciaRepairOrlando: "Reparación de Fascia — Orlando",
      company: "Empresa", aboutUs: "Sobre Nosotros", blog: "Blog", gallery: "Galería",
      testimonials: "Testimonios", leaveReview: "Dejar una Opinión", certifications: "Certificaciones", serviceAreas: "Áreas de Servicio", faq: "Preguntas Frecuentes",
      legal: "Legal", privacyPolicy: "Política de Privacidad", termsOfService: "Términos de Servicio", serviceAgreement: "Acuerdo de Servicio",
      requestFreeEstimate: "Solicitar Presupuesto Gratis",
      brandDesc: "Los especialistas líderes de Orlando en instalación y reemplazo profesional de soffit y fascia. Protegemos hogares en toda la Florida Central con soluciones premium de aluminio y vinilo.",
      monSat: "Lun–Sáb 8am–6pm", licensedInsured: "Licenciados y Asegurados", specialists: "Especialistas en Soffit y Fascia",
      allRightsReserved: "Todos los derechos reservados. Orlando, FL.",
      subjectToAgreement: "Todos los servicios están sujetos a nuestro",
      address: "Orlando, FL y Florida Central",
    },
    pt: {
      services: "Serviços", newConstruction: "Construção Nova", removeReplace: "Remover e Substituir",
      repairs: "Reparos", allServices: "Todos os Serviços", financingOptions: "Opções de Financiamento",
      materials: "Materiais", materialsGuide: "Guia de Materiais", aluminumSoffit: "Soffit de Alumínio",
      vinylSoffit: "Soffit de Vinil", soffitRepairOrlando: "Reparo de Soffit — Orlando", fasciaRepairOrlando: "Reparo de Fascia — Orlando",
      company: "Empresa", aboutUs: "Sobre Nós", blog: "Blog", gallery: "Galeria",
      testimonials: "Depoimentos", leaveReview: "Deixar Avaliação", certifications: "Certificações", serviceAreas: "Áreas de Atendimento", faq: "Perguntas Frequentes",
      legal: "Legal", privacyPolicy: "Política de Privacidade", termsOfService: "Termos de Serviço", serviceAgreement: "Contrato de Serviço",
      requestFreeEstimate: "Solicitar Orçamento Grátis",
      brandDesc: "Os especialistas líderes de Orlando em instalação e substituição profissional de soffit e fascia. Protegemos residências em toda a Flórida Central com soluções premium de alumínio e vinil.",
      monSat: "Seg–Sáb 8h–18h", licensedInsured: "Licenciados e Segurados", specialists: "Especialistas em Soffit e Fascia",
      allRightsReserved: "Todos os direitos reservados. Orlando, FL.",
      subjectToAgreement: "Todos os serviços estão sujeitos ao nosso",
      address: "Orlando, FL e Flórida Central",
    },
  };

  const t = labels[locale];
  return { t };
}

export function Footer({ locale = "en" }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const lp = (path: string) => {
    if (locale === "en") return path;
    return `/${locale}${path}`;
  };

  const { t } = getFooterLinks(locale, lp);

  const footerLinks = {
    services: [
      { name: t.newConstruction, href: lp("/new-construction") },
      { name: t.removeReplace, href: lp("/remove-replace") },
      { name: t.repairs, href: lp("/repairs") },
      { name: t.allServices, href: lp("/services") },
      { name: t.financingOptions, href: lp("/financing") },
    ],
    materials: [
      { name: t.materialsGuide, href: lp("/materials") },
      { name: t.aluminumSoffit, href: lp("/materials/aluminum") },
      { name: t.vinylSoffit, href: lp("/materials/vinyl") },
      { name: t.soffitRepairOrlando, href: lp("/soffit-repair-orlando") },
      { name: t.fasciaRepairOrlando, href: lp("/fascia-repair-orlando") },
    ],
    company: [
      { name: t.aboutUs, href: lp("/about") },
      { name: t.blog, href: lp("/blog") },
      { name: t.gallery, href: lp("/gallery") },
      { name: t.testimonials, href: lp("/testimonials") },
      { name: t.leaveReview, href: lp("/review") },
      { name: t.certifications, href: lp("/certifications") },
      { name: t.serviceAreas, href: lp("/areas") },
      { name: t.faq, href: lp("/faq") },
    ],
    legal: [
      { name: t.privacyPolicy, href: lp("/privacy") },
      { name: t.termsOfService, href: lp("/terms") },
      { name: t.serviceAgreement, href: lp("/terms") + "#service-agreement" },
    ],
  };

  return (
    <footer className="bg-bubble-navy text-white/90 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-8">

          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <Link href={lp("/")} className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white text-bubble-navy shadow-md">
                <span className="font-extrabold text-xl">B</span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-extrabold text-lg text-white tracking-tight">Bubbles Enterprise</span>
                <span className="text-[10px] text-white/60 font-medium tracking-wider uppercase">Soffit & Fascia</span>
              </div>
            </Link>
            <p className="text-sm leading-6 text-white/70 max-w-xs">{t.brandDesc}</p>

            {/* Contact */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-bubble-primary shrink-0" />
                <span className="text-sm text-white/70">{t.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-bubble-primary shrink-0" />
                <a href="tel:4077151790" className="text-sm text-white/70 hover:text-white transition-colors font-semibold">
                  (407) 715-1790
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-bubble-primary shrink-0" />
                <a href="mailto:contact@bubblesenterprise.com" className="text-sm text-white/70 hover:text-white transition-colors block truncate max-w-[200px]">
                  contact@bubblesenterprise.com
                </a>
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-4">
              <a href="https://www.facebook.com/bubblesenterprise" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-11 h-11 rounded-full bg-white/10 text-white/60 hover:text-white hover:bg-white/20 transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/bubblesoffit" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-11 h-11 rounded-full bg-white/10 text-white/60 hover:text-white hover:bg-white/20 transition-colors" aria-label="Instagram @bubblesoffit">
                <Instagram className="h-5 w-5" />
              </a>
            </div>

            <Link href={lp("/contact")} className="inline-flex items-center justify-center rounded-lg bg-bubble-primary px-5 py-2.5 text-sm font-bold text-white hover:bg-blue-600 transition-all">
              {t.requestFreeEstimate}
            </Link>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-xs font-bold leading-6 text-white tracking-widest uppercase mb-5">{t.services}</h2>
            <ul className="space-y-3">
              {footerLinks.services.map(item => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/80 hover:text-white transition-colors hover:translate-x-0.5 inline-block">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Materials */}
          <div>
            <h2 className="text-xs font-bold leading-6 text-white tracking-widest uppercase mb-5">{t.materials}</h2>
            <ul className="space-y-3">
              {footerLinks.materials.map(item => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/80 hover:text-white transition-colors hover:translate-x-0.5 inline-block">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company + Legal */}
          <div>
            <h2 className="text-xs font-bold leading-6 text-white tracking-widest uppercase mb-5">{t.company}</h2>
            <ul className="space-y-3">
              {footerLinks.company.map(item => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/80 hover:text-white transition-colors hover:translate-x-0.5 inline-block">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h2 className="text-xs font-bold leading-6 text-white tracking-widest uppercase mt-8 mb-5">{t.legal}</h2>
            <ul className="space-y-3">
              {footerLinks.legal.map(item => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/80 hover:text-white transition-colors hover:translate-x-0.5 inline-block">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/65 text-center md:text-left">
            &copy; {currentYear} Bubbles Enterprise Soffit. {t.allRightsReserved}<br />
            <span>{t.subjectToAgreement} <Link href={lp("/terms") + "#service-agreement"} className="underline hover:text-white/70 transition-colors">{t.serviceAgreement}</Link>.</span>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1">
            <span className="text-xs text-white/60">{t.monSat}</span>
            <span className="text-xs text-white/60">{t.licensedInsured}</span>
            <span className="text-xs text-white/60">{t.specialists}</span>
          </div>
          {/* Language switcher — client component seta cookie NEXT_LOCALE antes de navegar */}
          <LanguageSwitcherClient locale={locale} variant="footer" />
        </div>
      </div>
    </footer>
  );
}
