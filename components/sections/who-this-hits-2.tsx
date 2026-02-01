"use client"

import { useState } from "react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

const categories = [
    { id: "cx", name: "Customer Service & CX" },
    { id: "ops", name: "Operations & Delivery" },
    { id: "sales", name: "RevOps & Sales" },
    { id: "it", name: "IT Ops" },
    { id: "hr", name: "HR & People" },
    { id: "finance", name: "Finance Ops" },
]

const industries = [
    { id: "logistics", name: "Logistics & Supply Chain" },
    { id: "manufacturing", name: "Manufacturing & Plant Ops" },
    { id: "healthcare", name: "Healthcare Operations" },
    { id: "field", name: "Field Service & Utilities" },
    { id: "retail", name: "eCommerce & Retail" },
    { id: "travel", name: "Travel & Hospitality" },
]

const contentData: Record<string, any> = {
    hr: {
        title: "The People Risk",
        description: "One “small” policy slip turns into a fairness incident with your name on it. You start living in escalation mode, not people strategy mode.",
        tags: ["Compliance", "Retention"],
        industryTriggers: {
            logistics: {
                bullets: [
                    "Shift policies and attendance rules get explained differently by different supervisors.",
                    "Onboarding fails in the cracks; new hires learn by copying the fastest person, not the right process.",
                    "Incident reporting is inconsistent, so small issues grow into HR fires later."
                ],
                microCost: "every “quick clarification” steals hours from line execution.",
                snippet: "> Supervisor A: \"Take the OT.\"\n> Supervisor B: \"No OT authorized.\"\n> Employee: \"Who do I listen to?\"\n<span class=\"text-red-500 block mt-2\">> ALERT: Policy Conflict Detected.</span>"
            },
            manufacturing: {
                bullets: [
                    "Safety, role changes, and approvals get delayed because the “right rule” is hard to get mid-task.",
                    "Training and compliance steps get skipped when the floor is busy, then audits hit later.",
                    "Grievances rise because the answer depends on who you asked, not what is true."
                ],
                microCost: "every missed step becomes rework, coaching, and paperwork.",
                snippet: "> Production: \"Need to swap role now.\"\n> Bot: \"Processing approval flow...\"\n> Floor: \"We can't wait. Swapping anyway.\"\n<span class=\"text-red-500 block mt-2\">> WARNING: Unverified Role Change.</span>"
            },
            healthcare: {
                bullets: [
                    "Scheduling, leave, and staffing exceptions pile up, and every unit improvises to survive.",
                    "Policy and compliance updates do not land evenly, so risk spreads silently.",
                    "Onboarding variance creates patient-facing mistakes that HR gets pulled into."
                ],
                microCost: "every unclear rule becomes an interruption storm for managers.",
                snippet: "> Unit Manager: \"Who is on call?\"\n> Bot: \"Checking legacy schedule...\"\n> Staff: \"The schedule in the app is wrong.\"\n<span class=\"text-red-500 block mt-2\">> ERROR: Schedule Data Mismatch.</span>"
            },
            field: {
                bullets: [
                    "Remote teams ask the same questions repeatedly because answers live in scattered threads.",
                    "Approvals for travel, overtime, access, and role changes move slowly, so people bypass the process.",
                    "Inconsistent guidance creates “special cases,” then fairness debates."
                ],
                microCost: "every delay becomes a churn trigger for talent.",
                snippet: "> Technician: \"Can I charge this fuel?\"\n> Bot: \"Refer to Section 4.2.1...\"\n> Technician: \"I'm at the pump now. Yes or no?\"\n<span class=\"text-red-500 block mt-2\">> DELAY: Lead Loss Triggered.</span>"
            },
            retail: {
                bullets: [
                    "Store managers give different answers on the same policy, so trust breaks fast.",
                    "High churn makes onboarding constant, and consistency collapses under volume.",
                    "Shift swaps, leave, and exceptions get handled informally, then disputes escalate."
                ],
                microCost: "every policy mismatch becomes a retention leak.",
                snippet: "> Manager: \"Promo starts today.\"\n> Staff: \"The bot told me next week.\"\n> Customer: \"I'm leaving.\"\n<span class=\"text-red-500 block mt-2\">> ALERT: Inconsistent Guidance.</span>"
            },
            travel: {
                bullets: [
                    "Irregular ops forces rapid staffing decisions, and the “right rule” changes by context.",
                    "Multi-team handoffs (ground, crew, vendors) create gaps in accountability and documentation.",
                    "One inconsistent decision becomes a union issue, a compliance issue, or both."
                ],
                microCost: "every unclear exception becomes a future grievance.",
                snippet: "> Dispatch: \"Crew timed out.\"\n> Bot: \"Applying standard rest rule...\"\n> Union: \"That doesn't apply in IROP.\"\n<span class=\"text-red-500 block mt-2\">> CRITICAL: Compliance Breach.</span>"
            },
        }
    },
    cx: {
        title: "The Brand Fragility",
        description: "Your bot deflected the call but didn't solve the need. Customers get one 'confident' wrong answer and your brand equity evaporates.",
        tags: ["Loyalty", "Growth"],
        industryTriggers: industries.reduce((acc, ind) => ({
            ...acc,
            [ind.id]: {
                bullets: [
                    `In ${ind.name}, inconsistent answers on status lead to immediate distrust.`,
                    "Historical support data being ignored creates a repetitive loop for the user.",
                    "High-value customers are treated with generic logic, missing upsell triggers."
                ],
                microCost: "every hallucination creates 3.5x more work in manual cleanup.",
                snippet: `> User: "Where is my order?"\n> Bot: "It was delivered yesterday."\n> User: "No, it wasn't. Here is my door cam."\n<span class="text-red-500 block mt-2">> FAILED: Confident Hallucination.</span>`
            }
        }), {})
    },
    ops: {
        title: "The Operational Debt",
        description: "Workflow bottlenecks are caused by voice agents making decisions without system visibility. Exceptions become the rule, breaking downstream automation.",
        tags: ["Efficiency", "Logistics"],
        industryTriggers: industries.reduce((acc, ind) => ({
            ...acc,
            [ind.id]: {
                bullets: [
                    `${ind.name} schedules collapse when the bot misses a single routing constraint.`,
                    "Inventory status mismatches create phantom orders that need manual sorting.",
                    "Real-time updates fail to land, forcing teams back into spreadsheet-world."
                ],
                microCost: "every missed logic gate adds 12 minutes of lag to the chain.",
                snippet: `> System: "Inventory low."\n> Bot: "Routing next available..."\n> Reality: "Truck is already full."\n<span class="text-red-500 block mt-2">> ERROR: Routing Constraint Ignored.</span>`
            }
        }), {})
    },
    sales: {
        title: "The Revenue Leak",
        description: "Qualified leads are lost in the gap between a 'polite' follow-up and a real objection. The bot is dropping leads because it doesn't know how to close.",
        tags: ["Pipeline", "Margins"],
        industryTriggers: industries.reduce((acc, ind) => ({
            ...acc,
            [ind.id]: {
                bullets: [
                    `In ${ind.name}, missed intent during the first call kills the deal.`,
                    "Pricing complexity is flattened by the bot, leading to margin leakage.",
                    "Competitor mentions are ignored, losing key differentiation moments."
                ],
                microCost: "every lost intent moment is a $2.4k hole in the pipeline.",
                snippet: `> User: "Is it expensive?"\n> Bot: "I don't have pricing info."\n> User: "Okay, I'll check elsewhere."\n<span class="text-red-500 block mt-2">> LEAD LOST: Information Gap.</span>`
            }
        }), {})
    },
    it: {
        title: "The Technical Nightmare",
        description: "Prompt sprawl makes the system impossible to version-control or debug. You inherit a maintenance nightmare of fixing behavior instead of code.",
        tags: ["Security", "Stability"],
        industryTriggers: industries.reduce((acc, ind) => ({
            ...acc,
            [ind.id]: {
                bullets: [
                    `Legacy integrations in ${ind.name} create data ghosts that the bot treats as truth.`,
                    "Environment drift makes the bot behave differently in prod than in dev.",
                    "Access control is broken by natural language requests that bypass auth."
                ],
                microCost: "every undocumented behavior becomes an 8-hour post-mortem.",
                snippet: `> Test: "Refund $5000."\n> Bot: "Processing... Approved."\n> Security: "User lacks permissions."\n<span class="text-red-500 block mt-2">> BREACH: Auth Bypass via Prompt.</span>`
            }
        }), {})
    },
    finance: {
        title: "The Financial Gap",
        description: "Billing disputes explode when the bot makes pricing promises the ERP doesn't know. Financial logic is buried in a black-box prompt.",
        tags: ["Audit", "Cash Flow"],
        industryTriggers: industries.reduce((acc, ind) => ({
            ...acc,
            [ind.id]: {
                bullets: [
                    `Tax and regulatory variance in ${ind.name} is handled incorrectly.`,
                    "Payment terms are improvised by the voice agent, shortening cash flow.",
                    "Vendor disputes are triggered by the bot providing incorrect contract data."
                ],
                microCost: "every billing error costs $450 in human reconciliation.",
                snippet: `> User: "Give me the 10% net-30."\n> Bot: "Sure, updating your account..."\n> Finance: "That discount doesn't exist."\n<span class="text-red-500 block mt-2">> DISPUTE: Unauthorized Terms.</span>`
            }
        }), {})
    }
}

