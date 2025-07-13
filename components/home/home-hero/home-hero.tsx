"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { HeroContent } from "./components/hero-content"
import { HeroImage } from "./components/hero-image"
import { ParticleBackground } from "./components/particle-background"

export default function HomeHero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-8 py-20 lg:py-0 pb-32 -mb-[72px]" id="home">
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-slate-900"
      />

      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-900/20 to-transparent" />

      <ParticleBackground />

      <div className="container mx-auto z-10">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-16 max-w-4xl mx-auto">
          <HeroImage />
          <HeroContent />
        </div>
      </div>
    </section>
  )
}
