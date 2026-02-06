"use client"

import { motion } from "framer-motion"
import { Eye, Zap, FileQuestion, UserCheck, AlertCircle, Shield, Globe, Database, ArrowRight, Activity } from "lucide-react"

const workflowPoints = [
  { text: "Where they pause", icon: Eye },
  { text: "Where they double-check", icon: FileQuestion },
  { text: "Where they ask someone", icon: UserCheck },
  { text: "Where they make an exception", icon: AlertCircle },
]

/* --- Advanced Glassmorphism Components --- */

const SystemLayer = ({ children, delay = 0, zIndex = 10, offset = "0px", opacity = 1, scale = 1 }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 50, rotateX: 20 }}
    whileInView={{ opacity, y: 0, rotateX: 25 }}
    transition={{ duration: 1, delay }}
    style={{ zIndex, transformStyle: "preserve-3d", transform: `translateY(${offset}) scale(${scale})` }}
    className="absolute w-full max-w-sm"
  >
    <div className="relative bg-white/5 backdrop-blur-xl border border-white/20 rounded-[2rem] p-6 shadow-2xl overflow-hidden group">
      {/* Ambient Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-gold/5 opacity-50" />

      {/* Animated Data Streams */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        {[...Array(3)].map((_, i) => {
          // Deterministic positioning for SSR compatibility
          const seed = i * 67.3;
          const y1 = (seed * 1.2) % 200;
          const y2 = (seed * 0.8) % 200;

          return (
            <motion.div
              key={i}
              animate={{
                x: [-100, 400],
                y: [y1, y2],
                opacity: [0, 1, 0]
              }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 1, ease: "linear" }}
              className="h-px w-20 bg-gold"
            />
          );
        })}
      </div>

      {children}
    </div>
  </motion.div>
)

