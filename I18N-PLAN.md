# Plano de Internacionalização (i18n) — bubblesenterprise.com
**Projeto:** next-bubbles
**Data do plano:** 2026-03-03
**Última atualização:** 2026-03-05
**Status:** FASE 5 COMPLETA + SEO CORRIGIDO — Personalização Cultural (14/14 pages ✅) + E-E-A-T + hreflang blog posts

---

## Objetivo
Dominar buscas em espanhol e português em Orlando — mercado que nenhum competitor de Soffit está trabalhando hoje. SEO puro upside, zero risco para o inglês existente.

---

## Idiomas e Ordem de Execução

| # | Idioma | Rota | Status | Prioridade |
|---|--------|------|--------|-----------|
| 1 | Inglês | `/` (default) | ✅ ao vivo | — |
| 2 | Espanhol | `/es/` | ⏳ Pendente | **FASE 1** |
| 3 | Português BR | `/pt/` | ⏳ Pendente | **FASE 2** |
| 4 | Árabe | `/ar/` | 🔜 Futuro | FASE 3 (RTL — só após volume) |

---

## Por que Espanhol Primeiro
- Maior comunidade non-English em Orlando (Porto-riquenhos, Venezuelanos, Colombianos, Mexicanos)
- Maioria dos homeowners hispânicos pesquisa em espanhol mesmo falando inglês funcional
- **Barreiro de venda cai 50% antes de abrir a boca** quando o site está no idioma deles
- Nenhum competitor de Soffit em Orlando tem site em espanhol hoje

## Por que Árabe Fica por Último
- Árabe é RTL (Right-to-Left) — texto da direita para a esquerda
- Exige ajustes de CSS em praticamente todos os componentes (`dir="rtl"`)
- Só vale quando GA4 mostrar tráfego árabe real chegando no site

---

## Termos Técnicos — Revisão OpenClaw

### Espanhol (foco: Porto Rico + Venezuela + Colômbia — maioria em Orlando)
| Inglês | NÃO usar | USAR |
|--------|----------|------|
| Soffit | Sofito | **Soffit** (termo técnico universal) |
| Fascia | - | **Fascia** (termo técnico) |
| Soffit repair | - | **reparación de soffit** |
| Soffit installation | - | **instalación de soffit** |
| Remove & Replace | - | **Reemplazo de soffit** |
| New Construction | - | **Construcción nueva** |
| Free Estimate | - | **Presupuesto gratis** |

### Português BR (foco: brasileiros — Kissimmee, Poinciana, Hunters Creek)
| Inglês | NÃO usar | USAR |
|--------|----------|------|
| Soffit | Sofito | **Soffit** (termo técnico) |
| Fascia | - | **Fascia** (termo técnico) ou  |
| Soffit repair | - | **reparo de soffit** |
| Soffit installation | - | **instalação de soffit** |
| Remove & Replace | - | **Remoção e substituição** |
| New Construction | - | **Construção nova** |
| Free Estimate | - | **Orçamento grátis** |

> ⚠️ **OpenClaw revisa os arquivos** `es.json` e `pt.json` antes do deploy para garantir termos corretos do mercado local de Orlando. Claude gera, OpenClaw valida.

### Decisão confirmada — Imagens da calculadora
- `guide_linear_feet.png`, `guide_overhang.png`, `guide_corners.png` → **mesmas imagens em todos os idiomas**
- Quem está nos EUA precisa entender o mínimo de inglês técnico — decisão do Eduardo
- Zero trabalho adicional de design

### ✅ CONFIRMADO — Termos da calculadora (OpenClaw respondeu 2026-03-03)
| Inglês | Espanhol | Português BR | Notas |
|--------|----------|--------------|-------|
| Linear Feet / LF | LF (mantém) | LF (mantém) | Termo técnico EUA — clientes entendem |
| New Construction | Construcción Nueva | Construção Nova | Traduz |
| Remove & Replace | Quitar y Reemplazar | Remover e Substituir | Traduz |
| Aluminum | Aluminio | Alumínio | Traduz |
| Vinyl | Vinilo | Vinil | Traduz |

### ✅ CONFIRMADO — WhatsApp por idioma (ATUALIZADO mar 2026: "Eduardo" removido)
- EN: `"Hi, I visited your website and would like a free estimate for soffit and fascia."`
- ES: `"Hola, vi su sitio web y me gustaría un presupuesto gratis para soffit y fascia."`
- PT: `"Olá, vi o site de vocês e gostaria de um orçamento para soffit e fascia."`
- **Regra:** NUNCA mencionar "Eduardo" por nome. Sempre "nossa equipe", "our team", "nuestro equipo". Eduardo quer escalar e gerenciar a equipe, não ser associado pessoalmente.

