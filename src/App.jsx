import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import { useEffect } from 'react';
import { useLocomotiveScroll } from './hooks/useLocomotiveScroll.js';
import Navbar from './components/Navbar/Navbar.jsx';
import HomePage from './pages/HomePage.jsx';
import EventsPage from './pages/EventsPage.jsx';
import ArtistsPage from './pages/ArtistsPage.jsx';
import TeamPage from './pages/TeamPage.jsx';
import Timeline from './pages/Timeline.jsx';

// Clean ScrollController (new version)
function ScrollController({ locomotiveRef }) {
  const location = useLocation();

  useEffect(() => {
    const loco = locomotiveRef.current;
    if (!loco) return;

    // 🧭 Force reset scroll position to browser's current scroll
    const browserScrollY = window.scrollY || window.pageYOffset || 0;

    // 🧹 Clean sync before doing anything
    loco.stop();
    loco.scrollTo(browserScrollY, { duration: 0, disableLerp: true });
    loco.update();

    // 🕐 Give Locomotive a moment to rebuild scroll context
    setTimeout(() => {
      loco.start();
      loco.update();
    }, 200);

    // 🧩 On route change, reset to top cleanly
    loco.scrollTo(0, { duration: 0, disableLerp: true });
    setTimeout(() => loco.update(), 400);

    // 🛠 Fix for “stuck scroll” after refresh
    const handleBeforeUnload = () => {
      window.scrollTo(0, 0); // ensure browser scroll resets before reload
    };
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [location.pathname, locomotiveRef]);

  return null;
}

function App() {
  const { scrollRef, locomotiveRef } = useLocomotiveScroll();

  return (
    <Router>
      {/* Scroll controller must be inside Router (so it can access location) */}
      <ScrollController locomotiveRef={locomotiveRef} />
      <Navbar />

      {/* Scroll container must wrap routes */}
      <div ref={scrollRef} data-scroll-container>
        <div className="min-h-screen relative" data-scroll-section>
          <Routes>
            <Route path="/" element={<HomePage container={scrollRef} />} />
            <Route path="/timeline" element={<Timeline locomotiveRef={locomotiveRef} />} />
            <Route path="/events" element={<EventsPage locomotiveRef={locomotiveRef} />} />
            <Route path="/artists" element={<ArtistsPage />} />
            <Route path="/team" element={<TeamPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
