# Auditoria Bubbles Enterprise — Itens Pendentes (Baixa Prioridade)

Gerado em: 2026-03-10
Projeto: `next-bubbles` (bubblesenterprise.com)
Stack: Next.js 16, React 19, TypeScript, Tailwind v4

---

## 1. Component Splitting — Server + Client separation

**Impacto:** Reduz JS enviado ao browser (menor bundle = mais rapido)
**Risco:** Baixo

Paginas que misturam Server e Client logic no mesmo arquivo. Separar em:
- Server Component (fetch data, metadata) → `page.tsx`
- Client Component (interatividade) → `PageClient.tsx`

### Arquivos:
- `src/app/[locale]/contact/page.tsx` — form com useState/useRef deve ir para `ContactClient.tsx`
- `src/app/[locale]/contact/emergency/page.tsx` — form emergencia para `EmergencyClient.tsx`
- `src/app/[locale]/gallery/page.tsx` — lightbox/filtros para `GalleryClient.tsx`
- `src/app/[locale]/calculator/page.tsx` — calculadora interativa para `CalculatorClient.tsx`

### Como fazer:
1. Criar `[Pagina]Client.tsx` com `"use client"` no topo
2. Mover todo useState, useRef, event handlers para o Client
3. O `page.tsx` fica Server-only: busca dados, gera metadata, renderiza `<ClientComponent />`
4. Passar dados via props (nao usar context para dados estaticos)

---

## 2. Server Actions — Converter API routes

**Impacto:** Elimina fetch manual, progressive enhancement (forms funcionam sem JS)
**Risco:** Medio (testar bem os forms depois)

### Arquivos:
- `src/app/api/contact/route.ts` → Server Action em `src/app/[locale]/contact/actions.ts`
- `src/app/api/emergency-repair/route.ts` → Server Action em `src/app/[locale]/contact/emergency/actions.ts`
- `src/app/api/repair-quote/route.ts` → Server Action em `src/app/[locale]/repairs/actions.ts`

### Como fazer:
1. Criar arquivo `actions.ts` com `"use server"` no topo
2. Mover logica do POST handler para uma funcao `async function submitContact(formData: FormData)`
3. No form Client, usar `action={submitContact}` em vez de `fetch('/api/contact')`
4. Manter as API routes existentes como fallback (nao deletar ainda)
5. Usar `useActionState` para loading/error states

### Importante:
- Rate limiting precisa ser adaptado (Server Actions nao tem `req.headers` igual)
- `checkOrigin()` nao se aplica a Server Actions (ja sao same-origin por definicao)
- Attachments (fotos) precisam de `formData.getAll('photos')` — funciona igual

---

## 3. React 19 Features

**Impacto:** UX melhor (loading states nativos, optimistic updates)
**Risco:** Baixo

### useFormStatus
- Nos forms de contact/emergency/repair-quote
- Substitui `const [loading, setLoading] = useState(false)` por `const { pending } = useFormStatus()`
- Botao submit desabilita automaticamente durante envio

### useActionState
- Substitui pattern manual de `try/catch + setState` nos forms
- `const [state, formAction, isPending] = useActionState(submitContact, initialState)`
- Retorna erro/sucesso direto do Server Action

### useOptimistic (opcional)
- Util se tiver lista de reviews/testimonials que usuario pode adicionar
- Mostra item na lista antes do servidor confirmar

---

## 4. Font Display Swap

**Impacto:** Texto aparece mais rapido no primeiro load
**Risco:** Zero

### Arquivo: `src/app/[locale]/layout.tsx`

Mudar `display: "optional"` para `display: "swap"` nas fontes:

```tsx
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",  // era "optional"
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",  // era "optional"
});
```

**Nota:** `optional` pode causar FOIT (flash of invisible text) em conexoes lentas. `swap` mostra fallback font imediatamente.

---

## 5. Poppins Weights Check

**Impacto:** Reduz ~50-100KB se tiver weights nao usados
**Risco:** Zero

### Como verificar:
1. Buscar no CSS/Tailwind quais `font-weight` sao usados com Poppins
2. Se `weight: 400` nao for usado, remover do array
3. Cada weight removido = ~25KB a menos no bundle

### Arquivo: `src/app/[locale]/layout.tsx`
```tsx
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],  // verificar quais sao realmente usados
  ...
});
```

---

## 6. Robots Metadata

**Impacto:** Controle fino de indexacao por pagina
**Risco:** Baixo

### Paginas que devem ter `noindex`:
- `src/app/[locale]/thank-you/page.tsx` — pagina de agradecimento pos-form
- `src/app/[locale]/repair-thank-you/page.tsx` — idem
- `src/app/[locale]/terms/page.tsx` — opcional
- `src/app/[locale]/privacy/page.tsx` — opcional

### Como fazer:
Adicionar no `generateMetadata` de cada pagina:
```tsx
export const metadata: Metadata = {
  robots: { index: false, follow: true },
};
```

---

## 7. Lightbox Intercepting Routes (Gallery)

**Impacto:** UX premium (modal com URL propria, back button funciona)
**Risco:** Medio (complexidade Next.js parallel routes)

### Conceito:
- Clicar em foto abre modal overlay (intercepting route)
- URL muda para `/gallery/photo-1`
- Back button fecha modal (nao sai da pagina)
- Link direto `/gallery/photo-1` abre pagina dedicada da foto

