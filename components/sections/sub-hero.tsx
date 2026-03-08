"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, AnimatePresence } from "framer-motion"
import { Shield, Brain, Target, AlertTriangle, Database, Activity, Layers, Radio, Network, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useModal } from "@/context/modal-context"

const narrativeBlocks = [
  {
    id: 1,
    title: {
      line1: "Because a bot can sound sure,",
      line2: "and still be wrong.",
    },
    content: [
      "If it speaks fluently, it can mislead fluently.",
      "If it talks smoothly, it can lie smoothly.",
      "If it answers fast, it can mislead fast.",
      "If it sounds human, it can mislead like one.",
    ],
    icon: Shield,
  },
  {
    id: 2,
    title: "And it does so because...",
    content: [
      "You solved what you could see, not what was causing it.",
      "You built a voice bot, not a system.",
      "You fixed the answers, not what makes them true.",
    ],
    icon: Brain,
  },
  {
    id: 3,
    title: {
      line1: "Now the question that decides whether voice AI helps you or hurts you.",
      line2: "When it speaks, is it a second brain, or the only brain left?"
    },
    content: [
      "If you need a “plug-n-play” bot for basic automation, there are plenty of choices. If you want to own your enterprise intelligence and keep decision control in-house, test us.",
    ],
    icon: Target,
  },
]

function VisualPanel({ active }: { active: number }) {
  return (
    <div className="w-full max-w-lg relative">

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.5 }}
          className="w-full h-[420px] flex items-center justify-center bg-black/90 border border-charcoal rounded-xl"
        >

          {/* BLOCK 1 — Confident but Wrong */}
          {active === 0 && (
            <div className="flex flex-col items-center space-y-8">

              <div className="text-[10px] uppercase tracking-widest text-gold/40">
                Response Validation
              </div>

              {/* Bot answer */}
              <div className="px-6 py-4 border border-gold/30 rounded-lg text-cream text-sm italic">
                “Absolutely. We will deliver by Friday.”
              </div>

              {/* Arrow */}
              <ArrowRight className="w-5 h-5 text-gold/30 rotate-90" />

              {/* System truth */}
              <div className="px-6 py-4 border border-red-500/40 rounded-lg text-red-400 text-xs font-mono">
                Policy Conflict: 7-Day Lead Time
              </div>

              <motion.div
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-[10px] uppercase tracking-widest text-red-400"
              >
                Fluent Response ≠ Correct Response
              </motion.div>

            </div>
          )}

          {/* BLOCK 2 — Missing Architecture */}
          {active === 1 && (
            <div className="flex flex-col items-center space-y-6">

              {/* Voice bot */}
              <div className="px-6 py-3 bg-gold text-black text-xs font-black uppercase tracking-widest rounded-md">
                Voice Bot
              </div>

              {/* gap */}
              <div className="flex flex-col items-center">
                <div className="h-8 border-r border-dashed border-red-500/60" />
                <span className="text-[9px] uppercase text-red-400 tracking-widest">
                  Missing
                </span>
                <div className="h-8 border-r border-dashed border-red-500/60" />
              </div>

              {/* missing layer */}
              <div className="px-6 py-3 border border-red-500/40 rounded-md text-red-400 text-xs uppercase tracking-widest">
                Decision Layer
              </div>

              {/* enterprise systems */}
              <div className="flex gap-4 mt-6">
                <Database className="w-5 h-5 text-gold/40" />
                <Layers className="w-5 h-5 text-gold/40" />
                <Activity className="w-5 h-5 text-gold/40" />
              </div>

              <span className="text-[9px] uppercase tracking-widest text-gold/30">
                CRM • Operations • Policy
              </span>

            </div>
          )}

          {/* BLOCK 3 — Second Brain */}
          {active === 2 && (
            <div className="flex flex-col items-center space-y-8">

              {/* human */}
              <div className="text-xs uppercase tracking-widest text-cream/60">
                Human Decision
              </div>

              <div className="h-6 border-r border-gold/30" />

              {/* AI brain */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  boxShadow: [
                    "0 0 10px rgba(212,175,55,0.3)",
                    "0 0 30px rgba(212,175,55,0.5)",
                    "0 0 10px rgba(212,175,55,0.3)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-20 h-20 rounded-full bg-gold flex items-center justify-center"
              >
                <Brain className="w-8 h-8 text-black" />
              </motion.div>

              <div className="h-6 border-r border-gold/30" />

              {/* systems */}
              <div className="flex gap-4">
                <Database className="w-5 h-5 text-gold/40" />
                <Layers className="w-5 h-5 text-gold/40" />
                <Network className="w-5 h-5 text-gold/40" />
              </div>

              <span className="text-[9px] uppercase tracking-widest text-gold/30">
                Enterprise Systems
              </span>

            </div>
          )}

        </motion.div>
      </AnimatePresence>

    </div>
  )
}

export function SubHero() {
  const { openModal } = useModal()
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeBlock, setActiveBlock] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value: number) => {
      const index = Math.min(
        Math.floor(value * narrativeBlocks.length),
        narrativeBlocks.length - 1
      )
      setActiveBlock(index)
    })
    return () => unsubscribe()
  }, [scrollYProgress])

  return (
    <section ref={containerRef} className="relative bg-cream-dark">
      {/* Sticky Heading */}
      <div className="sticky top-12 lg:top-14 z-40 bg-white border-b border-sand px-6 py-8 text-center">
        <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-serif font-black text-gold leading-tight max-w-7xl mx-auto">
          Most teams install a “plug-n-play” voice bot & call it “AI transformation.”
          But “plug-n-play” also means “plug-n-play” failure modes.
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* Left Scroll Narrative */}
        <div className="w-full lg:w-1/2">
          {narrativeBlocks.map((block, index) => (
            <div
              key={block.id}
              className="min-h-screen flex items-center px-6 sm:px-12 lg:px-20"
            >
              <div className="max-w-xl space-y-6 w-full">
        
                {/* Title */}
                {typeof block.title === "string" ? (
                  <h3 className="text-2xl md:text-3xl font-serif text-warm-gray leading-tight">
                    {block.title}
                  </h3>
                ) : (
                  <h3 className="text-2xl md:text-3xl font-serif text-warm-gray leading-tight">
                    <span className="block">{block.title.line1}</span>
                    <span className="block italic text-gold/80 font-black mt-2">
                      {block.title.line2}
                    </span>
                  </h3>
                )}

                {/* Content */}
                <div className="space-y-3 text-base md:text-lg text-warm-gray-light">
                  {block.content.length > 1 ? (
                    <ul className="list-disc list-inside space-y-3">
                      {block.content.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{block.content[0]}</p>
                  )}
                </div>

                {/* CTA only on Block 3 */}
                {index === 2 && (
                  <div className="pt-6 flex flex-col sm:flex-row gap-4">
                    <Button
                      size="default"
                      className="bg-gold hover:bg-black hover:text-gold text-warm-gray rounded-lg transition-all duration-300 w-full sm:w-auto"
                      onClick={() => openModal()}
                    >
                      I need a system, not a bot
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>

                    <Button
                      size="default"
                      variant="outline"
                      className="border-gold/40 text-gold bg-black rounded-lg transition-all duration-300 w-full sm:w-auto"
                      onClick={() => openModal()}
                    >
                      Stress test my current build
                    </Button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Right Sticky Visuals */}
        <div className="hidden lg:flex lg:w-1/2 sticky top-[120px] h-[calc(100vh-120px)] items-center justify-center border-l border-sand bg-sand/30 px-10">
          <VisualPanel active={activeBlock} />
        </div>
      </div>
    </section>
  )
}