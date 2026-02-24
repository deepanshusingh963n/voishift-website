"use client"

import { motion } from "framer-motion"
import { ArrowRight, Cpu, Zap, ShieldCheck, Activity, Terminal } from "lucide-react"
import React from "react"
import { cn } from "@/lib/utils"
import { useModal } from "@/context/modal-context"

const ActiveCore = () => {
  return (
    <div className="relative w-full max-w-[400px] aspect-square flex items-center justify-center group/core_simulation">
      {/* Outer Technical Frame */}
      <div className="absolute inset-0 border border-gold/5 rounded-full" />
      <div className="absolute inset-[10%] border border-dashed border-gold/10 rounded-full animate-[spin_60s_linear_infinite]" />

      {/* Revolving Data Rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[15%] border-t-2 border-l-2 border-gold/20 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[20%] border-b-2 border-r-2 border-gold/10 rounded-full border-dashed"
      />

      {/* Central Command Engine */}
      <div className="relative w-56 h-56 rounded-full bg-white border-2 border-sand shadow-[0_0_50px_rgba(212,175,55,0.1)] flex items-center justify-center overflow-hidden group/engine transition-all duration-700 group-hover/core_simulation:shadow-[0_0_80px_rgba(212,175,55,0.2)] group-hover/core_simulation:border-gold/30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,theme(colors.gold/10)_0%,transparent_70%)]" />

        {/* Core Geometry */}
        <div className="relative z-10 w-24 h-24 flex items-center justify-center">
          <div className="absolute inset-0 bg-gold/5 rounded-xl rotate-45 animate-pulse" />
          <Cpu className="w-12 h-12 text-gold relative z-10" />

          {/* Hexagonal Shield */}
          <svg className="absolute inset-0 w-full h-full text-gold/20" viewBox="0 0 100 100">
            <motion.polygon
              points="50,5 95,25 95,75 50,95 5,75 5,25"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              animate={{ opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </svg>
        </div>

        {/* Orbitations */}
        {[0, 120, 240].map((angle) => (
          <motion.div
            key={angle}
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute inset-4"
            style={{ rotate: angle }}
          >
            <div className="w-2 h-2 bg-gold rounded-full shadow-[0_0_15px_theme(colors.gold)]" />
          </motion.div>
        ))}

        {/* Dynamic Scanning Matrix */}
        <motion.div
          animate={{ top: ["-10%", "110%"] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-x-0 h-4 bg-gradient-to-b from-transparent via-gold/20 to-transparent opacity-50"
        />
      </div>

      {/* Neural Connection Grid */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="photonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="gold" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>

        <path d="M 10 10 L 35 35 M 90 10 L 65 35 M 10 90 L 35 65 M 90 90 L 65 65" stroke="theme(colors.sand/30)" strokeWidth="0.1" />

        {/* Animated "Photons" */}
        {[
          "M 10 10 L 35 35",
          "M 90 10 L 65 35",
          "M 10 90 L 35 65",
          "M 90 90 L 65 65"
        ].map((d, i) => (
          <motion.path
            key={i}
            d={d}
            stroke="url(#photonGradient)"
            strokeWidth="0.5"
            fill="none"
            initial={{ pathLength: 0.2, pathOffset: 0 }}
            animate={{ pathOffset: [0, 1] }}
            transition={{ duration: 2 + i, repeat: Infinity, ease: "linear" }}
          />
        ))}
      </svg>

      {/* High-Contrast HUD Markers */}
      <div className="absolute top-0 left-0 p-2 text-[9px] font-mono text-gold flex flex-col gap-1">
        <span>LAT: 40.7128N</span>
        <span>LNG: 74.0060W</span>
      </div>
      <div className="absolute top-0 right-0 p-2 text-[9px] font-mono text-gold text-right flex flex-col gap-1">
        <span>CORE_TEMP: 32°C</span>
        <span>LOAD: OPTIMAL</span>
      </div>
      <div className="absolute bottom-0 right-0 p-2 text-[9px] font-mono text-gold text-right">
        <span>REF_ARCH: VS_09X</span>
      </div>

      <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-gold/80 rounded-tr-3xl transition-all duration-500 group-hover/core_simulation:w-20 group-hover/core_simulation:h-20" />
      <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-gold/80 rounded-bl-3xl transition-all duration-500 group-hover/core_simulation:w-20 group-hover/core_simulation:h-20" />
    </div>
  )
}

export function CaseStudiesCTA() {
  const { openModal } = useModal()

  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden border-t border-sand">
      {/* Blueprint Grid Backdrop */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.sand/10)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.sand/10)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sand to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Narrative Content */}
          <div className="flex-1 text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/5 border border-gold/10 rounded-full mb-8">
                <Zap className="w-3 h-3 text-gold" />
                <span className="text-[10px] font-black tracking-[0.3em] text-gold uppercase">Readiness Protocol</span>
              </div>

              <h2 className="font-serif text-4xl md:text-6xl text-warm-gray mb-8 tracking-tighter leading-[0.9]">
                Ready to Build Voice AI That <br />
                <span className="text-gold italic">Holds Up?</span>
              </h2>

              <p className="text-xl text-warm-gray-light mb-12 max-w-xl font-serif italic leading-relaxed">
                "See how your voice AI could work. No demos. No hype. Just the clarity you need to decide."
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                {/* Tactical Console Buttons */}
                <button
                  onClick={openModal}
                  className="group relative flex flex-col items-center justify-center gap-1 px-8 py-5 bg-[#1a1a1a] text-white rounded-2xl transition-all duration-500 hover:bg-gold hover:text-[#1a1a1a] overflow-hidden"
                >
                  <span className="text-[9px] font-mono opacity-40 group-hover:opacity-100 transition-opacity">EXECUTE::STRATEGY_SESSION</span>
                  <div className="flex items-center gap-3">
                    <span className="font-black uppercase tracking-widest text-sm">Strategy Session</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </div>
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                </button>

                <button
                  onClick={openModal}
                  className="group relative flex flex-col items-center justify-center gap-1 px-8 py-5 border-2 border-gold text-gold rounded-2xl transition-all duration-500 hover:bg-gold/5 overflow-hidden"
                >
                  <span className="text-[9px] font-mono opacity-40">INITIATE::STRESS_TEST</span>
                  <div className="flex items-center gap-3">
                    <span className="font-black uppercase tracking-widest text-sm">Voice AI Stress Test</span>
                    <ShieldCheck className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  </div>
                </button>
              </div>

              <div className="flex items-center gap-4 text-warm-gray/40">
                <Activity className="w-4 h-4" />
                <p className="text-[10px] font-black uppercase tracking-[0.2em]">
                  No sales decks. No pressure. Just clarity.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Active Core Simulation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex-shrink-0 relative"
          >
            <ActiveCore />

            {/* Simulation Metadata */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-full max-w-[280px] bg-white border border-sand p-4 rounded-xl shadow-xl flex items-center gap-4">
              <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center text-gold">
                <Terminal className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[8px] font-black text-warm-gray/30 uppercase tracking-widest">Simulation_Status</span>
                <span className="text-[10px] font-mono font-bold text-warm-gray">LOADED::REBUILDER_ENGINE_V4</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
