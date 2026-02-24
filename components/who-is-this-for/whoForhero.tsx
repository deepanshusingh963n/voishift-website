"use client"

import { motion } from "framer-motion"
import { ArrowRight, Filter, ShieldAlert, CheckCircle2, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useModal } from "@/context/modal-context"

export default function WhoForHero() {
  const { openModal } = useModal()

  const criteria = [
    { text: "Predictable behavior under pressure", icon: CheckCircle2, allowed: true },
    { text: "Hard guardrails & policy logic", icon: CheckCircle2, allowed: true },
    { text: "Full traceability & decision logs", icon: CheckCircle2, allowed: true },
    { text: "Proof-gated modular rollouts", icon: CheckCircle2, allowed: true },
    { text: "Unverified 'quick' agent demos", icon: XCircle, allowed: false },
    { text: "Non-deterministic black-box launches", icon: XCircle, allowed: false },
  ]

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <svg width="100%" height="100%">
          <pattern id="grid-filter" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid-filter)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-24 items-start">
          
          <div>
            

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl lg:text-8xl font-serif text-gold font-black leading-[1.05] tracking-tight mb-8"
            >
              Who is this for
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8 mb-12"
            >
              <p className="text-xl lg:text-3xl text-warm-gray font-serif italic leading-tight">
                This is a filter page. <span className="text-gold not-italic font-black uppercase tracking-widest ml-1">Not a sales pitch.</span>
              </p>
              
              <div className="p-8 bg-[#faf9f6] border-l-4 border-gold rounded-none relative overflow-hidden">
                 {/* Subtle warning icon in bg */}
                 <ShieldAlert className="absolute top-1/2 right-4 -translate-y-1/2 w-32 h-32 text-gold/5" />
                 
                 <p className="text-xl lg:text-2xl text-warm-gray font-serif leading-relaxed relative z-10">
                   "Not everyone should use voice AI yet."
                 </p>
                 <p className="mt-4 text-warm-gray-light font-serif italic text-lg relative z-10">
                   VoiShift is for operators who want voice AI that behaves predictably under pressure, with guardrails, traceability, and proof gates.
                 </p>
              </div>

              <div className="p-8 bg-red-50/50 border border-red-100 rounded-none">
                <p className="text-lg text-red-900/70 font-serif italic">
                  If you want a quick agent demo and a big launch, <span className="font-black text-red-600 uppercase tracking-widest not-italic">stop here.</span>
                </p>
              </div>
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
                Book Strategy Session
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="heroSecondary"
                size="lg"
                asChild
                className="rounded-none px-8 py-7 text-lg border-2"
              >
                <a href="/how-it-works">
                  How It Works
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Visual Filter Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative lg:mt-12"
          >
            <div className="bg-[#1a1a1a] p-10 lg:p-12 border-2 border-gold/30 shadow-2xl rounded-none relative overflow-hidden">
               {/* Animated HUD Detail */}
               <div className="absolute top-0 right-0 p-6 flex gap-2">
                 <div className="w-2 h-2 rounded-none bg-gold animate-pulse" />
                 <div className="w-2 h-2 rounded-none bg-gold/30" />
               </div>

               <h3 className="text-xs font-black text-gold uppercase tracking-[0.4em] mb-12">
                 Filter_Criteria_Array
               </h3>

               <div className="space-y-6">
                 {criteria.map((item, i) => (
                   <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    className={`flex items-start gap-4 p-4 border ${item.allowed ? 'border-gold/20 bg-gold/5' : 'border-red-500/20 bg-red-500/5'} rounded-none group transition-colors`}
                   >
                     <item.icon className={`w-5 h-5 mt-0.5 ${item.allowed ? 'text-gold' : 'text-red-500'}`} />
                     <span className={`text-sm font-bold uppercase tracking-wide ${item.allowed ? 'text-white/80' : 'text-white/40 line-through'}`}>
                       {item.text}
                     </span>
                   </motion.div>
                 ))}
               </div>

               <div className="mt-12 pt-12 border-t border-white/10">
                 <div className="flex justify-between items-end">
                   <div>
                     <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.4em] mb-2">Operational_Fit</p>
                     <p className="text-2xl font-serif text-gold">High_Risk_Hardened</p>
                   </div>
                   <div className="text-right">
                     <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.4em] mb-2">Integrity_Check</p>
                     <p className="text-2xl font-serif text-white">READY</p>
                   </div>
                 </div>
               </div>

               {/* Scanning Line */}
               <motion.div 
                animate={{ top: ["0%", "100%", "0%"] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 right-0 h-px bg-gold/20 pointer-events-none"
               />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
