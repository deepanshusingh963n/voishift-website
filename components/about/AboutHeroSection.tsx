import { motion } from "framer-motion";
import Image from "next/image";
import { Shield, Target, CheckCircle } from "lucide-react";

// Updated DecisionLattice for Dark Mode
const DecisionLattice = () => (
  <div className="absolute inset-0 pointer-events-none opacity-[0.03] overflow-hidden">
    <svg width="100%" height="100%" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice">
      <defs>
        <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
          <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-white" />
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
    <section id="hero" className="relative min-h-[90vh] flex items-center pt-32 lg:pb-24 pb-10 overflow-hidden bg-[#0a0a0a]">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/about-hero-bg.png"
          alt="Technical blueprint structure representing VoiShift system design"
          fill
          priority
          className="object-cover opacity-[0.5] lg:opacity-[0.9]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-90" />
      </div>

      {/* Volumetric Gold Glows */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-gold/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-gold/10 rounded-full blur-[150px] pointer-events-none" />

      <DecisionLattice />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="lg:grid lg:grid-cols-[1.2fr_1fr] lg:gap-20 lg:items-center">

          {/* LEFT PANEL: Narrative */}
          <div className="max-w-2xl mb-20 lg:text-left text-center justify-center lg:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <div className="inline-flex items-center gap-2 mb-8">
                <span className="text-5xl md:text-8xl text-white font-black uppercase leading-[1.05]">What We <span className="text-gold italic">Stand</span> For</span>
              </div>

              <h1 className="text-xl md:text-2xl lg:text-3xl font-serif font-black text-white leading-[1.1] tracking-tight mb-8 transform-none">
                System-first voice AI <span className="text-gold italic block mt-2">for teams that cannot afford</span>
                <span className="block mt-2">hallucinations dressed up as help.</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-8"
            >
              <div className="flex flex-col gap-3 border-l-2 border-gold pl-6 py-1">
                <p className="text-xl md:text-2xl text-white/60 font-serif italic leading-relaxed">
                  Voice AI is easy to deploy.
                </p>
                <p className="text-2xl md:text-3xl font-serif font-black text-white leading-tight">
                  Correct voice AI is not.
                </p>
              </div>

              <p className="text-lg text-white/60 font-serif italic max-w-xl leading-relaxed">
                VoiShift helps teams design voice automation that behaves reliably when rules collide,
                exceptions appear, and clarity disappears.
              </p>
            </motion.div>
          </div>

          {/* RIGHT PANEL: Principles Matrix Pipeline */}
          <div className="flex relative w-full justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative w-full max-w-[440px]"
            >
              {[
                {
                  icon: Target,
                  title: "Not optimizing confidence",
                  description: "We don't optimize how confident the voice layer sounds",
                  phase: "01"
                },
                {
                  icon: Shield,
                  title: "Designed behavior",
                  description: "We design systems that know when to act",
                  phase: "02"
                },
                {
                  icon: CheckCircle,
                  title: "Clear boundaries",
                  description: "When to confirm, and when to stop",
                  phase: "03"
                },
              ].map((item, index, array) => (
                <div key={item.title}>
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
                    className="group relative border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl p-5 md:p-6 flex items-start gap-4 hover:border-gold/40 hover:bg-white/[0.04] transition-all duration-500 shadow-2xl overflow-hidden"
                  >
                    {/* Scanning background logic effect */}
                    <motion.div
                      animate={{ opacity: [0, 0.1, 0] }}
                      transition={{ duration: 4, repeat: Infinity, delay: index * 1.5 }}
                      className="absolute inset-0 bg-gradient-to-r from-gold/30 via-transparent to-transparent pointer-events-none"
                    />

                    <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 border border-white/20 bg-black flex items-center justify-center relative shadow-[inset_0_0_10px_rgba(0,0,0,1)] group-hover:border-gold/60 transition-colors duration-500">
                      <motion.div
                        animate={{ y: ['-100%', '100%'] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.4, ease: "linear" }}
                        className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/20 to-transparent pointer-events-none"
                      />
                      <item.icon className="w-4 h-4 md:w-5 md:h-5 text-gold relative z-10" />
                    </div>

                    <div className="flex-1 min-w-0 z-10 relative">
                      <div className="flex items-center justify-between mb-1.5 md:mb-2">
                        <span className="text-[10px] md:text-[11px] font-mono tracking-[0.2em] text-white/40 uppercase">
                          Rule {item.phase}
                        </span>

                        {/* Live verification dot */}
                        <motion.div
                          animate={{ opacity: [0.4, 1, 0.4] }}
                          transition={{ duration: 2, repeat: Infinity, delay: index * 0.6 }}
                          className="w-1.5 h-1.5 rounded-full bg-[#10B981] shadow-[0_0_8px_rgba(16,185,129,0.8)]"
                        />
                      </div>
                      <h3 className="text-sm md:text-base font-bold text-white tracking-tight">{item.title}</h3>
                      <p className="text-[12px] md:text-[13px] text-white/60 font-serif italic mt-1 leading-relaxed">{item.description}</p>
                    </div>

                    {/* Animated corner accents for structural feel */}
                    <div className="absolute top-0 left-0 w-2 h-px bg-gold/50" />
                    <div className="absolute top-0 left-0 w-px h-2 bg-gold/50" />
                    <div className="absolute bottom-0 right-0 w-2 h-px bg-gold/50" />
                    <div className="absolute bottom-0 right-0 w-px h-2 bg-gold/50" />
                  </motion.div>

                  {/* Connector line between nodes */}
                  {index < array.length - 1 && (
                    <div className="flex justify-center my-2 md:my-3">
                      <div className="relative w-px h-6 md:h-8 bg-white/10 overflow-hidden">
                        {/* Data packet animation */}
                        <motion.div
                          animate={{ y: ["-100%", "300%"] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: index * 0.4 }}
                          className="absolute w-full h-4 bg-gradient-to-b from-transparent via-gold to-transparent"
                        />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
