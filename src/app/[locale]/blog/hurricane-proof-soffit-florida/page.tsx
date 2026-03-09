import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, AlertTriangle, Phone, ShieldCheck } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { RelatedServices } from "@/components/ui/RelatedServices";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const slug = "hurricane-proof-soffit-florida";
    const url = locale === "en" ? `https://bubblesenterprise.com/blog/${slug}` : `https://bubblesenterprise.com/${locale}/blog/${slug}`;

    const titles: Record<string, string> = {
        en: "Hurricane-Proof Soffit Florida: What Actually Works (2026)",
        es: "Soffit Resistente a Huracanes en Florida: Qué Funciona Realmente (2026)",
        pt: "Soffit Resistente a Furacões na Flórida: O Que Realmente Funciona (2026)",
    };
    const descriptions: Record<string, string> = {
        en: "After Hurricane Michael, engineers documented exactly where soffit fails. Aluminum vs vinyl in hurricane winds, the interlocking method, and what Florida code requires for your roofline.",
        es: "Después del Huracán Michael, los ingenieros documentaron exactamente dónde falla el soffit. Aluminio vs vinilo en vientos huracanados y los requisitos del código de Florida.",
        pt: "Após o Furacão Michael, engenheiros documentaram exatamente onde o soffit falha. Alumínio vs vinil em ventos de furacão e o que o código da Flórida exige para o seu beiral.",
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
            "@id": "https://bubblesenterprise.com/blog/hurricane-proof-soffit-florida#article",
            headline: "Hurricane-Proof Soffit Florida: What Actually Works (2026)",
            description: "Post-Hurricane Michael analysis: which soffit materials fail, how installation determines performance, and what Florida homeowners need for real wind protection.",
            url: "https://bubblesenterprise.com/blog/hurricane-proof-soffit-florida",
            datePublished: "2026-03-01",
            dateModified: "2026-03-01",
            author: { "@type": "Person", "name": "Bubbles Enterprise Team", "jobTitle": "Licensed Soffit & Fascia Contractors", "url": "https://bubblesenterprise.com/about", "worksFor": { "@id": "https://bubblesenterprise.com/#business" } },
            publisher: { "@id": "https://bubblesenterprise.com/#business" },
            articleSection: "Installation & Materials",
            keywords: "hurricane proof soffit Florida, hurricane soffit damage, aluminum soffit wind rating, soffit installation hurricane, Florida Building Code soffit, soffit fascia hurricane season",
        },
        {
            "@type": "FAQPage",
            "@id": "https://bubblesenterprise.com/blog/hurricane-proof-soffit-florida#faq",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "What soffit material is best for hurricanes in Florida?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Aluminum soffit is the best choice for hurricane resistance in Florida. When installed with the interlocking method using 0.044–0.050 inch thickness panels, aluminum soffit can withstand winds up to 160 mph. Vinyl can handle up to 110 mph with reinforced supports. Fiber cement (HardieSoffit) has HVHZ approval for Miami-Dade and Broward counties.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Why does soffit fail in hurricanes?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Post-Hurricane Michael analysis identified two primary failure modes: (1) installation gaps at the fascia edge or J-channel that allow wind uplift to begin, and (2) undersized or missing fasteners. Material type matters less than installation quality. Even premium aluminum soffit fails if installed with gaps or improper fastening. The interlocking panel method with sealed edges is what creates real wind resistance.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does Florida Building Code require anything specific for soffit?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Florida Building Code 8th Edition (2023) requires that all soffit materials have Florida Product Approval (FPA) or comply with IRC standards. Ventilation ratios must follow FBC Section 1202.2 (1:150 minimum or 1:300 with proper vapor control). In HVHZ zones (Miami-Dade and Broward), products must have Miami-Dade Notice of Acceptance (NOA). Orange County (Orlando) is not HVHZ but still requires FPA-compliant materials.",
                    },
                },
            ],
        },
    ],
};

type LocaleContent = {
    breadcrumb: string;
    category: string;
    readTime: string;
    authorLine: React.ReactNode;
    h1a: string;
    h1b: string;
    intro: React.ReactNode;
    michaelTitle: string;
    michaelP1: string;
    michaelP2: string;
    michaelP3: string;
    michaelBox: string;
    michaelBoxBody: string;
    windTitle: string;
    windSub: string;
    windNote: string;
    failureTitle: string;
    failureSub: string;
    fixLabel: string;
    codeTitle: string;
    codeIntro: string;
    codeItems: string[];
    codeBoxTitle: string;
    codeBoxBody: string;
    checklistTitle: string;
    checklistIntro: string;
    checklistItems: string[];
    faqTitle: string;
    faqs: { q: string; a: string }[];
    ctaTitle: string;
    ctaBody: string;
    ctaBtn: string;
    ctaPhone: string;
    frequencyLabel: string;
    failureModes: { mode: string; frequency: string; desc: string; fix: string }[];
    windRatings: { material: string; wind: string; rating: string; color: string; bg: string; bar: string; barColor: string }[];
};

