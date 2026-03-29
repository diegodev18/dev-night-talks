import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const slots = [
  {
    title: "Apertura y bienvenida",
    time: "19:00",
    detail: "Presentación del formato y anuncios de la comunidad.",
  },
  {
    title: "Charla principal (TBA)",
    time: "19:15",
    detail: "Detalle del tema y ponente cuando esté confirmado.",
  },
  {
    title: "Networking",
    time: "20:00",
    detail: "Espacio libre para conversar y compartir proyectos.",
  },
] as const

export function AgendaPreviewSection() {
  return (
    <section
      id="agenda"
      className="flex flex-col gap-8"
      aria-labelledby="agenda-heading"
    >
      <div className="flex flex-col gap-2">
        <h2
          id="agenda-heading"
          className="font-heading text-lg font-medium text-foreground sm:text-xl"
        >
          Programa del encuentro
        </h2>
        <p className="max-w-2xl text-sm text-muted-foreground">
          Vista previa del orden del día. La agenda detallada puede variar;
          consulta la versión completa en la página de eventos.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {slots.map((slot) => (
          <Card key={slot.title} size="sm">
            <CardHeader>
              <CardTitle>{slot.title}</CardTitle>
              <CardDescription>{slot.time}</CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-xs text-muted-foreground">{slot.detail}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex flex-wrap gap-3">
        <Button variant="outline" asChild>
          <a href="/agenda.html">Ver agenda completa</a>
        </Button>
      </div>
    </section>
  )
}
