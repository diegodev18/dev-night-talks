import { ArrowRight01Icon, Menu01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"

import { TransitionLink } from "@/components/layout/TransitionLink"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

type NavItem = {
  label: string
  to: string
  type: "section" | "page"
}

const landingNav: NavItem[] = [
  { label: "Nosotros", to: "/#about", type: "section" },
  { label: "Evento", to: "/#evento", type: "section" },
  { label: "Programa", to: "/#agenda", type: "section" },
  { label: "FAQ", to: "/#faq", type: "section" },
]

const pageNav: NavItem[] = [
  { label: "Comunidades", to: "/groups", type: "page" },
  { label: "Eventos", to: "/events", type: "page" },
  { label: "Blog", to: "/blog", type: "page" },
  { label: "Contribuir", to: "/contribute", type: "page" },
]

function ArrowSeparator({ delay }: { delay: number }) {
  return (
    <HugeiconsIcon
      icon={ArrowRight01Icon}
      strokeWidth={2}
      className="size-3 text-muted-foreground nav-item-anim"
      style={{ animationDelay: `${delay}ms` }}
      aria-hidden
    />
  )
}

function NavButton({ item, delay }: { item: NavItem; delay: number }) {
  return (
    <Button
      variant="ghost"
      size="sm"
      asChild
      className="nav-item-anim"
      style={{ animationDelay: `${delay}ms` }}
    >
      <Link to={item.to}>{item.label}</Link>
    </Button>
  )
}

function MobileNavButton({ item }: { item: NavItem }) {
  return (
    <SheetClose asChild>
      <Button variant="ghost" className="w-full justify-start" asChild>
        <Link to={item.to}>{item.label}</Link>
      </Button>
    </SheetClose>
  )
}

export function SiteHeader() {
  const location = useLocation()
  const isLanding = location.pathname === "/"
  const [animKey, setAnimKey] = useState(0)

  useEffect(() => {
    setAnimKey((k) => k + 1)
  }, [location.pathname])

  const landingItems = landingNav.flatMap((item, i) => {
    const delay = i * 40
    const elements = [
      <NavButton key={item.label} item={item} delay={delay} />,
    ]
    if (i < landingNav.length - 1) {
      elements.push(<ArrowSeparator key={`arrow-${i}`} delay={delay + 20} />)
    }
    return elements
  })

  const separatorDelay = landingNav.length * 40
  const separator = (
    <div
      key="separator"
      className="mx-1 hidden h-5 w-px bg-border nav-item-anim md:block"
      style={{ animationDelay: `${separatorDelay}ms` }}
    />
  )

  const pageItems = pageNav.flatMap((item, i) => {
    const delay = separatorDelay + i * 40
    const elements = [
      <NavButton key={item.label} item={item} delay={delay} />,
    ]
    if (i < pageNav.length - 1) {
      elements.push(
        <div
          key={`sep-${i}`}
          className="mx-1 h-5 w-px bg-border nav-item-anim"
          style={{ animationDelay: `${delay + 20}ms` }}
        />
      )
    }
    return elements
  })

  const groupsItems = [
    <NavButton
      key="inicio"
      item={{ label: "Inicio", to: "/", type: "page" }}
      delay={0}
    />,
    <div
      key="separator"
      className="mx-1 h-5 w-px bg-border nav-item-anim"
      style={{ animationDelay: "20ms" }}
    />,
    ...pageNav.flatMap((item, i) => {
      const delay = 40 + i * 40
      const elements = [
        <NavButton key={item.label} item={item} delay={delay} />,
      ]
      if (i < pageNav.length - 1) {
        elements.push(
          <div
            key={`sep-${i}`}
            className="mx-1 h-5 w-px bg-border nav-item-anim"
            style={{ animationDelay: `${delay + 20}ms` }}
          />
        )
      }
      return elements
    }),
  ]

  const mobileNavItems = isLanding
    ? [...landingNav, ...pageNav]
    : [{ label: "Inicio", to: "/", type: "page" as const }, ...pageNav]

  return (
    <header className="grid gap-6 border-b border-border pb-8 md:grid-cols-[auto_1fr_auto] md:items-center">
      <div className="flex items-center gap-2">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon-sm" className="md:hidden">
              <HugeiconsIcon icon={Menu01Icon} strokeWidth={2} />
              <span className="sr-only">Abrir menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle className="sr-only">Navegacion</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 p-4" aria-label="Movil">
              {mobileNavItems.map((item) => (
                <MobileNavButton key={item.label} item={item} />
              ))}
              <Separator className="my-2" />
              <SheetClose asChild>
                <Button className="w-full" asChild>
                  <TransitionLink to="/join">Join the Conversation</TransitionLink>
                </Button>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
        <Link
          to="/"
          className="flex flex-col gap-0 leading-none outline-none focus-visible:ring-1 focus-visible:ring-ring"
        >
          <span className="font-heading text-[0.65rem] font-medium tracking-[0.2em] text-muted-foreground">
            DEV
          </span>
          <span className="font-heading text-sm font-semibold tracking-tight text-foreground sm:text-base">
            NIGHT TALKS
          </span>
        </Link>
      </div>
      <nav
        className="hidden flex-wrap items-center justify-center gap-1 md:flex"
        aria-label="Principal"
      >
        {isLanding ? (
          <div key={`landing-${animKey}`} className="flex items-center gap-1">
            {landingItems}
            {separator}
            {pageItems}
          </div>
        ) : (
          <div key={`groups-${animKey}`} className="flex items-center gap-1">
            {groupsItems}
          </div>
        )}
      </nav>
      <div className="hidden md:flex md:justify-end">
        <Button className={cn("landing-cta")} size="default" asChild>
          <TransitionLink to="/join">Join the Conversation</TransitionLink>
        </Button>
      </div>
    </header>
  )
}
