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
      "Some teams have already tried voice automation.",
      "They worked with an agency.",
      "They launched something that sounded ready.",
      "And then the real work began.",
    ],
    pain: [
      "Corrections.",
      "Re-explaining nuances nobody captured.",
      "Exceptions that only surfaced after real users hit them.",
    ],
    result: "Each fix revealed another edge case. Another tweak. Sometimes another rebuild. Sometimes another vendor.",
    conclusion: "From the outside, it looked like progress. Inside, clarity never arrived.",
  },
  {
    id: "waiters",
    icon: Clock,
    title: "Teams stuck waiting",
    subtitle: "Haven't started yet",
    story: [
      "Other teams have not started yet, not because they lack interest,",
      "but because the noise around me-too voice AI makes the risk hard to judge.",
    ],
    pain: [
      "Every solution promises speed.",
      "Every demo sounds confident.",
      "Very few explain what happens when certainty breaks.",
    ],
    result: "So they wait, not out of resistance, but out of caution.",
    conclusion: "They know that once voice AI touches real workflows, undoing damage is harder than preventing it.",
  },
];


export const WhyWeExistSection = () => {
  const [activePath, setActivePath] = useState("rebuilders");
  const activeData = paths.find((p) => p.id === activePath)!;

  return (
    <section className="py-20 lg:py-24 bg-white relative overflow-hidden">
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
            <h2 className="text-3xl md:text-5xl font-serif font-black text-gold leading-tight">
              Our Mission
            </h2>
          </motion.div>
          <div className="h-px bg-sand flex-1" />
        </div>

        <div className="text-center mb-16">
          <p className="text-lg md:text-xl text-warm-gray-light max-w-4xl mx-auto italic font-serif">
            We are on a mission to become the execution partner of preference for teams who have already been burned by a voice AI rollout that sounded ready but failed in real workflows, and for teams who want voice AI but hesitate because the risk of choosing the wrong vendor feels higher than the upside.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* LEFT COLUMN: Interactive Mission Paths */}
          <div className="text-center border border-gold p-6 rounded-[0rem]">
            <div className="space-y-2">
            
              <div className="flex flex-wrap justify-center gap-4">
                {paths.map((path) => (
                  <button
                    key={path.id}
                    onClick={() => setActivePath(path.id)}
                    className={`group flex items-center gap-4 px-6 py-4 rounded-[0rem] border transition-all duration-500 ${activePath === path.id
                      ? "bg-white border-gold shadow-xl scale-105"
                      : "bg-transparent border-gold hover:border-gold/30"
                      }`}
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${activePath === path.id ? "bg-gold text-white" : "bg-white border border-sand text-warm-gray/30 group-hover:bg-gold/5"
                      }`}>
                      <path.icon className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <p className={`text-[10px] font-black uppercase tracking-widest ${activePath === path.id ? "text-warm-gray" : "text-warm-gray/50"
                      }`}>
                      {path.title}
                    </p>
                    <p className="text-[7px] text-warm-gray/50 font-bold uppercase tracking-widest leading-none mt-1">
                      {path.subtitle}
                    </p>
                  </div>
                </button>
              ))}
            </div>
            <motion.div
              key={`${activePath}-content`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="bg-white p-8 lg:p-10 shadow-sm transition-shadow duration-500 overflow-hidden">
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
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-[12px] font-black text-gold uppercase tracking-[0.4em] mb-4">The Story</h3>
                      <div className="space-y-3">
                        {activeData.story.map((line, i) => (
                          <p key={i} className="text-sm text-left text-warm-gray-light leading-relaxed font-serif italic selection:bg-gold/20">
                            "{line}"
                          </p>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-[12px] font-black text-warm-gray/40 uppercase tracking-[0.4em] mb-4">The Reality</h3>
                      <div className="space-y-3">
                        {activeData.pain.map((line, i) => (
                          <div key={i} className="flex gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                              <p className="text-sm font-medium text-warm-gray leading-snug text-left">{line}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 pt-8">
                      <p className="text-warm-gray-light text-sm italic mb-4 opacity-60">{activeData.result}</p>
                      <p className="text-xl font-serif font-black text-warm-gray tracking-tight leading-tight bg-gradient-to-r from-gold to-gold-dark bg-clip-text text-transparent">
                        {activeData.conclusion}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* RIGHT COLUMN: Shared Problem Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <div className="group relative bg-[#1a1a1a] p-10 lg:p-9 h-full rounded-none text-center overflow-hidden shadow-2xl flex flex-col justify-center">
              {/* Visual pathway background */}
              <div className="absolute inset-0 opacity-10">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 10, repeat: Infinity }}
                  className="absolute inset-x-0 top-1/2 h-32 bg-gold/40 border-y-2 border-dashed border-gold blur-3xl -translate-y-1/2"
                />
              </div>

              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-serif font-black text-gold mb-8 tracking-tight">
                  Both groups face the same problem.
                </h3>

                <div className="flex items-center justify-center gap-8 lg:gap-12 mb-10">
                  <div className="text-center group/item">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 transition-colors group-hover/item:border-gold/50">
                      <RefreshCw className="w-6 h-6 text-white/70" />
                    </div>
                    <p className="text-[7px] font-black text-white/70 uppercase tracking-widest">Stuck Rebuilding</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-gold" />
                    <div className="h-px w-12 bg-gradient-to-r from-gold via-white/20 to-gold" />
                    <div className="w-1 h-1 rounded-full bg-gold" />
                  </div>

                  <div className="text-center group/item">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 transition-colors group-hover/item:border-gold/50">
                      <Clock className="w-6 h-6 text-white/70" />
                    </div>
                    <p className="text-[7px] font-black text-white/70 uppercase tracking-widest">Stuck Waiting</p>
                  </div>
                </div>

                <p className="text-lg text-white/70 leading-relaxed font-serif italic max-w-lg mx-auto selection:bg-gold/20 mb-8">
                  VoiShift exists to give both a clear path forward, one that replaces guesswork with structure before confidence turns into cost.
                </p>
                
                <div className="max-w-md mx-auto p-6 rounded-none bg-white/5 border border-white/10 backdrop-blur-sm">
                  <p className="text-sm text-gold font-serif italic leading-relaxed">
                    "Our mission is to build system-first voice AI that holds up under pressure, stays correct when things get messy, and earns trust through behavior, not demos."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
