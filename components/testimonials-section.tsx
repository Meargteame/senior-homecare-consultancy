'use client'

export function TestimonialsSection() {
  const testimonials = [
    {
      quote: '"When my mother needed help at home, I didn\'t know where to start. Senior Home Care Consultants listened to our situation and connected us with an amazing local agency within days. Their compassion and professionalism gave us peace of mind during a stressful time."',
      author: 'Maria L., Las Vegas, NV'
    },
    {
      quote: '"We\'d spoken to several agencies before, but none took the time to explain our options like the team did. They genuinely cared about finding the right match for my dad. I can\'t thank them enough for their honesty and guidance."',
      author: 'Robert S., Reno, NV'
    },
    {
      quote: '"After moving my aunt to Southern California, we needed reliable in-home support quickly. Senior Home Care Consultants handled everything with care and professionalism. Their team made sure we felt supported every step of the way."',
      author: 'Elaine T., San Diego, CA'
    }
  ]

  return (
    <div className="bg-white py-12 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8 md:mb-12">
          Client Testimonials
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-5 md:p-6">
              <p className="text-gray-700 text-sm leading-relaxed mb-4 italic">
                {testimonial.quote}
              </p>
              <p className="text-[#0F3D66] font-semibold text-sm">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
