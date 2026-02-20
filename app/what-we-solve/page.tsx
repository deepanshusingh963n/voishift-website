import { Navbar } from "@/components/sections/navbar"
import { WhatWeSolveSection } from "@/components/what-we-solve/WhatWeSolveSection"
import { Threat } from "@/components/what-we-solve/threat"
import { VoiShiftIntro } from "@/components/what-we-solve/voisshift-intro"
import { Footer } from "@/components/sections/footer"
import { BuiltForTeams } from "@/components/what-we-solve/built-for-teams"

export default function WhatWeSolve() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Section 1: Hero + Sub-hero */}
      <WhatWeSolveSection />

      <Threat />

      <BuiltForTeams />

      <VoiShiftIntro />

      <Footer />

    </main>
  )
}