### ✅ CONFIRMADO — "Areas we serve" traduzido
- Nomes de cidades ficam em inglês (nomes próprios)
- Descrições e headings traduzem (melhor SEO local por idioma)

---

## FASE 5: Personalização Cultural (mar 2026) ⏳ EM ANDAMENTO

### Filosofia: Copy Original, NÃO Tradução
Eduardo exigiu que cada idioma tenha copy 100% ORIGINAL, escrita do zero para a cultura do público-alvo. O sistema i18n (next-intl) já suporta isso nativamente: mesmas keys JSON, values completamente diferentes por cultura.

**Isso NÃO é tradução.** É copywriting cultural: cada idioma fala com o público de forma diferente, usando argumentos, tom, CTAs e gatilhos emocionais que funcionam para aquela cultura específica.

### Estratégia por Cultura

#### EN (Americano) - "Proof & Speed"
- **Tom:** Direto, confiante, orientado a dados
- **Argumentos:** Certificações, 500+ homes, builders trust us, licensed & insured
- **CTA:** Calculator (self-service) + Free Quote (americano quer resolver sozinho)
- **Medo principal:** Fazer um investimento ruim, contratar alguém incompetente
- **Pest warning:** Dados de risco (fire hazard, structural damage, contaminated insulation)

#### PT (Brasileiro em Orlando) - "Confiança e Comunidade"
- **Tom:** Próximo, pessoal, profissional sem ser formal. "Nós fazemos, nós resolvemos"
- **Argumentos:** Equipe brasileira, fala português, entende o que precisa, sem enrolação
- **CTA:** WhatsApp (primário, verde) + Telefone + Calculadora (brasileiro quer todos os canais)
- **Medo principal:** Ser passado pra trás por contractor americano que cobra caro e faz mal feito
- **Pest warning:** Emocional - "Tem bicho entrando pelo soffit? Isso não vai parar sozinho."
- **Regras de escrita:** "Nós" (nunca "a gente"), sem "tá/pra/pro", sem em-dashes. Soffit/Fascia em inglês. Alumínio, Vinil em português.
- **NUNCA** mencionar "Eduardo" por nome. Sempre "nossa equipe", "equipe Bubbles", "nosso time"

#### ES (Hispânico em Orlando) - "Familia y Respeto"
- **Tom:** Respeitoso, caloroso, formal (usted) mas acolhedor
- **Argumentos:** Atendimento em español, casa como patrimônio familiar, proteção da família
- **CTA:** Llamar Ahora + Presupuesto Gratis + WhatsApp (hispânico prefere ligar)
- **Medo principal:** Não ser entendido, ser cobrado a mais por não falar inglês
- **Pest warning:** Foco na família - "¿Soffit Abierto? Su Familia Está en Riesgo."
- **Regras de escrita:** Formal "usted" sempre, sem em-dashes. Soffit/Fascia em inglês. Aluminio, Vinilo.

### Páginas com Copy Personalizada
| Página | EN | PT | ES | AR |
|--------|----|----|----|----|
| Homepage (home namespace) | ✅ Proof & Speed | ✅ WhatsApp + Confiança | ✅ Familia + Español | ✅ (cópia EN) |
| About (about namespace) | ✅ Data-driven | ✅ Equipe Brasileira | ✅ Su Hogar + Idioma | ✅ (cópia EN) |
| Services (services namespace) | ✅ OK (já bom) | ✅ Equipe BR + WhatsApp | ✅ Español + Familia | ✅ (cópia EN) |
| Repairs (repairs namespace) | ✅ Urgência + Proof | ✅ WhatsApp + Equipe BR | ✅ Proteja Su Hogar | ✅ (cópia EN) |
| Remove & Replace (removeReplace) | ✅ Direto + Data | ✅ WhatsApp + Sem Enrolação | ✅ Proteja Su Inversión | ✅ (cópia EN) |
| New Construction (newConstruction) | ✅ Builder-focused | ✅ Equipe BR + WhatsApp B2B | ✅ Español + Confianza | ✅ (cópia EN) |
| Calculator (calculator namespace) | ✅ OK | ✅ WhatsApp + Equipe BR | ✅ Español | ✅ (cópia EN) |
| Financing (financing namespace) | ✅ OK | ✅ WhatsApp + Equipe BR | ✅ Español + Familia | ✅ (cópia EN) |
| FAQ (faqPage namespace) | ✅ OK | ✅ Português + WhatsApp | ✅ Español | ✅ (cópia EN) |
| Contact (contact namespace) | ✅ OK | ✅ Equipe BR + WhatsApp | ✅ Español | ✅ (cópia EN) |
| Gallery (gallery namespace) | ✅ OK | ✅ Equipe BR + WhatsApp | ✅ Español | ✅ (cópia EN) |
| Testimonials (testimonials) | ✅ OK | ✅ WhatsApp CTA | ✅ Español CTA | ✅ (cópia EN) |
| Certifications (certifications) | ✅ OK | ✅ Equipe BR + WhatsApp | ✅ Español | ✅ (cópia EN) |
| Areas (areas namespace) | ✅ OK | ✅ Equipe BR + WhatsApp | ✅ Español | ✅ (cópia EN) |
| Materials (materials hub/alum/vinyl) | ✅ OK | ✅ Equipe BR + WhatsApp | ✅ Español | ✅ (cópia EN) |

