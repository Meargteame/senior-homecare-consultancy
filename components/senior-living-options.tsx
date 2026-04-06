'use client'
import { ArrowRight, Sparkles } from 'lucide-react'

const options = [
  { title: 'Senior In-Home Care', image: 'https://images.unsplash.com/photo-1581579205556-2580556da616?w=500&auto=format&fit=crop&q=80', link: '/services' },
  { title: 'Senior Housing', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&auto=format&fit=crop&q=80', link: '/services' },
  { title: 'Residential Care Homes', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&auto=format&fit=crop&q=80', link: '/services' },
  { title: 'Nursing Homes', image: 'https://images.unsplash.com/photo-1538356111053-748a48e1acb8?w=500&auto=format&fit=crop&q=80', link: '/services' },
  { title: 'Assisted Living', image: 'https://images.unsplash.com/photo-1516156008625-3a9d026f345a?w=500&auto=format&fit=crop&q=80', link: '/services' },
  { title: "Alzheimer's Care & Memory Care", image: 'https://images.unsplash.com/photo-1444312645910-ffa973656eba?w=500&auto=format&fit=crop&q=80', link: '/services' },
]

export function SeniorLivingOptions() {
  return (
    <div className="w-full bg-[#F4F4EB] py-20 md:py-32 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-[#1B2A3D]/5 rounded-full blur-[80px]"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#597B76]/10 rounded-full blur-[100px]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-gray-100 text-[#597B76] font-semibold text-sm">
            <Sparkles size={16} /> Tailored For You
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-[#1B2A3D] text-center tracking-tight">
            Senior Living Options
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {options.map((option, index) => (
            <a key={index} href={option.link} className="group relative block h-80 md:h-[22rem] rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-[#597B76]/20 transition-all duration-500 cursor-pointer">
              <img src={option.image} alt={option.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
              
              {/* Sleek gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A3D]/90 via-[#1B2A3D]/30 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90"></div>
              
              {/* Glassmorphism hover overlay */}
              <div className="absolute inset-0 bg-[#597B76]/10 backdrop-blur-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

              <div className="absolute inset-0 flex flex-col items-start justify-end p-8 z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 translate-y-4 transition-transform duration-500 group-hover:translate-y-0 drop-shadow-lg">
                  {option.title}
                </h3>
                
                {/* Modern button appearing on hover */}
                <div className="flex items-center gap-2 opacity-0 -translate-x-4 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 mt-4">
                  <span className="text-white font-medium text-sm tracking-wide uppercase">Explore</span>
                  <div className="bg-white/20 backdrop-blur-md rounded-full p-2 border border-white/30 hidden sm:block">
                    <ArrowRight className="text-white" size={16} />
                  </div>
                </div>

                {/* Always-visible modern icon button */}
                <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md rounded-full p-3 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.12)] opacity-100 transition-all duration-500 group-hover:bg-white group-hover:rotate-45 sm:opacity-0">
                  <ArrowRight className="text-white group-hover:text-[#597B76]" size={20} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
