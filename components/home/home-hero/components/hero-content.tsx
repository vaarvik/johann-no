"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Badge } from "../../../ui/badge"
import { Button } from "../../../ui/button"

export function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50, y: 20 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="max-w-2xl flex flex-col text-center lg:text-left order-2 lg:order-none"
    >
      <motion.h1
        className="text-6xl sm:text-6xl lg:text-8xl font-['Meow_Script'] text-white mb-2 leading-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Johann Vårvik
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mb-6"
      >
        <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start">
          <Badge size="default" className="bg-blue-600/20 text-xs sm:text-sm" icon="code" iconClassName="h-3 w-3 sm:h-4 sm:w-4">
            FULLSTACK DEVELOPER
          </Badge>
          <Badge size="default" className="bg-green-600/20 text-xs sm:text-sm" icon="users" iconClassName="h-3 w-3 sm:h-4 sm:w-4">
            IT MANAGER
          </Badge>
          <Badge size="default" className="bg-purple-600/20 text-xs sm:text-sm" icon="palette" iconClassName="h-3 w-3 sm:h-4 sm:w-4">
            DESIGNER
          </Badge>
        </div>
      </motion.div>

      <motion.p
        className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed mb-6 lg:mb-8 max-w-xl mx-auto lg:mx-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        Crafting digital experiences with cutting-edge technology. Specialized in building scalable applications and leading technical teams to success.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-auto justify-center lg:justify-start"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <Link href="mailto:contact@johann.no" className="w-full sm:w-auto">
          <Button size="lg" variant="primary" startIcon="send" className="w-full sm:w-auto">
            Contact me
          </Button>
        </Link>
        <Link href="/how-it-was-made" className="w-full sm:w-auto">
          <Button
            variant="secondary"
            size="lg"
            startIcon="zap"
            className="w-full sm:w-auto"
          >
            See how this site was made
          </Button>
        </Link>
      </motion.div>
    </motion.div>
  )
}
