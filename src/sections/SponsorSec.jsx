import React from 'react'
import ShinyText from '../components/AboutFest/About.jsx'
import SponsorText from '../components/SponsorText/SponsorText.jsx'

export default function SponsorsSection() {
    return (
        <>
            <div className='mt-40 min-h-[60vh] sm:mt-30 sm:mb-40 m-auto px-8'>
                <h1 className='text-[4vw] text-white border-t-1 pt-5 border-white text-center mb-16 '>
                    <ShinyText text="SPONSORS" className="text-[7vw] text-white text-center mb-16" speed={3} />
                </h1>
                <div className='h-screen'>

                </div>
            </div >
        </>
    )
}