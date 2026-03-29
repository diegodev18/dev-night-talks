import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

type LandingLayoutProps = {
  children: ReactNode
  className?: string
}

export function LandingLayout({ children, className }: LandingLayoutProps) {
  return (
    <div className="dark flex min-h-svh flex-col bg-background font-sans text-foreground">
      <div
        className={cn(
          "mx-auto flex w-full max-w-7xl flex-1 flex-col gap-20 px-6 py-8 sm:py-16",
          className
        )}
      >
        {children}
      </div>
    </div>
  )
}
