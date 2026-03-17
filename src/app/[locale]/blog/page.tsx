import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "blog" });
    const url = locale === "en" ? "https://bubblesenterprise.com/blog" : `https://bubblesenterprise.com/${locale}/blog`;
    return {
        title: t("title"),
        description: t("subtitle"),
        openGraph: {
            title: t("title"),
            description: t("subtitle"),
            url,
        },
        alternates: {
            canonical: url,
            languages: {
                en: "https://bubblesenterprise.com/blog",
                es: "https://bubblesenterprise.com/es/blog",
                pt: "https://bubblesenterprise.com/pt/blog",
                "x-default": "https://bubblesenterprise.com/blog",
            },
        },
    };
}

const postsByLocale: Record<string, {
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    readTime: string;
    date: string;
    dateDisplay: string;
    featured: boolean;
}[]> = {
    en: [
        {
            slug: "tax-refund-soffit-investment",
            title: "You Got Your Tax Refund. Now What? The Smartest Home Investment You'll Make This Year",
            excerpt: "The average refund is $2,800. Most people blow it on things that lose value overnight. Here's why smart Orlando homeowners are investing theirs in soffit and fascia instead.",
            category: "Home Investment",
            readTime: "7 min read",
            date: "2026-03-10",
            dateDisplay: "March 10, 2026",
            featured: true,
        },
        {
            slug: "how-to-tell-if-soffit-is-damaged",
            title: "How to Tell if Your Soffit is Damaged (7 Warning Signs)",
            excerpt: "Learn to identify the early signs of soffit damage before a small problem becomes a $3,000 replacement. Includes a step-by-step visual inspection guide.",
            category: "Inspection & Repair",
            readTime: "6 min read",
            date: "2026-01-15",
            dateDisplay: "January 15, 2026",
            featured: false,
        },
        {
            slug: "aluminum-vs-vinyl-soffit",
            title: "Aluminum vs Vinyl Soffit: The Complete 2026 Comparison for Florida Homes",
            excerpt: "Side-by-side comparison of aluminum and vinyl soffit for Florida's climate. Covers cost, lifespan, hurricane resistance, and which material to choose.",
            category: "Materials",
            readTime: "8 min read",
            date: "2026-01-22",
            dateDisplay: "January 22, 2026",
            featured: false,
        },
        {
            slug: "soffit-lifespan-by-material",
            title: "How Long Does Soffit Last? Lifespan by Material (With Florida Data)",
            excerpt: "Aluminum: 20–30 years. Vinyl: 15–20 years. Wood: 10–15 years. Exact lifespan data by material type and why Florida's climate shortens every timeline.",
            category: "Materials",
            readTime: "5 min read",
            date: "2026-02-01",
            dateDisplay: "February 1, 2026",
            featured: false,
        },
        {
            slug: "animals-in-damaged-soffit-orlando",
            title: "What Animals Get Into Damaged Soffits in Orlando? (And How to Stop Them)",
            excerpt: "Raccoons, squirrels, rats, and wasps are common soffit intruders in Central Florida. Learn what each species does and the only permanent fix.",
            category: "Pests & Damage",
            readTime: "7 min read",
            date: "2026-02-10",
            dateDisplay: "February 10, 2026",
            featured: false,
        },
        {
            slug: "soffit-vs-fascia-difference",
            title: "Soffit vs Fascia: What's the Difference? (Plain English Explanation)",
            excerpt: "Soffit covers the underside of the roof overhang. Fascia is the vertical board at the roofline edge. Here's exactly what each does and why both matter.",
            category: "Education",
            readTime: "4 min read",
            date: "2026-02-18",
            dateDisplay: "February 18, 2026",
            featured: false,
        },
        {
            slug: "soffit-fascia-color-trends-2026",
            title: "Soffit & Fascia Color Trends 2026: What's In, What's Out",
            excerpt: "Gray is out. Greige is in. Dark fascia accents are everywhere. See what color combinations are trending for 2026 Florida homes.",
            category: "Design & Materials",
            readTime: "6 min read",
            date: "2026-03-01",
            dateDisplay: "March 1, 2026",
            featured: false,
        },
        {
            slug: "termites-in-soffit-orlando",
            title: "Termites in Soffit Orlando: Signs, Damage & What to Do",
            excerpt: "Drywood termites target soffit and fascia in Orlando homes. Learn to identify frass pellets and hollow wood — and why repair must come after treatment.",
            category: "Pests & Damage",
            readTime: "7 min read",
            date: "2026-03-01",
            dateDisplay: "March 1, 2026",
            featured: false,
        },
        {
            slug: "hurricane-proof-soffit-florida",
            title: "Hurricane-Proof Soffit Florida: What Actually Works (2026)",
            excerpt: "After Hurricane Michael, engineers documented exactly where soffit fails. Wind ratings by material, the 4 failure modes, and what Florida code requires.",
            category: "Installation & Materials",
            readTime: "8 min read",
            date: "2026-03-01",
            dateDisplay: "March 1, 2026",
            featured: false,
        },
        {
            slug: "wood-soffit-trap-florida",
            title: "Why Wood Soffit Is a Trap in Florida (And What to Do About It)",
            excerpt: "Wood soffit rots, attracts termites, grows mold, and lets animals in — all faster in Florida's climate. Here's the real cost of keeping it and why aluminum is the permanent fix.",
            category: "Materials",
            readTime: "7 min read",
            date: "2026-03-17",
            dateDisplay: "March 17, 2026",
            featured: false,
        },
    ],
    es: [
        {
            slug: "tax-refund-soffit-investment",
            title: "Recibió Su Reembolso de Impuestos. ¿Y Ahora Qué? La Inversión Más Inteligente para Su Hogar",
            excerpt: "El reembolso promedio es $2,800. La mayoría lo gasta en cosas que pierden valor de la noche a la mañana. Los propietarios inteligentes de Orlando lo invierten en soffit y fascia.",
            category: "Inversión en Su Hogar",
            readTime: "7 min de lectura",
            date: "2026-03-10",
            dateDisplay: "10 de marzo de 2026",
            featured: true,
        },
        {
            slug: "how-to-tell-if-soffit-is-damaged",
            title: "Cómo Saber si el Soffit Está Dañado (7 Señales de Alerta)",
            excerpt: "Aprenda a identificar los primeros signos de daño en el soffit antes de que un problema pequeño se convierta en un reemplazo de $3,000. Incluye guía de inspección visual paso a paso.",
            category: "Inspección y Reparación",
            readTime: "6 min de lectura",
            date: "2026-01-15",
            dateDisplay: "15 de enero de 2026",
            featured: false,
        },
        {
            slug: "aluminum-vs-vinyl-soffit",
            title: "Soffit de Aluminio vs Vinilo: Comparación Completa 2026 para Casas en Florida",
            excerpt: "Comparación lado a lado de soffit de aluminio y vinilo para el clima de Florida. Costo, vida útil, resistencia a huracanes y cuál elegir.",
            category: "Materiales",
            readTime: "8 min de lectura",
            date: "2026-01-22",
            dateDisplay: "22 de enero de 2026",
            featured: false,
        },
        {
            slug: "soffit-lifespan-by-material",
            title: "¿Cuánto Dura el Soffit? Vida Útil por Material (Con Datos de Florida)",
            excerpt: "Aluminio: 20–30 años. Vinilo: 15–20 años. Madera: 10–15 años. Datos exactos por tipo de material y por qué el clima de Florida acorta cada plazo.",
            category: "Materiales",
            readTime: "5 min de lectura",
            date: "2026-02-01",
            dateDisplay: "1 de febrero de 2026",
            featured: false,
        },
        {
            slug: "animals-in-damaged-soffit-orlando",
            title: "¿Qué Animales Entran por el Soffit Dañado en Orlando? (Y Cómo Detenerlos)",
            excerpt: "Mapaches, ardillas, ratas y avispas son intrusos comunes del soffit en el Centro de Florida. Aprenda qué hace cada especie y la única solución permanente.",
            category: "Plagas y Daños",
            readTime: "7 min de lectura",
            date: "2026-02-10",
            dateDisplay: "10 de febrero de 2026",
            featured: false,
        },
        {
            slug: "soffit-vs-fascia-difference",
            title: "Soffit vs Fascia: ¿Cuál es la Diferencia? (Explicación en Español)",
            excerpt: "El soffit cubre la parte inferior del alero del techo. La fascia es la tabla vertical en el borde del alero. Esto es exactamente lo que hace cada uno y por qué ambos importan.",
            category: "Educación",
            readTime: "4 min de lectura",
            date: "2026-02-18",
            dateDisplay: "18 de febrero de 2026",
            featured: false,
        },
        {
            slug: "soffit-fascia-color-trends-2026",
            title: "Tendencias de Color para Soffit y Fascia 2026: Lo Que Está de Moda",
            excerpt: "El gris está pasado de moda. El greige está en su lugar. Los acentos oscuros en la fascia están en todas partes. Vea qué combinaciones están en tendencia para 2026.",
            category: "Diseño y Materiales",
            readTime: "6 min de lectura",
            date: "2026-03-01",
            dateDisplay: "1 de marzo de 2026",
            featured: false,
        },
        {
            slug: "termites-in-soffit-orlando",
            title: "Termitas en el Soffit en Orlando: Señales, Daños y Qué Hacer",
            excerpt: "Las termitas de madera seca atacan el soffit y la fascia en Orlando. Aprenda a identificar la frasa y madera hueca, y por qué el reparo debe venir después del tratamiento.",
            category: "Plagas y Daños",
            readTime: "7 min de lectura",
            date: "2026-03-01",
            dateDisplay: "1 de marzo de 2026",
            featured: false,
        },
        {
            slug: "hurricane-proof-soffit-florida",
            title: "Soffit Resistente a Huracanes en Florida: Qué Funciona Realmente (2026)",
            excerpt: "Después del Huracán Michael, los ingenieros documentaron dónde falla el soffit. Clasificaciones de viento por material, los 4 modos de falla y lo que exige el código de Florida.",
            category: "Instalación y Materiales",
            readTime: "8 min de lectura",
            date: "2026-03-01",
            dateDisplay: "1 de marzo de 2026",
            featured: false,
        },
        {
            slug: "wood-soffit-trap-florida",
            title: "Soffit de Madera en Florida: La Trampa Que le Cuesta Miles de Dólares",
            excerpt: "La madera se pudre, atrae termitas, crea moho y deja entrar animales, todo más rápido en el clima de Florida. Aquí está el costo real de mantenerla y por qué el aluminio es la solución permanente.",
            category: "Materiales",
            readTime: "7 min de lectura",
            date: "2026-03-17",
            dateDisplay: "17 de marzo de 2026",
            featured: false,
        },
    ],
    pt: [
        {
            slug: "tax-refund-soffit-investment",
            title: "Recebeu Sua Restituição de Imposto. E Agora? O Investimento Mais Inteligente para Seu Lar",
            excerpt: "A restituição media e $2.800. A maioria gasta em coisas que perdem valor da noite para o dia. Proprietarios inteligentes de Orlando investem em soffit e fascia.",
            category: "Investimento no Lar",
            readTime: "7 min de leitura",
            date: "2026-03-10",
            dateDisplay: "10 de marco de 2026",
            featured: true,
        },
        {
            slug: "how-to-tell-if-soffit-is-damaged",
            title: "Como Saber se o Soffit Está Danificado (7 Sinais de Alerta)",
            excerpt: "Aprenda a identificar os primeiros sinais de dano no soffit antes que um problema pequeno vire uma troca de $3.000. Inclui guia de inspeção visual passo a passo.",
            category: "Inspeção e Reparo",
            readTime: "6 min de leitura",
            date: "2026-01-15",
            dateDisplay: "15 de janeiro de 2026",
            featured: false,
        },
        {
            slug: "aluminum-vs-vinyl-soffit",
            title: "Soffit de Alumínio vs Vinil: Comparação Completa 2026 para Casas na Flórida",
            excerpt: "Comparação lado a lado de soffit de alumínio e vinil para o clima da Flórida. Custo, vida útil, resistência a furacões e qual escolher.",
            category: "Materiais",
            readTime: "8 min de leitura",
            date: "2026-01-22",
            dateDisplay: "22 de janeiro de 2026",
            featured: false,
        },
        {
            slug: "soffit-lifespan-by-material",
            title: "Quanto Tempo Dura o Soffit? Vida Útil por Material (Com Dados da Flórida)",
            excerpt: "Alumínio: 20–30 anos. Vinil: 15–20 anos. Madeira: 10–15 anos. Dados exatos por tipo de material e por que o clima da Flórida encurta cada prazo.",
            category: "Materiais",
            readTime: "5 min de leitura",
            date: "2026-02-01",
            dateDisplay: "1 de fevereiro de 2026",
            featured: false,
        },
        {
            slug: "animals-in-damaged-soffit-orlando",
            title: "Quais Animais Entram pelo Soffit Danificado em Orlando? (E Como Parar)",
            excerpt: "Guaxinins, esquilos, ratos e vespas são intrusos comuns no Centro da Flórida. Veja o que cada espécie faz e a única solução permanente.",
            category: "Pragas e Danos",
            readTime: "7 min de leitura",
            date: "2026-02-10",
            dateDisplay: "10 de fevereiro de 2026",
            featured: false,
        },
        {
            slug: "soffit-vs-fascia-difference",
            title: "Soffit vs Fascia: Qual a Diferença? (Explicação em Português)",
            excerpt: "O soffit cobre a parte inferior do beiral do telhado. A fascia é a placa vertical na borda do beiral. Veja exatamente o que cada um faz e por que ambos importam.",
            category: "Educação",
            readTime: "4 min de leitura",
            date: "2026-02-18",
            dateDisplay: "18 de fevereiro de 2026",
            featured: false,
        },
        {
            slug: "soffit-fascia-color-trends-2026",
            title: "Tendências de Cor para Soffit e Fascia 2026: O Que Está em Alta",
            excerpt: "O cinza está ultrapassado. O greige entrou no lugar. Acentos escuros na fascia estão em todo lugar. Veja quais combinações estão em alta para 2026.",
            category: "Design e Materiais",
            readTime: "6 min de leitura",
            date: "2026-03-01",
            dateDisplay: "1 de março de 2026",
            featured: false,
        },
        {
            slug: "termites-in-soffit-orlando",
            title: "Cupins no Soffit em Orlando: Sinais, Danos e O Que Fazer",
            excerpt: "Os cupins-de-madeira-seca atacam o soffit e a fascia em Orlando. Aprenda a identificar frass e madeira oca, e por que o reparo deve vir após o tratamento.",
            category: "Pragas e Danos",
            readTime: "7 min de leitura",
            date: "2026-03-01",
            dateDisplay: "1 de março de 2026",
            featured: false,
        },
        {
            slug: "hurricane-proof-soffit-florida",
            title: "Soffit Resistente a Furacões na Flórida: O Que Realmente Funciona (2026)",
            excerpt: "Após o Furacão Michael, engenheiros documentaram onde o soffit falha. Classificações de vento por material, os 4 modos de falha e o que o código da Flórida exige.",
            category: "Instalação e Materiais",
            readTime: "8 min de leitura",
            date: "2026-03-01",
            dateDisplay: "1 de março de 2026",
            featured: false,
        },
        {
            slug: "wood-soffit-trap-florida",
            title: "Soffit de Madeira na Flórida: A Armadilha Que Custa Milhares",
            excerpt: "Madeira apodrece, atrai cupins, cria mofo e deixa bicho entrar, tudo mais rápido no clima da Flórida. Veja o custo real de manter e por que alumínio é a solução definitiva.",
            category: "Materiais",
            readTime: "7 min de leitura",
            date: "2026-03-17",
            dateDisplay: "17 de março de 2026",
            featured: false,
        },
    ],
};

