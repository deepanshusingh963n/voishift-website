"use client"

import { motion } from "framer-motion"
import { ArrowRight, Cpu, Zap, ShieldCheck, Activity, Terminal } from "lucide-react"
import React from "react"
import { cn } from "@/lib/utils"
import { useModal } from "@/context/modal-context"

const VoiceAISimulation = () => {
  const transcript = "I need to reschedule a shipment for tomorrow."

  return (
    <div className="relative w-full max-w-[420px] aspect-[4/5] flex items-center justify-center">
      <div className="relative w-full bg-white border border-sand rounded-3xl shadow-2xl p-6 overflow-hidden">

        {/* CALL HEADER */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex flex-col">
            <span className="text-[10px] font-mono text-warm-gray/40 uppercase tracking-widest">
              Inbound: Logistics Client
            </span>
            <span className="text-xs font-black text-gold uppercase tracking-wider">
              LIVE
            </span>
          </div>

          <motion.div
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-3 h-3 rounded-full bg-gold"
          />
        </div>

        {/* WAVEFORM */}
        <div className="flex items-end gap-[3px] h-12 mb-6">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                height: ["20%", "100%", "30%", "80%", "40%"]
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: i * 0.05
              }}
              className="w-[3px] bg-gold/70 rounded-full"
            />
          ))}
        </div>

        {/* TRANSCRIPT */}
        <div className="mb-6">
          <span className="text-[9px] font-black text-warm-gray/30 uppercase tracking-widest">
            Live Transcript
          </span>

          <motion.p
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 3 }}
            viewport={{ once: true }}
            className="text-sm font-serif italic text-warm-gray mt-2 whitespace-nowrap overflow-hidden border-r border-gold pr-1"
          >
            {transcript}
          </motion.p>
        </div>

        {/* AI ANALYSIS TAGS */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {[
            { label: "Intent", value: "Reschedule_Order" },
            { label: "Sentiment", value: "Neutral" },
            { label: "Compliance", value: "Verified" },
            { label: "Risk", value: "Low" }
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="border border-sand rounded-xl p-3 bg-gold/5"
            >
              <span className="block text-[8px] font-black text-warm-gray/40 uppercase tracking-widest">
                {item.label}
              </span>
              <span className="text-[10px] font-mono font-bold text-warm-gray">
                {item.value}
              </span>
            </motion.div>
          ))}
        </div>

        {/* DECISION FLOW */}
        <div className="flex flex-col gap-3 mb-6">
          {[
            "Intent Classified",
            "Routing to Logistics API",
            "Confirmation Sent"
          ].map((step, i) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.3 }}
              viewport={{ once: true }}
              className="flex items-center gap-3"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.3 }}
                className="w-2 h-2 rounded-full bg-gold"
              />
              <span className="text-[10px] font-mono text-warm-gray">
                {step}
              </span>
            </motion.div>
          ))}
        </div>

        {/* OUTCOME */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          viewport={{ once: true }}
          className="border-t border-sand pt-4"
        >
          <span className="block text-[8px] font-black text-warm-gray/30 uppercase tracking-widest mb-2">
            Resolution
          </span>

          <div className="flex items-center justify-between text-[10px] font-mono font-bold text-warm-gray">
            <span>Resolved in 47s</span>
            <span className="text-gold">SLA Maintained</span>
          </div>
        </motion.div>
      </div>
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
            <VoiceAISimulation />


          </motion.div>

        </div>
      </div>
    </section>
  )
}
