import { motion } from "framer-motion";
import { Shield, Target, CheckCircle } from "lucide-react";

const DecisionLattice = () => (
  <div className="absolute inset-0 pointer-events-none opacity-[0.05] overflow-hidden">
    <svg width="100%" height="100%" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice">
      <defs>
        <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
          <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-sand" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />

      {/* Automated Decision Flows */}
      {[...Array(6)].map((_, i) => (
        <motion.path
          key={i}
          d={`M ${i * 200},100 Q ${i * 200 + 100},300 ${i * 200},500`}
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          className="text-gold"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0, 0.5, 0] }}
          transition={{ duration: 8, repeat: Infinity, delay: i * 2 }}
        />
      ))}
    </svg>
  </div>
);

export const AboutHeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-24 overflow-hidden bg-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/about-hero-bg.png"
          alt="Technical Structure"
          className="w-full h-full object-cover opacity-[0.4]"
        />
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]" />
      </div>

      <DecisionLattice />

      {/* Blueprint Stamps */}
      <div className="absolute bottom-12 right-12 opacity-[0.03] pointer-events-none">
        <div className="text-sm font-mono font-black tracking-[1em] rotate-90 origin-right uppercase">System_Logic_Integrity</div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/5 border border-gold/10 rounded-full mb-8">
              <span className="text-5xl font-black text-gold uppercase">What We Stand For</span>
            </div>

            <h1 className="text-xl md:text-3xl font-serif font-black text-warm-gray mb-12">
              System-first voice AI <span className="text-gold italic"> for teams that cannot afford</span> <br />
              hallucinations dressed up as help.
            </h1>
          </motion.div>

          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-6"
            >
              <div className="flex flex-col gap-2 border-l-2 border-gold-dark/20 pl-8 py-2">
                <p className="text-2xl text-warm-gray-light font-serif italic">
                  Voice AI is easy to deploy.
                </p>
                <p className="text-3xl font-serif font-black text-warm-gray">
                  Correct voice AI is not.
                </p>
              </div>

              <p className="text-lg text-warm-gray-light font-serif italic max-w-xl leading-relaxed">
                VoiShift helps teams design voice automation that behaves reliably when rules collide,
                exceptions appear, and clarity disappears.
              </p>
            </motion.div>

            {/* Key principles Matrix */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid gap-px bg-sand overflow-hidden border border-sand rounded-lg shadow-2xl"
            >
              {[
                {
                  icon: Target,
                  title: "Not optimizing confidence",
                  description: "We don't optimize how confident the agent sounds",
                },
                {
                  icon: Shield,
                  title: "Designed behavior",
                  description: "We design systems that know when to act",
                },
                {
                  icon: CheckCircle,
                  title: "Clear boundaries",
                  description: "When to confirm, and when to stop",
                },
              ].map((item, index) => (
                <div key={item.title} className="bg-white p-6 relative group hover:bg-[#faf9f6] transition-colors">
                  <div className="flex gap-6 items-start">
                    <div className="w-10 h-10 bg-[#faf9f6] border border-sand rounded-xl flex items-center justify-center shrink-0 text-gold group-hover:bg-gold-dark group-hover:text-white transition-all duration-500">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-black text-warm-gray uppercase tracking-tight mb-1">{item.title}</h3>
                      <p className="text-xs text-warm-gray-light font-serif italic">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
