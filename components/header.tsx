'use client'

import { useState } from 'react'
import { ShoppingCart, Instagram, Facebook, X, ChevronDown, Menu, Phone } from 'lucide-react'

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#0F3D66] text-white py-2.5 px-4 text-center text-xs sm:text-sm font-semibold">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-1 sm:gap-0">
          <span className="flex items-center gap-2">
            <Phone className="w-3 h-3" />
            Las Vegas: <a href="tel:7257771667" className="underline ml-1">725-777-1667</a>
            <span className="hidden sm:inline mx-2">|</span>
            <span className="hidden sm:inline">San Diego: <a href="tel:6193639346" className="underline ml-1">619-363-9346</a></span>
          </span>
          <span className="flex sm:hidden items-center gap-2 text-xs">
            San Diego: <a href="tel:6193639346" className="underline ml-1">619-363-9346</a>
          </span>
          <div className="hidden sm:flex items-center gap-3">
            <button className="relative">
              <ShoppingCart className="w-4 h-4" />
              <span className="absolute -top-2 -right-2 w-4 h-4 bg-white text-[#0F3D66] rounded-full text-[10px] flex items-center justify-center font-bold">0</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <div className="text-lg md:text-xl font-bold text-[#0F3D66] leading-tight">
              Senior Home Care
            </div>
            <div className="text-[#0F3D66] text-[9px] md:text-xs uppercase tracking-widest font-semibold">
              Consultants
            </div>
          </a>

          {/* Desktop Right Nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <nav className="flex items-center gap-5 lg:gap-6 text-gray-800 font-medium text-sm">
              <a href="/about" className="hover:text-[#0F3D66] transition">About</a>
              <a href="/contact" className="hover:text-[#0F3D66] transition">Contact</a>
              <a href="/services" className="flex items-center gap-1 hover:text-[#0F3D66] transition">
                Services <ChevronDown className="w-3.5 h-3.5" />
              </a>
            </nav>
            <div className="flex items-center gap-2.5 text-[#0F3D66]">
              <a href="#" className="hover:opacity-60 transition"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="hover:opacity-60 transition"><Facebook className="w-4 h-4" /></a>
              <a href="#" className="hover:opacity-60 transition"><X className="w-4 h-4" /></a>
            </div>
            <button className="relative ml-1">
              <ShoppingCart className="w-5 h-5 text-gray-600 hover:text-[#0F3D66]" />
              <span className="absolute -top-2 -right-2 w-4 h-4 bg-[#0F3D66] text-white rounded-full text-[10px] flex items-center justify-center font-bold">0</span>
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-[#0F3D66]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4">
            <a href="/" className="text-gray-700 font-medium py-1 border-b border-gray-100" onClick={() => setMobileOpen(false)}>Home</a>
            <a href="/about" className="text-gray-700 font-medium py-1 border-b border-gray-100" onClick={() => setMobileOpen(false)}>About</a>
            <a href="/services" className="text-gray-700 font-medium py-1 border-b border-gray-100" onClick={() => setMobileOpen(false)}>Services</a>
            <a href="/contact" className="text-gray-700 font-medium py-1 border-b border-gray-100" onClick={() => setMobileOpen(false)}>Contact</a>
            <div className="flex gap-4 text-[#0F3D66] pt-2">
              <a href="#"><Instagram className="w-5 h-5" /></a>
              <a href="#"><Facebook className="w-5 h-5" /></a>
              <a href="#"><X className="w-5 h-5" /></a>
            </div>
          </div>
        )}

        {/* Secondary Navigation - desktop only */}
        <div className="hidden md:block border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 flex items-center gap-4 lg:gap-6 text-xs lg:text-sm overflow-x-auto">
            <a href="/" className="text-gray-600 font-medium hover:text-[#0F3D66] transition py-2.5 whitespace-nowrap border-b-2 border-transparent hover:border-[#0F3D66]">Home</a>
            {['Caregiver Agencies', 'Home Care', 'Respite Care', 'Senior Care', 'Durable Medical Equipment'].map((item) => (
              <div key={item} className="flex items-center gap-1 text-gray-600 font-medium hover:text-[#0F3D66] transition cursor-pointer py-2.5 whitespace-nowrap border-b-2 border-transparent hover:border-[#0F3D66]">
                <span>{item}</span>
                <ChevronDown className="w-3 h-3" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
