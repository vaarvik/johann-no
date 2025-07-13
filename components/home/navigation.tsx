"use client"

import type { IconName } from "@/lib/icons"
import { motion } from "framer-motion"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useMobile } from "@/lib/hooks/use-mobile"
import { Button } from "../ui/button"
import { LiveStatusIndicator } from "../ui/live-status-indicator"

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const isMobile = useMobile()

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
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed top-0 inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <motion.nav
        className={`
          z-50
          transition-all duration-300 bg-slate-900/50 backdrop-blur-xl border-slate-700/30
          ${isMobileMenuOpen ? "fixed top-0 w-full bg-slate-900/95 backdrop-blur-2xl border-slate-600/40" : "sticky top-0"}
        `}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <div className={`max-w-7xl mx-auto py-4 ${isMobile ? "px-4" : "px-8"} ${isMobileMenuOpen ? "min-h-screen max-w-full w-full flex flex-col" : ""}`}>
          <div className="flex items-center justify-between">
            <div className="hidden lg:flex gap-4 items-center">
              <Link href="/#home">
                <Button
                  variant="secondary"
                  size="icon"
                  startIcon="home"
                  startIconClassName="h-5 w-5 sm:h-6 sm:w-6"
                  className="w-9 h-9 sm:w-10 sm:h-9 transition-all duration-300 bg-white/10 hover:bg-white/20 text-white hover:text-white border-white/20 hover:border-white/30"
                />
              </Link>
              {navigationItems.filter(item => !item.showOnMobile).map(item => (
                <Link href={item.href} key={item.href}>
                  <Button
                    key={item.href}
                    variant="secondary"
                    className="bg-white/10 hover:bg-white/20 text-white hover:text-white border-white/20 hover:border-white/30 backdrop-blur-sm"
                  >
                    {item.label}
                  </Button>
                </Link>
              ))}
            </div>

            <div className="lg:hidden">
              <Button
                variant="secondary"
                size="icon"
                startIcon={isMobileMenuOpen ? "x" : "menu"}
                startIconClassName="h-5 w-5"
                className="w-9 h-9 transition-all duration-300 relative z-50 bg-white/10 hover:bg-white/20 text-white hover:text-white border-white/20 hover:border-white/30 backdrop-blur-sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </div>

            <div className="flex items-center gap-2">
              <div className="hidden lg:flex">
                <LiveStatusIndicator
                  title="Currently at Aevy"
                  subtitle="Location: Oslo, Norway"
                  href="https://aevy.io"
                  side="left"
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

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-col items-center gap-4 py-8"
              >
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />

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

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="pt-8 border-t border-white/10"
              >
                <div className="flex items-center justify-between">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 }}
                    className="text-white/70 font-['Meow_Script'] text-lg"
                  >
                    Johann Vårvik
                  </motion.div>

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
