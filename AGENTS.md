<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

# Stack del Proyecto — Design System Personal (P01)

Sistema de diseño personal de Sareli. El entregable público es **Storybook desplegado en Vercel**.
El Next.js app es entorno de desarrollo — se verifica en CI pero no se despliega públicamente.

Kickoff issue: https://github.com/sarelisg3-sg/portfolio-platform/issues/2
Hub central: https://github.com/sarelisg3-sg/portfolio-platform

---

## Framework & Routing

**Next.js 16+ (App Router)**
- App Router (`app/`). No usar `pages/`.
- Server Components por defecto; `"use client"` solo cuando se necesite estado o eventos del browser.

---

## Estilos & UI

**Tailwind CSS v4**
- Configuración CSS-first. Sin `tailwind.config.ts`.
- Tokens de diseño en bloque `@theme` de `app/globals.css`.
- Clases utilitarias directamente en JSX.

**shadcn/ui**
- Componentes base en `components/ui/`. No modificar archivos generados por shadcn directamente.
- Instalar con `npx shadcn@latest add <componente>`.

---

## Componentes del Design System

Estructura: `components/<ComponentName>/<ComponentName>.tsx` + `<ComponentName>.stories.tsx`.

**MVP (8 componentes):**
- Button, Input, Textarea, Card, Badge, Avatar, Modal, Typography

**No pertenece a P01 (es de P08):**
- exports field en package.json
- peerDependencies
- build con tsup/rollup
- barrel export `index.ts`
- npm publish workflow
- snapshot tests
- versionado semántico / CHANGELOG

---

## Tokens

- `app/globals.css` es la única fuente de verdad. Prefijo `--ds-*` para todos los tokens del design system.
- **No existe `lib/tokens.ts`** — el mirror de TypeScript queda aplazado hasta P08 o hasta que el consumo desde TS lo justifique. No crearlo sin necesidad real.
- Categorías: brand (color scale), neutral, semantic state, tipografía, radios, sombras.
- Los tokens de color están mapeados en `@theme inline` para generar utilidades Tailwind (`bg-brand-500`, `text-brand-600`, etc.).

---

## Testing

**Storybook**
- Stories en `*.stories.tsx` junto al componente.
- Correr con `npm run storybook`.
- Build: `npm run build-storybook` → output `storybook-static/`.

**Vitest**
- Tests unitarios para utilities en `lib/`.
- Configuración en `vitest.config.ts`. Correr con `npm run test`.

**axe-core**
- Vía `@storybook/addon-a11y`. Automático por story.

**Testing Library**
- Para componentes interactivos: Button, Input, Textarea, Modal.

---

## Deploy

**Vercel (Hobby)**
- Deploy automático desde `main` vía GitHub integration.
- **Storybook** es el entregable público: build command `npm run build-storybook`, output dir `storybook-static`.
- Variables de entorno: gestionadas desde el dashboard de Vercel, nunca commiteadas.

---

## Convenciones

- Componentes: PascalCase en `components/`.
- Utilities y helpers: camelCase en `lib/`.
- Tipos TypeScript en `types/` o co-localizados.
- Sin `any`. Tipos desconocidos usan `unknown` con narrowing.
- Imports absolutos con alias `@/`.
