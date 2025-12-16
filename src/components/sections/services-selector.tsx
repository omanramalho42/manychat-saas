"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { MousePointer, Flame, FileText } from "lucide-react"
import { useTheme } from "@/contexts/theme-context"

const colorThemes = {
  starter: {
    primary: "rgb(34, 197, 94)", // green
    secondary: "rgb(22, 163, 74)",
    light: "rgb(74, 222, 128)",
    glow: "rgba(34, 197, 94, 0.5)",
    gradient: ["rgb(34, 197, 94)", "rgb(74, 222, 128)", "rgb(134, 239, 172)"],
  },
  // balanced: {
  //   primary: "rgb(217, 119, 6)", // amber
  //   secondary: "rgb(245, 158, 11)",
  //   light: "rgb(251, 191, 36)",
  //   glow: "rgba(245, 158, 11, 0.5)",
  //   gradient: ["rgb(217, 119, 6)", "rgb(245, 158, 11)", "rgb(251, 191, 36)"],
  // },
  balanced: {
    // Base colors
    primary: "rgb(124 58 237)",        // purple
    secondary: "rgb(168 85 247)",      // light purple
    light: "rgb(196 181 253)",         // lavender

    // Effects
    glow: "rgb(124 58 237 / 0.5)",

    // Gradient (roxo → lilás → lavanda)
    gradient: [
      "rgb(124 58 237)",               // primary
      "rgb(168 85 247)",               // secondary
      "rgb(196 181 253)",               // light
    ],
  },
  advanced: {
    primary: "rgb(239, 68, 68)", // red
    secondary: "rgb(220, 38, 38)",
    light: "rgb(248, 113, 113)",
    glow: "rgba(239, 68, 68, 0.5)",
    gradient: ["rgb(239, 68, 68)", "rgb(220, 38, 38)", "rgb(248, 113, 113)"],
  },
}

const services = [
  {
    id: "starter",
    name: "Starter",
    icon: MousePointer,
    angle: -60,
    title: "Conservative Strategy",
    description:
      "Perfect for beginners starting their automation journey. Get basic chatbot features with simple workflows and minimal risk.",
    features: ["Basic chatbots", "Up to 1,000 contacts", "Email support", "10 automation flows"],
  },
  {
    id: "balanced",
    name: "Balanced",
    icon: Flame,
    angle: 0,
    title: "Balanced Approach",
    description:
      "Full control, zero guesswork. Choose from Conservative, Balanced, or Dynamic strategies, adjusting risk tolerance to your preference.",
    features: ["Advanced chatbots", "Up to 10,000 contacts", "Priority support", "Unlimited flows", "A/B testing"],
  },
  {
    id: "advanced",
    name: "Dynamic",
    icon: FileText,
    angle: 60,
    title: "Dynamic Execution",
    description:
      "Maximum performance for aggressive growth. AI-powered automation with advanced analytics and real-time optimization.",
    features: [
      "AI-powered bots",
      "Unlimited contacts",
      "24/7 dedicated support",
      "Custom integrations",
      "White label options",
    ],
  },
]

