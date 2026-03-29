import { ArrowRight01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function HeroSection() {
  return (
    <section
      className="flex flex-col items-center gap-8 text-center"
      aria-labelledby="hero-title"
    >
      <div className="flex max-w-3xl flex-col gap-6">
        <h1
          id="hero-title"
          className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl"
        >
          DEV NIGHT TALKS
        </h1>
        <p className="text-pretty text-sm text-muted-foreground sm:text-base md:text-lg">
          Conéctate, comparte experiencias y construye comunidad en Villahermosa.
          El lugar ideal para desarrolladores apasionados por la tecnología y la
          innovación.
        </p>
      </div>
      <Button className={cn("landing-cta")} size="lg" asChild>
        <a href="#final-cta">
          Join the Conversation
          <HugeiconsIcon
            icon={ArrowRight01Icon}
            data-icon="inline-end"
            strokeWidth={2}
          />
        </a>
      </Button>
    </section>
  )
}
