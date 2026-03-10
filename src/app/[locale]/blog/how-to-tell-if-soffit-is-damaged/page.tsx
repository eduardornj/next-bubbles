import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, AlertTriangle, CheckCircle2, Phone } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { RelatedServices } from "@/components/ui/RelatedServices";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const slug = "how-to-tell-if-soffit-is-damaged";
    const url = locale === "en" ? `https://bubblesenterprise.com/blog/${slug}` : `https://bubblesenterprise.com/${locale}/blog/${slug}`;

    const titles: Record<string, string> = {
        en: "How to Tell if Your Soffit is Damaged — 7 Warning Signs",
        es: "Cómo Saber si el Soffit Está Dañado — 7 Señales de Alerta",
        pt: "Como Saber se o Soffit Está Danificado — 7 Sinais de Alerta",
    };
    const descriptions: Record<string, string> = {
        en: "Learn the 7 warning signs of damaged soffit before a small problem becomes a costly replacement. Step-by-step visual inspection guide for Orlando homeowners.",
        es: "Aprenda las 7 señales de advertencia de soffit dañado antes de que un pequeño problema se convierta en un reemplazo costoso. Guía de inspección visual para propietarios de Orlando.",
        pt: "Conheça os 7 sinais de alerta de soffit danificado antes que um problema pequeno vire uma troca cara. Guia de inspeção visual para proprietários em Orlando.",
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
    const blogUrl = locale === "en" ? `https://bubblesenterprise.com/blog/how-to-tell-if-soffit-is-damaged` : `https://bubblesenterprise.com/${locale}/blog/how-to-tell-if-soffit-is-damaged`;
    return {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": "https://bubblesenterprise.com/blog/how-to-tell-if-soffit-is-damaged#article",
            headline: "How to Tell if Your Soffit is Damaged (7 Warning Signs)",
            description: "7 warning signs of damaged soffit with a step-by-step inspection guide for Central Florida homeowners.",
            url: blogUrl,
            datePublished: "2026-01-15",
            dateModified: "2026-01-15",
            author: { "@type": "Person", "name": "Bubbles Enterprise Team", "jobTitle": "Licensed Soffit & Fascia Contractors", "url": "https://bubblesenterprise.com/about", "worksFor": { "@id": "https://bubblesenterprise.com/#business" } },
            publisher: { "@id": "https://bubblesenterprise.com/#business" },
            articleSection: "Inspection & Repair",
            keywords: "soffit damage, damaged soffit signs, soffit inspection, Orlando soffit repair",
            inLanguage: locale,
        },
        {
            "@type": "FAQPage",
            "@id": "https://bubblesenterprise.com/blog/how-to-tell-if-soffit-is-damaged#faq",
            inLanguage: locale,
            mainEntity: [
                {
                    "@type": "Question",
                    name: "What are the signs of damaged soffit?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The 7 main signs of damaged soffit are: (1) visible holes or gaps, (2) sagging or drooping panels, (3) peeling or bubbling paint, (4) water stains or dark spots, (5) evidence of animal activity, (6) soft or crumbling material when touched, (7) increased energy bills from poor attic ventilation.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can I repair damaged soffit myself?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Small isolated repairs may be DIY-able, but soffit replacement requires aluminum or vinyl installation skills and the right J-channel, F-channel, and fascia coordination. Improperly installed soffit allows water intrusion and pests. Professional installation comes with a workmanship warranty.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How much does soffit repair cost in Orlando?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Targeted soffit repair in Orlando typically costs $150–$600 for isolated sections. Full remove-and-replace runs $1,200–$3,500 for a single-story home depending on linear footage and material (aluminum vs vinyl). Use the free calculator at bubblesenterprise.com/calculator for an estimate.",
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
        category: "Inspection & Repair",
        readTime: "6 min read · January 15, 2026",
        authorLine: <>By <span className="font-semibold text-gray-700">Eddy</span> · Soffit &amp; Fascia Specialist · <time dateTime="2026-01-15">January 15, 2026</time></>,
        h1a: "How to Tell if Your Soffit is Damaged",
        h1b: "(7 Warning Signs)",
        intro: "Most soffit damage is invisible from the ground until it's expensive. These 7 signs will help you catch problems early — before a $200 repair becomes a $2,500 replacement.",
        warningTitle: "Why This Matters in Florida",
        warningBody: "Florida's combination of high humidity, intense UV, hurricane-force winds, and active wildlife makes soffit one of the most vulnerable parts of any home here. A single storm can create a gap that lets a whole squirrel family move in within 48 hours.",
        introP1: "The soffit is the material covering the underside of your roof overhang — the part you see when you look up at the roofline from the ground. It protects your attic from weather and pests while allowing ventilation.",
        introP2: "Here are the 7 warning signs to look for when walking around your home. You don't need a ladder for most of them.",
        checklistTitle: "Quick Inspection Checklist",
        checklistIntro: "Walk the perimeter of your home on a clear day. Look up at the soffit on every side. Check for all 7 signs above. This takes about 10 minutes.",
        checklistItems: [
            "Walk all 4 sides of the house and look up at the soffit",
            "Check for any visible holes, gaps, or missing panels",
            "Look for sagging or panels that hang lower than others",
            "Look for paint peeling, bubbling, or dark water stains",
            "Listen at dusk and dawn for scratching or movement sounds",
            "Check for wasp nests or bee activity near the roofline",
            "Touch any reachable areas to test for softness (wood rot)",
            "Look at your last 3 months of utility bills vs the same period last year",
        ],
        faqTitle: "Common Questions",
        faqs: [
            {
                q: "What are the signs of damaged soffit?",
                a: "The 7 main signs are: visible holes or gaps, sagging panels, peeling paint, water stains, animal activity, soft/crumbling material, and rising energy bills. You can identify most of these from the ground in a 10-minute walkthrough.",
            },
            {
                q: "Can I repair damaged soffit myself?",
                a: "Small, isolated patch repairs may be DIY-able if you're comfortable on a ladder and can match the existing material. But full soffit removal and replacement requires aluminum or vinyl installation skills, the right channel profiles, and fascia coordination. Improper installation allows water intrusion and pests — and a professional installation comes with a warranty.",
            },
            {
                q: "How much does soffit repair cost in Orlando?",
                a: "Targeted repair for isolated sections typically runs $150–$600 in Central Florida. Full remove-and-replace for a single-story home is typically $1,200–$3,500 depending on linear footage, overhang depth, and material choice. Use the free calculator on this site for an instant estimate.",
            },
        ],
        ctaTitle: "Found Signs of Damage?",
        ctaBody: "Free on-site inspection. We'll tell you exactly what needs repair vs replacement — no upselling.",
        ctaBtn: "Get Free Inspection",
        ctaPhone: "Call (407) 715-1790",
        urgencyLabel: "Urgency:",
        signs: [
            {
                number: "01", title: "Visible Holes or Gaps",
                body: "Any opening in your soffit — no matter how small — is an immediate problem. In Florida, a 1-inch gap is an open invitation to squirrels, rats, bats, and wasps. These animals establish colonies fast. If you see daylight through your soffit from the ground, call for an inspection the same week.",
                urgency: "High",
            },
            {
                number: "02", title: "Sagging or Drooping Panels",
                body: "Soffit panels that sag downward indicate moisture damage, trapped humidity, or failed fasteners. In Central Florida's humid climate, this often means the wood substrate behind the soffit (the nailer board) has started to rot. Sagging aluminum soffit won't protect against water intrusion and will worsen quickly.",
                urgency: "High",
            },
            {
                number: "03", title: "Peeling Paint or Bubbling Finish",
                body: "Paint doesn't peel from aluminum — but it does from original wood soffit. Bubbling or peeling paint means moisture is getting underneath, which means the wood itself is beginning to rot. This is one of the earliest and easiest signs to catch. Don't ignore it — wood rot spreads to the fascia board and rafters.",
                urgency: "Medium",
            },
            {
                number: "04", title: "Water Stains or Dark Streaks",
                body: "Dark spots, brown staining, or mold growth on soffit panels means water is not draining away properly. This usually points to a gutter overflow problem (gutters backed up, wrong pitch, or no gutters at that location) that is soaking the soffit with every rainstorm. Left untreated, water damage leads to full replacement.",
                urgency: "Medium",
            },
            {
                number: "05", title: "Animal Activity Signs",
                body: "Scratching noises in the attic at dusk or dawn = squirrels or rats. Loud thumping at night = raccoons. Buzzing near the roofline = wasps or bees. Droppings near the exterior walls. Any of these signs means something is already inside, which means your soffit has a breach. Animal intrusion jobs are classified as emergency repairs.",
                urgency: "Emergency",
            },
            {
                number: "06", title: "Soft or Crumbling Material",
                body: "If you can safely reach a section of soffit (from a ladder or second-floor window) and the material feels soft, spongy, or crumbles when touched, it's wood and it's fully rotted. Rotted wood soffit must be completely removed — it cannot be painted over or patched. The underlying nailer boards likely need replacement too.",
                urgency: "High",
            },
            {
                number: "07", title: "Rising Energy Bills",
                body: "Proper soffit ventilation keeps your attic breathing and reduces your AC load in Florida summers. Blocked or damaged soffit panels interrupt airflow. If your energy bills have crept up and you haven't changed your habits, poor attic ventilation from damaged soffit may be a contributing factor. A vent check during an inspection will confirm this.",
                urgency: "Low",
            },
        ],
    },
    es: {
        breadcrumb: "Blog",
        category: "Inspección y Reparación",
        readTime: "6 min de lectura · 15 de enero de 2026",
        authorLine: <>Por <span className="font-semibold text-gray-700">Eddy</span> · Especialista en Soffit y Fascia · <time dateTime="2026-01-15">15 de enero de 2026</time></>,
        h1a: "¿Cómo Saber si su Soffit Está Dañado?",
        h1b: "(7 Señales de Alerta)",
        intro: "La mayoría de los daños en el soffit son invisibles desde el suelo hasta que cuestan mucho dinero. Estas 7 señales le ayudarán a detectar problemas a tiempo, antes de que una reparación de $200 se convierta en un reemplazo de $2,500.",
        warningTitle: "Por Qué Esto Importa en Florida",
        warningBody: "La combinación de alta humedad, rayos UV intensos, vientos huracanados y vida silvestre activa hace que el soffit sea una de las partes más vulnerables de cualquier casa en Florida. Una sola tormenta puede crear una brecha que permita que toda una familia de ardillas se mude en 48 horas.",
        introP1: "El soffit es el material que cubre la parte inferior del alero del techo, la parte que usted ve cuando mira hacia arriba desde el suelo. Protege el ático contra el clima y las plagas mientras permite la ventilación.",
        introP2: "Aquí están las 7 señales de alerta que debe buscar al caminar alrededor de su casa. No necesita una escalera para la mayoría de ellas.",
        checklistTitle: "Lista de Inspección Rápida",
        checklistIntro: "Camine por el perímetro de su casa en un día despejado. Mire hacia arriba en el soffit en cada lado. Verifique las 7 señales anteriores. Esto toma unos 10 minutos.",
        checklistItems: [
            "Camine por los 4 lados de la casa y mire el soffit hacia arriba",
            "Busque huecos visibles, grietas o paneles faltantes",
            "Observe si hay paneles hundidos o que cuelguen más que los demás",
            "Busque pintura desprendida, burbujas o manchas oscuras de agua",
            "Escuche al amanecer y al atardecer si hay sonidos de rasguños o movimientos",
            "Verifique si hay nidos de avispas o actividad de abejas cerca del alero",
            "Toque las áreas alcanzables para detectar suavidad (pudrición de madera)",
            "Revise sus últimas 3 facturas de electricidad vs el mismo período del año anterior",
        ],
        faqTitle: "Preguntas Frecuentes",
        faqs: [
            {
                q: "¿Cuáles son las señales de soffit dañado?",
                a: "Las 7 principales señales son: huecos o grietas visibles, paneles hundidos, pintura desprendida, manchas de agua, actividad animal, material blando o desmoronado, y facturas de energía en aumento. La mayoría se pueden identificar desde el suelo en 10 minutos.",
            },
            {
                q: "¿Puedo reparar el soffit dañado yo mismo?",
                a: "Las reparaciones pequeñas y localizadas pueden ser hechas por un propietario hábil. Pero el reemplazo completo del soffit requiere habilidades de instalación de aluminio o vinilo, los perfiles de canal correctos, y coordinación con la fascia. Una instalación incorrecta permite la entrada de agua y plagas; la instalación profesional incluye garantía de mano de obra.",
            },
            {
                q: "¿Cuánto cuesta la reparación de soffit en Orlando?",
                a: "La reparación específica para secciones aisladas típicamente cuesta $150–$600 en el Centro de Florida. El reemplazo completo para una casa de un piso es generalmente $1,200–$3,500 dependiendo del metraje, la profundidad del alero y el material elegido. Use la calculadora gratuita en este sitio para un estimado instantáneo.",
            },
        ],
        ctaTitle: "¿Encontró Señales de Daño?",
        ctaBody: "Inspección gratuita en su propiedad. Le diremos exactamente qué necesita reparación vs reemplazo, sin presiones de venta.",
        ctaBtn: "Obtener Inspección Gratuita",
        ctaPhone: "Llamar (407) 715-1790",
        urgencyLabel: "Urgencia:",
        signs: [
            {
                number: "01", title: "Huecos o Grietas Visibles",
                body: "Cualquier abertura en su soffit — no importa cuán pequeña — es un problema inmediato. En Florida, una brecha de 2.5 cm es una invitación abierta para ardillas, ratas, murciélagos y avispas. Estos animales establecen colonias rápidamente. Si ve luz del día a través de su soffit desde el suelo, llame para una inspección la misma semana.",
                urgency: "Alta",
            },
            {
                number: "02", title: "Paneles Hundidos o Caídos",
                body: "Los paneles de soffit que se hunden indican daño por humedad, humedad atrapada o anclajes fallidos. En el clima húmedo del Centro de Florida, esto a menudo significa que el sustrato de madera detrás del soffit ha comenzado a pudrirse. El soffit de aluminio hundido no protegerá contra la entrada de agua y empeorará rápidamente.",
                urgency: "Alta",
            },
            {
                number: "03", title: "Pintura Desprendida o Acabado con Burbujas",
                body: "La pintura no se desprende del aluminio — pero sí del soffit de madera original. La pintura con burbujas o desprendida significa que la humedad está penetrando, lo que indica que la madera en sí está comenzando a pudrirse. Esta es una de las señales más tempranas y fáciles de detectar. No la ignore — la pudrición de madera se extiende a la tabla de fascia y a los cabrios.",
                urgency: "Media",
            },
            {
                number: "04", title: "Manchas de Agua o Rayas Oscuras",
                body: "Manchas oscuras, decoloración marrón o crecimiento de moho en los paneles del soffit indica que el agua no está drenando correctamente. Esto generalmente apunta a un problema de desbordamiento de canaletas que está empapando el soffit con cada lluvia. Sin tratamiento, el daño por agua lleva a un reemplazo completo.",
                urgency: "Media",
            },
            {
                number: "05", title: "Señales de Actividad Animal",
                body: "Sonidos de rasguños en el ático al amanecer o atardecer = ardillas o ratas. Golpes fuertes por la noche = mapaches. Zumbidos cerca del alero = avispas o abejas. Excrementos cerca de las paredes exteriores. Cualquiera de estas señales significa que algo ya está adentro, lo que significa que su soffit tiene una brecha. Los trabajos de intrusión animal se clasifican como reparaciones de emergencia.",
                urgency: "Emergencia",
            },
            {
                number: "06", title: "Material Blando o Desmoronado",
                body: "Si puede alcanzar de manera segura una sección del soffit y el material se siente blando, esponjoso o se desmenuza al tocarlo, es madera y está completamente podrida. El soffit de madera podrida debe eliminarse completamente: no se puede pintar encima ni parchear. Las tablas de soporte subyacentes probablemente también necesiten reemplazo.",
                urgency: "Alta",
            },
            {
                number: "07", title: "Facturas de Energía en Aumento",
                body: "La ventilación adecuada del soffit mantiene su ático respirando y reduce la carga de su aire acondicionado en los veranos de Florida. Los paneles de soffit bloqueados o dañados interrumpen el flujo de aire. Si sus facturas de energía han aumentado y no ha cambiado sus hábitos, la mala ventilación del ático puede ser un factor contribuyente.",
                urgency: "Baja",
            },
        ],
    },
    pt: {
        breadcrumb: "Blog",
        category: "Inspeção e Reparo",
        readTime: "6 min de leitura · 15 de janeiro de 2026",
        authorLine: <>Por <span className="font-semibold text-gray-700">Eddy</span> · Especialista em Soffit e Fascia · <time dateTime="2026-01-15">15 de janeiro de 2026</time></>,
        h1a: "Como Saber se o Soffit Está Danificado",
        h1b: "(7 Sinais de Alerta)",
        intro: "A maioria dos danos no soffit é invisível do chão até que o custo seja alto. Esses 7 sinais vão ajudar você a identificar problemas cedo, antes que um reparo de $200 vire uma troca de $2.500.",
        warningTitle: "Por Que Isso Importa na Flórida",
        warningBody: "A combinação de alta umidade, raios UV intensos, ventos de furacão e fauna ativa faz do soffit uma das partes mais vulneráveis de qualquer casa aqui. Uma única tempestade pode criar uma brecha que permite que toda uma família de esquilos se instale em 48 horas.",
        introP1: "O soffit é o material que cobre a parte inferior do beiral do telhado, a parte que você vê quando olha para cima a partir do chão. Ele protege o sótão contra o clima e pragas, enquanto permite a ventilação.",
        introP2: "Aqui estão os 7 sinais de alerta que você deve procurar ao caminhar ao redor da sua casa. Você não precisa de escada para a maioria deles.",
        checklistTitle: "Lista de Inspeção Rápida",
        checklistIntro: "Caminhe pelo perímetro da sua casa em um dia claro. Olhe para cima no soffit em todos os lados. Verifique os 7 sinais acima. Isso leva cerca de 10 minutos.",
        checklistItems: [
            "Caminhe pelos 4 lados da casa e olhe para o soffit",
            "Verifique se há buracos visíveis, frestas ou painéis faltando",
            "Observe se há painéis afundados ou que pendem mais que os outros",
            "Procure tinta descascando, bolhas ou manchas escuras de água",
            "Ouça ao amanhecer e ao anoitecer se há sons de arranhões ou movimentos",
            "Verifique se há ninhos de vespas ou atividade de abelhas perto do beiral",
            "Toque as áreas alcançáveis para detectar maciez (podridão de madeira)",
            "Revise suas últimas 3 contas de energia vs o mesmo período do ano passado",
        ],
        faqTitle: "Perguntas Frequentes",
        faqs: [
            {
                q: "Quais são os sinais de soffit danificado?",
                a: "Os 7 principais sinais são: buracos ou frestas visíveis, painéis afundados, tinta descascando, manchas de água, atividade animal, material macio ou esfarelando, e contas de energia aumentando. A maioria pode ser identificada do chão em 10 minutos.",
            },
            {
                q: "Posso reparar o soffit danificado sozinho?",
                a: "Reparos pequenos e localizados podem ser feitos pelo próprio proprietário. Mas a troca completa do soffit exige habilidades de instalação de alumínio ou vinil, os perfis de canal corretos e coordenação com a fascia. Uma instalação inadequada permite entrada de água e pragas; a instalação profissional vem com garantia de mão de obra.",
            },
            {
                q: "Quanto custa o reparo de soffit em Orlando?",
                a: "O reparo específico para seções isoladas geralmente custa $150–$600 no Centro da Flórida. A troca completa para uma casa de um andar é tipicamente $1.200–$3.500 dependendo da metragem, profundidade do beiral e material escolhido. Use a calculadora gratuita neste site para um orçamento instantâneo.",
            },
        ],
        ctaTitle: "Encontrou Sinais de Dano?",
        ctaBody: "Inspeção gratuita no local. Vamos dizer exatamente o que precisa de reparo vs substituição, sem pressão de venda.",
        ctaBtn: "Solicitar Inspeção Gratuita",
        ctaPhone: "Ligar (407) 715-1790",
        urgencyLabel: "Urgência:",
        signs: [
            {
                number: "01", title: "Buracos ou Frestas Visíveis",
                body: "Qualquer abertura no seu soffit — não importa quão pequena — é um problema imediato. Na Flórida, uma fresta de 2,5 cm é um convite aberto para esquilos, ratos, morcegos e vespas. Esses animais se instalam rapidamente. Se você vê luz do dia através do seu soffit do chão, ligue para uma inspeção na mesma semana.",
                urgency: "Alta",
            },
            {
                number: "02", title: "Painéis Afundados ou Caídos",
                body: "Painéis de soffit que afundam indicam dano por umidade, umidade presa ou fixadores com falha. No clima úmido do Centro da Flórida, isso muitas vezes significa que o substrato de madeira atrás do soffit começou a apodrecer. O soffit de alumínio afundado não protegerá contra a entrada de água e vai piorar rapidamente.",
                urgency: "Alta",
            },
            {
                number: "03", title: "Tinta Descascando ou Acabamento com Bolhas",
                body: "A tinta não descasca do alumínio, mas descasca do soffit de madeira original. Tinta com bolhas ou descascando significa que a umidade está penetrando, o que indica que a própria madeira está começando a apodrecer. Este é um dos sinais mais precoces e fáceis de identificar. Não ignore: a podridão de madeira se espalha para a placa de fascia e para as vigas.",
                urgency: "Média",
            },
            {
                number: "04", title: "Manchas de Água ou Listras Escuras",
                body: "Manchas escuras, coloração marrom ou crescimento de mofo nos painéis do soffit significa que a água não está drenando corretamente. Isso geralmente aponta para um problema de transbordamento de calha que está encharcando o soffit a cada chuva. Sem tratamento, o dano por água leva à troca completa.",
                urgency: "Média",
            },
            {
                number: "05", title: "Sinais de Atividade Animal",
                body: "Sons de arranhões no sótão ao amanhecer ou anoitecer = esquilos ou ratos. Batidas fortes à noite = guaxinins. Zumbidos perto do beiral = vespas ou abelhas. Fezes perto das paredes externas. Qualquer um desses sinais significa que algo já está dentro, o que significa que seu soffit tem uma brecha. Trabalhos de intrusão animal são classificados como reparos de emergência.",
                urgency: "Emergência",
            },
            {
                number: "06", title: "Material Macio ou Esfarelando",
                body: "Se você pode alcançar com segurança uma seção do soffit e o material parece macio, esponjoso ou se desfaz ao toque, é madeira e está completamente apodrecida. O soffit de madeira podre deve ser completamente removido: não pode ser pintado por cima ou remendado. As placas de suporte subjacentes provavelmente também precisam de substituição.",
                urgency: "Alta",
            },
            {
                number: "07", title: "Contas de Energia Aumentando",
                body: "A ventilação adequada do soffit mantém seu sótão respirando e reduz a carga do seu ar-condicionado nos verões da Flórida. Painéis de soffit bloqueados ou danificados interrompem o fluxo de ar. Se suas contas de energia aumentaram e você não mudou seus hábitos, a má ventilação do sótão pode ser um fator contribuinte.",
                urgency: "Baixa",
            },
        ],
    },
};

const signColors = [
    { color: "text-red-600", bg: "bg-red-50", border: "border-red-200", urgencyColor: "text-red-600 bg-red-50" },
    { color: "text-orange-600", bg: "bg-orange-50", border: "border-orange-200", urgencyColor: "text-red-600 bg-red-50" },
    { color: "text-yellow-600", bg: "bg-yellow-50", border: "border-yellow-200", urgencyColor: "text-yellow-700 bg-yellow-50" },
    { color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-200", urgencyColor: "text-yellow-700 bg-yellow-50" },
    { color: "text-purple-600", bg: "bg-purple-50", border: "border-purple-200", urgencyColor: "text-red-700 bg-red-100" },
    { color: "text-gray-600", bg: "bg-gray-50", border: "border-gray-200", urgencyColor: "text-red-600 bg-red-50" },
    { color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-200", urgencyColor: "text-green-700 bg-green-50" },
];

export default async function HowToTellIfSoffitIsDamagedPage({
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
                <section className="py-24 bg-gradient-to-br from-slate-900 to-blue-950 text-white">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <AnimatedSection>
                            <div className="flex flex-wrap gap-3 items-center mb-6">
                                <Link href={blogHref} className="text-blue-300 hover:text-white text-sm transition">← {c.breadcrumb}</Link>
                                <span className="text-blue-500">/</span>
                                <span className="text-xs font-bold bg-blue-500/20 border border-blue-400/30 text-blue-200 px-3 py-1 rounded-full uppercase tracking-widest">{c.category}</span>
                                <span className="text-xs text-blue-400">{c.readTime}</span>
                            </div>
                            <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
                                {c.h1a}<br />
                                <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                                    {c.h1b}
                                </span>
                            </h1>
                            <p className="text-sm text-gray-400 mt-2 mb-4">{c.authorLine}</p>
                            <p className="text-gray-400 text-sm mb-6">Published January 15, 2026 · Updated March 2026 · By Bubbles Enterprise Team</p>
                            <p className="text-xl text-blue-100 max-w-3xl leading-relaxed">
                                {c.intro}
                            </p>
                        </AnimatedSection>
                    </div>
                </section>

                {/* ── INTRO ─────────────────────────────────────────────── */}
                <section className="py-14 bg-white">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <AnimatedSection>
                            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-10 flex gap-4">
                                <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-bold text-amber-900 mb-1">{c.warningTitle}</p>
                                    <p className="text-amber-800 text-sm leading-relaxed">{c.warningBody}</p>
                                </div>
                            </div>
                            <p className="text-gray-700 text-lg leading-relaxed mb-6">{c.introP1}</p>
                            <p className="text-gray-700 text-lg leading-relaxed">{c.introP2}</p>
                        </AnimatedSection>
                    </div>
                </section>

                {/* ── WARNING SIGNS ─────────────────────────────────────── */}
                <section className="py-8 pb-16 bg-white">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <div className="space-y-8">
                            {c.signs.map((sign, i) => (
                                <AnimatedSection key={sign.number} delay={i * 60} from="bottom">
                                    <div className={`rounded-2xl border ${signColors[i].border} ${signColors[i].bg} p-7`}>
                                        <div className="flex items-start justify-between gap-4 mb-4 flex-wrap">
                                            <div className="flex items-center gap-4">
                                                <span className={`text-3xl font-black ${signColors[i].color} opacity-30 leading-none`}>{sign.number}</span>
                                                <h2 className="text-xl font-extrabold text-gray-900">{sign.title}</h2>
                                            </div>
                                            <span className={`text-xs font-bold px-3 py-1 rounded-full ${signColors[i].urgencyColor}`}>
                                                {c.urgencyLabel} {sign.urgency}
                                            </span>
                                        </div>
                                        <p className="text-gray-700 leading-relaxed text-sm md:text-base">{sign.body}</p>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── INSPECTION CHECKLIST ──────────────────────────────── */}
                <section className="py-16 bg-slate-50 border-y border-gray-100">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <AnimatedSection>
                            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6">{c.checklistTitle}</h2>
                            <p className="text-gray-600 mb-8 leading-relaxed">{c.checklistIntro}</p>
                            <div className="bg-white rounded-2xl border border-gray-200 divide-y divide-gray-100">
                                {c.checklistItems.map((item, i) => (
                                    <div key={i} className="flex items-start gap-4 p-4">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                        <span className="text-gray-700 text-sm">{item}</span>
                                    </div>
                                ))}
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
                <RelatedServices serviceKeys={["repairs", "calculator", "services"]} locale={locale} />

                {/* ── CTA ───────────────────────────────────────────────── */}
                <section className="py-20 bg-gradient-to-br from-bubble-primary to-blue-800 text-white text-center">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <AnimatedSection>
                            <h2 className="text-3xl font-extrabold mb-4">{c.ctaTitle}</h2>
                            <p className="text-blue-200 text-lg mb-8 max-w-xl mx-auto">{c.ctaBody}</p>
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
