# Dev Night Talks — sitio web

Sitio de la comunidad **Dev Night Talks** (Villahermosa): landing con información del evento, enlaces a Meetup, agenda en calendario (`.ics`), página de **comunidades hermanas** y mapa de ubicación (LATI).

## Stack

- [React](https://react.dev/) 19 y [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) 8
- [Tailwind CSS](https://tailwindcss.com/) 4 con plugin de Vite
- [shadcn/ui](https://ui.shadcn.com/) (Radix) y [Hugeicons](https://hugeicons.com/)
- [React Router](https://reactrouter.com/) 7

## Requisitos

- Node.js reciente (LTS recomendado)
- [pnpm](https://pnpm.io/) (el repo incluye `pnpm-lock.yaml`)

## Scripts

| Comando        | Descripción                          |
| -------------- | ------------------------------------ |
| `pnpm dev`     | Servidor de desarrollo con HMR       |
| `pnpm build`   | `tsc -b` y compilación de producción |
| `pnpm preview` | Vista previa del build estático      |
| `pnpm lint`    | ESLint                               |

## Rutas

- `/` — Landing (hero, nosotros, evento, programa, FAQ, partners, CTA Meetup).
- `/groups` — Comunidades relacionadas (AWS, Cursor, Claude Villahermosa); imágenes en `public/groups/*.webp`.

La navegación del header usa `Link` de React Router; las anclas de la landing usan `/#sección` para funcionar también desde `/groups`.

## Estructura relevante

```
src/
  App.tsx              # Router y scroll a hash en la home
  pages/
    Landing.tsx
    Groups.tsx
  components/
    landing/           # Secciones y header/footer
    layout/Layout.tsx
    ui/                # Componentes shadcn
public/
  dev-night-talks.ics  # Evento para calendario
  groups/              # Imágenes WebP de la página Grupos
```

## Variables de entorno

No hay variables obligatorias para desarrollo local. El mapa en “Qué es Dev Night Talks” usa embed de OpenStreetMap y un enlace a la ficha de Google Maps (las URLs `/place/` de Google no se pueden incrustar de forma fiable en iframes de terceros sin Maps Embed API + clave).

## Contribuir

¿Quieres colaborar? Consulta la [guía de contribución](docs/CONTRIBUTING.md) para conocer el flujo de trabajo, convención de commits y guía de pull requests.

## Licencia y créditos

Revisa el repositorio en GitHub para licencia y colaboradores: [github.com/diegodev18/dev-night-talks](https://github.com/diegodev18/dev-night-talks).
