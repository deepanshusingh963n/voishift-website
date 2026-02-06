import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useModal } from "@/context/modal-context";
import {
  ChevronDown,
  ChevronUp,
  Brain,
  AlertTriangle,
  Zap,
  Target,
  Handshake,
  GitBranch,
  Users,
  MessageSquare,
  Mail,
} from "lucide-react";

const youFitIf = [
  { icon: Brain, text: "Think beyond features and ask how systems actually behave" },
  { icon: AlertTriangle, text: "Challenge assumptions when they slow things down or hide risk" },
  { icon: Zap, text: "Care about efficiency, clarity, and long-term impact" },
  { icon: Target, text: "Take ownership of outcomes, not just tasks" },
];

const thatMeans = [
  { icon: Target, text: "You decide what deserves focus" },
  { icon: GitBranch, text: "You align your work with the company's goals" },
  { icon: Users, text: "You bring the right people along early" },
  { icon: MessageSquare, text: "You seek feedback, course-correct fast, and keep moving" },
];

export const CareersSection = () => {
  const { openModal } = useModal();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-24 bg-cream-dark/50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header with expand/collapse */}
          <div
            onClick={() => setIsExpanded(!isExpanded)}
            className="card-interactive p-8 cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div>
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Careers
                </span>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                  Careers at VoiShift
                </h2>
                <p className="text-charcoal-light mt-2">
                  We are building voice AI systems for teams where mistakes matter.
                </p>
              </div>
              <div className="w-12 h-12 bg-foreground/90 rounded-full flex items-center justify-center shrink-0">
                {isExpanded ? (
                  <ChevronUp className="w-6 h-6 text-primary" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-primary" />
                )}
              </div>
            </div>
          </div>

          {/* Expanded content */}
          <motion.div
            initial={false}
            animate={{
              height: isExpanded ? "auto" : 0,
              opacity: isExpanded ? 1 : 0,
            }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden"
          >
            <div className="card-elevated p-8 mt-4 border-t-4 border-primary">
              <p className="text-lg text-charcoal-light mb-6">
                That means we optimize less for how impressive something looks, and more for whether
                it creates clarity, reduces friction, and holds up under real pressure.
              </p>

              <p className="text-foreground font-medium mb-4">
                VoiShift is a place for people who are willing to question defaults—not to be
                contrarian, but to make things work better.
              </p>

              {/* You will fit here if */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  You will fit here if you:
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {youFitIf.map((item, index) => (
                    <motion.div
                      key={item.text}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-start gap-3 p-3 bg-primary/5 rounded-lg"
                    >
                      <item.icon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* High trust environment */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  We work with a high degree of trust and responsibility.
                </h3>
                <p className="text-charcoal-light mb-4">That means:</p>
                <div className="grid md:grid-cols-2 gap-3">
                  {thatMeans.map((item, index) => (
                    <div key={item.text} className="flex items-start gap-3 p-3 bg-sand/50 rounded-lg">
                      <item.icon className="w-5 h-5 text-charcoal-muted shrink-0 mt-0.5" />
                      <span className="text-sm text-charcoal-light">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Not for everyone */}
              <div className="border-l-4 border-primary pl-6 mb-8">
                <p className="text-charcoal-light italic mb-2">
                  There is little hand-holding, and no predefined script. Progress comes from
                  judgment, discipline, and follow-through.
                </p>
                <p className="text-foreground font-medium">
                  This is not a place for people looking to be told what to do next. It is a place
                  for people who want to build something meaningful—and are willing to hold
                  themselves accountable for it.
                </p>
              </div>

              {/* Hiring note */}
              <div className="bg-gradient-to-br from-primary/5 to-transparent p-6 rounded-xl mb-6">
                <p className="text-charcoal-light mb-2">
                  We are not always hiring for specific roles. But when we find people who think and
                  work this way, we make room.
                </p>
                <p className="text-foreground font-medium">
                  If this resonates, reach out. Tell us how you approach problems, not just what
                  you've worked on.
                </p>
              </div>

              <Button
                variant="hero"
                className="w-full md:w-auto"
                onClick={openModal}
              >
                <Mail className="mr-2 w-4 h-4" />
                Get in touch
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
