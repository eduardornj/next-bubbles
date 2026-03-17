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
    const slug = "wood-soffit-trap-florida";
    const url = locale === "en" ? `https://bubblesenterprise.com/blog/${slug}` : `https://bubblesenterprise.com/${locale}/blog/${slug}`;

    const titles: Record<string, string> = {
        en: "Why Wood Soffit Is a Trap in Florida (And What to Replace It With)",
        es: "Por Qué el Soffit de Madera Es una Trampa en Florida (Y Con Qué Reemplazarlo)",
        pt: "Por Que Soffit de Madeira é uma Armadilha na Florida (E Com o Que Substituir)",
    };
    const descriptions: Record<string, string> = {
        en: "Wood soffit in Florida rots in 5-10 years, attracts termites, and costs thousands in repairs. Learn why aluminum is the permanent fix for Florida homes.",
        es: "El soffit de madera en Florida se pudre en 5-10 años, atrae termitas y cuesta miles en reparaciones. Descubra por qué el aluminio es la solución permanente.",
        pt: "Soffit de madeira na Florida apodrece em 5-10 anos, atrai cupins e custa milhares em reparos. Saiba por que o aluminio e a solucao definitiva.",
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
    const blogUrl = locale === "en" ? `https://bubblesenterprise.com/blog/wood-soffit-trap-florida` : `https://bubblesenterprise.com/${locale}/blog/wood-soffit-trap-florida`;
    return {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "@id": "https://bubblesenterprise.com/blog/wood-soffit-trap-florida#article",
                headline: "Why Wood Soffit Is a Trap in Florida (And What to Replace It With)",
                description: "Wood soffit fails fast in Florida's climate. Rot, termites, mold, and constant maintenance make it the worst material choice. Here's why aluminum is the permanent solution.",
                url: blogUrl,
                datePublished: "2026-03-17",
                dateModified: "2026-03-17",
                author: { "@type": "Person", "name": "Eddy", "jobTitle": "Soffit & Fascia Specialist", "url": "https://bubblesenterprise.com/about", "worksFor": { "@id": "https://bubblesenterprise.com/#business" } },
                publisher: { "@id": "https://bubblesenterprise.com/#business" },
                articleSection: "Materials",
                keywords: "wood soffit Florida, wood soffit rot, wood soffit replacement, soffit replacement Orlando, aluminum soffit vs wood",
                inLanguage: locale,
            },
            {
                "@type": "FAQPage",
                "@id": "https://bubblesenterprise.com/blog/wood-soffit-trap-florida#faq",
                inLanguage: locale,
                mainEntity: [
                    {
                        "@type": "Question",
                        name: "Why does wood soffit fail so fast in Florida?",
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: "Florida's year-round humidity (averaging 75-80%) creates the perfect environment for wood rot. Combined with drywood and subterranean termites, intense UV radiation, and hurricane-force winds, wood soffit degrades 2-3x faster in Florida than in northern states. Most wood soffit in Florida starts showing rot within 5-7 years.",
                        },
                    },
                    {
                        "@type": "Question",
                        name: "How much does it cost to replace wood soffit with aluminum?",
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: "Replacing wood soffit with aluminum typically costs $8-$14 per linear foot installed in Central Florida, depending on the condition of the fascia board and how much wood damage needs to be repaired. While the upfront cost is higher than repainting wood, aluminum requires zero maintenance and lasts 25-30+ years, making it far cheaper over the life of your home.",
                        },
                    },
                    {
                        "@type": "Question",
                        name: "Can I install aluminum soffit over existing wood soffit?",
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: "In some cases, yes, but it's generally not recommended. If the wood underneath is rotting or has termite damage, covering it with aluminum hides the problem and allows damage to spread to your fascia and roof structure. A proper installation removes the old wood, inspects and repairs the substrate, and then installs aluminum for a long-lasting result.",
                        },
                    },
                    {
                        "@type": "Question",
                        name: "How do I know if my wood soffit needs to be replaced?",
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: "Look for these signs: soft or spongy spots when you press with a finger, paint peeling or bubbling despite recent painting, dark stains or discoloration (signs of mold or rot), visible holes or animal entry points, and a musty smell near your eaves. If you notice any of these, your wood soffit is actively failing and should be inspected by a professional.",
                        },
                    },
                    {
                        "@type": "Question",
                        name: "Is vinyl soffit better than wood for Florida?",
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: "Vinyl is better than wood because it doesn't rot, but it's not the best choice for Florida. Vinyl can warp and become brittle under Florida's extreme UV and heat, especially on south and west-facing exposures. Aluminum is the industry standard in Florida because it handles heat, humidity, UV, and hurricanes without degradation.",
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
        readTime: "6 min read · March 17, 2026",
        authorLine: <>By <span className="font-semibold text-gray-700">Eddy</span> · Soffit &amp; Fascia Specialist · <time dateTime="2026-03-17">March 17, 2026</time></>,
        h1a: "Why Wood Soffit Is a Trap",
        h1b: "in Florida",
        intro: "If your home still has wood soffit, the clock is ticking. Florida's humidity, termites, and storms turn wood into a maintenance nightmare that costs more every year you wait. Here's the full picture.",

        /* Section 1 - The Problem */
        problemTitle: "The Problem With Wood Soffit in Florida",
        problemIntro: "Wood soffit was standard in Florida homes built before the 1990s. At the time, it was the cheapest option. But cheap upfront doesn't mean cheap over 20 years. Here's what Florida does to wood soffit:",
        problems: [
            { icon: "💧", title: "Humidity & Rot", desc: "Florida's average humidity sits between 75-80% year-round. Wood absorbs that moisture constantly. Rot typically starts within 5-7 years, often in spots you can't see from the ground. By the time you notice soft spots, the damage has spread behind the panels." },
            { icon: "🐛", title: "Termites (Drywood + Subterranean)", desc: "Central Florida has both drywood and subterranean termites. Wood soffit is an open invitation. Drywood termites can enter directly through the soffit, while subterranean species follow moisture paths up the walls. Termite damage to soffit often goes unnoticed until it's structural." },
            { icon: "🦠", title: "Mold & Mildew", desc: "The combination of humidity and wood creates a perfect breeding ground for mold. Black mold on soffit is not just ugly, it's a health concern and a sign that the wood is retaining water and actively decaying from within." },
            { icon: "🐿️", title: "Zero Pest Resistance", desc: "Raccoons, squirrels, roof rats, and bats can chew through rotting wood soffit in hours. Once they get in, you're dealing with attic contamination, damaged insulation, and expensive wildlife removal on top of soffit repair." },
            { icon: "🌪️", title: "Hurricane Vulnerability", desc: "Wood soffit that has been weakened by rot or termites is the first thing to go in a storm. Even tropical storm-force winds (39-73 mph) can rip compromised wood panels right off. Once soffit is breached, wind-driven rain enters your attic and the real damage begins." },
        ],

        /* Section 2 - The Numbers */
        numbersTitle: "The Numbers: Wood vs. Aluminum vs. Vinyl",
        numbersIntro: "Side-by-side comparison for Florida homeowners:",
        tableHeaders: { feature: "Feature", wood: "Wood", aluminum: "Aluminum", vinyl: "Vinyl" },
        tableRows: [
            { feature: "Florida Lifespan", wood: "5-10 years", aluminum: "25-30+ years", vinyl: "15-20 years" },
            { feature: "Maintenance", wood: "Paint every 2-3 yrs + repairs", aluminum: "None", vinyl: "Occasional cleaning" },
            { feature: "Pest Resistance", wood: "None (attracts termites)", aluminum: "Excellent", vinyl: "Good" },
            { feature: "Hurricane Resistance", wood: "Poor (weakens with rot)", aluminum: "Excellent", vinyl: "Moderate" },
            { feature: "Rot Risk", wood: "High (starts in 5-7 years)", aluminum: "Zero", vinyl: "Zero" },
            { feature: "10-Year Cost", wood: "$3,000-$6,000+", aluminum: "$0 (after install)", vinyl: "$200-$400" },
        ],

        /* Section 3 - Signs */
        signsTitle: "5 Signs Your Wood Soffit Is Failing",
        signsIntro: "Walk around your home and check for these warning signs:",
        signs: [
            { num: "1", title: "Soft or Spongy Spots", desc: "Press the wood with your finger or a screwdriver. If it gives, the wood has rot inside. The surface may still look painted and normal, but the structure is gone." },
            { num: "2", title: "Paint Peeling or Bubbling", desc: "If paint is peeling within 1-2 years of being applied, moisture is pushing out from inside the wood. Repainting is just hiding the problem." },
            { num: "3", title: "Dark Stains or Discoloration", desc: "Dark patches, especially near joints or edges, indicate mold growth or water saturation. This is active decay." },
            { num: "4", title: "Animal Activity Near Eaves", desc: "Scratching sounds, droppings on the ground, or visible holes mean animals have already compromised your soffit. Where one gets in, more follow." },
            { num: "5", title: "Musty Smell Near Roofline", desc: "If you can smell mildew when standing near your eaves, the wood is holding moisture and breaking down. This smell doesn't go away with cleaning." },
        ],

        /* Section 4 - The Real Cost */
        costTitle: "The Real Cost of Keeping Wood Soffit",
        costIntro: "Homeowners often think wood is cheaper because they can \"just repaint it.\" Here's what that actually costs over 10 years for a typical Orlando home (150-200 linear feet of soffit):",
        costWoodTitle: "Wood Soffit: 10-Year Cost",
        costWoodItems: [
            { item: "Professional painting (every 2-3 years)", cost: "$1,200-$2,000 x 3-4 times" },
            { item: "Spot repairs (rot sections)", cost: "$400-$800 per repair" },
            { item: "Termite treatment (if needed)", cost: "$500-$1,500" },
            { item: "Wildlife removal + repair (if needed)", cost: "$800-$2,500" },
            { item: "Full replacement at year 8-10", cost: "$3,000-$5,000" },
        ],
        costWoodTotal: "Total: $5,000-$12,000+ over 10 years",
        costAluminumTitle: "Aluminum Soffit: 10-Year Cost",
        costAluminumItems: [
            { item: "Professional installation (one time)", cost: "$2,400-$4,200" },
            { item: "Maintenance over 10 years", cost: "$0" },
            { item: "Repairs needed", cost: "$0 (typical)" },
        ],
        costAluminumTotal: "Total: $2,400-$4,200 once. Done.",
        costVerdict: "Aluminum costs less than wood when you factor in the full picture. And it lasts 25-30 more years after that.",

        /* FAQ */
        faqTitle: "Common Questions About Wood Soffit Replacement",
        faqs: [
            {
                q: "Why does wood soffit fail so fast in Florida?",
                a: "Florida's year-round humidity (75-80%) creates the perfect environment for wood rot. Combined with drywood and subterranean termites, intense UV, and hurricane-force winds, wood soffit degrades 2-3x faster here than in northern states. Most wood soffit starts showing rot within 5-7 years.",
            },
            {
                q: "How much does it cost to replace wood soffit with aluminum?",
                a: "Typically $8-$14 per linear foot installed in Central Florida, depending on fascia condition and how much wood damage needs repair. While the upfront cost is higher than repainting, aluminum requires zero maintenance and lasts 25-30+ years.",
            },
            {
                q: "Can I install aluminum soffit over existing wood soffit?",
                a: "In some cases, but it's generally not recommended. If the wood underneath is rotting or has termite damage, covering it hides the problem and allows damage to spread to your fascia and roof structure. A proper installation removes the old wood, inspects the substrate, and installs aluminum for a lasting result.",
            },
            {
                q: "How do I know if my wood soffit needs to be replaced?",
                a: "Look for soft spots, peeling paint, dark stains, animal entry points, or a musty smell near your eaves. If you notice any of these, your wood soffit is actively failing and should be inspected by a professional.",
            },
            {
                q: "Is vinyl soffit better than wood for Florida?",
                a: "Vinyl is better than wood because it doesn't rot, but aluminum is the industry standard in Florida. Vinyl can warp and become brittle under Florida's extreme UV and heat, especially on south and west-facing exposures. Aluminum handles everything Florida throws at it.",
            },
        ],

        /* CTA */
        ctaTitle: "Still Have Wood Soffit?",
        ctaBody: "Get a free inspection. We'll tell you what condition it's in and what replacement would cost for your specific home.",
        ctaBtn: "Get Free Inspection",
        ctaPhone: "Call (407) 715-1790",
    },
    es: {
        breadcrumb: "Blog",
        category: "Materiales",
        readTime: "6 min de lectura · 17 de marzo de 2026",
        authorLine: <>Por <span className="font-semibold text-gray-700">Eddy</span> · Especialista en Soffit y Fascia · <time dateTime="2026-03-17">17 de marzo de 2026</time></>,
        h1a: "Por Qué el Soffit de Madera",
        h1b: "Es una Trampa en Florida",
        intro: "Si su casa todavía tiene soffit de madera, el reloj corre en su contra. La humedad, las termitas y las tormentas de Florida convierten la madera en una pesadilla de mantenimiento que cuesta más cada año que espera. Aquí está el panorama completo.",

        /* Section 1 - The Problem */
        problemTitle: "El Problema del Soffit de Madera en Florida",
        problemIntro: "El soffit de madera era estándar en las casas de Florida construidas antes de los 1990s. En ese momento, era la opción más barata. Pero barato al principio no significa barato durante 20 años. Esto es lo que Florida le hace al soffit de madera:",
        problems: [
            { icon: "💧", title: "Humedad y Pudrición", desc: "La humedad promedio de Florida se mantiene entre 75-80% todo el año. La madera absorbe esa humedad constantemente. La pudrición típicamente comienza dentro de 5-7 años, a menudo en puntos que no puede ver desde el suelo. Para cuando nota manchas blandas, el daño se ha extendido detrás de los paneles." },
            { icon: "🐛", title: "Termitas (de Madera Seca + Subterráneas)", desc: "El Centro de Florida tiene tanto termitas de madera seca como subterráneas. El soffit de madera es una invitación abierta. Las termitas de madera seca pueden entrar directamente a través del soffit, mientras que las subterráneas siguen caminos de humedad por las paredes. El daño por termitas a menudo pasa desapercibido hasta que es estructural." },
            { icon: "🦠", title: "Moho y Hongos", desc: "La combinación de humedad y madera crea el terreno perfecto para el moho. El moho negro en el soffit no solo es feo, es una preocupación de salud y una señal de que la madera retiene agua y se deteriora activamente desde adentro." },
            { icon: "🐿️", title: "Cero Resistencia a Plagas", desc: "Mapaches, ardillas, ratas de techo y murciélagos pueden masticar el soffit de madera podrido en horas. Una vez que entran, está lidiando con contaminación del ático, aislamiento dañado y costosa remoción de vida silvestre además de la reparación del soffit." },
            { icon: "🌪️", title: "Vulnerabilidad a Huracanes", desc: "El soffit de madera debilitado por la pudrición o las termitas es lo primero en caer durante una tormenta. Incluso vientos de tormenta tropical (39-73 mph) pueden arrancar paneles de madera comprometidos. Una vez que el soffit se rompe, la lluvia impulsada por el viento entra a su ático y comienza el daño real." },
        ],

        /* Section 2 - The Numbers */
        numbersTitle: "Los Números: Madera vs. Aluminio vs. Vinilo",
        numbersIntro: "Comparación lado a lado para propietarios en Florida:",
        tableHeaders: { feature: "Característica", wood: "Madera", aluminum: "Aluminio", vinyl: "Vinilo" },
        tableRows: [
            { feature: "Vida Útil en Florida", wood: "5-10 años", aluminum: "25-30+ años", vinyl: "15-20 años" },
            { feature: "Mantenimiento", wood: "Pintura cada 2-3 años + reparaciones", aluminum: "Ninguno", vinyl: "Limpieza ocasional" },
            { feature: "Resistencia a Plagas", wood: "Ninguna (atrae termitas)", aluminum: "Excelente", vinyl: "Buena" },
            { feature: "Resistencia a Huracanes", wood: "Deficiente (se debilita con pudrición)", aluminum: "Excelente", vinyl: "Moderada" },
            { feature: "Riesgo de Pudrición", wood: "Alto (comienza en 5-7 años)", aluminum: "Cero", vinyl: "Cero" },
            { feature: "Costo en 10 Años", wood: "$3,000-$6,000+", aluminum: "$0 (después de instalar)", vinyl: "$200-$400" },
        ],

        /* Section 3 - Signs */
        signsTitle: "5 Señales de Que Su Soffit de Madera Está Fallando",
        signsIntro: "Camine alrededor de su casa y busque estas señales de advertencia:",
        signs: [
            { num: "1", title: "Puntos Blandos o Esponjosos", desc: "Presione la madera con el dedo o un destornillador. Si cede, la madera tiene pudrición por dentro. La superficie puede verse pintada y normal, pero la estructura se ha ido." },
            { num: "2", title: "Pintura Descascarándose o con Burbujas", desc: "Si la pintura se descascara dentro de 1-2 años de ser aplicada, la humedad está empujando desde adentro de la madera. Repintar solo oculta el problema." },
            { num: "3", title: "Manchas Oscuras o Decoloración", desc: "Las manchas oscuras, especialmente cerca de juntas o bordes, indican crecimiento de moho o saturación de agua. Esto es deterioro activo." },
            { num: "4", title: "Actividad Animal Cerca de los Aleros", desc: "Sonidos de rasguños, excrementos en el suelo o agujeros visibles significan que los animales ya han comprometido su soffit. Donde uno entra, más le siguen." },
            { num: "5", title: "Olor a Humedad Cerca del Techo", desc: "Si puede oler moho al estar cerca de sus aleros, la madera está reteniendo humedad y descomponiéndose. Este olor no desaparece con limpieza." },
        ],

        /* Section 4 - The Real Cost */
        costTitle: "El Costo Real de Mantener Soffit de Madera",
        costIntro: "Los propietarios a menudo piensan que la madera es más barata porque pueden \"simplemente repintarla.\" Esto es lo que realmente cuesta durante 10 años para una casa típica de Orlando (150-200 pies lineales de soffit):",
        costWoodTitle: "Soffit de Madera: Costo de 10 Años",
        costWoodItems: [
            { item: "Pintura profesional (cada 2-3 años)", cost: "$1,200-$2,000 x 3-4 veces" },
            { item: "Reparaciones puntuales (secciones podridas)", cost: "$400-$800 por reparación" },
            { item: "Tratamiento de termitas (si es necesario)", cost: "$500-$1,500" },
            { item: "Remoción de vida silvestre + reparación", cost: "$800-$2,500" },
            { item: "Reemplazo completo en año 8-10", cost: "$3,000-$5,000" },
        ],
        costWoodTotal: "Total: $5,000-$12,000+ en 10 años",
        costAluminumTitle: "Soffit de Aluminio: Costo de 10 Años",
        costAluminumItems: [
            { item: "Instalación profesional (una sola vez)", cost: "$2,400-$4,200" },
            { item: "Mantenimiento en 10 años", cost: "$0" },
            { item: "Reparaciones necesarias", cost: "$0 (típico)" },
        ],
        costAluminumTotal: "Total: $2,400-$4,200 una vez. Listo.",
        costVerdict: "El aluminio cuesta menos que la madera cuando se considera el panorama completo. Y dura 25-30 años más después de eso.",

        /* FAQ */
        faqTitle: "Preguntas Frecuentes Sobre el Reemplazo de Soffit de Madera",
        faqs: [
            {
                q: "¿Por qué el soffit de madera falla tan rápido en Florida?",
                a: "La humedad constante de Florida (75-80%) crea el ambiente perfecto para la pudrición de madera. Combinada con termitas de madera seca y subterráneas, UV intenso y vientos de huracán, el soffit de madera se degrada 2-3 veces más rápido aquí que en los estados del norte.",
            },
            {
                q: "¿Cuánto cuesta reemplazar soffit de madera por aluminio?",
                a: "Típicamente $8-$14 por pie lineal instalado en el Centro de Florida, dependiendo de la condición de la fascia y cuánto daño de madera necesita reparación. Aunque el costo inicial es mayor que repintar, el aluminio no requiere mantenimiento y dura 25-30+ años.",
            },
            {
                q: "¿Se puede instalar soffit de aluminio sobre madera existente?",
                a: "En algunos casos sí, pero generalmente no se recomienda. Si la madera debajo está podrida o tiene daño de termitas, cubrirla oculta el problema y permite que el daño se extienda a la fascia y la estructura del techo. Una instalación correcta remueve la madera vieja e inspecciona el sustrato.",
            },
            {
                q: "¿Cómo sé si mi soffit de madera necesita ser reemplazado?",
                a: "Busque puntos blandos, pintura descascarada, manchas oscuras, puntos de entrada de animales o un olor a humedad cerca de los aleros. Si nota cualquiera de estos, su soffit de madera está fallando activamente y debe ser inspeccionado por un profesional.",
            },
            {
                q: "¿Es el soffit de vinilo mejor que la madera para Florida?",
                a: "El vinilo es mejor que la madera porque no se pudre, pero el aluminio es el estándar de la industria en Florida. El vinilo puede deformarse y volverse frágil bajo el UV extremo y el calor de Florida. El aluminio resiste todo lo que Florida le lanza.",
            },
        ],

        /* CTA */
        ctaTitle: "¿Todavía Tiene Soffit de Madera?",
        ctaBody: "Inspección gratuita. Le diremos en qué condición está y cuánto costaría el reemplazo para su casa específica.",
        ctaBtn: "Obtener Inspección Gratuita",
        ctaPhone: "Llamar (407) 715-1790",
    },
    pt: {
        breadcrumb: "Blog",
        category: "Materiais",
        readTime: "6 min de leitura · 17 de marco de 2026",
        authorLine: <>Por <span className="font-semibold text-gray-700">Eddy</span> · Especialista em Soffit e Fascia · <time dateTime="2026-03-17">17 de marco de 2026</time></>,
        h1a: "Por Que Soffit de Madeira",
        h1b: "e uma Armadilha na Florida",
        intro: "Se sua casa ainda tem soffit de madeira, o relogio esta correndo contra voce. A umidade, os cupins e as tempestades da Florida transformam madeira numa dor de cabeca que custa mais a cada ano que voce espera. Aqui esta o panorama completo.",

        /* Section 1 - The Problem */
        problemTitle: "O Problema do Soffit de Madeira na Florida",
        problemIntro: "Soffit de madeira era padrao nas casas da Florida construidas antes dos anos 1990. Na epoca, era a opcao mais barata. Mas barato no comeco nao significa barato ao longo de 20 anos. Veja o que a Florida faz com soffit de madeira:",
        problems: [
            { icon: "💧", title: "Umidade e Apodrecimento", desc: "A umidade media da Florida fica entre 75-80% o ano todo. A madeira absorve essa umidade constantemente. O apodrecimento geralmente comeca em 5-7 anos, muitas vezes em pontos que voce nao consegue ver do chao. Quando voce nota pontos moles, o dano ja se espalhou atras dos paineis." },
            { icon: "🐛", title: "Cupins (de Madeira Seca + Subterraneos)", desc: "O Centro da Florida tem cupins de madeira seca e subterraneos. Soffit de madeira e um convite aberto. Cupins de madeira seca entram direto pelo soffit, enquanto os subterraneos seguem caminhos de umidade pelas paredes. O estrago dos cupins no soffit muitas vezes passa despercebido ate virar problema estrutural." },
            { icon: "🦠", title: "Mofo e Bolor", desc: "A combinacao de umidade e madeira cria o terreno perfeito para mofo. Mofo preto no soffit nao e so feio, e uma preocupacao de saude e um sinal de que a madeira esta retendo agua e se deteriorando por dentro." },
            { icon: "🐿️", title: "Zero Resistencia a Pragas", desc: "Guaxinins, esquilos, ratos de telhado e morcegos conseguem roer soffit de madeira podre em horas. Uma vez que entram, voce lida com contaminacao do sotao, isolamento danificado e remocao cara de animais, alem do reparo do soffit." },
            { icon: "🌪️", title: "Vulnerabilidade a Furacoes", desc: "Soffit de madeira enfraquecido por apodrecimento ou cupins e a primeira coisa a cair numa tempestade. Ate ventos de tempestade tropical (39-73 mph) conseguem arrancar paineis de madeira comprometidos. Quando o soffit e rompido, a chuva empurrada pelo vento entra no sotao e o estrago real comeca." },
        ],

        /* Section 2 - The Numbers */
        numbersTitle: "Os Numeros: Madeira vs. Aluminio vs. Vinil",
        numbersIntro: "Comparacao lado a lado para proprietarios na Florida:",
        tableHeaders: { feature: "Caracteristica", wood: "Madeira", aluminum: "Aluminio", vinyl: "Vinil" },
        tableRows: [
            { feature: "Vida Util na Florida", wood: "5-10 anos", aluminum: "25-30+ anos", vinyl: "15-20 anos" },
            { feature: "Manutencao", wood: "Pintura a cada 2-3 anos + reparos", aluminum: "Nenhuma", vinyl: "Limpeza ocasional" },
            { feature: "Resistencia a Pragas", wood: "Nenhuma (atrai cupins)", aluminum: "Excelente", vinyl: "Boa" },
            { feature: "Resistencia a Furacoes", wood: "Ruim (enfraquece com apodrecimento)", aluminum: "Excelente", vinyl: "Moderada" },
            { feature: "Risco de Apodrecimento", wood: "Alto (comeca em 5-7 anos)", aluminum: "Zero", vinyl: "Zero" },
            { feature: "Custo em 10 Anos", wood: "$3,000-$6,000+", aluminum: "$0 (apos instalacao)", vinyl: "$200-$400" },
        ],

        /* Section 3 - Signs */
        signsTitle: "5 Sinais de Que Seu Soffit de Madeira Esta Falhando",
        signsIntro: "De uma volta na sua casa e procure esses sinais de alerta:",
        signs: [
            { num: "1", title: "Pontos Moles ou Esponjosos", desc: "Pressione a madeira com o dedo ou uma chave de fenda. Se ceder, a madeira tem apodrecimento por dentro. A superficie pode parecer pintada e normal, mas a estrutura ja foi." },
            { num: "2", title: "Tinta Descascando ou com Bolhas", desc: "Se a tinta descasca dentro de 1-2 anos depois de pintada, a umidade esta empurrando de dentro da madeira. Repintar so esconde o problema." },
            { num: "3", title: "Manchas Escuras ou Descoloracao", desc: "Manchas escuras, especialmente perto de juntas ou bordas, indicam crescimento de mofo ou saturacao de agua. Isso e deterioracao ativa." },
            { num: "4", title: "Atividade Animal Perto dos Beirais", desc: "Sons de arranhoes, fezes no chao ou buracos visiveis significam que animais ja comprometeram seu soffit. Onde um entra, mais seguem." },
            { num: "5", title: "Cheiro de Mofo Perto do Telhado", desc: "Se voce sente cheiro de mofo perto dos beirais, a madeira esta retendo umidade e se decompondo. Esse cheiro nao vai embora com limpeza." },
        ],

        /* Section 4 - The Real Cost */
        costTitle: "O Custo Real de Manter Soffit de Madeira",
        costIntro: "Muita gente acha que madeira e mais barata porque pode \"so repintar.\" Veja o que isso realmente custa em 10 anos para uma casa tipica de Orlando (150-200 pes lineares de soffit):",
        costWoodTitle: "Soffit de Madeira: Custo em 10 Anos",
        costWoodItems: [
            { item: "Pintura profissional (a cada 2-3 anos)", cost: "$1,200-$2,000 x 3-4 vezes" },
            { item: "Reparos pontuais (secoes apodrecidas)", cost: "$400-$800 por reparo" },
            { item: "Tratamento de cupins (se necessario)", cost: "$500-$1,500" },
            { item: "Remocao de animais + reparo", cost: "$800-$2,500" },
            { item: "Substituicao completa no ano 8-10", cost: "$3,000-$5,000" },
        ],
        costWoodTotal: "Total: $5,000-$12,000+ em 10 anos",
        costAluminumTitle: "Soffit de Aluminio: Custo em 10 Anos",
        costAluminumItems: [
            { item: "Instalacao profissional (uma vez so)", cost: "$2,400-$4,200" },
            { item: "Manutencao em 10 anos", cost: "$0" },
            { item: "Reparos necessarios", cost: "$0 (tipico)" },
        ],
        costAluminumTotal: "Total: $2,400-$4,200 uma vez. Pronto.",
        costVerdict: "Aluminio custa menos que madeira quando voce olha o cenario completo. E ainda dura 25-30 anos mais depois disso.",

        /* FAQ */
        faqTitle: "Perguntas Frequentes Sobre Substituicao de Soffit de Madeira",
        faqs: [
            {
                q: "Por que soffit de madeira falha tao rapido na Florida?",
                a: "A umidade constante da Florida (75-80%) cria o ambiente perfeito para apodrecimento de madeira. Combinada com cupins de madeira seca e subterraneos, UV intenso e ventos de furacao, o soffit de madeira se degrada 2-3 vezes mais rapido aqui do que nos estados do norte.",
            },
            {
                q: "Quanto custa trocar soffit de madeira por aluminio?",
                a: "Normalmente $8-$14 por pe linear instalado no Centro da Florida, dependendo da condicao da fascia e quanto dano precisa ser reparado. Embora o custo inicial seja maior que repintar, o aluminio nao precisa de manutencao e dura 25-30+ anos.",
            },
            {
                q: "Da pra instalar soffit de aluminio por cima da madeira existente?",
                a: "Em alguns casos sim, mas geralmente nao e recomendado. Se a madeira embaixo esta apodrecendo ou tem dano de cupins, cobrir esconde o problema e permite que o dano se espalhe para a fascia e a estrutura do telhado. Uma instalacao correta remove a madeira velha e inspeciona o substrato.",
            },
            {
                q: "Como saber se meu soffit de madeira precisa ser trocado?",
                a: "Procure pontos moles, tinta descascando, manchas escuras, pontos de entrada de animais ou cheiro de mofo perto dos beirais. Se notar qualquer um desses sinais, seu soffit de madeira esta falhando ativamente e precisa ser inspecionado por um profissional.",
            },
            {
                q: "Soffit de vinil e melhor que madeira pra Florida?",
                a: "Vinil e melhor que madeira porque nao apodrece, mas aluminio e o padrao da industria na Florida. Vinil pode deformar e ficar fragil sob o UV extremo e o calor da Florida. Aluminio aguenta tudo que a Florida joga nele.",
            },
        ],

        /* CTA */
        ctaTitle: "Ainda Tem Soffit de Madeira?",
        ctaBody: "Inspecao gratuita. A gente fala em que condicao esta e quanto custaria a troca pra sua casa especifica.",
        ctaBtn: "Solicitar Inspecao Gratuita",
        ctaPhone: "Ligar (407) 715-1790",
    },
};

