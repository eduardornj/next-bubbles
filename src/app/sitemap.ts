import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const BASE = 'https://bubblesenterprise.com';

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

export default function sitemap(): MetadataRoute.Sitemap {
    const today = new Date();

    // ── Core service pages ───────────────────────────────────────────
    const core: MetadataRoute.Sitemap = [
        { url: BASE,                                    lastModified: today,              changeFrequency: 'weekly',  priority: 1.0 },
        { url: `${BASE}/calculator`,                    lastModified: today,              changeFrequency: 'monthly', priority: 0.95 },
        { url: `${BASE}/contact`,                       lastModified: today,              changeFrequency: 'monthly', priority: 0.9 },
        { url: `${BASE}/contact/emergency`,             lastModified: today,              changeFrequency: 'monthly', priority: 0.9 },
        { url: `${BASE}/services`,                      lastModified: today,              changeFrequency: 'monthly', priority: 0.9 },
        { url: `${BASE}/financing`,                     lastModified: today,              changeFrequency: 'monthly', priority: 0.85 },
        { url: `${BASE}/repairs`,                       lastModified: today,              changeFrequency: 'monthly', priority: 0.85 },
        { url: `${BASE}/remove-replace`,                lastModified: today,              changeFrequency: 'monthly', priority: 0.85 },
        { url: `${BASE}/new-construction`,              lastModified: today,              changeFrequency: 'monthly', priority: 0.85 },
        { url: `${BASE}/soffit-repair-orlando`,         lastModified: today,              changeFrequency: 'monthly', priority: 0.85 },
        { url: `${BASE}/fascia-repair-orlando`,         lastModified: new Date('2026-03-01'), changeFrequency: 'monthly', priority: 0.8 },
    ];

    // ── Materials ────────────────────────────────────────────────────
    const materials: MetadataRoute.Sitemap = [
        { url: `${BASE}/materials`,         lastModified: new Date('2026-03-01'), changeFrequency: 'monthly', priority: 0.8 },
        { url: `${BASE}/materials/aluminum`, lastModified: today,               changeFrequency: 'monthly', priority: 0.8 },
        { url: `${BASE}/materials/vinyl`,    lastModified: today,               changeFrequency: 'monthly', priority: 0.8 },
    ];

    // ── Service areas ────────────────────────────────────────────────
    const areas: MetadataRoute.Sitemap = [
        { url: `${BASE}/areas`, lastModified: new Date('2026-03-01'), changeFrequency: 'monthly', priority: 0.8 },
        ...citySlugs.map(slug => ({
            url: `${BASE}/areas/${slug}`,
            lastModified: new Date('2026-03-01'),
            changeFrequency: 'monthly' as const,
            priority: 0.75,
        })),
    ];

    // ── Blog ─────────────────────────────────────────────────────────
    const blog: MetadataRoute.Sitemap = [
        { url: `${BASE}/blog`, lastModified: new Date('2026-03-01'), changeFrequency: 'weekly', priority: 0.8 },
        ...blogPosts.map(p => ({
            url: `${BASE}/blog/${p.slug}`,
            lastModified: new Date(p.date),
            changeFrequency: 'monthly' as const,
            priority: 0.75,
        })),
    ];

    // ── Info & company ───────────────────────────────────────────────
    const info: MetadataRoute.Sitemap = [
        { url: `${BASE}/gallery`,       lastModified: today,              changeFrequency: 'weekly',  priority: 0.75 },
        { url: `${BASE}/testimonials`,  lastModified: today,              changeFrequency: 'weekly',  priority: 0.75 },
        { url: `${BASE}/faq`,           lastModified: today,              changeFrequency: 'monthly', priority: 0.65 },
        { url: `${BASE}/about`,         lastModified: today,              changeFrequency: 'monthly', priority: 0.65 },
        { url: `${BASE}/review`,        lastModified: new Date('2026-03-01'), changeFrequency: 'monthly', priority: 0.6 },
        { url: `${BASE}/certifications`, lastModified: today,             changeFrequency: 'yearly',  priority: 0.6 },
        { url: `${BASE}/privacy`,       lastModified: today,              changeFrequency: 'yearly',  priority: 0.3 },
        { url: `${BASE}/terms`,         lastModified: today,              changeFrequency: 'yearly',  priority: 0.3 },
    ];

    // ── English-only pages (combined) ────────────────────────────────
    const enPages = [...core, ...materials, ...areas, ...blog, ...info];

    // ── Locale versions (ES, PT) ─────────────────────────────────────
    // Pages that have [locale] versions (translated content)
    const localeRoutes = [
        '',                     // homepage
        '/services',
        '/repairs',
        '/remove-replace',
        '/new-construction',
        '/calculator',
        '/contact',
        '/contact/emergency',
        '/financing',
        '/materials',
        '/materials/aluminum',
        '/materials/vinyl',
        '/areas',
        '/blog',
        '/gallery',
        '/testimonials',
        '/faq',
        '/about',
        '/certifications',
        '/soffit-repair-orlando',
        '/fascia-repair-orlando',
        '/review',
        '/privacy',
        '/terms',
    ];

    const locales = ['es', 'pt'];
    const localePages: MetadataRoute.Sitemap = locales.flatMap(loc =>
        localeRoutes.map(route => ({
            url: `${BASE}/${loc}${route}`,
            lastModified: today,
            changeFrequency: 'monthly' as const,
            priority: route === '' ? 0.9 : 0.7,
        }))
    );

    // Locale versions of service area cities
    const localeCityPages: MetadataRoute.Sitemap = locales.flatMap(loc =>
        citySlugs.map(slug => ({
            url: `${BASE}/${loc}/areas/${slug}`,
            lastModified: new Date('2026-03-01'),
            changeFrequency: 'monthly' as const,
            priority: 0.65,
        }))
    );

    // Locale versions of blog posts
    const localeBlogPages: MetadataRoute.Sitemap = locales.flatMap(loc =>
        blogPosts.map(p => ({
            url: `${BASE}/${loc}/blog/${p.slug}`,
            lastModified: new Date(p.date),
            changeFrequency: 'monthly' as const,
            priority: 0.65,
        }))
    );

    return [...enPages, ...localePages, ...localeCityPages, ...localeBlogPages];
}
