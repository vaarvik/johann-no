import type { Metadata } from "next"
import Footer from "@/components/footer"
import HomeContact from "@/components/home/home-contact"
import HomeExperience from "@/components/home/home-experience"
import HomeHero from "@/components/home/home-hero/home-hero"
import HomePortfolio from "@/components/home/home-portfolio/home-portfolio"
import { Navigation } from "@/components/home/navigation"

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
}

export default function Home() {
  return (
    <div>
      <main>
        <HomeHero />
        <Navigation />
        <HomeExperience />
        <HomePortfolio />
        <HomeContact />
        <Footer />
      </main>
    </div>
  )
}
