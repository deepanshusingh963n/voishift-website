"use client"

import { motion } from "framer-motion"
import { AlertTriangle, Search, Wrench, TrendingUp, FileCheck, Map, Target, TestTube, RotateCcw, Activity, Shield, Cpu, CornerRightDown, ArrowRight } from "lucide-react"

const failureDetails = {
  what: "The agent sounded confident. The outcome was wrong.",
  broke: [
    "Two sources disagreed",
    "An exception was missing",
    "The agent guessed and kept going",
  ],
  changed: [
    "Truth was locked",
    "Refusal was defined",
    "Actions were gated",
  ],
  improved: [
    "Fewer repeat calls",
    "Fewer cleanups",
    "Fewer escalations",
    "Faster resolution when things got messy",
  ],
}

const deliverables = [
  { text: "A system blueprint", icon: FileCheck },
  { text: "A boundary map of what the agent can and cannot do", icon: Map },
  { text: "A stress test report showing where it will fail today", icon: Target },
  { text: "Evaluation results you can rerun after every change", icon: RotateCcw },
]

/* --- v2.0 Forensic Path Components --- */

const ForensicTrace = () => (
  <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-sand hidden lg:block">
    <motion.div
      animate={{ top: ["0%", "100%"] }}
      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      className="absolute w-1 h-32 bg-gradient-to-b from-transparent via-gold to-transparent -translate-x-1/2"
    />
  </div>
)

