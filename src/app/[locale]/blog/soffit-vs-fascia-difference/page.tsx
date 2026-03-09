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
    const slug = "soffit-vs-fascia-difference";
    const url = locale === "en" ? `https://bubblesenterprise.com/blog/${slug}` : `https://bubblesenterprise.com/${locale}/blog/${slug}`;

    const titles: Record<string, string> = {
        en: "Soffit vs Fascia: What's the Difference? (Plain English)",
        es: "Soffit vs Fascia: ¿Cuál es la Diferencia? (En Palabras Simples)",
        pt: "Soffit vs Fascia: Qual a Diferença? (Explicado de Forma Simples)",
    };
    const descriptions: Record<string, string> = {
        en: "Soffit is the horizontal panel under the roof overhang. Fascia is the vertical board at the roof edge. Here's exactly what each does and why both matter.",
        es: "El soffit es el panel horizontal bajo el alero del techo. La fascia es la tabla vertical en el borde del techo. Aquí exactamente qué hace cada uno y por qué ambos importan.",
        pt: "O soffit é o painel horizontal sob o beiral do telhado. A fascia é a placa vertical na borda do telhado. Aqui está exatamente o que cada um faz e por que ambos importam.",
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

const schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": "https://bubblesenterprise.com/blog/soffit-vs-fascia-difference#article",
            headline: "Soffit vs Fascia: What's the Difference? (Plain English Explanation)",
            description: "Plain English explanation of soffit vs fascia — what each part does and why both matter for Florida homes.",
            url: "https://bubblesenterprise.com/blog/soffit-vs-fascia-difference",
            datePublished: "2026-02-18",
            dateModified: "2026-02-18",
            author: { "@type": "Person", "name": "Bubbles Enterprise Team", "jobTitle": "Licensed Soffit & Fascia Contractors", "url": "https://bubblesenterprise.com/about", "worksFor": { "@id": "https://bubblesenterprise.com/#business" } },
            publisher: { "@id": "https://bubblesenterprise.com/#business" },
            articleSection: "Education",
            keywords: "soffit vs fascia, what is soffit, what is fascia, soffit fascia difference, soffit definition",
        },
        {
            "@type": "FAQPage",
            "@id": "https://bubblesenterprise.com/blog/soffit-vs-fascia-difference#faq",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "What is soffit on a house?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Soffit is the material that covers the underside of your roof overhang — the horizontal surface you see when you look up at the roofline from the ground. It protects the rafters and attic from weather and pests while allowing ventilation through perforated (vented) panels.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What is fascia on a house?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Fascia is the vertical board that runs along the roofline edge, connecting the roof's edge to the soffit. It gives the roofline a finished appearance, provides the mounting surface for gutters, and protects the roof edge from water infiltration.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Do soffit and fascia always need to be replaced together?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Not always. If the soffit is damaged but the fascia board is still solid, soffit-only replacement is possible. However, if you have wood fascia that shows any rot, it should be replaced at the same time as the soffit — otherwise new soffit will eventually fail as the rotted wood behind it continues to deteriorate.",
                    },
                },
            ],
        },
        {
            "@type": "DefinedTerm",
            name: "Soffit",
            description: "The material covering the underside of a roof overhang. Protects the rafters and attic from weather and pests while providing ventilation.",
            inDefinedTermSet: { "@type": "DefinedTermSet", name: "Home Construction Glossary" },
        },
        {
            "@type": "DefinedTerm",
            name: "Fascia",
            description: "The vertical board running along the roofline edge, connecting the roof edge to the soffit. Provides the mounting surface for gutters.",
            inDefinedTermSet: { "@type": "DefinedTermSet", name: "Home Construction Glossary" },
        },
    ],
};

