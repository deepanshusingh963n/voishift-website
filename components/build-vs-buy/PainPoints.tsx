"use client"

import { motion } from "framer-motion"
import { AlertTriangle, Activity, MessageSquareWarning, ZapOff, RefreshCcw, MoveRight } from "lucide-react"

export default function PainPoints() {
  const humanBehaviors = [
    "People do not talk in perfect sentences.",
    "They give half information.",
    "They mix two questions in one.",
    "They get impatient.",
    "They ask for exceptions.",
    "They push. They argue.",
    "They jump topics.",
    "They want an answer now."
  ]

  return (
    <section className="bg-white py-24 lg:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Increased width for better layout balance */}
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16 space-y-6">
            <span className="text-[15px] bg-black border border-gold/20 px-2 py-1 rounded-2xl font-black text-gold uppercase tracking-[0.5em]">
              The Turning Point
            </span>

            <div className="space-y-6 text-center mt-6">
              <h2 className="text-3xl lg:text-5xl font-serif text-gold font-black leading-tight">
                The moment renting
                <span className="italic"> starts to hurt.</span>
              </h2>
            </div>

            <p className="text-2xl font-serif text-warm-gray-light italic">
              "The day you go live."
            </p>
          </div>

          {/* Improved column proportions */}
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-stretch">

            {/* Live Console Visual: Human Chaos */}
            <div className="bg-[#1a1a1a] p-8 border-t-8 border-gold rounded-none shadow-2xl space-y-8 relative overflow-hidden group">

              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <Activity className="w-4 h-4 text-gold animate-pulse" />
                  <span className="text-[15px] font-black text-white uppercase tracking-widest">
                    Because people do not talk in perfect sentences.
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                {humanBehaviors.map((behavior, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 items-center p-3 bg-white/5 border border-white/5 group-hover:bg-white/10 transition-colors"
                  >
                    <MessageSquareWarning className="w-3 h-3 text-gold/50" />
                    <p className="text-[20px] font-mono text-white/80">{behavior}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Content Sidebar */}
            <div className="space-y-12 flex flex-col justify-center max-w-xl">

              <div className="space-y-6 group">
                <div className="flex items-center gap-4 text-warm-gray">
                  <RefreshCcw className="w-5 h-5 text-gold group-hover:rotate-180 transition-transform duration-700" />
                  <h4 className="text-xl font-bold uppercase tracking-tight">
                    Your internal world is not stable either.
                  </h4>
                </div>

                <div className="space-y-4 border-l-2 border-sand pl-6">
                  <p className="text-lg text-warm-gray-light font-serif">
                    Rules & Policies change.
                  </p>
                  <p className="text-lg text-warm-gray-light font-serif">
                    Teams disagree.
                  </p>
                  <p className="text-lg text-warm-gray-light font-serif">
                    Edge cases show up.
                  </p>
                </div>
              </div>

              <div className="p-8 bg-cream-dark border border-gold/20 rounded-none relative">
                <div className="absolute top-0 right-0 p-4">
                  <AlertTriangle className="w-6 h-6 text-gold/30" />
                </div>

                <p className="text-xl font-serif text-warm-gray leading-relaxed mb-6">
                  That is when “tweaks” stop being enough. You can tweak, but you cannot truly shape behavior.
                </p>

                <div className="flex items-center gap-3 text-gold font-black text-xs uppercase tracking-widest">
                  <span>This is where “renting” starts to feel tight.</span>
                  <MoveRight className="w-4 h-4" />
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  )
}