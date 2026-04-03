# Páginas por implementar

Este documento lista las páginas que se planean agregar al proyecto **Dev Night Talks**. Cada página incluye una descripción, los componentes necesarios y una lista de to-dos para que contribuidores puedan implementarlas.

> **Antes de contribuir:** Lee [`CONTRIBUTING.md`](./CONTRIBUTING.md) para conocer el flujo de trabajo.

---

## Estado general

| Prioridad | Página | Ruta | Estado |
|-----------|--------|------|--------|
| Alta | Eventos | `/events` | Pendiente |
| Alta | Speakers | `/speakers` | Pendiente |
| Alta | Galería | `/gallery` | Pendiente |
| Media | Blog | `/blog` | Pendiente |
| Media | Código de Conducta | `/conduct` | Pendiente |
| Baja | Contacto | `/contact` | Pendiente |
| Baja | Sponsors | `/sponsors` | Pendiente |
| Baja | Recursos | `/resources` | Pendiente |

---

## Eventos (`/events`)

Listado de eventos pasados y próximos de Dev Night Talks con filtros por fecha y tema.

### Estructura esperada

- **Header** con título y descripción
- **Filtros** (próximos / pasados, por tema)
- **Grid de tarjetas** con fecha, título, descripción corta y link a detalles
- **Paginación** o "load more" si hay muchos eventos

### Datos de ejemplo

```ts
type Event = {
  id: string
  title: string
  description: string
  date: string
  status: "upcoming" | "past"
  topics: string[]
  location: string
  meetupUrl?: string
}
```

### To-dos

- [ ] Crear `src/pages/Events.tsx` con layout base (Layout, DirectionalTransition, SiteHeader, SiteFooter)
- [ ] Registrar ruta `/events` en `src/App.tsx`
- [ ] Crear componente `src/components/landing/EventsSection.tsx` o `src/components/events/EventCard.tsx`
- [ ] Definir tipo `Event` y datos estáticos de ejemplo (al menos 6 eventos)
- [ ] Implementar filtros (próximos / pasados) con estado local
- [ ] Implementar grid responsive con `EventCard`
- [ ] Agregar fallback de imagen en tarjetas
- [ ] Agregar `aria-labelledby` y atributos de accesibilidad
- [ ] Agregar link a Meetup en eventos próximos
- [ ] Verificar con `pnpm build` que no hay errores de TypeScript
- [ ] Verificar con `pnpm lint` que no hay errores de estilo

---

## Speakers (`/speakers`)

Perfiles de personas que han dado charlas en Dev Night Talks.

### Estructura esperada

- **Header** con título y descripción
- **Grid de tarjetas** con foto, nombre, bio corta y temas que ha tocado
- **Detalle expandible** o link a perfil con bio completa y lista de charlas

### Datos de ejemplo

```ts
type Speaker = {
  id: string
  name: string
  bio: string
  photoSrc: string
  initials: string
  topics: string[]
  socials?: { platform: string; url: string }[]
  pastTalks?: { title: string; eventId: string; date: string }[]
}
```

### To-dos

- [ ] Crear `src/pages/Speakers.tsx` con layout base
- [ ] Registrar ruta `/speakers` en `src/App.tsx`
- [ ] Crear componente `src/components/speakers/SpeakerCard.tsx`
- [ ] Definir tipo `Speaker` y datos estáticos de ejemplo (al menos 4 speakers)
- [ ] Implementar grid responsive
- [ ] Agregar fallback de imagen con `onError`
- [ ] Agregar links a redes sociales con `target="_blank" rel="noopener noreferrer"`
- [ ] Agregar accesibilidad (`aria-labelledby`, `sr-only` headings)
- [ ] Verificar con `pnpm build` y `pnpm lint`

---

## Galería (`/gallery`)

Fotos de eventos pasados organizadas por evento o en un grid general.

### Estructura esperada

- **Header** con título y descripción
- **Filtros por evento** (tabs o select)
- **Grid de imágenes** tipo masonry o columns
- **Lightbox** opcional al hacer click en una foto

### Datos de ejemplo

```ts
type GalleryPhoto = {
  id: string
  src: string
  alt: string
  eventId?: string
  eventName?: string
}
```

### To-dos

- [ ] Crear `src/pages/Gallery.tsx` con layout base
- [ ] Registrar ruta `/gallery` en `src/App.tsx`
- [ ] Crear componente `src/components/gallery/PhotoGrid.tsx`
- [ ] Definir tipo `GalleryPhoto` y datos estáticos de ejemplo (al menos 12 fotos)
- [ ] Colocar imágenes de ejemplo en `public/gallery/`
- [ ] Implementar filtros por evento
- [ ] Implementar grid con CSS columns o masonry
- [ ] Agregar `onError` fallback para imágenes rotas
- [ ] (Opcional) Implementar lightbox con Dialog de shadcn
- [ ] Verificar con `pnpm build` y `pnpm lint`

---

## Blog (`/blog`)

Artículos, resúmenes de eventos, tutoriales y anuncios de la comunidad.

### Estructura esperada

- **Índice** (`/blog`) con lista de posts ordenados por fecha
- **Post individual** (`/blog/:slug`) con contenido completo
- **Tags/categorías** para filtrar contenido

### Datos de ejemplo

```ts
type BlogPost = {
  slug: string
  title: string
  excerpt: string
  date: string
  author: string
  tags: string[]
  coverImage?: string
  content: string
}
```

### To-dos

