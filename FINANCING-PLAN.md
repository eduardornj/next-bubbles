# Plano de Ação — Página de Financiamento (/financing)
**Projeto:** bubblesenterprise.com (next-bubbles)
**Data do plano:** 2026-03-03
**Status:** PENDENTE — aguardando conta Acorn Finance

---

## Objetivo
Reduzir a barreira de preço para clientes que travam no valor à vista.
Em vez de perder o job por preço, oferecer parcelamento com aprovação em 60 segundos.
Frase âncora: *"Soffit replacement starting at $19/mo"* (baseado em $1.500 / 144 meses / ~9.9% APR)

---

## Plataforma Escolhida: Acorn Finance
- **Custo para o contractor:** $0 (sem dealer fee, sem mensalidade)
- **Cadastro:** acornfinance.com/contractors (gratuito, ativo em 24h)
- **Como funciona:** 30+ lenders numa aplicação, cliente compara ofertas, soft pull (não afeta crédito)
- **FICO mínimo:** 550+
- **Valor mínimo/máximo:** $1.000 – $100.000
- **Prazo máximo:** 144 meses (12 anos) para crédito bom
- **App:** Contractor usa no celular durante a visita presencial

**⚠️ PENDENTE:** Eduardo precisa criar conta na Acorn Finance e trazer o referral link único (ex: `acornfinance.com/apply?partner=XXXXX`) para colocar nos botões CTA.

---

## Copy & Gatilhos Emocionais

### Gatilho Universal (página /financing principal — tráfego orgânico)
Usado quando não sabemos de onde o cliente vem. Pega todos os perfis ao mesmo tempo:

> **Headline:** "Your Home Deserves It. Your Wallet Doesn't Have To Feel It."
> **Subheadline:** "Get your soffit and fascia fixed today. Pay as little as $19/mo. Check your rate in 60 seconds — no impact on your credit score."

Por que funciona: combina orgulho da casa (emocional) com alívio financeiro (racional). Não acusa o cliente de não ter dinheiro — apresenta o financiamento como escolha inteligente, não como último recurso.

---

### Gatilhos por Perfil (para landing pages de anúncios futuros)
Cada anúncio leva para uma URL específica com copy personalizado. Converter 3-5x mais que página genérica.

**Perfil 1 — Animal/Bicho entrando (medo/urgência)**
- URL: `/financing?ref=pest`
- Headline: *"Something's Living in Your Soffit. Fix It Today, Pay $19/mo."*
- Subheadline: *"Open holes in your soffit are an open invitation. Approved in 60 seconds — protect your home now."*
- Canal: Facebook Ads, Nextdoor

**Perfil 2 — HOA / Carta de violação (vergonha/pressão)**
- URL: `/financing?ref=hoa`
- Headline: *"HOA Notice? Get It Fixed Before the Fine."*
- Subheadline: *"Don't let a letter turn into a fine. Fix your soffit this week — payments start at $19/mo."*
- Canal: Facebook Ads, Google (keyword: "HOA soffit violation Orlando")

**Perfil 3 — Vendendo a casa (urgência financeira)**
- URL: `/financing?ref=selling`
- Headline: *"Inspector Found It. Buyer's Waiting. Fix It Fast."*
- Subheadline: *"Don't lose your sale over soffit. We move fast. Pay later, starting at $19/mo."*
- Canal: Google (keyword: "fix soffit before selling house Orlando")

**Perfil 4 — Água/Mofo/Goteira (medo de dano maior)**
- URL: `/financing?ref=water`
- Headline: *"Water Gets In. Mold Follows. Fix the Soffit First."*
- Subheadline: *"A small soffit gap becomes a big mold problem fast. Fix it today — $19/mo, approved in 60 seconds."*
- Canal: Facebook Ads, Google (keyword: "soffit water damage repair Orlando")

**Perfil 5 — Estética / Casa velha (orgulho)**
- URL: `/financing?ref=curb`
- Headline: *"Your House Is Worth More Than It Looks."*
- Subheadline: *"New soffit and fascia transforms your curb appeal overnight. Starting at $19/mo — check your rate now."*
- Canal: Facebook Ads, Nextdoor, Instagram

---

## Estrutura da Página /financing (página principal)

