import { motion } from "framer-motion";
import { useState } from "react";
import {
  MessageSquare,
  Cpu,
  List,
  Eye,
  Pause,
  CheckCheck,
  AlertCircle,
  Search,
  Lock,
  Hand,
  Users,
  RotateCcw,
} from "lucide-react";

const mostStart = [
  { icon: MessageSquare, label: "Prompts" },
  { icon: Cpu, label: "Models" },
  { icon: List, label: "Feature lists" },
];

const weStart = [
  { icon: Eye, label: "Where they pause" },
  { icon: Pause, label: "Where they double-check" },
  { icon: CheckCheck, label: "Where they override rules" },
  { icon: AlertCircle, label: "Where exceptions live" },
];

const whatWeDesign = [
  {
    icon: Lock,
    title: "Controlled truth",
    description: "What the system is allowed to treat as true",
  },
  {
    icon: Hand,
    title: "Designed refusal",
    description: "When the agent must stop",
  },
  {
    icon: Users,
    title: "Clear escalation",
    description: "Who owns uncertainty",
  },
  {
    icon: RotateCcw,
    title: "Replayable decisions",
    description: "So behavior can be explained",
  },
];

export const HowWeDoDifferentlySection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-cream-dark/50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            How We Work
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
            How We Do the Same Things —{" "}
            <span className="text-primary">Differently</span>
          </h2>
        </motion.div>

        {/* Comparison */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Most start with */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card-elevated p-8"
          >
            <h3 className="text-lg font-semibold text-charcoal-muted mb-6">
              Most voice AI builds start with:
            </h3>
            <div className="space-y-4">
              {mostStart.map((item, index) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 p-4 bg-sand/50 rounded-lg opacity-60"
                >
                  <item.icon className="w-6 h-6 text-charcoal-muted" />
                  <span className="text-charcoal-muted">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* We start with */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card-interactive p-8 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent"
          >
            <h3 className="text-lg font-semibold text-foreground mb-2">We start with behavior.</h3>
            <p className="text-charcoal-light mb-6">
              We walk the workflow end to end with the people inside it:
            </p>
            <div className="space-y-4">
              {weStart.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-card rounded-lg border border-primary/10"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium text-foreground">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Key insight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xl text-foreground max-w-3xl mx-auto">
            Those moments are what voice AI will copy—
            <span className="text-primary font-medium">at speed.</span>
          </p>
        </motion.div>

        {/* What we design instead */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-center text-foreground mb-8">
            So instead of optimizing responses, we design:
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatWeDesign.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="card-interactive p-6 text-center cursor-default"
              >
                <motion.div
                  animate={{
                    scale: hoveredIndex === index ? 1.1 : 1,
                    rotate: hoveredIndex === index ? 5 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4"
                >
                  <item.icon className="w-7 h-7 text-primary" />
                </motion.div>
                <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-charcoal-light">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-charcoal-light">
            Same tools. Same models.{" "}
            <span className="text-primary font-medium">A very different outcome.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};
