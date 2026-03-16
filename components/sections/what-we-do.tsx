"use client"

import React, { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Mic2,
  BrainCircuit,
  ShieldAlert,
  Workflow,
  ChevronDown
} from "lucide-react"
import { useModal } from "@/context/modal-context"

const pillars = [
  {
    title: "Voice layer for decisions and action",
    icon: Mic2,
    //description: "We design and deploy voice agents that can handle real conversations, not just scripted flows.",
    examples: [
      "Ask by voice instead of hunting across dashboards, reports, and tabs",
      "Use voice anywhere, on mobile, on the floor, in the field, or at a desk",
      "Get an answer plus a clear next step, owner, and deadline",
      "Explain spikes, drops, delays, and exceptions with evidence, not guesses, and run what-if checks",
      "Trigger actions across tools: create, update, assign, schedule, notify, with confirmation before irreversible steps",
    ]
  },
  {
    title: "Defensible answers from rules, data, and required context",
    icon: BrainCircuit,
    //description: "We convert calls into usable work artifacts, automatically.",
    examples: [
      "Answer “what applies” using approved SOPs, policies, and live system data",
      "Ask only for the missing detail that changes the decision",
      "Route unclear cases, approvals, and exceptions to the right owner",
      "Verify identity and enforce roles, permissions, consent, and required disclosures",
    ]
  },
  {
    title: "Turn conversations, updates, and events into owned work that closes",
    icon: ShieldAlert,
    //description: "Voice AI is high impact and high risk. We build guardrails so the system behaves under pressure.",
    examples: [
      "Convert meeting questions and cross-team requests into owned work items with proof gates",
      "Capture incidents, safety events, inspections, and proof-of-work as structured entries with follow-ups",
      "Generate decision notes with rationale, risks, and sign-off without extra writing",
      "Write back into your tools so the system of record stays clean and up to date"

    ]
  },
  {
    title: "Control layer that holds up under pressure and over time",
    icon: Workflow,
    //description: "Voice agents only work when the surrounding workflow works. We connect the full loop.",
    examples: [
      "Define what the system can do, cannot do, and when a human must decide",
      "Log every step so you can prove who decided what, when, and why",
      "Provide live prompts for humans during calls, plus post-interaction QA and coaching signals",
      "Monitor drift and failure modes so performance stays stable as reality changes"

    ]
  }
]

const AUTO_PLAY_INTERVAL = 5000

