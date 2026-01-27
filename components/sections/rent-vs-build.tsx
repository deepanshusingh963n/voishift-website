"use client"

import { motion } from "framer-motion"
import { Check, AlertCircle, Database, RefreshCw, FileSearch, BarChart3 } from "lucide-react"

const rentFine = [
  "You need speed",
  "The agent only answers",
  "No actions. No exceptions. No downstream impact.",
]

const rentRisk = [
  "The agent can act",
  "Rules change",
  "Exceptions appear",
  "Teams disagree",
  "No one can explain why it did what it did",
]

const minimumOwnership = [
  { text: "One agreed source of truth", icon: Database },
  { text: "A clear change process when rules shift", icon: RefreshCw },
  { text: "Proof of what the agent relied on", icon: FileSearch },
  { text: "A way to measure drift before users feel it", icon: BarChart3 },
]

export function RentVsBuild() {
  return (
    <section className="py-24 lg:py-32 bg-cream-light">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-warm-gray leading-tight mb-6 text-balance">
            Rent vs build is not the real decision
          </h2>
          <p className="text-xl text-gold-dark font-medium">
            You can rent a voice. You cannot rent ownership of what is true.
          </p>
        </motion.div>

        {/* Two column comparison */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* When renting is fine */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-card rounded-xl border border-border p-8 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                <Check className="w-5 h-5 text-green-700" />
              </div>
              <h3 className="text-lg font-medium text-warm-gray">When renting is fine</h3>
            </div>
            <ul className="space-y-3">
              {rentFine.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-green-700" />
                  </div>
                  <span className="text-warm-gray-light">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* When renting becomes risk */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-card rounded-xl border border-destructive/20 p-8 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-destructive" />
              </div>
              <h3 className="text-lg font-medium text-warm-gray">When renting becomes risk</h3>
            </div>
            <ul className="space-y-3">
              {rentRisk.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <AlertCircle className="w-3 h-3 text-destructive" />
                  </div>
                  <span className="text-warm-gray-light">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-warm-gray-light italic">
              That is not a tooling problem. That is an ownership problem.
            </p>
          </motion.div>
        </div>

        {/* Minimum ownership line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
          className="bg-gold/5 border border-gold/20 rounded-xl p-8"
        >
          <h3 className="text-xl font-medium text-warm-gray mb-2 text-center">The minimum ownership line</h3>
          <p className="text-warm-gray-light text-center mb-8">Even if you rent, you still need:</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {minimumOwnership.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-lg border border-border p-4 text-center"
              >
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-5 h-5 text-gold-dark" />
                </div>
                <p className="text-sm text-warm-gray">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <p className="text-center mt-8 text-warm-gray-light">
            Without that, you do not have automation. <span className="text-warm-gray font-medium">You have dependency.</span>
          </p>
        </motion.div>

        {/* Final question */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-block p-6 bg-card rounded-xl border border-border">
            <p className="text-warm-gray-light mb-2">The question is not &quot;Should we build or buy?&quot;</p>
            <p className="text-xl text-warm-gray font-medium">
              It is &quot;When this goes wrong, who actually knows why?&quot;
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
