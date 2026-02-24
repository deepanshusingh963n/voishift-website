"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronUp } from "lucide-react"

export function BackToTopButton() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            setVisible(window.scrollY > 300)
        }
        window.addEventListener("scroll", onScroll, { passive: true })
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <AnimatePresence>
            {visible && (
                <motion.button
                    key="back-to-top"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 16 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    onClick={scrollToTop}
                    aria-label="Back to top"
                    className="
            fixed bottom-6 right-6 z-50
            w-10 h-10 sm:w-11 sm:h-11
            flex items-center justify-center
            bg-warm-gray border border-gold/30
            text-gold rounded-none
            shadow-lg shadow-black/10
            hover:bg-gold hover:text-warm-gray hover:border-gold
            transition-colors duration-200
            group
          "
                >
                    <ChevronUp
                        className="w-5 h-5 transition-transform duration-200 group-hover:-translate-y-0.5"
                    />
                </motion.button>
            )}
        </AnimatePresence>
    )
}
