import { motion } from "framer-motion";
import { useState } from "react";
import { RefreshCw, Clock, ArrowRight } from "lucide-react";

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

export const WhyWeExistSection = () => {
  const [activePath, setActivePath] = useState("rebuilders");
  const activeData = paths.find((p) => p.id === activePath)!;

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
            Why We Exist
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Because teams are stuck between{" "}
            <span className="text-primary">rebuilding and standing still</span>
          </h2>
        </motion.div>

        {/* Path selector */}
        <div className="flex justify-center gap-4 mb-12">
          {paths.map((path) => (
            <motion.button
              key={path.id}
              onClick={() => setActivePath(path.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`flex items-center gap-3 px-6 py-4 rounded-xl border-2 transition-all duration-300 ${activePath === path.id
                  ? "border-primary bg-primary/5 shadow-gold"
                  : "border-border bg-card hover:border-primary/30"
                }`}
            >
              <path.icon
                className={`w-5 h-5 ${activePath === path.id ? "text-primary" : "text-charcoal-muted"
                  }`}
              />
              <div className="text-left">
                <p
                  className={`font-medium ${activePath === path.id ? "text-foreground" : "text-charcoal-light"
                    }`}
                >
                  {path.title}
                </p>
                <p className="text-sm text-charcoal-muted">{path.subtitle}</p>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Story content */}
        <motion.div
          key={activePath}
          initial={{ opacity: 0, x: activePath === "rebuilders" ? -20 : 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="card-elevated p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Story */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">The story</h3>
                <div className="space-y-2 mb-6">
                  {activeData.story.map((line, i) => (
                    <p key={i} className="text-charcoal-light">
                      {line}
                    </p>
                  ))}
                </div>
              </div>

              {/* Pain points */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">The reality</h3>
                <div className="space-y-2 mb-6">
                  {activeData.pain.map((line, i) => (
                    <p key={i} className="text-charcoal-light flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-t border-border pt-6 mt-6">
              <p className="text-charcoal-light italic mb-2">{activeData.result}</p>
              <p className="text-lg font-medium text-primary">{activeData.conclusion}</p>
            </div>
          </div>
        </motion.div>

        {/* Shared problem */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 text-center max-w-3xl mx-auto"
        >
          <div className="card-interactive p-8 bg-gradient-to-br from-primary/5 to-transparent">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Both groups face the same problem.
            </h3>
            <div className="flex items-center justify-center gap-8 mb-6">
              <div className="text-center">
                <RefreshCw className="w-8 h-8 text-charcoal-muted mx-auto mb-2" />
                <p className="text-charcoal-light">One is stuck rebuilding</p>
              </div>
              <ArrowRight className="w-6 h-6 text-primary" />
              <div className="text-center">
                <Clock className="w-8 h-8 text-charcoal-muted mx-auto mb-2" />
                <p className="text-charcoal-light">The other is stuck waiting</p>
              </div>
            </div>
            <p className="text-lg text-foreground">
              VoiShift exists to give both a clear path forward—one that replaces{" "}
              <span className="text-primary font-medium">guesswork with structure</span> before
              confidence turns into cost.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
