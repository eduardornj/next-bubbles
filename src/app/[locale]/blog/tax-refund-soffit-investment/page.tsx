import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, AlertTriangle, DollarSign, Shield, Phone, TrendingUp, Home, Bug, Droplets } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { RelatedServices } from "@/components/ui/RelatedServices";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const slug = "tax-refund-soffit-investment";
    const url = locale === "en" ? `https://bubblesenterprise.com/blog/${slug}` : `https://bubblesenterprise.com/${locale}/blog/${slug}`;

    const titles: Record<string, string> = {
        en: "Use Your Tax Refund to Protect Your Home — Soffit & Fascia Is the Smartest Investment",
        es: "Use Su Reembolso de Impuestos para Proteger Su Casa: Soffit y Fascia Es la Inversión Más Inteligente",
        pt: "Use Sua Restituicao de Imposto para Proteger Sua Casa: Soffit e Fascia E o Investimento Mais Inteligente",
    };
    const descriptions: Record<string, string> = {
        en: "Got your tax refund? See why soffit and fascia repair is the smartest home investment — prevent $5,000+ in damage, boost curb appeal, and protect your Orlando home before hurricane season.",
        es: "Recibio su reembolso de impuestos? Vea por que reparar soffit y fascia es la inversion mas inteligente: evite mas de $5,000 en danos, mejore la apariencia de su casa y protejala antes de la temporada de huracanes.",
        pt: "Recebeu sua restituicao de imposto? Veja por que reparar soffit e fascia e o investimento mais inteligente: evite mais de $5.000 em danos, melhore a aparencia da sua casa e proteja-a antes da temporada de furacoes.",
    };

    return {
        title: titles[locale] ?? titles.en,
        description: descriptions[locale] ?? descriptions.en,
        openGraph: {
            title: (titles[locale] ?? titles.en) + " | Bubbles Enterprise",
            description: descriptions[locale] ?? descriptions.en,
            url,
        },
        alternates: {
            canonical: url,
            languages: {
                en: `https://bubblesenterprise.com/blog/${slug}`,
                es: `https://bubblesenterprise.com/es/blog/${slug}`,
                pt: `https://bubblesenterprise.com/pt/blog/${slug}`,
                "x-default": `https://bubblesenterprise.com/blog/${slug}`,
            },
        },
    };
}

function buildSchema(locale: string) {
    const blogUrl = locale === "en" ? `https://bubblesenterprise.com/blog/tax-refund-soffit-investment` : `https://bubblesenterprise.com/${locale}/blog/tax-refund-soffit-investment`;
    return {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "@id": "https://bubblesenterprise.com/blog/tax-refund-soffit-investment#article",
                headline: "Use Your Tax Refund to Protect Your Home — Why Soffit & Fascia Is the Smartest Investment",
                description: "Why soffit and fascia repair is the smartest way to spend your tax refund — prevent costly damage, boost home value, and prepare for hurricane season.",
                url: blogUrl,
                datePublished: "2026-03-10",
                dateModified: "2026-03-10",
                author: { "@type": "Person", name: "Bubbles Enterprise Team", jobTitle: "Licensed Soffit & Fascia Contractors", url: "https://bubblesenterprise.com/about", worksFor: { "@id": "https://bubblesenterprise.com/#business" } },
                publisher: { "@id": "https://bubblesenterprise.com/#business" },
                articleSection: "Home Investment",
                keywords: "tax refund home improvement, soffit repair investment, home value soffit, orlando home improvement, hurricane preparation soffit",
                inLanguage: locale,
            },
            {
                "@type": "FAQPage",
                "@id": "https://bubblesenterprise.com/blog/tax-refund-soffit-investment#faq",
                inLanguage: locale,
                mainEntity: [
                    {
                        "@type": "Question",
                        name: "Is soffit and fascia repair a good investment?",
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: "Yes. Damaged soffit exposes your attic to water, pests, and mold — problems that cost $5,000 to $15,000 to fix. Repairing or replacing soffit costs $800 to $2,500 on average, making it one of the highest-ROI home improvements you can make.",
                        },
                    },
                    {
                        "@type": "Question",
                        name: "Does new soffit increase home value?",
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: "New soffit and fascia improve curb appeal and help pass home inspections. Homes with well-maintained exterior trim sell faster and for higher prices. Buyers and inspectors specifically check for soffit damage, pest entry, and water staining.",
                        },
                    },
                    {
                        "@type": "Question",
                        name: "How much does soffit repair cost in Orlando?",
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: "Most soffit repairs in Orlando cost between $800 and $2,500 depending on the extent of damage and material chosen. A full remove-and-replace on a single-story home typically runs $2,000 to $5,000. Many homeowners use their tax refund to cover the entire cost.",
                        },
                    },
                    {
                        "@type": "Question",
                        name: "Should I fix my soffit before hurricane season?",
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: "Absolutely. Damaged or missing soffit panels are the most common entry point for wind-driven rain during hurricanes. Fixing soffit before June (when hurricane season starts) is the single most cost-effective storm preparation for your roof system.",
                        },
                    },
                ],
            },
        ],
    };
}

