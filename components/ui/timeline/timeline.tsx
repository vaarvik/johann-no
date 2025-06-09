"use client"

import type { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"
import * as React from "react"
import { cn } from "@/lib/utils"
import ScrollMorpher from "../scroll-morpher/scroll-morpher"

const timelineItemVariants = cva(
  "flex items-center h-screen overflow-hidden relative text-left transition-all duration-300 ease-in-out w-full md:flex-col md:h-[66%] md:justify-end md:w-screen before:content-[''] before:bg-indigo-600 before:h-screen before:w-2 before:z-10 md:before:h-4 md:before:w-full md:before:absolute",
  {
    variants: {
      device: {
        mobile: "", // "flex-col h-auto w-full md:h-screen md:w-auto",
        tablet: "", // "flex-col h-auto w-full md:h-screen md:w-auto",
        desktop: "", // "h-screen w-full",
      },
    },
    defaultVariants: {
      device: "desktop",
    },
  },
)

const timelineItemPoleVariants = cva(
  "flex flex-col justify-center relative transform scale-x-0 origin-left transition-transform duration-800 ease-[cubic-bezier(0.72,1.5,0.1,0.9)] transition-delay-[1.12s] w-[calc(100vw-48px)] md:scale-x-100 md:items-center md:h-[480px] md:w-auto md:origin-bottom md:scale-y-0 md:justify-start after:content-[''] after:bg-indigo-600 after:block after:h-2 after:w-full md:after:h-full md:after:absolute md:after:w-2 before:content-[''] before:bg-indigo-600 before:block before:rounded-full before:h-6 before:-left-3 before:opacity-0 before:absolute before:w-6 md:before:bottom-0 md:before:left-[unset] md:before:opacity-100",
  {
    variants: {
      device: {
        mobile: "", // "items-center h-auto justify-start transform scale-y-0 origin-bottom w-auto md:h-[480px]",
        tablet: "", // "items-center h-auto justify-start transform scale-y-0 origin-bottom w-auto md:h-[480px]",
        desktop: "", // "items-start h-auto justify-center transform scale-x-0 origin-left w-[calc(100vw-48px)]",
      },
    },
    defaultVariants: {
      device: "desktop",
    },
  },
)

const timelineItemRightVariants = cva(
  "flex flex-col items-end absolute right-0 top-2 perspective-[1000px] perspective-origin-top md:left-1 md:right-[unset] md:top-[unset]",
  {
    variants: {
      device: {
        mobile: "", // "left-1 right-auto top-auto",
        tablet: "", // "left-1 right-auto top-auto",
        desktop: "", // "right-0 top-2",
      },
    },
    defaultVariants: {
      device: "desktop",
    },
  },
)

const _timelineItemBeforeVariants = cva(
  "before:content-[''] before:bg-indigo-600 before:h-screen before:w-2 before:z-10",
  {
    variants: {
      device: {
        mobile: "before:h-4 before:absolute before:w-full",
        tablet: "before:h-4 before:absolute before:w-full",
        desktop: "before:h-screen before:w-2",
      },
    },
    defaultVariants: {
      device: "desktop",
    },
  },
)

const _timelineItemPoleAfterVariants = cva(
  "after:content-[''] after:bg-indigo-600 after:block after:h-2 after:w-full",
  {
    variants: {
      device: {
        mobile: "after:h-full after:absolute after:w-2",
        tablet: "after:h-full after:absolute after:w-2",
        desktop: "after:h-2 after:w-full",
      },
    },
    defaultVariants: {
      device: "desktop",
    },
  },
)

const _timelineItemPoleBeforeVariants = cva(
  "before:content-[''] before:bg-indigo-600 before:block before:h-6 before:-left-3 before:opacity-0 before:absolute before:w-6",
  {
    variants: {
      device: {
        mobile: "before:bottom-0 before:left-auto before:opacity-100",
        tablet: "before:bottom-0 before:left-auto before:opacity-100",
        desktop: "before:-left-3 before:opacity-0",
      },
    },
    defaultVariants: {
      device: "desktop",
    },
  },
)

interface TimelineProps
  extends React.ComponentProps<"div">,
  VariantProps<typeof timelineItemVariants> {
  items: {
    id: string
    content: (isVisible: boolean) => React.JSX.Element
  }[]
}

export default function Timeline({ items, className, ...props }: TimelineProps) {
  return (
    <div className={cn(className)} {...props}>
      <ScrollMorpher
        direction="horizontal"
        items={items.map(item => ({
          id: item.id,
          content: (isVisible: boolean): React.JSX.Element => {
            return (
              <div className={cn(timelineItemVariants())}>
                <div className={cn(timelineItemPoleVariants(), isVisible && "!scale-100 transition-delay-0")}>
                  <div className={cn(timelineItemRightVariants())}>
                    {item.content(isVisible)}
                  </div>
                </div>
              </div>
            )
            // return (
            //   <div
            //     className={cn(
            //       timelineItemVariants({ device }),
            //       timelineItemBeforeVariants({ device }),
            //         isVisible && "z-10",
            //         isVisible && "[&_.timeline-pole]:scale-100 [&_.timeline-pole]:transition-delay-0",
            //         isVisible && "[&_.timeline-description]:opacity-100 [&_.timeline-description]:translate-x-0 [&_.timeline-description]:transition-delay-0",
            //         isVisible && "[&_.timeline-dates]:opacity-100 [&_.timeline-dates]:scale-x-100 [&_.timeline-dates]:transition-delay-[0.64s]",
            //         isVisible && "[&_.timeline-position]:opacity-100 [&_.timeline-position]:scale-y-100 [&_.timeline-position]:transition-delay-[0.64s]",
            //         isVisible && "[&_.timeline-company]:opacity-100 [&_.timeline-company]:scale-y-100 [&_.timeline-company]:transition-delay-[1.12s] [&_.timeline-company]:animate-[swing-x-axis_2.5s_ease-out_0s_forwards] [&_.timeline-company]:animation-delay-[1.12s]"
            //     )}
            //   >
            //     <div
            //       className={cn(
            //         "timeline-pole",
            //         timelineItemPoleVariants({ device }),
            //         timelineItemPoleAfterVariants({ device }),
            //         timelineItemPoleBeforeVariants({ device })
            //       )}
            //     >
            //       <div className={cn("timeline-right", timelineItemRightVariants({ device }))}>
            //         {item.content(isVisible)}
            //       </div>
            //     </div>
            //   </div>
            // )
          },
        }))}
      />
    </div>
  )
}

export { timelineItemPoleVariants, timelineItemRightVariants, timelineItemVariants }
