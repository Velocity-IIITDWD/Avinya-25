import { BrowserRouter as Router, Routes, Route } from 'react-router'
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
      <div className='min-h-screen relative' data-scroll-section>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage container={scrollRef} />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/artists" element={<ArtistsPage />} />
            <Route path="/team" element={<TeamPage />} />
          </Routes>
        </Router >
      </div>
    </div >
  )
}

export default App
