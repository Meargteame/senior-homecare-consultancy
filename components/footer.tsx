'use client'

import { Facebook, Twitter, Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[#0F3D66] text-white py-10 md:py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4">Senior Home Care Consultants</h3>
            <p className="text-gray-300 text-xs md:text-sm leading-relaxed mb-4">
              A family-oriented consulting firm that helps individuals and their loved ones find the right non-medical home care solutions.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-300 hover:text-white transition"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-gray-300 hover:text-white transition"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-gray-300 hover:text-white transition"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>
          <div>
            <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4">Quick Links</h3>
            <ul className="text-xs md:text-sm text-gray-300 space-y-2">
              <li><a href="/" className="hover:text-white transition">Home</a></li>
              <li><a href="/about" className="hover:text-white transition">About</a></li>
              <li><a href="/services" className="hover:text-white transition">Services</a></li>
              <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
              <li><a href="#" className="hover:text-white transition">Resource Blogs For Seniors</a></li>
            </ul>
          </div>
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4">Contact Information</h3>
            <ul className="text-xs md:text-sm text-gray-300 space-y-2">
              <li className="break-all">info@seniorhomecareconsultants.com</li>
              <li>Las Vegas: <a href="tel:7257771667" className="hover:text-white transition">725-777-1667</a></li>
              <li>San Diego: <a href="tel:6193639346" className="hover:text-white transition">619-363-9346</a></li>
              <li>Mon-Fri 9:00AM - 5:00PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-400/30 pt-6 md:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-xs md:text-sm text-gray-300">
            <p>All Rights Reserved by Senior Home Care Consultants, LLC ©{new Date().getFullYear()}</p>
            <div className="flex flex-wrap justify-center sm:justify-end items-center gap-2 md:gap-4">
              <a href="#" className="hover:text-white transition">Terms</a>
              <span>|</span>
              <a href="#" className="hover:text-white transition">Privacy</a>
              <span>|</span>
              <a href="#" className="hover:text-white transition">Refund Policy</a>
              <span>|</span>
              <a href="#" className="hover:text-white transition">Shipping</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
