import { useRef } from 'react'
import '../App.css'
import { useLenis } from '../hooks/useLenis.js'
import TitleBand from '../sections/TitleBand.jsx'
import HeroSection from '../sections/HeroSection.jsx'
import EventsSection from '../sections/EventsSection.jsx'
import AboutSection from '../sections/AboutSection.jsx'
import SponsorsSection from '../sections/SponsorsSection.jsx'
import ContactsSection from '../sections/ContactsSection.jsx'
import Footer from '../sections/Footer.jsx'

function HomePage() {
  const container = useRef(null)
  useLenis();

  return (
    <div className='min-h-screen relative overflow-y-auto'>
      <TitleBand />
      <div id="hero"><HeroSection /></div>
      <div id="about"><AboutSection containerRef={container} /></div>
      <div id="events"><EventsSection /></div>
      <div id="sponsors"><SponsorsSection /></div>
      <div id="contacts"><ContactsSection /></div>
      <Footer />
    </div>
  )
}

export default HomePage;
