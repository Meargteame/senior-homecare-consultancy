'use client'
import { ArrowRight } from 'lucide-react'

const options = [
  {
    title: 'Senior In-Home Care',
    desc: 'Professional caregivers come to your loved one\'s home — preserving independence and comfort.',
    image: 'https://images.unsplash.com/photo-1581579205556-2580556da616?w=600&auto=format&fit=crop&q=80',
    link: '/services'
  },
  {
    title: 'Assisted Living',
    desc: 'Apartment-style communities with 24/7 staff support for daily activities and personal care.',
    image: 'https://images.unsplash.com/photo-1516156008625-3a9d026f345a?w=600&auto=format&fit=crop&q=80',
    link: '/services'
  },
  {
    title: 'Memory Care',
    desc: 'Secure, specialized environments designed for those living with Alzheimer\'s or dementia.',
    image: 'https://images.unsplash.com/photo-1444312645910-ffa973656eba?w=600&auto=format&fit=crop&q=80',
    link: '/services'
  },
  {
    title: 'Residential Care Homes',
    desc: 'Small, home-like settings with 4–6 residents and a high caregiver-to-resident ratio.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&auto=format&fit=crop&q=80',
    link: '/services'
  },
  {
    title: 'Independent Living',
    desc: 'Active senior communities for those who are self-sufficient but want social connection.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&auto=format&fit=crop&q=80',
    link: '/services'
  },
  {
    title: 'Nursing Homes',
    desc: 'Skilled nursing facilities providing round-the-clock medical care and rehabilitation.',
    image: 'https://images.unsplash.com/photo-1538356111053-748a48e1acb8?w=600&auto=format&fit=crop&q=80',
    link: '/services'
  },
]

export function SeniorLivingOptions() {
  return (
    <div className="w-full bg-white py-20 md:py-28 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#597B76]/30 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center mb-14">
          <span className="text-sm font-bold tracking-widest text-[#597B76] uppercase bg-[#597B76]/10 px-4 py-2 rounded-full inline-block mb-4">
            Find the Right Fit
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1B2A3D] text-center tracking-tight mb-4">
            Senior Living Options
          </h2>
          <p className="text-gray-500 text-lg text-center max-w-2xl">
            Not sure which type of care is right? We'll help you figure it out — at no cost.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {options.map((option, index) => (
            <a
              key={index}
              href={option.link}
              className="group relative flex flex-col rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl hover:shadow-[#597B76]/15 transition-all duration-400 hover:-translate-y-1 bg-white"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={option.image}
                  alt={option.title}
                  className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A3D]/30 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-[#1B2A3D] font-bold text-xl mb-2 group-hover:text-[#597B76] transition-colors duration-200">
                  {option.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">{option.desc}</p>
                <div className="flex items-center gap-2 mt-5 text-[#597B76] font-semibold text-sm">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
