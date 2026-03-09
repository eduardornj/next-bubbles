# Plano de Reestruturação Completo — bubblesoffit.com
> Criado em: 2026-03-01
> Status: Em execução por fases
> Site: next-bubbles (Next.js 16 + React 19 + TypeScript + Tailwind v4)
> Stack: `output: "export"` — site estático, sem Node.js SSR

---

## Contexto Atual do Site

### O que JÁ existe (não recriar):
- ✅ Popover API no Header (JS fallback incluído)
- ✅ ViewTransitionLink component
- ✅ WebMCPProvider + mcp.json + .well-known/ai-plugin.json
- ✅ Scroll-Driven Animation (barra de progresso)
- ✅ Floating CTA (telefone + quote)
- ✅ Schema JSON-LD básico na home (WebSite + LocalBusiness parcial)
- ✅ AnimatedSection component (IntersectionObserver)
- ✅ 21 páginas estruturadas
- ✅ HeroSlider, Header, Footer, globals.css com Tailwind v4

### O que FALTA (priorizado por impacto):

| Item | Impacto SEO/GEO | Impacto Conversão | Esforço |
|------|----------------|-------------------|---------|
| Schema JSON-LD completo (todas páginas) | 10/10 | 7/10 | Médio |
| llms.txt | 9/10 | — | Baixo |
| robots.txt para AI bots | 8/10 | — | Baixo |
| @view-transition CSS | 5/10 | 8/10 | Muito baixo |
| Speculation Rules | 6/10 | 8/10 | Muito baixo |
| Página /cost-guide | 9/10 | 9/10 | Médio |
| Página /fascia-repair-orlando | 8/10 | 8/10 | Médio |
| Páginas /areas/[cidade] | 8/10 | 8/10 | Médio |
| Converter imagens para WebP/AVIF | 6/10 | 5/10 | Médio |
| FAQ schema em todas páginas FAQ | 9/10 | 6/10 | Baixo |

---

## FASE 1 — Fundação Técnica (sem tocar conteúdo)
> Objetivo: Infraestrutura SEO/GEO que o Google e as IAs precisam
> Agente principal: `seo-specialist`
> Skills usadas: `seo-fundamentals`, `geo-fundamentals`, `web-standards-2026`

### TASK 1.1 — Schema JSON-LD Global no layout.tsx
**Arquivo:** `src/app/layout.tsx`
**Agente:** `seo-specialist` + skill `seo-fundamentals`

Adicionar em `<head>` do layout.tsx:
```typescript
// Schema global: LocalBusiness + Organization em TODAS as páginas
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
          "@id": "https://bubblesenterprise.com/#business",
          name: "Bubbles Enterprise Soffit & Fascia",
          url: "https://bubblesenterprise.com",
          telephone: "+14077151790",
          priceRange: "$$",
          image: "https://bubblesenterprise.com/images/og-image.png",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Orlando",
            addressRegion: "FL",
            addressCountry: "US",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 28.5383,
            longitude: -81.3792,
          },
          areaServed: [
            { "@type": "City", name: "Orlando", addressRegion: "FL" },
            { "@type": "City", name: "Kissimmee", addressRegion: "FL" },
            { "@type": "City", name: "Winter Park", addressRegion: "FL" },
            { "@type": "City", name: "Winter Garden", addressRegion: "FL" },
            { "@type": "City", name: "Clermont", addressRegion: "FL" },
            { "@type": "City", name: "Sanford", addressRegion: "FL" },
            { "@type": "City", name: "Oviedo", addressRegion: "FL" },
            { "@type": "City", name: "Lake Mary", addressRegion: "FL" },
            { "@type": "City", name: "Apopka", addressRegion: "FL" },
            { "@type": "City", name: "Altamonte Springs", addressRegion: "FL" },
          ],
          openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
            opens: "08:00",
            closes: "18:00",
          },
          sameAs: [
            "https://www.facebook.com/bubblesenterprise",
            "https://www.yelp.com/biz/bubbles-enterprise",
          ],
        },
      ],
    }),
  }}
/>
```

