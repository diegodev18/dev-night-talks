import { LandingLayout } from "@/components/layout/LandingLayout"
import { CtaSection } from "@/components/landing/CtaSection"
import { HeroSection } from "@/components/landing/HeroSection"
import { HighlightsSection } from "@/components/landing/HighlightsSection"
import { SiteFooter } from "@/components/landing/SiteFooter"
import { SiteHeader } from "@/components/landing/SiteHeader"

export function LandingPage() {
  return (
    <LandingLayout>
      <SiteHeader />
      <HeroSection />
      <HighlightsSection />
      <CtaSection />
      <SiteFooter />
    </LandingLayout>
  )
}
