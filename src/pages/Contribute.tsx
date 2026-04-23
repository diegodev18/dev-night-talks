import { ArrowRight01Icon, GitForkIcon, BookOpenIcon, RocketIcon, CheckCircle } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { DirectionalTransition } from '@/components/layout/DirectionalTransition';
import { Layout } from '@/components/layout/Layout';
import { SiteFooter } from '@/components/landing/SiteFooter';
import { SiteHeader } from '@/components/landing/SiteHeader';
import { TransitionLink } from '@/components/layout/TransitionLink';
import { cn } from '@/lib/utils';

const REPO_URL = 'https://github.com/diegodev18/dev-night-talks';

type Contributor = {
  name: string;
  username: string;
  avatarUrl: string;
  role: string;
};

const contributors: Contributor[] = [
  {
    name: 'Diego',
    username: 'diegodev18',
    avatarUrl: 'https://github.com/diegodev18.png',
    role: 'Mantenedor',
  },
];

type Step = {
  title: string;
  description: string;
  icon: typeof BookOpenIcon;
};

const steps: Step[] = [
  {
    title: 'Fork y clona el repo',
    description:
      'Haz fork del repositorio y clonalo en tu maquina. Luego instala las dependencias con pnpm install e inicia el servidor de desarrollo con pnpm dev.',
    icon: GitForkIcon,
  },
  {
    title: 'Crea una rama',
    description:
      'Siempre parte de main y crea una rama descriptiva con el formato tipo/descripcion-corta, por ejemplo feature/nueva-seccion o fix/hero-layout.',
    icon: BookOpenIcon,
  },
  {
    title: 'Implementa y verifica',
    description:
      'Haz tus cambios siguiendo las convenciones del proyecto. Antes de commitear, ejecuta pnpm build y pnpm lint para asegurar que todo esta correcto.',
    icon: CheckCircle,
  },
  {
    title: 'Abre un Pull Request',
    description:
      'Haz push de tu rama y crea un PR en GitHub con una descripcion clara de los cambios. Usa el formato de PR indicado en la guia de contribucion.',
    icon: RocketIcon,
  },
];

type Faq = {
  question: string;
  answer: string;
};

const faqs: Faq[] = [
  {
    question: 'Necesito experiencia previa para contribuir?',
    answer:
      'No. Hay tareas para todos los niveles, desde correcciones de texto hasta funcionalidades completas. Cada issue esta etiquetado con su nivel de dificultad.',
  },
  {
    question: 'Que tipo de contribuciones buscan?',
    answer:
      'Aceptamos codigo nuevo, correcciones de bugs, mejoras de estilo, documentacion, nuevas paginas, optimizaciones de rendimiento y mas. Revisa el roadmap de paginas en docs/ROADMAP_PAGES.md para ver que esta pendiente.',
  },
  {
    question: 'Como elijo en que trabajar?',
    answer:
      'Revisa los issues abiertos en GitHub. Los etiquetados como good first issue son ideales para empezar. Si quieres algo que no esta listado, abre un issue primero para coordinar.',
  },
  {
    question: 'Que convenciones debo seguir?',
    answer:
      'Usamos Conventional Commits para los mensajes de commit, TypeScript estricto, Tailwind CSS v4 con tokens semanticos y componentes shadcn/ui. Lee la guia completa en docs/CONTRIBUTING.md.',
  },
  {
    question: 'Mi PR sera rechazado si no es perfecto?',
    answer:
      'No. Los revisores te daran feedback constructivo para mejorar. Lo importante es que tu codigo pase pnpm build y pnpm lint, y que siga las convenciones basicas del proyecto.',
  },
  {
    question: 'Puedo sugerir nuevas funcionalidades?',
    answer:
      'Claro. Abre un issue con una descripcion clara de tu propuesta, por que es util y como lo implementarias. La comunidad lo discutira antes de empezar.',
  },
];

