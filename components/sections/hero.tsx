"use client"

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";
import { useModal } from "@/context/modal-context";
import { useRef, useState, useEffect } from "react";

/* --- v2.0 System Logic Engine Illustration --- */

const list = [
  "Interactional DNA.",
  "Decision Intelligence.",
  "Workflow Precision.",
  "Contextual Relevance.",
  "Conversational Branching.",
  "Human Edge in Automation.",
]

export function Hero() {
  const { openModal } = useModal();
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {

    if (charIndex < list[currentIndex].length) {
      const typing = setTimeout(() => {
        setDisplayText(prev => prev + list[currentIndex][charIndex])
        setCharIndex(prev => prev + 1)
      }, 40)

      return () => clearTimeout(typing)
    }

    const pause = setTimeout(() => {
      setDisplayText("")
      setCharIndex(0)
      setCurrentIndex(prev => (prev + 1) % list.length)
    }, 2000)

    return () => clearTimeout(pause)

  }, [charIndex, currentIndex])

  return (
    <section ref={targetRef} className="relative min-h-screen flex items-center bg-warm-gray overflow-hidden pt-20">
      {/* Atmospheric Video (Low Opacity) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-[0.8] mix-blend-multiply"
        >
          <source src="/Merged VDOs.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-cream-light/40 via-transparent to-cream-light" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col items-center justify-center w-full">

          {/* CENTER: System Narrative */}
          <motion.div style={{ y, opacity }} className="flex flex-col items-center text-center max-w-7xl mx-auto">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="w-full flex flex-col items-center"
            >
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-white leading-[1.5] mb-5 text-center">
                Human edge isn’t a defect to automate away. <br /> It’s the moat to build around.
                <span className="text-gold uppercase text-5xl md:text-7xl lg:text-9xl block mt-2">
                  OWN YOUR OWN
                </span>
              </h1>

              <div className="text-gold text-[1.5rem] md:text-[2.5rem] lg:text-[3rem] flex flex-col md:flex-row items-center justify-center gap-x-4 min-h-[4rem] md:min-h-0 mb-5">
                Enterprise
                <span className="text-black bg-gold px-2 rounded-md italic font-light whitespace-nowrap inline-flex items-center">
                  {displayText}

                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="ml-1"
                  >
                    |
                  </motion.span>

                </span>

              </div>
            </motion.div>


            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full"
            >
              <Button
                size="xl"
                className="w-full sm:w-auto py-6 px-10 text-md font-serif bg-white/70 text-warm-gray hover:bg-gold hover:text-[#1a1a1a] transition-all duration-500 shadow-2xl group/btn active:scale-95 border-2 border-[#1a1a1a]"
                onClick={() => openModal()}
              >
                I need a system, not a bot
                <ArrowRight className="ml-3 h-8 w-8 group-hover/btn:translate-x-3 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 hidden md:block"
      >
        <div className="flex flex-col items-center gap-3">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-4 h-8 rounded-full border-2 border-sand flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 rounded-full bg-gold"
            />
          </motion.div>
        </div>
      </motion.div>

    </section>
  );
}