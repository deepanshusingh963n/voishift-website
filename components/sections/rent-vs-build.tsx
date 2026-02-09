"use client"

import { motion } from "framer-motion"
import { Check, AlertCircle, Database, RefreshCw, FileSearch, BarChart3, Lock, Shield, Zap, Cpu, Box, Activity } from "lucide-react"

const rentFine = [
  "You need speed",
  "The agent only answers",
  "No actions. No exceptions. No downstream impact.",
]

const rentRisk = [
  "The agent can act",
  "Rules change",
  "Exceptions appear",
  "Teams disagree",
  "No one can explain why it did what it did",
]

const minimumOwnership = [
  { text: "One agreed source of truth", icon: Database },
  { text: "A clear change process when rules shift", icon: RefreshCw },
  { text: "Proof of what the agent relied on", icon: FileSearch },
  { text: "A way to measure drift before users feel it", icon: BarChart3 },
]

/* --- v2.2 Refined Technical Illustrations --- */

const FragileInterfaceVisual = () => (
  <div className="relative w-full aspect-square max-w-[150px] mx-auto group">
    {/* Speaker Mesh Visual */}
    <div className="absolute inset-0 bg-[#f8f7f2] rounded-full border border-sand shadow-inner flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-[0.1] bg-[radial-gradient(circle,currentColor_1px,transparent_1px)] bg-[size:10px_10px] text-warm-gray" />
      <div className="w-3/4 h-3/4 rounded-full border border-gold/10 flex items-center justify-center">
        <div className="w-1/2 h-1/2 rounded-full bg-white border border-sand shadow-lg flex items-center justify-center">
          <Activity className="w-8 h-8 text-warm-gray/20" />
        </div>
      </div>
    </div>

    {/* Red Logic Sparks (Failures) */}
    {[...Array(4)].map((_, i) => {
      // Deterministic positioning for SSR compatibility
      const seed = i * 23.7;
      const top = 30 + ((seed * 1.3) % 40);
      const left = 30 + ((seed * 1.7) % 40);

      return (
        <motion.div
          key={i}
          animate={{
            scale: [0, 1.5, 0],
            opacity: [0, 1, 0],
            rotate: [0, 90]
          }}
          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.4 }}
          className="absolute text-red-400 font-bold text-xs"
          style={{
            top: `${top}%`,
            left: `${left}%`
          }}
        >
          ×
        </motion.div>
      );
    })}

    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-white/80 backdrop-blur px-3 py-1 rounded-full border border-sand shadow-sm">
      <div className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
      <span className="text-[9px] font-black text-warm-gray/40 uppercase tracking-widest">Interface_Only</span>
    </div>
  </div>
)

