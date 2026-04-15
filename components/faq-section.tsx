'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'Is your service really free?',
    a: 'Yes, 100% free. We are compensated by the communities we partner with, so there is never any cost to you or your family for our placement services.'
  },
  {
    q: 'How quickly can you find the right community?',
    a: 'In many cases we can connect you with a local option the same day you call. Our network of vetted communities is ready to respond quickly to urgent needs.'
  },
  {
    q: 'What areas do you serve?',
    a: 'We serve the entire Dallas Fort Worth metroplex — including Dallas, Plano, Frisco, McKinney, Garland, Fort Worth, Arlington, Irving, and surrounding cities.'
  },
  {
    q: 'What types of senior living do you help with?',
    a: 'We help families find independent living, assisted living, memory care, residential care homes, and nursing homes — all tailored to your loved one\'s specific needs and budget.'
  },
  {
    q: 'How do you choose which communities you recommend?',
    a: 'Every community in our network is personally vetted — we check licensing, staffing, state inspection records, and visit facilities ourselves before recommending them to any family.'
  },
  {
    q: 'What if we are not happy with the placement?',
    a: 'Your satisfaction is our priority. If the match isn\'t right, we will work with you to find a better fit at no additional cost — for as long as it takes.'
  }
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="bg-[#F4F4EB] py-20 md:py-28 px-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#597B76]/8 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <span className="text-sm font-bold tracking-widest text-[#597B76] uppercase bg-[#597B76]/10 px-4 py-2 rounded-full inline-block mb-4">
            Common Questions
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1B2A3D] tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Have questions? We have answers. If you don't see yours below, just call Addis directly.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                openIndex === i
                  ? 'bg-white border-[#597B76]/30 shadow-lg shadow-[#597B76]/10'
                  : 'bg-white/60 border-white hover:bg-white hover:border-gray-200 hover:shadow-sm'
              }`}
            >
              <button
                className="w-full text-left px-6 py-5 flex justify-between items-center gap-4"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className={`font-semibold text-base md:text-lg transition-colors duration-200 ${openIndex === i ? 'text-[#597B76]' : 'text-[#1B2A3D]'}`}>
                  {faq.q}
                </span>
                <div className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                  openIndex === i ? 'bg-[#597B76] text-white' : 'bg-[#597B76]/10 text-[#597B76]'
                }`}>
                  {openIndex === i
                    ? <Minus size={14} strokeWidth={2.5} />
                    : <Plus size={14} strokeWidth={2.5} />
                  }
                </div>
              </button>
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  openIndex === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 text-gray-600 leading-relaxed text-base border-t border-[#597B76]/10 pt-4">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
          <p className="text-gray-700 font-medium text-lg mb-4">Still have questions? Addis is happy to help.</p>
          <a
            href="tel:214-518-3242"
            className="inline-flex items-center gap-3 bg-[#1B2A3D] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#2A405C] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            Call 214-518-3242
          </a>
        </div>
      </div>
    </div>
  )
}
