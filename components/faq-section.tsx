'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'Is your service really free?',
    a: 'Yes, 100% free. We are compensated by the agencies we partner with, so there is never any cost to you or your family for our placement services.'
  },
  {
    q: 'How quickly can you find a caregiver?',
    a: 'In many cases we can connect you with a local agency the same day you call. Our network of vetted agencies is ready to respond quickly to urgent needs.'
  },
  {
    q: 'What areas do you serve?',
    a: 'We currently serve Las Vegas, Henderson, Reno, and Southern California (including San Diego, Chula Vista, Escondido, and surrounding areas). We are growing nationwide—call us even if you are outside these areas.'
  },
  {
    q: 'What is the difference between medical and non-medical home care?',
    a: 'Non-medical home care covers daily living assistance such as bathing, dressing, meal preparation, transportation, and companionship. Medical home care involves licensed nurses or therapists providing skilled medical treatment at home. We specialize in non-medical care placement.'
  },
  {
    q: 'How do you choose which agencies you partner with?',
    a: 'Every agency in our network is thoroughly vetted—we check licensing, insurance, background screening practices, and client satisfaction records before recommending them to any family.'
  },
  {
    q: 'Can I switch agencies if I am not satisfied?',
    a: 'Absolutely. Your satisfaction is our priority. If the match isn\'t right, we will work with you to find a better fit at no additional cost.'
  }
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="bg-white py-12 md:py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-3">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-500 text-center mb-8 md:mb-12 text-sm md:text-base">
          Have questions? We have answers. If you don't see yours below, just call us.
        </p>

        <div className="divide-y divide-gray-200 border border-gray-200 rounded-lg overflow-hidden">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                className="w-full text-left px-5 md:px-6 py-4 md:py-5 flex justify-between items-center gap-4 hover:bg-gray-50 transition"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-semibold text-gray-900 text-sm md:text-base">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[#0F3D66] shrink-0 transition-transform duration-200 ${openIndex === i ? 'rotate-180' : ''}`}
                />
              </button>
              {openIndex === i && (
                <div className="px-5 md:px-6 pb-4 md:pb-5 text-gray-600 text-sm md:text-base leading-relaxed border-t border-gray-100 bg-gray-50">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm mb-3">Still have questions?</p>
          <a href="tel:7257771667" className="inline-block bg-[#0F3D66] text-white px-6 py-3 rounded font-bold text-sm hover:bg-[#1B4D7B] transition">
            Call Us: 725-777-1667
          </a>
        </div>
      </div>
    </div>
  )
}
