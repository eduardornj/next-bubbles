import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, AlertTriangle, DollarSign, Shield, Phone, TrendingUp, Home, Bug, Droplets, Banknote, ShoppingCart, Wrench } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { RelatedServices } from "@/components/ui/RelatedServices";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const slug = "tax-refund-soffit-investment";
    const url = locale === "en" ? `https://bubblesenterprise.com/blog/${slug}` : `https://bubblesenterprise.com/${locale}/blog/${slug}`;

    const titles: Record<string, string> = {
        en: "Use Your Tax Refund to Protect Your Home — Soffit & Fascia Is the Smartest Investment",
        es: "Use Su Reembolso de Impuestos para Proteger Su Casa: Soffit y Fascia Es la Inversión Más Inteligente",
        pt: "Use Sua Restituição de Imposto para Proteger Sua Casa: Soffit e Fascia E o Investimento Mais Inteligente",
    };
    const descriptions: Record<string, string> = {
        en: "Got your tax refund? See why soffit and fascia repair is the smartest home investment — prevent $5,000+ in damage, boost curb appeal, and protect your Orlando home before hurricane season.",
        es: "¿Recibió su reembolso de impuestos? Vea por qué reparar soffit y fascia es la inversión más inteligente: evite más de $5,000 en daños, mejore la apariencia de su casa y protéjala antes de la temporada de huracanes.",
        pt: "Recebeu sua restituição de imposto? Veja por que reparar soffit e fascia e o investimento mais inteligente: evite mais de $5.000 em danos, melhore a aparencia da sua casa e proteja-a antes da temporada de furacoes.",
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
    const blogUrl = locale === "en" ? `https://bubblesenterprise.com/blog/tax-refund-soffit-investment` : `https://bubblesenterprise.com/${locale}/blog/tax-refund-soffit-investment`;
    return {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "@id": "https://bubblesenterprise.com/blog/tax-refund-soffit-investment#article",
                headline: "Use Your Tax Refund to Protect Your Home — Why Soffit & Fascia Is the Smartest Investment",
                description: "Why soffit and fascia repair is the smartest way to spend your tax refund — prevent costly damage, boost home value, and prepare for hurricane season.",
                url: blogUrl,
                datePublished: "2026-03-10",
                dateModified: "2026-03-10",
                author: { "@type": "Person", name: "Bubbles Enterprise Team", jobTitle: "Licensed Soffit & Fascia Contractors", url: "https://bubblesenterprise.com/about", worksFor: { "@id": "https://bubblesenterprise.com/#business" } },
                publisher: { "@id": "https://bubblesenterprise.com/#business" },
                articleSection: "Home Investment",
                keywords: "tax refund home improvement, soffit repair investment, home value soffit, orlando home improvement, hurricane preparation soffit",
                inLanguage: locale,
            },
            {
                "@type": "FAQPage",
                "@id": "https://bubblesenterprise.com/blog/tax-refund-soffit-investment#faq",
                inLanguage: locale,
                mainEntity: [
                    {
                        "@type": "Question",
                        name: "Is soffit and fascia repair a good investment?",
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: "Yes. Damaged soffit exposes your attic to water, pests, and mold — problems that cost $5,000 to $15,000 to fix. Repairing or replacing soffit costs $800 to $2,500 on average, making it one of the highest-ROI home improvements you can make.",
                        },
                    },
                    {
                        "@type": "Question",
                        name: "Does new soffit increase home value?",
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: "New soffit and fascia improve curb appeal and help pass home inspections. Homes with well-maintained exterior trim sell faster and for higher prices. Buyers and inspectors specifically check for soffit damage, pest entry, and water staining.",
                        },
                    },
                    {
                        "@type": "Question",
                        name: "How much does soffit repair cost in Orlando?",
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: "Most soffit repairs in Orlando cost between $800 and $2,500 depending on the extent of damage and material chosen. A full remove-and-replace on a single-story home typically runs $2,000 to $5,000. Many homeowners use their tax refund to cover the entire cost.",
                        },
                    },
                    {
                        "@type": "Question",
                        name: "Should I fix my soffit before hurricane season?",
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: "Absolutely. Damaged or missing soffit panels are the most common entry point for wind-driven rain during hurricanes. Fixing soffit before June (when hurricane season starts) is the single most cost-effective storm preparation for your roof system.",
                        },
                    },
                ],
            },
        ],
    };
}

