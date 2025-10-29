import React from "react"
import { motion } from "framer-motion"
import TimelineEvent from "./timeline-events"
import { Calendar, Zap, Music, Sparkles } from "lucide-react"

const timelineData = [
    // ===== Nov 6, 2025 =====
    {
        id: 1,
        date: "Nov 6, 2025",
        title: "Inauguration",
        subtitle: "Opening Ceremony",
        description: "Kick off the event with the grand inauguration ceremony marking the beginning of the fest.",
        icon: <Sparkles className="w-6 h-6" />,
        time: "2:00 pm - 3:00 pm",
        venue: "In front of PI block",
    },
    {
        id: 2,
        date: "Nov 6, 2025",
        title: "Treasure Hunt 4.0 - Zeitgeist",
        subtitle: "Campus-Wide Adventure",
        description: "Solve clues and race around the campus to uncover hidden treasures in this thrilling event.",
        icon: <Zap className="w-6 h-6" />,
        time: "3:00 pm - 5:30 pm",
        venue: "Campus",
    },
    {
        id: 3,
        date: "Nov 6, 2025",
        title: "Kutumbakam",
        subtitle: "Cultural Night",
        description: "End the day with Kutumbakam — an evening filled with cultural unity, performances, and joy.",
        icon: <Music className="w-6 h-6" />,
        time: "8:00 pm - 11:00 pm",
        venue: "M Block",
    },

    // ===== Nov 7, 2025 =====
    {
        id: 4,
        date: "Nov 7, 2025",
        title: "Tech Odyssey",
        subtitle: "The Ultimate Multi-Round Coding Challenge",
        description:
            "An intense, multi-round coding competition designed to test not just your programming skills but your overall problem-solving, logic, and domain knowledge.",
        icon: <Zap className="w-6 h-6" />,
        time: "10:00 am - 6:00 pm",
        venue: "M Block",
    },
    {
        id: 18,
        date: "Nov 7, 2025",
        title: "Yukti",
        subtitle: "The Chip Design Challenge",
        description:
        "The RTL to GDSII Design Challenge 2025 is a VLSI design competition where participants implement a given RTL design.",
        icon: <Zap className="w-6 h-6" />,
        time: "10:00 am - 6:00 pm",
        venue: "240 Seater",
    },
    {
        id: 19,
        date: "Nov 7, 2025",
        title: "Startup Conclave",
        subtitle: "Entrepreneurship and Innovation Platform",
        description:
        "Startup Conclave is a vibrant platform designed to bring together entrepreneurs, innovators, investors, and visionaries under one roof to celebrate innovation and foster the spirit of entrepreneurship.",
        icon: <Zap className="w-6 h-6" />,
        time: "10:00 am - 6:00 pm",
        venue: "PI Block",
    },
    {
        id: 5,
        date: "Nov 7, 2025",
        title: "Design Your Drink - Food Club",
        subtitle: "Creative Workshop",
        description: "Show off your creativity in this fun and interactive food club challenge.",
        icon: <Sparkles className="w-6 h-6" />,
        time: "11:00 am - 12:30 pm",
        venue: "Outside M Block",
    },
    {
        id: 6,
        date: "Nov 7, 2025",
        title: "Mixed Media Art - Mosaic",
        subtitle: "Artistic Expression",
        description: "Explore your artistic side with Mosaic — a mixed media art competition.",
        icon: <Calendar className="w-6 h-6" />,
        time: "3:00 pm - 6:00 pm",
        venue: "120 Seaters",
    },
    {
        id: 7,
        date: "Nov 7, 2025",
        title: "Dynamite Segment 1",
        subtitle: "Inaugural Dance",
        description: "Kick off the Dynamite show with an energetic dance performance that sets the stage ablaze.",
        icon: <Music className="w-6 h-6" />,
        time: "8:00 pm - 8:10 pm",
        venue: "Stage",
    },
    {
        id: 8,
        date: "Nov 7, 2025",
        title: "440 Hz - Segment 1",
        subtitle: "Musical Act",
        description: "Feel the rhythm with a breathtaking musical segment by 440 Hz.",
        icon: <Music className="w-6 h-6" />,
        time: "8:15 pm - 8:40 pm",
        venue: "Stage",
    },
    {
        id: 9,
        date: "Nov 7, 2025",
        title: "Limelight Drama",
        subtitle: "Stage Performance",
        description: "A captivating drama performance that brings emotions and stories to life.",
        icon: <Sparkles className="w-6 h-6" />,
        time: "8:45 pm - 9:15 pm",
        venue: "Stage",
    },
    {
        id: 10,
        date: "Nov 7, 2025",
        title: "Dynamite Segment 2",
        subtitle: "Dance Show",
        description: "The second wave of electrifying dance performances continues the Dynamite legacy.",
        icon: <Music className="w-6 h-6" />,
        time: "9:20 pm - 9:40 pm",
        venue: "Stage",
    },
    {
        id: 11,
        date: "Nov 7, 2025",
        title: "440 Hz - Segment 2",
        subtitle: "Musical Act",
        description: "The night crescendos with another performance from 440 Hz.",
        icon: <Music className="w-6 h-6" />,
        time: "9:45 pm - 10:10 pm",
        venue: "Stage",
    },
    {
        id: 12,
        date: "Nov 7, 2025",
        title: "Vote of Thanks",
        subtitle: "Closing Words",
        description: "Acknowledging the efforts and contributions that made the day a success.",
        icon: <Calendar className="w-6 h-6" />,
        time: "10:10 pm - 10:20 pm",
        venue: "Stage",
    },
    {
        id: 13,
        date: "Nov 7, 2025",
        title: "DJ Night",
        subtitle: "Campus Bash",
        description: "End the day with high-energy beats at the DJ night.",
        icon: <Music className="w-6 h-6" />,
        time: "10:30 pm - 11:30 pm",
        venue: "Campus Ground",
    },

    // ===== Nov 8, 2025 =====
    {
        id: 14,
        date: "Nov 8, 2025",
        title: "Mega Rush",
        subtitle: "The Ultimate Inter-College E-Sports Showdown",
        description:
            "A gaming extravaganza at Mega-Rush, the premier inter-college E-Sports competition where skill, strategy, and speed collide!",
        icon: <Zap className="w-6 h-6" />,
        time: "10:00 am - 6:00 pm",
        venue: "M Block, 240 & 120 Seater",
    },
    {
        id: 19,
        date: "Nov 8, 2025",
        title: "CyberSprint",
        subtitle: "From basics to real world attack scenarios",
        description:
            "workshop will cover key cybersecurity concepts from basics concepts to advanced tools",
        icon: <Zap className="w-6 h-6" />,
        time: "10:00 am - 6:00 pm",
        venue: "Presentation Room 2",
    },
    {
        id: 20,
        date: "Nov 8, 2025",
        title: "Vidyutvega",
        subtitle: "Quantize your AI and accelerate on FPGA",
        description:
            "participants will explore the cutting edge of AI hardware acceleration by integrating Large Language Models (LLMs) with Field-Programmable Gate Arrays (FPGAs).",
        icon: <Zap className="w-6 h-6" />,
        time: "10:00 am - 6:00 pm",
        venue: "E Block Classrooms",
    },
    {
        id: 15,
        date: "Nov 8, 2025",
        title: "Prize Distribution",
        subtitle: "Award Ceremony",
        description: "Celebrate the winners and recognize excellence across all events.",
        icon: <Sparkles className="w-6 h-6" />,
        time: "7:00 pm - 8:00 pm",
        venue: "Stage",
    },
    {
        id: 16,
        date: "Nov 8, 2025",
        title: "Singer Performance",
        subtitle: "Musical Evening",
        description: "Enjoy a soulful performance to close the night beautifully.",
        icon: <Music className="w-6 h-6" />,
        time: "8:00 pm - 9:30 pm",
        venue: "Stage",
    },
    {
        id: 17,
        date: "Nov 8, 2025",
        title: "DJ Session",
        subtitle: "Final Night Celebration",
        description: "Dance the night away with an unforgettable closing DJ session.",
        icon: <Music className="w-6 h-6" />,
        time: "9:45 pm - 11:45 pm",
        venue: "Stage",
    },
]

export default function Timeline() {
    return (
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

            {/* Timeline events */}
            <div className="space-y-12 md:space-y-16">
                {timelineData.map((event, index) => (
                    <TimelineEvent key={event.id} event={event} index={index} isLeft={index % 2 === 0} />
                ))}
            </div>
        </div>
    )
}