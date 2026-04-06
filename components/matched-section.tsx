'use client'

import Image from 'next/image'

export function MatchedSection() {
  return (
    <div className="bg-white py-12 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* CTA Button */}
        <div className="mb-10 md:mb-16 text-center">
          <a href="/contact" className="inline-block bg-white border-2 border-[#0F3D66] text-[#1B2A3D] px-6 md:px-8 py-3 rounded text-base md:text-lg font-bold hover:bg-[#1B2A3D] hover:text-white transition">
            Click Here To Create A Home Care Plan
          </a>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
              Get Matched with Local Agencies
            </h2>
            
            <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
              Navigating care options for a loved one can feel overwhelming. At <strong>New hope senior living advisory LLC</strong>, we guide you step-by-step—connecting you with reputable, local non-medical home care agencies in Dallas Fort Worth, DFW, and DFW area. Let's make finding care simple, personal, and stress-free.
            </p>

            <a href="/services" className="inline-block bg-[#1B2A3D] text-white px-6 md:px-8 py-3 rounded text-sm md:text-base font-semibold hover:bg-[#1B4D7B] transition">
              Learn More
            </a>
          </div>

          {/* Right Image — family meeting with senior care consultant */}
          <div className="order-1 lg:order-2 relative w-full aspect-video rounded-lg overflow-hidden shadow-md">
            <Image
              src="https://images.unsplash.com/photo-1531983412531-1f49a365ffed?w=800&auto=format&fit=crop&q=80"
              alt="Family consulting with senior care advisor"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </div>
      </div>
    </div>
  )
}
