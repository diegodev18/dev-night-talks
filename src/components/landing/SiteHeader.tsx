import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-6">
      <p className="font-heading text-sm font-medium tracking-tight text-foreground">
        dev-talks-night
      </p>
      <nav className="flex flex-wrap items-center gap-2">
        <Button variant="ghost" size="sm" asChild>
          <a href="#contenido">Contenido</a>
        </Button>
        <Button variant="ghost" size="sm" asChild>
          <a href="/agenda.html">Agenda</a>
        </Button>
      </nav>
    </header>
  )
}
