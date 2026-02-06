"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Lock, ShieldOff, TestTube, Zap, Settings, BarChart3, RefreshCw, Users, Plug, Eye, RotateCcw, AlertTriangle, CheckCircle2, ArrowRight, Activity, Cpu } from "lucide-react"

const disciplines = [
  {
    title: "Controlled truth",
    description: "The agent speaks only from sources the business has actually approved. No guessing. No helpful improvisation.",
    icon: Lock,
    color: "#D4AF37"
  },
  {
    title: "Designed refusal",
    description: "Refusal is planned upfront, not patched later. If it cannot be sure, it stops cleanly.",
    icon: ShieldOff,
    color: "#D4AF37"
  },
  {
    title: "Real evaluation",
    description: "We test against your calls, your tickets, your edge cases. Not demos. Not benchmarks.",
    icon: TestTube,
    color: "#D4AF37"
  },
  {
    title: "Long-tail first",
    description: "The rare cases are treated as the main job. That is where trust usually breaks.",
    icon: Zap,
    color: "#D4AF37"
  },
]

const scaleSteps = [
  { text: "Define what the agent can do, confirm, refuse, escalate", icon: Settings },
  { text: "Measure what it actually did in real situations", icon: BarChart3 },
  { text: "Review drift, changes, and new failure paths", icon: RefreshCw },
  { text: "Own corrections before they hit customers or teams", icon: Users },
]

const lifecycle = ["Design", "Test", "Scale", "Optimize"]

const fitFeatures = [
  { text: "Plugs into what you already run", icon: Plug },
  { text: "Deploy where you need it", icon: Settings },
  { text: "Every action can be replayed and explained", icon: Eye },
]

/* --- Advanced Abstract Illustrations --- */

const DisciplineVisual = ({ index }: { index: number }) => {
  // Custom SVGs based on discipline concepts
  const visuals = [
    // Controlled Truth: Logic Sieve
    <svg key="sieve" viewBox="0 0 100 100" className="w-full h-full text-gold">
      <motion.path
        d="M 20,30 L 80,30 L 70,80 L 30,80 Z"
        fill="none" stroke="currentColor" strokeWidth="2"
      />
      {[1, 2, 3].map(i => (
        <motion.circle
          key={i}
          animate={{ y: [0, 40], opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
          cx={40 + i * 5} cy="20" r="2" fill="currentColor"
        />
      ))}
      <motion.path
        d="M 40,80 Q 50,95 60,80"
        fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="2 2"
        animate={{ strokeDashoffset: [0, -10] }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </svg>,
    // Designed Refusal: Crystal Break
    <svg key="refusal" viewBox="0 0 100 100" className="w-full h-full text-gold">
      <motion.rect x="30" y="30" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" />
      <motion.path
        d="M 30,50 L 70,50 M 50,30 L 50,70"
        stroke="currentColor" strokeWidth="1" strokeDasharray="4 2"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        d="M 10,10 L 30,30 M 90,10 L 70,30 M 10,90 L 30,70 M 90,90 L 70,70"
        stroke="currentColor" strokeWidth="3"
      />
    </svg>,
    // Real Evaluation: Stress Monitor
    <svg key="eval" viewBox="0 0 100 100" className="w-full h-full text-gold">
      <motion.path
        d="M 10,50 Q 25,20 40,50 T 70,50 T 90,50"
        fill="none" stroke="currentColor" strokeWidth="2"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 2 }}
      />
      <motion.circle
        animate={{ r: [2, 4, 2] }}
        transition={{ duration: 1, repeat: Infinity }}
        cx="40" cy="50" r="2" fill="currentColor"
      />
    </svg>,
    // Long-tail First: Node Focus
    <svg key="long-tail" viewBox="0 0 100 100" className="w-full h-full text-gold">
      <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" />
      {[0, 90, 180, 270].map(deg => (
        <circle
          key={deg}
          cx={50 + 30 * Math.cos(deg * Math.PI / 180)}
          cy={50 + 30 * Math.sin(deg * Math.PI / 180)}
          r="3" fill="currentColor" opacity="0.3"
        />
      ))}
      <motion.circle
        animate={{ r: [2, 6, 2], opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        cx="80" cy="80" r="4" fill="currentColor"
      />
      <path d="M 50,50 L 80,80" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2" />
    </svg>
  ]
  return visuals[index]
}

/* --- Scale Orbit Visual --- */

const ScaleOrbit = () => (
  <div className="relative w-full aspect-square max-w-[400px] mx-auto flex items-center justify-center">
    {/* Central Core */}
    <div className="relative z-10 w-24 h-24 rounded-full bg-white border-2 border-gold shadow-[0_0_50px_rgba(212,175,55,0.2)] flex items-center justify-center">
      <RotateCcw className="w-10 h-10 text-gold-dark animate-spin-slow" />
    </div>

    {/* Orbital Rings */}
    <div className="absolute inset-0 border border-sand rounded-full" />
    <div className="absolute inset-8 border border-sand/50 rounded-full" />

    {/* Satellites (Steps) */}
    {scaleSteps.map((step, i) => {
      const angle = (i * 90) * (Math.PI / 180)
      return (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: i * 0.2 }}
          className="absolute w-12 h-12 bg-white rounded-xl border border-sand shadow-lg flex items-center justify-center text-gold-dark z-20"
          style={{
            left: `calc(50% + ${Math.cos(angle) * 45}% - 24px)`,
            top: `calc(50% + ${Math.sin(angle) * 45}% - 24px)`
          }}
        >
          <step.icon className="w-5 h-5" />
        </motion.div>
      )
    })}

    {/* Orbiting Particles */}
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={i}
        animate={{ rotate: 360 }}
        transition={{ duration: 10 + i * 2, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 pointer-events-none"
      >
        <div
          className="w-1.5 h-1.5 rounded-full bg-gold/40 shadow-[0_0_10px_gold]"
          style={{ transform: `translateX(180px) translateY(${i * 10}px)` }}
        />
      </motion.div>
    ))}
  </div>
)

