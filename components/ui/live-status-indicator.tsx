"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { LiveIndicator } from "./live-indicator"

interface LiveStatusIndicatorProps {
  title: string
  subtitle?: string
  href?: string
  className?: string
  size?: "sm" | "default"
}

export function LiveStatusIndicator({
  title,
  subtitle,
  href,
  className = "",
  size = "default"
}: LiveStatusIndicatorProps) {
  const [showTooltip, setShowTooltip] = useState(false)

  const sizeClasses = {
    sm: "px-2 py-1 h-7 text-xs",
    default: "px-3 py-1.5 h-9 text-xs"
  }

  const content = (
    <div
      className="relative"
      onMouseEnter={() => href && setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
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

      {/* Tooltip */}
      {href && showTooltip && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 5 }}
          className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-slate-800 text-white text-xs rounded-lg shadow-lg border border-slate-700 whitespace-nowrap z-50"
        >
          Opens {href}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-800"></div>
        </motion.div>
      )}
    </div>
  )

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    )
  }

  return content
}
