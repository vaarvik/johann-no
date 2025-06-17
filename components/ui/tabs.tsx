"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface TabsProps {
  tabs: {
    label: string
    content: React.ReactNode
  }[]
  className?: string
}

export default function Tabs({ tabs, className }: TabsProps) {
  const [activeTab, setActiveTab] = React.useState(0)

  return (
    <div className={cn("w-full", className)}>
      <div className="flex border-b border-slate-600">
        {tabs.map((tab, index) => (
          <button
            key={tab.label}
            className={cn(
              "py-2 px-4 text-sm font-medium transition-colors",
              "focus:outline-none",
              {
                "text-indigo-300 border-b-2 border-indigo-400": activeTab === index,
                "text-slate-400 hover:text-slate-200": activeTab !== index,
              },
            )}
            onClick={() => setActiveTab(index)}
            type="button"
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-4 bg-slate-750/50">
        {tabs[activeTab].content}
      </div>
    </div>
  )
}
