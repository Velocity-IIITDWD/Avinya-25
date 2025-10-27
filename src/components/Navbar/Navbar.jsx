import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('mobile-menu-open');
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Events', path: '/events' },
    { name: 'Artists', path: '/artists' },
    { name: 'Team', path: '/team' },
  ];

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-container">
          <div className="navbar-content">
            {/* Logo */}
            <div className="navbar-logo">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                <img src="/white.png" alt="Logo" height={60} width={60} />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="navbar-desktop">
              <Link to="/" className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
                Home
                <span className="nav-underline"></span>
              </Link>
              <Link to="/events" className={`nav-item ${location.pathname === '/events' ? 'active' : ''}`}>
                Events
                <span className="nav-underline"></span>
              </Link>
              <Link to="/artists" className={`nav-item ${location.pathname === '/artists' ? 'active' : ''}`}>
                Artists
                <span className="nav-underline"></span>
              </Link>
              <Link to="/team" className={`nav-item ${location.pathname === '/team' ? 'active' : ''}`}>
                Team
                <span className="nav-underline"></span>
              </Link>
            </div>

            {/* Mobile menu toggle */}
            <button
              className={`navbar-mobile-toggle ${isMobileMenuOpen ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`navbar-mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-menu-items">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`mobile-nav-item ${location.pathname === item.path ? 'active' : ''}`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Backdrop for mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="navbar-backdrop"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}

export default Navbar;