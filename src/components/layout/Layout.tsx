import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

type LayoutProps = {
  children: ReactNode;
  className?: string;
};

export function Layout({ children, className }: LayoutProps) {
  return (
    <div className="dark relative isolate flex min-h-svh flex-col bg-background font-sans text-foreground">
      <div className="landing-rainbow-backdrop" aria-hidden />
      <div className={cn('relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col gap-24 px-6 py-10 sm:gap-32 sm:py-20', className)}>
        {children}
      </div>
    </div>
  );
}
