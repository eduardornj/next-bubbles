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
    const slug = "animals-in-damaged-soffit-orlando";
    const url = locale === "en" ? `https://bubblesenterprise.com/blog/${slug}` : `https://bubblesenterprise.com/${locale}/blog/${slug}`;

    const titles: Record<string, string> = {
        en: "What Animals Get Into Damaged Soffits in Orlando? (And How to Stop Them)",
        es: "¿Qué Animales Entran por el Soffit Dañado en Orlando? (Y Cómo Detenerlos)",
        pt: "Quais Animais Entram pelo Soffit Danificado em Orlando? (E Como Parar)",
    };
    const descriptions: Record<string, string> = {
        en: "Raccoons, squirrels, rats, bats, and wasps are common soffit intruders in Central Florida. Identify what's in your soffit and the only permanent solution.",
        es: "Mapaches, ardillas, ratas, murciélagos y avispas son intrusos comunes del soffit en el Centro de Florida. Identifique qué hay en su soffit y la única solución permanente.",
        pt: "Guaxinins, esquilos, ratos, morcegos e vespas são intrusos comuns do soffit no Centro da Flórida. Identifique o que há no seu soffit e a única solução permanente.",
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
    const blogUrl = locale === "en" ? `https://bubblesenterprise.com/blog/animals-in-damaged-soffit-orlando` : `https://bubblesenterprise.com/${locale}/blog/animals-in-damaged-soffit-orlando`;
    return {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": "https://bubblesenterprise.com/blog/animals-in-damaged-soffit-orlando#article",
            headline: "What Animals Get Into Damaged Soffits in Orlando? (And How to Stop Them)",
            description: "Raccoons, squirrels, rats, bats, and wasps are common soffit intruders in Central Florida. Identification guide and permanent repair solutions.",
            url: blogUrl,
            datePublished: "2026-02-10",
            dateModified: "2026-02-10",
            author: { "@type": "Person", "name": "Bubbles Enterprise Team", "jobTitle": "Licensed Soffit & Fascia Contractors", "url": "https://bubblesenterprise.com/about", "worksFor": { "@id": "https://bubblesenterprise.com/#business" } },
            publisher: { "@id": "https://bubblesenterprise.com/#business" },
            articleSection: "Pests & Damage",
            keywords: "animals in soffit Orlando, squirrel in soffit, raccoon attic entry, rats soffit, soffit pest damage Central Florida",
            inLanguage: locale,
        },
        {
            "@type": "FAQPage",
            "@id": "https://bubblesenterprise.com/blog/animals-in-damaged-soffit-orlando#faq",
            inLanguage: locale,
            mainEntity: [
                {
                    "@type": "Question",
                    name: "What animals get into soffits in Florida?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The most common animals that enter through damaged soffits in Central Florida are: squirrels (daytime, scratching), raccoons (nighttime, heavy thumping), roof rats (nighttime, scurrying), bats (dusk/dawn, chittering), and wasps or bees (buzzing near roofline). Each species has different behavior patterns and different timing.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How do I know if something is living in my soffit?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Signs include: scratching or scurrying sounds, especially at dawn/dusk or at night; droppings near exterior walls; visible staining or damage around soffit edges; a persistent smell inside the attic; or visible animals near the roofline at dusk. Call for an emergency soffit inspection if you notice any of these signs.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What is the permanent fix for animals entering through soffit?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The only permanent fix is full soffit replacement with aluminum panels installed with no gaps — sealed at the fascia edge, J-channel, and any corner transitions. Wildlife exclusion (one-way doors, trapping) removes the existing animals, but without soffit replacement, new animals will find the same or new entry points within months.",
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
        readTime: "7 min read · February 10, 2026",
        authorLine: <>By <span className="font-semibold text-gray-700">Eddy</span> · Soffit &amp; Fascia Specialist · <time dateTime="2026-02-10">February 10, 2026</time></>,
        h1a: "What Animals Get Into\nDamaged Soffits in Orlando?",
        h1b: "(And How to Stop Them)",
        intro: "Central Florida's wildlife is active year-round. A 1-inch soffit gap is all it takes for a permanent colony to move in. Here's what each species does and the only fix that lasts.",
        alertTitle: "If You Hear Sounds Right Now",
        alertBody: <>Animal intrusion is classified as an emergency because entry points grow larger over time and electrical damage can happen within days. Don't wait — call <a href="tel:4077151790" className="font-bold underline">(407) 715-1790</a> for same-day assessment.</>,
        fixTitle: "The Only Permanent Fix",
        fixP1: "Temporary patches and spray foam do not work long-term. Wildlife — especially squirrels and raccoons — will chew through foam, work around thin patches, and find adjacent weak points. Rat mesh alone won't hold if the underlying soffit panel is deteriorated.",
        fixP2: <><strong>The permanent solution is full soffit removal and replacement with aluminum panels,</strong> properly installed with no gaps at the fascia edge, J-channel, corner transitions, and vented/solid panel interfaces. This eliminates every potential entry point along the entire roofline.</>,
        fixP3: "Wildlife exclusion (removing the existing animals) must happen before the soffit is sealed — if an animal is trapped inside, it will cause significantly more damage trying to get out, and will die in your attic if it can't.",
        processTitle: "Our Process for Animal Intrusion Jobs",
        processSteps: [
            "Inspection to identify all entry points and species",
            "Coordination with wildlife removal company if needed (bats, raccoons)",
            "Full soffit removal and replacement — aluminum, no gaps",
            "Written warranty on installation",
        ],
        faqTitle: "Common Questions",
        faqs: [
            {
                q: "What animals get into soffits in Florida?",
                a: "The most common are: squirrels (daytime, light scratching), raccoons (nighttime, heavy thumping), roof rats (nighttime scurrying), bats (dusk/dawn chittering), and wasps or bees (daytime buzzing near roofline). Each species has different timing and behavior patterns.",
            },
            {
                q: "How do I know if something is living in my soffit?",
                a: "Signs: scratching or scurrying sounds (especially dawn, dusk, or night); droppings near exterior walls; visible staining or damage around soffit edges; persistent ammonia-like smell from the attic; animals visible on the roofline at dusk. If any of these apply, call immediately.",
            },
            {
                q: "What is the permanent fix for animals entering through soffit?",
                a: "Full soffit replacement with aluminum panels, properly installed with no gaps. Wildlife exclusion (removing existing animals) must happen first. Patches, foam, and mesh alone are not permanent — animals return or find adjacent weak points. Only a full replacement eliminates all entry points.",
            },
        ],
        ctaTitle: "Hearing Sounds in Your Attic?",
        ctaBody: "Same-day assessment. We'll identify the species and give you a permanent solution plan.",
        ctaBtn: "Emergency Service",
        ctaPhone: "Call (407) 715-1790",
        urgencyLabel: "Urgency:",
        activeHours: "Active Hours",
        soundLabel: "Sound",
        entrySize: "Min. Entry Size",
        damageType: "Damage Type",
        animals: [
            {
                name: "Squirrels", emoji: "🐿", timing: "Daytime (6am–6pm)", sound: "Fast, light scratching and scurrying",
                entrySize: "1–2 inches — any gap at a corner joint",
                damage: "Chew through electrical wiring (fire hazard), insulation destruction, nest building with leaves and debris",
                urgency: "High",
                info: "Gray squirrels are the most common Orlando soffit intruder. They're active during daylight hours — if you hear fast light scratching during the day, squirrels are the likely culprit. A single pair can establish a nest and produce two litters per year inside your attic.",
            },
            {
                name: "Raccoons", emoji: "🦝", timing: "Night (10pm–4am)", sound: "Heavy thumping and rolling sounds",
                entrySize: "4+ inches — will enlarge existing gaps",
                damage: "Massive insulation destruction, fecal contamination (raccoon roundworm), structural damage to roof decking",
                urgency: "Emergency",
                info: "Raccoons are the most destructive soffit intruder. A single raccoon can tear open a gap that doesn't exist if they smell prior animal activity. They'll destroy insulation to nest and their feces contain raccoon roundworm (Baylisascaris procyonis) — a serious health hazard that requires professional cleanup.",
            },
            {
                name: "Roof Rats", emoji: "🐀", timing: "Night (12am–5am)", sound: "Light scurrying, gnawing sounds",
                entrySize: "½ inch — can squeeze through incredibly small gaps",
                damage: "Electrical wire chewing (primary cause of attic fires), contamination of insulation with urine, disease transmission",
                urgency: "Emergency",
                info: "Roof rats (Rattus rattus) are the number one pest in Central Florida attics. They can enter through any gap larger than a quarter. They chew through electrical wiring — which causes approximately 25% of house fires classified as 'unknown cause.' If you hear light scurrying at night, call immediately.",
            },
            {
                name: "Bats", emoji: "🦇", timing: "Dusk and dawn", sound: "High-pitched chittering, audible at roofline",
                entrySize: "⅜ inch — the smallest gap of any animal",
                damage: "Guano accumulation (health hazard, acidic), ammonia odor that permeates walls",
                urgency: "High — legal restrictions apply",
                info: "Florida has strict bat protection laws. During maternity season (April 15 – August 15), you cannot exclude bats from your home — Florida Fish & Wildlife enforcement is active. Outside maternity season, professional exclusion is required before soffit repair. Do not attempt to seal bats in — they will die in your attic.",
            },
            {
                name: "Wasps & Bees", emoji: "🐝", timing: "Daytime (warm months)", sound: "Buzzing near the roofline",
                entrySize: "¼ inch — any small gap",
                damage: "Large nests in attic (yellow jackets build paper nests, honey bees build wax combs — honey can liquefy and damage walls)",
                urgency: "Medium",
                info: "Buzzing near your soffit in Florida's warm months almost always means a nest is being built inside. Yellow jackets and paper wasps are common. Honey bees are protected and require a licensed beekeeper for removal. After insect removal, the soffit gap must be sealed — empty nests attract new colonies within weeks.",
            },
        ],
    },
    es: {
        breadcrumb: "Blog",
        category: "Plagas y Daños",
        readTime: "7 min de lectura · 10 de febrero de 2026",
        authorLine: <>Por <span className="font-semibold text-gray-700">Eddy</span> · Especialista en Soffit y Fascia · <time dateTime="2026-02-10">10 de febrero de 2026</time></>,
        h1a: "¿Qué Animales Entran por el\nSoffit Dañado en Orlando?",
        h1b: "(Y Cómo Detenerlos)",
        intro: "La fauna del Centro de Florida está activa todo el año. Una brecha de 2.5 cm en el soffit es suficiente para que una colonia permanente se instale. Aquí está lo que hace cada especie y la única solución que dura.",
        alertTitle: "Si Escucha Sonidos Ahora Mismo",
        alertBody: <>La intrusión animal se clasifica como emergencia porque los puntos de entrada crecen con el tiempo y el daño eléctrico puede ocurrir en días. No espere: llame <a href="tel:4077151790" className="font-bold underline">(407) 715-1790</a> para evaluación el mismo día.</>,
        fixTitle: "La Única Solución Permanente",
        fixP1: "Los parches temporales y la espuma de sellado no funcionan a largo plazo. La fauna silvestre, especialmente ardillas y mapaches, roerá a través de la espuma, trabajará alrededor de los parches delgados y encontrará puntos débiles adyacentes. La malla de rat sola no aguantará si el panel de soffit subyacente está deteriorado.",
        fixP2: <><strong>La solución permanente es la remoción y reemplazo completo del soffit con paneles de aluminio,</strong> instalados correctamente sin brechas en el borde de la fascia, el canal J, las transiciones de esquinas y las interfaces de paneles ventilados/sólidos. Esto elimina cada punto de entrada potencial a lo largo de todo el alero.</>,
        fixP3: "La exclusión de fauna (eliminar los animales existentes) debe ocurrir antes de sellar el soffit. Si un animal queda atrapado adentro, causará daños significativamente mayores tratando de salir, y morirá en su ático si no puede.",
        processTitle: "Nuestro Proceso para Trabajos de Intrusión Animal",
        processSteps: [
            "Inspección para identificar todos los puntos de entrada y especies",
            "Coordinación con empresa de control de fauna si es necesario (murciélagos, mapaches)",
            "Remoción y reemplazo completo del soffit: aluminio, sin brechas",
            "Garantía escrita sobre la instalación",
        ],
        faqTitle: "Preguntas Frecuentes",
        faqs: [
            {
                q: "¿Qué animales entran por el soffit en Florida?",
                a: "Los más comunes son: ardillas (de día, rasguños ligeros), mapaches (de noche, golpes fuertes), ratas de techo (scurrying nocturno), murciélagos (al amanecer y al anochecer) y avispas o abejas (zumbido de día cerca del alero). Cada especie tiene patrones de comportamiento y tiempos diferentes.",
            },
            {
                q: "¿Cómo sé si algo vive en mi soffit?",
                a: "Señales: sonidos de rasguños o scurrying (especialmente al amanecer, al anochecer o de noche); excrementos cerca de las paredes exteriores; manchas o daños visibles alrededor del soffit; olor persistente parecido al amoníaco desde el ático; animales visibles en el alero al anochecer. Si cualquiera de estos aplica, llame inmediatamente.",
            },
            {
                q: "¿Cuál es la solución permanente para animales que entran por el soffit?",
                a: "Reemplazo completo del soffit con paneles de aluminio, instalados correctamente sin brechas. La exclusión de fauna (eliminar animales existentes) debe ocurrir primero. Los parches, la espuma y la malla solos no son permanentes: los animales regresan o encuentran puntos débiles adyacentes. Solo un reemplazo completo elimina todos los puntos de entrada.",
            },
        ],
        ctaTitle: "¿Escucha Sonidos en su Ático?",
        ctaBody: "Evaluación el mismo día. Identificaremos la especie y le daremos un plan de solución permanente.",
        ctaBtn: "Servicio de Emergencia",
        ctaPhone: "Llamar (407) 715-1790",
        urgencyLabel: "Urgencia:",
        activeHours: "Horas Activas",
        soundLabel: "Sonido",
        entrySize: "Tamaño Mín. de Entrada",
        damageType: "Tipo de Daño",
        animals: [
            {
                name: "Ardillas", emoji: "🐿", timing: "Diurno (6am–6pm)", sound: "Rasguños rápidos y ligeros",
                entrySize: "2–5 cm, cualquier brecha en una junta de esquina",
                damage: "Roen cables eléctricos (riesgo de incendio), destrucción de aislamiento, nidos con hojas y escombros",
                urgency: "Alta",
                info: "Las ardillas grises son el intruso de soffit más común en Orlando. Están activas durante las horas de luz del día. Si escucha rasguños rápidos y ligeros durante el día, las ardillas son el culpable probable. Una sola pareja puede establecer un nido y producir dos camadas por año dentro de su ático.",
            },
            {
                name: "Mapaches", emoji: "🦝", timing: "Nocturno (10pm–4am)", sound: "Golpes pesados y sonidos rodantes",
                entrySize: "10+ cm, agrandarán las brechas existentes",
                damage: "Destrucción masiva de aislamiento, contaminación fecal (lombriz de mapache), daño estructural al techo",
                urgency: "Emergencia",
                info: "Los mapaches son el intruso de soffit más destructivo. Un solo mapache puede abrir una brecha que no existe si huelen actividad animal previa. Destruirán el aislamiento para anidar y sus heces contienen la lombriz de mapache (Baylisascaris procyonis), un peligro grave para la salud que requiere limpieza profesional.",
            },
            {
                name: "Ratas de Techo", emoji: "🐀", timing: "Nocturno (12am–5am)", sound: "Scurrying ligero, sonidos de roer",
                entrySize: "1.2 cm, pueden pasar por brechas increíblemente pequeñas",
                damage: "Roen cables eléctricos (causa principal de incendios en ático), contaminación del aislamiento con orina, transmisión de enfermedades",
                urgency: "Emergencia",
                info: "Las ratas de techo (Rattus rattus) son la plaga número uno en los áticos del Centro de Florida. Pueden entrar por cualquier brecha mayor que una moneda. Roen los cables eléctricos, lo que causa aproximadamente el 25% de los incendios de casas clasificados como 'causa desconocida.' Si escucha scurrying ligero por la noche, llame inmediatamente.",
            },
            {
                name: "Murciélagos", emoji: "🦇", timing: "Al amanecer y al anochecer", sound: "Chillidos agudos, audibles en el alero",
                entrySize: "1 cm, la brecha más pequeña de cualquier animal",
                damage: "Acumulación de guano (peligro para la salud, ácido), olor a amoníaco que impregna las paredes",
                urgency: "Alta, restricciones legales aplican",
                info: "Florida tiene leyes estrictas de protección de murciélagos. Durante la temporada de maternidad (15 de abril – 15 de agosto), no puede excluir murciélagos de su hogar. Fuera de la temporada de maternidad, se requiere exclusión profesional antes de reparar el soffit. No intente sellar murciélagos adentro: morirán en su ático.",
            },
            {
                name: "Avispas y Abejas", emoji: "🐝", timing: "Diurno (meses cálidos)", sound: "Zumbido cerca del alero",
                entrySize: "6 mm, cualquier brecha pequeña",
                damage: "Nidos grandes en el ático (avispas construyen nidos de papel, abejas construyen panales de cera; la miel puede licuarse y dañar las paredes)",
                urgency: "Media",
                info: "El zumbido cerca de su soffit en los meses cálidos de Florida casi siempre significa que se está construyendo un nido adentro. Las avispas amarillas y las avispas de papel son comunes. Las abejas melíferas están protegidas y requieren un apicultor con licencia para su remoción. Después de la remoción de insectos, la brecha del soffit debe sellarse: los nidos vacíos atraen nuevas colonias en semanas.",
            },
        ],
    },
    pt: {
        breadcrumb: "Blog",
        category: "Pragas e Danos",
        readTime: "7 min de leitura · 10 de fevereiro de 2026",
        authorLine: <>Por <span className="font-semibold text-gray-700">Eddy</span> · Especialista em Soffit e Fascia · <time dateTime="2026-02-10">10 de fevereiro de 2026</time></>,
        h1a: "Quais Animais Entram pelo\nSoffit Danificado em Orlando?",
        h1b: "(E Como Parar)",
        intro: "A fauna do Centro da Flórida está ativa o ano todo. Uma brecha de 2,5 cm no soffit é suficiente para que uma colônia permanente se instale. Veja o que cada espécie faz e a única solução que dura.",
        alertTitle: "Se Você Está Ouvindo Sons Agora",
        alertBody: <>A intrusão animal é classificada como emergência porque os pontos de entrada crescem com o tempo e o dano elétrico pode ocorrer em dias. Não espere: ligue <a href="tel:4077151790" className="font-bold underline">(407) 715-1790</a> para avaliação no mesmo dia.</>,
        fixTitle: "A Única Solução Permanente",
        fixP1: "Remendos temporários e espuma selante não funcionam a longo prazo. A fauna, especialmente esquilos e guaxinins, vai roer a espuma, contornar os remendos finos e encontrar pontos fracos adjacentes. A tela anti-rato sozinha não vai segurar se o painel de soffit subjacente estiver deteriorado.",
        fixP2: <><strong>A solução permanente é a remoção e substituição completa do soffit com painéis de alumínio,</strong> instalados corretamente sem frestas na borda da fascia, canal J, transições de canto e interfaces de painéis ventilados/sólidos. Isso elimina todos os pontos de entrada potenciais ao longo de todo o beiral.</>,
        fixP3: "A exclusão da fauna (remover os animais existentes) deve ocorrer antes de vedar o soffit. Se um animal ficar preso dentro, causará danos significativamente maiores tentando sair, e morrerá no seu sótão se não conseguir.",
        processTitle: "Nosso Processo para Trabalhos de Intrusão Animal",
        processSteps: [
            "Inspeção para identificar todos os pontos de entrada e espécies",
            "Coordenação com empresa de controle de fauna se necessário (morcegos, guaxinins)",
            "Remoção e substituição completa do soffit: alumínio, sem frestas",
            "Garantia escrita na instalação",
        ],
        faqTitle: "Perguntas Frequentes",
        faqs: [
            {
                q: "Quais animais entram pelo soffit na Flórida?",
                a: "Os mais comuns são: esquilos (de dia, arranhões leves), guaxinins (de noite, batidas pesadas), ratos de telhado (corridas noturnas), morcegos (ao amanhecer e anoitecer) e vespas ou abelhas (zumbido de dia perto do beiral). Cada espécie tem padrões de comportamento e horários diferentes.",
            },
            {
                q: "Como sei se algo está morando no meu soffit?",
                a: "Sinais: sons de arranhão ou corridas (especialmente ao amanhecer, anoitecer ou à noite); fezes perto das paredes externas; manchas ou danos visíveis ao redor do soffit; cheiro persistente de amônia vindo do sótão; animais visíveis no beiral ao anoitecer. Se qualquer um desses se aplicar, ligue imediatamente.",
            },
            {
                q: "Qual é a solução permanente para animais entrando pelo soffit?",
                a: "Substituição completa do soffit com painéis de alumínio, instalados corretamente sem frestas. A exclusão da fauna (remover animais existentes) deve ocorrer primeiro. Remendos, espuma e tela sozinhos não são permanentes: os animais voltam ou encontram pontos fracos adjacentes. Só a substituição completa elimina todos os pontos de entrada.",
            },
        ],
        ctaTitle: "Está Ouvindo Sons no Sótão?",
        ctaBody: "Avaliação no mesmo dia. Identificamos a espécie e apresentamos um plano de solução permanente.",
        ctaBtn: "Serviço de Emergência",
        ctaPhone: "Ligar (407) 715-1790",
        urgencyLabel: "Urgência:",
        activeHours: "Horário Ativo",
        soundLabel: "Som",
        entrySize: "Tamanho Mín. de Entrada",
        damageType: "Tipo de Dano",
        animals: [
            {
                name: "Esquilos", emoji: "🐿", timing: "Diurno (6h–18h)", sound: "Arranhões rápidos e leves",
                entrySize: "2–5 cm, qualquer fresta em junção de canto",
                damage: "Roem fios elétricos (risco de incêndio), destroem isolamento, constroem ninhos com folhas e entulho",
                urgency: "Alta",
                info: "Os esquilos cinza são os intrusos de soffit mais comuns em Orlando. São ativos durante as horas de luz do dia. Se você ouve arranhões rápidos e leves durante o dia, os esquilos são o provável culpado. Um único casal pode estabelecer um ninho e ter duas ninhadas por ano dentro do seu sótão.",
            },
            {
                name: "Guaxinins", emoji: "🦝", timing: "Noturno (22h–4h)", sound: "Batidas pesadas e sons de rolamento",
                entrySize: "10+ cm, vão ampliar as frestas existentes",
                damage: "Destruição maciça de isolamento, contaminação fecal (lombriga de guaxinim), dano estrutural ao telhado",
                urgency: "Emergência",
                info: "Os guaxinins são os intrusos de soffit mais destrutivos. Um único guaxinim pode abrir uma fresta que não existe se sentir atividade animal anterior. Destroem o isolamento para fazer ninhos e suas fezes contêm a lombriga de guaxinim (Baylisascaris procyonis), um sério risco à saúde que exige limpeza profissional.",
            },
            {
                name: "Ratos de Telhado", emoji: "🐀", timing: "Noturno (0h–5h)", sound: "Corridas leves, sons de roer",
                entrySize: "1,2 cm, conseguem passar por frestas incrivelmente pequenas",
                damage: "Roem fios elétricos (principal causa de incêndios no sótão), contaminação do isolamento com urina, transmissão de doenças",
                urgency: "Emergência",
                info: "Os ratos de telhado (Rattus rattus) são a praga número um nos sótãos do Centro da Flórida. Podem entrar por qualquer fresta maior que uma moeda. Roem os fios elétricos, o que causa aproximadamente 25% dos incêndios domésticos classificados como 'causa desconhecida.' Se você ouve corridas leves à noite, ligue imediatamente.",
            },
            {
                name: "Morcegos", emoji: "🦇", timing: "Ao amanhecer e anoitecer", sound: "Chiados agudos, audíveis no beiral",
                entrySize: "1 cm, a menor fresta de qualquer animal",
                damage: "Acúmulo de guano (risco à saúde, ácido), cheiro de amônia que permeia as paredes",
                urgency: "Alta, restrições legais aplicam-se",
                info: "A Flórida tem leis rígidas de proteção de morcegos. Durante a temporada de maternidade (15 de abril – 15 de agosto), você não pode excluir morcegos da sua casa. Fora da temporada de maternidade, a exclusão profissional é necessária antes do reparo do soffit. Não tente vedar morcegos dentro: eles morrerão no seu sótão.",
            },
            {
                name: "Vespas e Abelhas", emoji: "🐝", timing: "Diurno (meses quentes)", sound: "Zumbido perto do beiral",
                entrySize: "6 mm, qualquer fresta pequena",
                damage: "Ninhos grandes no sótão (vespas constroem ninhos de papel, abelhas constroem favos de cera; o mel pode liquefazer e danificar paredes)",
                urgency: "Média",
                info: "O zumbido perto do seu soffit nos meses quentes da Flórida quase sempre significa que um ninho está sendo construído dentro. As vespas-amarelas e as vespas de papel são comuns. As abelhas melíferas são protegidas e requerem um apicultor licenciado para remoção. Após a remoção dos insetos, a fresta do soffit deve ser vedada: ninhos vazios atraem novas colônias em semanas.",
            },
        ],
    },
};

const animalColors = [
    { color: "text-orange-700", bg: "bg-orange-50", border: "border-orange-200", urgencyColor: "text-orange-700" },
    { color: "text-gray-700", bg: "bg-gray-50", border: "border-gray-200", urgencyColor: "text-red-700" },
    { color: "text-red-700", bg: "bg-red-50", border: "border-red-200", urgencyColor: "text-red-700" },
    { color: "text-purple-700", bg: "bg-purple-50", border: "border-purple-200", urgencyColor: "text-purple-700" },
    { color: "text-yellow-700", bg: "bg-yellow-50", border: "border-yellow-200", urgencyColor: "text-yellow-700" },
];

export default async function AnimalsInSoffitOrlandoPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const c = content[locale as keyof typeof content] ?? content.en;
    const blogHref = locale === "en" ? "/blog" : `/${locale}/blog`;
    const contactHref = locale === "en" ? "/contact/emergency" : `/${locale}/contact/emergency`;

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildSchema(locale)) }} />
            <div className="flex flex-col min-h-screen">

                {/* ── HERO ──────────────────────────────────────────────── */}
                <section className="py-24 bg-gradient-to-br from-slate-900 to-orange-950 text-white">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <AnimatedSection>
                            <div className="flex flex-wrap gap-3 items-center mb-6">
                                <Link href={blogHref} className="text-orange-300 hover:text-white text-sm transition">← {c.breadcrumb}</Link>
                                <span className="text-orange-500">/</span>
                                <span className="text-xs font-bold bg-orange-500/20 border border-orange-400/30 text-orange-200 px-3 py-1 rounded-full uppercase tracking-widest">{c.category}</span>
                                <span className="text-xs text-blue-400">{c.readTime}</span>
                            </div>
                            <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
                                {c.h1a.split("\n").map((line, i) => <span key={i}>{line}{i < c.h1a.split("\n").length - 1 && <br />}</span>)}<br />
                                <span className="bg-gradient-to-r from-orange-300 to-yellow-300 bg-clip-text text-transparent">{c.h1b}</span>
                            </h1>
                            <p className="text-sm text-gray-400 mt-2 mb-4">{c.authorLine}</p>
                            <p className="text-xl text-orange-100 max-w-3xl leading-relaxed">{c.intro}</p>
                        </AnimatedSection>
                    </div>
                </section>

                {/* ── WARNING ────────────────────────────────────────────── */}
                <section className="py-12 bg-white">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <AnimatedSection>
                            <div className="bg-red-50 border border-red-200 rounded-2xl p-6 flex gap-4">
                                <AlertTriangle className="w-6 h-6 text-red-600 shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-bold text-red-900 mb-2">{c.alertTitle}</p>
                                    <p className="text-red-800 text-sm leading-relaxed">{c.alertBody}</p>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* ── ANIMALS ────────────────────────────────────────────── */}
                <section className="py-8 pb-16 bg-white">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <div className="space-y-8">
                            {c.animals.map((animal, i) => (
                                <AnimatedSection key={animal.name} delay={i * 60} from="bottom">
                                    <div className={`rounded-2xl border ${animalColors[i].border} ${animalColors[i].bg} p-7`}>
                                        <div className="flex items-start justify-between gap-4 flex-wrap mb-5">
                                            <div className="flex items-center gap-3">
                                                <span className="text-4xl" role="img" aria-label={animal.name}>{animal.emoji}</span>
                                                <h2 className={`text-xl font-extrabold ${animalColors[i].color}`}>{animal.name}</h2>
                                            </div>
                                            <span className={`text-xs font-bold px-3 py-1 rounded-full bg-white border ${animalColors[i].border} ${animalColors[i].urgencyColor}`}>
                                                {c.urgencyLabel} {animal.urgency}
                                            </span>
                                        </div>
                                        <div className="grid sm:grid-cols-2 gap-4 mb-5">
                                            {[
                                                { label: c.activeHours, value: animal.timing },
                                                { label: c.soundLabel, value: animal.sound },
                                                { label: c.entrySize, value: animal.entrySize },
                                            ].map(row => (
                                                <div key={row.label} className="flex flex-col gap-1">
                                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">{row.label}</span>
                                                    <span className="text-sm font-semibold text-gray-800">{row.value}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="bg-white/60 rounded-xl p-4 mb-4">
                                            <span className="text-xs font-bold text-gray-400 uppercase tracking-wide block mb-1">{c.damageType}</span>
                                            <span className="text-sm text-gray-700">{animal.damage}</span>
                                        </div>
                                        <p className="text-gray-700 text-sm leading-relaxed">{animal.info}</p>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── THE FIX ────────────────────────────────────────────── */}
                <section className="py-16 bg-slate-50 border-y border-gray-100">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <AnimatedSection>
                            <h2 className="text-2xl font-extrabold text-gray-900 mb-6">{c.fixTitle}</h2>
                            <div className="space-y-5 text-gray-700 leading-relaxed">
                                <p className="text-lg">{c.fixP1}</p>
                                <p>{c.fixP2}</p>
                                <p>{c.fixP3}</p>
                                <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                                    <p className="text-sm font-bold text-blue-900 mb-1">{c.processTitle}</p>
                                    <ol className="text-sm text-blue-800 space-y-2 ml-4 list-decimal">
                                        {c.processSteps.map((step, i) => <li key={i}>{step}</li>)}
                                    </ol>
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
                <RelatedServices serviceKeys={["repairs", "remove-replace", "calculator"]} locale={locale} />

                {/* ── CTA ───────────────────────────────────────────────── */}
                <section className="py-20 bg-gradient-to-br from-slate-900 to-red-950 text-white text-center">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <AnimatedSection>
                            <h2 className="text-3xl font-extrabold mb-4">{c.ctaTitle}</h2>
                            <p className="text-gray-300 text-lg mb-8">{c.ctaBody}</p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href={contactHref} className="inline-flex items-center justify-center gap-2 bg-red-500 text-white px-8 py-4 rounded-full font-bold hover:bg-red-600 transition shadow-xl">
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