### Seção 1 — Hero (fundo navy, diagonal bottom)
- **Número âncora gigante:** `$19` com `/mo` ao lado em laranja — elemento mais visível da página
- **Headline:** *"Your Home Deserves It. Your Wallet Doesn't Have To Feel It."*
- **Subheadline:** *"Get your soffit and fascia fixed today. Pay as little as $19/mo. Check your rate in 60 seconds — no impact on your credit score."*
- **Botão primário (laranja, grande):** `Check My Rate — It's Free` → referral link Acorn Finance
- **Badges de confiança em linha:** `✓ Soft Credit Check` · `✓ No Hidden Fees` · `✓ 30+ Lenders` · `✓ Approved in 60 Seconds`
- **Disclaimer legal** (texto pequeno, cinza, abaixo do botão):
  > *"Estimated payments shown for illustrative purposes only. Example: $1,500 project / 144 months / ~9.9% APR. Final terms, APR, and approval depend on creditworthiness as determined by Acorn Finance lending partners. Bubbles Enterprise is not a lender and makes no guarantee of approval, rate, or loan terms. All services subject to our Service Agreement."*

### Seção 2 — Como funciona (3 passos, fundo branco)
1. **Fill out a short form** — Less than 2 minutes on your phone
2. **See your real offers** — Compare rates from 30+ lenders. No credit impact.
3. **Choose & schedule** — Accept an offer and we book your project

### Seção 3 — Calculadora de Parcelas Interativa (fundo cinza claro)
Cliente digita o valor do projeto e vê as parcelas calculadas na hora (JavaScript puro, sem API).
- Input: slider ou campo de texto com valor do projeto ($1.000 – $15.000)
- Output automático: parcela em 36, 84 e 144 meses (coluna 144 meses em destaque laranja)
- Fórmula: PMT com ~9.9% APR
- Abaixo da calculadora: botão `Get My Real Rate` → referral link Acorn

Valores de referência (~9.9% APR):
| Projeto | 36 meses | 84 meses | **144 meses** |
|---|---|---|---|
| $1,500 | ~$48/mo | ~$24/mo | **~$19/mo** |
| $3,000 | ~$96/mo | ~$48/mo | **~$38/mo** |
| $4,500 | ~$144/mo | ~$72/mo | **~$57/mo** |
| $8,000 | ~$256/mo | ~$128/mo | **~$101/mo** |
| $12,000 | ~$384/mo | ~$192/mo | **~$152/mo** |

### Seção 4 — Por que financiar? (4 cards, fundo navy)
- **Start Now, Pay Later** — Don't wait months to save up. Your home is protected while you pay over time.
- **Soft Pull Only** — Checking your rate won't affect your credit score. Only a hard pull when you accept.
- **30+ Lenders Competing** — You get real offers from multiple lenders at once. Best rate wins.
- **FICO 550+ Accepted** — Even if your credit isn't perfect, you may still qualify.
- **Lock In Today's Price** — Financing your project locks in current material and labor rates, protecting you from future price increases. Aluminum and vinyl prices rise constantly — what costs $X today may cost more next month.

### Seção 5 — Prova Social (fundo branco)
- Banner de credibilidade no topo da seção: *"Join 500+ homeowners in Central Florida who trust Bubbles Enterprise for their home protection."*
- Depoimentos reais de clientes — adicionar quando tiver. Placeholder por enquanto:
> *"I didn't think I could afford new soffit this year. Bubbles worked with me on financing and we got it done the same week. Best decision I made for my house."*
> — **Maria S., Winter Park FL** ⭐⭐⭐⭐⭐

### Seção 6 — FAQ (fundo cinza claro)
- **"What is a soft pull?"** → A soft credit check lets you see your rate without any impact on your score. A hard pull only happens when you formally accept a loan offer.
- **"How fast is the approval?"** → Pre-approval in 60 seconds. Funding typically arrives 24–48 hours after you accept an offer.
- **"My credit isn't great. Do I still qualify?"** → Possibly, yes. Acorn Finance works with 30+ lenders, some of which accept FICO scores as low as 550.
- **"What's the minimum project amount?"** → $1,000.
- **"Does Bubbles Enterprise handle the loan?"** → No. Bubbles Enterprise is not the lender. Acorn Finance connects you with independent lending partners. We simply offer this as a convenience for our customers.
- **"What if I'm not approved?"** → No problem — call us at (407) 715-1790. We may be able to work out a payment schedule directly for qualified customers.

