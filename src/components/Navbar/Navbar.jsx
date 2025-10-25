import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-content">
          {/* Logo */}
          <div className="navbar-logo">
            <Link to="/">Avinya '25</Link>
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
        </div>
      </div>
    </nav>
  );
}

export default Navbar;