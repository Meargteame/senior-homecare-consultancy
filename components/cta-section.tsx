'use client'
import { Send, ExternalLink } from 'lucide-react'
import { CONSULTATION_FORM_URL } from '@/lib/constants'

export function CTASection() {
  return (
    <div className="w-full bg-gradient-to-b from-white to-[#F4F4EB] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-[#1B2A3D] rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row isolate">
          {/* Decorative background elements inside the card */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1B2A3D] to-[#0A1320] -z-10"></div>
          <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-[#597B76]/10 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>

          <div className="w-full lg:w-1/2 p-12 md:p-20 flex flex-col justify-center relative">
            <div className="inline-block mb-6">
              <span className="text-sm font-bold tracking-widest text-[#597B76] uppercase bg-white/10 backdrop-blur-md px-4 py-2 rounded-full inline-flex items-center gap-2 border border-white/5">
                <span className="w-2 h-2 rounded-full bg-[#597B76] animate-pulse"></span>
                Get Started
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-[1.15] tracking-tight text-balance">
              Explore Care Options with Confidence
            </h2>
            <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed max-w-lg mb-8">
              Get Personalized Support for Your Loved One's Next Chapter. Our placement experts are ready to guide you.
            </p>
            <div>
              <a
                href={CONSULTATION_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#597B76] hover:bg-[#4a6762] text-white font-bold px-6 py-4 rounded-xl text-base transition-all duration-300 shadow-lg hover:shadow-[#597B76]/30 hover:-translate-y-0.5"
              >
                Open Online Care Form
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="w-full lg:w-1/2 p-4 md:p-8 lg:p-12">
            <div className="bg-white/95 backdrop-blur-xl p-8 md:p-10 rounded-[2rem] shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-white h-full relative">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-gray-600 pl-1">Name *</label>
                    <input type="text" className="w-full bg-[#F4F4EB]/50 border-0 rounded-xl p-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#597B76]/50 focus:bg-white transition-all duration-300 shadow-inner" required placeholder="John Doe" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-gray-600 pl-1">Email *</label>
                    <input type="email" className="w-full bg-[#F4F4EB]/50 border-0 rounded-xl p-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#597B76]/50 focus:bg-white transition-all duration-300 shadow-inner" required placeholder="john@example.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-gray-600 pl-1">Phone *</label>
                    <input type="tel" className="w-full bg-[#F4F4EB]/50 border-0 rounded-xl p-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#597B76]/50 focus:bg-white transition-all duration-300 shadow-inner" required placeholder="(xxx) xxx-xxxx" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-gray-600 pl-1">Level of Care *</label>
                    <select className="w-full bg-[#F4F4EB]/50 border-0 rounded-xl p-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#597B76]/50 focus:bg-white transition-all duration-300 shadow-inner appearance-none cursor-pointer" required>
                      <option value="">Select one...</option>
                      <option value="independent">Independent Living</option>
                      <option value="assisted">Assisted Living</option>
                      <option value="memory">Memory Care</option>
                      <option value="residential">Residential Care Home</option>
                      <option value="nursing">Nursing Home</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-gray-600 pl-1">Message</label>
                  <textarea
                    rows={4}
                    className="w-full bg-[#F4F4EB]/50 border-0 rounded-xl p-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#597B76]/50 focus:bg-white transition-all duration-300 shadow-inner resize-none"
                    placeholder="Tell us a little bit about your situation..."
                  ></textarea>
                </div>

                <button type="submit" className="group w-full bg-gradient-to-r from-[#597B76] to-[#4a6762] text-white font-bold py-5 px-6 rounded-xl text-lg hover:shadow-lg hover:shadow-[#597B76]/30 transition-all duration-300 flex items-center justify-center gap-3 uppercase tracking-wider relative overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                    Request Info
                    <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
