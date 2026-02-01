"use client"

import { motion } from "framer-motion"

// Placeholder company names styled as text logos
const companies = [
  "Google",
  "DXC",
  "Meta",

]

const tools = [
  "OpenAI",
  "Claude",
  "Hugging Face",

]

export function LogoStrip() {
  return (
    <section className="py-12 bg-sand/30 border-y border-border overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-6">
        <p className="text-center text-sm text-warm-gray-light tracking-wider">
          The builders at Voishift bring expertise from their work for/at
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
                duration: 40,
                ease: "linear",
              },
            }}
            className="flex items-center mb-6 shrink-0"
          >
            {/* Duplicate the logos for seamless loop */}
            {[...companies, ...companies, ...companies, ...companies, ...companies, ...companies].map((company, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-10 py-3"
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
      <div className="max-w-6xl mx-auto px-6 mb-6">
        <p className="text-center text-sm text-warm-gray-light tracking-wider">
          AI/DS Tools & Technologies to design your solutions
        </p>
      </div>

      {/* Infinite scroll container */}
      <div className="relative">
        <div className="flex overflow-hidden">
          <motion.div
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 45,
                ease: "linear",
              },
            }}
            className="flex items-center shrink-0"
          >
            {/* Duplicate the tools for seamless loop */}
            {[...tools, ...tools, ...tools, ...tools, ...tools, ...tools].map((tool, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-10 py-3"
              >
                <span className="text-xl font-medium text-warm-gray/40 whitespace-nowrap tracking-tight">
                  {tool}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-sand/30 to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-sand/30 to-transparent pointer-events-none" />
      </div>
    </section >
  )
}
