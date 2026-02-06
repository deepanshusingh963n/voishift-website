"use client"

import { motion } from "framer-motion"

export function CaseStudiesHero() {
  return (
    <section className="relative pt-24 pb-16 px-6 bg-gradient-to-br from-background via-cream-dark to-gold/3 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gold/10 rounded-full border border-gold/20">
            <span className="text-sm text-warm-gray font-medium">Home</span>
            <span className="text-warm-gray-light">•</span>
            <span className="text-sm text-gold font-medium">Case Studies</span>
          </div>

          <h1 className="font-serif text-5xl md:text-6xl text-warm-gray leading-tight text-balance mb-6">
            Voices That Build Clarity
          </h1>

          <p className="text-xl text-warm-gray-light leading-relaxed max-w-2xl mx-auto">
            How teams transformed their voice AI from experimental to essential. Real outcomes. Real challenges. Real solutions.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
