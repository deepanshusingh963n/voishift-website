import { Navbar } from "@/components/sections/navbar"
import { Hero } from "@/components/sections/hero"
import { SubHero } from "@/components/sections/sub-hero"
import { WhoThisHits2 } from "@/components/sections/who-this-hits2"
import { LogoStrip } from "@/components/sections/logo-strip"
import { WhatWeDo } from "@/components/sections/what-we-do"
import { CaseStudies } from "@/components/sections/case-studies"
import { Diagnostic } from "@/components/sections/diagnostic"
import { Engage } from "@/components/sections/engage"
import { FAQ } from "@/components/sections/faq"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Section 1: Hero + Sub-hero */}
      <Hero />

      <SubHero />

      <WhoThisHits2 />

      <WhatWeDo />

      {/* Logo Strip */}
      <LogoStrip />

      {/* Case Studies Section */}
      <CaseStudies />

      {/* Section 9: Diagnostic */}
      <Diagnostic />

      {/* Section 10: Two ways to engage */}
      <Engage />

      {/* Section 11: FAQ */}
      <section id="faq">
        <FAQ />
      </section>

      {/* Section 12: Footer */}
      <Footer />


    </main>
  )
}
