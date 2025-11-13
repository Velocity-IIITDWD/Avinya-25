import React from 'react'
import ShinyText from '../components/AboutFest/About.jsx'

export default function SponsorsSection() {
    return (
        <>
            <div className='mb-0 mt-10 sm:mt-30 sm:mb-10 m-auto px-8'>
                <h1 className='text-[4vw] text-white border-t-1 pt-5 border-white text-center '>
                    <ShinyText text="SPONSORS" className="text-[7vw] text-white text-center" speed={3} />
                </h1>
                <div className='flex flex-col md:flex-row justify-between items-center gap-10 mt-10 md:px-10'>
                    {[
                        { img: '/icons/sbi2.png', name: 'State Bank of India' },
                        { img: '/icons/Canara.png', name: 'Canara Bank' },
                        { img: '/icons/chocoberry.jpg', name: '#007 Chocoberry' },
                    ].map((s, i) => (
                        <div key={i} className='flex flex-col items-center justify-center w-[200px] sm:w-[250px] h-[250px] bg-transparent'>
                            <img
                                src={s.img}
                                alt={s.name}
                                className={`object-contain m-auto ${i === 1 ? 'w-[200px] h-[200px]' : 'w-[140px] h-[140px]'}`}
                            />
                            <ShinyText
                                text={s.name}
                                className="text-[6vw] sm:text-[2.5vw] text-white text-center mt-5"
                                speed={3}
                            />
                        </div>
                    ))}
                </div>
            </div >
        </>
    )
}