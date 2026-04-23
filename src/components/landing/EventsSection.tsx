import { PinLocation01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const events = [
  {
    title: "Cursor Meetup",
    date: "Sábado 30 de Mayo a la 1:00 PM",
    location: "Museo Regional La Cacaotera",
    url: "https://luma.com/embed/event/evt-xFfw4kgLf538UUF/simple",
    registerUrl: "https://luma.com/g3uj926l",
  },
] as const

export function EventsSection() {
  return (
    <section
      id="eventos"
      className="scroll-mt-24 flex flex-col gap-6"
      aria-labelledby="eventos-heading"
    >
      <div className="flex flex-col gap-2">
        <Badge variant="outline" className="w-fit uppercase tracking-widest">
          Eventos
        </Badge>
        <h2
          id="eventos-heading"
          className="font-heading text-2xl font-semibold tracking-tight text-primary sm:text-3xl"
        >
          Próximos eventos
        </h2>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <Card key={event.title} className="overflow-hidden">
            <CardContent className="flex flex-col gap-4 p-4">
              <div className="flex flex-col gap-2">
                <h3 className="font-heading text-lg font-semibold">
                  {event.title}
                </h3>
                <p className="flex flex-wrap items-start gap-2 text-sm text-muted-foreground">
                  <HugeiconsIcon
                    icon={PinLocation01Icon}
                    className="mt-0.5 shrink-0"
                  />
                  <span>{event.location}</span>
                </p>
                <p className="text-sm text-muted-foreground">{event.date}</p>
              </div>
              <iframe
                src={event.url}
                className="w-full rounded-sm sm:h-[320px] h-[280px]"
                style={{ border: "1px solid #bfcbda88" }}
                allow="fullscreen; payment"
                aria-hidden="false"
                tabIndex={0}
                title={`${event.title} - Registro`}
              />
              <Button asChild>
                <a href={event.registerUrl} target="_blank" rel="noopener noreferrer">
                  Registrarse
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}