const problemColors = [
    { border: "border-red-200", bg: "bg-red-50", title: "text-red-800" },
    { border: "border-amber-200", bg: "bg-amber-50", title: "text-amber-800" },
    { border: "border-emerald-200", bg: "bg-emerald-50", title: "text-emerald-800" },
    { border: "border-orange-200", bg: "bg-orange-50", title: "text-orange-800" },
    { border: "border-rose-200", bg: "bg-rose-50", title: "text-rose-800" },
];

export default async function WoodSoffitTrapPage({
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

                {/* HERO */}
                <section className="py-24 bg-gradient-to-br from-slate-900 to-indigo-950 text-white">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <AnimatedSection>
                            <div className="flex flex-wrap gap-3 items-center mb-6">
                                <Link href={blogHref} className="text-blue-300 hover:text-white text-sm transition">&larr; {c.breadcrumb}</Link>
                                <span className="text-blue-500">/</span>
                                <span className="text-xs font-bold bg-red-500/20 border border-red-400/30 text-red-200 px-3 py-1 rounded-full uppercase tracking-widest">{c.category}</span>
                                <span className="text-xs text-blue-400">{c.readTime}</span>
                            </div>
                            <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
                                {c.h1a}<br />
                                <span className="bg-gradient-to-r from-red-400 to-amber-300 bg-clip-text text-transparent">{c.h1b}</span>
                            </h1>
                            <p className="text-sm text-gray-400 mt-2 mb-4">{c.authorLine}</p>
                            <p className="text-xl text-blue-100 max-w-3xl leading-relaxed">{c.intro}</p>
                        </AnimatedSection>
                    </div>
                </section>

                {/* SECTION 1 - THE PROBLEM */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <AnimatedSection>
                            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">{c.problemTitle}</h2>
                            <p className="text-gray-600 leading-relaxed mb-10">{c.problemIntro}</p>
                        </AnimatedSection>
                        <div className="space-y-5">
                            {c.problems.map((p, i) => (
                                <AnimatedSection key={i} delay={i * 80} from="left">
                                    <div className={`rounded-2xl border ${problemColors[i].border} ${problemColors[i].bg} p-6`}>
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="text-2xl">{p.icon}</span>
                                            <h3 className={`text-lg font-extrabold ${problemColors[i].title}`}>{p.title}</h3>
                                        </div>
                                        <p className="text-gray-700 text-sm leading-relaxed">{p.desc}</p>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SECTION 2 - THE NUMBERS (COMPARISON TABLE) */}
                <section className="py-16 bg-gray-50 border-y border-gray-100">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <AnimatedSection>
                            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">{c.numbersTitle}</h2>
                            <p className="text-gray-600 leading-relaxed mb-10">{c.numbersIntro}</p>
                        </AnimatedSection>
                        <AnimatedSection delay={100} from="bottom">
                            <div className="overflow-x-auto">
                                <table className="w-full bg-white rounded-2xl border border-gray-200 overflow-hidden">
                                    <thead>
                                        <tr className="bg-slate-800 text-white">
                                            <th className="text-left px-5 py-4 text-sm font-bold">{c.tableHeaders.feature}</th>
                                            <th className="text-left px-5 py-4 text-sm font-bold text-red-300">{c.tableHeaders.wood}</th>
                                            <th className="text-left px-5 py-4 text-sm font-bold text-blue-300">{c.tableHeaders.aluminum}</th>
                                            <th className="text-left px-5 py-4 text-sm font-bold text-gray-300">{c.tableHeaders.vinyl}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {c.tableRows.map((row, i) => (
                                            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                                                <td className="px-5 py-4 text-sm font-semibold text-gray-900">{row.feature}</td>
                                                <td className="px-5 py-4 text-sm text-red-700 font-medium">{row.wood}</td>
                                                <td className="px-5 py-4 text-sm text-blue-700 font-medium">{row.aluminum}</td>
                                                <td className="px-5 py-4 text-sm text-gray-600">{row.vinyl}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* SECTION 3 - 5 SIGNS */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <AnimatedSection>
                            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">{c.signsTitle}</h2>
                            <p className="text-gray-600 leading-relaxed mb-10">{c.signsIntro}</p>
                        </AnimatedSection>
                        <div className="space-y-4">
                            {c.signs.map((s, i) => (
                                <AnimatedSection key={i} delay={i * 80} from="right">
                                    <div className="flex gap-5 bg-white rounded-2xl border border-gray-200 p-6">
                                        <div className="shrink-0 w-12 h-12 rounded-full bg-red-100 border-2 border-red-300 flex items-center justify-center">
                                            <span className="text-red-700 font-extrabold text-lg">{s.num}</span>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 mb-1">{s.title}</h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                                        </div>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SECTION 4 - THE REAL COST */}
                <section className="py-16 bg-gray-50 border-y border-gray-100">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <AnimatedSection>
                            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">{c.costTitle}</h2>
                            <p className="text-gray-600 leading-relaxed mb-10">{c.costIntro}</p>
                        </AnimatedSection>
                        <div className="grid md:grid-cols-2 gap-6">
                            <AnimatedSection delay={0} from="left">
                                <div className="bg-white rounded-2xl border-2 border-red-200 overflow-hidden h-full">
                                    <div className="bg-red-50 border-b border-red-200 px-6 py-4">
                                        <h3 className="text-lg font-extrabold text-red-800">{c.costWoodTitle}</h3>
                                    </div>
                                    <div className="p-6 space-y-3">
                                        {c.costWoodItems.map((item, i) => (
                                            <div key={i} className="flex justify-between gap-4 text-sm">
                                                <span className="text-gray-700">{item.item}</span>
                                                <span className="text-red-700 font-semibold shrink-0">{item.cost}</span>
                                            </div>
                                        ))}
                                        <div className="pt-3 mt-3 border-t border-red-100">
                                            <p className="text-red-800 font-extrabold text-sm">{c.costWoodTotal}</p>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>
                            <AnimatedSection delay={120} from="right">
                                <div className="bg-white rounded-2xl border-2 border-blue-200 overflow-hidden h-full">
                                    <div className="bg-blue-50 border-b border-blue-200 px-6 py-4">
                                        <h3 className="text-lg font-extrabold text-blue-800">{c.costAluminumTitle}</h3>
                                    </div>
                                    <div className="p-6 space-y-3">
                                        {c.costAluminumItems.map((item, i) => (
                                            <div key={i} className="flex justify-between gap-4 text-sm">
                                                <span className="text-gray-700">{item.item}</span>
                                                <span className="text-blue-700 font-semibold shrink-0">{item.cost}</span>
                                            </div>
                                        ))}
                                        <div className="pt-3 mt-3 border-t border-blue-100">
                                            <p className="text-blue-800 font-extrabold text-sm">{c.costAluminumTotal}</p>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>
                        </div>
                        <AnimatedSection delay={200} from="bottom">
                            <div className="mt-8 bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center">
                                <p className="text-emerald-800 font-bold text-lg">{c.costVerdict}</p>
                            </div>
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
                <RelatedServices serviceKeys={["materials", "remove-replace", "calculator"]} locale={locale} />

                {/* CTA */}
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
