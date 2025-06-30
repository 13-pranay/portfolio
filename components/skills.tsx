"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Code, Database, Cloud, Smartphone, Palette, Zap } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend",
    icon: Palette,
    color: "from-cyan-500 to-blue-500",
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "JavaScript", level: 88 },
      { name: "React", level: 85 },
    ]
  },
  {
    title: "Backend & DB",
    icon: Database,
    color: "from-indigo-500 to-purple-500",
    skills: [
      { name: "Python", level: 90 },
      { name: "Flask", level: 85 },
      { name: "Django", level: 82 },
      { name: "MySQL", level: 95 },
      { name: "MongoDB", level: 75 },
    ]
  },
  {
    title: "Tools & Deployment",
    icon: Cloud,
    color: "from-teal-500 to-emerald-500",
    skills: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 92 },
      { name: "Netlify", level: 85 },
      { name: "Firebase", level: 78 },
      { name: "Postman", level: 80 },
    ]
  },
  {
    title: "Design & IDE",
    icon: Smartphone,
    color: "from-pink-500 to-rose-500",
    skills: [
      { name: "VS Code", level: 95 },
      { name: "Figma", level: 75 },
      { name: "Canva", level: 80 },
    ]
  },
  {
    title: "Other Skills",
    icon: Zap,
    color: "from-yellow-500 to-orange-500",
    skills: [
      { name: "Linux", level: 75 },
      { name: "API Integration", level: 82 },
      { name: "Problem Solving", level: 88 },
    ]
  }
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My tech stack & tools I use to build, solve, and ship.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="bg-white dark:bg-gray-900 shadow-sm rounded-xl p-6 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center mb-5">
                  <div className={`p-3 rounded-md bg-gradient-to-r ${category.color} text-white`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-semibold ml-4 text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1 }}
                          className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
