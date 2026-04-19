'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Mail, Zap, Rocket, CheckCircle } from 'lucide-react'
import Button from '@/components/ui/Button'
import HeroParticles from './HeroParticles'

const achievements = [
  { icon: Rocket, value: '5+', label: 'Real Projects Shipped' },
  { icon: Zap, value: '2-4', label: 'Week Delivery' },
  { icon: Mail, value: '<24h', label: 'Response Time' },
]

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-gray-50 to-secondary-900/20 dark:via-gray-900" />

      {/* Animated particles */}
      <HeroParticles />

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* SEO Hidden Name for Google */}
          <h1 className="sr-only">Atharv Pote - Freelance Web Developer India | Full Stack Developer</h1>

          {/* Main Headline */}
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            I Build Websites That
            <br />
            <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              Get You More Clients
            </span>
          </motion.h2>

          {/* Visible Name for SEO */}
          <motion.p
            className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            👋 Hi, I am Atharv Pote — Freelance Web Developer based in India
          </motion.p>

          {/* Value Proposition */}
          <motion.p
            className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-3 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            High-converting websites, web applications & e-commerce stores for businesses.
            I help startups and service companies turn visitors into paying customers.
          </motion.p>

          {/* Trust Line */}
          <motion.p
            className="text-lg text-primary-600 dark:text-primary-400 font-medium mb-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            No fluff. Just websites that bring real business results.
          </motion.p>

          {/* Social Proof Tags */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <span className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium">
              ✅ 5+ Real Projects Shipped
            </span>
            <span className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium">
              ⏱️ 2-4 Week Turnaround
            </span>
            <span className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium">
              � Conversion-Focused Builds
            </span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <Button
              variant="primary"
              size="lg"
              href="/contact"
              className="group min-w-[260px]"
            >
              <Mail className="mr-2 w-5 h-5" />
              Tell me about your project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              href="/projects"
              className="group min-w-[180px]"
            >
              View Projects
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Trust Microcopy */}
          <motion.div
            className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-12 text-sm text-gray-500 dark:text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75 }}
          >
            <span className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-1 text-green-500" />
              I will get back within 24 hours
            </span>
            <span className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-1 text-green-500" />
              Quick response. No spam.
            </span>
          </motion.div>

          {/* Achievement Stats */}
          <motion.div
            className="grid grid-cols-3 gap-8 max-w-lg mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            {achievements.map((item, index) => (
              <motion.div
                key={item.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              >
                <item.icon className="w-6 h-6 mx-auto mb-2 text-primary-500" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{item.value}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{item.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
