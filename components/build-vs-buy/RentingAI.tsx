"use client"

import { motion } from "framer-motion"
import { Home, UserMinus, Settings2, Unlock } from "lucide-react"

export default function RentingAI() {
  const points = [
    "You buy a ready-made bot built by someone else, you are renting it.",
    "It was built outside your world. Built to work for thousands of companies.",
    "It comes with someone else’s assumptions about what is “normal.”",
    "So it is designed to be “okay for most,” not “right for you.”",
    "You can tweak it. You can tailor it. But it will always be borrowed.",
    "But you cannot make it fully yours."
  ]

  return (
    <section className="bg-white py-24 lg:py-32 relative overflow-hidden">
      {/* Sharp Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '50px 50px' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          <div className="space-y-10 order-2 lg:order-1">
            <div className="p-8 border-2 border-sand bg-cream-dark/30 rounded-none relative">
              <div className="absolute top-0 right-0 p-4">
                <UserMinus className="w-8 h-8 text-warm-gray/20" />
              </div>
              <h3 className="text-2xl font-serif text-gold mb-8 uppercase">What “renting AI” looks like</h3>
              
              <div className="space-y-6">
                {points.map((point, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="w-1.5 h-1.5 bg-gold shrink-0 mt-2.5 rounded-none" />
                    <p className="text-lg text-warm-gray-light font-serif leading-snug">{point}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex gap-6 p-5 bg-warm-gray text-white rounded-none border-b-4 border-gold">
              <Unlock className="w-10 h-10 text-gold shrink-0" />
              <p className="font-serif italic text-md leading-relaxed">
                "And when something important needs to change, you wait on the owner."
              </p>
            </div>
          </div>

          <div className="space-y-12 order-1 lg:order-2">
            <div className="relative">
              <h2 className="text-4xl lg:text-5xl font-serif text-warm-gray leading-tight">
                Like <span className="italic text-gold">renting a house.</span>
              </h2>
            </div>

            <div className="grid gap-10">
              {[
                { label: "CURTAINS", action: "You can change the curtains." },
                { label: "WALLS", action: "You can repaint the walls." },
                { label: "FURNITURE", action: "You can rearrange the furniture." },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-6 border border-sand hover:border-gold transition-colors group rounded-none">
                  <div className="space-y-1">
                    <p className="text-[9px] font-black text-gold uppercase tracking-widest">{item.label}</p>
                    <p className="text-xl font-serif text-warm-gray">{item.action}</p>
                  </div>
                  <Settings2 className="w-6 h-6 text-warm-gray/20 group-hover:text-gold transition-colors" />
                </div>
              ))}
              
              <div className="p-8 bg-destructive/5 border-2 border-destructive/20 rounded-none mt-6">
                 <p className="text-xl font-serif text-warm-gray font-bold italic text-center">
                   "But you cannot change the foundation."
                 </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
