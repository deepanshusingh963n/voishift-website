import { motion } from "framer-motion";
import { Cpu, Briefcase, Scale, Zap, CheckCircle, ArrowRight, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useModal } from "@/context/modal-context";

const betweenItems = [
  { left: "AI capability", right: "operational reality", icon: Cpu },
  { left: "Automation", right: "accountability", icon: Briefcase },
  { left: "Fluency", right: "correctness", icon: Scale },
];

const practiceItems = [
  {
    title: "Clear boundaries",
    desc: "on what the system can and cannot do",
    icon: Shield,
    visual: () => (
      <div className="relative w-full h-2 bg-sand/20 rounded-full overflow-hidden">
        <motion.div
          animate={{ left: ["-20%", "40%", "-20%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 bottom-0 w-1/3 bg-gold/40 rounded-full"
        />
      </div>
    )
  },
  {
    title: "Escalation rules",
    desc: "for uncertainty and edge cases",
    icon: Zap,
    visual: () => (
      <div className="flex gap-1 justify-center">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
            className={`w-1.5 h-1.5 rounded-full ${i === 4 ? 'bg-red-400' : 'bg-gold/40'}`}
          />
        ))}
      </div>
    )
  },
  {
    title: "Simple ways to verify",
    desc: "correctness, not just fluency",
    icon: CheckCircle,
    visual: () => (
      <div className="flex items-center gap-2 px-3 py-1 bg-white border border-sand rounded-full">
        <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
        <span className="text-[8px] font-black font-mono text-warm-gray tracking-widest">STATUS_VERIFIED</span>
      </div>
    )
  }
];

const EquilibriumBridge = () => (
  <div className="space-y-4 relative">
    {/* Central Fulcrum Line */}
    <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-sand/30 -translate-x-1/2 hidden md:block" />

    {betweenItems.map((item, index) => (
      <motion.div
        key={item.left}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group relative flex flex-col md:flex-row items-center gap-4 md:gap-0"
      >
        <div className="flex-1 text-center md:text-right md:pr-12">
          <span className="text-sm font-black text-warm-gray uppercase tracking-tight group-hover:text-gold transition-colors">
            {item.left}
          </span>
        </div>

        <div className="relative z-10 w-12 h-12 bg-white rounded-full border border-sand flex items-center justify-center shadow-sm group-hover:border-gold-dark group-hover:scale-110 transition-all duration-500">
          <item.icon className="w-5 h-5 text-gold/60 group-hover:text-gold transition-colors" />

          {/* Connection dots */}
          <div className="absolute left-[-20px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-sand/40 hidden md:block" />
          <div className="absolute right-[-20px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-sand/40 hidden md:block" />
        </div>

        <div className="flex-1 text-center md:text-left md:pl-12">
          <span className="text-sm font-black text-warm-gray uppercase tracking-tight group-hover:text-gold transition-colors">
            {item.right}
          </span>
        </div>

      </motion.div>
    ))}
  </div>
);

export const WhoWeAreSection = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 items-center mb-12">
          {/* Headline & Narrative - Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-black text-warm-gray leading-[1.1] tracking-tight mb-8">
              Who We Are
            </h2>
            <p className="text-2xl font-serif font-black text-warm-gray leading-tight mb-6">
              We are a system-first voice AI team.
            </p>
            <p className="text-lg text-warm-gray-light font-serif italic max-w-md mb-6 transition-all duration-500">
              We build voice systems that behave reliably in real situations, not just in controlled demos.
            </p>
            <p className="text-lg text-warm-gray-light font-serif italic max-w-md">
              Our work sits in the gap between raw AI capability and operational reality, so what you deploy stays consistent, checkable, and usable by real teams.
            </p>
          </motion.div>

          {/* Equilibrium Bridge - Right */}
          <div className="relative pt-12">
            <EquilibriumBridge />
          </div>
        </div>

        {/* Practice Grid */}
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-xl md:text-2xl font-serif italic text-gold mb-8">
              We care less about how impressive something sounds and more about whether it holds up under pressure.
            </p>
            
            <div className="inline-flex items-center gap-2 px-3 py-1">
              <span className="text-4xl font-black text-warm-gray">What that means in practice</span>
            </div>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-4">
            {practiceItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-cream border border-sand rounded-[1.5rem] p-6 hover:bg-white hover:border-gold/30 hover:shadow-xl transition-all duration-500 group"
              >
                <div className="flex items-start gap-5">
    
                  {/* Icon */}
                  <div className="w-12 h-12 bg-white rounded-xl border border-sand flex items-center justify-center group-hover:bg-gold transition-colors duration-500 shrink-0">
                    <item.icon className="w-6 h-6 text-gold group-hover:text-white transition-colors" />
                  </div>

                  {/* Text */}
                  <div>
                    <h4 className="text-lg font-black text-warm-gray uppercase tracking-tighter mb-2">
                      {item.title}
                    </h4>
                    <p className="text-warm-gray-light font-serif italic leading-snug">
                      {item.desc}
                    </p>
                    <div className="pt-4 border-t border-sand/30">
                      <item.visual />
                    </div>
                  </div>
                </div>
              </motion.div>

            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
