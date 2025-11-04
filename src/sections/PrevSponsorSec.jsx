import React from 'react'
import ShinyText from '../components/AboutFest/About.jsx'
import SponsorText from '../components/SponsorText/SponsorText.jsx'

export default function SponsorsSection() {
  return (
    <>
      <div className='mt-20 min-h-[60vh] sm:mt-30 sm:mb-40 m-auto px-8'>
        <h1 className='text-[4vw] text-white border-t-1 pt-5 border-white text-center mb-16 '>
          {/* <ShinyText text="SPONSORS" className="text-[7vw] text-white text-center mb-16" speed={3} /> */}
          <div className='w-full flex flex-col justify-between'>
            <SponsorText text="Previous" className='w-[60vw] sm:w-[50vw]' speed={3} />
            <div className='flex flex-row mt-5 sm:mt-0'>
              <div className='w-[50vw] sm:w-[62vw]'></div>
              <SponsorText text="SPONSORS" className='w-[50vw] sm:w-[55vw]' speed={3} />
            </div>
          </div>
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-20 mt-15 h-auto">
          {/* Sponsor grid placeholders - replace with actual sponsor components */}
          <div className='h-[20vh] sm:h-[38vh] w-auto p-4 rounded-3xl flex flex-start items-center flex-col'>
            <ShinyText text="Devfolio" className="text-[6vw] sm:text-[4vw] text-white text-center mb-5 sm:mb-14" speed={3} />
            <img className='h-[18vw] sm:h-[10vw]' src="/icons/Devfolio.png" alt="" />
          </div>
          <div className='h-[20vh] sm:h-[38vh] w-auto border-white p-4 rounded-3xl flex flex-start items-center flex-col'>
            <ShinyText text="Beeceptor" className="text-[6vw] sm:text-[4vw] text-white text-center mb-6" speed={3} />
            <img className='h-[22vw] sm:h-[14vw]' src="/icons/Beeceptor.png" alt="" />
          </div>
          <div className='h-[20vh] sm:h-[38vh] w-auto border-white p-4 rounded-3xl flex flex-start items-center flex-col'>
            <ShinyText text="Polygon" className="text-[6vw] sm:text-[4vw] text-white text-center mb-0" speed={3} />
            <img className='sm:h-[20vw]' src="/icons/Polygon.png" alt="" />
          </div>
          <div className='h-[20vh] sm:h-[38vh] w-auto border-white p-4 rounded-3xl flex flex-start items-center flex-col'>
            <ShinyText text="ETH India" className="text-[6vw] sm:text-[4vw] text-white text-center mb-2" speed={3} />
            <img className='sm:h-[17vw]' src="/icons/ETH.png" alt="" />
          </div>
          <div className='h-[20vh] sm:h-[38vh] w-auto border-white p-4 rounded-3xl flex flex-start items-center flex-col'>
            <ShinyText text="GDG Hubli" className="text-[5.8vw] sm:text-[4vw] text-white text-center mb-3" speed={3} />
            <img className='sm:h-[20vw]' src="/icons/GDG.png" alt="" />
          </div>
          <div className='h-[20vh] sm:h-[38vh] w-auto border-white p-4 rounded-3xl flex flex-start items-center flex-col'>
            <ShinyText text="Dev Army" className="text-[6vw] sm:text-[4vw] text-white text-center mb-6" speed={3} />
            <img className='sm:h-[15vw]' src="/icons/Dev.png" alt="" />
          </div>
          <div className='h-[20vh] sm:h-[38vh] w-auto border-white p-4 rounded-3xl flex flex-start items-center flex-col'>
            <ShinyText text="Jet Brains" className="text-[6vw] sm:text-[4vw] text-white text-center mb-10" speed={3} />
            <img className='h-[18vw] sm:h-[10vw] bg-white rounded-full' src="/icons/Jet.png" alt="" />
          </div>
          <div className='h-[20vh] sm:h-[38vh] w-auto border-white p-4 rounded-3xl flex flex-start items-center flex-col'>
            <ShinyText text="IIITian-Networks" className="text-[4vw] sm:text-[3vw] text-white text-center mb-7 sm:mb-12" speed={3} />
            <img className='sm:h-[11vw]' src="/icons/iiit.png" alt="" />
          </div>
          <div className='h-[20vh] sm:h-[38vh] w-auto border-white p-4 rounded-3xl flex flex-start items-center flex-col'>
            <ShinyText text="Nexus" className="text-[6vw] sm:text-[3vw] text-white text-center mb-5 sm:mb-8" speed={3} />
            <img className='sm:h-[13vw]' src="/icons/Nexus.png" alt="" />
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-10 mt-15 sm:mt-20 h-auto">
          <div className='h-auto border border-gray-500 sm:h-[25vh] w-auto p-4 rounded-3xl flex flex-start items-center flex-col'>
            <img className='h-auto sm:h-[13vw] lg:h-[10vw]' src="/icons/pvr.png" alt="" />
          </div>
          <div className='h-auto border border-gray-500 sm:h-[25vh] w-auto p-4 rounded-3xl flex flex-start items-center flex-col'>
            <img className='h-auto  sm:h-[13vw] lg:h-[10vw]' src="/icons/mishra.png" alt="" />
          </div>
          <div className='h-auto border border-gray-500 sm:h-[25vh] w-auto p-4 rounded-3xl flex flex-start items-center flex-col'>
            <img className='h-auto sm:h-[13vw] lg:h-[10vw]' src="/icons/pizza.png" alt="" />
          </div>
          <div className='h-auto border border-gray-500 sm:h-[25vh] w-auto p-4 rounded-3xl flex flex-start items-center flex-col'>
            <img className='h-auto sm:h-[15vw] lg:h-[10vw] align-middle' src="/icons/pop.png" alt="" />
          </div>
        </div>
      </div >
    </>
  )
}