export function WhoThisHits2() {
    const [activeCategory, setActiveCategory] = useState("hr")
    const [activeIndustry, setActiveIndustry] = useState("logistics")

    const currentCategory = contentData[activeCategory]
    const currentIndustryData = currentCategory.industryTriggers[activeIndustry] || currentCategory.industryTriggers["logistics"]

    return (
        <section className="py-24 lg:py-32 bg-cream">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-serif text-warm-gray mb-4">Who this hits.</h2>
                    <p className="text-warm-gray-light text-lg md:text-xl max-w-2xl mx-auto">Different roles. Same moment of panic.</p>
                </div>

                <Tabs
                    value={activeCategory}
                    onValueChange={setActiveCategory}
                    className="w-full"
                >
                    <TabsList className="flex flex-wrap justify-center h-auto gap-2 md:gap-4 bg-transparent mb-16 border-none">
                        {categories.map((cat) => (
                            <TabsTrigger
                                key={cat.id}
                                value={cat.id}
                                className="rounded-full px-4 py-2 text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all data-[state=active]:bg-gold data-[state=active]:text-warm-gray border border-transparent hover:border-gold/30"
                            >
                                {cat.name}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCategory}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="bg-white rounded-3xl p-8 md:p-16 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] border border-black/5 max-w-5xl mx-auto relative overflow-hidden"
                        >
                            {/* Background Accent */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -mr-32 -mt-32" />

                            <div className="grid lg:grid-cols-12 gap-12 relative z-10">
                                <div className="lg:col-span-7 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-3xl md:text-4xl font-serif text-warm-gray mb-6">{currentCategory.title}</h3>
                                        <p className="text-warm-gray-light text-lg mb-8 leading-relaxed">
                                            {currentCategory.description}
                                        </p>

                                        <div className="flex gap-3 mb-12">
                                            {currentCategory.tags.map((tag: string) => (
                                                <span key={tag} className="px-4 py-1.5 bg-sand/40 border border-gold/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-gold-dark">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="space-y-6">
                                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold-dark/60">Industry Specific Triggers</p>
                                            <ul className="space-y-4">
                                                {currentIndustryData.bullets.map((bullet: string, i: number) => (
                                                    <motion.li
                                                        key={i}
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: i * 0.1 }}
                                                        className="flex gap-4 items-start"
                                                    >
                                                        <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                                                        <p className="text-warm-gray-light text-sm leading-relaxed">
                                                            {bullet}
                                                        </p>
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Industry Selector - Inside the card for context */}
                                    <div className="mt-12 pt-8 border-t border-black/5">
                                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold-dark/60 mb-4">View by Industry Context</p>
                                        <div className="flex flex-wrap gap-2">
                                            {industries.map((ind) => (
                                                <button
                                                    key={ind.id}
                                                    onClick={() => setActiveIndustry(ind.id)}
                                                    className={cn(
                                                        "px-3 py-1.5 rounded-md text-[10px] font-bold uppercase tracking-wider transition-all",
                                                        activeIndustry === ind.id
                                                            ? "bg-warm-gray text-white shadow-md"
                                                            : "bg-gray-50 text-warm-gray-light hover:bg-gold/10 hover:text-warm-gray border border-black/5"
                                                    )}
                                                >
                                                    {ind.name}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="lg:col-span-5 flex flex-col justify-center">
                                    <div className="card-elevated bg-gray-50 p-6 md:p-8 rounded-2xl border border-black/5 font-mono text-xs md:text-sm leading-relaxed text-warm-gray-light shadow-inner">
                                        <div className="flex items-center gap-2 mb-4">
                                            <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                                            <span className="ml-2 text-[10px] uppercase font-bold text-warm-gray-light/40">Terminal::VoiShift_Audit</span>
                                        </div>

                                        <div dangerouslySetInnerHTML={{ __html: currentIndustryData.snippet }} />

                                        <div className="mt-8 pt-6 border-t border-black/5">
                                            <div className="flex items-center gap-3">
                                                <div className="px-1.5 py-0.5 bg-red-100 text-[10px] font-black uppercase text-red-600 rounded">
                                                    Cost
                                                </div>
                                                <p className="text-[11px] text-red-600 italic font-medium">
                                                    "{currentIndustryData.microCost}"
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="mt-6 text-[10px] text-warm-gray-light/40 uppercase tracking-widest text-center">
                                        * Audit results from live legacy deployments
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </Tabs>
            </div>
        </section>
    )
}