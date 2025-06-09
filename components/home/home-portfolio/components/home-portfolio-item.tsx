import { Building, Clock, Code, Info, Target, User } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { WithPopover } from "@/components/ui/popover"

export default function HomePortfolioItem() {
  return (
    <div className="relative bg-slate-800 shadow-xl min-w-[500px]">
      {/* Main Header Section */}
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

      {/* Client & Tech Section */}
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

      {/* Action Section */}
      <div className="bg-slate-800 p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 text-slate-300 text-sm">
            <Target className="h-4 w-4" />
            <span>Mission Critical Aviation System</span>
          </div>

          {/* Project Details Popover */}
          <WithPopover content={(
            <div className="p-6 space-y-4">
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
              <div className="grid grid-cols-2 gap-4">
                <div className="border border-slate-200 p-3">
                  <h5 className="text-sm font-semibold text-slate-700 mb-1">Team Size</h5>
                  <p className="text-lg font-bold text-slate-600">8 Developers</p>
                </div>
                <div className="border border-slate-200 p-3">
                  <h5 className="text-sm font-semibold text-slate-700 mb-1">Duration</h5>
                  <p className="text-lg font-bold text-slate-600">20 Months</p>
                </div>
              </div>
              <div>
                <h5 className="text-sm font-semibold text-slate-800 mb-2">Key Achievements</h5>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• 99.9% system uptime for critical aviation operations</li>
                  <li>• Real-time processing of 10,000+ flight data points/second</li>
                  <li>• Reduced response time by 40% compared to legacy system</li>
                  <li>• Full compliance with ICAO aviation standards</li>
                </ul>
              </div>
            </div>
          )}
          >
            <Button className="bg-indigo-700 hover:bg-indigo-600 text-white text-sm font-medium px-4 py-2 flex items-center gap-2 transition-all duration-300">
              <Info className="h-4 w-4" />
              Project Details
            </Button>
          </WithPopover>
        </div>
      </div>
    </div>
  )
}
