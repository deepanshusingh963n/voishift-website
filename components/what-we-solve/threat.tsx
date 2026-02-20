"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Award, FileText, Users, MessageSquare, Shuffle, Copy, AlertTriangle, ShieldAlert, Cpu, Network, Zap, FileQuestion, HelpCircle, Lock, Hand, ArrowUpRight, RotateCcw, Shield, ArrowRight } from "lucide-react"
import { useRef } from "react"

const surfaceFixes = [
  { text: "A demo that works", icon: Award },
  { text: "A bot that sounds confident", icon: MessageSquare },
  { text: "A rollout that looks finished", icon: FileText },
]

const messyTruth = [
  { text: "Rules live in documents", icon: FileText },
  { text: "Exceptions live in people", icon: Users },
  { text: "Updates live in Slack", icon: MessageSquare },
  { text: "Reality lives somewhere in between", icon: Shuffle },
]

const botCopies = [
  "The shortcuts",
  "The contradictions",
  "The unwritten rules",
]

const notCopies = [
  "Not your intent",
  "Not your policy",
  "Not what you meant to be correct",
]

const solutions = [
  { icon: Lock, text: "Act only on approved truth" },
  { icon: Hand, text: "Refuse cleanly when certainty is missing" },
  { icon: ArrowUpRight, text: "Escalate instead of improvising" },
  { icon: RotateCcw, text: "Can be replayed, reviewed, and corrected" },
];

/* --- Enhanced 3D Illustration Components --- */

const FloatingCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <motion.div
    whileHover={{ rotateX: 5, rotateY: -5, translateZ: 20 }}
    style={{ transformStyle: "preserve-3d" }}
    className={`relative transition-all duration-500 ${className}`}
  >
    {children}
  </motion.div>
)

