import { motion } from "framer-motion";
import { useState } from "react";
import { RefreshCw, Clock, ArrowRight, Shield } from "lucide-react";

const paths = [
  {
    id: "rebuilders",
    icon: RefreshCw,
    title: "Teams stuck rebuilding",
    subtitle: "After trying voice automation",
    story: [
      "They worked with an agency.",
      "They launched something that sounded ready.",
      "And then the real work began.",
    ],
    pain: [
      "Rounds of corrections.",
      "Long explanations of nuances no one had captured.",
      "Exceptions that only surfaced after users ran into them.",
    ],
    result: "Each discovery led to another tweak. Sometimes another rebuild. Sometimes another agency.",
    conclusion: "Progress looked constant. Clarity never arrived.",
  },
  {
    id: "waiters",
    icon: Clock,
    title: "Teams stuck waiting",
    subtitle: "Haven't started yet",
    story: [
      "Not because they lack interest—",
      "but because the noise around \"me-too\" voice AI makes the risk feel hard to judge.",
    ],
    pain: [
      "Every solution promises speed.",
      "Every demo sounds confident.",
      "Very few explain what happens when certainty breaks.",
    ],
    result: "So these teams wait. Not out of resistance—but out of caution.",
    conclusion: "They know that once voice AI touches real workflows, reversing damage is harder than preventing it.",
  },
];

