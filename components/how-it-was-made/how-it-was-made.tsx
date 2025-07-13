"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Code2, ExternalLink, Figma, Github, Layers, Palette, Zap } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { WithTooltip } from "../ui/tooltip"

export default function HowItWasMade() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-8 py-6">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button
                variant="outline"
                size="icon"
                className="border-slate-300 hover:bg-slate-100"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">How This Site Was Made</h1>
              <p className="text-slate-600">Behind the scenes of the design and development process</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge className="bg-blue-100 text-blue-800 mb-4 px-4 py-2">
            <Zap className="h-4 w-4 mr-2" />
            Design to Code Journey
          </Badge>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">From Concept to Reality</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            This portfolio was built using modern design principles, starting from wireframes to high-fidelity
            designs in Figma, then implemented with Next.js, React, TypeScript, and Tailwind CSS.
          </p>
        </motion.div>

        <div className="grid gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-slate-100 flex items-center justify-center">
                        <Layers className="h-6 w-6 text-slate-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900">1. Wireframes</h3>
                        <p className="text-slate-600">Low-fidelity structure & layout</p>
                      </div>
                    </div>
                    <p className="text-slate-700 mb-6 leading-relaxed">
                      Started with basic wireframes to establish the information architecture,
                      user flow, and content hierarchy. Focused on functionality over aesthetics
                      to ensure optimal user experience.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["Information Architecture", "User Flow", "Content Hierarchy", "Layout Structure"].map(feature => (
                        <Badge key={feature} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="bg-slate-100 p-8 lg:p-12 flex items-center justify-center min-h-[300px]">
                    <div className="w-full max-w-md bg-white border-2 border-slate-300 p-6 space-y-4">
                      <div className="h-3 bg-slate-300 w-1/2"></div>
                      <div className="h-12 bg-slate-200 w-full flex items-center justify-center text-slate-500 text-xs">
                        HERO IMAGE
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 bg-slate-300 w-3/4"></div>
                        <div className="h-2 bg-slate-300 w-1/2"></div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="h-8 bg-slate-200 border border-slate-300"></div>
                        <div className="h-8 bg-slate-200 border border-slate-300"></div>
                      </div>
                      <div className="h-16 bg-slate-100 border border-slate-300"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 lg:p-12 flex items-center justify-center min-h-[300px] order-2 lg:order-1">
                    <div className="w-full max-w-md relative">
                      <div className="bg-white shadow-xl border border-slate-200 overflow-hidden">
                        <div className="bg-slate-900 h-16 flex items-center px-4">
                          <div className="w-8 h-8 bg-slate-300 mr-3"></div>
                          <div className="h-2 bg-slate-300 w-24"></div>
                        </div>
                        <div className="p-4 space-y-3">
                          <div className="h-2 bg-blue-200 w-3/4"></div>
                          <div className="h-2 bg-blue-200 w-1/2"></div>
                          <div className="grid grid-cols-2 gap-2 mt-4">
                            <div className="h-12 bg-blue-100 border border-blue-200"></div>
                            <div className="h-12 bg-slate-100 border border-slate-200"></div>
                          </div>
                          <div className="h-20 bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200"></div>
                        </div>
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 animate-pulse"></div>
                    </div>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center order-1 lg:order-2">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-blue-100 flex items-center justify-center">
                        <Palette className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900">2. High-Fidelity Design</h3>
                        <p className="text-slate-600">Visual design & styling in Figma</p>
                      </div>
                    </div>
                    <p className="text-slate-700 mb-6 leading-relaxed">
                      Created detailed high-fidelity designs in Figma with the final color scheme,
                      typography, and visual elements. Focused on modern 2025 aesthetics with
                      sharp corners and subtle gradients.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {["Color System", "Typography", "2025 Aesthetics", "Sharp Corners"].map(feature => (
                        <Badge key={feature} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    <FigmaButton />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-slate-900 flex items-center justify-center">
                        <Code2 className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900">3. Development</h3>
                        <p className="text-slate-600">React, TypeScript & Tailwind CSS</p>
                      </div>
                    </div>
                    <p className="text-slate-700 mb-6 leading-relaxed">
                      Implemented the design using React with TypeScript for type safety,
                      Framer Motion for smooth animations, and Tailwind CSS for responsive
                      styling. Built with modern development practices and component architecture.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {["React 18", "TypeScript", "Tailwind CSS", "Framer Motion", "Responsive Design"].map(tech => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <GithubButton />
                  </div>
                  <div className="bg-slate-900 p-8 lg:p-12 flex items-center justify-center min-h-[300px]">
                    <div className="w-full max-w-sm bg-slate-800 border border-slate-700 overflow-hidden">
                      <div className="bg-slate-700 px-4 py-2 flex items-center gap-2">
                        <div className="w-3 h-3 bg-red-500"></div>
                        <div className="w-3 h-3 bg-yellow-500"></div>
                        <div className="w-3 h-3 bg-green-500"></div>
                        <span className="text-slate-300 text-xs ml-2">ModernHome.tsx</span>
                      </div>
                      <div className="p-4 font-mono text-xs space-y-1">
                        <div className="text-purple-400">import <span className="text-blue-400">React</span> from <span className="text-green-400">'react'</span>;</div>
                        <div className="text-purple-400">import <span className="text-blue-400">&#123; motion &#125;</span> from <span className="text-green-400">'framer-motion'</span>;</div>
                        <div className="text-slate-500">// Component implementation</div>
                        <div className="text-yellow-400">function <span className="text-blue-400">ModernHero</span>() &#123;</div>
                        <div className="pl-4 text-purple-400">return (</div>
                        <div className="pl-8 text-slate-300">&lt;<span className="text-red-400">section</span> <span className="text-green-400">className</span>=<span className="text-yellow-400">"..."</span>&gt;</div>
                        <div className="pl-12 text-slate-400">...</div>
                        <div className="pl-8 text-slate-300">&lt;/<span className="text-red-400">section</span>&gt;</div>
                        <div className="pl-4 text-purple-400">);</div>
                        <div className="text-yellow-400">&#125;</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white p-8 border border-slate-200 mb-16"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Technical Architecture</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <Monitor className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Frontend Stack</h4>
              <p className="text-sm text-slate-600 mb-3">Modern React application with TypeScript</p>
              <div className="flex flex-wrap gap-1 justify-center">
                {["React 18", "TypeScript", "Vite", "ESLint"].map(tech => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 flex items-center justify-center mx-auto mb-4">
                <Palette className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Styling & UI</h4>
              <p className="text-sm text-slate-600 mb-3">Tailwind CSS with component system</p>
              <div className="flex flex-wrap gap-1 justify-center">
                {["Tailwind CSS", "Shadcn/ui", "Framer Motion", "Lucide Icons"].map(tech => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 flex items-center justify-center mx-auto mb-4">
                <Smartphone className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Features</h4>
              <p className="text-sm text-slate-600 mb-3">Responsive design with modern UX</p>
              <div className="flex flex-wrap gap-1 justify-center">
                {["Responsive", "Animations", "Dark Mode", "Accessibility"].map(tech => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </motion.div> */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-8">Explore the Project</h3>
          <div className="flex flex-wrap gap-4 justify-center items-start">
            <GithubButton />
            <FigmaButton />
            <Link href="/">
              <Button variant="tertiary">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Portfolio
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

function FigmaButton() {
  return (
    <WithTooltip content={"Thanks for your interest, but you'll have to reach out to me to get access to this one."}>
      <div className="max-w-fit">
        <Button variant="outline" className="bg-blue-600 hover:bg-blue-700 text-white w-fit" disabled>
          <Figma className="h-4 w-4 mr-2" />
          Figma Design Files
          <ExternalLink className="h-4 w-4 ml-2" />
        </Button>
      </div>
    </WithTooltip>
  )
}

function GithubButton() {
  return (
    <Link href="https://github.com/">
      <Button variant="tertiary" className="bg-slate-900 hover:bg-slate-800 text-white w-fit">
        <Github className="h-4 w-4 mr-2" />
        View Source Code
        <ExternalLink className="h-4 w-4 ml-2" />
      </Button>
    </Link>
  )
}
