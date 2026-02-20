import BuildHero from "@/components/build-vs-buy/BuildHero"
import RentingAI from "@/components/build-vs-buy/RentingAI"
import BuildingIsOwning from "@/components/build-vs-buy/BuildingIsOwning"
import PainPoints from "@/components/build-vs-buy/PainPoints"
import DecisionFramework from "@/components/build-vs-buy/DecisionFramework"
import { Navbar } from "@/components/sections/navbar"
import { Footer } from "@/components/sections/footer"

export const metadata = {
  title: "Build vs Buy | VoiShift",
  description: "Deciding between renting a ready-made AI bot or owning a custom-built voice system.",
}

export default function BuildVsBuyPage() {
  return (
    <main className="min-h-screen bg-cream-dark">
      <Navbar />
      <BuildHero />
      <RentingAI />
      <BuildingIsOwning />
      <PainPoints />
      <DecisionFramework />
      <Footer />
    </main>
  )
}
