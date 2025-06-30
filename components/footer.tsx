"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Twitter, Heart, ArrowUp } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" },
  ]

  const socialLinks = [
    { icon: Github, href: "https://github.com/13-pranay", label: "GitHub" },
    
    
    { icon: Mail, href: "mailto:pranaymallela1910@gmail.com", label: "Email" },
  ]

  return (
    <footer className="relative bg-gray-200 dark:bg-gray-900 border-t border-gray-300 dark:border-gray-800">
      <div className="absolute inset-0 bg-gradient-to-t from-gray-200 via-gray-200/95 to-transparent dark:from-gray-900 dark:via-gray-900/95 dark:to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-700 to-gray-900 dark:from-cyan-400 dark:to-purple-500 bg-clip-text text-transparent">
              Pranay
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Developer passionate about creating innovative digital experiences that make a difference in
              people's lives.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-full bg-gray-300/50 dark:bg-gray-800/50 border border-gray-400/20 dark:border-cyan-500/20 hover:border-gray-500/40 dark:hover:border-cyan-500/40 hover:bg-gray-400/50 dark:hover:bg-cyan-500/10 transition-all duration-300"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 text-gray-700 dark:text-cyan-400" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-cyan-400 transition-colors duration-200 block py-1"
                    onClick={(e) => {
                      e.preventDefault()
                      document.getElementById(link.href.slice(1))?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Get In Touch</h4>
            <div className="space-y-2 text-gray-600 dark:text-gray-400">
              <p>Chennai</p>
              <p>pranaymallela1910@gmail.com</p>
              <p>+91 9848147756</p>
            </div>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-gray-600 to-gray-800 dark:from-cyan-500 dark:to-purple-600 hover:from-gray-500 hover:to-gray-700 dark:hover:from-cyan-400 dark:hover:to-purple-500 text-white rounded-lg transition-all duration-300"
            >
              <ArrowUp className="w-4 h-4 mr-2" />
              Back to Top
            </motion.button>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 border-t border-gray-300 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center">
            © {currentYear} Pranay . Made with <Heart className="w-4 h-4 mx-1 text-red-400" fill="currentColor" />
            and lots of coffee.
          </p>
          <p className="text-gray-500 text-sm">Built with Next.js, Tailwind CSS, and Framer Motion</p>
        </motion.div>
      </div>
    </footer>
  )
}
