"use client"

import { useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, X, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Churn Prediction",
    description: "A machine learning-based solution to predict customer churn using classification models. Built with Python, pandas, and scikit-learn to process data and train predictive algorithms. Helps businesses identify and retain high-risk customers.",
    longDescription:
      "A machine learning-based solution to predict customer churn using classification models. Built with Python, pandas, and scikit-learn to process data and train predictive algorithms. Helps businesses identify and retain high-risk customers.",
    image: "/churn.png?height=400&width=600",
    tags: ["Python", "Machine Learning", "Pandas", "Scikit-Learn", "Data Science"],
    category: "Data Science",
    github: "https://github.com/13-pranay/Churn-Prediction",
    live: "https://example.com",
    featured: true,
  },
  {
    id: 2,
    title: "AI Dots & Boxes",
    description: "A Dots and Boxes game built with HTML, CSS, and JavaScript, supporting both multiplayer mode and Human vs AI gameplay, featuring dynamic grid generation, turn-based logic, and real-time score tracking.",
    longDescription:
      "A Dots and Boxes game built with HTML, CSS, and JavaScript, supporting both multiplayer mode and Human vs AI gameplay, featuring dynamic grid generation, turn-based logic, and real-time score tracking.",
    image: "/dots&boxes.png?height=400&width=600",
    tags: ["AI", "JavaScript", "HTML", "CSS", "Game Development"],
    category: "Frontend",
    github: "https://github.com/13-pranay/Dots-Boxes",
    live: "https://example.com",
    featured: true,
  },
  {
    id: 3,
    title: "Rock Paper Scissor Game",
    description: "An interactive Rock Paper Scissors game built with JavaScript, featuring autoplay mode, keyboard controls, dark mode support, and Human vs AI functionality, with a clean, responsive UI adhering to HCI and usability principles.",
    longDescription:
      "An interactive Rock Paper Scissors game built with JavaScript, featuring autoplay mode, keyboard controls, dark mode support, and Human vs AI functionality, with a clean, responsive UI adhering to HCI and usability principles.",
    image: "/rockpaperscissor.jpg?height=400&width=600",
    tags: ["AI","HCI","JavaScript", "HTML", "CSS", "Game Development"],
    category: "Frontend",
    github: "https://github.com/13-pranay/Rock-Paper-Scissor",
    live: "https://example.com",
    featured: false,
  },

  
  
  
]

const categories = ["All", "Full Stack", "Frontend", "Data Science", ]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [sortBy, setSortBy] = useState("featured")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const filteredProjects = projects
    .filter((project) => selectedCategory === "All" || project.category === selectedCategory)
    .sort((a, b) => {
      if (sortBy === "featured") return b.featured ? 1 : -1
      return a.title.localeCompare(b.title)
    })

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-200 to-gray-100 dark:from-gray-800 dark:to-gray-900" />

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
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work, featuring innovative solutions and cutting-edge technologies.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-between items-center mb-12 space-y-4 sm:space-y-0"
        >
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-gray-600 to-gray-800 dark:from-cyan-500 dark:to-purple-600 text-white"
                    : "border-gray-400/30 dark:border-cyan-500/30 text-gray-700 dark:text-cyan-400 hover:bg-gray-200/50 dark:hover:bg-cyan-500/10"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-gray-700 dark:text-cyan-400" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white dark:bg-gray-800 border border-gray-400/30 dark:border-cyan-500/30 rounded-lg px-3 py-2 text-gray-700 dark:text-cyan-400 focus:outline-none focus:border-gray-600 dark:focus:border-cyan-500"
            >
              <option value="featured">Featured First</option>
              <option value="alphabetical">Alphabetical</option>
            </select>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-300/50 dark:border-gray-700/50 hover:border-gray-400/50 dark:hover:border-cyan-500/30 transition-all duration-300"
            >
              {project.featured && (
                <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-gradient-to-r from-gray-600 to-gray-800 dark:from-cyan-500 dark:to-purple-600 rounded-full text-xs font-semibold text-white">
                  Featured
                </div>
              )}

              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-gray-700 dark:group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-200/50 dark:bg-cyan-500/10 border border-gray-400/20 dark:border-cyan-500/20 rounded text-gray-700 dark:text-cyan-400 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <Button
                    onClick={() => setSelectedProject(project)}
                    className="px-4 py-2 bg-gradient-to-r from-gray-600 to-gray-800 dark:from-cyan-500 dark:to-purple-600 hover:from-gray-500 hover:to-gray-700 dark:hover:from-cyan-400 dark:hover:to-purple-500 text-white rounded-lg transition-all duration-300"
                  >
                    View Details
                  </Button>

                  <div className="flex space-x-2">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 rounded-full bg-gray-300/50 dark:bg-gray-700/50 hover:bg-gray-400/50 dark:hover:bg-gray-600/50 transition-colors"
                      aria-label="View GitHub repository"
                    >
                      <Github className="w-4 h-4 text-gray-700 dark:text-cyan-400" />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 rounded-full bg-gray-300/50 dark:bg-gray-700/50 hover:bg-gray-400/50 dark:hover:bg-gray-600/50 transition-colors"
                      aria-label="View live demo"
                    >
                      <ExternalLink className="w-4 h-4 text-gray-700 dark:text-cyan-400" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-800 rounded-2xl border border-gray-300/20 dark:border-cyan-500/20"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-300/50 dark:bg-gray-700/50 hover:bg-gray-400/50 dark:hover:bg-gray-600/50 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-6 h-6 text-gray-900 dark:text-white" />
                </button>

                <div className="relative">
                  <Image
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={selectedProject.title}
                    width={800}
                    height={400}
                    className="w-full h-64 md:h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-800 to-transparent" />
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{selectedProject.title}</h3>
                    {selectedProject.featured && (
                      <span className="px-3 py-1 bg-gradient-to-r from-gray-600 to-gray-800 dark:from-cyan-500 dark:to-purple-600 rounded-full text-sm font-semibold text-white">
                        Featured
                      </span>
                    )}
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                    {selectedProject.longDescription}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-200/50 dark:bg-cyan-500/10 border border-gray-400/20 dark:border-cyan-500/20 rounded-full text-gray-700 dark:text-cyan-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <Button
                      asChild
                      className="px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-800 dark:from-cyan-500 dark:to-purple-600 hover:from-gray-500 hover:to-gray-700 dark:hover:from-cyan-400 dark:hover:to-purple-500 text-white rounded-lg transition-all duration-300"
                    >
                      <a href={selectedProject.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-5 h-5 mr-2" />
                        View Live Demo
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="px-6 py-3 border-gray-400/50 dark:border-cyan-500/50 text-gray-700 dark:text-cyan-400 hover:bg-gray-200/50 dark:hover:bg-cyan-500/10 rounded-lg transition-all duration-300"
                    >
                      <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-5 h-5 mr-2" />
                        View Code
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
