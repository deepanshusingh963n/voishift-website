"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, AnimatePresence } from "framer-motion"
import { Shield, Brain, Target, AlertTriangle, Database } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useModal } from "@/context/modal-context"

const narrativeBlocks = [
  {
    id: 1,
    title: {
      line1: "If your BOT sounds sure,",
      line2: "it can be wrong and still sound sure.",
    },
    content: [
      "If your voice agent can speak fluently, it can also mislead fluently.",
      "If it can talk smoothly, it can lie smoothly.",
      "If it can answer fast, it can mislead fast.",
      "If it can sound human, it can mislead like one.",
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
    title: "Now the question that decides whether voice AI helps you or hurts you.",
    content: [
      "When it speaks, is it a second brain, or the only brain left?",
      "If you need voice AI automation, you have plenty of choices.",
      "If you need clarity turned into execution, test us.",
    ],
    icon: Target,
  },
]

function VisualPanel({ active }: { active: number }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={active}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md"
      >
        {/* Stage 1 Visual */}
        {active === 0 && (
          <div className="bg-white border border-sand shadow-xl p-6 space-y-6">
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-5 h-5 text-destructive" />
              <span className="text-xs font-black uppercase tracking-widest text-destructive">
                False Certainty Detected
              </span>
            </div>
            <div className="p-4 bg-sand/20 border border-sand text-sm font-serif italic text-warm-gray">
              “Absolutely. We will deliver by Friday morning.”
            </div>
            <div className="text-xs text-warm-gray-light font-mono">
              Policy Conflict: 7-Day Lead Time
              <br />
              Capacity: 94%
            </div>
          </div>
        )}

        {/* Stage 2 Visual */}
        {active === 1 && (
          <div className="bg-white border border-sand shadow-xl p-6 space-y-8 text-center">
            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center">
                <Brain className="w-8 h-8 text-gold" />
              </div>
            </div>
            <div className="space-y-3 text-sm font-mono text-warm-gray-light">
              <div>Voice Interface</div>
              <div className="h-px bg-sand" />
              <div className="font-bold text-warm-gray">
                No Decision Authority Layer
              </div>
              <div className="h-px bg-sand" />
              <div>CRM | Policy | Ops</div>
            </div>
          </div>
        )}

        {/* Stage 3 Visual */}
        {active === 2 && (
          <div className="bg-white border border-sand shadow-xl p-6 space-y-6 text-center">
            <div className="flex justify-center">
              <Database className="w-10 h-10 text-gold" />
            </div>
            <div className="text-5xl font-serif font-black text-warm-gray">
              ?
            </div>
            <p className="text-sm text-warm-gray-light font-serif italic">
              Second Brain or the Only Brain?
            </p>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
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
      <div className="sticky top-12 lg:top-12 z-40 bg-white border-b border-sand px-6 py-8 text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-black text-gold leading-tight max-w-5xl mx-auto">
          "Everyone is just following everyone else, installing a voice bot like a widget."
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
                    <span className="block italic text-gold/80 font-normal mt-1">
                      {block.title.line2}
                    </span>
                  </h3>
                )}

                {/* Content */}
                <ul className="space-y-3 list-disc list-inside text-base md:text-lg text-warm-gray-light">
                  {block.content.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                {/* CTA only on Block 3 */}
                {index === 2 && (
                  <div className="pt-6 flex flex-col sm:flex-row gap-4">
                    <Button
                      size="default"
                      className="bg-gold hover:bg-black hover:text-gold text-warm-gray rounded-lg transition-all duration-300 w-full sm:w-auto"
                      onClick={openModal}
                    >
                      I need a system, not a bot
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>

                    <Button
                      size="default"
                      variant="outline"
                      className="border-gold/40 text-gold bg-black rounded-lg transition-all duration-300 w-full sm:w-auto"
                      onClick={openModal}
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