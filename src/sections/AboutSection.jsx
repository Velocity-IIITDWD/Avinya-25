import React from 'react'
import ScrollReveal from '../components/ScrollText/Scroll.jsx'
import ShinyText from '../components/AboutFest/About.jsx'
import BlurText from '../components/BlurText/Blur.jsx'

export default function AboutSection({ containerRef }) {
  return (
    <div className='mt-40 h-auto sm:mt-40 m-auto px-4'>
      <h1 className='text-[7vw] text-white text-center mb-16'>
        <ShinyText text="ABOUT FEST" speed={3} />
      </h1>
      <div className="mx-auto">
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
          font_size='text-[clamp(1rem,10vw,5vw)]'
        >
          AVINYA 2025
        </ScrollReveal>
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
          font_size='text-[clamp(1rem,3vw,2.4vw)]'
        >
          The Techno-Cultural Fest of IIIT Dharwad
        </ScrollReveal>
        <ScrollReveal
          baseOpacity={0.1}
          enableBlur={true}
          baseRotation={7}
          blurStrength={8}
          textClassName='text-white text-center leading-relaxed text-xs'
          font_size='text-[2vw]'
          containerClassName='overflow-hidden mt-5'
          scrollContainerRef={containerRef}
          rotationEnd="center center"
          wordAnimationEnd="center center"
        >
          Avinya is the flagship Techno-Cultural Fest of IIIT Dharwad, where innovation meets imagination. It’s a vibrant celebration of technology, creativity, and talent — uniting brilliant minds, passionate artists, and enthusiastic performers under one roof.
        </ScrollReveal>
      </div>
    </div>
  )
}