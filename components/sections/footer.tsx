"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Shield, Lock, Mail } from "lucide-react"

const links = [
  { label: "Case Studies", href: "/case-studies", icon: Shield },
  { label: "Privacy Policy", href: "/privacy-policy", icon: Lock },
  { label: "Contact", href: "/contact", icon: Mail },
]

export function Footer() {
  return (
    <footer className="py-12 lg:py-16 bg-[#faf9f6] border-t border-sand">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-12 lg:gap-24 mb-12">
          {/* Left - Brand & Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1 max-w-lg"
          >
            <div className="mb-6">
              <Image
                src="/images/image.png"
                alt="VoiShift Logo"
                width={120}
                height={40}
                className="h-10 w-auto opacity-80"
              />
            </div>
            <p className="text-sm md:text-md text-warm-gray leading-relaxed mb-4">
              VoiShift turns voice AI from a speaking layer into a business system that holds up when reality gets messy.
            </p>
            <p className="text-xs font-black text-gold uppercase tracking-[0.2em]">
              You can rent a voice. You cannot rent ownership of what is true.
            </p>
          </motion.div>

          {/* Right - Resources & Callout */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-12 lg:gap-16 shrink-0"
          >
            <div>
              <h3 className="text-[10px] font-black text-warm-gray/40 uppercase tracking-[0.3em] mb-6">
                Resources
              </h3>
              <div className="flex flex-col gap-3">
                {links.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-sm text-warm-gray hover:text-gold transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <link.icon className="w-3.5 h-3.5 text-sand-dark group-hover:text-gold transition-colors" />
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="max-w-[220px]">
              <p className="text-sm text-warm-gray-light leading-relaxed italic font-serif opacity-80">
                "So before you scale fluency, ask yourself: When it speaks with confidence, will you know why?"
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-sand/50 flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <p className="text-[10px] font-bold text-warm-gray/30 uppercase tracking-widest">
            © {new Date().getFullYear()} VoiShift. All rights reserved.
          </p>
          <div className="flex items-center gap-2 opacity-40">
            <Shield className="w-3 h-3 text-warm-gray" />
            <span className="text-[9px] font-black text-warm-gray uppercase tracking-[0.2em]">Built for Trust</span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
