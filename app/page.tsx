"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Resume from "@/components/resume"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import LoadingScreen from "@/components/loading-screen"
import CustomCursor from "@/components/custom-cursor"
import ParticleBackground from "@/components/particle-background"
import Chatbot from "@/components/chatbot"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">{isLoading && <LoadingScreen key="loading" />}</AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white overflow-x-hidden"
        >
          <CustomCursor />
          <ParticleBackground />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Resume />
            <Contact />
          </main>
          <Footer />
          <Chatbot />
        </motion.div>
      )}
    </>
  )
}