function ContributorAvatar({ contributor }: { contributor: Contributor }) {
  return (
    <a
      href={`https://github.com/${contributor.username}`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center gap-3 text-center text-inherit no-underline transition-opacity hover:opacity-80"
    >
      <Avatar size="lg">
        <AvatarImage src={contributor.avatarUrl} alt={contributor.name} />
        <AvatarFallback>{contributor.name.slice(0, 2).toUpperCase()}</AvatarFallback>
      </Avatar>
      <div className="flex flex-col items-center gap-1">
        <span className="font-heading text-sm font-medium text-foreground">{contributor.name}</span>
        <Badge variant="outline">{contributor.role}</Badge>
      </div>
    </a>
  );
}

function StepCard({ step, index }: { step: Step; index: number }) {
  return (
    <Card className="flex flex-col gap-4">
      <CardHeader className="gap-3">
        <div className="flex items-center gap-3">
          <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
            {index + 1}
          </span>
          <HugeiconsIcon icon={step.icon} className="size-5 text-muted-foreground" strokeWidth={2} aria-hidden />
        </div>
        <CardTitle className="font-heading text-base sm:text-lg">{step.title}</CardTitle>
      </CardHeader>
      <CardDescription className="px-3 pb-3 text-pretty text-xs sm:text-sm">{step.description}</CardDescription>
    </Card>
  );
}

export default function Contribute() {
  return (
    <Layout>
      <DirectionalTransition>
        <SiteHeader />
        <main className="flex flex-col gap-16">
          <section className="flex flex-col items-center gap-6 text-center" aria-labelledby="contribute-hero-heading">
            <h1
              id="contribute-hero-heading"
              className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl"
            >
              Contribuye al proyecto
            </h1>
            <p className="max-w-xl text-sm text-muted-foreground sm:text-base md:text-lg">
              Dev Night Talks es open source y crece gracias a la comunidad. Aqui tienes todo lo que necesitas para empezar a contribuir.
            </p>
            <Button className={cn('landing-cta')} size="lg" asChild>
              <a href={REPO_URL} target="_blank" rel="noopener noreferrer">
                Ver repositorio
                <HugeiconsIcon icon={ArrowRight01Icon} data-icon="inline-end" strokeWidth={2} />
              </a>
            </Button>
          </section>

          <section className="flex flex-col gap-6" aria-labelledby="contributors-heading">
            <div className="flex flex-col gap-4">
              <h2 id="contributors-heading" className="font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                Contribuidores
              </h2>
              <p className="text-pretty text-sm text-muted-foreground sm:text-base">Las personas que hacen posible este proyecto.</p>
            </div>
            <div className="flex flex-wrap gap-8">
              {contributors.map((c) => (
                <ContributorAvatar key={c.username} contributor={c} />
              ))}
            </div>
          </section>

          <section className="flex flex-col gap-6" aria-labelledby="how-to-heading">
            <div className="flex flex-col gap-4">
              <h2 id="how-to-heading" className="font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                Como contribuir
              </h2>
              <p className="text-pretty text-sm text-muted-foreground sm:text-base">
                En cuatro pasos puedes estar contribuyendo. Para mas detalles, consulta la{' '}
                <a
                  href="https://github.com/diegodev18/dev-night-talks/blob/master/docs/CONTRIBUTING.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-4 hover:text-primary/80"
                >
                  guia completa de contribucion
                </a>
                .
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, i) => (
                <StepCard key={step.title} step={step} index={i} />
              ))}
            </div>
          </section>

          <section className="flex flex-col gap-6" aria-labelledby="faq-heading">
            <div className="flex flex-col gap-4">
              <h2 id="faq-heading" className="font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                Preguntas frecuentes
              </h2>
              <p className="text-pretty text-sm text-muted-foreground sm:text-base">Dudas comunes sobre como contribuir al proyecto.</p>
            </div>
            <Accordion type="single" collapsible className="w-full max-w-3xl">
              {faqs.map((faq) => (
                <AccordionItem key={faq.question} value={faq.question}>
                  <AccordionTrigger className="text-sm sm:text-base">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground sm:text-base">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          <section className="flex flex-col items-center gap-6 text-center sm:gap-8" aria-labelledby="contribute-cta-heading">
            <h2 id="contribute-cta-heading" className="font-heading text-xl font-medium text-foreground sm:text-2xl">
              Listo para empezar?
            </h2>
            <p className="max-w-md text-sm text-muted-foreground sm:text-base">
              Revisa los issues abiertos o el roadmap de paginas y encuentra algo que te interese.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Button size="lg" asChild>
                <a href={`${REPO_URL}/issues`} target="_blank" rel="noopener noreferrer">
                  Ver issues
                  <HugeiconsIcon icon={ArrowRight01Icon} data-icon="inline-end" strokeWidth={2} />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a
                  href="https://github.com/diegodev18/dev-night-talks/blob/master/docs/CONTRIBUTING.md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Guia de contribucion
                </a>
              </Button>
            </div>
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
