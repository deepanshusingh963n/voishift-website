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
      symptom: "Warehouse scans and delivery ETAs don't match across systems, creating duplicate records and missing updates.",
      diagnosis: "No single source of truth. Sync delays cause the same event to be logged more than once.",
      remedy: "One unified event log with a single source of truth."
    },
    coo: {
      symptom: "Key details disappear at shift handoffs. Teams act on outdated shipment info, triggering avoidable detention fees.",
      diagnosis: "The system records what happened but not why. There's no clear log of who gave which instruction.",
      remedy: "Verified instruction logs that always preserve the 'why'."
    },
    cfo: {
      symptom: "Invoices and fees don't match across systems. Credits are applied differently depending on where the customer calls from.",
      diagnosis: "The system loses track of what's already been processed and repeats it. There's no clear evidence trail to justify a charge.",
      remedy: "Voice-to-ledger reconciliation with audit-ready proof."
    },
    cco: {
      symptom: "Shipment status updates every hour. Giving confident but wrong ETAs leads to frustrated customers calling back repeatedly.",
      diagnosis: "The system is answering with yesterday's data in a real-time operation.",
      remedy: "Live sync between what's said on the call and what's happening in the field."
    },
    cro: {
      symptom: "Surcharges and rates are logged wrong. Key agreement details get watered down in call summaries, causing revenue leakage.",
      diagnosis: "The system misses specific numbers and dates. Important terms get replaced with vague, generic ones during recap.",
      remedy: "Exact capture of every rate and condition — no rounding, no paraphrasing."
    },
    chro: {
      symptom: "No one knows why a routing call was made. Shift handoffs repeat the same mistakes because training can't be verified.",
      diagnosis: "The system loses track of context across a conversation. There's no way to replay what went wrong in training.",
      remedy: "Replayable call traces that make it easy to spot where things broke down."
    }
  },
  manufacturing: {
    cto: {
      symptom: "Factory floor noise causes false triggers. The system that works in a quiet office fails completely on the shop floor.",
      diagnosis: "The system can't tell the difference between background noise and an actual command. It's tuned for silence, not real environments.",
      remedy: "Noise-aware listening that only responds to intentional commands."
    },
    coo: {
      symptom: "Lead times change without warning. Orders get processed on outdated plans because exceptions stay in people's heads, not in the system.",
      diagnosis: "Context gets lost when operators switch topics mid-conversation. The system moves on too fast.",
      remedy: "Persistent memory that tracks multiple topics without losing context."
    },
    cfo: {
      symptom: "Expedite spend gets approved verbally but never makes it into the books. Costs stay buried under 'exceptions'.",
      diagnosis: "The system skips the final confirmation step. Financial commitments get summarized instead of verified.",
      remedy: "Mandatory approval checkpoints for every financial commitment."
    },
    cco: {
      symptom: "Lead times keep changing. Customers get different delivery promises from different systems.",
      diagnosis: "Industry codes get misheard and incorrectly mapped. Important constraints disappear as the conversation goes on.",
      remedy: "Precise code recognition that never guesses what a term means."
    },
    cro: {
      symptom: "Custom agreements disappear between calls. Operations undercuts what sales promised, damaging customer trust.",
      diagnosis: "The system can't reliably capture specific terms. There's no way to verify what was actually agreed during a call.",
      remedy: "A permanent record of every sales commitment, exactly as it was made."
    },
    chro: {
      symptom: "Workarounds spread faster than proper training. Errors keep repeating under pressure and noise.",
      diagnosis: "No standard way to test how the system performs with different accents or in noisy conditions. No checks when operational rules change.",
      remedy: "Behavioral testing that ensures every team member follows the same process."
    }
  },
  healthcare: {
    cto: {
      symptom: "Multiple voices in a clinic confuse the system. It can't reliably tell who's speaking in a busy environment.",
      diagnosis: "Speaker separation is too weak. The system can't reliably tell the doctor from the patient in real clinic conditions.",
      remedy: "Speaker isolation built for the noise and complexity of clinical settings."
    },
    coo: {
      symptom: "Prep instructions differ across departments. One missed detail during a handoff causes surgical delays.",
      diagnosis: "Key patient information gets mis-recorded. Exceptions don't follow the patient as they move between teams.",
      remedy: "Patient context that stays with the patient across every department."
    },
    cfo: {
      symptom: "Claim denials rise because of small data mismatches. Coverage details get mis-captured on busy intake calls.",
      diagnosis: "The system misreads IDs and numeric codes. It loses context during longer conversations.",
      remedy: "Field-by-field validation for every clinical and billing detail."
    },
    cco: {
      symptom: "Patients don't understand their coverage. They receive guidance that conflicts with their insurance, causing billing confusion.",
      diagnosis: "The system struggles with multiple speakers and complex medical terminology.",
      remedy: "Medical-grade accuracy with clear separation between speakers."
    },
    cro: {
      symptom: "Compliance answers vary. Key procurement rules get dropped in follow-up summaries.",
      diagnosis: "The system retrieves answers from the wrong sources. Compliance terms get replaced with generic ones.",
      remedy: "Answers grounded in verified sources, with a clear trace back to the original."
    },
    chro: {
      symptom: "Details get missed in noisy rooms. Staff picks up habits from what worked once, not from a standard process.",
      diagnosis: "The system doesn't ask enough confirmation questions. It sounds confident when it should be double-checking.",
      remedy: "Built-in confirmation steps for every high-stakes clinical action."
    }
  },
  telecom: {
    cto: {
      symptom: "Network drops and latency break the flow of conversations, causing glitches and cut-off responses.",
      diagnosis: "The system isn't built to handle real-world network lag. Updates arrive out of step with the conversation.",
      remedy: "An architecture that handles lag gracefully and never feels out of sync."
    },
    coo: {
      symptom: "Outage status changes every hour. Customers get different ETAs from different channels and no one knows what's true.",
      diagnosis: "The knowledge base doesn't update in real time. The system struggles to handle interruptions during high-pressure calls.",
      remedy: "Knowledge that updates in real time and stays accurate across every channel."
    },
    cfo: {
      symptom: "Plan changes go through without review. Revenue leaks because goodwill credits aren't properly authorized.",
      diagnosis: "The system acts on incomplete information. It skips approval steps in the name of speed.",
      remedy: "Credit checks tied to an audit trail — no rule gets bypassed."
    },
    cco: {
      symptom: "Customers get different answers from different channels. Responses feel delayed or off.",
      diagnosis: "The system misses the beginning of sentences because of lag. It responds before the customer has finished speaking.",
      remedy: "Timing that adapts to natural speech so responses always feel right."
    },
    cro: {
      symptom: "Rollout terms get misheard on calls. Agreements get logged incorrectly when a customer interrupts.",
      diagnosis: "The system can't handle people talking over each other. It doesn't undo a logged instruction when someone corrects themselves.",
      remedy: "Capture that handles interruptions and rolls back when a customer changes their mind."
    },
    chro: {
      symptom: "Agents improvise credits to de-escalate calls. Coaching is always reactive because the system never records the reason.",
      diagnosis: "No real-time knowledge, and no way to trace whether a policy was broken intentionally or by mistake.",
      remedy: "Coaching logs with a full audit trail and built-in policy enforcement."
    }
  },
  ecommerce: {
    cto: {
      symptom: "Traffic spikes cause the system to slow down. Actions fail mid-conversation, leaving customers with silence.",
      diagnosis: "The system can't handle many simultaneous conversations. Retry attempts trigger the same action twice.",
      remedy: "Stable performance at high load, with recovery logic built into every turn."
    },
    coo: {
      symptom: "A customer updates their order, but the warehouse never gets the memo. Critical exceptions get lost between systems.",
      diagnosis: "Systems don't talk to each other fast enough. There's always a gap between what the customer said and what the warehouse sees.",
      remedy: "Real-time sync between the customer's voice and the fulfillment system."
    },
    cfo: {
      symptom: "Refunds pile up. Goodwill credits throw off the books because the reason for the refund was never properly recorded.",
      diagnosis: "No evidentiary basis for credit decisions. The system loses track of what justified the refund.",
      remedy: "A decision log with the reason behind every credit, tied to the original conversation."
    },
    cco: {
      symptom: "Inventory data is unreliable. Delivery promises keep shifting, and customers stop trusting the experience.",
      diagnosis: "The system acts on partially-heard instructions. It doesn't ask for confirmation when it's unsure.",
      remedy: "Always ask before confirming inventory — never assume."
    },
    cro: {
      symptom: "Bundle and shipping terms get recorded inconsistently. What was agreed on the call doesn't match the follow-up email.",
      diagnosis: "Similar-sounding terms get confused. Context fades over long, multi-step conversations.",
      remedy: "Context that spans the full conversation and never loses what was originally agreed."
    },
    chro: {
      symptom: "New hires learn unhelpful habits from colleagues. Policy varies across voice, chat, and email, and no one notices.",
      diagnosis: "The knowledge base is out of date. One consistent policy doesn't get enforced across all channels.",
      remedy: "Policy guardrails that apply the same rules to every interaction, everywhere."
    }
  },
  bfsi: {
    cto: {
      symptom: "Account numbers and IDs get captured wrong. Audits require exact proof that high-risk actions were properly authorized.",
      diagnosis: "Numeric capture is unreliable. The system has no timestamped record of who said what.",
      remedy: "Precise numeric capture with a tamper-proof event log."
    },
    coo: {
      symptom: "Progress resets every time a case changes hands. Holds and approvals fall through because context isn't passed along.",
      diagnosis: "Context doesn't travel with the case. The system can't manage the complexity of multi-team banking workflows.",
      remedy: "Case context that stays intact through every team handoff."
    },
    cfo: {
      symptom: "Fee terms get misunderstood. High-risk transfers go through without a clear verbal confirmation on record.",
      diagnosis: "The system distorts numeric meaning during interpretation. It doesn't require the customer to verbally confirm before action.",
      remedy: "Verbal confirmation required before every high-risk event, with a full audit trail."
    },
    cco: {
      symptom: "Eligibility rules feel inconsistent. Customers get confident but incorrect answers about their rates.",
      diagnosis: "The system approximates complex rates. It pulls from the wrong policy documents.",
      remedy: "Policy answers sourced directly from verified documents — no rounding, no guessing."
    },
    cro: {
      symptom: "Risk details get assumed instead of confirmed. Auditors find the process vague and impossible to verify.",
      diagnosis: "Terms get changed during recap. The system doesn't ask enough follow-up questions.",
      remedy: "Exact capture of risk language, with mandatory confirmation before moving on."
    },
    chro: {
      symptom: "Compliance requirements get oversimplified in training. Staff guess instead of confirm when under pressure.",
      diagnosis: "Important details disappear in summaries. The system gives answers too quickly without checking the rule.",
      remedy: "Policy-enforced behavior with mandatory confirmation at every critical step."
    }
  },
  travel: {
    cto: {
      symptom: "Interruptions derail the rebooking flow. Walking back a request leaves incorrect confirmations in the system.",
      diagnosis: "The system can't handle people talking over each other. A cancelled request puts the system in a broken state.",
      remedy: "A clean rollback when a request is interrupted or cancelled."
    },
    coo: {
      symptom: "Rebooking rules keep shifting during disruptions. One delayed update causes a chain of incorrect flight changes.",
      diagnosis: "Policy can't keep up with a fast-moving crisis. The system traps customers in unhelpful loops.",
      remedy: "Crisis policies that push instantly into the system, with loop detection to break stuck conversations."
    },
    cfo: {
      symptom: "Liability builds with no paper trail. Partner refunds get misaligned because the logic is different across channels.",
      diagnosis: "System timeouts create awkward silences. There's no event log to determine who's liable for what.",
      remedy: "Instant cross-channel sync, designed to make liability clear and defensible."
    },
    cco: {
      symptom: "Rules change mid-disruption. Compensation varies by agent, and customers take complaints public.",
      diagnosis: "The system misses interruptions and can't handle two people speaking at once.",
      remedy: "Full-duplex listening that understands interruptions and responds in real time."
    },
    cro: {
      symptom: "Summaries drop the one exception that mattered. Contracts stall because they don't reflect what was said on the call.",
      diagnosis: "Cross-talk causes data to be lost. Rebooking constraints disappear during high-volume periods.",
      remedy: "Summaries that always capture the conditions and exceptions, not just the main points."
    },
    chro: {
      symptom: "Disruptions force every shift to improvise. Stressed customers turn small missteps into major incidents.",
      diagnosis: "Edge cases aren't built into the training. The system misreads emotional tone and keeps making the same mistake.",
      remedy: "Tone-aware responses that recognize when a situation is escalating and adjust accordingly."
    }
  },
  tech: {
    cto: {
      symptom: "Multi-step support flows lose track of where they are. Lag creates awkward silences that undermine the experience.",
      diagnosis: "State tracking isn't reliable enough for complex troubleshooting. Response times are slower than a normal conversation.",
      remedy: "Fast, well-structured call flows with instant feedback to keep things moving."
    },
    coo: {
      symptom: "Context gets lost when a case changes hands. Incident status updates without the owner knowing.",
      diagnosis: "Maintaining full context gets too expensive. It breaks down in long, multi-step technical sessions.",
      remedy: "Selective memory that always keeps the critical context live, regardless of call length."
    },
    cfo: {
      symptom: "Credits vary across systems. Billing disputes escalate because there's no proof of what was originally committed.",
      diagnosis: "No record of why a credit was issued. The system can't trace what entitlement was actually granted.",
      remedy: "A verifiable log with the reason and justification behind every credit."
    },
    cco: {
      symptom: "Entitlements differ across systems. Customers get outdated explanations for new problems.",
      diagnosis: "The system breaks mid-turn. Lag creates silence that causes the customer to hang up.",
      remedy: "Real-time status tracking with instant feedback so customers always feel heard."
    },
    cro: {
      symptom: "Roadmap conversations get recorded as firm commitments. No one can reconstruct what was actually said.",
      diagnosis: "The system defaults to promising rather than confirming. Memory degrades over long conversations.",
      remedy: "Every forward-looking statement confirmed before being logged as a commitment."
    },
    chro: {
      symptom: "Context disappears in handoffs. Teams repeat mistakes because there's no record of the original failure.",
      diagnosis: "Full memory is too costly. There's no way to play back a failure and use it for coaching.",
      remedy: "Zero-loss memory with the ability to replay any call for technical coaching."
    }
  },
  media: {
    cto: {
      symptom: "The system activates by accident in noisy rooms. Background conversation gets treated as a command.",
      diagnosis: "The system can't separate the person from the background. Streaming transcription shifts meaning before a sentence is done.",
      remedy: "Two-layer verification that filters out background noise before acting."
    },
    coo: {
      symptom: "Subscription status conflicts across platforms. Regional rules get stated with confidence but turn out to be wrong.",
      diagnosis: "The system retrieves from the wrong knowledge source. It can't handle regional differences in logic.",
      remedy: "Region-specific knowledge that knows which rules apply where."
    },
    cfo: {
      symptom: "Refund requests climb. Disputes multiply because the answer changes depending on which system responds first.",
      diagnosis: "No consistent source of truth. Knowledge base updates don't sync across regions.",
      remedy: "One source of truth with localized rules enforced at every touchpoint."
    },
    cco: {
      symptom: "Account status differs across platforms. Access rules vary by region, giving users conflicting information.",
      diagnosis: "The transcription interface is out of sync. Text shifts before the user finishes speaking, changing the intent.",
      remedy: "Stable intent detection that waits for the full thought before acting."
    },
    cro: {
      symptom: "Rights and plan terms get communicated wrong. Buyers dispute what they were told.",
      diagnosis: "The system returns the wrong result for short, specific questions. There's no record of what was actually stated.",
      remedy: "Fact-indexed responses designed for short, precise voice queries."
    },
    chro: {
      symptom: "Regional rules change and training doesn't keep up. Incorrect answers spread fast and become public on social media.",
      diagnosis: "The knowledge base isn't kept in sync. AI responses without verification are a brand liability.",
      remedy: "Brand-safe guardrails that prevent the system from guessing when it doesn't know."
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
