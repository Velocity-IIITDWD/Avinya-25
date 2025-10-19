import { useRef } from 'react'
import './App.css'
import { useLenis } from './hooks/useLenis.js'
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
  useLenis();

  return (
    <div className='min-h-screen relative overflow-y-auto'>
      <Menu />
      <TitleBand />
      <HeroSection />
      <AboutSection containerRef={container} />
      <EventsSection />
      <SponsorsSection />
      <ContactsSection />
      <Footer />
    </div>
  )
}

export default App


