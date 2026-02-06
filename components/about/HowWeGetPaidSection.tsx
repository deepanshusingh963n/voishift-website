import { motion } from "framer-motion";
import { X, Check, Milestone, Package, Presentation, ShieldCheck, Hand, Search, TrendingDown } from "lucide-react";

const notPaidFor = [
  { icon: Milestone, text: "Milestones checked" },
  { icon: Package, text: "Features shipped" },
  { icon: Presentation, text: "Demos delivered" },
];

const paidForProof = [
  { icon: Hand, text: "Guessing has stopped" },
  { icon: ShieldCheck, text: "Refusal paths are enforced" },
  { icon: Search, text: "Decisions can be traced" },
  { icon: TrendingDown, text: "Risk is reduced before scale" },
];

export const HowWeGetPaidSection = () => {
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
            How We Get Paid
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
            Proof, <span className="text-primary">Not Promises</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Not paid for */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card-elevated p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-destructive/10 rounded-full flex items-center justify-center">
                <X className="w-5 h-5 text-destructive" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">We do not get paid for:</h3>
            </div>
            <div className="space-y-4">
              {notPaidFor.map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-sand/30 rounded-lg"
                >
                  <item.icon className="w-5 h-5 text-charcoal-muted" />
                  <span className="text-charcoal-muted line-through">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Paid on proof */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card-interactive p-8 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <Check className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">We get paid on proof:</h3>
            </div>
            <div className="space-y-4">
              {paidForProof.map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-card rounded-lg border border-primary/10"
                >
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="font-medium text-foreground">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-xl font-medium text-foreground">
            If the system cannot hold up under stress,{" "}
            <span className="text-primary">the work is not finished.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};