**Resultado esperado:** Google mostra business info direto no resultado, Gemini AI Overview inclui o negócio.

---

### TASK 1.2 — robots.txt para AI bots
**Arquivo:** `public/robots.txt` (criar novo)
**Agente:** `seo-specialist` + skill `geo-fundamentals`

```
User-agent: *
Allow: /

# AI Search Indexing — permite citações nas IAs
User-agent: OAI-SearchBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Claude-SearchBot
Allow: /

# Bloqueia treinamento de modelos (não citação)
User-agent: GPTBot
Disallow: /

User-agent: ClaudeBot
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: Google-Extended
Disallow: /

Sitemap: https://bubblesenterprise.com/sitemap.xml
```

---

### TASK 1.3 — llms.txt (sitemap para IAs)
**Arquivo:** `public/llms.txt` (criar novo)
**Agente:** `seo-specialist` + skill `geo-fundamentals`

```markdown
# Bubbles Enterprise Soffit & Fascia — Orlando, FL

> Expert soffit and fascia installation, repair, and replacement in Orlando and Central Florida.
> Licensed and insured. Serving residential and new construction since 2020.
> Phone: (407) 715-1790. Available Mon–Sat 8am–6pm. Emergency repairs available.
> Service area: Orlando, Kissimmee, Winter Park, Winter Garden, Clermont, Sanford, Oviedo,
> Lake Mary, Apopka, Altamonte Springs, and 45+ Central Florida cities.

## Services
- [Soffit & Fascia Repair](https://bubblesenterprise.com/repairs): Repair holes, rotted wood, animal damage
- [Remove & Replace](https://bubblesenterprise.com/remove-replace): Full soffit removal and aluminum/vinyl replacement
- [New Construction](https://bubblesenterprise.com/new-construction): Builder-grade soffit installation for new homes
- [Emergency Repair](https://bubblesenterprise.com/contact/emergency): Same-day response for urgent soffit damage

## Service Areas
- [Central Florida Coverage](https://bubblesenterprise.com/areas): Full list of 45+ cities served

## Pricing & Materials
- [Free Estimate Calculator](https://bubblesenterprise.com/calculator): Instant price estimate by linear feet
- [Aluminum vs Vinyl Comparison](https://bubblesenterprise.com/materials): Materials guide with costs
- [Cost Guide](https://bubblesenterprise.com/cost-guide): Average soffit & fascia prices in Orlando 2025

## Information
- [FAQ](https://bubblesenterprise.com/faq): Common questions about soffit and fascia
- [Gallery](https://bubblesenterprise.com/gallery): Before & after project photos
- [Certifications](https://bubblesenterprise.com/certifications): Licenses and insurance
- [About](https://bubblesenterprise.com/about): Company background
```

---

### TASK 1.4 — View Transitions + Speculation Rules no globals.css e layout.tsx
**Arquivos:** `src/app/globals.css` e `src/app/layout.tsx`
**Agente:** `frontend-specialist` + skill `web-standards-2026`

**globals.css** — adicionar no topo (depois do @import "tailwindcss"):
```css
/* View Transitions — MPA cross-document fade (Chrome 126+, Safari 18.2+, ~76% users) */
@view-transition {
  navigation: auto;
}
```

**layout.tsx** — adicionar antes de `</body>`:
```html
{/* Speculation Rules — prerender páginas de conversão ao hover (Chrome/Edge 109+) */}
<script
  type="speculationrules"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      prerender: [
        { where: { href_matches: "/contact" }, eagerness: "moderate" },
        { where: { href_matches: "/contact/emergency" }, eagerness: "moderate" },
        { where: { href_matches: "/calculator" }, eagerness: "moderate" },
      ],
      prefetch: [
        { where: { href_matches: "/services" }, eagerness: "conservative" },
        { where: { href_matches: "/repairs" }, eagerness: "conservative" },
        { where: { href_matches: "/faq" }, eagerness: "conservative" },
      ],
    }),
  }}
/>
```