- [ ] Crear `src/pages/BlogIndex.tsx` con layout base
- [ ] Crear `src/pages/BlogPost.tsx` para posts individuales
- [ ] Registrar rutas `/blog` y `/blog/:slug` en `src/App.tsx`
- [ ] Crear componente `src/components/blog/PostCard.tsx`
- [ ] Definir tipo `BlogPost` y datos estáticos de ejemplo (al menos 3 posts)
- [ ] Implementar lista de posts con fecha y excerpt
- [ ] Implementar vista de post individual con renderizado de contenido
- [ ] Agregar navegación entre posts (anterior / siguiente)
- [ ] Agregar link "Volver al blog" en post individual
- [ ] Verificar con `pnpm build` y `pnpm lint`

---

## Código de Conducta (`/conduct`)

Página con las reglas y expectativas de comportamiento de la comunidad.

### Estructura esperada

- **Header** con título
- **Secciones** de contenido: propósito, comportamiento esperado, comportamiento inaceptable, consecuencias, cómo reportar
- **Contacto** para reportar incidentes

### To-dos

- [ ] Crear `src/pages/Conduct.tsx` con layout base
- [ ] Registrar ruta `/conduct` en `src/App.tsx`
- [ ] Redactar contenido del código de conducta (puede basarse en [Contributor Covenant](https://www.contributor-covenant.org/))
- [ ] Estructurar contenido en secciones con headings jerárquicos
- [ ] Agregar enlace a `/conduct` en el `SiteFooter`
- [ ] Agregar accesibilidad (`aria-labelledby`)
- [ ] Verificar con `pnpm build` y `pnpm lint`

---

## Contacto (`/contact`)

Formulario o información de contacto para comunicarse con los organizadores.

### Estructura esperada

- **Header** con título y descripción
- **Links de contacto** (email, redes sociales, Discord, etc.)
- **Formulario** opcional con nombre, email, mensaje

### To-dos

- [ ] Crear `src/pages/Contact.tsx` con layout base
- [ ] Registrar ruta `/contact` en `src/App.tsx`
- [ ] Crear componente con links de contacto (email, redes, etc.)
- [ ] Agregar iconos con `@hugeicons/core-free-icons`
- [ ] (Opcional) Implementar formulario con validación usando shadcn `Form`
- [ ] Agregar enlaces externos con `target="_blank" rel="noopener noreferrer"`
- [ ] Agregar link a `/contact` en el `SiteFooter`
- [ ] Verificar con `pnpm build` y `pnpm lint`

---

## Sponsors (`/sponsors`)

Página dedicada a patrocinadores actuales y pasados, con planes de patrocinio.

### Estructura esperada

- **Header** con título y descripción
- **Logos de sponsors** actuales en grid
- **Planes de patrocinio** (tarjetas con beneficios por nivel)
- **CTA** para convertirse en sponsor

### Datos de ejemplo

```ts
type Sponsor = {
  name: string
  logoSrc: string
  url: string
  tier: "gold" | "silver" | "bronze"
}

type SponsorPlan = {
  tier: string
  price: string
  benefits: string[]
  cta: string
}
```

### To-dos

- [ ] Crear `src/pages/Sponsors.tsx` con layout base
- [ ] Registrar ruta `/sponsors` en `src/App.tsx`
- [ ] Crear componente `src/components/sponsors/SponsorLogo.tsx`
- [ ] Crear componente `src/components/sponsors/SponsorPlanCard.tsx`
- [ ] Definir tipos y datos estáticos de ejemplo
- [ ] Colocar logos de ejemplo en `public/sponsors/`
- [ ] Implementar grid de logos con fallback
- [ ] Implementar tarjetas de planes con Card de shadcn
- [ ] Agregar CTA con link a contacto o email
- [ ] Agregar link a `/sponsors` en el `SiteFooter`
- [ ] Verificar con `pnpm build` y `pnpm lint`

---

## Recursos (`/resources`)

Links útiles, grabaciones de charlas, slides y material de aprendizaje.

### Estructura esperada

- **Header** con título y descripción
- **Categorías** de recursos (grabaciones, slides, artículos, herramientas)
- **Lista de links** organizados por categoría

### Datos de ejemplo

```ts
type Resource = {
  title: string
  url: string
  description: string
  category: string
  type: "video" | "slides" | "article" | "tool"
}
```

### To-dos

- [ ] Crear `src/pages/Resources.tsx` con layout base
- [ ] Registrar ruta `/resources` en `src/App.tsx`
- [ ] Definir tipo `Resource` y datos estáticos de ejemplo (al menos 8 recursos)
- [ ] Crear componente para listar recursos por categoría
- [ ] Implementar agrupación por categoría
- [ ] Agregar iconos por tipo de recurso
- [ ] Agregar links externos con `target="_blank" rel="noopener noreferrer"`
- [ ] Verificar con `pnpm build` y `pnpm lint`

---

## Convenciones para todas las páginas

Cada página nueva debe seguir estas reglas:

1. **Layout**: envolver con `<Layout>`, `<DirectionalTransition>`, `<SiteHeader />` y `<SiteFooter />`
2. **Rutas**: registrar en `src/App.tsx` con import correspondiente
3. **Estilo**: usar Tailwind CSS v4 con tokens semánticos (`bg-background`, `text-muted-foreground`, etc.)
4. **Componentes**: usar shadcn/ui (`Card`, `Button`, etc.) antes de markup custom
5. **Accesibilidad**: `aria-labelledby` en secciones, `sr-only` para headings ocultos
6. **Links externos**: siempre con `target="_blank" rel="noopener noreferrer"`
7. **Imágenes**: siempre con `onError` fallback
8. **Tipado**: TypeScript estricto, usar `type` no `interface`
9. **Imports**: orden React → third-party → `@/` → CSS, sin punto y coma
10. **Verificación**: correr `pnpm build` y `pnpm lint` antes de abrir PR