const content = {
    en: {
        breadcrumb: "Blog",
        category: "Education",
        readTime: "4 min read · February 18, 2026",
        authorLine: <>By <span className="font-semibold text-gray-700">Eddy</span> · Soffit &amp; Fascia Specialist · <time dateTime="2026-02-18">February 18, 2026</time></>,
        h1a: "Soffit vs Fascia:",
        h1b: "What's the Difference?",
        intro: "The short answer: soffit is what you see when you look up at the roofline. Fascia is the vertical board at the edge. Here's what each one does and why both matter.",
        soffitTitle: "Soffit",
        soffitSub: "The horizontal underside of the roof overhang",
        soffitDesc: "Soffit is the material you see when you look up at the roofline from the ground. It covers the area between the top of your exterior wall and the roof edge.",
        soffitFunctions: "Primary Functions",
        soffitFunctionsList: [
            "Covers and protects roof rafters from weather",
            "Prevents pest intrusion into the attic",
            "Provides attic ventilation (vented panels)",
            "Gives the roofline a finished appearance",
        ],
        soffitMaterials: "Common Materials",
        soffitMaterialsText: "Aluminum (preferred), vinyl, wood (original, now replaced)",
        fasciaTitle: "Fascia",
        fasciaSub: "The vertical board at the roof's edge",
        fasciaDesc: "Fascia is the vertical board running along the roofline edge — the part you see when looking directly at the house from the street, just below the shingles.",
        fasciaFunctions: "Primary Functions",
        fasciaFunctionsList: [
            "Supports the bottom row of roof shingles",
            "Mounting surface for rain gutters",
            "Seals the roof edge from water infiltration",
            "Defines the visual edge of the roofline",
        ],
        fasciaMaterials: "Common Materials",
        fasciaMaterialsText: "Aluminum (fascia capping), wood board (often behind the cap)",
        connectionTitle: "How Soffit and Fascia Connect",
        connectionP1: "They're designed to work together. The fascia board runs vertically at the roof edge. The soffit attaches horizontally to the bottom of the fascia (via an F-channel or J-channel) and to the exterior wall on the other end. Together they form a sealed enclosure around the roof's overhang.",
        connectionP2: "This is why when one is damaged, the other is often affected too. Rotted fascia causes soffit panels to detach and sag. A gap in the soffit lets water run toward the fascia. They're almost always addressed in the same job.",
        tableTitle: "Soffit vs Fascia at a Glance",
        tableHeaders: ["Feature", "Soffit", "Fascia"],
        tableRows: [
            { feature: "Orientation", soffit: "Horizontal (flat, facing down)", fascia: "Vertical (facing outward)" },
            { feature: "Location", soffit: "Underside of roof overhang", fascia: "Edge of roof, below shingles" },
            { feature: "Visible from ground", soffit: "When looking up at roofline", fascia: "When looking straight at house" },
            { feature: "Gutter attachment", soffit: "No", fascia: "Yes — gutters mount to fascia" },
            { feature: "Ventilation role", soffit: "Yes — vented panels allow airflow", fascia: "No ventilation function" },
            { feature: "Pest barrier", soffit: "Primary barrier against attic entry", fascia: "Secondary — seals the roof edge" },
            { feature: "Common damage", soffit: "Holes, sag, rot, animal damage", fascia: "Rot from gutter overflow, water damage" },
            { feature: "Florida material", soffit: "Aluminum or vinyl panels", fascia: "Aluminum cap over wood board" },
        ],
        faqTitle: "Common Questions",
        faqs: [
            {
                q: "What is soffit on a house?",
                a: "Soffit is the material covering the underside of your roof overhang — the horizontal surface you see when you look up at the roofline from the ground. It protects rafters and the attic from weather and pests while allowing ventilation through perforated (vented) panels.",
            },
            {
                q: "What is fascia on a house?",
                a: "Fascia is the vertical board running along the roofline edge, just below the shingles. It connects the roof edge to the soffit, gives the roofline a finished look, provides the mounting surface for gutters, and seals the roof edge against water infiltration.",
            },
            {
                q: "Do soffit and fascia always need to be replaced together?",
                a: "Not always. If the soffit is damaged but the fascia board is solid, soffit-only replacement is possible. However, if you have wood fascia showing any rot, replace both at the same time — new soffit installed over rotted fascia will fail prematurely as the rot continues to spread.",
            },
        ],
        ctaTitle: "Need Soffit or Fascia Work?",
        ctaBody: "Free on-site estimate. We'll assess both and recommend only what actually needs attention.",
        ctaBtn: "Get Free Estimate",
        ctaPhone: "Call (407) 715-1790",
    },
    es: {
        breadcrumb: "Blog",
        category: "Educación",
        readTime: "4 min de lectura · 18 de febrero de 2026",
        authorLine: <>Por <span className="font-semibold text-gray-700">Eddy</span> · Especialista en Soffit y Fascia · <time dateTime="2026-02-18">18 de febrero de 2026</time></>,
        h1a: "Soffit vs Fascia:",
        h1b: "¿Cuál es la Diferencia?",
        intro: "La respuesta corta: el soffit es lo que ve cuando mira hacia arriba al alero. La fascia es la tabla vertical en el borde. Aquí está lo que hace cada uno y por qué ambos importan.",
        soffitTitle: "Soffit",
        soffitSub: "La parte horizontal inferior del alero del techo",
        soffitDesc: "El soffit es el material que usted ve cuando mira hacia arriba al alero desde el suelo. Cubre el área entre la parte superior de su pared exterior y el borde del techo.",
        soffitFunctions: "Funciones Principales",
        soffitFunctionsList: [
            "Cubre y protege las vigas del techo contra el clima",
            "Previene la entrada de plagas al ático",
            "Proporciona ventilación al ático (paneles ventilados)",
            "Le da al alero una apariencia terminada",
        ],
        soffitMaterials: "Materiales Comunes",
        soffitMaterialsText: "Aluminio (preferido), vinilo, madera (original, ahora reemplazada)",
        fasciaTitle: "Fascia",
        fasciaSub: "La tabla vertical en el borde del techo",
        fasciaDesc: "La fascia es la tabla vertical que corre a lo largo del borde del alero, la parte que ve cuando mira directamente la casa desde la calle, justo debajo de las tejas.",
        fasciaFunctions: "Funciones Principales",
        fasciaFunctionsList: [
            "Soporta la fila inferior de tejas del techo",
            "Superficie de montaje para canaletas de lluvia",
            "Sella el borde del techo contra la infiltración de agua",
            "Define el borde visual del alero",
        ],
        fasciaMaterials: "Materiales Comunes",
        fasciaMaterialsText: "Aluminio (cubierta de fascia), tabla de madera (generalmente detrás de la cubierta)",
        connectionTitle: "Cómo se Conectan el Soffit y la Fascia",
        connectionP1: "Están diseñados para trabajar juntos. La tabla de fascia corre verticalmente en el borde del techo. El soffit se une horizontalmente a la parte inferior de la fascia (a través de un canal F o canal J) y a la pared exterior en el otro extremo. Juntos forman un enclosure sellado alrededor del alero del techo.",
        connectionP2: "Por eso cuando uno está dañado, el otro a menudo también se ve afectado. La fascia podrida causa que los paneles de soffit se desprendan y se hundan. Una brecha en el soffit deja que el agua corra hacia la fascia. Casi siempre se abordan en el mismo trabajo.",
        tableTitle: "Soffit vs Fascia de un Vistazo",
        tableHeaders: ["Característica", "Soffit", "Fascia"],
        tableRows: [
            { feature: "Orientación", soffit: "Horizontal (plana, mirando hacia abajo)", fascia: "Vertical (mirando hacia afuera)" },
            { feature: "Ubicación", soffit: "Parte inferior del alero", fascia: "Borde del techo, debajo de las tejas" },
            { feature: "Visible desde el suelo", soffit: "Al mirar hacia arriba al alero", fascia: "Al mirar directamente la casa" },
            { feature: "Unión de canaleta", soffit: "No", fascia: "Sí, las canaletas se montan en la fascia" },
            { feature: "Función de ventilación", soffit: "Sí, paneles ventilados permiten el flujo de aire", fascia: "Sin función de ventilación" },
            { feature: "Barrera contra plagas", soffit: "Barrera principal contra entrada al ático", fascia: "Secundaria, sella el borde del techo" },
            { feature: "Daños comunes", soffit: "Huecos, hundimiento, pudrición, daño animal", fascia: "Pudrición por desbordamiento de canaleta, daño por agua" },
            { feature: "Material en Florida", soffit: "Paneles de aluminio o vinilo", fascia: "Cubierta de aluminio sobre tabla de madera" },
        ],
        faqTitle: "Preguntas Frecuentes",
        faqs: [
            {
                q: "¿Qué es el soffit en una casa?",
                a: "El soffit es el material que cubre la parte inferior del alero del techo, la superficie horizontal que usted ve cuando mira hacia arriba desde el suelo. Protege las vigas y el ático contra el clima y las plagas mientras permite la ventilación a través de paneles perforados.",
            },
            {
                q: "¿Qué es la fascia en una casa?",
                a: "La fascia es la tabla vertical que corre a lo largo del borde del alero, justo debajo de las tejas. Conecta el borde del techo con el soffit, le da al alero una apariencia terminada, proporciona la superficie de montaje para las canaletas y sella el borde del techo contra la infiltración de agua.",
            },
            {
                q: "¿El soffit y la fascia siempre necesitan reemplazarse juntos?",
                a: "No siempre. Si el soffit está dañado pero la tabla de fascia está sólida, es posible reemplazar solo el soffit. Sin embargo, si tiene fascia de madera con signos de pudrición, reemplace ambos al mismo tiempo. El nuevo soffit instalado sobre fascia podrida fallará prematuramente mientras la pudrición continúa extendiéndose.",
            },
        ],
        ctaTitle: "¿Necesita Trabajo de Soffit o Fascia?",
        ctaBody: "Estimado gratuito en su propiedad. Evaluaremos ambos y recomendaremos solo lo que realmente necesita atención.",
        ctaBtn: "Obtener Estimado Gratuito",
        ctaPhone: "Llamar (407) 715-1790",
    },
    pt: {
        breadcrumb: "Blog",
        category: "Educação",
        readTime: "4 min de leitura · 18 de fevereiro de 2026",
        authorLine: <>Por <span className="font-semibold text-gray-700">Eddy</span> · Especialista em Soffit e Fascia · <time dateTime="2026-02-18">18 de fevereiro de 2026</time></>,
        h1a: "Soffit vs Fascia:",
        h1b: "Qual a Diferença?",
        intro: "A resposta curta: soffit é o que você vê quando olha para cima no beiral. Fascia é a placa vertical na borda. Veja o que cada um faz e por que ambos importam.",
        soffitTitle: "Soffit",
        soffitSub: "A parte horizontal inferior do beiral do telhado",
        soffitDesc: "O soffit é o material que você vê quando olha para cima no beiral a partir do chão. Cobre a área entre o topo da sua parede externa e a borda do telhado.",
        soffitFunctions: "Funções Principais",
        soffitFunctionsList: [
            "Cobre e protege as vigas do telhado contra o clima",
            "Previne a entrada de pragas no sótão",
            "Proporciona ventilação ao sótão (painéis ventilados)",
            "Dá ao beiral uma aparência acabada",
        ],
        soffitMaterials: "Materiais Comuns",
        soffitMaterialsText: "Alumínio (preferido), vinil, madeira (original, agora substituída)",
        fasciaTitle: "Fascia",
        fasciaSub: "A placa vertical na borda do telhado",
        fasciaDesc: "A fascia é a placa vertical que corre ao longo da borda do beiral, a parte que você vê quando olha diretamente para a casa da rua, logo abaixo das telhas.",
        fasciaFunctions: "Funções Principais",
        fasciaFunctionsList: [
            "Suporta a fileira inferior de telhas do telhado",
            "Superfície de montagem para calhas de chuva",
            "Veda a borda do telhado contra infiltração de água",
            "Define a borda visual do beiral",
        ],
        fasciaMaterials: "Materiais Comuns",
        fasciaMaterialsText: "Alumínio (capeamento de fascia), placa de madeira (geralmente atrás do capeamento)",
        connectionTitle: "Como Soffit e Fascia se Conectam",
        connectionP1: "Eles são projetados para trabalhar juntos. A placa de fascia corre verticalmente na borda do telhado. O soffit se conecta horizontalmente à parte inferior da fascia (através de um canal F ou canal J) e à parede externa na outra extremidade. Juntos formam um fechamento vedado ao redor do beiral do telhado.",
        connectionP2: "É por isso que quando um está danificado, o outro muitas vezes também é afetado. A fascia apodrecida faz os painéis de soffit se soltarem e afundarem. Uma fresta no soffit deixa a água correr em direção à fascia. Quase sempre são tratados no mesmo trabalho.",
        tableTitle: "Soffit vs Fascia de Forma Rápida",
        tableHeaders: ["Característica", "Soffit", "Fascia"],
        tableRows: [
            { feature: "Orientação", soffit: "Horizontal (plana, voltada para baixo)", fascia: "Vertical (voltada para fora)" },
            { feature: "Localização", soffit: "Parte inferior do beiral", fascia: "Borda do telhado, abaixo das telhas" },
            { feature: "Visível do chão", soffit: "Ao olhar para cima no beiral", fascia: "Ao olhar diretamente para a casa" },
            { feature: "Fixação de calha", soffit: "Não", fascia: "Sim, as calhas se montam na fascia" },
            { feature: "Função de ventilação", soffit: "Sim, painéis ventilados permitem fluxo de ar", fascia: "Sem função de ventilação" },
            { feature: "Barreira contra pragas", soffit: "Barreira principal contra entrada no sótão", fascia: "Secundária, veda a borda do telhado" },
            { feature: "Danos comuns", soffit: "Buracos, afundamento, podridão, dano animal", fascia: "Podridão por transbordamento de calha, dano por água" },
            { feature: "Material na Flórida", soffit: "Painéis de alumínio ou vinil", fascia: "Capeamento de alumínio sobre placa de madeira" },
        ],
        faqTitle: "Perguntas Frequentes",
        faqs: [
            {
                q: "O que é soffit em uma casa?",
                a: "O soffit é o material que cobre a parte inferior do beiral do telhado, a superfície horizontal que você vê quando olha para cima a partir do chão. Protege as vigas e o sótão contra o clima e pragas enquanto permite a ventilação através de painéis perfurados.",
            },
            {
                q: "O que é fascia em uma casa?",
                a: "A fascia é a placa vertical que corre ao longo da borda do beiral, logo abaixo das telhas. Conecta a borda do telhado ao soffit, dá ao beiral uma aparência acabada, fornece a superfície de montagem para calhas e veda a borda do telhado contra infiltração de água.",
            },
            {
                q: "Soffit e fascia sempre precisam ser substituídos juntos?",
                a: "Nem sempre. Se o soffit está danificado mas a placa de fascia está sólida, é possível substituir apenas o soffit. No entanto, se você tem fascia de madeira com sinais de podridão, substitua ambos ao mesmo tempo. O novo soffit instalado sobre fascia apodrecida vai falhar prematuramente enquanto a podridão continua se espalhando.",
            },
        ],
        ctaTitle: "Precisa de Trabalho de Soffit ou Fascia?",
        ctaBody: "Orçamento gratuito no local. Avaliaremos os dois e recomendaremos apenas o que realmente precisa de atenção.",
        ctaBtn: "Obter Orçamento Gratuito",
        ctaPhone: "Ligar (407) 715-1790",
    },
};

