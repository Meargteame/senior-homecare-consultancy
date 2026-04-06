'use client'

import { Phone } from 'lucide-react'

export function MobileStickyCall() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#1B2A3D] text-white">
      <div className="flex">
        <a
          href="tel:2149295055"
          className="flex-1 flex items-center justify-center gap-2 py-4 font-bold text-sm border-r border-blue-400/40 hover:bg-[#1B4D7B] transition"
        >
          <Phone className="w-4 h-4" />
          Dallas Fort Worth
        </a>
        <a
          href="tel:6193639346"
          className="flex-1 flex items-center justify-center gap-2 py-4 font-bold text-sm hover:bg-[#1B4D7B] transition"
        >
          <Phone className="w-4 h-4" />
          DFW
        </a>
      </div>
    </div>
  )
}
