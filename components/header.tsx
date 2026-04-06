'use client'
import Link from 'next/link'
import { Home, Heart, Menu, Phone, Mail } from 'lucide-react'

export function Header() {
  return (
    <header className="w-full relative z-50 shadow-md bg-white">
      <div className="bg-[#1B2A3D] text-white py-2 px-4 text-center text-sm md:text-base">
        Call or text <a href="tel:214-929-5055" className="font-bold underline">214-929-5055</a> or send us an email. We are Dallas Fort Worth's Most Experienced Local FREE Senior Care Referral Service
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative flex flex-col items-center justify-center bg-[#597B76] text-white p-2 rounded-t-full rounded-b-md">
                <Home size={24} />
                <Heart size={12} className="absolute top-2 right-2 text-red-500 fill-current" />
              </div>
              <div className="flex flex-col">
                <span className="text-[#597B76] font-bold text-xl leading-none">New hope</span>
                <span className="text-gray-600 text-xs font-semibold uppercase tracking-wider">senior living advisory LLC</span>
              </div>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-gray-700 hover:text-[#597B76] font-medium">Home</Link>
            <Link href="/our-process" className="text-gray-700 hover:text-[#597B76] font-medium">Our Process</Link>
            <Link href="/about" className="text-gray-700 hover:text-[#597B76] font-medium">About Us</Link>
            <Link href="/services" className="text-gray-700 hover:text-[#597B76] font-medium">Senior Living Options</Link>
            <Link href="/resources" className="text-gray-700 hover:text-[#597B76] font-medium">Resources</Link>
            <Link href="/contact" className="text-gray-700 hover:text-[#597B76] font-medium">Contact Us</Link>
          </nav>
          <div className="md:hidden flex items-center">
            <button className="text-gray-700 p-2">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
