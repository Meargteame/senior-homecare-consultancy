'use client'
import { MapPin } from 'lucide-react'

const cities = [
  'Dallas', 'Plano', 'Frisco', 'McKinney', 'Allen',
  'Richardson', 'Garland', 'Fort Worth', 'Arlington',
  'Irving', 'Carrollton', 'Lewisville', 'Mesquite', 'Rockwall',
]

export function PartnersSection() {
  return (
    <div className="w-full bg-[#1B2A3D] py-20 md:py-24 overflow-hidden relative">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      <div className="absolute right-0 top-0 w-[30rem] h-[30rem] bg-[#597B76]/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-sm font-bold tracking-widest text-[#7AA8A1] uppercase bg-white/5 px-4 py-2 rounded-full inline-block mb-5 border border-white/10">
          Serving the DFW Metroplex
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
          Local to Dallas Fort Worth
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
          We know these communities personally. When we recommend a facility, it's because we've been there — not because it's on a list.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {cities.map((city, i) => (
            <div
              key={i}
              className="flex items-center gap-2 bg-white/5 hover:bg-[#597B76]/20 border border-white/10 hover:border-[#597B76]/40 text-gray-300 hover:text-white px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-200 cursor-default"
            >
              <MapPin className="w-3.5 h-3.5 text-[#597B76]" />
              {city}
            </div>
          ))}
        </div>

        <div className="mt-14 inline-flex flex-col sm:flex-row items-center gap-4">
          <a
            href="tel:214-518-3242"
            className="inline-flex items-center gap-3 bg-[#597B76] hover:bg-[#4a6762] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#597B76]/30"
          >
            Call Addis — 214-518-3242
          </a>
          <span className="text-gray-500 text-sm">Free, no obligation</span>
        </div>
      </div>
    </div>
  )
}