---

### TASK 1.5 — Schema por página (Service + FAQPage)
**Agente:** `seo-specialist` + skills `seo-fundamentals`, `nextjs-react-expert`

Adicionar `jsonLd` em cada página que já não tem:

| Página | Schema a adicionar |
|--------|-------------------|
| `/repairs` | `Service` com `name`, `description`, `provider`, `areaServed`, `offers` |
| `/remove-replace` | `Service` + `HowTo` (processo de R&R) |
| `/new-construction` | `Service` com `audience: "HomeBuilder"` |
| `/faq` | `FAQPage` com todas as Q&As como `Question` + `Answer` |
| `/calculator` | `Service` + `potentialAction` com `urlTemplate` |
| `/materials` | `ItemList` comparando aluminum vs vinyl |
| `/areas` | `LocalBusiness` expandido com `areaServed` completo |
| `/soffit-repair-orlando` | `Service` + `FAQPage` + `HowTo` |
| `/testimonials` | `AggregateRating` + `Review` list |
| `/certifications` | `Organization` com `hasCredential` |
| `/contact` | `ContactPoint` |
| `/gallery` | `ImageGallery` |

**Padrão de implementação por página:**
```typescript
// Adicionar no topo de cada page.tsx
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://bubblesenterprise.com/repairs#service",
  name: "Soffit & Fascia Repair",
  provider: { "@id": "https://bubblesenterprise.com/#business" },
  areaServed: { "@type": "State", name: "Florida" },
  // ...
};

// No JSX, antes do return:
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
```

---

## FASE 2 — Novas Páginas de Conteúdo
> Objetivo: Conteúdo que domina AI Overviews, Perplexity, ChatGPT
> Agente principal: `seo-specialist` + `frontend-specialist`
> Skills usadas: `seo-fundamentals`, `geo-fundamentals`, `frontend-design`, `nextjs-react-expert`

### TASK 2.1 — Página /cost-guide
**Status: ❌ CANCELADA — NÃO RECRIAR**
**Motivo:** Preços públicos expõem estratégia de precificação a concorrentes, que podem undercut por $0.50 e fechar vendas. O calculator (/calculator) fornece preço personalizado de forma privada — é a solução correta.
**Arquivo:** `src/app/cost-guide/page.tsx` (deletado — não recriar)
**Impacto:** 10/10 — conteúdo com dados reais domina AI citations

**Estrutura H1→H2→bullet (formato que IAs citam):**
```
H1: Soffit & Fascia Replacement Cost in Orlando, FL (2025)
H2: How Much Does Soffit Replacement Cost?
  → Aluminum: $8–$14/linear foot installed
  → Vinyl: $7–$12/linear foot installed
  → Average Orlando home: 150–250 LF
  → Typical total: $1,200–$3,500
H2: What Affects Soffit Replacement Cost?
  → Overhang width (12", 24", 36")
  → Stories (1 vs 2 — labor +15%)
  → Linear footage
  → Material choice
H2: Soffit vs Fascia — What's the Difference in Cost?
H2: New Construction vs Remove & Replace Cost
H2: Free Estimate Calculator
  → Embed link para /calculator
H2: FAQ (com FAQPage schema)
```

**Schema:** `Service` + `FAQPage` + `HowTo` + `Article` com `dateModified`

---

### TASK 2.2 — Página /fascia-repair-orlando
**Arquivo:** `src/app/fascia-repair-orlando/page.tsx` (criar)
**Impacto:** 8/10 — keyword com volume, sem concorrência forte

**Estrutura:**
```
H1: Fascia Repair & Replacement in Orlando, FL
H2: What is Fascia? (definição — IAs adoram definições claras)
H2: Signs Your Fascia Needs Repair
H2: Fascia Repair vs Replacement — When Each?
H2: Cost of Fascia Repair in Orlando
H2: Our Fascia Repair Process (HowTo schema)
H2: Service Areas
H2: FAQ
```

