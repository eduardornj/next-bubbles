# GUIA SEO — O que Eduardo precisa fazer (manual)

> 🔐 **CONFIDENCIAL** — Senhas, keys e credenciais. Guardar com segurança.
> Não fazer commit no git público. Protegido no .gitignore.
> Atualizado em 14 de Março de 2026.

---

## COMO USAR ESTE GUIA

- Cada tópico é independente — faça na ordem que preferir
- Prioridade: URGENTE > IMPORTANTE > QUANDO DER
- Tempo estimado total: ~3 horas espalhadas ao longo de 1-2 semanas
- Marque [x] quando completar cada item

---

# URGENTE (esta semana)

---

## 1. ~~Facebook Pixel — Instalar no site~~ ✅ CONCLUÍDO

**Status: 100% FEITO — nada mais a fazer aqui.**

**O que foi feito:**
- [x] Pixel criado no Meta Business Suite (Pixel ID: `1981946709023806`)
- [x] Código do Pixel instalado no site (`[locale]/layout.tsx`)
- [x] Evento **PageView** — dispara automaticamente em todas as 180 páginas
- [x] Evento **Lead** — dispara quando formulário é enviado com sucesso:
  - Formulário de Contato (`/contact`) → `Lead` com `content_name: 'Contact Form'`
  - Formulário de Emergência (`/contact/emergency`) → `Lead` com `content_name: 'Emergency Repair'`
  - Calculator Quote (`/calculator`) → `Lead` com `content_name: 'Calculator Quote'`
- [x] Evento **Contact (phone)** — dispara automaticamente em todos os 92+ links `tel:` do site
- [x] Evento **Contact (whatsapp)** — dispara automaticamente em todos os links WhatsApp (`wa.me`)
- [x] Preconnect para `connect.facebook.net` (carregamento mais rápido)
- [x] Fallback `<noscript>` para navegadores sem JavaScript
- [x] Tipo global TypeScript declarado (`src/types/global.d.ts`)

**O que o Pixel rastreia agora:**

| Evento | Quando dispara | Onde |
|--------|---------------|------|
| PageView | Toda visita a qualquer página | Todas as 180 páginas |
| Lead | Formulário enviado com sucesso | Contato, Emergência, Calculator |
| Contact (phone) | Clique em link de telefone | 92+ links em todo o site |
| Contact (whatsapp) | Clique em link WhatsApp | Todos os links wa.me |

**Verificação de domínio:**
- [x] Domínio `bubblesenterprise.com` verificado no Meta Business Suite (8 Mar 2026)
- [x] TXT record DNS: `facebook-domain-verification=k5i00hkiim19bv0lw2chy55rcp0775`
- [x] Status: **Verified** com controle total

**Após o deploy:**
- Os dados vão aparecer no Gerenciador de Eventos do Meta em até 30 minutos
- Para verificar se está funcionando: instale a extensão **Meta Pixel Helper** no Chrome e acesse o site

---

## 2. ~~Google Business Profile — Criar perfil~~ ⚠️ SUSPENSO — 2a APELAÇÃO SUBMETIDA

**Status: SUSPENSO — 2a apelação submetida 2026-03-12 via eduardornj@gmail.com (EN/US). Case ID: [1-8338000040261]. Aguardando resposta até ~2026-03-26.**

**O que foi feito:**
- [x] Perfil criado no Google Maps: `Bubble Soffit and Fascia`
- [x] Link: `https://www.google.com/maps/place/Bubble+Soffit+and+Fascia/data=!4m2!3m1!1s0x0:0x85136cefb8389b4b`
- [x] `sameAs` adicionado no schema do site (layout + homepage)
- [x] Perfil corrigido: nome, descrição, categoria, áreas de cobertura (2026-03-12)
- [x] 1a apelação (via contact@ em português) — NEGADA (roteou pra equipe Google Brasil)
- [x] 2a apelação submetida via eduardornj@gmail.com (EN/US) com 3 docs (Sunbiz, COI, Tax)
- [x] Email de confirmação recebido em inglês — Case ID: [1-8338000040261]

**O que é:** Seu perfil no Google Maps. Quando alguém pesquisa "soffit repair orlando" no Google, seu perfil aparece no mapa com fotos, reviews e informações.

