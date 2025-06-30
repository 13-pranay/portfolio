"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Calendar, MapPin, Code, Coffee, Rocket, Heart } from "lucide-react"
import Image from "next/image"

const timelineEvents = [
  {
    year: "2025",
    title: "Data Science Intern",
    company: "VHub",
    description:
      "Working on data-driven projects involving machine learning and analytics. Gaining hands-on experience with real-world datasets and model deployment.",
    icon: Rocket,
    color: "from-cyan-400 to-blue-500",
  },
  {
    year: "2024",
    title: "AI/ML Developer (Academic Projects)",
    company: "IIIT Kancheepuram",
    description:
      "Built projects like an AI-based Flappy Bird player using reinforcement learning and a content tracker web app with smart features.",
    icon: Code,
    color: "from-purple-400 to-pink-500",
  },
  {
    year: "2023",
    title: "Frontend + Game Developer",
    company: "Hackathons & Personal Projects",
    description:
      "Created games like Rock Paper Scissors and Dots and Boxes applying UI/UX and HCI principles. Explored JavaScript, React, and clean design.",
    icon: Coffee,
    color: "from-green-400 to-emerald-500",
  },
  {
    year: "2022",
    title: "BTech AI Student",
    company: "IIIT Kancheepuram",
    description:
      "Started the journey into Artificial Intelligence and Software Engineering. Passionate about solving real-world problems with tech.",
    icon: Heart,
    color: "from-orange-400 to-red-500",
  },
]


export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-700 to-gray-900 dark:from-cyan-400 dark:to-purple-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate developer with creating digital solutions that
            combine beautiful design with powerful functionality.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Info with Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Profile Card */}
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-300/20 dark:border-cyan-500/20">
              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-6 mb-6">
                {/* Smaller Profile Image for About Section */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative w-32 h-32 rounded-full overflow-hidden border-3 border-gradient-to-r from-cyan-400 to-purple-500 flex-shrink-0"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-600 dark:from-cyan-400 dark:to-purple-500 rounded-full p-0.5">
                    <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-900">
                      <Image
                        src="/pp.jpg?height=128&width=128"
                        alt="Pranay Profile"
                        width={128}
                        height={128}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </motion.div>

                <div className="text-center sm:text-left">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-cyan-400">Get to Know Me</h3>
                  <div className="space-y-3 text-gray-600 dark:text-gray-300">
                    <div className="flex items-center justify-center sm:justify-start space-x-3">
                      <MapPin className="w-5 h-5 text-gray-700 dark:text-cyan-400" />
                      <span>Chennai</span>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start space-x-3">
                      <Calendar className="w-5 h-5 text-gray-700 dark:text-cyan-400" />
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                I am a dedicated and forward-thinking software developer currently pursuing a BTech in Artificial Intelligence. My interests lie at the intersection of intelligent systems and clean, user-focused design, with a strong emphasis on building modern, responsive, and impactful web applications.With hands-on experience in Artificial Intelligence and Machine Learning, I enjoy experimenting with data-driven solutions and integrating smart functionalities into real-world applications. I’m particularly passionate about exploring how intelligent systems can be applied to solve meaningful problems.Beyond technology, I’ve been a cricket enthusiast since childhood — the game has taught me teamwork, leadership, and resilience. Playing cricket is not just a hobby for me; it’s a way to stay focused, energized, and balanced.Whether coding solo or collaborating within a team, I bring creativity, discipline, and a continuous learning mindset to everything I do.
              </p>

              <div className="flex flex-wrap gap-3">
                {["Python", "Django", "AI", "ML", "HTML","CSS","Javascript"].map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 bg-gray-200/50 dark:bg-cyan-500/10 border border-gray-400/20 dark:border-cyan-500/20 rounded-full text-gray-700 dark:text-cyan-400 text-sm hover:bg-gray-300/50 dark:hover:bg-cyan-500/20 transition-colors cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Fun Facts */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-300/30 dark:border-gray-700/30"
            >
              <h4 className="text-lg font-semibold text-gray-800 dark:text-cyan-400 mb-4">Fun Facts</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3" />
                  Coffee enthusiast ☕ - 4 cups minimum per day
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3" />
                  Open source contributor with 100+ GitHub repos
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mr-3" />
                  Weekend hiker and nature photographer
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3" />
                  Mentor to 20+ junior developers
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <h3 className="text-2xl font-bold mb-8 text-center text-gray-800 dark:text-cyan-400">My Journey</h3>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gray-400 to-gray-600 dark:from-cyan-400 dark:via-purple-500 dark:to-pink-500" />

              {timelineEvents.map((event, index) => {
                const Icon = event.icon
                return (
                  <motion.div
                    key={event.year}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                    className="relative flex items-start space-x-6 pb-8"
                  >
                    {/* Timeline Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${event.color} shadow-lg`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Content */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="flex-1 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-300/50 dark:border-gray-700/50 hover:border-gray-400/50 dark:hover:border-cyan-500/30 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{event.title}</h4>
                        <span className="text-sm text-gray-700 dark:text-cyan-400 font-medium">{event.year}</span>
                      </div>
                      <p className="text-gray-600 dark:text-purple-400 font-medium mb-2">{event.company}</p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{event.description}</p>
                    </motion.div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
