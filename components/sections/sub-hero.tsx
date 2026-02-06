"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Brain, Target, AlertTriangle } from "lucide-react"
import { useModal } from "@/context/modal-context"

const narrativeBlocks = [
  {
    id: 1,
    title: {
      line1: "If it sounds sure,",
      line2: "it can be wrong and still sound sure.",
    },
    content: [
      "If your voice agent can speak fluently, it can also mislead fluently.",
      "If it can talk smoothly, it can lie smoothly.",
      "If it can answer fast, it can mislead fast.",
      "If it can sound human, it can mislead like one.",
    ],
    icon: Shield,
    illustration: "fluency",
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
    illustration: "system",
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
    illustration: "decision",
  },
]


const VisualPanel = ({ activeBlock }: { activeBlock: number }) => {
  return (
    <div className="relative h-full flex items-center justify-center p-8">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeBlock}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full max-w-md"
        >
          {activeBlock === 0 && (
            <div className="relative">
              <div className="card-elevated p-6 bg-white border border-sand/30 shadow-2xl relative overflow-hidden">
                {/* Tool Header */}
                <div className="flex items-center justify-between mb-8 border-b border-sand/20 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-green-500/10 flex items-center justify-center">
                      <Target className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-warm-gray-light leading-none">Voice Layer Analysis</p>
                      <p className="text-[9px] font-mono text-warm-gray-light/60 mt-1 uppercase">Stream: VOI-TRUTH-09X</p>
                    </div>
                  </div>
                  <div className="px-2 py-1 rounded bg-destructive/10 text-destructive text-[8px] font-bold uppercase tracking-tight animate-pulse">
                    Logic Mismatch detected
                  </div>
                </div>

                {/* Main Visualization: Waveform vs Logic Gap */}
                <div className="space-y-8">
                  {/* Waveform Visualization */}
                  <div className="bg-sand/10 rounded-xl p-4 border border-sand/20">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-[10px] font-bold text-warm-gray-light uppercase">Fluency Waveform</span>
                      <span className="text-[10px] font-mono text-green-600 font-bold">99.4% STABILITY</span>
                    </div>
                    <div className="h-16 flex items-end justify-between gap-1 px-2">
                      {[...Array(24)].map((_, i) => {
                        // Deterministic values for SSR compatibility
                        const seed = i * 11.3;
                        const height = 20 + ((seed * 1.5) % 40);
                        const bgColor = i % 3 === 0 ? "#22c55e" : "#86efac";
                        const duration = 0.8 + ((i * 0.17) % 1);

                        return (
                          <motion.div
                            key={i}
                            animate={{
                              height: [20, height, 20],
                              backgroundColor: bgColor
                            }}
                            transition={{
                              duration,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                            className="w-full rounded-t-sm"
                          />
                        );
                      })}
                    </div>
                  </div>

                  {/* Diagnostic Matrix */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-green-500/5 rounded-lg border border-green-500/10">
                      <p className="text-[9px] font-bold text-green-600 uppercase mb-1">Human Confidence</p>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-serif text-green-700">98.1</span>
                        <span className="text-xs text-green-600/60 font-bold">%</span>
                      </div>
                      <p className="text-[8px] text-green-600/70 mt-1 italic">Confident delivery</p>
                    </div>
                    <div className="p-3 bg-destructive/5 rounded-lg border border-destructive/10">
                      <p className="text-[9px] font-bold text-destructive uppercase mb-1">Ground Truth</p>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-serif text-destructive">12.4</span>
                        <span className="text-xs text-destructive/60 font-bold">%</span>
                      </div>
                      <p className="text-[8px] text-destructive/70 mt-1 italic">Systemic contradiction</p>
                    </div>
                  </div>

                  {/* Root Cause Alert */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-destructive rounded-lg shadow-lg shadow-destructive/20 relative"
                  >
                    <div className="flex gap-3 items-center">
                      <AlertTriangle className="w-5 h-5 text-white animate-bounce" />
                      <div>
                        <p className="text-[11px] font-bold text-white uppercase tracking-wider">Mismatch Identified</p>
                        <p className="text-[10px] text-white/80 mt-0.5">Fluent but factually incorrect reasoning.</p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Scanning HUD Overlay */}
                <motion.div
                  animate={{ y: [-150, 400] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 right-0 h-[100px] bg-gradient-to-b from-transparent via-green-500/5 to-transparent pointer-events-none"
                />
              </div>
            </div>
          )}

          {activeBlock === 1 && (
            <div className="relative h-[400px] perspective-1000 flex items-center justify-center">
              {/* 3D Exploded View Container */}
              <div className="relative w-full max-w-sm h-full flex flex-col items-center justify-center">

                {/* Surface Layer: The Voice Interface */}
                <motion.div
                  initial={{ opacity: 0, y: 50, rotateX: 45, translateZ: 100 }}
                  animate={{ opacity: 1, y: -80, rotateX: 45, translateZ: 100 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="absolute w-64 h-32 bg-white/40 backdrop-blur-md border border-white/60 rounded-xl shadow-2xl flex flex-col items-center justify-center p-4 z-30"
                >
                  <div className="w-full flex justify-between items-center mb-2 px-2">
                    <span className="text-[10px] font-bold text-warm-gray uppercase tracking-tighter">Surface Layer</span>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
                          className="w-1 h-1 rounded-full bg-green-500"
                        />
                      ))}
                    </div>
                  </div>
                  <div className="w-full h-8 flex items-center justify-center gap-1">
                    {[...Array(15)].map((_, i) => {
                      // Deterministic height for SSR compatibility
                      const seed = i * 15.7;
                      const height = 4 + ((seed * 1.4) % 20);
                      const duration = 0.5 + ((i * 0.11) % 0.5);

                      return (
                        <motion.div
                          key={i}
                          animate={{ height: [4, height, 4] }}
                          transition={{ duration, repeat: Infinity }}
                          className="w-1 bg-green-500/40 rounded-full"
                        />
                      );
                    })}
                  </div>
                  <p className="text-[10px] font-bold text-warm-gray-light uppercase mt-3 tracking-widest">The Voice Bot</p>
                </motion.div>

                {/* The "Chaos" Layer: Disconnected Logic */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotateX: 45 }}
                  animate={{ opacity: 1, scale: 1, rotateX: 45 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="absolute w-56 h-40 border-2 border-dashed border-destructive/30 rounded-lg flex items-center justify-center z-20"
                >
                  <div className="relative w-full h-full">
                    {/* Floating "Broken" Nodes */}
                    {[...Array(6)].map((_, i) => {
                      // Deterministic positioning for SSR compatibility
                      const seed = i * 37.1;
                      const xOffset = ((seed * 1.3) % 20) - 10;
                      const yOffset = ((seed * 1.7) % 20) - 10;
                      const left = ((seed * 2.1) % 80) + 10;
                      const top = ((seed * 1.9) % 80) + 10;
                      const duration = 2 + ((i * 0.23) % 1);

                      return (
                        <motion.div
                          key={i}
                          animate={{
                            x: [0, xOffset, 0],
                            y: [0, yOffset, 0],
                            opacity: [0.2, 0.5, 0.2]
                          }}
                          transition={{ duration, repeat: Infinity }}
                          className="absolute w-3 h-3 bg-destructive rounded shadow-[0_0_10px_rgba(239,68,68,0.5)]"
                          style={{
                            left: `${left}%`,
                            top: `${top}%`
                          }}
                        />
                      );
                    })}
                    {/* Connecting wires (visual lines) */}
                    <svg className="absolute inset-0 w-full h-full opacity-20">
                      <line x1="10%" y1="20%" x2="90%" y2="80%" stroke="currentColor" className="text-destructive" strokeWidth="1" strokeDasharray="4 2" />
                      <line x1="80%" y1="10%" x2="20%" y2="90%" stroke="currentColor" className="text-destructive" strokeWidth="1" strokeDasharray="4 2" />
                    </svg>
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/80 px-2 py-1 rounded text-[8px] font-bold text-destructive uppercase whitespace-nowrap shadow-sm">
                    Structural Logic Gap
                  </div>
                </motion.div>

                {/* The Foundation: VoiShift Grounding */}
                <motion.div
                  initial={{ opacity: 0, y: -50, rotateX: 45, translateZ: -100 }}
                  animate={{ opacity: 1, y: 80, rotateX: 45, translateZ: -100 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="absolute w-72 h-48 bg-warm-gray border-b-4 border-gold rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.2)] flex flex-col items-center justify-end p-6 z-10"
                >
                  <div className="absolute top-4 left-6 right-6">
                    <div className="flex justify-between items-center mb-6">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-gold" />
                        <span className="text-[10px] font-bold text-gold/80 uppercase">Ground Truth Engine</span>
                      </div>
                      <Shield className="w-4 h-4 text-gold/40" />
                    </div>
                    {/* Stabilizing Logic Blocks */}
                    <div className="grid grid-cols-4 gap-2 opacity-50">
                      {[...Array(8)].map((_, i) => (
                        <div key={i} className="h-4 bg-gold/20 rounded-sm" />
                      ))}
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-[12px] font-black text-white uppercase tracking-[0.3em] mb-1">Business System</p>
                    <p className="text-[9px] text-gold-dark font-medium uppercase tracking-widest opacity-80 italic">Verified Reality Layer</p>
                  </div>

                  {/* Glowing core effect */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gold/5 blur-[50px] -z-10" />
                </motion.div>

              </div>

              {/* Perspective helper styles */}
              <style jsx>{`
                .perspective-1000 {
                  perspective: 1200px;
                }
              `}</style>
            </div>
          )}

          {activeBlock === 2 && (
            <div className="relative h-[400px] flex items-center justify-center overflow-hidden">
              <div className="relative w-full max-w-sm h-full flex flex-col items-center justify-center">

                {/* HUD Background Rings */}
                <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                  <div className="w-[300px] h-[300px] rounded-full border border-warm-gray" />
                  <div className="absolute w-[200px] h-[200px] rounded-full border border-warm-gray border-dashed" />
                </div>

                <div className="grid grid-cols-1 gap-12 w-full px-4">
                  {/* The Second Brain (VoiShift) */}
                  <div className="relative p-6 bg-white/40 backdrop-blur-sm border border-green-500/20 rounded-2xl shadow-xl overflow-hidden group">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative w-12 h-12">
                        {/* Orbital Nodes */}
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        >
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-green-500 rounded-full shadow-[0_0_10px_#22c55e]" />
                          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-gold rounded-full shadow-[0_0_10px_#e2a746]" />
                        </motion.div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-warm-gray rounded-full flex items-center justify-center">
                          <Shield className="w-3 h-3 text-white" />
                        </div>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-green-600 uppercase tracking-widest">Second Brain</p>
                        <p className="text-[12px] font-serif text-warm-gray italic">Strategic Augmentation</p>
                      </div>
                    </div>
                    {/* Trust Link & Pulses */}
                    <div className="h-1 bg-sand/20 rounded-full relative overflow-hidden">
                      <motion.div
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-green-500 to-transparent"
                      />
                    </div>
                    <div className="mt-3 flex justify-between items-center">
                      <span className="text-[9px] font-mono text-warm-gray-light">SYNC STATUS: OPTIMAL</span>
                      <div className="flex gap-1">
                        {[...Array(3)].map((_, i) => (
                          <div key={i} className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_5px_#22c55e]" />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* The Only Brain (Replacement) */}
                  <div className="relative p-6 bg-destructive/5 border border-destructive/10 rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-700">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full border border-destructive/20 flex items-center justify-center relative">
                        <motion.div
                          animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.3, 0.6, 0.3]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute inset-0 bg-destructive/10 rounded-full"
                        />
                        <Brain className="w-6 h-6 text-destructive/40" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-destructive/60 uppercase tracking-widest">Only Brain</p>
                        <p className="text-[12px] font-serif text-warm-gray-light italic">Isolation Layer</p>
                      </div>
                    </div>
                    {/* Noise/Hallucination Patterns */}
                    <div className="h-1 bg-destructive/5 rounded-full relative overflow-hidden">
                      <motion.div
                        animate={{
                          x: ["0%", "100%"],
                          opacity: [0, 1, 0]
                        }}
                        transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
                        className="absolute inset-0 w-full flex justify-around"
                      >
                        {[...Array(10)].map((_, i) => (
                          <div key={i} className="w-1 h-full bg-destructive/40" />
                        ))}
                      </motion.div>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-[9px] font-mono text-destructive/60 italic">RISK: LOGIC DRIFT DETECTED</span>
                      <AlertTriangle className="w-3 h-3 text-destructive animate-pulse" />
                    </div>
                  </div>
                </div>

                {/* Data Flow Particles */}
                {[...Array(12)].map((_, i) => {
                  // Deterministic positioning for SSR compatibility
                  const seed = i * 29.3;
                  const xOffset = (i % 2 === 0 ? -1 : 1) * ((seed * 1.5) % 150);
                  const duration = 3 + ((i * 0.19) % 2);

                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 200 }}
                      animate={{
                        opacity: [0, 0.5, 0],
                        y: [-100, -400],
                        x: xOffset
                      }}
                      transition={{
                        duration,
                        repeat: Infinity,
                        delay: i * 0.4
                      }}
                      className="absolute w-1 h-1 bg-gold/20 rounded-full pointer-events-none"
                      style={{ left: '50%' }}
                    />
                  );
                })}
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export function SubHero() {
  const { openModal } = useModal()
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeBlock, setActiveBlock] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value) => {
      const newBlock = Math.min(Math.floor(value * 3), 2)
      setActiveBlock(newBlock)
    })
    return () => unsubscribe()
  }, [scrollYProgress])

  return (
    <section id="sub-hero" ref={containerRef} className="relative bg-cream-dark">
      <div className="sticky top-0 min-h-screen flex">
        {/* Left side - Scrollable narrative */}
        <div className="w-full lg:w-3/5 overflow-auto">
          <div className="py-24 lg:py-32">
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
                      <block.icon className="w-5 h-5 text-gold-dark" />
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
        <div className="hidden lg:flex w-2/5 sticky top-0 h-screen items-center justify-center bg-sand/30 border-l border-border/50">
          <VisualPanel activeBlock={activeBlock} />
        </div>
      </div>
    </section>
  )
}
