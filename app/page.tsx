import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { SeniorLivingOptions } from '@/components/senior-living-options'
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
  title: 'New hope senior living advisory LLC | Dallas & Fort Worth',
  description: 'New hope senior living advisory LLC connects families with trusted senior living options in Dallas Fort Worth (DFW). Connect with Addis Eshetu today.',
  keywords: ['senior living', 'dallas', 'fort worth', 'DFW', 'senior care', 'New hope senior living advisory LLC', 'Addis Eshetu'],
  openGraph: {
    title: 'New hope senior living advisory LLC | Dallas & Fort Worth',
    description: 'Free, compassionate senior care placement in Dallas Fort Worth (DFW). We match your family with vetted local agencies.',
    type: 'website',
  },
}

export default function Home() {
  return (
    <main className="pb-16 md:pb-0 font-sans text-[#1B2A3D]">
      <Header />
      <HeroSection />
      <SeniorLivingOptions />
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
