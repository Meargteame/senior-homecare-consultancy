'use client'

export function WhySection() {
  const reasons = [
    {
      title: 'It Is Free',
      description: 'We Offer Free Placement Services.'
    },
    {
      title: 'Top Agencies',
      description: 'We Partner With Local Agencies.'
    },
    {
      title: 'Reliable',
      description: 'We Are There When You Call! We Know How Important It Is.'
    },
    {
      title: 'Compassion',
      description: 'Everyone Needs Help At Some Point.'
    }
  ]

  return (
    <div className="bg-[#0F3D66] py-12 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-10 md:mb-16 px-2">
          Why Should You Use Senior Home Care Consultants?
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="border-t-2 border-blue-400/40 pt-5">
              <h3 className="text-base md:text-lg font-bold text-white mb-2 md:mb-3">{reason.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
