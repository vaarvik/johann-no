"use client"

import type { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"
import { motion } from "framer-motion"
import * as React from "react"
import { cn } from "@/lib/utils"
import ScrollMorpher from "../scroll-morpher/scroll-morpher"

const timelineItemVariants = cva(
  "flex items-center h-screen overflow-hidden relative text-left transition-all duration-300 ease-in-out w-full ",
  {
    variants: {
      variant: {
        horizontal: "flex-col h-[66%] justify-end w-screen",
        vertical: "",
      },
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

const timelineItemLineVariants = cva(
  "before:content-[''] before:bg-indigo-600 before:h-screen before:w-2 before:z-10",
  {
    variants: {
      variant: {
        horizontal: "before:h-4 before:w-full before:absolute",
        vertical: "",
      },
      device: {
        mobile: "", // "before:h-4 before:absolute before:w-full",
        tablet: "", // "before:h-4 before:absolute before:w-full",
        desktop: "", // "before:h-screen before:w-2 before:z-10 md:before:h-4 md:before:w-full md:before:absolute",
      },
    },
    defaultVariants: {
      device: "desktop",
    },
  },
)

const timelineItemPoleVariants = cva(
  "flex flex-col justify-center relative transform scale-x-0 origin-left transition-transform duration-800 ease-[cubic-bezier(0.72,1.5,0.1,0.9)] transition-delay-[1.12s] w-[calc(100vw-48px)]",
  {
    variants: {
      variant: {
        horizontal: "scale-x-100 items-center h-[480px] w-auto origin-bottom scale-y-0 justify-start left-[-200px] ",
        vertical: "top-[-144px]",
      },
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

const timelineItemPolePoleVariants = cva(
  "after:content-[''] after:bg-indigo-600 after:block after:h-2 after:w-full",
  {
    variants: {
      variant: {
        horizontal: "after:h-full after:absolute after:w-2",
        vertical: "",
      },
    },
  },
)

const timelineItemPoleBaseVariants = cva(
  "before:content-[''] before:bg-indigo-600 before:block before:rounded-full before:h-6 before:-left-3 before:opacity-0 before:absolute before:w-6",
  {
    variants: {
      variant: {
        horizontal: "before:bottom-0 before:left-[unset] before:opacity-100",
        vertical: "",
      },
    },
  },
)

const timelineItemRightVariants = cva(
  "flex flex-col items-end absolute right-0 top-2 perspective-[1000px] perspective-origin-top w-full",
  {
    variants: {
      variant: {
        horizontal: "left-1 right-[unset] top-[unset] w-auto",
        vertical: "",
      },
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

interface TimelineProps
  extends React.ComponentProps<"div">,
  VariantProps<typeof timelineItemVariants> {
  items: {
    id: string
    content: (isVisible: boolean) => React.JSX.Element
  }[]
}

export default function Timeline({ items, className, variant = "horizontal", ...props }: TimelineProps) {
  return (
    <div className={cn(className, { "px-4": variant === "vertical" })} {...props}>
      <ScrollMorpher
        direction={variant}
        items={items.map((item, index) => ({
          id: item.id,
          content: (isVisible: boolean): React.JSX.Element => {
            return (
              <motion.div className={cn(timelineItemVariants({ variant }), timelineItemLineVariants({ variant }))} initial={{ scaleX: 0, originX: 0 }} animate={isVisible && index === 0 ? { scaleX: 1, originX: 0 } : { scaleX: 1, originX: 0 }}>
                <motion.div className="absolute top-0 left-0 w-full h-full">
                  {/* Creative rainbow ghost effects - more subtle and varied */}
                  <motion.div
                    className="absolute top-1/2 left-0 w-full h-6 rounded-full blur-2xl -translate-y-1/2"
                    animate={{
                      scaleY: [1, 1.2, 0.9, 1.1, 1],
                      opacity: [0.06, 0.14, 0.08, 0.12, 0.06],
                      backgroundColor: ["#ff0000", "#ff7f00", "#ffff00", "#00ff00", "#0000ff", "#4b0082", "#9400d3", "#ff0000"]
                    }}
                    transition={{
                      duration: 16,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />

                  {/* Diagonal rainbow streak */}
                  <motion.div
                    className="absolute top-1/4 left-0 w-full h-3 rounded-full blur-xl"
                    style={{
                      transform: "rotate(-5deg)",
                      transformOrigin: "center"
                    }}
                    animate={{
                      scaleY: [1, 1.3, 0.8, 1.2, 1],
                      opacity: [0.04, 0.11, 0.06, 0.09, 0.04],
                      backgroundColor: ["#9400d3", "#ff0000", "#ff7f00", "#ffff00", "#00ff00", "#0000ff", "#4b0082", "#9400d3"]
                    }}
                    transition={{
                      duration: 18,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 3
                    }}
                  />

                  {/* Curved rainbow effect */}
                  <motion.div
                    className="absolute bottom-1/3 left-0 w-full h-4 rounded-full blur-lg"
                    style={{
                      borderRadius: "50% 50% 0 0",
                      transform: "scaleY(0.3)"
                    }}
                    animate={{
                      scaleY: [0.3, 0.4, 0.25, 0.35, 0.3],
                      opacity: [0.05, 0.12, 0.07, 0.10, 0.05],
                      backgroundColor: ["#00ff00", "#0000ff", "#4b0082", "#9400d3", "#ff0000", "#ff7f00", "#ffff00", "#00ff00"]
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 6
                    }}
                  />

                  {/* Floating rainbow orbs */}
                  <motion.div
                    className="absolute top-1/3 left-1/4 w-8 h-8 rounded-full blur-md"
                    animate={{
                      scale: [1, 1.4, 0.7, 1.2, 1],
                      opacity: [0.03, 0.08, 0.04, 0.06, 0.03],
                      y: [0, -3, 0, 2, 0],
                      backgroundColor: ["#ffff00", "#00ff00", "#0000ff", "#4b0082", "#9400d3", "#ff0000", "#ff7f00", "#ffff00"]
                    }}
                    transition={{
                      duration: 14,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 2
                    }}
                  />
                  <motion.div
                    className="absolute bottom-1/4 right-1/3 w-6 h-6 rounded-full blur-sm"
                    animate={{
                      scale: [1, 1.3, 0.8, 1.1, 1],
                      opacity: [0.04, 0.09, 0.05, 0.07, 0.04],
                      y: [0, 2, 0, -2, 0],
                      backgroundColor: ["#ff7f00", "#ffff00", "#00ff00", "#0000ff", "#4b0082", "#9400d3", "#ff0000", "#ff7f00"]
                    }}
                    transition={{
                      duration: 12,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 4
                    }}
                  />

                  {/* Background stars - more stars for better effect */}
                  <motion.div
                    className="absolute top-1/6 left-1/6 w-1 h-1 bg-white/50 rounded-full"
                    animate={{
                      scale: [0, 1.2, 0.8, 1, 0],
                      opacity: [0, 0.9, 0.6, 0.8, 0],
                      rotate: [0, 180, 360, 540, 720],
                      y: [0, -2, 0, 2, 0],
                      x: [0, 1, 0, -1, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.2
                    }}
                  />
                  <motion.div
                    className="absolute top-1/3 right-1/4 w-0.5 h-0.5 bg-white/40 rounded-full"
                    animate={{
                      scale: [0, 1.5, 0.7, 1.3, 0],
                      opacity: [0, 0.8, 0.4, 0.7, 0],
                      rotate: [0, -180, -360, -540, -720],
                      y: [0, 1, 0, -1, 0],
                      x: [0, -2, 0, 2, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1.5
                    }}
                  />
                  <motion.div
                    className="absolute top-2/3 left-1/3 w-0.5 h-0.5 bg-white/35 rounded-full"
                    animate={{
                      scale: [0, 1.3, 0.6, 1.1, 0],
                      opacity: [0, 0.7, 0.3, 0.6, 0],
                      rotate: [0, 180, 360, 540, 720],
                      y: [0, -1, 0, 1, 0],
                      x: [0, 1, 0, -1, 0]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.8
                    }}
                  />
                  <motion.div
                    className="absolute bottom-1/4 right-1/6 w-1 h-1 bg-white/45 rounded-full"
                    animate={{
                      scale: [0, 1.4, 0.8, 1.2, 0],
                      opacity: [0, 0.85, 0.5, 0.75, 0],
                      rotate: [0, -180, -360, -540, -720],
                      y: [0, 2, 0, -2, 0],
                      x: [0, -1, 0, 1, 0]
                    }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 2.2
                    }}
                  />
                  <motion.div
                    className="absolute top-1/2 left-1/4 w-0.5 h-0.5 bg-white/30 rounded-full"
                    animate={{
                      scale: [0, 1.1, 0.5, 1, 0],
                      opacity: [0, 0.6, 0.2, 0.5, 0],
                      rotate: [0, 180, 360, 540, 720],
                      y: [0, -1, 0, 1, 0],
                      x: [0, 2, 0, -2, 0]
                    }}
                    transition={{
                      duration: 2.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1.8
                    }}
                  />
                  <motion.div
                    className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-white/40 rounded-full"
                    animate={{
                      scale: [0, 1.3, 0.7, 1.1, 0],
                      opacity: [0, 0.8, 0.4, 0.7, 0],
                      rotate: [0, -180, -360, -540, -720],
                      y: [0, 1, 0, -1, 0],
                      x: [0, -1, 0, 1, 0]
                    }}
                    transition={{
                      duration: 3.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  />
                  <motion.div
                    className="absolute top-1/4 right-1/3 w-0.5 h-0.5 bg-white/35 rounded-full"
                    animate={{
                      scale: [0, 1.2, 0.6, 1, 0],
                      opacity: [0, 0.7, 0.3, 0.6, 0],
                      rotate: [0, 180, 360, 540, 720],
                      y: [0, -2, 0, 2, 0],
                      x: [0, 1, 0, -1, 0]
                    }}
                    transition={{
                      duration: 2.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 2.8
                    }}
                  />
                  <motion.div
                    className="absolute bottom-1/6 left-1/3 w-1 h-1 bg-white/50 rounded-full"
                    animate={{
                      scale: [0, 1.5, 0.8, 1.3, 0],
                      opacity: [0, 0.9, 0.5, 0.8, 0],
                      rotate: [0, -180, -360, -540, -720],
                      y: [0, 2, 0, -2, 0],
                      x: [0, -1, 0, 1, 0]
                    }}
                    transition={{
                      duration: 3.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1.2
                    }}
                  />

                  {/* Very subtle floating particles */}
                  <motion.div
                    className="absolute top-1/4 left-1/4 w-1 h-1 bg-white/30 rounded-full"
                    animate={{
                      y: [0, -8, 0],
                      x: [0, 4, 0],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <motion.div
                    className="absolute bottom-1/4 right-1/4 w-0.5 h-0.5 bg-white/20 rounded-full"
                    animate={{
                      y: [0, -6, 0],
                      x: [0, -3, 0],
                      opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 2
                    }}
                  />
                </motion.div>

                <div className={cn(timelineItemPoleVariants({ variant }), timelineItemPolePoleVariants({ variant }), timelineItemPoleBaseVariants({ variant }), isVisible && "!scale-100 transition-delay-0")}>
                  <div className={cn(timelineItemRightVariants({ variant }))}>
                    {item.content(isVisible)}
                  </div>
                </div>
              </motion.div>
            )
          },
        }))}
      />
    </div>
  )
}

export { timelineItemPoleVariants, timelineItemRightVariants, timelineItemVariants }
