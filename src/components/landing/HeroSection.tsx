import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section
      id="contenido"
      className="flex flex-col gap-6"
      aria-labelledby="landing-hero-title"
    >
      <Badge variant="secondary">Próxima edición — fecha por confirmar</Badge>
      <div className="flex flex-col gap-4">
        <h1
          id="landing-hero-title"
          className="font-heading text-3xl font-medium tracking-tight text-foreground sm:text-4xl"
        >
          Charlas, comunidad y networking para quienes construyen producto.
        </h1>
        <p className="max-w-2xl text-pretty text-sm text-muted-foreground sm:text-base">
          Noches presenciales con ponentes y espacio para compartir lo que
          estás aprendiendo. Estructura inicial: copy y secciones listas para
          iterar.
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <Button size="lg" asChild>
          <a href="#">Apuntarme (placeholder)</a>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <a href="/agenda.html">Ver agenda</a>
        </Button>
      </div>
    </section>
  )
}
