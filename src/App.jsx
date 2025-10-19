import { useRef } from 'react'
import './App.css'

import Menu from './components/menu/Menu.jsx'
import TitleBand from './sections/TitleBand.jsx'
import HeroSection from './sections/HeroSection.jsx'
import EventsSection from './sections/Events.jsx'
import AboutSection from './sections/AboutSection.jsx'
import SponsorsSection from './sections/SponsorsSection.jsx'
import ContactsSection from './sections/ContactsSection.jsx'
import Footer from './sections/Footer.jsx'

function App() {
  const container = useRef(null)

  return (
    <div className='min-h-screen relative overflow-y-auto' ref={container}>
      <Menu />
      <TitleBand />
      <HeroSection />
      <EventsSection />
      <AboutSection containerRef={container} />
      <SponsorsSection />
      <ContactsSection />
      <Footer />
    </div>
  )
}

export default App


