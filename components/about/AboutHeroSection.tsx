import { motion } from "framer-motion";
import { Shield, Target, CheckCircle } from "lucide-react";

export const AboutHeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center pt-32 pb-20 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-cream-dark/30 to-cream" />

      {/* Decorative elements */}
      <div className="absolute top-40 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-gold-light/10 rounded-full blur-2xl" />

      <div className="relative z-10 section-container">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              What We Stand For
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center leading-tight mb-8"
          >
            System-first voice AI for teams that{" "}
            <span className="text-primary">cannot afford confident mistakes</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-2xl mx-auto text-center space-y-4 mb-12"
          >
            <p className="text-xl text-charcoal-light">
              Voice AI is easy to deploy.
            </p>
            <p className="text-xl font-medium text-foreground">
              Correct voice AI is not.
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg text-charcoal-light text-center max-w-3xl mx-auto mb-16"
          >
            VoiShift helps teams design voice automation that behaves reliably when rules collide,
            exceptions appear, and clarity disappears.
          </motion.p>

          {/* Key principles */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
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
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="card-elevated p-6 text-center"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-charcoal-light">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
