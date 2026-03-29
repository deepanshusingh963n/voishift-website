import HowHero from "@/components/how-it-works/HowHero"
import PhaseOneOppMap from "@/components/how-it-works/PhaseOneOppMap"
import PhaseTwoSandbox from "@/components/how-it-works/PhaseTwoSandbox"
import PhaseThreeRollout from "@/components/how-it-works/PhaseThreeRollout"
import PaymentModel from "@/components/how-it-works/PaymentModel"
import HowClosingCTA from "@/components/how-it-works/HowClosingCTA"
import { Navbar } from "@/components/sections/navbar"
import { Footer } from "@/components/sections/footer"

export const metadata = {
  title: "How It Works | VoiShift",
  description: "Learn about the VoiShift three-phase process: Opportunity Mapping, Validation Sandbox, and Proof Gated Rollout.",
  openGraph: {
    title: "How It Works | VoiShift",
    description: "Learn about the VoiShift three-phase process: Opportunity Mapping, Validation Sandbox, and Proof Gated Rollout.",
  },
  alternates: {
    canonical: "/how-it-works",
  },
  twitter: {
    title: "How It Works | VoiShift",
    description: "Learn about the VoiShift three-phase process: Opportunity Mapping, Validation Sandbox, and Proof Gated Rollout.",
  },
}

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-cream-dark">
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
                "name": "How It Works",
                "item": "https://voishiftai.com/how-it-works"
              }
            ]
          })
        }}
      />
      <Navbar />
      <HowHero />
      <PhaseOneOppMap />
      <PhaseTwoSandbox />
      <PhaseThreeRollout />
      <PaymentModel />
      <HowClosingCTA />
      <Footer />
    </main>
  )
}
