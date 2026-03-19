import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, XCircle, Phone, AlertTriangle } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { RelatedServices } from "@/components/ui/RelatedServices";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const slug = "aluminum-vs-vinyl-soffit";
    const url = locale === "en" ? `https://bubblesenterprise.com/blog/${slug}` : `https://bubblesenterprise.com/${locale}/blog/${slug}`;

    const titles: Record<string, string> = {
        en: "Aluminum vs Vinyl vs Wood Soffit: Complete 2026 Comparison for Florida Homes",
        es: "Soffit de Aluminio vs Vinilo vs Madera: Comparación Completa 2026 para Casas en Florida",
        pt: "Soffit de Alumínio vs Vinil vs Madeira: Comparação Completa 2026 para Casas na Flórida",
    };
    const descriptions: Record<string, string> = {
        en: "Side-by-side comparison of aluminum, vinyl, and wood soffit for Florida's climate. Cost, lifespan, hurricane resistance, heat tolerance, and which one to choose.",
        es: "Comparación de soffit de aluminio, vinilo y madera para el clima de Florida. Costo, vida útil, resistencia a huracanes, tolerancia al calor y cuál elegir.",
        pt: "Comparação entre soffit de alumínio, vinil e madeira para o clima da Flórida. Custo, vida útil, resistência a furacões, tolerância ao calor e qual escolher.",
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
    const blogUrl = locale === "en" ? `https://bubblesenterprise.com/blog/aluminum-vs-vinyl-soffit` : `https://bubblesenterprise.com/${locale}/blog/aluminum-vs-vinyl-soffit`;
    return {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": "https://bubblesenterprise.com/blog/aluminum-vs-vinyl-soffit#article",
            headline: "Aluminum vs Vinyl vs Wood Soffit: The Complete 2026 Comparison for Florida Homes",
            description: "Side-by-side comparison of aluminum, vinyl, and wood soffit for Florida's climate — cost, lifespan, hurricane resistance, and which material to choose.",
            url: blogUrl,
            datePublished: "2026-01-22",
            dateModified: "2026-03-18",
            author: { "@type": "Person", "name": "Bubbles Enterprise Team", "jobTitle": "Licensed Soffit & Fascia Contractors", "url": "https://bubblesenterprise.com/about", "worksFor": { "@id": "https://bubblesenterprise.com/#business" } },
            publisher: { "@id": "https://bubblesenterprise.com/#business" },
            articleSection: "Materials",
            keywords: "aluminum soffit, vinyl soffit, wood soffit, aluminum vs vinyl vs wood, soffit materials Florida, best soffit material Orlando",
            inLanguage: locale,
        },
        {
            "@type": "FAQPage",
            "@id": "https://bubblesenterprise.com/blog/aluminum-vs-vinyl-soffit#faq",
            inLanguage: locale,
            mainEntity: [
                {
                    "@type": "Question",
                    name: "Is aluminum or vinyl soffit better for Florida?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Aluminum is the better choice for most Florida homes. It is non-combustible, hurricane-rated, has a 20-30 year lifespan, and handles Florida humidity without warping or cracking. Vinyl is acceptable for budget-constrained projects and performs well in normal conditions, but it can warp in extreme heat and is not fire-resistant.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How much more does aluminum soffit cost vs vinyl?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Aluminum soffit typically costs 10-20% more than vinyl on a completed project. The material cost difference is small; most of the cost is labor, which is the same for both materials. For a typical single-story Orlando home, the price difference between aluminum and vinyl is usually $150-$400 total.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does vinyl soffit warp in Florida heat?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Vinyl can warp or buckle when exposed to sustained temperatures above 140°F (60°C). In Florida, unventilated south-facing soffit sections can reach these temperatures in summer. Aluminum does not warp regardless of temperature and is the safer choice for Florida's climate.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is wood soffit a good choice for Florida?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Generally no. Florida's humidity, heat, and termite population make wood the most maintenance-intensive option. It needs repainting every 3-5 years and regular termite treatment. We only recommend wood when an HOA or historic preservation board requires it. For most homes, aluminum is better in every measurable way.",
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
        readTime: "12 min read · Updated March 18, 2026",
        authorLine: <>By <span className="font-semibold text-gray-700">Eddy</span> · Soffit &amp; Fascia Specialist · <time dateTime="2026-03-18">Updated March 18, 2026</time></>,
        h1a: "Aluminum vs Vinyl vs Wood Soffit:",
        h1b: "Complete 2026 Comparison",
        intro: "The most common question homeowners ask us. Here's an honest side-by-side breakdown of all three materials — cost, lifespan, hurricane resistance, and the final answer for Florida homes.",
        verdictTitle: "The Short Answer",
        verdictBody: <><strong>Aluminum is the better material for Florida homes</strong> in almost every category: fire resistance, hurricane rating, heat tolerance, pest resistance, and lifespan. Vinyl costs slightly less and offers more color options, but the premium for aluminum on a typical project is only $150–$400. Wood is the most expensive and high-maintenance option. It offers natural beauty but requires regular painting, is vulnerable to rot, termites, and fire. Not recommended for Florida unless required by HOA or historic preservation.</>,
        verdictNote: "The exception: if you have a tight budget and the soffit is on a shaded north-facing side with minimal wind exposure, vinyl is a perfectly acceptable choice.",
        introP: "When we visit a home in Orlando, the most common question is: \"Should I go with aluminum, vinyl, or wood?\" There's no universal answer — it depends on your budget, home orientation, and how long you plan to stay in the house. Here's what each material actually does:",
        tableTitle: "Head-to-Head Comparison",
        tableNote: "Based on Central Florida conditions, 2026 data. Prices vary by project.",
        whenTitle: "When to Choose Each Material",
        aluminumTitle: "Choose Aluminum When…",
        vinylTitle: "Vinyl is Acceptable When…",
        woodTitle: "Consider Wood Only When…",
        vinylWarning: "Avoid vinyl on south/west-facing soffit in Florida — heat warping is a real risk.",
        woodWarning: "Wood soffit in Florida without regular maintenance will rot within 5-7 years. Termites are a constant threat. Budget $500-$1,000+ for repainting every 3-5 years.",
        faqTitle: "Common Questions",
        notSureTitle: "Not Sure Which to Choose?",
        notSureBody: "We'll assess your home and recommend the right material for your specific situation. Free estimate, no pressure.",
        ctaBtn: "Get a Free Estimate",
        ctaPhone: "Call (407) 715-1790",
        faqs: [
            {
                q: "Is aluminum or vinyl soffit better for Florida?",
                a: "Aluminum is the better choice for most Florida homes. Non-combustible, hurricane-rated, 20–30 year lifespan, handles Florida humidity without warping. Vinyl is acceptable for budget-constrained projects in shaded locations, but it can warp in extreme heat and is not fire-resistant.",
            },
            {
                q: "How much more does aluminum cost vs vinyl?",
                a: "On a completed project, aluminum typically runs 10–20% more than vinyl. Since most of the cost is labor (the same for both), the actual dollar difference on a typical single-story Orlando home is usually $150–$400 total.",
            },
            {
                q: "Does vinyl soffit warp in Florida heat?",
                a: "It can. Vinyl can buckle when sustained temperatures exceed 140°F (60°C). Unventilated south-facing soffit in Florida can reach these temperatures in summer. Aluminum doesn't warp regardless of heat and is the safer choice.",
            },
            {
                q: "Is wood soffit a good choice for Florida?",
                a: "Generally no. Florida's humidity, heat, and termite population make wood the most maintenance-intensive option. It needs repainting every 3-5 years and regular termite treatment. We only recommend wood when an HOA or historic preservation board requires it. For most homes, aluminum is better in every measurable way.",
            },
        ],
        aluminumReasons: [
            "You want the longest-lasting material for Florida",
            "Your home is on south or west-facing exposure (high UV and heat)",
            "You have or want gutters (aluminum holds fasteners better)",
            "New construction — builder-grade standard",
            "You have a history of pest intrusion",
            "Your HOA requires matching existing aluminum profiles",
            "You want a 30-year manufacturer warranty option",
        ],
        vinylReasons: [
            "Budget is the primary constraint",
            "Shaded north-facing or covered location",
            "Shorter-term ownership (selling in 5–10 years)",
            "Matching existing vinyl on the home",
            "Lower-wind-exposure location (interior neighborhoods)",
        ],
        woodReasons: [
            "HOA or historic district requires natural wood",
            "Custom architectural detail (exposed rafter tails)",
            "You're committed to repainting every 3-5 years",
            "The soffit is in a covered, dry, well-ventilated area",
        ],
        comparison: [
            { category: "Cost (installed)", aluminum: "Slightly higher", vinyl: "Slightly lower", wood: "Highest", winner: "vinyl" },
            { category: "Lifespan (Florida)", aluminum: "20–30 years", vinyl: "15–20 years", wood: "10-15 years (if maintained)", winner: "aluminum" },
            { category: "Hurricane resistance", aluminum: "Excellent — hurricane rated", vinyl: "Good — adequate for most storms", wood: "Poor — can splinter", winner: "aluminum" },
            { category: "Heat tolerance", aluminum: "Does not warp", vinyl: "Can warp above 140°F", wood: "Expands/contracts", winner: "aluminum" },
            { category: "Fire resistance", aluminum: "Non-combustible", vinyl: "Will burn", wood: "Combustible", winner: "aluminum" },
            { category: "Moisture resistance", aluminum: "100% — won't rot", vinyl: "100% — won't rot", wood: "Rots without treatment", winner: "aluminum" },
            { category: "Pest resistance", aluminum: "Hard to penetrate", vinyl: "Can be chewed through", wood: "Very vulnerable (termites)", winner: "aluminum" },
            { category: "Color options", aluminum: "10 colors available", vinyl: "Wider color variety", wood: "Unlimited (paint)", winner: "wood" },
            { category: "Maintenance", aluminum: "None required", vinyl: "Occasional cleaning", wood: "Repaint every 3-5 years", winner: "aluminum" },
            { category: "Environmental", aluminum: "100% recyclable", vinyl: "Not recyclable", wood: "Biodegradable", winner: "aluminum" },
            { category: "Manufacturer warranty", aluminum: "Up to 30 years", vinyl: "10–15 years typical", wood: "5-10 years typical", winner: "aluminum" },
            { category: "Installation difficulty", aluminum: "Professional recommended", vinyl: "Professional recommended", wood: "Professional required", winner: "tie" },
        ],
    },
    es: {
        breadcrumb: "Blog",
        category: "Materiales",
        readTime: "12 min de lectura · Actualizado 18 de marzo de 2026",
        authorLine: <>Por <span className="font-semibold text-gray-700">Eddy</span> · Especialista en Soffit y Fascia · <time dateTime="2026-03-18">Actualizado 18 de marzo de 2026</time></>,
        h1a: "Soffit de Aluminio vs Vinilo vs Madera:",
        h1b: "Comparación Completa 2026",
        intro: "La pregunta más común que nos hacen los propietarios. Aquí hay un análisis honesto de los tres materiales: costo, vida útil, resistencia a huracanes y la respuesta definitiva para casas en Florida.",
        verdictTitle: "La Respuesta Corta",
        verdictBody: <><strong>El aluminio es el mejor material para casas en Florida</strong> en casi todas las categorías: resistencia al fuego, clasificación de huracanes, tolerancia al calor, resistencia a plagas y vida útil. El vinilo cuesta un poco menos y ofrece más opciones de color, pero la prima por aluminio en un proyecto típico es solo $150–$400. La madera es la opción más costosa y de mayor mantenimiento. Ofrece belleza natural pero necesita pintura regular, es vulnerable a la putrefacción, termitas y fuego. No se recomienda para Florida a menos que su HOA o normas de preservación histórica lo requieran.</>,
        verdictNote: "La excepción: si tiene un presupuesto ajustado y el soffit está en un lado norte sombreado con mínima exposición al viento, el vinilo es una opción perfectamente aceptable.",
        introP: "Cuando visitamos una casa en Orlando, la pregunta más común es: \"¿Debo elegir aluminio, vinilo o madera?\" No hay una respuesta universal: depende de su presupuesto, orientación de la casa y cuánto tiempo planea quedarse. Aquí está lo que cada material realmente hace:",
        tableTitle: "Comparación Cara a Cara",
        tableNote: "Basado en condiciones del Centro de Florida, datos de 2026. Los precios varían según el proyecto.",
        whenTitle: "¿Cuándo Elegir Cada Material?",
        aluminumTitle: "Elija Aluminio Cuando…",
        vinylTitle: "El Vinilo es Aceptable Cuando…",
        woodTitle: "Considere Madera Solo Cuando…",
        vinylWarning: "Evite el vinilo en el soffit orientado al sur/oeste en Florida. La deformación por calor es un riesgo real.",
        woodWarning: "El soffit de madera en Florida sin mantenimiento regular se pudrirá en 5-7 años. Las termitas son una amenaza constante. Presupueste $500-$1,000+ para repintar cada 3-5 años.",
        faqTitle: "Preguntas Frecuentes",
        notSureTitle: "¿No Está Seguro Cuál Elegir?",
        notSureBody: "Evaluaremos su casa y recomendaremos el material correcto para su situación específica. Estimado gratuito, sin presiones.",
        ctaBtn: "Obtener un Estimado Gratuito",
        ctaPhone: "Llamar (407) 715-1790",
        faqs: [
            {
                q: "¿El soffit de aluminio o vinilo es mejor para Florida?",
                a: "El aluminio es la mejor opción para la mayoría de las casas en Florida. No combustible, clasificado para huracanes, vida útil de 20–30 años, maneja la humedad de Florida sin deformarse. El vinilo es aceptable para proyectos con presupuesto limitado en ubicaciones sombreadas, pero puede deformarse con calor extremo y no es resistente al fuego.",
            },
            {
                q: "¿Cuánto más cuesta el aluminio vs el vinilo?",
                a: "En un proyecto terminado, el aluminio generalmente cuesta un 10–20% más que el vinilo. Como la mayor parte del costo es mano de obra (igual para ambos), la diferencia en dólares en una casa típica de un piso en Orlando es generalmente $150–$400 en total.",
            },
            {
                q: "¿El soffit de vinilo se deforma con el calor de Florida?",
                a: "Puede hacerlo. El vinilo puede pandearse cuando las temperaturas sostenidas superan los 60°C (140°F). El soffit no ventilado orientado al sur en Florida puede alcanzar estas temperaturas en verano. El aluminio no se deforma independientemente del calor y es la opción más segura.",
            },
            {
                q: "¿El soffit de madera es buena opción para Florida?",
                a: "En general, no. La humedad, el calor y la cantidad de termitas en Florida hacen que la madera sea la opción que más mantenimiento necesita. Requiere repintar cada 3-5 años y tratamiento regular contra termitas. Solo recomendamos madera cuando el HOA o las normas de preservación histórica lo exigen. Para la mayoría de los hogares, el aluminio es superior en todos los aspectos medibles.",
            },
        ],
        aluminumReasons: [
            "Desea el material más duradero para Florida",
            "Su casa tiene exposición sur u oeste (alto UV y calor)",
            "Tiene o desea canaletas (el aluminio sujeta mejor los anclajes)",
            "Nueva construcción, estándar de calidad de constructor",
            "Tiene historial de intrusión de plagas",
            "Su HOA requiere perfiles de aluminio coincidentes",
            "Desea opción de garantía del fabricante de 30 años",
        ],
        vinylReasons: [
            "El presupuesto es la restricción principal",
            "Ubicación norte sombreada o cubierta",
            "Propiedad a corto plazo (venta en 5–10 años)",
            "Combinación con vinilo existente en la casa",
            "Ubicación con baja exposición al viento (barrios interiores)",
        ],
        woodReasons: [
            "El HOA o distrito histórico exige madera natural",
            "Detalle arquitectónico personalizado (colas de viga expuestas)",
            "Usted se compromete a repintar cada 3-5 años",
            "El soffit está en un área cubierta, seca y bien ventilada",
        ],
        comparison: [
            { category: "Costo (instalado)", aluminum: "Un poco más alto", vinyl: "Un poco más bajo", wood: "El más alto", winner: "vinyl" },
            { category: "Vida útil (Florida)", aluminum: "20–30 años", vinyl: "15–20 años", wood: "10-15 años (con mantenimiento)", winner: "aluminum" },
            { category: "Resistencia a huracanes", aluminum: "Excelente, clasificado para huracanes", vinyl: "Buena, adecuado para la mayoría de tormentas", wood: "Mala, puede astillarse", winner: "aluminum" },
            { category: "Tolerancia al calor", aluminum: "No se deforma", vinyl: "Puede deformarse sobre 60°C", wood: "Se expande/contrae", winner: "aluminum" },
            { category: "Resistencia al fuego", aluminum: "No combustible", vinyl: "Combustible", wood: "Combustible", winner: "aluminum" },
            { category: "Resistencia a la humedad", aluminum: "100%, no se pudre", vinyl: "100%, no se pudre", wood: "Se pudre sin tratamiento", winner: "aluminum" },
            { category: "Resistencia a plagas", aluminum: "Difícil de penetrar", vinyl: "Pueden roerlo", wood: "Muy vulnerable (termitas)", winner: "aluminum" },
            { category: "Opciones de color", aluminum: "10 colores disponibles", vinyl: "Mayor variedad de colores", wood: "Ilimitados (pintura)", winner: "wood" },
            { category: "Mantenimiento", aluminum: "No requiere mantenimiento", vinyl: "Limpieza ocasional", wood: "Repintar cada 3-5 años", winner: "aluminum" },
            { category: "Medioambiental", aluminum: "100% reciclable", vinyl: "No reciclable", wood: "Biodegradable", winner: "aluminum" },
            { category: "Garantía del fabricante", aluminum: "Hasta 30 años", vinyl: "10–15 años típico", wood: "5-10 años típico", winner: "aluminum" },
            { category: "Dificultad de instalación", aluminum: "Se recomienda profesional", vinyl: "Se recomienda profesional", wood: "Requiere profesional", winner: "tie" },
        ],
    },
    pt: {
        breadcrumb: "Blog",
        category: "Materiais",
        readTime: "12 min de leitura · Atualizado 18 de março de 2026",
        authorLine: <>Por <span className="font-semibold text-gray-700">Eddy</span> · Especialista em Soffit e Fascia · <time dateTime="2026-03-18">Atualizado 18 de março de 2026</time></>,
        h1a: "Soffit de Alumínio vs Vinil vs Madeira:",
        h1b: "Comparação Completa 2026",
        intro: "A pergunta mais comum que os proprietários nos fazem. Aqui está uma análise honesta dos três materiais: custo, vida útil, resistência a furacões e a resposta definitiva para casas na Flórida.",
        verdictTitle: "A Resposta Curta",
        verdictBody: <><strong>O alumínio é o melhor material para casas na Flórida</strong> em quase todas as categorias: resistência ao fogo, classificação para furacões, tolerância ao calor, resistência a pragas e vida útil. O vinil custa um pouco menos e oferece mais opções de cores, mas o valor extra pelo alumínio em um projeto típico é apenas $150–$400. A madeira é a opção mais cara e que exige mais manutenção. Tem beleza natural, mas precisa de pintura regular, é vulnerável ao apodrecimento, cupins e fogo. Não recomendamos para a Flórida, a menos que o HOA ou normas de preservação histórica exijam.</>,
        verdictNote: "A exceção: se você tem orçamento limitado e o soffit fica em um lado norte sombreado com mínima exposição ao vento, o vinil é uma escolha perfeitamente aceitável.",
        introP: "Quando visitamos uma casa em Orlando, a pergunta mais comum é: \"Devo usar alumínio, vinil ou madeira?\" Não há uma resposta universal: depende do seu orçamento, orientação da casa e quanto tempo planeja ficar. Aqui está o que cada material realmente faz:",
        tableTitle: "Comparação Frente a Frente",
        tableNote: "Baseado nas condições do Centro da Flórida, dados de 2026. Preços variam por projeto.",
        whenTitle: "Quando Escolher Cada Material?",
        aluminumTitle: "Escolha Alumínio Quando…",
        vinylTitle: "O Vinil é Aceitável Quando…",
        woodTitle: "Considere Madeira Apenas Quando…",
        vinylWarning: "Evite vinil no soffit voltado para o sul/oeste na Flórida. A deformação pelo calor é um risco real.",
        woodWarning: "Soffit de madeira na Flórida sem manutenção regular vai apodrecer em 5-7 anos. Cupins são uma ameaça constante. Separe $500-$1.000+ para repintura a cada 3-5 anos.",
        faqTitle: "Perguntas Frequentes",
        notSureTitle: "Não Tem Certeza Qual Escolher?",
        notSureBody: "Avaliamos sua casa e recomendamos o material correto para a sua situação específica. Orçamento gratuito, sem pressão.",
        ctaBtn: "Obter Orçamento Gratuito",
        ctaPhone: "Ligar (407) 715-1790",
        faqs: [
            {
                q: "O soffit de alumínio ou vinil é melhor para a Flórida?",
                a: "O alumínio é a melhor escolha para a maioria das casas na Flórida. Não combustível, classificado para furacões, vida útil de 20–30 anos, lida com a umidade da Flórida sem deformar. O vinil é aceitável para projetos com orçamento limitado em locais sombreados, mas pode deformar com calor extremo e não é resistente ao fogo.",
            },
            {
                q: "Quanto mais caro é o alumínio vs o vinil?",
                a: "Em um projeto concluído, o alumínio geralmente custa 10–20% a mais que o vinil. Como a maior parte do custo é mão de obra (igual para ambos), a diferença em dólares em uma casa típica de um andar em Orlando é geralmente $150–$400 no total.",
            },
            {
                q: "O soffit de vinil deforma com o calor da Flórida?",
                a: "Pode. O vinil pode empenar quando as temperaturas sustentadas excedem 60°C (140°F). O soffit não ventilado voltado para o sul na Flórida pode atingir essas temperaturas no verão. O alumínio não deforma independentemente do calor e é a escolha mais segura.",
            },
            {
                q: "Soffit de madeira é uma boa escolha para a Flórida?",
                a: "No geral, não. A umidade, o calor e a quantidade de cupins na Flórida fazem da madeira a opção que mais exige manutenção. Precisa de repintura a cada 3-5 anos e tratamento regular contra cupins. Nós só recomendamos madeira quando o HOA ou normas de preservação histórica exigem. Para a maioria das casas, o alumínio é melhor em todos os aspectos mensuráveis.",
            },
        ],
        aluminumReasons: [
            "Você quer o material mais durável para a Flórida",
            "Sua casa tem exposição ao sul ou oeste (alto UV e calor)",
            "Você tem ou quer calhas (o alumínio segura melhor os fixadores)",
            "Nova construção, padrão de qualidade do construtor",
            "Você tem histórico de intrusão de pragas",
            "Seu HOA exige perfis de alumínio compatíveis",
            "Você quer opção de garantia do fabricante de 30 anos",
        ],
        vinylReasons: [
            "O orçamento é a principal restrição",
            "Local norte sombreado ou coberto",
            "Propriedade de curto prazo (venda em 5–10 anos)",
            "Combinando com vinil existente na casa",
            "Local com baixa exposição ao vento (bairros internos)",
        ],
        woodReasons: [
            "O HOA ou distrito histórico exige madeira natural",
            "Detalhe arquitetônico personalizado (pontas de caibro expostas)",
            "Você se compromete a repintar a cada 3-5 anos",
            "O soffit fica em área coberta, seca e bem ventilada",
        ],
        comparison: [
            { category: "Custo (instalado)", aluminum: "Um pouco mais alto", vinyl: "Um pouco mais baixo", wood: "O mais alto", winner: "vinyl" },
            { category: "Vida útil (Flórida)", aluminum: "20–30 anos", vinyl: "15–20 anos", wood: "10-15 anos (com manutenção)", winner: "aluminum" },
            { category: "Resistência a furacões", aluminum: "Excelente, classificado para furacões", vinyl: "Boa, adequado para a maioria das tempestades", wood: "Ruim, pode estilhaçar", winner: "aluminum" },
            { category: "Tolerância ao calor", aluminum: "Não deforma", vinyl: "Pode deformar acima de 60°C", wood: "Expande/contrai", winner: "aluminum" },
            { category: "Resistência ao fogo", aluminum: "Não combustível", vinyl: "Combustível", wood: "Combustível", winner: "aluminum" },
            { category: "Resistência à umidade", aluminum: "100%, não apodrece", vinyl: "100%, não apodrece", wood: "Apodrece sem tratamento", winner: "aluminum" },
            { category: "Resistência a pragas", aluminum: "Difícil de penetrar", vinyl: "Pode ser roído", wood: "Muito vulnerável (cupins)", winner: "aluminum" },
            { category: "Opções de cor", aluminum: "10 cores disponíveis", vinyl: "Maior variedade de cores", wood: "Ilimitadas (pintura)", winner: "wood" },
            { category: "Manutenção", aluminum: "Nenhuma necessária", vinyl: "Limpeza ocasional", wood: "Repintar a cada 3-5 anos", winner: "aluminum" },
            { category: "Ambiental", aluminum: "100% reciclável", vinyl: "Não reciclável", wood: "Biodegradável", winner: "aluminum" },
            { category: "Garantia do fabricante", aluminum: "Até 30 anos", vinyl: "10–15 anos típico", wood: "5-10 anos típico", winner: "aluminum" },
            { category: "Dificuldade de instalação", aluminum: "Profissional recomendado", vinyl: "Profissional recomendado", wood: "Profissional necessário", winner: "tie" },
        ],
    },
};

export default async function AluminumVsVinylPage({
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

                {/* ── QUICK VERDICT ──────────────────────────────────────── */}
                <section className="py-14 bg-white">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <AnimatedSection>
                            <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-8 mb-12">
                                <h2 className="text-xl font-extrabold text-gray-900 mb-3">{c.verdictTitle}</h2>
                                <p className="text-gray-700 leading-relaxed text-lg">{c.verdictBody}</p>
                                <p className="text-gray-600 mt-4 text-sm leading-relaxed">{c.verdictNote}</p>
                            </div>
                            <p className="text-gray-700 text-lg leading-relaxed mb-6">{c.introP}</p>
                        </AnimatedSection>
                    </div>
                </section>

                {/* ── COMPARISON TABLE ───────────────────────────────────── */}
                <section className="py-8 pb-16 bg-gray-50 border-y border-gray-100">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <AnimatedSection>
                            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-8">{c.tableTitle}</h2>
                        </AnimatedSection>
                        <AnimatedSection delay={80}>
                            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
                                <table className="w-full bg-white text-sm">
                                    <thead>
                                        <tr className="border-b border-gray-200">
                                            <th className="text-left p-4 font-bold text-gray-500 uppercase text-xs tracking-wide w-1/4"></th>
                                            <th className="text-center p-4 font-extrabold text-blue-700 uppercase text-xs tracking-wide w-1/4">Aluminum / Alumínio</th>
                                            <th className="text-center p-4 font-extrabold text-teal-700 uppercase text-xs tracking-wide w-1/4">Vinyl / Vinil</th>
                                            <th className="text-center p-4 font-extrabold text-amber-700 uppercase text-xs tracking-wide w-1/4">Wood / Madeira</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {c.comparison.map((row, i) => (
                                            <tr key={i} className="hover:bg-gray-50 transition-colors">
                                                <td className="p-4 font-semibold text-gray-700">{row.category}</td>
                                                <td className={`p-4 text-center ${row.winner === "aluminum" ? "text-blue-700 font-bold" : "text-gray-600"}`}>
                                                    <span className="flex items-center justify-center gap-2">
                                                        {row.winner === "aluminum" && <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />}
                                                        {row.aluminum}
                                                    </span>
                                                </td>
                                                <td className={`p-4 text-center ${row.winner === "vinyl" ? "text-teal-700 font-bold" : "text-gray-600"}`}>
                                                    <span className="flex items-center justify-center gap-2">
                                                        {row.winner === "vinyl" && <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />}
                                                        {row.vinyl}
                                                    </span>
                                                </td>
                                                <td className={`p-4 text-center ${row.winner === "wood" ? "text-amber-700 font-bold" : "text-gray-600"}`}>
                                                    <span className="flex items-center justify-center gap-2">
                                                        {row.winner === "wood" && <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />}
                                                        {row.wood}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-xs text-gray-400 mt-3 text-center">{c.tableNote}</p>
                        </AnimatedSection>
                    </div>
                </section>

                {/* ── WHEN TO CHOOSE EACH ────────────────────────────────── */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <AnimatedSection>
                            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-8">{c.whenTitle}</h2>
                        </AnimatedSection>
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <AnimatedSection from="left">
                                <div className="bg-blue-50 rounded-2xl border border-blue-200 p-7 h-full">
                                    <h3 className="text-xl font-extrabold text-blue-900 mb-4">{c.aluminumTitle}</h3>
                                    <ul className="space-y-3">
                                        {c.aluminumReasons.map(item => (
                                            <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                                                <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </AnimatedSection>
                            <AnimatedSection from="right">
                                <div className="bg-teal-50 rounded-2xl border border-teal-200 p-7 h-full">
                                    <h3 className="text-xl font-extrabold text-teal-900 mb-4">{c.vinylTitle}</h3>
                                    <ul className="space-y-3">
                                        {c.vinylReasons.map(item => (
                                            <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                                                <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-5 pt-5 border-t border-teal-200">
                                        <p className="text-xs font-bold text-teal-700 flex items-start gap-2">
                                            <XCircle className="w-4 h-4 shrink-0 mt-0.5" />
                                            {c.vinylWarning}
                                        </p>
                                    </div>
                                </div>
                            </AnimatedSection>
                        </div>
                        <AnimatedSection from="bottom">
                            <div className="bg-amber-50 rounded-2xl border border-amber-200 p-7">
                                <h3 className="text-xl font-extrabold text-amber-900 mb-4">{c.woodTitle}</h3>
                                <ul className="space-y-3">
                                    {c.woodReasons.map(item => (
                                        <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                                            <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-5 pt-5 border-t border-amber-200">
                                    <p className="text-xs font-bold text-amber-700 flex items-start gap-2">
                                        <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                                        {c.woodWarning}
                                    </p>
                                </div>
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
                            <h2 className="text-3xl font-extrabold mb-4">{c.notSureTitle}</h2>
                            <p className="text-blue-200 text-lg mb-8">{c.notSureBody}</p>
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
