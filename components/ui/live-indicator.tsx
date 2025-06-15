"use client"

import { motion } from "framer-motion"

interface LiveIndicatorProps {
  size?: "sm" | "default"
  className?: string
}

export function LiveIndicator({ size = "default", className = "" }: LiveIndicatorProps) {
  const sizeClasses = {
    sm: "w-1.5 h-1.5",
    default: "w-2 h-2"
  }

  return (
    <motion.div
      className={`relative ${sizeClasses[size]} ${className}`}
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.9, 1, 0.9]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {/* Core indicator with softer glow */}
      <div className="absolute inset-0 bg-blue-400 rounded-full shadow-lg shadow-blue-400/30" />
      <div className="absolute inset-1 bg-blue-300 rounded-full opacity-60" />

      {/* Big dramatic pulse */}
      <motion.div
        className="absolute inset-0 bg-blue-400/25 rounded-full"
        animate={{
          scale: [1, 6],
          opacity: [0.5, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeOut",
          repeatDelay: 0.5
        }}
      />

      {/* Second big pulse with delay */}
      <motion.div
        className="absolute inset-0 bg-blue-500/15 rounded-full"
        animate={{
          scale: [1, 8],
          opacity: [0.3, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeOut",
          delay: 2,
          repeatDelay: 0.5
        }}
      />
    </motion.div>
  )
}
