'use client'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: "Elizabeth H.",
    location: "Dallas, TX",
    text: "When my father needed a higher level of care suddenly, Addis jumped in and found us the perfect residential care home within 48 hours. I don't know what we would have done without him.",
    stars: 5
  },
  {
    name: "John S.",
    location: "Plano, TX",
    text: "The knowledge Addis has about local Dallas memory care facilities is remarkable. He asked questions we didn't even know we should be asking. A true professional who genuinely cares.",
    stars: 5
  },
  {
    name: "Ryan M.",
    location: "Frisco, TX",
    text: "A free service that saved us hundreds of hours of research. Addis paired my mom with an assisted living community she absolutely loves. We are so grateful.",
    stars: 5
  }
]

export function TestimonialsSection() {
  return (
    <div className="relative w-full py-20 md:py-28 bg-[#1B2A3D] overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '28px 28px' }}></div>
      <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-[#597B76]/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-sm font-bold tracking-widest text-[#7AA8A1] uppercase bg-white/5 px-4 py-2 rounded-full inline-block mb-4 border border-white/10">
            Real Families, Real Stories
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight">What Families Say</h2>
          <div className="flex items-center justify-center gap-1 mt-2">
            {[1,2,3,4,5].map(i => (
              <Star key={i} size={20} className="fill-[#FABB05] text-[#FABB05]" />
            ))}
            <span className="text-gray-400 text-sm ml-2">5.0 on Google</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/20">
              <div>
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} size={16} className="fill-[#FABB05] text-[#FABB05]" />
                  ))}
                </div>
                <p className="text-gray-200 text-base leading-relaxed italic mb-6">"{t.text}"</p>
              </div>
              <div className="flex items-center gap-3 pt-5 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-[#597B76]/30 flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-white font-bold text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="tel:214-518-3242"
            className="inline-flex items-center gap-3 border-2 border-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-[#1B2A3D] transition-all duration-300 hover:-translate-y-0.5"
          >
            Talk to Addis — It's Free
          </a>
        </div>
      </div>
    </div>
  )
}
