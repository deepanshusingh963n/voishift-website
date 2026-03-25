"use client"

import { motion } from "framer-motion"
import { AlertTriangle, Search, TrendingUp, Activity } from "lucide-react"

const failureDetails = {
  what: "The rented AI sounded confident. The outcome was wrong.",
  broke: [
    "Two sources disagreed",
    "An exception was missing",
    "The rented AI guessed and kept going",
  ],
  changed: [
    "Truth was locked",
    "Refusal was defined",
    "Actions were gated",
  ],
  improved: [
    "Fewer repeat calls",
    "Fewer cleanups",
    "Fewer escalations",
    "Faster resolution when things got messy",
  ],
}

/* --- v2.0 Forensic Path Components --- */

const ForensicTrace = () => (
  <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-sand hidden lg:block">
    <motion.div
      animate={{ top: ["0%", "100%"] }}
      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      className="absolute w-1 h-32 bg-gradient-to-b from-transparent via-gold to-transparent -translate-x-1/2"
    />
  </div>
)

export function Proof() {
  return (
    <section id="proof" className="py-20 lg:py-20 bg-white relative overflow-hidden">
      {/* Background Subtle Elements */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sand to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-gold uppercase font-black leading-[1.1] mb-8 text-balance max-w-4xl mx-auto">
            Proof that holds up
          </h2>
          <p className="text-xl md:text-2xl text-warm-gray-light font-serif italic max-w-2xl mx-auto">
            We do not bring opinions. <br className="hidden md:block" />
            <span className="text-warm-gray not-italic font-bold underline decoration-gold/30">We bring evidence from <span className="not-italic font-black text-gold uppercase tracking-[0.15rem]"> your own </span>reality.</span>
          </p>
        </motion.div>

        {/* FORENSIC TIMELINE REPLAY */}
        <div className="relative mb-10">
          <ForensicTrace />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">

            {/* Step 1: Failure */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="group"
            >
              <div className="p-8 bg-red-50/30 border border-red-100 flex flex-col h-full hover:shadow-lg transition-all duration-500">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-none bg-red-500 text-white flex items-center justify-center shadow-lg shadow-red-200">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-black text-red-600 uppercase tracking-widest">Failure_Log</span>
                </div>
                <p className="text-lg text-warm-gray leading-snug font-serif italic mb-6">"{failureDetails.what}"</p>
                <div className="mt-auto pt-6 border-t border-red-100/50">
                  <div className="flex items-center gap-2 opacity-30">
                    <div className="w-1.5 h-1.5 rounded-none bg-red-500" />
                    <span className="text-[8px] font-bold uppercase">System_Interrupt</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Step 2: Root Cause */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="p-8 bg-[#faf9f6] border border-sand flex flex-col h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-none bg-warm-gray text-white flex items-center justify-center">
                    <Search className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-black text-warm-gray-light uppercase tracking-widest">Root_Cause</span>
                </div>
                <ul className="space-y-4">
                  {failureDetails.broke.map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-warm-gray font-medium leading-relaxed">
                      <span className="text-gold mt-1 text-[10px]">0{i + 1}</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Step 3: Resolution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="p-8 bg-gold/5 border border-gold/20 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-none bg-white border border-sand flex items-center justify-center shadow-sm relative z-10">
                    <Activity className="w-6 h-6 text-gold" />
                  </div>
                  <span className="text-[10px] font-black text-gold uppercase tracking-widest">Resolution</span>
                </div>
                <ul className="space-y-4">
                  {failureDetails.changed.map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-warm-gray font-bold leading-relaxed">
                      <CheckCircleIcon className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Step 4: Outcome */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="p-8 bg-green-50/50 border border-green-100 flex flex-col h-full shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-none bg-green-600 text-white flex items-center justify-center shadow-lg shadow-green-100">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-black text-green-700 uppercase tracking-widest">Outcome</span>
                </div>
                <ul className="space-y-4">
                  {failureDetails.improved.map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-green-900 font-bold leading-tight">
                      <div className="w-1.5 h-1.5 rounded-none bg-green-400 mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  )
}

function CheckCircleIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
}
