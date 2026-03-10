import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, AlertTriangle, Phone } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { RelatedServices } from "@/components/ui/RelatedServices";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const slug = "termites-in-soffit-orlando";
    const url = locale === "en" ? `https://bubblesenterprise.com/blog/${slug}` : `https://bubblesenterprise.com/${locale}/blog/${slug}`;

    const titles: Record<string, string> = {
        en: "Termites in Soffit Orlando: Signs, Damage & What to Do",
        es: "Termitas en el Soffit de Orlando: Señales, Daños y Qué Hacer",
        pt: "Cupins no Soffit em Orlando: Sinais, Danos e O Que Fazer",
    };
    const descriptions: Record<string, string> = {
        en: "Drywood termites target soffit and fascia in Orlando homes. Learn to identify frass pellets, kick-out holes, and hollow wood — and why soffit repair must come after treatment.",
        es: "Las termitas de madera seca atacan el soffit y la fascia en las casas de Orlando. Aprenda a identificar frasas, agujeros de expulsión y madera hueca, y por qué el reparo debe venir después del tratamiento.",
        pt: "Os cupins-de-madeira-seca atacam o soffit e a fascia em casas de Orlando. Aprenda a identificar frass, orifícios de expulsão e madeira oca, e por que o reparo deve vir após o tratamento.",
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
    const blogUrl = locale === "en" ? `https://bubblesenterprise.com/blog/termites-in-soffit-orlando` : `https://bubblesenterprise.com/${locale}/blog/termites-in-soffit-orlando`;
    return {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": "https://bubblesenterprise.com/blog/termites-in-soffit-orlando#article",
            headline: "Termites in Soffit Orlando: Warning Signs, Damage, and What to Do",
            description: "Drywood termites target soffit and fascia in Central Florida homes. How to identify an active infestation and the correct repair sequence.",
            url: blogUrl,
            datePublished: "2026-03-01",
            dateModified: "2026-03-01",
            author: { "@type": "Person", "name": "Bubbles Enterprise Team", "jobTitle": "Licensed Soffit & Fascia Contractors", "url": "https://bubblesenterprise.com/about", "worksFor": { "@id": "https://bubblesenterprise.com/#business" } },
            publisher: { "@id": "https://bubblesenterprise.com/#business" },
            articleSection: "Pests & Damage",
            keywords: "termites in soffit Orlando, drywood termites soffit, soffit termite damage Florida, termite frass soffit, soffit repair after termites Orlando",
            inLanguage: locale,
        },
        {
            "@type": "FAQPage",
            "@id": "https://bubblesenterprise.com/blog/termites-in-soffit-orlando#faq",
            inLanguage: locale,
            mainEntity: [
                {
                    "@type": "Question",
                    name: "How do I know if my soffit has termites?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The clearest sign of drywood termites in soffit is frass — small pellet-shaped droppings that accumulate below the roofline or on windowsills. Other signs include tiny kick-out holes (1/16 inch) in painted wood soffit, hollow-sounding soffit when tapped, bubbling or uneven paint on the fascia board, and visible termite swarmers near your roofline in spring.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Should I repair my soffit before or after termite treatment?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Always treat first, repair second. Installing new soffit over an active infestation gives termites a fresh food source. The correct sequence is: (1) licensed termite inspection and treatment, (2) wait for confirmation of elimination, (3) full soffit and fascia replacement with aluminum or vinyl — materials termites cannot eat. Never install wood soffit in a previously infested area.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What type of soffit is termite-proof?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Aluminum and vinyl soffit panels are 100% termite-proof — termites cannot eat metal or plastic. Fiber cement soffit is also highly resistant. Any wood soffit — including wood-backed panels or OSB fascia backing — is vulnerable. After a termite treatment, always replace with aluminum or vinyl and ensure no wood substrate is left exposed at the roofline.",
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
        category: "Pests & Damage",
        readTime: "7 min read · March 1, 2026",
        authorLine: <>By <span className="font-semibold text-gray-700">Eddy</span> · Soffit &amp; Fascia Specialist · <time dateTime="2026-03-01">March 1, 2026</time></>,
        h1a: "Termites in Your Soffit:",
        h1b: "Signs, Damage & What to Do in Orlando",
        intro: "Florida has three termite species — and drywood termites specifically target soffit and fascia. Here's how to identify an active infestation before it eats through your entire roofline.",
        contextTitle: "Why Orlando Has a Termite Problem",
        contextP1: "Florida has the highest termite pressure of any state in the continental US — and Central Florida sits in the middle of it. Three species are active here: subterranean termites (ground-based, attack from below), Formosan termites (extremely destructive subterranean species), and drywood termites — the species most likely to be in your soffit and fascia.",
        contextP2: "Drywood termites (Incisitermes snyderi and Cryptotermes brevis) don't need contact with soil. They infest dry, exposed wood — which makes roof components, soffit boards, fascia, and attic framing their primary targets. Unlike subterranean termites, they can live entirely inside a single piece of wood without ever touching the ground.",
        contextP3: "According to the University of Florida IFAS Extension, drywood termites account for hundreds of millions in structural damage in Florida annually. Soffit and fascia are particularly vulnerable because they're constantly exposed to sun, rain cycles, and humidity — conditions that weaken wood finishes and make penetration easier.",
        warningTitle: "Critical: Never Repair Soffit Over an Active Infestation",
        warningBody: "Installing new aluminum or vinyl soffit over active termite damage does not solve the problem — it seals the colony inside and gives them a protected environment to continue eating. Always treat and confirm elimination before any soffit repair work begins.",
        signsTitle: "5 Signs of Drywood Termites in Your Soffit",
        sequenceTitle: "The Correct Repair Sequence",
        sequenceIntro: "Getting this order wrong is the most expensive mistake homeowners make. We've been called to replace soffit that was installed by other companies over active termite damage — within 18 months the new material was compromised because the colony survived underneath.",
        materialsTitle: "Termite-Proof Soffit Materials",
        faqTitle: "Common Questions",
        faqs: [
            {
                q: "How do I know if my soffit has termites?",
                a: "The clearest sign is frass — small hexagonal pellet-shaped droppings below the roofline or on windowsills. Other signs: tiny kick-out holes in painted wood, hollow sound when tapping the soffit, bubbling or peeling paint on fascia, and termite swarmers near the roofline in spring (March–May).",
            },
            {
                q: "Should I repair my soffit before or after termite treatment?",
                a: "Always treat first, then repair. Installing new soffit over an active infestation gives termites a fresh food source. The sequence: (1) licensed inspection and treatment, (2) confirmation of elimination, (3) full replacement with aluminum or vinyl. Never use wood soffit after a termite event.",
            },
            {
                q: "What soffit is termite-proof?",
                a: "Aluminum and vinyl are 100% termite-proof — termites cannot eat metal or plastic. Fiber cement is also highly resistant. Any natural wood product remains vulnerable. After treatment, always replace with aluminum or vinyl.",
            },
        ],
        ctaTitle: "Found Termite Damage in Your Soffit?",
        ctaBody: "We work with the sequence — no repairs until treatment is confirmed. Get an inspection and repair quote from us today.",
        ctaBtn: "Get Repair Quote",
        ctaPhone: "Call (407) 715-1790",
        signs: [
            { title: "Frass Pellets (The #1 Sign)", emoji: "🟤", urgency: "Confirm infestation", desc: "Drywood termite frass (droppings) looks like tiny pepper flakes or coffee grounds — hexagonal pellets about 1mm long. They accumulate in small piles below the infested area: on windowsills, on the ground near exterior walls, or on the top of your gutters. Unlike subterranean termites that pack droppings into tunnels, drywood termites push frass out through tiny kick-out holes. Finding this is a confirmed active infestation — call a pest company the same day." },
            { title: "Kick-Out Holes", emoji: "🔴", urgency: "Active colony", desc: "Tiny holes — about 1/16 inch in diameter — in painted or stained wood soffit. Drywood termites create these exit holes specifically to push frass out. They're easy to miss because they're very small and often plugged with fecal material. Run your hand along the soffit and look for slight rough patches. On painted surfaces, look for small paint bumps." },
            { title: "Hollow-Sounding Wood", emoji: "🪵", urgency: "Structural damage", desc: "Tap along your soffit and fascia boards with your knuckle. Solid wood sounds dense. Termite-damaged wood sounds hollow — a dull, empty thud rather than a solid knock. This indicates the interior galleries have replaced the structural wood fiber. Significant hollow areas mean the board has lost much of its structural integrity and must be fully replaced, not patched." },
            { title: "Paint Bubbling or Peeling", emoji: "🎨", urgency: "Possible damage", desc: "Bubbling, blistering, or peeling paint on fascia boards — without obvious moisture source — can indicate termite activity below. Termites create heat and moisture as they digest wood, which forces paint to separate from the surface. This symptom alone is not definitive (moisture can cause the same effect), but combined with any frass or hollow sounds it strongly suggests active infestation." },
            { title: "Swarmers at Your Roofline", emoji: "✈️", urgency: "Colony expanding", desc: "Alates (winged termites) swarm from mature colonies in spring — typically March through May in Central Florida. If you see large numbers of winged insects near your roofline, soffit, or attic vents during daylight hours, your home has an established colony. Swarming means the colony is mature enough to reproduce — the infestation has been active for at least 3-5 years." },
        ],
        steps: [
            { step: "1", color: "bg-amber-600", title: "Licensed Termite Inspection", desc: "Get a WDO (Wood-Destroying Organism) inspection from a Florida-licensed pest control company. They'll identify species, map the extent of infestation, and recommend treatment. Required before any repair can be quoted accurately." },
            { step: "2", color: "bg-orange-600", title: "Treatment and Elimination", desc: "Drywood termite treatment options include localized spot treatment (liquid or foam injected through kick-out holes), heat treatment, or whole-structure fumigation (tenting) for heavy infestations. Your pest company determines the right approach. Do not begin repairs until you have written confirmation of treatment completion." },
            { step: "3", color: "bg-blue-600", title: "Full Soffit & Fascia Replacement", desc: "All termite-damaged wood must be completely removed — not just the surface material but the substrate and any backing boards. Replacement should use aluminum or vinyl soffit and aluminum-wrapped or PVC fascia — materials termites physically cannot eat. No wood should remain exposed at the roofline." },
            { step: "4", color: "bg-green-600", title: "Annual Prevention Check", desc: "After repair, schedule annual WDO inspections. Central Florida's termite pressure doesn't go away after one treatment. Most pest companies offer annual contracts that include soffit and fascia inspection as part of a broader home pest program." },
        ],
        termiteMaterials: [
            { material: "Aluminum Soffit", verdict: "100% Termite-Proof", verdictColor: "text-green-700", verdictBg: "bg-green-50 border-green-200", note: "Metal cannot be eaten by termites. The professional choice for post-termite repair. Also hurricane-rated and moisture-proof — the right choice for Florida." },
            { material: "Vinyl Soffit", verdict: "100% Termite-Proof", verdictColor: "text-green-700", verdictBg: "bg-green-50 border-green-200", note: "Plastic cannot be eaten by termites. A cost-effective option for post-treatment replacement. Not recommended for areas with high thermal stress." },
            { material: "Fiber Cement Soffit", verdict: "Termite Resistant", verdictColor: "text-blue-700", verdictBg: "bg-blue-50 border-blue-200", note: "Cement-based materials are not eaten by termites. HardieSoffit has Florida Product Approval. More expensive than aluminum but excellent durability." },
            { material: "Wood or Wood-Backed Panels", verdict: "Avoid After Infestation", verdictColor: "text-red-700", verdictBg: "bg-red-50 border-red-200", note: "Any natural wood soffit, OSB backing, or wood substrate is susceptible. After a termite event, do not reinstall any wood-based product at the roofline." },
        ],
    },
    es: {
        breadcrumb: "Blog",
        category: "Plagas y Daños",
        readTime: "7 min de lectura · 1 de marzo de 2026",
        authorLine: <>Por <span className="font-semibold text-gray-700">Eddy</span> · Especialista en Soffit y Fascia · <time dateTime="2026-03-01">1 de marzo de 2026</time></>,
        h1a: "Termitas en su Soffit:",
        h1b: "Señales, Daños y Qué Hacer en Orlando",
        intro: "Florida tiene tres especies de termitas, y las termitas de madera seca atacan específicamente el soffit y la fascia. Así es como identificar una infestación activa antes de que devoren todo su alero.",
        contextTitle: "Por Qué Orlando Tiene un Problema de Termitas",
        contextP1: "Florida tiene la mayor presión de termitas de cualquier estado del continental de EE.UU., y el Centro de Florida está en el medio de ello. Tres especies están activas aquí: termitas subterráneas (basadas en el suelo, atacan desde abajo), termitas Formosan (especie subterránea extremadamente destructiva) y termitas de madera seca, la especie más probable en su soffit y fascia.",
        contextP2: "Las termitas de madera seca (Incisitermes snyderi y Cryptotermes brevis) no necesitan contacto con el suelo. Infestan madera seca y expuesta, lo que hace de los componentes del techo, las tablas de soffit, la fascia y el armazón del ático sus objetivos principales. A diferencia de las termitas subterráneas, pueden vivir completamente dentro de una sola pieza de madera sin tocar jamás el suelo.",
        contextP3: "Según la Extensión IFAS de la Universidad de Florida, las termitas de madera seca causan cientos de millones en daños estructurales en Florida anualmente. El soffit y la fascia son particularmente vulnerables porque están constantemente expuestos al sol, los ciclos de lluvia y la humedad.",
        warningTitle: "Crítico: Nunca Repare el Soffit Sobre una Infestación Activa",
        warningBody: "Instalar soffit nuevo de aluminio o vinilo sobre daño activo de termitas no resuelve el problema. Sella la colonia adentro y les da un entorno protegido para continuar comiendo. Siempre trate y confirme la eliminación antes de comenzar cualquier trabajo de reparación de soffit.",
        signsTitle: "5 Señales de Termitas de Madera Seca en su Soffit",
        sequenceTitle: "La Secuencia Correcta de Reparación",
        sequenceIntro: "Equivocarse en este orden es el error más costoso que cometen los propietarios. Nos han llamado para reemplazar soffit instalado por otras empresas sobre daño activo de termitas. En 18 meses el nuevo material fue comprometido porque la colonia sobrevivió debajo.",
        materialsTitle: "Materiales de Soffit a Prueba de Termitas",
        faqTitle: "Preguntas Frecuentes",
        faqs: [
            {
                q: "¿Cómo sé si mi soffit tiene termitas?",
                a: "La señal más clara es la frasa, pequeños pellets hexagonales debajo del alero o en los alféizares. Otras señales: pequeños agujeros de expulsión en madera pintada, sonido hueco al golpear el soffit, pintura burbujeante o desprendida en la fascia, y termitas aladas cerca del alero en primavera (marzo–mayo).",
            },
            {
                q: "¿Debo reparar el soffit antes o después del tratamiento de termitas?",
                a: "Siempre trate primero, luego repare. Instalar soffit nuevo sobre una infestación activa le da a las termitas una fuente de alimento fresco. La secuencia: (1) inspección y tratamiento con licencia, (2) confirmación de eliminación, (3) reemplazo completo con aluminio o vinilo. Nunca use soffit de madera después de un evento de termitas.",
            },
            {
                q: "¿Qué soffit es a prueba de termitas?",
                a: "El aluminio y el vinilo son 100% a prueba de termitas: las termitas no pueden comer metal ni plástico. El cemento de fibra también es muy resistente. Cualquier producto de madera natural sigue siendo vulnerable. Después del tratamiento, siempre reemplace con aluminio o vinilo.",
            },
        ],
        ctaTitle: "¿Encontró Daño de Termitas en su Soffit?",
        ctaBody: "Trabajamos con la secuencia correcta: sin reparaciones hasta que se confirme el tratamiento. Obtenga una inspección y cotización de reparación hoy.",
        ctaBtn: "Obtener Cotización de Reparación",
        ctaPhone: "Llamar (407) 715-1790",
        signs: [
            { title: "Pellets de Frasa (La Señal #1)", emoji: "🟤", urgency: "Infestación confirmada", desc: "La frasa (excrementos) de termitas de madera seca parece pequeñas hojuelas de pimienta, pellets hexagonales de aproximadamente 1mm. Se acumulan en pequeños montones debajo del área infestada: en alféizares, en el suelo cerca de las paredes exteriores o en la parte superior de sus canaletas. Encontrar esto es una infestación activa confirmada: llame a una empresa de plagas el mismo día." },
            { title: "Agujeros de Expulsión", emoji: "🔴", urgency: "Colonia activa", desc: "Pequeños agujeros de aproximadamente 1.6mm de diámetro en soffit de madera pintada o teñida. Las termitas de madera seca crean estos agujeros de salida específicamente para expulsar la frasa. Son fáciles de pasar por alto porque son muy pequeños. Pase la mano a lo largo del soffit y busque pequeñas manchas rugosas." },
            { title: "Madera que Suena Hueca", emoji: "🪵", urgency: "Daño estructural", desc: "Golpee a lo largo de sus tablas de soffit y fascia con los nudillos. La madera sólida suena densa. La madera dañada por termitas suena hueca, un golpe sordo y vacío. Esto indica que las galerías interiores han reemplazado la fibra de madera estructural. Las áreas huecas significativas indican que la tabla ha perdido gran parte de su integridad estructural." },
            { title: "Pintura Burbujeante o Desprendida", emoji: "🎨", urgency: "Posible daño", desc: "La pintura burbujeante, con ampollas o desprendida en las tablas de fascia, sin fuente obvia de humedad, puede indicar actividad de termitas debajo. Las termitas crean calor y humedad al digerir la madera, lo que fuerza a la pintura a separarse de la superficie." },
            { title: "Enjambres en su Alero", emoji: "✈️", urgency: "Colonia en expansión", desc: "Los alados (termitas con alas) enjambran de colonias maduras en primavera, típicamente de marzo a mayo en el Centro de Florida. Si ve grandes cantidades de insectos con alas cerca de su alero durante las horas de luz del día, su casa tiene una colonia establecida. El enjambre significa que la colonia lleva al menos 3-5 años activa." },
        ],
        steps: [
            { step: "1", color: "bg-amber-600", title: "Inspección de Termitas con Licencia", desc: "Obtenga una inspección WDO (Organismo Destructor de Madera) de una empresa de control de plagas con licencia de Florida. Identificarán la especie, mapearán el alcance de la infestación y recomendarán el tratamiento. Requerido antes de que se pueda cotizar con precisión cualquier reparación." },
            { step: "2", color: "bg-orange-600", title: "Tratamiento y Eliminación", desc: "Las opciones de tratamiento incluyen tratamiento puntual localizado (líquido o espuma inyectada a través de agujeros de expulsión), tratamiento térmico o fumigación de toda la estructura (carpa) para infestaciones severas. Su empresa de plagas determina el enfoque correcto." },
            { step: "3", color: "bg-blue-600", title: "Reemplazo Completo de Soffit y Fascia", desc: "Toda la madera dañada por termitas debe eliminarse completamente: no solo el material de superficie sino el sustrato y cualquier tabla de respaldo. El reemplazo debe usar soffit de aluminio o vinilo y fascia envuelta en aluminio o PVC, materiales que las termitas físicamente no pueden comer." },
            { step: "4", color: "bg-green-600", title: "Verificación Anual de Prevención", desc: "Después de la reparación, programe inspecciones WDO anuales. La presión de termitas del Centro de Florida no desaparece después de un tratamiento. La mayoría de las empresas de plagas ofrecen contratos anuales que incluyen inspección de soffit y fascia." },
        ],
        termiteMaterials: [
            { material: "Soffit de Aluminio", verdict: "100% a Prueba de Termitas", verdictColor: "text-green-700", verdictBg: "bg-green-50 border-green-200", note: "El metal no puede ser comido por las termitas. La opción profesional para reparación post-termitas. También clasificado para huracanes y a prueba de humedad." },
            { material: "Soffit de Vinilo", verdict: "100% a Prueba de Termitas", verdictColor: "text-green-700", verdictBg: "bg-green-50 border-green-200", note: "El plástico no puede ser comido por las termitas. Una opción rentable para el reemplazo post-tratamiento. No recomendado para áreas con alto estrés térmico." },
            { material: "Soffit de Cemento de Fibra", verdict: "Resistente a Termitas", verdictColor: "text-blue-700", verdictBg: "bg-blue-50 border-blue-200", note: "Los materiales a base de cemento no son comidos por las termitas. HardieSoffit tiene Aprobación de Producto de Florida. Más costoso que el aluminio pero excelente durabilidad." },
            { material: "Paneles de Madera o con Respaldo de Madera", verdict: "Evitar Después de Infestación", verdictColor: "text-red-700", verdictBg: "bg-red-50 border-red-200", note: "Cualquier soffit de madera natural, respaldo de OSB o sustrato de madera es susceptible. Después de un evento de termitas, no reinstale ningún producto a base de madera en el alero." },
        ],
    },
    pt: {
        breadcrumb: "Blog",
        category: "Pragas e Danos",
        readTime: "7 min de leitura · 1 de março de 2026",
        authorLine: <>Por <span className="font-semibold text-gray-700">Eddy</span> · Especialista em Soffit e Fascia · <time dateTime="2026-03-01">1 de março de 2026</time></>,
        h1a: "Cupins no Soffit:",
        h1b: "Sinais, Danos e O Que Fazer em Orlando",
        intro: "A Flórida tem três espécies de cupins, e os cupins-de-madeira-seca atacam especificamente o soffit e a fascia. Veja como identificar uma infestação ativa antes que comam todo o seu beiral.",
        contextTitle: "Por Que Orlando Tem um Problema de Cupins",
        contextP1: "A Flórida tem a maior pressão de cupins de qualquer estado dos EUA continentais, e o Centro da Flórida está no meio disso. Três espécies estão ativas aqui: cupins subterrâneos (baseados no solo, atacam de baixo), cupins Formosan (espécie subterrânea extremamente destrutiva) e cupins-de-madeira-seca, a espécie mais provável de estar no seu soffit e fascia.",
        contextP2: "Os cupins-de-madeira-seca (Incisitermes snyderi e Cryptotermes brevis) não precisam de contato com o solo. Infestam madeira seca e exposta, o que torna os componentes do telhado, as placas de soffit, a fascia e o armazenamento do sótão seus alvos principais. Ao contrário dos cupins subterrâneos, podem viver completamente dentro de um único pedaço de madeira sem tocar o chão.",
        contextP3: "De acordo com a Extensão IFAS da Universidade da Flórida, os cupins-de-madeira-seca causam centenas de milhões em danos estruturais na Flórida anualmente. O soffit e a fascia são particularmente vulneráveis porque estão constantemente expostos ao sol, ciclos de chuva e umidade.",
        warningTitle: "Crítico: Nunca Repare o Soffit Sobre uma Infestação Ativa",
        warningBody: "Instalar soffit novo de alumínio ou vinil sobre dano ativo de cupins não resolve o problema. Sela a colônia dentro e dá a eles um ambiente protegido para continuar comendo. Sempre trate e confirme a eliminação antes de iniciar qualquer trabalho de reparo de soffit.",
        signsTitle: "5 Sinais de Cupins-de-Madeira-Seca no seu Soffit",
        sequenceTitle: "A Sequência Correta de Reparo",
        sequenceIntro: "Errar essa ordem é o erro mais caro que os proprietários cometem. Fomos chamados para substituir soffit instalado por outras empresas sobre dano ativo de cupins. Em 18 meses o novo material foi comprometido porque a colônia sobreviveu embaixo.",
        materialsTitle: "Materiais de Soffit à Prova de Cupins",
        faqTitle: "Perguntas Frequentes",
        faqs: [
            {
                q: "Como sei se meu soffit tem cupins?",
                a: "O sinal mais claro é o frass, pequenos pellets hexagonais abaixo do beiral ou nos peitoris das janelas. Outros sinais: pequenos orifícios de expulsão em madeira pintada, som oco ao bater no soffit, tinta borbulhando ou descascando na fascia, e cupins alados perto do beiral na primavera (março–maio).",
            },
            {
                q: "Devo reparar o soffit antes ou depois do tratamento de cupins?",
                a: "Sempre trate primeiro, depois repare. Instalar soffit novo sobre uma infestação ativa dá aos cupins uma fonte de alimento fresca. A sequência: (1) inspeção e tratamento licenciado, (2) confirmação de eliminação, (3) substituição completa com alumínio ou vinil. Nunca use soffit de madeira após um evento de cupins.",
            },
            {
                q: "Qual soffit é à prova de cupins?",
                a: "O alumínio e o vinil são 100% à prova de cupins: os cupins não podem comer metal ou plástico. O cimento de fibra também é altamente resistente. Qualquer produto de madeira natural continua vulnerável. Após o tratamento, sempre substitua por alumínio ou vinil.",
            },
        ],
        ctaTitle: "Encontrou Dano de Cupins no seu Soffit?",
        ctaBody: "Trabalhamos com a sequência correta: sem reparos até que o tratamento seja confirmado. Obtenha uma inspeção e orçamento de reparo hoje.",
        ctaBtn: "Obter Orçamento de Reparo",
        ctaPhone: "Ligar (407) 715-1790",
        signs: [
            { title: "Pellets de Frass (O Sinal #1)", emoji: "🟤", urgency: "Infestação confirmada", desc: "O frass (fezes) de cupins-de-madeira-seca parece pequenas flocos de pimenta, pellets hexagonais de aproximadamente 1mm. Acumulam-se em pequenas pilhas abaixo da área infestada: nos peitoris das janelas, no chão perto das paredes externas ou no topo das calhas. Encontrar isso é uma infestação ativa confirmada: ligue para uma empresa de pragas no mesmo dia." },
            { title: "Orifícios de Expulsão", emoji: "🔴", urgency: "Colônia ativa", desc: "Pequenos orifícios com cerca de 1,6mm de diâmetro em soffit de madeira pintada ou manchada. Os cupins-de-madeira-seca criam esses orifícios de saída especificamente para expulsar o frass. São fáceis de perder porque são muito pequenos. Passe a mão ao longo do soffit e procure pequenas manchas ásperas." },
            { title: "Madeira que Soa Oca", emoji: "🪵", urgency: "Dano estrutural", desc: "Bata ao longo das suas placas de soffit e fascia com os nós dos dedos. A madeira sólida soa densa. A madeira danificada por cupins soa oca, uma batida surda e vazia. Isso indica que as galerias internas substituíram a fibra de madeira estrutural. Áreas ocas significativas significam que a placa perdeu grande parte de sua integridade estrutural." },
            { title: "Tinta Borbulhando ou Descascando", emoji: "🎨", urgency: "Possível dano", desc: "Tinta borbulhando, com bolhas ou descascando nas placas de fascia, sem fonte óbvia de umidade, pode indicar atividade de cupins abaixo. Os cupins criam calor e umidade ao digerir madeira, o que força a tinta a se separar da superfície." },
            { title: "Enxames no seu Beiral", emoji: "✈️", urgency: "Colônia se expandindo", desc: "Os alados (cupins com asas) enxameiam de colônias maduras na primavera, tipicamente de março a maio no Centro da Flórida. Se você vê grandes quantidades de insetos com asas perto do seu beiral durante as horas de luz do dia, sua casa tem uma colônia estabelecida. O enxame significa que a colônia tem pelo menos 3-5 anos de atividade." },
        ],
        steps: [
            { step: "1", color: "bg-amber-600", title: "Inspeção de Cupins Licenciada", desc: "Obtenha uma inspeção WDO (Organismo Destruidor de Madeira) de uma empresa de controle de pragas licenciada pela Flórida. Eles identificarão a espécie, mapearão a extensão da infestação e recomendarão o tratamento. Necessário antes que qualquer reparo possa ser orçado com precisão." },
            { step: "2", color: "bg-orange-600", title: "Tratamento e Eliminação", desc: "As opções de tratamento incluem tratamento pontual localizado (líquido ou espuma injetada através de orifícios de expulsão), tratamento térmico ou fumigação de toda a estrutura (tenda) para infestações pesadas. Sua empresa de pragas determina a abordagem correta." },
            { step: "3", color: "bg-blue-600", title: "Substituição Completa de Soffit e Fascia", desc: "Toda a madeira danificada por cupins deve ser completamente removida: não apenas o material de superfície mas o substrato e quaisquer placas de suporte. A substituição deve usar soffit de alumínio ou vinil e fascia enrolada em alumínio ou PVC, materiais que os cupins fisicamente não podem comer." },
            { step: "4", color: "bg-green-600", title: "Verificação Anual de Prevenção", desc: "Após o reparo, agende inspeções WDO anuais. A pressão de cupins do Centro da Flórida não desaparece após um tratamento. A maioria das empresas de pragas oferece contratos anuais que incluem inspeção de soffit e fascia." },
        ],
        termiteMaterials: [
            { material: "Soffit de Alumínio", verdict: "100% à Prova de Cupins", verdictColor: "text-green-700", verdictBg: "bg-green-50 border-green-200", note: "O metal não pode ser comido por cupins. A escolha profissional para reparo pós-cupins. Também classificado para furacões e à prova de umidade." },
            { material: "Soffit de Vinil", verdict: "100% à Prova de Cupins", verdictColor: "text-green-700", verdictBg: "bg-green-50 border-green-200", note: "O plástico não pode ser comido por cupins. Uma opção econômica para substituição pós-tratamento. Não recomendado para áreas com alto estresse térmico." },
            { material: "Soffit de Cimento de Fibra", verdict: "Resistente a Cupins", verdictColor: "text-blue-700", verdictBg: "bg-blue-50 border-blue-200", note: "Os materiais à base de cimento não são comidos por cupins. HardieSoffit tem Aprovação de Produto da Flórida. Mais caro que o alumínio mas excelente durabilidade." },
            { material: "Painéis de Madeira ou com Suporte de Madeira", verdict: "Evitar Após Infestação", verdictColor: "text-red-700", verdictBg: "bg-red-50 border-red-200", note: "Qualquer soffit de madeira natural, suporte de OSB ou substrato de madeira é suscetível. Após um evento de cupins, não reinstale nenhum produto à base de madeira no beiral." },
        ],
    },
};

const signColors = [
    { border: "border-red-200", bg: "bg-red-50", urgencyColor: "text-red-700" },
    { border: "border-orange-200", bg: "bg-orange-50", urgencyColor: "text-red-700" },
    { border: "border-amber-200", bg: "bg-amber-50", urgencyColor: "text-orange-700" },
    { border: "border-yellow-200", bg: "bg-yellow-50", urgencyColor: "text-yellow-700" },
    { border: "border-red-200", bg: "bg-red-50", urgencyColor: "text-red-700" },
];

export default async function TermitesInSoffitOrlandoPage({
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
                <section className="py-24 bg-gradient-to-br from-amber-950 via-stone-900 to-slate-900 text-white">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <AnimatedSection>
                            <div className="flex flex-wrap gap-3 items-center mb-6">
                                <Link href={blogHref} className="text-amber-300 hover:text-white text-sm transition">← {c.breadcrumb}</Link>
                                <span className="text-amber-500">/</span>
                                <span className="text-xs font-bold bg-amber-500/20 border border-amber-400/30 text-amber-200 px-3 py-1 rounded-full uppercase tracking-widest">{c.category}</span>
                                <span className="text-xs text-blue-400">{c.readTime}</span>
                            </div>
                            <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
                                {c.h1a}<br />
                                <span className="bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent">{c.h1b}</span>
                            </h1>
                            <p className="text-sm text-gray-400 mt-2 mb-4">{c.authorLine}</p>
                            <p className="text-xl text-amber-100 max-w-3xl leading-relaxed">{c.intro}</p>
                        </AnimatedSection>
                    </div>
                </section>

                {/* ── FLORIDA CONTEXT ──────────────────────────────────────── */}
                <section className="py-14 bg-white">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <AnimatedSection>
                            <h2 className="text-2xl font-extrabold text-gray-900 mb-5">{c.contextTitle}</h2>
                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p>{c.contextP1}</p>
                                <p>{c.contextP2}</p>
                                <p>{c.contextP3}</p>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* ── WARNING BOX ─────────────────────────────────────────── */}
                <section className="py-6 bg-white">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <AnimatedSection>
                            <div className="bg-red-50 border border-red-200 rounded-2xl p-6 flex gap-4">
                                <AlertTriangle className="w-6 h-6 text-red-600 shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-bold text-red-900 mb-2">{c.warningTitle}</p>
                                    <p className="text-red-800 text-sm leading-relaxed">{c.warningBody}</p>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* ── SIGNS ────────────────────────────────────────────────── */}
                <section className="py-10 pb-16 bg-white">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <AnimatedSection className="mb-10">
                            <h2 className="text-2xl font-extrabold text-gray-900">{c.signsTitle}</h2>
                        </AnimatedSection>
                        <div className="space-y-6">
                            {c.signs.map((sign, i) => (
                                <AnimatedSection key={sign.title} delay={i * 60} from="bottom">
                                    <div className={`rounded-2xl border ${signColors[i].border} ${signColors[i].bg} p-7`}>
                                        <div className="flex items-center justify-between gap-4 flex-wrap mb-4">
                                            <div className="flex items-center gap-3">
                                                <span className="text-3xl" role="img" aria-label={sign.title}>{sign.emoji}</span>
                                                <h3 className="text-lg font-extrabold text-gray-900">{sign.title}</h3>
                                            </div>
                                            <span className={`text-xs font-bold px-3 py-1 rounded-full bg-white border ${signColors[i].border} ${signColors[i].urgencyColor}`}>
                                                {sign.urgency}
                                            </span>
                                        </div>
                                        <p className="text-gray-700 text-sm leading-relaxed">{sign.desc}</p>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── REPAIR SEQUENCE ──────────────────────────────────────── */}
                <section className="py-16 bg-slate-50 border-y border-gray-100">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <AnimatedSection>
                            <h2 className="text-2xl font-extrabold text-gray-900 mb-6">{c.sequenceTitle}</h2>
                            <p className="text-gray-600 leading-relaxed mb-8">{c.sequenceIntro}</p>
                            <div className="space-y-4">
                                {c.steps.map((item, i) => (
                                    <AnimatedSection key={item.step} delay={i * 80} from="left">
                                        <div className="flex gap-5 items-start bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                                            <div className={`w-10 h-10 ${item.color} text-white rounded-full flex items-center justify-center font-extrabold text-lg shrink-0`}>
                                                {item.step}
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                                                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                                            </div>
                                        </div>
                                    </AnimatedSection>
                                ))}
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* ── TERMITE-PROOF MATERIALS ───────────────────────────────── */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <AnimatedSection>
                            <h2 className="text-2xl font-extrabold text-gray-900 mb-6">{c.materialsTitle}</h2>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {c.termiteMaterials.map((item, i) => (
                                    <AnimatedSection key={item.material} delay={i * 60} from="bottom">
                                        <div className={`rounded-2xl border ${item.verdictBg} p-5`}>
                                            <h3 className="font-bold text-gray-900 mb-1">{item.material}</h3>
                                            <span className={`text-xs font-bold ${item.verdictColor} block mb-3`}>{item.verdict}</span>
                                            <p className="text-gray-600 text-sm leading-relaxed">{item.note}</p>
                                        </div>
                                    </AnimatedSection>
                                ))}
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* ── FAQ ───────────────────────────────────────────────── */}
                <section className="py-16 bg-gray-50 border-t border-gray-100">
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
                <RelatedServices serviceKeys={["repairs", "remove-replace", "materials"]} locale={locale} />

                {/* ── CTA ───────────────────────────────────────────────── */}
                <section className="py-20 bg-gradient-to-br from-amber-950 to-slate-900 text-white text-center">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <AnimatedSection>
                            <h2 className="text-3xl font-extrabold mb-4">{c.ctaTitle}</h2>
                            <p className="text-amber-200 text-lg mb-8">{c.ctaBody}</p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href={contactHref} className="inline-flex items-center justify-center gap-2 bg-amber-600 text-white px-8 py-4 rounded-full font-bold hover:bg-amber-500 transition shadow-xl">
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