export function ServicesSelector() {
  const [selectedService, setSelectedService] = useState(services[1])
  const { setTheme } = useTheme()
  const currentTheme = colorThemes[selectedService.id as keyof typeof colorThemes]

  useEffect(() => {
    setTheme(selectedService.id as "starter" | "balanced" | "advanced")
  }, [selectedService.id, setTheme])

  const getRotation = (angle: number) => {
    return angle
  }

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[rgb(var(--theme-primary-5))] to-black" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span
              className="text-sm font-medium  bg-[rgb(var(--theme-primary-20))] border border-[rgb(var(--theme-primary-20))] rounded-full px-4 py-1.5 tracking-wider"
              style={{
                color: "rgba(var(--theme-primary)",
                borderColor: "rgba(var(--theme-primary)",
              }}
            >
              TAILORED RISK MANAGEMENT
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
          >
            Multi-tiered risk strategies.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed"
          >
            Full control, zero guesswork. Choose from Conservative, Balanced, or Dynamic trading styles, adjusting risk
            tolerance to your preference.
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* Outer glow effect */}
                <motion.div
                  animate={{
                    background: `radial-gradient(circle, ${currentTheme.glow} 0%, transparent 70%)`,
                  }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 rounded-full blur-3xl"
                />
                

                {/* Main gauge container */}
                <div className="relative w-full h-full flex items-center justify-center">   
                  <div className="absolute top-10 pointer-events-none">
                    <motion.div
                      key={selectedService.id}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        borderColor: `${currentTheme.primary}50`,
                      }}
                      className="bg-gray-900/90 backdrop-blur-sm border rounded-lg px-6 py-2 shadow-lg"
                    >
                      <p className="text-sm font-semibold" style={{ color: currentTheme.light }}>
                        {selectedService.name}
                      </p>
                    </motion.div>
                  </div>
                  {/* SVG Gauge */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                    <defs>
                      <motion.linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor={currentTheme.gradient[0]} />
                        <stop offset="50%" stopColor={currentTheme.gradient[1]} />
                        <stop offset="100%" stopColor={currentTheme.gradient[2]} />
                      </motion.linearGradient>

                      {/* Glow filter */}
                      <filter
                        id="glow"
                        x="-50%"
                        y="-50%"
                        width="200%"
                        height="200%"
                        filterUnits="objectBoundingBox"
                      >
                        <feGaussianBlur
                          stdDeviation="4"
                          result="coloredBlur"
                        />
                        <feMerge>
                          <feMergeNode in="coloredBlur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>

                    </defs>

                    {/* Background circles */}
                    <circle
                      cx="200"
                      cy="200"
                      r="180"
                      fill="none"
                      stroke="rgb(31, 41, 55)"
                      strokeWidth="1"
                      opacity="0.3"
                    />
                    <circle
                      cx="200"
                      cy="200"
                      r="140"
                      fill="none"
                      stroke="rgb(31, 41, 55)"
                      strokeWidth="1"
                      opacity="0.3"
                    />
                    <circle
                      cx="200"
                      cy="200"
                      r="100"
                      fill="none"
                      stroke="rgb(31, 41, 55)"
                      strokeWidth="1"
                      opacity="0.3"
                    />

                    {/* Main arc track */}
                    <path
                      d="M 80 320 A 160 160 0 0 1 320 320"
                      fill="none"
                      stroke="rgb(31, 41, 55)"
                      strokeWidth="12"
                      strokeLinecap="round"
                    />
                    
                    <motion.path
                      d="M 80 320 A 160 160 10 0 1 320 320"
                      fill="none"
                      stroke="url(#arcGradient)"
                      strokeWidth="12"
                      strokeLinecap="round"
                      strokeDasharray="502"
                      initial={{ strokeDashoffset: 502 }}
                      animate={{
                        strokeDashoffset: selectedService.angle === -60 ? 335 : selectedService.angle === 0 ? 251 : 167,
                      }}
                      transition={{ duration: 0.7, ease: "easeInOut" }}
                      filter="url(#glow)"
                    />

                    {/* Radial grid lines */}
                    <line x1="200" y1="200" x2="80" y2="320" stroke="rgb(31, 41, 55)" strokeWidth="1" opacity="0.2" />
                    <line x1="200" y1="200" x2="200" y2="40" stroke="rgb(31, 41, 55)" strokeWidth="1" opacity="0.2" />
                    <line x1="200" y1="200" x2="320" y2="320" stroke="rgb(31, 41, 55)" strokeWidth="1" opacity="0.2" />
                  </svg>

                  {/* Service icons positioned on the arc */}
                  {services.map((service) => {
                    const Icon = service.icon
                    const isSelected = selectedService.id === service.id
                    const serviceTheme = colorThemes[service.id as keyof typeof colorThemes]
                    const angleRad = ((service.angle + 90) * Math.PI) / 180
                    const radius = 160
                    const x = 50 + (radius / 400) * 100 * Math.cos(angleRad)
                    const y = 50 + (radius / 400) * 100 * Math.sin(angleRad)

                    return (
                      <button
                        key={service.id}
                        onClick={() => setSelectedService(service)}
                        className="absolute group z-20"
                        style={{
                          left: `${x}%`,
                          top: `${y}%`,
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          style={{
                            background: isSelected
                              ? `linear-gradient(to bottom right, ${serviceTheme.primary}, ${serviceTheme.secondary})`
                              : undefined,
                            boxShadow: isSelected ? `0 10px 30px ${serviceTheme.glow}` : undefined,
                          }}
                          className={`relative w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-xl flex items-center justify-center transition-all duration-300 ${
                            isSelected
                              ? ""
                              : "bg-gray-800/80 backdrop-blur-sm border border-gray-700 group-hover:border-gray-600"
                          }`}
                        >
                          <Icon
                            className={`w-6 h-6 ${isSelected ? "text-white" : "text-gray-400 group-hover:text-white"}`}
                          />
                        </motion.div>
                      </button>
                    )
                  })}

                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <motion.div
                      animate={{ rotate: getRotation(selectedService.angle) }}
                      transition={{ type: "spring", stiffness: 80, damping: 12 }}
                      className="relative"
                      style={{ transformOrigin: "center center" }}
                    >
                      <motion.div
                        animate={{
                          background: `linear-gradient(to top, ${currentTheme.secondary}, ${currentTheme.primary}, ${currentTheme.light})`,
                          boxShadow: `0 0 20px ${currentTheme.glow}`,
                        }}
                        transition={{ duration: 0.5 }}
                        className="w-1.5 h-32 rounded-full relative"
                      >
                        {/* Needle tip */}
                        <motion.div
                          animate={{
                            backgroundColor: currentTheme.light,
                            boxShadow: `0 0 20px ${currentTheme.glow}`,
                          }}
                          transition={{ duration: 0.5 }}
                          className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full"
                        />
                      </motion.div>
                    </motion.div>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <motion.div
                      animate={{
                        background: `linear-gradient(to bottom right, ${currentTheme.primary}, ${currentTheme.secondary})`,
                        boxShadow: `0 0 20px ${currentTheme.glow}`,
                      }}
                      transition={{ duration: 0.5 }}
                      className="w-8 h-8 rounded-full border-4 border-gray-900"
                    />
                  </div>
                </div>
              </div>

              {/* Service selector buttons */}
              <div className="flex gap-3 justify-center mt-8 relative z-30">
                {services.map((service) => {
                  const serviceTheme = colorThemes[service.id as keyof typeof colorThemes]
                  const isSelected = selectedService.id === service.id

                  return (
                    <motion.button
                      key={service.id}
                      onClick={() => setSelectedService(service)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        background: isSelected
                          ? `linear-gradient(to right, ${serviceTheme.primary}, ${serviceTheme.secondary})`
                          : undefined,
                        boxShadow: isSelected ? `0 8px 20px ${serviceTheme.glow}` : undefined,
                      }}
                      className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all relative ${
                        isSelected
                          ? "text-white"
                          : "bg-gray-800/80 text-gray-400 hover:bg-gray-700 border border-gray-700 hover:border-gray-600"
                      }`}
                    >
                      {service.name}
                    </motion.button>
                  )
                })}
              </div>
            </motion.div>

            {/* Service details */}
            <motion.div
              key={selectedService.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-white">{selectedService.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed">{selectedService.description}</p>
              </div>

              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-white mb-4">Key Features:</h4>
                {selectedService.features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[rgb(var(--theme-primary))]" />
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="
                mt-8 px-8 py-3
                rounded-full font-medium text-white
                bg-[rgb(var(--theme-primary))]
                shadow-lg shadow-[rgb(var(--theme-primary)/0.35)]
                hover:shadow-[rgb(var(--theme-primary)/0.55)]
                transition-all
              "
            >
              Get Started with {selectedService.name}
            </motion.button>

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
