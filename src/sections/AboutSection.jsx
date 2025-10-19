import React from 'react'
import ScrollReveal from '../components/ScrollText/Scroll.jsx'
import ShinyText from '../components/AboutFest/About.jsx'

export default function AboutSection({ containerRef }) {
  return (
    <div className='mt-40 min-h-[90vh] sm:mt-30 m-auto px-4'>
      <h1 className='text-[7vw] text-white text-center mb-16'>
        <ShinyText text="ABOUT FEST" speed={3} />
      </h1>
      <div className="max-w-4xl mx-auto">
        <ScrollReveal
          baseOpacity={0.1}
          enableBlur={true}
          baseRotation={7}
          blurStrength={8}
          textClassName='text-white text-center leading-relaxed'
          containerClassName='overflow-hidden'
          scrollContainerRef={containerRef}
          rotationEnd="center center"
          wordAnimationEnd="center center"
        >
          While Avinya celebrates the cultural soul of
          the student community — dance, music,
          drama, and art — it also thrives as a hub of
          student innovation through coding,
          robotics, and AI showcases.
        </ScrollReveal>
      </div>
    </div>
  )
}