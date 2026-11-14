'use client'

import { Header } from '@/components/header'
import { TrustBar } from '@/components/trust-bar'
import { Footer } from '@/components/footer'
import { MobileStickyCall } from '@/components/mobile-sticky-call'
import { MapPin, Phone, Mail } from 'lucide-react'

export default function ContactPage() {
  return (
    <main className="pb-16 md:pb-0">
      <Header />
      <TrustBar />

      {/* Hero Banner */}
      <div className="relative h-[220px] sm:h-[280px] md:h-[320px] flex items-center justify-center overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1491472253230-a044054ca35f?w=1600&auto=format&fit=crop&q=80"
          alt="Contact senior care consultants"
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-[#1B2A3D]/75"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 md:mb-4">Contact Us</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            We are here to help. Reach out to our compassionate care consultants today.
          </p>
        </div>
      </div>

      <div className="py-12 md:py-20 px-4 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">Get In Touch</h2>
            <div className="space-y-6 md:space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#1B2A3D]/10 rounded-full flex items-center justify-center text-[#1B2A3D] shrink-0 mt-0.5">
                  <Phone className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1 md:mb-2">Call Addis Eshetu</h3>
                  <p className="text-gray-600 text-sm md:text-base">Dallas Fort Worth: <a href="tel:214-518-3242" className="text-[#1B2A3D] hover:underline font-medium">214-518-3242</a></p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#1B2A3D]/10 rounded-full flex items-center justify-center text-[#1B2A3D] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1 md:mb-2">Service Areas</h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    Dallas Fort Worth, DFW, and DFW area<br/>
                    (More cities to be added as we grow nationwide)
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#1B2A3D]/10 rounded-full flex items-center justify-center text-[#1B2A3D] shrink-0 mt-0.5">
                  <Mail className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1 md:mb-2">Email Address</h3>
                  <a href="mailto:hopeadvisory2026@gmail.com" className="text-[#1B2A3D] hover:underline text-sm md:text-base break-all">
                    hopeadvisory2026@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-6 md:p-8 rounded-lg border border-gray-200">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">Send a Message</h2>
            <form className="space-y-4 md:space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0F3D66] focus:border-transparent transition text-sm" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0F3D66] focus:border-transparent transition text-sm" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0F3D66] focus:border-transparent transition text-sm" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone Number</label>
                <input type="tel" className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0F3D66] focus:border-transparent transition text-sm" placeholder="(555) 123-4567" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0F3D66] focus:border-transparent transition resize-none text-sm" placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" className="w-full bg-[#1B2A3D] hover:bg-[#1B4D7B] text-white px-8 py-3 md:py-4 rounded text-base font-bold transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <Footer />
      <MobileStickyCall />
    </main>
  )
}
