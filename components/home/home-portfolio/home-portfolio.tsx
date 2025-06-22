"use client"

import type { HomePortfolioItemData } from "./components/home-portfolio-item"
import Timeline from "@/components/ui/timeline/timeline"
import { useMobile } from "@/lib/hooks/use-mobile"
import HomePortfolioItem from "./components/home-portfolio-item"

const portfolioData: HomePortfolioItemData[] = [{
  id: "1",
  title: "Full-Stack Developer at Headspin",
  dateRange: "Aug 2020 - Feb 2022",
  role: "Full-Stack Developer",
  badge: "FULL-STACK",
  client: {
    name: "Headspin",
    description: "Communications and Digital Strategy Agency",
  },
  techStack: ["React", "TypeScript", "PHP", "Next.js", "MySQL", "SEO"],
  overview: "Johann developed full-scale websites for clients like Aker BP and IFE. His role involved creating custom React components, building robust PHP backends with CMS integrations, and ensuring all projects adhered to WCAG and SEO standards.",
  mission: "End-to-end web solutions for leading Norwegian companies",
}]

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
        items={portfolioData.map(item => ({
          id: item.id,
          content: isVisible => <HomePortfolioItem isVisible={isVisible} item={item} />,
        }))}
      />
    </section>
  )
}