const SurfaceIllustration = () => (
  <FloatingCard className="w-full max-w-md mx-auto">
    <div className="relative aspect-[1.6/1] bg-white rounded-2xl border border-gold/40 shadow-[0_20px_50px_rgba(212,175,55,0.15)] overflow-hidden group">
      {/* Header */}
      <div className="h-8 bg-sand/20 border-b border-sand flex items-center px-4 justify-between">
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-red-400" />
          <div className="w-2 h-2 rounded-full bg-amber-400" />
          <div className="w-2 h-2 rounded-full bg-green-400" />
        </div>
        <div className="text-[9px] font-black text-warm-gray tracking-widest uppercase">system_v4.0.1</div>
      </div>

      {/* Content area */}
      <div className="p-6 flex flex-col h-full">
        <div className="flex-1 flex items-center justify-center relative">
          {/* Animated Waveform */}
          <div className="flex items-end gap-1 h-16">
            {[...Array(15)].map((_, i) => {
              // Deterministic height based on index for SSR compatibility
              const baseHeight = 10 + (i % 3) * 10 + ((i * 7) % 20);
              return (
                <motion.div
                  key={i}
                  animate={{ height: [10, baseHeight, 10] }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut", delay: i * 0.05 }}
                  className="w-1.5 bg-gold rounded-full shadow-[0_0_8px_rgba(212,175,55,0.5)]"
                  style={{ transformOrigin: "bottom" }}
                />
              );
            })}
          </div>
        </div>

        {/* Confidence Badge */}
        <div className="absolute top-12 right-6 bg-green-500/10 border border-green-500/20 rounded-full px-3 py-1 flex items-center gap-2">
          <Zap className="w-3 h-3 text-green-600 animate-pulse" />
          <span className="text-[10px] font-bold text-green-700 tracking-tight">HIGH CONFIDENCE</span>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-3 gap-3">
          <div className="h-2 bg-sand/30 rounded" />
          <div className="h-2 bg-sand/30 rounded col-span-2" />
          <div className="h-2 bg-sand/30 rounded col-span-2" />
          <div className="h-2 bg-gold/20 rounded" />
        </div>
      </div>

      {/* X-Ray Reveal Text (shows on hover) */}
      <div className="absolute inset-0 bg-warm-gray opacity-0 group-hover:opacity-95 transition-opacity duration-500 flex flex-col items-center justify-center p-8 text-center">
        <AlertTriangle className="w-8 h-8 text-gold mb-3 animate-bounce" />
        <p className="text-white text-sm font-serif italic mb-2">Fluency is just a veil.</p>
        <div className="w-12 h-px bg-gold/50" />
      </div>
    </div>
  </FloatingCard>
)

const FoundationIllustration = () => (
  <FloatingCard className="w-full max-w-md mx-auto">
    <div className="relative aspect-[1.6/1] bg-warm-gray rounded-2xl border border-white/10 shadow-2xl p-6 overflow-hidden">
      {/* Background Grain/Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      {/* Intricate Network */}
      <div className="absolute inset-0">
        <svg className="w-full h-full">
          {[...Array(8)].map((_, i) => {
            // Deterministic seeded values for SSR compatibility
            const seed = i * 137.5;
            const x1 = ((seed * 1.1) % 400);
            const y1 = ((seed * 0.7) % 250);
            const cx = ((seed * 1.3) % 400);
            const cy = ((seed * 0.9) % 250);
            const x2 = ((seed * 1.7) % 400);
            const y2 = ((seed * 1.1) % 250);

            return (
              <motion.path
                key={i}
                d={`M ${x1},${y1} Q ${cx},${cy} ${x2},${y2}`}
                fill="none"
                stroke={i % 2 === 0 ? "#D4AF37" : "#FFFFFF"}
                strokeWidth="0.5"
                strokeOpacity="0.2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 4 + i, repeat: Infinity, ease: "linear" }}
              />
            );
          })}
        </svg>
      </div>

      <div className="relative z-10 h-full flex flex-col gap-4">
        <div className="flex justify-between items-start">
          <div className="p-2 bg-white/5 border border-white/10 rounded flex items-center gap-2">
            <FileText className="w-3 h-3 text-gold" />
            <span className="text-[8px] text-white/40 uppercase tracking-widest">Knowledge Base</span>
          </div>
        </div>

        <div className="flex-1 grid grid-cols-2 gap-3">
          <div className="border border-gold/20 rounded-lg p-3 flex flex-col gap-2 bg-gold/5">
            <Users className="w-4 h-4 text-gold/60" />
            <div className="space-y-1">
              <div className="h-1 w-full bg-white/10 rounded" />
              <div className="h-1 w-2/3 bg-white/10 rounded" />
            </div>
          </div>
          <div className="border border-dashed border-white/10 rounded-lg p-3 flex flex-col justify-end">
            <div className="flex gap-1">
              <div className="w-1 h-1 rounded-full bg-destructive/60" />
              <div className="w-1 h-1 rounded-full bg-white/20" />
            </div>
            <span className="text-[8px] text-destructive/60 font-bold uppercase mt-1">Logic Gap</span>
          </div>
        </div>

        <div className="p-2 border border-white/10 bg-white/5 rounded flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <div className="w-2 h-2 rounded-full bg-gold/50 shadow-[0_0_8px_gold]" />
            <span className="text-[8px] text-white/60">TRUTH VECTOR</span>
          </div>
          <Shuffle className="w-3 h-3 text-white/20" />
        </div>
      </div>
    </div>
  </FloatingCard>
)

const GlitchedBridge = () => (
  <div className="relative w-full py-12 px-6 bg-[#2a2a2a] rounded-2xl overflow-hidden border border-white/5 group">
    <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-gold/5" />

    <div className="relative z-10 flex flex-col items-center">
      <div className="flex items-center justify-between w-full max-w-2xl px-4 mb-20">
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 group-hover:text-gold transition-colors duration-500">
            <Users className="w-8 h-8" />
          </div>
          <span className="text-[10px] font-black tracking-widest text-white/70 uppercase">HUMAN</span>
        </div>

        {/* The Gap Illustration */}
        <div className="flex-1 px-8 relative">
          <div className="h-px w-full bg-white/10 flex items-center justify-center relative">
            {/* The Brake/Hesitation */}
            <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-8 h-24 bg-gradient-to-b from-transparent via-white/5 to-transparent border-x border-white/5" />

            {/* Hesitation Marker */}
            <div className="absolute left-1/4 -top-8 -translate-x-1/2 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white/40 shadow-[0_0_10px_white]" />
              <span className="text-[9px] text-white/70 font-bold">HESITATION</span>
            </div>

            {/* The Improvisation Glitch */}
            <motion.div
              animate={{ opacity: [0.3, 0.7, 0.3], scaleX: [1, 1.05, 1] }}
              transition={{ duration: 0.1, repeat: Infinity }}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-1 bg-gold shadow-[0_0_15px_gold] rounded-full"
            />
            <div className="absolute right-0 -top-8 translate-x-1/2 flex items-center gap-2">
              <span className="text-[9px] text-gold font-bold">IMPROVISATION</span>
              <Zap className="w-3 h-3 text-gold shadow-[0_0_10px_gold]" />
            </div>
          </div>

          <AlertTriangle className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-destructive/50 animate-pulse" />
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold shadow-[0_0_30px_rgba(212,175,55,0.2)]">
            <Cpu className="w-8 h-8" />
          </div>
          <span className="text-[10px] font-black tracking-widest text-gold/70 uppercase">VOICE AI</span>
        </div>
      </div>

      {/* Side-by-side content labels from original code */}
      <div className="grid md:grid-cols-2 gap-8 w-full max-w-2xl text-center md:text-left">
        <div className="p-6 bg-white/5 border border-white/5 border-t-white/50 shadow-lg shadow-white/50">
          <p className="text-md font-bold text-white mb-2 uppercase tracking-tighter">Humans</p>
          <p className="text-white/60 text-[15px] leading-relaxed italic">Hesitate when things do not line up</p>
        </div>
        <div className="p-6 bg-gold/5 border border-gold/10 border-t-gold/50 shadow-lg shadow-gold/50">
          <p className="text-md font-bold text-gold mb-2 uppercase tracking-tighter">Voice AI</p>
          <p className="text-white/70 text-[15px] leading-relaxed">
            Does not hesitate. Fills the gap. <span className="text-gold font-bold">Improvises.</span> Sounds sure.
          </p>
        </div>
      </div>
    </div>
  </div>
)

export function Threat() {
  const containerRef = useRef(null)

  return (
    <section ref={containerRef} className="py-16 lg:py-24 bg-cream-dark relative overflow-hidden">
      {/* Dynamic background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="text-[11px] font-black text-gold uppercase tracking-[0.4em] mb-4 block">Structural Failure Modes</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-warm-gray leading-[1.1] mb-6 text-balance">
            Why things go wrong
          </h2>
          <div className="flex flex-col items-center gap-4">
            <div className="h-1 w-16 bg-gold/30 rounded-full" />
            <p className="text-xl text-warm-gray-light max-w-2xl font-serif italic">
              Because surface fixes get rewarded.
            </p>
          </div>
        </motion.div>

        {/* Storytelling Zig-Zag Layout */}
        <div className="space-y-6">

          {/* Step 1: The Facade (Right Visual) */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-gold/10 rounded-full border border-gold/20 mb-4">
                  <Zap className="w-4 h-4 text-gold" />
                  <span className="text-[10px] font-bold text-gold uppercase tracking-widest">The Optical Illusion</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-serif text-warm-gray mb-6">What gets rewarded</h3>

                <div className="space-y-4">
                  {surfaceFixes.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-4 p-4 bg-white/40 hover:bg-white/80 rounded-2xl border border-sand transition-all duration-300 shadow-sm"
                    >
                      <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold shadow-inner">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <span className="text-lg text-warm-gray font-medium">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-6 p-4 border-l-4 border-gold bg-gold/5 rounded-r-2xl">
                  <h4 className="font-serif italic text-xl text-warm-gray mb-3">Fluency feels like certainty.</h4>
                  <p className="text-warm-gray-light text-md">So nobody slows down to ask what is actually true.</p>
                </div>
              </motion.div>
            </div>
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-warm-gray/5 rounded-full border border-warm-gray/10 mb-4">
                  <Network className="w-4 h-4 text-warm-gray" />
                  <span className="text-[10px] font-bold text-warm-gray-light uppercase tracking-widest">The Real Foundation</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-serif text-warm-gray mb-6">But the truth is messy</h3>

                <div className="space-y-4">
                  {messyTruth.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-4 p-4 bg-card/40 border border-border rounded-2xl shadow-sm"
                    >
                      <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center text-warm-gray-light">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <span className="text-lg text-warm-gray font-medium">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
          {/* Step 3: The Critical Difference (Center Integrated) */}
          <div className="space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-2xl font-serif text-warm-gray mb-4">Why this happens</h3>
              <p className="text-warm-gray-light text-md italic">The gap between intent and improvisation.</p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <GlitchedBridge />
            </motion.div>
          </div>

          {/* Step 4: The Copy Trap */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="bg-white border border-gold/50 p-10 lg:p-12 shadow-2xl relative overflow-hidden"
            >
              <div className="grid lg:grid-cols-[1.2fr_2fr] gap-12 lg:gap-16 items-center">
                <div className="space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center">
                    <Copy className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-serif text-warm-gray leading-tight">
                    The BOT faulters becuase it copies
                  </h3>
                  <div className="h-0.5 w-10 bg-gold" />
                </div>

                <div className="grid grid-cols-2 gap-8 lg:gap-12">
                  <div>
                    <span className="text-[10px] font-black text-warm-gray-light tracking-[0.3em] uppercase mb-6 block pb-3 border-b border-sand">Execution</span>
                    <div className="space-y-4">
                      {botCopies.map((item, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-gold/40" />
                          <span className="text-xl text-warm-gray font-serif italic">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-[10px] font-black text-warm-gray-light tracking-[0.3em] uppercase mb-6 block pb-3 border-b border-sand">Not</span>
                    <div className="space-y-4">
                      {notCopies.map((item, index) => (
                        <div key={index} className="flex items-center gap-3 opacity-30">
                          <span className="text-xl text-warm-gray line-through decoration-gold/50">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Conclusion Final Impact */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="mt-18 lg:mt-18 text-center relative"
        >
          {/* Spotlight Glow */}
          <div className="absolute inset-0 bg-gold/20 blur-[120px] rounded-full scale-50" />

          <div className="relative z-10 space-y-6">
            <h4 className="text-3xl md:text-4xl lg:text-5xl font-serif text-warm-gray leading-tight text-balance">
              That is why this problem is <span className="text-gold italic underline decoration-gold/30">structural</span>.
            </h4>
            <div className="h-10 w-px bg-gold/30 mx-auto" />
            <p className="text-xl text-warm-gray-light font-serif italic max-w-2xl mx-auto">
              And why it only shows up once the bot starts sounding good.
            </p>
          </div>
        </motion.div>

        <div className="relative py-20 px-8 lg:px-12 bg-[#1a1a1a] rounded-[0rem] text-center overflow-hidden shadow-2xl mb-12 mt-16">
          {/* Matrix Background */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
            <motion.div
              animate={{ opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(226,167,70,0.1),transparent_70%)]"
            />
          </div>

          <div className="relative z-10">
            <div className="flex flex-col items-center mb-16">
              <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-8">
                <Shield className="w-8 h-8 text-gold" />
              </div>
              <p className="text-[10px] font-black text-gold uppercase tracking-[0.6em] mb-4">The Solution Engine</p>
              <h3 className="text-3xl md:text-5xl font-serif font-black text-white mb-6">We design voice AI systems that:</h3>
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
            </div>
        
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6 text-gold group-hover:bg-gold group-hover:text-black transition-all duration-500">
                    <solution.icon className="w-5 h-5" />
                  </div>
                  <p className="text-sm font-bold text-gold group-hover:text-white transition-colors duration-300">
                    {solution.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>  
      </div>
    </section>
  )
}
