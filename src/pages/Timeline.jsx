import React from 'react'
import EventsSection from '../components/Timeline/timeline'
import ShinyText from '../components/AboutFest/About'



const Timeline = () => {
    return (
        <div id="events" className='flex flex-col items-center'>
            <ShinyText text="Event Timeline" className="text-5xl sm:text-5xl md:text-6xl font-bold text-white mt-20 mb-10 mx-2 sm:m-30 text-balance font-mont text-center" />
            <div className='w-[90%] sm:w-full lg:w-[70vw] sm:px-13 px-4 mb-24'>
                <EventsSection />
            </div>
        </div>
    )
}

export default Timeline