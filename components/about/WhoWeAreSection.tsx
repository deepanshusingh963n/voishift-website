import { motion } from "framer-motion";
import { Cpu, Briefcase, Scale, Zap, CheckCircle } from "lucide-react";

const betweenItems = [
  { left: "AI capability", right: "business reality", icon: Cpu },
  { left: "Automation", right: "accountability", icon: Briefcase },
  { left: "Fluency", right: "correctness", icon: Scale },
];

export const WhoWeAreSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Who We Are
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            A system-first voice AI team focused on{" "}
            <span className="text-primary">real-world behavior</span>
          </h2>
        </motion.div>

        {/* Between section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <p className="text-center text-lg text-charcoal-light mb-8">Our work sits between:</p>
          <div className="space-y-4">
            {betweenItems.map((item, index) => (
              <motion.div
                key={item.left}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center justify-center gap-4"
              >
                <div className="flex-1 text-right">
                  <span className="text-lg font-medium text-foreground">{item.left}</span>
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1 text-left">
                  <span className="text-lg font-medium text-foreground">{item.right}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Core belief */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="card-elevated p-8 text-center bg-gradient-to-br from-primary/5 to-transparent">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Zap className="w-8 h-8 text-primary" />
            </div>
            <p className="text-xl text-foreground leading-relaxed">
              We care less about how impressive something sounds
              <br />
              and more about whether it{" "}
              <span className="text-primary font-semibold">holds up under pressure.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
