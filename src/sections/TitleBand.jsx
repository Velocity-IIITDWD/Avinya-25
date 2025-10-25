import React from 'react'
import GradientText from '../components/GradientText/Gradient.jsx'

export default function TitleBand() {
  return (
    <h1 className="text-[25svw] sm:text-[25vw] z-[-1] text-center text-white font-light absolute top-[80px] bottom-[90%] sm:top-0 left-1/2 transform -translate-x-1/2 ">
      <GradientText
        colors={["#959191ff", "#f7f9ffff", "#8b8b8bff", "#ffffffff", "#4c4646ff"]}
        animationSpeed={3}
        showBorder={false}
        className='font-mon'
      > AVINYA
      </GradientText>
    </h1>
  )
}
