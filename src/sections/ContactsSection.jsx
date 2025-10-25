import React from 'react'
import { motion } from 'framer-motion'
import ShinyText from '../components/AboutFest/About.jsx'
import { contactsData } from '../data/contacts'
import './ContactsSection.css'

export default function ContactsSection() {
  const { contacts, socials } = contactsData
  
  return (
    <motion.div 
      className='mt-32 px-8 mb-20'
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h1 className='text-[7vw] text-white text-center mb-12'>
        <ShinyText text="CONTACT US" speed={3} />
      </h1>

      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Direct contact info */}
          <div className="flex-1 space-y-6">
            <a href={`mailto:${contacts[0].value}`} className="flex items-center gap-4 text-white/90 hover:text-white transition-colors">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 icon-container">
                <span className="text-2xl">{contacts[0].icon}</span>
              </div>
              <div>
                <h3 className="text-xl font-light">Email</h3>
                <p className="text-white/70">{contacts[0].value}</p>
              </div>
            </a>

            <div className="flex items-start gap-4 text-white/90">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 icon-container mt-1">
                <span className="text-2xl">{contacts[1].icon}</span>
              </div>
              <div>
                <h3 className="text-xl font-light">Phone</h3>
                <div className="space-y-1">
                  {contacts[1].values.map((phone, index) => (
                    <a key={phone} href={contacts[1].links[index]} 
                       className="block text-white/70 hover:text-white transition-colors">
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <a href={contacts[2].link} target="_blank" rel="noopener noreferrer" 
               className="flex items-center gap-4 text-white/90 hover:text-white transition-colors">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 icon-container">
                <span className="text-2xl">{contacts[2].icon}</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-light">Address</h3>
                <p className="text-white/70">{contacts[2].value}</p>
              </div>
            </a>
          </div>

          {/* Social Media Card */}
          <div className="md:w-80 bg-black/20 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-white/90 text-lg mb-4">Connect With Us</h3>
            <div className="space-y-3">
              <a href={socials[0].link} target="_blank" rel="noopener noreferrer" 
                 className="block bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg p-3 hover:from-purple-500/30 hover:to-pink-500/30 transition-all social-link">
                <div className="flex items-center gap-3">
                  <span className="text-white/80">{socials[0].platform}</span>
                </div>
              </a>
              <a href={socials[1].link} target="_blank" rel="noopener noreferrer"
                 className="block bg-gradient-to-br from-blue-600/20 to-blue-800/20 rounded-lg p-3 hover:from-blue-600/30 hover:to-blue-800/30 transition-all social-link">
                <div className="flex items-center gap-3">
                  <span className="text-white/80">{socials[1].platform}</span>
                </div>
              </a>
              <a href={socials[2].link} target="_blank" rel="noopener noreferrer"
                 className="block bg-gradient-to-br from-blue-600/20 to-blue-800/20 rounded-lg p-3 hover:from-blue-600/30 hover:to-blue-800/30 transition-all social-link">
                <div className="flex items-center gap-3">
                  <span className="text-white/80">{socials[2].platform}</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Why Connect With Us section */}
        <motion.div 
          className="mt-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-[4vw] text-white text-center mb-12">
            <ShinyText text="Why Connect With Us?" speed={3} />
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#0A0A0A] rounded-2xl p-6 hover:bg-[#0f0f0f] transition-colors">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1A] flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white/80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl text-white mb-2">Partnership Opportunities</h3>
                  <p className="text-gray-400">Collaborate with us and be part of something extraordinary.</p>
                </div>
              </div>
            </div>

            <div className="bg-[#0A0A0A] rounded-2xl p-6 hover:bg-[#0f0f0f] transition-colors">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1A] flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white/80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl text-white mb-2">Sponsorship Inquiries</h3>
                  <p className="text-gray-400">Showcase your brand at our premier tech and cultural fest.</p>
                </div>
              </div>
            </div>

            <div className="bg-[#0A0A0A] rounded-2xl p-6 hover:bg-[#0f0f0f] transition-colors">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1A] flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white/80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 7L12 12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl text-white mb-2">Quick Response</h3>
                  <p className="text-gray-400">Our team responds within 24 hours with personalized attention.</p>
                </div>
              </div>
            </div>

            <div className="bg-[#0A0A0A] rounded-2xl p-6 hover:bg-[#0f0f0f] transition-colors">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1A] flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white/80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 18V12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M2 19H6C6 19 6 21 8 21C10 21 10 19 10 19H14C14 19 14 21 16 21C18 21 18 19 18 19H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl text-white mb-2">Direct Support</h3>
                  <p className="text-gray-400">Get assistance with registration, events, or any questions.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  ) 
}