"use client"

import React from "react"
import { motion } from "framer-motion"
import { Home, ArrowLeft, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NotFound() {
  const [windowSize, setWindowSize] = React.useState({
    width: 0,
    height: 0,
  })

  React.useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }, [])

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center overflow-hidden relative">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Glitch Grid */}
        <div className="absolute inset-0 opacity-20">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 1, 0],
                x: [0, Math.random() * 10 - 5, 0],
              }}
              transition={{
                duration: 0.5,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
              }}
              className="absolute w-full h-0.5 bg-cyan-400"
              style={{ top: `${(i / 20) * 100}%` }}
            />
          ))}
        </div>

        {/* Floating Particles */}
        {windowSize.width > 0 &&
          Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{
                x: Math.random() * windowSize.width,
                y: Math.random() * windowSize.height,
              }}
              animate={{
                x: Math.random() * windowSize.width,
                y: Math.random() * windowSize.height,
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-60"
            />
          ))}
      </div>

      <div className="relative z-10 text-center px-4">
        {/* 404 Text with Glitch Effect */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.h1
            animate={{
              textShadow: [
                "0 0 0px #22d3ee",
                "2px 2px 0px #22d3ee, -2px -2px 0px #a855f7",
                "0 0 0px #22d3ee",
              ],
            }}
            transition={{
              duration: 0.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatDelay: 2,
            }}
            className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          >
            404
          </motion.h1>
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 space-y-4"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white">Page Not Found</h2>
          <p className="text-gray-400 text-lg max-w-md mx-auto">
            Looks like you've ventured into uncharted digital space. The page you're looking for doesn't exist in this
            dimension.
          </p>
        </motion.div>

        {/* Glitch Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8"
        >
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="inline-block p-6 bg-gray-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl"
          >
            <Zap className="w-16 h-16 text-cyan-400" />
          </motion.div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            asChild
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
          >
            <Link href="/">
              <Home className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
          </Button>

          <Button
            onClick={() => window.history.back()}
            variant="outline"
            className="px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go Back
          </Button>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 text-gray-500 text-sm"
        >
          <p>Error Code: 404 | Digital Void Detected</p>
        </motion.div>
      </div>
    </div>
  )
}
