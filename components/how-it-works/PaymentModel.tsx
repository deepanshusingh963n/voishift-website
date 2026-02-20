"use client"

import { motion } from "framer-motion"
import { ShieldCheck, XCircle, MousePointerClick, Zap, Banknote, ShieldAlert } from "lucide-react"

const comparisons = [
  {
    from: "Milestones checked",
    to: "Proof guessing has stopped",
    icon: ShieldCheck
  },
  {
    from: "Features shipped",
    to: "Guardrails are enforced",
    icon: ShieldAlert
  },
  {
    from: "Demos delivered",
    to: "Decisions can be traced",
    icon: MousePointerClick
  },
  {
    from: "Hours billed",
    to: "Risk is reduced before scale",
    icon: Banknote
  }
]

export default function PaymentModel() {
  return (
    <section className="bg-cream-dark py-24 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        
        <div className="max-w-3xl mx-auto space-y-8 mb-20 animate-fade-in">
          <span className="text-[10px] font-black text-gold uppercase tracking-[0.4em]">Our Economic Model</span>
          <h2 className="text-4xl lg:text-6xl font-serif text-warm-gray leading-tight">
            How we <span className="text-gold italic">get paid</span>
          </h2>
          <p className="text-xl text-warm-gray-light font-serif leading-relaxed italic">
            Not for activity, but for evidence. We've shifted our incentives to align with your operational safety, not just your vendor budget.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {comparisons.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white border-2 border-sand rounded-2xl p-8 shadow-sm flex flex-col items-center text-center relative group overflow-hidden"
            >
              {/* Background HUD Decor */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gold/20" />
              <div className="absolute -bottom-8 -right-8 opacity-[0.03] group-hover:scale-125 transition-transform duration-500">
                <item.icon className="w-32 h-32 text-warm-gray" />
              </div>

              <div className="mb-6 space-y-2">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <XCircle className="w-3 h-3 text-destructive" />
                  <span className="text-[10px] font-black text-warm-gray/40 uppercase tracking-widest">Not for:</span>
                </div>
                <p className="text-sm font-bold text-warm-gray/50 line-through decoration-destructive/30 decoration-2">{item.from}</p>
              </div>

              <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                <Zap className="w-4 h-4 text-gold" />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <ShieldCheck className="w-3 h-3 text-green-600" />
                  <span className="text-[10px] font-black text-gold uppercase tracking-widest">Paid for:</span>
                </div>
                <p className="text-lg font-serif text-warm-gray font-bold italic leading-tight">{item.to}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 max-w-2xl mx-auto p-8 border border-gold/20 rounded-2xl bg-gold/5 backdrop-blur-sm">
           <p className="text-sm text-warm-gray italic font-serif leading-relaxed">
             "Proof does not come from demos. It comes from your <span className="text-gold font-bold">real calls</span>, your <span className="text-gold font-bold">actual workflows</span>, and your most <span className="text-gold font-bold">messy edge cases</span>."
           </p>
        </div>

      </div>
    </section>
  )
}
