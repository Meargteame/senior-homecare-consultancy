'use client'

export function HeroSection() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=1600&auto=format&fit=crop&q=80"
        alt="Senior being cared for at home by a professional caregiver"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8 leading-tight">
            Senior Home Care Consultants
          </h1>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a href="/contact" className="bg-white/20 border-2 border-white text-white px-6 sm:px-8 py-3 rounded text-base sm:text-lg font-semibold hover:bg-white hover:text-[#0F3D66] transition">
              Contact Us
            </a>
            <a href="/contact" className="bg-white/20 border-2 border-white text-white px-6 sm:px-8 py-3 rounded text-base sm:text-lg font-semibold hover:bg-white hover:text-[#0F3D66] transition">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

