'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Download, ExternalLink } from 'lucide-react'
import Button from '@/components/ui/Button'
import HeroParticles from './HeroParticles'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-gray-50 to-secondary-900/20 dark:via-gray-900" />

      {/* Animated particles */}
      <HeroParticles />

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              Atharv Pote
            </span>
          </motion.h1>

          <motion.h2
            className="text-xl sm:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Full Stack Developer
          </motion.h2>

          <motion.p
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Crafting beautiful, scalable web applications with modern technologies.
            Passionate about clean code, user experience, and continuous learning.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              variant="primary"
              size="lg"
              href="/projects"
              className="group"
            >
              View My Work
              <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              href="/Atharv%20Resume.pdf"
              className="group"
            >
              Download Resume
              <Download className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </Button>
          </motion.div>

          <motion.div
            className="mt-12 flex justify-center space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-400">3+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary-400">50+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-400">10+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Happy Clients</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