export function VoiShiftIntro() {
  return (
    <section className="py-20 lg:py-24 bg-white relative overflow-hidden">
      {/* Structural Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gold/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col gap-16 lg:gap-24">

          {/* Top Row: Argument + Layered Visual */}
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/5 border border-gold/10 rounded-full">
                <Shield className="w-3.5 h-3.5 text-gold" />
                <span className="text-[9px] font-black tracking-widest text-gold-dark uppercase">Logic Infrastructure</span>
              </div>

              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-warm-gray leading-[1.1] text-balance">
                VoiShift turns voice AI from a speaking layer into a <span className="text-gold italic underline decoration-gold/20">business system that holds up when conditions are not clean.</span>
              </h2>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-6 bg-white border border-sand rounded-2xl shadow-sm hover:border-gold/30 transition-colors">
                  <p className="text-lg font-serif text-warm-gray italic mb-1">
                    You can rent a voice.
                  </p>
                  <div className="h-0.5 w-8 bg-sand mt-4" />
                </div>
                <div className="p-6 bg-[#2a2a2a] border border-white/5 rounded-2xl shadow-xl">
                  <p className="text-lg font-serif text-gold font-bold">
                    You cannot rent ownership of what is true.
                  </p>
                  <div className="h-0.5 w-8 bg-gold/50 mt-4" />
                </div>
              </div>

              <div className="flex flex-wrap gap-x-8 gap-y-4">
                {["Not with prompts.", "Not with demos.", "Not with automation spikes."].map((text, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.4 }}
                    className="flex items-center gap-2"
                  >
                    <div className="w-1 h-1 rounded-full bg-warm-gray" />
                    <span className="text-sm text-warm-gray line-through decoration-gold/40">{text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Visual: High-Fidelity 3D Stack */}
            <div className="relative h-[400px] lg:h-[450px] flex items-center justify-center perspective-2000">
              {/* Back Layer: Core Data */}
              <SystemLayer delay={0} zIndex={10} offset="80px" opacity={0.3} scale={0.8}>
                <div className="h-20 flex items-center justify-center">
                  <Database className="w-10 h-10 text-warm-gray/20" />
                </div>
              </SystemLayer>

              {/* Middle Layer: Orchestration */}
              <SystemLayer delay={0.2} zIndex={20} offset="40px" opacity={0.6} scale={0.9}>
                <div className="h-24 flex flex-col justify-center gap-3">
                  <div className="flex justify-between items-center">
                    <Globe className="w-4 h-4 text-gold/40" />
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold/40" />
                      <div className="w-1.5 h-1.5 rounded-full bg-gold/10" />
                    </div>
                  </div>
                  <div className="h-1 w-full bg-gold/10 rounded-full overflow-hidden">
                    <motion.div
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="h-full w-1/3 bg-gold/40"
                    />
                  </div>
                </div>
              </SystemLayer>

              {/* Top Layer: The Interface Interface */}
              <motion.div
                initial={{ opacity: 0, y: 50, rotateX: 20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 25 }}
                transition={{ duration: 1, delay: 0.4 }}
                style={{ zIndex: 30, transformStyle: "preserve-3d" }}
                className="absolute w-full max-w-sm"
              >
                <div className="relative bg-white rounded-[2rem] border border-gold shadow-[0_40px_80px_rgba(212,175,55,0.25)] p-8 overflow-hidden group">
                  {/* Subtle Tech Pattern Background */}
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                    <svg width="100%" height="100%">
                      <pattern id="hex" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M10 0L20 5.8v11.5L10 23 0 17.3V5.8z" fill="none" stroke="currentColor" strokeWidth="1" />
                      </pattern>
                      <rect width="100%" height="100%" fill="url(#hex)" />
                    </svg>
                  </div>

                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-10 pb-4 border-b border-sand relative z-10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-2xl bg-gold/10 flex items-center justify-center relative overflow-hidden">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent,gold/20)]"
                        />
                        <Zap className="w-5 h-5 text-gold-dark relative z-10" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-black text-warm-gray uppercase tracking-widest">Logic Node 01</span>
                        <span className="text-[9px] text-green-600 font-bold flex items-center gap-1">
                          <span className="w-1 h-1 rounded-full bg-green-600 animate-pulse" />
                          SYSTEM_LIVE
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Shield className="w-4 h-4 text-gold/30" />
                      <Activity className="w-4 h-4 text-gold/30 animate-pulse" />
                    </div>
                  </div>

                  {/* Central Voice Core Visual */}
                  <div className="relative h-32 flex items-center justify-center mb-10">
                    {/* Animated Pulsing Rings */}
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0.8, opacity: 0.5 }}
                        animate={{ scale: [0.8, 1.5], opacity: [0.5, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.6 }}
                        className="absolute w-24 h-24 rounded-full border border-gold/20"
                      />
                    ))}

                    {/* The Core */}
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-16 h-16 rounded-full bg-gradient-to-br from-gold via-gold-dark to-gold shadow-[0_0_30px_rgba(212,175,55,0.4)] flex items-center justify-center relative z-20"
                    >
                      <div className="w-full h-full rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.4),transparent)]" />
                    </motion.div>

                    {/* Frequency Waveform (Left & Right) */}
                    <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
                      <div className="flex items-center gap-0.5">
                        {[...Array(8)].map((_, i) => {
                          // Deterministic height for SSR compatibility
                          const seed = i * 13.7;
                          const height = 4 + ((seed * 1.3) % 24);
                          return (
                            <motion.div
                              key={i}
                              animate={{ height: [4, height, 4] }}
                              transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.05 }}
                              className="w-1 bg-gold/40 rounded-full"
                            />
                          );
                        })}
                      </div>
                      <div className="flex items-center gap-0.5">
                        {[...Array(8)].map((_, i) => {
                          // Deterministic height for SSR compatibility
                          const seed = (i + 8) * 13.7;
                          const height = 4 + ((seed * 1.3) % 24);
                          return (
                            <motion.div
                              key={i}
                              animate={{ height: [4, height, 4] }}
                              transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.05 }}
                              className="w-1 bg-gold/40 rounded-full"
                            />
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Interface Data Bars */}
                  <div className="space-y-4 relative z-10">
                    <div className="flex justify-between items-end">
                      <span className="text-[9px] font-bold text-warm-gray/40 uppercase tracking-widest">Ownership Matrix</span>
                      <span className="text-[9px] font-bold text-gold">100%_SYNC</span>
                    </div>
                    <div className="h-1.5 w-full bg-sand/30 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 1.5, delay: 1 }}
                        className="h-full bg-gold shadow-[0_0_10px_gold]"
                      />
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="h-1 bg-sand/20 rounded-full" />
                      <div className="h-1 bg-gold/40 rounded-full" />
                      <div className="h-1 bg-sand/20 rounded-full" />
                    </div>
                  </div>

                  {/* Bottom Glossy Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-white/20 to-transparent pointer-events-none" />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Row: Workflow Path */}
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center">

            {/* Visual: Integrated Circuit Path */}
            <div className="relative p-8 lg:p-12 bg-[#faf9f6] rounded-[3rem] border border-sand overflow-hidden">
              <div className="absolute inset-0 opacity-20 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]">
                <svg width="100%" height="100%" className="text-gold/20">
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>

              <div className="relative z-10 grid grid-cols-2 gap-4">
                {workflowPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white p-5 rounded-2xl border border-sand shadow-sm hover:shadow-md hover:border-gold/30 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gold/5 flex items-center justify-center mb-4 group-hover:bg-gold/10 transition-colors">
                      <point.icon className="w-5 h-5 text-gold-dark" />
                    </div>
                    <p className="text-sm font-bold text-warm-gray uppercase tracking-tighter leading-tight">{point.text}</p>
                  </motion.div>
                ))}

                {/* Animated Circuit Path SVG */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ filter: "drop-shadow(0 0 8px gold)" }}>
                  <motion.path
                    d="M 50,50 L 250,50 L 250,200 L 50,200 Z"
                    fill="none"
                    stroke="#D4AF37"
                    strokeWidth="1"
                    strokeDasharray="10 5"
                    className="opacity-20"
                  />
                </svg>
              </div>
            </div>

            <div className="space-y-8 lg:pl-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl lg:text-4xl font-serif text-warm-gray mb-4">
                  We walk the workflow end to end
                </h3>
                <p className="text-xl text-warm-gray-light font-serif italic mb-8">
                  With the people inside it.
                </p>

                <div className="p-8 bg-[#2a2a2a] rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:bg-gold/20 transition-colors" />

                  <p className="text-lg text-white/90 leading-relaxed relative z-10 font-medium pb-6">
                    We walk the workflow end to end with the people inside it.
                  </p>
                  <div className="h-px w-full bg-white/5 relative z-10" />
                  <p className="pt-6 text-gold/90 italic font-serif text-lg relative z-10">
                    Those are the moments voice AI will copy, at speed.
                  </p>
                </div>

                {/* Question Card - Integrated more tightly */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mt-10 flex gap-4 items-start"
                >
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex-shrink-0 flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-gold rotate-[-45deg]" />
                  </div>
                  <p className="text-xl font-serif italic text-warm-gray leading-tight pt-1">
                    "If someone asks why it said that, will your answer be clear, or a guess?"
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
