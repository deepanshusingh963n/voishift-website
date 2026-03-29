"use client"

import { motion } from "framer-motion"

export function CaseStudiesHero() {
  return (
    <section id="hero" className="relative min-h-[70vh] flex items-center pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-[#0a0a0a]">
      {/* Structural Blueprint Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Volumetric Gold Glows */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-gold/20 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-gold/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-90" />

        {/* Ambient Wave Texture */}
        <div className="absolute inset-0 opacity-[0.8]">
          <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1440 800" className="absolute inset-0">
            {/* Wave 1 - Foreground Gold */}
            <motion.path
              d="M0,400 C320,300 420,500 720,400 C1020,300 1120,500 1440,400 L1440,800 L0,800 Z"
              fill="url(#gold-gradient-1)"
              animate={{
                d: [
                  "M0,400 C320,300 420,500 720,400 C1020,300 1120,500 1440,400 L1440,800 L0,800 Z",
                  "M0,400 C320,500 420,300 720,400 C1020,500 1120,300 1440,400 L1440,800 L0,800 Z",
                  "M0,400 C320,300 420,500 720,400 C1020,300 1120,500 1440,400 L1440,800 L0,800 Z"
                ]
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Wave 2 - Midground Gold */}
            <motion.path
              d="M0,450 C320,350 420,550 720,450 C1020,350 1120,550 1440,450 L1440,800 L0,800 Z"
              fill="url(#gold-gradient-2)"
              animate={{
                d: [
                  "M0,450 C320,550 420,350 720,450 C1020,550 1120,350 1440,450 L1440,800 L0,800 Z",
                  "M0,450 C320,350 420,550 720,450 C1020,350 1120,550 1440,450 L1440,800 L0,800 Z",
                  "M0,450 C320,550 420,350 720,450 C1020,550 1120,350 1440,450 L1440,800 L0,800 Z"
                ]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Wave 3 - Background White/Silver */}
            <motion.path
              d="M0,350 C320,250 420,450 720,350 C1020,250 1120,450 1440,350 L1440,800 L0,800 Z"
              fill="url(#silver-gradient)"
              animate={{
                d: [
                  "M0,350 C320,250 420,450 720,350 C1020,250 1120,450 1440,350 L1440,800 L0,800 Z",
                  "M0,350 C320,450 420,250 720,350 C1020,450 1120,250 1440,350 L1440,800 L0,800 Z",
                  "M0,350 C320,250 420,450 720,350 C1020,250 1120,450 1440,350 L1440,800 L0,800 Z"
                ]
              }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            />

            <defs>
              <linearGradient id="gold-gradient-1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="gold-gradient-2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="silver-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Blueprint Frames */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl w-full text-center flex flex-col items-center"
        >
          {/* Breadcrumbs Status Bar */}
          <div className="inline-flex items-center bg-white/[0.03] backdrop-blur-md border border-white/10 px-6 py-2.5 rounded-full mb-10 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black text-white/50 uppercase tracking-widest">Home</span>
                <span className="text-white/30">/</span>
                <span className="text-[10px] font-black text-gold uppercase tracking-widest">Case Studies</span>
              </div>
            </div>
          </div>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[1.05] uppercase font-black mb-10 text-balance">
            Voices That <br /> <span className="text-gold italic">Build</span> Clarity
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center mt-2 relative w-full"
          >
            <div className="border-l-2 border-gold pl-6 max-w-2xl text-left">
              <p className="text-xl md:text-2xl text-white/60 leading-relaxed font-serif italic selection:bg-gold/20">
                How teams transformed their voice AI from experimental to essential. Real outcomes. Real challenges. Real solutions.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
