import { useMemo, useState } from 'react';
import { ArrowLeft01Icon, Search01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

import { Button } from '@/components/ui/button';
import { DirectionalTransition } from '@/components/layout/DirectionalTransition';
import { Layout } from '@/components/layout/Layout';
import { SiteFooter } from '@/components/landing/SiteFooter';
import { SiteHeader } from '@/components/landing/SiteHeader';
import { TransitionLink } from '@/components/layout/TransitionLink';
import { cn } from '@/lib/utils';

type Page = {
  label: string;
  href: string;
  description: string;
};

const pages: Page[] = [
  { label: 'Inicio', href: '/', description: 'Página principal de Dev Night Talks' },
  { label: 'Grupos', href: '/groups', description: 'Grupos de la comunidad' },
  { label: 'Unirse', href: '/join', description: 'Cómo ser parte de la comunidad' },
  { label: 'Contribuir', href: '/contribute', description: 'Formas de contribuir al proyecto' },
  { label: 'Blog', href: '/blog', description: 'Artículos y recursos' },
];

export default function NotFound() {
  const [query, setQuery] = useState('');
  const [focused, setFocused] = useState(false);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return pages.filter((p) => p.label.toLowerCase().includes(q) || p.description.toLowerCase().includes(q));
  }, [query]);

  return (
    <Layout>
      <DirectionalTransition>
        <SiteHeader />
        <main className="flex flex-col items-center gap-6 py-16 text-center sm:gap-8 sm:py-20">
          <h1 className="font-heading text-5xl font-bold tracking-tight text-foreground sm:text-6xl">404</h1>
          <p className="max-w-sm text-sm text-muted-foreground sm:text-base">La página que buscas no existe o ha sido movida.</p>

          <div className="relative w-full max-w-md">
            <div
              className={cn(
                'flex items-center gap-2 rounded-lg border bg-background px-3 py-2 text-sm transition-colors',
                focused && 'border-ring',
              )}
            >
              <HugeiconsIcon icon={Search01Icon} className="size-4 shrink-0 text-muted-foreground" strokeWidth={2} aria-hidden />
              <input
                type="text"
                placeholder="Buscar página..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
            </div>

            {results.length > 0 && (
              <ul className="absolute left-0 right-0 z-10 mt-1 overflow-hidden rounded-lg border bg-background shadow-lg">
                {results.map((page) => (
                  <li key={page.href}>
                    <TransitionLink
                      to={page.href}
                      transitionType="nav-forward"
                      className="flex flex-col gap-0.5 px-4 py-2.5 text-left transition-colors hover:bg-accent"
                    >
                      <span className="text-sm font-medium text-foreground">{page.label}</span>
                      <span className="text-xs text-muted-foreground">{page.description}</span>
                    </TransitionLink>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <Button variant="outline" size="sm" asChild>
            <TransitionLink to="/" transitionType="nav-back">
              <HugeiconsIcon icon={ArrowLeft01Icon} data-icon="inline-start" strokeWidth={2} />
              Volver al inicio
            </TransitionLink>
          </Button>
        </main>
        <SiteFooter />
      </DirectionalTransition>
    </Layout>
  );
}
