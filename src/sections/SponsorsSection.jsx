import React from 'react'
import ShinyText from '../components/AboutFest/About.jsx'
import SponsorText from '../components/SponsorText/SponsorText.jsx'
import ElectricBorder from '../components/SponsorCard/SponsorCard.jsx'
import ProfileCard from '../components/SponsorCard/SponsorCard.jsx'



export default function SponsorsSection() {
  return (
    <>
      <div className='mt-40 min-h-[60vh] sm:mt-30 m-auto px-8'>
        <h1 className='text-[4vw] text-white border-t-1 pt-5 border-white text-center mb-16 '>
          {/* <ShinyText text="SPONSORS" className="text-[7vw] text-white text-center mb-16" speed={3} /> */}
          <SponsorText text="SPONSORS" speed={3} />
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-20 mt-15 h-auto">
          {/* Sponsor grid placeholders - replace with actual sponsor components */}
          <div className='h-[20vh] sm:h-[38vh] w-auto p-4 rounded-3xl flex flex-start items-center flex-col'>
            <ShinyText text="Devfolio" className="text-[6vw] sm:text-[4vw] text-white text-center mb-5 sm:mb-14" speed={3} />
            <img className='h-[18vw] sm:h-[10vw]' src="/Devfolio.png" alt="" />
          </div>
          <div className='h-[20vh] sm:h-[38vh] w-auto border-white p-4 rounded-3xl flex flex-start items-center flex-col'>
            <ShinyText text="Beeceptor" className="text-[6vw] sm:text-[4vw] text-white text-center mb-6" speed={3} />
            <img className='h-[22vw] sm:h-[14vw]' src="/Beeceptor.png" alt="" />
          </div>
          <div className='h-[20vh] sm:h-[38vh] w-auto border-white p-4 rounded-3xl flex flex-start items-center flex-col'>
            <ShinyText text="Polygon" className="text-[6vw] sm:text-[4vw] text-white text-center mb-0" speed={3} />
            <img className='sm:h-[20vw]' src="/Polygon.png" alt="" />
          </div>
          <div className='h-[20vh] sm:h-[38vh] w-auto border-white p-4 rounded-3xl flex flex-start items-center flex-col'>
            <ShinyText text="ETH India" className="text-[6vw] sm:text-[4vw] text-white text-center mb-2" speed={3} />
            <img className='sm:h-[17vw]' src="/ETH.png" alt="" />
          </div>
          <div className='h-[20vh] sm:h-[38vh] w-auto border-white p-4 rounded-3xl flex flex-start items-center flex-col'>
            <ShinyText text="GDG Hubli" className="text-[5.8vw] sm:text-[4vw] text-white text-center mb-3" speed={3} />
            <img className='sm:h-[20vw]' src="/GDG.png" alt="" />
          </div>
          <div className='h-[20vh] sm:h-[38vh] w-auto border-white p-4 rounded-3xl flex flex-start items-center flex-col'>
            <ShinyText text="Dev Army" className="text-[6vw] sm:text-[4vw] text-white text-center mb-6" speed={3} />
            <img className='sm:h-[15vw]' src="/Dev.png" alt="" />
          </div>
          <div className='h-[20vh] sm:h-[38vh] w-auto border-white p-4 rounded-3xl flex flex-start items-center flex-col'>
            <ShinyText text="Jet Brains" className="text-[6vw] sm:text-[4vw] text-white text-center mb-10" speed={3} />
            <img className='h-[18vw] sm:h-[10vw] bg-white rounded-full' src="/Jet.png" alt="" />
          </div>
          <div className='h-[20vh] sm:h-[38vh] w-auto border-white p-4 rounded-3xl flex flex-start items-center flex-col'>
            <ShinyText text="IIITian-Networks" className="text-[4vw] sm:text-[3vw] text-white text-center mb-7 sm:mb-12" speed={3} />
            <img className='sm:h-[11vw]' src="/iiit.png" alt="" />
          </div>
          <div className='h-[20vh] sm:h-[38vh] w-auto border-white p-4 rounded-3xl flex flex-start items-center flex-col'>
            <ShinyText text="Nexus" className="text-[6vw] sm:text-[3vw] text-white text-center mb-5 sm:mb-8" speed={3} />
            <img className='sm:h-[13vw]' src="/Nexus.png" alt="" />
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-20 mt-20 sm:mt-15 h-auto">
          <div className='h-[22vh] sm:h-[25vh] w-auto border-white p-4 rounded-3xl flex flex-start items-center flex-col'>
            <img className='h-[30vw] sm:h-[13vw]' src="/pvr.png" alt="" />
          </div>
          <div className='h-[22vh] sm:h-[25vh] w-auto border-white p-4 rounded-3xl flex flex-start items-center flex-col'>
            <img className='h-[30vw]  sm:h-[13vw]' src="/mishra.png" alt="" />
          </div>
          <div className='h-[22vh] sm:h-[25vh] w-auto border-white p-4 rounded-3xl flex flex-start items-center flex-col'>
            <img className='h-[30vw] sm:h-[13vw]' src="/pizza.png" alt="" />
          </div>
          <div className='h-[22vh] sm:h-[25vh] w-auto border-white p-4 rounded-3xl flex flex-start items-center flex-col'>
            <img className='h-[30vw] sm:h-[15vw] align-middle' src="/pop.png" alt="" />
          </div>
        </div>
      </div >
    </>
  )
}