const categoryColors: Record<string, string> = {
    "Inspection & Repair": "bg-blue-100 text-blue-700",
    "Materials": "bg-purple-100 text-purple-700",
    "Pests & Damage": "bg-orange-100 text-orange-700",
    "Education": "bg-green-100 text-green-700",
    "Design & Materials": "bg-pink-100 text-pink-700",
    "Installation & Materials": "bg-cyan-100 text-cyan-700",
    "Home Investment": "bg-emerald-100 text-emerald-700",
    // ES
    "Inspección y Reparación": "bg-blue-100 text-blue-700",
    "Materiales": "bg-purple-100 text-purple-700",
    "Plagas y Daños": "bg-orange-100 text-orange-700",
    "Educación": "bg-green-100 text-green-700",
    "Diseño y Materiales": "bg-pink-100 text-pink-700",
    "Instalación y Materiales": "bg-cyan-100 text-cyan-700",
    "Inversión en Su Hogar": "bg-emerald-100 text-emerald-700",
    // PT
    "Inspeção e Reparo": "bg-blue-100 text-blue-700",
    "Materiais": "bg-purple-100 text-purple-700",
    "Pragas e Danos": "bg-orange-100 text-orange-700",
    "Educação": "bg-green-100 text-green-700",
    "Design e Materiais": "bg-pink-100 text-pink-700",
    "Instalação e Materiais": "bg-cyan-100 text-cyan-700",
    "Investimento no Lar": "bg-emerald-100 text-emerald-700",
};

