import React, { useState, useEffect } from 'react';
import { Music, Instagram, Play, Disc } from 'lucide-react';

function ArtistsPage() {
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    // Add keyframe animation to document
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(40px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const artists = [
    {
      id: 1,
      name: "Anuj Rehan",
      role: "Music Producer & Artist",
      instagram: "https://www.instagram.com/anujrehan_music",
      handle: "@anujrehan_music",
      image: "../../Anuj_Rehan.jpg",
      color: "from-gray-700 to-gray-600",
      description: "Anuj Rehan is a talented music producer and artist known for creating captivating melodies and beats that resonate with audiences. With a unique blend of contemporary sounds and traditional influences, Anuj brings fresh energy to every track. His passion for music production shines through in his innovative compositions and collaborative spirit.",
      highlights: ["Music Production", "Original Compositions", "Live Performances"]
    },
    {
      id: 2,
      name: "DJ Rubz",
      role: "Professional DJ & Music Curator",
      instagram: "https://www.instagram.com/the_dj_rubz",
      handle: "@the_dj_rubz",
      image: "../../Dj_Rubz.jpg",
      color: "from-gray-600 to-gray-700",
      description: "DJ Rubz is a dynamic and skilled DJ who knows how to get any crowd moving. Specializing in mixing diverse genres and creating unforgettable experiences, DJ Rubz brings high energy and technical expertise to every performance. With an impressive ability to read the room and curate perfect playlists, DJ Rubz has become a favorite at events and parties.",
      highlights: ["Expert Mixing", "Crowd Control", "Multi-Genre Mastery"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gray-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gray-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gray-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Header */}
      <div className="relative z-10 pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block mb-8 animate-bounce">
            <Music className="w-16 h-16 text-gray-300" />
          </div>
          <h1 className="text-6xl md:text-7xl font-black mb-4 bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent">
            Meet Our Artists
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            The incredible talent bringing music to life at our hackathon
          </p>
        </div>
      </div>

      {/* Artists Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pb-20 space-y-32">
        {artists.map((artist, index) => (
          <div
            key={artist.id}
            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
            style={{
              animation: `fadeInUp 0.8s ease-out ${index * 0.2}s both`
            }}
            onMouseEnter={() => setHoveredCard(artist.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Image Side */}
            <div className="w-full lg:w-1/2">
              <div className="relative group">
                <div className={`absolute inset-0 bg-gradient-to-br ${artist.color} rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500`}></div>
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <div className={`absolute inset-0 bg-gradient-to-br ${artist.color} opacity-0 z-10`}></div>
                  <img 
                    src={artist.image} 
                    alt={artist.name}
                    className="w-full h-[500px] object-cover object-top"
                  />

                  {/* Instagram Badge */}
                  <a 
                    href={artist.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-6 right-6 z-20 bg-gradient-to-r from-gray-700 to-gray-600 rounded-full p-3 hover:scale-110 transition-transform duration-300 shadow-lg"
                  >
                    <Instagram className="w-6 h-6 text-white" />
                  </a>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                  <Disc className="w-4 h-4 text-gray-300 animate-spin" style={{ animationDuration: '3s' }} />
                  <span className="text-sm text-gray-300">{artist.role}</span>
                </div>
                <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  {artist.name}
                </h2>
                <a 
                  href={artist.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-gray-300 hover:text-gray-200 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                  <span className="text-lg">{artist.handle}</span>
                </a>
              </div>

              <p className="text-lg text-gray-300 leading-relaxed">
                {artist.description}
              </p>

              <div className="space-y-3">
                <h3 className="text-xl font-bold text-white">Highlights</h3>
                <div className="flex flex-wrap gap-3">
                  {artist.highlights.map((highlight, idx) => (
                    <div 
                      key={idx}
                      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-5 py-2 text-sm text-gray-300 hover:bg-white/10 transition-colors duration-300"
                    >
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={artist.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center space-x-2 bg-gradient-to-r ${artist.color} px-8 py-4 rounded-full font-bold text-white shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300`}
              >
                <span>Instagram</span>
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Guidelines Section */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 pb-20">
        <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Event Guidelines
            </h2>
            <p className="text-gray-400">Please read carefully before registering</p>
          </div>

          <div className="space-y-4">
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-gray-500/50 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <span className="bg-gradient-to-br from-gray-700 to-gray-600 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 text-sm font-bold">1</span>
                <p className="text-gray-300 leading-relaxed pt-2">
                  All participants must carry a valid college ID card and techFEST'25 registration pass at all times during the event.
                </p>
              </div>
            </div>

            <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-gray-400/50 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <span className="bg-gradient-to-br from-gray-600 to-gray-700 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 text-sm font-bold">2</span>
                <p className="text-gray-300 leading-relaxed pt-2">
                  Participants are expected to maintain discipline and follow the instructions of organizers, volunteers, and security personnel.
                </p>
              </div>
            </div>

            <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-gray-400/50 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <span className="bg-gradient-to-br from-gray-500 to-gray-600 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 text-sm font-bold">3</span>
                <p className="text-gray-300 leading-relaxed pt-2">
                  Any form of misconduct, harassment, or use of prohibited substances will lead to immediate disqualification and removal from the premises.
                </p>
              </div>
            </div>

            <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-gray-400/50 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <span className="bg-gradient-to-br from-gray-400 to-gray-500 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 text-sm font-bold">4</span>
                <p className="text-gray-300 leading-relaxed pt-2">
                  The organizing committee reserves the right to make changes to schedules, rules, or guidelines if required. Updates will be communicated promptly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 pb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Event Pricing
          </h2>
          <p className="text-gray-400">Secure your spot at Avinya '25!</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {/* Standard Pass Card */}
          <div className="bg-gradient-to-br from-gray-600/20 to-gray-700/20 backdrop-blur-lg rounded-3xl p-10 border-2 border-gray-600 relative hover:transform hover:scale-105 transition-all duration-300 shadow-2xl">
           
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">Standard Pass</h3>
              <div className="mb-2">
                <span className="text-6xl font-black bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">₹180</span>
              </div>
              <p className="text-gray-400">per person</p>
            </div>
            <ul className="space-y-4 text-gray-300 mb-8">
              <li className="flex items-start">
                <span className="text-gray-300 mr-3 text-xl">✓</span>
              <span>Concert - Anuj Rehan</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-300 mr-3 text-xl">✓</span>
                <span>DJ Night - DJ Rubz</span>
              </li>
            
            </ul>
          </div>

          {/* Premium Pass Card */}
          <div className="bg-gradient-to-br from-gray-500/30 to-gray-600/30 backdrop-blur-lg rounded-3xl p-10 border-2 border-gray-500 relative hover:transform hover:scale-105 transition-all duration-300 shadow-2xl">
           
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">Premium Pass</h3>
              <div className="mb-2">
                <span className="text-6xl font-black bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">₹250</span>
              </div>
              <p className="text-gray-400">per person</p>
            </div>
            <ul className="space-y-4 text-gray-300 mb-8">
              <li className="flex items-start">
                <span className="text-gray-300 mr-3 text-xl">✓</span>
                <span>Concert - Anuj Rehan</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-300 mr-3 text-xl">✓</span>
                <span>DJ Night - DJ Rubz</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-300 mr-3 text-xl">✓</span>
                <span>Full Access to all tech and cultural events</span>
              </li>
             
            </ul>
          </div>
        </div>
      </div>

      {/* Registration CTA */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 pb-32">
        <div className="bg-gradient-to-r from-gray-700 to-gray-600 rounded-3xl p-12 text-center shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Ready to Join?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Don't miss out on this incredible opportunity to experience amazing music, connect with talented artists, and be part of Avinya '25!
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdxHXIFdksz5NXyut_ckPLFFO_Vfh42sHE3X_rGh3R8wBYo6A/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-white text-gray-700 px-10 py-5 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <span>Register Now</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ArtistsPage;