"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { useModal } from "@/context/modal-context"

export default function HowHero() {
  const { openModal } = useModal()

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-cream-dark">
      {/* Background HUD Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-12 h-[1px] bg-gold" />
            <span className="text-xs font-black uppercase tracking-[0.4em] text-gold">The VoiShift Process</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl lg:text-8xl font-serif text-warm-gray leading-[1.05] tracking-tight mb-8"
          >
            Voice AI that ships <br />
            <span className="italic text-gold/90">safely, not loudly.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl lg:text-2xl text-warm-gray-light font-serif italic leading-relaxed max-w-3xl mb-12"
          >
            We map the best opportunities, prove behavior under edge cases, then roll out in phases with guardrails and drift monitoring. No guessing, no big bang launches.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <Button
              size="lg"
              className="bg-gold hover:bg-gold-dark text-warm-gray px-8 py-7 text-lg rounded-xl h-auto"
              onClick={openModal}
            >
              Let's Build
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-gold/30 text-warm-gray hover:bg-gold/5 px-8 py-7 text-lg rounded-xl h-auto bg-transparent"
              onClick={() => {
                const phase1 = document.getElementById('phase-1');
                phase1?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Play className="mr-2 w-4 h-4 fill-current" />
              See the 3 stages
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Modern HUD Bottom Detail */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-10">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="w-px h-12 bg-gold/10" />
            <div className="text-[10px] font-black text-warm-gray-light uppercase tracking-widest py-2">0{i}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
