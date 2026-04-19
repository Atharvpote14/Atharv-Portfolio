'use client'

import Layout from '@/components/Layout'
import { experience } from '@/data/experience'
import { skills, skillCategories } from '@/data/skills'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { motion } from 'framer-motion'
import { Calendar, MapPin, ArrowRight, Zap, Rocket, Calendar as CalendarIcon } from 'lucide-react'
import Image from 'next/image'

export default function AboutPage() {
  const currentYear = new Date().getFullYear()
  const yearsOfExperience = currentYear - 2023

  return (
    <Layout>
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Your Development Partner
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              I am a solo developer who helps businesses turn ideas into working products.
              Fast, reliable, and focused on results that matter.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Profile Card - Top */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <div className="flex flex-col items-center text-center">
                    <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4 ring-4 ring-primary-400/30 shadow-2xl">
                      <Image
                        src="/images/Atharv Profile Pic.JPG"
                        alt="Atharv Pote"
                        fill
                        sizes="160px"
                        className="object-cover"
                        priority
                      />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Atharv Pote</h2>
                    <p className="text-primary-400 mb-4">Independent Web Developer</p>
                    <div className="flex flex-wrap gap-2 justify-center mb-6">
                      <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full">
                        React
                      </span>
                      <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full">
                        Next.js
                      </span>
                      <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full">
                        Node.js
                      </span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap justify-center gap-6">
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <Calendar className="w-5 h-5 mr-2 text-primary-400" />
                      <span>{yearsOfExperience}+ years of experience</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <MapPin className="w-5 h-5 mr-2 text-primary-400" />
                      <span>Based in India</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <Rocket className="w-5 h-5 mr-2 text-primary-400" />
                      <span>5+ Products Shipped</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex justify-center">
                    <Button
                      variant="primary"
                      size="sm"
                      href="/contact"
                    >
                      <CalendarIcon className="w-4 h-4 mr-2" />
                      Get in Touch
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Main Content - Full Width */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Introduction */}
              <Card>
                <CardHeader>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How I Work</h3>
                </CardHeader>
                <CardContent>
                  <div className="prose prose-invert max-w-none">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                      I started building websites in 2022 for a local business that needed an online presence. That first project took three months, but the client's reaction when they saw their business live on the web—that excitement never gets old.
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                      Since then, I have shipped 5 production web applications across different industries—e-commerce, booking systems, brand experiences, and interactive tools. Every project has sharpened my ability to understand what clients actually need versus what they think they want.
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                      As a solo developer, I offer something agencies cannot: direct communication, quick decisions, and complete accountability. When you hire me, you work with me—not an account manager, not a junior developer learning on your project.
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      I deliver fast without cutting corners. Most projects launch in 2-4 weeks, depending on complexity. I keep you updated throughout the process, and I am available for questions or adjustments even after launch.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Experience Timeline */}
              <Card>
                <CardHeader>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Experience</h3>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    {experience.map((job, index) => (
                      <motion.div
                        key={job.id}
                        className="relative pl-8 pb-8 border-l-2 border-gray-300 dark:border-gray-600 last:border-l-0"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <div className="absolute left-0 top-0 w-4 h-4 bg-primary-500 rounded-full -translate-x-1/2" />
                        
                        <div className="mb-2">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{job.title}</h4>
                          <p className="text-primary-400">{job.company}</p>
                          <p className="text-gray-600 dark:text-gray-400 text-sm">{job.period}</p>
                        </div>
                        
                        <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
                          {job.description.map((desc, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="w-1 h-1 bg-primary-400 rounded-full mt-2 mr-2 flex-shrink-0" />
                              {desc}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Skills Overview */}
              <Card>
                <CardHeader>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Technical Skills</h3>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skillCategories.slice(1).map((category) => {
                      const categorySkills = skills.filter(skill => skill.category === category.value)
                      return (
                        <div key={category.value}>
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 capitalize">
                            {category.name}
                          </h4>
                          <div className="space-y-2">
                            {categorySkills.map((skill) => (
                              <div key={skill.name} className="flex justify-between items-center">
                                <span className="text-gray-600 dark:text-gray-300 text-sm">{skill.name}</span>
                                <div className="flex items-center">
                                  <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2 mr-2">
                                    <div
                                      className={`h-2 rounded-full ${
                                        category.value === 'frontend' 
                                          ? 'bg-primary-500' 
                                          : category.value === 'backend'
                                          ? 'bg-secondary-500'
                                          : 'bg-purple-500'
                                      }`}
                                      style={{ width: `${skill.level}%` }}
                                    />
                                  </div>
                                  <span className="text-gray-500 text-xs w-8">{skill.level}%</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
