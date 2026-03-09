import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ShieldCheck, Clock, Calculator, Star, Phone } from "lucide-react";
import { HeroSlider } from "@/components/home/HeroSlider";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Bubbles Enterprise — Soffit & Fascia Installation Orlando, FL",
  description:
    "Expert soffit & fascia repair, installation & replacement in Orlando, FL. Emergency services available. Licensed & Insured. (407) 715-1790.",
  openGraph: {
    title: "Bubbles Enterprise — Premium Soffit & Fascia Orlando",
    description:
      "Don't let damaged soffits invite animals into your home. Expert repair, installation, and emergency services in Orlando, FL.",
    url: "https://bubblesenterprise.com",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, type: "image/png" }],
  },
  alternates: {
    canonical: "https://bubblesenterprise.com",
    languages: {
      en: "https://bubblesenterprise.com",
      es: "https://bubblesenterprise.com/es",
      pt: "https://bubblesenterprise.com/pt",
      "x-default": "https://bubblesenterprise.com",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://bubblesenterprise.com/#website",
      url: "https://bubblesenterprise.com",
      name: "Bubbles Enterprise",
      description: "Top-rated soffit & fascia installation, repair & replacement in Orlando, FL.",
      dateModified: "2026-03-05",
      inLanguage: "en-US",
    },
    {
      "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
      "@id": "https://bubblesenterprise.com/#business",
      name: "Bubbles Enterprise Soffit & Fascia",
      url: "https://bubblesenterprise.com",
      telephone: "+14077151790",
      priceRange: "$$",
      image: "https://bubblesenterprise.com/opengraph-image",
      areaServed: [
        { "@type": "City", name: "Orlando", addressRegion: "FL" },
        { "@type": "City", name: "Kissimmee", addressRegion: "FL" },
        { "@type": "City", name: "Winter Park", addressRegion: "FL" },
        { "@type": "City", name: "Winter Garden", addressRegion: "FL" },
        { "@type": "City", name: "Clermont", addressRegion: "FL" },
        { "@type": "City", name: "Sanford", addressRegion: "FL" },
        { "@type": "City", name: "Oviedo", addressRegion: "FL" },
        { "@type": "City", name: "Lake Mary", addressRegion: "FL" },
        { "@type": "City", name: "Apopka", addressRegion: "FL" },
        { "@type": "City", name: "Altamonte Springs", addressRegion: "FL" },
        { "@type": "City", name: "Maitland", addressRegion: "FL" },
        { "@type": "City", name: "Casselberry", addressRegion: "FL" },
        { "@type": "City", name: "Longwood", addressRegion: "FL" },
        { "@type": "City", name: "Celebration", addressRegion: "FL" },
        { "@type": "City", name: "St. Cloud", addressRegion: "FL" },
      ],
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "18:00",
      },
      sameAs: [
        "https://www.google.com/maps/place/Bubble+Soffit+and+Fascia/data=!4m2!3m1!1s0x0:0x85136cefb8389b4b",
        "https://www.instagram.com/bubblesoffit",
        "https://www.facebook.com/bubblesoffit",
        "https://www.yelp.com/biz/bubble-enterprises-soffit-orlando",
        "https://nextdoor.com/page/bubble-enterprises-soffit-fascia",
      ],
    },
  ],
};

