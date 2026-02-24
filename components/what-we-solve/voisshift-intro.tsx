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
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gold/5 blur-[120px] -translate-y-1/2 translate-x-1/2" />

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
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-black border border-gold/10 rounded-full">
                <Shield className="w-3.5 h-3.5 text-gold" />
                <span className="text-[15px] font-black tracking-widest text-gold uppercase">Logic Infrastructure</span>
              </div>

              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-black text-warm-gray leading-[1.1] text-balance">
                VoiShift turns voice AI from a speaking layer into a <span className="text-gold italic font-black">business system that holds up when conditions are not clean.</span>
              </h2>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-2 bg-white border border-sand shadow-sm hover:border-gold/30 transition-colors text-center">
                  <p className="text-lg font-serif text-warm-gray italic mb-1">
                    You can rent a voice.
                  </p>
                </div>
                <div className="p-2 bg-[#2a2a2a] border border-gold shadow-xl text-center">
                  <p className="text-lg font-serif text-gold font-bold">
                    You cannot rent ownership of what is true.
                  </p>
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
                    <span className="text-md text-gold-dark line-through decoration-gold">{text}</span>
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
                  <div className="h-1 w-full bg-gold rounded-full overflow-hidden">
                    <motion.div
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="h-full w-1/3 bg-gold"
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
                <div className="relative bg-white border border-gold shadow-[0_40px_80px_rgba(212,175,55,0.25)] p-8 overflow-hidden group">
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
                      <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center relative overflow-hidden">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent,gold/20)]"
                        />
                        <Zap className="w-5 h-5 text-gold relative z-10" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-black text-warm-gray uppercase tracking-widest">Logic Node 01</span>
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

        </div>
      </div>
    </section>
  )
}
