'use client'
import { Star } from 'lucide-react'

export function TrustBar() {
  return (
    <div className="bg-[#597B76] text-white py-6 w-full shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
        <div className="flex items-center gap-4">
          <div className="bg-white rounded p-2 flex items-center justify-center">
            {/* Google logo placeholder */}
            <span className="text-[#4285F4] font-bold text-xl tracking-tighter">G</span>
            <span className="text-[#EA4335] font-bold text-xl tracking-tighter">o</span>
            <span className="text-[#FBBC05] font-bold text-xl tracking-tighter">o</span>
            <span className="text-[#4285F4] font-bold text-xl tracking-tighter">g</span>
            <span className="text-[#34A853] font-bold text-xl tracking-tighter">l</span>
            <span className="text-[#EA4335] font-bold text-xl tracking-tighter">e</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg">5.0 Rating</span>
          </div>
        </div>
        <div className="flex items-center gap-4 flex-col sm:flex-row">
          <p className="font-semibold text-lg md:text-xl text-center">500+ 5-Star Ratings from Our Clients</p>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} size={24} className="fill-[#FABB05] text-[#FABB05]" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
