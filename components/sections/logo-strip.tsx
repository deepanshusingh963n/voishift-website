"use client"

import { motion } from "framer-motion"

// Placeholder company names styled as text logos
const companies = [
  "Acme Corp",
  "TechFlow",
  "DataSync",
  "CloudOps",
  "Nexus AI",
  "Vertex",
  "Quantum",
  "Apex Systems",
]

export function LogoStrip() {
  return (
    <section className="py-12 bg-sand/30 border-y border-border overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-6">
        <p className="text-center text-sm text-warm-gray-light uppercase tracking-wider">
          Trusted by teams building serious voice AI
        </p>
      </div>
      
      {/* Infinite scroll container */}
      <div className="relative">
        <div className="flex overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
            className="flex gap-12 items-center"
          >
            {/* Double the logos for seamless loop */}
            {[...companies, ...companies].map((company, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-6 py-3"
              >
                <span className="text-xl font-medium text-warm-gray/40 whitespace-nowrap tracking-tight">
                  {company}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
        
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-sand/30 to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-sand/30 to-transparent pointer-events-none" />
      </div>
    </section>
  )
}
