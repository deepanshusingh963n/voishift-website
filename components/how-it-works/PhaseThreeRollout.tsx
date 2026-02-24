"use client"

import { motion } from "framer-motion"
import { ShieldCheck, TrendingUp, MonitorCheck, Lock, Layers, History, CheckCircle2, Activity } from "lucide-react"

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
                    {[...Array(20)].map((_, i) => (
                      <motion.div 
                        key={i}
                        initial={{ height: "10%" }}
                        whileInView={{ height: `${20 + Math.random() * 60}%` }}
                        transition={{ duration: 1, delay: i * 0.05 }}
                        className={`flex-1 rounded-t-sm ${i > 15 ? 'bg-destructive/40' : 'bg-gold'}`}
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

               <div className="mt-8 flex items-center justify-center gap-4 py-3 bg-white/50 rounded-lg border border-sand/50">
                  <Lock className="w-3 h-3 text-gold" />
                  <span className="text-[9px] font-black text-warm-gray uppercase tracking-widest">Traceability_Locked_ID:00421</span>
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
          <div className="bg-cream-dark border-2 border-sand/50 p-8 lg:p-12 rounded-[2rem] shadow-2xl relative group">
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:rotate-6 transition-transform duration-700">
               <History className="w-48 h-48 text-warm-gray" />
            </div>

            <h3 className="text-2xl font-serif text-warm-gray italic mb-10">System Output Pack: Production</h3>
            
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

            <div className="mt-12 flex justify-between items-center bg-[#1a1a1a] p-6 rounded-xl text-white">
                <div className="flex flex-col">
                  <span className="text-[9px] font-black uppercase text-gold/60 tracking-widest mb-1">Status</span>
                  <span className="text-xs font-mono">Rollout_Gated</span>
                </div>
                <div className="flex flex-col text-right">
                  <span className="text-[9px] font-black uppercase text-gold/60 tracking-widest mb-1">Verified</span>
                  <span className="text-xs font-mono">ISO_VSHFT_1.2</span>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
