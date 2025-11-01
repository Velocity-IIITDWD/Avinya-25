import React from "react";
import Timeline from "../components/Timeline/timeline";
import ShinyText from "../components/AboutFest/About";

const timeline = () => {
  return (
    <div
      id="events"
      className="px-5 sm:px-1 lg:px-70 flex flex-col items-center mb-20"
    >
      <ShinyText
        text="Event Timeline"
        className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-30 mb-10 sm:mb-30 text-balance font-mont"
      />
      <Timeline />
    </div>
  );
};

export default timeline;
