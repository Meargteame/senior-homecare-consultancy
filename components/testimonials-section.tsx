'use client'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: "Elizabeth H.",
    text: "Addis and his team were an absolute godsend. When my father needed a higher level of care suddenly, they jumped in and found us the perfect residential care home within 48 hours. I don't know what we would have done without them."
  },
  {
    name: "John S.",
    text: "The sheer amount of knowledge they possess about local Dallas memory care facilities is staggering. They asked questions we didn't even know we should be asking. True professionals and very caring."
  },
  {
    name: "Ryan M.",
    text: "A free service that saves you hundreds of hours of researching and touring places that might not even be a good fit. They paired my mom with an assisted living community that she absolutely loves."
  }
]

export function TestimonialsSection() {
  return (
    <div className="relative w-full py-20 bg-[#597B76] text-white">
      {/* Background pattern placeholder */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 tracking-tight">What Real Families Say</h2>
        <p className="text-lg md:text-xl text-[#F4F4EB] mb-16 opacity-90 max-w-2xl mx-auto font-medium">Don't just take our word for it—see how we've helped families navigate their senior living journey.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 relative z-20">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="bg-white/5 hover:bg-white/10 p-8 md:p-10 rounded-3xl backdrop-blur-md border border-white/20 shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between items-center text-center group">
              <div>
                 <Quote className="text-[#F4F4EB]/40 mb-8 mx-auto group-hover:text-white/80 transition-colors duration-300" size={48} />
                 <p className="italic mb-8 text-lg leading-relaxed font-light">"{testimonial.text}"</p>
              </div>
              <div className="flex flex-col items-center mt-4 w-full">
                <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#F4F4EB]/30 to-transparent mb-5 rounded-full"></div>
                <p className="font-bold text-xl tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-white to-[#F4F4EB]">{testimonial.name}</p>
                <p className="text-xs opacity-70 mt-1 uppercase tracking-[0.2em] text-[#F4F4EB]">Family Member</p>
              </div>
            </div>
          ))}
        </div>
        
        <button className="border-2 border-white text-white px-8 py-3 rounded font-bold hover:bg-white hover:text-[#597B76] transition uppercase">
          VIEW MORE
        </button>
      </div>
    </div>
  )
}
