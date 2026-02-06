"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Shield, Lock, Mail } from "lucide-react"

const links = [
  { label: "Trust Center", href: "/#trust", icon: Shield },
  { label: "Privacy", href: "/#privacy", icon: Lock },
  { label: "Contact", href: "/#contact", icon: Mail },
]

export function Footer() {
  return (
    <footer className="py-16 lg:py-24 bg-sand border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-12">
          {/* Left - Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="mb-6">
              <Image
                src="/images/image.png"
                alt="VoiShift Logo"
                width={140}
                height={50}
                className="h-12 w-auto"
              />
            </div>
            <p className="text-warm-gray leading-relaxed mb-4">
              VoiShift turns voice AI from a speaking layer into a business system that holds up when reality gets messy.
            </p>
            <p className="text-gold-dark font-medium mb-6">
              You can rent a voice. You cannot rent ownership of what is true.
            </p>
            <p className="text-warm-gray-light italic">
              So before you scale fluency, ask yourself: When it speaks with confidence, will you know why?
            </p>
          </motion.div>

          {/* Right - Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-sm font-medium text-warm-gray-light uppercase tracking-wider mb-6">
              Resources
            </h3>
            <div className="space-y-4">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="flex items-center gap-3 text-warm-gray hover:text-gold-dark transition-colors duration-200 group"
                >
                  <div className="w-8 h-8 rounded bg-muted group-hover:bg-gold/10 flex items-center justify-center transition-colors duration-200">
                    <link.icon className="w-4 h-4 text-warm-gray-light group-hover:text-gold-dark transition-colors duration-200" />
                  </div>
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm text-warm-gray-light">
            © {new Date().getFullYear()} VoiShift. All rights reserved.
          </p>
          <p className="text-sm text-warm-gray-light">
            Built for teams who build for trust.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
