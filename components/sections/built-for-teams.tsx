"use client"

import { motion } from "framer-motion"
import { Shield, RefreshCcw, AlertTriangle, Lock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const signals = [
  { text: "Fewer repeat calls", icon: RefreshCcw },
  { text: "Less cleanup work", icon: AlertTriangle },
  { text: "Fewer \"why did it do that?\" moments", icon: Shield },
]

export function BuiltForTeams() {
  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-warm-gray leading-tight mb-6 text-balance">
            Built for real-world teams
          </h2>
          <p className="text-xl text-warm-gray-light max-w-3xl mx-auto leading-relaxed">
            Built for teams where wrong actions cost more than slow answers. Used inside environments where voice AI touches live workflows, changing rules, and real consequences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Early Signals */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-sm font-medium text-gold-dark uppercase tracking-wider mb-6">
              Early signals we track
            </h3>
            <div className="space-y-4">
              {signals.map((signal, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border shadow-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <signal.icon className="w-5 h-5 text-gold-dark" />
                  </div>
                  <span className="text-warm-gray">{signal.text}</span>
                </motion.div>
              ))}
            </div>
            <p className="mt-6 text-warm-gray-light italic">
              Because the agent knows when not to act.
            </p>
          </motion.div>

          {/* Security & Trust */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-card rounded-xl border border-border p-8 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center">
                <Lock className="w-6 h-6 text-gold-dark" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-warm-gray">Security First</h3>
                <p className="text-sm text-warm-gray-light">Built-in from day one</p>
              </div>
            </div>
            
            <p className="text-warm-gray-light leading-relaxed mb-6">
              Security, data handling, and audit expectations are treated as constraints from day one, not patches added later.
            </p>

            <Button
              variant="outline"
              className="border-gold/40 text-warm-gray hover:bg-gold/5 rounded-lg transition-all duration-300 bg-transparent"
              asChild
            >
              <a href="#trust">
                Trust Center
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <p className="mt-3 text-xs text-warm-gray-light">
              How we handle data, logs, access, and retention
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
