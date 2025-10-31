import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import { useEffect } from 'react'
import { useLocomotiveScroll } from './hooks/useLocomotiveScroll.js'
import Navbar from './components/Navbar/Navbar.jsx'
import HomePage from './pages/HomePage.jsx'
import EventsPage from './pages/EventsPage.jsx'
import ArtistsPage from './pages/ArtistsPage.jsx'
import TeamPage from './pages/TeamPage.jsx'
import Timeline from './pages/Timeline.jsx'


function App() {
  const { scrollRef, locomotiveRef } = useLocomotiveScroll();

  return (
    <>
      <Router>
        <ScrollController locomotiveRef={locomotiveRef} />
        <Navbar />
        <div ref={scrollRef} data-scroll-container>
          <div className='min-h-screen relative' data-scroll-section>
            <Routes>
              <Route path="/" element={<HomePage container={scrollRef} />} />
              <Route path="/timeline" element={<Timeline />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/artists" element={<ArtistsPage />} />
              <Route path="/team" element={<TeamPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;

function ScrollController({ locomotiveRef }) {
  const location = useLocation();

  useEffect(() => {
    const handleScrollTop = () => {
      if (locomotiveRef.current) {
        locomotiveRef.current.scrollTo(0, { duration: 0, disableLerp: true });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    const handleScrollTo = (e) => {
      const { selector, offset = 0, duration = 600 } = e.detail || {};
      const target = selector ? document.querySelector(selector) : null;
      if (!target) return;
      if (locomotiveRef.current) {
        locomotiveRef.current.scrollTo(target, { offset, duration });
      } else {
        const top = target.getBoundingClientRect().top + window.pageYOffset + offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    };

    // On route change, scroll to top
    handleScrollTop();

    // Listen for explicit scroll-to-top requests
    window.addEventListener('app-scroll-top', handleScrollTop);
    window.addEventListener('app-scroll-to', handleScrollTo);
    return () => {
      window.removeEventListener('app-scroll-top', handleScrollTop);
      window.removeEventListener('app-scroll-to', handleScrollTo);
    };
  }, [location.pathname, locomotiveRef]);

  return null;
}
