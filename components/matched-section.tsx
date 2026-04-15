'use client'

import Image from 'next/image'
import { Heart, Shield, Clock, ArrowRight } from 'lucide-react'

const pillars = [
  {
    icon: Heart,
    title: 'Compassionate Guidance',
    desc: 'We listen first. Every family\'s situation is unique, and we treat it that way.',
  },
  {
    icon: Shield,
    title: 'Vetted Communities Only',
    desc: 'Every community we recommend has been personally reviewed for quality and safety.',
  },
  {
    icon: Clock,
    title: 'Available 7 Days a Week',
    desc: 'Senior care needs don\'t follow a schedule. Neither do we.',
  },
]

export function MatchedSection() {
  return (
    <div className="bg-white py-20 md:py-28 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center mb-20">
          {/* Image */}
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3] group">
            <Image
              src="https://images.unsplash.com/photo-1531983412531-1f49a365ffed?w=900&auto=format&fit=crop&q=80"
              alt="Family consulting with Addis Eshetu"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A3D]/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/90 backdrop-blur-md rounded-2xl px-5 py-4 shadow-lg border border-white/60">
                <p className="text-[#1B2A3D] font-semibold text-sm leading-snug">
                  "We don't just give you a list — we walk with you through every step of the decision."
                </p>
                <p className="text-[#597B76] text-xs font-bold mt-1.5 uppercase tracking-wider">— Addis Eshetu, Founder</p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <span className="text-sm font-bold tracking-widest text-[#597B76] uppercase bg-[#597B76]/10 px-4 py-2 rounded-full inline-block mb-5">
              Our Approach
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1B2A3D] mb-6 leading-[1.15] tracking-tight">
              We Match Your Family with the Right Care
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Finding senior care for a loved one is one of the hardest decisions a family faces. At New Hope Senior Living Advisory, we take that weight off your shoulders — connecting you with trusted, local communities in Dallas Fort Worth that truly fit your loved one's needs, personality, and budget.
            </p>
            <a
              href="/contact"
              className="group inline-flex items-center gap-3 bg-[#597B76] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#4a6762] hover:shadow-xl hover:shadow-[#597B76]/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              Start Your Free Consultation
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Three pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map(({ icon: Icon, title, desc }, i) => (
            <div key={i} className="group bg-[#F4F4EB]/60 hover:bg-white border border-transparent hover:border-[#597B76]/15 rounded-2xl p-7 transition-all duration-300 hover:shadow-lg hover:shadow-[#597B76]/10 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-[#597B76]/10 group-hover:bg-[#597B76]/20 flex items-center justify-center mb-5 transition-colors duration-300">
                <Icon className="w-6 h-6 text-[#597B76]" />
              </div>
              <h3 className="text-[#1B2A3D] font-bold text-lg mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
