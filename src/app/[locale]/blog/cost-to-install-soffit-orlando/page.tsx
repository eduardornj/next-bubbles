import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone, DollarSign, Ruler, Home, Building2 } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { RelatedServices } from "@/components/ui/RelatedServices";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const slug = "cost-to-install-soffit-orlando";
    const url = locale === "en" ? `https://bubblesenterprise.com/blog/${slug}` : `https://bubblesenterprise.com/${locale}/blog/${slug}`;

    const titles: Record<string, string> = {
        en: "How Much Does Soffit & Fascia Cost in Orlando? | 2026 Pricing Guide",
        es: "¿Cuánto Cuesta el Soffit y Fascia en Orlando? | Guía de Precios 2026",
        pt: "Quanto Custa Soffit e Fascia em Orlando? | Guia de Preços 2026",
    };
    const descriptions: Record<string, string> = {
        en: "Real pricing for soffit and fascia installation in Orlando. Cost per linear foot for aluminum and vinyl, broken down by overhang size, job type, and number of stories.",
        es: "Precios reales de instalación de soffit y fascia en Orlando. Costo por pie lineal para aluminio y vinilo, desglosado por tamaño de alero, tipo de trabajo y número de pisos.",
        pt: "Preços reais de instalação de soffit e fascia em Orlando. Custo por pé linear para alumínio e vinil, dividido por tamanho do beiral, tipo de serviço e número de andares.",
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
    const blogUrl = locale === "en" ? "https://bubblesenterprise.com/blog/cost-to-install-soffit-orlando" : `https://bubblesenterprise.com/${locale}/blog/cost-to-install-soffit-orlando`;
    return {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "@id": "https://bubblesenterprise.com/blog/cost-to-install-soffit-orlando#article",
                headline: "How Much Does Soffit & Fascia Installation Cost in Orlando?",
                description: "Real pricing for soffit and fascia installation in Orlando — cost per linear foot for aluminum and vinyl, broken down by overhang size, job type, and number of stories.",
                url: blogUrl,
                datePublished: "2026-03-18",
                dateModified: "2026-03-18",
                author: { "@type": "Person", name: "Bubbles Enterprise Team", jobTitle: "Licensed Soffit & Fascia Contractors", url: "https://bubblesenterprise.com/about", worksFor: { "@id": "https://bubblesenterprise.com/#business" } },
                publisher: { "@id": "https://bubblesenterprise.com/#business" },
                articleSection: "Pricing",
                keywords: "soffit cost orlando, fascia installation cost, soffit price per linear foot, soffit and fascia estimate orlando",
                inLanguage: locale,
            },
            {
                "@type": "FAQPage",
                "@id": "https://bubblesenterprise.com/blog/cost-to-install-soffit-orlando#faq",
                inLanguage: locale,
                mainEntity: [
                    {
                        "@type": "Question",
                        name: "How much does it cost to replace soffit on a house?",
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: "Most soffit replacement projects in Orlando cost between $1,500 and $4,500 for a typical single-story home. The exact price depends on material choice (aluminum or vinyl), overhang size, whether it's new installation or remove-and-replace, and the number of stories. A small repair of 80 linear feet starts around $960, while a full 2-story home with 300 linear feet can reach $4,350 or more.",
                        },
                    },
                    {
                        "@type": "Question",
                        name: "Is aluminum or vinyl soffit cheaper?",
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: "Vinyl is slightly cheaper per linear foot. For example, on a remove-and-replace job with a 12-inch overhang on a single-story home, vinyl costs $11.50/LF compared to aluminum at $12/LF. On a typical 200 LF project, that's a difference of about $100. However, aluminum lasts longer and requires less maintenance, making it the better long-term value for most Florida homes.",
                        },
                    },
                    {
                        "@type": "Question",
                        name: "Does insurance cover soffit repair?",
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: "Homeowner's insurance typically covers soffit damage caused by storms, hurricanes, fallen trees, or other sudden events. It usually does not cover damage from normal wear, lack of maintenance, or pest intrusion. If your soffit was damaged during a storm, file a claim with your insurance company and request a free estimate from a licensed contractor to support your claim.",
                        },
                    },
                    {
                        "@type": "Question",
                        name: "How long does soffit installation take?",
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: "Most soffit installations on a single-story home take 1 to 2 days. A small repair (under 100 linear feet) can be completed in a few hours. A full remove-and-replace on a 2-story home may take 2 to 3 days depending on overhang size and accessibility.",
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
        category: "Pricing",
        readTime: "7 min read · March 18, 2026",
        authorLine: <>By <span className="font-semibold text-gray-700">Eddy</span> · Soffit &amp; Fascia Specialist · <time dateTime="2026-03-18">March 18, 2026</time></>,
        h1a: "How Much Does Soffit & Fascia",
        h1b: "Cost in Orlando?",
        intro: "Real prices from real projects. No ranges pulled from national averages. Here's exactly what soffit and fascia installation costs in the Orlando area, broken down by material, overhang size, and job type.",
        quickTitle: "The Quick Answer",
        quickBody: <>Most soffit projects in Orlando cost <strong>$1,500 to $4,500</strong> for a typical single-story home. The exact price depends on material, overhang size, and whether it's new installation or remove &amp; replace.</>,
        quickNote: "These are installed prices, including labor and materials. We don't charge hidden fees for permits, cleanup, or disposal.",
        pricingIntro: "We publish our pricing because we believe homeowners deserve transparency. Below are the actual per-linear-foot rates we charge in the Orlando metro area:",
        aluminumTableTitle: "Aluminum Soffit Pricing",
        vinylTableTitle: "Vinyl Soffit Pricing",
        tableHeaders: { overhang: "Overhang", newConst: "New Construction", rr1: "R&R 1-Story", rr2: "R&R 2-Story" },
        tableNote: "R&R = Remove & Replace. Prices as of March 2026. LF = Linear Foot.",
        factorsTitle: "What Affects the Price",
        factors: [
            { icon: "material", title: "Material", desc: "Aluminum costs slightly more than vinyl per linear foot, but lasts longer and handles Florida's heat better. Most Orlando homeowners choose aluminum." },
            { icon: "ruler", title: "Overhang Size", desc: "The wider your overhang (the distance from the wall to the fascia board), the more material is needed. We price in three tiers: up to 12 inches, 13-24 inches, and 25-36 inches." },
            { icon: "home", title: "Job Type", desc: "New construction (installing on bare wood) costs less than remove-and-replace (tearing off old soffit first). R&R requires more labor for removal and disposal." },
            { icon: "building", title: "Number of Stories", desc: "Two-story homes cost $1-$1.50 more per linear foot than single-story. The added cost covers scaffolding, safety equipment, and slower work at height." },
        ],
        examplesTitle: "Real Project Examples",
        examplesSubtitle: "Here are three real scenarios based on projects we've completed in Orlando:",
        examples: [
            { label: "Small Repair", specs: '80 LF · 12" overhang · R&R 1-story · Aluminum', total: "$960", details: "80 LF x $12/LF = $960. A section of soffit damaged by a fallen branch. Completed in half a day." },
            { label: "Typical Home", specs: '200 LF · 12" overhang · R&R 1-story · Aluminum', total: "$2,400", details: "200 LF x $12/LF = $2,400. Full perimeter soffit replacement on a 3-bedroom single-story home in Kissimmee." },
            { label: "Large 2-Story", specs: '300 LF · 18" overhang · R&R 2-story · Aluminum', total: "$4,350", details: "300 LF x $14.50/LF = $4,350. Complete soffit replacement on a 2-story home in Winter Garden with wide overhangs." },
        ],
        calcTitle: "Want Your Exact Price?",
        calcBody: "Use our free soffit cost calculator to get an instant estimate based on your home's measurements.",
        calcBtn: "Open Cost Calculator",
        faqTitle: "Common Questions",
        faqs: [
            { q: "How much does it cost to replace soffit on a house?", a: "For a typical single-story home in Orlando, soffit replacement costs $1,500 to $4,500 installed. The final number depends on how many linear feet your home has, the overhang width, whether you're going with aluminum or vinyl, and if the old soffit needs to be removed first." },
            { q: "Is aluminum or vinyl soffit cheaper?", a: "Vinyl is slightly cheaper per linear foot. On a 200 LF project with 12-inch overhangs (R&R, 1-story), vinyl would cost $2,300 vs. aluminum at $2,400. That's only a $100 difference. Aluminum lasts longer and handles Florida's climate better, so most homeowners choose it." },
            { q: "Does insurance cover soffit repair?", a: "If the damage was caused by a storm, hurricane, fallen tree, or other sudden event, your homeowner's insurance typically covers it. Normal wear and tear, pest damage, and neglected maintenance are usually not covered. We can provide a detailed estimate to support your insurance claim." },
            { q: "How long does soffit installation take?", a: "A small repair (under 100 LF) takes a few hours. A full single-story home takes 1 to 2 days. A complete 2-story remove-and-replace can take 2 to 3 days depending on overhang size and how easy it is to access the soffit." },
        ],
        ctaTitle: "Ready for a Free Estimate?",
        ctaBody: "We'll measure your home, discuss material options, and give you an exact price. No pressure, no hidden fees.",
        ctaBtn: "Get a Free Estimate",
        ctaPhone: "Call (407) 715-1790",
    },
    es: {
        breadcrumb: "Blog",
        category: "Precios",
        readTime: "7 min de lectura · 18 de marzo de 2026",
        authorLine: <>Por <span className="font-semibold text-gray-700">Eddy</span> · Especialista en Soffit y Fascia · <time dateTime="2026-03-18">18 de marzo de 2026</time></>,
        h1a: "¿Cuánto Cuesta el Soffit y Fascia",
        h1b: "en Orlando?",
        intro: "Precios reales de proyectos reales. Sin rangos sacados de promedios nacionales. Aquí tiene exactamente lo que cuesta la instalación de soffit y fascia en el area de Orlando, desglosado por material, tamaño del alero y tipo de trabajo.",
        quickTitle: "La Respuesta Rápida",
        quickBody: <>La mayoría de los proyectos de soffit en Orlando cuestan entre <strong>$1,500 y $4,500</strong> para una casa típica de un piso. El precio exacto depende del material, el tamaño del alero y si es una instalación nueva o reemplazo.</>,
        quickNote: "Estos son precios instalados, incluyendo mano de obra y materiales. No cobramos cargos ocultos por permisos, limpieza o disposición.",
        pricingIntro: "Publicamos nuestros precios porque creemos que usted merece transparencia. A continuación están las tarifas reales por pie lineal que cobramos en el area metropolitana de Orlando:",
        aluminumTableTitle: "Precios de Soffit de Aluminio",
        vinylTableTitle: "Precios de Soffit de Vinilo",
        tableHeaders: { overhang: "Alero", newConst: "Construcción Nueva", rr1: "R&R 1 Piso", rr2: "R&R 2 Pisos" },
        tableNote: "R&R = Remover y Reemplazar. Precios a marzo de 2026. LF = Pie Lineal.",
        factorsTitle: "¿Qué Afecta el Precio?",
        factors: [
            { icon: "material", title: "Material", desc: "El aluminio cuesta un poco más que el vinilo por pie lineal, pero dura más y maneja mejor el calor de Florida. La mayoría de los propietarios en Orlando eligen aluminio." },
            { icon: "ruler", title: "Tamaño del Alero", desc: "Entre más ancho sea su alero (la distancia de la pared a la tabla de fascia), más material se necesita. Cotizamos en tres niveles: hasta 12 pulgadas, 13-24 pulgadas y 25-36 pulgadas." },
            { icon: "home", title: "Tipo de Trabajo", desc: "La construcción nueva (instalar sobre madera) cuesta menos que remover y reemplazar (quitar el soffit viejo primero). R&R requiere más mano de obra para remoción y disposición." },
            { icon: "building", title: "Número de Pisos", desc: "Las casas de dos pisos cuestan $1-$1.50 más por pie lineal que las de un piso. El costo adicional cubre andamios, equipo de seguridad y trabajo más lento en altura." },
        ],
        examplesTitle: "Ejemplos de Proyectos Reales",
        examplesSubtitle: "Aquí hay tres escenarios reales basados en proyectos que hemos completado en Orlando:",
        examples: [
            { label: "Reparación Pequeña", specs: '80 LF · alero de 12" · R&R 1 piso · Aluminio', total: "$960", details: "80 LF x $12/LF = $960. Una sección de soffit dañada por una rama caída. Completado en medio día." },
            { label: "Casa Típica", specs: '200 LF · alero de 12" · R&R 1 piso · Aluminio', total: "$2,400", details: "200 LF x $12/LF = $2,400. Reemplazo completo del soffit en una casa de 3 habitaciones de un piso en Kissimmee." },
            { label: "Casa Grande de 2 Pisos", specs: '300 LF · alero de 18" · R&R 2 pisos · Aluminio', total: "$4,350", details: "300 LF x $14.50/LF = $4,350. Reemplazo completo del soffit en una casa de 2 pisos en Winter Garden con aleros anchos." },
        ],
        calcTitle: "¿Quiere Saber Su Precio Exacto?",
        calcBody: "Use nuestra calculadora gratuita de costos de soffit para obtener un presupuesto instantáneo basado en las medidas de su hogar.",
        calcBtn: "Abrir Calculadora de Costos",
        faqTitle: "Preguntas Frecuentes",
        faqs: [
            { q: "¿Cuánto cuesta reemplazar el soffit de una casa?", a: "Para una casa típica de un piso en Orlando, el reemplazo de soffit cuesta entre $1,500 y $4,500 instalado. El número final depende de cuántos pies lineales tiene su casa, el ancho del alero, si elige aluminio o vinilo, y si hay que remover el soffit viejo primero." },
            { q: "¿Es más barato el soffit de aluminio o vinilo?", a: "El vinilo es un poco más barato por pie lineal. En un proyecto de 200 LF con aleros de 12 pulgadas (R&R, 1 piso), el vinilo costaría $2,300 vs. aluminio a $2,400. Eso es solo $100 de diferencia. El aluminio dura más y maneja mejor el clima de Florida, por lo que la mayoría de los propietarios lo eligen." },
            { q: "¿El seguro cubre la reparación del soffit?", a: "Si el daño fue causado por una tormenta, huracán, árbol caído u otro evento repentino, su seguro de propietario generalmente lo cubre. El desgaste normal, daño por plagas y mantenimiento descuidado generalmente no están cubiertos. Podemos proporcionar un presupuesto detallado para respaldar su reclamo de seguro." },
            { q: "¿Cuánto tiempo tarda la instalación del soffit?", a: "Una reparación pequeña (menos de 100 LF) toma unas horas. Una casa completa de un piso toma 1 a 2 días. Un reemplazo completo de 2 pisos puede tomar 2 a 3 días dependiendo del tamaño del alero y la accesibilidad." },
        ],
        ctaTitle: "¿Listo Para un Presupuesto Gratuito?",
        ctaBody: "Medimos su casa, discutimos las opciones de material y le damos un precio exacto. Sin presión, sin cargos ocultos.",
        ctaBtn: "Obtener Presupuesto Gratuito",
        ctaPhone: "Llamar (407) 715-1790",
    },
    pt: {
        breadcrumb: "Blog",
        category: "Preços",
        readTime: "7 min de leitura · 18 de março de 2026",
        authorLine: <>Por <span className="font-semibold text-gray-700">Eddy</span> · Especialista em Soffit e Fascia · <time dateTime="2026-03-18">18 de março de 2026</time></>,
        h1a: "Quanto Custa Soffit e Fascia",
        h1b: "em Orlando?",
        intro: "Preços reais de projetos reais. Sem faixas tiradas de médias nacionais. Aqui está exatamente o que custa a instalação de soffit e fascia na região de Orlando, dividido por material, tamanho do beiral e tipo de serviço.",
        quickTitle: "A Resposta Rápida",
        quickBody: <>A maioria dos projetos de soffit em Orlando custa entre <strong>$1,500 e $4,500</strong> para uma casa típica de um andar. O preço exato depende do material, tamanho do beiral e se é uma instalação nova ou remoção e substituição.</>,
        quickNote: "Esses são preços instalados, incluindo mão de obra e materiais. Nós não cobramos taxas escondidas para licenças, limpeza ou descarte.",
        pricingIntro: "Nós publicamos nossos preços porque acreditamos que você merece transparência. Abaixo estão os valores reais por pé linear que cobramos na região metropolitana de Orlando:",
        aluminumTableTitle: "Preços de Soffit de Alumínio",
        vinylTableTitle: "Preços de Soffit de Vinil",
        tableHeaders: { overhang: "Beiral", newConst: "Construção Nova", rr1: "R&R 1 Andar", rr2: "R&R 2 Andares" },
        tableNote: "R&R = Remoção e Substituição. Preços de março de 2026. LF = Pé Linear.",
        factorsTitle: "O Que Afeta o Preço",
        factors: [
            { icon: "material", title: "Material", desc: "Alumínio custa um pouco mais que vinil por pé linear, mas dura mais e lida melhor com o calor da Flórida. A maioria dos donos de casa em Orlando escolhe alumínio." },
            { icon: "ruler", title: "Tamanho do Beiral", desc: "Quanto mais largo o beiral (a distância da parede até a tábua da fascia), mais material é necessário. Nós dividimos em três faixas: até 12 polegadas, 13-24 polegadas e 25-36 polegadas." },
            { icon: "home", title: "Tipo de Serviço", desc: "Construção nova (instalar em madeira exposta) custa menos do que remoção e substituição (tirar o soffit antigo primeiro). R&R exige mais trabalho para remoção e descarte." },
            { icon: "building", title: "Número de Andares", desc: "Casas de dois andares custam $1-$1.50 a mais por pé linear do que casas de um andar. O custo extra cobre andaime, equipamento de segurança e trabalho mais lento em altura." },
        ],
        examplesTitle: "Exemplos de Projetos Reais",
        examplesSubtitle: "Aqui estão três cenários reais baseados em projetos que nós completamos em Orlando:",
        examples: [
            { label: "Reparo Pequeno", specs: '80 LF · beiral de 12" · R&R 1 andar · Alumínio', total: "$960", details: "80 LF x $12/LF = $960. Uma seção de soffit danificada por um galho de árvore. Completado em meio dia." },
            { label: "Casa Típica", specs: '200 LF · beiral de 12" · R&R 1 andar · Alumínio', total: "$2,400", details: "200 LF x $12/LF = $2,400. Substituição completa do soffit em uma casa de 3 quartos de um andar em Kissimmee." },
            { label: "Casa Grande de 2 Andares", specs: '300 LF · beiral de 18" · R&R 2 andares · Alumínio', total: "$4,350", details: "300 LF x $14.50/LF = $4,350. Substituição completa do soffit em uma casa de 2 andares em Winter Garden com beirais largos." },
        ],
        calcTitle: "Quer Saber o Preço Exato?",
        calcBody: "Use nossa calculadora grátis de custo de soffit para ter um orçamento instantâneo baseado nas medidas da sua casa.",
        calcBtn: "Abrir Calculadora de Custos",
        faqTitle: "Perguntas Frequentes",
        faqs: [
            { q: "Quanto custa trocar o soffit de uma casa?", a: "Para uma casa típica de um andar em Orlando, a substituição do soffit custa entre $1,500 e $4,500 instalado. O valor final depende de quantos pés lineares a sua casa tem, a largura do beiral, se você vai de alumínio ou vinil, e se o soffit antigo precisa ser removido primeiro." },
            { q: "Alumínio ou vinil, qual é mais barato?", a: "Vinil é um pouco mais barato por pé linear. Em um projeto de 200 LF com beirais de 12 polegadas (R&R, 1 andar), vinil custaria $2,300 contra alumínio a $2,400. Isso é só $100 de diferença. Alumínio dura mais e lida melhor com o clima da Flórida, então a maioria dos donos de casa escolhe ele." },
            { q: "O seguro cobre reparo de soffit?", a: "Se o dano foi causado por tempestade, furacão, árvore caída ou outro evento repentino, o seguro da casa normalmente cobre. Desgaste normal, dano por pragas e falta de manutenção geralmente não são cobertos. Nós podemos fornecer um orçamento detalhado para apoiar sua reivindicação com o seguro." },
            { q: "Quanto tempo leva a instalação do soffit?", a: "Um reparo pequeno (menos de 100 LF) leva algumas horas. Uma casa completa de um andar leva 1 a 2 dias. Uma substituição completa em casa de 2 andares pode levar 2 a 3 dias dependendo do tamanho do beiral e da acessibilidade." },
        ],
        ctaTitle: "Pronto Para um Orçamento Grátis?",
        ctaBody: "Nós medimos a sua casa, conversamos sobre as opções de material e damos um preço exato. Sem pressão, sem taxa escondida.",
        ctaBtn: "Pedir Orçamento Grátis",
        ctaPhone: "Ligar (407) 715-1790",
    },
};

