import React from 'react'
import ShinyText from '../components/AboutFest/About.jsx'

export default function SponsorsSection() {
    return (
        <>
            <div className='mb-0 mt-10 sm:mt-30 sm:mb-10 m-auto px-8'>
                <h1 className='text-[4vw] text-white border-t-1 pt-5 border-white text-center '>
                    <ShinyText text="SPONSORS" className="text-[7vw] text-white text-center" speed={3} />
                </h1>
                <div className='flex flex-wrap justify-center items-center'>
                    <span className=' rounded-lg inline-block p-10'>
                        <img className='w-[20vw] sm:w-[15vw] m-auto' src="/icons/sbi2.png" alt="" />
                        <ShinyText text="State Bank of India" className="text-[3vw] text-white text-center mt-3" speed={3} />
                    </span>
                </div>
            </div >
        </>
    )
}