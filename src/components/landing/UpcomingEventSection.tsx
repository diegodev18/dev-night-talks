import { PinLocation01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

export function UpcomingEventSection() {
  return (
    <section id="evento" className="scroll-mt-24 grid gap-10 lg:grid-cols-2 lg:items-center" aria-labelledby="event-heading">
      <div className="flex justify-center lg:justify-start">
        <Avatar className="size-52 ring-2 ring-primary/35 ring-offset-4 ring-offset-background sm:size-60">
          <AvatarImage src="/image.png" alt="Asistentes y organizadores en un meetup de Dev Night Talks" />
          <AvatarFallback className="bg-muted text-lg font-medium text-muted-foreground">Comunidad</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-col gap-4">
        <Badge variant="outline" className="w-fit uppercase tracking-widest">
          Próximo evento
        </Badge>
        <h2 id="event-heading" className="font-heading text-2xl font-semibold tracking-tight text-primary sm:text-3xl">
          Este jueves 7:00 PM
        </h2>
        <p className="flex flex-wrap items-start gap-2 text-sm text-muted-foreground">
          <HugeiconsIcon icon={PinLocation01Icon} className="mt-0.5 shrink-0" />
          <span>LATI.mx, Plaza deportiva (La Mega), 1er piso sobre el banco HSBC, Villahermosa.</span>
        </p>
        <p className="text-sm text-muted-foreground sm:text-base">Conoce a la comunidad tech. Comparte conocimiento y crece juntos.</p>
      </div>
    </section>
  );
}
