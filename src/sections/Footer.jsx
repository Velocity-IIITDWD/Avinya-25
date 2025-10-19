import React from 'react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="mt-20 bg-black/30 backdrop-blur-sm py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white text-xl mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#about" className="hover:text-white transition">About</a></li>
            <li><a href="#events" className="hover:text-white transition">Events</a></li>
            <li><a href="#sponsors" className="hover:text-white transition">Sponsors</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-white text-xl mb-4">Connect</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-white transition">Instagram</a></li>
            <li><a href="#" className="hover:text-white transition">Twitter</a></li>
            <li><a href="#" className="hover:text-white transition">LinkedIn</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-white text-xl mb-4">Address</h3>
          <p className="text-gray-300">
            IIIT Dharwad Campus<br />
            WALMI Campus, PB Road<br />
            Dharwad - 580009
          </p>
        </div>
      </div>
      
      <div className="mt-12 text-center text-gray-400 border-t border-gray-800 pt-8">
        <p>&copy; {currentYear} Avinya - IIIT Dharwad. All rights reserved.</p>
      </div>
    </footer>
  )
}