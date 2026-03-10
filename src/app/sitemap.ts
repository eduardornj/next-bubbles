import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const BASE = 'https://bubblesenterprise.com';
const LOCALES = ['en', 'es', 'pt'] as const;

// City slugs — must match data.ts (21 cities)
const citySlugs = [
    'orlando',
    'kissimmee',
    'winter-park',
    'winter-garden',
    'clermont',
    'altamonte-springs',
    'sanford',
    'oviedo',
    'lake-mary',
    'apopka',
    'celebration',
    'longwood',
    'casselberry',
    'dr-phillips',
    'maitland',
    'windermere',
    'st-cloud',
    'daytona-beach',
    'palm-bay',
    'port-st-lucie',
    'lake-nona',
];

// Blog posts with real publish dates
const blogPosts: { slug: string; date: string }[] = [
    { slug: 'how-to-tell-if-soffit-is-damaged',  date: '2026-01-15' },
    { slug: 'aluminum-vs-vinyl-soffit',           date: '2026-01-22' },
    { slug: 'soffit-lifespan-by-material',        date: '2026-02-01' },
    { slug: 'animals-in-damaged-soffit-orlando',  date: '2026-02-10' },
    { slug: 'soffit-vs-fascia-difference',        date: '2026-02-18' },
    { slug: 'soffit-fascia-color-trends-2026',    date: '2026-03-01' },
    { slug: 'termites-in-soffit-orlando',         date: '2026-03-01' },
    { slug: 'hurricane-proof-soffit-florida',     date: '2026-03-01' },
];

/** Build hreflang alternates for a given path */
function hreflang(path: string) {
    return {
        languages: {
            en: `${BASE}${path}`,
            es: `${BASE}/es${path}`,
            pt: `${BASE}/pt${path}`,
        },
    };
}

/** Create a sitemap entry with hreflang for all 3 locales */
function entry(path: string, lastModified: Date, changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'], priority: number): MetadataRoute.Sitemap[number] {
    return { url: `${BASE}${path}`, lastModified, changeFrequency, priority, alternates: hreflang(path) };
}

/** Create locale variants (ES, PT) for a path — EN is already in the main entry */
function localeEntries(path: string, lastModified: Date, changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'], priority: number): MetadataRoute.Sitemap {
    return LOCALES.filter(l => l !== 'en').map(loc => ({
        url: `${BASE}/${loc}${path}`,
        lastModified,
        changeFrequency,
        priority: Math.max(priority - 0.1, 0.3),
        alternates: hreflang(path),
    }));
}

export default function sitemap(): MetadataRoute.Sitemap {
    const today = new Date();
    const mar01 = new Date('2026-03-01');

    // ── Core service pages ───────────────────────────────────────────
    const coreRoutes: [string, Date, MetadataRoute.Sitemap[number]['changeFrequency'], number][] = [
        ['',                        today,  'weekly',  1.0],
        ['/calculator',             today,  'monthly', 0.95],
        ['/contact',                today,  'monthly', 0.9],
        ['/contact/emergency',      today,  'monthly', 0.9],
        ['/services',               today,  'monthly', 0.9],
        ['/financing',              today,  'monthly', 0.85],
        ['/repairs',                today,  'monthly', 0.85],
        ['/remove-replace',         today,  'monthly', 0.85],
        ['/new-construction',       today,  'monthly', 0.85],
        ['/soffit-repair-orlando',  today,  'monthly', 0.85],
        ['/fascia-repair-orlando',  mar01,  'monthly', 0.8],
    ];

    // ── Materials ────────────────────────────────────────────────────
    const materialRoutes: [string, Date, MetadataRoute.Sitemap[number]['changeFrequency'], number][] = [
        ['/materials',          mar01,  'monthly', 0.8],
        ['/materials/aluminum', today,  'monthly', 0.8],
        ['/materials/vinyl',    today,  'monthly', 0.8],
    ];

    // ── Info & company ───────────────────────────────────────────────
    const infoRoutes: [string, Date, MetadataRoute.Sitemap[number]['changeFrequency'], number][] = [
        ['/gallery',        today,  'weekly',  0.75],
        ['/testimonials',   today,  'weekly',  0.75],
        ['/faq',            today,  'monthly', 0.65],
        ['/about',          today,  'monthly', 0.65],
        ['/review',         mar01,  'monthly', 0.6],
        ['/certifications', today,  'yearly',  0.6],
        ['/privacy',        today,  'yearly',  0.3],
        ['/terms',          today,  'yearly',  0.3],
    ];

    // All translatable routes
    const allRoutes = [...coreRoutes, ...materialRoutes, ...infoRoutes];

    // EN entries (with hreflang) + ES/PT entries (with hreflang)
    const pages: MetadataRoute.Sitemap = allRoutes.flatMap(([path, mod, freq, pri]) => [
        entry(path, mod, freq, pri),
        ...localeEntries(path, mod, freq, pri),
    ]);

    // ── Service areas ────────────────────────────────────────────────
    const areaPages: MetadataRoute.Sitemap = [
        entry('/areas', mar01, 'monthly', 0.8),
        ...localeEntries('/areas', mar01, 'monthly', 0.8),
        ...citySlugs.flatMap(slug => [
            entry(`/areas/${slug}`, mar01, 'monthly', 0.75),
            ...localeEntries(`/areas/${slug}`, mar01, 'monthly', 0.75),
        ]),
    ];

    // ── Blog ─────────────────────────────────────────────────────────
    const blogPages: MetadataRoute.Sitemap = [
        entry('/blog', mar01, 'weekly', 0.8),
        ...localeEntries('/blog', mar01, 'weekly', 0.8),
        ...blogPosts.flatMap(p => [
            entry(`/blog/${p.slug}`, new Date(p.date), 'monthly', 0.75),
            ...localeEntries(`/blog/${p.slug}`, new Date(p.date), 'monthly', 0.75),
        ]),
    ];

    return [...pages, ...areaPages, ...blogPages];
}
