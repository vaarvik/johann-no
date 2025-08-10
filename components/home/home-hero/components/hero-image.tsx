"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import imgJohann from "@/lib/assets/img/johann-main-crop.jpeg"

export function HeroImage() {
  const [loaded, setLoaded] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, x: -50, y: 20 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.8 }}
      className="hover:scale-105 transition-all duration-300 order-1 lg:order-none"
    >
      <div className="relative w-[200px] h-[240px] sm:w-[240px] sm:h-[280px] lg:w-[280px] lg:h-auto rounded-md overflow-hidden">
        {!loaded && (
          <div
            aria-hidden
            className="absolute inset-0 animate-pulse bg-slate-800"
          />
        )}
        <Image
          src={imgJohann}
          alt="Johann Vårvik"
          priority
          placeholder="blur"
          className={`w-full h-full object-cover transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setLoaded(true)}
          sizes="(min-width: 1024px) 280px, (min-width: 640px) 240px, 200px"
        />
      </div>
    </motion.div>
  )
}
