"use client"

import type { HomePortfolioItemData } from "./components/home-portfolio-item"
import Timeline from "@/components/ui/timeline/timeline"
import { useMobile } from "@/lib/hooks/use-mobile"
import HomePortfolioItem from "./components/home-portfolio-item"

const portfolioData: HomePortfolioItemData[] = [
//   {
//   id: "1",
//   title: "Marine Conservation Website",
//   dateRange: "Feb 2020 - Aug 2020",
//   role: "Full-Stack Developer",
//   badge: "FULL-STACK",
//   client: {
//     name: "Miljøstiftelsen Elv og Hav",
//     description: "Environmental Foundation for River and Sea Conservation",
//   },
//   techStack: ["React", "TypeScript", "PHP", "Node.js", "SCSS", "MySQL", "SEO"],
//   overview: "After his bachelor thesis at Miljøstiftelsen Elv og Hav, the foundation wanted to continue the collaboration with Johann. Therefore they asked him to build their first website, which he delivered as a complete solution using PHP and React, with a focus on SEO and microdata.",
//   mission: "Analysis to deployment of full-stack website.",
// }, {
//   id: "2",
//   title: "Agency Web Projects",
//   dateRange: "Aug 2020 - Feb 2022",
//   role: "Full-Stack Developer",
//   badge: "FULL-STACK",
//   client: {
//     name: "Headspin",
//     description: "Communications and Digital Strategy Agency",
//   },
//   techStack: ["React", "TypeScript", "PHP", "Node.js", "SCSS", "MySQL", "SEO"],
//   overview: "Johann developed full-scale websites for clients like Aker BP and IFE. His role involved creating custom React components, building backend in PHP, and ensuring all projects adhered to WCAG and SEO standards.",
//   mission: "End-to-end web solutions for leading Norwegian companies",
// },
  {
    id: "3",
    title: "Digital Service Modernization",
    dateRange: "Feb 2022 - Jan 2024",
    role: "Technical Team Lead",
    badge: "TECHNICAL MANAGEMENT",
    client: {
      name: "Oslo Kommune - Utviklings- og kompetanseetaten",
      description: "Development and Competence Agency for Oslo Municipality",
    },
    techStack: ["TypeScript", "Vue", "CSS", "Java", "Kotlin", "PostgreSQL", "Kubernetes", "Azure"],
    overview: "As Technical Team Lead (12-18 engineers), Johann led a NOK 35-40M modernization initiative at Oslo kommune, Norway's largest municipality. He led a large-scale data migration (100+ TB) from Oracle to PostgreSQL, including a new document storage system with MinIO, and restructured communication across 250+ microservices using Kafka and AMQ. His team rewrote legacy services from Scala to Java/Kotlin and transitioned critical monoliths to microservices — ensuring stability for payroll, HR, healthcare and other essential systems serving over 53,000 employees.",
    mission: "Lead digital transformation for Norway's largest municipality",
  },
  {
    id: "4",
    title: "Foster Care Recruitment System",
    dateRange: "Jan 2024 - Mar 2024",
    role: "Project & Frontend Lead",
    badge: "TECHNICAL MANAGEMENT",
    client: {
      name: "Bufdir",
      description: "Norwegian Directorate for Children, Youth and Family Affairs",
    },
    techStack: ["TypeScript", "C#", "Dynamics 365", "Azure", "MSSQL"],
    overview: "Johann was brought in to complete a time-sensitive Dynamics 365 rollout for Bufdir, replacing the foster care recruitment system. The new solution was designed to guide families through the full recruitment process and included data migration from the legacy system. He managed the project to stay on track with timeline and budget goals, while also overseeing custom frontend development using TypeScript.",
    mission: "Replace and modernize Norway's national foster care CRM system",
  },
  {
    id: "5",
    title: "Air Traffic Workforce Platform",
    dateRange: "Mar 2024 - Dec 2024",
    role: "Tech Lead",
    badge: "PRODUCT",
    client: {
      name: "Avinor",
      description: "National provider of airports and air navigation services in Norway",
    },
    techStack: ["TypeScript", "React", "Next.js", "SCSS", "Node.js", "Azure", "PostgreSQL", "AI"],
    overview: "Horizon is Avinor’s system for planning air traffic controller shifts using AI, based on legal rules, staffing data, and employee preferences. Johann was brought in as tech lead for his business insight and TypeScript expertise. He led the rewrite from Angular to React/Next.js, built core modules like vacation planning, and created a shared UI component library for consistent design in Avinor Flysikring. He was also responsible for defining Avinor's future approach to product team collaboration and development practices, establishing a foundation for how teams work across the organization.",
    mission: "Redesign and modernize workforce planning tools for Norwegian air traffic services"
  },
  {
    id: "6",
    title: "Startup Product Development & UX Design",
    dateRange: "Jan 2025 - May 2025",
    role: "Full-Stack Developer & UX Designer",
    badge: "PRODUCT",
    client: {
      name: "InfAI & Dobee",
      description: "Two early-stage SaaS companies focused on AI governance and strategic goal management",
    },
    techStack: ["TypeScript", "React", "Next.js", "SCSS", "Node.js", "PostgreSQL", "Google Cloud", "Figma", "AI"],
    overview: "As an independent consultant, Johann was brought in to quickly design and implement core product architecture for InfAI and Dobee — covering everything from backend infrastructure to design systems. Both projects required a combination of fullstack development and UI/UX skills. He delivered core features such as real-time form handling, file uploads, and frontend architecture in React/Next.js. He also created scalable component libraries, design systems and prototypes in Figma.",
    mission: "Deliver core product foundations and design systems for early-stage SaaS platforms"
  },
  {
    id: "7",
    title: "Renewable Asset Operations Platform",
    dateRange: "May 2025 - Present",
    role: "Full-Stack Developer & UX Designer",
    badge: "PRODUCT",
    client: {
      name: "Aevy",
      description: "Exciting renewable energy startup focused on AI-driven asset management",
    },
    techStack: ["TypeScript", "React", "Next.js", "CSS", "Node.js", "PostgreSQL", "AI", "Figma"],
    overview: "Well, this one is a bit of a secret for now. But I can tell you it's a big one.",
    mission: "Maybe you'll find out soon."
  }
]
export default function HomePortfolio() {
  const isMobile = useMobile()

  return (
    <section className="w-full bg-slate-900" id="portfolio">
      <div>
        <div className="pt-32 text-center">
          <h2 className="text-5xl font-bold text-white mb-4">Portfolio Timeline</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto px-8">
            Here's what I've been working on lately - a mix of interesting projects where I got to solve real problems and use cool tech.
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
