'use client'
import { Check, Phone, ArrowRight } from 'lucide-react'

export function HeroSection() {
  return (
    <div className="relative w-full overflow-hidden bg-[#F4F4EB] py-16 md:py-28">
      {/* Decorative background blur */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#597B76]/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-[#1B2A3D]/5 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2 relative group">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#597B76]/20 to-transparent rounded-3xl -rotate-3 scale-105 transition-transform duration-500 group-hover:rotate-0"></div>
          <img
            src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&auto=format&fit=crop&q=80"
            alt="Addis Eshetu and his mom"
            className="w-full rounded-3xl shadow-2xl relative z-10 transition-transform duration-500 group-hover:-translate-y-2"
          />
          <div className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 bg-white/80 backdrop-blur-xl border border-white/50 p-6 rounded-2xl shadow-xl z-20 max-w-sm transition-transform duration-500 group-hover:translate-y-2">
            <p className="text-sm md:text-base font-medium text-gray-800 italic leading-relaxed">
              "Our services are based on founder Addis Eshetu's personal experience with placing his mom"
            </p>
            <a href="/about" className="group/link inline-flex items-center text-[#597B76] text-sm font-bold uppercase tracking-wider mt-4 hover:text-[#3d5753] transition-colors">
              Read More <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2 z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#597B76]/10 text-[#597B76] font-semibold text-sm mb-6 border border-[#597B76]/20">
            <span className="w-2 h-2 rounded-full bg-[#597B76] animate-pulse"></span>
            Trusted Placement Service
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#1B2A3D] mb-6 tracking-tight leading-[1.1]">
            Simplify Your <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1B2A3D] to-[#597B76]">Search</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-gray-600 mb-8 leading-relaxed">
            Independent Living, Assisted Living, Memory Care and Residential Care Homes in Dallas Fort Worth
          </h2>
          
          <ul className="space-y-5 mb-10">
            {['We provide a FREE Placement Service - no obligation', 'Our team has over 400 years experience in senior care', 'We\'ve assisted over 15,000 families'].map((item, i) => (
              <li key={i} className="flex items-start bg-white/40 backdrop-blur-sm p-3 rounded-2xl border border-white/60 shadow-sm">
                <div className="bg-gradient-to-br from-[#597B76] to-[#3d5753] rounded-full p-1.5 mr-4 mt-0.5 flex-shrink-0 shadow-md">
                  <Check size={14} className="text-white" strokeWidth={3} />
                </div>
                <span className="text-gray-800 text-lg font-medium">{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:214-929-5055" className="group flex items-center justify-center gap-3 bg-gradient-to-r from-[#1B2A3D] to-[#2A405C] text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-[#1B2A3D]/30 transition-all duration-300 hover:-translate-y-1">
              <Phone className="w-5 h-5 transition-transform group-hover:rotate-12" />
              CALL 214-929-5055
            </a>
            <a href="/contact" className="group flex items-center justify-center gap-3 bg-white text-[#1B2A3D] border-2 border-[#1B2A3D]/10 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 hover:border-[#1B2A3D]/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 uppercase">
              Contact Us
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
