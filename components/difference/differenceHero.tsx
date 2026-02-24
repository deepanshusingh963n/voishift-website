"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useModal } from "@/context/modal-context"




export default function DifferenceHero() {
  const { openModal } = useModal()

  return (
    <section className="relative pt-32 pb-20 lg:pt-30 lg:pb-28 overflow-hidden bg-cream-dark">
      {/* Background HUD Decor */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold/5 rounded-none blur-[150px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gold/5 rounded-none blur-[120px] translate-y-1/2 -translate-x-1/2" />

        {/* Animated Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]">
          <pattern id="grid-hero" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid-hero)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center">

          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="text-7xl font-black uppercase tracking-[0.15em] text-gold">The VoiShift Difference</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl lg:text-2xl font-serif text-warm-gray leading-[1.05] tracking-tight mb-8"
            >
              We do not build voice agents. <br />
              <span className="italic text-gold/90">We build voice systems.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 mb-12"
            >
              <p className="text-lg lg:text-xl text-warm-gray-light font-serif italic leading-relaxed max-w-3xl">
                Proven under edge cases. Governed by rules. Measurable over time.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                variant="hero"
                size="lg"
                onClick={openModal}
                className="rounded-none px-8 py-7 text-lg group shadow-xl"
              >
                Design My System
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="heroSecondary"
                size="lg"
                asChild
                className="rounded-none px-8 py-7 text-lg group border-2"
              >
                <a href="/case-studies">
                  View Case Studies
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Voice System Pipeline Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:flex justify-center items-center relative w-full"
          >
            <div className="relative w-full max-w-[420px]">

              {/* Voice Input Node */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col items-center mb-2"
              >
                <div className="relative flex items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.18, 1], opacity: [0.18, 0.35, 0.18] }}
                    transition={{ duration: 2.4, repeat: Infinity }}
                    className="absolute w-16 h-16 rounded-full bg-gold"
                  />
                  <div className="relative w-10 h-10 rounded-full border-2 border-gold bg-cream-dark flex items-center justify-center shadow-lg">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-gold" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                      <path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8" />
                    </svg>
                  </div>
                </div>
                <span className="mt-2 text-[9px] font-mono tracking-[0.2em] text-gold/70 uppercase">Voice Input</span>
              </motion.div>

              {/* Animated signal line down */}
              <div className="flex justify-center mb-2">
                <div className="relative w-px h-6 bg-gold/20 overflow-hidden">
                  <motion.div
                    animate={{ y: ["-100%", "200%"] }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
                    className="absolute w-full h-3 bg-gradient-to-b from-transparent via-gold to-transparent"
                  />
                </div>
              </div>

              {/* Layer 1 — Controlled Truth */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="group relative border border-gold/30 bg-white/60 backdrop-blur-sm px-5 py-3.5 mb-1 flex items-center gap-4 hover:border-gold/70 hover:bg-white/90 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-8 h-8 border border-gold/40 bg-cream-dark flex items-center justify-center group-hover:border-gold transition-colors">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 text-gold" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-mono tracking-[0.18em] text-gold/80 uppercase mb-0.5">Layer 01</p>
                  <p className="text-xs font-bold text-warm-gray truncate">Controlled Truth</p>
                </div>
                <motion.div
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                  className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gold"
                />
              </motion.div>

              {/* Connector */}
              <div className="flex justify-center mb-1">
                <div className="relative w-px h-5 bg-gold/15 overflow-hidden">
                  <motion.div
                    animate={{ y: ["-100%", "200%"] }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear", delay: 0.3 }}
                    className="absolute w-full h-2.5 bg-gradient-to-b from-transparent via-gold/60 to-transparent"
                  />
                </div>
              </div>

              {/* Layer 2 — Designed Refusal */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.85 }}
                className="group relative border border-gold/30 bg-white/60 backdrop-blur-sm px-5 py-3.5 mb-1 flex items-center gap-4 hover:border-gold/70 hover:bg-white/90 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-8 h-8 border border-gold/40 bg-cream-dark flex items-center justify-center group-hover:border-gold transition-colors">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 text-gold" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" /><line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-mono tracking-[0.18em] text-gold/80 uppercase mb-0.5">Layer 02</p>
                  <p className="text-xs font-bold text-warm-gray truncate">Designed Refusal</p>
                </div>
                <motion.div
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gold"
                />
              </motion.div>

              {/* Connector */}
              <div className="flex justify-center mb-1">
                <div className="relative w-px h-5 bg-gold/15 overflow-hidden">
                  <motion.div
                    animate={{ y: ["-100%", "200%"] }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear", delay: 0.6 }}
                    className="absolute w-full h-2.5 bg-gradient-to-b from-transparent via-gold/60 to-transparent"
                  />
                </div>
              </div>

              {/* Layer 3 — Edge-Case Testing */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="group relative border border-gold/30 bg-white/60 backdrop-blur-sm px-5 py-3.5 mb-1 flex items-center gap-4 hover:border-gold/70 hover:bg-white/90 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-8 h-8 border border-gold/40 bg-cream-dark flex items-center justify-center group-hover:border-gold transition-colors">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 text-gold" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-mono tracking-[0.18em] text-gold/80 uppercase mb-0.5">Layer 03</p>
                  <p className="text-xs font-bold text-warm-gray truncate">Real Evaluation</p>
                </div>
                <motion.div
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gold"
                />
              </motion.div>

              {/* Connector */}
              <div className="flex justify-center mb-1">
                <div className="relative w-px h-5 bg-gold/15 overflow-hidden">
                  <motion.div
                    animate={{ y: ["-100%", "200%"] }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear", delay: 0.9 }}
                    className="absolute w-full h-2.5 bg-gradient-to-b from-transparent via-gold/60 to-transparent"
                  />
                </div>
              </div>

              {/* Layer 4 — Long-tail Coverage */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.15 }}
                className="group relative border border-gold/30 bg-white/60 backdrop-blur-sm px-5 py-3.5 mb-2 flex items-center gap-4 hover:border-gold/70 hover:bg-white/90 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-8 h-8 border border-gold/40 bg-cream-dark flex items-center justify-center group-hover:border-gold transition-colors">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 text-gold" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M2 20h.01M7 20v-4M12 20v-8M17 20V8M22 4v16" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-mono tracking-[0.18em] text-gold/80 uppercase mb-0.5">Layer 04</p>
                  <p className="text-xs font-bold text-warm-gray truncate">Long-tail First</p>
                </div>
                <motion.div
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                  className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gold"
                />
              </motion.div>

              {/* Signal line to output */}
              <div className="flex justify-center mb-2">
                <div className="relative w-px h-6 bg-gold/20 overflow-hidden">
                  <motion.div
                    animate={{ y: ["-100%", "200%"] }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: "linear", delay: 1.2 }}
                    className="absolute w-full h-3 bg-gradient-to-b from-transparent via-gold to-transparent"
                  />
                </div>
              </div>

              {/* Measurable Output Node */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.3 }}
                className="flex flex-col items-center"
              >
                <div className="relative w-full border border-gold/50 bg-gold/8 px-5 py-3 flex items-center gap-3">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.8, repeat: Infinity }}
                    className="w-2 h-2 rounded-full bg-gold flex-shrink-0"
                  />
                  <span className="text-[10px] font-mono tracking-[0.2em] text-gold uppercase">Measured. Governed. Replayable.</span>
                </div>
              </motion.div>

              {/* Side rule labels */}
              <div className="absolute -left-3 top-0 bottom-0 flex flex-col justify-center pointer-events-none">
                <div className="w-px flex-1 bg-gradient-to-b from-transparent via-gold/20 to-transparent" />
              </div>
              <div className="absolute -right-3 top-0 bottom-0 flex flex-col justify-center pointer-events-none">
                <div className="w-px flex-1 bg-gradient-to-b from-transparent via-gold/20 to-transparent" />
              </div>

            </div>
          </motion.div>
        </div>
      </div>

      {/* Sharp HUD Bottom Detail */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
    </section>
  )
}
