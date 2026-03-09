# AUDITORIA COMPLETA POS-CORRECOES -- bubblesenterprise.com
**Data:** 2026-03-06 | **Auditores:** 4 agentes especializados (Antigravity Kit)
**Stack:** Next.js 16.1.6, React 19, Tailwind CSS v4, next-intl (EN/ES/PT)

---

## NOTAS GERAIS POR AREA

| Area | Nota Anterior (pre) | Nota Atual (pos) | Delta |
|------|---------------------|-------------------|-------|
| SEO | 8.5/10 | 8.5/10 | -- |
| Seguranca | 7.5/10 | 7.3/10 | -0.2 (avaliacao mais rigorosa) |
| Performance | 6.0/10 | 7.5/10 | +1.5 |
| Acessibilidade | 6.5/10 | 6.9/10 | +0.4 |
| **MEDIA GERAL** | **7.1/10** | **7.6/10** | **+0.5** |

> A nota de seguranca baixou 0.2 porque o agente de seguranca desta vez foi mais rigoroso,
> identificando problemas novos (SHA-256 sem salt, timing-safe comparison, admin brute force).
> Na pratica a seguranca MELHOROU com as correcoes feitas (CSP, origin check, admin hash server-side).

---

## 1. SEO + GEO -- 8.5/10

### Notas por sub-item

| # | Item | Nota |
|---|------|------|
| 1 | Meta Tags (title, description) | 9/10 |
| 2 | Hreflang | 7/10 |
| 3 | Canonical URLs | 6/10 |
| 4 | Sitemap | 8/10 |
| 5 | robots.txt | 10/10 |
| 6 | Schema JSON-LD | 9.5/10 |
| 7 | OpenGraph / Twitter Cards | 8.5/10 |
| 8 | Internal Linking | 9/10 |
| 9 | Heading Hierarchy | 9.5/10 |
| 10 | Image Alt Texts | 8/10 |
| 11 | Core Web Vitals Readiness | 9/10 |
| 12 | GEO (AI Search) | 9/10 |
| 13 | Local SEO | 9.5/10 |
| 14 | Content Quality | 7.5/10 |

### O que esta excelente
- robots.txt 10/10 -- AI bots de busca permitidos, training bots bloqueados, /api/ e /_next/ bloqueados
- Schema JSON-LD 9.5/10 -- LocalBusiness + HomeAndConstructionBusiness em TODAS as paginas, FAQPage em 28 paginas
- Local SEO 9.5/10 -- NAP consistente, 15 cidades em areaServed, 5 plataformas em sameAs
- GEO 9/10 -- llms.txt, llms-full.txt, mcp.json com 6 tools, WebMCPProvider
- Heading hierarchy 9.5/10 -- H1 unico em todas as 66 paginas
- Speculation Rules implementado (prerender contact, calculator; prefetch services, repairs, faq)

### CRITICO -- corrigir AGORA

1. **Canonical e hreflang ERRADOS em ~30 URLs [locale]**
   - Paginas `[locale]` que NAO tem `generateMetadata` com `alternates` proprio herdam canonical da homepage
   - Ex: `/es/services` tem canonical `https://bubblesenterprise.com/es` em vez de `.../es/services`
   - Afeta: services, repairs, remove-replace, new-construction, faq, about, certifications, testimonials,
     gallery, financing, soffit-repair-orlando, fascia-repair-orlando, areas, materials, materials/aluminum,
     materials/vinyl, privacy, terms (~19 paginas x 2 locales = ~38 URLs)

2. **Blog posts [locale] sem hreflang e potencial conteudo duplicado**
   - 8 blog posts em `[locale]` usam `const metadata` sem alternates e URLs hardcoded EN
   - Se conteudo nao esta traduzido, Google penaliza por duplicate content

3. **materials/aluminum e materials/vinyl (EN) sem alternates**

### IMPORTANTE

4. Author attribution visivel (E-E-A-T) -- "By Bubbles Enterprise Team" + credenciais
5. "Last updated" timestamp visivel em blog posts e service pages
6. Twitter card especifico por pagina (herdam titulo generico do site)
7. Adicionar `/es/contact/emergency` e `/pt/contact/emergency` ao sitemap

### NICE-TO-HAVE

