"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, ShieldCheck, Activity, Target } from "lucide-react"
import { useModal } from "@/context/modal-context"

export default function HowHero() {
  const { openModal } = useModal()

  return (
    <section className="relative pt-32 pb-20 lg:pt-30 lg:pb-18 overflow-hidden bg-cream-dark">
      {/* Background HUD Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-20 lg:items-center">
          
          {/* LEFT SIDE — YOUR ORIGINAL CONTENT (UNCHANGED) */}
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="text-7xl font-black uppercase tracking-[0.1em] text-gold">
                The VoiShift Process
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl lg:text-xl font-serif text-warm-gray leading-[1.05] tracking-tight mb-8"
            >
              Voice AI that ships <span className="italic text-gold/90">safely, not loudly.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl lg:text-lg text-warm-gray-light font-serif italic leading-relaxed max-w-3xl mb-12"
            >
              We map the best opportunities, prove behavior under edge cases, then roll out in phases with guardrails and drift monitoring. No guessing, no big bang launches.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-2"
            >
              <Button
                className="bg-gold hover:bg-gold-dark text-warm-gray px-8 py-5 text-lg rounded-xl h-auto"
                onClick={openModal}
              >
                Let's Build
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <Button
                variant="outline"
                className="border-gold/30 text-warm-gray hover:bg-gold/5 px-8 py-5 text-lg rounded-xl h-auto bg-transparent"
                onClick={() => {
                  const phase1 = document.getElementById("phase-1")
                  phase1?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                <Play className="mr-2 w-4 h-4 fill-current" />
                See the 3 stages
              </Button>
            </motion.div>
          </div>

          {/* RIGHT SIDE — NEW 3-PHASE VISUAL SYSTEM */}
          <div className="mt-20 lg:mt-0 relative">

            <div className="relative bg-white/40 backdrop-blur-sm border border-sand rounded-[2rem] p-8 shadow-2xl">

              {/* Vertical Connector with Precisely Positioned Arrows */}
              <div className="absolute left-1/2 top-16 bottom-16 -translate-x-1/2 pointer-events-none">

                {/* Main Vertical Line */}
                <div className="absolute inset-0 w-px bg-gradient-to-b from-gold/10 via-gold/40 to-gold/10 left-1/2 -translate-x-1/2" />

                {/* Arrow Between Phase 01 and 02 */}
                <div className="absolute left-1/2 -translate-x-1/2 top-[33%]">
                  <div className="w-0 h-0 
                    border-l-[7px] border-l-transparent 
                    border-r-[7px] border-r-transparent 
                    border-t-[9px] border-t-gold/80 
                    drop-shadow-[0_0_6px_rgba(212,175,55,0.5)]" />
                </div>

                {/* Arrow Between Phase 02 and 03 */}
                <div className="absolute left-1/2 -translate-x-1/2 top-[78%]">
                  <div className="w-0 h-0 
                    border-l-[7px] border-l-transparent 
                    border-r-[7px] border-r-transparent 
                    border-t-[9px] border-t-gold/80 
                    drop-shadow-[0_0_6px_rgba(212,175,55,0.5)]" />
                </div>

              </div>

              <div className="space-y-14 relative z-10">

                {/* Phase 01 */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="relative bg-cream-dark border border-sand rounded-xl p-6 shadow-md"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                      <Target className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-[15px] uppercase tracking-widest text-gold">
                        01 Voishift OppMap
                      </p>
                      <p className="text-sm font-semibold text-warm-gray">
                        Economic Prioritization + Boundaries
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Phase 02 */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="relative bg-cream-dark border border-sand rounded-xl p-6 shadow-md"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                      <Activity className="w-5 h-5 text-gold animate-pulse" />
                    </div>
                    <div>
                      <p className="text-[15px] uppercase tracking-widest text-gold">
                        02 Voishift Validation Sandbox
                      </p>
                      <p className="text-sm font-semibold text-warm-gray">
                        Edge Case Stress Testing + Guardrails
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Phase 03 */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="relative bg-cream-dark border border-sand rounded-xl p-6 shadow-md"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                      <ShieldCheck className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-[15px] uppercase tracking-widest text-gold">
                        03 Voishift Proof Gated Rollout
                      </p>
                      <p className="text-sm font-semibold text-warm-gray">
                        Proof Gated Production + Drift Monitoring
                      </p>
                    </div>
                  </div>
                </motion.div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}