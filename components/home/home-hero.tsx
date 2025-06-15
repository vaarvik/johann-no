"use client"

import type { IconName } from "@/lib/icons"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import imgJohann from "@/lib/assets/img/johann-main-crop.jpeg"
import { useMobile } from "@/lib/hooks/use-mobile"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { LiveStatusIndicator } from "../ui/live-status-indicator"

export default function HomeHero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-8" id="home">
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

      <div className="container mx-auto z-10">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-16 max-w-4xl mx-auto">
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
        </div>
      </div>

      <StickyNavigation />
    </section>
  )
}

function StickyNavigation() {
  const [isSticky, setIsSticky] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsSticky(window.scrollY > window.innerHeight * 0.92)

      const handleScroll = () => {
        const scrollPosition = window.scrollY
        setIsSticky(scrollPosition > window.innerHeight * 0.92)
      }

      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  // Close mobile menu when switching to desktop
  useEffect(() => {
    if (!isMobile && isMobileMenuOpen) {
      setIsMobileMenuOpen(false)
    }
  }, [isMobile, isMobileMenuOpen])

  const navigationItems: Array<{ label: string, href: string, icon: IconName, showOnMobile?: boolean }> = [
    { label: "Home", href: "/#home", icon: "home", showOnMobile: true },
    { label: "Experience", href: "/#experience", icon: "file" },
    { label: "Skills", href: "/#skills", icon: "code" },
    { label: "Portfolio", href: "/#portfolio", icon: "folder" },
    { label: "Contact", href: "/#contact", icon: "mail" }
  ]

  return (
    <>
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <motion.nav
        className={`
          ${isSticky && !isMobileMenuOpen
      ? "fixed top-0 left-0 right-0 z-50"
      : "absolute bottom-0 left-0 right-0 z-20 border-b border-slate-700/20"
    }
          transition-all duration-300 bg-slate-900/80 backdrop-blur-xl border-b border-slate-700/30
          ${isMobileMenuOpen ? "fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-2xl border-b border-slate-600/40" : ""}
        `}
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: 1,
          y: 0,
          backgroundColor: isSticky ? "rgba(15, 23, 42, 0.80)" : "transparent"
        }}
        transition={{ duration: 0.8, delay: isSticky ? 0 : 1.2 }}
      >
        <div className={`max-w-7xl mx-auto py-4 ${isMobile ? "px-4" : "px-8"} ${isMobileMenuOpen ? "min-h-screen max-w-full w-full flex flex-col" : ""}`}>
          <div className="flex items-center justify-between">

            {/* Desktop Navigation */}
            <div className="hidden lg:flex gap-4 items-center">

              <Link href="/#home">
                <Button
                  variant="secondary"
                  size="icon"
                  startIcon="home"
                  startIconClassName="h-5 w-5 sm:h-6 sm:w-6"
                  className="w-9 h-9 sm:w-10 sm:h-9 transition-all duration-300 bg-white/10 hover:bg-white/20 text-white border-white/20 hover:border-white/30"
                />
              </Link>
              {navigationItems.filter(item => !item.showOnMobile).map(item => (
                <Link href={item.href} key={item.href}>
                  <Button
                    key={item.href}
                    variant="secondary"
                    className="bg-white/10 hover:bg-white/20 text-white border-white/20 hover:border-white/30 backdrop-blur-sm"
                  >
                    {item.label}
                  </Button>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <Button
                variant="secondary"
                size="icon"
                startIcon={isMobileMenuOpen ? "x" : "menu"}
                startIconClassName="h-5 w-5"
                className="w-9 h-9 transition-all duration-300 relative z-50 bg-white/10 hover:bg-white/20 text-white border-white/20 hover:border-white/30 backdrop-blur-sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </div>

            <div className="flex items-center gap-2">
              <div className="hidden lg:flex">
                <LiveStatusIndicator
                  title="Currently at Aevy"
                  subtitle="Location: Oslo, Norway"
                  href="https://aevy.io"
                />
              </div>
              <Link href="https://github.com/vaarvik" target="_blank">
                <Button
                  variant="tertiary"
                  size="icon"
                  startIcon="github"
                  startIconClassName="h-5 w-5 sm:h-6 sm:w-6"
                  className="w-9 h-9 sm:w-10 sm:h-9 transition-all duration-300 bg-white/10 hover:bg-white/20 text-white border-white/20 hover:border-white/30 backdrop-blur-sm"
                />
              </Link>
              <Link href="https://www.linkedin.com/in/johann-v%C3%A5rvik-9114a7163/" target="_blank">
                <Button
                  variant="tertiary"
                  size="icon"
                  startIcon="linkedin"
                  startIconClassName="h-5 w-5 sm:h-6 sm:w-6"
                  className="w-9 h-9 sm:w-10 sm:h-9 transition-all duration-300 bg-white/10 hover:bg-white/20 text-white border-white/20 hover:border-white/30 backdrop-blur-sm"
                />
              </Link>
              <Link href="mailto:contact@johann.no">
                <Button
                  variant="tertiary"
                  size="icon"
                  startIcon="mail"
                  startIconClassName="h-5 w-5 sm:h-6 sm:w-6"
                  className="w-9 h-9 sm:w-10 sm:h-9 transition-all duration-300 bg-white/10 hover:bg-white/20 text-white border-white/20 hover:border-white/30 backdrop-blur-sm"
                />
              </Link>
            </div>
          </div>

          {/* Enhanced Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="lg:hidden mt-8 flex-1 flex flex-col justify-between overflow-y-auto max-h-[calc(100vh-120px)]"
            >
              <div className="flex flex-col gap-4">
                {navigationItems.map((item, index) => {
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
                    >
                      <Link href={item.href} onClick={() => setIsMobileMenuOpen(false)}>
                        <Button
                          variant="secondary"
                          startIcon={item.icon}
                          className="w-full justify-start h-14 text-base bg-gradient-to-r from-blue-500/15 to-blue-600/8 hover:from-blue-400/25 hover:to-blue-500/15 text-blue-50 border border-blue-900/30 hover:border-blue-300/50 transition-all duration-300 group backdrop-blur-sm shadow-lg hover:shadow-xl hover:shadow-blue-500/20"
                        >
                          <span className="group-hover:translate-x-1 transition-transform duration-300 font-medium">
                            {item.label}
                          </span>
                        </Button>
                      </Link>
                    </motion.div>
                  )
                })}
              </div>

              {/* Decorative middle section */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-col items-center gap-4 py-8"
              >
                {/* Decorative line */}
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />

                {/* Quick info card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                >
                  <LiveStatusIndicator
                    title="Currently at Aevy"
                    subtitle="Location: Oslo, Norway"
                    href="https://aevy.io"
                    size="default"
                    className="max-w-xs"
                  />
                </motion.div>
              </motion.div>

              {/* Footer with Johann Vårvik text and social links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="pt-8 border-t border-white/10"
              >
                <div className="flex items-center justify-between">
                  {/* Johann Vårvik text */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 }}
                    className="text-white/70 font-['Meow_Script'] text-lg"
                  >
                    Johann Vårvik
                  </motion.div>

                  {/* Social Links */}
                  <div className="flex gap-3">
                    <Link href="https://github.com/vaarvik" target="_blank">
                      <Button
                        variant="tertiary"
                        size="icon"
                        startIcon="github"
                        startIconClassName="h-5 w-5"
                        className="w-10 h-10 bg-white/10 hover:bg-white/20 text-white border-white/20 hover:border-white/30"
                      />
                    </Link>
                    <Link href="https://www.linkedin.com/in/johann-v%C3%A5rvik-9114a7163/" target="_blank">
                      <Button
                        variant="tertiary"
                        size="icon"
                        startIcon="linkedin"
                        startIconClassName="h-5 w-5"
                        className="w-10 h-10 bg-white/10 hover:bg-white/20 text-white border-white/20 hover:border-white/30"
                      />
                    </Link>
                    <Link href="mailto:contact@johann.no">
                      <Button
                        variant="tertiary"
                        size="icon"
                        startIcon="mail"
                        startIconClassName="h-5 w-5"
                        className="w-10 h-10 bg-white/10 hover:bg-white/20 text-white border-white/20 hover:border-white/30"
                      />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>
      </motion.nav>
    </>
  )
}
