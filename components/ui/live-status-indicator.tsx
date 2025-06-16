"use client"

import { motion } from "framer-motion"
import { LiveIndicator } from "./live-indicator"
import { WithTooltip } from "./tooltip"

interface LiveStatusIndicatorProps {
  title: string
  subtitle?: string
  href?: string
  className?: string
  size?: "sm" | "default"
  side?: "top" | "right" | "bottom" | "left"
}

export function LiveStatusIndicator({
  title,
  subtitle,
  href,
  className = "",
  size = "default",
  side = "top"
}: LiveStatusIndicatorProps) {
  const sizeClasses = {
    sm: "px-2 py-1 h-7 text-xs",
    default: "px-3 py-1.5 h-9 text-xs"
  }

  const content = (
    <motion.div
      className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer flex flex-col justify-center ${sizeClasses[size]} ${className} px-3`}
      animate={{
        scale: [1, 1.02, 1],
        opacity: [0.9, 1, 0.9]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <div className="text-blue-300 font-medium leading-none flex items-center justify-center gap-1.5">
        <LiveIndicator size="sm" />
        {title}
      </div>
      {subtitle && (
        <div className="text-white/60 text-[10px] leading-none mt-1">{subtitle}</div>
      )}
    </motion.div>
  )

  if (href) {
    return (
      <WithTooltip
        content={`Opens ${href}`}
        className="bg-slate-800 text-white border border-slate-700"
        arrowClassName="!bg-slate-800 !fill-slate-800"
        side={side}
        sideOffset={8}
      >
        <a href={href} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      </WithTooltip>
    )
  }

  return content
}
