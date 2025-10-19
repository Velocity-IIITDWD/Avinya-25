import React from 'react'
import ShinyText from '../components/AboutFest/About.jsx'
import SponsorText from '../components/SponsorText/SponsorText.jsx'
import ElectricBorder from '../components/SponsorCard/SponsorCard.jsx'

export default function SponsorsSection() {
  return (
    <>
      <div className='mt-40 min-h-[60vh] sm:mt-30 m-auto px-8'>
        <h1 className='text-[4vw] text-white border-t-1 pt-5 border-white text-center mb-16 '>
          {/* <ShinyText text="SPONSORS" className="text-[7vw] text-white text-center mb-16" speed={3} /> */}
          <SponsorText text="SPONSORS" speed={3} />
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Sponsor grid placeholders - replace with actual sponsor components */}
          <ElectricBorder
            color="#eb0a0aff"
            speed={1}
            chaos={0.5}
            thickness={2}
            style={{ borderRadius: 16 }}
          >
            <div>
              <p style={{ margin: '6px 0 0', opacity: 0.8 }}>
                A glowing, animated border wrapper.
              </p>
            </div>
          </ElectricBorder>
        </div>
      </div>
    </>
  )
}