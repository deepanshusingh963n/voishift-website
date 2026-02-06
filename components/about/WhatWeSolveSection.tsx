import { motion } from "framer-motion";
import { useState } from "react";
import {
  AlertTriangle,
  FileQuestion,
  ShieldAlert,
  HelpCircle,
  CheckCircle,
  XCircle,
  Lock,
  Hand,
  ArrowUpRight,
  RotateCcw,
} from "lucide-react";

const problems = [
  { icon: AlertTriangle, text: "When rules disagree" },
  { icon: FileQuestion, text: "When exceptions are undocumented" },
  { icon: ShieldAlert, text: "When confidence hides missing checks" },
  { icon: HelpCircle, text: "When no one can explain why the agent did what it did" },
];

const solutions = [
  { icon: Lock, text: "Act only on approved truth" },
  { icon: Hand, text: "Refuse cleanly when certainty is missing" },
  { icon: ArrowUpRight, text: "Escalate instead of improvising" },
  { icon: RotateCcw, text: "Can be replayed, reviewed, and corrected" },
];

const forTeams = [
  "Voice AI can take action, not just answer",
  "Wrong actions cost more than slow ones",
  "Someone must explain outcomes internally or externally",
  '"Why did it do that?" is not acceptable',
];

const typicalTeams = [
  "Operations-led organizations",
  "Support and CX teams at scale",
  "Product, engineering, and compliance leaders",
];

const notForTeams = [
  "A fast demo",
  "A talking widget",
  "Automation without ownership",
  "Speed without restraint",
];

export const WhatWeSolveSection = () => {
  const [activeTab, setActiveTab] = useState<"for" | "not">("for");

  return (
    <section className="py-24 bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            What We Solve
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            The problem that appears{" "}
            <span className="text-primary">after the bot starts sounding good</span>
          </h2>
        </motion.div>

        {/* Problems grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.text}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-elevated p-6 group hover:border-destructive/30 transition-colors"
            >
              <problem.icon className="w-8 h-8 text-destructive/70 mb-4 group-hover:text-destructive transition-colors" />
              <p className="font-medium text-foreground">{problem.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-xl font-semibold text-center text-foreground mb-8">
            We design voice AI systems that:
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.text}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-interactive p-6 text-center bg-gradient-to-br from-primary/5 to-transparent"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <solution.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="font-medium text-foreground">{solution.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* For Whom - Interactive Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex justify-center gap-2 mb-8">
            <button
              onClick={() => setActiveTab("for")}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${activeTab === "for"
                  ? "bg-primary text-primary-foreground shadow-gold"
                  : "bg-card border border-border text-charcoal-light hover:border-primary/30"
                }`}
            >
              <CheckCircle className="w-5 h-5" />
              Who this is for
            </button>
            <button
              onClick={() => setActiveTab("not")}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${activeTab === "not"
                  ? "bg-charcoal text-cream shadow-medium"
                  : "bg-card border border-border text-charcoal-light hover:border-charcoal/30"
                }`}
            >
              <XCircle className="w-5 h-5" />
              Who this is not for
            </button>
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`card-elevated p-8 ${activeTab === "not" ? "border-charcoal/20" : "border-primary/20"
              }`}
          >
            {activeTab === "for" ? (
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-4">
                    VoiShift is for teams where:
                  </h4>
                  <ul className="space-y-3">
                    {forTeams.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-charcoal-light">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-4">Typically:</h4>
                  <ul className="space-y-3">
                    {typicalTeams.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
                        <span className="text-charcoal-light">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  This is not for teams looking for:
                </h4>
                <ul className="space-y-3 mb-6">
                  {notForTeams.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-charcoal-muted shrink-0 mt-0.5" />
                      <span className="text-charcoal-light">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-lg font-medium text-foreground border-t border-border pt-6">
                  If confident guesses are acceptable, we are not the right partner.
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
