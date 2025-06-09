"use client"

import { motion } from "framer-motion"
import { Code, Database, Palette, Server, Terminal } from "lucide-react"
import { useEffect, useState } from "react"
import { WithPopover } from "../ui/popover"
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
      { name: "React", experience: "5+ years", projects: 15, description: "Expert in React ecosystem including hooks, context, performance optimization" },
      { name: "Next.js", experience: "3+ years", projects: 8, description: "Full-stack React framework with SSR, API routes, and deployment optimization" },
      { name: "TypeScript", experience: "4+ years", projects: 12, description: "Type-safe development with advanced typing patterns and generics" },
      { name: "Tailwind CSS", experience: "3+ years", projects: 10, description: "Utility-first CSS framework for rapid UI development" }
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
      { name: "Node.js", experience: "5+ years", projects: 20, description: "Server-side JavaScript with Express, real-time applications, and API development" },
      { name: "Java", experience: "6+ years", projects: 25, description: "Enterprise applications with Spring Boot, microservices, and JVM optimization" },
      { name: "Golang", experience: "2+ years", projects: 6, description: "High-performance backend services and concurrent programming" },
      { name: "Python", experience: "3+ years", projects: 8, description: "Data processing, automation, and API development with Django/FastAPI" }
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
      { name: "AWS", experience: "4+ years", projects: 15, description: "Cloud architecture with EC2, Lambda, S3, RDS, and CloudFormation" },
      { name: "Docker", experience: "4+ years", projects: 18, description: "Containerization, multi-stage builds, and orchestration" },
      { name: "Kubernetes", experience: "2+ years", projects: 5, description: "Container orchestration, scaling, and service mesh" },
      { name: "CI/CD", experience: "5+ years", projects: 20, description: "GitLab CI, GitHub Actions, Jenkins, and deployment automation" }
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
      { name: "Figma", experience: "4+ years", projects: 30, description: "UI/UX design, prototyping, and design system creation" },
      { name: "UX/UI", experience: "5+ years", projects: 25, description: "User research, wireframing, and interaction design" },
      { name: "Prototyping", experience: "4+ years", projects: 20, description: "Interactive prototypes and user testing" },
      { name: "Design Systems", experience: "3+ years", projects: 8, description: "Component libraries, tokens, and design consistency" }
    ]
  }
]

// Experience & Skills Section with Updated Colors - Now comes after Hero
export default function HomeExperience() {
  const [inView, setInView] = useState(false)
  const [windowHeight, setWindowHeight] = useState(800) // Default fallback
  const [matrixChars, setMatrixChars] = useState<Array<{
    id: number
    char: string
    x: number
    delay: number
    duration: number
  }>>([])

  // Get window height and generate matrix chars on client side
  useEffect(() => {
    setWindowHeight(window.innerHeight)

    // Create Matrix-style falling code characters
    const chars = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      char: ["0", "1", "{", "}", "<", ">", "(", ")", ";", "=", "+", "-", "*", "/", "$", "#"][Math.floor(Math.random() * 16)],
      x: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.random() * 3 + 2,
    }))
    setMatrixChars(chars)
  }, [])

  return (
    <section className="py-0 bg-slate-900 relative overflow-hidden">

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
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex items-center gap-2 ml-4">
                  <Terminal className="h-4 w-4 text-green-400" />
                  <span className="text-green-400 font-mono text-sm">johann@portfolio:~$ get_experience --years</span>
                </div>
              </div>

              <div className="p-6 font-mono">
                <div className="text-green-400 mb-2">
                  <span className="text-green-500">$</span> Calculating professional experience...
                </div>
                <div className="text-green-300">
                  <span className="text-green-500">→</span> Scanning development history
                </div>
                <div className="text-green-300">
                  <span className="text-green-500">→</span> Processing project milestones
                </div>
                <div className="text-green-300">
                  <span className="text-green-500">→</span> Computing experience metrics
                </div>
                <div className="text-center">
                  <motion.div
                    className="mb-8"
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
                          className="text-lg md:text-2xl lg:text-[15rem] leading-none font-bold text-green-400"
                          startDate={new Date(2019, 1, 15)}
                        />
                      </div>

                      <motion.span
                        className="block w-1 h-6 bg-green-400 ml-2"
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                    </motion.div>
                  </motion.div>

                  <div className="text-green-400">
                    <span className="text-green-500">✓</span>{" "}Years of experience calculation complete
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="py-32 bg-slate-200 relative">
        <div className="container mx-auto px-8 relative z-10">

          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-slate-800 mb-4">Technical Skills</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive expertise across the full stack of modern development
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-12">
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
                      <div className="absolute top-4 right-4 w-16 h-16 border-2 border-white transform rotate-12"></div>
                      <div className="absolute bottom-8 left-6 w-8 h-8 bg-white opacity-20"></div>
                      <div className="absolute top-1/2 right-8 w-4 h-4 bg-white opacity-30 transform rotate-45"></div>
                    </div>

                    <motion.div
                      className="absolute top-6 left-6 w-6 h-6 bg-white/20"
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

                    <div className="p-8 relative z-10">

                      <motion.div
                        className={`w-20 h-20 ${skill.iconBg} flex items-center justify-center mx-auto mb-6 border-2 ${skill.borderColor} shadow-lg relative rounded-md`}
                        whileHover={{
                          scale: 1.15,
                          rotate: [0, -10, 10, 0]
                        }}
                        transition={{ duration: 0.4 }}
                      >
                        <skill.icon className={`h-10 w-10 ${skill.iconColor}`} />

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

                      <h3 className="text-2xl font-bold text-white mb-4 text-center tracking-wide">
                        {skill.name}
                      </h3>

                      <div className="mb-6">
                        <div className="flex justify-between items-center mb-2 text-sm font-semibold text-white/90">
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
                        <h4 className="text-sm font-bold text-white/90 mb-3 uppercase tracking-wider">
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {skill.technologies.map(tech => (
                            <WithPopover
                              key={`${skill.name}-${tech.name}`}
                              content={(
                                <div className="p-6 space-y-4">
                                  <div>
                                    <h4 className="text-lg font-semibold text-slate-800 mb-2">{tech.name}</h4>
                                  </div>
                                  <div className="grid grid-cols-2 gap-4">
                                    <div className="border border-indigo-200 p-4">
                                      <h5 className="text-sm font-semibold text-slate-700 mb-1">Experience</h5>
                                      <p className="text-lg font-bold text-indigo-600">{tech.experience}</p>
                                    </div>
                                    <div className="border border-slate-200 p-4">
                                      <h5 className="text-sm font-semibold text-slate-700 mb-1">Projects</h5>
                                      <p className="text-lg font-bold text-slate-600">{tech.projects}+</p>
                                    </div>
                                  </div>
                                  <div>
                                    <h5 className="text-sm font-semibold text-slate-800 mb-2">Expertise Details</h5>
                                    <p className="text-sm text-slate-600 leading-relaxed">{tech.description}</p>
                                  </div>
                                </div>
                              )}
                            >

                              <motion.button
                                className="inline-flex items-center px-3 py-1 text-xs font-semibold bg-white/90 text-slate-800 hover:bg-white cursor-pointer transition-all duration-200 border-2 border-white/50 hover:border-white shadow-lg hover:shadow-xl transform hover:scale-105 rounded-md"
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                {tech.name}
                              </motion.button>
                            </WithPopover>
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

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-slate-500 italic">
              💡 Click on any technology badge above to see detailed experience and project information
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
