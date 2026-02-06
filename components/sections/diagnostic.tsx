"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ClipboardCheck, AlertTriangle, Target, Shield, DollarSign, ArrowRight, Map, Gauge, Activity, Cpu, Search, Layers, Clock, Lock, Share2, Binary, Database, Zap } from "lucide-react"
import { useModal } from "@/context/modal-context"

const questionTopics = [
  {
    text: "Does your bot have a fallback for silence longer than 4 seconds?",
    icon: AlertTriangle,
    id: "PROBE_01_SILENCE",
    bgIcon: AlertTriangle,
    pulseSpeed: 1.5,
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
        <span className="text-[6px] font-black text-red-500 ml-1">GAP_DETECTED</span>
      </div>
    )
  },
  {
    text: "Can you trace exactly why a specific answer was given?",
    icon: Target,
    id: "PROBE_02_TRACE",
    bgIcon: Share2,
    pulseSpeed: 1,
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
    text: "Is your latency under 800ms for 99% of calls?",
    icon: Shield,
    id: "PROBE_03_LATENCY",
    bgIcon: Clock,
    pulseSpeed: 0.5,
    visual: () => (
      <div className="flex items-center gap-1.5 bg-gold/5 px-2 py-0.5 rounded-full border border-gold/10">
        <Clock className="w-2.5 h-2.5 text-gold-dark" />
        <span className="text-[8px] font-black text-gold-dark">742ms</span>
      </div>
    )
  },
  {
    text: "Do you filter PII before it hits the LLM?",
    icon: ClipboardCheck,
    id: "PROBE_04_PII",
    bgIcon: Shield,
    pulseSpeed: 2,
    visual: () => (
      <div className="flex items-center gap-1 text-[8px] font-mono text-warm-gray/30">
        <span>ID:</span>
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
    text: "Can you update a policy without retraining the model?",
    icon: DollarSign,
    id: "PROBE_05_POLICY",
    bgIcon: Database,
    pulseSpeed: 0.8,
    visual: () => (
      <div className="flex items-center gap-1">
        <Binary className="w-3 h-3 text-gold/40" />
        <motion.div
          animate={{ rotate: 180 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-3 h-3 border border-gold/30 rounded-sm"
        />
        <span className="text-[7px] font-black text-gold-dark uppercase tracking-tighter">HOT_RELOAD</span>
      </div>
    )
  },
]

const outputs = [
  { text: "A risk map of where your agent will guess", icon: Map },
  { text: "A boundary line of what it should not do", icon: Shield },
  { text: "A simple trust grade you can share internally", icon: Gauge },
]

/* --- v2.2 Ultra-High Fidelity Visuals --- */

const SystemPulseAnalysis = ({ speed = 1 }: { speed?: number }) => (
  <div className="relative w-full aspect-video bg-white rounded-[2.5rem] border-2 border-sand shadow-inner overflow-hidden group">
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]" />

    {/* Frequency Waveform */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="flex items-end gap-[1px] h-32 w-full px-4">
        {[...Array(80)].map((_, i) => {
          // Deterministic seeded values for SSR compatibility
          const seed = i * 17.3;
          const height1 = 20 + ((seed * 1.1) % 60);
          const height2 = 10 + ((seed * 0.9) % 40);
          const duration = (0.5 + ((i * 0.13) % 1)) / speed;

          return (
            <motion.div
              key={i}
              initial={{ height: "10%" }}
              animate={{
                height: [`${height1}%`, `${height2}%`],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{
                duration,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="flex-1 bg-gradient-to-t from-gold/5 via-gold/30 to-gold/60 rounded-t-full"
            />
          );
        })}
      </div>
    </div>

    {/* Scanning Line Overlay */}
    <motion.div
      animate={{ left: ["-10%", "110%"] }}
      transition={{ duration: 3 / speed, repeat: Infinity, ease: "linear" }}
      className="absolute top-0 bottom-0 w-24 bg-gradient-to-r from-transparent via-gold/10 to-transparent skew-x-12"
    />

    <div className="absolute top-6 left-8 flex items-center gap-3">
      <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse shadow-[0_0_15px_gold]" />
      <span className="text-[10px] font-black text-warm-gray uppercase tracking-[0.4em]">Integrated_Audit_Stream</span>
    </div>

    <div className="absolute top-6 right-8">
      <span className="text-[8px] font-black text-gold-dark uppercase tracking-widest bg-gold/5 border border-gold/10 px-2 py-0.5 rounded-md">
        Active_Mode: {speed === 1 ? "STABLE" : "PROBE_DETECTION"}
      </span>
    </div>
  </div>
)

const EngineeringReport = () => (
  <div className="bg-[#faf9f6]/80 backdrop-blur-md rounded-[3rem] border-2 border-sand p-8 lg:p-10 shadow-xl relative overflow-hidden group">
    {/* Verification Stamp Animation */}
    <motion.div
      initial={{ scale: 3, opacity: 0, rotate: -45 }}
      whileInView={{ scale: 1, opacity: 0.1, rotate: -15 }}
      transition={{ duration: 0.8, type: "spring", damping: 10 }}
      className="absolute -top-4 -right-4 text-gold-dark font-black border-8 border-gold-dark p-6 rounded-2xl text-7xl pointer-events-none select-none"
    >
      VERIFIED
    </motion.div>

    <div className="flex items-center justify-between mb-12 relative z-10">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-[1.25rem] bg-white border-2 border-gold/20 flex items-center justify-center shadow-sm group-hover:bg-gold transition-colors duration-500">
          <Activity className="w-6 h-6 text-gold-dark group-hover:text-white transition-colors" />
        </div>
        <div>
          <p className="text-[10px] font-black text-warm-gray/40 uppercase tracking-widest">Report_Classification</p>
          <p className="text-sm font-bold text-warm-gray tracking-tight tracking-tighter">VSH_ENGINEERING_AUDIT_2025</p>
        </div>
      </div>
    </div>

    <div className="space-y-6 mb-12 relative z-10">
      {outputs.map((output, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex flex-col gap-2 group/row"
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <output.icon className="w-4 h-4 text-gold-dark" />
              <span className="text-[12px] font-black text-warm-gray uppercase tracking-widest">{output.text}</span>
            </div>
            <span className="text-[10px] font-mono text-gold-dark/50">AVAILABLE_ASYNC</span>
          </div>
          <div className="w-full h-[1px] bg-gradient-to-r from-sand via-gold/10 to-transparent" />
        </motion.div>
      ))}
    </div>

    <div className="grid grid-cols-3 gap-2 mb-8 relative z-10">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="h-1 bg-gold/10 rounded-full overflow-hidden">
          <motion.div
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
            className="w-1/2 h-full bg-gold/40"
          />
        </div>
      ))}
    </div>

    <div className="bg-white/60 backdrop-blur rounded-[2rem] border border-sand p-6 text-center shadow-inner group/quote">
      <p className="text-[13px] text-warm-gray-light italic font-serif leading-relaxed">
        "No pitch. No demo. <br className="md:hidden" /> <span className="text-warm-gray not-italic font-black uppercase tracking-tighter">Just clarity you can act on.</span>"
      </p>
    </div>
  </div>
)

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
          <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-white border border-sand rounded-full mb-8 shadow-sm">
            <Activity className="w-4 h-4 text-gold" />
            <span className="text-[11px] font-black tracking-[0.3em] text-warm-gray uppercase">System_Veracity_Probe</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl text-warm-gray leading-[0.95] mb-8 text-balance max-w-5xl mx-auto tracking-tighter">
            A five-question reality check
          </h2>
          <p className="text-xl md:text-2xl text-warm-gray-light font-serif italic max-w-2xl mx-auto">
            Before you book anything, answer five questions. <br className="hidden md:block" />
            <span className="text-warm-gray not-italic font-black uppercase tracking-tighter decoration-gold/20">Not about tools. About behavior.</span>
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-stretch">

          {/* THE PROBES (LEFT) */}
          <div className="space-y-12">
            <div className="bg-white rounded-[3.5rem] border-2 border-sand p-10 lg:p-14 shadow-sm relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')]" />

              <h3 className="text-[11px] font-black text-warm-gray/30 uppercase tracking-[0.5em] mb-12 flex items-center gap-6">
                <div className="h-px w-10 bg-sand" />
                Behavioral_Audit_Nodes
              </h3>

              <div className="space-y-5">
                {questionTopics.map((topic, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    onMouseEnter={() => setActiveSpeed(topic.pulseSpeed)}
                    onMouseLeave={() => setActiveSpeed(1)}
                    className="group relative bg-[#faf9f6]/50 rounded-[2.5rem] border border-sand p-7 hover:bg-white hover:border-gold/40 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 overflow-hidden"
                  >
                    {/* Large Background Watermark Icon */}
                    <div className="absolute -bottom-8 -right-8 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-700 pointer-events-none">
                      <topic.bgIcon className="w-48 h-48 text-warm-gray" />
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 relative z-10">
                      <div className="flex items-center gap-6">
                        <div className="w-12 h-12 rounded-2xl bg-white border border-sand flex items-center justify-center shadow-sm group-hover:bg-gold transition-colors duration-500">
                          <topic.icon className="w-6 h-6 text-gold-dark group-hover:text-white transition-colors" />
                        </div>
                        <span className="text-lg font-bold text-warm-gray leading-tight transition-colors group-hover:text-warm-gray-dark max-w-[320px]">{topic.text}</span>
                      </div>
                      <div className="flex items-center justify-end shrink-0">
                        <topic.visual />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="px-12">
              <p className="text-2xl text-warm-gray-light font-serif italic leading-relaxed">
                If the output feels uncomfortable, <br className="hidden md:block" />
                <span className="text-warm-gray not-italic font-black uppercase tracking-tighter text-4xl">good. That is the point.</span>
              </p>
            </div>
          </div>

          {/* THE ANALYSIS (RIGHT) */}
          <div className="space-y-12 flex flex-col">
            <SystemPulseAnalysis speed={activeSpeed} />

            <div className="flex-1 flex flex-col justify-between space-y-12">
              <div>
                <h3 className="text-3xl font-serif text-warm-gray mb-4 tracking-tighter">You answer in minutes.</h3>
                <p className="text-xl text-warm-gray-light font-serif italic mb-10">We return a full engineering report. <span className="text-warm-gray not-italic font-black uppercase tracking-widest text-xs ml-2">Verified_Output: 1X</span></p>
                <EngineeringReport />
              </div>

              <div className="space-y-10 group" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                <div className="relative">
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

                    {/* Scanning Button Overlay */}
                    <motion.div
                      animate={{ x: ["-100%", "200%"] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
                    />
                  </Button>
                </div>

                <div className="flex justify-center gap-12 items-center">
                  <div className="flex items-center gap-3 text-[10px] font-black text-warm-gray/30 uppercase tracking-[0.4em] hover:text-gold transition-colors">
                    <Search className="w-4 h-4" />
                    <span>Zero_Pitch</span>
                  </div>
                  <div className="w-1.5 h-1.5 rounded-full bg-sand" />
                  <div className="flex items-center gap-3 text-[10px] font-black text-warm-gray/30 uppercase tracking-[0.4em] hover:text-gold transition-colors">
                    <Database className="w-4 h-4" />
                    <span>Pure_Strategy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
