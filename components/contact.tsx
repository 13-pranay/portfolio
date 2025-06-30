"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errors, setErrors] = useState<Record<string, string>>({})

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid"
    if (!formData.subject.trim()) newErrors.subject = "Subject is required"
    if (!formData.message.trim()) newErrors.message = "Message is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setStatus("loading")

    // Simulate API call
    setTimeout(() => {
      setStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })
      setTimeout(() => setStatus("idle"), 3000)
    }, 2000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
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
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-300/20 dark:border-cyan-500/20">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-cyan-400">Let's Connect</h3>

              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    value: "pranaymallela1910@gmail.com",
                    href: "mailto:alex@example.com",
                  },
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "+91 9848147756",
                    href: "tel:+919848147756",
                  },
                  {
                    icon: MapPin,
                    label: "Location",
                    value: "Chennai",
                    href: "#",
                  },
                ].map((item, index) => {
                  const Icon = item.icon
                  return (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center space-x-4 p-4 rounded-xl bg-gray-200/30 dark:bg-gray-700/30 hover:bg-gray-300/50 dark:hover:bg-gray-700/50 transition-colors group"
                    >
                      <div className="p-3 rounded-full bg-gradient-to-r from-gray-600 to-gray-800 dark:from-cyan-500 dark:to-purple-600 group-hover:from-gray-500 group-hover:to-gray-700 dark:group-hover:from-cyan-400 dark:group-hover:to-purple-500 transition-all">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">{item.label}</p>
                        <p className="text-gray-900 dark:text-white font-medium">{item.value}</p>
                      </div>
                    </motion.a>
                  )
                })}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-300 dark:border-gray-700">
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  I'm always interested in new opportunities and exciting projects. Whether you have a question or just
                  want to say hi, I'll try my best to get back to you!
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-300/50 dark:border-gray-700/50">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-cyan-400">Send Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-white/50 dark:bg-gray-700/50 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                        errors.name
                          ? "border-red-500 focus:ring-red-500/50"
                          : "border-gray-300 dark:border-gray-600 focus:border-gray-500 dark:focus:border-cyan-500 focus:ring-gray-500/50 dark:focus:ring-cyan-500/50"
                      }`}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-400 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-white/50 dark:bg-gray-700/50 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                        errors.email
                          ? "border-red-500 focus:ring-red-500/50"
                          : "border-gray-300 dark:border-gray-600 focus:border-gray-500 dark:focus:border-cyan-500 focus:ring-gray-500/50 dark:focus:ring-cyan-500/50"
                      }`}
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-400 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white/50 dark:bg-gray-700/50 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                      errors.subject
                        ? "border-red-500 focus:ring-red-500/50"
                        : "border-gray-300 dark:border-gray-600 focus:border-gray-500 dark:focus:border-cyan-500 focus:ring-gray-500/50 dark:focus:ring-cyan-500/50"
                    }`}
                    placeholder="What's this about?"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-400 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white/50 dark:bg-gray-700/50 border rounded-lg focus:outline-none focus:ring-2 transition-all resize-none ${
                      errors.message
                        ? "border-red-500 focus:ring-red-500/50"
                        : "border-gray-300 dark:border-gray-600 focus:border-gray-500 dark:focus:border-cyan-500 focus:ring-gray-500/50 dark:focus:ring-cyan-500/50"
                    }`}
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-400 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.message}
                    </p>
                  )}
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full px-8 py-4 bg-gradient-to-r from-gray-600 to-gray-800 dark:from-cyan-500 dark:to-purple-600 hover:from-gray-500 hover:to-gray-700 dark:hover:from-cyan-400 dark:hover:to-purple-500 text-white font-semibold rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <div className="flex items-center justify-center">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </div>
                    )}
                  </Button>
                </motion.div>

                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-center p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400"
                  >
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
