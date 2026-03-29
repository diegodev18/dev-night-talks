import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  return (
    <header className="grid gap-6 border-b border-border pb-8 md:grid-cols-[auto_1fr_auto] md:items-center">
      <div className="flex flex-col gap-0 leading-none">
        <span className="font-heading text-[0.65rem] font-medium tracking-[0.2em] text-muted-foreground">
          DEV
        </span>
        <span className="font-heading text-sm font-semibold tracking-tight text-foreground sm:text-base">
          NIGHT TALKS
        </span>
      </div>
      <nav
        className="flex flex-wrap justify-start gap-1 md:justify-center"
        aria-label="Principal"
      >
        <Button variant="ghost" size="sm" asChild>
          <a href="#">Home</a>
        </Button>
        <Button variant="ghost" size="sm" asChild>
          <a href="/agenda.html">Events</a>
        </Button>
        <Button variant="ghost" size="sm" asChild>
          <a href="#evento">About</a>
        </Button>
        <Button variant="ghost" size="sm" asChild>
          <a href="#partners">Community</a>
        </Button>
      </nav>
      <div className="flex md:justify-end">
        <Button className={cn("landing-cta")} size="default" asChild>
          <a href="#">Join the Conversation</a>
        </Button>
      </div>
    </header>
  )
}
