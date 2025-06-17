import Footer from "@/components/footer"
import HomeContact from "@/components/home/home-contact"
import HomeExperience from "@/components/home/home-experience"
import HomeHero from "@/components/home/home-hero/home-hero"
import HomePortfolio from "@/components/home/home-portfolio/home-portfolio"

export default function Home() {
  return (
    <div>
      <main>
        <HomeHero />
        <HomeExperience />
        <HomePortfolio />
        <HomeContact />
        <Footer />
      </main>
    </div>
  )
}
