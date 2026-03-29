import { InstagramIcon, TiktokIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

const year = new Date().getFullYear()

const social = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/devnighttalks/",
    icon: InstagramIcon,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@devnighttalks",
    icon: TiktokIcon,
  },
] as const

export function SiteFooter() {
  return (
    <footer className="mt-auto flex flex-col gap-6 pt-4">
      <Separator />
      <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-center text-xs text-muted-foreground sm:text-left">
          © {year} — Dev Night Talks Villahermosa
        </p>
        <div className="flex flex-wrap items-center justify-center gap-1">
          {social.map(({ label, href, icon }) => (
            <Button key={label} variant="ghost" size="icon-sm" asChild>
              <a
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <HugeiconsIcon icon={icon} strokeWidth={1.5} />
              </a>
            </Button>
          ))}
        </div>
      </div>
    </footer>
  )
}
