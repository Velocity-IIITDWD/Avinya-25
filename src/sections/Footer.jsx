import React, { useEffect, useRef } from 'react';
import { MapPin, Calendar, Zap, Music, Code, Users } from 'lucide-react';

export default function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });

    const elements = footerRef.current?.querySelectorAll('[data-animate]');
    elements?.forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const socialLinks = [
    { Icon: 'instagram', label: 'Instagram' },
    { Icon: 'twitter', label: 'Twitter' },
    { Icon: 'facebook', label: 'Facebook' },
    { Icon: 'linkedin', label: 'LinkedIn' },
  ];

  const pages=[
   
     {page:"Home",link:"#"},
     {page:"Events",link:"#events"},
     {page:"About",link:"#about"},
     {page:"Sponsers",link:"#sponsors"},
     {page:"Contact",link:"#contact"},


  ]
   
  

  const eventCategories = [
    { Icon: Code, label: 'Tech Events', color: 'text-blue-400' },
    { Icon: Music, label: 'Cultural Events', color: 'text-pink-400' },
  ];

  const importantDates = [
    { date: 'Nov 7, 2025', event: '', icon: '🗓️' },
    { date: 'Nov 8, 2025', event: '', icon: '🗓️' },
   
  ];

  return (
    <footer ref={footerRef} className="bg-black border-t border-gray-800">
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-24">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand Section */}
          <div data-animate className="transition-all duration-1000 ease-out text-center md:text-left">
            <h1 className="text-4xl font-bold font-mont text-white mb-6 italic tracking-wider">
              Avinya '25
            </h1>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              The premier tech and cultural fest bringing together innovation and tradition.
            </p>
            <div className="flex gap-5 justify-center md:justify-start">
              {socialLinks.map(({ label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <span className="text-xl">◉</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div data-animate className="transition-all duration-1000 ease-out text-center md:text-left">
            <h3 className="text-white font-semibold mb-8 text-lg">Quick Links</h3>
            <ul className="space-y-4 flex flex-col items-center md:items-start">
              {pages.map((link) => (
                <li key={link.page}>
                  <a
                    href={link.link}
                    className="text-gray-500 hover:text-white transition-all duration-300 text-sm group"
                  >
                    <span className="group-hover:translate-x-1 inline-block transition-transform">
                      {link.page}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Event Categories */}
          <div data-animate className="transition-all duration-1000 ease-out text-center md:text-left">
            <h3 className="text-white font-semibold mb-8 text-lg">Event Categories</h3>
            <ul className="space-y-4 flex flex-col items-center md:items-start">
              {eventCategories.map(({ Icon, label, color }) => (
                <li key={label} aria-label={Icon}>
                  <p
                    className="text-gray-500 cursor-pointer hover:text-white transition-all duration-300 text-sm group flex items-center gap-2"
                  >
                    <Icon size={16} className={`${color} group-hover:scale-110 transition-transform`} />
                    <span className="group-hover:translate-x-1 inline-block transition-transform">
                      {label}
                    </span>
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Dates */}
          <div data-animate className="transition-all duration-1000 ease-out text-center md:text-left">
            <h3 className="text-white font-semibold mb-8 text-lg">Important Dates</h3>
            <ul className="space-y-3 flex flex-col items-center md:items-start">
              {importantDates.map(({ date, event, icon }, index) => (
                <li key={date + index} className="group w-full max-w-[200px] md:max-w-none">
                  <div className="text-gray-500 cursor-pointer hover:text-white transition-all duration-300 text-xs flex items-start gap-2 group-hover:gap-3 justify-center md:justify-start">
                    <span className="text-lg flex-shrink-0">{icon}</span>
                    <div className="flex flex-col">
                      <span className="font-semibold my-1 text-gray-400 group-hover:text-white">{date}</span>
                      <span className="text-gray-600 group-hover:text-gray-400 text-xs">{event}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Location */}
          <div data-animate className="transition-all duration-1000 ease-out text-center md:text-left">
            <h3 className="text-white font-semibold mb-8 text-lg flex items-center gap-2 justify-center md:justify-start">
              <MapPin size={20} />
              Location
            </h3>
            <div className="bg-gray-900 rounded-lg border border-gray-800 p-5 hover:border-gray-700 transition-all duration-300 group">
              <div className="space-y-4">
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Venue</p>
                  <p className="text-white text-sm font-semibold">
                    College Campus
                  </p>
                </div>
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Address</p>
                  <p className="text-gray-300 text-sm">
                    IIIT Dharwad Campus, Ittigatti Road, Near Sattur Colony, Dharwad 580009, Karnataka
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

     

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-gray-500 text-xs md:text-sm">
          <div data-animate className="transition-all duration-1000 ease-out">
            <p>© 2025 Avinya Tech & Cultural Fest. All rights reserved.</p>
          </div>
          <div data-animate className="transition-all duration-1000 ease-out flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span className="text-gray-700">|</span>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}