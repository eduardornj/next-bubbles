# GUIA SEO — O que Eduardo precisa fazer (manual)

> Gerado em 5 de Março de 2026 pela auditoria SEO completa (8 agentes, 85 páginas).
> Estas são as tarefas que **só você** pode fazer — não são código, são ações externas.
> Atualizado em 8 de Março de 2026 com status de tudo que já foi feito.

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

## 2. ~~Google Business Profile — Criar perfil~~ ⚠️ SUSPENSO

**Status: SUSPENSO — "deceptive content" violation. Recuperação em andamento.**

**O que foi feito:**
- [x] Perfil criado no Google Maps: `Bubble Soffit and Fascia`
- [x] Link: `https://www.google.com/maps/place/Bubble+Soffit+and+Fascia/data=!4m2!3m1!1s0x0:0x85136cefb8389b4b`
- [x] `sameAs` adicionado no schema do site (layout + homepage)

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

## 4. Yelp — Criar/Completar perfil

**O que é:** O Yelp é a fonte #1 que Perplexity e ChatGPT usam para recomendar negócios locais. Se alguém perguntar "best soffit repair in Orlando" no ChatGPT, ele puxa do Yelp.

**Por que importa:** Pesquisa mostra que ChatGPT cita negócios com Yelp profile completo 3x mais do que sem.

**Tempo:** 30 minutos (uma vez) + 5 min/mês

**Passo a passo:**

1. Acesse [biz.yelp.com](https://biz.yelp.com)
2. Clique "Claim your Business" ou "Add your Business"
3. Procure "Bubbles Enterprise" — se já existe, claim. Se não, crie.

**Informações para preencher (EXATAMENTE como no site):**

| Campo | Valor |
|-------|-------|
| Business Name | Bubbles Enterprise Soffit & Fascia |
| Phone | (407) 715-1790 |
| Address | Orlando, FL (mesmo do Google) |
| Category | Soffit & Fascia, Home Improvement, Roofing |
| Hours | Mon-Sat 8am-6pm |
| Website | https://bubblesenterprise.com |
| Service Area | Orlando, Kissimmee, Winter Park, Clermont, Sanford, Oviedo + Central Florida |

**IMPORTANTE — NAP Consistente:**
O nome, endereço e telefone devem ser **EXATAMENTE iguais** em todas as plataformas (Google, Yelp, Angi, site). Até a formatação importa:
- Telefone: sempre `(407) 715-1790` (não `407-715-1790` ou `4077151790`)
- Nome: sempre `Bubbles Enterprise Soffit & Fascia` (não "Bubbles Enterprise LLC" ou "Bubbles Soffit")

**Fotos para subir:**
- 5-10 fotos de projetos reais
- 1 foto da equipe (se tiver)
- 1 foto de materiais (aluminum/vinyl panels)

**Reviews:**
- Peça para clientes satisfeitos deixarem review no Yelp
- Responda TODA review (positiva ou negativa)

- [ ] Perfil criado/reivindicado
- [ ] Todas as informações preenchidas
- [ ] 5+ fotos subidas
- [ ] NAP conferido (igual ao Google e ao site)

---

## 5. ~~Angi (antigo HomeAdvisor) — Criar perfil~~ 🔄 EM ANDAMENTO

**Status: 80% FEITO — perfil criado, aguardando ativação pública.**

**O que foi feito:**
- [x] Perfil criado no Angi (ID: `26560128`)
- [x] Informações básicas preenchidas (About, Contact, Hours, Service details)
- [x] Description otimizada com copy de vendas
- [x] Business highlights marcados (Se Habla Español, Family Owned)
- [x] Insurance marcado
- [x] Free estimates = Yes, Warranty = Yes, Emergency service = Yes
- [x] Thunderbird configurado para SMTP (587/STARTTLS)
- [x] Email enviado pro suporte do Angi pedindo ativação do perfil público

**O que falta:**
- [ ] Resposta do Angi sobre ativação do perfil público
- [ ] Subir fotos de projetos
- [ ] Quando perfil público estiver ativo: me mandar o link para adicionar no `sameAs`

**Links úteis:**
- Dashboard: `https://office.angi.com/app/home/26560128`
- Link de review (para clientes): `https://www.angi.com/write-review/26560128`

**Configuração do email (Thunderbird):**
- Servidor: `mail.bubblesenterprise.com`
- Porta: `587` / STARTTLS
- Usuário: `contact@bubblesenterprise.com`

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
| Angi | Perfil criado (ID 26560128) — aguardando link público para adicionar |
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

- [ ] Página criada
- [ ] Informações completas

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
| Angi | `https://www.angi.com/companylist/us/fl/orlando/bubbles-enterprise-reviews-10813498.htm` |
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

# RESUMO VISUAL

```
✅ CONCLUÍDO (9 de 14):
  [1]  Facebook Pixel ← INSTALADO (ID: 1981946709023806)
       → PageView + Lead + Contact (phone) + Contact (whatsapp)
       → Domínio VERIFICADO no Meta Business Suite (8 Mar 2026)
  [3]  Bing Webmaster Tools ← VERIFICADO + sitemap 159 URLs + IndexNow
  [6]  Links redes sociais ← INSTALADO (Instagram + Facebook + Yelp + Nextdoor)
  [7]  Nextdoor ← CRIADO + VERIFICADO + sameAs instalado
  [11] Cloudflare ← VERIFICADO (não usa, bots AI liberados)
  [12] OG Image ← PNG gerado pelo Next.js automaticamente
  [13] Google Search Console ← VERIFICADO (DNS) + sitemap 159 URLs submetido
  [14] Mobile Audit ← 7 correções aplicadas + deploy feito (8 Mar 2026)

⚠️ SUSPENSO:
  [2]  Google Business Profile ← SUSPENSO ("deceptive content")
       → Dashboard de recuperação: Admin/Recuperacao-GBP.html

🔄 EM ANDAMENTO:
  [5]  Angi ← 80% FEITO (perfil criado ID 26560128, aguardando ativação pública)
  [8]  Reviews ← Página /review CRIADA com todas as plataformas
       → Falta: salvar template no celular + começar a pedir

PENDENTE:
  [4]  Yelp ← completar perfil (fotos, informações)
  [9]  Testar citações AI ← 10 min/mês
  [10] Acorn Finance URL ← me mandar o link
```

---

> **Tudo que é código, eu faço. Tudo que é conta/perfil/credencial, você faz.**
> Me mande os IDs/links conforme for conseguindo que eu vou instalando no site.
