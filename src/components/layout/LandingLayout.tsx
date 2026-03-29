import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

type LandingLayoutProps = {
  children: ReactNode
  className?: string
}

export function LandingLayout({ children, className }: LandingLayoutProps) {
  return (
    <div className="flex min-h-svh flex-col bg-background text-foreground">
      <div
        className={cn(
          "mx-auto flex w-full max-w-5xl flex-1 flex-col gap-12 px-6 py-8 sm:gap-16 sm:py-12",
          className
        )}
      >
        {children}
      </div>
    </div>
  )
}
