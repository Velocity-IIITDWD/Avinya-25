import React from 'react'
import ScrollReveal from '../components/ScrollText/Scroll.jsx'
import ShinyText from '../components/AboutFest/About.jsx'

export default function AboutSection({ scrollContainerRef }) { // ✅ Changed from containerRef
  return (
    <div className='mt-40 h-auto sm:mt-40 m-auto px-4'>
      <h1 className='text-[7vw] text-white text-center mb-16'>
        <ShinyText text="ABOUT FEST" speed={3} />
      </h1>
      <div className="mx-2">
        <ScrollReveal
          baseOpacity={0.1}
          enableBlur={true}
          baseRotation={7}
          blurStrength={8}
          textClassName='text-white text-center leading-relaxed'
          containerClassName='overflow-hidden my-2'
          scrollContainerRef={scrollContainerRef} // ✅ Now properly passed
          rotationEnd="center center"
          wordAnimationEnd="center center"
          font_size='text-[8vw] sm:text-[6vw]'
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
          scrollContainerRef={scrollContainerRef}
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
          font_size='text-[3vw] sm:text-[2vw]'
          containerClassName='overflow-hidden mt-5'
          scrollContainerRef={scrollContainerRef}
          rotationEnd="center center"
          wordAnimationEnd="center center"
        >
          Avinya is the flagship Techno-Cultural Fest of IIIT Dharwad, where innovation meets imagination. It's a vibrant celebration of technology, creativity, and talent — uniting brilliant minds, passionate artists, and enthusiastic performers under one roof.
        </ScrollReveal>

        <ScrollReveal
          baseOpacity={0.1}
          enableBlur={true}
          baseRotation={7}
          blurStrength={8}
          textClassName='text-white text-center leading-relaxed text-xs'
          font_size='text-[3vw] sm:text-[2vw]'
          containerClassName='overflow-hidden mt-5'
          scrollContainerRef={scrollContainerRef}
          rotationEnd="center center"
          wordAnimationEnd="center center"
        >
          From electrifying coding battles, insightful startup conclaves, and hands-on technical workshops to high-octane gaming events, Avinya offers a platform for every innovator, creator, and dreamer. Beyond technology, it's a fusion of art, culture, and energy — a festival that celebrates ideas, expression, and collaboration.
        </ScrollReveal>

        <ScrollReveal
          baseOpacity={0.1}
          enableBlur={true}
          baseRotation={7}
          blurStrength={8}
          textClassName='text-white text-center leading-relaxed text-xs'
          font_size='text-[3vw] sm:text-[2vw]'
          containerClassName='overflow-hidden mt-5'
          scrollContainerRef={scrollContainerRef}
          rotationEnd="center center"
          wordAnimationEnd="center center"
        >
          Join us for Avinya 2025 — where the sparks of innovation light up the stage of creativity!
        </ScrollReveal>
      </div>
    </div>
  )
}
