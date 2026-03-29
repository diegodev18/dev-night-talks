import { AboutSection } from "@/components/landing/AboutSection"
import { AgendaPreviewSection } from "@/components/landing/AgendaPreviewSection"
import { FaqSection } from "@/components/landing/FaqSection"
import { FinalCtaSection } from "@/components/landing/FinalCtaSection"
import { HeroSection } from "@/components/landing/HeroSection"
import { PartnersSection } from "@/components/landing/PartnersSection"
import { SiteFooter } from "@/components/landing/SiteFooter"
import { SiteHeader } from "@/components/landing/SiteHeader"
import { UpcomingEventSection } from "@/components/landing/UpcomingEventSection"
import { LandingLayout } from "@/components/layout/LandingLayout"

export function LandingPage() {
  return (
    <LandingLayout>
      <SiteHeader />
      <HeroSection />
      <AboutSection />
      <UpcomingEventSection />
      <AgendaPreviewSection />
      <FaqSection />
      <PartnersSection />
      <FinalCtaSection />
      <SiteFooter />
    </LandingLayout>
  )
}
