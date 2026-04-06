import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { TrustBar } from '@/components/trust-bar'
import { Footer } from '@/components/footer'
import { MobileStickyCall } from '@/components/mobile-sticky-call'

export const metadata: Metadata = {
  title: 'About Us | New hope senior living advisory LLC – Dallas Fort Worth & DFW',
  description: 'Learn about New hope senior living advisory LLC – a family-oriented firm dedicated to helping families find trusted, compassionate non-medical home care in Nevada and California.',
}

export default function AboutPage() {
  return (
    <main className="pb-16 md:pb-0">
      <Header />
      <TrustBar />

      {/* Hero Banner */}
      <div className="relative h-[220px] sm:h-[280px] md:h-[320px] flex items-center justify-center overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=1600&auto=format&fit=crop&q=80"
          alt="Senior care professional"
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-[#1B2A3D]/75"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 md:mb-4">About Us</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Finding the right care shouldn't be stressful. We're here to guide you every step of the way.
          </p>
        </div>
      </div>

      {/* Mission */}
      <div className="py-12 md:py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-8">Our Mission</h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
            At New hope senior living advisory LLC, we are a family-oriented consulting firm dedicated to helping individuals and their loved ones find the right non-medical home care solutions. Navigating care options can feel overwhelming, but we make finding care simple, personal, and stress-free.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 md:gap-12 mt-8 md:mt-12">
            <div className="bg-gray-50 p-6 md:p-8 rounded-lg border border-gray-100">
              <h3 className="text-xl md:text-2xl font-bold text-[#1B2A3D] mb-3 md:mb-4">Compassionate Support</h3>
              <p className="text-gray-600 text-sm md:text-base">We understand that everyone needs help at some point. Our team approaches every family with empathy, ensuring your loved ones receive care that respects their dignity and independence.</p>
            </div>
            <div className="bg-gray-50 p-6 md:p-8 rounded-lg border border-gray-100">
              <h3 className="text-xl md:text-2xl font-bold text-[#1B2A3D] mb-3 md:mb-4">Local Expertise</h3>
              <p className="text-gray-600 text-sm md:text-base">We partner with top local agencies across Dallas Fort Worth, DFW, and DFW area to match you perfectly with reliable and trustworthy caregivers in your community.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <MobileStickyCall />
    </main>
  )
}