const SolidFoundationVisual = () => (
  <div className="relative w-full aspect-square max-w-[150px] mx-auto group">
    {/* Hex-Grid Foundation */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-full h-full opacity-[0.05] absolute inset-0 text-gold translate-y-4">
        <Cpu className="w-full h-full rotate-45 scale-110" />
      </div>

      {/* Central Solid Core */}
      <div className="relative w-40 h-40">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 border-2 border-gold/20 border-dashed rounded-[2.5rem]"
        />
        <div className="absolute inset-4 bg-white rounded-[2rem] border-2 border-gold/30 shadow-2xl flex items-center justify-center">
          <div className="relative">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-gold/20 blur-xl rounded-full"
            />
            <Shield className="w-12 h-12 text-gold relative z-10" />
          </div>
        </div>
      </div>
    </div>

    {/* Pulse packets */}
    {[0, 120, 240].map(angle => (
      <motion.div
        key={angle}
        animate={{
          rotate: angle + 360,
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 pointer-events-none"
      >
        <motion.div
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-2 h-2 rounded-full bg-gold shadow-[0_0_10px_gold] absolute top-0 left-1/2 -translate-x-1/2"
        />
      </motion.div>
    ))}

    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-white/80 backdrop-blur px-3 py-1 rounded-full border border-gold/20 shadow-sm">
      <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
      <span className="text-[9px] font-black text-gold uppercase tracking-widest">Architected_System</span>
    </div>
  </div>
)

export function RentVsBuild() {
  return (
    <section className="py-14 lg:py-20 bg-cream-light relative overflow-hidden">
      {/* Background Decorative Tech Patterns */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gold/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gold/5 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-warm-gray mb-8 max-w-4xl mx-auto">
            Rent vs build is not the real decision
          </h2>
          <p className="text-xl md:text-2xl text-warm-gray-light font-serif italic max-w-2xl mx-auto">
            You can rent a voice. <br className="hidden md:block" />
            <span className="text-gold not-italic font-bold underline decoration-gold/20">You cannot rent ownership of what is true.</span>
          </p>
        </motion.div>

        {/* Simplified Two-Column Main Layout */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 mb-2">

          {/* THE RENT PATH */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/40 backdrop-blur-sm border border-gold p-10 lg:p-12 shadow-2xl shadow-gold/30 flex flex-col items-center"
          >
            <div className="mb-12 w-full">
              <FragileInterfaceVisual />
            </div>

            <div className="w-full space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center border border-green-100 shadow-sm">
                    <Check className="w-5 h-5 text-green-700" />
                  </div>
                  <h3 className="text-xl font-serif text-warm-gray">When renting is fine</h3>
                </div>
                <ul className="space-y-4 px-2">
                  {rentFine.map((text, i) => (
                    <li key={i} className="flex gap-4 items-start group">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-1">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-warm-gray-light font-medium">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-sand">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center border border-red-100 shadow-sm">
                    <AlertCircle className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="text-xl font-serif text-warm-gray">When renting becomes risk</h3>
                </div>
                <ul className="space-y-2 px-2">
                  {rentRisk.map((text, i) => (
                    <li key={i} className="flex gap-4 items-start group">
                      <div className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center shrink-0 mt-1">
                        <AlertCircle className="w-3 h-3 text-red-400" />
                      </div>
                      <span className="text-warm-gray-light font-medium">{text}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-8 text-sm text-warm-gray/40 italic font-serif flex items-center gap-2">
                  <span className="w-6 h-px bg-red-100" />
                  That is not a tooling problem. That is an ownership problem.
                </p>
              </div>
            </div>
          </motion.div>

          {/* THE BUILD PATH */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white border-2 border-gold/30 p-10 lg:p-12 shadow-2xl flex flex-col items-center"
          >
            <div className="mb-12 w-full">
              <SolidFoundationVisual />
            </div>

            <div className="w-full space-y-8">
              <div>
                <h3 className="text-xl font-serif text-warm-gray mb-1 text-center md:text-left">The minimum ownership line</h3>
                <p className="text-warm-gray-light text-sm italic mb-4 text-center md:text-left">Even if you rent, you still need:</p>

                <div className="grid sm:grid-cols-2 gap-3">
                  {minimumOwnership.map((item, index) => (
                    <div
                      key={index}
                      className="p-3 bg-sand/30 rounded-sm border border-sand group hover:border-gold/40 transition-all shadow-sm"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-white border border-sand flex items-center justify-center flex-shrink-0 group-hover:bg-gold/10 transition-colors">
                          <item.icon className="w-4 h-4 text-gold" />
                        </div>
                        <p className="text-xs font-black text-warm-gray leading-snug">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

              </div>

              <div className="mt-6 pt-6 border-t border-sand text-center md:text-left">
                <div className="relative inline-block mb-8">
                  <p className="text-lg text-warm-gray-light font-serif italic relative z-10 leading-relaxed">
                    Without that, you do not have automation. <br />
                    <span className="text-warm-gray not-italic font-black uppercase tracking-tighter text-xl">You have dependency.</span>
                  </p>
                  <div className="absolute -left-4 -top-4 w-12 h-12 bg-gold/5 rounded-full blur-xl" />
                </div>

                {/* Final verdict panel simplified */}
                <div className="pt-6 border-t-2 border-gold/10">
                  <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
                    <div className="w-8 h-8 rounded-lg bg-gold shadow-[0_0_15px_rgba(212,175,55,0.3)] flex items-center justify-center">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-md text-gold font-serif italic">The question is not "Should we build or buy?"</p>
                  </div>
                  <h4 className="text-md md:text-lg font-serif font-black text-warm-gray text-center md:text-left">
                    "When this goes wrong, who actually knows why?"
                  </h4>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