8. postalCode no schema address
9. Angi no sameAs
10. Homepage service area links para cidades individuais
11. Blog "related posts" cross-linking
12. Gallery hero image alt descritivo
13. Remover `keywords` meta tag do calculator
14. SearchAction no schema WebSite
15. Equalizar areaServed no `[locale]/page.tsx` (5 vs 15 cidades)

---

## 2. SEGURANCA -- 7.3/10

### Notas por sub-item

| # | Item | Nota |
|---|------|------|
| 1 | CSP (Content Security Policy) | 7/10 |
| 2 | Security Headers | 9/10 |
| 3 | API Security | 7/10 |
| 4 | Authentication (Admin) | 4/10 |
| 5 | File Upload | 8/10 |
| 6 | Environment Variables | 8/10 |
| 7 | Dependencies | 7/10 |
| 8 | XSS Prevention | 8/10 |
| 9 | SMTP Config | 6/10 |
| 10 | robots.txt / .htaccess | 9/10 |
| 11 | Error Handling | 7/10 |
| 12 | CORS / Origin | 8/10 |

### O que esta excelente
- Security headers 9/10 -- HSTS preload, X-Frame-Options DENY, nosniff, Permissions-Policy, poweredByHeader false
- robots.txt/.htaccess 9/10 -- directory listing desabilitado, paths sensiveis bloqueados
- XSS 8/10 -- React escapa por padrao, dangerouslySetInnerHTML so em JSON-LD estatico, esc() em emails
- File upload 8/10 -- 5 fotos max, 10MB/foto, MIME + extensao validados
- Environment variables 8/10 -- zero NEXT_PUBLIC_, tudo server-only

### CRITICO -- corrigir AGORA

1. **`/api/admin/verify` sem rate limiting** -- brute force ilimitado na senha admin
   - Arquivo: `src/app/api/admin/verify/route.ts`

2. **`validateFieldLengths()` definida mas NUNCA chamada** -- campos aceitam texto ilimitado
   - Arquivos: contact/route.ts, emergency-repair/route.ts, repair-quote/route.ts

3. **`tls: { rejectUnauthorized: false }`** -- desabilita verificacao SSL do SMTP (permite MITM)
   - Arquivo: `src/lib/api-utils.ts` linha 48
   - NOTA: necessario porque certificado e self-signed. Documentar o risco.

4. **SHA-256 sem salt para admin hash** -- crackeavel em <1 segundo
   - Migrar para bcrypt ou scrypt com salt

### IMPORTANTE

5. Adicionar `form-action 'self'` ao CSP
6. Corrigir localhost check (permite `http://localhost.evil.com`)
7. Validar magic bytes nos uploads de fotos (MIME do client falsificavel)
8. Rejeitar `f.type` vazio na validacao de fotos
9. Adicionar `error.tsx` no root (`src/app/error.tsx`)
10. Usar `crypto.timingSafeEqual()` na comparacao de hash
11. `/api/admin/verify` sem origin check -- chamavel de qualquer origem

### NICE-TO-HAVE

12. Migrar CSP para nonce-based (Next.js middleware)
13. Adicionar `base-uri 'self'` e `worker-src 'none'` ao CSP
14. `.npmrc` com `save-exact=true`
15. Bloquear `/_modules/` e `.env*` no .htaccess do servidor

---

## 3. PERFORMANCE -- 7.5/10

### Notas por sub-item

| # | Item | Nota |
|---|------|------|
| 1 | Image Optimization | 7/10 |
| 2 | Bundle Size | 5/10 |
| 3 | Font Loading | 9/10 |
| 4 | Third-Party Scripts | 8/10 |
| 5 | Cache Headers | 9/10 |
| 6 | CSS | 9/10 |
| 7 | JavaScript | 8/10 |
| 8 | Server vs Client Components | 6/10 |
| 9 | Lazy Loading (dynamic) | 3/10 |
| 10 | Core Web Vitals Readiness | 7/10 |
| 11 | Compression | 10/10 |
| 12 | Preloading/Prefetching | 9/10 |
| 13 | HeroSlider | 8/10 |

### O que esta excelente
- Compression 10/10 -- `compress: true`
- Font loading 9/10 -- next/font com display swap, subsets latin
- Cache headers 9/10 -- immutable para static, 30 dias para images
- CSS 9/10 -- Tailwind v4, prefers-reduced-motion, @supports guards
- Preloading/Prefetching 9/10 -- Speculation Rules, View Transitions API
- HeroSlider 8/10 -- so renderiza 2 imagens (atual + proxima), priority na primeira

