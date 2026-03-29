import { LandingLayout } from "@/components/layout/LandingLayout"
import { HeroSection } from "@/components/landing/HeroSection"
import { PartnersSection } from "@/components/landing/PartnersSection"
import { SiteFooter } from "@/components/landing/SiteFooter"
import { SiteHeader } from "@/components/landing/SiteHeader"
import { UpcomingEventSection } from "@/components/landing/UpcomingEventSection"

export function LandingPage() {
  return (
    <LandingLayout>
      <SiteHeader />
      <HeroSection />
      <UpcomingEventSection />
      <PartnersSection />
      <SiteFooter />
    </LandingLayout>
  )
}
