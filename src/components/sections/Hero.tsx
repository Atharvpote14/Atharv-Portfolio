'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Download, Mail, Code2, Trophy, Clock } from 'lucide-react'
import Button from '@/components/ui/Button'
import HeroParticles from './HeroParticles'

const achievements = [
  { icon: Code2, value: '5+', label: 'Production Apps' },
  { icon: Trophy, value: '500+', label: 'DSA Problems Solved' },
  { icon: Clock, value: '2+', label: 'Years Coding' },
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
          {/* Main Headline */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            React & Next.js Developer
            <br />
            <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              Who Ships Fast
            </span>
          </motion.h1>

          {/* Value Proposition */}
          <motion.p
            className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-4 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            I build high-performance web apps that solve real business problems. 
            From concept to deployment in record time.
          </motion.p>

          {/* Key Achievement Highlight */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <span className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm">
              ⚡ 5 Production Apps Built
            </span>
            <span className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm">
              🏆 500+ DSA Problems Solved
            </span>
            <span className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm">
              🚀 100% TypeScript Coverage
            </span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <Button
              variant="primary"
              size="lg"
              href="/projects"
              className="group min-w-[200px]"
            >
              View Projects
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="secondary"
              size="lg"
              href="mailto:atharvpote14@gmail.com"
              className="group min-w-[200px]"
            >
              <Mail className="mr-2 w-5 h-5" />
              Contact Me
            </Button>

            <Button
              variant="outline"
              size="lg"
              href="/Atharv%20Resume.pdf"
              className="group min-w-[200px]"
            >
              <Download className="mr-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
              Resume
            </Button>
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
