"use client"

import { motion } from "framer-motion"
import { Award, FileText, Users, MessageSquare, Shuffle, Copy } from "lucide-react"

const surfaceFixes = [
  { text: "A demo that works", icon: Award },
  { text: "A bot that sounds confident", icon: MessageSquare },
  { text: "A rollout that looks finished", icon: FileText },
]

const messyTruth = [
  { text: "Rules live in documents", icon: FileText },
  { text: "Exceptions live in people", icon: Users },
  { text: "Updates live in Slack", icon: MessageSquare },
  { text: "Reality lives somewhere in between", icon: Shuffle },
]

const botCopies = [
  "The shortcuts",
  "The contradictions",
  "The unwritten rules",
]

const notCopies = [
  "Not your intent",
  "Not your policy",
  "Not what you meant to be correct",
]

export function Threat() {
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
            Why this threat exists
          </h2>
          <p className="text-xl text-warm-gray-light max-w-2xl mx-auto">
            Because surface fixes get rewarded.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left column - The problem */}
          <div className="space-y-7">
            {/* Surface fixes */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-card rounded-xl border border-border p-6 shadow-sm"
            >
              <h3 className="text-sm font-bold text-black uppercase tracking-wider mb-4">
                What gets rewarded
              </h3>
              <div className="space-y-3">
                {surfaceFixes.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4 text-gold-dark" />
                    </div>
                    <span className="text-sm text-warm-gray">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-card rounded-xl border border-border p-6 shadow-sm"
            >
              <h3 className="text-sm font-bold text-black uppercase tracking-wider mb-4">
                Fluency feels like certainty.
              </h3>
              <div className="gap-4">
                <p className="text-warm-gray-light text-sm">So nobody slows down to ask what is actually true.</p>
              </div>
            </motion.div>

            {/* Messy truth */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-card rounded-xl border border-border p-6 shadow-sm"
            >
              <h3 className="text-sm font-bold text-black uppercase tracking-wider mb-4">
                But the truth is messy
              </h3>
              <div className="space-y-2">
                {messyTruth.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded bg-muted flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4 text-warm-gray-light" />
                    </div>
                    <span className="text-sm text-warm-gray">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right column - The consequence */}
          <div className="space-y-10">
            {/* Human vs AI behavior */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-card rounded-xl border border-border p-6 shadow-sm"
            >
              <h3 className="text-xl font-medium text-warm-gray-light uppercase tracking-wider mb-4">
                The critical difference
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <p className="text-md font-medium text-warm-gray mb-2">Humans</p>
                  <p className="text-warm-gray-light text-md">Hesitate when things do not line up</p>
                </div>
                <div className="p-4 bg-destructive/5 rounded-lg border border-destructive/10">
                  <p className="text-md font-medium text-warm-gray mb-2">Voice AI</p>
                  <p className="text-warm-gray-light text-md">Does not hesitate. Fills the gap. Improvises. Sounds sure.</p>
                </div>
              </div>
            </motion.div>

            {/* What bot copies */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-card rounded-xl border border-border p-6 shadow-sm"
            >
              <div className="flex items-center gap-4 mb-4">
                <Copy className="w-5 h-5 text-gold-dark" />
                <h3 className="text-xl font-medium text-warm-gray-light uppercase tracking-wider">
                  What the bot will copy
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-md text-warm-gray-light mb-2">Copies</p>
                  {botCopies.map((item, index) => (
                    <p key={index} className="text-warm-gray py-1">{item}</p>
                  ))}
                </div>
                <div>
                  <p className="text-md text-warm-gray-light mb-2">Not</p>
                  {notCopies.map((item, index) => (
                    <p key={index} className="text-warm-gray-light py-1 line-through opacity-60">{item}</p>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Conclusion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-6 bg-gold/5 border border-gold/20 rounded-xl max-w-2xl">
            <p className="text-xl text-warm-gray leading-relaxed">
              That is why this problem is <span className="text-gold-dark font-medium">structural</span>.
            </p>
            <p className="text-warm-gray-light mt-2">
              And why it only shows up once the bot starts sounding good.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
