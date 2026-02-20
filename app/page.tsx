import { Navbar } from "@/components/sections/navbar"
import { Hero } from "@/components/sections/hero"
import { SubHero } from "@/components/sections/sub-hero"
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

      {/* Section 2: Who this hits */}
      {/* <WhoThisHits /> */}

      {/* Section 3: Built for real-world teams */}
      {/* <BuiltForTeams /> */}

      {/* Section 4: VoiShift intro */}
      {/* <VoiShiftIntro /> */}



      {/* Section 5: Why this threat exists */}
      {/* <Threat /> */}

      {/* Section 6: What makes VoiShift different */}
      {/* <section id="differentiation">
        <Differentiation />
      </section> */}

      {/* Section 7: Rent vs Build */}
      {/* <section id="rent-vs-build">
        <RentVsBuild />
      </section> */}

      {/* Section 8: Proof that holds up */}
      {/* <section id="proof">
        <Proof />
      </section> */}
      
    </main>
  )
}
