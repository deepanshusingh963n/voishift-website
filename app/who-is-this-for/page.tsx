import WhoForHero from "@/components/who-is-this-for/whoForhero"
import { WhoThisHits } from "@/components/who-is-this-for/who-this-hits"
import WhoThisIsFor from "@/components/who-is-this-for/who-this-for"
import { Navbar } from "@/components/sections/navbar"
import { Footer } from "@/components/sections/footer"

export const metadata = {
  title: "Who Is This For | VoiShift",
  description: "A filter page for operators: VoiShift is for those who want voice AI that behaves predictably under pressure with guardrails and proof gates.",
}

export default function WhoIsThisForPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <WhoForHero />
      <WhoThisHits />
      <WhoThisIsFor />
      <Footer />
    </main>
  )
}
