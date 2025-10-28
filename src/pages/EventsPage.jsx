import React, { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { techEventsData } from '../data/tech_events.js';
import { culturalEventsData } from '../data/cultural_events.js';

// Tech-themed animated background component
function TechBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Animated circuit patterns */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M10,10 L90,10 L90,90 L10,90 Z" fill="none" stroke="#e5e7eb" strokeWidth="0.5" opacity="0.3"/>
              <circle cx="20" cy="20" r="2" fill="#e5e7eb" opacity="0.4"/>
              <circle cx="80" cy="80" r="2" fill="#e5e7eb" opacity="0.4"/>
              <path d="M20,20 L80,80" stroke="#e5e7eb" strokeWidth="0.3" opacity="0.2"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)"/>
        </svg>
      </div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-4 h-4 border border-gray-400 rotate-45 animate-pulse opacity-30"></div>
      <div className="absolute top-40 right-20 w-6 h-6 border border-gray-300 rounded-full animate-bounce opacity-20"></div>
      <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-gradient-to-r from-gray-400 to-gray-500 rotate-12 animate-ping opacity-25"></div>
      <div className="absolute bottom-20 right-1/3 w-5 h-5 border-2 border-cyan-300 transform rotate-45 animate-spin opacity-20"></div>
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/3 w-32 h-32 bg-gradient-to-r from-gray-500/10 to-gray-400/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-gray-400/10 to-gray-500/10 rounded-full blur-lg animate-pulse delay-1000"></div>
    </div>
  );
}

