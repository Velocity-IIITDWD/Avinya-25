import React from 'react'
import ShinyText from '../components/AboutFest/About.jsx'

export default function ContactsSection() {
  return (
    <div className='mt-40 min-h-[60vh] sm:mt-30 m-auto px-8'>
      <h1 className='text-[7vw] text-white text-center mb-16'>
        <ShinyText text="CONTACT US" speed={3} />
      </h1>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-black/20 backdrop-blur-sm rounded-xl p-8">
          <h3 className="text-white text-2xl mb-4">Get in Touch</h3>
          <div className="space-y-4 text-gray-300">
            <p>Email: contact@avinya.iiitdh.ac.in</p>
            <p>Phone: +91 XXXXXXXXXX</p>
            <p>Address: IIIT Dharwad Campus</p>
          </div>
        </div>
        <div className="bg-black/20 backdrop-blur-sm rounded-xl p-8">
          <h3 className="text-white text-2xl mb-4">Social Media</h3>
          <div className="space-y-4 text-gray-300">
            <p>Instagram: @avinya_iiitdh</p>
            <p>Twitter: @avinya_iiitdh</p>
            <p>LinkedIn: IIIT Dharwad Avinya</p>
          </div>
        </div>
      </div>
    </div>
  )
}