import { useRef } from 'react'
import './App.css'
import { useLocomotiveScroll } from './hooks/useLocomotiveScroll.js'
import Navbar from './components/Navbar/Navbar.jsx'
import TitleBand from './sections/TitleBand.jsx'
import HeroSection from './sections/HeroSection.jsx'
import EventsSection from './sections/Events.jsx'
import AboutSection from './sections/AboutSection.jsx'
import SponsorsSection from './sections/SponsorsSection.jsx'
import ContactsSection from './sections/ContactsSection.jsx'
import Footer from './sections/Footer.jsx'

function App() {
  const { scrollRef, locomotiveRef } = useLocomotiveScroll();
  return (
    <div ref={scrollRef} data-scroll-container >
      <div className='min-h-screen relative overflow-y-auto' data-scroll-section>
        <Navbar />
        <TitleBand />
        <div id="hero"><HeroSection /></div>
        <div id="about"><AboutSection scrollContainerRef={scrollRef} /></div>
        <div id="events"><EventsSection /></div>
        <div id="sponsors"><SponsorsSection /></div>
        <div id="contacts"><ContactsSection /></div>
        <Footer />
      </div>
    </div >
  )
}

export default App