const content: Record<string, LocaleContent> = {
    en: {
        breadcrumb: "Blog",
        category: "Installation & Materials",
        readTime: "8 min read · March 1, 2026",
        authorLine: <>By <span className="font-semibold text-gray-700">Eddy</span> · Soffit &amp; Fascia Specialist · <time dateTime="2026-03-01">March 1, 2026</time></>,
        h1a: "Hurricane-Proof Soffit\nin Florida:",
        h1b: "What Actually Works (2026)",
        intro: <>After Hurricane Michael, structural engineers documented exactly where soffit fails — and the findings were clear: <strong>installation matters more than material.</strong> Here&apos;s what Central Florida homeowners need to know before the next storm.</>,
        michaelTitle: "What Hurricane Michael Taught Us",
        michaelP1: "Hurricane Michael made landfall in October 2018 as a Category 5 storm with 160 mph sustained winds — the strongest to hit the Florida Panhandle on record. Post-storm forensic analysis documented widespread soffit failure that was not caused by wind exceeding material ratings.",
        michaelP2: "The common finding: soffit failed at connection points, not at the panels themselves. Homes with properly installed aluminum soffit — fully seated in J-channel, fastened at every rafter tail — largely survived. Homes with the same materials but installation gaps or improper fastening lost entire soffit sections.",
        michaelP3: "Orlando and surrounding counties are well within Florida's active hurricane zone. A Category 1 storm (74–95 mph winds) reaches the threshold where improperly installed vinyl soffit begins to fail. A Category 2 (96–110 mph) is where even reinforced vinyl approaches its limit.",
        michaelBox: "The bottom line",
        michaelBoxBody: "The most wind-resistant soffit system is aluminum, installed correctly, with no gaps. If your current soffit has visible gaps at the fascia edge, loose panels, or sagging sections — it will not survive a major storm, regardless of material.",
        windTitle: "Wind Resistance by Material",
        windSub: "With correct installation and proper fastening",
        windNote: "* HVHZ approval. All ratings assume correct installation per manufacturer specs and FBC requirements.",
        failureTitle: "The 4 Ways Soffit Fails in a Storm",
        failureSub: "Based on post-hurricane forensic analysis. Know these before hurricane season.",
        fixLabel: "The Fix",
        codeTitle: "Florida Building Code Requirements",
        codeIntro: "Florida Building Code 8th Edition (2023) sets the minimum requirements for soffit installation statewide. Here's what applies to Orlando-area homeowners:",
        codeItems: [
            "All soffit materials must have Florida Product Approval (FPA) — materials without FPA cannot be legally installed.",
            "Ventilation ratio: minimum 1/150 of the ventilated attic area, or 1/300 with proper vapor control. Soffit vents count as intake ventilation.",
            "Vent openings must be screened with corrosion-resistant mesh, minimum 1/16\" and maximum 1/4\" openings.",
            "Orange County (Orlando) is NOT in the High Velocity Hurricane Zone (HVHZ) — Miami-Dade and Broward only. Standard FBC wind resistance requirements apply.",
            "Design wind speed for Orange County: 130 mph (3-second gust). All materials and fastening must be rated for this load.",
        ],
        codeBoxTitle: "Ask your contractor",
        codeBoxBody: "Always ask for the Florida Product Approval number for the specific soffit product being installed. A licensed contractor should provide this without hesitation. If they can't — that's a red flag.",
        checklistTitle: "Pre-Hurricane Season Soffit Checklist",
        checklistIntro: "Hurricane season in Florida runs June 1 – November 30. Walk your roofline in May and look for these warning signs before the season begins:",
        checklistItems: [
            "Visible gaps between soffit panel edge and fascia board",
            "Any panel that sags, waves, or moves when pushed",
            "Peeling paint or rust staining on fascia",
            "Cracked, broken, or missing sections of soffit",
            "Any section where the J-channel has pulled away from the wall",
            "Soft or spongy fascia board (indicates rot underneath)",
            "Staining or discoloration on soffit underside (water infiltration)",
        ],
        faqTitle: "Common Questions",
        faqs: [
            {
                q: "What soffit material is best for hurricanes in Florida?",
                a: "Aluminum (0.044–0.050 inch thickness) is the best choice — rated up to 160 mph when properly installed with interlocking method and sealed edges. Fiber cement (HardieSoffit) is also excellent and has HVHZ approval. Vinyl is adequate for most Central Florida conditions when reinforced, but not the best choice for wind-exposed locations.",
            },
            {
                q: "Why does soffit fail in hurricanes?",
                a: "Post-Hurricane Michael analysis found two primary causes: (1) installation gaps at the fascia edge or J-channel that allow wind uplift to begin, and (2) undersized or missing fasteners. Material type matters less than installation quality. Even premium aluminum fails if installed with gaps.",
            },
            {
                q: "Does Florida Building Code require anything specific for soffit?",
                a: "Yes. All soffit materials must have Florida Product Approval (FPA). Ventilation must meet FBC Section 1202.2 (1:150 minimum ratio). Design wind speed for Orange County (Orlando) is 130 mph — all materials and fastening must be rated for this load. HVHZ requirements (Miami-Dade/Broward) are more stringent.",
            },
        ],
        ctaTitle: "Is Your Soffit Ready for Hurricane Season?",
        ctaBody: "We inspect and replace soffit to Florida code — FPA-approved materials, correct fastening, sealed edges. Free inspection before hurricane season.",
        ctaBtn: "Schedule Free Inspection",
        ctaPhone: "Call (407) 715-1790",
        frequencyLabel: "",
        failureModes: [
            {
                mode: "Gap at Fascia Edge",
                frequency: "Most Common",
                desc: "When the soffit panel doesn't fully seat into the J-channel at the fascia edge, wind gets underneath and creates uplift pressure. Once one panel lifts, the entire run can peel away in seconds. This is the #1 installation error and the #1 cause of soffit loss in storms.",
                fix: "Panels must be fully seated in J-channel with no visible gap. Fascia trim must be tight against the panel edge.",
            },
            {
                mode: "Undersized or Missing Fasteners",
                frequency: "Very Common",
                desc: "Panels fastened with roofing nails instead of proper screws, or fastened only at field rather than at every support member. In Florida, panel fastening must account for wind uplift forces per FBC wind load requirements.",
                fix: "Corrosion-resistant screws at every rafter tail or nailer. Nail spacing per manufacturer specification — not 'common sense' spacing.",
            },
            {
                mode: "Vinyl Soffit Without Reinforcement",
                frequency: "Common",
                desc: "Standard vinyl soffit panels tested at 110 mph maximum with proper supports. Without additional blocking at channel points, failure begins around 90 mph — which is a Category 1 hurricane threshold. Many vinyl installations in Orlando-area homes are not reinforced.",
                fix: "Add solid blocking at all J-channel mounting points. Use thicker panel gauge. Consider aluminum if you're in an area with repeated storm exposure.",
            },
            {
                mode: "Rotted Wood Substrate",
                frequency: "Common",
                desc: "New aluminum soffit installed over rotted fascia board or nailers has no real anchoring. When wind uplift begins, the fasteners pull through the soft wood and the entire panel assembly fails. This is especially common when re-covering old wood soffit without replacing the substrate.",
                fix: "Replace all substrate wood before installing new soffit. Any soft, spongy, or discolored wood must come out.",
            },
        ],
        windRatings: [
            { material: "Aluminum (0.044–0.050\")", wind: "Up to 160 mph", rating: "Excellent", color: "text-green-700", bg: "bg-green-50", bar: "w-full", barColor: "bg-green-500" },
            { material: "Fiber Cement (HardieSoffit)", wind: "Up to 150 mph*", rating: "Excellent (HVHZ)", color: "text-green-700", bg: "bg-green-50", bar: "w-[94%]", barColor: "bg-green-400" },
            { material: "Aluminum (0.019\" builder grade)", wind: "Up to 130 mph", rating: "Good", color: "text-blue-700", bg: "bg-blue-50", bar: "w-[81%]", barColor: "bg-blue-500" },
            { material: "Vinyl (reinforced)", wind: "Up to 110 mph", rating: "Adequate", color: "text-yellow-700", bg: "bg-yellow-50", bar: "w-[69%]", barColor: "bg-yellow-500" },
            { material: "Vinyl (standard)", wind: "Up to 90 mph", rating: "Borderline", color: "text-orange-700", bg: "bg-orange-50", bar: "w-[56%]", barColor: "bg-orange-500" },
            { material: "Wood (painted)", wind: "Up to 70 mph", rating: "Avoid in FL", color: "text-red-700", bg: "bg-red-50", bar: "w-[44%]", barColor: "bg-red-500" },
        ],
    },
    es: {
        breadcrumb: "Blog",
        category: "Instalación y Materiales",
        readTime: "8 min de lectura · 1 de marzo de 2026",
        authorLine: <>Por <span className="font-semibold text-gray-700">Eddy</span> · Especialista en Soffit y Fascia · <time dateTime="2026-03-01">1 de marzo de 2026</time></>,
        h1a: "Soffit Resistente a Huracanes\nen Florida:",
        h1b: "Qué Funciona Realmente (2026)",
        intro: <>Después del Huracán Michael, ingenieros estructurales documentaron exactamente dónde falla el soffit. Los hallazgos fueron claros: <strong>la instalación importa más que el material.</strong> Esto es lo que los propietarios del Centro de Florida necesitan saber antes de la próxima tormenta.</>,
        michaelTitle: "Lo Que el Huracán Michael Nos Enseñó",
        michaelP1: "El Huracán Michael tocó tierra en octubre de 2018 como tormenta Categoría 5 con vientos sostenidos de 260 km/h, el más fuerte en golpear el Panhandle de Florida. El análisis forense post-tormenta documentó fallas generalizadas de soffit que NO fueron causadas por vientos que excedieran las clasificaciones del material.",
        michaelP2: "El hallazgo común: el soffit falló en los puntos de conexión, no en los paneles mismos. Las casas con soffit de aluminio correctamente instalado, completamente asentado en el canal J y anclado en cada extremo de viga, sobrevivieron en gran medida. Las casas con los mismos materiales pero con brechas de instalación o anclaje incorrecto perdieron secciones enteras de soffit.",
        michaelP3: "Orlando y los condados circundantes están bien dentro de la zona de huracanes activos de Florida. Una tormenta Categoría 1 (vientos de 120–150 km/h) alcanza el umbral donde el soffit de vinilo instalado incorrectamente comienza a fallar.",
        michaelBox: "La conclusión",
        michaelBoxBody: "El sistema de soffit más resistente al viento es el aluminio, instalado correctamente, sin brechas. Si su soffit actual tiene brechas visibles en el borde de la fascia, paneles sueltos o secciones hundidas, no sobrevivirá una tormenta importante, independientemente del material.",
        windTitle: "Resistencia al Viento por Material",
        windSub: "Con instalación correcta y anclaje adecuado",
        windNote: "* Aprobación HVHZ. Todas las clasificaciones asumen instalación correcta según especificaciones del fabricante y requisitos del FBC.",
        failureTitle: "Las 4 Formas en que el Soffit Falla en una Tormenta",
        failureSub: "Basado en análisis forense post-huracán. Conozca estas antes de la temporada de huracanes.",
        fixLabel: "La Solución",
        codeTitle: "Requisitos del Código de Construcción de Florida",
        codeIntro: "El Código de Construcción de Florida 8ª Edición (2023) establece los requisitos mínimos para la instalación de soffit en todo el estado. Esto es lo que aplica a los propietarios del área de Orlando:",
        codeItems: [
            "Todos los materiales de soffit deben tener Aprobación de Producto de Florida (FPA). Los materiales sin FPA no pueden instalarse legalmente.",
            "Relación de ventilación: mínimo 1/150 del área del ático ventilado, o 1/300 con control de vapor adecuado. Las ventilaciones del soffit cuentan como ventilación de entrada.",
            "Las aberturas de ventilación deben tener malla resistente a la corrosión, mínimo 1/16\" y máximo 1/4\" de abertura.",
            "El Condado de Orange (Orlando) NO está en la Zona de Huracanes de Alta Velocidad (HVHZ). Solo Miami-Dade y Broward. Se aplican los requisitos estándar de resistencia al viento del FBC.",
            "Velocidad de diseño del viento para el Condado de Orange: 210 km/h (ráfaga de 3 segundos). Todos los materiales y anclajes deben estar clasificados para esta carga.",
        ],
        codeBoxTitle: "Pregúntele a su contratista",
        codeBoxBody: "Siempre solicite el número de Aprobación de Producto de Florida para el producto de soffit específico que se instalará. Un contratista con licencia debe proporcionarlo sin dudarlo. Si no pueden, esa es una señal de alerta.",
        checklistTitle: "Lista de Verificación Pre-Temporada de Huracanes",
        checklistIntro: "La temporada de huracanes en Florida va del 1 de junio al 30 de noviembre. Recorra su alero en mayo y busque estas señales de advertencia antes de que comience la temporada:",
        checklistItems: [
            "Brechas visibles entre el borde del panel de soffit y la tabla de fascia",
            "Cualquier panel que se hunda, ondule o se mueva al presionarlo",
            "Pintura desprendida o manchas de óxido en la fascia",
            "Secciones de soffit agrietadas, rotas o faltantes",
            "Cualquier sección donde el canal J se haya separado de la pared",
            "Tabla de fascia blanda o esponjosa (indica pudrición debajo)",
            "Manchas o decoloración en la parte inferior del soffit (infiltración de agua)",
        ],
        faqTitle: "Preguntas Frecuentes",
        faqs: [
            {
                q: "¿Qué material de soffit es mejor para huracanes en Florida?",
                a: "El aluminio (grosor 0.044–0.050 pulgadas) es la mejor opción: clasificado hasta 260 km/h cuando se instala correctamente con método de enclavamiento y bordes sellados. El cemento de fibra (HardieSoffit) también es excelente y tiene aprobación HVHZ. El vinilo es adecuado para la mayoría de las condiciones del Centro de Florida cuando está reforzado, pero no es la mejor opción para ubicaciones expuestas al viento.",
            },
            {
                q: "¿Por qué falla el soffit en los huracanes?",
                a: "El análisis post-Huracán Michael encontró dos causas principales: (1) brechas de instalación en el borde de la fascia o el canal J que permiten que comience el levantamiento por el viento, y (2) anclajes insuficientes o faltantes. El tipo de material importa menos que la calidad de instalación. Incluso el aluminio premium falla si se instala con brechas.",
            },
            {
                q: "¿El Código de Construcción de Florida requiere algo específico para el soffit?",
                a: "Sí. Todos los materiales de soffit deben tener Aprobación de Producto de Florida (FPA). La ventilación debe cumplir con la Sección 1202.2 del FBC (relación mínima 1:150). La velocidad de diseño del viento para el Condado de Orange (Orlando) es de 210 km/h; todos los materiales y anclajes deben estar clasificados para esta carga.",
            },
        ],
        ctaTitle: "¿Está su Soffit Listo para la Temporada de Huracanes?",
        ctaBody: "Inspeccionamos y reemplazamos el soffit según el código de Florida: materiales aprobados por FPA, anclaje correcto, bordes sellados. Inspección gratuita antes de la temporada de huracanes.",
        ctaBtn: "Programar Inspección Gratuita",
        ctaPhone: "Llamar (407) 715-1790",
        frequencyLabel: "",
        failureModes: [
            {
                mode: "Brecha en el Borde de la Fascia",
                frequency: "Más Común",
                desc: "Cuando el panel de soffit no se asienta completamente en el canal J en el borde de la fascia, el viento se mete por debajo y crea presión de levantamiento. Una vez que un panel se levanta, toda la sección puede desprenderse en segundos. Este es el error de instalación #1 y la causa #1 de pérdida de soffit en tormentas.",
                fix: "Los paneles deben estar completamente asentados en el canal J sin brecha visible. El remate de fascia debe estar apretado contra el borde del panel.",
            },
            {
                mode: "Anclajes Insuficientes o Faltantes",
                frequency: "Muy Común",
                desc: "Paneles anclados con clavos de techo en lugar de tornillos apropiados, o anclados solo en el campo en lugar de en cada elemento de soporte. En Florida, el anclaje de paneles debe tener en cuenta las fuerzas de levantamiento del viento según los requisitos de carga del viento del FBC.",
                fix: "Tornillos resistentes a la corrosión en cada extremo de viga o tablilla. Espaciado de clavos según especificación del fabricante.",
            },
            {
                mode: "Soffit de Vinilo Sin Refuerzo",
                frequency: "Común",
                desc: "Los paneles de soffit de vinilo estándar están probados a un máximo de 177 km/h con soportes adecuados. Sin bloqueo adicional en los puntos del canal, la falla comienza alrededor de 145 km/h, que es el umbral de un huracán Categoría 1.",
                fix: "Agregue bloqueo sólido en todos los puntos de montaje del canal J. Use calibre de panel más grueso. Considere aluminio si está en un área con exposición repetida a tormentas.",
            },
            {
                mode: "Sustrato de Madera Podrida",
                frequency: "Común",
                desc: "El soffit de aluminio nuevo instalado sobre una tabla de fascia podrida o tablillas no tiene anclaje real. Cuando comienza el levantamiento por el viento, los anclajes se deslizan a través de la madera blanda y toda la estructura de paneles falla.",
                fix: "Reemplace toda la madera del sustrato antes de instalar el nuevo soffit. Cualquier madera blanda, esponjosa o decolorada debe quitarse.",
            },
        ],
        windRatings: [
            { material: "Aluminio (0.044–0.050\")", wind: "Hasta 260 km/h", rating: "Excelente", color: "text-green-700", bg: "bg-green-50", bar: "w-full", barColor: "bg-green-500" },
            { material: "Cemento de Fibra (HardieSoffit)", wind: "Hasta 240 km/h*", rating: "Excelente (HVHZ)", color: "text-green-700", bg: "bg-green-50", bar: "w-[94%]", barColor: "bg-green-400" },
            { material: "Aluminio (grado constructor 0.019\")", wind: "Hasta 210 km/h", rating: "Bueno", color: "text-blue-700", bg: "bg-blue-50", bar: "w-[81%]", barColor: "bg-blue-500" },
            { material: "Vinilo (reforzado)", wind: "Hasta 177 km/h", rating: "Adecuado", color: "text-yellow-700", bg: "bg-yellow-50", bar: "w-[69%]", barColor: "bg-yellow-500" },
            { material: "Vinilo (estándar)", wind: "Hasta 145 km/h", rating: "Límite", color: "text-orange-700", bg: "bg-orange-50", bar: "w-[56%]", barColor: "bg-orange-500" },
            { material: "Madera (pintada)", wind: "Hasta 113 km/h", rating: "Evitar en FL", color: "text-red-700", bg: "bg-red-50", bar: "w-[44%]", barColor: "bg-red-500" },
        ],
    },
    pt: {
        breadcrumb: "Blog",
        category: "Instalação e Materiais",
        readTime: "8 min de leitura · 1 de março de 2026",
        authorLine: <>Por <span className="font-semibold text-gray-700">Eddy</span> · Especialista em Soffit e Fascia · <time dateTime="2026-03-01">1 de março de 2026</time></>,
        h1a: "Soffit Resistente a Furacões\nna Flórida:",
        h1b: "O Que Realmente Funciona (2026)",
        intro: <>Após o Furacão Michael, engenheiros estruturais documentaram exatamente onde o soffit falha. As descobertas foram claras: <strong>a instalação importa mais do que o material.</strong> Veja o que os proprietários do Centro da Flórida precisam saber antes da próxima tempestade.</>,
        michaelTitle: "O Que o Furacão Michael Nos Ensinou",
        michaelP1: "O Furacão Michael atingiu a terra em outubro de 2018 como uma tempestade Categoria 5 com ventos sustentados de 260 km/h, o mais forte a atingir o Panhandle da Flórida. A análise forense pós-tempestade documentou falhas generalizadas de soffit que NÃO foram causadas por ventos que excederam as classificações do material.",
        michaelP2: "A descoberta comum: o soffit falhou nos pontos de conexão, não nos próprios painéis. As casas com soffit de alumínio corretamente instalado, totalmente assentado no canal J e fixado em cada extremidade de viga, sobreviveram em grande parte. As casas com os mesmos materiais mas com frestas de instalação ou fixação inadequada perderam seções inteiras de soffit.",
        michaelP3: "Orlando e os condados vizinhos estão bem dentro da zona de furacões ativa da Flórida. Uma tempestade Categoria 1 (ventos de 120–153 km/h) atinge o limiar onde o soffit de vinil instalado incorretamente começa a falhar.",
        michaelBox: "A conclusão",
        michaelBoxBody: "O sistema de soffit mais resistente ao vento é o alumínio, instalado corretamente, sem frestas. Se o seu soffit atual tem frestas visíveis na borda da fascia, painéis soltos ou seções afundadas, ele não sobreviverá a uma tempestade importante, independentemente do material.",
        windTitle: "Resistência ao Vento por Material",
        windSub: "Com instalação correta e fixação adequada",
        windNote: "* Aprovação HVHZ. Todas as classificações assumem instalação correta conforme especificações do fabricante e requisitos do FBC.",
        failureTitle: "As 4 Formas em que o Soffit Falha em uma Tempestade",
        failureSub: "Baseado em análise forense pós-furacão. Conheça essas antes da temporada de furacões.",
        fixLabel: "A Solução",
        codeTitle: "Requisitos do Código de Construção da Flórida",
        codeIntro: "O Código de Construção da Flórida 8ª Edição (2023) estabelece os requisitos mínimos para instalação de soffit em todo o estado. Veja o que se aplica aos proprietários da área de Orlando:",
        codeItems: [
            "Todos os materiais de soffit devem ter Aprovação de Produto da Flórida (FPA). Materiais sem FPA não podem ser instalados legalmente.",
            "Relação de ventilação: mínimo 1/150 da área do sótão ventilado, ou 1/300 com controle de vapor adequado. As ventilações do soffit contam como ventilação de entrada.",
            "As aberturas de ventilação devem ter tela resistente à corrosão, mínimo 1/16\" e máximo 1/4\" de abertura.",
            "O Condado de Orange (Orlando) NÃO está na Zona de Furacão de Alta Velocidade (HVHZ). Apenas Miami-Dade e Broward. Requisitos padrão de resistência ao vento do FBC se aplicam.",
            "Velocidade de projeto do vento para o Condado de Orange: 210 km/h (rajada de 3 segundos). Todos os materiais e fixações devem ser classificados para esta carga.",
        ],
        codeBoxTitle: "Pergunte ao seu empreiteiro",
        codeBoxBody: "Sempre peça o número de Aprovação de Produto da Flórida para o produto de soffit específico que será instalado. Um empreiteiro licenciado deve fornecê-lo sem hesitação. Se não conseguir, isso é um sinal de alerta.",
        checklistTitle: "Lista de Verificação Pré-Temporada de Furacões",
        checklistIntro: "A temporada de furacões na Flórida vai de 1 de junho a 30 de novembro. Percorra seu beiral em maio e procure estes sinais de alerta antes do início da temporada:",
        checklistItems: [
            "Frestas visíveis entre a borda do painel de soffit e a placa de fascia",
            "Qualquer painel que afunde, ondule ou se mova ao ser pressionado",
            "Tinta descascando ou manchas de ferrugem na fascia",
            "Seções de soffit rachadas, quebradas ou faltando",
            "Qualquer seção onde o canal J se separou da parede",
            "Placa de fascia macia ou esponjosa (indica podridão embaixo)",
            "Manchas ou descoloração na parte inferior do soffit (infiltração de água)",
        ],
        faqTitle: "Perguntas Frequentes",
        faqs: [
            {
                q: "Qual material de soffit é melhor para furacões na Flórida?",
                a: "O alumínio (espessura 0,044–0,050 polegadas) é a melhor escolha: classificado até 260 km/h quando corretamente instalado com método de intertravamento e bordas vedadas. O cimento de fibra (HardieSoffit) também é excelente e tem aprovação HVHZ. O vinil é adequado para a maioria das condições do Centro da Flórida quando reforçado, mas não é a melhor escolha para locais expostos ao vento.",
            },
            {
                q: "Por que o soffit falha em furacões?",
                a: "A análise pós-Furacão Michael encontrou duas causas principais: (1) frestas de instalação na borda da fascia ou canal J que permitem o início do levantamento pelo vento, e (2) fixadores insuficientes ou faltando. O tipo de material importa menos do que a qualidade da instalação. Mesmo o alumínio premium falha se instalado com frestas.",
            },
            {
                q: "O Código de Construção da Flórida exige algo específico para soffit?",
                a: "Sim. Todos os materiais de soffit devem ter Aprovação de Produto da Flórida (FPA). A ventilação deve atender à Seção 1202.2 do FBC (relação mínima 1:150). A velocidade de projeto do vento para o Condado de Orange (Orlando) é de 210 km/h; todos os materiais e fixações devem ser classificados para esta carga.",
            },
        ],
        ctaTitle: "Seu Soffit Está Pronto para a Temporada de Furacões?",
        ctaBody: "Inspecionamos e substituímos o soffit conforme o código da Flórida: materiais aprovados pela FPA, fixação correta, bordas vedadas. Inspeção gratuita antes da temporada de furacões.",
        ctaBtn: "Agendar Inspeção Gratuita",
        ctaPhone: "Ligar (407) 715-1790",
        frequencyLabel: "",
        failureModes: [
            {
                mode: "Fresta na Borda da Fascia",
                frequency: "Mais Comum",
                desc: "Quando o painel de soffit não assenta completamente no canal J na borda da fascia, o vento entra por baixo e cria pressão de levantamento. Uma vez que um painel se levanta, toda a seção pode descolar em segundos. Este é o erro de instalação #1 e a causa #1 de perda de soffit em tempestades.",
                fix: "Os painéis devem estar totalmente assentados no canal J sem fresta visível. O acabamento da fascia deve estar firmemente contra a borda do painel.",
            },
            {
                mode: "Fixadores Insuficientes ou Faltando",
                frequency: "Muito Comum",
                desc: "Painéis fixados com pregos de telhado em vez de parafusos adequados, ou fixados apenas no campo em vez de em cada elemento de suporte. Na Flórida, a fixação dos painéis deve levar em conta as forças de levantamento do vento conforme os requisitos de carga do vento do FBC.",
                fix: "Parafusos resistentes à corrosão em cada extremidade de viga ou ripa. Espaçamento de pregos conforme especificação do fabricante.",
            },
            {
                mode: "Soffit de Vinil Sem Reforço",
                frequency: "Comum",
                desc: "Os painéis de soffit de vinil padrão são testados a um máximo de 177 km/h com suportes adequados. Sem bloqueio adicional nos pontos do canal, a falha começa em torno de 145 km/h, que é o limiar de um furacão Categoria 1.",
                fix: "Adicione bloqueio sólido em todos os pontos de montagem do canal J. Use calibre de painel mais espesso. Considere alumínio se estiver em uma área com exposição repetida a tempestades.",
            },
            {
                mode: "Substrato de Madeira Apodrecida",
                frequency: "Comum",
                desc: "O soffit de alumínio novo instalado sobre placa de fascia apodrecida ou ripas não tem ancoragem real. Quando o levantamento pelo vento começa, os fixadores passam pela madeira macia e toda a estrutura de painéis falha.",
                fix: "Substitua toda a madeira do substrato antes de instalar o novo soffit. Qualquer madeira macia, esponjosa ou descolorida deve ser removida.",
            },
        ],
        windRatings: [
            { material: "Alumínio (0,044–0,050\")", wind: "Até 260 km/h", rating: "Excelente", color: "text-green-700", bg: "bg-green-50", bar: "w-full", barColor: "bg-green-500" },
            { material: "Cimento de Fibra (HardieSoffit)", wind: "Até 240 km/h*", rating: "Excelente (HVHZ)", color: "text-green-700", bg: "bg-green-50", bar: "w-[94%]", barColor: "bg-green-400" },
            { material: "Alumínio (grau construtor 0,019\")", wind: "Até 210 km/h", rating: "Bom", color: "text-blue-700", bg: "bg-blue-50", bar: "w-[81%]", barColor: "bg-blue-500" },
            { material: "Vinil (reforçado)", wind: "Até 177 km/h", rating: "Adequado", color: "text-yellow-700", bg: "bg-yellow-50", bar: "w-[69%]", barColor: "bg-yellow-500" },
            { material: "Vinil (padrão)", wind: "Até 145 km/h", rating: "Limiar", color: "text-orange-700", bg: "bg-orange-50", bar: "w-[56%]", barColor: "bg-orange-500" },
            { material: "Madeira (pintada)", wind: "Até 113 km/h", rating: "Evitar na FL", color: "text-red-700", bg: "bg-red-50", bar: "w-[44%]", barColor: "bg-red-500" },
        ],
    },
};

