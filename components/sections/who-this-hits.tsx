"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Building2, Users, Receipt, Briefcase, Settings, Headphones, ChevronRight } from "lucide-react"

const industries = [
  { id: "logistics", name: "Logistics & Supply Chain" },
  { id: "manufacturing", name: "Manufacturing & Plant Ops" },
  { id: "healthcare", name: "Healthcare Operations" },
  { id: "field", name: "Field Service & Utilities" },
  { id: "retail", name: "eCommerce & Retail" },
  { id: "travel", name: "Travel & Hospitality" },
]

const categoryData: Record<string, any> = {
  cx: {
    title: "Customer Service & CX",
    icon: Headphones,
    points: [
      "Customers get one 'confident' wrong answer and your brand equity evaporates.",
      "Support costs spiral as agents spend half their day correcting bot hallucinations.",
      "The 'uncanny valley' of voice makes loyalty fragile and churn silent.",
      "Complex escalations fail because the bot lacks deep context of the customer journey.",
      "Response volume stays high because the bot deflected the call but didn't solve the need."
    ],
    industryTriggers: industries.reduce((acc, ind) => ({
      ...acc,
      [ind.id]: {
        bullets: [
          `In ${ind.name}, inconsistent answers on status lead to immediate distrust.`,
          "Historical support data being ignored creates a repetitive loop for the user.",
          "High-value customers are treated with generic logic, missing upsell triggers."
        ],
        microCost: "every 'hallucination' creates 3.5x more work in manual cleanup."
      }
    }), {})
  },
  ops: {
    title: "Operations & Delivery",
    icon: Settings,
    points: [
      "Workflow bottlenecks are caused by voice agents making decisions without system visibility.",
      "Exceptions become the rule, breaking downstream automation and logistics.",
      "Shadow processes emerge because the 'authorized' voice flow is too rigid for reality.",
      "Operational debt grows as manual overrides become the only way to get work done.",
      "Audit logs are meaningless because the system can't explain the logic behind an action."
    ],
    industryTriggers: industries.reduce((acc, ind) => ({
      ...acc,
      [ind.id]: {
        bullets: [
          `${ind.name} schedules collapse when the bot misses a single routing constraint.`,
          "Inventory status mismatches create phantom orders that need manual sorting.",
          "Real-time updates fail to land, forcing teams back into spreadsheet-world."
        ],
        microCost: "every missed logic gate adds 12 minutes of lag to the whole chain."
      }
    }), {})
  },
  sales: {
    title: "RevOps & Sales",
    icon: Briefcase,
    points: [
      "Qualified leads are lost in the gap between a 'polite' follow-up and a real objection.",
      "Trust breaks when the bot promises a feature or price the system doesn't support.",
      "The pipeline becomes a 'black box' where you can't tell which leads are active.",
      "Discounting logic slips through, hurting margins without anyone noticing fast.",
      "Sales cycles lengthen because the initial voice touch was generic, not strategic."
    ],
    industryTriggers: industries.reduce((acc, ind) => ({
      ...acc,
      [ind.id]: {
        bullets: [
          `In ${ind.name}, missed intent during the first call kills the deal before it starts.`,
          "Pricing complexity is flattened by the bot, leading to massive margin leakage.",
          "Competitor mentions are ignored, losing key differentiation moments."
        ],
        microCost: "every lost intent moment is a $2.4k hole in the pipeline."
      }
    }), {})
  },
  it: {
    title: "IT Ops",
    icon: Building2,
    points: [
      "Prompt sprawl makes the system impossible to version-control or debug.",
      "Security gaps emerge where the LLM can be manipulated into leaking system data.",
      "Integration points fail silently because the bot doesn't handle API timeouts gracefully.",
      "You inherit a maintenance nightmare of fixing behavior instead of fixing code.",
      "Production stability is a guess because regression testing voice is manual and slow."
    ],
    industryTriggers: industries.reduce((acc, ind) => ({
      ...acc,
      [ind.id]: {
        bullets: [
          `Legacy integrations in ${ind.name} create data ghosts that the bot treats as truth.`,
          "Environment drift makes the bot behave differently in prod than in dev.",
          "Access control is broken by natural language requests that bypass auth."
        ],
        microCost: "every undocumented behavior becomes an 8-hour post-mortem."
      }
    }), {})
  },
  hr: {
    title: "HR & People",
    icon: Users,
    points: [
      "One “small” policy slip turns into a fairness incident with your name on it.",
      "You start living in escalation mode, not people strategy mode.",
      "Your team becomes a human FAQ desk, not an operating system.",
      "Managers freelancing answers becomes culture drift you cannot undo fast.",
      "Attrition rises quietly, then leadership asks why “hiring isn’t working.”"
    ],
    industryTriggers: {
      logistics: {
        bullets: [
          "Shift policies, attendance rules, and exceptions get explained differently by different supervisors.",
          "Onboarding fails in the cracks, so new hires learn by copying the fastest person, not the right process.",
          "Incident reporting is inconsistent, so small issues grow into HR fires later."
        ],
        microCost: "every “quick clarification” steals hours from line execution."
      },
      manufacturing: {
        bullets: [
          "Safety, role changes, and approvals get delayed because the “right rule” is hard to get mid-task.",
          "Training and compliance steps get skipped when the floor is busy, then audits hit later.",
          "Grievances rise because the answer depends on who you asked, not what is true."
        ],
        microCost: "every missed step becomes rework, coaching, and paperwork."
      },
      healthcare: {
        bullets: [
          "Scheduling, leave, and staffing exceptions pile up, and every unit improvises to survive.",
          "Policy and compliance updates do not land evenly, so risk spreads silently.",
          "Onboarding variance creates patient-facing mistakes that HR gets pulled into."
        ],
        microCost: "every unclear rule becomes an interruption storm for managers."
      },
      field: {
        bullets: [
          "Remote teams ask the same questions repeatedly because answers live in scattered threads.",
          "Approvals for travel, overtime, access, and role changes move slowly, so people bypass the process.",
          "Inconsistent guidance creates “special cases,” then fairness debates."
        ],
        microCost: "every delay becomes a churn trigger for talent."
      },
      retail: {
        bullets: [
          "Store managers give different answers on the same policy, so trust breaks fast.",
          "High churn makes onboarding constant, and consistency collapses under volume.",
          "Shift swaps, leave, and exceptions get handled informally, then disputes escalate."
        ],
        microCost: "every policy mismatch becomes a retention leak."
      },
      travel: {
        bullets: [
          "Irregular ops forces rapid staffing decisions, and the “right rule” changes by context.",
          "Multi-team handoffs (ground, crew, vendors) create gaps in accountability and documentation.",
          "One inconsistent decision becomes a union issue, a compliance issue, or both."
        ],
        microCost: "every unclear exception becomes a future grievance."
      }
    }
  },
  finance: {
    title: "Finance Ops",
    icon: Receipt,
    points: [
      "Billing disputes explode when the bot makes pricing promises the ERP doesn't know.",
      "Compliance audits fail because financial logic is buried in a black-box prompt.",
      "Revenue recognition is delayed because of inconsistent voice-to-system mapping.",
      "Operational overkill as humans manually audit every transaction for logic errors.",
      "Your 'ROI' calculation ignores the high cost of fixing automated mistakes."
    ],
    industryTriggers: industries.reduce((acc, ind) => ({
      ...acc,
      [ind.id]: {
        bullets: [
          `Tax and regulatory variance in ${ind.name} is handled incorrectly by a generic bot.`,
          "Payment terms are improvised by the voice agent, shortening your cash flow.",
          "Vendor disputes are triggered by the bot providing incorrect contract data."
        ],
        microCost: "every 'minor' billing error costs $450 in human reconciliation."
      }
    }), {})
  }
}

