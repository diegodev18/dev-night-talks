import { AwsDark } from '@/components/ui/svgs/awsDark';
import { GithubWordmarkDark } from '@/components/ui/svgs/githubWordmarkDark';
import { Kai } from '@/components/ui/svgs/kai';
import { Lati } from '@/components/ui/svgs/lati';
import TavoDev from '@/components/ui/svgs/tavoDev';

const partnerClass =
  'block focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring hover:scale-110 transition-all duration-100';

export function PartnersSection() {
  return (
    <section id="partners" className="scroll-mt-24 flex flex-col gap-8" aria-labelledby="partners-heading">
      <p id="partners-heading" className="text-center text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
        Partners
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-10">
        <a
          href="https://www.meetup.com/aws-ug-villahermosa/"
          target="_blank"
          rel="noopener noreferrer"
          className={partnerClass}
          aria-label="AWS User Group Villahermosa"
        >
          <AwsDark className="h-8 w-auto max-w-[140px]" aria-hidden />
        </a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className={partnerClass} aria-label="GitHub">
          <GithubWordmarkDark className="h-7 w-auto max-w-[120px] text-foreground" aria-hidden />
        </a>
        <a href="https://www.tavo.dev/" target="_blank" rel="noopener noreferrer" className={partnerClass} aria-label="TAVODEV">
          <TavoDev className="size-10 text-foreground sm:size-12" aria-hidden />
        </a>
        <a href="https://lati.mx/" target="_blank" rel="noopener noreferrer" className={partnerClass} aria-label="LATI">
          <Lati className="h-8 w-auto max-w-[100px] text-foreground" aria-hidden />
        </a>
        <a href="https://talktokai.com/" target="_blank" rel="noopener noreferrer" className={partnerClass} aria-label="kAI">
          <Kai className="h-9 w-auto" aria-hidden />
        </a>
      </div>
    </section>
  );
}
