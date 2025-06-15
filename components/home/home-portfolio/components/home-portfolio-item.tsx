import { Building, Clock, Code, Target, User } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { WithPopover } from "@/components/ui/popover"

export default function HomePortfolioItem({ isVisible }: { isVisible: boolean }) {
  return (
    <div className="relative bg-slate-800 shadow-xl min-w-[500px]">
      <div className="bg-indigo-900/40 p-6 border-b border-indigo-700/30">
        <div className="flex justify-between items-start text-white">
          <div>
            <h3 className="text-2xl font-bold mb-2">Air Traffic Management System</h3>
            <div className="flex items-center gap-4 text-indigo-200 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Jan 2020 - Sept 2021</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>IT Consultant</span>
              </div>
            </div>
          </div>
          <Badge className="bg-indigo-700 text-indigo-100 border border-indigo-600 px-3 py-1 text-xs font-medium">
            LEAD PROJECT
          </Badge>
        </div>
      </div>

      <div className="bg-slate-750 p-4 border-b border-slate-600">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Building className="h-4 w-4 text-indigo-400" />
              <span className="text-white font-semibold text-sm">Client</span>
            </div>
            <p className="text-slate-300 text-sm">Avinor Flysikring AS</p>
            <p className="text-slate-400 text-xs">Norwegian Air Navigation Services</p>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Code className="h-4 w-4 text-indigo-400" />
              <span className="text-white font-semibold text-sm">Tech Stack</span>
            </div>
            <div className="flex flex-wrap gap-1">
              {["React", "Node.js", "TypeScript", "AWS"].map(tech => (
                <span key={tech} className="bg-indigo-800/50 text-indigo-200 px-2 py-1 text-xs border border-indigo-700/30">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-800 p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 text-slate-300 text-sm">
            <Target className="h-4 w-4" />
            <span>Mission Critical Aviation System</span>
          </div>

          <WithPopover
            enabled={isVisible}
            align="end"
            className="max-w-xl w-auto"
            content={(
              <div className="p-3">
                <div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-2">Project Overview</h4>
                </div>
                <div>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Led development of critical air traffic management system with React frontend and real-time data visualization.
                    Implemented scalable backend infrastructure and optimized performance for mission-critical aviation operations.
                    Coordinated with international teams and ensured compliance with aviation safety standards.
                  </p>
                </div>
              </div>
            )}
          >
            <Button variant="primary" size="sm" icon="info">
              Project Details
            </Button>
          </WithPopover>
        </div>
      </div>
    </div>
  )
}
