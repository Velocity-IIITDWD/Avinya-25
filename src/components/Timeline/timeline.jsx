import React, { useState } from "react";
import { motion } from "framer-motion";
import TimelineEvent from "./timeline-events";
import { Calendar, Zap, Music, Sparkles } from "lucide-react";

const timelineData = [
  // Nov 6 events
  {
    id: 1,
    date: "Nov 6, 2025",
    day: 6,
    title: "Inauguration",
    subtitle: "Opening Ceremony",
    description:
      "Kick off the event with an exciting inauguration ceremony in front of the PI block.",
    icon: <Sparkles className="w-6 h-6" />,
    time: "2:00 pm - 3:00 pm",
    venue: "In front of PI block",
  },
  {
    id: 2,
    date: "Nov 6, 2025",
    day: 6,
    title: "Treasure Hunt 4.0 - Zeigeist",
    subtitle: "Campus Adventure",
    description:
      "Hunt for treasures across the campus with exciting prizes and rewards.",
    icon: <Calendar className="w-6 h-6" />,
    time: "3:00 pm - 5:30 pm",
    venue: "Campus",
  },
  // Nov 7 events
  {
    id: 4,
    date: "Nov 7, 2025",
    day: 7,
    title: "Tech Odyssey",
    subtitle: "Full Day Experience",
    description:
      "Immerse yourself in technology with competitions, workshops, and startup conclaves throughout the day.",
    icon: <Zap className="w-6 h-6" />,
    time: "10am - 6pm",
    venue: "Inside M block",
  },
  {
    id: 5,
    date: "Nov 7, 2025",
    day: 7,
    title: "RTL2GDSII Competition",
    subtitle: "Tech Challenge",
    description: "Participate in an exciting RTL to GDSII design competition.",
    icon: <Zap className="w-6 h-6" />,
    time: "10am - 6pm",
    venue: "240 Seater",
  },
  {
    id: 6,
    date: "Nov 7, 2025",
    day: 7,
    title: "Startup Conclave",
    subtitle: "Innovation Hub",
    description:
      "Connect with entrepreneurs and learn about startup ecosystems.",
    icon: <Sparkles className="w-6 h-6" />,
    time: "10am - 6pm",
    venue: "Pi Block",
  },
  {
    id: 7,
    date: "Nov 7, 2025",
    day: 7,
    title: "Design your Drink",
    subtitle: "Food Club",
    description: "Get creative and design your own drink at our food club.",
    icon: <Calendar className="w-6 h-6" />,
    time: "11:00 am - 12:30 pm",
    venue: "Outside M block",
  },
  {
    id: 8,
    date: "Nov 7, 2025",
    day: 7,
    title: "Mixed Media Art - Mosaic",
    subtitle: "Creative Expression",
    description:
      "Express yourself through mixed media art and mosaic creation.",
    icon: <Music className="w-6 h-6" />,
    time: "3:00 pm - 6:00 pm",
    venue: "120 seaters",
  },
  {
    id: 9,
    date: "Nov 7, 2025",
    day: 7,
    title: "Dynamite Segment 1",
    subtitle: "Inaugural Dance",
    description:
      "Experience an electrifying inaugural dance performance on stage.",
    icon: <Music className="w-6 h-6" />,
    time: "8:00 pm - 8:10 pm",
    venue: "Stage",
  },
  {
    id: 10,
    date: "Nov 7, 2025",
    day: 7,
    title: "440 Hz - Segment 1",
    subtitle: "Musical Performance",
    description: "Enjoy a captivating 440 Hz musical performance.",
    icon: <Music className="w-6 h-6" />,
    time: "8:15 pm - 8:40 pm",
    venue: "Stage",
  },
  {
    id: 11,
    date: "Nov 7, 2025",
    day: 7,
    title: "Limelight Drama",
    subtitle: "Theatrical Performance",
    description: "Witness an amazing dramatic performance under the spotlight.",
    icon: <Music className="w-6 h-6" />,
    time: "8:45 pm - 9:15 pm",
    venue: "Stage",
  },
  {
    id: 12,
    date: "Nov 7, 2025",
    day: 7,
    title: "Dynamite Segment 2",
    subtitle: "Dance Performance",
    description: "Another dynamic dance performance to light up the stage.",
    icon: <Music className="w-6 h-6" />,
    time: "9:20 pm - 9:40 pm",
    venue: "Stage",
  },
  {
    id: 13,
    date: "Nov 7, 2025",
    day: 7,
    title: "440 Hz - Segment 2",
    subtitle: "Musical Performance",
    description: "The second segment of our 440 Hz musical journey.",
    icon: <Music className="w-6 h-6" />,
    time: "9:45 pm - 10:10 pm",
    venue: "Stage",
  },
  {
    id: 14,
    date: "Nov 7, 2025",
    day: 7,
    title: "Vote of Thanks",
    subtitle: "Closing Ceremony",
    description: "Thank you message and closing remarks for day 1.",
    icon: <Sparkles className="w-6 h-6" />,
    time: "10:10 pm - 10:20 pm",
    venue: "Stage",
  },
  {
    id: 15,
    date: "Nov 7, 2025",
    day: 7,
    title: "DJ Session",
    subtitle: "Dance & Music",
    description: "Dance the night away with an amazing DJ performance.",
    icon: <Music className="w-6 h-6" />,
    time: "10:30 pm - 11:30 pm",
    venue: "Campus ground",
  },
  // Nov 8 events
  {
    id: 16,
    date: "Nov 8, 2025",
    day: 8,
    title: "Mega Rush",
    subtitle: "Grand Finale",
    description:
      "The ultimate celebration with mega rush activities, performances, and DJ session to close out the event.",
    icon: <Calendar className="w-6 h-6" />,
    time: "10:00 am - 6:00 pm",
    venue: "Mblock, 240 & 120 Seater",
  },
  {
    id: 17,
    date: "Nov 8, 2025",
    day: 8,
    title: "Cyber Workshop",
    subtitle: "Tech Training",
    description: "Learn cybersecurity essentials in this hands-on workshop.",
    icon: <Zap className="w-6 h-6" />,
    time: "10:00 am - 6:00 pm",
    venue: "Presentation Room 2",
  },
  {
    id: 18,
    date: "Nov 8, 2025",
    day: 8,
    title: "Implementing ML to FPGA",
    subtitle: "Technical Workshop",
    description: "Discover how to implement machine learning on FPGA systems.",
    icon: <Zap className="w-6 h-6" />,
    time: "10:00 am - 6:00 pm",
    venue: "E Block Classrooms",
  },
  {
    id: 19,
    date: "Nov 8, 2025",
    day: 8,
    title: "Prize Distribution",
    subtitle: "Awards Ceremony",
    description:
      "Celebrate winners and distribute prizes for all competitions.",
    icon: <Sparkles className="w-6 h-6" />,
    time: "7:00 pm - 8:00 pm",
    venue: "Stage",
  },
  {
    id: 20,
    date: "Nov 8, 2025",
    day: 8,
    title: "Singer Performance",
    subtitle: "Live Music",
    description: "Enjoy a spectacular live singing performance.",
    icon: <Music className="w-6 h-6" />,
    time: "8:00 pm - 9:30 pm",
    venue: "Stage",
  },
  {
    id: 21,
    date: "Nov 8, 2025",
    day: 8,
    title: "DJ Session",
    subtitle: "Final Party",
    description: "End the event with an epic DJ session and celebration.",
    icon: <Music className="w-6 h-6" />,
    time: "9:45 pm - 11:45 pm",
    venue: "Stage",
  },
];

export default function Timeline() {
  const [selectedDay, setSelectedDay] = useState(7);
  const days = [
    { number: 6, label: "Nov 6" },
    { number: 7, label: "Nov 7" },
    { number: 8, label: "Nov 8" },
  ];

  const filteredEvents = timelineData.filter(
    (event) => event.day === selectedDay,
  );

  return (
    <div className="space-y-12">
      <div className="flex flex-wrap gap-3 justify-center">
        {days.map((day) => (
          <motion.button
            key={day.number}
            onClick={() => setSelectedDay(day.number)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              selectedDay === day.number
                ? "bg-white text-black shadow-lg"
                : "bg-gray-900 text-white border border-gray-700 hover:border-white"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {day.label}
          </motion.button>
        ))}
      </div>

      {/* Timeline container */}
      <div className="relative">
        {/* Animated gradient line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 hidden md:block">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-400 to-white rounded-full" />
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-gray-300 via-gray-200 to-gray-300 rounded-full blur-lg opacity-50"
            animate={{
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
            }}
          />
        </div>

        <div className="space-y-12 md:space-y-16">
          {filteredEvents.map((event, index) => (
            <TimelineEvent
              key={event.id}
              event={event}
              index={index}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
