"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Code, Github, Home, Linkedin, Palette, Users, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import imgJohann from "@/lib/assets/img/johann-main-crop.jpeg"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"

export default function HomeHero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const [isClient, setIsClient] = useState(false)
  const [particles, setParticles] = useState<Array<{ id: number, x: number, y: number, duration: number, delay: number }>>([])

  useEffect(() => {
    setIsClient(true)
    const generatedParticles = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2
    }))
    setParticles(generatedParticles)
  }, [])

  const onNavigateToHowItWasMade = () => {
    console.log("navigate to how it was made")
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="home">
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-slate-900"
      />

      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-900/20 to-transparent" />

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
              y: [y, Math.random() * window.innerHeight],
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

      <div className="container mx-auto px-8 z-10">
        <div className="flex justify-center gap-16 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hover:scale-120 transition-all duration-800"
          >
            <div className="w-[280px] h-full rounded-md overflow-hidden">
              <Image src={imgJohann} alt="Johann Vårvik" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl flex flex-col"
          >
            <motion.h1
              className="text-8xl font-['Meow_Script'] text-white mb-2 leading-tight"
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
              <div className="flex flex-wrap gap-3">
                <Badge size="lg" className="bg-blue-600/20">
                  <span className="flex items-center gap-2">
                    <Code className="h-4 w-4" />
                    FULLSTACK DEVELOPER
                  </span>
                </Badge>
                <Badge size="lg" className="bg-green-600/20">
                  <span className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    IT MANAGER
                  </span>
                </Badge>
                <Badge size="lg" className="bg-purple-600/20">
                  <span className="flex items-center gap-2">
                    <Palette className="h-4 w-4" />
                    DESIGNER
                  </span>
                </Badge>
              </div>
            </motion.div>

            <motion.p
              className="text-xl text-slate-300 leading-relaxed mb-8 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Crafting digital experiences with cutting-edge technology. Specialized in building scalable applications and leading technical teams to success.
            </motion.p>

            <motion.div
              className="flex gap-4 mt-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <Link href="mailto:contact@johann.no">
                <Button size="lg" variant="primary">
                  Contact me
                </Button>
              </Link>
              <Button
                variant="secondary"
                size="lg"
                onClick={onNavigateToHowItWasMade}
                className="flex items-center gap-2"
              >
                <Zap className="h-4 w-4" />
                See how this site was made
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <StickyNavigation />
    </section>
  )
}

function StickyNavigation() {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    setIsSticky(window.scrollY > window.innerHeight * 0.92)

    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsSticky(scrollPosition > window.innerHeight * 0.92)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      className={`
        ${isSticky
      ? "fixed top-0 left-0 right-0 z-50 bg-slate-900 backdrop-blur-md border-b border-slate-800/5"
      : "absolute bottom-0 left-0 right-0 z-20 border-slate-800/5"
    }
        transition-all duration-300 px-8
      `}
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: 1,
        y: 0,
        backgroundColor: isSticky ? "rgba(0, 0, 0, 0.1)" : "transparent"
      }}
      transition={{ duration: 0.8, delay: isSticky ? 0 : 1.2 }}
    >
      <div className="max-w-7xl mx-auto py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/#home">
              <Button
                variant="secondary"
                size="icon"
                className={`
                w-10 h-9 transition-all duration-300
              `}
              >
                <Home className="h-6 w-6" />
              </Button>
            </Link>
          </div>

          <div className="flex gap-4 items-center">
            {[{ label: "Experience", href: "/#experience" }, { label: "Skills", href: "/#skills" }, { label: "Portfolio", href: "/#portfolio" }, { label: "Contact", href: "/#contact" }].map(item => (
              <Link href={item.href} key={item.href}>
                <Button
                  key={item.href}
                  variant="secondary"
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Link href="https://github.com/vaarvik" target="_blank">
              <Button
                variant="tertiary"
                size="icon"
                className={`
                w-10 h-9 transition-all duration-300
              `}
              >
                <Github className="h-6 w-6" />
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/johann-v%C3%A5rvik-9114a7163/" target="_blank">
              <Button
                variant="tertiary"
                size="icon"
                className={`
                w-10 h-9 transition-all duration-300
              `}
              >
                <Linkedin className="h-6 w-6" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
