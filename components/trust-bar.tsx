'use client'
import { Star, Phone, ShieldCheck } from 'lucide-react'

export function TrustBar() {
  return (
    <div className="bg-[#F4F4EB] border-b border-[#597B76]/15 py-4 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10 text-sm">

          <div className="flex items-center gap-2.5">
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(i => (
                <Star key={i} size={14} className="fill-[#FABB05] text-[#FABB05]" />
              ))}
            </div>
            <span className="text-gray-700 font-semibold">5.0 Google Rating</span>
          </div>

          <div className="hidden sm:block w-px h-5 bg-gray-300"></div>

          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 text-[#597B76]" />
            <span className="text-gray-700 font-semibold">FREE — No Obligation, Ever</span>
          </div>

          <div className="hidden sm:block w-px h-5 bg-gray-300"></div>

          <div className="flex items-center gap-2.5">
            <Phone className="w-4 h-4 text-[#597B76]" />
            <a href="tel:214-518-3242" className="text-[#1B2A3D] font-bold hover:text-[#597B76] transition-colors">
              Call Addis: 214-518-3242
            </a>
          </div>

        </div>
      </div>
    </div>
  )
}