export default async function SoffitVsFasciaPage({
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
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <div className="flex flex-col min-h-screen">

                {/* ── HERO ──────────────────────────────────────────────── */}
                <section className="py-24 bg-gradient-to-br from-slate-900 to-emerald-950 text-white">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <AnimatedSection>
                            <div className="flex flex-wrap gap-3 items-center mb-6">
                                <Link href={blogHref} className="text-emerald-300 hover:text-white text-sm transition">← {c.breadcrumb}</Link>
                                <span className="text-emerald-500">/</span>
                                <span className="text-xs font-bold bg-emerald-500/20 border border-emerald-400/30 text-emerald-200 px-3 py-1 rounded-full uppercase tracking-widest">{c.category}</span>
                                <span className="text-xs text-blue-400">{c.readTime}</span>
                            </div>
                            <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
                                {c.h1a}<br />
                                <span className="bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">{c.h1b}</span>
                            </h1>
                            <p className="text-sm text-gray-400 mt-2 mb-4">{c.authorLine}</p>
                            <p className="text-xl text-emerald-100 max-w-3xl leading-relaxed">{c.intro}</p>
                        </AnimatedSection>
                    </div>
                </section>

                {/* ── DEFINITIONS ────────────────────────────────────────── */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="grid md:grid-cols-2 gap-8 mb-16">
                            <AnimatedSection from="left">
                                <div className="bg-blue-50 rounded-2xl border-2 border-blue-200 p-8 h-full">
                                    <div className="text-5xl mb-4" role="img" aria-label="Soffit">🏠</div>
                                    <h2 className="text-2xl font-extrabold text-blue-900 mb-2">{c.soffitTitle}</h2>
                                    <p className="text-blue-600 font-semibold text-sm mb-4">{c.soffitSub}</p>
                                    <p className="text-gray-700 leading-relaxed mb-6">{c.soffitDesc}</p>
                                    <div className="space-y-3">
                                        <div>
                                            <span className="text-xs font-bold text-gray-400 uppercase tracking-wide block mb-1">{c.soffitFunctions}</span>
                                            <ul className="text-sm text-gray-700 space-y-1.5">
                                                {c.soffitFunctionsList.map((f, i) => <li key={i}>• {f}</li>)}
                                            </ul>
                                        </div>
                                        <div>
                                            <span className="text-xs font-bold text-gray-400 uppercase tracking-wide block mb-1">{c.soffitMaterials}</span>
                                            <p className="text-sm text-gray-700">{c.soffitMaterialsText}</p>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>

                            <AnimatedSection from="right">
                                <div className="bg-green-50 rounded-2xl border-2 border-green-200 p-8 h-full">
                                    <div className="text-5xl mb-4" role="img" aria-label="Fascia">🔩</div>
                                    <h2 className="text-2xl font-extrabold text-green-900 mb-2">{c.fasciaTitle}</h2>
                                    <p className="text-green-600 font-semibold text-sm mb-4">{c.fasciaSub}</p>
                                    <p className="text-gray-700 leading-relaxed mb-6">{c.fasciaDesc}</p>
                                    <div className="space-y-3">
                                        <div>
                                            <span className="text-xs font-bold text-gray-400 uppercase tracking-wide block mb-1">{c.fasciaFunctions}</span>
                                            <ul className="text-sm text-gray-700 space-y-1.5">
                                                {c.fasciaFunctionsList.map((f, i) => <li key={i}>• {f}</li>)}
                                            </ul>
                                        </div>
                                        <div>
                                            <span className="text-xs font-bold text-gray-400 uppercase tracking-wide block mb-1">{c.fasciaMaterials}</span>
                                            <p className="text-sm text-gray-700">{c.fasciaMaterialsText}</p>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>
                        </div>

                        <AnimatedSection>
                            <div className="bg-gray-50 rounded-2xl border border-gray-200 p-8">
                                <h2 className="text-xl font-extrabold text-gray-900 mb-4">{c.connectionTitle}</h2>
                                <p className="text-gray-700 leading-relaxed mb-4">{c.connectionP1}</p>
                                <p className="text-gray-700 leading-relaxed">{c.connectionP2}</p>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* ── SIDE BY SIDE TABLE ──────────────────────────────────── */}
                <section className="py-8 pb-16 bg-gray-50 border-y border-gray-100">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <AnimatedSection>
                            <h2 className="text-2xl font-extrabold text-gray-900 mb-8">{c.tableTitle}</h2>
                        </AnimatedSection>
                        <AnimatedSection delay={60}>
                            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
                                <table className="w-full bg-white text-sm">
                                    <thead>
                                        <tr className="border-b border-gray-200 bg-gray-50">
                                            <th className="text-left p-4 font-bold text-gray-500 uppercase text-xs tracking-wide w-1/3">{c.tableHeaders[0]}</th>
                                            <th className="text-center p-4 font-extrabold text-blue-700 uppercase text-xs tracking-wide w-1/3">{c.tableHeaders[1]}</th>
                                            <th className="text-center p-4 font-extrabold text-green-700 uppercase text-xs tracking-wide w-1/3">{c.tableHeaders[2]}</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {c.tableRows.map((row, i) => (
                                            <tr key={i} className="hover:bg-gray-50 transition-colors">
                                                <td className="p-4 font-semibold text-gray-700">{row.feature}</td>
                                                <td className="p-4 text-center text-gray-600">{row.soffit}</td>
                                                <td className="p-4 text-center text-gray-600">{row.fascia}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* ── FAQ ───────────────────────────────────────────────── */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <AnimatedSection>
                            <h2 className="text-2xl font-extrabold text-gray-900 mb-8">{c.faqTitle}</h2>
                        </AnimatedSection>
                        <div className="space-y-4">
                            {c.faqs.map((faq, i) => (
                                <AnimatedSection key={i} delay={i * 60} from="bottom">
                                    <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6">
                                        <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── RELATED SERVICES ─────────────────────────────────── */}
                <RelatedServices serviceKeys={["services", "repairs", "new-construction"]} locale={locale} />

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
