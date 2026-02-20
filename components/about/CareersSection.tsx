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

          <motion.div
            initial={false}
            animate={{
              height: isExpanded ? "auto" : 0,
              opacity: isExpanded ? 1 : 0,
            }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden"
          >
            <div className="card-elevated p-10 mt-4 border-t-4 border-gold bg-[#faf9f6]">
              <div className="max-w-3xl mx-auto space-y-12">
                <div className="space-y-6">
                  <h3 className="text-3xl md:text-4xl font-serif font-black text-warm-gray leading-tight">
                    Not hiring workers, but <span className="text-gold italic">torchbearers</span> with skin in.
                  </h3>
                  <p className="text-lg md:text-xl text-warm-gray-light font-serif italic leading-relaxed">
                    If you want real ownership, meaningful ESOPs, and work you can point to years from now and say, "I helped build that," you are exactly who we want to talk to.
                  </p>
                </div>

                <div className="h-px bg-sand/50 w-full" />

                <div className="space-y-8">
                  <p className="text-lg text-warm-gray font-serif leading-relaxed">
                    Pick anyone on this page, connect on LinkedIn, and tell us one thing: <br />
                    <span className="text-gold font-bold italic">What would you fix first, and why should it be you doing it?</span>
                  </p>
                  
                  <div className="bg-white/50 border border-sand p-6 rounded-xl">
                    <p className="text-foreground font-black uppercase tracking-tight text-lg mb-2">
                      If you make yourself impossible to ignore, we will find you a seat.
                    </p>
                    <p className="text-xs font-mono text-warm-gray-light uppercase tracking-widest">
                      No applications. No roles. Just initiative.
                    </p>
                  </div>

                  <Button
                    variant="hero"
                    className="w-full md:w-auto bg-[#1a1a1a] text-white hover:bg-gold py-8 px-10 rounded-xl transition-all duration-500 font-serif text-xl shadow-xl"
                    onClick={openModal}
                  >
                    Make yourself impossible to ignore - connect on LinkedIn
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
