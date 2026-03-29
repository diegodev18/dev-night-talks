import { useState } from "react"

import { SiteFooter } from "@/components/landing/SiteFooter"
import { SiteHeader } from "@/components/landing/SiteHeader"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Layout } from "@/components/layout/Layout"

/**
 * Rutas bajo public/groups/ — .webp. Si renombran archivos, actualizar imageSrc.
 */
const communities = [
  {
    name: "AWS Villahermosa",
    description:
      "Comunidad en torno a la nube AWS: buenas prácticas, arquitectura y experiencias locales.",
    imageSrc: "/groups/aws.webp",
    initials: "AWS",
  },
  {
    name: "Cursor Villahermosa",
    description:
      "Espacio para quienes usan Cursor y herramientas de desarrollo con asistencia de IA.",
    imageSrc: "/groups/cursor.webp",
    initials: "CU",
  },
  {
    name: "Claude Villahermosa",
    description:
      "Encuentros y conversación en torno a Claude y el ecosistema de IA conversacional.",
    imageSrc: "/groups/claude.webp",
    initials: "CL",
  },
] as const

type CommunityCardProps = (typeof communities)[number]

function CommunityCard({ name, description, imageSrc, initials }: CommunityCardProps) {
  const [imageFailed, setImageFailed] = useState(false)

  return (
    <Card className="overflow-hidden pt-0!" size="sm">
      <div className="relative aspect-4/3 w-full bg-muted">
        {!imageFailed ? (
          <img
            src={imageSrc}
            alt={name}
            className="absolute inset-0 size-full object-cover"
            onError={() => setImageFailed(true)}
          />
        ) : null}
        {imageFailed ? (
          <div
            className="flex size-full items-center justify-center"
            aria-hidden
          >
            <span className="font-heading text-2xl font-semibold tracking-tight text-muted-foreground">
              {initials}
            </span>
          </div>
        ) : null}
      </div>
      <CardHeader className="pt-3">
        <CardTitle className="font-heading text-base sm:text-lg">{name}</CardTitle>
        <CardDescription className="text-pretty text-xs sm:text-sm">
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  )
}

export default function Groups() {
  return (
    <Layout>
      <SiteHeader />
      <main className="flex flex-col gap-10">
        <section
          className="flex flex-col gap-6"
          aria-labelledby="groups-page-heading"
        >
          <div className="flex max-w-3xl flex-col gap-4">
            <h1
              id="groups-page-heading"
              className="font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
            >
              Comunidades hermanas
            </h1>
            <p className="text-pretty text-sm text-muted-foreground sm:text-base">
              Estos grupos tomaron forma o se fortalecieron junto al ecosistema de{" "}
              <span className="text-foreground">Dev Night Talks</span> en
              Villahermosa: espacios distintos con su propio enfoque, la misma
              energía de compartir y aprender en comunidad.
            </p>
            <p className="text-pretty text-sm text-muted-foreground sm:text-base">
              Cada uno organiza sus propios encuentros y dinámicas; aquí solo los
              damos a conocer para que puedas sumarte al que más te interese.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {communities.map((c) => (
              <CommunityCard key={c.name} {...c} />
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </Layout>
  )
}
