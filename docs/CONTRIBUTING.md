# 🤝 Guía de Contribución - Dev Night Talks

¡Gracias por tu interés en contribuir a Dev Night Talks! Esta guía te ayudará a entender cómo trabajar con este repositorio de manera limpia y ordenada.

## Tabla de Contenidos

- [Primeros Pasos](#primeros-pasos)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Flujo de Trabajo con Git](#flujo-de-trabajo-con-git)
- [Convención de Commits](#convención-de-commits)
- [Guía de Pull Requests](#guía-de-pull-requests)
- [Convenciones de Código](#convenciones-de-código)
- [Revisión de Código](#revisión-de-código)
- [Reportar Bugs](#reportar-bugs)
- [Sugerir Mejoras](#sugerir-mejoras)

---

## Primeros Pasos

### Requisitos

- **Node.js** >= 18
- **pnpm** (package manager del proyecto)

### Configuración del Entorno

```bash
# 1. Fork y clona el repositorio
git clone https://github.com/TU-USUARIO/dev-night-talks.git
cd dev-night-talks

# 2. Instala dependencias
pnpm install

# 3. Inicia el servidor de desarrollo
pnpm dev

# 4. Verifica que todo funcione
pnpm build
pnpm lint
```

### Comandos Disponibles

| Comando        | Descripción                              |
| -------------- | ---------------------------------------- |
| `pnpm dev`     | Inicia el servidor de desarrollo con HMR |
| `pnpm build`   | Type check + build de producción         |
| `pnpm lint`    | Ejecuta ESLint                           |
| `pnpm preview` | Previsualiza el build de producción      |

> **Importante:** Antes de hacer push, siempre ejecuta `pnpm build` y `pnpm lint` para verificar que tu código no tenga errores.

---

## Estructura del Proyecto

```
src/
  components/
    ui/           # Componentes shadcn/ui (auto-generados, no editar manualmente)
    landing/      # Componentes de secciones del landing
    layout/       # Componentes de layout
  pages/          # Componentes de páginas (rutas)
  lib/            # Utilidades (cn, etc.)
  styles/         # CSS global (Tailwind v4)
```

---

## Flujo de Trabajo con Git

### 1. Crea una Rama

```bash
# Siempre parte de main
git checkout main
git pull origin main

# Crea una rama descriptiva
git checkout -b feature/nombre-de-la-funcionalidad
git checkout -b fix/descripcion-del-bug
git checkout -b refactor/descripcion-del-cambio
```

### 2. Nomenclatura de Ramas

Usa el formato `tipo/descripcion-corta`:

| Prefijo     | Uso                        | Ejemplo                           |
| ----------- | -------------------------- | --------------------------------- |
| `feature/`  | Nueva funcionalidad        | `feature/agenda-section`          |
| `fix/`      | Corrección de bug          | `fix/hero-mobile-layout`          |
| `refactor/` | Refactorización            | `refactor/extract-card-component` |
| `docs/`     | Documentación              | `docs/contributing-guide`         |
| `style/`    | Cambios de estilo/estética | `style/update-color-palette`      |
| `chore/`    | Tareas de mantenimiento    | `chore/update-dependencies`       |
| `perf/`     | Mejora de rendimiento      | `perf/optimize-image-loading`     |
| `ci/`       | Configuración de CI/CD     | `ci/add-lint-check`               |

### 3. Mantén tu Rama Actualizada

```bash
# Rebasea con main regularmente
git fetch origin
git rebase origin/main
```

---

## Convención de Commits

Usamos **Conventional Commits** para mantener un historial limpio y legible.

### Formato

```
tipo: descripción corta en presente imperativo

Descripción opcional más detallada (si es necesario).
```

### Tipos de Commit

| Tipo       | Descripción                             | Ejemplo                                                  |
| ---------- | --------------------------------------- | -------------------------------------------------------- |
| `feat`     | Nueva funcionalidad                     | `feat: add FAQ section to landing page`                  |
| `fix`      | Corrección de bug                       | `fix: resolve mobile navigation overflow`                |
| `refactor` | Refactorización sin cambios funcionales | `refactor: extract community card to reusable component` |
| `docs`     | Cambios en documentación                | `docs: update README with setup instructions`            |
| `style`    | Cambios de formato/estilo (sin lógica)  | `style: fix indentation in Header component`             |
| `chore`    | Tareas de mantenimiento                 | `chore: update dependencies to latest versions`          |
| `perf`     | Mejora de rendimiento                   | `perf: lazy load partner images`                         |
| `test`     | Tests                                   | `test: add unit tests for cn utility`                    |
| `ci`       | CI/CD                                   | `ci: add build check to PR workflow`                     |

### Alcance (Opcional)

Puedes añadir un alcance entre paréntesis para mayor claridad:

```
feat(landing): add partners section with logo grid
fix(groups): resolve image fallback rendering on Safari
refactor(ui): simplify Card component composition
```

### Reglas de Commits

1. **Presente imperativo**: "add" no "added" ni "adds"
2. **Primera letra minúscula**: `feat: add...` no `feat: Add...`
3. **Sin punto al final**: `fix: resolve error` no `fix: resolve error.`
4. **Máximo 72 caracteres** en el título
5. **Un solo tema** por commit
6. **Explica el qué y por qué**, no el cómo (el código ya muestra el cómo)

### Ejemplos Buenos ✅

```
feat: add smooth scrolling for hash navigation links
fix(landing): resolve hero section overflow on mobile
refactor: extract Layout wrapper component for consistency
docs: add contributing guide with commit conventions
chore: update shadcn/ui components to latest version
perf: optimize partner images with lazy loading
```

### Ejemplos Malos ❌

```
fixed the bug
Update stuff
WIP
asdf
changes
```

### Commits Múltiples

Si tu rama tiene commits desordenados, usa rebase interactivo antes de hacer PR:

```bash
# Reescribe los últimos N commits
git rebase -i HEAD~N
```

---

## Guía de Pull Requests

### Antes de Crear un PR

- [ ] Tu rama está actualizada con `main`
- [ ] `pnpm build` pasa sin errores
- [ ] `pnpm lint` pasa sin warnings
- [ ] Has revisado tu propio código
- [ ] Los commits siguen la convención

### Crear el PR

```bash
git push -u origin feature/tu-rama
# Luego crea el PR en GitHub
```

### Formato del PR

```markdown
## Descripción

Descripción clara y concisa de los cambios realizados.

## Tipo de Cambio

- [ ] 🐛 Bug fix (cambio que arregla un problema)
- [ ] ✨ Nueva funcionalidad (cambio que añade algo nuevo)
- [ ] ♻️ Refactorización (mejora de código sin cambiar funcionalidad)
- [ ] 📝 Documentación (solo cambios en docs)
- [ ] 🎨 Estilo (cambios de formato/estética)
- [ ] ⚡ Performance (mejora de rendimiento)
- [ ] 🧹 Chore (mantenimiento, dependencias, etc.)

## Checklist

- [ ] El código sigue las convenciones del proyecto
- [ ] `pnpm build` pasa sin errores
- [ ] `pnpm lint` pasa sin warnings
- [ ] He revisado mi propio código
- [ ] Los commits siguen la convención de commits

## Screenshots (si aplica)

Añade screenshots o GIFs para cambios visuales.

## Notas Adicionales

Cualquier información relevante para los revisores.
```

### Tamaño del PR

- **Pequeño es mejor**: PRs con menos de 400 líneas son más fáciles de revisar
- **Divide y vencerás**: Si tu cambio es grande, divídelo en PRs independientes
- **Un objetivo por PR**: Cada PR debe resolver un solo problema o añadir una sola funcionalidad

---

## Convenciones de Código

### Imports

```typescript
// Orden: React/hooks → third-party → interno (@/) → CSS
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import '@/styles/index.css';
```

- Usa `@/*` para imports relativos a `src/`
- Sin barrel files — importa directamente del archivo fuente
- Usa `import * as React from "react"` en componentes shadcn/ui

### Formato

- **Sin punto y coma** — omite los `;` al final
- **Comillas dobles** para strings y atributos JSX
- **2 espacios** de indentación
- **PascalCase** para componentes, **camelCase** para funciones/variables

### TypeScript

```typescript
// Usa type, no interface
type LayoutProps = {
  children: ReactNode
  className?: string
}

// Componentes con nombre
export function Layout({ children, className }: LayoutProps) {
  return <div>{children}</div>
}

// Páginas con default export
export default function Landing() {
  return <Layout>...</Layout>
}
```

### Estilos (Tailwind CSS v4)

```typescript
// ✅ Usa cn() para clases condicionales
<div className={cn("base-class", isActive && "active-class", className)} />

// ✅ Usa flex con gap-*
<div className="flex flex-col gap-6">

// ✅ Usa size-* cuando ancho = alto
<div className="size-10" />

// ✅ Colores semánticos
<div className="bg-background text-muted-foreground" />

// ❌ No uses space-x-* o space-y-*
// ❌ No uses colores raw (bg-blue-500)
// ❌ No uses z-index manual en overlays
```

### Componentes shadcn/ui

```typescript
// ✅ Composición completa de Card
<Card>
  <CardHeader>
    <CardTitle>Título</CardTitle>
    <CardDescription>Descripción</CardDescription>
  </CardHeader>
  <CardContent>Contenido</CardContent>
  <CardFooter>Footer</CardFooter>
</Card>

// ✅ Iconos en botones con data-icon
<Button>
  Texto
  <Icon data-icon="inline-end" />
</Button>

// ✅ Avatar siempre con fallback
<Avatar>
  <AvatarImage src="..." />
  <AvatarFallback>AB</AvatarFallback>
</Avatar>
```

### Accesibilidad

```typescript
// ✅ Secciones con aria-labelledby
<section aria-labelledby="section-heading">
  <h1 id="section-heading">Título</h1>
</section>

// ✅ Links externos con rel
<a href="https://..." target="_blank" rel="noopener noreferrer">

// ✅ Imágenes con fallback
<img src="..." alt="..." onError={() => setFailed(true)} />
```

---

## Revisión de Código

### Para Autores

- Responde a los comentarios de review con claridad
- Haz los cambios solicitados en commits separados o amenda si aún no se ha hecho merge
- No hagas force push a ramas con reviews activas sin avisar

### Para Revisores

- Sé constructivo y respetuoso
- Explica el **por qué** de tus sugerencias
- Distingue entre bloqueantes y sugerencias opcionales
- Aprueba cuando los cambios solicitados se hayan resuelto

---

## Reportar Bugs

Si encuentras un bug, crea un issue con:

1. **Título descriptivo**: `Bug: Hero section overflow en móvil`
2. **Descripción**: Qué esperabas vs qué ocurrió
3. **Pasos para reproducir**: Lista numerada
4. **Environment**: Navegador, versión, SO
5. **Screenshots**: Si aplica

---

## Sugerir Mejoras

Para nuevas funcionalidades o mejoras:

1. **Título descriptivo**: `Feature: Añadir sección de sponsors`
2. **Descripción**: Qué quieres y por qué es útil
3. **Propuesta de implementación**: Cómo lo harías (opcional)
4. **Alternativas**: Otras opciones que consideraste

---

## Contacto

¿Tienes dudas? Abre un issue con la etiqueta `question` o contacta con los mantenedores.

¡Gracias por contribuir! 🚀
