"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import {
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Activity,
  ShieldAlert,
  ArrowRight,
  Database,
  Users,
  TrendingDown,
  UserCircle,
  Briefcase,
  Globe,
  Cpu,
  Lightbulb,
  BarChart3,
  Settings2
} from "lucide-react"
import { useModal } from "@/context/modal-context"

const industries = [
  { id: "logistics", name: "Logistics", code: "LOG-01" },
  { id: "manufacturing", name: "Manufacturing", code: "MFG-02" },
  { id: "healthcare", name: "Healthcare", code: "HLC-03" },
  { id: "telecom", name: "Telecom", code: "TEL-04" },
  { id: "ecommerce", name: "eCommerce", code: "COM-05" },
  { id: "bfsi", name: "BFSI", code: "FIN-06" },
  { id: "travel", name: "Travel", code: "TRV-07" },
  { id: "tech", name: "Tech/SaaS", code: "SaaS-08" },
  { id: "media", name: "Media", code: "MED-09" },
]

const roles = [
  { id: "cto", name: "CTO / Technical", icon: Database },
  { id: "coo", name: "COO / Operations", icon: Activity },
  { id: "cfo", name: "CFO / Finance", icon: TrendingDown },
  { id: "cco", name: "CCO / Customer", icon: Users },
  { id: "cro", name: "CRO / Revenue", icon: ShieldAlert },
  { id: "chro", name: "CHRO / Talent", icon: RotateCcw },
]

