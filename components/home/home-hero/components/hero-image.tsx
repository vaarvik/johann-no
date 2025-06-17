"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import imgJohann from "@/lib/assets/img/johann-main-crop.jpeg"

export function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50, y: 20 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.8 }}
      className="hover:scale-105 transition-all duration-300 order-1 lg:order-none"
    >
      <div className="w-[200px] h-[240px] sm:w-[240px] sm:h-[280px] lg:w-[280px] lg:h-auto rounded-md overflow-hidden">
        <Image src={imgJohann} alt="Johann Vårvik" className="w-full h-full object-cover" />
      </div>
    </motion.div>
  )
}
