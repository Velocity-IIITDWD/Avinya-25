import React from 'react'
import ShinyText from '../components/AboutFest/About.jsx'

export default function SponsorsSection() {
  return (
    <div className='mt-40 min-h-[60vh] sm:mt-30 m-auto px-8'>
      <h1 className='text-[7vw] text-white text-center mb-16'>
        <ShinyText text="SPONSORS" speed={3} />
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Sponsor grid placeholders - replace with actual sponsor components */}
        {[1, 2, 3].map((i) => (
          <div 
            key={i}
            className="bg-black/20 backdrop-blur-sm rounded-xl p-8 flex items-center justify-center"
          >
            <div className="text-gray-400 text-xl">Sponsor {i}</div>
          </div>
        ))}
      </div>
    </div>
  )
}