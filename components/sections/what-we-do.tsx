"use client"

import { motion } from "framer-motion"
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
    title: "1) Voice AI agents for revenue and operations",
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
    title: "2) Conversation intelligence that turns talk into action",
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
    title: "3) System integrity, trust, and risk controls",
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
    title: "4) Anything-AI delivery when voice touches other workflows",
    icon: Workflow,
    description: "Voice agents only work when the surrounding workflow works. We connect the full loop.",
    examples: [
      "CRM updates, ticketing, scheduling, knowledge retrieval",
      "internal tooling, dashboards, reporting",
      "automation glue across the stack so outcomes are consistent"
    ]
  }
]

export function WhatWeDo() {
  const { openModal } = useModal();

  return (
    <div className="relative bg-white py-24 scroll-mt-32 overflow-hidden">
      {/* Precision Grid Overlay */}
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
            <h2 className="font-serif text-3xl md:text-5xl text-warm-gray leading-[1.1] mb-8">
              VoiShift is a Voice-AI-first,<br />
              <span className="text-gold italic"> Anything-AI execution partner.</span>
            </h2>
            <div className="space-y-6 text-xl md:text-2xl text-warm-gray-light font-serif italic leading-relaxed max-w-2xl border-l-4 border-gold pl-8 py-2">
              <p>
                VoiShift builds voice AI that works in the real world
              </p>
              <p className="text-lg">
                We help teams turn &quot;AI ideas&quot; into systems that actually run inside day-to-day operations, without breaking trust or creating chaos.
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
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gold flex items-center justify-center">
                <Plus className="text-[#1a1a1a] w-6 h-6" />
              </div>
              <p className="text-white text-lg md:text-xl font-serif italic leading-relaxed">
                If your teams spend hours following up, voice is not a nice-to-have. <span className="text-gold not-italic font-black block mt-4 uppercase tracking-wider text-sm">It is the highest leverage interface you can automate.</span>
              </p>
            </div>
          </motion.div>
        </div>

        <div className="mb-24">
          <h3 className="text-xs font-black text-gold uppercase tracking-[0.4em] mb-12 flex items-center gap-4">
            <span className="h-px w-12 bg-gold" />
            What we do
          </h3>
          <div className="grid md:grid-cols-2">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 lg:p-12 group transition-colors hover:bg-[#faf9f6] border-2 border-gold relative border-t-8"
              >
                <div className="flex items-start gap-6 mb-8">
                  <div className="w-16 h-16 bg-gold/5 flex items-center justify-center border border-gold/10 group-hover:bg-gold/10 transition-colors shrink-0">
                    <pillar.icon className="w-8 h-8 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-xl md:text-2xl font-serif text-warm-gray mb-3 group-hover:text-gold transition-colors duration-500">
                      {pillar.title}
                    </h4>
                    <p className="text-warm-gray-light leading-relaxed italic font-serif text-lg">
                      {pillar.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-[10px] font-black text-warm-gray/40 uppercase tracking-widest mb-6">
                    Implementation Examples:
                  </p>
                  <ul className="space-y-4">
                    {pillar.examples.map((example, i) => (
                      <li key={i} className="flex items-start gap-3 group/item">
                        <div className="mt-2 w-1.5 h-1.5 bg-gold/30 shrink-0" />
                        <span className="text-sm md:text-md text-warm-gray leading-tight group-hover/item:text-warm-gray group-hover/item:translate-x-2 transition-transform">
                          {example}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="pb-12 pt-8 border-t border-gold flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-4">
            <Activity className="w-5 h-5 text-gold animate-pulse" />
            <span className="text-xs font-black text-warm-gray uppercase tracking-[0.4em]">Integrated Intelligence Engine Ready</span>
          </div>
          <button 
            onClick={openModal}
            className="flex items-center gap-3 text-sm font-black text-warm-gray uppercase tracking-widest group/btn transition-all border-b-2 border-gold pb-2"
          >
            Build Your System
            <ArrowRight className="w-5 h-5 text-gold group-hover/btn:translate-x-3 transition-transform duration-500" />
          </button>
        </motion.div>
      </div>
    </div>
  )
}