const content = {
    en: {
        breadcrumb: "Blog",
        category: "Home Investment",
        readTime: "7 min read · March 10, 2026",
        authorLine: <>By <span className="font-semibold text-gray-700">Eddy</span> · Soffit &amp; Fascia Specialist · <time dateTime="2026-03-10">March 10, 2026</time></>,
        h1a: "Use Your Tax Refund to",
        h1b: "Protect Your Home",
        intro: "Most people spend their refund on things that lose value the moment they buy them. Here's why soffit and fascia is the one home improvement that actually pays you back.",
        // The Problem
        problemTitle: "What Happens When You Ignore Damaged Soffit",
        problemIntro: "That small gap or sagging panel under your roofline isn't just ugly — it's an open invitation to thousands of dollars in damage. Every week you wait, the problem gets worse:",
        problems: [
            { icon: Bug, title: "Pest Invasion", desc: "Rats, squirrels, birds, and wasps enter through soffit gaps and nest in your attic. They chew wiring (fire hazard), destroy insulation, and leave droppings that create health risks." },
            { icon: Droplets, title: "Water Damage & Mold", desc: "Rain enters through damaged soffit, soaking attic insulation and roof decking. Within weeks, mold grows. Within months, wood rot spreads. A $800 repair becomes a $10,000 problem." },
            { icon: AlertTriangle, title: "Structural Deterioration", desc: "Fascia boards weaken when exposed to moisture. The gutter system loses support. Eventually, the entire roofline edge needs rebuilding — not just the soffit." },
            { icon: TrendingUp, title: "Higher Energy Bills", desc: "Damaged soffit disrupts attic ventilation. Your AC works harder to cool the house, and you pay 10–20% more on electricity every month without knowing why." },
        ],
        // The Numbers
        numbersTitle: "The Math: Fix Now vs. Fix Later",
        numbersIntro: "Here's what delayed soffit repair actually costs in Central Florida:",
        numbersRows: [
            { scenario: "Repair soffit now", cost: "$800 – $2,500", timeline: "1–2 days", note: "Problem solved. Home protected." },
            { scenario: "Wait 6 months", cost: "$2,000 – $5,000", timeline: "3–5 days", note: "Water damage starts. Insulation replacement needed." },
            { scenario: "Wait 1+ year", cost: "$5,000 – $15,000", timeline: "1–2 weeks", note: "Mold remediation + structural repair + soffit replacement." },
        ],
        numbersVerdict: "The average Orlando tax refund is $2,800. That covers most soffit repairs entirely — and saves you $5,000–$12,000 in future damage.",
        // ROI Section
        roiTitle: "5 Ways New Soffit Pays You Back",
        roiItems: [
            { title: "Pass Home Inspection", desc: "Buyers and inspectors specifically check soffit for damage, pest entry, and water stains. Clean soffit = clean report = faster sale." },
            { title: "Boost Curb Appeal Instantly", desc: "New aluminum soffit and fascia transform the look of your roofline. It's the most visible exterior upgrade after paint — and it lasts 20–30 years." },
            { title: "Lower Insurance Risk", desc: "Some insurance companies flag homes with visible exterior damage. Clean soffit and fascia reduce the chance of a premium increase or non-renewal." },
            { title: "Stop Energy Waste", desc: "Properly vented soffit panels regulate attic temperature, reducing AC strain and lowering your monthly electric bill by 10–20%." },
            { title: "Hurricane Preparation", desc: "Hurricane season starts June 1. Secure soffit is the #1 defense against wind-driven rain entering your roof system. Don't wait until May." },
        ],
        // Timing
        timingTitle: "Why Right Now Is the Perfect Time",
        timingReasons: [
            "Tax refunds hit accounts in March–April — you have the cash now",
            "Hurricane season starts June 1 — get ahead of the rush",
            "Spring weather is ideal for exterior work (no daily rain yet)",
            "Contractors have more availability now than in May–June",
            "Every week you wait, damage compounds (especially in Florida humidity)",
        ],
        // FAQ
        faqTitle: "Common Questions",
        faqs: [
            { q: "Is soffit and fascia repair a good investment?", a: "Yes. It's one of the highest-ROI home improvements you can make. A $800–$2,500 repair prevents $5,000–$15,000 in water, pest, and structural damage. It also improves curb appeal and helps your home pass inspection when it's time to sell." },
            { q: "Does new soffit increase home value?", a: "New soffit and fascia improve curb appeal and help pass home inspections. Buyers and inspectors specifically check for soffit damage, pest entry, and water staining. Homes with clean, well-maintained exterior trim sell faster and command higher offers." },
            { q: "How much does soffit repair cost in Orlando?", a: "Most soffit repairs in Orlando cost $800–$2,500 depending on the extent of damage and material (aluminum or vinyl). A full remove-and-replace on a single-story home runs $2,000–$5,000. Many homeowners cover the entire cost with their tax refund." },
            { q: "Should I fix my soffit before hurricane season?", a: "Absolutely. Damaged or missing soffit panels are the most common entry point for wind-driven rain during hurricanes. Fixing soffit before June is the single most cost-effective storm preparation for your roof system." },
        ],
        // CTA
        ctaTitle: "Your Tax Refund Can Protect Your Home",
        ctaBody: "Free estimate, no pressure. We'll inspect your soffit, show you exactly what needs attention, and give you a clear price — usually in under 30 minutes.",
        ctaBtn: "Get Your Free Estimate",
        ctaPhone: "Call (407) 715-1790",
        ctaWhatsapp: "WhatsApp Us",
        ctaNote: "Most projects completed in 1–2 days. Financing available starting at $19/month.",
    },
    es: {
        breadcrumb: "Blog",
        category: "Inversion en Su Hogar",
        readTime: "7 min de lectura · 10 de marzo de 2026",
        authorLine: <>Por <span className="font-semibold text-gray-700">Eddy</span> · Especialista en Soffit y Fascia · <time dateTime="2026-03-10">10 de marzo de 2026</time></>,
        h1a: "Use Su Reembolso de Impuestos",
        h1b: "para Proteger Su Casa",
        intro: "La mayoria de las personas gastan su reembolso en cosas que pierden valor en el momento que las compran. Le mostramos por que soffit y fascia es la unica mejora para el hogar que realmente le devuelve su dinero.",
        problemTitle: "Lo Que Pasa Cuando Ignora un Soffit Danado",
        problemIntro: "Ese pequeno hueco o panel colgante bajo su techo no es solo feo: es una invitacion abierta a miles de dolares en danos. Cada semana que espera, el problema se agrava:",
        problems: [
            { icon: Bug, title: "Invasion de Plagas", desc: "Ratas, ardillas, aves y avispas entran por los huecos del soffit y anidan en su atico. Roen el cableado electrico (riesgo de incendio), destruyen el aislamiento y dejan excrementos que crean riesgos para la salud." },
            { icon: Droplets, title: "Danos por Agua y Moho", desc: "La lluvia entra por el soffit danado, empapando el aislamiento del atico y la cubierta del techo. En semanas crece moho. En meses, la pudricion de la madera se extiende. Una reparacion de $800 se convierte en un problema de $10,000." },
            { icon: AlertTriangle, title: "Deterioro Estructural", desc: "Las tablas de fascia se debilitan con la humedad. El sistema de canaletas pierde soporte. Con el tiempo, todo el borde del techo necesita reconstruccion, no solo el soffit." },
            { icon: TrendingUp, title: "Facturas de Energia Mas Altas", desc: "El soffit danado interrumpe la ventilacion del atico. Su aire acondicionado trabaja mas para enfriar la casa, y usted paga 10 a 20% mas en electricidad cada mes sin saber por que." },
        ],
        numbersTitle: "Los Numeros: Reparar Ahora vs. Reparar Despues",
        numbersIntro: "Lo que realmente cuesta retrasar la reparacion del soffit en Florida Central:",
        numbersRows: [
            { scenario: "Reparar soffit ahora", cost: "$800 – $2,500", timeline: "1–2 dias", note: "Problema resuelto. Casa protegida." },
            { scenario: "Esperar 6 meses", cost: "$2,000 – $5,000", timeline: "3–5 dias", note: "Comienza el dano por agua. Se necesita reemplazar el aislamiento." },
            { scenario: "Esperar 1+ ano", cost: "$5,000 – $15,000", timeline: "1–2 semanas", note: "Remediacion de moho + reparacion estructural + reemplazo del soffit." },
        ],
        numbersVerdict: "El reembolso promedio de impuestos en Orlando es $2,800. Eso cubre la mayoria de las reparaciones de soffit por completo, y le ahorra $5,000 a $12,000 en danos futuros.",
        roiTitle: "5 Formas en que un Soffit Nuevo Le Devuelve Su Dinero",
        roiItems: [
            { title: "Pasar la Inspeccion del Hogar", desc: "Los compradores e inspectores verifican el soffit buscando danos, entrada de plagas y manchas de agua. Soffit limpio = informe limpio = venta mas rapida." },
            { title: "Mejorar la Apariencia al Instante", desc: "Un soffit y fascia nuevos de aluminio transforman el aspecto de su linea del techo. Es la mejora exterior mas visible despues de la pintura, y dura 20 a 30 anos." },
            { title: "Reducir Riesgo de Seguro", desc: "Algunas companias de seguros senalan las casas con danos exteriores visibles. Un soffit y fascia limpios reducen la posibilidad de un aumento de prima o no renovacion." },
            { title: "Detener el Desperdicio de Energia", desc: "Los paneles de soffit ventilados regulan la temperatura del atico, reduciendo el esfuerzo del aire acondicionado y bajando su factura de electricidad mensual un 10 a 20%." },
            { title: "Preparacion para Huracanes", desc: "La temporada de huracanes comienza el 1 de junio. Un soffit seguro es la defensa numero 1 contra la lluvia impulsada por el viento que entra en su sistema de techo. No espere hasta mayo." },
        ],
        timingTitle: "Por Que Ahora Es el Momento Perfecto",
        timingReasons: [
            "Los reembolsos de impuestos llegan a las cuentas en marzo y abril: tiene el efectivo ahora",
            "La temporada de huracanes comienza el 1 de junio: adelantese",
            "El clima de primavera es ideal para trabajo exterior (aun no llueve a diario)",
            "Los contratistas tienen mas disponibilidad ahora que en mayo o junio",
            "Cada semana que espera, el dano se acumula (especialmente con la humedad de Florida)",
        ],
        faqTitle: "Preguntas Frecuentes",
        faqs: [
            { q: "Es buena inversion reparar soffit y fascia?", a: "Si. Es una de las mejoras del hogar con mayor retorno de inversion. Una reparacion de $800 a $2,500 previene $5,000 a $15,000 en danos por agua, plagas y problemas estructurales. Tambien mejora la apariencia y ayuda a pasar la inspeccion cuando sea hora de vender." },
            { q: "Un soffit nuevo aumenta el valor de la casa?", a: "Un soffit y fascia nuevos mejoran la apariencia y ayudan a pasar inspecciones. Los compradores e inspectores buscan especificamente danos en el soffit, entrada de plagas y manchas de agua. Las casas con acabados exteriores limpios se venden mas rapido y a mejor precio." },
            { q: "Cuanto cuesta reparar el soffit en Orlando?", a: "La mayoria de las reparaciones de soffit en Orlando cuestan entre $800 y $2,500 dependiendo del alcance del dano y el material. Un reemplazo completo en una casa de un piso cuesta entre $2,000 y $5,000. Muchos propietarios cubren todo el costo con su reembolso de impuestos." },
            { q: "Debo reparar el soffit antes de la temporada de huracanes?", a: "Definitivamente. Los paneles de soffit danados o faltantes son el punto de entrada mas comun para la lluvia impulsada por el viento durante los huracanes. Reparar el soffit antes de junio es la preparacion mas economica para proteger su sistema de techo." },
        ],
        ctaTitle: "Su Reembolso de Impuestos Puede Proteger Su Casa",
        ctaBody: "Estimado gratuito, sin presiones. Inspeccionamos su soffit, le mostramos exactamente que necesita atencion y le damos un precio claro, generalmente en menos de 30 minutos.",
        ctaBtn: "Obtener Su Estimado Gratuito",
        ctaPhone: "Llamar (407) 715-1790",
        ctaWhatsapp: "Escribenos por WhatsApp",
        ctaNote: "La mayoria de los proyectos se completan en 1 a 2 dias. Financiamiento disponible desde $19 al mes.",
    },
    pt: {
        breadcrumb: "Blog",
        category: "Investimento no Lar",
        readTime: "7 min de leitura · 10 de marco de 2026",
        authorLine: <>Por <span className="font-semibold text-gray-700">Eddy</span> · Especialista em Soffit e Fascia · <time dateTime="2026-03-10">10 de marco de 2026</time></>,
        h1a: "Use Sua Restituicao de Imposto",
        h1b: "para Proteger Sua Casa",
        intro: "A maioria das pessoas gasta a restituicao em coisas que perdem valor no momento em que compram. Mostramos por que soffit e fascia e a unica melhoria residencial que realmente retorna o seu dinheiro.",
        problemTitle: "O Que Acontece Quando Voce Ignora um Soffit Danificado",
        problemIntro: "Aquele pequeno vao ou painel solto embaixo do telhado nao e so feio: e um convite aberto para milhares de dolares em danos. Cada semana que voce espera, o problema se agrava:",
        problems: [
            { icon: Bug, title: "Invasao de Pragas", desc: "Ratos, esquilos, passaros e vespas entram pelos vaos do soffit e fazem ninhos no sotao. Roem a fiacaa eletrica (risco de incendio), destroem o isolamento e deixam fezes que criam riscos a saude." },
            { icon: Droplets, title: "Danos por Agua e Mofo", desc: "A chuva entra pelo soffit danificado, encharcando o isolamento do sotao e a estrutura do telhado. Em semanas, o mofo aparece. Em meses, o apodrecimento da madeira se espalha. Um reparo de $800 vira um problema de $10.000." },
            { icon: AlertTriangle, title: "Deterioracao Estrutural", desc: "As tabuas de fascia enfraquecem quando expostas a umidade. O sistema de calhas perde suporte. Com o tempo, toda a borda do telhado precisa ser reconstruida, nao apenas o soffit." },
            { icon: TrendingUp, title: "Contas de Energia Mais Altas", desc: "O soffit danificado atrapalha a ventilacao do sotao. O ar-condicionado trabalha mais para resfriar a casa, e voce paga 10 a 20% a mais na conta de luz todo mes sem saber por que." },
        ],
        numbersTitle: "As Contas: Reparar Agora vs. Reparar Depois",
        numbersIntro: "O que realmente custa adiar o reparo do soffit na Florida Central:",
        numbersRows: [
            { scenario: "Reparar soffit agora", cost: "$800 – $2.500", timeline: "1–2 dias", note: "Problema resolvido. Casa protegida." },
            { scenario: "Esperar 6 meses", cost: "$2.000 – $5.000", timeline: "3–5 dias", note: "Dano por agua comeca. Substituicao do isolamento necessaria." },
            { scenario: "Esperar 1+ ano", cost: "$5.000 – $15.000", timeline: "1–2 semanas", note: "Remediacao de mofo + reparo estrutural + substituicao do soffit." },
        ],
        numbersVerdict: "A restituicao media de imposto em Orlando e $2.800. Isso cobre a maioria dos reparos de soffit por completo, e evita $5.000 a $12.000 em danos futuros.",
        roiTitle: "5 Formas Como um Soffit Novo Retorna Seu Dinheiro",
        roiItems: [
            { title: "Passar na Inspecao do Imovel", desc: "Compradores e inspetores verificam o soffit buscando danos, entrada de pragas e manchas de agua. Soffit limpo = relatorio limpo = venda mais rapida." },
            { title: "Melhorar a Aparencia na Hora", desc: "Um soffit e fascia novos de aluminio transformam a aparencia da linha do telhado. E a melhoria exterior mais visivel depois da pintura, e dura 20 a 30 anos." },
            { title: "Reduzir Risco no Seguro", desc: "Algumas seguradoras sinalizam casas com danos exteriores visiveis. Um soffit e fascia limpos reduzem a chance de aumento de premio ou nao renovacao." },
            { title: "Parar o Desperdicio de Energia", desc: "Os paineis de soffit ventilados regulam a temperatura do sotao, reduzindo o esforco do ar-condicionado e diminuindo sua conta de luz mensal em 10 a 20%." },
            { title: "Preparacao para Furacoes", desc: "A temporada de furacoes comeca em 1 de junho. Um soffit seguro e a defesa numero 1 contra a chuva impulsionada pelo vento que entra no sistema do telhado. Nao espere ate maio." },
        ],
        timingTitle: "Por Que Agora E o Momento Perfeito",
        timingReasons: [
            "As restituicoes de imposto chegam nas contas em marco e abril: voce tem o dinheiro agora",
            "A temporada de furacoes comeca em 1 de junho: se antecipe",
            "O clima da primavera e ideal para trabalho externo (ainda nao chove todo dia)",
            "Os empreiteiros tem mais disponibilidade agora do que em maio e junho",
            "Cada semana que voce espera, o dano se acumula (especialmente com a umidade da Florida)",
        ],
        faqTitle: "Perguntas Frequentes",
        faqs: [
            { q: "Reparar soffit e fascia e um bom investimento?", a: "Sim. E uma das melhorias residenciais com maior retorno sobre o investimento. Um reparo de $800 a $2.500 previne $5.000 a $15.000 em danos por agua, pragas e problemas estruturais. Tambem melhora a aparencia e ajuda a passar na inspecao quando for hora de vender." },
            { q: "Um soffit novo aumenta o valor da casa?", a: "Um soffit e fascia novos melhoram a aparencia e ajudam a passar em inspecoes. Compradores e inspetores buscam especificamente danos no soffit, entrada de pragas e manchas de agua. Casas com acabamentos externos limpos vendem mais rapido e por melhor preco." },
            { q: "Quanto custa reparar o soffit em Orlando?", a: "A maioria dos reparos de soffit em Orlando custa entre $800 e $2.500, dependendo da extensao do dano e do material. Uma substituicao completa em uma casa terrea custa entre $2.000 e $5.000. Muitos proprietarios cobrem todo o custo com a restituicao de imposto." },
            { q: "Devo reparar o soffit antes da temporada de furacoes?", a: "Com certeza. Paineis de soffit danificados ou faltantes sao o ponto de entrada mais comum para chuva impulsionada pelo vento durante furacoes. Reparar o soffit antes de junho e a preparacao mais economica para proteger o sistema do telhado." },
        ],
        ctaTitle: "Sua Restituicao de Imposto Pode Proteger Sua Casa",
        ctaBody: "Orcamento gratuito, sem pressao. Inspecionamos seu soffit, mostramos exatamente o que precisa de atencao e damos um preco claro, geralmente em menos de 30 minutos.",
        ctaBtn: "Obter Seu Orcamento Gratuito",
        ctaPhone: "Ligar (407) 715-1790",
        ctaWhatsapp: "Fale Conosco pelo WhatsApp",
        ctaNote: "A maioria dos projetos e concluida em 1 a 2 dias. Financiamento disponivel a partir de $19 por mes.",
    },
};

