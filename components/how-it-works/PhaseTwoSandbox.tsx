"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Bug, FileText, AlertCircle, HardHat, Gauge, CheckCircle2, FlaskConical } from "lucide-react"

const outputs = [
  "Controlled MVP plan (tight scope, rollout method)",
  "Behavior guardrails (allowed actions, refusal rules, escalation paths)",
  "Traceability for critical outputs (rule or source linked)",
  "Edge-case stress test results (messy inputs, failure points)",
  "Reusable system design pack (workflow map, rules, structure)",
  "Failure report with root causes and prevention fixes",
  "Production readiness pack (tests, monitoring, measurement)",
  "Phase plan with proof gates",
  "Proof report with a clear go, no-go, or revise decision"
]

export default function PhaseTwoSandbox() {
  return (
    <section id="phase-2" className="bg-cream-dark py-24 lg:py-32 relative overflow-hidden">
      {/* Background Section Decor */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
          {/* Left Side: "What You Get" Deck (Flipped for Layout Variety) */}
          <div className="order-2 lg:order-1 bg-white border-2 border-sand p-8 lg:p-12 rounded-[2rem] shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:scale-110 transition-transform duration-700">
              <FlaskConical className="w-48 h-48 text-warm-gray" />
            </div>
            
            <h3 className="text-2xl font-serif text-warm-gray italic mb-10">System Output Pack: Validation</h3>
            
            <div className="space-y-4">
              {outputs.map((item, i) => (
                <motion.div 
                   key={i}
                   initial={{ opacity: 0, x: -20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   transition={{ delay: i * 0.05 }}
                   className="flex items-center gap-4 bg-cream-dark/50 border border-sand/30 p-4 rounded-xl hover:bg-white hover:shadow-md transition-all cursor-default group"
                >
                  <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold" />
                  </div>
                  <span className="text-sm font-bold text-warm-gray leading-tight">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-widest text-warm-gray opacity-40">Sandbox_Environment_Secure</span>
            </div>
          </div>

          {/* Right Side: Content & Visual */}
          <div className="order-1 lg:order-2 space-y-12">
            <div>
              <span className="inline-block px-4 py-1 rounded-full bg-gold/10 border border-gold/20 text-[10px] font-black text-gold uppercase tracking-[0.3em] mb-6">
                Phase 02
              </span>
              <h2 className="text-4xl lg:text-5xl font-serif text-warm-gray leading-tight mb-6">
                VoiShift <span className="text-gold italic">Validation Sandbox</span>
              </h2>
              <p className="text-xl text-warm-gray-light font-serif leading-relaxed">
                Edge-Case Testing + Guardrails Verified. This is a quick validation MVP for the top workflow, built to prove real behavior under messy edge cases and lock guardrails in writing.
              </p>
            </div>

            {/* Stress Test Visual HUD */}
            <div className="bg-[#1a1a1a] p-8 rounded-2xl shadow-2xl border-t-4 border-gold relative overflow-hidden">
               <div className="flex justify-between items-center mb-8">
                 <div className="flex items-center gap-3">
                   <AlertCircle className="w-4 h-4 text-gold animate-pulse" />
                   <span className="text-[10px] font-black text-white uppercase tracking-widest">Stress_Test_Live</span>
                 </div>
                 <span className="text-[10px] font-mono text-gold underline underline-offset-4">0x77_SIMULATION_ACTIVE</span>
               </div>

               <div className="space-y-6">
                 {/* Test Case Interface */}
                 <div className="p-4 bg-white/5 border border-white/10 rounded-lg space-y-3">
                    <div className="flex justify-between text-[10px] font-mono">
                      <span className="text-white/40">Input Complexity</span>
                      <span className="text-gold">94%_CRITICAL</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "94%" }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-gold " 
                      />
                    </div>
                 </div>

                 <div className="grid grid-cols-2 gap-4">
                   <div className="p-4 bg-gold/5 border border-gold/10 rounded-lg">
                      <Bug className="w-4 h-4 text-gold mb-2" />
                      <p className="text-[10px] font-black text-white/60 uppercase mb-1">Corner Cases</p>
                      <p className="text-xl font-mono text-white">412</p>
                   </div>
                   <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                      <ShieldCheck className="w-4 h-4 text-white mb-2" />
                      <p className="text-[10px] font-black text-white/60 uppercase mb-1">Guardrails Locked</p>
                      <p className="text-xl font-mono text-white">12/12</p>
                   </div>
                 </div>
               </div>

               <div className="mt-8 pt-6 border-t border-white/10 text-center">
                 <p className="text-[10px] text-white/40 font-serif italic tracking-wider">
                   "VoiShift validation proves behavior, not just uptime."
                 </p>
               </div>
            </div>

            {/* Philosophy Note */}
            <div className="flex gap-6 p-6 border-l-2 border-gold/20 bg-sand/10">
              <HardHat className="w-8 h-8 text-warm-gray shrink-0" />
              <p className="text-sm text-warm-gray leading-relaxed font-serif italic">
                The Sandbox exists for <span className="text-gold font-bold">proof and learning</span>, not rollout. We find where the system breaks before your customers do.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
