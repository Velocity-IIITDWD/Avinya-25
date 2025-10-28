import React from 'react'
import EventsSection from '../components/Timeline/timeline'
import ShinyText from '../components/AboutFest/About'



const Timeline = () => {
    return (
        <div id="events" className='px-70 flex flex-col items-center'>
            <ShinyText text="Event Timeline" className="text-4xl sm:text-5xl md:text-6xl font-bold text-white m-30 text-balance font-mont font-bold" />
            <EventsSection />
        </div>
    )
}

export default Timeline