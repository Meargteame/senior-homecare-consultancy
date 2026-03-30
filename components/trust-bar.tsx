'use client'

import { Phone } from 'lucide-react'

export function TrustBar() {
  return (
    <div className="bg-gray-50 border-b border-gray-200 py-3 px-4">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-between items-center gap-4 text-sm">
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          <div className="flex items-center gap-2 text-gray-700 font-semibold">
            <span className="w-6 h-6 bg-[#0F3D66] text-white rounded-full flex items-center justify-center text-xs font-bold">✓</span>
            100% Free Service
          </div>
          <div className="flex items-center gap-2 text-gray-700 font-semibold">
            <span className="w-6 h-6 bg-[#0F3D66] text-white rounded-full flex items-center justify-center text-xs font-bold">✓</span>
            Vetted Local Agencies
          </div>
          <div className="flex items-center gap-2 text-gray-700 font-semibold">
            <span className="w-6 h-6 bg-[#0F3D66] text-white rounded-full flex items-center justify-center text-xs font-bold">✓</span>
            Serving NV & CA
          </div>
          <div className="flex items-center gap-2 text-gray-700 font-semibold">
            <span className="w-6 h-6 bg-[#0F3D66] text-white rounded-full flex items-center justify-center text-xs font-bold">✓</span>
            Available 9AM–5PM Mon–Fri
          </div>
        </div>
        <a
          href="tel:7257771667"
          className="hidden md:flex items-center gap-2 bg-[#0F3D66] text-white px-5 py-2 rounded font-bold text-sm hover:bg-[#1B4D7B] transition"
        >
          <Phone className="w-4 h-4" />
          Call Now: 725-777-1667
        </a>
      </div>
    </div>
  )
}
