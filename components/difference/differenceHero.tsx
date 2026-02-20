"use client"

import { motion } from "framer-motion"
import { ArrowRight, Box, ShieldCheck, Activity } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useModal } from "@/context/modal-context"

export default function DifferenceHero() {
  const { openModal } = useModal()

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-cream-dark">
      {/* Background HUD Decor */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold/5 rounded-none blur-[150px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gold/5 rounded-none blur-[120px] translate-y-1/2 -translate-x-1/2" />
        
        {/* Animated Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]">
          <pattern id="grid-hero" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid-hero)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center">
          
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-12 h-[1px] bg-gold" />
              <span className="text-xs font-black uppercase tracking-[0.4em] text-gold">The VoiShift Difference</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl lg:text-8xl font-serif text-warm-gray leading-[1.05] tracking-tight mb-8"
            >
              We do not build voice agents. <br />
              <span className="italic text-gold/90">We build voice systems.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 mb-12"
            >
              <p className="text-xl lg:text-3xl text-warm-gray-light font-serif italic leading-relaxed max-w-3xl">
                Proven under edge cases. Governed by rules. Measurable over time.
              </p>
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
                Design My System
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="heroSecondary"
                size="lg"
                asChild
                className="rounded-none px-8 py-7 text-lg group border-2"
              >
                <a href="/case-studies">
                  View Case Studies
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Visual Side HUD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hidden lg:block relative"
          >
             <div className="relative p-12 bg-white/40 border border-sand shadow-2xl overflow-hidden backdrop-blur-sm">
                <div className="absolute top-0 right-0 p-4 border-l border-b border-sand text-[8px] font-black text-warm-gray/40 tracking-widest uppercase">
                  System_Specs_v2.1
                </div>

                <div className="space-y-10">
                   {/* HUD Stat 1 */}
                   <div className="space-y-4">
                      <div className="flex justify-between items-end">
                        <span className="text-[10px] font-black text-warm-gray uppercase tracking-widest">Logic_Consistency</span>
                        <span className="text-[10px] font-black text-gold">99.9%_VERIFIED</span>
                      </div>
                      <div className="h-1 w-full bg-sand/30 overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: "99.9%" }}
                          transition={{ duration: 2, delay: 1 }}
                          className="h-full bg-gold shadow-[0_0_10px_gold]" 
                        />
                      </div>
                   </div>

                   {/* HUD Icons */}
                   <div className="grid grid-cols-3 gap-6">
                      <div className="aspect-square border border-sand flex items-center justify-center bg-white/50 group hover:border-gold/30 transition-colors">
                        <ShieldCheck className="w-6 h-6 text-gold/30 group-hover:text-gold transition-colors" />
                      </div>
                      <div className="aspect-square border border-sand flex items-center justify-center bg-white/50 group hover:border-gold/30 transition-colors">
                        <Box className="w-6 h-6 text-gold/30 group-hover:text-gold transition-colors" />
                      </div>
                      <div className="aspect-square border border-sand flex items-center justify-center bg-white/50 group hover:border-gold/30 transition-colors">
                        <Activity className="w-6 h-6 text-gold/30 group-hover:text-gold transition-colors" />
                      </div>
                   </div>

                   {/* Data Feed */}
                   <div className="space-y-2">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="flex gap-2 items-center">
                          <div className="w-1 h-1 bg-gold" />
                          <div className="h-[2px] bg-sand/20 flex-1" />
                          <span className="text-[8px] font-mono text-warm-gray/40">0x0{i}_READY</span>
                        </div>
                      ))}
                   </div>
                </div>

                {/* Subtle scanning line */}
                <motion.div 
                  animate={{ top: ["0%", "100%", "0%"] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 right-0 h-px bg-gold/10 pointer-events-none"
                />
             </div>
          </motion.div>
        </div>
      </div>

      {/* Sharp HUD Bottom Detail */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
    </section>
  )
}
