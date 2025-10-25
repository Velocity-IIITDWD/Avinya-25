import React, { useState } from 'react';
import { techEventsData } from '../data/tech_events.js';
import { culturalEventsData } from '../data/cultural_events.js';

function EventCard({ event }) {
  const handleRegister = () => {
    window.open(event.register, '_blank');
  };

  return (
    <div className="bg-gray-900 rounded-lg p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 flex flex-col h-full">
      <div className="mb-4">
        <h3 className="text-2xl font-bold text-white mb-2">{event.name}</h3>
        <p className="text-blue-400 text-lg">{event.title}</p>
      </div>
      
      <div className="mb-4">
        <p className="text-gray-300 text-sm mb-2">Duration: {event.duration}</p>
      </div>
      
      <div className="mb-6 flex-grow">
        <h4 className="text-white font-semibold mb-2">Description:</h4>
        <ul className="text-gray-300 text-sm space-y-1">
          {event.description.map((desc, index) => (
            <li key={index} className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              {desc}
            </li>
          ))}
        </ul>
      </div>
      
      <button
        onClick={handleRegister}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 mt-auto"
      >
        Register Now
      </button>
    </div>
  );
}

function EventsPage() {
  const [activeTab, setActiveTab] = useState('tech');

  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Events
          </h1>
          <p className="text-gray-400 text-xl">Discover amazing tech and cultural events</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800 rounded-lg p-1 flex">
            <button
              onClick={() => setActiveTab('tech')}
              className={`px-8 py-3 rounded-md font-semibold transition-all duration-200 ${
                activeTab === 'tech'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Tech Events
            </button>
            <button
              onClick={() => setActiveTab('cultural')}
              className={`px-8 py-3 rounded-md font-semibold transition-all duration-200 ${
                activeTab === 'cultural'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Cultural Events
            </button>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeTab === 'tech' 
            ? techEventsData.map((event, index) => (
                <EventCard key={index} event={event} />
              ))
            : culturalEventsData.map((event, index) => (
                <EventCard key={index} event={event} />
              ))
          }
        </div>
      </div>
    </div>
  );
}

export default EventsPage;
