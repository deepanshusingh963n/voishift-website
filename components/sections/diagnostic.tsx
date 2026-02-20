"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ClipboardCheck, AlertTriangle, Target, Shield, DollarSign, ArrowRight, Map, Gauge, Activity, Cpu, Search, Layers, Clock, Lock, Share2, Binary, Database, Zap } from "lucide-react"
import { useModal } from "@/context/modal-context"

const questionTopics = [
  {
    text: "If your agent is unsure, can you show exactly where it will guess today?",
    icon: Search,
    visual: () => (
      <div className="flex items-center gap-1.5 bg-gold/5 px-2 py-0.5 rounded-full border border-gold/10">
        <span className="text-[8px] font-black text-gold">PROB_SCAN: 68%</span>
      </div>
    )
  },
  {
    text: "Do you have a written boundary line for what the agent must never do, even if the user pushes?",
    icon: Shield,
    visual: () => (
      <div className="flex gap-0.5">
        <div className="w-4 h-1 bg-red-500/40 rounded-full" />
        <div className="w-1 h-1 bg-red-500 rounded-full" />
      </div>
    )
  },
  {
    text: "Does your team have a simple pass or fail trust grade before you let it talk to real users?",
    icon: Gauge,
    visual: () => (
      <div className="flex items-center gap-1.5 bg-green-500/5 px-2 py-0.5 rounded-full border border-green-500/10">
        <span className="text-[8px] font-black text-green-500">GRADE_A</span>
      </div>
    )
  },
  {
    text: "If the user stays silent for 4+ seconds, does the agent know what to do next without awkward looping?",
    icon: AlertTriangle,
    visual: () => (
      <div className="flex gap-1 items-center h-4">
        {[1, 0.4, 0.1, 0.05, 0.1, 0.4, 1].map((h, i) => (
          <motion.div
            key={i}
            animate={{ height: ["20%", "100%", "20%"] }}
            transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
            className={`w-1 rounded-full ${i === 3 ? 'bg-red-400' : 'bg-gold/30'}`}
          />
        ))}
      </div>
    )
  },
  {
    text: "If the agent gives a wrong answer, can you trace exactly why that answer was given?",
    icon: Target,
    visual: () => (
      <div className="flex gap-1 items-center">
        <Share2 className="w-3 h-3 text-gold/40" />
        <div className="flex gap-0.5">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
              className="w-1.5 h-1.5 rounded-full bg-gold"
            />
          ))}
        </div>
      </div>
    )
  },
  {
    text: "Is your end-to-end response time under 800ms for 99% of calls?",
    icon: Clock,
    visual: () => (
      <div className="flex items-center gap-1.5 bg-gold/5 px-2 py-0.5 rounded-full border border-gold/10">
        <Clock className="w-2.5 h-2.5 text-gold" />
        <span className="text-[8px] font-black text-gold">742ms</span>
      </div>
    )
  },
  {
    text: "Do you remove or mask PII before anything is sent to the model?",
    icon: Lock,
    visual: () => (
      <div className="flex items-center gap-1 text-[8px] font-mono text-warm-gray/30">
        <motion.span
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className="bg-warm-gray/10 px-1 rounded"
        >
          ****
        </motion.span>
        <Lock className="w-2.5 h-2.5 text-green-500/50" />
      </div>
    )
  },
  {
    text: "Can you update a policy today without retraining anything, and know the change actually took effect?",
    icon: Zap,
    visual: () => (
      <div className="flex items-center gap-1">
        <motion.div
          animate={{ rotate: 180 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-3 h-3 border border-gold/30 rounded-sm"
        />
        <span className="text-[7px] font-black text-gold uppercase tracking-tighter">HOT_RELOAD</span>
      </div>
    )
  },
]



export function Diagnostic() {
  const { openModal } = useModal()
  const [activeSpeed, setActiveSpeed] = useState(1)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section id="diagnostic" className="py-24 lg:py-32 bg-cream-light relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gold/5 blur-[160px] rounded-full translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gold/5 blur-[160px] rounded-full -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Elite Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl text-warm-gray leading-[0.95] mb-8 text-balance max-w-5xl mx-auto tracking-tighter">
            A quick reality check
          </h2>
          <p className="text-xl md:text-2xl text-warm-gray-light font-serif italic max-w-2xl mx-auto">
            Before you book anything, answer five questions. <br className="hidden md:block" />
            <span className="text-warm-gray not-italic font-black uppercase tracking-tighter decoration-gold/20">Not about tools. About behavior.</span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white border-2 border-gold p-8 lg:p-12 shadow-sm space-y-6"
          >
            {questionTopics.slice(0, 4).map((topic, index) => (
              <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-cream-dark transition-colors group">
                <div className="w-8 h-8 bg-white flex items-center justify-center shrink-0 mt-1 group-hover:bg-gold transition-colors duration-500">
                  <topic.icon className="w-4 h-4 text-gold group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1 space-y-2">
                  <p className="text-md font-bold text-warm-gray leading-snug">{topic.text}</p>
                  
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white border-2 border-gold p-8 lg:p-12 shadow-sm space-y-6"
          >
            {questionTopics.slice(4, 8).map((topic, index) => (
              <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-cream-dark transition-colors group">
                <div className="w-8 h-8 bg-white flex items-center justify-center shrink-0 mt-1 group-hover:bg-gold transition-colors duration-500">
                  <topic.icon className="w-4 h-4 text-gold group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1 space-y-2">
                  <p className="text-md font-bold text-warm-gray leading-snug">{topic.text}</p>
                  
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-12"
        >
          <p className="text-2xl md:text-3xl text-warm-gray-light font-serif italic max-w-2xl mx-auto">
            If the output feels uncomfortable, <br className="hidden md:block" />
            <span className="text-warm-gray not-italic font-black uppercase tracking-tighter text-4xl md:text-5xl">good. That is the point.</span>
          </p>

          <div className="max-w-xl mx-auto group" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <Button
              size="lg"
              className="w-full py-12 text-2xl md:text-3xl bg-[#1a1a1a] text-white hover:bg-white hover:text-[#1a1a1a] border-2 border-[#1a1a1a] rounded-[3rem] shadow-2xl active:scale-[0.97] transition-all duration-700 font-serif relative overflow-hidden"
              onClick={openModal}
            >
              <AnimatePresence mode="wait">
                {isHovered ? (
                  <motion.div
                    key="init"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-4"
                  >
                    <Zap className="w-8 h-8 text-gold animate-pulse" />
                    Initialize Diagnostic
                  </motion.div>
                ) : (
                  <motion.div
                    key="default"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-4"
                  >
                    Continue to Diagnostic
                    <ArrowRight className="w-8 h-8 text-gold transition-transform group-hover:translate-x-3" />
                  </motion.div>
                )}
              </AnimatePresence>
              <motion.div
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
              />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
