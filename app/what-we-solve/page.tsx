import { Navbar } from "@/components/sections/navbar"
import { WhatWeSolveSection } from "@/components/what-we-solve/WhatWeSolveSection"
import { Threat } from "@/components/what-we-solve/threat"
import { VoiShiftIntro } from "@/components/what-we-solve/voisshift-intro"
import { Footer } from "@/components/sections/footer"

export default function WhatWeSolve() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Section 1: Hero + Sub-hero */}
      <WhatWeSolveSection />

      <Threat />

      <VoiShiftIntro />

      <Footer />

    </main>
  )
}
