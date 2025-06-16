"use client"

import Timeline from "@/components/ui/timeline/timeline"
import { useMobile } from "@/lib/hooks/use-mobile"
import HomePortfolioItem from "./components/home-portfolio-item"

export default function HomePortfolio() {
  const isMobile = useMobile()

  return (
    <section className="w-full bg-slate-900" id="portfolio">
      <div>
        <div className="pt-32 text-center">
          <h2 className="text-5xl font-bold text-white mb-4">Portfolio Timeline</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Journey through innovative projects and technical milestones
          </p>
        </div>
      </div>
      <Timeline
        variant={isMobile ? "vertical" : "horizontal"}
        items={[{
          id: "1",
          content: isVisible => <HomePortfolioItem isVisible={isVisible} />
        }, {
          id: "2",
          content: isVisible => <HomePortfolioItem isVisible={isVisible} />
        }, {
          id: "3",
          content: isVisible => <HomePortfolioItem isVisible={isVisible} />
        },]}
      />
    </section>
  )
}
