"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, ShieldCheck, Activity, Target } from "lucide-react"
import { useModal } from "@/context/modal-context"

export default function HowHero() {
  const { openModal } = useModal()

  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-[#0a0a0a] min-h-[90vh] flex items-center">
      {/* Background HUD Decor & Grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-gold/30 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-gold/30 rounded-full blur-[140px]" />

        {/* Ambient Voice Pulse (Concentric Rings) */}
        <div className="absolute top-1/2 left-[45%] md:left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] flex items-center justify-center pointer-events-none z-0">
          <motion.div
            animate={{ scale: [0.8, 2, 3.5], opacity: [0.4, 0.1, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: 0 }}
            className="absolute rounded-full border-2 border-gold/70 w-[200px] h-[200px]"
          />
          <motion.div
            animate={{ scale: [0.8, 2, 3.5], opacity: [0.4, 0.1, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: 2 }}
            className="absolute rounded-full border-2 border-gold/70 w-[200px] h-[200px]"
          />
          <motion.div
            animate={{ scale: [0.8, 2, 3.5], opacity: [0.4, 0.1, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: 4 }}
            className="absolute rounded-full border-2 border-gold/70 w-[200px] h-[200px]"
          />
        </div>

        {/* Grid Pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]">
          <pattern id="grid-dark-how" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-white" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid-dark-how)" />
        </svg>
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-20 lg:items-center">

          {/* LEFT SIDE — YOUR ORIGINAL CONTENT (UNCHANGED) */}
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <h1 className="text-5xl lg:text-8xl font-black uppercase text-white leading-[1.05]">
                The VoiShift <span className="text-gold italic">Process</span>
              </h1>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl lg:text-3xl font-serif text-white/80 leading-[1.2] tracking-tight mb-10"
            >
              Voice AI that ships <span className="italic text-gold/90">safely, not loudly.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="border-l-2 border-gold pl-6 mb-12"
            >
              <p className="text-xl lg:text-xl text-white/60 font-serif italic leading-relaxed max-w-2xl">
                We map the best opportunities, prove behavior under edge cases, then roll out in phases with guardrails and drift monitoring. No guessing, no big bang launches.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                className="bg-gold hover:bg-white text-black hover:text-black px-10 py-7 text-lg rounded-none shadow-[0_0_30px_rgba(212,175,55,0.15)] border-0 h-auto font-semibold uppercase tracking-wider"
                onClick={() => openModal()}
              >
                Let's Build
                <ArrowRight className="ml-3 w-5 h-5" />
              </Button>
            </motion.div>
          </div>

          {/* RIGHT SIDE — 3-PHASE VISUAL PIPELINE */}
          <div className="hidden lg:flex w-full mt-24 lg:mt-0 relative items-center justify-end">

            <div className="relative w-full max-w-[440px]">

              {/* Phase 01 */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="group relative border border-white/10 bg-white/[0.03] backdrop-blur-md p-7 mb-2 flex items-center gap-6 hover:border-gold/50 hover:bg-white/[0.06] transition-all duration-300 shadow-2xl"
              >
                <div className="flex-shrink-0 w-14 h-14 border border-white/10 bg-black/60 flex items-center justify-center group-hover:border-gold group-hover:shadow-[0_0_15px_rgba(212,175,55,0.2)] transition-all">
                  <Target className="w-6 h-6 text-gold" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[15px] font-mono tracking-[0.2em] text-gold/80 uppercase mb-1.5 flex items-center justify-between">
                    Phase 01
                    <motion.span
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                      className="w-1.5 h-1.5 rounded-full bg-gold inline-block"
                    />
                  </p>
                  <p className="text-base lg:text-lg font-bold text-white truncate">Voishift OppMap</p>
                  <p className="text-[12px] lg:text-xs font-medium text-white/50 mt-1">Economic Prioritization + Boundaries</p>
                </div>
              </motion.div>

              {/* Animated downward connector */}
              <div className="flex justify-center mb-2">
                <div className="relative w-px h-12 bg-white/10 overflow-hidden">
                  <motion.div
                    animate={{ y: ["-100%", "200%"] }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: "linear", delay: 0.3 }}
                    className="absolute w-full h-5 bg-gradient-to-b from-transparent via-gold to-transparent"
                  />
                </div>
              </div>

              {/* Phase 02 */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="group relative border border-white/10 bg-white/[0.03] backdrop-blur-md p-7 mb-2 flex items-center gap-6 hover:border-gold/50 hover:bg-white/[0.06] transition-all duration-300 shadow-2xl"
              >
                <div className="flex-shrink-0 w-14 h-14 border border-white/10 bg-black/60 flex items-center justify-center group-hover:border-gold group-hover:shadow-[0_0_15px_rgba(212,175,55,0.2)] transition-all">
                  <Activity className="w-6 h-6 text-gold animate-pulse" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[15px] font-mono tracking-[0.2em] text-gold/80 uppercase mb-1.5 flex items-center justify-between">
                    Phase 02
                    <motion.span
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                      className="w-1.5 h-1.5 rounded-full bg-gold inline-block"
                    />
                  </p>
                  <p className="text-base lg:text-lg font-bold text-white truncate">Voishift Validation Sandbox</p>
                  <p className="text-[12px] lg:text-xs font-medium text-white/50 mt-1">Edge Case Stress Testing + Guardrails</p>
                </div>
              </motion.div>

              {/* Animated downward connector */}
              <div className="flex justify-center mb-2">
                <div className="relative w-px h-12 bg-white/10 overflow-hidden">
                  <motion.div
                    animate={{ y: ["-100%", "200%"] }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: "linear", delay: 0.6 }}
                    className="absolute w-full h-5 bg-gradient-to-b from-transparent via-gold to-transparent"
                  />
                </div>
              </div>

              {/* Phase 03 */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="group relative border border-white/10 bg-white/[0.03] backdrop-blur-md p-7 flex items-center gap-6 hover:border-gold/50 hover:bg-white/[0.06] transition-all duration-300 shadow-2xl"
              >
                <div className="flex-shrink-0 w-14 h-14 border border-white/10 bg-black/60 flex items-center justify-center group-hover:border-gold group-hover:shadow-[0_0_15px_rgba(212,175,55,0.2)] transition-all">
                  <ShieldCheck className="w-6 h-6 text-gold" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[15px] font-mono tracking-[0.2em] text-gold/80 uppercase mb-1.5 flex items-center justify-between">
                    Phase 03
                    <motion.span
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                      className="w-1.5 h-1.5 rounded-full bg-gold inline-block"
                    />
                  </p>
                  <p className="text-base lg:text-lg font-bold text-white truncate">Voishift Proof Gated Rollout</p>
                  <p className="text-[12px] lg:text-xs font-medium text-white/50 mt-1">Proof Gated Production + Drift Monitoring</p>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}