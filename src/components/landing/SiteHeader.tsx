import { ArrowDown01Icon, ArrowRight01Icon, Menu01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { Link, useLocation } from 'react-router-dom';

import { TransitionLink } from '@/components/layout/TransitionLink';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

type NavItem = {
  label: string;
  to: string;
  type: 'section' | 'page';
};

const landingNav: NavItem[] = [
  { label: 'Nosotros', to: '/#about', type: 'section' },
  { label: 'Evento', to: '/#evento', type: 'section' },
  { label: 'Programa', to: '/#agenda', type: 'section' },
  { label: 'FAQ', to: '/#faq', type: 'section' },
];

const pageNav: NavItem[] = [
  { label: 'Comunidades', to: '/groups', type: 'page' },
  { label: 'Eventos', to: '/events', type: 'page' },
  { label: 'Blog', to: '/blog', type: 'page' },
  { label: 'Contribuir', to: '/contribute', type: 'page' },
];

const homeItem: NavItem = { label: 'Inicio', to: '/', type: 'page' };

function ArrowSeparator({ delay }: { delay: number }) {
  return (
    <HugeiconsIcon
      icon={ArrowRight01Icon}
      strokeWidth={2}
      className="hidden size-3 shrink-0 text-muted-foreground nav-item-anim 2xl:block"
      style={{ animationDelay: `${delay}ms` }}
      aria-hidden
    />
  );
}

function PipeSeparator({ delay, className }: { delay: number; className?: string }) {
  return (
    <div
      className={cn('mx-0.5 h-5 w-px shrink-0 bg-border nav-item-anim xl:mx-1', className)}
      style={{ animationDelay: `${delay}ms` }}
      aria-hidden
    />
  );
}

function NavButton({ item, delay }: { item: NavItem; delay: number }) {
  return (
    <Button
      variant="ghost"
      size="sm"
      asChild
      className="px-1.5 nav-item-anim xl:px-2.5"
      style={{ animationDelay: `${delay}ms` }}
    >
      <Link to={item.to}>{item.label}</Link>
    </Button>
  );
}

function SectionsDropdown({ delay }: { delay: number }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="px-1.5 nav-item-anim xl:px-2.5"
          style={{ animationDelay: `${delay}ms` }}
        >
          Secciones
          <HugeiconsIcon icon={ArrowDown01Icon} strokeWidth={2} aria-hidden />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        {landingNav.map((item) => (
          <DropdownMenuItem key={item.label} asChild>
            <Link to={item.to}>{item.label}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function MobileNavButton({ item }: { item: NavItem }) {
  return (
    <SheetClose asChild>
      <Button variant="ghost" className="w-full justify-start" asChild>
        <Link to={item.to}>{item.label}</Link>
      </Button>
    </SheetClose>
  );
}

export function SiteHeader() {
  const location = useLocation();
  const isLanding = location.pathname === '/';

  // Landing sections: expanded from lg up, collapsed into a dropdown below it.
  const landingItems = landingNav.flatMap((item, i) => {
    const delay = i * 40;
    const elements = [
      <div key={item.label} className="hidden lg:block">
        <NavButton item={item} delay={delay} />
      </div>,
    ];
    if (i < landingNav.length - 1) {
      elements.push(<ArrowSeparator key={`arrow-${i}`} delay={delay + 20} />);
    }
    return elements;
  });

  const separatorDelay = landingNav.length * 40;

  const buildPageItems = (startDelay: number) =>
    pageNav.flatMap((item, i) => {
      const delay = startDelay + i * 40;
      const elements = [<NavButton key={item.label} item={item} delay={delay} />];
      if (i < pageNav.length - 1) {
        elements.push(<PipeSeparator key={`sep-${i}`} delay={delay + 20} />);
      }
      return elements;
    });

  const mobileNavItems = isLanding ? [...landingNav, ...pageNav] : [homeItem, ...pageNav];

  return (
    <header className="grid gap-6 border-b border-border pb-8 md:grid-cols-[auto_minmax(0,1fr)_auto] md:items-center">
      <div className="flex shrink-0 items-center gap-2">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon-sm" className="md:hidden">
              <HugeiconsIcon icon={Menu01Icon} strokeWidth={2} />
              <span className="sr-only">Abrir menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle className="sr-only">Navegacion</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 p-4" aria-label="Movil">
              {mobileNavItems.map((item) => (
                <MobileNavButton key={item.label} item={item} />
              ))}
              <Separator className="my-2" />
              <SheetClose asChild>
                <Button className="w-full" asChild>
                  <TransitionLink to="/join">Join the Conversation</TransitionLink>
                </Button>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
        <Link to="/" className="flex flex-col gap-0 leading-none outline-none focus-visible:ring-1 focus-visible:ring-ring">
          <span className="font-heading text-[0.65rem] font-medium tracking-[0.2em] text-muted-foreground">DEV</span>
          <span className="font-heading text-sm font-semibold tracking-tight text-foreground sm:text-base">NIGHT TALKS</span>
        </Link>
      </div>
      <nav className="hidden min-w-0 items-center justify-center md:flex" aria-label="Principal">
        {isLanding ? (
          <div key={`landing-${location.pathname}`} className="flex min-w-0 items-center gap-0.5 xl:gap-1">
            <div className="lg:hidden">
              <SectionsDropdown delay={0} />
            </div>
            {landingItems}
            <PipeSeparator delay={separatorDelay} />
            {buildPageItems(separatorDelay)}
          </div>
        ) : (
          <div key={`groups-${location.pathname}`} className="flex min-w-0 items-center gap-0.5 xl:gap-1">
            <NavButton item={homeItem} delay={0} />
            <PipeSeparator delay={20} />
            {buildPageItems(40)}
          </div>
        )}
      </nav>
      <div className="hidden shrink-0 md:flex md:justify-end">
        <Button className={cn('landing-cta')} size="default" asChild>
          <TransitionLink to="/join">
            <span className="lg:hidden">Join</span>
            <span className="hidden lg:inline">Join the Conversation</span>
          </TransitionLink>
        </Button>
      </div>
    </header>
  );
}