const EvidenceFile = ({ item, index }: { item: any, index: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="group relative bg-white rounded-2xl border border-sand p-5 shadow-sm hover:shadow-xl hover:border-gold/30 transition-all duration-500 overflow-hidden"
  >
    {/* File ID Sticker */}
    <div className="absolute top-0 right-10 bg-[#faf9f6] border-x border-b border-sand px-2 py-0.5 rounded-b-md">
      <span className="text-[7px] font-black text-warm-gray/30 uppercase tracking-widest">FILE_ID: VSH-0{index + 1}</span>
    </div>

    <div className="flex items-center gap-4 relative z-10">
      <div className="w-12 h-12 rounded-xl bg-gold/5 flex items-center justify-center border border-gold/10 group-hover:bg-gold/10 transition-colors">
        <item.icon className="w-6 h-6 text-gold" />
      </div>
      <div className="flex-1">
        <p className="text-sm font-bold text-warm-gray leading-tight">{item.text}</p>
        <div className="flex items-center gap-1.5 mt-1">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500/50" />
          <span className="text-[8px] font-black text-warm-gray/40 uppercase tracking-tighter">Status: Verified_Output</span>
        </div>
      </div>
      <ArrowRight className="w-4 h-4 text-sand group-hover:text-gold transition-colors" />
    </div>
  </motion.div>
)

const IntegrityBoundaryVisual = () => (
  <div className="relative w-full aspect-[4/3] bg-[#faf9f6]/50 rounded-[3rem] border border-sand overflow-hidden group">
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]" />

    {/* 3D Grid Floor */}
    <div className="absolute inset-0 [perspective:1000px]">
      <div className="absolute inset-0 [transform:rotateX(60deg)] opacity-[0.2]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,gold_1px,transparent_1px),linear-gradient(to_bottom,gold_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>
    </div>

    {/* The Boundary Wall */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative w-48 h-48">
        <motion.div
          animate={{ scale: [1, 1.05, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute inset-0 bg-gold blur-3xl rounded-full"
        />
        <div className="absolute inset-4 rounded-[2.5rem] border-2 border-gold/30 flex items-center justify-center bg-white/40 backdrop-blur-sm">
          <div className="relative">
            <Shield className="w-16 h-16 text-gold/40" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-8 border border-gold/10 border-dashed rounded-full"
            />
          </div>
        </div>
      </div>
    </div>

    {/* Stress Data Points (Deflecting) */}
    {[...Array(5)].map((_, i) => (
      <motion.div
        key={i}
        initial={{ x: -100, y: 0, opacity: 0 }}
        animate={{
          x: [0, 150, 0],
          y: [150, 0, -150],
          opacity: [0, 1, 0]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: i * 0.6,
          ease: "easeOut"
        }}
        className="absolute w-2 h-2 rounded-full bg-red-400 blur-[1px]"
        style={{ top: '50%', left: '30%' }}
      />
    ))}

    <div className="absolute top-6 left-6 flex items-center gap-2">
      <div className="w-2 h-2 rounded-full bg-gold animate-pulse shadow-[0_0_10px_gold]" />
      <span className="text-[10px] font-black text-warm-gray uppercase tracking-widest">Boundary_Integrity: 100%</span>
    </div>
  </div>
)

export function Proof() {
  return (
    <section className="py-20 lg:py-24 bg-white relative overflow-hidden">
      {/* Background Subtle Elements */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sand to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/5 border border-gold/10 rounded-full mb-6">
            <Cpu className="w-3.5 h-3.5 text-gold" />
            <span className="text-[10px] font-black tracking-widest text-gold uppercase">Evidence Phase</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-warm-gray leading-[1.1] mb-8 text-balance max-w-4xl mx-auto">
            Proof that holds up
          </h2>
          <p className="text-xl md:text-2xl text-warm-gray-light font-serif italic max-w-2xl mx-auto">
            We do not bring opinions. <br className="hidden md:block" />
            <span className="text-warm-gray not-italic font-bold underline decoration-gold/30">We bring evidence from your own reality.</span>
          </p>
        </motion.div>

        {/* FORENSIC TIMELINE REPLAY */}
        <div className="relative mb-32">
          <ForensicTrace />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">

            {/* Step 1: Failure */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="group"
            >
              <div className="p-8 bg-red-50/30 rounded-[2.5rem] border border-red-100 flex flex-col h-full hover:shadow-lg transition-all duration-500">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-red-500 text-white flex items-center justify-center shadow-lg shadow-red-200">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-black text-red-600 uppercase tracking-widest">Failure_Log</span>
                </div>
                <p className="text-lg text-warm-gray leading-snug font-serif italic mb-6">"{failureDetails.what}"</p>
                <div className="mt-auto pt-6 border-t border-red-100/50">
                  <div className="flex items-center gap-2 opacity-30">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    <span className="text-[8px] font-bold uppercase">System_Interrupt</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Step 2: Root Cause */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="p-8 bg-[#faf9f6] rounded-[2.5rem] border border-sand flex flex-col h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-warm-gray text-white flex items-center justify-center">
                    <Search className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-black text-warm-gray-light uppercase tracking-widest">Root_Cause</span>
                </div>
                <ul className="space-y-4">
                  {failureDetails.broke.map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-warm-gray font-medium leading-relaxed">
                      <span className="text-gold mt-1 text-[10px]">0{i + 1}</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Step 3: Resolution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="p-8 bg-gold/5 rounded-[2.5rem] border border-gold/20 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gold text-[#1a1a1a] flex items-center justify-center shadow-lg shadow-gold/20">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-black text-gold uppercase tracking-widest">Resolution</span>
                </div>
                <ul className="space-y-4">
                  {failureDetails.changed.map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-warm-gray font-bold leading-relaxed">
                      <CheckCircleIcon className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Step 4: Outcome */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="p-8 bg-green-50/50 rounded-[2.5rem] border border-green-100 flex flex-col h-full shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-green-600 text-white flex items-center justify-center shadow-lg shadow-green-100">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-black text-green-700 uppercase tracking-widest">Outcome</span>
                </div>
                <ul className="space-y-4">
                  {failureDetails.improved.map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-green-900 font-bold leading-tight">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>

        {/* DELIVERABLES & INTEGRITY */}
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center">

          {/* Left side: Evidence Files */}
          <div className="space-y-12">
            <div className="relative">
              <h3 className="text-3xl font-serif text-warm-gray mb-4">What you get back</h3>
              <div className="h-px w-16 bg-gold/30 mb-8" />
            </div>

            <div className="grid sm:grid-cols-1 gap-4">
              {deliverables.map((item, index) => (
                <EvidenceFile key={index} item={item} index={index} />
              ))}
            </div>

            <div className="p-8 bg-[#faf9f6] rounded-[2.5rem] border border-sand flex items-start gap-6 group hover:border-gold/30 transition-all">
              <TestTube className="w-6 h-6 text-gold mt-1 shrink-0" />
              <div>
                <h4 className="text-[11px] font-black text-warm-gray/40 uppercase tracking-[0.3em] mb-4">Internal Evidence Context</h4>
                <p className="text-lg text-warm-gray leading-relaxed font-serif italic">
                  Proof does not come from our demos. <br className="hidden md:block" />
                  It comes from <span className="text-warm-gray not-italic font-bold">your calls, your workflows, your edge cases.</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right side: Boundary Illustration */}
          <div className="space-y-10">
            <IntegrityBoundaryVisual />

            <div className="p-10 bg-white rounded-[3.5rem] border-2 border-gold/30 shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/asphalt.png')]" />

              <div className="relative z-10 text-center">
                <div className="inline-flex items-center gap-2 mb-6 opacity-30">
                  <RotateCcw className="w-4 h-4" />
                  <span className="text-[9px] font-black text-warm-gray uppercase tracking-[0.4em]">Continuous_Verification_Loop</span>
                </div>

                <p className="text-xl md:text-2xl text-warm-gray-light leading-relaxed font-serif italic mb-2">
                  If something goes wrong again, will you have a replay and an answer...
                </p>
                <p className="text-2xl md:text-3xl text-warm-gray font-serif font-black">
                  Or just a post-mortem story?
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

function CheckCircleIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
}
