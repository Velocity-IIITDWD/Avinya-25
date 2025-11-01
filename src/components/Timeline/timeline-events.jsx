import React from "react";

import { motion } from "framer-motion";
import { useInView } from "../../hooks/use-in-view";

export default function TimelineEvent({ event, index, isLeft }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      x: isLeft ? -50 : 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="relative"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 items-center">
        <motion.div
          className={`${isLeft ? "md:text-right md:pr-12 md:col-start-1" : "md:text-left md:pl-12 md:col-start-2"}`}
          variants={cardVariants}
        >
          <motion.div
            className="group relative bg-gray-900 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-gray-700 hover:border-white transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-white/10"
            whileHover={{
              scale: 1.02,
              y: -5,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/0 group-hover:from-white/5 group-hover:to-white/5 rounded-2xl transition-all duration-300" />

            <div className="relative z-10">
              {/* Icon and date */}
              <motion.div
                className="flex items-center gap-3 mb-4"
                variants={itemVariants}
              >
                <div className="p-2 bg-white rounded-lg text-black shadow-lg">
                  {event.icon}
                </div>
                <span className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                  {event.date}
                </span>
              </motion.div>

              {/* Title and subtitle */}
              <motion.div variants={itemVariants} className="mb-3">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 text-balance">
                  {event.title}
                </h3>
                <p className="text-gray-400 font-medium">{event.subtitle}</p>
              </motion.div>

              {/* Description */}
              <motion.p
                variants={itemVariants}
                className="text-gray-400 leading-relaxed mb-4"
              >
                {event.description}
              </motion.p>

              {/* Time and venue */}
              {(event.time || event.venue) && (
                <motion.div
                  variants={itemVariants}
                  className="flex flex-col gap-2 pt-4 border-t border-gray-700"
                >
                  {event.time && (
                    <p className="text-sm text-gray-400">
                      <span className="font-semibold text-gray-200">Time:</span>{" "}
                      {event.time}
                    </p>
                  )}
                  {event.venue && (
                    <p className="text-sm text-gray-400">
                      <span className="font-semibold text-gray-200">
                        Venue:
                      </span>{" "}
                      {event.venue}
                    </p>
                  )}
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Timeline dot */}
      <motion.div
        className="absolute left-1/2 top-8 -translate-x-1/2 hidden md:block"
        variants={itemVariants}
      >
        <div className="relative w-4 h-4">
          <motion.div
            className="absolute inset-0 bg-white rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [1, 0, 1],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: index * 0.2,
            }}
          />
          <div className="absolute inset-1 bg-gray-200 rounded-full shadow-lg shadow-white/30" />
        </div>
      </motion.div>
    </motion.div>
  );
}