### Seção 7 — CTA Final (fundo navy, foto com overlay)
- **Headline:** *"Ready to Protect Your Home?"*
- **Subheadline:** *"Check your rate now. No commitment. No credit impact. Takes 60 seconds."*
- **Botão grande laranja:** `Apply for Financing` → referral link Acorn Finance
- Texto abaixo: *"Or call us directly: (407) 715-1790"*

---

## Mobile — Botão Sticky
- **Dois botões lado a lado** fixos no rodapé mobile (`< md`):
  - Esquerda: ícone de telefone `📞 (407) 715-1790` — `href="tel:4077151790"` — fundo navy
  - Direita: `Check My Rate →` — referral link Acorn Finance — fundo laranja (maior, ocupa 65% da largura)
- Aparece apenas na página /financing, não interfere no resto do site
- Sombra forte no topo para destacar do conteúdo
- Evento GA4 `financing_cta_click` no botão laranja | `financing_call_click` no botão de telefone
- Justificativa: cliente com dúvida técnica antes de aplicar liga na hora — o contato direto fecha a venda que o banco às vezes trava

---

## Integrações no Site

### Menu Principal (Header)
- Link **"Financing"** no nav principal (entre Services e Calculator)
- Mobile: incluir no menu hamburguer

### Footer
- Link "Financing Options" na coluna Services — **já implementado** ✅ (adicionar quando criar a página)

### Página /contact
- Linha discreta abaixo do formulário: *"Financing available — check your rate in 60 seconds."* com link para /financing

### Página /terms
- Âncora `#service-agreement` para o link do disclaimer funcionar — verificar se existe

---

