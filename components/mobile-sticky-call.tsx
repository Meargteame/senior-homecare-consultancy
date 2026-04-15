'use client'

import { Phone } from 'lucide-react'

export function MobileStickyCall() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#1B2A3D] text-white">
      <div className="flex">
        <a
          href="tel:2145183242"
          className="flex-1 flex items-center justify-center gap-2 py-4 font-bold text-sm hover:bg-[#1B4D7B] transition"
        >
          <Phone className="w-4 h-4" />
          Call Addis Eshetu: 214-518-3242
        </a>
      </div>
    </div>
  )
}
