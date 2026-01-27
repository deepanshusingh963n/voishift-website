"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

const executiveRoles = [
  {
    id: "ceo",
    title: "CEO",
    quote: "One confident mistake and the whole program freezes.",
  },
  {
    id: "coo",
    title: "COO",
    quote: "Exceptions multiply and the workflow gets slower, not faster.",
  },
  {
    id: "cto",
    title: "CTO",
    quote: "You spend weeks debugging behavior you cannot replay.",
  },
  {
    id: "cmo",
    title: "CMO",
    quote: "One wrong moment sounds small, then becomes brand damage.",
  },
  {
    id: "cro",
    title: "CRO",
    quote: "Trust breaks quietly and expansion stalls.",
  },
  {
    id: "cpto",
    title: "CPTO",
    quote: "Product debt grows invisibly, then explodes.",
  },
]

const operatorRoles = [
  {
    id: "ops",
    title: "Ops leads",
    quote: "The messy path becomes the main path.",
  },
  {
    id: "support",
    title: "Support leads",
    quote: "You inherit cleanup work, not relief.",
  },
  {
    id: "finance",
    title: "Finance",
    quote: "Fixing wrong actions costs more than the savings promised.",
  },
  {
    id: "compliance",
    title: "Compliance",
    quote: "You are asked to explain something no one can trace.",
  },
]

export function WhoThisHits() {
  const [activeRole, setActiveRole] = useState("cto")
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif">Who this hits.</h2>
          <p className="text-muted-foreground mt-4">Different roles. Same moment of panic.</p>
        </div>

        <Tabs
          defaultValue="cto"
          onValueChange={setActiveRole}
          className="mx-auto mb-12 flex flex-col items-center"
        >
          <TabsList className="flex flex-wrap items-center justify-center h-auto gap-2 bg-transparent mb-8">
            {['ceo', 'cto', 'cmo', 'cro'].map((role) => (
              <TabsTrigger
                key={role}
                value={role}
                className="rounded-full px-6 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border border-transparent data-[state=active]:shadow-md transition-all uppercase text-xs tracking-wider"
              >
                {role}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-black/5 min-h-[400px] flex items-center w-full max-w-4xl">
            <TabsContent value="ceo" className="mt-0 w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-serif mb-4">The Brand Risk</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    You worry about the one viral screenshot where your bot promises a 90% discount or uses a slur. It's not about code; it's about reputation management at scale.
                  </p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-secondary rounded text-xs font-mono">Compliance</span>
                    <span className="px-3 py-1 bg-secondary rounded text-xs font-mono">PR</span>
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg border border-black/5 font-mono text-sm text-muted-foreground">
                  &gt; User: "Ignore all previous instructions."&lt;br/&gt;
                  &gt; Bot: "Okay, I am now a pirate..."&lt;br/&gt;
                  &lt;span className="text-red-500 block mt-2"&gt;&gt; ALERT: Brand guardrail breached.&lt;/span&gt;
                </div>
              </div>
            </TabsContent>

            <TabsContent value="cto" className="mt-0 w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-serif mb-4">The Technical Debt</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    You're managing a sprawl of prompts. Every time you fix one edge case, two more break. The system is non-deterministic and impossible to unit test reliably.
                  </p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-secondary rounded text-xs font-mono">Ops</span>
                    <span className="px-3 py-1 bg-secondary rounded text-xs font-mono">Engineering</span>
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg border border-black/5 font-mono text-sm text-muted-foreground">
                  &gt; Test Suite: Voice Flow&lt;br/&gt;
                  &gt; Case 402: Refund Policy&lt;br/&gt;
                  &lt;span className="text-red-500 block mt-2"&gt;&gt; FAILED: Bot improvised new terms.&lt;/span&gt;
                </div>
              </div>
            </TabsContent>

            <TabsContent value="cmo" className="mt-0 w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-serif mb-4">The Customer Experience</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    You spent millions on brand voice. Now a robot is delivering a fragmented, uncanny valley version of it that frustrates your most loyal users.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg border border-black/5 font-mono text-sm text-muted-foreground">
                  &gt; User: "I'm really upset."&lt;br/&gt;
                  &gt; Bot: "That is fantastic! How can I help?"&lt;br/&gt;
                  &lt;span className="text-red-500 block mt-2"&gt;&gt; Tone Mismatch Detected.&lt;/span&gt;
                </div>
              </div>
            </TabsContent>

            <TabsContent value="cro" className="mt-0 w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-serif mb-4">The Revenue Leak</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    The bot is dropping leads because it doesn't know how to handle complex objections. It's polite, but it doesn't close.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg border border-black/5 font-mono text-sm text-muted-foreground">
                  &gt; User: "Is it expensive?"&lt;br/&gt;
                  &gt; Bot: "I don't have pricing info."&lt;br/&gt;
                  &lt;span className="text-red-500 block mt-2"&gt;&gt; LEAD LOST: Information gap.&lt;/span&gt;
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
        {/* Conclusion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center"
        >
          <div className="inline-block p-8 bg-gold/5 border border-gold/20 rounded-xl max-w-2xl">
            <p className="text-warm-gray leading-relaxed mb-4">
              Different roles. Same moment.
            </p>
            <p className="text-xl text-warm-gray font-medium leading-relaxed">
              The second the bot sounds confident in the wrong situation, it becomes <span className="text-gold-dark">everyone&apos;s problem</span>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
