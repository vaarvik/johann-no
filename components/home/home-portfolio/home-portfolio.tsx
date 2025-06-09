"use client"

import Timeline from "@/components/ui/timeline/timeline"
import HomePortfolioItem from "./components/home-portfolio-item"

// Timeline with Connected Flag and Fixed Colors - Now comes after Experience
export default function HomePortfolio() {
  return (
  // <section className="h-screen bg-slate-900 relative overflow-hidden">
  //   {/* Background pattern */}
  //   <div className="absolute inset-0 opacity-5">
  //     <div
  //       className="absolute inset-0"
  //       style={{
  //         backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='m0 40l40-40h-40v40zm40 0v-40h-40l40 40z'/%3E%3C/g%3E%3C/svg%3E")`
  //       }}
  //     />
  //   </div>

  //   <div className="relative z-10 h-full flex flex-col">
  //     {/* Header */}
  //     <motion.div
  //       className="text-center pt-16 pb-8"
  //       initial={{ opacity: 0, y: 30 }}
  //       whileInView={{ opacity: 1, y: 0 }}
  //       transition={{ duration: 0.8 }}
  //       viewport={{ once: true }}
  //     >
  //       <h2 className="text-5xl font-bold text-white mb-4">Portfolio Timeline</h2>
  //       <p className="text-xl text-slate-300 max-w-2xl mx-auto">
  //         Journey through innovative projects and technical milestones
  //       </p>
  //     </motion.div>

  //     {/* Full Screen Timeline */}
  //     <div className="flex-1 relative">

    <div className="w-full bg-slate-900">
      <div>
        <div className="pt-16 text-center">
          <h2 className="text-5xl font-bold text-white mb-4">Portfolio Timeline</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Journey through innovative projects and technical milestones
          </p>
        </div>
      </div>
      <Timeline items={[{
        id: "1",
        content: () => <HomePortfolioItem />
      }, {
        id: "2",
        content: () => <HomePortfolioItem />
      }, {
        id: "3",
        content: () => <HomePortfolioItem />
      },]}
      />
    </div>

  //       {/* Timeline markers */}
  //       <div className="absolute top-1/2 left-0 right-0 flex justify-between items-center transform -translate-y-1/2 px-16">
  //         {[...Array.from({ length: 15 })].map((_, i) => (
  //           <div key={i} className="w-1 h-12 bg-indigo-800 opacity-0"></div>
  //         ))}
  //       </div>
  //     </div>

  //     {/* Scroll indicator */}
  //     <div className="text-center pb-8">
  //       <div className="text-white/60 text-sm mb-2">Scroll to explore timeline</div>
  //       <div className="w-64 h-2 bg-white/20 mx-auto">
  //         <div className="h-full bg-indigo-700 w-1/4"></div>
  //       </div>
  //     </div>
  //   </div>
  // </section>
  )
}
