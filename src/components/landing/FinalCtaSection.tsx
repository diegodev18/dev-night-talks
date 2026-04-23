import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

export function FinalCtaSection() {
  return (
    <section id="final-cta" className="scroll-mt-24 flex flex-col gap-8" aria-labelledby="final-cta-heading">
      <Separator />
      <div className="flex flex-col items-start gap-4 sm:items-center sm:text-center">
        <h2 id="final-cta-heading" className="font-heading text-lg font-medium text-foreground sm:text-xl">
          Súmate a la conversación
        </h2>
        <p className="max-w-xl text-sm text-muted-foreground">
          Únete al grupo en Meetup para ver fechas, confirmar asistencia y estar al tanto de anuncios y próximos encuentros.
        </p>
        <Button className={cn('landing-cta')} size="lg" asChild>
          <a href="https://www.meetup.com/dev-night-talks" target="_blank" rel="noopener noreferrer">
            Unirse en Meetup
          </a>
        </Button>
      </div>
    </section>
  );
}
