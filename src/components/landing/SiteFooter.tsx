import { Separator } from "@/components/ui/separator"

export function SiteFooter() {
  return (
    <footer className="mt-auto flex flex-col gap-4 pb-4">
      <Separator />
      <p className="text-xs text-muted-foreground">
        dev-talks-night — estructura inicial. Código y contenido sujetos a
        cambio.
      </p>
    </footer>
  )
}
