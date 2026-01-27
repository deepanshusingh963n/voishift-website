"use client"

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background with warm overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-office-meeting-discussion-3159/1080p.mp4"
            type="video/mp4"
          />
        </video>
        {/* Warm cream/gold overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-cream/90 via-cream/85 to-cream/95" />
      </div>

      <div className="relative z-10 section-container py-32 lg:py-40">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Main headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-8">
              If you are copying the world with a voice bot,{" "}
              <span className="text-primary">
                you may be copying the world's blind spots too.
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="space-y-4 text-lg md:text-xl text-charcoal-light mb-8"
          >
            <p>
              Everyone is just following everyone else, installing a voice bot
              like a widget.
            </p>
            <p>A quick win. A clean demo. A bot that sounds ready.</p>
            <p>That is how it starts.</p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-xl md:text-2xl font-medium text-primary mb-12 max-w-2xl mx-auto"
          >
            Most teams set rules. Very few know when the bot quietly stopped
            following the right one.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="hero" size="xl" className="rounded-full bg-black text-white">
              I need a system, not a bot
              <ArrowRight className="ml-2" />
            </Button>
            <Button variant="heroSecondary" size="xl" className="rounded-full text-black">
              <Shield className="mr-2" />
              Stress Test My Current Build
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-charcoal-muted flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 rounded-full bg-charcoal-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}
