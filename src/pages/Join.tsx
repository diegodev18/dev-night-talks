import { ArrowRight01Icon, CheckCircle, RocketIcon, CalendarIcon, UserIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DirectionalTransition } from '@/components/layout/DirectionalTransition';
import { Layout } from '@/components/layout/Layout';
import { SiteFooter } from '@/components/landing/SiteFooter';
import { SiteHeader } from '@/components/landing/SiteHeader';
import { TransitionLink } from '@/components/layout/TransitionLink';
import { cn } from '@/lib/utils';

type Step = {
  number: number;
  title: string;
  description: string;
  icon: typeof CheckCircle;
};

const steps: Step[] = [
  {
    number: 1,
    title: 'Únete al Meetup',
    description: 'Crea tu cuenta en Meetup y busca "Dev Night Talks" para encontrar nuestro grupo.',
    icon: UserIcon,
  },
  {
    number: 2,
    title: 'Revisa los eventos',
    description: 'Explora las fechas, temas y próximos encuentros que tenemos preparados.',
    icon: CalendarIcon,
  },
  {
    number: 3,
    title: 'Confirma tu asistencia',
    description: 'Registra tu lugar para que sepamos que vienes y preparar todo.',
    icon: CheckCircle,
  },
  {
    number: 4,
    title: 'Asiste y conecta',
    description: 'Ven, comparte lo que sabes y conoce a la comunidad en persona.',
    icon: RocketIcon,
  },
];

export default function Join() {
  return (
    <Layout>
      <DirectionalTransition>
        <SiteHeader />
        <main className="flex flex-col gap-16">
          <section className="flex flex-col items-center gap-6 text-center" aria-labelledby="join-heading">
            <h1 id="join-heading" className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              ¿Listo para unirte?
            </h1>
            <p className="max-w-xl text-sm text-muted-foreground sm:text-base md:text-lg">
              En cuatro pasos simples puedes ser parte de la comunidad de Dev Night Talks en Villahermosa.
            </p>
          </section>

          <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" aria-labelledby="steps-heading">
            <h2 id="steps-heading" className="sr-only">
              Pasos para unirte
            </h2>
            {steps.map((step) => (
              <Card key={step.number} className="flex flex-col gap-4">
                <CardHeader className="gap-3">
                  <div className="flex items-center gap-3">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                      {step.number}
                    </span>
                    <HugeiconsIcon icon={step.icon} className="size-5 text-muted-foreground" strokeWidth={2} aria-hidden />
                  </div>
                  <CardTitle className="font-heading text-base sm:text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardDescription className="px-3 pb-3 text-pretty text-xs sm:text-sm">{step.description}</CardDescription>
              </Card>
            ))}
          </section>

          <section className="flex flex-col items-center gap-6 text-center sm:gap-8" aria-labelledby="join-cta-heading">
            <h2 id="join-cta-heading" className="font-heading text-xl font-medium text-foreground sm:text-2xl">
              Te esperamos
            </h2>
            <p className="max-w-md text-sm text-muted-foreground sm:text-base">
              Únete a nuestro grupo en Meetup para estar al tanto de todo lo que viene.
            </p>
            <Button className={cn('landing-cta')} size="lg" asChild>
              <a href="https://www.meetup.com/dev-night-talks" target="_blank" rel="noopener noreferrer">
                Unirse en Meetup
                <HugeiconsIcon icon={ArrowRight01Icon} data-icon="inline-end" strokeWidth={2} />
              </a>
            </Button>
            <TransitionLink
              to="/"
              transitionType="nav-back"
              className="text-sm text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
            >
              Volver al inicio
            </TransitionLink>
          </section>
        </main>
        <SiteFooter />
      </DirectionalTransition>
    </Layout>
  );
}
