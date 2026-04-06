'use client'
import { CheckCircle2, ArrowRight } from 'lucide-react'

export function WhySection() {
  return (
    <div className="relative w-full overflow-hidden bg-white py-20 md:py-32">
      {/* Soft background accents */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-gradient-to-br from-[#F4F4EB] to-transparent rounded-full blur-3xl opacity-50 -z-10 translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-16 xl:gap-24 items-center">
        <div className="w-full lg:w-1/2 relative z-10">
          <div className="inline-block mb-4">
            <span className="text-sm font-bold tracking-widest text-[#597B76] uppercase bg-[#597B76]/10 px-4 py-2 rounded-full">
              Our Story
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1B2A3D] mb-8 leading-[1.15] tracking-tight">
            Why New Hope Senior Living Advisory?
          </h2>
          <p className="text-gray-600 text-lg md:text-xl mb-8 leading-relaxed font-normal">
            Our founder, Addis Eshetu, guided his mother through the difficult process of finding the right senior care. His experience inspired the creation of a local, highly specialized advisory service that ensures you never have to go through this alone.
          </p>
          
          <ul className="space-y-5 mb-10">
            {[
              "Available seven days per week to support you",
              "Current knowledge of DFW senior living options",
              "First locally owned and operated placement service"
            ].map((text, i) => (
              <li key={i} className="flex items-center gap-4 text-gray-800 text-lg font-medium p-4 rounded-2xl bg-[#F4F4EB]/50 border border-gray-100 shadow-sm transition-all hover:shadow-md hover:bg-white">
                <CheckCircle2 className="w-6 h-6 text-[#597B76] flex-shrink-0" />
                <span className="leading-tight">{text}</span>
              </li>
            ))}
          </ul>
          
          <a href="/our-process" className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#1B2A3D] to-[#2A405C] text-white px-8 py-4 rounded-xl font-bold text-center text-lg hover:shadow-xl hover:shadow-[#1B2A3D]/20 transition-all duration-300 hover:-translate-y-1 uppercase tracking-wide">
            How The Process Works
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
        
        <div className="w-full lg:w-1/2 relative">
          <div className="relative group">
            <div className="absolute inset-0 bg-[#597B76] rounded-[2.5rem] rotate-3 scale-100 opacity-20 transition-transform duration-500 group-hover:rotate-6"></div>
            <img 
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&auto=format&fit=crop&q=80" 
              alt="Our dedicated team" 
              className="relative w-full rounded-[2rem] shadow-2xl object-cover z-10"
            />
            {/* Glassmorphism Stats Cards */}
            <div className="absolute -bottom-10 -left-6 md:-left-12 bg-white/70 backdrop-blur-xl p-6 md:p-8 rounded-[2rem] shadow-[0_8px_32px_rgba(0,0,0,0.1)] border border-white z-20 hidden sm:block transition-transform duration-500 hover:-translate-y-2">
              <div className="flex flex-col items-center">
                <span className="text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-[#1B2A3D] to-[#2A405C] mb-1">400+</span>
                <span className="text-gray-500 font-bold uppercase tracking-widest text-xs">Years Exp.</span>
              </div>
            </div>
            
            <div className="absolute -top-10 -right-6 md:-right-12 bg-white/70 backdrop-blur-xl p-6 md:p-8 rounded-[2rem] shadow-[0_8px_32px_rgba(0,0,0,0.1)] border border-white z-20 hidden sm:block transition-transform duration-500 hover:translate-y-2">
              <div className="flex flex-col items-center">
                <span className="text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-[#597B76] to-[#7aa59d] mb-1">4</span>
                <span className="text-gray-500 font-bold uppercase tracking-widest text-xs text-center leading-tight">Licensed<br/>Social Workers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
