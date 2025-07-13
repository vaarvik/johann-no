"use client"

import { motion } from "framer-motion"
import { Brain, Code, Database, Loader2, Palette, Server, Terminal } from "lucide-react"
import { useEffect, useState } from "react"
import { YearCounter } from "../ui/year-counter/year-counter"

const skills = [
  {
    name: "Frontend",
    level: 90,
    icon: Code,
    bgColor: "bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700",
    borderColor: "border-blue-400",
    iconBg: "bg-white",
    iconColor: "text-blue-600",
    technologies: [
      { name: "React", experience: "5+ years", projects: 15, },
      { name: "Next.js", experience: "3+ years", projects: 8, },
      { name: "TypeScript", experience: "4+ years", projects: 12, },
      { name: "Tailwind CSS", experience: "3+ years", projects: 10, }
    ]
  },
  {
    name: "Backend",
    level: 85,
    icon: Server,
    bgColor: "bg-gradient-to-br from-slate-600 via-slate-700 to-slate-800",
    borderColor: "border-slate-500",
    iconBg: "bg-white",
    iconColor: "text-slate-700",
    technologies: [
      { name: "Node.js", experience: "5+ years", projects: 20, },
      { name: "Java/Kotlin", experience: "6+ years", projects: 25, },
      { name: "Golang", experience: "2+ years", projects: 6, },
    ]
  },
  {
    name: "AI & ML",
    level: 65,
    icon: Brain,
    bgColor: "bg-gradient-to-br from-cyan-500 via-cyan-600 to-blue-700",
    borderColor: "border-cyan-400",
    iconBg: "bg-white",
    iconColor: "text-cyan-600",
    technologies: [
      { name: "OpenAI/GPT", experience: "2+ years", projects: 12, },
      { name: "Gemini", experience: "1+ year", projects: 6 },
    ]
  },
  {
    name: "Infrastructure",
    level: 60,
    icon: Database,
    bgColor: "bg-gradient-to-br from-emerald-500 via-emerald-600 to-teal-700",
    borderColor: "border-emerald-400",
    iconBg: "bg-white",
    iconColor: "text-emerald-600",
    technologies: [
      { name: "Azure", experience: "4+ years", projects: 15, },
      { name: "Kubernetes", experience: "2+ years", projects: 5, },
      { name: "CI/CD", experience: "5+ years", projects: 20, }
    ]
  },
  {
    name: "Design",
    level: 80,
    icon: Palette,
    bgColor: "bg-gradient-to-br from-purple-500 via-purple-600 to-pink-600",
    borderColor: "border-purple-400",
    iconBg: "bg-white",
    iconColor: "text-purple-600",
    technologies: [
      { name: "Figma", experience: "4+ years", projects: 30, },
      { name: "Design Systems", experience: "3+ years", projects: 8, },
      { name: "UX Research", experience: "4+ years", projects: 20, },
    ]
  }
]

