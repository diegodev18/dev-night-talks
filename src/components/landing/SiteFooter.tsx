import { Button } from '@/components/ui/button';
import { GithubDark } from '@/components/ui/svgs/githubDark';
import { Instagram } from '@/components/ui/svgs/instagram';
import { Tiktok } from '@/components/ui/svgs/tiktok';
import { Separator } from '@/components/ui/separator';
import { TransitionLink } from '@/components/layout/TransitionLink';

const year = new Date().getFullYear();

const social = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/devnighttalks/',
    Icon: Instagram,
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@devnighttalks',
    Icon: Tiktok,
  },
  {
    label: 'Repositorio en GitHub',
    href: 'https://github.com/diegodev18/dev-night-talks',
    Icon: GithubDark,
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="mt-auto flex flex-col gap-6 pt-4">
      <Separator />
      <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex flex-col items-center gap-2 sm:items-start">
          <p className="text-center text-xs text-muted-foreground sm:text-left">© {year} — Dev Night Talks Villahermosa</p>
          <TransitionLink
            to="/contribute"
            className="text-xs text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
          >
            Contribuir al proyecto
          </TransitionLink>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-1">
          {social.map(({ label, href, Icon }) => (
            <Button key={label} variant="ghost" size="icon-sm" asChild>
              <a href={href} aria-label={label} target="_blank" rel="noopener noreferrer">
                <Icon aria-hidden />
              </a>
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
}
