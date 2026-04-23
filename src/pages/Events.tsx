import { useState, useMemo } from "react"
import { CalendarIcon, PinLocation01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { SiteFooter } from "@/components/landing/SiteFooter"
import { SiteHeader } from "@/components/landing/SiteHeader"
import { DirectionalTransition } from "@/components/layout/DirectionalTransition"
import { Layout } from "@/components/layout/Layout"

type Event = {
  id: string
  title: string
  description: string
  date: string
  status: "upcoming" | "past"
  topics: string[]
  location: string
  meetupUrl?: string
}

const events: Event[] = [
  {
    id: "1",
    title: "Cursor Meetup",
    description:
      "Primer Cursor Meetup en Villahermosa. Comparte casos de uso, flujos de trabajo y aprende con otros desarrolladores que usan IA. Habrá comida, networking y buenas conversaciones.",
    date: "Sábado 30 de Mayo 2026 - 1:00 PM",
    status: "upcoming",
    topics: ["IA", "Cursor", "Productividad"],
    location: "Museo Regional La Cacaotera",
    meetupUrl: "https://luma.com/g3uj926l",
  },
  {
    id: "2",
    title: "Dev Night Talks: Cloud & DevOps",
    description:
      "Sesión sobre contenedores, Kubernetes y mejores prácticas para desplegar aplicaciones en la nube.",
    date: "Sábado 22 de Marzo 2025 - 6:00 PM",
    status: "past",
    topics: ["Cloud", "Docker", "DevOps"],
    location: "Museo Regional La Cacaotera",
  },
  {
    id: "3",
    title: "Dev Night Talks: React & TypeScript",
    description:
      "Charla sobre patrones avanzados en React, TypeScript para proyectos reales y componentes reutilizables.",
    date: "Sábado 15 de Febrero 2025 - 6:00 PM",
    status: "past",
    topics: ["React", "TypeScript", "Frontend"],
    location: "Coworking Villahermosa",
  },
  {
    id: "4",
    title: "Dev Night Talks: AI Agents",
    description:
      "Exploración de agentes de IA autonomous, tool use y cómo integrarlos en aplicaciones.",
    date: "Sábado 18 de Enero 2025 - 6:00 PM",
    status: "past",
    topics: ["IA", "Agentes", "Automación"],
    location: "Museo Regional La Cacaotera",
  },
  {
    id: "5",
    title: "Dev Night Talks: Open Source",
    description:
      "Cómo contribuir a proyectos open source, git flow, pull requests y comunidad.",
    date: "Sábado 14 de Diciembre 2024 - 6:00 PM",
    status: "past",
    topics: ["Git", "Open Source", "Colaboración"],
    location: "Coworking Villahermosa",
  },
  {
    id: "6",
    title: "Dev Night Talks: Primer Meetup",
    description:
      "El primer encuentro de Dev Night Talks: presentación del grupo, temas a cubrir y networking.",
    date: "Sábado 16 de Noviembre 2024 - 6:00 PM",
    status: "past",
    topics: ["Comunidad", "Kickoff", "Networking"],
    location: "Café La Central",
  },
]

type Filter = "all" | "upcoming" | "past"

function EventCard({ event }: { event: Event }) {
  return (
    <Card className="flex flex-col overflow-hidden transition-shadow hover:shadow-[0_0_0_2px_var(--ring)] hover:shadow-[0_0_0_4px_var(--ring)/20]">
      <CardHeader className="flex flex-col gap-2">
        <div className="flex flex-wrap items-center gap-2">
          {event.status === "upcoming" ? (
            <Badge variant="default">Próximo</Badge>
          ) : (
            <Badge variant="secondary">Pasado</Badge>
          )}
          {event.topics.map((topic) => (
            <Badge key={topic} variant="outline" className="text-xs">
              {topic}
            </Badge>
          ))}
        </div>
        <CardTitle className="font-heading text-lg">{event.title}</CardTitle>
        <CardDescription className="text-pretty">{event.description}</CardDescription>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col gap-4">
        <div className="flex flex-col gap-1 text-sm text-muted-foreground">
          <p className="flex items-start gap-2">
            <HugeiconsIcon
              icon={CalendarIcon}
              className="mt-0.5 shrink-0"
            />
            <span>{event.date}</span>
          </p>
          <p className="flex items-start gap-2">
            <HugeiconsIcon
              icon={PinLocation01Icon}
              className="mt-0.5 shrink-0"
            />
            <span>{event.location}</span>
          </p>
        </div>
        {event.status === "upcoming" && event.meetupUrl && (
          <Button asChild>
            <a
              href={event.meetupUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Registrarse
            </a>
          </Button>
        )}
      </CardContent>
    </Card>
  )
}

export default function Events() {
  const [filter, setFilter] = useState<Filter>("all")

  const filteredEvents = useMemo(() => {
    if (filter === "all") return events
    return events.filter((e) => e.status === filter)
  }, [filter])

  return (
    <Layout>
      <DirectionalTransition>
        <SiteHeader />
        <main className="flex flex-col gap-10">
          <section
            className="flex flex-col gap-6"
            aria-labelledby="events-page-heading"
          >
            <div className="flex max-w-3xl flex-col gap-4">
              <h1
                id="events-page-heading"
                className="font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
              >
                Eventos
              </h1>
              <p className="text-pretty text-sm text-muted-foreground sm:text-base">
                Listado de eventos pasados y próximos de Dev Night Talks.
                Únete a nuestros próximos encuentros o revisa las sesiones
                anteriores.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button
                variant={filter === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter("all")}
              >
                Todos
              </Button>
              <Button
                variant={filter === "upcoming" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter("upcoming")}
              >
                Próximos
              </Button>
              <Button
                variant={filter === "past" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter("past")}
              >
                Pasados
              </Button>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
            {filteredEvents.length === 0 && (
              <p className="text-muted-foreground">
                No hay eventos en esta categoría.
              </p>
            )}
          </section>
        </main>
        <SiteFooter />
      </DirectionalTransition>
    </Layout>
  )
}