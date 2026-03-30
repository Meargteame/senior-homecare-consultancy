import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { TrustBar } from '@/components/trust-bar'
import { Footer } from '@/components/footer'
import { ServicesSection } from '@/components/services-section'
import { CTASection } from '@/components/cta-section'
import { MobileStickyCall } from '@/components/mobile-sticky-call'

export const metadata: Metadata = {
  title: 'Our Services | Senior Home Care Consultants – NV & CA',
  description: 'Explore our senior home care placement services including home caregivers, senior caregivers, respite care, and live-in caregiver matching across Nevada and California.',
}

export default function ServicesPage() {
  return (
    <main className="pb-16 md:pb-0">
      <Header />
      <TrustBar />

      {/* Hero Banner */}
      <div className="relative h-[220px] sm:h-[280px] md:h-[320px] flex items-center justify-center overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=1600&auto=format&fit=crop&q=80"
          alt="Senior care services"
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-[#0F3D66]/75"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 md:mb-4">Our Services</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Comprehensive care consulting to match your unique needs with trusted local care providers.
          </p>
        </div>
      </div>

      <ServicesSection />

      {/* 3-Step Process */}
      <div className="py-12 md:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10 md:mb-16">The Right Care Placement in 3 Steps</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {[
              { step: 1, title: 'Consultation', desc: 'We evaluate your needs, preferences, and lifestyle to determine the perfect level of care required.' },
              { step: 2, title: 'Matching', desc: 'We connect you with thoroughly vetted, top-rated local non-medical home care agencies.' },
              { step: 3, title: 'Ongoing Support', desc: 'We remain available as a resource to ensure you are 100% satisfied with the care provided.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="p-4 md:p-6">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#0F3D66] text-white rounded-full flex items-center justify-center text-xl md:text-2xl font-bold mx-auto mb-4 md:mb-6">{step}</div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">{title}</h3>
                <p className="text-gray-600 text-sm md:text-base">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CTASection />
      <Footer />
      <MobileStickyCall />
    </main>
  )
}
