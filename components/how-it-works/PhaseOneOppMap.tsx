"use client"

import { motion } from "framer-motion"
import { CheckCircle2, Calculator, Target, BarChart3, Map, ShieldAlert, Zap } from "lucide-react"

const outputs = [
  "Ranked WSJF backlog of voice AI opportunities",
  "WSJF-ranked build order with clear 'why first' rationale",
  "Shortlist of highest ROI workflows",
  "Scope boundaries for each shortlisted workflow",
  "First build candidate locked",
  "Boundary map for the top items",
  "Refusal rules written upfront",
  "Escalation paths defined upfront",
  "Pass/fail proof checks agreed before build"
]

export default function PhaseOneOppMap() {
  return (
    <section id="phase-1" className="bg-white py-24 lg:py-32 relative overflow-hidden">
      {/* Background Precision Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#d4af37 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
          {/* Left Side: Content */}
          <div className="space-y-12">
            <div>
              <span className="inline-block px-4 py-1 rounded-full bg-gold/10 border border-gold/20 text-[10px] font-black text-gold uppercase tracking-[0.3em] mb-6">
                Phase 01
              </span>
              <h2 className="text-4xl lg:text-5xl font-serif text-warm-gray leading-tight mb-6">
                VoiShift <span className="text-gold italic">OppMap</span>
              </h2>
              <p className="text-xl text-warm-gray-light font-serif leading-relaxed">
                Opportunity Mapping + WSJF Prioritization. We map your workflows to identify business-critical use cases, then rank them so you know exactly what to build first, and why.
              </p>
            </div>

            {/* WSJF Visual Formula */}
            <div className="bg-cream-dark border border-sand p-8 rounded-2xl relative group overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:rotate-12 transition-transform duration-500">
                <Calculator className="w-20 h-20 text-warm-gray" />
              </div>
              <p className="text-[10px] font-black text-gold uppercase tracking-[0.4em] mb-6">Algorithm_Logic</p>
              <div className="space-y-4">
                <p className="text-2xl font-mono text-warm-gray tracking-tighter">
                  WSJF = <span className="text-gold">(Value + Criticality + Risk)</span> / <span className="opacity-40">Job Size</span>
                </p>
                <div className="w-full h-px bg-sand/50" />
                <p className="text-xs text-warm-gray-light font-mono uppercase tracking-widest leading-relaxed">
                  Weighted Shortest Job First PRIORITIZES ECONOMICS OVER HYPE.
                </p>
              </div>
            </div>

            {/* Pillar Points */}
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-sand/50 flex items-center justify-center shrink-0">
                  <Target className="w-5 h-5 text-warm-gray" />
                </div>
                <div>
                  <h4 className="font-bold text-warm-gray mb-1">ROI Focus</h4>
                  <p className="text-sm text-warm-gray-light leading-snug">Highest value workflows identified via data, not gut feel.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-sand/50 flex items-center justify-center shrink-0">
                  <ShieldAlert className="w-5 h-5 text-warm-gray" />
                </div>
                <div>
                  <h4 className="font-bold text-warm-gray mb-1">Risk Reduction</h4>
                  <p className="text-sm text-warm-gray-light leading-snug">Boundary maps and refusal rules locked before a single line of code.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: "What You Get" Deck */}
          <div className="bg-cream-dark border-2 border-sand/50 p-8 lg:p-12 rounded-[2rem] shadow-2xl relative">
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-gold rounded-full flex items-center justify-center text-warm-gray shadow-xl border-4 border-white rotate-12">
              <Zap className="w-10 h-10" />
            </div>
            
            <h3 className="text-2xl font-serif text-warm-gray italic mb-10">System Output Pack: OppMap</h3>
            
            <div className="space-y-5">
              {outputs.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-4 bg-white/80 border border-sand/30 p-4 rounded-xl hover:translate-x-2 transition-transform cursor-default group"
                >
                  <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold" />
                  </div>
                  <span className="text-sm font-bold text-warm-gray leading-tight">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-sand/50 flex items-center justify-between opacity-40">
              <span className="text-[10px] font-black uppercase tracking-widest text-warm-gray">Evaluation_ID_01</span>
              <div className="flex gap-2">
                <div className="w-1 h-1 bg-warm-gray rounded-full" />
                <div className="w-1 h-1 bg-warm-gray rounded-full" />
                <div className="w-1 h-1 bg-warm-gray rounded-full" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
