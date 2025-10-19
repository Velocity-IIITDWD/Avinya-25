import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', href: 'home', section: 'hero' },
    { name: 'About', href: 'about', section: 'about' },
    { name: 'Events', href: 'events', section: 'events' },
    { name: 'Sponsors', href: 'sponsors', section: 'sponsors' },
    { name: 'Contact', href: 'contact', section: 'contacts' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 100;

      navItems.forEach((item) => {
        const section = document.getElementById(item.section);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(item.href);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    setIsMobileMenuOpen(false);
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-container">
          <div className="navbar-content">
            {/* Logo */}
            <div className="navbar-logo">
              <a href="#">Avinya '25</a>
            </div>

            {/* Desktop Navigation */}
            <div className="navbar-desktop">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.section)}
                  className={`nav-item ${activeSection === item.href ? 'active' : ''}`}
                >
                  {item.name}
                  <span className="nav-underline"></span>
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="navbar-mobile-btn">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="menu-toggle"
              >
                {isMobileMenuOpen ? (
                  <X className="menu-icon" />
                ) : (
                  <Menu className="menu-icon" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="navbar-mobile-menu">
            <div className="mobile-menu-items">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.section)}
                  className={`mobile-nav-item ${activeSection === item.href ? 'active' : ''}`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
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