const content = {
    // ═══════════════════════════════════════════════════════════════════
    // EN — AMERICAN HOMEOWNER
    // Angle: Smart money, research-backed ROI, proof-driven, practical
    // Tone: Direct, confident, no fluff. Numbers talk.
    // ═══════════════════════════════════════════════════════════════════
    en: {
        breadcrumb: "Blog",
        category: "Home Investment",
        readTime: "7 min read · March 10, 2026",
        authorLine: <>By <span className="font-semibold text-gray-700">Eddy</span> · Licensed Soffit &amp; Fascia Contractor · <time dateTime="2026-03-10">March 10, 2026</time></>,
        h1a: "Your Tax Refund Is Here.",
        h1b: "Make It Count.",
        intro: "The average refund in 2026 is $2,800. That's real money. Most of it goes to things that won't matter by June. This article breaks down one home improvement that costs less than the average refund, prevents five-figure damage, and actually pays you back.",
        taxTitle: "Where Most Refunds Go (and Why It Doesn't Matter by Summer)",
        taxIntro: "According to the IRS, the majority of refunds are spent within 3 weeks. Here's where:",
        taxBad: [
            { icon: ShoppingCart, label: "Electronics and furniture", result: "50% depreciation by December" },
            { icon: ShoppingCart, label: "Travel", result: "Memorable — but $0 return on investment" },
            { icon: ShoppingCart, label: "General spending", result: "Hard to even remember where it went" },
        ],
        taxTransition: "There's nothing wrong with treating yourself. But if you own a home in Central Florida, there's one thing worth checking before you spend that refund — your soffit.",
        taxGood: "Soffit and fascia repair is one of the few home improvements where the math actually works: it costs less than the average refund, it prevents damage that runs 5 to 10 times higher, and it's something every home inspector checks.",
        whySoffitTitle: "What Soffit and Fascia Actually Do",
        whySoffitIntro: "Quick breakdown for anyone who's never thought about this (most homeowners haven't):",
        whySoffitPoints: [
            "Soffit = the panels under your roof overhang. They seal and ventilate your attic.",
            "Fascia = the vertical board at the roofline edge. It holds your gutters and protects the roof edge.",
            "Together, they keep water out, keep pests out, and keep your AC from fighting a losing battle against Florida heat.",
        ],
        whySoffitKicker: "Most homeowners don't think about soffit until something goes wrong. Here's what \"wrong\" looks like in Central Florida.",
        problemTitle: "The Cost of Ignoring It",
        problemIntro: "Every home inspector we've spoken to agrees: soffit damage is the most common surprise in Florida home inspections. Here's why:",
        problems: [
            { icon: Bug, title: "Pest Entry", desc: "One gap is all it takes. Rats, squirrels, wasps — once they're in your attic, they damage wiring, insulation, and drywall. Average pest remediation: $1,200–$3,500." },
            { icon: Droplets, title: "Water Intrusion", desc: "Rain enters through damaged panels and soaks your attic insulation. Mold follows within weeks. Average mold remediation in Orlando: $3,000–$8,000." },
            { icon: AlertTriangle, title: "Structural Rot", desc: "Once fascia boards absorb moisture, they weaken. Gutters sag, the roof edge softens. Full roofline repair: $5,000–$15,000." },
            { icon: TrendingUp, title: "Energy Waste", desc: "Damaged soffit vents mean your attic traps heat. Your AC runs harder. Florida homeowners report 10–20% higher bills with poor attic ventilation." },
        ],
        numbersTitle: "The Numbers: Fix Now vs. Fix Later",
        numbersIntro: "Real cost data from Central Florida soffit projects:",
        numbersRows: [
            { scenario: "Repair now (avg. refund covers it)", cost: "$800 – $2,500", timeline: "1–2 days", note: "Problem resolved. Home protected." },
            { scenario: "Wait 6 months", cost: "$2,000 – $5,000", timeline: "3–5 days", note: "Water damage likely. Insulation replacement needed." },
            { scenario: "Wait 12+ months", cost: "$5,000 – $15,000", timeline: "1–2 weeks", note: "Mold remediation + structural + soffit replacement." },
        ],
        numbersVerdict: "A $2,800 refund covers most soffit repairs entirely. That same repair prevents $5,000–$12,000 in cascading damage. Run the numbers yourself — it's hard to find a better return.",
        roiTitle: "What You Actually Get for the Money",
        roiItems: [
            { title: "Clean Home Inspection", desc: "Inspectors check soffit on every report. Damage means flags, renegotiation, or lost buyers. New soffit means a clean exterior report." },
            { title: "Curb Appeal That Lasts", desc: "New aluminum soffit is the most visible exterior upgrade after paint. It lasts 20–30 years and transforms the roofline instantly." },
            { title: "Insurance Protection", desc: "Some Florida insurers flag visible exterior damage during renewal. Clean soffit reduces the chance of a premium increase or non-renewal letter." },
            { title: "Lower Monthly Bills", desc: "Proper soffit ventilation reduces attic heat buildup. That means less AC strain and 10–20% off your monthly electric bill." },
            { title: "Hurricane Season Prep", desc: "June 1 is coming. Damaged soffit panels are the #1 entry point for wind-driven rain during storms. Fix it while you have time — not during the May rush." },
        ],
        timingTitle: "Why March–April Is the Window",
        timingReasons: [
            "Refunds are hitting accounts now — the money is available",
            "Hurricane season starts June 1 — demand spikes in May",
            "Spring weather means no daily rain delays",
            "Contractor schedules are 30–40% more open than in May–June",
            "Florida humidity compounds damage fast — every week matters",
        ],
        faqTitle: "Questions We Get Asked",
        faqs: [
            { q: "Is soffit repair worth my tax refund?", a: "Look at the numbers: $800–$2,500 now vs. $5,000–$15,000 later. It also boosts curb appeal and clears inspection reports. Few home improvements return 5–10x the cost." },
            { q: "How do I know if my soffit needs work?", a: "Walk your roofline and look up. Sagging panels, visible gaps, staining, peeling paint, or animal activity are all signs. We do free on-site inspections if you want a professional assessment." },
            { q: "What does soffit repair cost in Orlando?", a: "Most repairs: $800–$2,500. Full remove-and-replace on a single-story: $2,000–$5,000. Material choice (aluminum vs. vinyl) affects the final number. Our cost calculator gives you a ballpark in 2 minutes." },
            { q: "Should I wait until May to schedule?", a: "No. May is when everyone calls. Schedules fill up, prices go up, and weather gets less predictable. March–April gives you the best availability and pricing." },
        ],
        ctaTitle: "See Where Your Refund Goes the Furthest",
        ctaBody: "Free on-site inspection. Written estimate before any work starts. No pressure — just the numbers so you can decide.",
        ctaBtn: "Get Your Free Estimate",
        ctaPhone: "Call (407) 715-1790",
        ctaWhatsapp: "WhatsApp Us",
        ctaNote: "Most projects: 1–2 days. Financing from $19/month. Licensed & insured.",
    },
    // ═══════════════════════════════════════════════════════════════════
    // ES — HISPANICO/LATINO
    // Angle: Proteger lo que usted construyo. La casa donde la familia se reune.
    // Tone: Formal (usted), caloroso, respeitoso. Sem pressao. Confianca.
    // ═══════════════════════════════════════════════════════════════════
    es: {
        breadcrumb: "Blog",
        category: "Inversión en Su Hogar",
        readTime: "7 min de lectura · 10 de marzo de 2026",
        authorLine: <>Por <span className="font-semibold text-gray-700">Eddy</span> · Especialista en Soffit y Fascia · <time dateTime="2026-03-10">10 de marzo de 2026</time></>,
        h1a: "Su Reembolso de Impuestos Llegó.",
        h1b: "¿Qué Hace Con Él?",
        intro: "Usted trabajó duro todo el año. Ese dinero que llega del IRS no es un regalo — es algo que se ganó. La pregunta es: ¿lo gasta en algo que se olvida en un mes, o lo invierte en algo que protege su casa y su familia por los próximos 20 años?",
        taxTitle: "La Verdad Sobre el Reembolso",
        taxIntro: "El reembolso promedio este año es de aproximadamente $2,800. Es una cantidad importante. Pero seamos honestos, la mayoría de las veces ese dinero se va rápido:",
        taxBad: [
            { icon: ShoppingCart, label: "Algo para la casa que no era urgente", result: "Bonito, pero no protege nada" },
            { icon: ShoppingCart, label: "Un viaje o una salida grande", result: "Se disfruta unos días y ya" },
            { icon: ShoppingCart, label: "Ropa, electrónica, gastos del día a día", result: "Para abril ya no sabe dónde quedó" },
        ],
        taxTransition: "No hay nada malo en disfrutar su dinero. Usted se lo ganó. Pero antes de gastarlo, hay algo que vale la pena revisar: el estado del soffit de su casa.",
        taxGood: "El soffit y la fascia son la primera línea de defensa de su techo. Cuando están en buen estado, usted ni lo nota. Cuando fallan, los problemas llegan rápido y cuestan mucho más de lo que costó repararlos a tiempo.",
        whySoffitTitle: "¿Qué Es Soffit y Fascia, y Por Qué Importa?",
        whySoffitIntro: "Muchas personas no conocen estas partes de su casa hasta que algo sale mal. Aquí le explico en palabras claras:",
        whySoffitPoints: [
            "El soffit es el panel que cubre la parte inferior del alero del techo. Sella y ventila su ático.",
            "La fascia es la tabla vertical donde se montan las canaletas. Protege el borde del techo.",
            "Juntos, mantienen el agua afuera, los animales afuera, y el aire acondicionado funcionando como debe.",
        ],
        whySoffitKicker: "En Florida, un soffit dañado no es un problema estético. Es una puerta abierta para lluvia, plagas y humedad que destruyen por dentro sin aviso.",
        problemTitle: "Cuando el Soffit Falla, Todo Lo Demás Sufre",
        problemIntro: "Estas son las situaciones que vemos todas las semanas en casas de Orlando y Kissimmee:",
        problems: [
            { icon: Bug, title: "Animales en el Ático", desc: "Ratas, ardillas y avispas entran por cualquier hueco en el soffit. Una vez adentro, dañan el cableado eléctrico, destruyen el aislamiento y crean un problema de salud para su familia." },
            { icon: Droplets, title: "Humedad y Moho", desc: "La lluvia de Florida encuentra cada abertura. El agua empapa el aislamiento, y en pocas semanas aparece el moho. Lo que era un reparo de $800 se convierte en una remediación de $5,000 o más." },
            { icon: AlertTriangle, title: "Daño Estructural", desc: "Cuando la fascia absorbe humedad, se debilita. Las canaletas pierden soporte, el borde del techo cede. Reconstruir toda esa área cuesta entre $5,000 y $15,000." },
            { icon: TrendingUp, title: "Cuenta de Luz Más Alta", desc: "Sin ventilación adecuada en el soffit, el ático acumula calor. El aire acondicionado trabaja de más y usted paga 10 a 20% extra en electricidad cada mes." },
        ],
        numbersTitle: "Los Números Reales: Reparar Ahora o Pagar Después",
        numbersIntro: "Estos son los costos que vemos en proyectos reales aquí en Florida Central:",
        numbersRows: [
            { scenario: "Reparar ahora (su reembolso lo cubre)", cost: "$800 – $2,500", timeline: "1–2 días", note: "Problema resuelto. Casa protegida." },
            { scenario: "Esperar 6 meses", cost: "$2,000 – $5,000", timeline: "3–5 días", note: "El agua ya entró. Hay que cambiar aislamiento." },
            { scenario: "Esperar más de 1 año", cost: "$5,000 – $15,000", timeline: "1–2 semanas", note: "Moho, daño estructural y reemplazo completo." },
        ],
        numbersVerdict: "Con $2,800 usted resuelve la mayoría de los problemas de soffit de su casa. Si espera, ese mismo problema puede costarle $5,000 a $12,000. Es su decisión, pero los números son claros.",
        roiTitle: "¿Qué Gana Usted Con Esta Inversión?",
        roiItems: [
            { title: "Casa Lista para Inspección", desc: "Si alguna vez piensa vender, los inspectores revisan el soffit. Daño significa negociación de precio o perder al comprador. Soffit limpio significa informe limpio." },
            { title: "Su Casa Se Ve Diferente", desc: "Un soffit y fascia nuevos de aluminio cambian la apariencia completa de su techo. Es lo primero que se nota desde la calle. Dura 20 a 30 años." },
            { title: "Menos Problemas con el Seguro", desc: "Algunas aseguradoras en Florida señalan casas con daños exteriores visibles. Soffit en buen estado reduce ese riesgo." },
            { title: "Menos en la Cuenta de Luz", desc: "La ventilación correcta del soffit regula la temperatura del ático. Su aire acondicionado descansa, y usted paga menos cada mes." },
            { title: "Protección para los Huracanes", desc: "La temporada comienza el 1 de junio. El soffit es el punto más vulnerable del techo cuando hay viento fuerte con lluvia. Mejor resolverlo ahora que en mayo cuando todos llaman al mismo tiempo." },
        ],
        timingTitle: "Por Qué Este Es el Momento Indicado",
        timingReasons: [
            "Su reembolso está disponible ahora — es dinero que ya tiene",
            "La temporada de huracanes empieza en junio — mejor adelantarse",
            "El clima de primavera es ideal — sin lluvias diarias todavía",
            "Los equipos de trabajo tienen más espacio en su agenda ahora",
            "La humedad de Florida no espera — cada semana el daño avanza",
        ],
        faqTitle: "Preguntas Que Nos Hacen Seguido",
        faqs: [
            { q: "¿Es buena idea usar mi reembolso para reparar soffit?", a: "Es una de las mejores formas de proteger su casa. Un reparo de $800 a $2,500 le evita gastos de $5,000 a $15,000 más adelante. Además mejora cómo se ve la casa y ayuda en inspecciones si alguna vez decide vender." },
            { q: "¿Cómo sé si mi soffit necesita reparo?", a: "Camine alrededor de su casa y mire hacia arriba. Paneles caídos, huecos, manchas, pintura que se pela o animales entrando son señales claras. Le ofrecemos inspección gratuita en su propiedad si quiere una evaluación profesional." },
            { q: "¿Cuánto cuesta el reparo de soffit en Orlando?", a: "La mayoría de los reparos cuestan entre $800 y $2,500. Un reemplazo completo en una casa de un piso va de $2,000 a $5,000. El material que elija (aluminio o vinilo) afecta el precio final. Nuestra calculadora le da un estimado en 2 minutos." },
            { q: "¿Puedo esperar hasta mayo o junio?", a: "Puede, pero no le conviene. En mayo todos llaman, los tiempos de espera aumentan y los precios suben. Ahora hay más disponibilidad y mejores condiciones para el trabajo." },
        ],
        ctaTitle: "Proteja Su Hogar Con Su Reembolso",
        ctaBody: "Inspección gratuita en su propiedad. Presupuesto escrito antes de cualquier trabajo. Sin compromiso — usted decide con toda la información.",
        ctaBtn: "Solicite Su Presupuesto Gratuito",
        ctaPhone: "Llame al (407) 715-1790",
        ctaWhatsapp: "Escríbanos por WhatsApp",
        ctaNote: "Proyectos de 1 a 2 días. Financiamiento desde $19 al mes. Licenciados y asegurados.",
    },
    // ═══════════════════════════════════════════════════════════════════
    // PT — BRASILEIRO IMIGRANTE
    // Angle: A restituição caiu, o vizinho ja resolveu, churrasco vem ai.
    // Tone: Direto, leve, sem frescura. Como conversa entre conhecidos.
    // ═══════════════════════════════════════════════════════════════════
    pt: {
        breadcrumb: "Blog",
        category: "Investimento no Lar",
        readTime: "7 min de leitura · 10 de marco de 2026",
        authorLine: <>Por <span className="font-semibold text-gray-700">Eddy</span> · Especialista em Soffit e Fascia · <time dateTime="2026-03-10">10 de marco de 2026</time></>,
        h1a: "Caiu a Restituição na Conta.",
        h1b: "Vai Fazer o Que Com Ela?",
        intro: "Todo mundo tem opiniao sobre o que fazer com a restituição. TV nova, viagem, pagar umas contas. Tudo valido. Mas se voce tem casa aqui na Florida e nunca olhou pro soffit, talvez esse seja o melhor uso que voce vai dar pra esse dinheiro.",
        taxTitle: "O Que Todo Mundo Faz Com a Restituição (e O Que Acontece Depois)",
        taxIntro: "A restituição media em 2026 e de uns $2.800. Parece muito ate voce ver como some rapido:",
        taxBad: [
            { icon: ShoppingCart, label: "TV nova, videogame, eletronica", result: "Em dezembro ja vale metade" },
            { icon: ShoppingCart, label: "Viagem de fim de semana", result: "Bom demais, mas durou 3 dias" },
            { icon: ShoppingCart, label: "Compras, roupas, restaurante", result: "Em abril voce ja nem lembra onde foi" },
        ],
        taxTransition: "Nada disso e errado. Voce trabalhou o ano inteiro, merece. Mas antes de gastar, faz uma coisa: sai da sua casa, olha pra cima e ve como esta o soffit.",
        taxGood: "Se tiver painel solto, vao aberto, mancha ou bicho entrando, voce tem um problema que custa $800 pra resolver agora e $10.000 se deixar pra depois. E a restituição cobre.",
        whySoffitTitle: "Soffit e Fascia: O Que E Isso e Por Que Voce Deveria Se Importar",
        whySoffitIntro: "Se voce nunca ouviu falar em soffit, normal. A maioria so descobre quando da problema. Em resumo:",
        whySoffitPoints: [
            "Soffit e o painel embaixo do beiral do telhado. Ele fecha o sotao e ventila pra nao virar um forno.",
            "Fascia e a tabua na borda do telhado onde as calhas ficam penduradas.",
            "Os dois juntos impedem que chuva, bicho e umidade entrem na estrutura da sua casa.",
        ],
        whySoffitKicker: "Na Florida, soffit danificado nao e questao de estetica. E questao de tempo ate dar problema serio.",
        problemTitle: "O Que Acontece Quando Voce Deixa Pra Depois",
        problemIntro: "Nos vemos isso toda semana em casas de Orlando, Kissimmee, Winter Park. Sempre a mesma historia:",
        problems: [
            { icon: Bug, title: "Bicho Entra", desc: "Rato, esquilo, morcego, vespa. Entrou por um vao no soffit, fez ninho no sotao, roeu a fiação. Resultado: risco de incendio e conta de pest control de $1.200 a $3.500." },
            { icon: Droplets, title: "Agua Entra", desc: "Chuva de Florida acha qualquer brecha. Entra, encharca o isolamento, e em poucas semanas o mofo aparece. Um reparo de $800 vira uma remediação de mofo de $5.000." },
            { icon: AlertTriangle, title: "Estrutura Apodrece", desc: "A fascia absorve umidade, as calhas perdem apoio, a borda do telhado cede. Reconstruir tudo isso: $5.000 a $15.000." },
            { icon: TrendingUp, title: "Conta de Luz Sobe", desc: "Sem ventilação no soffit, o sotao vira uma sauna. O ar-condicionado trabalha mais e voce paga 10 a 20% a mais na conta de luz todo mes sem saber por que." },
        ],
        numbersTitle: "Faz a Conta: Resolver Agora ou Pagar Caro Depois",
        numbersIntro: "Esses sao os custos reais que nos vemos aqui na Florida Central:",
        numbersRows: [
            { scenario: "Resolver agora (restituição cobre)", cost: "$800 – $2.500", timeline: "1–2 dias", note: "Resolvido. Casa protegida." },
            { scenario: "Deixar pra daqui 6 meses", cost: "$2.000 – $5.000", timeline: "3–5 dias", note: "Agua ja entrou. Isolamento precisa trocar." },
            { scenario: "Deixar pra daqui 1 ano", cost: "$5.000 – $15.000", timeline: "1–2 semanas", note: "Mofo + reparo estrutural + troca total." },
        ],
        numbersVerdict: "Com $2.800 voce resolve a maioria dos problemas de soffit da sua casa. Se esperar, o mesmo problema pode custar $5.000 a $12.000. A conta e simples.",
        roiTitle: "O Que Voce Ganha Fazendo Isso Agora",
        roiItems: [
            { title: "Casa Pronta pra Vender", desc: "Se um dia for vender, o inspetor vai olhar o soffit. Se tiver problema, o comprador usa isso pra negociar o preco pra baixo. Soffit novo resolve isso antes de acontecer." },
            { title: "A Casa Fica Outra", desc: "Soffit e fascia novos de aluminio mudam a cara da casa vista da rua. E a melhoria externa mais visivel depois da pintura. E dura 20 a 30 anos." },
            { title: "Menos Dor de Cabeca com Seguro", desc: "Algumas seguradoras da Florida marcam casas com dano externo visivel. Soffit limpo reduz a chance de aumento de premio ou carta de nao-renovação." },
            { title: "Conta de Luz Mais Baixa", desc: "Soffit ventilado direito regula o calor do sotao. O ar-condicionado descansa e voce paga menos todo mes. Simples assim." },
            { title: "Preparado pro Hurricane", desc: "Temporada comeca 1 de junho. Soffit danificado e o ponto numero 1 por onde a chuva com vento entra no telhado. Melhor resolver agora do que em maio quando todo mundo liga ao mesmo tempo." },
        ],
        timingTitle: "Por Que Resolver em Marco e Abril",
        timingReasons: [
            "A restituição esta na conta agora. O dinheiro ja esta ali",
            "Temporada de furacoes comeca em junho. Em maio todo mundo corre",
            "O tempo da primavera e perfeito. Sem aquela chuva diaria de verao",
            "Nos temos mais agenda aberta agora do que em maio e junho",
            "A umidade da Florida nao espera. Cada semana o dano piora",
        ],
        faqTitle: "Perguntas Que Nos Recebemos",
        faqs: [
            { q: "Vale a pena gastar a restituição com soffit?", a: "Faz a conta: $800 a $2.500 agora vs. $5.000 a $15.000 depois. Alem disso, a casa fica mais bonita e passa tranquilo na inspeção se voce for vender. Dificil achar outro uso pra $2.800 que economiza cinco a dez vezes mais." },
            { q: "Como sei se o soffit da minha casa precisa de reparo?", a: "Sai de casa e olha pra cima. Painel solto, vao aberto, mancha de agua, pintura descascando ou barulho de bicho no teto sao sinais claros. Se quiser certeza, nos fazemos vistoria gratis na sua casa." },
            { q: "Quanto custa reparar soffit em Orlando?", a: "A maioria dos reparos custa entre $800 e $2.500. Troca completa numa casa terrea: $2.000 a $5.000. Depende do material (aluminio ou vinil). Nossa calculadora online da um valor aproximado em 2 minutos." },
            { q: "Posso esperar pra resolver em maio?", a: "Pode, mas nao compensa. Em maio todo mundo liga, a agenda lota, os precos sobem e o tempo fica mais instavel. Agora tem mais vaga e melhores condicoes pra fazer o servico." },
        ],
        ctaTitle: "Resolve Logo Enquanto a Restituição Ta Na Conta",
        ctaBody: "Vistoria gratis na sua casa. Orçamento na hora, sem compromisso. Voce decide com tudo na mao.",
        ctaBtn: "Fala Com a Gente",
        ctaPhone: "Liga (407) 715-1790",
        ctaWhatsapp: "Manda WhatsApp",
        ctaNote: "A maioria dos projetos fica pronto em 1 a 2 dias. Financiamento a partir de $19 por mes.",
    },
};