// Sample of the transposed data structure
const industryData: Record<string, any> = {
  logistics: {
    cto: {
      symptom: "Warehouse scans and ETAs conflict across systems, leading to duplicate records and connection gaps.",
      diagnosis: "Fragmented source of truth. Connection gaps scramble the timing of updates, creating doubled-up event records.",
      remedy: "One unified event sequence with a single 'Source of Truth'."
    },
    coo: {
      symptom: "Operational details vanish at shift changes. Teams moved on old shipment data, leading to detention fee spikes.",
      diagnosis: "The system summarizes 'what happened' but drops the 'why'. Monitoring lacks a clear timeline of instructions.",
      remedy: "Verifiable instruction logs that never lose the 'Why'."
    },
    cfo: {
      symptom: "Invoicing and fees differ by system. Credits get applied inconsistently across different customer touchpoints.",
      diagnosis: "The system forgets what was already done and repeats it. No turn-by-turn evidence to defend a charge.",
      remedy: "Audio-to-ledger reconciliation with audit-ready evidence."
    },
    cco: {
      symptom: "Status changes hourly across scanning systems. Confident but wrong ETA answers lead to frustrated repeat calls.",
      diagnosis: "The system uses yesterday's truth for an hour-by-hour operational reality.",
      remedy: "Real-time sync between voice and operational reality."
    },
    cro: {
      symptom: "Surcharges and rates get captured incorrectly. Agreement details get simplified in recaps, causing margin leakage.",
      diagnosis: "The system misses numeric nuances (rates, dates). Critical agreement terms are 'summarized' into generic ones.",
      remedy: "Constraint-first capture that never rounds off the details."
    },
    chro: {
      symptom: "The reason for a routing decision is lost. Shift changes repeat the same errors because the proof of training is missing.",
      diagnosis: "The system confuses context across turns. No way to replay a failure to see where the training broke down.",
      remedy: "Replayable operational traces to standardize standard work."
    }
  },
  manufacturing: {
    cto: {
      symptom: "Plant noise triggers the system incorrectly. It works in the office but fails on the loud factory floor.",
      diagnosis: "The system cannot distinguish floor noise from a command. It is statically tuned for a quiet environment.",
      remedy: "Environment-aware listening that tunes out the noise."
    },
    coo: {
      symptom: "Lead times shift without warning. Orders are processed on old plans because the 'exception' stayed in someone's head.",
      diagnosis: "Tracking breaks when operators jump between topics. The system forgets the previous state too quickly.",
      remedy: "Persistent memory that handles multi-topic conversations without drift."
    },
    cfo: {
      symptom: "Expedite spend is approved on voice but never shows up in the ledger. Costs stay hidden in 'exceptions'.",
      diagnosis: "The system skips the final confirmation. Financial commitments are 'summarized' instead of strictly verified.",
      remedy: "Forced 'Decision Gates' for every financial commitment."
    },
    cco: {
      symptom: "Lead times shift without warning. Customers hear different promises from different systems.",
      diagnosis: "Industry-specific codes are misheard and mis-mapped. Critical constraints are lost as the call goes on.",
      remedy: "Code-precision listening that never 'guesses' the meaning."
    },
    cro: {
      symptom: "Special agreements vanish between calls. Operations later contradicts what sales promised, breaking trust.",
      diagnosis: "The system is too 'fragile' to capture specific terms. No way to prove what was agreed in the heat of a call.",
      remedy: "Immutable proof of every sales commitment."
    },
    chro: {
      symptom: "Workarounds spread faster than training. Errors repeat under noise and pressure on the floor.",
      diagnosis: "No standard way to test how the system handles accents or noise. No 'regression' checks for new operational rules.",
      remedy: "Behavioral testing to ensure everyone follows the same standard."
    }
  },
  healthcare: {
    cto: {
      symptom: "Overlapping voices in a clinic confuse the record. The system cannot tell who is talking in a busy environment.",
      diagnosis: "Diarization is weak. The system cannot separate the doctor from the patient under real clinic noise.",
      remedy: "Multi-party speaker isolation designed for clinical reality."
    },
    coo: {
      symptom: "Prep instructions vary by department. One handoff drops a detail that leads to a surgical delay.",
      diagnosis: "Critical patient details are mis-captured. Exceptions don't follow the patient across departments.",
      remedy: "Patient-first context that travels across the whole operation."
    },
    cfo: {
      symptom: "Denials rise from small detail mismatches. Coverage details are mis-captured during busy intake calls.",
      diagnosis: "The system misinterprets IDs and numeric codes. It fails to keep the context across a long conversation.",
      remedy: "Field-level validation for every clinical and billing detail."
    },
    cco: {
      symptom: "Eligibility is unclear to patients. They get guidance that conflicts with their insurance, causing billing stress.",
      diagnosis: "The system confuses multiple speakers. It cannot handle the complexity of mixed medical terminology.",
      remedy: "Medical-grade accuracy with multi-speaker clarity."
    },
    cro: {
      symptom: "Security and compliance answers drift. Critical procurement rules get lost in the follow-up recaps.",
      diagnosis: "The system pulls answers from the wrong sources. It simplifies compliance terms into generic ones.",
      remedy: "Strictly grounded answers that can be traced back to the source."
    },
    chro: {
      symptom: "Details get misheard in busy rooms. Staff learns by copying what worked once instead of a standard process.",
      diagnosis: "The system doesn't ask for confirmation enough. It sounds too confident when it should be checking.",
      remedy: "Mandatory confirmation loops for every high-stakes clinical action."
    }
  },
  telecom: {
    cto: {
      symptom: "Connection drops and network delays break conversation timing. This causes 'glitches' and cut-off answers.",
      diagnosis: "The system doesn't handle real-world network lag. Critical updates arrive out of sync with the conversation.",
      remedy: "Lag-tolerant architecture that never feels out of sync."
    },
    coo: {
      symptom: "The 'truth' about an outage shifts hourly. Different channels give conflicting ETAs, leaving customers confused.",
      diagnosis: "The knowledge source isn't updated in real-time. The system doesn't handle interruptions well during high-stress calls.",
      remedy: "Sub-second knowledge updates that stay live with reality."
    },
    cfo: {
      symptom: "Plan changes are applied blindly. Revenue leaks through goodwill credits that weren't strictly authorized.",
      diagnosis: "The system acts on partial information. It bypasses formal checks for the sake of speed.",
      remedy: "Audit-gated credit checks that never bypass the rule."
    },
    cco: {
      symptom: "Customers get contradictory answers across system and chat. The timing of the answer feels 'off'.",
      diagnosis: "The system misses the start of sentences due to lag. It responds to half-finished thoughts.",
      remedy: "Adaptive timing that understands the natural flow of speech."
    },
    cro: {
      symptom: "Rollout terms get misheard mid-call. Agreements are captured incorrectly when a customer interrupts.",
      diagnosis: "The system misses talk-over. It doesn't roll back the state when an instruction is cancelled.",
      remedy: "Interrupt-ready capture with transaction rollbacks."
    },
    chro: {
      symptom: "Teams improvise credits to calm callers. Coaching is reactive because the system doesn't record 'why' it happened.",
      diagnosis: "A lack of real-time knowledge. No way to trace where a policy was intentionally or accidentally bypassed.",
      remedy: "Traceable coaching logs with built-in policy guards."
    }
  },
  ecommerce: {
    cto: {
      symptom: "High traffic makes the system lag. Technical actions fail mid-conversation, leaving users with dead air.",
      diagnosis: "The system lacks a way to handle high concurrency. Duplicate actions are triggered during retries.",
      remedy: "High-load stability with 'mid-turn' recovery logic."
    },
    coo: {
      symptom: "A customer changes an order, but the warehouse misses it. Handoffs between nodes drop the critical exceptions.",
      diagnosis: "Fragmented systems. There is a timing gap between what a user says and what the warehouse sees.",
      remedy: "Instant synchronization between voice and the fulfillment node."
    },
    cfo: {
      symptom: "Refunds spike. Goodwill credits break reconciliation because the 'reason' behind the refund wasn't recorded properly.",
      diagnosis: "No grounding in evidence. The system loses the 'Why' during a complex refund decision.",
      remedy: "Evidence-based decision logs for every dollar credited."
    },
    cco: {
      symptom: "Inventory truth varies. Delivery promises keep shifting, leading to customer churn.",
      diagnosis: "The system acts on half-heard intents. It doesn't clarify when the confidence in a scan is low.",
      remedy: "Clarification-first logic that never 'guesses' the inventory."
    },
    cro: {
      symptom: "Bundle and shipping terms get captured inconsistently. The deal terms shift between the call and the recap email.",
      diagnosis: "Weak disambiguation between similar terms. Context is lost over long, multi-stage sessions.",
      remedy: "Multi-stage context that never forgets the original deal."
    },
    chro: {
      symptom: "New hires learn habits that leak revenue. Guidance varies wildly across voice, chat, and email.",
      diagnosis: "Stale knowledge base. The system fails to enforce one consistent policy across all terminals.",
      remedy: "Unified policy guardrails that apply to every interaction."
    }
  },
  bfsi: {
    cto: {
      symptom: "Account numbers and IDs are captured incorrectly. Audits demand exact proof of consent for high-risk actions.",
      diagnosis: "Numeric data capture is brittle. The system lacks a timeline of who said what for legal proof.",
      remedy: "Precision numeric capture with immutable event logs."
    },
    coo: {
      symptom: "Work resets every time it moves to a new team. Holds and approvals drift because the context is lost.",
      diagnosis: "Context doesn't travel with the case. The system cannot handle complex, multi-party bank workflows.",
      remedy: "Persistent case-context that survives every handoff."
    },
    cfo: {
      symptom: "Fee language is misinterpreted. High-risk transfers are done without a clear, recorded verbal handshake.",
      diagnosis: "The system 'normalizes' numbers into the wrong meaning. No audible confirmation is forced on the user.",
      remedy: "Forced verbal handshakes for all high-risk events."
    },
    cco: {
      symptom: "Eligibility rules feel inconsistent. Customers get confident but factually wrong answers about their rates.",
      diagnosis: "The system rounds off complex rates. It pulls policy from the wrong documents.",
      remedy: "Source-grounded policy lookups that never round off."
    },
    cro: {
      symptom: "Risk nuance is guessed instead of confirmed. Audit find the process 'fuzzy' and unprovable.",
      diagnosis: "Terminology is changed during the recap. The system doesn't ask enough clarifying questions.",
      remedy: "Nuance-preserving capture with mandatory confirmation."
    },
    chro: {
      symptom: "Compliance rules are simplified in training. Reps guess instead of confirming under pressure.",
      diagnosis: "Critical details vanish in summarization. The system answers too fast without checking the rule.",
      remedy: "Policy-guided behavior with forced confirmation gates."
    }
  },
  travel: {
    cto: {
      symptom: "Interruptions break the rebooking process. Cancelling a thought leaves incorrect confirmations in the system.",
      diagnosis: "The system can't handle talk-over. Cancelling a generation leaves the system state in a mess.",
      remedy: "Clean-cancel architecture that rolls back failed thoughts."
    },
    coo: {
      symptom: "Rebooking rules drift during disruption. One late update triggers a cascade of wrong flight changes.",
      diagnosis: "Policy isn't updated fast enough for the crisis. The system traps users in repeat loops.",
      remedy: "Crisis-ready knowledge injection with loop detection."
    },
    cfo: {
      symptom: "Liability grows without a trace. Partner refunds misalign because the logic changes by channel.",
      diagnosis: "System timeouts create dead air. Monitoring lacks the event timeline to prove liability.",
      remedy: "Instant cross-channel sync designed for liability defense."
    },
    cco: {
      symptom: "Rules change mid-crisis. Compensation guidance varies by agent, leading to public customer frustration.",
      diagnosis: "The system misses interruptions. It fails to handle two people talking at once correctly.",
      remedy: "Duplex thinking that understands interruptions."
    },
    cro: {
      symptom: "Recaps miss the one critical exception that mattered. Contracts are blocked because they don't match the call.",
      diagnosis: "Talk-over causes data loss. The system loses rebooking constraints during high volume.",
      remedy: "Constraint-aware summaries that never miss the 'Unless'."
    },
    chro: {
      symptom: "Disruption forces improvisation on every shift. Angry customers amplify small mistakes into big incidents.",
      diagnosis: "Edge cases aren't prioritized. The system misses the emotional tone and doubles down on a mistake.",
      remedy: "Tone-adaptive logic that understands a crisis."
    }
  },
  tech: {
    cto: {
      symptom: "Multi-step support workflows lose their place. Lag creates awkward dead air that breaks the experience.",
      diagnosis: "State tracking is too loose for complex tech help. The response time is slower than a human conversation.",
      remedy: "Fast-path orchestration with zero-latency fillers."
    },
    coo: {
      symptom: "Critical context is lost in handoffs. Incident status changes but the owner is unaware of the new reality.",
      diagnosis: "Memory costs grow too fast. Context management fails during long, multi-turn tech sessions.",
      remedy: "Selective context memory that keeps the 'Must-knows' live."
    },
    cfo: {
      symptom: "Credits differ by system. Billing disputes escalate because there's no proof of the original tech commitment.",
      diagnosis: "No evidence for why a credit was given. Monitoring lacks the traces to prove a tech entitlement.",
      remedy: "Verifiable logs that prove the reason for every credit."
    },
    cco: {
      symptom: "Entitlements differ across systems. Customers get old status explanations for new issues.",
      diagnosis: "The system fails mid-turn. Lag creates dead air that makes the user hang up.",
      remedy: "Status-aware logic with sub-second feedback loops."
    },
    cro: {
      symptom: "Roadmap talk is mis-captured as a hard promise. The team cannot reconstruct what was actually said.",
      diagnosis: "The system over-promises instead of confirming. Memory fails over long timelines.",
      remedy: "Confirmation-first logic for all future commitments."
    },
    chro: {
      symptom: "Context is lost in handoffs. People repeat mistakes because there's no proof of the original failure.",
      diagnosis: "Technical memory is too expensive. No way to replay a failure for technical coaching.",
      remedy: "Zero-loss memory with behavioral replay for tech teams."
    }
  },
  media: {
    cto: {
      symptom: "System triggers accidentally in noisy rooms. Background talk is mis-captured as a command.",
      diagnosis: "Failure to separate the user from background noise. The streaming text shifts meaning mid-sentence.",
      remedy: "Dual-layer verification that ignores the background."
    },
    coo: {
      symptom: "Subscription status conflicts across tools. Regional rules are stated confidently but incorrectly.",
      diagnosis: "The system pulls from the wrong knowledge base. It can't handle regional logic variations.",
      remedy: "Region-aware knowledge that stays in its lane."
    },
    cfo: {
      symptom: "Refund requests spike. Disputes rise because the answer shifts based on which system is 'winning'.",
      diagnosis: "Fractured source of truth. Knowledge base updates aren't synchronized by region.",
      remedy: "Single-source-of-truth logic with localized guardrails."
    },
    cco: {
      symptom: "Status changes across systems. Access rules vary by region, leading to mixed guidance for users.",
      diagnosis: "The listening UI is misaligned. Shifting text changes the intent before the user finishes.",
      remedy: "Stabilized intent detection for fast-moving speech."
    },
    cro: {
      symptom: "Rights and plan rules are confidently wrong. The buyer disputes what they were told by the system.",
      diagnosis: "The system finds the wrong info for short questions. No traces to prove what was stated.",
      remedy: "Fact-indexed knowledge for short-form voice."
    },
    chro: {
      symptom: "Region rules shift and training lags behind. Wrong answers spread fast and go public on social media.",
      diagnosis: "Knowledge base isn't synchronized. Hallucinations in voice create dangerous brand risk.",
      remedy: "Brand-safe guardrails that prevent 'guessing' the rule."
    }
  }
}

