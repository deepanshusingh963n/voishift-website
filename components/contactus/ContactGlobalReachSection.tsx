"use client";

import React, { memo } from "react";
import { motion } from "framer-motion";

const markers = [
  { name: "California", left: "15.8%", top: "30.5%" },
  { name: "New York", left: "27.8%", top: "35.8%" },

  { name: "London", left: "49.3%", top: "30.5%" },
  { name: "Madrid", left: "48.5%", top: "35.5%" },
  { name: "Stockholm", left: "51.2%", top: "24.8%" },

  { name: "Dubai", left: "61.8%", top: "43%" },
  { name: "New Delhi", left: "68.8%", top: "40.5%" },

  { name: "Brazil", left: "36.2%", top: "60.5%" },

  { name: "Sydney", left: "88.5%", top: "67.5%" },
];

const MapChart = () => {
  return (
    <div className="relative max-w-7xl mx-auto px-4 md:px-8">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
        alt="World Map"
        className="w-full h-auto opacity-80"
      />

      {markers.map((marker) => (
        <div
          key={marker.name}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: marker.left, top: marker.top }}
        >
          <span className="relative flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-600"></span>
          </span>
        </div>
      ))}
    </div>
  );
};

const MemoizedMapChart = memo(MapChart);

export function ContactGlobalReachSection() {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-6 font-serif">
            Customers We Serve Across the Globe
          </h2>
          <p className="text-lg text-gray-600 mb-16 max-w-2xl mx-auto">
            From North America to Europe and Asia, we are proud to provide voice AI services to innovative companies worldwide.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <MemoizedMapChart />
        </motion.div>
      </div>
    </section>
  );
}