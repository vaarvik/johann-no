"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function ParticleBackground() {
  const [isClient, setIsClient] = useState(false)
  const [particles, setParticles] = useState<Array<{ id: number, x: number, y: number, duration: number, delay: number }>>([])

  useEffect(() => {
    setIsClient(true)
    const generatedParticles = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200),
      y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2
    }))
    setParticles(generatedParticles)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {isClient && particles.map(({ id, x, y, duration, delay }) => (
        <motion.div
          key={id}
          className="absolute w-1 h-1 bg-blue-400/30"
          initial={{
            x,
            y
          }}
          animate={{
            y: [y, Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800)],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration,
            repeat: Infinity,
            delay
          }}
        />
      ))}
    </div>
  )
}
