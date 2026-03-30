'use client'

export function PartnersSection() {
  const partners = [
    'Valley Home Care',
    'Comfort Keepers',
    'Home Instead',
    'BrightSpring',
    'Interim HealthCare',
    'Right at Home',
  ]

  return (
    <div className="bg-gray-50 border-y border-gray-200 py-10 md:py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-xs md:text-sm font-bold text-gray-400 uppercase tracking-widest mb-6 md:mb-8">
          Some of Our Current Trusted Partnering Agencies
        </p>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {partners.map((name) => (
            <div
              key={name}
              className="bg-white border border-gray-200 rounded px-5 md:px-6 py-3 text-sm md:text-base font-semibold text-gray-600 hover:border-[#0F3D66] hover:text-[#0F3D66] transition"
            >
              {name}
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-gray-400 mt-4 md:mt-6">
          More cities and agencies to be added as we grow nationwide.
        </p>
      </div>
    </div>
  )
}