export default async function TaxRefundSoffitPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const c = content[locale as keyof typeof content] ?? content.en;
    const blogHref = locale === "en" ? "/blog" : `/${locale}/blog`;
    const contactHref = locale === "en" ? "/contact" : `/${locale}/contact`;
    const calculatorHref = locale === "en" ? "/calculator" : `/${locale}/calculator`;

    const whatsappMessages: Record<string, string> = {
        en: "Hi, I saw your blog post about tax refund and soffit. I'd like a free estimate.",
        es: "Hola, vi su artículo sobre reembolso de impuestos y soffit. Me gustaría un presupuesto gratis.",
        pt: "Ola, vi o artigo sobre restituição de imposto e soffit. Gostaria de um orçamento gratuito.",
    };
    const whatsappMsg = encodeURIComponent(whatsappMessages[locale] ?? whatsappMessages.en);
    const whatsappHref = `https://wa.me/14077151790?text=${whatsappMsg}`;

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildSchema(locale)) }} />
            <div className="flex flex-col min-h-screen">

                {/* ── HERO ──────────────────────────────────────────────── */}
                <section className="py-24 bg-gradient-to-br from-emerald-950 via-green-950 to-slate-900 text-white">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <AnimatedSection>
                            <div className="flex flex-wrap gap-3 items-center mb-6">
                                <Link href={blogHref} className="text-green-300 hover:text-white text-sm transition">&larr; {c.breadcrumb}</Link>
                                <span className="text-green-500">/</span>
                                <span className="text-xs font-bold bg-emerald-500/20 border border-emerald-400/30 text-emerald-200 px-3 py-1 rounded-full uppercase tracking-widest">{c.category}</span>
                                <span className="text-xs text-green-400">{c.readTime}</span>
                            </div>
                            <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
                                {c.h1a}<br />
                                <span className="bg-gradient-to-r from-emerald-300 to-green-300 bg-clip-text text-transparent">{c.h1b}</span>
                            </h1>
                            <p className="text-sm text-gray-400 mt-2 mb-4">{c.authorLine}</p>
                            <p className="text-xl text-green-100 max-w-3xl leading-relaxed">{c.intro}</p>
                        </AnimatedSection>
                    </div>
                </section>

                {/* ── TAX CONTEXT ──────────────────────────────────────── */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <AnimatedSection>
                            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">{c.taxTitle}</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">{c.taxIntro}</p>
                        </AnimatedSection>
                        <div className="space-y-3 mb-8">
                            {c.taxBad.map((item, i) => (
                                <AnimatedSection key={i} delay={i * 60} from="bottom">
                                    <div className="flex items-center gap-4 bg-red-50 border border-red-100 rounded-xl p-4">
                                        <item.icon className="w-5 h-5 text-red-400 shrink-0" />
                                        <div className="flex-1">
                                            <span className="font-semibold text-gray-800">{item.label}</span>
                                            <span className="text-gray-500 text-sm ml-2">— {item.result}</span>
                                        </div>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                        <AnimatedSection delay={200}>
                            <p className="text-gray-700 text-lg font-medium leading-relaxed mb-6">{c.taxTransition}</p>
                            <div className="bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-6">
                                <div className="flex items-start gap-4">
                                    <Wrench className="w-6 h-6 text-emerald-600 shrink-0 mt-1" />
                                    <p className="text-gray-800 font-semibold text-lg leading-relaxed">{c.taxGood}</p>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* ── WHY SOFFIT ──────────────────────────────────────── */}
                <section className="py-16 bg-slate-50 border-y border-gray-100">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <AnimatedSection>
                            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">{c.whySoffitTitle}</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">{c.whySoffitIntro}</p>
                        </AnimatedSection>
                        <AnimatedSection delay={80}>
                            <div className="space-y-3 mb-6">
                                {c.whySoffitPoints.map((point, i) => (
                                    <div key={i} className="flex items-start gap-3 bg-white rounded-xl border border-gray-200 p-4">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                                        <p className="text-gray-700 font-medium">{point}</p>
                                    </div>
                                ))}
                            </div>
                            <p className="text-gray-800 font-bold text-lg">{c.whySoffitKicker}</p>
                        </AnimatedSection>
                    </div>
                </section>

                {/* ── THE PROBLEM ────────────────────────────────────────── */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <AnimatedSection>
                            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">{c.problemTitle}</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-10">{c.problemIntro}</p>
                        </AnimatedSection>
                        <div className="grid md:grid-cols-2 gap-6">
                            {c.problems.map((p, i) => (
                                <AnimatedSection key={i} delay={i * 80} from={i % 2 === 0 ? "left" : "right"}>
                                    <div className="bg-red-50 border border-red-100 rounded-2xl p-6 h-full">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                                                <p.icon className="w-5 h-5 text-red-600" />
                                            </div>
                                            <h3 className="font-extrabold text-gray-900">{p.title}</h3>
                                        </div>
                                        <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── THE NUMBERS ────────────────────────────────────────── */}
                <section className="py-16 bg-gray-50 border-y border-gray-100">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <AnimatedSection>
                            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">{c.numbersTitle}</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">{c.numbersIntro}</p>
                        </AnimatedSection>
                        <AnimatedSection delay={80}>
                            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
                                <table className="w-full bg-white text-sm">
                                    <thead>
                                        <tr className="border-b border-gray-200 bg-gray-50">
                                            <th className="text-left p-4 font-bold text-gray-500 uppercase text-xs tracking-wide">Scenario</th>
                                            <th className="text-center p-4 font-bold text-gray-500 uppercase text-xs tracking-wide">Cost</th>
                                            <th className="text-center p-4 font-bold text-gray-500 uppercase text-xs tracking-wide">Timeline</th>
                                            <th className="text-left p-4 font-bold text-gray-500 uppercase text-xs tracking-wide">Result</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {c.numbersRows.map((row, i) => (
                                            <tr key={i} className={i === 0 ? "bg-green-50" : i === 2 ? "bg-red-50" : ""}>
                                                <td className="p-4 font-semibold text-gray-700">{row.scenario}</td>
                                                <td className={`p-4 text-center font-bold ${i === 0 ? "text-green-700" : i === 2 ? "text-red-700" : "text-amber-700"}`}>{row.cost}</td>
                                                <td className="p-4 text-center text-gray-600">{row.timeline}</td>
                                                <td className="p-4 text-gray-600 text-xs">{row.note}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection delay={160}>
                            <div className="bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-6 mt-8 text-center">
                                <DollarSign className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
                                <p className="text-gray-800 font-bold text-lg leading-relaxed">{c.numbersVerdict}</p>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* ── ROI ────────────────────────────────────────────────── */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <AnimatedSection>
                            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-10">{c.roiTitle}</h2>
                        </AnimatedSection>
                        <div className="space-y-4">
                            {c.roiItems.map((item, i) => (
                                <AnimatedSection key={i} delay={i * 60} from="bottom">
                                    <div className="flex items-start gap-5 bg-blue-50 border border-blue-100 rounded-2xl p-6">
                                        <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                                            <span className="text-blue-700 font-black text-lg">{i + 1}</span>
                                        </div>
                                        <div>
                                            <h3 className="font-extrabold text-gray-900 mb-1">{item.title}</h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── TIMING ────────────────────────────────────────────── */}
                <section className="py-16 bg-amber-50 border-y border-amber-100">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <AnimatedSection>
                            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-8">{c.timingTitle}</h2>
                        </AnimatedSection>
                        <AnimatedSection delay={80}>
                            <div className="space-y-3">
                                {c.timingReasons.map((reason, i) => (
                                    <div key={i} className="flex items-start gap-3 bg-white rounded-xl border border-amber-200 p-4">
                                        <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                                        <p className="text-gray-700 text-sm font-medium">{reason}</p>
                                    </div>
                                ))}
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* ── FAQ ────────────────────────────────────────────────── */}
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
                <RelatedServices serviceKeys={["calculator", "repairs", "remove-replace"]} locale={locale} />

                {/* ── CTA ────────────────────────────────────────────────── */}
                <section className="py-20 bg-gradient-to-br from-emerald-700 to-green-900 text-white text-center">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <AnimatedSection>
                            <Home className="w-12 h-12 text-emerald-300 mx-auto mb-4" />
                            <h2 className="text-3xl font-extrabold mb-4">{c.ctaTitle}</h2>
                            <p className="text-green-200 text-lg mb-8">{c.ctaBody}</p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href={contactHref} className="inline-flex items-center justify-center gap-2 bg-white text-green-900 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition shadow-xl">
                                    {c.ctaBtn} <ArrowRight className="w-5 h-5" />
                                </Link>
                                <a href="tel:4077151790" className="inline-flex items-center justify-center gap-2 bg-white/10 border-2 border-white/40 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition">
                                    <Phone className="w-5 h-5" /> {c.ctaPhone}
                                </a>
                            </div>
                            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 text-green-300 hover:text-white mt-4 font-semibold transition">
                                <Shield className="w-4 h-4" /> {c.ctaWhatsapp}
                            </a>
                            <p className="text-green-400 text-sm mt-6">{c.ctaNote}</p>
                            <Link href={calculatorHref} className="inline-flex items-center gap-2 text-green-300 hover:text-white mt-3 text-sm font-medium transition underline underline-offset-4">
                                <DollarSign className="w-4 h-4" /> {locale === "es" ? "Calcule su proyecto ahora" : locale === "pt" ? "Calcule seu projeto agora" : "Calculate your project now"} &rarr;
                            </Link>
                        </AnimatedSection>
                    </div>
                </section>
            </div>
        </>
    );
}
