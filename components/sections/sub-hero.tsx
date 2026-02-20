"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Brain, Target, AlertTriangle, Briefcase, Truck, Users, Quote, LucideIcon, Zap, Database, Lock, Activity, RefreshCw } from "lucide-react"
import { useModal } from "@/context/modal-context"

const narrativeBlocks = [
  {
    id: 1,
    title: {
      line1: "If your BOT sounds sure,",
      line2: "it can be wrong and still sound sure.",
    },
    content: [
      "If your voice agent can speak fluently, it can also mislead fluently.",
      "If it can talk smoothly, it can lie smoothly.",
      "If it can answer fast, it can mislead fast.",
      "If it can sound human, it can mislead like one.",
    ],
    icon: Shield,
    illustration: "problem",
  },
  {
    id: 2,
    title: "And it does so because...",
    content: [
      "You solved what you could see, not what was causing it.",
      "You built a voice bot, not a system.",
      "You fixed the answers, not what makes them true.",
    ],
    icon: Brain,
    illustration: "pattern",
  },
  {
    id: 3,
    title: "Now the question that decides whether voice AI helps you or hurts you.",
    content: [
      "When it speaks, is it a second brain, or the only brain left?",
      "If you need voice AI automation, you have plenty of choices.",
      "If you need clarity turned into execution, test us.",
    ],
    icon: Target,
    illustration: "stat",
  },
]

