'use client'

import Layout from '@/components/Layout'
import { experience } from '@/data/experience'
import { skills, skillCategories } from '@/data/skills'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { motion } from 'framer-motion'
import { Download, Calendar, MapPin, ExternalLink, User, Award } from 'lucide-react'
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
              About Me
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              I started coding because I wanted to build things that actually help people. 
              Now I'm focused on landing my first software engineering role where I can ship real products.
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
                    <p className="text-primary-400 mb-4">Full Stack Developer</p>
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
                      <Award className="w-5 h-5 mr-2 text-primary-400" />
                      <span>Computer Science Graduate</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex justify-center">
                    <Button
                      variant="primary"
                      size="sm"
                      href="/Atharv%20Resume.pdf"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download Resume
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
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Introduction</h3>
                </CardHeader>
                <CardContent>
                  <div className="prose prose-invert max-w-none">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                      It all started in 2022 when I built my first website for a local business. They needed an online presence and I figured I could figure it out. That project took me 3 months, but seeing their excitement when it went live hooked me.
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                      Since then, I've shipped 5 production web applications - from e-commerce platforms to 3D visualization tools. Each project taught me something new: how to handle real user traffic, optimize performance, and write code that doesn't break when someone else touches it.
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                      What drives me now is building software that actually works in the real world. I'm not looking to build the next Facebook - I want to join a team where I can solve real problems for real users and learn from experienced developers along the way.
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Currently seeking: <span className="font-semibold text-primary-400">Frontend/Full-stack Developer roles</span> • <span className="font-semibold text-primary-400">Internships</span> • <span className="font-semibold text-primary-400">Junior positions</span>
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
