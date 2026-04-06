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
            Families trust us because we're uniquely local, deeply experienced, and maintain relationships with over 1,200 care communities across the DFW area. Proudly featured on:
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20">
            {/* Logo placeholders - styled more modernly */}
            <div className="group flex items-center justify-center p-4 transition-all duration-300 hover:scale-105 opacity-60 hover:opacity-100">
              <span className="text-3xl font-black font-sans tracking-tighter text-[#1B2A3D]">FOX 4</span>
            </div>
            <div className="group flex items-center justify-center p-4 transition-all duration-300 hover:scale-105 opacity-60 hover:opacity-100">
              <span className="text-3xl font-black font-sans tracking-tighter text-[#1B2A3D]">CBS 11</span>
            </div>
            <div className="group flex items-center justify-center p-4 transition-all duration-300 hover:scale-105 opacity-60 hover:opacity-100">
              <span className="text-3xl font-black font-sans tracking-tighter text-[#1B2A3D]">WFAA 8</span>
            </div>
            <div className="group flex items-center justify-center p-4 transition-all duration-300 hover:scale-105 opacity-60 hover:opacity-100">
              <span className="text-xl md:text-2xl font-bold font-serif text-center leading-tight text-[#1B2A3D]">The Dallas<br/>Morning News</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