/* --- Stage 1: Breach Simulation --- */
const BreachSimulation = () => {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-8 px-4">
      {/* Header HUD */}
      <div className="flex items-center justify-between border-b border-sand pb-4">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-destructive animate-pulse rounded-full" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-warm-gray">System_Integrity_Monitor</span>
        </div>
        <div className="flex gap-4">
          <div className="h-1 w-12 bg-sand/30" />
          <div className="h-1 w-8 bg-sand/30" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 relative">
        {/* Left Side: The "Bot" Voice Interface */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white border border-sand p-6 shadow-xl relative overflow-hidden group"
        >
          <div className="absolute top-0 left-0 w-1 bg-blue-500 h-full" />
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded bg-blue-50 flex items-center justify-center">
              <Activity className="w-4 h-4 text-blue-500" />
            </div>
            <span className="text-[10px] font-black text-warm-gray uppercase tracking-widest">Active_Call_Stream</span>
          </div>
          
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-[10px] text-warm-gray-light font-black uppercase tracking-wider">Customer Inquiry</p>
              <p className="text-sm font-serif italic text-warm-gray leading-relaxed bg-sand/10 p-3">
                "Wait, are you SURE you can deliver by Friday? If not, I lose the project."
              </p>
            </div>
            
            <motion.div 
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="space-y-2"
            >
              <p className="text-[10px] text-blue-500 font-black uppercase tracking-wider">Fluent Bot Response</p>
              <p className="text-sm font-serif text-warm-gray leading-relaxed border-l-2 border-blue-500 pl-4 py-1">
                "Absolutely. I've personally verified our logistics queue. We will have it at your door by Friday morning."
              </p>
            </motion.div>
          </div>
          
          {/* Signal Waveform */}
          <div className="mt-8 flex items-end gap-1 h-8 opacity-20">
            {[...Array(12)].map((_, i) => (
              <motion.div 
                key={i}
                animate={{ height: [4, Math.random() * 24 + 8, 4] }}
                transition={{ repeat: Infinity, duration: 1, delay: i * 0.1 }}
                className="flex-1 bg-blue-500 rounded-t-sm"
              />
            ))}
          </div>
        </motion.div>

        {/* Center Connector */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:block">
          <div className="w-12 h-12 rounded-full bg-destructive flex items-center justify-center shadow-xl border-4 border-white animate-bounce">
            <Shield className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* Right Side: Reality / Policy Block */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-[#1a1a1a] p-6 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Lock className="w-16 h-16 text-white" />
          </div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded bg-destructive/20 flex items-center justify-center">
              <Shield className="w-4 h-4 text-destructive" />
            </div>
            <span className="text-[10px] font-black text-white uppercase tracking-widest">Breach_Reality_Scan</span>
          </div>

          <div className="space-y-6">
            <div className="p-4 border border-destructive/30 bg-destructive/5 rounded space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-destructive font-black uppercase tracking-tighter">Conflict Detected</span>
                <span className="text-[10px] text-warm-gray-light font-mono">0x44_COMMITMENT_ERROR</span>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-[11px] font-mono">
                  <span className="text-warm-gray-light">Policy Limit</span>
                  <span className="text-white">7-Day Lead Time</span>
                </div>
                <div className="h-1 w-full bg-white/5 overflow-hidden">
                  <motion.div 
                    initial={{ x: "-100%" }}
                    animate={{ x: "0%" }}
                    transition={{ duration: 1.5 }}
                    className="h-full bg-destructive w-full" 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-[11px] font-mono">
                  <span className="text-warm-gray-light">Operational Load</span>
                  <span className="text-white">94% Capacity</span>
                </div>
                <div className="h-1 w-full bg-white/5 overflow-hidden">
                   <div className="h-full bg-amber-500 w-[94%]" />
                </div>
              </div>
            </div>

            <div className="pt-4 space-y-2">
              <p className="text-[10px] text-destructive font-black uppercase tracking-widest">Conclusion</p>
              <p className="text-xs text-white/80 leading-relaxed font-serif italic">
                The commitment violates both Policy Map and Live Capacity. The bot is "Flying Blind"—sounding certain while creating an operational liability.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="text-center">
        <p className="text-xs font-black text-warm-gray uppercase tracking-[0.4em] opacity-40">
          Simulation: Common failure pattern in Sales & Field Operations
        </p>
      </div>
    </div>
  )
}

/* --- Stage 2: System Network --- */
const SystemNetwork = () => {
  const nodes = [
    { id: 'bot', icon: Activity, label: 'Voice AI', color: 'text-blue-500', pos: 'center' },
    { id: 'crm', icon: Database, label: 'Live CRM', color: 'text-amber-500', pos: 'top-left' },
    { id: 'policy', icon: Shield, label: 'Policy Engine', color: 'text-destructive', pos: 'top-right' },
    { id: 'ops', icon: Briefcase, label: 'Ops Capacity', color: 'text-green-500', pos: 'bottom' },
  ]

  return (
    <div className="relative w-full max-w-2xl aspect-square flex items-center justify-center">
      {/* Background Pulse Rings */}
      <div className="absolute inset-0 flex items-center justify-center gap-4">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1.2, opacity: [0, 0.1, 0] }}
            transition={{ repeat: Infinity, duration: 4, delay: i * 1.3 }}
            className="absolute w-[80%] aspect-square border-2 border-gold rounded-full"
          />
        ))}
      </div>

      {/* Connection Lines (Animated) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
        <motion.path
          d="M 50% 50% L 20% 20%"
          stroke="url(#grad)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d4af37" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
        </defs>
      </svg>

      {/* Nodes */}
      <div className="relative z-10 w-full h-full">
        {nodes.map((node, i) => (
          <motion.div
            key={node.id}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.2 }}
            className={`absolute flex flex-col items-center gap-3 ${
              node.pos === 'center' ? 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' :
              node.pos === 'top-left' ? 'left-[15%] top-[15%]' :
              node.pos === 'top-right' ? 'right-[15%] top-[15%]' :
              'left-1/2 bottom-[10%] -translate-x-1/2'
            }`}
          >
            <div className={`w-16 h-16 lg:w-24 lg:h-24 rounded-2xl bg-white border border-sand shadow-2xl flex items-center justify-center group hover:border-gold transition-colors duration-500`}>
              <node.icon className={`w-8 h-8 lg:w-12 lg:h-12 ${node.color} group-hover:scale-110 transition-transform`} />
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-warm-gray bg-white/80 px-3 py-1 border border-sand rounded-full">
              {node.label}
            </span>
          </motion.div>
        ))}
      </div>

      <div className="absolute top-0 left-0 p-8 space-y-2">
        <div className="flex items-center gap-2">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          >
            <RefreshCw className="w-3 h-3 text-gold" />
          </motion.div>
          <span className="text-[10px] font-black text-warm-gray uppercase tracking-widest">Neural_Sync_Active</span>
        </div>
      </div>
    </div>
  )
}