### CRITICO -- corrigir AGORA

1. **Adicionar `sizes` em todas as `<Image fill>`** -- Homepage gallery (6 imgs), Gallery page (9+ imgs)
   - Sem `sizes`, browser baixa imagens enormes para todos os viewports

2. **ZERO uso de `next/dynamic`** -- nenhum componente lazy loaded
   - AnimatedSection deveria ser dynamic (cria 15+ IntersectionObservers individuais na homepage)
   - Gallery lightbox deveria ser on-demand
   - Contact form (upload) deveria ter fallback

3. **Separar Server/Client nos componentes mistos**
   - `contact/page.tsx` 100% client -- extrair form, manter hero/sidebar como Server
   - `gallery/page.tsx` 100% client -- extrair lightbox, grid como Server
   - `review/page.tsx` client so para GA4 tracking -- wrapper client minimo

4. **Consolidar IntersectionObservers** -- AnimatedSection cria 15+ observers individuais

### IMPORTANTE

5. Homepage gallery: mudar `eager` para `lazy` nas imagens abaixo do fold
6. Converter imagens para AVIF (~20% menor que WebP)
7. Clarity e Facebook Pixel: mudar para `lazyOnload`
8. calculator/page.tsx (57KB) -- dividir em sub-componentes

### NICE-TO-HAVE

9. Throttle no scroll listener do Header
10. Pre-carregar 3a imagem do HeroSlider
11. Adicionar /gallery ao Speculation Rules prefetch
12. scheduler.yield() em loops pesados do calculator

---

## 4. ACESSIBILIDADE (WCAG 2.2) -- 6.9/10

### Notas por sub-item

| # | Item | Nota |
|---|------|------|
| 1 | Skip Links | 8/10 |
| 2 | Landmarks | 7/10 |
| 3 | Heading Hierarchy | 6/10 |
| 4 | Form Labels | 5/10 |
| 5 | Focus Management | 6/10 |
| 6 | Keyboard Navigation | 6/10 |
| 7 | Color Contrast | 7/10 |
| 8 | Image Alt Texts | 8/10 |
| 9 | ARIA Attributes | 7/10 |
| 10 | Mobile Responsiveness | 8/10 |
| 11 | Error States | 4/10 |
| 12 | Loading States | 7/10 |
| 13 | Animation | 9/10 |
| 14 | Language | 9/10 |
| 15 | Error/404 Pages | 7/10 |

### O que esta excelente
- Animation 9/10 -- prefers-reduced-motion desabilita TUDO, scroll-progress escondido
- Language 9/10 -- html lang dinamico por locale
- Skip link 8/10 -- funcional, target main-content existe
- Mobile 8/10 -- touch targets CTA >= 56px, mobile menu full-width
- Image alts 8/10 -- gallery com alt descritivo, upload preview com alt

### CRITICO -- corrigir AGORA

1. **Formularios: erros sem role="alert" / aria-live**
   - NENHUM formulario anuncia erros ou sucesso para screen readers
   - Adicionar `role="alert"` na msg de erro, `role="status"` na msg de sucesso
   - Arquivos: contact/page.tsx, [locale]/contact/page.tsx, emergency pages, calculator

2. **Footer contraste FALHA WCAG AA**
   - `text-white/65` sobre bg-bubble-navy = ~3.8:1 (minimo 4.5:1)
   - `text-white/40` = ~2.2:1, `text-white/30` = ~1.8:1
   - Corrigir: /65 -> /80, /40 -> /65, /30 -> /60

3. **File upload inacessivel por teclado** (contact/page.tsx EN)
   - A div clicavel precisa de `role="button"`, `tabIndex={0}`, `onKeyDown`
   - NOTA: [locale]/contact/emergency ja foi corrigido, falta contact EN e [locale]/contact

4. **<main> aninhado** -- calculator, financing e emergency tem `<main>` proprio dentro do `<main>` do layout
   - Mudar para `<div>` ou `<section>`

5. **aria-expanded inconsistente com Popover API** no Header
   - State servicesOpen/materialsOpen nao reflete visibilidade real do popover

### IMPORTANTE

