import { useState, useRef } from 'react'
import Hero from './components/Hero/Hero.jsx'
import GlitchText from './components/GlitchText/Text.jsx'
import GradientText from './components/GradientText/Gradient.jsx'
import TrueFocus from './components/TrueFocus/Focus.jsx'
import ScrollReveal from './components/ScrollText/Scroll.jsx'




import './App.css'

function App() {
  const container = useRef(null)

  return (
    <div className='h-screen mt-9 sm:mt-6 relative'>
      <h1 className="text-[25vw] sm:text-[25vw] z-[-1] text-center text-white font-light absolute top-[0] sm:top-0 left-1/2 transform -translate-x-1/2">
        <GradientText
          colors={["#959191ff", "#f7f9ffff", "#8b8b8bff", "#ffffffff", "#4c4646ff"]}
          animationSpeed={3}
          showBorder={false}
        > AVINYA
        </GradientText>
      </h1>


      <div className="w-[80vw] h-[60vh] sm:h-screen mx-auto">
        <Hero className="w-full h-full" />
      </div>

      {/* <div className="absolute inset-0 backdrop-blur-lg bg-black/30"></div> */}
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
      <div className='w-[80vw] h-[60vh] sm:h-[70vh] mx-auto border border-white mt-50 flex items-center justify-center'>
        <h1 className='text-[4vw] text-center text-gray-500'>
          Sangeet image
        </h1>
      </div>
      <div className='mt-40 h-[90vh] sm:mt-30 m-auto'>
        <h1 className='text-[7vw] text-white text-center'>
          ABOUT FEST
        </h1>
        <ScrollReveal
          baseOpacity={0.5}
          enableBlur={true}
          baseRotation={7}
          blurStrength={10}
          textClassName='text-white px-10'
          scrollContainerRef={container}
        >
          While Avinya celebrates the cultural soul of
          the student community — dance, music,
          drama, and art — it also thrives as a hub of
          student innovation through coding,
          robotics, and AI showcases.
        </ScrollReveal>
      </div>
      <div className='mt-40 h-[90vh] sm:mt-30 m-auto'>

      </div>
    </div>
  )
}

export default App