// Enhanced event card with tech aesthetics
function EventCard({ event, index, isTech, id }) {
  const [isHovered, setIsHovered] = useState(false);
  
  const handleRegister = () => {
    window.open(event.register, '_blank');
  };

  const getEventCategory = (eventName) => {
    const categories = {
      'CodeQuest': 'CODING',
      'Startup Conclave': 'STARTUP',
      'Integrating Large Language Models on FPGAs': 'AI/ML',
      'Mega-Rush': 'GAMING',
      'Cybersecurity Workshop': 'SECURITY',
      'RTL2GDSII Competition': 'HARDWARE',
      'Sangeet': 'MUSIC',
      'Nritya': 'DANCE',
      'Natya': 'THEATER',
      'Art Vista': 'ART',
      'Poetry Slam': 'LITERATURE',
      'Band Wars': 'MUSIC'
    };
    return categories[eventName] || 'EVENT';
  };

  return (
    <div 
      id={id}
      className={`group relative overflow-hidden rounded-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 h-[500px] ${
        isHovered ? 'shadow-2xl' : 'shadow-lg'
      }`}
      style={{
        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.8) 100%)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(229, 231, 235, 0.2)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated border gradient */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-gray-500/20 via-gray-400/20 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Tech pattern overlay */}
      <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
        <svg className="w-full h-full" viewBox="0 0 200 200">
          <defs>
            <pattern id={`tech-pattern-${index}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="20" height="20" fill="none" stroke="#e5e7eb" strokeWidth="0.5"/>
              <circle cx="10" cy="10" r="1" fill="#e5e7eb"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#tech-pattern-${index})`}/>
        </svg>
      </div>

      <div className="relative z-10 p-6 flex flex-col h-full">
        {/* Fixed Header */}
        <div className="mb-4 flex-shrink-0">
          <div className="flex items-center gap-3 mb-2">
            <div className="px-3 py-1 bg-gradient-to-r from-gray-700 to-gray-600 rounded-full text-xs font-bold text-white animate-pulse">
              {getEventCategory(event.name)}
            </div>
            <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 group-hover:bg-clip-text transition-all duration-300">
              {event.name}
            </h3>
          </div>
          <p className="text-gray-300 text-lg font-medium">{event.title}</p>
        </div>
        
        {/* Fixed Duration */}
        <div className="mb-4 flex-shrink-0">
          <div className="flex items-center justify-between">
            <span className="text-gray-300 text-sm font-medium">Duration</span>
            <span className="text-gray-300 text-sm font-semibold">{event.duration}</span>
          </div>
        </div>
        
        {/* Scrollable Description */}
        <div className="mb-6 flex-grow overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-700 pr-2">
          <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-ping"></div>
            Description
          </h4>
          <ul className="text-gray-300 text-sm space-y-2">
            {event.description.map((desc, index) => (
              <li key={index} className="flex items-start group/item">
                <span className="text-gray-300 mr-3 mt-1 text-xs group-hover/item:text-gray-400 transition-colors duration-200">▶</span>
                <span className="leading-relaxed">{desc}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Fixed Register Button - Hidden for Startup Conclave */}
        {event.name !== "Startup Conclave" && (
          <button
            onClick={handleRegister}
            className="group/btn relative overflow-hidden bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 flex-shrink-0"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10 flex items-center justify-center">
              <span>Register Now</span>
            </span>
          </button>
        )}
      </div>
      
      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-gray-500/10 to-gray-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </div>
  );
}

function EventsPage() {
  const [activeTab, setActiveTab] = useState('tech');
  const [isLoaded, setIsLoaded] = useState(false);
  const location = useLocation();

  const slugifyString = (str) => (str || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

  const { techWithIds, culturalWithIds } = useMemo(() => {
    return {
      techWithIds: techEventsData
        .slice()
        .sort((a, b) => a.sNo - b.sNo)
        .map((e) => {
          const base = `${e.name}-${e.sNo || e.title || ''}`;
          const slug = slugifyString(base);
          return { ...e, _slug: slug, _id: `event-${slug}` };
        }),
      culturalWithIds: culturalEventsData.map((e) => {
        const base = `${e.name}-${e.title || ''}`;
        const slug = slugifyString(base);
        return { ...e, _slug: slug, _id: `event-${slug}` };
      })
    };
  }, []);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Handle deep links like /events#event-codequest or /events#codequest
  useEffect(() => {
    const hash = (location.hash || '').replace('#', '');
    if (!hash) return;

    const normalizedSlug = hash.replace(/^event-/, '');
    const techMatch = techWithIds.find((e) => e._slug === normalizedSlug);
    const culturalMatch = culturalWithIds.find((e) => e._slug === normalizedSlug);

    const getOffset = () => {
      const navbar = document.querySelector('.navbar');
      const headerHeight = navbar ? navbar.offsetHeight : 0;
      // add small gap below the navbar
      return -(headerHeight + 8);
    };

    const scrollToTarget = () => {
      const selector = `#event-${normalizedSlug}`;
      // First scroll quickly to trigger navbar state, then correct position
      window.dispatchEvent(new CustomEvent('app-scroll-to', {
        detail: { selector, offset: getOffset(), duration: 0 }
      }));
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent('app-scroll-to', {
          detail: { selector, offset: getOffset(), duration: 500 }
        }));
      }, 120);
    };

    // Switch tab if needed
    if (techMatch && activeTab !== 'tech') {
      setActiveTab('tech');
      // Defer scroll until tab content renders
      setTimeout(() => {
        scrollToTarget();
      }, 50);
      return;
    }

    if (culturalMatch && activeTab !== 'cultural') {
      setActiveTab('cultural');
      setTimeout(() => {
        scrollToTarget();
      }, 50);
      return;
    }

    // Same tab: just scroll
    scrollToTarget();
  }, [location.hash, activeTab, techWithIds, culturalWithIds]);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Tech Background */}
      <TechBackground />
      
      <div className="relative z-10 pt-32 pb-10">
        <div className="container mx-auto px-6">
          {/* Enhanced Header with animations */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative inline-block">
              <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent animate-pulse">
                Events
              </h1>
            </div>
            <p className="text-gray-400 text-xl md:text-2xl font-light">
              Discover amazing <span className="text-gray-300 font-semibold">tech</span> and <span className="text-white font-semibold">cultural</span> events
            </p>
            
            {/* Tech stats */}
            <div className="flex justify-center gap-8 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-300">{techEventsData.length}</div>
                <div className="text-sm text-gray-400">Tech Events</div>
              </div>
              <div className="w-px h-12 bg-gray-600"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{culturalEventsData.length}</div>
                <div className="text-sm text-gray-400">Cultural Events</div>
              </div>
            </div>
          </div>

          {/* Enhanced Tabs with tech styling */}
          <div className={`flex justify-center mb-16 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-2 border border-gray-700/50">
              {/* Background glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-gray-500/10 to-gray-400/10 opacity-0 transition-opacity duration-300"></div>
              
              <div className="relative flex">
                <button
                  onClick={() => setActiveTab('tech')}
                  className={`relative px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 ${
                    activeTab === 'tech'
                      ? 'text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {activeTab === 'tech' && (
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-600 rounded-xl animate-pulse"></div>
                  )}
                  <div className="relative z-10 flex items-center gap-3">
                    <span>Tech Events</span>
                    {activeTab === 'tech' && (
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-ping"></div>
                    )}
                  </div>
                </button>
                
                <button
                  onClick={() => setActiveTab('cultural')}
                  className={`relative px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 ${
                    activeTab === 'cultural'
                      ? 'text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {activeTab === 'cultural' && (
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-700 rounded-xl animate-pulse"></div>
                  )}
                  <div className="relative z-10 flex items-center gap-3">
                    <span>Cultural Events</span>
                    {activeTab === 'cultural' && (
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-ping"></div>
                    )}
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Enhanced Events Grid with staggered animations */}
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {activeTab === 'tech' 
              ? techWithIds.map((event, index) => (
                  <div 
                    key={event._id} 
                    className="animate-fade-in-up"
                    style={{ 
                      animationDelay: `${index * 100}ms`,
                      animationFillMode: 'both'
                    }}
                  >
                    <EventCard event={event} index={index} isTech={true} id={event._id} />
                  </div>
                ))
              : culturalWithIds.map((event, index) => (
                  <div 
                    key={event._id} 
                    className="animate-fade-in-up"
                    style={{ 
                      animationDelay: `${index * 100}ms`,
                      animationFillMode: 'both'
                    }}
                  >
                    <EventCard event={event} index={index} isTech={false} id={event._id} />
                  </div>
                ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventsPage;
