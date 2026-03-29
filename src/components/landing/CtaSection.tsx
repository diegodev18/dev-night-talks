import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export function CtaSection() {
  return (
    <section
      className="flex flex-col gap-6"
      aria-labelledby="cta-title"
    >
      <Separator />
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-2">
          <h2
            id="cta-title"
            className="font-heading text-lg font-medium text-foreground"
          >
            ¿Quieres proponer una charla?
          </h2>
          <p className="max-w-xl text-sm text-muted-foreground">
            Deja aquí un CTA real (formulario, email o issue) cuando lo tengas.
            Por ahora es un ancla de layout.
          </p>
        </div>
        <Button variant="secondary" asChild>
          <a href="#">Contacto (placeholder)</a>
        </Button>
      </div>
    </section>
  )
}
