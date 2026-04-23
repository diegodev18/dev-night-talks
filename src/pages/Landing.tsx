import { AboutSection } from '@/components/landing/AboutSection';
import { AgendaPreviewSection } from '@/components/landing/AgendaPreviewSection';
import { EventsSection } from '@/components/landing/EventsSection';
import { FaqSection } from '@/components/landing/FaqSection';
import { FinalCtaSection } from '@/components/landing/FinalCtaSection';
import { HeroSection } from '@/components/landing/HeroSection';
import { PartnersSection } from '@/components/landing/PartnersSection';
import { SiteFooter } from '@/components/landing/SiteFooter';
import { SiteHeader } from '@/components/landing/SiteHeader';
import { UpcomingEventSection } from '@/components/landing/UpcomingEventSection';
import { DirectionalTransition } from '@/components/layout/DirectionalTransition';
import { Layout } from '@/components/layout/Layout';

export default function Landing() {
  return (
    <Layout>
      <DirectionalTransition>
        <SiteHeader />
        <HeroSection />
        <AboutSection />
        <UpcomingEventSection />
        <EventsSection />
        <AgendaPreviewSection />
        <FaqSection />
        <PartnersSection />
        <FinalCtaSection />
        <SiteFooter />
      </DirectionalTransition>
    </Layout>
  );
}
