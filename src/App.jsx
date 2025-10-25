import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { useLocomotiveScroll } from './hooks/useLocomotiveScroll.js'
import Navbar from './components/Navbar/Navbar.jsx'
import HomePage from './pages/HomePage.jsx'
import EventsPage from './pages/EventsPage.jsx'
import ArtistsPage from './pages/ArtistsPage.jsx'
import TeamPage from './pages/TeamPage.jsx'

function App() {
  const { scrollRef, locomotiveRef } = useLocomotiveScroll();
  return (
    <div ref={scrollRef} data-scroll-container >
      <Router>
        <div className='min-h-screen relative' data-scroll-section>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/artists" element={<ArtistsPage />} />
            <Route path="/team" element={<TeamPage />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