6. Focus trap no mobile menu (Tab escapa para conteudo atras)
7. Focus move ao abrir/fechar mobile menu
8. aria-required="true" nos campos obrigatorios de todos os formularios
9. Footer headings: <h3> sem <h2> pai -- viola hierarquia
10. HeroSlider dots: w-2 h-2 (8px) -- touch target muito pequeno, minimo 44px
11. aria-controls ID mismatch (services-dropdown vs services-popover)
12. Loading state sem role="status"
13. not-found.tsx nao traduzida + cria <html> proprio (pode aninhar)
14. error.tsx falta no root /app/

### NICE-TO-HAVE

15. focus-visible:outline-none em vez de focus:outline-none (14 ocorrencias)
16. aria-hidden="true" em icones decorativos (ChevronDown, Building2, etc)
17. HeroSlider alt texts mais descritivos
18. Arrow key navigation nos dropdowns
19. Mobile menu aria-label: "Close" -> "Mobile navigation menu"

---

## PLANO DE EXECUCAO -- PROXIMOS PASSOS

### WAVE 1 -- Correcoes criticas (impacto imediato)

| # | O que | Area | Impacto |
|---|-------|------|---------|
| 1 | Canonical/hreflang correto em ~19 paginas [locale] | SEO | Critico -- 38 URLs com canonical errado |
| 2 | role="alert" e aria-live nos formularios | A11y | Critico -- screen readers nao anunciam erros |
| 3 | Footer contraste WCAG AA | A11y | Critico -- texto ilegivel |
| 4 | validateFieldLengths() chamar nas 3 APIs | Seg | Critico -- campos sem limite |
| 5 | /api/admin/verify: rate limiting + origin check | Seg | Critico -- brute force aberto |
| 6 | sizes em todas as <Image fill> | Perf | Critico -- imagens enormes em mobile |
| 7 | <main> aninhado: mudar para <section> | A11y | Critico -- HTML invalido |
| 8 | File upload keyboard access (contact EN + locale) | A11y | Critico -- inacessivel |

### WAVE 2 -- Melhorias importantes (proximo deploy)

| # | O que | Area | Impacto |
|---|-------|------|---------|
| 9 | Blog posts [locale] hreflang + verificar duplicacao | SEO | Alto -- penalidade Google |
| 10 | dynamic() para AnimatedSection + consolidar observers | Perf | Alto -- 15+ observers |
| 11 | Focus trap no mobile menu | A11y | Alto -- WCAG violation |
| 12 | Separar Server/Client (contact, gallery) | Perf | Alto -- bundle size |
| 13 | SHA-256 -> bcrypt com salt no admin | Seg | Alto -- crackeavel |
| 14 | form-action 'self' no CSP | Seg | Medio |
| 15 | Footer headings hierarquia | A11y | Medio |
| 16 | Dots do slider touch target | A11y | Medio |

### WAVE 3 -- Polimento (backlog)

| # | O que | Area |
|---|-------|------|
| 17 | Author attribution visivel (E-E-A-T) | SEO |
| 18 | "Last updated" timestamp visivel | SEO |
| 19 | AVIF format para imagens | Perf |
| 20 | lazyOnload para Clarity/Facebook | Perf |
| 21 | error.tsx no root | A11y/Seg |
| 22 | not-found.tsx traduzido | A11y |
| 23 | aria-expanded sync com Popover API | A11y |
| 24 | CSP nonce-based | Seg |

---

## CONCLUSAO

O site esta em **bom estado geral (7.6/10)** apos as correcoes da primeira auditoria.
Os pontos mais fortes sao SEO (8.5), Schema (9.5), Local SEO (9.5), GEO/AI (9.0), e robots.txt (10/10).

Os pontos mais fracos que precisam de atencao imediata sao:
1. **Canonical/hreflang errado em ~38 URLs** -- maior problema SEO
2. **Acessibilidade de formularios** -- erros nao anunciados, file upload inacessivel
3. **Footer contraste** -- falha WCAG AA
4. **Lazy loading zero** -- nenhum dynamic() em todo o projeto
5. **Admin auth fragil** -- sem rate limit, SHA-256 sem salt

Corrigindo a Wave 1 (8 itens criticos), o site sobe para **~8.5/10** geral.
Corrigindo Waves 1+2, sobe para **~9.2/10**.