const indNamePattern = (id: string) => {
  const ind = industries.find(i => i.id === id);
  return ind ? ind.name : "";
}

export function WhoThisHits() {
  const [activeCategory, setActiveCategory] = useState("hr")
  const [activeIndustry, setActiveIndustry] = useState("logistics")

  const currentCategory = categoryData[activeCategory]
  const currentIndustryData = currentCategory.industryTriggers[activeIndustry] || { bullets: [], microCost: "" }

  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-4xl font-serif text-warm-gray mb-2">Who this hits.</h2>
          <p className="text-lg md:text-xl text-warm-gray-light max-w-2xl mx-auto">Different roles. Same structural fragility. Same moment of panic.</p>
        </div>

        <Tabs
          defaultValue="hr"
          onValueChange={setActiveCategory}
          className="w-full flex flex-col items-center"
        >
          <TabsList className="bg-transparent p-1 mb-8 h-auto flex flex-wrap justify-center gap-4 border-none shadow-none">
            {Object.keys(categoryData).map((key) => (
              <TabsTrigger
                key={key}
                value={key}
                className="rounded-full px-6 py-2 border border-transparent data-[state=active]:bg-gold/20 data-[state=active]:border-gold data-[state=active]:text-warm-gray text-warm-gray-light hover:text-warm-gray transition-all shadow-none"
              >
                <span className="text-xs font-bold uppercase tracking-widest">{categoryData[key].title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="w-full max-w-5xl mx-auto"
            >
              <div className="card-elevated bg-white p-8 md:p-12 lg:p-16 rounded-[2rem] shadow-2xl shadow-warm-gray/5 border border-sand/20">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                  {/* Left Content: Description & Tags */}
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <h3 className="text-3xl md:text-4xl font-serif text-warm-gray">
                        {currentCategory.title === "IT Ops" ? "The Technical Debt" :
                          currentCategory.title === "HR & People" ? "The Cultural Debt" :
                            currentCategory.title === "Finance Ops" ? "The Financial Debt" :
                              currentCategory.title === "RevOps & Sales" ? "The Revenue Leak" :
                                currentCategory.title === "Operations & Delivery" ? "The Logic Gap" :
                                  "The Fragile Brand"}
                      </h3>
                      <p className="text-lg md:text-xl text-warm-gray-light leading-relaxed font-light">
                        {currentCategory.points[0]} {currentCategory.points[1]}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {industries.map((ind) => (
                        <button
                          key={ind.id}
                          onClick={() => setActiveIndustry(ind.id)}
                          className={cn(
                            "px-4 py-1.5 rounded-lg text-xs font-bold transition-all border uppercase tracking-wider",
                            activeIndustry === ind.id
                              ? "bg-gold/10 text-gold-dark border-gold/30 shadow-sm"
                              : "bg-sand/10 text-warm-gray-light border-transparent hover:bg-sand/20"
                          )}
                        >
                          {ind.id === "manufacturing" ? "Manufacturing" :
                            ind.id === "logistics" ? "Logistics" :
                              ind.id === "healthcare" ? "Healthcare" :
                                ind.id === "field" ? "Field Ops" :
                                  ind.id === "retail" ? "Retail" : "Travel"}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Right Content: Terminal Box */}
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gold/5 rounded-[2rem] blur-2xl -z-10" />
                    <div className="bg-[#FDFCFB] border border-sand/50 rounded-2xl p-8 md:p-10 min-h-[300px] flex flex-col justify-center shadow-inner">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={`${activeCategory}-${activeIndustry}`}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-6"
                        >
                          <div className="space-y-4">
                            {currentIndustryData.bullets.map((bullet: string, i: number) => (
                              <div key={i} className="flex gap-3 text-warm-gray/80 font-mono text-sm leading-relaxed">
                                <span className="text-gold-dark select-none">&gt;</span>
                                <div>
                                  {bullet.split(indNamePattern(activeIndustry)).map((part, index, array) => (
                                    <span key={index}>
                                      {part}
                                      {index < array.length - 1 && (
                                        <span className="text-gold-dark font-bold">
                                          {industries.find(i => i.id === activeIndustry)?.name}
                                        </span>
                                      )}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>

                          <div className="pt-6 border-t border-sand/50">
                            <div className="flex items-start gap-4">
                              <span className="text-red-500 font-mono text-sm leading-relaxed shrink-0">&gt;&gt; FAILED:</span>
                              <p className="text-sm font-mono text-warm-gray italic leading-relaxed">
                                {currentIndustryData.microCost}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </Tabs>
      </div>
    </section>
  )
}