export function WhatWeDo() {

  const [activePillar, setActivePillar] = useState<number | null>(0)
  const [isPaused, setIsPaused] = useState(false)
  const [progress, setProgress] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  const startTimeRef = useRef<number | null>(null)
  const pausedElapsedRef = useRef(0)
  const frameRef = useRef<number | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    if (isMobile) return
    if (activePillar === null) return
    pausedElapsedRef.current = 0
    startTimeRef.current = null
    setProgress(0)
  }, [activePillar, isMobile])

  useEffect(() => {
    if (isMobile) return
    if (isPaused) {
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
      return
    }
    if (activePillar === null) return

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp - pausedElapsedRef.current
      }

      const elapsed = timestamp - startTimeRef.current
      pausedElapsedRef.current = elapsed

      const percent = (elapsed / AUTO_PLAY_INTERVAL) * 100
      setProgress(Math.min(percent, 100))

      if (elapsed >= AUTO_PLAY_INTERVAL) {
        setActivePillar(prev =>
          prev !== null ? (prev + 1) % pillars.length : 0
        )
        return
      }

      frameRef.current = requestAnimationFrame(animate)
    }

    frameRef.current = requestAnimationFrame(animate)

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [isPaused, activePillar, isMobile])

  const handleAccordionClick = (index: number) => {
    if (isMobile) {
      setActivePillar(prev => (prev === index ? null : index))
    } else {
      setActivePillar(index)
    }
  }

  // Intersection Observer to reset active pillar when scrolled into view
  useEffect(() => {
    // Only apply on desktop to maintain mobile accordion state
    if (isMobile) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActivePillar(0)
          }
        })
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [isMobile])

  return (
    <div ref={sectionRef} className="relative bg-white py-24 scroll-mt-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[1fr_0.8fr] gap-16 lg:gap-24 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="font-serif text-xl md:text-3xl text-warm-gray-light leading-[1.1] mb-8">
              <span className="font-black text-warm-gray">VoiShift</span> is a <span className="text-gold"> Voice-first, Anything-AI </span> execution partner that helps enterprises run work, not chase it or firefight it.
            </div>
            <div className="space-y-3 text-lg md:text-xl text-warm-gray-light font-serif leading-relaxed max-w-2xl border-l-4 border-gold pl-8 py-1">
              <p>
                VoiShift adds a voice layer to how work gets decided and done, across tools, reports, and workflows.
              </p>
              <p className="text-lg italic text-gold">
                Custom-built as a system, not a plug-and-play bot, so decisions stay controlled and traceable.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center"
          >
            <div className="bg-[#1a1a1a] p-8 shadow-2xl relative group">
              <p className="text-white text-lg md:text-xl font-serif italic leading-relaxed">
                If your operations live in tools, dashboards, & reports that run communication, updates, escalations, exceptions, approvals, and handoffs, <span className="text-gold">voice is the simplest execution advantage in the AI era.</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-10">
          <h2 className="text-2xl font-black text-gold uppercase tracking-[0.4em] mb-12 flex items-center justify-center gap-4 text-center">
            <span className="h-px w-12 bg-gold" />
            What we do
            <span className="h-px w-12 bg-gold" />
          </h2>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">

            {/* Desktop Left Navigation */}
            <div className="hidden lg:block lg:w-[40%] w-full">
              <div className="lg:sticky lg:top-32 space-y-3">
                {pillars.map((pillar, index) => {
                  const isActive = activePillar === index
                  const Icon = pillar.icon

                  return (
                    <button
                      key={index}
                      onClick={() => handleAccordionClick(index)}
                      onMouseEnter={() => isActive && setIsPaused(true)}
                      onMouseLeave={() => isActive && setIsPaused(false)}
                      className={`w-full text-left flex items-center gap-4 p-4 lg:p-6 transition-all duration-300 border-l-4 rounded-r-lg relative overflow-hidden ${isActive
                          ? "bg-white border-gold shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
                          : "hover:bg-white/40 border-transparent text-warm-gray/60 hover:text-warm-gray hover:border-gold/30"
                        }`}
                    >
                      {isActive && (
                        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gold/10">
                          <div
                            className="h-full bg-gold"
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                      )}

                      <div className={`w-12 h-12 flex items-center justify-center rounded-md shrink-0 ${isActive ? "bg-gold/10 border border-gold/20" : ""
                        }`}>
                        <Icon className={`w-6 h-6 ${isActive ? "text-gold" : "text-warm-gray/40"
                          }`} />
                      </div>

                      <span className={`font-serif text-lg md:text-xl ${isActive ? "text-gold" : ""
                        }`}>
                        {pillar.title}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Desktop Right Content */}
            <div className="hidden lg:block lg:w-[60%] w-full">
              {activePillar !== null && (
                <div
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                  className="bg-white p-8 lg:p-12 border-2 border-gold relative border-t-8 shadow-[0_20px_50px_rgb(0,0,0,0.05)] min-h-[500px] flex flex-col rounded-lg"
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activePillar}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-xl md:text-3xl font-serif text-warm-gray mb-6">
                        {pillars[activePillar].title}
                      </h3>

                      <ul className="space-y-8">
                        {pillars[activePillar].examples.map((example, i) => (
                          <li key={i} className="flex items-start gap-4">
                            <div className="mt-2 w-1.5 h-1.5 bg-gold/40 shrink-0 rotate-45" />
                            <span className="text-base md:text-lg text-warm-gray leading-relaxed">
                              {example}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </AnimatePresence>
                </div>
              )}
            </div>

            {/* Mobile Accordion */}
            <div className="lg:hidden w-full space-y-4">
              {pillars.map((pillar, index) => {
                const isActive = activePillar === index
                const Icon = pillar.icon

                return (
                  <div key={index} className="border-2 border-gold rounded-lg overflow-hidden">
                    <button
                      onClick={() => handleAccordionClick(index)}
                      className="w-full flex items-center justify-between p-6 text-left"
                    >
                      <div className="flex items-center gap-4">
                        <Icon className="w-6 h-6 text-gold" />
                        <span className="font-serif text-lg text-warm-gray">
                          {pillar.title}
                        </span>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-gold transition-transform duration-300 ${isActive ? "rotate-180" : ""
                          }`}
                      />
                    </button>

                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-6 pb-6"
                        >
                          <ul className="space-y-4">
                            {pillar.examples.map((example, i) => (
                              <li key={i} className="flex items-start gap-4">
                                <div className="mt-2 w-1.5 h-1.5 bg-gold/40 shrink-0 rotate-45" />
                                <span className="text-base text-warm-gray leading-relaxed">
                                  {example}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}