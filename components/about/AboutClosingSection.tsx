import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Sparkles, Calendar } from "lucide-react";
import { useModal } from "@/context/modal-context";

export const AboutClosingSection = () => {
  const { openModal } = useModal();

  return (
    <section className="py-24 bg-background">
      <div className="section-container">
        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="max-w-3xl mx-auto">
            <p className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
              You can rent a voice.
            </p>
            <p className="text-2xl md:text-3xl font-semibold text-primary mb-8">
              You cannot rent ownership of what is true.
            </p>
            <div className="section-divider mb-8" />
            <p className="text-xl text-charcoal-light mb-4">
              Voice AI will speak with confidence.
            </p>
            <p className="text-xl font-medium text-foreground">
              The question is whether that confidence is{" "}
              <span className="text-primary">earned.</span>
            </p>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-4">
            Two ways to start
          </h2>
          <p className="text-center text-charcoal-light mb-12">
            Both focused on clarity.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Starting fresh */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card-interactive p-8 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-charcoal-muted">Starting fresh</p>
                  <h3 className="text-xl font-semibold text-foreground">Voice AI Strategy Session</h3>
                </div>
              </div>
              <p className="text-charcoal-light mb-6">
                Decide where automation makes sense—and where it does not.
              </p>
              <Button
                variant="hero"
                className="w-full group-hover:shadow-gold transition-shadow"
                onClick={openModal}
              >
                <Calendar className="mr-2 w-4 h-4" />
                Book the strategy session
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>

            {/* Already live */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card-interactive p-8 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-charcoal/10 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-charcoal" />
                </div>
                <div>
                  <p className="text-sm text-charcoal-muted">Already live</p>
                  <h3 className="text-xl font-semibold text-foreground">Voice AI Stress Test</h3>
                </div>
              </div>
              <p className="text-charcoal-light mb-6">
                Find where the system will guess before users feel it.
              </p>
              <Button
                variant="heroSecondary"
                className="w-full"
                onClick={openModal}
              >
                <Shield className="mr-2 w-4 h-4" />
                Stress test my current build
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          </div>

          <p className="text-center text-charcoal-muted mt-8">
            No sales decks. No pressure. Just clarity you can stand behind.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