export default async function TaxRefundSoffitPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const c = content[locale as keyof typeof content] ?? content.en;
    const blogHref = locale === "en" ? "/blog" : `/${locale}/blog`;
    const contactHref = locale === "en" ? "/contact" : `/${locale}/contact`;
    const calculatorHref = locale === "en" ? "/calculator" : `/${locale}/calculator`;

    const whatsappMessages: Record<string, string> = {
        en: "Hi, I saw your blog post about tax refund and soffit. I'd like a free estimate.",
        es: "Hola, vi su articulo sobre reembolso de impuestos y soffit. Me gustaria un presupuesto gratis.",
        pt: "Ola, vi o artigo sobre restituicao de imposto e soffit. Gostaria de um orcamento gratuito.",
    };
    const whatsappMsg = encodeURIComponent(whatsappMessages[locale] ?? whatsappMessages.en);
    const whatsappHref = `https://wa.me/14077151790?text=${whatsappMsg}`;

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildSchema(locale)) }} />
            <div className="flex flex-col min-h-screen">

                {/* ── HERO ──────────────────────────────────────────────── */}
                <section className="py-24 bg-gradient-to-br from-emerald-950 via-green-950 to-slate-900 text-white">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <AnimatedSection>
                            <div className="flex flex-wrap gap-3 items-center mb-6">
                                <Link href={blogHref} className="text-green-300 hover:text-white text-sm transition">&larr; {c.breadcrumb}</Link>
                                <span className="text-green-500">/</span>
                                <span className="text-xs font-bold bg-emerald-500/20 border border-emerald-400/30 text-emerald-200 px-3 py-1 rounded-full uppercase tracking-widest">{c.category}</span>
                                <span className="text-xs text-green-400">{c.readTime}</span>
                            </div>
                            <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
                                {c.h1a}<br />
                                <span className="bg-gradient-to-r from-emerald-300 to-green-300 bg-clip-text text-transparent">{c.h1b}</span>
                            </h1>
                            <p className="text-sm text-gray-400 mt-2 mb-4">{c.authorLine}</p>
                            <p className="text-xl text-green-100 max-w-3xl leading-relaxed">{c.intro}</p>
                        </AnimatedSection>
                    </div>
                </section>

                {/* ── THE PROBLEM ────────────────────────────────────────── */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <AnimatedSection>
                            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">{c.problemTitle}</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-10">{c.problemIntro}</p>
                        </AnimatedSection>
                        <div className="grid md:grid-cols-2 gap-6">
                            {c.problems.map((p, i) => (
                                <AnimatedSection key={i} delay={i * 80} from={i % 2 === 0 ? "left" : "right"}>
                                    <div className="bg-red-50 border border-red-100 rounded-2xl p-6 h-full">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                                                <p.icon className="w-5 h-5 text-red-600" />
                                            </div>
                                            <h3 className="font-extrabold text-gray-900">{p.title}</h3>
                                        </div>
                                        <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── THE NUMBERS ────────────────────────────────────────── */}
                <section className="py-16 bg-gray-50 border-y border-gray-100">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <AnimatedSection>
                            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">{c.numbersTitle}</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">{c.numbersIntro}</p>
                        </AnimatedSection>
                        <AnimatedSection delay={80}>
                            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
                                <table className="w-full bg-white text-sm">
                                    <thead>
                                        <tr className="border-b border-gray-200 bg-gray-50">
                                            <th className="text-left p-4 font-bold text-gray-500 uppercase text-xs tracking-wide">Scenario</th>
                                            <th className="text-center p-4 font-bold text-gray-500 uppercase text-xs tracking-wide">Cost</th>
                                            <th className="text-center p-4 font-bold text-gray-500 uppercase text-xs tracking-wide">Timeline</th>
                                            <th className="text-left p-4 font-bold text-gray-500 uppercase text-xs tracking-wide">Result</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {c.numbersRows.map((row, i) => (
                                            <tr key={i} className={i === 0 ? "bg-green-50" : i === 2 ? "bg-red-50" : ""}>
                                                <td className="p-4 font-semibold text-gray-700">{row.scenario}</td>
                                                <td className={`p-4 text-center font-bold ${i === 0 ? "text-green-700" : i === 2 ? "text-red-700" : "text-amber-700"}`}>{row.cost}</td>
                                                <td className="p-4 text-center text-gray-600">{row.timeline}</td>
                                                <td className="p-4 text-gray-600 text-xs">{row.note}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection delay={160}>
                            <div className="bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-6 mt-8 text-center">
                                <DollarSign className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
                                <p className="text-gray-800 font-bold text-lg leading-relaxed">{c.numbersVerdict}</p>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* ── ROI ────────────────────────────────────────────────── */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <AnimatedSection>
                            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-10">{c.roiTitle}</h2>
                        </AnimatedSection>
                        <div className="space-y-4">
                            {c.roiItems.map((item, i) => (
                                <AnimatedSection key={i} delay={i * 60} from="bottom">
                                    <div className="flex items-start gap-5 bg-blue-50 border border-blue-100 rounded-2xl p-6">
                                        <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                                            <span className="text-blue-700 font-black text-lg">{i + 1}</span>
                                        </div>
                                        <div>
                                            <h3 className="font-extrabold text-gray-900 mb-1">{item.title}</h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── TIMING ────────────────────────────────────────────── */}
                <section className="py-16 bg-amber-50 border-y border-amber-100">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <AnimatedSection>
                            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-8">{c.timingTitle}</h2>
                        </AnimatedSection>
                        <AnimatedSection delay={80}>
                            <div className="space-y-3">
                                {c.timingReasons.map((reason, i) => (
                                    <div key={i} className="flex items-start gap-3 bg-white rounded-xl border border-amber-200 p-4">
                                        <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                                        <p className="text-gray-700 text-sm font-medium">{reason}</p>
                                    </div>
                                ))}
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* ── FAQ ────────────────────────────────────────────────── */}
                <section className="py-16 bg-slate-50 border-t border-gray-100">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <AnimatedSection>
                            <h2 className="text-2xl font-extrabold text-gray-900 mb-8">{c.faqTitle}</h2>
                        </AnimatedSection>
                        <div className="space-y-4">
                            {c.faqs.map((faq, i) => (
                                <AnimatedSection key={i} delay={i * 60} from="bottom">
                                    <div className="bg-white rounded-2xl border border-gray-200 p-6">
                                        <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── RELATED SERVICES ─────────────────────────────────── */}
                <RelatedServices serviceKeys={["calculator", "repairs", "remove-replace"]} locale={locale} />

                {/* ── CTA ────────────────────────────────────────────────── */}
                <section className="py-20 bg-gradient-to-br from-emerald-700 to-green-900 text-white text-center">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <AnimatedSection>
                            <Home className="w-12 h-12 text-emerald-300 mx-auto mb-4" />
                            <h2 className="text-3xl font-extrabold mb-4">{c.ctaTitle}</h2>
                            <p className="text-green-200 text-lg mb-8">{c.ctaBody}</p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href={contactHref} className="inline-flex items-center justify-center gap-2 bg-white text-green-900 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition shadow-xl">
                                    {c.ctaBtn} <ArrowRight className="w-5 h-5" />
                                </Link>
                                <a href="tel:4077151790" className="inline-flex items-center justify-center gap-2 bg-white/10 border-2 border-white/40 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition">
                                    <Phone className="w-5 h-5" /> {c.ctaPhone}
                                </a>
                            </div>
                            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 text-green-300 hover:text-white mt-4 font-semibold transition">
                                <Shield className="w-4 h-4" /> {c.ctaWhatsapp}
                            </a>
                            <p className="text-green-400 text-sm mt-6">{c.ctaNote}</p>
                            <Link href={calculatorHref} className="inline-flex items-center gap-2 text-green-300 hover:text-white mt-3 text-sm font-medium transition underline underline-offset-4">
                                <DollarSign className="w-4 h-4" /> {locale === "es" ? "Calcule su proyecto ahora" : locale === "pt" ? "Calcule seu projeto agora" : "Calculate your project now"} &rarr;
                            </Link>
                        </AnimatedSection>
                    </div>
                </section>
            </div>
        </>
    );
}
