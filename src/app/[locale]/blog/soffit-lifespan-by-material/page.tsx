import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { RelatedServices } from "@/components/ui/RelatedServices";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const slug = "soffit-lifespan-by-material";
    const url = locale === "en" ? `https://bubblesenterprise.com/blog/${slug}` : `https://bubblesenterprise.com/${locale}/blog/${slug}`;

    const titles: Record<string, string> = {
        en: "How Long Does Soffit Last? Lifespan by Material (Florida Data)",
        es: "¿Cuánto Dura el Soffit? Vida Útil por Material (Datos de Florida)",
        pt: "Quanto Tempo Dura o Soffit? Vida Útil por Material (Dados da Flórida)",
    };
    const descriptions: Record<string, string> = {
        en: "Aluminum soffit: 20–30 years. Vinyl: 15–20 years. Wood: 5–15 years. Exact lifespan data for each material and why Florida's climate shortens every timeline.",
        es: "Soffit de aluminio: 20–30 años. Vinilo: 15–20 años. Madera: 5–15 años. Datos exactos de vida útil para cada material y por qué el clima de Florida acorta cada línea de tiempo.",
        pt: "Soffit de alumínio: 20–30 anos. Vinil: 15–20 anos. Madeira: 5–15 anos. Dados exatos de vida útil para cada material e por que o clima da Flórida encurta cada prazo.",
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
    const blogUrl = locale === "en" ? `https://bubblesenterprise.com/blog/soffit-lifespan-by-material` : `https://bubblesenterprise.com/${locale}/blog/soffit-lifespan-by-material`;
    return {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": "https://bubblesenterprise.com/blog/soffit-lifespan-by-material#article",
            headline: "How Long Does Soffit Last? Lifespan by Material (With Florida Data)",
            description: "Exact soffit lifespan by material for Florida homes. Aluminum, vinyl, and wood lifespan data with local climate factors.",
            url: blogUrl,
            datePublished: "2026-02-01",
            dateModified: "2026-02-01",
            author: { "@type": "Person", "name": "Bubbles Enterprise Team", "jobTitle": "Licensed Soffit & Fascia Contractors", "url": "https://bubblesenterprise.com/about", "worksFor": { "@id": "https://bubblesenterprise.com/#business" } },
            publisher: { "@id": "https://bubblesenterprise.com/#business" },
            articleSection: "Materials",
            keywords: "soffit lifespan, how long does soffit last, soffit lifespan Florida, aluminum soffit lifespan, vinyl soffit lifespan",
            inLanguage: locale,
        },
        {
            "@type": "FAQPage",
            "@id": "https://bubblesenterprise.com/blog/soffit-lifespan-by-material#faq",
            inLanguage: locale,
            mainEntity: [
                {
                    "@type": "Question",
                    name: "How long does aluminum soffit last?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Aluminum soffit lasts 20–30 years in Florida with no maintenance required. Some aluminum installations from the early 2000s in Central Florida are still in excellent condition. The limiting factor is usually physical damage (storms, pests, impact) rather than material degradation.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How long does vinyl soffit last in Florida?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Vinyl soffit lasts 15–20 years in Florida under normal conditions. South-facing and west-facing sections exposed to intense Florida UV and heat may start showing fading and brittleness in 10–12 years. Shaded north-facing vinyl can last 18–25 years.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How long does wood soffit last?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Wood soffit lasts 5–15 years in Florida, much less than in drier climates. Florida's humidity accelerates rot, and wood provides no pest barrier. Many homes built before 2000 with original wood soffit are overdue for aluminum or vinyl replacement.",
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
        category: "Materials",
        readTime: "5 min read · February 1, 2026",
        authorLine: <>By <span className="font-semibold text-gray-700">Eddy</span> · Soffit &amp; Fascia Specialist · <time dateTime="2026-02-01">February 1, 2026</time></>,
        h1a: "How Long Does Soffit Last?",
        h1b: "Lifespan by Material",
        intro: "Aluminum: 20–30 years. Vinyl: 15–20 years. Wood: 5–15 years. Here's what shortens each timeline in Florida and how to know when it's time to replace.",
        glanceTitle: "Florida Soffit Lifespan at a Glance",
        detailTitle: "Detailed Breakdown",
        factorsTitle: "Why Florida Shortens Every Timeline",
        factorsIntro: "National lifespan estimates for soffit are based on moderate-climate data. Florida's conditions are significantly more aggressive:",
        factorLabel: "Factor",
        factors: [
            { factor: "Humidity", impact: "Year-round high humidity accelerates wood rot and corrodes fasteners. Aluminum and vinyl are not affected by humidity, but the wood nailer boards behind them can still rot, which eventually causes the soffit panels to fail." },
            { factor: "UV Radiation", impact: "Florida receives some of the highest UV index readings in the continental US. UV degrades vinyl faster than aluminum — south and west-facing vinyl can become brittle 3–5 years earlier than national averages suggest." },
            { factor: "Hurricane Season", impact: "Annual wind events (and the major storms every few years) physically damage soffit panels, bend fascia, and create gaps that allow water and pest intrusion. A Category 1 pass can take years off any soffit's life." },
            { factor: "Wildlife", impact: "Central Florida has an active wildlife population: raccoons, squirrels, roof rats, and bats all actively look for soffit gaps. A small opening becomes a large one quickly once an animal starts working it." },
        ],
        faqTitle: "Common Questions",
        faqs: [
            {
                q: "How long does aluminum soffit last?",
                a: "Aluminum soffit lasts 20–30 years in Florida with no maintenance. The typical reason for early replacement is physical damage (storm, pest intrusion, impact) rather than material decay. Some aluminum installations from the early 2000s in Central Florida are still in good condition.",
            },
            {
                q: "How long does vinyl soffit last in Florida?",
                a: "Vinyl soffit lasts 15–20 years in Florida under normal conditions. South and west-facing vinyl in full sun may start fading and becoming brittle in 10–12 years. Shaded north-facing vinyl can last 18–25 years.",
            },
            {
                q: "How long does wood soffit last?",
                a: "Wood soffit lasts only 5–15 years in Florida — much less than in drier climates. Florida humidity accelerates rot, and wood provides no barrier against pests. Most homes with original wood soffit built before 2000 are well past the end of their lifespan and need replacement.",
            },
        ],
        ctaTitle: "Is Your Soffit Near End of Life?",
        ctaBody: "Free inspection — we'll tell you how many more years you have or if replacement makes sense now.",
        ctaBtn: "Get Free Inspection",
        ctaPhone: "Call (407) 715-1790",
        labels: { lifespan: "Florida Lifespan", maintenance: "Maintenance", heatTolerance: "Heat Tolerance", pestResistance: "Pest Resistance", rotRisk: "Rot Risk", warranty: "Manufacturer Warranty", bestFor: "Best For" },
        materials: [
            {
                name: "Aluminum", lifespan: "20–30 years", lifespanShort: "20–30 yrs",
                maintenance: "None", heatTolerance: "Excellent", pestResistance: "Very Good", rotRisk: "None", warrantyYears: "Up to 30 years (manufacturer)",
                bestFor: "Florida new construction, full replacement, high-exposure locations",
                notes: "The industry standard in Florida. Pest intrusion or storm impact (not material decay) is the typical reason for early replacement. 100% recyclable.",
            },
            {
                name: "Vinyl", lifespan: "15–20 years", lifespanShort: "15–20 yrs",
                maintenance: "Occasional cleaning", heatTolerance: "Good (can warp in extreme heat)", pestResistance: "Moderate", rotRisk: "None", warrantyYears: "10–15 years typical",
                bestFor: "Budget-constrained projects, shaded north-facing locations",
                notes: "South and west-facing vinyl in Florida can fade and become brittle 3–5 years earlier due to UV and heat. Adequate for many applications.",
            },
            {
                name: "Wood (Original)", lifespan: "5–15 years", lifespanShort: "5–15 yrs",
                maintenance: "Painting every 2–3 years", heatTolerance: "Poor", pestResistance: "Poor — can be chewed through", rotRisk: "High — starts within 5–7 years in Florida humidity", warrantyYears: "None",
                bestFor: "Historic homes where code requires wood (rare), temporary only",
                notes: "If your home still has original wood soffit, it is almost certainly past its expected lifespan in Florida. Replacement with aluminum or vinyl is the correct solution.",
            },
        ],
    },
    es: {
        breadcrumb: "Blog",
        category: "Materiales",
        readTime: "5 min de lectura · 1 de febrero de 2026",
        authorLine: <>Por <span className="font-semibold text-gray-700">Eddy</span> · Especialista en Soffit y Fascia · <time dateTime="2026-02-01">1 de febrero de 2026</time></>,
        h1a: "¿Cuánto Dura el Soffit?",
        h1b: "Vida Útil por Material",
        intro: "Aluminio: 20–30 años. Vinilo: 15–20 años. Madera: 5–15 años. Aquí está lo que acorta cada plazo en Florida y cómo saber cuándo es momento de reemplazar.",
        glanceTitle: "Vida Útil del Soffit en Florida de un Vistazo",
        detailTitle: "Análisis Detallado",
        factorsTitle: "Por Qué Florida Acorta Cada Plazo",
        factorsIntro: "Las estimaciones nacionales de vida útil del soffit se basan en datos de clima moderado. Las condiciones de Florida son significativamente más agresivas:",
        factorLabel: "Factor",
        factors: [
            { factor: "Humedad", impact: "La alta humedad durante todo el año acelera la pudrición de madera y corroe los anclajes. El aluminio y el vinilo no se ven afectados por la humedad, pero las tablas de soporte de madera detrás de ellos aún pueden pudrirse, lo que eventualmente causa que los paneles de soffit fallen." },
            { factor: "Radiación UV", impact: "Florida recibe algunos de los índices UV más altos del continental de EE.UU. La UV degrada el vinilo más rápido que el aluminio. El vinilo orientado al sur y oeste puede volverse frágil 3–5 años antes de lo que sugieren los promedios nacionales." },
            { factor: "Temporada de Huracanes", impact: "Los eventos de viento anuales (y las tormentas mayores cada pocos años) dañan físicamente los paneles de soffit, doblan la fascia y crean brechas que permiten la entrada de agua y plagas. Un paso de Categoría 1 puede quitarle años a cualquier soffit." },
            { factor: "Fauna Silvestre", impact: "El Centro de Florida tiene una población de fauna activa: mapaches, ardillas, ratas de techo y murciélagos buscan activamente brechas en el soffit. Una pequeña apertura se convierte rápidamente en una grande una vez que un animal empieza a trabajarla." },
        ],
        faqTitle: "Preguntas Frecuentes",
        faqs: [
            {
                q: "¿Cuánto tiempo dura el soffit de aluminio?",
                a: "El soffit de aluminio dura 20–30 años en Florida sin mantenimiento. La razón típica para el reemplazo temprano es el daño físico (tormenta, intrusión de plagas, impacto) en lugar del deterioro del material. Algunas instalaciones de aluminio de principios de los 2000 en el Centro de Florida todavía están en buenas condiciones.",
            },
            {
                q: "¿Cuánto tiempo dura el soffit de vinilo en Florida?",
                a: "El soffit de vinilo dura 15–20 años en Florida en condiciones normales. El vinilo orientado al sur y oeste bajo sol directo puede comenzar a desvanecerse y volverse frágil en 10–12 años. El vinilo norte sombreado puede durar 18–25 años.",
            },
            {
                q: "¿Cuánto tiempo dura el soffit de madera?",
                a: "El soffit de madera dura solo 5–15 años en Florida, mucho menos que en climas más secos. La humedad de Florida acelera la pudrición, y la madera no proporciona barrera contra las plagas. La mayoría de las casas con soffit de madera original construidas antes del 2000 están bien pasadas de su vida útil esperada.",
            },
        ],
        ctaTitle: "¿Está su Soffit al Final de su Vida Útil?",
        ctaBody: "Inspección gratuita: le diremos cuántos años más tiene o si el reemplazo tiene sentido ahora.",
        ctaBtn: "Obtener Inspección Gratuita",
        ctaPhone: "Llamar (407) 715-1790",
        labels: { lifespan: "Vida Útil en Florida", maintenance: "Mantenimiento", heatTolerance: "Tolerancia al Calor", pestResistance: "Resistencia a Plagas", rotRisk: "Riesgo de Pudrición", warranty: "Garantía del Fabricante", bestFor: "Mejor Para" },
        materials: [
            {
                name: "Aluminio", lifespan: "20–30 años", lifespanShort: "20–30 años",
                maintenance: "Ninguno", heatTolerance: "Excelente", pestResistance: "Muy Buena", rotRisk: "Ninguno", warrantyYears: "Hasta 30 años (fabricante)",
                bestFor: "Nueva construcción en Florida, reemplazo completo, ubicaciones de alta exposición",
                notes: "El estándar de la industria en Florida. La intrusión de plagas o el impacto de tormentas (no el deterioro del material) es la razón típica para el reemplazo temprano. 100% reciclable.",
            },
            {
                name: "Vinilo", lifespan: "15–20 años", lifespanShort: "15–20 años",
                maintenance: "Limpieza ocasional", heatTolerance: "Buena (puede deformarse con calor extremo)", pestResistance: "Moderada", rotRisk: "Ninguno", warrantyYears: "10–15 años típico",
                bestFor: "Proyectos con presupuesto limitado, ubicaciones norte sombreadas",
                notes: "El vinilo orientado al sur y oeste en Florida puede desvanecerse y volverse frágil 3–5 años antes debido al UV y el calor. Adecuado para muchas aplicaciones.",
            },
            {
                name: "Madera (Original)", lifespan: "5–15 años", lifespanShort: "5–15 años",
                maintenance: "Pintura cada 2–3 años", heatTolerance: "Deficiente", pestResistance: "Deficiente, pueden roerlo", rotRisk: "Alto, comienza dentro de 5–7 años con la humedad de Florida", warrantyYears: "Ninguna",
                bestFor: "Casas históricas donde el código requiere madera (raro), solo temporal",
                notes: "Si su casa todavía tiene soffit de madera original, casi con certeza está pasado de su vida útil esperada en Florida. El reemplazo con aluminio o vinilo es la solución correcta.",
            },
        ],
    },
    pt: {
        breadcrumb: "Blog",
        category: "Materiais",
        readTime: "5 min de leitura · 1 de fevereiro de 2026",
        authorLine: <>Por <span className="font-semibold text-gray-700">Eddy</span> · Especialista em Soffit e Fascia · <time dateTime="2026-02-01">1 de fevereiro de 2026</time></>,
        h1a: "Quanto Tempo Dura o Soffit?",
        h1b: "Vida Útil por Material",
        intro: "Alumínio: 20–30 anos. Vinil: 15–20 anos. Madeira: 5–15 anos. Veja o que encurta cada prazo na Flórida e como saber quando é hora de substituir.",
        glanceTitle: "Vida Útil do Soffit na Flórida de Forma Rápida",
        detailTitle: "Análise Detalhada",
        factorsTitle: "Por Que a Flórida Encurta Cada Prazo",
        factorsIntro: "As estimativas nacionais de vida útil do soffit são baseadas em dados de clima moderado. As condições da Flórida são significativamente mais agressivas:",
        factorLabel: "Fator",
        factors: [
            { factor: "Umidade", impact: "A alta umidade durante todo o ano acelera a podridão de madeira e corrói os fixadores. O alumínio e o vinil não são afetados pela umidade, mas as ripas de madeira atrás deles ainda podem apodrecer, o que eventualmente faz os painéis de soffit falharem." },
            { factor: "Radiação UV", impact: "A Flórida recebe alguns dos índices UV mais altos dos EUA continentais. O UV degrada o vinil mais rápido que o alumínio. O vinil voltado para o sul e oeste pode ficar frágil 3–5 anos antes do que as médias nacionais sugerem." },
            { factor: "Temporada de Furacões", impact: "Os eventos de vento anuais (e as tempestades maiores a cada poucos anos) danificam fisicamente os painéis de soffit, dobram a fascia e criam frestas que permitem a entrada de água e pragas. Uma passagem Categoria 1 pode tirar anos da vida de qualquer soffit." },
            { factor: "Fauna", impact: "O Centro da Flórida tem uma população de fauna ativa: guaxinins, esquilos, ratos de telhado e morcegos procuram ativamente frestas no soffit. Uma pequena abertura se torna grande rapidamente assim que um animal começa a trabalhar nela." },
        ],
        faqTitle: "Perguntas Frequentes",
        faqs: [
            {
                q: "Quanto tempo dura o soffit de alumínio?",
                a: "O soffit de alumínio dura 20–30 anos na Flórida sem manutenção. A razão típica para substituição antecipada é dano físico (tempestade, intrusão de pragas, impacto) em vez de deterioração do material. Algumas instalações de alumínio do início dos anos 2000 no Centro da Flórida ainda estão em boas condições.",
            },
            {
                q: "Quanto tempo dura o soffit de vinil na Flórida?",
                a: "O soffit de vinil dura 15–20 anos na Flórida em condições normais. O vinil voltado para o sul e oeste sob sol direto pode começar a desbotamento e ficar frágil em 10–12 anos. O vinil norte sombreado pode durar 18–25 anos.",
            },
            {
                q: "Quanto tempo dura o soffit de madeira?",
                a: "O soffit de madeira dura apenas 5–15 anos na Flórida, muito menos do que em climas mais secos. A umidade da Flórida acelera a podridão, e a madeira não fornece barreira contra pragas. A maioria das casas com soffit de madeira original construídas antes de 2000 estão bem além da vida útil esperada.",
            },
        ],
        ctaTitle: "Seu Soffit Está Próximo do Fim da Vida Útil?",
        ctaBody: "Inspeção gratuita: vamos dizer quantos anos ainda tem ou se a substituição faz sentido agora.",
        ctaBtn: "Solicitar Inspeção Gratuita",
        ctaPhone: "Ligar (407) 715-1790",
        labels: { lifespan: "Vida Útil na Flórida", maintenance: "Manutenção", heatTolerance: "Tolerância ao Calor", pestResistance: "Resistência a Pragas", rotRisk: "Risco de Podridão", warranty: "Garantia do Fabricante", bestFor: "Ideal Para" },
        materials: [
            {
                name: "Alumínio", lifespan: "20–30 anos", lifespanShort: "20–30 anos",
                maintenance: "Nenhuma", heatTolerance: "Excelente", pestResistance: "Muito Boa", rotRisk: "Nenhum", warrantyYears: "Até 30 anos (fabricante)",
                bestFor: "Nova construção na Flórida, substituição completa, locais de alta exposição",
                notes: "O padrão da indústria na Flórida. A intrusão de pragas ou o impacto de tempestades (não a deterioração do material) é a razão típica para substituição antecipada. 100% reciclável.",
            },
            {
                name: "Vinil", lifespan: "15–20 anos", lifespanShort: "15–20 anos",
                maintenance: "Limpeza ocasional", heatTolerance: "Boa (pode deformar com calor extremo)", pestResistance: "Moderada", rotRisk: "Nenhum", warrantyYears: "10–15 anos típico",
                bestFor: "Projetos com orçamento limitado, locais norte sombreados",
                notes: "O vinil voltado para o sul e oeste na Flórida pode desbotar e ficar frágil 3–5 anos mais cedo devido ao UV e calor. Adequado para muitas aplicações.",
            },
            {
                name: "Madeira (Original)", lifespan: "5–15 anos", lifespanShort: "5–15 anos",
                maintenance: "Pintura a cada 2–3 anos", heatTolerance: "Ruim", pestResistance: "Ruim, pode ser roída", rotRisk: "Alto, começa em 5–7 anos com a umidade da Flórida", warrantyYears: "Nenhuma",
                bestFor: "Casas históricas onde o código exige madeira (raro), apenas temporário",
                notes: "Se sua casa ainda tem soffit de madeira original, quase certamente já passou da vida útil esperada na Flórida. A substituição por alumínio ou vinil é a solução correta.",
            },
        ],
    },
};

const materialColors = [
    { color: "text-blue-700", bg: "bg-blue-50", border: "border-blue-200", barWidth: "w-[95%]", barColor: "bg-blue-500" },
    { color: "text-purple-700", bg: "bg-purple-50", border: "border-purple-200", barWidth: "w-[70%]", barColor: "bg-purple-500" },
    { color: "text-amber-700", bg: "bg-amber-50", border: "border-amber-200", barWidth: "w-[40%]", barColor: "bg-amber-500" },
];

export default async function SoffitLifespanPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const c = content[locale as keyof typeof content] ?? content.en;
    const blogHref = locale === "en" ? "/blog" : `/${locale}/blog`;
    const contactHref = locale === "en" ? "/contact" : `/${locale}/contact`;

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildSchema(locale)) }} />
            <div className="flex flex-col min-h-screen">

                {/* ── HERO ──────────────────────────────────────────────── */}
                <section className="py-24 bg-gradient-to-br from-slate-900 to-indigo-950 text-white">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <AnimatedSection>
                            <div className="flex flex-wrap gap-3 items-center mb-6">
                                <Link href={blogHref} className="text-blue-300 hover:text-white text-sm transition">← {c.breadcrumb}</Link>
                                <span className="text-blue-500">/</span>
                                <span className="text-xs font-bold bg-purple-500/20 border border-purple-400/30 text-purple-200 px-3 py-1 rounded-full uppercase tracking-widest">{c.category}</span>
                                <span className="text-xs text-blue-400">{c.readTime}</span>
                            </div>
                            <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
                                {c.h1a}<br />
                                <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">{c.h1b}</span>
                            </h1>
                            <p className="text-sm text-gray-400 mt-2 mb-4">{c.authorLine}</p>
                            <p className="text-xl text-blue-100 max-w-3xl leading-relaxed">{c.intro}</p>
                        </AnimatedSection>
                    </div>
                </section>

                {/* ── LIFESPAN BARS ──────────────────────────────────────── */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <AnimatedSection>
                            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-10">{c.glanceTitle}</h2>
                        </AnimatedSection>
                        <div className="space-y-5">
                            {c.materials.map((m, i) => (
                                <AnimatedSection key={m.name} delay={i * 80} from="left">
                                    <div className={`rounded-2xl border ${materialColors[i].border} ${materialColors[i].bg} p-6`}>
                                        <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                                            <h3 className={`text-lg font-extrabold ${materialColors[i].color}`}>{m.name}</h3>
                                            <span className={`font-bold ${materialColors[i].color}`}>{m.lifespanShort}</span>
                                        </div>
                                        <div className="h-3 bg-gray-200 rounded-full overflow-hidden mb-4">
                                            <div className={`h-full ${materialColors[i].barColor} ${materialColors[i].barWidth} rounded-full transition-all duration-1000`} />
                                        </div>
                                        <p className="text-gray-600 text-sm leading-relaxed">{m.notes}</p>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── MATERIAL DETAILS ───────────────────────────────────── */}
                <section className="py-8 pb-16 bg-gray-50 border-y border-gray-100">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <AnimatedSection>
                            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-10">{c.detailTitle}</h2>
                        </AnimatedSection>
                        <div className="space-y-8">
                            {c.materials.map((m, i) => (
                                <AnimatedSection key={m.name} delay={i * 80} from="bottom">
                                    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                                        <div className={`${materialColors[i].bg} ${materialColors[i].border} border-b px-7 py-5`}>
                                            <div className="flex items-center gap-3">
                                                <h3 className={`text-xl font-extrabold ${materialColors[i].color}`}>{m.name} Soffit</h3>
                                                <span className="text-sm font-bold text-gray-500">— {m.lifespan}</span>
                                            </div>
                                        </div>
                                        <div className="p-7">
                                            <div className="grid sm:grid-cols-2 gap-4 mb-6">
                                                {[
                                                    { label: c.labels.lifespan, value: m.lifespan },
                                                    { label: c.labels.maintenance, value: m.maintenance },
                                                    { label: c.labels.heatTolerance, value: m.heatTolerance },
                                                    { label: c.labels.pestResistance, value: m.pestResistance },
                                                    { label: c.labels.rotRisk, value: m.rotRisk },
                                                    { label: c.labels.warranty, value: m.warrantyYears },
                                                ].map(row => (
                                                    <div key={row.label} className="flex flex-col gap-1">
                                                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">{row.label}</span>
                                                        <span className="text-sm font-semibold text-gray-800">{row.value}</span>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className={`${materialColors[i].bg} rounded-xl p-4`}>
                                                <span className="text-xs font-bold text-gray-500 uppercase tracking-wide block mb-1">{c.labels.bestFor}</span>
                                                <span className="text-sm text-gray-700">{m.bestFor}</span>
                                            </div>
                                        </div>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── FLORIDA FACTORS ────────────────────────────────────── */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <AnimatedSection>
                            <h2 className="text-2xl font-extrabold text-gray-900 mb-6">{c.factorsTitle}</h2>
                            <div className="space-y-5 text-gray-700 leading-relaxed">
                                <p>{c.factorsIntro}</p>
                                <ul className="space-y-4 ml-4">
                                    {c.factors.map(item => (
                                        <li key={item.factor} className="flex gap-4">
                                            <span className="font-extrabold text-bubble-primary shrink-0 w-28">{item.factor}</span>
                                            <span className="text-sm">{item.impact}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* ── FAQ ───────────────────────────────────────────────── */}
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
                <RelatedServices serviceKeys={["materials", "remove-replace", "calculator"]} locale={locale} />

                {/* ── CTA ───────────────────────────────────────────────── */}
                <section className="py-20 bg-gradient-to-br from-bubble-primary to-blue-800 text-white text-center">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <AnimatedSection>
                            <h2 className="text-3xl font-extrabold mb-4">{c.ctaTitle}</h2>
                            <p className="text-blue-200 text-lg mb-8">{c.ctaBody}</p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href={contactHref} className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition shadow-xl">
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
