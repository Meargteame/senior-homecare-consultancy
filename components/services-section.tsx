'use client'

import Image from 'next/image'

export function ServicesSection() {
  const services = [
    {
      title: 'Home Caregivers',
      description: 'We help people in need of non-medical home care.',
      // Elderly woman being assisted by a home caregiver
      image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=600&auto=format&fit=crop&q=80'
    },
    {
      title: 'Senior Caregivers',
      description: 'Connecting Seniors with reputable services.',
      // Senior being consulted by a professional care worker
      image: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=600&auto=format&fit=crop&q=80'
    },
    {
      title: 'Respite Caregivers',
      description: 'Family caregivers need a vacation, and we can help with caregivers.',
      // Caregiver with elderly patient - respectful compassionate scene
      image: 'https://images.unsplash.com/photo-1491472253230-a044054ca35f?w=600&auto=format&fit=crop&q=80'
    },
    {
      title: 'Live In Caregivers',
      description: 'We help people who need around-the-clock care.',
      // Nurse/carer helping elderly person at home
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&auto=format&fit=crop&q=80'
    }
  ]

  return (
    <div className="bg-[#0F3D66] py-12 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-8 md:mb-12 px-2">
          Helps Families Find Trusted and Compassionate Caregivers
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 mb-10 md:mb-12">
          {services.map((service, index) => (
            <div key={index}>
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden mb-3 md:mb-4">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <h3 className="text-base md:text-lg font-bold text-white mb-1.5 md:mb-2">{service.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="/services" className="inline-block bg-white text-[#0F3D66] px-6 md:px-8 py-3 rounded text-sm font-bold hover:bg-gray-100 transition">
            View All Services
          </a>
        </div>
      </div>
    </div>
  )
}