### Mudanças Técnicas (Personalização)
- `src/app/[locale]/page.tsx`: Hero e CTA final condicionais por locale (`locale === "pt"`)
  - PT: botão WhatsApp (branco → verde no hover) + Telefone no hero; WhatsApp (azul → verde no hover) + Calculadora no CTA final
  - EN/ES/AR: Calculator + Phone (padrão)
- `src/app/[locale]/layout.tsx`: Mensagem WhatsApp por locale (sem "Eduardo")
- `src/app/[locale]/contact/page.tsx`: WhatsApp adicionado na seção "Comunicação Direta"
- Todas as referências a "Eduardo" removidas de TODOS os 4 JSONs e de todos os page.tsx (financing, layout, contact)
- Exceção: testimonials mantêm "Eduardo" pois são reviews reais de clientes

### Ordem de Personalização
1. ✅ Homepage (home) — FEITO
2. ✅ About (about) — FEITO
3. ✅ Services — FEITO
4. ✅ Repairs — FEITO
5. ✅ Remove & Replace — FEITO (+ cores reorganizadas: azul + amber)
6. ✅ New Construction — FEITO
7. ✅ Calculator — FEITO (ajustes pontuais: WhatsApp PT, español ES)
8. ✅ Financing — FEITO (hero, CTA, exit intent personalizados)
9. ✅ FAQ — FEITO (hero + stillQuestions personalizados)
10. ✅ Contact, Gallery, Testimonials, Certifications, Areas, Materials — FEITO

### Correções (mar 2026)
- PT repairs: "Soffit Quebrado?" → **"Soffit Caído?"** (soffit não quebra, ele cai/solta)
- "Fascia amassada" / "dented fascia" / "fascia abollada" adicionada em TODOS os idiomas (repairs + services)
- PT metaDesc repairs: "quebrado" → "caído, fascia amassada"

### Mudanças de Cor (mar 2026)
- `/services` cards: Repairs verde → **vermelho/laranja** (combina com página)
- `/remove-replace`: todo verde → **azul da marca + amber** para alertas
- Paleta por serviço: Repairs=vermelho, R&R=azul, New Construction=índigo

---

## Biblioteca: next-intl
- Padrão do ecossistema Next.js App Router
- Gera `hreflang` automaticamente (sem isso, Google penaliza por conteúdo duplicado)
- Suporte nativo a rotas `/es/`, `/pt/`, `/ar/`
- Zero configuração extra no CloudLinux/Passenger — funciona com standalone

---

## Escala do Trabalho

| Item | Volume | Responsável |
|------|--------|------------|
| Arquivos de tradução (`en.json`, `es.json`, `pt.json`) | ~500 strings cada | Claude gera, OpenClaw valida es/pt |
| Refatoração das páginas (trocar texto por `t("chave")`) | 22 páginas + Header + Footer | Claude |
| Configuração next-intl + middleware + hreflang | 1x só | Claude |
| Revisão de termos técnicos | es.json + pt.json | OpenClaw + Eduardo |
| Deploy | 1x standalone | Eduardo |

---

## Como Funciona para o Usuário

