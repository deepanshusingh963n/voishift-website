"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Hammer, Construction, Ruler, CheckCircle2 } from "lucide-react"

export default function BuildingIsOwning() {
  const points = [
    "When you build, you own how it behaves.",
    "You build around your world.",
    "Your rules.",
    "Your exceptions.",
    "Your definition of what must be refused.",
    "Your definition of when to bring in a human.",
    "Your definition of what is allowed & and what is not."
  ]

  return (
    <section className="bg-cream-dark py-24 lg:py-32 relative overflow-hidden">
      {/* Background HUD Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-none blur-[120px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          <div className="space-y-12">
            <div className="relative">
              <span className="text-[10px] font-black text-gold uppercase tracking-[0.4em] mb-4 block">System_Authority_01</span>
              <h2 className="text-4xl lg:text-5xl font-serif text-warm-gray leading-tight">
                Building is <span className="italic text-gold">owning</span>
              </h2>
            </div>

            <div className="grid gap-6">
              {[
                { label: "REBUILD", action: "You can rebuild a room." },
                { label: "STRUCTURE", action: "You can move walls." },
                { label: "INTEGRITY", action: "You can rebuild what is broken." },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-6 border border-gold/30 bg-white/50 hover:bg-white transition-all group rounded-none">
                  <div className="space-y-1">
                    <p className="text-[9px] font-black text-gold uppercase tracking-widest">{item.label}</p>
                    <p className="text-xl font-serif text-warm-gray">{item.action}</p>
                  </div>
                  <Hammer className="w-6 h-6 text-gold/30 group-hover:text-gold transition-colors" />
                </div>
              ))}
              
              <div className="p-8 bg-gold text-warm-gray rounded-none mt-4 shadow-xl">
                 <p className="text-xl font-serif font-bold italic text-center">
                   "You can fix the real problem, not just cover it up."
                 </p>
              </div>
            </div>
          </div>

          <div className="space-y-10">
            <div className="p-8 lg:p-12 border-2 border-gold/30 bg-white rounded-none relative shadow-2xl overflow-hidden group">
              <div className="absolute -bottom-10 -right-10 opacity-[0.05] group-hover:scale-110 transition-transform duration-700">
                <Construction className="w-64 h-64 text-warm-gray" />
              </div>

              <div className="flex items-center gap-3 mb-10">
                <ShieldCheck className="w-5 h-5 text-gold" />
                <span className="text-[10px] font-black text-warm-gray uppercase tracking-widest">Ownership_Parameters</span>
              </div>
              
              <div className="space-y-6">
                {points.map((point, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex gap-4 items-start group/item"
                  >
                    <div className="w-5 h-5 rounded-none bg-gold/10 flex items-center justify-center shrink-0 mt-1 group-hover/item:bg-gold transition-colors">
                      <CheckCircle2 className="w-3 h-3 text-gold group-hover/item:text-white transition-colors" />
                    </div>
                    <p className="text-lg font-bold text-warm-gray leading-tight">{point}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-sand flex items-center justify-between opacity-40">
                <div className="flex gap-4">
                  <Ruler className="w-4 h-4" />
                  <span className="text-[9px] font-mono tracking-widest uppercase">ID: VOISHFT_ASSET_OVRD</span>
                </div>
                <div className="flex gap-1">
                  {[1, 2, 3].map(i => <div key={i} className="w-4 h-1 bg-gold" />)}
                </div>
              </div>
            </div>

            <div className="p-8 border border-sand bg-white/30 rounded-none text-center italic font-serif text-warm-gray-light">
              "When you build, you own the behavior. You own the world."
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
