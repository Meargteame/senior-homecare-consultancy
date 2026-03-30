'use client'

import Image from 'next/image'

export function CTASection() {
  return (
    <div className="bg-[#0F3D66] py-12 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
              Could You Get The Caregiver You Need Today?
            </h2>
            
            <p className="text-gray-200 text-sm md:text-base leading-relaxed mb-6 md:mb-8">
              Yes, it is very possible. We are your trusted partner in connecting families with reliable, compassionate caregivers across Las Vegas, Reno, and Southern California.
            </p>

            <a href="/contact" className="inline-block bg-white text-[#0F3D66] px-6 md:px-8 py-3 rounded text-sm md:text-base font-bold hover:bg-gray-100 transition">
              Contact us
            </a>
          </div>

          {/* Right Image — happy senior with family at home */}
          <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-md">
            <Image
              src="https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?w=800&auto=format&fit=crop&q=80"
              alt="Happy senior with family and caregiver"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </div>

        {/* Location Links */}
        <div className="mt-12 md:mt-16 pt-10 md:pt-12 border-t border-blue-400/30">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-8 text-white text-sm">
            <div>
              <h4 className="font-bold mb-3 md:mb-4">Home Care</h4>
              <ul className="space-y-1.5 text-gray-300 text-xs md:text-sm">
                <li><a href="#" className="hover:text-white transition">Enterprise</a></li>
                <li><a href="#" className="hover:text-white transition">Henderson</a></li>
                <li><a href="#" className="hover:text-white transition">Las Vegas</a></li>
                <li><a href="#" className="hover:text-white transition">Mesquite</a></li>
                <li><a href="#" className="hover:text-white transition">Pahrump</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 md:mb-4">Nevada</h4>
              <ul className="space-y-1.5 text-gray-300 text-xs md:text-sm">
                <li><a href="#" className="hover:text-white transition">Paradise</a></li>
                <li><a href="#" className="hover:text-white transition">Reno</a></li>
                <li><a href="#" className="hover:text-white transition">Spring Valley</a></li>
                <li><a href="#" className="hover:text-white transition">Summerlin</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 md:mb-4">California</h4>
              <ul className="space-y-1.5 text-gray-300 text-xs md:text-sm">
                <li><a href="#" className="hover:text-white transition">Chula Vista</a></li>
                <li><a href="#" className="hover:text-white transition">Del Mar</a></li>
                <li><a href="#" className="hover:text-white transition">El Cajon</a></li>
                <li><a href="#" className="hover:text-white transition">Escondido</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 md:mb-4">More Areas</h4>
              <ul className="space-y-1.5 text-gray-300 text-xs md:text-sm">
                <li><a href="#" className="hover:text-white transition">Imperial Beach</a></li>
                <li><a href="#" className="hover:text-white transition">La Mesa</a></li>
                <li><a href="#" className="hover:text-white transition">National City</a></li>
                <li><a href="#" className="hover:text-white transition">Oceanside</a></li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h4 className="font-bold mb-3 md:mb-4">Contact Info</h4>
              <p className="text-gray-300 mb-1.5 text-xs md:text-sm break-all">info@seniorhomecareconsultants.com</p>
              <p className="text-gray-300 mb-1 text-xs md:text-sm">Las Vegas: 725-777-1667</p>
              <p className="text-gray-300 mb-2 text-xs md:text-sm">San Diego: 619-363-9346</p>
              <p className="text-gray-400 text-xs">Mon-Fri 9:00AM - 5:00PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
