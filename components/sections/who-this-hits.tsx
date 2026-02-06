"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertTriangle, ArrowRight, Quote } from "lucide-react"

const industries = [
  { id: "logistics", name: "Logistics and supply chain", short: "LOGISTICS" },
  { id: "manufacturing", name: "Manufacturing", short: "MANUFACTURING" },
  { id: "healthcare", name: "Healthcare", short: "HEALTHCARE" },
  { id: "telecom", name: "Telecom", short: "TELECOM" },
  { id: "ecommerce", name: "eCommerce", short: "eCOMMERCE" },
  { id: "bfsi", name: "BFSI", short: "BFSI" },
  { id: "travel", name: "Travel", short: "TRAVEL" },
  { id: "tech", name: "Tech and SaaS", short: "TECH/SaaS" },
  { id: "media", name: "Media", short: "MEDIA" },
]

const categoryData: Record<string, any> = {
  cco: {
    role: "CCO / CXO / VP Customer Ops",
    title: "Escalation to Silent Churn",
    description: "You are running a support org where truth shifts between channels, agents, and days. Customers escalate because answers change and feel misleading. It stops being a ticket problem and becomes a trust problem.",
    industryTriggers: {
      logistics: {
        bullets: [
          "Status changes hourly across systems.",
          "Scans, ETAs, holds, and POD conflict.",
          "Confident answers don’t match reality."
        ],
        causes: ["Event timeline gaps", "Retrieval ranking fails", "Knowledge freshness drift"],
        impact: ["Repeat contacts", "SLA penalties"],
        leadership: "We cannot defend what we told them.",
        illustration: "/Logistics.png"
      },
      manufacturing: {
        bullets: [
          "Lead times shift without warning.",
          "Allocations differ by team and tool.",
          "Customers hear different commitments."
        ],
        causes: ["ASR domain term drop", "Summarization constraint loss", "Confirmations too rare"],
        impact: ["Expedite pressure", "Order cancellations"],
        leadership: "Our promises are not credible.",
        illustration: "/Manufacturing.png"
      },
      healthcare: {
        bullets: [
          "Prep instructions vary by department.",
          "Eligibility and approvals are unclear.",
          "Patients get partial guidance."
        ],
        causes: ["Far-field audio issues", "Speaker diarization weak", "Slot filling brittle"],
        impact: ["No-shows", "Repeat calls"],
        leadership: "One miss becomes a trust break.",
        illustration: "/Healthcare.png"
      },
      telecom: {
        bullets: [
          "Outage truth changes all day.",
          "Credits and ETAs vary by channel.",
          "Customers get conflicting answers."
        ],
        causes: ["Turn boundary failures", "Barge-in unreliable", "Late ASR finals"],
        impact: ["Call spikes", "Churn risk"],
        leadership: "We cannot stand by our own answer.",
        illustration: "/Telecom.png"
      },
      ecommerce: {
        bullets: [
          "Inventory disagrees across nodes.",
          "Delivery promises keep shifting.",
          "Returns guidance varies by agent."
        ],
        causes: ["Partial transcript actions", "ASR confidence unused", "Disambiguation weak"],
        impact: ["Refund leakage", "CSAT drop"],
        leadership: "We keep paying for confusion.",
        illustration: "/eCommerce.png"
      },
      bfsi: {
        bullets: [
          "Eligibility differs by product and channel.",
          "Limits and exceptions change by case.",
          "Customers get confident contradictions."
        ],
        causes: ["ASR number normalization", "Missing source grounding", "Summarization constraint loss"],
        impact: ["Complaints", "Escalations"],
        leadership: "This becomes regulatory risk.",
        illustration: "/BFSI.png"
      },
      travel: {
        bullets: [
          "Rebooking rules change during disruption.",
          "Compensation guidance varies by agent.",
          "Customers hear different outcomes."
        ],
        causes: ["Duplex mismatch", "Messy TTS cancellation", "Conversation repair loops"],
        impact: ["Call surges", "Compensation costs"],
        leadership: "One wrong answer goes public.",
        illustration: "/Travel.png"
      },
      tech: {
        bullets: [
          "Entitlements differ across systems.",
          "Incident status shifts mid-ticket.",
          "Customers get changing explanations."
        ],
        causes: ["Tool-call mid-turn failures", "Tool latency dead air", "State tracking breaks"],
        impact: ["Ticket reopens", "Renewal risk"],
        leadership: "Trust breaks before churn shows.",
        illustration: "/SAAS.png"
      },
      media: {
        bullets: [
          "Subscription status changes across systems.",
          "Access rules vary by region and plan.",
          "Customers get mixed explanations."
        ],
        causes: ["Misaligned listening UI", "Streaming ASR instability", "Normalization meaning shift"],
        impact: ["Refund requests", "Churn lift"],
        leadership: "We look inconsistent at scale.",
        illustration: "/Media.png"
      }
    }
  },
  coo: {
    role: "COO / VP Operations",
    title: "Ops Drift to Cost Blowups",
    description: "Your operation looks fine on dashboards, then collapses in the handoffs. One missed detail becomes a missed window, then a rework loop, then an escalation you cannot unwind. You do not lose sleep over effort, you lose sleep over preventable chaos that compounds.",
    industryTriggers: {
      logistics: {
        bullets: [
          "One “quick update” becomes the wrong instruction.",
          "Exceptions vanish at shift change.",
          "Teams move on stale shipment truth."
        ],
        causes: ["No canonical state model", "Summarization loses constraints", "Monitoring lacks event timelines"],
        impact: ["Detention fees", "Missed SLAs"],
        leadership: "We cannot prove who instructed what.",
        illustration: "/Logistics.png"
      },
      manufacturing: {
        bullets: [
          "The line changes, but the plan does not.",
          "Exceptions stay in heads, not systems.",
          "The next shift repeats the same miss."
        ],
        causes: ["State tracking breaks", "Context management fails", "Summarization loses constraints"],
        impact: ["Downtime", "Scrap"],
        leadership: "Root cause becomes guesswork.",
        illustration: "/Manufacturing.png"
      },
      healthcare: {
        bullets: [
          "One handoff drops a detail that matters.",
          "Exceptions do not travel with the patient.",
          "Small misses become delays and incidents."
        ],
        causes: ["Async race conditions", "Context management fails", "Slot filling brittle"],
        impact: ["Throughput loss", "Overtime"],
        leadership: "One preventable miss becomes an incident.",
        illustration: "/Healthcare.png"
      },
      telecom: {
        bullets: [
          "Field updates arrive late or wrong.",
          "Dispatch acts on yesterday’s reality.",
          "Repeat visits become the norm."
        ],
        causes: ["Packet loss and jitter", "Clock drift", "State tracking breaks"],
        impact: ["Truck rolls", "Penalties"],
        leadership: "Field reality is out of sync.",
        illustration: "/Telecom.png"
      },
      ecommerce: {
        bullets: [
          "The customer changes the order, ops misses it.",
          "Node-to-node handoffs drop exceptions.",
          "Rework starts only after shipping."
        ],
        causes: ["No canonical state model", "Async race conditions", "State tracking breaks"],
        impact: ["Reship costs", "Delay credits"],
        leadership: "We pay twice for one order.",
        illustration: "/eCommerce.png"
      },
      bfsi: {
        bullets: [
          "Work resets every time ownership changes.",
          "Holds and approvals drift by team.",
          "Cases get redone, not progressed."
        ],
        causes: ["Context management fails", "Disambiguation weak", "State tracking breaks"],
        impact: ["Backlog growth", "Rework"],
        leadership: "Cycle time is out of control.",
        illustration: "/BFSI.png"
      },
      travel: {
        bullets: [
          "One late update triggers a cascade.",
          "Teams do not share one live truth.",
          "Fixing one miss creates two more."
        ],
        causes: ["No canonical state model", "Async race conditions", "Monitoring lacks event timelines"],
        impact: ["Delays", "Compensation"],
        leadership: "Small misses cascade publicly.",
        illustration: "/Travel.png"
      },
      tech: {
        bullets: [
          "The incident changes, but ownership does not know.",
          "Handoffs lose the one critical constraint.",
          "Coordination becomes manual under pressure."
        ],
        causes: ["State tracking breaks", "Context management fails", "Tool latency dead air"],
        impact: ["Longer incidents", "Support load"],
        leadership: "We cannot run predictable ops.",
        illustration: "/SAAS.png"
      },
      media: {
        bullets: [
          "Teams ship fast, then undo each other.",
          "Approvals lose context across handoffs.",
          "Rollouts miss windows and pile rework."
        ],
        causes: ["Context management fails", "Summarization loses constraints", "State tracking breaks"],
        impact: ["Missed windows", "Rework"],
        leadership: "We ship chaos, not control.",
        illustration: "/Media.png"
      }
    }
  },
  cro: {
    role: "CRO / VP Sales or RevOps",
    title: "Forecast Looks Fine Until It Isn’t",
    description: "You win the meeting, then the “exact agreement” starts changing in retellings. The buyer believes what they heard, your team executes what got captured, and the gap shows up at the worst time. Late-stage deals slip, discounts grow, and your forecast starts lying to you.",
    industryTriggers: {
      logistics: {
        bullets: [
          "Rates and surcharges get captured wrong from voice.",
          "Lane and SLA exceptions get simplified in follow-ups.",
          "The buyer says “that’s not what I agreed.”"
        ],
        causes: ["ASR confidence scores unused", "Summarization loses critical constraints", "Monitoring lacks turn-level traces"],
        impact: ["Margin leakage", "Late-stage slippage"],
        leadership: "We cannot defend our commitments.",
        illustration: "/Logistics.png"
      },
      manufacturing: {
        bullets: [
          "Lead times and quantities get mis-captured on calls.",
          "Substitution and expedite exceptions disappear between touches.",
          "Ops later contradicts sales, and trust snaps."
        ],
        causes: ["Slot filling brittle", "Context management fails across turns", "No turn-level traces and timelines"],
        impact: ["Concessions", "Order cancellations"],
        leadership: "Pipeline quality is not real.",
        illustration: "/Manufacturing.png"
      },
      healthcare: {
        bullets: [
          "Security and integration answers drift by stakeholder.",
          "Critical constraints get lost in recaps and notes.",
          "Procurement asks for proof, you cannot replay it."
        ],
        causes: ["Missing source grounding", "Summarization loses critical constraints", "No replay tooling"],
        impact: ["Deal stalls", "Lost deals"],
        leadership: "We lose control of the decision story.",
        illustration: "/Healthcare.png"
      },
      telecom: {
        bullets: [
          "Credits, SLAs, and rollout terms get misheard mid-call.",
          "Corrections get missed when the buyer interrupts.",
          "The final recap contradicts what they remember."
        ],
        causes: ["Late ASR finals arrive late", "Barge-in is unreliable", "Turn boundaries feel wrong"],
        impact: ["Deal rework", "Discount creep"],
        leadership: "Forecast confidence drops.",
        illustration: "/Telecom.png"
      },
      ecommerce: {
        bullets: [
          "Bundle and return terms get captured inconsistently.",
          "The story changes across call, email, and deck.",
          "The buyer escalates with “you promised.”"
        ],
        causes: ["Disambiguation is weak", "Context management fails across turns", "No turn-level traces and timelines"],
        impact: ["Slower closes", "Margin erosion"],
        leadership: "We keep negotiating our own notes.",
        illustration: "/eCommerce.png"
      },
      bfsi: {
        bullets: [
          "Fee and eligibility language gets normalized into wrong meaning.",
          "Risk nuance gets guessed instead of confirmed.",
          "Audit asks “who said what,” and it’s fuzzy."
        ],
        causes: ["ASR normalization changes meaning", "Confirmation prompts are too rare", "Monitoring lacks turn-level traces"],
        impact: ["Compliance rework", "Late-stage losses"],
        leadership: "This turns into regulatory risk.",
        illustration: "/BFSI.png"
      },
      travel: {
        bullets: [
          "SLA and compensation terms shift during disruption talks.",
          "The recap misses one exception that mattered.",
          "Legal blocks the deal on inconsistency."
        ],
        causes: ["Overlapping speech is hard", "Summarization loses critical constraints", "Knowledge base freshness not maintained"],
        impact: ["Late-stage drop", "Wasted sales effort"],
        leadership: "We lose deals we should win.",
        illustration: "/Travel.png"
      },
      tech: {
        bullets: [
          "Roadmap talk gets repeated as a promise.",
          "Entitlements and data residency drift between touches.",
          "Deal desk cannot reconstruct the exact call."
        ],
        causes: ["Agent over-answers vs confirm", "Context management fails across turns", "No replay tooling"],
        impact: ["Renewal risk", "Discount pressure"],
        leadership: "Commitments turn into liabilities.",
        illustration: "/SAAS.png"
      },
      media: {
        bullets: [
          "Rights, regions, and plan rules get stated with confidence.",
          "Short voice questions pull the wrong “truth.”",
          "The buyer disputes what they were told."
        ],
        causes: ["RAG retrieval returns wrong info", "Retrieval ranking fails for short voice", "No turn-level traces and timelines"],
        impact: ["Deal slippage", "Margin loss"],
        leadership: "We sell ambiguity.",
        illustration: "/Media.png"
      }
    }
  },
  cto: {
    role: "CTO, CIO, CPTO",
    title: "No Trace, No Fix",
    description: "You own reliability, security, and product trust, but voice failures rarely fail cleanly. Users report “it felt wrong,” teams argue about timelines, and fixes ship without confidence they will hold. The risk is not just downtime, it is credibility.",
    industryTriggers: {
      logistics: {
        bullets: [
          "“That call went weird” cannot be replayed.",
          "Warehouse noise and cross-talk break understanding.",
          "Reconnects scramble streaming and timing."
        ],
        causes: ["No replay tooling to reproduce bugs", "Far-field audio issues", "WebSocket reconnects create duplicate or missing audio frames"],
        impact: ["Longer incident time", "Higher support load"],
        leadership: "We are debugging feelings, not traces.",
        illustration: "/Logistics.png"
      },
      manufacturing: {
        bullets: [
          "Plant noise triggers false listens and wrong turns.",
          "On-prem constraints change latency and behavior.",
          "Endpointing works in tests, fails on floor."
        ],
        causes: ["VAD false positives from noise", "Deployment environment constraints (on-prem, VPC)", "Endpointing thresholds tuned for one environment fail in another"],
        impact: ["Downtime risk", "Slower releases"],
        leadership: "It passes staging, fails in reality.",
        illustration: "/Manufacturing.png"
      },
      healthcare: {
        bullets: [
          "Overlapping voices break “who said what.”",
          "Recording and consent must be provable.",
          "The agent answers when it must confirm."
        ],
        causes: ["Speaker diarization is weak", "Compliance with call recording laws varies by region", "Agent over-answers when it should confirm or defer"],
        impact: ["Incident exposure", "Compliance workload"],
        leadership: "One miss becomes a reportable event.",
        illustration: "/Healthcare.png"
      },
      telecom: {
        bullets: [
          "Carrier drops and latency break turn timing.",
          "Phone codecs degrade ASR and TTS quality.",
          "Network variance break streaming stability."
        ],
        causes: ["Telephony constraints (DTMF, call drops, carrier latency)", "Audio codec limitations on phone lines degrade ASR/TTS", "Packet loss and network variability break streaming stability"],
        impact: ["Call failures", "Escalations"],
        leadership: "Quality depends on the network.",
        illustration: "/Telecom.png"
      },
      ecommerce: {
        bullets: [
          "Peak load makes responses lag and overlap.",
          "Partial transcripts trigger the wrong action.",
          "Tool calls fail mid-turn and strand users."
        ],
        causes: ["Scaling concurrency introduces new races and latency spikes", "Acting on partial transcripts causes wrong or premature replies", "Tool calling errors create broken conversations mid-turn"],
        impact: ["Abandonment", "Ticket spikes"],
        leadership: "We only learn at peak traffic.",
        illustration: "/eCommerce.png"
      },
      bfsi: {
        bullets: [
          "Numbers get captured wrong under pressure.",
          "Risk actions need strict confirmation, fast.",
          "Audits demand exact turn-level proof."
        ],
        causes: ["Slot filling is brittle (dates, names, addresses, numbers)", "Confirmation prompts are too rare, causes wrong actions", "Monitoring lacks turn-level traces and event timelines"],
        impact: ["Rework and reversals", "Compliance cost"],
        leadership: "If we cannot prove it, we own it.",
        illustration: "/BFSI.png"
      },
      travel: {
        bullets: [
          "Interruptions break rebooking conversations.",
          "Canceling speech leaves wrong confirmations.",
          "Recovery loops trap users in repeats."
        ],
        causes: ["Barge-in is unreliable", "Cancelling speech generation is messy", "Conversation repair loops (user repeats, agent repeats)"],
        impact: ["Longer handle time", "Compensation costs"],
        leadership: "One broken call becomes a scene.",
        illustration: "/Travel.png"
      },
      tech: {
        bullets: [
          "Multi-step workflows lose state across turns.",
          "Tool latency creates dead air and drop-offs.",
          "Without traces, root cause becomes debate."
        ],
        causes: ["State tracking for multi-step workflows breaks", "Tool latency creates awkward dead air without good handling", "Monitoring lacks turn-level traces and event timelines"],
        impact: ["Longer incidents", "Renewal risk"],
        leadership: "No timeline means no accountability.",
        illustration: "/SAAS.png"
      },
      media: {
        bullets: [
          "Wake words trigger accidentally in rooms.",
          "Background talk gets treated as commands.",
          "Streaming text shifts, meaning changes mid-turn."
        ],
        causes: ["Wake word false triggers and missed triggers", "Failure to handle background talk (agent responds to others)", "Streaming ASR produces unstable text that keeps changing"],
        impact: ["Churn lift", "Support spikes"],
        leadership: "Users stop trusting the interface.",
        illustration: "/Media.png"
      }
    }
  },
  chro: {
    role: "CHRO, Talent Head, VP HR Ops",
    title: "Capability Does Not Scale",
    description: "You add headcount, but the work does not get more consistent. People learn from what “worked once” in the moment, not from a shared standard. The same mistakes repeat across teams, and you spend more time correcting drift than building skill.",
    industryTriggers: {
      logistics: {
        bullets: [
          "Exceptions get taught verbally, not documented.",
          "Shift handoffs lose the “why,” not just the “what.”",
          "New hires copy the loudest pattern."
        ],
        causes: ["Summarization loses critical constraints", "Context management fails across turns", "No replay tooling to reproduce bugs"],
        impact: ["Slow ramp", "Repeat errors"],
        leadership: "We cannot coach what we cannot replay.",
        illustration: "/Logistics.png"
      },
      manufacturing: {
        bullets: [
          "Workarounds spread faster than training.",
          "Rules change by supervisor and shift.",
          "Mistakes repeat under noise and pressure."
        ],
        causes: ["Lack of regression suites", "Endpointing thresholds tuned for one env fail", "No noise/accent test harness"],
        impact: ["Rework", "Quality risk"],
        leadership: "We keep re-teaching the same failures.",
        illustration: "/Manufacturing.png"
      },
      healthcare: {
        bullets: [
          "Staff learns by copying, not confirming.",
          "High-stakes details get misheard in busy rooms.",
          "Tone misses make patients feel dismissed."
        ],
        causes: ["Confirmation prompts are too rare", "Far-field audio issues", "Tone mismatch"],
        impact: ["Burnout", "Patient complaints"],
        leadership: "One miss becomes a serious incident.",
        illustration: "/Healthcare.png"
      },
      telecom: {
        bullets: [
          "Policies drift faster than onboarding updates.",
          "Agents improvise credits to calm angry callers.",
          "Coaching is reactive, not repeatable."
        ],
        causes: ["Knowledge base freshness not maintained", "Confirmation prompts are too rare", "Monitoring lacks turn-level traces"],
        impact: ["Revenue leakage", "Escalations"],
        leadership: "We cannot standardize what keeps changing.",
        illustration: "/Telecom.png"
      },
      ecommerce: {
        bullets: [
          "Returns exceptions become the default habit.",
          "Guidance varies across call, chat, and email.",
          "New hires learn shortcuts that leak money."
        ],
        causes: ["Knowledge base freshness not maintained", "Context management fails across turns", "Summarization loses critical constraints"],
        impact: ["Refund leakage", "CSAT drop"],
        leadership: "Inconsistency is now the process.",
        illustration: "/eCommerce.png"
      },
      bfsi: {
        bullets: [
          "Compliance nuance gets simplified in training.",
          "Reps guess instead of confirming under pressure.",
          "Audits find gaps months later."
        ],
        causes: ["Summarization loses critical constraints", "Agent over-answers vs confirm", "Monitoring lacks turn-level traces"],
        impact: ["Rework", "Compliance load"],
        leadership: "Training gaps become audit gaps.",
        illustration: "/BFSI.png"
      },
      travel: {
        bullets: [
          "Disruption forces improvisation on every shift.",
          "Interruptions break the agent’s flow.",
          "Angry customers amplify tone mistakes."
        ],
        causes: ["Edge cases not prioritized", "Overlapping speech is hard", "Emotional state shifts missed"],
        impact: ["Longer handle time", "Compensation costs"],
        leadership: "Pressure exposes every weak habit.",
        illustration: "/Travel.png"
      },
      tech: {
        bullets: [
          "Tools and processes change faster than onboarding.",
          "Critical context gets lost in handoffs.",
          "People repeat mistakes because proof is missing."
        ],
        causes: ["Context window costs explode", "Context management fails across turns", "No replay tooling to reproduce bugs"],
        impact: ["Slow ramp", "Customer escalations"],
        leadership: "We scale headcount, not capability.",
        illustration: "/SAAS.png"
      },
      media: {
        bullets: [
          "Region rules shift and training lags behind.",
          "Short voice queries pull the wrong “truth.”",
          "Confident answers spread fast and go public."
        ],
        causes: ["Knowledge base freshness not maintained", "Retrieval ranking fails for short voice", "Hallucinations in voice feel dangerous"],
        impact: ["Churn lift", "PR risk"],
        leadership: "One wrong answer becomes a headline.",
        illustration: "/Media.png"
      }
    }
  },
  cfo: {
    role: "CFO, Finance Head",
    title: "Leakage Hides in Exceptions",
    description: "Money does not disappear in one big event. It leaks through small adjustments, credits, reversals, and disputes that stack across systems and channels. When the story behind a number cannot be defended, the number stops being trusted.",
    industryTriggers: {
      logistics: {
        bullets: [
          "Detention and accessorial charges differ by system.",
          "Credits get applied inconsistently across touchpoints.",
          "Disputes drag because proof is slow."
        ],
        causes: ["No canonical state model", "Missing idempotency via voice", "Monitoring lacks turn-level traces"],
        impact: ["Delayed collections", "Revenue leakage"],
        leadership: "We cannot defend invoicing.",
        illustration: "/Logistics.png"
      },
      manufacturing: {
        bullets: [
          "Expedite spend gets approved in the moment.",
          "Scrap and rework costs appear late.",
          "Variance stories change by team."
        ],
        causes: ["Confirmation prompts are too rare", "Monitoring lacks event timelines", "Summarization loses critical constraints"],
        impact: ["Margin surprises", "Write-offs"],
        leadership: "We close on estimates, not truth.",
        illustration: "/Manufacturing.png"
      },
      healthcare: {
        bullets: [
          "Coverage and authorization details get mis-captured.",
          "Coding and eligibility exceptions drift by handoff.",
          "Denials rise from small mismatches."
        ],
        causes: ["Slot filling is brittle", "Context management fails", "Disambiguation is weak"],
        impact: ["AR delays", "Denials cost"],
        leadership: "Exposure shows up months later.",
        illustration: "/Healthcare.png"
      },
      telecom: {
        bullets: [
          "Plan changes get applied with incomplete confirmation.",
          "Credits vary by agent and channel.",
          "Billing disputes spike after outages."
        ],
        causes: ["Acting on partial transcripts", "Confirmation prompts rare", "Knowledge freshness not maintained"],
        impact: ["Chargebacks", "Revenue leakage"],
        leadership: "Controls are not holding.",
        illustration: "/Telecom.png"
      },
      ecommerce: {
        bullets: [
          "Refund decisions differ by channel.",
          "Goodwill credits break reconciliation.",
          "Chargebacks climb when stories conflict."
        ],
        causes: ["Tool retries cause duplications", "Summarization loses constraints", "Source grounding is absent"],
        impact: ["Cash leakage", "Higher fees"],
        leadership: "We keep paying for inconsistency.",
        illustration: "/eCommerce.png"
      },
      bfsi: {
        bullets: [
          "Fee language gets normalized into the wrong meaning.",
          "High-risk actions need strict confirmation.",
          "Audit asks for exact turn-level proof."
        ],
        causes: ["ASR normalization changes meaning", "No audible confirmations", "Monitoring lacks turn-level traces"],
        impact: ["Reversals and rework", "Compliance cost"],
        leadership: "If we cannot prove it, we own it.",
        illustration: "/BFSI.png"
      },
      travel: {
        bullets: [
          "Vouchers, refunds, and credits drift across systems.",
          "Partner reimbursements lag or misalign.",
          "Liability grows without clean tracing."
        ],
        causes: ["No canonical state model", "Tool latency dead air", "Monitoring lacks event timelines"],
        impact: ["Write-offs", "Liability creep"],
        leadership: "Exposure is invisible until late.",
        illustration: "/Travel.png"
      },
      tech: {
        bullets: [
          "Credits and proration differ across systems.",
          "Usage disputes escalate fast on voice.",
          "Collections slow when proof is unclear."
        ],
        causes: ["State tracking breaks", "Source grounding is absent", "Monitoring lacks turn-level traces"],
        impact: ["Delayed cash", "Revenue leakage"],
        leadership: "Numbers are questioned too often.",
        illustration: "/SAAS.png"
      },
      media: {
        bullets: [
          "Subscription status conflicts across billing systems.",
          "Refund rules vary by region and plan.",
          "Disputes rise because the answer changes."
        ],
        causes: ["No canonical state model", "Knowledge base freshness not maintained", "Retrieval ranking fails for short voice"],
        impact: ["Refund load", "Churn lift"],
        leadership: "We lose money and trust.",
        illustration: "/Media.png"
      }
    }
  },
}