**Schema:** `Service` + `FAQPage` + `HowTo`

---

### TASK 2.3 — Páginas /areas/[cidade]
**Arquivo:** `src/app/areas/[cidade]/page.tsx` (criar — dynamic route)
**Impacto:** 8/10 — SEO local por cidade

**Cidades a criar (em ordem de prioridade):**
1. `/areas/kissimmee` — Kissimmee, FL
2. `/areas/winter-park` — Winter Park, FL
3. `/areas/sanford` — Sanford, FL
4. `/areas/clermont` — Clermont, FL
5. `/areas/winter-garden` — Winter Garden, FL
6. `/areas/oviedo` — Oviedo, FL
7. `/areas/apopka` — Apopka, FL
8. `/areas/lake-mary` — Lake Mary, FL
9. `/areas/altamonte-springs` — Altamonte Springs, FL
10. `/areas/celebration` — Celebration, FL

**Estrutura de cada página:**
```
H1: Soffit & Fascia Repair in [City], FL
H2: Our [City] Soffit Services
H2: Why Homeowners in [City] Trust Bubbles Enterprise
H2: [City] Service Area Coverage
H2: Request a Free Estimate in [City]
```

**Schema:** `LocalBusiness` com `address.addressLocality: "[City]"` + `areaServed`

**Implementação:** `generateStaticParams()` para pre-render estático de todas as cidades.

---

### TASK 2.4 — Melhorar página /soffit-repair-orlando (já existe)
**Arquivo:** `src/app/soffit-repair-orlando/page.tsx` (atualizar)
**Impacto:** 9/10 — página principal de SEO local

Adicionar:
- Schema completo: `Service` + `FAQPage` + `HowTo` + `AggregateRating`
- Preços reais (2025) no conteúdo
- FAQ section com 8+ perguntas
- "Last Updated" visível

---

## FASE 3 — Performance de Imagens
> Objetivo: Core Web Vitals + menores arquivos
> Agente: `performance-optimizer`
> Skill: `performance-profiling`

### TASK 3.1 — Converter imagens JPEG para WebP
**Localização:** `public/images/gallery/`, `public/images/works/`

**Prioridade de conversão:**
1. Hero images (above-the-fold) — prioridade máxima
2. Gallery images — muitas, alto impacto de tamanho
3. Works/portfolio images

**Ferramenta:** Squoosh CLI ou sharp (local conversion)
```bash
# Instalar sharp-cli:
npm install -g @squoosh/cli
# Converter:
squoosh-cli --webp {} public/images/gallery/*.jpg
```

**Após converter:** Atualizar src de `*.jpg` para `*.webp` nos componentes.

### TASK 3.2 — Converter PNG vinyl para WebP
**Arquivo:** `public/images/soffit-vinyl-close.png`
PNG é maior que necessário para fotos. Converter para WebP.

---

## FASE 4 — Expansão de Conteúdo Avançado
> Objetivo: Autoridade de domínio + citações AI
> Agente: `seo-specialist` + `documentation-writer`
> Skills: `seo-fundamentals`, `geo-fundamentals`

### TASK 4.1 — Blog / Artigos SEO
**Pasta:** `src/app/blog/` (criar estrutura)

**Artigos prioritários (H2-bullet format para AI citations):**
1. "How to Tell if Your Soffit is Damaged" — tutorial + diagnóstico
2. "Aluminum vs Vinyl Soffit: Complete 2025 Comparison" — tabela comparativa
3. "How Long Does Soffit Last? Lifespan by Material" — dados específicos
4. "What Animals Live in Damaged Soffits? (Orlando Guide)" — local + urgência
5. "Soffit & Fascia: What's the Difference?" — definições básicas (alto volume)

**Schema por artigo:** `Article` com `author`, `datePublished`, `dateModified`

### TASK 4.2 — Página /materials melhorada
**Arquivo:** `src/app/materials/page.tsx` (atualizar)

