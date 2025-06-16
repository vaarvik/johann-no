"use client"

import type { VariantProps } from "class-variance-authority"
import type { ReactNode } from "react"
import { cva } from "class-variance-authority"
import * as React from "react"
import { cn } from "@/lib/utils"
import { useScrollMorpher } from "./services/use-scroll-morpher"

const scrollMorpherVariants = cva(
  "h-screen overflow-hidden sticky top-0",
  {
    variants: {
      direction: {
        horizontal: "h-screen w-auto",
        vertical: "h-auto w-full",
      },
    },
    defaultVariants: {
      direction: "horizontal",
    },
  },
)

const contentVariants = cva(
  "flex flex-shrink-0 h-screen",
  {
    variants: {
      direction: {
        horizontal: "flex-row h-screen",
        vertical: "flex-col h-auto w-full",
      },
    },
    defaultVariants: {
      direction: "horizontal",
    },
  },
)

const itemVariants = cva(
  "h-full w-auto",
  {
    variants: {
      direction: {
        horizontal: "h-full w-auto",
        vertical: "h-auto w-auto",
      },
    },
    defaultVariants: {
      direction: "horizontal",
    },
  },
)

const stripVariants = cva(
  "flex items-center justify-between will-change-transform",
  {
    variants: {
      direction: {
        horizontal: "", // "flex-row",
        vertical: "", // "flex-col md:flex-row",
      },
    },
    defaultVariants: {
      direction: "horizontal",
    },
  },
)

interface ScrollMorpherProps
  extends React.ComponentProps<"div">,
  VariantProps<typeof scrollMorpherVariants> {
  items: {
    content: (isVisible: boolean) => ReactNode
    id: string
  }[]
}

export default function ScrollMorpher({
  items,
  direction = "horizontal",
  className,
  ...props
}: ScrollMorpherProps) {
  const {
    wrapperRef,
    containerRef,
    sectionRef,
    contentRef,
    itemRefs,
    visibleItems,
  } = useScrollMorpher(0.7, direction || "horizontal")

  return (
    <div ref={wrapperRef} {...props}>
      <div
        className={cn(scrollMorpherVariants({ direction: direction || "horizontal" }), className)}
        ref={containerRef}
      >
        <div className={cn(stripVariants({ direction: direction || "horizontal" }))} ref={sectionRef}>
          <div
            className={cn(contentVariants({ direction: direction || "horizontal" }))}
            ref={contentRef}
          >
            {items.map((item, index) => (
              <div
                className={cn(itemVariants({ direction: direction || "horizontal" }))}
                ref={(el) => {
                  if (el) {
                    itemRefs.current[index] = el
                  }
                }}
                key={item.id}
              >
                {item.content(visibleItems.includes(index))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export { contentVariants, itemVariants, scrollMorpherVariants, stripVariants }
