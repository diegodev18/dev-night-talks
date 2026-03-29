import { Link } from "react-router-dom"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const nav = [
  { label: "Inicio", to: "/" },
  { label: "Nosotros", to: "/#about" },
  { label: "Evento", to: "/#evento" },
  { label: "Programa", to: "/#agenda" },
  { label: "FAQ", to: "/#faq" },
  { label: "Comunidad", to: "/#partners" },
  { label: "Comunidades", to: "/groups" },
] as const

export function SiteHeader() {
  return (
    <header className="grid gap-6 border-b border-border pb-8 md:grid-cols-[auto_1fr_auto] md:items-center">
      <Link
        to="/"
        className="flex flex-col gap-0 leading-none outline-none focus-visible:ring-1 focus-visible:ring-ring"
      >
        <span className="font-heading text-[0.65rem] font-medium tracking-[0.2em] text-muted-foreground">
          DEV
        </span>
        <span className="font-heading text-sm font-semibold tracking-tight text-foreground sm:text-base">
          NIGHT TALKS
        </span>
      </Link>
      <nav
        className="flex flex-wrap justify-start gap-1 md:justify-center"
        aria-label="Principal"
      >
        {nav.map(({ label, to }) => (
          <Button key={label} variant="ghost" size="sm" asChild>
            <Link to={to}>{label}</Link>
          </Button>
        ))}
      </nav>
      <div className="flex md:justify-end">
        <Button className={cn("landing-cta")} size="default" asChild>
          <Link to="/#final-cta">Join the Conversation</Link>
        </Button>
      </div>
    </header>
  )
}