const services = [
  {
    title: "Repairs & Maintenance",
    desc: "Quick and reliable repair services for damaged soffit and fascia, including storm damage restoration and preventive maintenance.",
    bullets: ["Emergency repair services", "Storm damage restoration", "Preventive maintenance"],
    href: "/repairs",
    accentColor: "group-hover:bg-red-600",
    badgeColor: "bg-red-50 text-red-600",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    title: "Remove & Replace (R&R)",
    desc: "Complete removal of old, rotting wood or damaged vinyl. We install brand new aluminum or vinyl soffit systems ensuring perfect ventilation.",
    bullets: ["1 and 2-story homes", "Upgraded ventilation systems", "Total cleanup and disposal included"],
    href: "/remove-replace",
    accentColor: "group-hover:bg-bubble-primary",
    badgeColor: "bg-blue-50 text-bubble-primary",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "New Construction",
    desc: "Partnering with homeowners and builders to install industry-standard soffit and fascia on new builds. Perfect alignments, strict code adherence.",
    bullets: ["Flawless alignment and finish", "IRC Section 806 compliant", "Premium aluminum & vinyl"],
    href: "/new-construction",
    accentColor: "group-hover:bg-green-600",
    badgeColor: "bg-green-50 text-green-600",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const processSteps = [
  { n: "1", title: "Inspection & Quote", desc: "We visit your property for a free, detailed assessment and provide a transparent estimate.", color: "bg-blue-600" },
  { n: "2", title: "Proposal & Plan", desc: "You receive a clear timeline and material options tailored to your home's needs.", color: "bg-indigo-600" },
  { n: "3", title: "Install & Cleanup", desc: "Our team executes the work with precision and leaves your property spotless.", color: "bg-purple-600" },
];

const galleryImages = [
  { src: "/images/works/IMG_3511.webp", caption: "New Construction", alt: "New soffit construction project in Orlando" },
  { src: "/images/works/soffit-porch-new-construction.webp", caption: "Soffit Installation", alt: "Aluminum soffit installation on a porch" },
  { src: "/images/works/ceiling.webp", caption: "Vented Soffit", alt: "Vented soffit panels for attic airflow" },
  { src: "/images/works/IMG_0313.webp", caption: "Residential Project", alt: "Residential soffit and fascia replacement" },
  { src: "/images/works/soffit-branco-fascia-bronze.webp", caption: "Fascia Repair", alt: "White soffit with bronze fascia repair" },
  { src: "/images/works/soffit-fascia-two-story.webp", caption: "Soffit & Fascia", alt: "Two-story soffit and fascia installation" },
];

// Testimonials removed — will be replaced with real reviews as they come in

const serviceAreas = [
  { name: "Orlando", slug: "orlando" },
  { name: "Winter Park", slug: "winter-park" },
  { name: "Kissimmee", slug: "kissimmee" },
  { name: "Altamonte Springs", slug: "altamonte-springs" },
  { name: "Clermont", slug: "clermont" },
  { name: "Sanford", slug: "sanford" },
  { name: "Oviedo", slug: "oviedo" },
  { name: "Lake Mary", slug: "lake-mary" },
  { name: "Apopka", slug: "apopka" },
  { name: "Maitland", slug: "maitland" },
];

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="flex flex-col min-h-screen">

        {/* ══════════ HERO ══════════ */}
        <section className="relative overflow-hidden bg-bubble-navy pt-24 lg:pt-32 pb-16 lg:pb-24 min-h-[85vh] flex items-center">
          {/* Premium grid + glow */}
          <div className="absolute inset-0 opacity-[0.3] pointer-events-none">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                </pattern>
                <linearGradient id="hero-grid-fade" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="white" stopOpacity="1" />
                  <stop offset="60%" stopColor="white" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="white" stopOpacity="0" />
                </linearGradient>
                <mask id="hero-grid-mask">
                  <rect width="100%" height="100%" fill="url(#hero-grid-fade)" />
                </mask>
              </defs>
              <rect width="100%" height="100%" fill="url(#hero-grid)" mask="url(#hero-grid-mask)" />
            </svg>
          </div>
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/15 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-500/8 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl w-full">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

              {/* Left — Copy */}
              <div className="max-w-2xl">
                {/* Floating trust badge — glassmorphism */}
                <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_4px_24px_rgba(0,0,0,0.2)]">
                  <div className="flex -space-x-1.5">
                    {["bg-green-400", "bg-blue-400", "bg-yellow-400"].map((c, i) => (
                      <div key={i} className={`w-6 h-6 ${c} rounded-full border-2 border-bubble-navy`} />
                    ))}
                  </div>
                  <span className="text-white/90 text-xs font-semibold">
                    <span className="text-green-400 font-bold">500+</span> homes protected in Central FL
                  </span>
                </div>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-bubble-secondary/20 text-bubble-light text-sm font-semibold tracking-wide mb-5 border border-bubble-secondary/30">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-bubble-light" />
                  </span>
                  #1 in Orlando & Central Florida
                </span>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
                  Orlando&apos;s Soffit &amp; Fascia<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-300 to-white animate-[gradient_4s_ease_infinite] bg-[length:200%_200%]">
                    Specialist. Done Right.
                  </span>
                </h1>

                <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-xl leading-relaxed">
                  Damaged soffit lets animals, water, and rot destroy your home from the outside in. We fix it fast — New Construction, Remove &amp; Replace, and Repairs across Central Florida.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <Link
                    href="/calculator"
                    className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full bg-white text-bubble-navy font-bold text-lg hover:bg-blue-50 hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                  >
                    <Calculator className="w-5 h-5" />
                    Instant Online Quote
                  </Link>
                  <a
                    href="tel:4077151790"
                    className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full bg-transparent text-white font-bold text-lg border-2 border-white/30 hover:bg-white/10 hover:border-white/60 transition-all"
                  >
                    <Phone className="w-5 h-5" />
                    (407) 715-1790
                  </a>
                </div>

                {/* Trust pills */}
                <div className="flex flex-wrap gap-4 text-white/70 text-sm font-medium">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-green-400" />
                    Licensed &amp; Insured
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-400" />
                    Premium Materials
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-yellow-400" />
                    On-Time Execution
                  </div>
                </div>
              </div>

              {/* Right — Animated image slider */}
              <HeroSlider />
            </div>
          </div>

          {/* Scroll arrow */}
          <a
            href="#stats"
            aria-label="Scroll down"
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </section>

        {/* ══════════ ANIMATED STATS BAR (glassmorphism) ══════════ */}
        <section id="stats" className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 py-10">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { icon: "🏠", label: "Free Estimates", sub: "No commitment" },
                { icon: "⚡", label: "Fast Turnaround", sub: "Same-week scheduling" },
                { icon: "🛡️", label: "Licensed & Insured", sub: "Full coverage" },
                { icon: "📍", label: "Central Florida", sub: "45+ cities served" },
              ].map((s, i) => (
                <AnimatedSection key={s.label} delay={i * 80} from="scale">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl py-6 px-4 hover:bg-white/20 transition-colors">
                    <div className="text-3xl mb-2">{s.icon}</div>
                    <div className="text-white font-bold text-sm">{s.label}</div>
                    <div className="text-blue-200 text-xs mt-1">{s.sub}</div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ SERVICES ══════════ */}
        <section id="services" className="py-20 lg:py-28 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <AnimatedSection>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-bubble-primary font-bold tracking-widest uppercase text-sm">Our Core Services</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-5">What Soffit & Fascia Services Do You Need?</h2>
                <p className="text-lg text-gray-600">Whether you are building from the ground up or upgrading your existing home, our specialized teams guarantee a flawless finish.</p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((s, i) => (
                <AnimatedSection key={s.title} delay={i * 120} from="bottom">
                  <Link
                    href={s.href}
                    className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all group flex flex-col relative overflow-hidden h-full"
                  >
                    <div className={`absolute top-0 left-0 w-full h-1 bg-bubble-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
                    <div className={`w-14 h-14 ${s.badgeColor} rounded-xl flex items-center justify-center mb-6 ${s.accentColor} group-hover:text-white transition-colors`}>
                      {s.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed flex-grow">{s.desc}</p>
                    <ul className="space-y-2 mb-6">
                      {s.bullets.map(b => (
                        <li key={b} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <span className="inline-flex items-center gap-1 text-bubble-primary font-bold text-sm mt-auto">
                      Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </AnimatedSection>
              ))}
            </div>

            {/* Bottom CTA card */}
            <AnimatedSection className="mt-14">
              <div className="text-center">
                <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg max-w-4xl mx-auto border border-gray-100">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Need a Custom Solution?</h3>
                  <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">Every project is unique. Contact us for a personalized consultation and free estimate tailored to your specific needs.</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact" className="px-8 py-4 bg-bubble-primary text-white rounded-full font-bold hover:bg-bubble-dark transition shadow-lg">
                      Get Free Quote
                    </Link>
                    <a href="tel:4077151790" className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full font-bold hover:border-bubble-primary hover:text-bubble-primary transition">
                      Call (407) 715-1790
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ══════════ PROCESS ══════════ */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
            <AnimatedSection>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-16">
                How Does Our <span className="text-bubble-primary">Process</span> Work?
              </h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Connector line on desktop */}
              <div className="hidden md:block absolute top-10 left-0 w-full h-0.5 bg-blue-100 z-0" />
              {processSteps.map((p, i) => (
                <AnimatedSection key={p.n} delay={i * 150} from="bottom">
                  <div className="relative z-10">
                    <div className={`w-20 h-20 ${p.color} text-white rounded-full flex items-center justify-center text-2xl font-extrabold mx-auto mb-6 shadow-lg border-4 border-white ring-2 ring-blue-100`}>
                      {p.n}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{p.title}</h3>
                    <p className="text-gray-600 px-4 leading-relaxed">{p.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ GALLERY PREVIEW ══════════ */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <AnimatedSection>
              <div className="text-center mb-16">
                <span className="text-bubble-primary font-bold tracking-widest uppercase text-sm">Our Work</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-4">Project Gallery</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Explore our latest soffit and fascia projects in Orlando and surrounding areas.
                </p>
              </div>
            </AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {galleryImages.map((img, i) => (
                <AnimatedSection key={i} delay={i * 80} from="scale">
                  <Link
                    href="/gallery"
                    className="group relative overflow-hidden rounded-2xl aspect-square shadow-sm hover:shadow-2xl transition-all block"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 768px) 50vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <p className="w-full text-white font-bold text-sm p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        {img.caption}
                      </p>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
            <AnimatedSection className="text-center mt-10">
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 px-8 py-4 bg-bubble-primary text-white rounded-full font-bold hover:bg-bubble-dark transition shadow-lg"
              >
                View Full Gallery <ArrowRight className="w-5 h-5" />
              </Link>
            </AnimatedSection>
          </div>
        </section>

        {/* ══════════ PEST WARNING (RED CARD) ══════════ */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left: Why Choose Us */}
              <AnimatedSection from="left">
                <div>
                  <span className="text-bubble-primary font-bold tracking-widest uppercase text-sm">Why Choose Us</span>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-6">
                    Why Choose <span className="text-bubble-primary">Bubbles Enterprise</span>?
                  </h2>
                  <p className="text-xl text-gray-600 mb-8">With years of experience in Orlando, we deliver exceptional quality and customer service.</p>
                  <div className="space-y-6">
                    {[
                      { title: "Licensed & Insured", desc: "Fully licensed and insured for your complete peace of mind." },
                      { title: "Premium Materials", desc: "We use only top-grade aluminum and vinyl that withstand Florida's climate." },
                      { title: "100% Satisfaction Guarantee", desc: "We don't leave until the job is perfect — guaranteed." },
                      { title: "ABC Supply Partner", desc: "Materials sourced from America's largest building materials distributor." },
                    ].map((item, i) => (
                      <AnimatedSection key={item.title} delay={i * 100} from="left">
                        <div className="flex items-start gap-4">
                          <div className="w-8 h-8 bg-bubble-primary rounded-full flex items-center justify-center shrink-0 mt-0.5">
                            <CheckCircle2 className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                            <p className="text-gray-600">{item.desc}</p>
                          </div>
                        </div>
                      </AnimatedSection>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Right: Red warning card */}
              <AnimatedSection from="right">
                <div className="relative">
                  <div className="bg-gradient-to-br from-red-700 to-red-900 rounded-2xl p-6 md:p-8 shadow-2xl text-white relative overflow-hidden border-4 border-red-500 hover:scale-[1.01] transition-transform">
                    <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#00000015_10px,#00000015_20px)] opacity-30" />
                    <div className="relative z-10">
                      <div className="flex items-center justify-center gap-3 mb-6 bg-black/30 p-3 rounded-lg border border-red-500/50 backdrop-blur-sm">
                        <div className="animate-pulse bg-red-600 rounded-full p-2">
                          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                        </div>
                        <h3 className="font-extrabold text-xl md:text-2xl uppercase tracking-wider text-red-100">Critical Warning</h3>
                      </div>

                      <p className="font-bold text-lg mb-6 text-center leading-tight">
                        Open soffits are an invitation for pests that can{" "}
                        <span className="text-red-300 underline decoration-red-400 decoration-2 underline-offset-2">severely damage</span>{" "}
                        your home&apos;s structure.
                      </p>

                      <ul className="space-y-4 mb-8 bg-black/20 p-5 rounded-xl border border-red-500/30">
                        {[
                          { emoji: "🐀", title: "Fire Risk & Wiring Damage", desc: "Rodents chew through electrical wires in the attic, creating serious fire hazards." },
                          { emoji: "🏠", title: "Insulation Contamination", desc: "Pests soil insulation with waste, requiring expensive removal and replacement." },
                          { emoji: "👃", title: "Health Hazards", desc: "Decaying matter and droppings spread toxic odors and bacteria through your vents." },
                          { emoji: "🔊", title: "Structural Damage", desc: "Nesting animals compromise wood framing and drywall integrity." },
                        ].map(item => (
                          <li key={item.title} className="flex items-start gap-3">
                            <span className="text-2xl bg-white/10 rounded p-1">{item.emoji}</span>
                            <span className="text-red-50 text-sm">
                              <strong className="text-white block text-base">{item.title}</strong>
                              {item.desc}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <div className="text-center space-y-3">
                        <p className="text-red-200 italic text-sm font-medium">Don&apos;t wait until it&apos;s too late.</p>
                        <Link
                          href="/contact/emergency"
                          className="flex items-center justify-center gap-2 w-full bg-white text-red-700 hover:bg-red-50 font-black py-4 px-6 rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all hover:-translate-y-0.5 uppercase tracking-wider text-lg border-2 border-red-600"
                        >
                          Get Help Now <ArrowRight className="w-6 h-6" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ══════════ SOCIAL PROOF / REVIEWS CTA ══════════ */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <AnimatedSection from="scale">
              <div className="bg-white rounded-3xl border border-gray-100 shadow-lg p-10 lg:p-14 text-center">
                <div className="flex justify-center gap-1 mb-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-8 h-8 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
                  Trusted by Homeowners Across <span className="text-bubble-primary">Central Florida</span>
                </h2>
                <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8 leading-relaxed">
                  We&apos;re building our reputation one job at a time. Every project is an opportunity to earn a 5-star review — and we take that seriously. Check our latest work on Google.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/review"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-bubble-primary text-white rounded-full font-bold hover:bg-bubble-dark transition shadow-lg"
                  >
                    <Star className="w-5 h-5 fill-white" />
                    Leave Us a Review
                  </Link>
                  <Link
                    href="/gallery"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-gray-200 text-gray-700 rounded-full font-bold hover:border-bubble-primary hover:text-bubble-primary transition"
                  >
                    View Our Work <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ══════════ SERVICE AREAS ══════════ */}
        <section className="py-16 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Serving All <span className="text-bubble-primary">Central Florida</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">We proudly serve Orlando and surrounding communities:</p>
            </AnimatedSection>
            <AnimatedSection from="scale">
              <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto mb-8">
                {serviceAreas.map((area, i) => (
                  <Link
                    key={area.slug}
                    href={`/areas/${area.slug}`}
                    className="px-5 py-2 bg-gray-50 rounded-full text-gray-700 font-medium border border-gray-200 hover:border-bubble-primary hover:text-bubble-primary hover:bg-blue-50 transition-all text-sm"
                    style={{ animationDelay: `${i * 40}ms` }}
                  >
                    {area.name}
                  </Link>
                ))}
              </div>
              <Link href="/areas" className="inline-flex items-center gap-1 text-bubble-primary font-bold hover:underline">
                See all 45+ cities we serve <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimatedSection>
          </div>
        </section>

        {/* ══════════ BLOG PREVIEW ══════════ */}
        <section className="py-20 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <AnimatedSection className="flex items-end justify-between mb-10 flex-wrap gap-4">
              <div>
                <span className="text-xs font-bold text-bubble-primary uppercase tracking-widest block mb-2">Expert Guides</span>
                <h2 className="text-3xl font-extrabold text-gray-900">From the Blog</h2>
              </div>
              <Link href="/blog" className="text-sm font-bold text-bubble-primary hover:underline flex items-center gap-1.5">
                All Articles <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimatedSection>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  href: "/blog/hurricane-proof-soffit-florida",
                  category: "Hurricane Season",
                  title: "Hurricane-Proof Soffit Florida: What Actually Works",
                  excerpt: "After Hurricane Michael, engineers documented exactly where soffit fails. Wind ratings by material and Florida code requirements.",
                },
                {
                  href: "/blog/soffit-fascia-color-trends-2026",
                  category: "Design 2026",
                  title: "Soffit & Fascia Color Trends 2026: What's In, What's Out",
                  excerpt: "Greige is replacing gray. Dark fascia accents are everywhere. See what's trending for Florida homes this year.",
                },
                {
                  href: "/blog/termites-in-soffit-orlando",
                  category: "Pests",
                  title: "Termites in Soffit Orlando: Signs, Damage & What to Do",
                  excerpt: "Drywood termites target soffit and fascia. Identify frass, hollow wood, and learn the correct repair sequence.",
                },
              ].map((post, i) => (
                <AnimatedSection key={post.href} delay={i * 70} from="bottom">
                  <Link href={post.href} className="group block bg-gray-50 rounded-2xl border border-gray-200 p-6 hover:shadow-lg hover:border-blue-200 transition-all h-full flex flex-col">
                    <span className="text-xs font-bold text-bubble-primary bg-blue-50 px-3 py-1 rounded-full w-max mb-4">{post.category}</span>
                    <h3 className="text-base font-extrabold text-gray-900 mb-3 group-hover:text-bubble-primary transition-colors leading-snug flex-grow">{post.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                    <span className="flex items-center gap-1.5 text-sm font-bold text-bubble-primary mt-auto group-hover:gap-2.5 transition-all">
                      Read Article <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ FINAL CTA ══════════ */}
        <section className="py-24 bg-bubble-navy relative overflow-hidden">
          {/* Premium grid + glow */}
          <div className="absolute inset-0 opacity-[0.26] pointer-events-none">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="cta-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                </pattern>
                <radialGradient id="cta-grid-fade" cx="50%" cy="50%" r="60%">
                  <stop offset="0%" stopColor="white" stopOpacity="1" />
                  <stop offset="100%" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <mask id="cta-grid-mask">
                  <rect width="100%" height="100%" fill="url(#cta-grid-fade)" />
                </mask>
              </defs>
              <rect width="100%" height="100%" fill="url(#cta-grid)" mask="url(#cta-grid-mask)" />
            </svg>
          </div>
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-500/8 rounded-full blur-[100px] pointer-events-none" />
          <AnimatedSection from="scale">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center relative z-10">
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Stop guessing costs.</h2>
              <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
                Our calculator gives you an instant, accurate quote for your exact home layout based on real material costs — no waiting, no back and forth.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/calculator"
                  className="inline-flex justify-center items-center gap-2 px-10 py-5 rounded-full bg-white text-bubble-navy font-bold text-xl hover:bg-blue-50 hover:scale-105 transition-all shadow-[0_10px_30px_rgba(255,255,255,0.15)]"
                >
                  <Calculator className="w-6 h-6" />
                  Calculate My Project
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex justify-center items-center gap-2 px-10 py-5 rounded-full bg-bubble-primary text-white font-bold text-xl hover:bg-blue-600 transition-all border border-blue-400/30"
                >
                  Request Free Quote <ArrowRight className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </section>

      </div>
    </>
  );
}
