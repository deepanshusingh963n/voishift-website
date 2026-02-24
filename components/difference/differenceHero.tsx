"use client"

import { motion } from "framer-motion"
import { ArrowRight, Box, ShieldCheck, Activity } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useModal } from "@/context/modal-context"


type LayerProps = {
  label: string
}

const Layer = ({ label }: LayerProps) => (
  <div className="relative z-10 w-full border border-sand bg-white/70 px-4 py-3 text-xs font-mono text-warm-gray tracking-wide text-center">
    {label}
  </div>
)

type BranchDotProps = {
  color: string
}

const BranchDot = ({ color }: BranchDotProps) => (
  <motion.div
    animate={{ scale: [1, 1.4, 1] }}
    transition={{ duration: 2, repeat: Infinity }}
    className={`w-3 h-3 rounded-full ${color} shadow`}
  />
)

const Connector = () => (
  <div className="w-px h-6 bg-sand/40" />
)

export default function DifferenceHero() {
  const { openModal } = useModal()

  return (
    <section className="relative pt-32 pb-20 lg:pt-30 lg:pb-28 overflow-hidden bg-cream-dark">
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
              <span className="text-7xl font-black uppercase tracking-[0.15em] text-gold">The VoiShift Difference</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl lg:text-2xl font-serif text-warm-gray leading-[1.05] tracking-tight mb-8"
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
              <p className="text-lg lg:text-xl text-warm-gray-light font-serif italic leading-relaxed max-w-3xl">
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

{/* Behavioral System Lifecycle Model */}
<motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, delay: 0.4 }}
  className="hidden lg:flex justify-center items-center relative w-full"
>
  <div className="relative w-full max-w-[480px] aspect-square">

    <svg
      viewBox="0 0 400 400"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
    >

      {/* Outer Lifecycle Ring */}
      <circle
        cx="200"
        cy="200"
        r="180"
        fill="none"
        stroke="#D4AF37"
        strokeWidth="1.5"
        opacity="0.3"
      />

      {/* Middle State Ring */}
      <circle
        cx="200"
        cy="200"
        r="130"
        fill="none"
        stroke="#D4AF37"
        strokeWidth="1"
        opacity="0.25"
      />

      {/* Inner Function Ring */}
      <circle
        cx="200"
        cy="200"
        r="85"
        fill="none"
        stroke="#D4AF37"
        strokeWidth="1"
        opacity="0.2"
      />

      {/* Section Dividers */}
      {[0, 90, 180, 270].map((angle, i) => {
        const rad = (angle * Math.PI) / 180
        return (
          <line
            key={i}
            x1="200"
            y1="200"
            x2={200 + 180 * Math.cos(rad)}
            y2={200 + 180 * Math.sin(rad)}
            stroke="#D4AF37"
            strokeWidth="0.8"
            opacity="0.15"
          />
        )
      })}

      {/* Center Core */}
      <motion.circle
        cx="200"
        cy="200"
        r="45"
        fill="#D4AF37"
        animate={{ opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <text
        x="200"
        y="195"
        textAnchor="middle"
        fontSize="9"
        fill="#6b5c3b"
        fontWeight="bold"
        letterSpacing="2"
      >
        VOICE
      </text>

      <text
        x="200"
        y="210"
        textAnchor="middle"
        fontSize="9"
        fill="#6b5c3b"
        fontWeight="bold"
        letterSpacing="2"
      >
        SYSTEM
      </text>

      {/* Lifecycle Labels */}
      <text x="200" y="20" textAnchor="middle" fontSize="10" fill="#6b5c3b">
        BEFORE
      </text>

      <text x="380" y="205" textAnchor="end" fontSize="10" fill="#6b5c3b">
        DURING
      </text>

      <text x="200" y="395" textAnchor="middle" fontSize="10" fill="#6b5c3b">
        AFTER
      </text>

      <text x="20" y="205" textAnchor="start" fontSize="10" fill="#6b5c3b">
        LONG-TERM
      </text>

      {/* System States */}
      <text x="200" y="70" textAnchor="middle" fontSize="9" fill="#8E6B2F">
        Normal
      </text>

      <text x="330" y="205" textAnchor="middle" fontSize="9" fill="#8E6B2F">
        Alert
      </text>

      <text x="200" y="340" textAnchor="middle" fontSize="9" fill="#8E6B2F">
        Recovery
      </text>

      <text x="70" y="205" textAnchor="middle" fontSize="9" fill="#8E6B2F">
        Intervention
      </text>

      {/* Core Functions */}
      <text x="200" y="120" textAnchor="middle" fontSize="8" fill="#6b5c3b">
        Monitor
      </text>
      <text x="285" y="200" textAnchor="middle" fontSize="8" fill="#6b5c3b">
        Gate
      </text>
      <text x="200" y="280" textAnchor="middle" fontSize="8" fill="#6b5c3b">
        Replay
      </text>
      <text x="115" y="200" textAnchor="middle" fontSize="8" fill="#6b5c3b">
        Escalate
      </text>

    </svg>

  </div>
</motion.div>
        </div>
      </div>

      {/* Sharp HUD Bottom Detail */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
    </section>
  )
}