Adicionar tabela comparativa completa com schema `ItemList`:
- Aluminum vs Vinyl vs Wood vs Fiber Cement
- Colunas: Custo, Durabilidade, Manutenção, Ideal para

### TASK 4.3 — Testimonials com schema AggregateRating
**Arquivo:** `src/app/testimonials/page.tsx` (atualizar)

Adicionar `AggregateRating` + `Review` schema para cada depoimento.
Google mostra estrelas nos resultados (rich snippet).

---

## FASE 5 — Otimizações Finais
> Objetivo: Polir experiência + preparar para migração de domínio
> Agente: `frontend-specialist` + `performance-optimizer`

### TASK 5.1 — Migração de domínio
De: `bubblesenterprise.com`
Para: `bubblesoffit.com`

**Checklist:**
- [ ] Comprar domínio bubblesoffit.com
- [ ] Atualizar `metadataBase` em layout.tsx
- [ ] Atualizar todos os `https://bubblesenterprise.com` nas URLs do schema
- [ ] Atualizar mcp.json provider.url
- [ ] Atualizar llms.txt URLs
- [ ] Configurar redirects 301 de bubblesenterprise.com → bubblesoffit.com
- [ ] Atualizar Google Search Console
- [ ] Atualizar Google Business Profile

### TASK 5.2 — sitemap.xml dinâmico
**Arquivo:** `src/app/sitemap.ts` (criar se não existe)

Incluir todas as páginas + cidades + blog posts com `lastModified` correto.

### TASK 5.3 — Open Graph images por página
Atualmente todas as páginas usam a mesma og-image.png.
Criar og-images específicas para páginas principais:
- `/cost-guide` — imagem com "Soffit Cost Guide Orlando 2025"
- `/soffit-repair-orlando` — imagem local

### TASK 5.4 — CSS Anchor Positioning para tooltips
**Arquivo:** globals.css + componentes de tooltip
Substituir posicionamento JS por CSS Anchor Positioning nativo (Chrome 125+).
Skill: `web-standards-2026`

### TASK 5.5 — Browser AI (Chrome 138+) no formulário
**Arquivo:** `src/app/contact/page.tsx`
Adicionar detecção de idioma no textarea usando `ai.languageDetector`.
Se detectar espanhol → mostrar hint "Podemos atender em português e espanhol".
Skill: `browser-ai-apis`

---

## Mapa de Agentes × Tarefas

| Fase | Task | Agente Principal | Skills Necessárias |
|------|------|-----------------|-------------------|
| 1.1 | Schema JSON-LD global | `seo-specialist` | `seo-fundamentals` |
| 1.2 | robots.txt AI bots | `seo-specialist` | `geo-fundamentals` |
| 1.3 | llms.txt | `seo-specialist` | `geo-fundamentals` |
| 1.4 | View Transitions + Speculation Rules | `frontend-specialist` | `web-standards-2026` |
| 1.5 | Schema por página | `seo-specialist` | `seo-fundamentals`, `nextjs-react-expert` |
| 2.1 | Página /cost-guide | `seo-specialist` + `frontend-specialist` | `seo-fundamentals`, `geo-fundamentals`, `nextjs-react-expert` |
| 2.2 | Página /fascia-repair-orlando | `seo-specialist` + `frontend-specialist` | `seo-fundamentals`, `nextjs-react-expert` |
| 2.3 | Páginas /areas/[cidade] | `frontend-specialist` | `nextjs-react-expert`, `seo-fundamentals` |
| 2.4 | Melhorar /soffit-repair-orlando | `seo-specialist` | `seo-fundamentals`, `geo-fundamentals` |
| 3.1 | Converter JPEG→WebP | `performance-optimizer` | `performance-profiling` |
| 3.2 | Converter PNG→WebP | `performance-optimizer` | `performance-profiling` |
| 4.1 | Blog / Artigos | `seo-specialist` + `documentation-writer` | `seo-fundamentals`, `geo-fundamentals` |
| 4.2 | /materials expandido | `frontend-specialist` | `seo-fundamentals`, `nextjs-react-expert` |
| 4.3 | Testimonials AggregateRating | `seo-specialist` | `seo-fundamentals` |
| 5.1 | Migração domínio | `devops-engineer` | `deployment-procedures` |
| 5.2 | sitemap.xml dinâmico | `frontend-specialist` | `nextjs-react-expert`, `seo-fundamentals` |
| 5.3 | OG images por página | `frontend-specialist` | `frontend-design` |
| 5.4 | CSS Anchor Positioning | `frontend-specialist` | `web-standards-2026` |
| 5.5 | Browser AI no formulário | `frontend-specialist` | `browser-ai-apis`, `nextjs-react-expert` |

