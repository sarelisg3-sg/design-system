# design-system

Sistema de diseño personal de Sareli — tokens de diseño, componentes base y documentación en Storybook.

**Parte de:** [Portfolio Platform](https://github.com/sarelisg3-sg/portfolio-platform) · [Issue de kickoff #2](https://github.com/sarelisg3-sg/portfolio-platform/issues/2)

---

## Stack

| Herramienta | Rol |
|-------------|-----|
| Next.js 16 (App Router) | Entorno de desarrollo |
| Tailwind CSS v4 | Estilos y tokens CSS |
| shadcn/ui | Infraestructura de componentes |
| Storybook | Entregable público |
| TypeScript | Tipado estático |
| Vitest | Tests unitarios |
| axe-core | Accesibilidad automática por story |

---

## Entregable

Storybook publicado en Vercel — URL disponible después del primer deploy.

---

## Desarrollo local

```bash
npm install
npm run dev          # Next.js dev server (entorno de desarrollo)
npm run storybook    # Storybook en localhost:6006
npm run typecheck    # TypeScript check
npm run lint         # ESLint
npm run test         # Vitest
```

---

## Componentes MVP

Button · Input · Textarea · Card · Badge · Avatar · Modal · Typography

---

## Estructura

```
design-system/
├── app/                    # Next.js App Router (entorno de dev)
│   └── globals.css         # Tokens como CSS custom properties (única fuente de verdad)
├── components/
│   └── <Name>/
│       ├── <Name>.tsx
│       └── <Name>.stories.tsx
├── lib/
│   └── utils.ts            # cn() helper (clsx + tailwind-merge)
│   (tokens.ts aplazado hasta P08 o cuando el consumo desde TS lo justifique)
├── .storybook/
│   ├── main.ts
│   └── preview.ts
└── .github/workflows/
    └── ci.yml              # typecheck → lint → build
```
