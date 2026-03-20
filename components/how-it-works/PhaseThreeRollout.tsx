"use client"

import React from "react"
import { motion } from "framer-motion"
import { ShieldCheck, TrendingUp, MonitorCheck, Lock, Layers, History, CheckCircle2, Activity, ArrowRight } from "lucide-react"
import { useModal } from "@/context/modal-context"
import { Button } from "@/components/ui/button"

const outputs = [
  "Phase-wise production rollout, one workflow at a time",
  "Proof gates enforced every phase",
  "Guardrails that keep working under pressure",
  "Traceability that survives changes (decisions auditable)",
  "Production hardening for real load and variability",
  "Drift monitoring so performance doesn't silently degrade",
  "Controlled fixes that don't create repeat failures",
  "Ongoing visibility into failures, fixes, and changes as you scale"
]

export default function PhaseThreeRollout() {
  const { openModal } = useModal()
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="phase-3" className="bg-white py-24 lg:py-32 relative overflow-hidden">
      {/* Background Section Decor */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(#d4af37 0.5px, transparent 0.5px), linear-gradient(90deg, #d4af37 0.5px, transparent 0.5px)', backgroundSize: '100px 100px' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* Left Side: Content & Visual */}
          <div className="space-y-12">
            <div>
              <span className="inline-block px-4 py-1 rounded-full bg-black border border-gold/20 text-[15px] font-black text-gold uppercase tracking-[0.3em] mb-6">
                Phase 03
              </span>
              <h2 className="text-4xl lg:text-5xl font-serif text-gold font-black leading-tight mb-6">
                VoiShift <span className="text-gold italic">Proof Gated Rollout</span>
              </h2>
              <p className="text-xl text-warm-gray-light font-serif leading-relaxed">
                Mini Rollout + Production Hardening + Drift Monitoring. If the validation holds up, we move into production. Every expansion ships with proof gates—if it cannot hold up under stress, it is not finished.
              </p>
            </div>

            {/* Drift Monitor Visual HUD */}
            <div className="bg-cream-dark border border-sand p-8 rounded-2xl shadow-xl relative overflow-hidden group">
              <div className="flex justify-between items-center mb-10">
                <div className="flex items-center gap-3">
                  <MonitorCheck className="w-4 h-4 text-gold" />
                  <span className="text-[10px] font-black text-warm-gray uppercase tracking-widest">Performance_Drift_Monitor</span>
                </div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4].map(i => <div key={i} className="w-1 h-3 bg-gold/20" />)}
                </div>
              </div>

              <div className="space-y-8">
                {/* Drift Graph Placeholder Style */}
                <div className="relative h-24 flex items-end gap-1 px-2">
                  {mounted && [...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: "10%" }}
                      whileInView={{ height: `${20 + Math.random() * 60}%` }}
                      transition={{ duration: 1, delay: i * 0.05 }}
                      className={`flex-1 rounded-t-sm ${i > 15 ? 'bg-destructive/40' : 'bg-gold'}`}
                    />
                  ))}
                  {!mounted && [...Array(20)].map((_, i) => (
                    <div
                      key={i}
                      className={`flex-1 h-[10%] rounded-t-sm ${i > 15 ? 'bg-destructive/40' : 'bg-gold'}`}
                    />
                  ))}
                  {/* Baseline Line */}
                  <div className="absolute bottom-[20%] left-0 w-full h-px border-t border-dashed border-warm-gray/20" />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <p className="text-[10px] font-black text-warm-gray-light uppercase mb-1">Consistency</p>
                    <p className="text-lg font-mono text-warm-gray">99.4%</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] font-black text-warm-gray-light uppercase mb-1">Guardrails</p>
                    <p className="text-lg font-mono text-green-600">ACTIVE</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] font-black text-warm-gray-light uppercase mb-1">Drift_Alert</p>
                    <p className="text-lg font-mono text-warm-gray">NULL</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Expansion Strategy */}
            <div className="flex gap-6 p-6 border-l-2 border-gold/20 bg-sand/10">
              <Layers className="w-8 h-8 text-warm-gray shrink-0" />
              <p className="text-sm text-warm-gray leading-relaxed font-serif italic">
                We scale one workflow at a time. Expansion is <span className="text-gold font-bold italic">evidence-based</span>. Drift monitoring ensures performance does not silently degrade as you grow.
              </p>
            </div>
          </div>

          {/* Right Side: "What You Get" Deck */}
          <div className="bg-cream-dark border-2 border-sand/50 p-10 lg:p-16 rounded-[2rem] shadow-2xl relative group">
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:rotate-6 transition-transform duration-700">
              <History className="w-48 h-48 text-warm-gray" />
            </div>

            <h3 className="text-2xl font-serif font-black text-gold italic mb-10">Production: <span className="font-normal text-warm-gray">What You Get</span></h3>

            <div className="space-y-4">
              {outputs.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-4 bg-white border border-sand/30 p-4 rounded-xl hover:shadow-lg transition-all cursor-default group"
                >
                  <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold" />
                  </div>
                  <span className="text-sm font-bold text-warm-gray leading-tight">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-warm-gray-light font-serif italic text-lg mb-6">
            Your validation passed. Time to move to production — with proof gates active.
          </p>
          <Button
            onClick={() => openModal()}
            className="bg-[#1a1a1a] text-white hover:bg-gold hover:text-[#1a1a1a] border-2 border-[#1a1a1a] hover:border-gold px-10 py-6 text-base font-black uppercase tracking-widest rounded-none transition-all duration-500 shadow-xl group"
          >
            Book a Strategy Session
            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>

      </div>
    </section>
  )
}
