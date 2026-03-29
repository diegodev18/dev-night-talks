import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export function FinalCtaSection() {
  return (
    <section
      id="final-cta"
      className="flex flex-col gap-8"
      aria-labelledby="final-cta-heading"
    >
      <Separator />
      <div className="flex flex-col items-start gap-4 sm:items-center sm:text-center">
        <h2
          id="final-cta-heading"
          className="font-heading text-lg font-medium text-foreground sm:text-xl"
        >
          Súmate a la conversación
        </h2>
        <p className="max-w-xl text-sm text-muted-foreground">
          Síguenos para fechas y anuncios, o escríbenos si quieres proponer una
          charla o colaborar con el evento.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button asChild>
            <a
              href="https://www.instagram.com/devnighttalks/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a
              href="https://www.tiktok.com/@devnighttalks"
              target="_blank"
              rel="noopener noreferrer"
            >
              TikTok
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
