import React, { useState } from 'react'
import ShinyText from '../components/AboutFest/About.jsx'
import { motion, AnimatePresence } from 'framer-motion'
import { eventsData, categories } from '../data/events.js'

export default function EventsSection() {
  const [activeCategory, setActiveCategory] = useState(categories[0])

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  }

  return (
    <div className="mt-30 min-h-[90vh] px-8">
      <h1 className="text-[7vw] text-white text-center mb-16">
        <ShinyText text="EVENTS" speed={3} />
      </h1>

      <div className="max-w-6xl mx-auto mb-12">
        <div className="flex justify-center gap-8">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={
                activeCategory !== category
                  ? {
                    scale: 1.05,
                    boxShadow: "0 0 15px rgba(255, 255, 255, 0.3)",
                  }
                  : {}
              }
              whileTap={{ scale: 0.95 }}
              className={
                activeCategory === category
                  ? "relative px-8 py-3 text-lg font-medium rounded-full bg-white text-black shadow-lg scale-105"
                  : "relative px-8 py-3 text-lg font-medium rounded-full bg-black/20 text-white backdrop-blur-sm border border-white/10 hover:border-white/30 transition-colors duration-300"
              }
            >
              <span className={
                activeCategory === category
                  ? "bg-gradient-to-r from-black to-gray-700 bg-clip-text"
                  : "bg-gradient-to-r from-white to-gray-300 bg-clip-text"
              }>
                {category}
              </span>
              {activeCategory === category && (
                <motion.div
                  layoutId="activeBackground"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-white/90 to-white -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {eventsData[activeCategory].map((event) => (
            <motion.div
              key={event.name}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-xl backdrop-blur-sm bg-black/20 p-6 hover:bg-black/30 transition-all duration-300 hover:scale-105"
            >
              <div className="absolute top-4 right-4 text-4xl opacity-20 group-hover:opacity-100 transition-opacity duration-300">
                {event.icon}
              </div>
              <h3 className="text-white text-2xl mb-2 font-medium">{event.name}</h3>
              <p className="text-gray-400 text-sm mb-3">{event.title}</p>
              <ul className="space-y-2">
                {event.description.map((point, index) => (
                  <li key={index} className="text-gray-300 text-sm flex items-start">
                    <span className="text-gray-500 mr-2">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
