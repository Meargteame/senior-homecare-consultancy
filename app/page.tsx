import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { TrustBar } from '@/components/trust-bar'
import { HeroSection } from '@/components/hero-section'
import { MatchedSection } from '@/components/matched-section'
import { WhySection } from '@/components/why-section'
import { PartnersSection } from '@/components/partners-section'
import { ServicesSection } from '@/components/services-section'
import { FAQSection } from '@/components/faq-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { CTASection } from '@/components/cta-section'
import { Footer } from '@/components/footer'
import { MobileStickyCall } from '@/components/mobile-sticky-call'

export const metadata: Metadata = {
  title: 'Senior Home Care Consultants | Free Care Placement – Las Vegas & San Diego',
  description: 'Senior Home Care Consultants connects families with trusted, vetted non-medical home care agencies in Las Vegas, Reno, and Southern California. Free placement service. Call 725-777-1667.',
  keywords: ['senior home care', 'home care Las Vegas', 'home care San Diego', 'caregiver placement', 'non-medical home care', 'respite care Nevada', 'senior care California'],
  openGraph: {
    title: 'Senior Home Care Consultants | Free Care Placement',
    description: 'Free, compassionate senior care placement in Las Vegas, Reno & Southern California. We match your family with vetted local agencies.',
    type: 'website',
  },
}

export default function Home() {
  return (
    <main className="pb-16 md:pb-0">
      <Header />
      <TrustBar />
      <HeroSection />
      <MatchedSection />
      <WhySection />
      <ServicesSection />
      <PartnersSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
      <MobileStickyCall />
    </main>
  )
}
