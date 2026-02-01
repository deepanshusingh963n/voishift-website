"use client"

import { motion } from "framer-motion"
import { Lock, ShieldOff, TestTube, Zap, Settings, BarChart3, RefreshCw, Users, Plug, Eye, RotateCcw } from "lucide-react"

const disciplines = [
  {
    title: "Controlled truth",
    description: "The agent speaks only from sources the business has actually approved. No guessing. No helpful improvisation.",
    icon: Lock,
  },
  {
    title: "Designed refusal",
    description: "Refusal is planned upfront, not patched later. If it cannot be sure, it stops cleanly.",
    icon: ShieldOff,
  },
  {
    title: "Real evaluation",
    description: "We test against your calls, your tickets, your edge cases. Not demos. Not benchmarks.",
    icon: TestTube,
  },
  {
    title: "Long-tail first",
    description: "The rare cases are treated as the main job. That is where trust usually breaks.",
    icon: Zap,
  },
]

const scaleSteps = [
  { text: "Define what the agent can do, confirm, refuse, escalate", icon: Settings },
  { text: "Measure what it actually did in real situations", icon: BarChart3 },
  { text: "Review drift, changes, and new failure paths", icon: RefreshCw },
  { text: "Own corrections before they hit customers or teams", icon: Users },
]

const lifecycle = ["Design", "Test", "Scale", "Optimize"]

const fitFeatures = [
  { text: "Plugs into what you already run", icon: Plug },
  { text: "Deploy where you need it", icon: Settings },
  { text: "Every action can be replayed and explained", icon: Eye },
]

export function Differentiation() {
  return (
    <section className="py-24 lg:py-32 bg-cream-dark">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-warm-gray leading-tight mb-6 text-balance">
            What makes VoiShift different
          </h2>
          <p className="text-xl text-warm-gray-light max-w-2xl mx-auto">
            Most teams make voice AI sound smart. We make it behave safely when things break.
          </p>
        </motion.div>

        {/* Four disciplines grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-sm font-medium text-gold-dark uppercase tracking-wider mb-6 text-center">
            Four disciplines most builds skip
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {disciplines.map((discipline, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl border border-border p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                  <discipline.icon className="w-6 h-6 text-gold-dark" />
                </div>
                <h4 className="text-lg font-medium text-warm-gray mb-2 text-center">{discipline.title}</h4>
                <p className="text-sm text-warm-gray-light leading-relaxed text-center">{discipline.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* How this stays sane at scale */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-card rounded-xl border border-border p-8 shadow-sm"
          >
            <h3 className="text-lg font-medium text-warm-gray mb-6">How this stays sane at scale</h3>
            <div className="space-y-4">
              {scaleSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <step.icon className="w-4 h-4 text-gold-dark" />
                  </div>
                  <span className="text-warm-gray-light">{step.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8"
          >
            {/* Lifecycle */}
            <div className="bg-card rounded-xl border border-border p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <RotateCcw className="w-5 h-5 text-gold-dark" />
                <h3 className="text-lg font-medium text-warm-gray">Lifecycle, not a launch</h3>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {lifecycle.map((stage, index) => (
                  <div key={index} className="flex items-center">
                    <span className="px-3 py-1.5 bg-gold/10 text-gold-dark text-sm rounded-lg">{stage}</span>
                    {index < lifecycle.length - 1 && (
                      <span className="mx-2 text-warm-gray-light">→</span>
                    )}
                  </div>
                ))}
              </div>
              <p className="text-warm-gray-light text-sm">
                Voice AI is reviewed like a system, not shipped like a feature.
              </p>
            </div>

            {/* Fits your reality */}
            <div className="bg-card rounded-xl border border-border p-8 shadow-sm">
              <h3 className="text-lg font-medium text-warm-gray mb-4">Fits your reality</h3>
              <div className="space-y-3">
                {fitFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded bg-muted flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-3.5 h-3.5 text-warm-gray-light" />
                    </div>
                    <span className="text-warm-gray-light text-sm">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-serif mb-12">The Anatomy of a Fix</h2>

          <div className="overflow-x-auto">
            <div className="min-w-[800px] grid grid-cols-4 gap-0 border border-black/10 rounded-lg overflow-hidden text-sm">
              <div className="bg-gray-50 p-4 font-medium border-b border-r border-black/10">Failure Mode</div>
              <div className="bg-gray-50 p-4 font-medium border-b border-r border-black/10">Why it broke</div>
              <div className="bg-gray-50 p-4 font-medium border-b border-r border-black/10">VoiShift Fix</div>
              <div className="bg-gray-50 p-4 font-medium border-b border-black/10">Result</div>

              {/* Row 1 */}
              <div className="p-4 border-r border-b border-black/10 text-red-600 bg-red-50/10">"I can offer you a full refund." (False promise)</div>
              <div className="p-4 border-r border-b border-black/10 text-muted-foreground">LLM hallucinated policy based on training data overlap.</div>
              <div className="p-4 border-r border-b border-black/10">Deterministic Policy Layer (RAG + Hard Rules)</div>
              <div className="p-4 border-b border-black/10 text-green-700 bg-green-50/10">0% unauthorized refund rate.</div>

              {/* Row 2 */}
              <div className="p-4 border-r border-black/10 text-red-600 bg-red-50/10">Bot looping "I didn't catch that."</div>
              <div className="p-4 border-r border-black/10 text-muted-foreground">Timeout settings too aggressive for elderly callers.</div>
              <div className="p-4 border-r border-black/10">Adaptive Listening Duration</div>
              <div className="p-4 border-black/10 text-green-700 bg-green-50/10">40% drop in hang-ups.</div>
            </div>
          </div>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-[#2A2A2A] text-white rounded-2xl border-2 border-[#D4AF37]"
          >
            <div className="grid md:grid-cols-2 gap-4 relative p-6">
              <div className="absolute top-0 bottom-0 left-1/2 w-px bg-white/10 -translate-x-1/2 hidden md:block" />

              <div className="pr-0 md:pr-12">
                <h3 className="text-xl font-serif text-white/90">Rent</h3>
                <h4 className="text-white/60 mb-6">(SaaS Wrappers)</h4>
                <ul className="space-y-4 text-white/60">
                  <li className="flex gap-3"><span className="text-red-400">×</span> Fast to start, impossible to scale.</li>
                  <li className="flex gap-3"><span className="text-red-400">×</span> You don't own the data or the model.</li>
                  <li className="flex gap-3"><span className="text-red-400">×</span> Generic prompt injection vulnerabilities.</li>
                </ul>
              </div>

              <div className="pl-0 md:pl-12">
                <h3 className="text-xl font-serif text-primary">Build</h3>
                <h4 className="text-primary/60 mb-6">(Self-Hosted)</h4>
                <ul className="space-y-4 text-white/80">
                  <li className="flex gap-3"><span className="text-primary">✓</span> Modular components you control.</li>
                  <li className="flex gap-3"><span className="text-primary">✓</span> Observability into every decision node.</li>
                  <li className="flex gap-3"><span className="text-primary">✓</span> The "Minimum Ownership Line" is respected.</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border-2 border-[#D4AF37] bg-white p-8 text-center shadow-lg"
          >
            <p className="mb-8 text-2xl font-semibold text-[#D4AF37]">
              You can rent a voice.
            </p>
            <p className="mb-10 text-2xl font-semibold text-[#3A3A3A]">
              You cannot rent ownership of what is true.
            </p>
            <p className="text-lg text-[#5A5A5A]">
              If something goes wrong tomorrow, will you know exactly why,
              <br />
              or will you be guessing after the damage is done?
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
