"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Brain, Target, AlertTriangle } from "lucide-react"

const narrativeBlocks = [
  {
    id: 1,
    title: {
      line1: "If it sounds sure,",
      line2: "it can be wrong and still sound sure.",
    },
    content: [
      "If your voice agent can speak fluently, it can also mislead fluently.",
      "If it can talk smoothly, it can lie smoothly.",
      "If it can answer fast, it can mislead fast.",
      "If it can sound human, it can mislead like one.",
    ],
    icon: Shield,
    illustration: "fluency",
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
    illustration: "system",
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
    illustration: "decision",
  },
]


const VisualPanel = ({ activeBlock }: { activeBlock: number }) => {
  return (
    <div className="relative h-full flex items-center justify-center p-8">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeBlock}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full max-w-md"
        >
          {activeBlock === 0 && (
            <div className="relative">
              {/* Option B: Diagnostic Gauge Visual */}
              <div className="card-elevated p-8 bg-cream-dark/50 overflow-hidden relative">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-warm-gray-light">Active Diagnostic</span>
                  </div>
                  <span className="text-[10px] font-mono text-gold-dark/60">REF-09X-VOI</span>
                </div>

                <div className="space-y-6">
                  {/* Fluency Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-warm-gray">Fluency</span>
                      <motion.span
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 3 }}
                        className="text-gold-dark font-mono"
                      >
                        99.4%
                      </motion.span>
                    </div>
                    <div className="h-2 bg-gold/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "99.4%" }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-gold shadow-[0_0_10px_rgba(226,167,70,0.3)]"
                      />
                    </div>
                  </div>

                  {/* Confidence Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-warm-gray">Confidence</span>
                      <motion.span
                        animate={{ opacity: [1, 0.7, 1] }}
                        transition={{ duration: 0.1, repeat: Infinity, repeatDelay: 5 }}
                        className="text-gold-dark font-mono"
                      >
                        98.1%
                      </motion.span>
                    </div>
                    <div className="h-2 bg-gold/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "98.1%" }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="h-full bg-gold/80 shadow-[0_0_10px_rgba(226,167,70,0.2)]"
                      />
                    </div>
                  </div>

                  <div className="gold-line !my-4 opacity-20" />

                  {/* Accuracy/Truth Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-destructive/80 italic">Ground Truth Accuracy</span>
                      <motion.span
                        animate={{
                          opacity: [1, 0, 1],
                          scale: [1, 1.1, 1],
                          color: ["#ef4444", "#ffffff", "#ef4444"]
                        }}
                        transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
                        className="text-destructive font-mono font-bold"
                      >
                        12.4%
                      </motion.span>
                    </div>
                    <div className="h-3 bg-destructive/10 rounded-full overflow-hidden border border-destructive/20 relative">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "12.4%" }}
                        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                        className="h-full bg-destructive shadow-[0_0_15px_rgba(239,68,68,0.4)]"
                      />
                      <motion.div
                        animate={{ opacity: [0, 0.4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="absolute inset-0 bg-destructive/20"
                      />
                    </div>
                    <p className="text-[10px] text-destructive/70 font-medium italic mt-1">
                      Critical logic mismatch detected
                    </p>
                  </div>
                </div>

                {/* Decorative scanning line */}
                <motion.div
                  animate={{ y: [-100, 300] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 right-0 h-10 bg-gradient-to-b from-transparent via-gold/5 to-transparent pointer-events-none"
                />
              </div>
            </div>
          )}

          {activeBlock === 1 && (
            <div className="relative">
              {/* System vs bot layers visual */}
              <div className="space-y-4">
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  className="card-elevated p-5 border-l-4 border-l-primary bg-background"
                >
                  <p className="text-sm font-semibold text-warm-gray">
                    The Voice Layer
                  </p>
                  <p className="text-xs text-charcoal-muted mt-1">
                    What most teams optimize for.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="card-elevated p-5 border-l-4 border-l-gold/60 ml-4 bg-background"
                >
                  <p className="text-sm font-semibold text-warm-gray">
                    The System Layer
                  </p>
                  <p className="text-xs text-charcoal-muted mt-1">
                    What VoiShift defines and gates.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="card-elevated p-5 border-l-4 border-l-sand ml-8 bg-background"
                >
                  <p className="text-sm font-semibold text-warm-gray">
                    The Ground Truth
                  </p>
                  <p className="text-xs text-charcoal-muted mt-1">
                    External data that either holds or breaks.
                  </p>
                </motion.div>
              </div>
            </div>
          )}

          {activeBlock === 2 && (
            <div className="relative">
              {/* Second brain visual */}
              <div className="card-elevated p-8 text-center bg-cream-dark/50">
                <div className="flex items-center justify-center gap-10 mb-8">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-primary/20 flex items-center justify-center shadow-inner">
                      <Brain className="w-8 h-8 text-primary shadow-sm" />
                    </div>
                    <p className="text-[10px] text-warm-gray-light font-bold uppercase tracking-tighter">Second Brain</p>
                    <p className="text-xs font-bold text-primary">AUGMENTS</p>
                  </div>
                  <div className="text-2xl font-serif text-charcoal-muted italic">vs</div>
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-destructive/5 flex items-center justify-center">
                      <Brain className="w-8 h-8 text-destructive/40" />
                    </div>
                    <p className="text-[10px] text-warm-gray-light font-bold uppercase tracking-tighter">Only Brain</p>
                    <p className="text-xs font-bold text-destructive/60">REPLACES</p>
                  </div>
                </div>
                <div className="gold-line mx-auto opacity-40" />
                <p className="text-sm text-warm-gray mt-4 font-medium">
                  We don't replace your team's judgment.<br />
                  <span className="text-primary italic">We replicate it safely.</span>
                </p>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export function SubHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeBlock, setActiveBlock] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value) => {
      const newBlock = Math.min(Math.floor(value * 3), 2)
      setActiveBlock(newBlock)
    })
    return () => unsubscribe()
  }, [scrollYProgress])

  return (
    <section id="sub-hero" ref={containerRef} className="relative bg-cream-dark">
      <div className="sticky top-0 min-h-screen flex">
        {/* Left side - Scrollable narrative */}
        <div className="w-full lg:w-3/5 overflow-auto">
          <div className="py-24 lg:py-32">
            {narrativeBlocks.map((block, index) => (
              <div
                key={block.id}
                className="min-h-screen flex items-center px-6 lg:px-16"
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: false, amount: 0.5 }}
                  className="max-w-xl"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                      <block.icon className="w-5 h-5 text-gold-dark" />
                    </div>
                    <span className="text-xs font-medium text-warm-gray-light uppercase tracking-wider">
                      Part {index + 1} of 3
                    </span>
                  </div>

                  {typeof block.title === "string" ? (
                    <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-warm-gray leading-tight mb-8 text-balance">
                      {block.title}
                    </h2>
                  ) : (
                    <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl leading-[1.05] tracking-tight text-warm-gray mb-8">
                      <span className="block">
                        {block.title.line1}
                      </span>
                      <span className="block italic text-gold/80 font-normal mt-1">
                        {block.title.line2}
                      </span>
                    </h2>
                  )}


                  <div className="space-y-4">
                    {block.content.map((line, i) => (
                      <motion.p
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        viewport={{ once: false, amount: 0.8 }}
                        className="text-lg text-warm-gray-light leading-relaxed"
                      >
                        {line}
                      </motion.p>
                    ))}
                  </div>

                  {index === 2 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: false, amount: 0.8 }}
                      className="mt-12 flex flex-col sm:flex-row gap-4"
                    >
                      <Button
                        size="lg"
                        className="bg-gold hover:bg-gold-dark text-warm-gray rounded-lg shadow-sm transition-all duration-300"
                        asChild
                      >
                        <a href="#engage">
                          I need a system, not a bot
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-gold/40 text-warm-gray hover:bg-gold/5 rounded-lg transition-all duration-300 bg-transparent"
                        asChild
                      >
                        <a href="#engage">
                          Stress test my current build
                        </a>
                      </Button>
                    </motion.div>
                  )}
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Right side - Sticky illustration panel */}
        <div className="hidden lg:flex w-2/5 sticky top-0 h-screen items-center justify-center bg-sand/30 border-l border-border/50">
          <VisualPanel activeBlock={activeBlock} />
        </div>
      </div>
    </section>
  )
}