**Desktop/Mobile:** Seletor de idioma no Header — texto `EN | ES | PT` (sem bandeiras — decisão OpenClaw)
**Google:** Detecta idioma do navegador e serve `/es/` ou `/pt/` automaticamente via middleware
**URLs permanentes por idioma:**
- `bubblesenterprise.com/` → inglês
- `bubblesenterprise.com/es/` → espanhol
- `bubblesenterprise.com/es/contact` → formulário de contato em espanhol
- `bubblesenterprise.com/pt/financing` → página de financiamento em português

---

## Como Funciona para o SEO

Quando alguém pesquisa **"reparación de soffit Orlando"** no Google:
1. Google vê que `bubblesenterprise.com/es/` existe com `hreflang="es"`
2. Entende que é conteúdo relevante em espanhol para usuário em Orlando
3. Rankeia o site — nenhum competitor está fazendo isso

**Tag hreflang gerada automaticamente pelo next-intl:**
```html
<link rel="alternate" hreflang="en" href="https://bubblesenterprise.com/repairs" />
<link rel="alternate" hreflang="es" href="https://bubblesenterprise.com/es/repairs" />
<link rel="alternate" hreflang="pt" href="https://bubblesenterprise.com/pt/repairs" />
<link rel="alternate" hreflang="x-default" href="https://bubblesenterprise.com/repairs" />
```

---

## O Que NÃO Muda

- Site em inglês: idêntico visualmente e no SEO — nenhuma regressão
- Formulários: mesmos endpoints de API (só o label/texto muda, lógica igual)
- Deploy: mesmo processo standalone — só o bundle fica um pouco maior

---

## Checklist de Implementação

### Pré-requisitos (Eduardo/OpenClaw)
- [x] Confirmar termos técnicos em espanhol que o mercado de Orlando usa ✅
- [x] Confirmar termos técnicos em português BR que os brasileiros de Orlando usam ✅
- [ ] Deploy da `/financing` concluído (i18n pode ser desenvolvido em paralelo)

### Fase 1: Infraestrutura ✅ COMPLETO (2026-03-03)
- [x] `npm install next-intl` ✅
- [x] Criar `src/i18n/` com `routing.ts`, `request.ts`, `navigation.ts` ✅
- [x] Criar `messages/en.json`, `es.json`, `pt.json`, `ar.json` ✅
- [x] Criar `src/middleware.ts` para roteamento por idioma ✅
- [x] Atualizar `next.config.ts` com `withNextIntl` plugin ✅
- [x] Criar `src/app/[locale]/layout.tsx` com NextIntlClientProvider ✅
- [x] Mover todas as páginas para `src/app/[locale]/` ✅
- [x] Refatorar Homepage, Header, Footer ✅
- [x] Seletor de idioma EN|ES|PT no menu mobile + Footer ✅
- [x] hreflang gerado via `alternates` no generateMetadata ✅
- [x] `npm run build` — 180 páginas, zero erros ✅

### Notas de implementação
- Seletor usa `<a>` (não `<Link>`) para forçar full navigation e trocar cookie de locale
- Desktop: seletor fica no Footer (não quebra o header)
- Mobile: seletor fica dentro do menu mobile
- Árabe preparado: `messages/ar.json` existe (cópia EN) — para ativar: adicionar `"ar"` no `routing.ts` locales array + criar conteúdo real + adicionar `dir="rtl"` no `<html>`

---

## Status Real por Página (auditoria 2026-03-04)

### ✅ TRADUÇÃO COMPLETA (body + metadata em EN/ES/PT)
| Página | Arquivo | Tipo | ~t() calls |
|--------|---------|------|-----------|
| Homepage | `[locale]/page.tsx` | Server | ~75 |
| About | `[locale]/about/page.tsx` | Server | ~60 |
| Contact | `[locale]/contact/page.tsx` | Client | ~35 |
| Certifications | `[locale]/certifications/page.tsx` | Server | ~55 |
| Areas | `[locale]/areas/page.tsx` | Server | ~20 |
| FAQ | `[locale]/faq/page.tsx` + `FAQClient.tsx` | Mixed | ~35 |
| Privacy | `[locale]/privacy/page.tsx` | Server | ~40 |
| Repairs | `[locale]/repairs/page.tsx` | Server | ~40 |
| Services | `[locale]/services/page.tsx` | Server | ~80 |
| Terms | `[locale]/terms/page.tsx` | Server | ~50 |
| Gallery | `[locale]/gallery/page.tsx` + `layout.tsx` | Client | ~18 |
| Financing | `[locale]/financing/page.tsx` + `layout.tsx` | Client | ~95 |
| Calculator | `[locale]/calculator/page.tsx` + `layout.tsx` | Client | ~95 |