const RebuildersVisual = () => (
  <div className="relative w-full aspect-square max-w-[340px] mx-auto hidden md:block">
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative w-64 h-64">
        {/* Structural Lattice */}
        <svg viewBox="0 0 100 100" className="w-full h-full text-warm-gray/10">
          <pattern id="lattice-grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
          <circle cx="50" cy="50" r="48" fill="url(#lattice-grid)" stroke="currentColor" strokeWidth="1" />
        </svg>

        {/* Rebuilding Structure */}
        <div className="absolute inset-0 flex items-center justify-center p-8">
          <div className="relative w-full h-full">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: [0.2, 0.8, 0.2],
                  scale: [1, 1.05, 1],
                  borderWidth: ["1px", "2px", "1px"]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 border border-warm-gray rounded-lg"
                style={{
                  transform: `rotate(${i * 15}deg)`,
                  opacity: 0.4
                }}
              />
            ))}

            {/* Active Lock-in Visual */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-24 h-24 border-2 border-gold rounded-full flex items-center justify-center"
              >
                <RefreshCw className="w-10 h-10 text-gold-dark" />
              </motion.div>
            </div>

            {/* Floating Connection Points */}
            {[
              { t: '10%', l: '20%', d: 3.5 },
              { t: '30%', l: '70%', d: 4.2 },
              { t: '50%', l: '40%', d: 3.8 },
              { t: '80%', l: '10%', d: 4.5 },
              { t: '20%', l: '50%', d: 3.2 },
              { t: '60%', l: '80%', d: 4.8 },
              { t: '40%', l: '15%', d: 3.6 },
              { t: '70%', l: '60%', d: 4.1 },
            ].map((point, i) => (
              <motion.div
                key={`point-${i}`}
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.3, 1, 0.3]
                }}
                transition={{
                  duration: point.d,
                  repeat: Infinity,
                  delay: i * 0.3
                }}
                className="absolute w-1.5 h-1.5 bg-gold rounded-full"
                style={{
                  top: point.t,
                  left: point.l
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Technical Labels */}
    <div className="absolute top-0 right-0 p-4">
      <span className="text-[8px] font-mono text-warm-gray opacity-40 uppercase tracking-[0.2em]">State: Recursive_Refinement</span>
    </div>
    <div className="absolute bottom-0 left-0 p-4">
      <span className="text-[8px] font-mono text-warm-gray opacity-40 uppercase tracking-[0.2em]">Build_ID: RE_STRUCT_04</span>
    </div>
  </div>
);

const WaitersVisual = () => (
  <div className="relative w-full aspect-square max-w-[340px] mx-auto hidden md:block">
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative w-64 h-64">
        {/* Rigid Grid */}
        <div className="absolute inset-0 border border-warm-gray/20 rounded-2xl bg-[#faf9f6] overflow-hidden">
          <div className="absolute inset-0 opacity-[0.2]"
            style={{
              backgroundImage: `radial-gradient(circle at center, #303030 1px, transparent 1px)`,
              backgroundSize: '16px 16px'
            }}
          />

          {/* Frozen Data Blocks */}
          <div className="grid grid-cols-4 grid-rows-4 gap-4 p-8 h-full opacity-40">
            {[...Array(16)].map((_, i) => (
              <div
                key={i}
                className="bg-warm-gray/10 border border-warm-gray/20 rounded-md"
              />
            ))}
          </div>

          {/* Scanning Inertia Beam */}
          <motion.div
            animate={{ top: ["-10%", "110%"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent shadow-[0_0_15px_rgba(226,167,70,0.5)] z-10"
          />

          {/* Centered Stagnation Lock */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gold/10 blur-2xl rounded-full animate-pulse" />
              <div className="relative w-28 h-28 border-4 border-warm-gray/80 rounded-2xl bg-white flex flex-col items-center justify-center shadow-2xl">
                <Clock className="w-12 h-12 text-warm-gray mb-2" />
                <div className="w-12 h-1 bg-warm-gray/10 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Technical Labels */}
    <div className="absolute top-0 left-0 p-4">
      <span className="text-[8px] font-mono text-warm-gray opacity-40 uppercase tracking-[0.2em]">Status: Static_Observation</span>
    </div>
    <div className="absolute bottom-0 right-0 p-4">
      <span className="text-[8px] font-mono text-warm-gray opacity-40 uppercase tracking-[0.2em]">Risk_Buffer: MAX</span>
    </div>
  </div>
);

export const WhyWeExistSection = () => {
  const [activePath, setActivePath] = useState("rebuilders");
  const activeData = paths.find((p) => p.id === activePath)!;

  return (
    <section className="py-20 lg:py-24 bg-[#faf9f6]/80 relative overflow-hidden">
      {/* Background markup */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full border-l border-sand" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-8 items-center mb-16">
          <div className="h-px bg-sand flex-1" />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="inline-block px-3 py-1 bg-gold/5 border border-gold/10 rounded-full text-[10px] font-black tracking-[0.3em] text-gold uppercase mb-4">
              Our Thesis
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-black text-warm-gray leading-tight">
              Why We Exist
            </h2>
          </motion.div>
          <div className="h-px bg-sand flex-1" />
        </div>

        <div className="text-center mb-12">
          <p className="text-lg md:text-xl text-warm-gray-light max-w-2xl mx-auto">
            Because teams are stuck between <span className="text-gold font-bold">rebuilding and standing still.</span>
          </p>
        </div>

        {/* Dynamic Selector */}
        <div className="flex justify-center gap-6 mb-16">
          {paths.map((path) => (
            <button
              key={path.id}
              onClick={() => setActivePath(path.id)}
              className={`group flex items-center gap-4 px-8 py-5 rounded-[0.5rem] border transition-all duration-500 ${activePath === path.id
                ? "bg-white border-gold shadow-2xl scale-105"
                : "bg-transparent border-sand hover:border-gold/30"
                }`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${activePath === path.id ? "bg-gold text-white" : "bg-white border border-sand text-warm-gray/30 group-hover:bg-gold/5"
                }`}>
                <path.icon className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className={`text-sm font-black uppercase tracking-widest ${activePath === path.id ? "text-warm-gray" : "text-warm-gray/40"
                  }`}>
                  {path.title}
                </p>
                <p className="text-[10px] text-warm-gray/30 font-bold uppercase tracking-widest leading-none mt-1">
                  {path.subtitle}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Content Split */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div
            key={activePath}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {activePath === "rebuilders" ? <RebuildersVisual /> : <WaitersVisual />}
          </motion.div>

          <motion.div
            key={`${activePath}-content`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-white p-10 lg:p-14 rounded-[0.5rem] border border-sand shadow-sm hover:shadow-xl transition-shadow duration-500 overflow-hidden">
              {/* Pattern overlay */}
              <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
                <svg width="100%" height="100%">
                  <pattern id="card-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#card-pattern)" />
                </svg>
              </div>

              <div className="relative z-10">
                <div className="grid md:grid-cols-2 gap-10">
                  <div>
                    <h3 className="text-[10px] font-black text-gold uppercase tracking-[0.4em] mb-6">The Story</h3>
                    <div className="space-y-4">
                      {activeData.story.map((line, i) => (
                        <p key={i} className="text-lg text-warm-gray-light leading-relaxed font-serif italic selection:bg-gold/20">
                          "{line}"
                        </p>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-[10px] font-black text-warm-gray/40 uppercase tracking-[0.4em] mb-6">The Reality</h3>
                    <div className="space-y-4">
                      {activeData.pain.map((line, i) => (
                        <div key={i} className="flex gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                          <p className="text-sm font-medium text-warm-gray leading-snug">{line}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-10 border-t border-sand">
                  <p className="text-warm-gray-light text-md italic mb-4 opacity-60">{activeData.result}</p>
                  <p className="text-2xl font-serif font-black text-warm-gray tracking-tight leading-none bg-gradient-to-r from-gold to-gold-dark bg-clip-text text-transparent">
                    {activeData.conclusion}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Shared Problem Visual Bridge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-24 max-w-4xl mx-auto"
        >
          <div className="group relative bg-[#1a1a1a] p-12 lg:p-16 rounded-[0 rem] text-center overflow-hidden shadow-2xl">
            {/* Visual pathway background */}
            <div className="absolute inset-0 opacity-10">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 10, repeat: Infinity }}
                className="absolute inset-x-0 top-1/2 h-32 bg-gold/40 border-y-2 border-dashed border-gold blur-3xl -translate-y-1/2"
              />
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full mb-8">
                <Shield className="w-3 h-3 text-gold" />
                <span className="text-[9px] font-black text-gold uppercase tracking-widest">Shared Resolution</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-serif font-black text-white mb-8 tracking-tight">
                Both groups face the same problem.
              </h3>

              <div className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-24 mb-10">
                <div className="text-center group/item">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 transition-colors group-hover/item:border-gold/50">
                    <RefreshCw className="w-8 h-8 text-warm-gray-light" />
                  </div>
                  <p className="text-[10px] font-black text-warm-gray-light uppercase tracking-widest">Stuck Rebuilding</p>
                </div>

                <div className="hidden md:flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-gold" />
                  <div className="h-px w-32 bg-gradient-to-r from-gold via-white/20 to-gold" />
                  <div className="w-2 h-2 rounded-full bg-gold" />
                </div>

                <div className="text-center group/item">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 transition-colors group-hover/item:border-gold/50">
                    <Clock className="w-8 h-8 text-warm-gray-light" />
                  </div>
                  <p className="text-[10px] font-black text-warm-gray-light uppercase tracking-widest">Stuck Waiting</p>
                </div>
              </div>

              <p className="text-xl md:text-2xl text-warm-gray-light leading-relaxed font-serif italic max-w-2xl mx-auto selection:bg-gold/20">
                VoiShift exists to give both a clear path forward—one that replaces <span className="text-gold not-italic font-bold">guesswork with structure</span> before confidence turns into cost.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