### Estrutura:
```
src/app/[locale]/gallery/
  page.tsx              — grid de fotos
  @modal/
    (..)photo/[id]/
      page.tsx          — modal overlay
  photo/[id]/
    page.tsx            — pagina dedicada (fallback)
  layout.tsx            — renderiza {children} + {modal}
```

### Prerequisito:
- Precisa do Component Splitting (item 1) feito primeiro
- Cada foto precisa de um `id` ou `slug` unico

---

## 8. SEO — Emergency layout canonical (S2)

**Impacto:** HIGH — canonical errado em ES/PT = Google indexa URL errada
**Risco:** Baixo

### Arquivo: `src/app/[locale]/contact/emergency/layout.tsx`
- Metadata esta estatica (sem locale awareness)
- Precisa de `generateMetadata` com alternates/canonical igual ao city page
- Canonical: `https://bubblesenterprise.com/contact/emergency` (EN) ou `/${locale}/contact/emergency`

---

## 9. SEO — Homepage schema sameAs/address/geo (S3)

**Impacto:** MED — Schema incompleto na homepage reduz rich results
**Risco:** Zero

### Arquivo: `src/app/[locale]/page.tsx`
- O schema LocalBusiness global ja esta no layout.tsx
- Verificar se a homepage tem schema complementar (FAQPage, etc)
- Se tiver schema proprio, garantir que inclui sameAs, address, geo

---

## 10. SEO — BreadcrumbList em paginas [locale] (S5)

**Impacto:** MED — Breadcrumbs ajudam Google a entender hierarquia
**Risco:** Baixo

### Paginas que precisam de BreadcrumbList JSON-LD:
- `src/app/[locale]/services/page.tsx`
- `src/app/[locale]/repairs/page.tsx`
- `src/app/[locale]/about/page.tsx`
- `src/app/[locale]/materials/page.tsx`
- `src/app/[locale]/testimonials/page.tsx`
- `src/app/[locale]/blog/[slug]/page.tsx` (cada post)

### Formato:
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://bubblesenterprise.com" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://bubblesenterprise.com/services" }
  ]
}
```
- URLs devem ser locale-aware (EN sem prefixo, ES/PT com prefixo)

---

## 11. SEO — Sitemap com alternates/hreflang (S6)

**Impacto:** MED — hreflang no sitemap XML ajuda Google a associar versoes de idioma
**Risco:** Baixo

### Arquivo: `src/app/sitemap.ts`
- Adicionar `alternates.languages` em cada entry do sitemap
- Formato Next.js:
```tsx
{
  url: 'https://bubblesenterprise.com/services',
  lastModified: new Date(),
  alternates: {
    languages: {
      en: 'https://bubblesenterprise.com/services',
      es: 'https://bubblesenterprise.com/es/services',
      pt: 'https://bubblesenterprise.com/pt/services',
    },
  },
}
```

---

## 12. SEO — Blog schemas locale-aware (S7/S9)

**Impacto:** MED — URLs hardcoded EN nos schemas dos 8 blog posts
**Risco:** Baixo

### Arquivos: 8 posts em `src/app/[locale]/blog/[slug]/`
- Article schema `url` deve usar locale (nao hardcoded EN)
- Adicionar `inLanguage` ao schema: `"inLanguage": locale`
- FAQPage schema idem

---

## 13. Performance — PNGs duplicados (P7)

**Impacto:** LOW — Espaco no repo, nao afeta usuario (next/image converte)
**Risco:** Zero

### Verificar: `public/images/`
- Se existem .png E .webp do mesmo arquivo, deletar o .png
- next/image ja converte automaticamente para WebP/AVIF

---

## 14. Code Quality — Itens menores (F3-F6, F9-F10)

**Impacto:** LOW — Nao afeta usuario, so qualidade de codigo
**Risco:** Baixo

- **F3:** `as any` em View Transitions e i18n keys — adicionar tipos corretos
- **F4:** Header 543 linhas — extrair submenu components
- **F5:** Schema JSON-LD duplicado — criar `lib/schema.ts` centralizado
- **F6:** HeroSlider ignora prefers-reduced-motion — adicionar `@media (prefers-reduced-motion: reduce)`
- **F9:** LanguageSwitcher faz full reload — usar `router.push()` do next-intl
- **F10:** animationDelay em elementos sem animacao — limpar dead code

---

## Checklist Completo

### Performance / DX
- [ ] 1. Component Splitting (Contact, Emergency, Gallery, Calculator)
- [ ] 2. Server Actions (3 API routes)
- [ ] 3. React 19 Features (useFormStatus, useActionState)
- [ ] 4. Font display swap
- [ ] 5. Poppins weights audit
- [ ] 7. Lightbox intercepting routes (gallery)
- [ ] 13. PNGs duplicados cleanup

### SEO
- [ ] 6. Robots noindex em thank-you pages
- [ ] 8. Emergency layout canonical
- [ ] 9. Homepage schema completar
- [ ] 10. BreadcrumbList em paginas [locale]
- [ ] 11. Sitemap com alternates/hreflang
- [ ] 12. Blog schemas locale-aware

### Code Quality
- [ ] 14. Itens menores (F3-F6, F9-F10)
