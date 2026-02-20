"use client"

import { motion } from "framer-motion"

export default function BuildHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-cream-dark">
      {/* Background HUD Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-none blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold/5 rounded-none blur-[120px] translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-12 h-[1px] bg-gold" />
            <span className="text-xs font-black uppercase tracking-[0.4em] text-gold">Ownership vs Rental</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl lg:text-8xl font-serif text-warm-gray leading-[1.05] tracking-tight mb-8"
          >
            Build vs buy for <br />
            <span className="italic text-gold/90">AI/Voice AI.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-xl lg:text-2xl text-warm-gray-light font-serif italic leading-relaxed max-w-3xl">
              Here is the simplest way to think about it.
            </p>
            <p className="text-xl lg:text-2xl text-warm-gray font-bold font-serif italic leading-relaxed max-w-3xl">Buying a ready-made AI bot is like renting. Building is owning.</p>
            <p className="text-lg lg:text-xl text-warm-gray leading-relaxed max-w-2xl font-medium border-l-2 border-gold/30 pl-6">
              If you are deciding this, you are not really deciding “software.” You are deciding whether the AI that speaks for your business will be rented or owned.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Sharp HUD Bottom Detail */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
    </section>
  )
}