## Visual da Página
- Paleta: bubble-navy (#1B2A4A), bubble-primary laranja (#F97316), branco, cinza claro
- `$19` gigante no hero — tamanho `text-8xl` ou maior, cor laranja
- Tom: direto, humano, não bancário — fala com dono de casa, não com investidor
- Ícones: lucide-react (CheckCircle, Clock, DollarSign, Shield, Star, Phone)
- Logo/badge Acorn Finance — usar assets públicos do site deles
- Sem formulário próprio — tudo redireciona para portal Acorn

---

## Rastreio GA4
- Evento `financing_cta_click` em TODOS os botões CTA da página
- Evento `financing_calculator_interaction` quando cliente usa o slider/input
- No GA4, criar meta de conversão baseada em `financing_cta_click` para rastrear ROI dos anúncios

---

## SEO — Metadata da Página /financing
```
title: "Soffit & Fascia Financing Orlando | Starting at $19/mo | Bubbles Enterprise"
description: "Finance your soffit and fascia project with payments starting at $19/mo. Instant pre-approval, soft credit check — no impact on your score. Serving Orlando & Central Florida."
```
Keywords alvo: "soffit financing Orlando", "soffit payment plan", "soffit repair no credit check", "fascia financing Florida", "home improvement financing Orlando"

---

## Schema JSON-LD da Página /financing
```json
{
  "@context": "https://schema.org",
  "@type": "FinancialProduct",
  "name": "Soffit & Fascia Financing",
  "description": "Home improvement financing for soffit and fascia projects in Orlando, FL. Starting at $19/mo.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Bubbles Enterprise Soffit & Fascia",
    "telephone": "+14077151790"
  },
  "feesAndCommissionsSpecification": "No fees charged to the homeowner by Bubbles Enterprise. Financing provided by Acorn Finance lending partners.",
  "annualPercentageRate": "6.99 to 35.99"
}
```

---

## Checklist de Implementação

### Pré-requisitos (Eduardo faz)
- [ ] Criar conta Acorn Finance em acornfinance.com/contractors
- [ ] Pegar referral link único (`acornfinance.com/apply?partner=XXXXX`) → substituir `ACORN_FINANCE_URL` no topo de `src/app/financing/page.tsx`
- [ ] Confirmar prazo máximo real da Acorn após cadastro (esperado: 144 meses)
- [ ] Confirmar se tem widget embed disponível (opcional — link direto já serve)
- [ ] Coletar depoimentos REAIS de clientes para substituir a seção de stats (500+, 5★, 1-day) — seção de reviews hoje é honesta mas sem depoimentos textuais
- [ ] **Facebook Pixel ID** — criar conta Meta Business → Gerenciador de Anúncios → Events Manager → criar Pixel → trazer o ID numérico para a IA instalar no `src/app/layout.tsx`

### Desenvolvimento (IA faz quando Eduardo trouxer o link)
- [x] Criar `src/app/financing/page.tsx` com todas as 7 seções ✅
- [x] Implementar calculadora de parcelas interativa (slider + cálculo JS) ✅
- [x] Botão sticky mobile `fixed bottom-0` exclusivo da página /financing ✅
- [x] Eventos GA4: `financing_cta_click`, `financing_calculator_interaction`, `financing_call_click` ✅
- [x] Exit Intent — popup com WhatsApp + telefone quando mouse sai pelo topo ✅
- [x] Schema JSON-LD FinancialProduct na página (`src/app/financing/layout.tsx`) ✅
- [x] Adicionar link "Financing" no Header.tsx (desktop + mobile) ✅
- [x] Adicionar "Financing Options" no Footer.tsx coluna Services ✅
- [x] Verificar/criar âncora `#service-agreement` na página /terms ✅
- [x] Hero dinâmico por `?ref=` (pest/hoa/selling/water/curb) ✅
- [x] Âncoras dinâmicas ($19 para reparos, $38 para HOA/R&R) ✅
- [x] Build limpo confirmado ✅
- [ ] Substituir `ACORN_FINANCE_URL` pela URL real da Acorn
- [ ] Instalar Facebook Pixel no `src/app/layout.tsx` (aguarda Pixel ID do Eduardo)
- [ ] Adicionar depoimentos reais quando Eduardo tiver os textos
- [ ] Adicionar menção discreta na página /contact ("Financing available...")
- [ ] Deploy completo após substituição da URL Acorn

---

## Hero Dinâmico por Parâmetro de URL (decisão confirmada — OpenClaw + Claude)
**NÃO criar 5 páginas separadas.** Usar página única `/financing` com hero dinâmico baseado no `?ref=` da URL.

**Como funciona tecnicamente:**
- `useSearchParams()` do Next.js lê o parâmetro `ref` da URL
- Se `ref=pest` → hero muda headline + subheadline + (opcional) foto de fundo
- O resto da página (tabela, FAQ, CTA, disclaimer) fica igual em todos os casos
- GA4 já rastreia qual `?ref=` teve mais cliques no botão — dados automáticos

**Mapeamento de gatilhos dinâmicos:**
| ref | Headline | Subheadline |
|---|---|---|
| `pest` | *"Something's Living in Your Soffit. Fix It Today, Pay $19/mo."* | *"Open holes are an open invitation. Approved in 60 seconds."* |
| `hoa` | *"HOA Notice? Get It Fixed Before the Fine."* | *"Don't let a letter turn into a fine. Payments start at $19/mo."* |
| `selling` | *"Inspector Found It. Buyer's Waiting. Fix It Fast."* | *"Don't lose your sale over soffit. Pay later, starting at $19/mo."* |
| `water` | *"Water Gets In. Mold Follows. Fix the Soffit First."* | *"A small gap becomes a big problem fast. $19/mo, approved in 60 seconds."* |
| `curb` | *"Your House Is Worth More Than It Looks."* | *"New soffit transforms your curb appeal overnight. Starting at $19/mo."* |
| *(default)* | *"Your Home Deserves It. Your Wallet Doesn't Have To Feel It."* | *"Get fixed today. Pay as little as $19/mo. Check your rate in 60 seconds."* |

**Vantagens:**
- Manutenção em um lugar só (disclaimer, preços, FAQ)
- SEO concentrado em `/financing` — não dispersa autoridade
- GA4 rastreia qual `?ref=` converte mais automaticamente
- Quando tiver dados (30+ dias), criar landing page dedicada só para o perfil campeão

**Fase 2 (só após dados do GA4):** se um `ref` dominar com 60%+ do tráfego, aí criar página dedicada para esse perfil com fotos, depoimentos e copy ultra-específicos.

---

## Fallback — Cliente Negado pela Acorn
Se cliente não for aprovado, a Acorn redireciona de volta. Na página /financing, seção FAQ já cobre isso:
*"Call us at (407) 715-1790 — we may work out a payment schedule directly."*
Eduardo decide caso a caso se oferece parcelamento direto ou não.

---

## Notas Finais
- Stripe (depósito online): decisão adiada. Implementar depois da vistoria presencial, não direto da calculadora.
- Acorn Finance é gratuita para o contractor — zero risco financeiro para testar.
- Se volume de jobs financiados crescer, reavaliar PowerPay como opção complementar (menor taxa: 4.99%-14.99%).
- Landing pages por campanha são fase 2 — só fazer quando tiver anúncios rodando e dados do GA4.