---

## Ordem de Execução Recomendada

```
SEMANA 1 (máximo impacto, mínimo risco):
├── TASK 1.2 → robots.txt         [5 minutos]
├── TASK 1.3 → llms.txt           [10 minutos]
├── TASK 1.4 → View Transitions   [10 minutos]
│             + Speculation Rules
└── TASK 1.1 → Schema global      [30 minutos]

SEMANA 2 (schema por página + cost-guide):
├── TASK 1.5 → Schema em /faq, /repairs, /soffit-repair-orlando
├── TASK 2.1 → /cost-guide (página nova mais importante)
└── TASK 2.4 → Melhorar /soffit-repair-orlando

SEMANA 3 (novas páginas):
├── TASK 2.2 → /fascia-repair-orlando
└── TASK 2.3 → /areas/[cidade] (começar com kissimmee, winter-park, sanford)

SEMANA 4 (performance + conteúdo):
├── TASK 3.1 → Converter imagens
├── TASK 4.3 → Testimonials schema
└── TASK 1.5 → Schema nas páginas restantes

APÓS SEMANA 4 (quando tiver $):
├── TASK 5.1 → Comprar bubblesoffit.com + migração
├── TASK 4.1 → Blog posts
└── TASK 5.5 → Browser AI no formulário
```

---

## Critérios de Sucesso por Fase

| Fase | Critério de Sucesso | Como Verificar |
|------|--------------------|--------------------|
| Fase 1 | Schema válido sem erros | Google Rich Results Test |
| Fase 1 | AI bots no robots.txt | Verificar arquivo online |
| Fase 1 | llms.txt acessível | Acessar diretamente no browser |
| Fase 2 | /cost-guide indexada | Google Search Console |
| Fase 2 | Páginas de área indexadas | Search Console + "site:url" no Google |
| Fase 3 | Imagens <100KB | DevTools Network tab |
| Fase 4 | Citação em Perplexity/ChatGPT | Pesquisar "soffit repair orlando" nas IAs |
| Fase 5 | Redirect 301 funcionando | Check redirect ferramenta online |

---

## Notas de Implementação

### Padrão de Schema para este site
- Sempre usar `@id` com URL completa + `#identificador`
- Sempre incluir `"@context": "https://schema.org"`
- LocalBusiness global vai em `layout.tsx`, schemas específicos vão em cada `page.tsx`
- Nunca duplicar o LocalBusiness — usar `{ "@id": "https://bubblesenterprise.com/#business" }` para referenciar

### Sobre `output: "export"`
- Tudo aqui é compatível com export estático
- `generateStaticParams()` para rotas dinâmicas (/areas/[cidade])
- Sem API routes — use `public/*.json` para dados estáticos

### Domínio atual vs futuro
- Enquanto não migrar: todas as URLs são `bubblesenterprise.com`
- Quando migrar: buscar e substituir `bubblesenterprise.com` → `bubblesoffit.com` em todos os arquivos

---

*Plano salvo em: `C:\Users\eDuArDoXP\ClaudeAi\next-bubbles\PLANO-REESTRUTURACAO.md`*
*Atualizar este arquivo conforme tasks forem concluídas.*