export function WhoThisHits() {
  const [activeCategory, setActiveCategory] = useState("cco")
  const [activeIndustry, setActiveIndustry] = useState("logistics")

  const currentCategory = categoryData[activeCategory]
  const currentIndustry = industries.find(ind => ind.id === activeIndustry)
  const currentIndustryData = currentCategory.industryTriggers[activeIndustry] || {
    bullets: ["Content pending..."],
    causes: ["TBD"],
    impact: ["TBD"],
    leadership: "TBD",
    illustration: ""
  }

  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-4xl font-serif text-warm-gray mb-2">Who this hits.</h2>
          <p className="text-lg md:text-xl text-warm-gray-light max-w-2xl mx-auto">Different roles. Same structural fragility. Same moment of panic.</p>
        </div>

        <Tabs
          value={activeCategory}
          onValueChange={setActiveCategory}
          className="w-full"
        >
          <div className="w-full bg-white rounded-[2rem] border border-sand/30 shadow-sm overflow-hidden">

            {/* Folder-Style Role Tabs */}
            <div className="bg-[#F9F8F6] relative h-[64px]">
              <TabsList
                className="bg-transparent h-full flex p-0 border-b border-sand/30 rounded-none w-full overflow-x-auto overflow-y-hidden scrollbar-hide"
                style={{
                  msOverflowStyle: 'none',
                  scrollbarWidth: 'none',
                  WebkitOverflowScrolling: 'touch'
                }}
              >
                <style dangerouslySetInnerHTML={{
                  __html: `
                  .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                  }
                ` }} />
                {Object.keys(categoryData).map((key) => (
                  <TabsTrigger
                    key={key}
                    value={key}
                    className="flex-1 min-w-[100px] py-5 px-4 md:px-8 border-r last:border-r-0 border-sand/30 text-md font-bold uppercase tracking-[0.2em] text-warm-gray-light hover:text-warm-gray data-[state=active]:bg-white data-[state=active]:text-warm-gray data-[state=active]:border-b-transparent transition-all rounded-none first:rounded-tl-[2rem] last:rounded-tr-[2rem] relative z-10 data-[state=active]:z-20 -mb-[1px]"
                  >
                    {key}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <div className="p-8 md:p-12 lg:p-16">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">

                    {/* Left Column: Context & Industry Pills */}
                    <div className="space-y-10">
                      <div className="space-y-4">
                        <span className="text-gold-dark font-bold text-sm uppercase tracking-wider">
                          {currentCategory.role}
                        </span>
                        <h3 className="text-4xl md:text-5xl font-serif text-warm-gray max-w-md leading-tight">
                          {currentCategory.title}
                        </h3>
                        <p className="text-lg text-warm-gray-light leading-relaxed max-w-lg">
                          {currentCategory.description}
                        </p>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {industries.map((ind) => (
                          <button
                            key={ind.id}
                            onClick={() => setActiveIndustry(ind.id)}
                            className={cn(
                              "px-4 py-3 rounded-xl text-[10px] font-bold transition-all border uppercase tracking-widest text-center",
                              activeIndustry === ind.id
                                ? "bg-gold/5 text-gold-dark border-gold/40 shadow-sm"
                                : "bg-sand/10 text-warm-gray-light border-transparent hover:bg-sand/20"
                            )}
                          >
                            {ind.short}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Right Column: Diagnostic Card */}
                    <div className="relative">
                      <motion.div
                        key={`${activeCategory}-${activeIndustry}`}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                        className="bg-[#FDFCFB] border border-sand/40 rounded-[2rem] p-8 md:p-10 lg:p-12 shadow-inner min-h-[500px] flex flex-col"
                      >
                        <div className="flex justify-between items-start mb-8">
                          <div className="space-y-6 flex-1">
                            <h4 className="text-2xl font-serif text-warm-gray capitalize">
                              {currentIndustry?.name}
                            </h4>
                            <div className="space-y-4">
                              {currentIndustryData.bullets.map((bullet: string, i: number) => (
                                <div key={i} className="flex gap-3 text-warm-gray/90 leading-relaxed">
                                  <AlertTriangle className="w-5 h-5 text-gold-dark shrink-0 mt-0.5" />
                                  <span className="text-[15px]">{bullet}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          {/* Industry Illustration */}
                          <div className="hidden sm:block w-32 h-32 relative">
                            {currentIndustryData.illustration ? (
                              <motion.img
                                key={currentIndustryData.illustration}
                                src={currentIndustryData.illustration}
                                alt={currentIndustry?.name}
                                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="w-full h-full object-contain"
                              />
                            ) : (
                              <div className="w-full h-full bg-sand/20 rounded-2xl border border-sand/30 flex items-center justify-center p-4">
                                <span className="text-[10px] text-warm-gray-light font-bold text-center">
                                  {currentIndustry?.short}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="mt-auto pt-10 border-t border-sand/30 space-y-8">
                          {/* Causes */}
                          <div className="space-y-3">
                            <span className="text-[11px] font-bold text-red-600 uppercase tracking-widest">
                              Causes that are hard to fix
                            </span>
                            <div className="flex flex-wrap gap-2">
                              {currentIndustryData.causes.map((cause: string, i: number) => (
                                <span key={i} className="px-3 py-1 bg-red-600 text-white text-[10px] font-bold rounded-md tracking-tight">
                                  {cause}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Impact Footer */}
                          <div className="grid grid-cols-2 gap-8 pt-4">
                            <div className="space-y-3">
                              <span className="text-[11px] font-bold text-red-600 uppercase tracking-widest">
                                Business impact
                              </span>
                              <div className="space-y-2">
                                {currentIndustryData.impact.map((imp: string, i: number) => (
                                  <div key={i} className="flex items-center gap-2 text-[13px] text-warm-gray-light">
                                    <ArrowRight className="w-4 h-4 text-warm-gray-light" />
                                    <span>{imp}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div className="space-y-3">
                              <span className="text-[11px] font-bold text-red-600 uppercase tracking-widest">
                                Leadership
                              </span>
                              <div className="relative">
                                <Quote className="absolute -top-1 -left-1 w-8 h-8 text-sand/20 -z-10" />
                                <p className="text-[13px] text-warm-gray italic leading-relaxed">
                                  “{currentIndustryData.leadership}”
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>

                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  )
}

