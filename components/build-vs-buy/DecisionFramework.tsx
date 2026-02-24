"use client"

import { motion } from "framer-motion"
import { HelpCircle, CheckCircle2, XCircle, ShieldCheck, Scale, ArrowRight } from "lucide-react"

export default function DecisionFramework() {
  return (
    <section className="bg-cream-dark py-24 lg:py-32 relative overflow-hidden">
      {/* Background HUD Decor */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#d4af37 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          <div className="space-y-10">
            <div className="space-y-6">
              <span className="bg-black border border-gold/20 px-4 py-2 rounded-2xl text-[15px] font-black text-gold uppercase tracking-[0.5em]">The Conclusion</span>
              
              <h2 className="text-4xl lg:text-6xl font-serif text-gold font-black leading-tight mt-2">
                One question decides <br />
                <span className="text-gold italic">build vs buy.</span>
              </h2>
              <p className="text-xl text-warm-gray-light font-serif italic">
                "Ask this before you pick anything."
              </p>
            </div>

            <div className="p-10 bg-warm-gray text-white border-t-8 border-gold rounded-2xl relative shadow-2xl space-y-8">
               <div className="flex items-center gap-4 text-gold mb-4">
                  <HelpCircle className="w-8 h-8" />
                  <span className="text-xs font-black uppercase tracking-[0.3em]">Decision_Query</span>
               </div>
               
               <p className="text-3xl font-serif italic leading-tight text-white/90">
                 "When the bot does not have enough information, what happens?"
               </p>

               <div className="pt-8 border-t border-white/10">
                  <p className="text-lg text-white/60 font-serif leading-relaxed italic">
                    If it can only push forward & still tries to answer, you will spend your time fixing outcomes after the fact.
                  </p>
               </div>
            </div>
          </div>

          <div className="space-y-10">
            <div className="bg-white border-2 border-sand p-10 lg:p-14 rounded-none shadow-xl relative group overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:scale-125 transition-transform duration-700">
                  <Scale className="w-48 h-48 text-warm-gray" />
               </div>

               <h3 className="text-xl font-black text-warm-gray uppercase tracking-[0.4em] mb-12 flex items-center gap-4">
                  <ShieldCheck className="w-5 h-5 text-gold" />
                  A QUICK WAY TO SELF-CHECK
               </h3>

               <div className="space-y-12">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gold/10 flex items-center justify-center rounded-none shrink-0">
                         <CheckCircle2 className="w-4 h-4 text-gold" />
                      </div>
                      <span className="text-xs font-black uppercase tracking-widest text-warm-gray/40">Scenario A: Renting is fine</span>
                    </div>
                    <p className="text-xl font-serif text-warm-gray leading-tight">
                      If the bot being slightly wrong only creates mild confusion, renting is fine.
                    </p>
                  </div>

                  <div className="w-full h-px bg-sand/50" />

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-destructive/10 flex items-center justify-center rounded-none shrink-0">
                         <XCircle className="w-4 h-4 text-destructive" />
                      </div>
                      <span className="text-xs font-black uppercase tracking-widest text-warm-gray/40">Scenario B: Ownership required</span>
                    </div>
                    <p className="text-xl font-serif text-warm-gray leading-tight font-bold">
                      If the bot being wrong creates follow-ups, escalations, refunds, policy issues, or trust damage, you will eventually want ownership.
                    </p>
                  </div>
               </div>

               <div className="mt-16 flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-warm-gray/40">
                  <span>Logic_Validation_Checked</span>
                  <div className="flex gap-1">
                    {[1, 2, 3].map(i => <div key={i} className="w-6 h-1 bg-gold/30" />)}
                  </div>
               </div>
            </div>

            <div className="p-8 border border-gold/20 bg-gold/5 flex items-center justify-between group cursor-pointer hover:bg-gold/10 transition-colors rounded-none">
               <p className="text-sm font-black text-warm-gray uppercase tracking-widest">Ready to build your system?</p>
               <ArrowRight className="w-5 h-5 text-gold group-hover:translate-x-2 transition-transform" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
