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
          className="w-full min-h-[420px] flex flex-col bg-black/90 border border-charcoal rounded-xl p-5"
        >

          {/* BLOCK 1 — Response Audit */}
          {active === 0 && (
            <div className="flex flex-col gap-4 h-full">
              <div className="text-[10px] uppercase tracking-widest text-gold/40 font-medium">
                Live Response Audit
              </div>

              {/* Bot bubble */}
              <div className="bg-white/5 border border-white/10 rounded-xl rounded-tr-sm p-4">
                <div className="text-[10px] uppercase tracking-widest text-gold/40 mb-2 font-medium">
                  Voice bot — 0.4s response
                </div>
                <p className="text-cream text-sm italic leading-relaxed">
                  "Absolutely, we can deliver that by Friday — no problem at all."
                </p>
                <div className="flex gap-2 mt-3">
                  {["Confident", "Fluent", "Fast"].map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Scanning indicator */}
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <circle cx="5" cy="5" r="4" stroke="#f59e0b" strokeWidth="1.2" />
                    <line x1="5" y1="2" x2="5" y2="5.5" stroke="#f59e0b" strokeWidth="1.2" strokeLinecap="round" />
                    <circle cx="5" cy="7.2" r="0.6" fill="#f59e0b" />
                  </svg>
                </div>
                <span className="text-[11px] text-warm-gray-light">
                  Checking against enterprise systems…
                </span>
              </div>

              {/* Conflict panel */}
              <div className="border border-red-500/30 rounded-lg overflow-hidden flex-1">
                <div className="bg-red-500/10 px-4 py-2 flex items-center gap-2">
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                    <path d="M7 1L13 12H1Z" fill="none" stroke="#f87171" strokeWidth="1.2" strokeLinejoin="round" />
                    <line x1="7" y1="5" x2="7" y2="8.5" stroke="#f87171" strokeWidth="1.2" strokeLinecap="round" />
                    <circle cx="7" cy="10" r="0.6" fill="#f87171" />
                  </svg>
                  <span className="text-[11px] font-medium text-red-400">
                    3 policy conflicts detected
                  </span>
                </div>
                <div className="px-4 py-3 flex flex-col gap-2.5">
                  {[
                    { label: "Inventory:", value: "lead time is 14 days, not 2" },
                    { label: "CRM:", value: "customer flag — credit hold active" },
                    { label: "Policy:", value: "items require manager sign-off" },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 flex-shrink-0" />
                      <span className="text-[12px] text-warm-gray-light leading-snug">
                        <span className="text-cream/60">{label}</span> {value}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="bg-red-500/10 px-4 py-2 border-t border-red-500/20">
                  <span className="text-[10px] uppercase tracking-widest font-medium text-red-400">
                    Fluent ≠ Correct
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* BLOCK 2 — Missing Architecture */}
          {active === 1 && (
            <div className="flex flex-col gap-3 h-full">
              <div className="text-[10px] uppercase tracking-widest text-gold/40 font-medium">
                What you built vs. what you needed
              </div>

              <svg
                width="100%"
                viewBox="0 0 400 300"
                className="overflow-visible"
              >
                <defs>
                  <marker
                    id="arr-red"
                    viewBox="0 0 10 10"
                    refX="8"
                    refY="5"
                    markerWidth="6"
                    markerHeight="6"
                    orient="auto-start-reverse"
                  >
                    <path
                      d="M2 1L8 5L2 9"
                      fill="none"
                      stroke="#f87171"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </marker>
                  <marker
                    id="arr-muted"
                    viewBox="0 0 10 10"
                    refX="8"
                    refY="5"
                    markerWidth="6"
                    markerHeight="6"
                    orient="auto-start-reverse"
                  >
                    <path
                      d="M2 1L8 5L2 9"
                      fill="none"
                      stroke="#6b7280"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </marker>
                </defs>

                {/* Voice Bot */}
                <rect x="130" y="10" width="140" height="50" rx="8" fill="rgba(212,175,55,0.1)" stroke="rgba(212,175,55,0.4)" strokeWidth="0.5" />
                <text x="200" y="31" textAnchor="middle" dominantBaseline="central" fill="#d4af37" fontSize="13" fontWeight="500">Voice bot</text>
                <text x="200" y="48" textAnchor="middle" dominantBaseline="central" fill="rgba(212,175,55,0.5)" fontSize="10">Handles conversation</text>

                {/* Arrow down (broken) */}
                <line x1="200" y1="60" x2="200" y2="84" stroke="#f87171" strokeWidth="1" strokeDasharray="4 3" markerEnd="url(#arr-red)" />

                {/* Missing layer */}
                <rect x="30" y="87" width="340" height="72" rx="8" fill="rgba(239,68,68,0.06)" stroke="#f87171" strokeDasharray="6 4" strokeWidth="1" />
                <text x="200" y="116" textAnchor="middle" dominantBaseline="central" fill="#f87171" fontSize="13" fontWeight="500">Decision Layer</text>
                <text x="200" y="134" textAnchor="middle" dominantBaseline="central" fill="rgba(248,113,113,0.65)" fontSize="10">Missing — answers not grounded in reality</text>
                {/* X mark */}
                <line x1="64" y1="116" x2="76" y2="128" stroke="#f87171" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="76" y1="116" x2="64" y2="128" stroke="#f87171" strokeWidth="1.5" strokeLinecap="round" />

                {/* Arrow down (broken) */}
                <line x1="200" y1="159" x2="200" y2="182" stroke="#f87171" strokeWidth="1" strokeDasharray="4 3" markerEnd="url(#arr-red)" />

                {/* Enterprise systems */}
                {[
                  { x: 14, label: "CRM", sub: "Customer data" },
                  { x: 150, label: "Operations", sub: "Inventory, orders" },
                  { x: 286, label: "Policy", sub: "Rules, compliance" },
                ].map(({ x, label, sub }) => (
                  <g key={label}>
                    <rect x={x} y="184" width="100" height="48" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                    <text x={x + 50} y="204" textAnchor="middle" dominantBaseline="central" fill="#9ca3af" fontSize="11" fontWeight="500">{label}</text>
                    <text x={x + 50} y="220" textAnchor="middle" dominantBaseline="central" fill="rgba(156,163,175,0.5)" fontSize="9">{sub}</text>
                  </g>
                ))}

                {/* Bottom brackets */}
                <line x1="14" y1="252" x2="14" y2="260" stroke="#6b7280" strokeWidth="0.5" />
                <line x1="14" y1="260" x2="113" y2="260" stroke="#6b7280" strokeWidth="0.5" />
                <line x1="113" y1="260" x2="113" y2="252" stroke="#6b7280" strokeWidth="0.5" />
                <text x="63" y="272" textAnchor="middle" fill="#6b7280" fontSize="9">What you built</text>

                <line x1="113" y1="252" x2="113" y2="260" stroke="#6b7280" strokeWidth="0.5" />
                <line x1="113" y1="260" x2="386" y2="260" stroke="#f87171" strokeWidth="0.5" strokeDasharray="4 3" />
                <line x1="386" y1="260" x2="386" y2="252" stroke="#f87171" strokeWidth="0.5" />
                <text x="260" y="272" textAnchor="middle" fill="#f87171" fontSize="9">What decides if it's true — missing</text>
              </svg>
            </div>
          )}

          {/* BLOCK 3 — Second Brain */}
          {active === 2 && (
            <div className="flex flex-col gap-3 h-full">
              <div className="text-[10px] uppercase tracking-widest text-gold/40 font-medium">
                AI as a second brain, not the only one
              </div>

              <svg
                width="100%"
                viewBox="0 0 400 310"
                className="overflow-visible"
              >
                <defs>
                  <marker
                    id="arr-gold"
                    viewBox="0 0 10 10"
                    refX="8"
                    refY="5"
                    markerWidth="6"
                    markerHeight="6"
                    orient="auto-start-reverse"
                  >
                    <path
                      d="M2 1L8 5L2 9"
                      fill="none"
                      stroke="rgba(212,175,55,0.5)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </marker>
                </defs>

                {/* Human node */}
                <circle cx="200" cy="32" r="22" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                <circle cx="200" cy="26" r="7" fill="rgba(255,255,255,0.4)" />
                <path d="M186 44 Q186 38 200 38 Q214 38 214 44" fill="rgba(255,255,255,0.4)" />
                <text x="200" y="66" textAnchor="middle" fill="#d4c5a9" fontSize="11" fontWeight="500">Human decision-maker</text>
                <text x="200" y="79" textAnchor="middle" fill="rgba(212,197,169,0.45)" fontSize="9">Stays in control</text>

                {/* Arrow: human → AI */}
                <line x1="200" y1="86" x2="200" y2="108" stroke="rgba(212,175,55,0.3)" strokeWidth="1" markerEnd="url(#arr-gold)" />

                {/* AI pulse ring */}
                <circle cx="200" cy="140" r="40" fill="none" stroke="rgba(212,175,55,0.12)" strokeWidth="1" />
                {/* AI brain node */}
                <circle cx="200" cy="140" r="28" fill="rgba(212,175,55,0.12)" stroke="rgba(212,175,55,0.5)" strokeWidth="1" />
                {/* Brain icon */}
                <circle cx="194" cy="138" r="9" fill="none" stroke="#d4af37" strokeWidth="1.5" />
                <circle cx="206" cy="138" r="9" fill="none" stroke="#d4af37" strokeWidth="1.5" />
                <line x1="194" y1="147" x2="206" y2="147" stroke="#d4af37" strokeWidth="1.5" strokeLinecap="round" />
                <text x="200" y="174" textAnchor="middle" fill="rgba(212,175,55,0.7)" fontSize="10" fontWeight="500">Enterprise AI layer</text>

                {/* Arrows: AI → systems (3 animated dashed lines) */}
                <line x1="174" y1="164" x2="64" y2="196" stroke="rgba(212,175,55,0.3)" strokeWidth="1" markerEnd="url(#arr-gold)" strokeDasharray="5 3" />
                <line x1="200" y1="168" x2="200" y2="196" stroke="rgba(212,175,55,0.3)" strokeWidth="1" markerEnd="url(#arr-gold)" strokeDasharray="5 3" />
                <line x1="226" y1="164" x2="336" y2="196" stroke="rgba(212,175,55,0.3)" strokeWidth="1" markerEnd="url(#arr-gold)" strokeDasharray="5 3" />

                {/* Systems row */}
                {[
                  { x: 14, label: "CRM", sub: "Live customer data" },
                  { x: 150, label: "Operations", sub: "Inventory, orders" },
                  { x: 286, label: "Policy", sub: "Rules, compliance" },
                ].map(({ x, label, sub }) => (
                  <g key={label}>
                    <rect x={x} y="198" width="100" height="48" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                    <text x={x + 50} y="218" textAnchor="middle" dominantBaseline="central" fill="#9ca3af" fontSize="11" fontWeight="500">{label}</text>
                    <text x={x + 50} y="234" textAnchor="middle" dominantBaseline="central" fill="rgba(156,163,175,0.5)" fontSize="9">{sub}</text>
                  </g>
                ))}

                {/* Footer affirm */}
                <rect x="70" y="268" width="260" height="36" rx="8" fill="rgba(34,197,94,0.08)" stroke="rgba(34,197,94,0.25)" strokeWidth="0.5" />
                <text x="200" y="282" textAnchor="middle" dominantBaseline="central" fill="#4ade80" fontSize="11" fontWeight="500">AI augments human judgment</text>
                <text x="200" y="296" textAnchor="middle" dominantBaseline="central" fill="rgba(74,222,128,0.55)" fontSize="9">Decision authority stays with you</text>
              </svg>
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
      <div className="sticky top-14 lg:top-16 z-40 bg-white border-b border-sand px-6 py-8 text-center">
        <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-serif font-black text-gold leading-tight max-w-7xl lg:max-w-5xl mx-auto">
          Most teams install a <span className="text-warm-gray">plug-n-play</span> voice bot & call it <span className="text-warm-gray">AI transformation. </span>
          But <span className="text-warm-gray">plug-n-play</span> also means <span className="text-warm-gray">plug-n-play</span> failure modes.
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
                      Book a Strategy Session
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>

                    <Button
                      size="default"
                      variant="outline"
                      className="border-gold/40 text-gold bg-black rounded-lg transition-all duration-300 w-full sm:w-auto"
                      onClick={() => openModal()}
                    >
                      <a href="/how-it-works">
                        How It Works
                      </a>
                      <ArrowRight className="ml-2 h-4 w-4" />
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