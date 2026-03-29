import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const highlights = [
  {
    title: "Charlas cortas",
    description:
      "Formato ágil: ideas concretas que puedes llevar al día siguiente.",
  },
  {
    title: "Q&A y debate",
    description:
      "Tiempo para preguntas y conversación con ponentes y asistentes.",
  },
  {
    title: "Networking",
    description:
      "Conoce a otras personas que trabajan en producto, plataforma y tooling.",
  },
] as const

export function HighlightsSection() {
  return (
    <section className="flex flex-col gap-6" aria-labelledby="highlights-title">
      <div className="flex flex-col gap-2">
        <h2
          id="highlights-title"
          className="font-heading text-lg font-medium text-foreground sm:text-xl"
        >
          Qué ofrece el evento
        </h2>
        <p className="max-w-2xl text-sm text-muted-foreground">
          Tres pilares que definirán el contenido de la landing cuando tengas
          fecha, sede y agenda cerrada.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {highlights.map((item) => (
          <Card key={item.title} size="sm">
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-xs text-muted-foreground">Detalle pendiente.</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