const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": "https://bubblesenterprise.com/blog#blog",
    name: "Bubbles Enterprise Soffit & Fascia Blog",
    description: "Expert guides on soffit and fascia installation, repair, materials, and costs for Central Florida homeowners.",
    url: "https://bubblesenterprise.com/blog",
    publisher: { "@id": "https://bubblesenterprise.com/#business" },
    blogPost: postsByLocale.en.map(p => ({
        "@type": "BlogPosting",
        "@id": `https://bubblesenterprise.com/blog/${p.slug}#article`,
        headline: p.title,
        url: `https://bubblesenterprise.com/blog/${p.slug}`,
        datePublished: p.date,
        dateModified: p.date,
        author: { "@type": "Person", "name": "Bubbles Enterprise Team", "jobTitle": "Licensed Soffit & Fascia Contractors", "url": "https://bubblesenterprise.com/about", "worksFor": { "@id": "https://bubblesenterprise.com/#business" } },
    })),
};

export default async function BlogIndexPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "blog" });

    const lp = (path: string) => locale === "en" ? path : `/${locale}${path}`;
    const posts = postsByLocale[locale as keyof typeof postsByLocale] ?? postsByLocale.en;
    const [featured, ...rest] = posts;

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <div className="flex flex-col min-h-screen">

                {/* ── HERO ── */}
                <section className="py-24 bg-gradient-to-br from-slate-900 to-blue-950 text-white">
                    <div className="container mx-auto px-4 max-w-5xl text-center">
                        <AnimatedSection>
                            <span className="inline-block bg-blue-500/20 border border-blue-400/30 text-blue-200 text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
                                {t("expertGuides")}
                            </span>
                            <h1 className="text-4xl sm:text-5xl font-extrabold mb-5 leading-tight">
                                {t("title")}
                            </h1>
                            <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
                                {t("heroSubtitle")}
                            </p>
                        </AnimatedSection>
                    </div>
                </section>

                {/* ── FEATURED POST ── */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <AnimatedSection>
                            <Link
                                href={lp(`/blog/${featured.slug}`)}
                                className="group block bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl border border-blue-100 p-8 md:p-10 hover:shadow-xl hover:border-blue-200 transition-all"
                            >
                                <div className="flex flex-wrap gap-3 mb-4 items-center">
                                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${categoryColors[featured.category]}`}>
                                        {featured.category}
                                    </span>
                                    <span className="text-xs bg-blue-600 text-white font-bold px-3 py-1 rounded-full">{t("featuredLabel")}</span>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors leading-tight">
                                    {featured.title}
                                </h2>
                                <p className="text-gray-600 leading-relaxed mb-6 text-base md:text-lg max-w-3xl">
                                    {featured.excerpt}
                                </p>
                                <div className="flex items-center justify-between flex-wrap gap-3">
                                    <div className="flex items-center gap-4 text-sm text-gray-400">
                                        <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{featured.readTime}</span>
                                        <span>{featured.dateDisplay}</span>
                                    </div>
                                    <span className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm group-hover:gap-3 transition-all">
                                        {t("readMore")} <ArrowRight className="w-4 h-4" />
                                    </span>
                                </div>
                            </Link>
                        </AnimatedSection>
                    </div>
                </section>

                {/* ── ALL POSTS ── */}
                <section className="py-8 pb-24 bg-gray-50">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <AnimatedSection className="mb-10">
                            <h2 className="text-2xl font-extrabold text-gray-900">{t("allArticles")}</h2>
                        </AnimatedSection>
                        <div className="grid md:grid-cols-2 gap-6">
                            {rest.map((post, i) => (
                                <AnimatedSection key={post.slug} delay={i * 70} from="bottom">
                                    <Link
                                        href={lp(`/blog/${post.slug}`)}
                                        className="group block bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg hover:border-blue-200 transition-all h-full flex flex-col"
                                    >
                                        <span className={`text-xs font-bold px-3 py-1 rounded-full w-max mb-4 ${categoryColors[post.category]}`}>
                                            {post.category}
                                        </span>
                                        <h2 className="text-lg font-extrabold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors leading-snug flex-grow">
                                            {post.title}
                                        </h2>
                                        <p className="text-gray-500 text-sm leading-relaxed mb-5">
                                            {post.excerpt}
                                        </p>
                                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                                            <div className="flex items-center gap-3 text-xs text-gray-400">
                                                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{post.readTime}</span>
                                                <span>{post.dateDisplay}</span>
                                            </div>
                                            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                                        </div>
                                    </Link>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── CTA ── */}
                <section className="py-20 bg-gradient-to-br from-bubble-primary to-blue-800 text-white text-center">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <AnimatedSection>
                            <h2 className="text-3xl font-extrabold mb-4">{t("ctaTitle")}</h2>
                            <p className="text-blue-200 text-lg mb-8">{t("ctaSubtitle")}</p>
                            <Link
                                href={lp("/contact")}
                                className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition shadow-xl"
                            >
                                {t("ctaCta")} <ArrowRight className="w-5 h-5" />
                            </Link>
                        </AnimatedSection>
                    </div>
                </section>
            </div>
        </>
    );
}
