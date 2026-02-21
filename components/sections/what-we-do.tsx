"use client"

import React, { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Mic2, 
  BrainCircuit, 
  ShieldAlert, 
  Workflow,
  Plus,
  ArrowRight,
  Activity
} from "lucide-react"
import { useModal } from "@/context/modal-context"

const pillars = [
  {
    title: "Voice AI agents for revenue and operations",
    icon: Mic2,
    description: "We design and deploy voice agents that can handle real conversations, not just scripted flows.",
    examples: [
      "inbound lead qualification and routing",
      "appointment booking, rescheduling, confirmations",
      "renewals nudges, payment reminders, follow-ups",
      "support triage and case creation",
      "internal workflow agents for teams that run on calls"
    ]
  },
  {
    title: "Conversation intelligence that turns talk into action",
    icon: BrainCircuit,
    description: "We convert calls into usable work artifacts, automatically.",
    examples: [
      "structured summaries that match your internal SOPs",
      "decision, risk, and next-step extraction",
      "coaching and QA signals for calls and messages",
      "pattern reports for leaders, not random transcripts"
    ]
  },
  {
    title: "System integrity, trust, and risk controls",
    icon: ShieldAlert,
    description: "Voice AI is high impact and high risk. We build guardrails so the system behaves under pressure.",
    examples: [
      "clear boundaries on what the agent can and cannot do",
      "escalation logic that feels human and safe",
      "compliance-ready logging and QA routines",
      "failure-mode design so errors do not multiply quietly"
    ]
  },
  {
    title: "Anything-AI delivery when voice touches other workflows",
    icon: Workflow,
    description: "Voice agents only work when the surrounding workflow works. We connect the full loop.",
    examples: [
      "CRM updates, ticketing, scheduling, knowledge retrieval",
      "internal tooling, dashboards, reporting",
      "automation glue across the stack so outcomes are consistent"
    ]
  }
]

const AUTO_PLAY_INTERVAL = 5000

export function WhatWeDo() {
  const { openModal } = useModal()

  const [activePillar, setActivePillar] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [progress, setProgress] = useState(0)

  const startTimeRef = useRef<number | null>(null)
  const pausedElapsedRef = useRef(0)
  const frameRef = useRef<number | null>(null)

  // Reset when pillar changes
  useEffect(() => {
    pausedElapsedRef.current = 0
    startTimeRef.current = null
    setProgress(0)
  }, [activePillar])

  useEffect(() => {
    if (isPaused) {
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
      return
    }

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp - pausedElapsedRef.current
      }

      const elapsed = timestamp - startTimeRef.current
      pausedElapsedRef.current = elapsed

      const percent = (elapsed / AUTO_PLAY_INTERVAL) * 100
      setProgress(Math.min(percent, 100))

      if (elapsed >= AUTO_PLAY_INTERVAL) {
        setActivePillar(prev => (prev + 1) % pillars.length)
        return
      }

      frameRef.current = requestAnimationFrame(animate)
    }

    frameRef.current = requestAnimationFrame(animate)

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [isPaused, activePillar])

  return (
    <div className="relative bg-white py-24 scroll-mt-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-24">
          <h3 className="text-xs font-black text-gold uppercase tracking-[0.4em] mb-12 flex items-center gap-4">
            <span className="h-px w-12 bg-gold" />
            What we do
          </h3>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">

            <div className="lg:w-[40%] w-full">
              <div className="lg:sticky lg:top-32 space-y-3">
                {pillars.map((pillar, index) => {
                  const isActive = activePillar === index
                  const Icon = pillar.icon

                  return (
                    <button
                      key={index}
                      onClick={() => setActivePillar(index)}
                      onMouseEnter={() => isActive && setIsPaused(true)}
                      onMouseLeave={() => isActive && setIsPaused(false)}
                      className={`w-full text-left flex items-center gap-4 p-4 lg:p-6 transition-all duration-300 border-l-4 rounded-r-lg relative overflow-hidden ${
                        isActive
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

                      <div className={`w-12 h-12 flex items-center justify-center rounded-md shrink-0 ${
                        isActive ? "bg-gold/10 border border-gold/20" : ""
                      }`}>
                        <Icon className={`w-6 h-6 ${
                          isActive ? "text-gold" : "text-warm-gray/40"
                        }`} />
                      </div>

                      <span className={`font-serif text-lg md:text-xl ${
                        isActive ? "text-gold" : ""
                      }`}>
                        {pillar.title}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="lg:w-[60%] w-full">
              <div className="bg-white p-8 lg:p-12 border-2 border-gold relative border-t-8 shadow-[0_20px_50px_rgb(0,0,0,0.05)] min-h-[500px] flex flex-col rounded-lg">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activePillar}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h4 className="text-xl md:text-3xl font-serif text-warm-gray mb-4">
                      {pillars[activePillar].title}
                    </h4>

                    <p className="text-warm-gray-light leading-relaxed italic font-serif text-lg lg:text-xl mb-6">
                      {pillars[activePillar].description}
                    </p>

                    <ul className="space-y-4">
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
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}