const failureColors = [
    { border: "border-red-200", bg: "bg-red-50", freqColor: "text-red-700", freqBg: "bg-red-100" },
    { border: "border-orange-200", bg: "bg-orange-50", freqColor: "text-red-700", freqBg: "bg-red-100" },
    { border: "border-yellow-200", bg: "bg-yellow-50", freqColor: "text-orange-700", freqBg: "bg-orange-100" },
    { border: "border-amber-200", bg: "bg-amber-50", freqColor: "text-orange-700", freqBg: "bg-orange-100" },
];

export default async function HurricaneProofSoffitFloridaPage({
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
                <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <AnimatedSection>
                            <div className="flex flex-wrap gap-3 items-center mb-6">
                                <Link href={blogHref} className="text-blue-300 hover:text-white text-sm transition">← {c.breadcrumb}</Link>
                                <span className="text-blue-500">/</span>
                                <span className="text-xs font-bold bg-blue-500/20 border border-blue-400/30 text-blue-200 px-3 py-1 rounded-full uppercase tracking-widest">{c.category}</span>
                                <span className="text-xs text-blue-400">{c.readTime}</span>
                            </div>
                            <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
                                {c.h1a.split("\n").map((line, i) => <span key={i}>{line}{i < c.h1a.split("\n").length - 1 && <br />}</span>)}<br />
                                <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">{c.h1b}</span>
                            </h1>
                            <p className="text-sm text-gray-400 mt-2 mb-4">{c.authorLine}</p>
                            <p className="text-xl text-blue-100 max-w-3xl leading-relaxed">{c.intro}</p>
                        </AnimatedSection>
                    </div>
                </section>

                {/* ── MICHAEL LESSON ───────────────────────────────────────── */}
                <section className="py-14 bg-white">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <AnimatedSection>
                            <h2 className="text-2xl font-extrabold text-gray-900 mb-5">{c.michaelTitle}</h2>
                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p>{c.michaelP1}</p>
                                <p>{c.michaelP2}</p>
                                <p>{c.michaelP3}</p>
                                <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mt-2">
                                    <p className="text-sm font-bold text-blue-900 mb-1">{c.michaelBox}</p>
                                    <p className="text-sm text-blue-800 leading-relaxed">{c.michaelBoxBody}</p>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* ── WIND RATINGS ─────────────────────────────────────────── */}
                <section className="py-16 bg-gray-50 border-y border-gray-100">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <AnimatedSection className="mb-10">
                            <h2 className="text-2xl font-extrabold text-gray-900 mb-2">{c.windTitle}</h2>
                            <p className="text-gray-500">{c.windSub}</p>
                        </AnimatedSection>
                        <div className="space-y-4">
                            {c.windRatings.map((item, i) => (
                                <AnimatedSection key={item.material} delay={i * 60} from="left">
                                    <div className={`${item.bg} rounded-2xl border border-gray-200 p-5`}>
                                        <div className="flex items-center justify-between gap-4 flex-wrap mb-3">
                                            <span className="font-bold text-gray-900 text-sm">{item.material}</span>
                                            <div className="flex items-center gap-3">
                                                <span className="font-extrabold text-gray-900 text-sm">{item.wind}</span>
                                                <span className={`text-xs font-bold px-2 py-0.5 rounded-full bg-white border border-gray-200 ${item.color}`}>{item.rating}</span>
                                            </div>
                                        </div>
                                        <div className="w-full h-2 bg-white rounded-full overflow-hidden">
                                            <div className={`h-full ${item.barColor} ${item.bar} rounded-full transition-all`} />
                                        </div>
                                    </div>
                                </AnimatedSection>
                            ))}
                            <p className="text-xs text-gray-400 italic mt-2">{c.windNote}</p>
                        </div>
                    </div>
                </section>

                {/* ── FAILURE MODES ────────────────────────────────────────── */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <AnimatedSection className="mb-10">
                            <h2 className="text-2xl font-extrabold text-gray-900 mb-2">{c.failureTitle}</h2>
                            <p className="text-gray-500">{c.failureSub}</p>
                        </AnimatedSection>
                        <div className="space-y-6">
                            {c.failureModes.map((item, i) => (
                                <AnimatedSection key={item.mode} delay={i * 80} from="bottom">
                                    <div className={`rounded-2xl border ${failureColors[i].border} ${failureColors[i].bg} p-7`}>
                                        <div className="flex items-center justify-between gap-4 flex-wrap mb-4">
                                            <h3 className="text-lg font-extrabold text-gray-900">{item.mode}</h3>
                                            <span className={`text-xs font-bold px-3 py-1 rounded-full bg-white border ${failureColors[i].border} ${failureColors[i].freqColor}`}>
                                                {item.frequency}
                                            </span>
                                        </div>
                                        <p className="text-gray-700 text-sm leading-relaxed mb-4">{item.desc}</p>
                                        <div className="bg-white/70 rounded-xl p-4">
                                            <span className="text-xs font-bold text-gray-400 uppercase block mb-1">{c.fixLabel}</span>
                                            <p className="text-sm text-gray-700">{item.fix}</p>
                                        </div>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── FLORIDA CODE ─────────────────────────────────────────── */}
                <section className="py-16 bg-slate-50 border-y border-gray-100">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <AnimatedSection>
                            <div className="flex gap-3 items-center mb-6">
                                <ShieldCheck className="w-7 h-7 text-bubble-primary shrink-0" />
                                <h2 className="text-2xl font-extrabold text-gray-900">{c.codeTitle}</h2>
                            </div>
                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p>{c.codeIntro}</p>
                                <ul className="space-y-3 ml-4">
                                    {c.codeItems.map((item, i) => (
                                        <li key={i} className="flex gap-3 items-start">
                                            <span className="text-bubble-primary font-bold mt-0.5 shrink-0">→</span>
                                            <span className="text-sm">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="bg-white border border-gray-200 rounded-xl p-5 mt-2">
                                    <p className="text-sm font-bold text-gray-900 mb-1">{c.codeBoxTitle}</p>
                                    <p className="text-sm text-gray-600 leading-relaxed">{c.codeBoxBody}</p>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* ── PRE-SEASON CHECKLIST ──────────────────────────────────── */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <AnimatedSection>
                            <h2 className="text-2xl font-extrabold text-gray-900 mb-6">{c.checklistTitle}</h2>
                            <p className="text-gray-600 leading-relaxed mb-6">{c.checklistIntro}</p>
                            <div className="space-y-3">
                                {c.checklistItems.map((item, i) => (
                                    <AnimatedSection key={i} delay={i * 40} from="left">
                                        <div className="flex gap-3 items-center bg-gray-50 border border-gray-200 rounded-xl px-5 py-3">
                                            <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0" />
                                            <span className="text-sm text-gray-700">{item}</span>
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
                <RelatedServices serviceKeys={["repairs", "new-construction", "materials"]} locale={locale} />

                {/* ── CTA ───────────────────────────────────────────────── */}
                <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-950 text-white text-center">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <AnimatedSection>
                            <h2 className="text-3xl font-extrabold mb-4">{c.ctaTitle}</h2>
                            <p className="text-blue-200 text-lg mb-8">{c.ctaBody}</p>
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
