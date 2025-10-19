import React from 'react'
import ShinyText from '../components/AboutFest/About.jsx'

export default function EventsSection() {
  const events = [
    {
      category: "Technical",
      items: [
        { name: "Hackathon", description: "24-hour coding challenge" },
        { name: "Robotics", description: "Robot building competition" },
        { name: "AI Challenge", description: "Machine learning competition" }
      ]
    },
    {
      category: "Cultural",
      items: [
        { name: "Sangeet", description: "Music competition" },
        { name: "Nritya", description: "Dance performances" },
        { name: "Drama", description: "Theatrical presentations" }
      ]
    }
  ]

  return (
    <div className='mt-40 min-h-[90vh] px-8'>
      <h1 className='text-[7vw] text-white text-center mb-16'>
        <ShinyText text="EVENTS" speed={3} />
      </h1>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {events.map((category) => (
          <div key={category.category} className="space-y-6">
            <h2 className="text-[4vw] sm:text-[3vw] text-white text-center mb-8">
              {category.category}
            </h2>
            <div className="space-y-4">
              {category.items.map((event) => (
                <div 
                  key={event.name}
                  className="bg-black/20 backdrop-blur-sm rounded-xl p-6 hover:bg-black/30 transition-colors"
                >
                  <h3 className="text-white text-2xl mb-2">{event.name}</h3>
                  <p className="text-gray-300">{event.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
