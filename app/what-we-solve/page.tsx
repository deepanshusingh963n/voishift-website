import { Metadata } from 'next'
import { Navbar } from "@/components/sections/navbar"
import { WhatWeSolveSection } from "@/components/what-we-solve/WhatWeSolveSection"
import { Threat } from "@/components/what-we-solve/threat"
import RentingAI from "@/components/what-we-solve/RentingAI"
import BuildingIsOwning from "@/components/what-we-solve/BuildingIsOwning"
import { VoiShiftIntro } from "@/components/what-we-solve/voisshift-intro"
import { Footer } from "@/components/sections/footer"
import { BuiltForTeams } from "@/components/what-we-solve/built-for-teams"

export const metadata: Metadata = {
  title: 'What We Solve | VoiShift',
  description: 'Explore the specific voice AI challenges VoiShift solves: from revenue recovery to operational efficiency and system safety.',
  openGraph: {
    title: 'What We Solve | VoiShift',
    description: 'Explore the specific voice AI challenges VoiShift solves: from revenue recovery to operational efficiency and system safety.',
  },
  twitter: {
    title: 'What We Solve | VoiShift',
    description: 'Explore the specific voice AI challenges VoiShift solves: from revenue recovery to operational efficiency and system safety.',
  },
}

export default function WhatWeSolve() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Section 1: Hero + Sub-hero */}
      <WhatWeSolveSection />

      <Threat />

      <RentingAI />

      <BuildingIsOwning />

      <BuiltForTeams />

      <VoiShiftIntro />

      <Footer />

    </main>
  )
}
