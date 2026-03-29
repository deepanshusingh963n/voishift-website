import { Metadata } from 'next'
import { Navbar } from "@/components/sections/navbar"
import { WhatWeSolveSection } from "@/components/what-we-solve/WhatWeSolveSection"
import { Threat } from "@/components/what-we-solve/threat"
import BuyVsBuild from "@/components/what-we-solve/Buy-vs-build"
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
  alternates: {
    canonical: '/what-we-solve',
  },
  twitter: {
    title: 'What We Solve | VoiShift',
    description: 'Explore the specific voice AI challenges VoiShift solves: from revenue recovery to operational efficiency and system safety.',
  },
}

export default function WhatWeSolve() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://voishiftai.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "What We Solve",
                "item": "https://voishiftai.com/what-we-solve"
              }
            ]
          })
        }}
      />
      <Navbar />

      {/* Section 1: Hero + Sub-hero */}
      <WhatWeSolveSection />

      <Threat />

      <BuyVsBuild />

      <BuiltForTeams />

      <VoiShiftIntro />

      <Footer />

    </main>
  )
}
