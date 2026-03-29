"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useModal } from "@/context/modal-context"




export default function DifferenceHero() {
  const { openModal } = useModal()

  return (
    <section id="hero" className="relative overflow-hidden lg:min-h-[85vh] flex flex-col bg-[#111111]">

      {/* SPLIT LAYOUT: Dark Left + Cream Right */}
      <div className="flex flex-col lg:flex-row flex-1 lg:min-h-[85vh]">

        {/* LEFT PANEL — Dark, authoritative */}
        <div className="relative lg:w-[55%] bg-[#111111] flex items-center overflow-hidden">

          {/* Subtle blueprint grid on dark */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none">
            <pattern id="grid-dark" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid-dark)" />
          </svg>

          {/* Gold ambient glow top-right */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold/10 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

          <div className="relative z-10 px-8 md:px-12 lg:px-16 pt-36 pb-16 lg:py-28 max-w-2xl">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h1 className="text-4xl md:text-5xl lg:text-8xl font-black uppercase text-white leading-[1.05]">
                The VoiShift <span className="text-gold italic">Difference</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl lg:text-2xl font-serif text-white/80 leading-[1.35] tracking-tight mb-8"
            >
              We do not build voice agents. <br />
              <span className="italic text-gold/90">We build voice <span className="not-italic font-black uppercase tracking-[0.15rem]"> systems.</span></span><br />
              Edge-case first. Rule-governed. Measured in production.
            </motion.div>

            {/* Gold left-border accent */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="border-l-2 border-gold pl-5 mb-10"
            >
              <p className="text-lg lg:text-xl text-white/50 font-serif italic leading-relaxed">
                Proven under edge cases. Governed by rules. Measurable over time.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                variant="hero"
                onClick={() => openModal()}
                className="rounded-none px-8 py-7 text-lg group bg-gold text-black hover:bg-white hover:text-black transition-colors shadow-xl border-0"
              >
                Request an Architecture Review
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="heroSecondary"
                asChild
                className="rounded-none px-8 py-7 text-lg group border-2 border-white/20 text-white hover:border-gold hover:text-gold transition-colors bg-transparent shadow-xl"
              >
                <a href="/case-studies">
                  View Case Studies
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Vertical gold divider (desktop only) */}
          <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent" />
        </div>


        {/* RIGHT PANEL — Cream, pipeline visual */}
        <div className="hidden lg:flex relative lg:w-[45%] bg-cream-dark items-center justify-center overflow-hidden">

          {/* Subtle warm grid */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none">
            <pattern id="grid-cream" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid-cream)" />
          </svg>

          {/* Gold ambient glow */}
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[130px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

          {/* Voice System Pipeline Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative z-10 w-full flex justify-center items-center px-8 md:px-12 lg:px-10 py-16 lg:py-28"
          >
            <div className="relative w-full max-w-[380px]">

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

              {/* Layer 3 — Proof-Gated Actions */}
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
                  <p className="text-xs font-bold text-warm-gray truncate">Proof-Gated Actions</p>
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

              {/* Layer 4 — Replayable Audit Trail */}
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
                  <p className="text-xs font-bold text-warm-gray truncate">Replayable Audit Trail</p>
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
                  <span className="text-[10px] font-mono tracking-[0.2em] text-gold uppercase">Measured. Provable. Replayable.</span>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>

      </div>

      {/* Sharp HUD Bottom Detail */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
    </section>
  )
}