### ⚠️ TRADUÇÃO PARCIAL
| Página | O que falta | Prioridade |
|--------|-------------|-----------|
| Blog | UI chrome traduzido. Títulos/excerpts dos posts são EN hardcoded (por design — posts são em inglês) | BAIXA — aceitável |
| Testimonials | UI chrome traduzido. Textos dos reviews são EN (citações reais de clientes) | BAIXA — aceitável |
| Calculator | ~~Body ~35 t() calls MAS: MeasurementGuide inteiro hardcoded, formulário repair hardcoded, labels de material/sliders hardcoded, tela de resultado hardcoded. Sem generateMetadata.~~ → **MOVIDO PARA COMPLETA** (~95 t() calls, generateMetadata criado) | ~~ALTA~~ ✅ |
| Terms | ~~Hero/badge/TOC traduzidos. 11 cláusulas legais são JSX hardcoded EN~~ → **MOVIDO PARA COMPLETA** | ~~MÉDIA~~ ✅ |

### ❌ SEM TRADUÇÃO (pendente)
| Página | Arquivo | Complexidade | Prioridade |
|--------|---------|-------------|-----------|
| ~~Financing~~ | ~~`[locale]/financing/page.tsx`~~ | ~~ALTA~~ | ✅ FEITO |
| ~~Gallery~~ | ~~`[locale]/gallery/page.tsx`~~ | ~~MÉDIA~~ | ✅ FEITO |
| ~~Materials~~ | ~~`[locale]/materials/page.tsx`~~ | ~~MÉDIA~~ | ✅ FEITO |
| ~~New Construction~~ | ~~`[locale]/new-construction/page.tsx`~~ | ~~MÉDIA~~ | ✅ FEITO |
| ~~Remove & Replace~~ | ~~`[locale]/remove-replace/page.tsx`~~ | ~~MÉDIA~~ | ✅ FEITO |
| ~~Soffit Repair Orlando~~ | ~~`[locale]/soffit-repair-orlando/page.tsx`~~ | ~~MÉDIA~~ | ✅ FEITO (27 t() calls) |
| ~~Fascia Repair Orlando~~ | ~~`[locale]/fascia-repair-orlando/page.tsx`~~ | ~~MÉDIA~~ | ✅ FEITO (48 t() calls) |

### Subpáginas
- ~~`[locale]/materials/aluminum/page.tsx`~~ → **MOVIDO PARA COMPLETA** ✅
- ~~`[locale]/materials/vinyl/page.tsx`~~ → **MOVIDO PARA COMPLETA** ✅
- `[locale]/areas/[city]/page.tsx` — ❌ **ÚNICA PÁGINA SEM TRADUÇÃO** (hardcoded EN, 0 t() calls)
- `[locale]/contact/emergency/page.tsx` ✅ FEITO (2026-03-04)
- `[locale]/repair-thank-you/page.tsx` — ✅ FEITO (9 t() calls)
- `[locale]/thank-you/page.tsx` — ✅ FEITO (8 t() calls)
- Blog posts individuais (8 posts) — ✅ UI chrome traduzido (16 t() calls), conteúdo EN por design, hreflang adicionados (2026-03-05)

### SEO Corrigido (2026-03-05)
- [x] **E-E-A-T Author:** Todos os 8 blog posts agora têm `author: Person "Eddy, Soffit & Fascia Specialist"` no schema JSON-LD + byline visível "By Eddy" no hero
- [x] **hreflang Blog Posts:** Todos os 8 blog posts agora têm `alternates.languages` com EN/ES/PT + x-default (antes faltava)
- [x] **Review page description:** Adicionada meta description nos layouts EN + i18n (antes faltava)
- [x] **Meta descriptions:** Verificadas — 95%+ únicas, ZERO duplicatas reais (auditoria anterior estava errada)

---

## Plano de Trabalho — Página por Página

**Método:** Eduardo abre a página no browser → confere → Claude traduz → build → próxima.

