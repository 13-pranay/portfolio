"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Download, Eye, FileText, Award, Briefcase, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Resume() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const handleDownload = () => {
    // In a real application, this would download the actual resume file
    const link = document.createElement("a")
    link.href = "/pranay_resume.pdf"
    link.download = "pranay_resume.pdf"
    link.click()
  }

  return (
    <section id="resume" className="py-20 relative overflow-hidden">
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
              Resume
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Download my complete resume or view it online to learn more about my experience and qualifications.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Resume Preview */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-300/20 dark:border-cyan-500/20">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-cyan-400">Resume Preview</h3>
                <FileText className="w-8 h-8 text-gray-700 dark:text-cyan-400" />
              </div>

              {/* Mock PDF Preview */}
              <div className="bg-white rounded-lg p-6 text-gray-900 min-h-[500px] shadow-2xl">
                <div className="border-b border-gray-200 pb-4 mb-6">
                  <h1 className="text-2xl font-bold text-gray-900">Pranay Mallela</h1>
                  <p className="text-lg text-gray-600">Data Science Intern | BTech AI Student</p>
                  <p className="text-sm text-gray-500">Chennai | pranaymallela1910@gmail.com | 9848147756</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                      <Briefcase className="w-4 h-4 mr-2" />
                      Experience
                    </h2>
                    <div className="space-y-3 text-sm">
                      <div>
                        <h3 className="font-medium">Data Science Intern</h3>
                        <p className="text-gray-600">VHub | 2025 - Present</p>
                        <p className="text-gray-500">
                          Working on real-world datasets to perform data analysis, model building, and visualization using Python, pandas, and scikit-learn.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-medium">AI/ML Project Developer</h3>
                        <p className="text-gray-600">IIIT Kancheepuram | 2024</p>
                        <p className="text-gray-500">
                          Developed a reinforcement learning-based Flappy Bird AI and a content tracker app with React and Flask.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                      <GraduationCap className="w-4 h-4 mr-2" />
                      Education
                    </h2>
                    <div className="text-sm">
                      <h3 className="font-medium">BTech in Artificial Intelligence</h3>
                      <p className="text-gray-600">IIITDM Kancheepuram | 2022 - 2026 (Expected)</p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                      <Award className="w-4 h-4 mr-2" />
                      Skills
                    </h2>
                    <div className="text-sm text-gray-600">
                      <p>Python, pandas, NumPy, scikit-learn, React, JavaScript, Flask, MySQL, Git, Data Visualization, HCI Design</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Download Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-300/50 dark:border-gray-700/50">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-cyan-400">Download Resume</h3>

              <div className="space-y-6">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Get the complete version of my resume with detailed information about my experience, education,
                  skills, and achievements. Available in PDF format for easy viewing and printing.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      onClick={handleDownload}
                      className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-gray-600 to-gray-800 dark:from-cyan-500 dark:to-purple-600 hover:from-gray-500 hover:to-gray-700 dark:hover:from-cyan-400 dark:hover:to-purple-500 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-gray-500/25 dark:hover:shadow-cyan-500/25"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Download PDF
                    </Button>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <a href="/pranay_resume.pdf" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="...">
                        <Eye className="w-5 h-5 mr-2" />
                        View Online
                      </Button>
                    </a>
                    
                  </motion.div>
                </div>

                <div className="pt-6 border-t border-gray-300 dark:border-gray-700">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">What's Included:</h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    {[
                      "Complete work experience and achievements",
                      "Technical skills and proficiencies",
                      "Education and certifications",
                      "Notable projects and contributions",
                      "Contact information and references",
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                        className="flex items-center"
                      >
                        <div className="w-2 h-2 bg-gray-600 dark:bg-cyan-400 rounded-full mr-3" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { label: "Years Experience", value: "1", icon: Briefcase },
                { label: "Certifications", value: "3", icon: Award },
                { label: "Projects", value: "5+", icon: FileText },
                { label: "Technologies", value: "12+", icon: GraduationCap },
              ].map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                    className="bg-white/30 dark:bg-gray-700/30 rounded-xl p-4 text-center border border-gray-300/10 dark:border-cyan-500/10 hover:border-gray-400/30 dark:hover:border-cyan-500/30 transition-colors"
                  >
                    <Icon className="w-6 h-6 text-gray-700 dark:text-cyan-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