**Por que é urgente:** O Google AI Overviews (aquela resposta da IA no topo do Google) puxa informações do GBP. Se você não posta, o Google acha que o negócio está inativo. Gemini e Google AI Overviews **priorizam negócios com posts recentes**.

**O que falta:**
- [ ] Verificar se todas as informações estão preenchidas (NAP, horário, serviços, website)
- [ ] Subir 5-10 fotos de projetos
- [ ] Primeiro post feito
- [ ] Lembrete no celular para postar a cada 10 dias

**Tempo:** 15 minutos a cada 10-14 dias

**Passo a passo para postar:**

1. Acesse [business.google.com](https://business.google.com)
2. Clique no seu negócio

**O que postar (ideias prontas — copie e use):**

**Post 1 — Projeto recente:**
> "Just completed a full soffit and fascia remove & replace in [bairro/cidade]. Aluminum soffit with continuous ventilation for maximum attic airflow. Licensed & Insured. Free estimates: (407) 715-1790"
> [Anexe 2-3 fotos do projeto]

**Post 2 — Dica educativa:**
> "Did you know? Damaged soffit is the #1 entry point for raccoons and squirrels in Central Florida homes. If you see gaps, holes, or sagging panels, call us before animals move in. Free inspection: (407) 715-1790"

**Post 3 — Serviço de emergência:**
> "Storm damage? We offer same-week emergency soffit repairs across Central Florida. Animal intrusion, water damage, wind damage — we fix it fast. Call (407) 715-1790"

**Post 4 — Material/expertise:**
> "Aluminum vs Vinyl soffit — which is better for Florida? Aluminum resists humidity and lasts 20-30 years. Vinyl is budget-friendly at 15-20 years. We install both. Free estimate: (407) 715-1790"

**Regras:**
- Sempre inclua 1-3 fotos reais (nunca stock photos)
- Sempre inclua o telefone (407) 715-1790
- Poste no mínimo a cada 14 dias (ideal: a cada 10 dias)
- Varie entre projetos, dicas, e promoções

- [x] Perfil criado no Google Maps
- [x] sameAs instalado no site
- [ ] Informações completas (NAP, horário, serviços, website)
- [ ] 5-10 fotos subidas
- [ ] Primeiro post feito
- [ ] Lembrete no celular para postar a cada 10 dias

---

## 3. ~~Bing Webmaster Tools — Verificar site + AI Performance~~ ✅ CONCLUÍDO

**Status: 100% FEITO — site verificado + sitemap submetido.**

**O que foi feito:**
- [x] Site adicionado no Bing Webmaster Tools
- [x] Meta tag de verificação copiada (`CB1FE7A80A1DB0E8717B86B5BD81AE24`)
- [x] Meta tag instalada no código do site (`[locale]/layout.tsx`)
- [x] Deploy feito
- [x] Site verificado com sucesso
- [x] Sitemap submetido (6 Mar 2026 — 115 URLs descobertas, agora 159 URLs)
- [x] AI Performance — não disponível para a conta ainda (Bing libera gradualmente, checar de novo em 30 dias)

**IndexNow:**
- ✅ Script pronto: `bash scripts/indexnow-ping.sh`
- Roda após cada deploy — notifica Bing, Yandex, Seznam e Naver instantaneamente

---

# IMPORTANTE (próximas 2 semanas)

---

## 4. Yelp — Criar/Completar perfil ✅ CONCLUÍDO (2026-03-12)

**Status: Perfil completo — nome corrigido, fotos, descrição, horários, tudo preenchido.**

**O que é:** O Yelp é a fonte #1 que Perplexity e ChatGPT usam para recomendar negócios locais. Se alguém perguntar "best soffit repair in Orlando" no ChatGPT, ele puxa do Yelp.

**Por que importa:** Pesquisa mostra que ChatGPT cita negócios com Yelp profile completo 3x mais do que sem.

**O que foi feito:**
- [x] Perfil criado/reivindicado ✅ Reativado em 2026-03-11
- [x] Nome corrigido de "Bubble Enterprises Soffit" → "Bubbles Enterprise Soffit & Fascia" (2026-03-12)
- [x] 7 fotos subidas com legendas SEO otimizadas (2026-03-12)
- [x] Categorias: Roofing, Siding, General Contractors
- [x] Horário: Mon-Fri 8AM-7PM, Sat 8AM-12PM, Sun Closed
- [x] Website: bubblesenterprise.com
- [x] Phone: (407) 715-1790
- [x] About/Specialties atualizado — gutters REMOVIDO, "aluminum" adicionado
- [x] History atualizado — nome corrigido, gutters removido
- [x] NAP conferido (igual ao site e Facebook)

**IMPORTANTE — NAP Consistente:**
O nome, endereço e telefone devem ser **EXATAMENTE iguais** em todas as plataformas (Google, Yelp, site). Até a formatação importa:
- Telefone: sempre `(407) 715-1790` (não `407-715-1790` ou `4077151790`)
- Nome: sempre `Bubbles Enterprise Soffit & Fascia` (não "Bubbles Enterprise LLC" ou "Bubbles Soffit")

**Pendente:**
- [ ] Pedir reviews de clientes no Yelp
- [ ] Responder toda review que receber

---

## 4b. Facebook Business Page ✅ ATUALIZADO (2026-03-12)

**Status: Bio, especialidades, promoção e áreas de atendimento atualizados.**

**O que foi feito:**
- [x] Bio atualizada: "Bubbles Enterprise / Soffit & Fascia Specialist / Installation • Repair • Replacement"
- [x] 7 especialidades adicionadas (Aluminum Soffit/Fascia Install/Repair, Replacement, New Construction, Free Estimates)
- [x] Promoção adicionada: "Free Estimate - No Obligation"
- [x] Áreas de atendimento corrigidas: 10 cidades Central FL (Tampa REMOVIDA)
- [x] Horário atualizado
- [x] Gutters removido da bio (era motivo de problema no GBP)

**Pendente:**
- [ ] Mudar nome da página de "Bubble Soffit" para "Bubbles Enterprise Soffit & Fascia"
- [ ] Pedir reviews de clientes no Facebook

---

## 5. ~~Angi~~ ❌ CANCELADO ✅ REMOVIDO

**Decisão: não vamos mais trabalhar com o Angi.**

- [x] Referências do Angi removidas do código do next-bubbles (já estava limpo)
- [x] Removido de todas as plataformas (Facebook, Yelp, etc.)

---

## 6. ~~Redes sociais — Links para schema `sameAs`~~ ✅ CONCLUÍDO

**Status: 100% FEITO — links instalados no schema JSON-LD.**

**O que foi feito:**
- [x] Links recebidos do Eduardo
- [x] `sameAs` adicionado no schema LocalBusiness global (`[locale]/layout.tsx`)
- [x] `sameAs` adicionado no schema da homepage (`page.tsx`)

**Links instalados:**
- Instagram: `https://www.instagram.com/bubblesoffit`
- Facebook: `https://www.facebook.com/bubblesoffit`
- Yelp: `https://www.yelp.com/biz/bubble-enterprises-soffit-orlando`
- Nextdoor: `https://nextdoor.com/page/bubble-enterprises-soffit-fascia`

**Nota sobre Yelp:** Perfil sem avaliações funciona perfeitamente para `sameAs`. O Google só precisa confirmar que o perfil existe e pertence à mesma empresa. As avaliações vêm com o tempo (ver item 8).

**Opcional futuro — se criar mais perfis, me mande para eu adicionar:**

| Rede | Status |
|------|--------|
| Google Maps | ✅ Instalado — `https://www.google.com/maps/place/Bubble+Soffit+and+Fascia/...` |
| YouTube | Pendente — se criar canal |
| LinkedIn | Pendente — se criar página |
| Nextdoor | ✅ Instalado — `https://nextdoor.com/page/bubble-enterprises-soffit-fascia` |

---

## 7. ~~Nextdoor — Criar business page~~ ✅ CONCLUÍDO

**Status: 100% FEITO — página criada e link adicionado no `sameAs`.**

**O que foi feito:**
- [x] Página criada no Nextdoor
- [x] Link: `https://nextdoor.com/page/bubble-enterprises-soffit-fascia`
- [x] `sameAs` adicionado no schema do site (layout + homepage)
- [x] Bio personalizada para público de vizinhança
- [x] 5 fotos de projetos subidas
- [x] Negócio verificado (Sunbiz + documento de identidade)
- [x] Website, telefone, email, horário preenchidos

**O que era:** Rede social de vizinhança. Seus clientes estão lá. Quando alguém posta "alguém conhece um cara de soffit?", sua página aparece.

**Tempo:** 15 minutos

**Passo a passo:**

1. Acesse [business.nextdoor.com](https://business.nextdoor.com)
2. Crie uma business page
3. Use as MESMAS informações (NAP consistente!)
4. Peça recomendações de clientes pelo Nextdoor

- [x] Página criada
- [x] Informações completas

---

# QUANDO DER (próximo mês)

---

## 8. Reviews — Pedir para clientes 🔄 EM ANDAMENTO

**O que é:** Reviews são o combustível do SEO local. Google, Yelp, Perplexity — todos priorizam negócios com mais reviews positivas.

**O que foi feito:**
- [x] Página `/review` criada no site com todas as plataformas
- [x] Link do Google Review obtido: `https://g.page/r/CUubOLjvbBOFEAE/review`
- [x] Link adicionado no footer ("Leave a Review") e na homepage
- [x] GA4 tracking nos cliques (evento `review_click` com nome da plataforma)
- [x] Copy cultural personalizada (EN, ES, PT)

**Links de review (todos funcionando):**

| Plataforma | Link |
|-----------|------|
| Google | `https://g.page/r/CUubOLjvbBOFEAE/review` |
| Yelp | `https://www.yelp.com/writeareview/biz/bubble-enterprises-soffit-orlando` |
| Facebook | `https://www.facebook.com/bubblesoffit/reviews` |
| Nextdoor | `https://nextdoor.com/choose_address/?next=%2Fpages%2Fbubble-enterprises-soffit-fascia%2F` |
| **Página do site** | **`https://bubblesenterprise.com/review`** (todos os links em uma página) |

**Mensagem para mandar por WhatsApp após completar um serviço:**

> "Hi [nome], thank you for choosing Bubbles Enterprise! We hope you're happy with your new soffit. If you have a moment, we'd really appreciate a quick review — it helps other homeowners find us:
>
> 👉 bubblesenterprise.com/review
>
> Thank you! 🙌"

**Versão em português (para clientes brasileiros):**

> "Oi [nome], obrigado por escolher a Bubbles! Esperamos que tenha ficado satisfeito com o serviço. Se puder deixar uma avaliação rápida, ajuda muito:
>
> 👉 bubblesenterprise.com/pt/review
>
> Obrigado! 🙌"

**Versão em espanhol:**

> "Hola [nombre], ¡gracias por confiar en Bubbles Enterprise! Esperamos que esté contento con el trabajo. Si tiene un momento, nos ayudaría mucho su opinión:
>
> 👉 bubblesenterprise.com/es/review
>
> ¡Gracias! 🙌"

**Dicas:**
- Mande no dia seguinte ao serviço (quando a experiência está fresca)
- Não peça 5 estrelas — peça uma "avaliação honesta"
- Responda TODA review em 24 horas (positiva e negativa)
- Meta: 2-3 reviews novas por mês
- Use a página `/review` do site — é mais fácil que mandar vários links

- [x] Página /review criada no site
- [x] Links de todas as plataformas funcionando
- [ ] Template salvo no celular
- [ ] Primeiros 3 reviews pedidos

---

## 9. Testar suas citações AI

**O que é:** Verificar se as IAs já estão recomendando seu negócio.

**Tempo:** 10 minutos (faça uma vez por mês)

**Passo a passo:**

Abra cada um destes e faça as perguntas abaixo:

| Plataforma | Link |
|-----------|------|
| ChatGPT | [chat.openai.com](https://chat.openai.com) |
| Perplexity | [perplexity.ai](https://perplexity.ai) |
| Google (AI Overview) | [google.com](https://google.com) |
| Bing Copilot | [bing.com/chat](https://bing.com/chat) |
| Claude | [claude.ai](https://claude.ai) |

**Perguntas para testar:**

1. "Who is the best soffit and fascia company in Orlando?"
2. "I need soffit repair in Orlando FL, who should I call?"
3. "Soffit repair near Kissimmee Florida"
4. "How much does soffit replacement cost in Orlando?"
5. "Emergency soffit repair Orlando"

**O que observar:**
- Seu negócio apareceu? ✅ ou ❌
- Qual posição? (1o citado, 2o, 3o...)
- Quais concorrentes aparecem?
- Que informações a IA mostra sobre você? (telefone? preço? reviews?)

**Anote os resultados** e me mande — isso ajuda a entender onde melhorar.

- [ ] Teste feito no ChatGPT
- [ ] Teste feito no Perplexity
- [ ] Teste feito no Google
- [ ] Teste feito no Bing Copilot
- [ ] Resultados anotados

---

## 10. Acorn Finance — Trazer a URL

**O que é:** A página `/financing` do site já está pronta, mas precisa do link real do Acorn Finance para funcionar.

**Tempo:** 5 minutos

**Passo a passo:**

1. Acesse sua conta Acorn Finance
2. Copie o link do seu formulário de aplicação (tipo `https://app.acornfinance.com/apply/xxxxx`)
3. Me mande o link
4. Eu substituo o placeholder `ACORN_FINANCE_URL` no código

- [ ] URL do Acorn Finance enviada

---

## 17. UTM — Marketing Campaign Tracking ✅ ATIVO

**Status: 🚀 IMPLEMENTADO (14 Mar 2026)**

**O que é:** UTM (Urchin Tracking Module) são parâmetros que rastreiam a origem de cada visitante no Google Analytics.

**Exemplo:**
```
bubblesenterprise.com?utm_source=facebook&utm_medium=post&utm_campaign=spring_promo_2026
```

**O que você vai conseguir rastrear:**
- [x] De qual plataforma vem o visitante (Facebook, WhatsApp, LinkedIn, etc)
- [x] Qual tipo de post/conteúdo (post, story, email, etc)
- [x] Qual campanha/iniciativa (spring_promo, emergency_repair, etc)
- [x] Qual elemento específico (botão topo, imagem hero, etc)

**Ferramentas disponíveis:**

### 1️⃣ **Gerador Visual (Copiar/Colar)**
- URL: `bubblesenterprise.com/utm-generator`
- Selecione: plataforma, tipo, campanha
- Clique: Copiar
- Cole no seu post/WhatsApp

### 2️⃣ **Guia Completo com URLs Prontas**
- Arquivo: `UTM-GUIA-COMPLETO.md`
- Contém templates prontos para cada canal
- Apenas substitua `[CAMPANHA]` pelo nome da sua

### 3️⃣ **Função TypeScript (Para Devs)**
- Arquivo: `src/lib/utm-generator.ts`
- Use em componentes para gerar URLs automaticamente
- Templates prontos: `UTM_TEMPLATES`

**Como usar (Simples):**

1. Vá em `bubblesenterprise.com/utm-generator`
2. Preencha:
   - Plataforma: "Facebook"
   - Tipo: "post"
   - Campanha: "spring_promo_2026"
3. Clique "Copiar"
4. Cole no seu post

**Como usar (Avançado - Dev):**

```typescript
import { generateUTMUrl, UTM_TEMPLATES } from '@/lib/utm-generator';

const fbUrl = generateUTMUrl(
  'bubblesenterprise.com',
  UTM_TEMPLATES.facebook.post('spring_promo_2026')
);
// Resultado: https://bubblesenterprise.com?utm_source=facebook&utm_medium=post&utm_campaign=spring_promo_2026
```

**Canais suportados:**
- ✅ Facebook (posts, stories, ads)
- ✅ WhatsApp (direct share)
- ✅ LinkedIn (posts, company page)
- ✅ Instagram (posts, stories)
- ✅ Email (newsletter, follow-up)
- ✅ Nextdoor (posts)
- ✅ Google Business Profile (posts)
- ✅ SMS (text messages)
- ✅ Referral (customer shares)

**Rastrear resultados:**
1. Espere 1-2 semanas com UTM em uso
2. Acesse: Google Analytics 4 → Aquisição → Resumo da campanha
3. Veja qual canal gera mais leads (qualify_lead)
4. Foque nos canais que convertem

- [x] Gerador visual criado (`/utm-generator`)
- [x] Guia completo documentado (`UTM-GUIA-COMPLETO.md`)
- [x] Função TypeScript pronta (`src/lib/utm-generator.ts`)
- [x] Exemplos para cada plataforma
- [ ] Começar a usar UTM em todos os posts
- [ ] Verificar resultados no GA4 após 2 semanas

---

## 11. ~~Cloudflare — Verificar se bots AI estão bloqueados~~ ✅ CONCLUÍDO

**Status: 100% FEITO — não usa Cloudflare, bots AI não estão bloqueados.**

**O que foi verificado:**
- [x] Conta Cloudflare acessada (dash.cloudflare.com)
- [x] Nenhum domínio conectado ao Cloudflare
- [x] `bubblesenterprise.com` roda direto no DirectAdmin (sem CDN intermediário)
- [x] Bots AI (ChatGPT, Perplexity, Claude) têm acesso livre ao site

**Conclusão:** Como o site não passa pelo Cloudflare, nenhum bot está sendo bloqueado. O `robots.txt` do site já permite todos os crawlers AI.

---

## 12. ~~OG Image — Criar imagem real para redes sociais~~ ✅ CONCLUÍDO

**Status: 100% FEITO — imagem OG gerada automaticamente pelo Next.js.**

**O que foi feito:**
- [x] Criado `src/app/opengraph-image.tsx` que gera PNG 1200x630 dinamicamente
- [x] Inclui gradient, texto "Bubbles Enterprise", badges de confiança
- [x] Todas as referências atualizadas (layout, homepage EN, homepage i18n)
- [x] Formato PNG (compatível com Facebook, LinkedIn, Twitter, WhatsApp)

**Opcional futuro:** Substituir por foto real de projeto usando Canva (1200x630 PNG/JPG) se preferir imagem com foto em vez de design gerado.

---

## 13. ~~Google Search Console — Verificar site + Sitemap~~ ✅ CONCLUÍDO

**Status: 100% FEITO — site verificado via DNS + sitemap submetido.**

**O que foi feito:**
- [x] Conta criada no Google Search Console (contact@bubblesenterprise.com)
- [x] Verificação via TXT record DNS no Cloudflare
- [x] Sitemap submetido: `https://bubblesenterprise.com/sitemap.xml` (159 URLs)
- [x] Cobre todas as páginas EN + ES + PT + blog + áreas por cidade

**O que o Google Search Console faz:**
- Mostra quais páginas estão indexadas no Google
- Alerta erros de crawling (404, 500, etc.)
- Mostra queries de busca que trazem tráfego
- Relata Core Web Vitals e problemas de mobile
- Diferente do Google Analytics (GA4 = tráfego, GSC = indexação)

**Verificar periodicamente:**
- Cobertura de páginas (quantas indexadas vs submetidas)
- Erros de rastreamento
- Performance de busca (queries, cliques, impressões)

---

## 14. Mobile Responsiveness Audit — Correções aplicadas ✅ CONCLUÍDO

**Status: 100% FEITO — 7 problemas corrigidos + deploy feito (8 Mar 2026).**

**O que foi corrigido:**
- [x] Viewport meta tag explícita adicionada (`[locale]/layout.tsx`)
- [x] Calculator page: nav bar padding + result row layout responsivo
- [x] Footer: social icons com touch target 44px + badges com flex-wrap
- [x] Contact forms (4 arquivos): grid de preview de fotos responsivo (`grid-cols-3 sm:grid-cols-5`)
- [x] Homepage gallery: `sizes` attribute otimizado para mobile (`50vw` em vez de `100vw`)

---

## 15. GA4 — Credenciais e Configuração

**Measurement ID:** `G-8CB2E6CK1H`
**Property ID:** `526633989`
**Google Cloud Project:** `gen-lang-client-0945367207`

**Service Account:**
- Email: `bubbles-ga4-admin@gen-lang-client-0945367207.iam.gserviceaccount.com`
- Arquivo JSON: `next-bubbles/seo/gen-lang-client-0945367207-0ce0a4e79e36.json`
- Status: ✅ Adicionado como Editor no GA4

---

## 16. reCAPTCHA v3 — Bot Protection ✅ ATIVO

**Status: 🚀 DEPLOYED EM PRODUÇÃO (14 Mar 2026, ~11:45 AM)**

**O que é:** Proteção invisível contra bots nos formulários. Usuários não veem nem clicam em nada — reCAPTCHA v3 analisa automaticamente o comportamento.

**Google Cloud Project:** `Bubble Soffit Recaptcha`

**Site Key (pública — pode colocar no código):**
```
6LfcYYosAAAAAFuEjO8kGDIqOjwsXMoKmWgBGyuh
```

**Secret Key (privada — guardar com segurança):**
```
6LfcYYosAAAAABxUgMSN9TrBgEjZba85LIlRGOl0
```

**Formulários protegidos:**
- [x] Contact Form (`src/app/[locale]/contact/ContactClient.tsx`) — ✅ ATIVO
- [x] Calculator Form (`src/app/[locale]/calculator/CalculatorClient.tsx`) — ✅ ATIVO
- [x] Emergency Repair Form (`src/app/[locale]/contact/emergency/EmergencyClient.tsx`) — ✅ ATIVO

**Implementação concluída:**
- [x] Script reCAPTCHA adicionado no layout.tsx
- [x] Token capture em todos os 3 formulários
- [x] Validação no backend com score threshold (0.5)
- [x] Bloqueio de bots com score baixo (403 Forbidden)
- [x] Commit: `764dad0` — "Add reCAPTCHA v3 bot protection"
- [x] Deploy em produção via Vercel
- [x] Variável `RECAPTCHA_SECRET_KEY` configurada no Vercel

**Como funciona:**
1. Usuário preenche formulário normalmente
2. Ao clicar "Submit", reCAPTCHA v3 executa silenciosamente
3. Gera score 0-1 baseado em comportamento (mouse, cliques, IP, etc)
4. Envia token com formulário
5. Backend valida com Google API
6. Score < 0.5? → Bloqueado (bot)
7. Score ≥ 0.5? → Email enviado (humano)

**Resultado esperado:**
- ✅ Bots de Singapore/China bloqueados
- ✅ Usuários reais não veem mudança
- ✅ Spam nos emails reduzido drasticamente

---

# RESUMO VISUAL

```
✅ CONCLUÍDO (15 de 17):
  [1]  Facebook Pixel ← INSTALADO (ID: 1981946709023806)
       → PageView + Lead + Contact (phone) + Contact (whatsapp)
       → Domínio VERIFICADO no Meta Business Suite (8 Mar 2026)
  [3]  Bing Webmaster Tools ← VERIFICADO + sitemap 159 URLs + IndexNow
  [4]  Yelp ← COMPLETO (12 Mar 2026)
       → Nome corrigido, 7 fotos, descrição, gutters removido, NAP ok
  [4b] Facebook Page ← BIO + ESPECIALIDADES + ÁREAS ATUALIZADOS (12 Mar 2026)
       → Tampa removida, gutters removido, 7 especialidades, promoção
       → Falta: mudar nome da página pra "Bubbles Enterprise Soffit & Fascia"
  [5]  Angi ← CANCELADO + REMOVIDO do código e plataformas
  [6]  Links redes sociais ← INSTALADO (Instagram + Facebook + Yelp + Nextdoor)
  [7]  Nextdoor ← CRIADO + VERIFICADO + sameAs instalado
  [11] Cloudflare ← VERIFICADO (não usa, bots AI liberados)
  [12] OG Image ← PNG gerado pelo Next.js automaticamente
  [13] Google Search Console ← VERIFICADO (DNS) + sitemap 159 URLs submetido
  [14] Mobile Audit ← 7 correções aplicadas + deploy feito (8 Mar 2026)
  [16] reCAPTCHA v3 ← DEPLOYED (14 Mar 2026)
       → Script + token capture + backend validation + Vercel env var configurada
  [17] UTM Generator ← IMPLEMENTADO (14 Mar 2026)
       → Gerador visual + guia completo + função TypeScript + 9 canais suportados

⚠️ SUSPENSO:
  [2]  Google Business Profile ← 2a APELAÇÃO SUBMETIDA (12 Mar 2026)
       → Case ID: [1-8338000040261] via eduardornj@gmail.com (EN/US)
       → Aguardando resposta até ~26 Mar 2026
       → Se negado: responder ao email toda semana até humano responder

🔄 EM ANDAMENTO:
  [8]  Reviews ← Página /review CRIADA com todas as plataformas
       → Falta: salvar template no celular + começar a pedir

PENDENTE:
  [9]  Testar citações AI ← 10 min/mês
  [10] Acorn Finance URL ← me mandar o link
```

---

> **Tudo que é código, eu faço. Tudo que é conta/perfil/credencial, você faz.**
> Me mande os IDs/links conforme for conseguindo que eu vou instalando no site.
