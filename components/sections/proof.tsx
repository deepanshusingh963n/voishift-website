"use client"

import { motion } from "framer-motion"
import { AlertTriangle, Search, Wrench, TrendingUp, FileCheck, Map, Target, TestTube, RotateCcw } from "lucide-react"

const failureDetails = {
  what: "The agent sounded confident. The outcome was wrong.",
  broke: [
    "Two sources disagreed",
    "An exception was missing",
    "The agent guessed and kept going",
  ],
  changed: [
    "Truth was locked",
    "Refusal was defined",
    "Actions were gated",
  ],
  improved: [
    "Fewer repeat calls",
    "Fewer cleanups",
    "Fewer escalations",
    "Faster resolution when things got messy",
  ],
}

const deliverables = [
  { text: "A system blueprint", icon: FileCheck },
  { text: "A boundary map of what the agent can and cannot do", icon: Map },
  { text: "A stress test report showing where it will fail today", icon: Target },
  { text: "Evaluation results you can rerun after every change", icon: RotateCcw },
]

export function Proof() {
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
            Proof that holds up
          </h2>
          <p className="text-xl text-warm-gray-light max-w-2xl mx-auto">
            We do not bring opinions. We bring evidence from your own reality.
          </p>
        </motion.div>

        {/* Postmortem / Replay style layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
          className="bg-card rounded-xl border border-border overflow-hidden shadow-sm mb-12"
        >
          {/* Header */}
          <div className="bg-muted/50 px-6 py-4 border-b border-border flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-destructive/60" />
            <span className="text-sm font-medium text-warm-gray">Incident Replay</span>
          </div>

          <div className="p-6 lg:p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* What the failure looked like */}
              <div className="p-4 bg-destructive/5 rounded-lg border border-destructive/10">
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle className="w-4 h-4 text-destructive" />
                  <span className="text-xs font-medium text-destructive uppercase tracking-wider">Failure</span>
                </div>
                <p className="text-warm-gray text-sm">{failureDetails.what}</p>
              </div>

              {/* What broke */}
              <div className="p-4 bg-muted/50 rounded-lg border border-border">
                <div className="flex items-center gap-2 mb-3">
                  <Search className="w-4 h-4 text-warm-gray-light" />
                  <span className="text-xs font-medium text-warm-gray-light uppercase tracking-wider">Root Cause</span>
                </div>
                <ul className="space-y-1">
                  {failureDetails.broke.map((item, i) => (
                    <li key={i} className="text-warm-gray text-sm">• {item}</li>
                  ))}
                </ul>
              </div>

              {/* What changed */}
              <div className="p-4 bg-gold/5 rounded-lg border border-gold/20">
                <div className="flex items-center gap-2 mb-3">
                  <Wrench className="w-4 h-4 text-gold-dark" />
                  <span className="text-xs font-medium text-gold-dark uppercase tracking-wider">Resolution</span>
                </div>
                <ul className="space-y-1">
                  {failureDetails.changed.map((item, i) => (
                    <li key={i} className="text-warm-gray text-sm">• {item}</li>
                  ))}
                </ul>
              </div>

              {/* What improved */}
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="w-4 h-4 text-green-700" />
                  <span className="text-xs font-medium text-green-700 uppercase tracking-wider">Outcome</span>
                </div>
                <ul className="space-y-1">
                  {failureDetails.improved.map((item, i) => (
                    <li key={i} className="text-green-800 text-sm">• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* What you get back */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h3 className="text-2xl font-serif text-warm-gray mb-6">What you get back</h3>
            <div className="space-y-4">
              {deliverables.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-gold-dark" />
                  </div>
                  <span className="text-warm-gray">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-sand rounded-xl p-8 border border-border">
            <div className="flex items-center gap-3 mb-6">
              <TestTube className="w-6 h-6 text-gold-dark" />
              <h3 className="text-lg font-medium text-warm-gray">Evidence from your reality</h3>
            </div>
            <p className="text-warm-gray-light leading-relaxed mb-6">
              Proof does not come from our demos. It comes from your calls, your workflows, your edge cases.
            </p>
            <div className="p-4 bg-card rounded-lg border border-border">
              <p className="text-warm-gray italic">
                If something goes wrong again, will you have a replay and an answer, or just a post-mortem story?
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
