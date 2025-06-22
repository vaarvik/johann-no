import { Building, Clock, Code, Target, User } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { WithPopover } from "@/components/ui/popover"
import Tabs from "@/components/ui/tabs"
import { useMobile } from "@/lib/hooks/use-mobile"

export interface HomePortfolioItemData {
  id: string
  title: string
  dateRange: string
  role: string
  badge: string
  client: {
    name: string
    description: string
  }
  techStack: string[]
  overview: string
  mission: string
}

export default function HomePortfolioItem({ isVisible, item }: { isVisible: boolean, item: HomePortfolioItemData }) {
  const isMobile = useMobile()

  const tabs = [
    {
      label: "Client",
      content: (
        <div>
          <p className="text-slate-300 text-sm font-semibold">{item.client.name}</p>
          <p className="text-slate-400 text-xs">{item.client.description}</p>
        </div>
      ),
    },
    {
      label: "Tech Stack",
      content: (
        <div className="flex flex-wrap gap-1">
          {item.techStack.map(tech => (
            <span key={tech} className="bg-indigo-800/50 text-indigo-200 px-2 py-1 text-xs border border-indigo-700/30">
              {tech}
            </span>
          ))}
        </div>
      ),
    },
    {
      label: "Overview",
      content: (
        <p className="text-slate-400 leading-relaxed text-sm">
          {item.overview}
        </p>
      ),
    },
  ]

  return (
    <div className="relative bg-slate-800 shadow-xl w-full lg:min-w-[500px]">
      <div className="bg-indigo-900/40 p-4 border-b border-indigo-700/30">
        <div className="flex justify-between items-start gap-6 text-white sm:flex-row flex-col">
          <div className="w-full">
            <h3 className="text-xl lg:text-2xl font-bold mb-2">{item.title}</h3>
            <div className="flex text-indigo-200 text-sm flex-col lg:items-start">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{item.dateRange}</span>
              </div>
              <div className="flex items-end gap-4 justify-between w-full">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{item.role}</span>
                </div>
                <Badge className="bg-indigo-700 text-indigo-100 border border-indigo-600 px-3 py-1 text-xs font-medium shrink-0">
                  {item.badge}
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isMobile
        ? (
            <Tabs tabs={tabs} />
          )
        : (
            <>
              <div className="bg-slate-750 p-4 border-b border-slate-600">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Building className="h-4 w-4 text-indigo-400" />
                      <span className="text-white font-semibold text-sm">Client</span>
                    </div>
                    <p className="text-slate-300 text-sm">{item.client.name}</p>
                    <p className="text-slate-400 text-xs">{item.client.description}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Code className="h-4 w-4 text-indigo-400" />
                      <span className="text-white font-semibold text-sm">Tech Stack</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {item.techStack.map(tech => (
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
                    <span>{item.mission}</span>
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
                            {item.overview}
                          </p>
                        </div>
                      </div>
                    )}
                  >
                    <Button variant="primary" size="sm" startIcon="info">
                      Project Details
                    </Button>
                  </WithPopover>
                </div>
              </div>
            </>
          )}
    </div>
  )
}