| # | Página | URL para testar | Status |
|---|--------|----------------|--------|
| 1 | Privacy | `/pt/privacy` | ✅ FEITO (2026-03-04) |
| 2 | Terms | `/pt/terms` | ✅ FEITO (2026-03-04) |
| 3 | Calculator | `/pt/calculator` | ✅ FEITO (2026-03-04) |
| 4 | Financing | `/pt/financing` | ✅ FEITO (2026-03-04) |
| 5 | Gallery | `/pt/gallery` | ✅ FEITO (2026-03-04) |
| 6 | Materials (hub + aluminum + vinyl) | `/pt/materials`, `/pt/materials/aluminum`, `/pt/materials/vinyl` | ✅ FEITO (2026-03-04) |
| 7 | New Construction | `/pt/new-construction` | ✅ FEITO (2026-03-04) |
| 8 | Remove & Replace | `/pt/remove-replace` | ✅ FEITO (2026-03-04) |
| 9 | Soffit Repair Orlando | `/pt/soffit-repair-orlando` | ⏳ Pendente |
| 10 | Fascia Repair Orlando | `/pt/fascia-repair-orlando` | ⏳ Pendente |
| 11 | **Homepage — Copy Cultural** | `/pt/`, `/es/`, `/` | ✅ FEITO (2026-03-04) — copy 100% original por cultura |
| 12 | **About — Copy Cultural** | `/pt/about`, `/es/about`, `/about` | ✅ FEITO (2026-03-04) — copy 100% original por cultura |

---

### Revisão Final (OpenClaw + Eduardo)
- [ ] Revisar `messages/es.json` — termos técnicos corretos para Orlando
- [ ] Revisar `messages/pt.json` — português BR correto
- [ ] Testar `/es/` e `/pt/` no browser — todas as páginas
- [ ] Confirmar formulário de contato funciona nos 3 idiomas

### Deploy
- [ ] Build + deploy completo (mesmo processo standalone)
- [ ] Verificar no Google Search Console que as páginas `/es/` e `/pt/` foram indexadas
- [ ] Acompanhar no GA4 tráfego por idioma (30 dias)

---

## Fase 3 — Árabe (só após dados do GA4)
Se em 60-90 dias o GA4 mostrar tráfego árabe chegando orgânico:
- Adicionar `messages/ar.json`
- Adicionar `dir="rtl"` no `<html>` quando `locale === "ar"`
- Revisar componentes para alinhamento RTL (flex-row-reverse em alguns casos)
- Contratar revisor nativo árabe para validar termos técnicos de construção

---

## O QUE FALTA (mar 2026)

### Tradução i18n (CÓDIGO — Claude faz)
| # | Página | Prioridade | Esforço |
|---|--------|-----------|---------|
| 1 | Soffit Repair Orlando (`/pt/soffit-repair-orlando`, `/es/soffit-repair-orlando`) | **ALTA** — SEO landing page, keywords locais | ~40 t() calls |
| 2 | Fascia Repair Orlando (`/pt/fascia-repair-orlando`, `/es/fascia-repair-orlando`) | **ALTA** — SEO landing page, keywords locais | ~40 t() calls |
| 3 | Areas/[city] (10 cidades x 2 idiomas) | MÉDIA — landing pages geo | ~20 t() calls/cidade |
| 4 | Blog posts individuais (8 posts) | BAIXA — conteúdo EN por design | Só UI chrome |
| 5 | Thank-you pages (2 páginas) | BAIXA — noindex, pós-formulário | ~10 t() calls |

### Deploy pendente (inclui tudo que mudou desde último deploy)
- [x] work12.webp deletado da gallery
- [x] IndexNow key file (`public/c9c0...txt`)
- [x] IndexNow ping script (`scripts/indexnow-ping.sh`)
- [x] Author "Eddy" em 8 blog posts (schema + byline)
- [x] hreflang/alternates em 8 blog posts
- [x] Review layout description (EN + i18n)
- [x] Bing meta tag verificação
- [ ] **→ DEPLOY NECESSÁRIO para essas mudanças irem ao ar**

### Plataformas/Perfis (EDUARDO faz)
- [ ] Google reviews — pedir a cada cliente (meta 50+ em 6 meses)
- [ ] Completar Google Business Profile (fotos, posts)
- [ ] Submeter sitemap no Bing Webmaster Tools
- [ ] Ativar AI Performance no Bing
- [ ] Completar Yelp (fotos, NAP)
- [ ] Criar BBB perfil
- [ ] Ativar Angi público
- [ ] Considerar Thumbtack, Houzz, Alignable
- [ ] URL Acorn Finance (para página /financing)

---

## Notas Finais
- Google Translate widget = NÃO usar — tradução automática sem hreflang = penalização SEO
- Português de Portugal ≠ Português BR — sempre usar termos brasileiros (o público é brasileiro)
- "Soffit" e "Fascia" permanecem em inglês/técnico em todos os idiomas — são termos da indústria nos EUA que os clientes já conhecem