/* --- Glitch-to-Gold Diagnosis Card --- */

const FixCard = ({ failure, why, fix, result, details }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="group relative grid lg:grid-cols-[1fr_1.5fr] gap-px bg-sand rounded-[2rem] overflow-hidden border border-sand transition-all duration-500 hover:shadow-2xl"
  >
    {/* Failure State (Red/Glitched) */}
    <div className="bg-white p-8 relative flex flex-col justify-center">
      <div className="flex items-center gap-2 text-destructive font-black text-[10px] uppercase tracking-widest mb-4">
        <AlertTriangle className="w-3.5 h-3.5" />
        Failure Mode
      </div>
      <motion.h4
        animate={{ opacity: [1, 0.8, 1], x: [0, -1, 1, 0] }}
        transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 3 }}
        className="text-xl text-warm-gray font-bold italic"
      >
        {failure}
      </motion.h4>
      <p className="text-sm text-warm-gray-light mt-4">{why}</p>

      {/* Background Grain Effect */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
    </div>

    {/* Resolve State (Gold/System) */}
    <div className="bg-white/90 backdrop-blur-sm p-8 flex flex-col lg:flex-row items-center gap-10 relative overflow-hidden">
      {/* Glow sweep animation */}
      <motion.div
        animate={{ x: ["-100%", "200%"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="absolute inset-y-0 w-32 bg-gradient-to-r from-transparent via-gold/10 to-transparent skew-x-12"
      />

      <div className="flex-1 relative z-10">
        <div className="text-gold-dark font-black text-[10px] uppercase tracking-widest mb-4">VoiShift Fix</div>
        <p className="text-lg font-bold text-warm-gray">
          {fix}
          {details && <br />}
          {details && <span className="text-sm font-normal text-warm-gray/60">{details}</span>}
        </p>
      </div>

      <div className="h-px lg:w-px lg:h-12 bg-gold/20 w-full relative z-10" />

      <div className="flex-1 relative z-10">
        <div className="text-green-600 font-black text-[10px] uppercase tracking-widest mb-4 flex items-center gap-2">
          <CheckCircle2 className="w-3.5 h-3.5" />
          Result
        </div>
        <p className="text-lg font-bold text-green-700">{result}</p>
      </div>
    </div>
  </motion.div>
)

export function Differentiation() {
  const containerRef = useRef(null)

  return (
    <section ref={containerRef} className="py-20 lg:py-24 bg-white relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute inset-0 opacity-[0.01] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')]" />
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gold/5 blur-[150px] rounded-full translate-x-1/3 -translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/5 border border-gold/10 rounded-full mb-6 text-gold">
            <ShieldOff className="w-3.5 h-3.5 rotate-180" />
            <span className="text-[10px] font-black tracking-widest uppercase">The VoiShift Standard</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-warm-gray leading-[1.1] mb-8 text-balance">
            What makes VoiShift different
          </h2>
          <p className="text-xl md:text-2xl text-warm-gray-light max-w-3xl mx-auto font-serif italic">
            Most teams make voice AI sound smart. <br className="hidden md:block" />
            <span className="text-warm-gray not-italic font-bold">We make it behave safely when things break.</span>
          </p>
        </motion.div>

        {/* Four disciplines grid */}
        <div className="mb-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {disciplines.map((discipline, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative p-8 rounded-[2.5rem] bg-white border border-sand hover:border-gold transition-all duration-500 hover:shadow-2xl overflow-hidden"
              >
                {/* Background Blueprint Grain */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]" />

                <div className="w-16 h-16 mb-8 relative">
                  <div className="absolute inset-0 bg-gold/5 rounded-2xl group-hover:bg-gold/10 transition-colors" />
                  <DisciplineVisual index={index} />
                </div>

                <h4 className="text-xl font-bold text-warm-gray mb-4">{discipline.title}</h4>
                <p className="text-warm-gray-light leading-relaxed text-sm">{discipline.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* How this stays sane at scale - Orbital Section */}
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 mb-32 items-center">
          <div>
            <ScaleOrbit />
          </div>
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-serif text-warm-gray mb-6">How this stays sane at scale</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {scaleSteps.map((step, i) => (
                  <div key={i} className="p-5 bg-[#faf9f6] rounded-2xl border border-sand hover:border-gold/30 transition-all group">
                    <div className="w-10 h-10 rounded-xl bg-white border border-sand flex items-center justify-center mb-4 group-hover:text-gold transition-colors shadow-sm">
                      <step.icon className="w-5 h-5" />
                    </div>
                    <p className="text-sm font-medium text-warm-gray-light leading-tight">{step.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="flex gap-4 items-center">
              <div className="h-0.5 flex-1 bg-gradient-to-r from-sand to-transparent" />
              <div className="flex gap-2">
                {lifecycle.map((stage, i) => (
                  <span key={i} className="text-[10px] font-black text-gold uppercase tracking-tighter opacity-40">{stage}</span>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-gold font-black text-[10px] uppercase tracking-widest">
                  <RotateCcw className="w-4 h-4" /> System Lifecycle
                </div>
                <p className="text-md text-warm-gray-light italic">Voice AI is reviewed like a system, not shipped like a feature.</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-gold font-black text-[10px] uppercase tracking-widest">
                  <Plug className="w-4 h-4" /> Infrastructure Fit
                </div>
                <p className="text-sm text-warm-gray-light">Every action can be replayed and explained across your existing stack.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Anatomy of a Fix - Diagnostics */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-serif text-warm-gray mb-4">The Anatomy of a Fix</h2>
            <p className="text-warm-gray-light leading-relaxed">Closing the gap between model potential and business reality.</p>
          </motion.div>

          <div className="space-y-6 max-w-5xl mx-auto">
            <FixCard
              failure='"I can offer you a full refund."'
              why="LLM hallucinated policy based on training data overlap."
              fix="Deterministic Policy Layer"
              details="RAG + Hard Rules"
              result="0% unauthorized refund rate."
            />
            <FixCard
              failure='Bot looping "I didn&apos;t catch that."'
              why="Timeout settings too aggressive for elderly callers."
              fix="Adaptive Listening Duration"
              result="40% drop in hang-ups."
            />
          </div>
        </div>

        {/* Rent vs Build + Closing Quote */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-[#2A2A2A] text-white rounded-[3rem] border-2 border-gold/50 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent pointer-events-none" />

            <div className="grid md:grid-cols-2 gap-0 relative h-full">
              <div className="absolute top-1/4 bottom-1/4 left-1/2 w-px bg-white/10 -translate-x-1/2 hidden md:block" />

              <div className="p-10 lg:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <h3 className="text-2xl font-serif text-white">Rent</h3>
                  <span className="text-[10px] font-black text-white/30 uppercase tracking-widest">(SaaS Wrappers)</span>
                </div>
                <ul className="space-y-6">
                  {["Fast to start, impossible to scale.", "You don't own the data or the model.", "Generic prompt injection vulnerabilities."].map((text, i) => (
                    <li key={i} className="flex gap-4 group">
                      <span className="text-red-400 group-hover:scale-125 transition-transform">×</span>
                      <span className="text-white/60 text-sm leading-relaxed">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-10 lg:p-12 bg-white/5 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-6">
                  <h3 className="text-2xl font-serif text-gold">Build</h3>
                  <span className="text-[10px] font-black text-gold/30 uppercase tracking-widest">(Self-Hosted)</span>
                </div>
                <ul className="space-y-6">
                  {["Modular components you control.", "Observability into every decision node.", "The \"Minimum Ownership Line\" is respected."].map((text, i) => (
                    <li key={i} className="flex gap-4 group">
                      <span className="text-gold group-hover:scale-125 transition-transform font-bold">✓</span>
                      <span className="text-white/80 text-sm leading-relaxed">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Final Emotional Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-[3.5rem] bg-gradient-to-br from-[#faf9f6] to-white items-center justify-center flex flex-col p-10 lg:p-16 text-center border border-sand shadow-inner relative overflow-hidden"
          >
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />

            <blockquote className="space-y-10 relative z-10">
              <div className="space-y-2">
                <p className="text-3xl font-serif font-black text-gold-dark italic">
                  "You can rent a voice."
                </p>
                <p className="text-3xl font-serif font-black text-warm-gray">
                  "You cannot rent ownership of what is true."
                </p>
              </div>

              <div className="h-px w-12 bg-gold/30 mx-auto" />

              <p className="text-xl text-warm-gray-light font-serif leading-relaxed max-w-md mx-auto italic">
                If something goes wrong tomorrow, will you know exactly why,
                <br className="hidden md:block" />
                or will you be guessing after the damage is done?
              </p>
            </blockquote>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