export function WhoThisHits2() {
  const { openModal } = useModal()
  const [activeIndustry, setActiveIndustry] = useState("logistics")
  const [activeRole, setActiveRole] = useState("coo")
  
  // Custom rotation states for shortest-path looping on mobile
  const [industryRotation, setIndustryRotation] = useState(0)
  const [roleRotation, setRoleRotation] = useState(0)

  const currentData = industryData[activeIndustry]?.[activeRole] || {
    symptom: "Diagnostic data pending for this role/sector combination.",
    diagnosis: "Awaiting technical specification mapping.",
    remedy: "Refer to core architecture documentation for system alignment."
  }

  // Shortest path rotation helper
  const rotateTo = (current: number, target: number) => {
    const diff = ((target - current + 180) % 360 + 360) % 360 - 180
    return current + diff
  }

  const handleIndustrySelect = (id: string, idx: number) => {
    setActiveIndustry(id)
    const targetAngle = -idx * 30
    setIndustryRotation(prev => rotateTo(prev, targetAngle))
  }

  const handleRoleSelect = (id: string, idx: number) => {
    setActiveRole(id)
    const targetAngle = -idx * 45
    setRoleRotation(prev => rotateTo(prev, targetAngle))
  }

  return (
    <section id="operators" className="py-24 bg-cream relative overflow-hidden">
      {/* Background Subtle Grid - Refined with more layers */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(#005a32 1px, transparent 1px), linear-gradient(90deg, #005a32 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(#005a32 1px, transparent 1px), linear-gradient(90deg, #005a32 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

      <div className="max-w-7xl mx-auto px-5 relative z-10">
        <div className="mb-8 md:mb-16 flex flex-col text-center md:text-left md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <h2 className="text-6xl md:text-7xl font-serif text-gold font-black leading-none flex flex-col">
              <span>Who this</span>
              <span className="italic">hits.</span>
            </h2>
          </div>
          <p className="text-lg md:text-xl text-warm-gray-light max-w-md font-serif italic border-l-2 border-gold/20 pl-6 py-2">
            Different industries. Same structural fragility.
          </p>
        </div>

        {/* Desktop/Tablet/MD Industry Navigator - Restored */}
        <div className="hidden md:block relative mb-8 px-5 lg:px-0">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[10px] font-black text-gold uppercase tracking-[0.3em]">Industry Matrix</span>
            <div className="h-px flex-1 bg-gold" />
            <div className="flex gap-1">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-1 h-1 bg-gold rounded-full" />
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-2 pb-6">
            {industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => setActiveIndustry(industry.id)}
                className={cn(
                  "px-2 py-4 transition-all duration-300 relative group overflow-hidden border border-gold/10",
                  activeIndustry === industry.id
                    ? "text-black"
                    : "text-warm-gray-light hover:text-gold hover:border-gold/30"
                )}
              >
                {activeIndustry === industry.id && (
                  <motion.div
                    layoutId="activeIndustry"
                    className="absolute inset-0 bg-gold"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                  <span className="text-[10px] font-black uppercase tracking-wider">{industry.name}</span>
                </div>
                <div className="absolute top-0 left-0 w-1 h-1 border-t border-l border-current opacity-20" />
                <div className="absolute bottom-0 right-0 w-1 h-1 border-b border-r border-current opacity-20" />
              </button>
            ))}
          </div>
        </div>

        {/* Mobile-Only Dual Semi-Circle HUD Navigation */}
        <div className="md:hidden flex flex-col space-y-12">
          
          {/* Stacked Selection Region */}
          <div className="relative pt-12 pb-8 flex flex-col items-center">
            
            {/* Top Semi-Circle: Industry Selection */}
            <div className="relative w-full h-[200px] overflow-hidden flex justify-center z-20">
              <div className="absolute top-4 flex items-center gap-2 z-20">
                <div className="w-1 h-3 bg-gold" />
                <span className="text-[10px] font-black text-gold uppercase tracking-[0.4em]">Sector Matrix</span>
              </div>
              
              {/* Technical Notches for Industry Arc */}
              <div className="absolute top-[80px] w-[600px] h-[600px] rounded-full border border-gold/5 pointer-events-none z-10">
                {[...Array(36)].map((_, i) => (
                  <div 
                    key={i}
                    className="absolute left-1/2 top-0 -translate-x-1/2 w-px h-1 bg-gold/20"
                    style={{ transform: `rotate(${i * 10 - 180}deg) translateY(0px)`, transformOrigin: '50% 300px' }}
                  />
                ))}
              </div>

              <motion.div 
                className="absolute top-[80px] w-[600px] h-[600px] rounded-full border border-gold/10"
                initial={false}
                animate={{ rotate: industryRotation }}
                transition={{ type: "spring", stiffness: 150, damping: 25 }}
              >
                {[...Array(12)].map((_, i) => {
                  const ind = industries[i % industries.length];
                  const angle = i * 30;
                  return (
                    <div 
                      key={`${ind.id}-${i}`}
                      className="absolute left-1/2 top-0 -translate-x-1/2"
                      style={{ 
                        transform: `rotate(${angle}deg) translateY(0px)`,
                        transformOrigin: `50% 300px` 
                      }}
                    >
                      <button
                        onClick={() => handleIndustrySelect(ind.id, i)}
                        className={cn(
                          "flex flex-col items-center transition-all duration-300 pt-6",
                          activeIndustry === ind.id ? "text-gold scale-110" : "text-warm-gray-light scale-90 opacity-40"
                        )}
                        style={{ transform: `rotate(${-angle - industryRotation}deg)` }}
                      >
                        <span className="text-[10px] font-black uppercase whitespace-nowrap tracking-tighter">{ind.name}</span>
                        {activeIndustry === ind.id && <div className="w-1 h-1 bg-gold rounded-full mt-1 animate-pulse" />}
                      </button>
                    </div>
                  );
                })}
              </motion.div>
            </div>

            {/* Lower Semi-Circle: Role Selection */}
            <div className="relative w-full h-[150px] overflow-hidden flex justify-center -mt-8 pointer-events-none">
              {/* Technical Notches for Role Arc */}
              <div className="absolute top-[40px] w-[450px] h-[450px] rounded-full border border-gold/5 pointer-events-none z-10">
                {[...Array(40)].map((_, i) => (
                  <div 
                    key={i}
                    className="absolute left-1/2 top-0 -translate-x-1/2 w-px h-1 bg-gold/10"
                    style={{ transform: `rotate(${i * 9 - 180}deg) translateY(0px)`, transformOrigin: '50% 225px' }}
                  />
                ))}
              </div>

              <motion.div 
                className="absolute top-[40px] w-[450px] h-[450px] rounded-full border border-gold/5 bg-white/5 backdrop-blur-sm pointer-events-auto"
                initial={false}
                animate={{ rotate: roleRotation }}
                transition={{ type: "spring", stiffness: 150, damping: 25 }}
              >
                {[...Array(8)].map((_, i) => {
                  const role = roles[i % roles.length];
                  const angle = i * 45;
                  return (
                    <div 
                      key={`${role.id}-${i}`}
                      className="absolute left-1/2 top-0 -translate-x-1/2"
                      style={{ 
                        transform: `rotate(${angle}deg) translateY(0px)`,
                        transformOrigin: `50% 225px` 
                      }}
                    >
                      <button
                        onClick={() => handleRoleSelect(role.id, i)}
                        className={cn(
                          "p-5 transition-all duration-300 flex flex-col items-center gap-1",
                          activeRole === role.id ? "text-gold scale-110" : "text-gold/60 hover:text-gold/80"
                        )}
                        style={{ transform: `rotate(${-angle - roleRotation}deg)` }}
                      >
                        <role.icon className={cn("w-5 h-5 transition-transform", activeRole === role.id ? "scale-110" : "")} />
                        <span className="text-[8px] font-black uppercase tracking-widest">{role.id}</span>
                      </button>
                    </div>
                  );
                })}
              </motion.div>
            </div>

            {/* Selection Crosshair */}
            <div className="absolute inset-x-0 h-[220px] top-12 pointer-events-none flex flex-col items-center justify-between">
              <div className="w-px h-full bg-gradient-to-b from-gold via-transparent to-gold opacity-30" />
            </div>
          </div>

          {/* Diagnostic Panel - Mobile Optimized */}
          <div className="px-5 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeIndustry}-${activeRole}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-white border-2 border-sand/50 shadow-xl overflow-hidden"
              >
                {/* Mobile Technical Top */}
                <div className="bg-[#0c0c0c] p-6 relative overflow-hidden group/blueprint">
                  <div className="absolute inset-0 opacity-[0.1] pointer-events-none"
                    style={{ backgroundImage: 'linear-gradient(#c4a052 1px, transparent 1px), linear-gradient(90deg, #c4a052 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                  
                  <div className="relative z-10 space-y-4">
                    <div className="flex items-center gap-2">
                       <Database className="w-3 h-3 text-gold" />
                       <span className="text-[9px] font-black text-gold uppercase tracking-[0.3em]">Technical Diagnosis</span>
                    </div>
                    <p className="text-xl font-mono text-white leading-tight">
                      {currentData.diagnosis}
                    </p>
                    <div className="pt-4 mt-4 border-t border-white/10">
                      <p className="text-sm font-serif italic text-white/70">
                        {currentData.remedy}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Mobile Reality Bottom */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <Activity className="w-3 h-3 text-warm-gray-light" />
                    <span className="text-[9px] font-black text-warm-gray-light uppercase tracking-[0.3em]">Operational Reality</span>
                  </div>
                  <div className="relative">
                    <span className="absolute -left-2 -top-2 text-3xl font-serif text-sand/20">“</span>
                    <p className="text-xl font-serif text-warm-gray italic">
                      {currentData.symptom}
                    </p>
                  </div>
                  
                  <button 
                    onClick={() => openModal()}
                    className="flex items-center gap-4 group/btn w-full pt-4"
                  >
                    <div className="flex-1 h-px bg-sand" />
                    <div className="flex items-center bg-black p-2 px-3 gap-2 shrink-0">
                      <span className="text-[9px] font-black text-gold uppercase tracking-[0.3em]">Evaluate Case</span>
                      <ArrowRight className="w-3 h-3 text-gold group-hover/btn:translate-x-1 transition-transform" />
                    </div>
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Operational Logic Block - As requested */}
            <div className="p-6 bg-[#fdfcf9] border border-sand/30 border-l-gold border-l-2">
               <p className="text-sm font-serif italic text-warm-gray leading-relaxed">
                "We don't optimize for AI conversation. We optimize for the deterministic outcome required by the role."
              </p>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Kept stable */}
        <div className="hidden lg:grid grid-cols-[280px_1fr] gap-12 items-start px-5 lg:px-0">
          
          {/* Role Switcher - Sidebar Navigation */}
          <div className="space-y-6 sticky top-24">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-2 pb-4 lg:pb-0">
              {roles.map((role) => (
                <button
                  key={role.id}
                  onClick={() => setActiveRole(role.id)}
                  className={cn(
                    "flex items-center gap-3 p-3 transition-all relative group border-l-2",
                    activeRole === role.id
                      ? "bg-white border-gold text-warm-gray shadow-[10px_0_30px_-10px_rgba(196,160,82,0.1)]"
                      : "bg-transparent border-transparent text-warm-gray-light hover:bg-white/40"
                  )}
                >
                  <div className="relative shrink-0">
                    <role.icon className={cn("w-4 h-4 md:w-5 md:h-5 transition-transform duration-300", activeRole === role.id ? "text-gold scale-110" : "text-sand group-hover:text-gold/60")} />
                    {activeRole === role.id && (
                      <motion.div 
                        layoutId="activeRoleDot"
                        className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-gold rounded-full border border-white"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                      />
                    )}
                  </div>
                  <div className="flex flex-col items-start leading-none min-w-0">
                    <span className="text-[9px] md:text-[10px] font-black uppercase tracking-wider truncate w-full">{role.name}</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="p-6 md:p-6 bg-[#fdfcf9] border border-sand/30 space-y-3 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-2 opacity-5">
                <ShieldAlert className="w-10 h-10 md:w-12 md:h-12" />
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                <p className="text-[10px] text-gold font-black uppercase tracking-[0.2em]">Operational Logic</p>
              </div>
              <p className="text-xs md:text-sm font-serif italic text-warm-gray leading-relaxed relative z-10">
                "We don't optimize for AI conversation. We optimize for the deterministic outcome required by the role."
              </p>
            </div>
          </div>

          {/* The Split Specification Panel - Blueprint vs reality */}
          <div className="bg-white border-2 border-sand/50 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] relative overflow-hidden">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeIndustry}-${activeRole}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="grid md:grid-cols-2 min-h-[400px] md:min-h-[400px]"
              >
                {/* Left Side: Technical Blueprint (Diagnostic) */}
                <div className="bg-[#0c0c0c] p-8 md:p-12 relative overflow-hidden flex flex-col justify-between group/blueprint border-b md:border-b-0 md:border-r border-white/5">
                  {/* Technical Overlays */}
                  <div className="absolute inset-0 pointer-events-none">
                    {/* Main Grid */}
                    <div className="absolute inset-0 opacity-[0.12] transition-opacity duration-700 group-hover/blueprint:opacity-20"
                      style={{ backgroundImage: 'linear-gradient(#c4a052 1px, transparent 1px), linear-gradient(90deg, #c4a052 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                    {/* Sub Grid */}
                    <div className="absolute inset-0 opacity-[0.05]"
                      style={{ backgroundImage: 'linear-gradient(#c4a052 1px, transparent 1px), linear-gradient(90deg, #c4a052 1px, transparent 1px)', backgroundSize: '10px 10px' }} />
                    
                    {/* Scanline Effect */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/5 to-transparent h-20 w-full"
                      animate={{ top: ['-20%', '120%'] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    />
                  </div>

                  <div className="relative z-10 space-y-6 md:space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-gold/10 rounded-sm">
                        <Database className="w-4 h-4 md:w-5 md:h-5 text-gold" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-black text-gold uppercase tracking-[0.4em]">Fault Detection</span>
                      </div>
                    </div>

                    <div className="space-y-4 md:space-y-6">
                      <div className="flex items-center gap-2">
                        <div className="h-px w-4 bg-white/20" />
                        <h4 className="text-[10px] font-black text-gold/80 uppercase tracking-[0.2em]">Technical Diagnosis</h4>
                      </div>
                      <p className="text-lg md:text-3xl font-mono text-white leading-tight tracking-tight">
                        {currentData.diagnosis}
                      </p>
                    </div>
                  </div>

                  <div className="relative z-10 pt-8 md:pt-10 border-t border-white/10 mt-8 md:mt-auto">
                    <div className="flex items-center gap-3 mb-4 md:mb-6">
                      <div className="w-2 h-2 bg-gold shadow-[0_0_10px_rgba(196,160,82,0.8)]" />
                      <span className="text-[15px] font-black text-gold uppercase tracking-[0.3em] font-mono">Voishift Solution</span>
                    </div>
                    <p className="text-lg md:text-xl font-serif italic text-white/80 leading-relaxed">
                      {currentData.remedy}
                    </p>
                  </div>
                </div>

                {/* Right Side: Operational Reality */}
                <div className="p-8 md:p-12 bg-white flex flex-col justify-between group/reality">
                   <div className="space-y-6 md:space-y-8">
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-sand/20 rounded-sm">
                        <Activity className="w-4 h-4 md:w-5 md:h-5 text-warm-gray-light" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-black text-warm-gray-light uppercase tracking-[0.4em]">Field Observer</span>
                      </div>
                    </div>

                    <div className="space-y-4 md:space-y-6">
                       <div className="flex items-center gap-2">
                        <div className="h-px w-4 bg-sand" />
                        <h4 className="text-[10px] font-black text-warm-gray-light/60 uppercase tracking-[0.2em]">Operational Reality</h4>
                      </div>
                      <div className="relative">
                        <span className="absolute -left-4 md:-left-6 -top-4 text-4xl md:text-6xl font-serif text-sand/30 select-none">“</span>
                        <p className="text-xl md:text-3xl font-serif text-warm-gray leading-[1.15] italic pr-4">
                          {currentData.symptom}
                        </p>
                        <span className="absolute -right-1 md:-right-2 -bottom-4 md:-bottom-6 text-4xl md:text-6xl font-serif text-sand/30 select-none">”</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-8 md:pt-8 mt-6 md:mt-auto">
                    <button 
                      onClick={() => openModal()}
                      className="flex items-center gap-4 md:gap-6 group/btn w-full"
                    >
                      <div className="flex-1 h-px bg-sand group-hover/btn:bg-gold transition-colors" />
                      <div className="flex items-center bg-black p-2 gap-3 shrink-0">
                        <span className="text-[10px] font-black text-gold uppercase tracking-[0.3em]">Evaluate Case</span>
                        <div className="relative flex items-center justify-center">
                          <ArrowRight className="w-5 h-5 text-gold group-hover/btn:translate-x-2 transition-transform duration-300" />
                          <div className="absolute inset-0 bg-gold/20 blur-md rounded-full scale-0 group-hover/btn:scale-150 transition-transform duration-500" />
                        </div>
                      </div>
                    </button>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
