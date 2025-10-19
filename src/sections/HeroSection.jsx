import React from 'react'
import Hero from '../components/Hero/Hero.jsx'
import TrueFocus from '../components/TrueFocus/Focus.jsx'
import GradientText from '../components/GradientText/Gradient.jsx'

export default function HeroSection() {
  return (
    <div className="relative">
      <div className="w-[80vw] h-[60vh] sm:h-screen mx-auto">
        <Hero className="w-full h-full" />
      </div>
      
      <h1 className='text-[5vw] sm:text-[9vw] z-[1] w-screen text-center text-white absolute top-[55%] sm:top-[90%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bebas-neue-regular'>
        <span className="inline-block w-full rounded-xl backdrop-blur-md bg-black/30 text-white text-[6vw] jost-regular">
          <TrueFocus
            sentence="TECHNO Cultural"
            manualMode={false}
            className="h-[6vw]"
            blurAmount={5}
            borderColor="red"
            animationDuration={1}
            pauseBetweenAnimations={0.5}
          />
          <GradientText
            colors={["#e2e8e5ff", "#b7b9beff", "#dbe2dfff", "#8c8d8fff", "#e0e0e0ff"]}
            animationSpeed={3}
            showBorder={false}
            className="text-[13vw] sm:text-[10vw]"
          >
            IIIT DHARWAD
          </GradientText>
        </span>
      </h1>
    </div>
  )
}
