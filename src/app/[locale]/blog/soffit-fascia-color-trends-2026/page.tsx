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
    const slug = "soffit-fascia-color-trends-2026";
    const url = locale === "en" ? `https://bubblesenterprise.com/blog/${slug}` : `https://bubblesenterprise.com/${locale}/blog/${slug}`;

    const titles: Record<string, string> = {
        en: "Soffit & Fascia Color Trends 2026 | What's In, What's Out",
        es: "Tendencias de Color para Soffit y Fascia 2026 | Lo Que Está de Moda",
        pt: "Tendências de Cor para Soffit e Fascia 2026 | O Que Está em Alta",
    };
    const descriptions: Record<string, string> = {
        en: "Greige is replacing gray. Dark fascia accents are everywhere. See what soffit and fascia color combinations are trending for 2026 Florida homes.",
        es: "El greige está reemplazando al gris. Los acentos oscuros en la fascia están en todas partes. Vea qué combinaciones de colores están en tendencia para casas en Florida en 2026.",
        pt: "O greige está substituindo o cinza. Acentos escuros na fascia estão em todo lugar. Veja quais combinações de cores estão em alta para casas na Flórida em 2026.",
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
    const blogUrl = locale === "en" ? `https://bubblesenterprise.com/blog/soffit-fascia-color-trends-2026` : `https://bubblesenterprise.com/${locale}/blog/soffit-fascia-color-trends-2026`;
    return {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": "https://bubblesenterprise.com/blog/soffit-fascia-color-trends-2026#article",
            headline: "Soffit & Fascia Color Trends 2026: What's In, What's Out",
            description: "Greige is replacing gray. Dark fascia accents are everywhere. The 2026 exterior color trends for soffit and fascia in Florida homes.",
            url: blogUrl,
            datePublished: "2026-03-01",
            dateModified: "2026-03-01",
            author: { "@type": "Person", "name": "Bubbles Enterprise Team", "jobTitle": "Licensed Soffit & Fascia Contractors", "url": "https://bubblesenterprise.com/about", "worksFor": { "@id": "https://bubblesenterprise.com/#business" } },
            publisher: { "@id": "https://bubblesenterprise.com/#business" },
            articleSection: "Design & Materials",
            keywords: "soffit color trends 2026, fascia color ideas, greige soffit, best soffit colors Florida, exterior color trends 2026",
            inLanguage: locale,
        },
        {
            "@type": "FAQPage",
            "@id": "https://bubblesenterprise.com/blog/soffit-fascia-color-trends-2026#faq",
            inLanguage: locale,
            mainEntity: [
                {
                    "@type": "Question",
                    name: "What color should I paint or choose for my soffit in 2026?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "For 2026, the top choices are warm whites, off-whites, and greige (grey-beige blend). These tones complement the shift away from cool grays that dominated 2018-2024.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What fascia color is trending in 2026?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Dark accent fascia is the biggest trend — black, deep navy, and dark charcoal fascia paired with a light soffit creates high-contrast curb appeal. This style is very popular in new construction across Central Florida.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is gray soffit going out of style?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Pure cool gray is considered dated by most 2026 design forecasters. Warm grays blended with beige — called greige — are replacing it.",
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
        category: "Design & Materials",
        readTime: "6 min read · March 1, 2026",
        authorLine: <>By <span className="font-semibold text-gray-700">Eddy</span> · Soffit &amp; Fascia Specialist · <time dateTime="2026-03-01">March 1, 2026</time></>,
        h1: <>Soffit &amp; Fascia Color Trends 2026:<br /><span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">What&apos;s In, What&apos;s Out</span></>,
        heroIntro: "Gray is out. Greige is in. Dark fascia accents are everywhere. If you're replacing your soffit and fascia in 2026, here's exactly what color combinations are driving curb appeal — with real data from design forecasters and Florida contractors.",
        whyTitle: "Why Soffit & Fascia Color Matters More Than You Think",
        whyP1: "Most homeowners treat soffit and fascia as afterthoughts — white goes with everything, right? That was true in 2010. In 2026, the roofline frame is one of the most visible design elements of a home's exterior, and the color combination you choose communicates the entire style of the house.",
        whyP2: <>According to Pantone, the 2026 Color of the Year is <strong>&quot;Mocha Mousse&quot;</strong> — a warm, earthy brown that signals the broader shift from cool, sterile neutrals toward organic warmth. Benjamin Moore&apos;s pick, <strong>&quot;Cinnamon Slate&quot;</strong>, follows the same direction. Both reinforce what exterior design forecasters are seeing in the field: <em>warm is replacing cool, and contrast is replacing blend.</em></>,
        whyP3: "In Florida specifically, the Pantone influence is noticeable in new developments in Lake Nona, Horizon West, and the Celebration area — where builders are moving away from the beige/gray stucco monotony and introducing intentional roofline contrast.",
        trendingTitle: "4 Trending Color Combinations for 2026",
        trendingSub: "Ranked by popularity in Central Florida new construction and replacement projects",
        mostPopular: "#%d Most Popular",
        soffitLabel: "Soffit",
        fasciaLabel: "Fascia",
        outTitle: "What's Going Out of Style",
        floridaTitle: "A Note for Florida Homeowners",
        floridaP1: <>Florida&apos;s intense UV exposure affects color retention differently than northern states. <strong>Darker colors on soffit can absorb significantly more heat</strong>, which can affect material performance over time — especially vinyl, which can warp in sustained high temperatures.</>,
        floridaP2: "If you want a dark fascia accent (the #1 trend), aluminum is the recommended material — it handles Florida heat far better than vinyl. For soffit, stick with lighter colors even if you go dark on the fascia. This is both the trending design approach and the better technical choice for Florida climates.",
        floridaBoxTitle: "Our recommendation for Florida homes in 2026",
        floridaBoxBody: "White or off-white aluminum soffit + dark aluminum fascia accent (black, navy, or dark charcoal). Best curb appeal, trending design, and the right material for Florida's climate — all in one combination.",
        faqTitle: "Common Questions",
        ctaTitle: "Choosing Your Color Combo?",
        ctaBody: "We offer physical samples of all 10 aluminum colors. See exactly how they look on your home before you commit.",
        ctaBtn: "Request Free Color Consult",
        ctaPhone: "Call (407) 715-1790",
        combos: [
            {
                title: "High-Contrast Contemporary",
                soffit: "Bright White / Cloud Dancer",
                fascia: "Matte Black or Deep Charcoal",
                style: "Contemporary / Modern",
                note: "The most requested combination in new construction 2025-2026. The white soffit visually lifts the roofline while the black fascia creates a sharp, architectural frame. Works on almost any house style.",
            },
            {
                title: "Warm Neutral (The New Standard)",
                soffit: "Off-White / Warm Beige",
                fascia: "Greige / Warm Tan",
                style: "Traditional / Transitional",
                note: "Replacing the cool gray era. Greige reads as timeless and works with brick, stone veneer, stucco, and fiber cement siding — the dominant exterior materials in Orlando-area homes.",
            },
            {
                title: "Earthy Organic",
                soffit: "Sand / Linen / Clay",
                fascia: "Chocolate Brown or Dark Taupe",
                style: "Craftsman / Farmhouse",
                note: "Earth tones are surging in 2026 driven by the broader 'nature and organic' design movement. Clay and sand tones look especially good on stucco homes — the dominant construction style in Central Florida.",
            },
            {
                title: "Navy Accent",
                soffit: "White or Light Gray",
                fascia: "Deep Navy Blue",
                style: "Coastal / Preppy",
                note: "A bold choice gaining ground in 2026. Deep navy fascia paired with white soffit creates a classic nautical look. Popular in newer communities like Celebration and Lake Nona.",
            },
        ],
        outItems: [
            { what: "Uniform Cool Gray Throughout", why: "Dominated 2018-2024 but now reads as generic. Overtaken by warmer, more nuanced neutrals." },
            { what: "Bright White + Beige Combo (Classic Builder Grade)", why: "Not wrong — still functional — but lacks visual interest. The 2026 move is adding contrast through a darker fascia." },
            { what: "Wood-Tone Stain on Real Wood Soffit", why: "Natural wood soffit is declining rapidly due to maintenance demands and vulnerability to Florida's heat and moisture. Composite wood-look (PVC cellular) is replacing it." },
            { what: "Matching Soffit and Body Color", why: "Making the soffit blend into the wall was a 2010s trend. In 2026, the soffit is intentionally differentiated — either lighter or contrasting — to define the roofline." },
        ],
        faqs: [
            {
                q: "What color should I choose for my soffit in 2026?",
                a: "Warm whites, off-whites, and greige (grey-beige blend) are the top choices for 2026. These tones work with virtually any house color and align with the broader trend away from cool grays toward warmer, more organic neutrals.",
            },
            {
                q: "What fascia color is trending in 2026?",
                a: "Dark accent fascia is the #1 trend — matte black, deep charcoal, and deep navy paired with a light soffit. This high-contrast approach is dominating new construction in Central Florida communities like Lake Nona, Horizon West, and Celebration.",
            },
            {
                q: "Is gray soffit going out of style?",
                a: "Cool gray is considered dated by most 2026 design forecasters. Warm gray blended with beige — called greige — is replacing it. If your soffit is already gray it's fine, but if replacing, choose a warm white or greige to stay current.",
            },
        ],
    },
    es: {
        breadcrumb: "Blog",
        category: "Diseño y Materiales",
        readTime: "6 min de lectura · 1 de marzo de 2026",
        authorLine: <>Por <span className="font-semibold text-gray-700">Eddy</span> · Especialista en Soffit y Fascia · <time dateTime="2026-03-01">1 de marzo de 2026</time></>,
        h1: <>Tendencias de Color para Soffit y Fascia 2026:<br /><span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">Lo Que Está de Moda</span></>,
        heroIntro: "El gris está pasado de moda. El greige está en su lugar. Los acentos oscuros en la fascia están en todas partes. Si está reemplazando su soffit y fascia en 2026, aquí tiene exactamente qué combinaciones de colores están marcando tendencia.",
        whyTitle: "Por Qué el Color del Soffit y la Fascia Importa Más de lo que Cree",
        whyP1: "La mayoría de los propietarios tratan el soffit y la fascia como detalles secundarios. En 2026, el marco del alero es uno de los elementos de diseño más visibles del exterior de una casa, y la combinación de colores que elija comunica el estilo completo de la propiedad.",
        whyP2: <>Según Pantone, el Color del Año 2026 es <strong>&quot;Mocha Mousse&quot;</strong>, un marrón cálido y orgánico que señala el cambio general de los neutrales fríos y estériles hacia la calidez orgánica. La elección de Benjamin Moore, <strong>&quot;Cinnamon Slate&quot;</strong>, sigue la misma dirección. Ambas refuerzan lo que los pronosticadores de diseño exterior están viendo: <em>lo cálido reemplaza a lo frío, y el contraste reemplaza a la uniformidad.</em></>,
        whyP3: "En Florida específicamente, la influencia de Pantone es notable en nuevos desarrollos en Lake Nona, Horizon West y el área de Celebration, donde los constructores están abandonando la monotonía del estuco beige/gris e introduciendo contraste intencional en el alero.",
        trendingTitle: "4 Combinaciones de Color en Tendencia para 2026",
        trendingSub: "Ordenadas por popularidad en nueva construcción y proyectos de reemplazo en el Centro de Florida",
        mostPopular: "#%d Más Popular",
        soffitLabel: "Soffit",
        fasciaLabel: "Fascia",
        outTitle: "Lo Que Está Pasando de Moda",
        floridaTitle: "Una Nota para Propietarios en Florida",
        floridaP1: <>La intensa exposición UV de Florida afecta la retención del color de manera diferente a los estados del norte. <strong>Los colores más oscuros en el soffit pueden absorber significativamente más calor</strong>, lo que puede afectar el rendimiento del material con el tiempo, especialmente el vinilo que puede deformarse en temperaturas altas sostenidas.</>,
        floridaP2: "Si desea un acento de fascia oscuro (la tendencia #1), el aluminio es el material recomendado: soporta el calor de Florida mucho mejor que el vinilo. Para el soffit, opte por colores más claros incluso si va oscuro en la fascia. Esta es tanto la opción de diseño de moda como la mejor elección técnica para el clima de Florida.",
        floridaBoxTitle: "Nuestra recomendación para casas en Florida en 2026",
        floridaBoxBody: "Soffit de aluminio blanco o blanco cálido + acento de fascia de aluminio oscuro (negro, azul marino o carbón oscuro). El mejor atractivo visual, el diseño de moda y el material adecuado para el clima de Florida, todo en una sola combinación.",
        faqTitle: "Preguntas Frecuentes",
        ctaTitle: "¿Eligiendo su Combinación de Colores?",
        ctaBody: "Ofrecemos muestras físicas de los 10 colores de aluminio disponibles. Vea exactamente cómo quedan en su casa antes de comprometerse.",
        ctaBtn: "Solicitar Consulta de Color Gratuita",
        ctaPhone: "Llamar (407) 715-1790",
        combos: [
            {
                title: "Contemporáneo de Alto Contraste",
                soffit: "Blanco Brillante / Cloud Dancer",
                fascia: "Negro Mate o Carbón Oscuro",
                style: "Contemporáneo / Moderno",
                note: "La combinación más solicitada en nueva construcción 2025-2026. El soffit blanco levanta visualmente el alero mientras que la fascia negra crea un marco arquitectónico definido. Funciona con casi cualquier estilo de casa.",
            },
            {
                title: "Neutro Cálido (El Nuevo Estándar)",
                soffit: "Blanco Cálido / Beige Cálido",
                fascia: "Greige / Bronceado Cálido",
                style: "Tradicional / Transitional",
                note: "Reemplazando la era del gris frío. El greige se lee como atemporal y funciona con ladrillo, revestimiento de piedra, estuco y siding de cemento de fibra, los materiales exteriores dominantes en casas del área de Orlando.",
            },
            {
                title: "Orgánico Terrenal",
                soffit: "Arena / Lino / Arcilla",
                fascia: "Marrón Chocolate o Taupe Oscuro",
                style: "Artesanal / Farmhouse",
                note: "Los tonos tierra están creciendo en 2026 impulsados por el movimiento de diseño 'naturaleza y orgánico'. Los tonos arcilla y arena quedan especialmente bien en casas de estuco, el estilo de construcción dominante en el Centro de Florida.",
            },
            {
                title: "Acento Azul Marino",
                soffit: "Blanco o Gris Claro",
                fascia: "Azul Marino Profundo",
                style: "Costero / Clásico",
                note: "Una opción atrevida que está ganando terreno en 2026. La fascia azul marino profundo con soffit blanco crea un look náutico clásico. Popular en comunidades nuevas como Celebration y Lake Nona.",
            },
        ],
        outItems: [
            { what: "Gris Frío Uniforme en Todo", why: "Dominó 2018-2024 pero ahora se ve genérico. Superado por neutrales más cálidos y matizados." },
            { what: "Combinación Blanco Brillante + Beige (Estándar del Constructor)", why: "No está mal, sigue siendo funcional, pero le falta interés visual. La tendencia 2026 es agregar contraste con una fascia más oscura." },
            { what: "Tinte de Madera Natural en Soffit de Madera", why: "El soffit de madera natural está declinando rápidamente por el mantenimiento y la vulnerabilidad al calor y la humedad de Florida. El PVC con apariencia de madera lo está reemplazando." },
            { what: "Soffit del Mismo Color que la Pared", why: "Hacer que el soffit se mezcle con la pared fue una tendencia de los años 2010. En 2026, el soffit se diferencia intencionalmente, ya sea más claro o contrastante, para definir el alero." },
        ],
        faqs: [
            {
                q: "¿Qué color debo elegir para mi soffit en 2026?",
                a: "Los blancos cálidos, blancos cremosos y greige (mezcla gris-beige) son las mejores opciones para 2026. Estos tonos funcionan con prácticamente cualquier color de casa y se alinean con la tendencia general hacia neutrales más cálidos y orgánicos.",
            },
            {
                q: "¿Qué color de fascia está de moda en 2026?",
                a: "La fascia de acento oscuro es la tendencia #1: negro mate, carbón oscuro y azul marino profundo combinados con un soffit claro. Este enfoque de alto contraste domina la nueva construcción en comunidades del Centro de Florida como Lake Nona, Horizon West y Celebration.",
            },
            {
                q: "¿El soffit gris está pasando de moda?",
                a: "El gris frío es considerado anticuado por la mayoría de los pronosticadores de diseño 2026. El gris cálido mezclado con beige, llamado greige, lo está reemplazando. Si su soffit ya es gris está bien, pero si lo va a reemplazar, elija un blanco cálido o greige para mantenerse actual.",
            },
        ],
    },
    pt: {
        breadcrumb: "Blog",
        category: "Design e Materiais",
        readTime: "6 min de leitura · 1 de março de 2026",
        authorLine: <>Por <span className="font-semibold text-gray-700">Eddy</span> · Especialista em Soffit e Fascia · <time dateTime="2026-03-01">1 de março de 2026</time></>,
        h1: <>Tendências de Cor para Soffit e Fascia 2026:<br /><span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">O Que Está em Alta</span></>,
        heroIntro: "O cinza está ultrapassado. O greige entrou no lugar. Acentos escuros na fascia estão em todo lugar. Se você está trocando o soffit e a fascia em 2026, veja exatamente quais combinações de cores estão em alta.",
        whyTitle: "Por Que a Cor do Soffit e da Fascia Importa Mais do Que Você Pensa",
        whyP1: "A maioria dos proprietários trata soffit e fascia como detalhes secundários. Em 2026, o enquadramento do beiral é um dos elementos de design mais visíveis do exterior de uma casa, e a combinação de cores que você escolhe comunica o estilo completo da propriedade.",
        whyP2: <>De acordo com a Pantone, a Cor do Ano 2026 é <strong>&quot;Mocha Mousse&quot;</strong>, um marrom quente e orgânico que sinaliza a mudança geral dos neutros frios e estéreis para a caloria orgânica. A escolha da Benjamin Moore, <strong>&quot;Cinnamon Slate&quot;</strong>, segue a mesma direção. As duas reforçam o que os especialistas em design exterior estão vendo: <em>o quente está substituindo o frio, e o contraste está substituindo a uniformidade.</em></>,
        whyP3: "Na Flórida especificamente, a influência da Pantone é notável em novos empreendimentos em Lake Nona, Horizon West e na área de Celebration, onde os construtores estão abandonando a monotonia do estuco bege/cinza e introduzindo contraste intencional no beiral.",
        trendingTitle: "4 Combinações de Cores em Alta para 2026",
        trendingSub: "Ordenadas por popularidade em nova construção e projetos de substituição no Centro da Flórida",
        mostPopular: "#%d Mais Popular",
        soffitLabel: "Soffit",
        fasciaLabel: "Fascia",
        outTitle: "O Que Está Saindo de Moda",
        floridaTitle: "Uma Nota para Proprietários na Flórida",
        floridaP1: <>A intensa exposição UV da Flórida afeta a retenção de cor de forma diferente dos estados do norte. <strong>Cores mais escuras no soffit podem absorber significativamente mais calor</strong>, o que pode afetar o desempenho do material ao longo do tempo, especialmente o vinil que pode deformar em temperaturas altas sustentadas.</>,
        floridaP2: "Se você quer um acento de fascia escuro (a tendência #1), o alumínio é o material recomendado: ele suporta o calor da Flórida muito melhor que o vinil. Para o soffit, fique com cores mais claras mesmo que vá escuro na fascia. Essa é tanto a opção de design em alta quanto a melhor escolha técnica para o clima da Flórida.",
        floridaBoxTitle: "Nossa recomendação para casas na Flórida em 2026",
        floridaBoxBody: "Soffit de alumínio branco ou branco cálido + acento de fascia de alumínio escuro (preto, azul-marinho ou carvão escuro). O melhor apelo visual, o design em alta e o material certo para o clima da Flórida, tudo em uma combinação.",
        faqTitle: "Perguntas Frequentes",
        ctaTitle: "Escolhendo sua Combinação de Cores?",
        ctaBody: "Oferecemos amostras físicas de todas as 10 cores de alumínio disponíveis. Veja exatamente como ficam na sua casa antes de decidir.",
        ctaBtn: "Solicitar Consulta de Cor Gratuita",
        ctaPhone: "Ligar (407) 715-1790",
        combos: [
            {
                title: "Contemporâneo de Alto Contraste",
                soffit: "Branco Brilhante / Cloud Dancer",
                fascia: "Preto Fosco ou Carvão Escuro",
                style: "Contemporâneo / Moderno",
                note: "A combinação mais solicitada em nova construção 2025-2026. O soffit branco levanta visualmente o beiral enquanto a fascia preta cria um enquadramento arquitetônico definido. Funciona com quase qualquer estilo de casa.",
            },
            {
                title: "Neutro Cálido (O Novo Padrão)",
                soffit: "Branco Cálido / Bege Cálido",
                fascia: "Greige / Tom Bronzeado",
                style: "Tradicional / Transitional",
                note: "Substituindo a era do cinza frio. O greige é atemporal e funciona com tijolo, revestimento de pedra, estuco e siding de cimento de fibra, os materiais exteriores dominantes nas casas da região de Orlando.",
            },
            {
                title: "Orgânico Terroso",
                soffit: "Areia / Linho / Argila",
                fascia: "Marrom Chocolate ou Taupe Escuro",
                style: "Artesanal / Farmhouse",
                note: "Tons terrosos estão crescendo em 2026 impulsionados pelo movimento de design 'natureza e orgânico'. Tons argila e areia ficam especialmente bem em casas de estuco, o estilo de construção dominante no Centro da Flórida.",
            },
            {
                title: "Acento Azul-Marinho",
                soffit: "Branco ou Cinza Claro",
                fascia: "Azul-Marinho Profundo",
                style: "Costeiro / Clássico",
                note: "Uma escolha ousada que está ganhando espaço em 2026. A fascia azul-marinho com soffit branco cria um visual náutico clássico. Popular em comunidades novas como Celebration e Lake Nona.",
            },
        ],
        outItems: [
            { what: "Cinza Frio Uniforme em Tudo", why: "Dominou 2018-2024 mas agora parece genérico. Superado por neutros mais quentes e matizados." },
            { what: "Combinação Branco Brilhante + Bege (Padrão do Construtor)", why: "Não está errado, ainda é funcional, mas falta interesse visual. A tendência 2026 é adicionar contraste com uma fascia mais escura." },
            { what: "Verniz de Madeira Natural no Soffit de Madeira", why: "O soffit de madeira natural está declinando rapidamente pela demanda de manutenção e vulnerabilidade ao calor e umidade da Flórida. O PVC com aparência de madeira está substituindo." },
            { what: "Soffit da Mesma Cor da Parede", why: "Fazer o soffit se misturar com a parede foi uma tendência dos anos 2010. Em 2026, o soffit é diferenciado intencionalmente, mais claro ou contrastante, para definir o beiral." },
        ],
        faqs: [
            {
                q: "Qual cor devo escolher para o meu soffit em 2026?",
                a: "Brancos cálidos, off-whites e greige (mistura cinza-bege) são as melhores opções para 2026. Esses tons funcionam com praticamente qualquer cor de casa e se alinham com a tendência geral de neutros mais quentes e orgânicos.",
            },
            {
                q: "Qual cor de fascia está em alta em 2026?",
                a: "A fascia de acento escuro é a tendência #1: preto fosco, carvão escuro e azul-marinho profundo combinados com soffit claro. Essa abordagem de alto contraste domina a nova construção em comunidades do Centro da Flórida como Lake Nona, Horizon West e Celebration.",
            },
            {
                q: "O soffit cinza está saindo de moda?",
                a: "O cinza frio é considerado ultrapassado pela maioria dos especialistas de design 2026. O cinza quente misturado com bege, chamado greige, está substituindo. Se o seu soffit já é cinza tudo bem, mas se for trocar, escolha um branco cálido ou greige para ficar atualizado.",
            },
        ],
    },
};

const comboStyles = [
    { popularity: "★★★★★", popColor: "text-yellow-500", border: "border-gray-900", bg: "bg-gray-50", dot1: "bg-white border-2 border-gray-300", dot2: "bg-gray-900" },
    { popularity: "★★★★★", popColor: "text-yellow-500", border: "border-amber-200", bg: "bg-amber-50", dot1: "bg-amber-50 border-2 border-amber-300", dot2: "bg-amber-300" },
    { popularity: "★★★★☆", popColor: "text-yellow-500", border: "border-yellow-700", bg: "bg-yellow-50", dot1: "bg-yellow-100 border-2 border-yellow-400", dot2: "bg-yellow-800" },
    { popularity: "★★★☆☆", popColor: "text-yellow-500", border: "border-blue-800", bg: "bg-blue-50", dot1: "bg-white border-2 border-gray-300", dot2: "bg-blue-900" },
];

export default async function SoffitColorTrends2026Page({
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
                <section className="py-24 bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950 text-white">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <AnimatedSection>
                            <div className="flex flex-wrap gap-3 items-center mb-6">
                                <Link href={blogHref} className="text-purple-300 hover:text-white text-sm transition">← {c.breadcrumb}</Link>
                                <span className="text-purple-500">/</span>
                                <span className="text-xs font-bold bg-purple-500/20 border border-purple-400/30 text-purple-200 px-3 py-1 rounded-full uppercase tracking-widest">{c.category}</span>
                                <span className="text-xs text-blue-400">{c.readTime}</span>
                            </div>
                            <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">{c.h1}</h1>
                            <p className="text-sm text-gray-400 mt-2 mb-4">{c.authorLine}</p>
                            <p className="text-xl text-purple-100 max-w-3xl leading-relaxed">{c.heroIntro}</p>
                        </AnimatedSection>
                    </div>
                </section>

                {/* ── CONTEXT ────────────────────────────────────────────── */}
                <section className="py-14 bg-white">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <AnimatedSection>
                            <h2 className="text-2xl font-extrabold text-gray-900 mb-5">{c.whyTitle}</h2>
                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p>{c.whyP1}</p>
                                <p>{c.whyP2}</p>
                                <p>{c.whyP3}</p>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* ── TRENDING COMBOS ──────────────────────────────────────── */}
                <section className="py-16 bg-gray-50 border-y border-gray-100">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <AnimatedSection className="text-center mb-12">
                            <h2 className="text-3xl font-extrabold text-gray-900 mb-3">{c.trendingTitle}</h2>
                            <p className="text-gray-500 text-lg">{c.trendingSub}</p>
                        </AnimatedSection>

                        <div className="space-y-6">
                            {c.combos.map((combo, i) => {
                                const s = comboStyles[i];
                                return (
                                    <AnimatedSection key={combo.title} delay={i * 80} from="bottom">
                                        <div className={`bg-white rounded-2xl border ${s.border} p-7 shadow-sm`}>
                                            <div className="flex items-start justify-between gap-4 flex-wrap mb-5">
                                                <div>
                                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-1">
                                                        {c.mostPopular.replace("%d", String(i + 1))}
                                                    </span>
                                                    <h3 className="text-xl font-extrabold text-gray-900">{combo.title}</h3>
                                                    <span className="text-sm text-gray-500">{combo.style}</span>
                                                </div>
                                                <span className={`text-lg ${s.popColor}`}>{s.popularity}</span>
                                            </div>

                                            <div className="grid sm:grid-cols-2 gap-4 mb-5">
                                                <div className={`${s.bg} rounded-xl p-4 flex items-center gap-3`}>
                                                    <div className={`w-8 h-8 rounded-full shrink-0 shadow ${s.dot1}`} />
                                                    <div>
                                                        <span className="text-xs font-bold text-gray-400 uppercase block">{c.soffitLabel}</span>
                                                        <span className="text-sm font-bold text-gray-900">{combo.soffit}</span>
                                                    </div>
                                                </div>
                                                <div className={`${s.bg} rounded-xl p-4 flex items-center gap-3`}>
                                                    <div className={`w-8 h-8 rounded-full shrink-0 shadow ${s.dot2}`} />
                                                    <div>
                                                        <span className="text-xs font-bold text-gray-400 uppercase block">{c.fasciaLabel}</span>
                                                        <span className="text-sm font-bold text-gray-900">{combo.fascia}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <p className="text-gray-600 text-sm leading-relaxed">{combo.note}</p>
                                        </div>
                                    </AnimatedSection>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* ── WHAT'S OUT ──────────────────────────────────────────── */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <AnimatedSection>
                            <h2 className="text-2xl font-extrabold text-gray-900 mb-8">{c.outTitle}</h2>
                        </AnimatedSection>
                        <div className="space-y-4">
                            {c.outItems.map((item, i) => (
                                <AnimatedSection key={i} delay={i * 60} from="bottom">
                                    <div className="bg-red-50 border border-red-100 rounded-2xl p-6">
                                        <div className="flex gap-3 items-start">
                                            <span className="text-red-400 font-black text-xl mt-0.5 shrink-0">✕</span>
                                            <div>
                                                <h3 className="font-bold text-gray-900 mb-1">{item.what}</h3>
                                                <p className="text-gray-600 text-sm leading-relaxed">{item.why}</p>
                                            </div>
                                        </div>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── FLORIDA NOTE ─────────────────────────────────────────── */}
                <section className="py-16 bg-blue-50 border-y border-blue-100">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <AnimatedSection>
                            <h2 className="text-2xl font-extrabold text-gray-900 mb-5">{c.floridaTitle}</h2>
                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p>{c.floridaP1}</p>
                                <p>{c.floridaP2}</p>
                                <div className="bg-white border border-blue-200 rounded-xl p-5 mt-4">
                                    <p className="text-sm font-bold text-blue-900 mb-1">{c.floridaBoxTitle}</p>
                                    <p className="text-sm text-blue-800 leading-relaxed">{c.floridaBoxBody}</p>
                                </div>
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
                <RelatedServices serviceKeys={["services", "materials", "calculator"]} locale={locale} />

                {/* ── CTA ───────────────────────────────────────────────── */}
                <section className="py-20 bg-gradient-to-br from-slate-900 to-indigo-950 text-white text-center">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <AnimatedSection>
                            <h2 className="text-3xl font-extrabold mb-4">{c.ctaTitle}</h2>
                            <p className="text-gray-300 text-lg mb-8">{c.ctaBody}</p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href={contactHref} className="inline-flex items-center justify-center gap-2 bg-bubble-primary text-white px-8 py-4 rounded-full font-bold hover:bg-blue-600 transition shadow-xl">
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
