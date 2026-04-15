'use client'

export function PartnersSection() {
  return (
    <div className="w-full bg-gradient-to-b from-[#F4F4EB] to-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-16 relative overflow-hidden text-center max-w-5xl mx-auto border border-gray-100">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#597B76] via-[#7AA8A1] to-[#597B76]"></div>
          <p className="text-[#597B76] font-semibold tracking-wider uppercase text-sm mb-4">Trusted Local Experts</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#1B2A3D] mb-6 leading-tight">
            The Preferred Senior Living<br/>Advisory Service in DFW
          </h2>
          <p className="text-lg md:text-xl text-gray-500 mb-12 max-w-3xl mx-auto leading-relaxed">
            Families trust us because we're uniquely local, deeply experienced, and maintain relationships with care communities across the DFW area.
          </p>
          <p className="text-sm font-bold text-[#597B76] uppercase tracking-widest mb-6">Areas We Proudly Serve</p>
          
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20">
            <div className="group flex items-center justify-center p-4 transition-all duration-300 hover:scale-105 opacity-60 hover:opacity-100">
              <span className="text-xl font-bold text-[#1B2A3D]">Dallas Fort Worth</span>
            </div>
            <div className="group flex items-center justify-center p-4 transition-all duration-300 hover:scale-105 opacity-60 hover:opacity-100">
              <span className="text-xl font-bold text-[#1B2A3D]">Garland, TX</span>
            </div>
            <div className="group flex items-center justify-center p-4 transition-all duration-300 hover:scale-105 opacity-60 hover:opacity-100">
              <span className="text-xl font-bold text-[#1B2A3D]">Plano & Frisco</span>
            </div>
            <div className="group flex items-center justify-center p-4 transition-all duration-300 hover:scale-105 opacity-60 hover:opacity-100">
              <span className="text-xl font-bold text-[#1B2A3D]">Fort Worth</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