export default function HomeExperience() {
  const [inView, setInView] = useState(false)
  const [windowHeight, setWindowHeight] = useState(800)
  const [isMobile, setIsMobile] = useState(false)
  const [matrixChars, setMatrixChars] = useState<Array<{
    id: number
    char: string
    x: number
    delay: number
    duration: number
  }>>([])

  useEffect(() => {
    setWindowHeight(window.innerHeight)
    setIsMobile(window.innerWidth < 768)

    const chars = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      char: ["0", "1", "{", "}", "<", ">", "(", ")", ";", "=", "+", "-", "*", "/", "$", "#"][Math.floor(Math.random() * 16)],
      x: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.random() * 3 + 2,
    }))
    setMatrixChars(chars)

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <section className="py-0 bg-slate-900 relative overflow-hidden" id="experience">
      <div className="absolute inset-0 overflow-hidden">
        {matrixChars.map(char => (
          <motion.div
            key={char.id}
            className="absolute font-mono text-green-500 opacity-30 pointer-events-none"
            style={{
              left: `${char.x}%`,
              fontSize: "16px"
            }}
            initial={{ y: -100, opacity: 0 }}
            animate={{
              y: [null, windowHeight + 100],
              opacity: [0, 0.6, 0]
            }}
            transition={{
              duration: char.duration,
              delay: char.delay,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {char.char}
          </motion.div>
        ))}
      </div>

      <div className="py-32 relative z-10">
        <div className="container mx-auto px-8 relative">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-slate-800 border-2 border-green-500 max-w-3xl mx-auto rounded-md">
              <div className="bg-slate-700 px-4 py-3 flex items-center gap-2 border-b border-green-500 rounded-t-md">
                <div className="flex gap-2">
                  <div className={`${isMobile ? "w-2 h-2" : "w-3 h-3"} bg-red-500 rounded-full`}></div>
                  <div className={`${isMobile ? "w-2 h-2" : "w-3 h-3"} bg-yellow-500 rounded-full`}></div>
                  <div className={`${isMobile ? "w-2 h-2" : "w-3 h-3"} bg-green-500 rounded-full`}></div>
                </div>
                <div className="flex items-center gap-2 ml-4">
                  <Terminal className="h-4 w-4 text-green-400" />
                  <span className="text-green-400 font-mono text-xs sm:text-sm">
                    johann:~$ get_exp --years
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-6 font-mono">
                <div className="text-green-400 mb-2 text-sm sm:text-base">
                  <span className="text-green-500">$</span> {isMobile ? "Calculating..." : "Calculating years of experience..."}
                </div>
                <div className="text-green-300 text-sm sm:text-base">
                  <span className="text-green-500">→</span> {isMobile ? "Scanning history" : "Scanning development history"}
                </div>
                <div className="text-green-300 text-sm sm:text-base">
                  <span className="text-green-500">→</span> {isMobile ? "Processing milestones" : "Processing project milestones"}
                </div>
                <div className="text-green-300 text-sm sm:text-base">
                  <span className="text-green-500">→</span> {isMobile ? "Computing metrics" : "Computing experience metrics"}
                </div>
                <div>
                  <motion.div
                    className="mb-4"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2 }}
                    viewport={{ once: true }}
                    onViewportEnter={() => setInView(true)}
                  >
                    <motion.div
                      className="relative"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={inView ? { scale: 1, opacity: 1 } : {}}
                      transition={{ duration: 1.5, delay: 0.5 }}
                    >

                      <div className="absolute inset-0 bg-green-400/20 blur-3xl"></div>

                      <div className="relative overflow-hidden flex">
                        <YearCounter
                          decimals={22}
                          className="text-8xl sm:text-9xl md:text-[12rem] lg:text-[15rem] leading-none font-bold text-green-400"
                          startDate={new Date(2019, 1, 15)}
                        />
                      </div>

                      <motion.span
                        className={`block ${isMobile ? "w-0.5 h-4" : "w-1 h-6"} bg-green-400`}
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                    </motion.div>
                  </motion.div>

                  <div className="text-green-400 text-sm sm:text-base">
                    <span className="text-green-500">
                      <Loader2 className="inline animate-spin w-3 h-3" />
                    </span>{" "}{isMobile ? "Experience increasing" : "Years of experience increasing"}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="py-16 sm:py-24 lg:py-32 bg-slate-200 relative" id="skills">
        <div className="container mx-auto px-4 sm:px-8 relative z-10">
          <motion.div
            className="mb-12 sm:mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-3 sm:mb-4">Technical Skills</h2>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto px-4">
              {isMobile ? "Full stack development expertise" : "Comprehensive expertise across the full stack of modern development"}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-8 mb-12">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30, rotateY: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group perspective-1000"
              >
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    rotateY: 8,
                    rotateX: 5,
                    z: 50
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="relative h-full transform-gpu"
                >

                  <div className={`${skill.bgColor} border-4 ${skill.borderColor} shadow-xl relative overflow-hidden h-full transform transition-all duration-300 group-hover:shadow-2xl rounded-md`}>

                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-4 right-4 w-16 h-16 border-2 border-white transform rotate-12 rounded-md"></div>
                      <div className="absolute bottom-8 left-6 w-8 h-8 bg-white opacity-20 rounded-md"></div>
                      <div className="absolute top-1/2 right-8 w-4 h-4 bg-white opacity-30 transform rotate-45 rounded-md"></div>
                    </div>

                    <motion.div
                      className="absolute top-6 left-6 w-6 h-6 bg-white/20 rounded-md"
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />

                    <div className="p-4 sm:p-6 lg:p-8 relative z-10">

                      <motion.div
                        className={`w-16 h-16 sm:w-20 sm:h-20 ${skill.iconBg} flex items-center justify-center mx-auto mb-4 sm:mb-6 border-2 ${skill.borderColor} shadow-lg relative rounded-md`}
                        whileHover={{
                          scale: 1.15,
                          rotate: [0, -10, 10, 0]
                        }}
                        transition={{ duration: 0.4 }}
                      >
                        <skill.icon className={`h-8 w-8 sm:h-10 sm:w-10 ${skill.iconColor}`} />

                        <motion.div
                          className={`absolute inset-0 border-2 ${skill.borderColor} opacity-0 rounded-md`}
                          animate={{
                            scale: [1, 1.3, 1.6],
                            opacity: [0, 0.6, 0]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeOut"
                          }}
                        />
                      </motion.div>

                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4 text-center tracking-wide">
                        {skill.name}
                      </h3>

                      <div className="mb-4 sm:mb-6">
                        <div className="flex justify-between items-center mb-2 text-xs sm:text-sm font-semibold text-white/90">
                          <span>Proficiency</span>
                          <span>{skill.level}%</span>
                        </div>
                        <div className="w-full bg-white/20 h-2 overflow-hidden border border-white/30 rounded-md">
                          <motion.div
                            className="h-full bg-white shadow-inner relative overflow-hidden"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 2, delay: index * 0.3, ease: "easeOut" }}
                            viewport={{ once: true }}
                          >

                            <motion.div
                              className="absolute inset-y-0 w-6 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                              animate={{
                                x: [-24, 200]
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatDelay: 3,
                                ease: "easeInOut"
                              }}
                            />
                          </motion.div>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-white/90 mb-2 sm:mb-3 uppercase tracking-wider">
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-1 sm:gap-2">
                          {skill.technologies.map(tech => (
                            // <WithPopover
                            //   className="max-w-[200px]"
                            //   key={`${skill.name}-${tech.name}`}
                            //   content={(
                            //     <div className="space-y-1">
                            //       <h4 className="text-sm font-semibold text-slate-800">{tech.name}</h4>
                            //       <div className="flex justify-between items-center text-xs">
                            //         <span className="text-slate-700">{tech.experience}</span>
                            //         <span className="text-slate-700">{tech.projects}+ projects</span>
                            //       </div>
                            //     </div>
                            //   )}
                            // >

                            <motion.button
                              key={`${skill.name}-${tech.name}`}
                              className="inline-flex items-center px-2 py-1 sm:px-3 sm:py-1 text-xs font-semibold bg-white/90 text-slate-800 hover:bg-white transition-all duration-200 border-2 border-white/50 hover:border-white shadow-lg hover:shadow-xl transform hover:scale-105 rounded-md"
                              whileHover={{ y: -2 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              {tech.name}
                            </motion.button>
                            // </WithPopover>
                          ))}
                        </div>
                      </div>
                    </div>

                    <motion.div
                      className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)"
                      }}
                    />
                  </div>

                  <div className={`absolute inset-0 ${skill.bgColor} opacity-30 transform translate-x-2 translate-y-2 -z-10 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-30 rounded-md`} />
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-sm sm:text-base text-slate-500 italic px-4">
              {isMobile ? "💡 Tap any technology for details" : "💡 Click on any technology within a skill to see detailed experience and project information"}
            </p>
          </motion.div> */}
        </div>
      </div>
    </section>
  )
}
