# AGENTS.md - Dev Night Talks

## Commands

```bash
pnpm dev          # Start dev server (Vite + HMR)
pnpm build        # Type check + production build
pnpm lint         # Run ESLint
pnpm preview      # Preview production build
```

**Note:** No test framework is configured. Add Vitest/Jest if tests are needed. Use `pnpm build` to verify TypeScript correctness.

## Project Structure

```
src/
  components/
    ui/           # shadcn/ui components (auto-generated, don't edit manually)
    landing/      # Landing page section components
    layout/       # Layout wrapper components
  pages/          # Route-level page components
  lib/            # Utilities (cn, etc.)
  styles/         # Global CSS (Tailwind v4)
```

## Code Style

### Imports
- Use `@/*` path alias for `src/*` (e.g., `@/components/ui/button`)
- Order: React/hooks → third-party → internal (`@/`) → CSS
- No barrel files — import directly from source
- Use `import * as React from "react"` in shadcn/ui components

### Formatting
- **No semicolons** — omit trailing semicolons
- **Double quotes** for all strings and JSX attributes
- 2-space indentation
- PascalCase components, camelCase functions/variables
- Named exports for utilities, default exports for pages

### TypeScript
- Strict mode enabled (`strict: true`, `noUnusedLocals`, `noUnusedParameters`)
- Explicit type annotations for component props (use `type`, not `interface`)
- Use `React.ComponentProps<"element">` for extending native element props
- Use `type ClassValue` from clsx for className props
- Avoid `any`; use `unknown` when type is truly unknown

### React Patterns
- Functional components only — no class components
- Named function declarations: `export function Component() { ... }`
- Pages use default export: `export default function Page() { ... }`
- Never define components inside other components
- Use `cn()` from `@/lib/utils` for conditional class merging
- Add `data-slot` attributes to custom UI components for styling hooks

### Styling (Tailwind CSS v4)
- Use `cn()` for conditional classes, never template literal ternaries
- Use `flex` with `gap-*` — never `space-x-*` or `space-y-*`
- Use `size-*` when width === height (e.g., `size-10` not `w-10 h-10`)
- Semantic color tokens only: `bg-background`, `text-muted-foreground`, etc.
- Never override component colors/padding via className — use variants
- No manual `z-index` on overlays (Dialog, Popover, etc. handle stacking)
- Font: `font-heading` for headings (JetBrains Mono Variable), `font-sans` for body

### shadcn/ui Components
- Compose existing components before writing custom markup
- Use built-in variants (`variant="outline"`, `size="sm"`) before custom styles
- Full Card composition: `CardHeader`/`CardTitle`/`CardDescription`/`CardContent`/`CardFooter`
- Icons in buttons use `data-icon="inline-start"` or `data-icon="inline-end"`
- No sizing classes on icons inside components
- Avatar always needs `AvatarFallback`
- Dialog/Sheet/Drawer always need a `Title` (use `className="sr-only"` if hidden)

### Accessibility
- Sections use `aria-labelledby` pointing to heading `id`
- External links use `target="_blank" rel="noopener noreferrer"`
- Image fallbacks with `onError` handlers
- Respect `prefers-reduced-motion` for animations

### Error Handling
- Use `onError` callbacks for image/resource failures
- Graceful fallbacks with conditional rendering
- No try/catch in components — let error boundaries handle it

### Routing
- React Router v7 with `BrowserRouter`
- Pages in `src/pages/`, routes defined in `App.tsx`
- Use `<Link to="...">` for internal navigation, `<a>` for external
