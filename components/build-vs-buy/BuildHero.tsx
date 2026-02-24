"use client"

import { motion } from "framer-motion"
import { Cloud, KeyRound } from "lucide-react"

export default function BuildHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-cream-dark">

      {/* Background HUD Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold/5 blur-[120px] translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Responsive Grid */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-20 lg:items-center">

          {/* LEFT SIDE — YOUR ORIGINAL CONTENT (UNCHANGED) */}
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              
              <span className="text-7xl font-black uppercase tracking-[0.15em] text-gold">
                Ownership vs Rental
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl lg:text-4xl font-serif text-warm-gray leading-[1.05] tracking-tight mb-8"
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
              <p className="text-2xl lg:text-2xl text-warm-gray-light font-serif italic leading-relaxed max-w-3xl">
                Here is the simplest way to think about it.
              </p>

              <p className="text-2xl lg:text-3xl text-warm-gray font-bold font-serif italic leading-relaxed max-w-3xl">
                Buying a ready-made AI bot is like renting. Building is owning.
              </p>

              <p className="text-lg lg:text-xl text-warm-gray leading-relaxed max-w-2xl font-medium border-l-2 border-gold/30 pl-6">
                If you are deciding this, you are not really deciding “software.”
                You are deciding whether the AI that speaks for your business
                will be rented or owned.
              </p>
            </motion.div>
          </div>

          {/* RIGHT SIDE — CINEMATIC METAPHOR VISUAL */}
          <div className="mt-20 lg:mt-0 flex justify-center">

            <div className="relative w-full max-w-xl grid grid-cols-2 gap-6">

              {/* Rental Panel */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 0.6, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white/40 border border-sand rounded-2xl p-8 shadow-lg backdrop-blur-sm"
              >
                <div className="flex flex-col items-center gap-6 text-center">
                  <Cloud className="w-10 h-10 text-warm-gray/60" />
                  <span className="text-xs font-black uppercase tracking-widest text-warm-gray">
                    Rental Model
                  </span>
                  <div className="h-px w-full bg-sand" />
                  <p className="text-sm text-warm-gray-light font-serif italic">
                    Vendor Controlled<br />
                    API Locked<br />
                    Limited Authority
                  </p>
                </div>
              </motion.div>

              {/* Ownership Panel */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="bg-white border-2 border-gold rounded-2xl p-8 shadow-2xl relative"
              >
                <div className="absolute -inset-1 bg-gold/10 blur-xl rounded-2xl opacity-40" />

                <div className="relative flex flex-col items-center gap-6 text-center">
                  <KeyRound className="w-10 h-10 text-gold" />
                  <span className="text-xs font-black uppercase tracking-widest text-gold">
                    Ownership Model
                  </span>
                  <div className="h-px w-full bg-gold/30" />
                  <p className="text-sm text-warm-gray font-serif italic">
                    Full Control<br />
                    Transparent Logic<br />
                    System Authority
                  </p>
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Divider */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
    </section>
  )
}