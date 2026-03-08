"use client"

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Repeat, Zap, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useModal } from "@/context/modal-context";
import Logo from "@/public/logo.svg";

import { navLinks } from "@/constants/nav-data";

export const Navbar = () => {
  const { openModal } = useModal();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeHover, setActiveHover] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-cream/95 backdrop-blur-md shadow-sm border-b border-border"
        : "bg-transparent text-black"
        }`}
      suppressHydrationWarning
    >
      <div className="max-w-7xl mx-auto px-1">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <Image
              src="/logo2.png"
              alt="VoiShift"
              width={120}
              height={40}
              className="h-16 w-auto"
              priority
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-10" suppressHydrationWarning>
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative h-20 flex items-center"
                onMouseEnter={() => setActiveHover(link.label)}
                onMouseLeave={() => setActiveHover(null)}
              >
                <a
                  href={link.href}
                  className="text-md md:text-sm lg:text-md font-medium hover:text-gold transition-colors text-center justify-center duration-200 flex items-center gap-1"
                  suppressHydrationWarning
                >
                  {link.label}
                  {/* {link.sections && <ChevronDown size={14} className={`transition-transform duration-200 ${activeHover === link.label ? 'rotate-180' : ''}`} />} */}
                </a>

                {/* Mega Menu */}
                {link.sections && (
                  <AnimatePresence>
                    {activeHover === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-20 left-1/2 -translate-x-1/2 w-[540px] bg-white border border-border shadow-xl rounded-xl overflow-hidden z-[60]"
                      >
                        <div className="flex">
                          {/* Sidebar Section */}
                          {link.sidebarContent && (
                            <div className="w-1/3 bg-cream/30 p-6 border-r border-border">
                              <h3 className="text-xs font-bold uppercase tracking-wider text-warm-gray mb-4">{link.sidebarContent.title}</h3>
                              <div className="space-y-4">
                                <div className="flex items-center gap-3 text-gold">
                                  <link.sidebarContent.icon size={18} />
                                  <span className="font-semibold text-sm">Overview</span>
                                </div>
                                <p className="text-xs text-warm-gray leading-relaxed">
                                  {link.sidebarContent.description}
                                </p>
                                {link.sidebarContent.secondaryLink && (
                                  <div className="pt-4 mt-4 border-t border-border/50">
                                    {link.sidebarContent.secondaryLink.isModalTrigger ? (
                                      <button
                                        onClick={() => openModal()}
                                        className="flex items-center gap-3 text-gold hover:text-black transition-colors group/link w-full text-left"
                                      >
                                        <link.sidebarContent.secondaryLink.icon size={18} />
                                        <span className="font-semibold text-sm group-hover/link:underline">{link.sidebarContent.secondaryLink.label}</span>
                                      </button>
                                    ) : (
                                      <a
                                        href={link.sidebarContent.secondaryLink.href}
                                        className="flex items-center gap-3 text-gold hover:text-black transition-colors group/link"
                                      >
                                        <link.sidebarContent.secondaryLink.icon size={18} />
                                        <span className="font-semibold text-sm group-hover/link:underline">{link.sidebarContent.secondaryLink.label}</span>
                                      </a>
                                    )}
                                  </div>
                                )}
                              </div>
                            </div>
                          )}

                          {/* Links Grid */}
                          <div className={`${link.sidebarContent ? 'w-2/3' : 'w-full'} p-6 grid grid-cols-1 gap-4`}>
                            {link.sections.map((section) => (
                              <a
                                key={section.href}
                                href={section.href}
                                className="group flex items-start gap-4 p-3 rounded-lg hover:bg-cream/50 transition-all duration-200"
                              >
                                <div className="mt-1 p-2 bg-cream group-hover:bg-white rounded-md text-gold transition-colors">
                                  <section.icon size={18} />
                                </div>
                                <div>
                                  <div className="text-sm font-bold text-black border-none group-hover:text-gold transition-colors">
                                    {section.title}
                                  </div>
                                  <div className="text-xs text-warm-gray mt-1 leading-snug">
                                    {section.description}
                                  </div>
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>

                        {/* Bottom Footer or CTA */}
                        {link.sidebarContent && (
                          <div className="bg-cream/50 p-4 border-t border-border flex justify-between items-center">
                            <span className="text-[10px] text-warm-gray font-medium uppercase tracking-widest">{link.sidebarContent.footerText}</span>
                            <a href={link.sidebarContent.footerLink} className="text-xs font-bold text-gold hover:underline flex items-center gap-1">
                              {link.sidebarContent.footerLabel} <ChevronDown size={12} className="-rotate-90" />
                            </a>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              variant="hero"
              size="sm"
              onClick={() => openModal()}
            >
              Book Strategy Session
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-warm-gray hover:text-gold transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-cream border-t border-border"
          >
            <div className="max-w-6xl mx-auto px-6 py-6 space-y-4">
              {navLinks.map((link) => {
                const isContact = link.href === "/contact";
                return (
                  <a
                    key={link.href}
                    href={isContact ? "#" : link.href}
                    onClick={(e) => {
                      if (isContact) {
                        e.preventDefault();
                        openModal();
                      }
                      setIsMobileMenuOpen(false);
                    }}
                    className="block py-2 text-base font-medium text-warm-gray hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                );
              })}
              <div className="pt-4 space-y-3">
                <Button
                  variant="hero"
                  className="w-full"
                  onClick={() => {
                    openModal();
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Book Strategy Session
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