/* --- Stage 3: Technical Audit --- */
const TechnicalAudit = () => {
  return (
    <div className="w-full max-w-2xl bg-white border border-sand p-12 lg:p-16 shadow-2xl relative overflow-hidden text-center">
      {/* Background Scanner Line */}
      <motion.div 
        animate={{ top: ['0%', '100%', '0%'] }}
        transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
        className="absolute left-0 right-0 h-px bg-gold/30 z-0"
      />
      
      <div className="relative z-10 space-y-12">
        <div className="space-y-4">
          <span className="text-xs font-black text-destructive uppercase tracking-[0.5em] px-4 py-1 border border-destructive/20 inline-block bg-destructive/5 rounded-full">
            AUDIT_REPORT_FLAG
          </span>
          <h4 className="text-lg font-serif text-warm-gray-light italic">VoiShift Enterprise Analysis_ID_7212</h4>
        </div>

        <div className="relative inline-block">
          <motion.div
            initial={{ rotate: -10, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            className="text-[100px] lg:text-[140px] font-serif font-black text-[#1a1a1a] leading-none tracking-tighter"
          >
            78%
          </motion.div>
          <motion.div
            animate={{ opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 1 }}
            className="absolute -top-4 -right-12 px-4 py-2 bg-destructive text-white text-xs font-black uppercase tracking-widest shadow-xl border-b-4 border-destructive-dark"
          >
            CRITICAL_RISK
          </motion.div>
        </div>

        <div className="space-y-6 max-w-lg mx-auto">
          <p className="text-xl lg:text-2xl text-warm-gray font-serif italic leading-snug">
            Of voice AI deployments create "Ghost Commitments"—promises made by agents that are operationally impossible to fulfill.
          </p>
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-sand">
            <div>
              <p className="text-[10px] font-black text-warm-gray-light uppercase mb-1">DATA POINTS</p>
              <p className="text-sm font-mono text-warm-gray">12,400+</p>
            </div>
            <div>
              <p className="text-[10px] font-black text-warm-gray-light uppercase mb-1">VERTICLES</p>
              <p className="text-sm font-mono text-warm-gray">SALES/OPS</p>
            </div>
            <div>
              <p className="text-[10px] font-black text-warm-gray-light uppercase mb-1">FAILURE_TYPE</p>
              <p className="text-sm font-mono text-warm-gray">NON_SYNC</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const VisualPanel = ({ activeBlock }: { activeBlock: number }) => {
  return (
    <div className="relative h-full w-full flex items-center justify-center p-6 lg:p-12 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeBlock}
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 1.05, y: -10 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex justify-center"
        >
          {activeBlock === 0 && <BreachSimulation />}
          {activeBlock === 1 && <SystemNetwork />}
          {activeBlock === 2 && <TechnicalAudit />}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export function SubHero() {
  const { openModal } = useModal()
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeBlock, setActiveBlock] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value: number) => {
      const newBlock = Math.min(Math.floor(value * 3), 2)
      setActiveBlock(newBlock)
    })
    return () => unsubscribe()
  }, [scrollYProgress])

  return (
    <section id="sub-hero" ref={containerRef} className="relative bg-cream-dark">
      <div className="sticky min-h-screen flex">
        {/* Left side - Scrollable narrative */}
        <div className="w-full lg:w-2/5 overflow-auto">
          <div className="py-2 lg:py-4">
            {narrativeBlocks.map((block, index) => (
              <div
                key={block.id}
                className="min-h-screen flex items-center px-6 lg:px-16"
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: false, amount: 0.5 }}
                  className="max-w-xl"
                >
                  <div className="flex items-start gap-4 mb-6">
                    {/* Icon */}
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                      <block.icon className="w-5 h-5 text-gold" />
                    </div>

                    {/* Content column */}
                    <div className="flex-1">
                      {typeof block.title === "string" ? (
                        <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-warm-gray leading-tight mb-6 text-balance">
                          {block.title}
                        </h2>
                      ) : (
                        <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl leading-[1.05] tracking-tight text-warm-gray mb-6">
                          <span className="block">{block.title.line1}</span>
                          <span className="block italic text-gold/80 font-normal mt-1">
                            {block.title.line2}
                          </span>
                        </h2>
                      )}

                      {/* Bullets */}
                      <ul className="space-y-4 list-disc list-inside text-lg text-warm-gray-light leading-relaxed">
                        {block.content.map((line, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            viewport={{ once: false, amount: 0.8 }}
                          >
                            {line}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>


                  {index === 2 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: false, amount: 0.8 }}
                      className="mt-12 flex flex-col sm:flex-row gap-4"
                    >
                      <Button
                        size="lg"
                        className="bg-gold hover:bg-gold-dark text-warm-gray rounded-lg shadow-sm transition-all duration-300"
                        onClick={openModal}
                      >
                        I need a system, not a bot
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-gold/40 text-warm-gray hover:bg-gold/5 rounded-lg transition-all duration-300 bg-transparent"
                        onClick={openModal}
                      >
                        Stress test my current build
                      </Button>
                    </motion.div>
                  )}
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Right side - Sticky illustration panel */}
        <div className="hidden lg:flex w-3/5 sticky top-10 h-screen items-center justify-center bg-sand/30 border-l border-border/50">
          <VisualPanel activeBlock={activeBlock} />
        </div>
      </div>
    </section>
  )
}
