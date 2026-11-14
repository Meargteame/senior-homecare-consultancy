'use client'
import { Home, Heart, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-[#1B2A3D] text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6 inline-flex">
              <div className="relative flex flex-col items-center justify-center bg-[#597B76] text-white p-2 rounded-t-full rounded-b-md">
                <Home size={24} />
                <Heart size={12} className="absolute top-2 right-2 text-red-500 fill-current" />
              </div>
              <div className="flex flex-col">
                <span className="text-[#597B76] font-bold text-xl leading-none">New hope</span>
                <span className="text-white text-xs font-semibold uppercase tracking-wider">senior living advisory LLC</span>
              </div>
            </Link>
            
            <p className="mb-4 text-justify pr-0 lg:pr-12 leading-relaxed">
              We are a FREE referral service helping families find the right independent living, assisted living, memory care, and residential care homes in the Dallas Fort Worth area.
            </p>

            <div className="flex items-start gap-3 mb-3">
              <MapPin className="text-[#597B76] mt-1 shrink-0" size={20} />
              <p>505 Nona street,<br/>Garland, TX 75040</p>
            </div>
            
            <div className="flex items-center gap-3 mb-3">
              <Phone className="text-[#597B76] shrink-0" size={20} />
              <p>Addis Eshetu: 214.518.3242</p>
            </div>

            <div className="flex items-center gap-3 mb-3">
              <Mail className="text-[#597B76] shrink-0" size={20} />
              <a href="mailto:hopeadvisory2026@gmail.com" className="hover:text-white transition break-all">
                hopeadvisory2026@gmail.com
              </a>
            </div>
            
            <div className="mt-6">
              <p className="font-bold text-white mb-3">Connect With Us</p>
              <div className="flex gap-4">
                <a href="#" className="bg-[#2A405C] p-2 rounded-full hover:bg-[#597B76] transition"><Facebook size={20} /></a>
                <a href="#" className="bg-[#2A405C] p-2 rounded-full hover:bg-[#597B76] transition"><Twitter size={20} /></a>
                <a href="#" className="bg-[#2A405C] p-2 rounded-full hover:bg-[#597B76] transition"><Instagram size={20} /></a>
                <a href="#" className="bg-[#2A405C] p-2 rounded-full hover:bg-[#597B76] transition"><Linkedin size={20} /></a>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-6 border-b border-[#2A405C] pb-2">Areas We Serve</h3>
            <ul className="space-y-2 text-sm">
              <li>Dallas</li>
              <li>Plano</li>
              <li>Frisco</li>
              <li>McKinney</li>
              <li>Allen</li>
              <li>Richardson</li>
              <li>Garland</li>
              <li>Mesquite</li>
              <li>Rowlett</li>
              <li>Rockwall</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-6 border-b border-[#2A405C] pb-2 text-transparent select-none border-none">More Cities</h3>
            <ul className="space-y-2 text-sm md:mt-2">
              <li>Fort Worth</li>
              <li>Arlington</li>
              <li>Irving</li>
              <li>Grand Prairie</li>
              <li>Carrollton</li>
              <li>Lewisville</li>
              <li>Flower Mound</li>
              <li>Grapevine</li>
              <li>Southlake</li>
              <li>Colleyville</li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-[#2A405C] mt-12 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} New hope senior living advisory LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