const aluminumPricing = [
    { overhang: '≤12"', newConst: "$10/LF", rr1: "$12/LF", rr2: "$13/LF" },
    { overhang: '13-24"', newConst: "$11.50/LF", rr1: "$13.50/LF", rr2: "$14.50/LF" },
    { overhang: '25-36"', newConst: "$14/LF", rr1: "$16/LF", rr2: "$17/LF" },
];

const vinylPricing = [
    { overhang: '≤12"', newConst: "$9.50/LF", rr1: "$11.50/LF", rr2: "$12.50/LF" },
    { overhang: '13-24"', newConst: "$11/LF", rr1: "$13/LF", rr2: "$14/LF" },
    { overhang: '25-36"', newConst: "$13.50/LF", rr1: "$15.50/LF", rr2: "$16.50/LF" },
];

function FactorIcon({ icon }: { icon: string }) {
    const cls = "w-6 h-6 text-emerald-600";
    switch (icon) {
        case "material": return <DollarSign className={cls} />;
        case "ruler": return <Ruler className={cls} />;
        case "home": return <Home className={cls} />;
        case "building": return <Building2 className={cls} />;
        default: return <DollarSign className={cls} />;
    }
}

export default async function CostToInstallSoffitPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const c = content[locale as keyof typeof content] ?? content.en;
    const blogHref = locale === "en" ? "/blog" : `/${locale}/blog`;
    const contactHref = locale === "en" ? "/contact" : `/${locale}/contact`;
    const calcHref = locale === "en" ? "/calculator" : `/${locale}/calculator`;

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildSchema(locale)) }} />
            <div className="flex flex-col min-h-screen">

                {/* HERO */}
                <section className="py-24 bg-gradient-to-br from-slate-900 to-emerald-950 text-white">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <AnimatedSection>
                            <div className="flex flex-wrap gap-3 items-center mb-6">
                                <Link href={blogHref} className="text-emerald-300 hover:text-white text-sm transition">&larr; {c.breadcrumb}</Link>
                                <span className="text-emerald-500">/</span>
                                <span className="text-xs font-bold bg-emerald-500/20 border border-emerald-400/30 text-emerald-200 px-3 py-1 rounded-full uppercase tracking-widest">{c.category}</span>
                                <span className="text-xs text-emerald-400">{c.readTime}</span>
                            </div>
                            <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
                                {c.h1a}<br />
                                <span className="bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">{c.h1b}</span>
                            </h1>
                            <p className="text-sm text-gray-400 mt-2 mb-4">{c.authorLine}</p>
                            <p className="text-xl text-emerald-100 max-w-3xl leading-relaxed">{c.intro}</p>
                        </AnimatedSection>
                    </div>
                </section>

                {/* QUICK ANSWER */}
                <section className="py-14 bg-white">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <AnimatedSection>
                            <div className="bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-8 mb-12">
                                <h2 className="text-xl font-extrabold text-gray-900 mb-3">{c.quickTitle}</h2>
                                <p className="text-gray-700 leading-relaxed text-lg">{c.quickBody}</p>
                                <p className="text-gray-600 mt-4 text-sm leading-relaxed">{c.quickNote}</p>
                            </div>
                            <p className="text-gray-700 text-lg leading-relaxed mb-6">{c.pricingIntro}</p>
                        </AnimatedSection>
                    </div>
                </section>

                {/* PRICE TABLES */}
                <section className="py-8 pb-16 bg-gray-50 border-y border-gray-100">
                    <div className="container mx-auto px-4 max-w-4xl">
                        {/* Aluminum Table */}
                        <AnimatedSection>
                            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6">{c.aluminumTableTitle}</h2>
                        </AnimatedSection>
                        <AnimatedSection delay={80}>
                            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm mb-10">
                                <table className="w-full bg-white text-sm">
                                    <thead>
                                        <tr className="border-b border-gray-200 bg-emerald-50">
                                            <th className="text-left p-4 font-bold text-gray-500 uppercase text-xs tracking-wide">{c.tableHeaders.overhang}</th>
                                            <th className="text-center p-4 font-extrabold text-emerald-700 uppercase text-xs tracking-wide">{c.tableHeaders.newConst}</th>
                                            <th className="text-center p-4 font-extrabold text-emerald-700 uppercase text-xs tracking-wide">{c.tableHeaders.rr1}</th>
                                            <th className="text-center p-4 font-extrabold text-emerald-700 uppercase text-xs tracking-wide">{c.tableHeaders.rr2}</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {aluminumPricing.map((row, i) => (
                                            <tr key={i} className="hover:bg-gray-50 transition-colors">
                                                <td className="p-4 font-semibold text-gray-700">{row.overhang}</td>
                                                <td className="p-4 text-center text-gray-700 font-medium">{row.newConst}</td>
                                                <td className="p-4 text-center text-gray-700 font-medium">{row.rr1}</td>
                                                <td className="p-4 text-center text-gray-700 font-medium">{row.rr2}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </AnimatedSection>

                        {/* Vinyl Table */}
                        <AnimatedSection>
                            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6">{c.vinylTableTitle}</h2>
                        </AnimatedSection>
                        <AnimatedSection delay={80}>
                            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
                                <table className="w-full bg-white text-sm">
                                    <thead>
                                        <tr className="border-b border-gray-200 bg-teal-50">
                                            <th className="text-left p-4 font-bold text-gray-500 uppercase text-xs tracking-wide">{c.tableHeaders.overhang}</th>
                                            <th className="text-center p-4 font-extrabold text-teal-700 uppercase text-xs tracking-wide">{c.tableHeaders.newConst}</th>
                                            <th className="text-center p-4 font-extrabold text-teal-700 uppercase text-xs tracking-wide">{c.tableHeaders.rr1}</th>
                                            <th className="text-center p-4 font-extrabold text-teal-700 uppercase text-xs tracking-wide">{c.tableHeaders.rr2}</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {vinylPricing.map((row, i) => (
                                            <tr key={i} className="hover:bg-gray-50 transition-colors">
                                                <td className="p-4 font-semibold text-gray-700">{row.overhang}</td>
                                                <td className="p-4 text-center text-gray-700 font-medium">{row.newConst}</td>
                                                <td className="p-4 text-center text-gray-700 font-medium">{row.rr1}</td>
                                                <td className="p-4 text-center text-gray-700 font-medium">{row.rr2}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-xs text-gray-400 mt-3 text-center">{c.tableNote}</p>
                        </AnimatedSection>
                    </div>
                </section>

                {/* WHAT AFFECTS THE PRICE */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <AnimatedSection>
                            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-8">{c.factorsTitle}</h2>
                        </AnimatedSection>
                        <div className="grid sm:grid-cols-2 gap-6">
                            {c.factors.map((factor, i) => (
                                <AnimatedSection key={i} delay={i * 80}>
                                    <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6 h-full">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                                                <FactorIcon icon={factor.icon} />
                                            </div>
                                            <h3 className="text-lg font-extrabold text-gray-900">{factor.title}</h3>
                                        </div>
                                        <p className="text-gray-600 text-sm leading-relaxed">{factor.desc}</p>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>

                {/* REAL EXAMPLES */}
                <section className="py-16 bg-gray-50 border-y border-gray-100">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <AnimatedSection>
                            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">{c.examplesTitle}</h2>
                            <p className="text-gray-600 mb-8">{c.examplesSubtitle}</p>
                        </AnimatedSection>
                        <div className="grid md:grid-cols-3 gap-6">
                            {c.examples.map((ex, i) => (
                                <AnimatedSection key={i} delay={i * 100}>
                                    <div className="bg-white rounded-2xl border border-gray-200 p-6 h-full flex flex-col">
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="text-xs font-bold bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full uppercase tracking-wide">{ex.label}</span>
                                            <span className="text-2xl font-extrabold text-emerald-700">{ex.total}</span>
                                        </div>
                                        <p className="text-xs text-gray-500 font-mono mb-3">{ex.specs}</p>
                                        <p className="text-sm text-gray-600 leading-relaxed mt-auto">{ex.details}</p>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA CALCULATOR */}
                <section className="py-14 bg-emerald-50 border-b border-emerald-100">
                    <div className="container mx-auto px-4 max-w-3xl text-center">
                        <AnimatedSection>
                            <h2 className="text-2xl font-extrabold text-gray-900 mb-3">{c.calcTitle}</h2>
                            <p className="text-gray-600 mb-6">{c.calcBody}</p>
                            <Link href={calcHref} className="inline-flex items-center justify-center gap-2 bg-emerald-700 text-white px-8 py-4 rounded-full font-bold hover:bg-emerald-800 transition shadow-lg">
                                {c.calcBtn} <ArrowRight className="w-5 h-5" />
                            </Link>
                        </AnimatedSection>
                    </div>
                </section>

                {/* FAQ */}
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

                {/* RELATED SERVICES */}
                <RelatedServices serviceKeys={["calculator", "materials", "repairs"]} locale={locale} />

                {/* CTA FINAL */}
                <section className="py-20 bg-gradient-to-br from-emerald-800 to-teal-900 text-white text-center">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <AnimatedSection>
                            <h2 className="text-3xl font-extrabold mb-4">{c.ctaTitle}</h2>
                            <p className="text-emerald-200 text-lg mb-8">{c.ctaBody}</p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href={contactHref} className="inline-flex items-center justify-center gap-2 bg-white text-emerald-900 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition shadow-xl">
                                    {c.ctaBtn} <ArrowRight className="w-5 h-5" />
                                </Link>
                                <a href="tel:4077151790" className="inline-flex items-center justify-center gap-2 bg-white/10 border-2 border-white/40 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition">
                                    <Phone className="w-5 h-5" /> {c.ctaPhone}
                                </a>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>
            </div>
        </>
    );
}
