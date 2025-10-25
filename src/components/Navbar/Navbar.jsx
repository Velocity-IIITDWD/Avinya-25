import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Events', path: '/events' },
    { name: 'Artists', path: '/artists' },
    { name: 'Team', path: '/team' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-content">
          {/* Logo */}
          <div className="navbar-logo">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
              Avinya '25
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="navbar-desktop">
            <Link to="/" className="nav-item">
              Home
              <span className="nav-underline"></span>
            </Link>
            <Link to="/events" className="nav-item">
              Events
              <span className="nav-underline"></span>
            </Link>
            <Link to="/artists" className="nav-item">
              Artists
              <span className="nav-underline"></span>
            </Link>
            <Link to="/team" className="nav-item">
              Team
              <span className="nav-underline"></span>
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <div
            className="navbar-mobile-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </div>
        </div> {/* ✅ Close navbar-content */}

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="navbar-mobile-menu">
            <div className="mobile-menu-items">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mobile-nav-item"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div> {/* ✅ Close navbar-container */}

      {/* Backdrop for mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="navbar-backdrop"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </nav>
  );
}

export default Navbar;
