'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Target, Lightbulb, TrendingUp, ArrowRight, Mail, CheckCircle } from 'lucide-react'
import { projects } from '@/data/projects'
import { Card, CardContent } from '@/components/ui/Card'
import Button from '@/components/ui/Button'

// Case study data with client-focused problem/solution/outcome framing
const caseStudies = [
  {
    id: '1',
    title: 'Brand Advertisement Platform',
    summary: 'Premium brand experience that stood out from competitors',
    problem: 'An agro brand needed to differentiate in a crowded market with a forgettable online presence that was not converting visitors into inquiries.',
    solution: 'Built a cinematic, scroll-driven brand experience with immersive animations and premium visuals that told their story in a memorable way.',
    outcome: '40% increase in user engagement and significantly higher inquiry conversion from website visitors.',
    image: '/images/brand advertisement.png',
    liveUrl: 'https://brandadvertisement.netlify.app/',
    tags: ['Brand Experience', 'Landing Page'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: '3',
    title: 'ShopSphere E-Commerce',
    summary: 'Complete online store that handles real sales 24/7',
    problem: 'A small business needed to sell online but could not afford expensive platforms or complex setup processes that required technical knowledge.',
    solution: 'Developed a full e-commerce platform with secure Stripe payments, cart management, and order tracking—ready to handle real transactions immediately.',
    outcome: 'Enabled the business to process orders around the clock with automated payments and inventory tracking, expanding their reach beyond local customers.',
    image: '/images/shop sphere.png',
    liveUrl: 'https://atharvpote14.github.io/ShopSphere2.O/',
    tags: ['E-Commerce', 'Full-Stack'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: '5',
    title: 'CineBook Ticketing System',
    summary: 'Digital booking that eliminated queues and increased sales',
    problem: 'A movie theater was losing customers to long queues and manual booking hassles, with no way to offer contactless ticketing or real-time seat availability.',
    solution: 'Created a complete booking platform with real-time seat selection, digital ticket generation, and integrated payment processing.',
    outcome: 'Eliminated physical queues, improved customer experience, and increased booking convenience leading to higher ticket sales.',
    image: '/images/cine book.png',
    liveUrl: 'https://atharvpote14.github.io/CineBook/',
    tags: ['Booking System', 'Web App'],
    color: 'from-purple-500 to-violet-500',
  },
]

export default function FeaturedProjects() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.3 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Selected Work
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Real projects. Real problems solved. Real business results delivered.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ amount: 0.3 }}
            >
              <Card className="h-full flex flex-col overflow-hidden">
                {/* Image */}
                <div className="aspect-video bg-gray-200 dark:bg-gray-700 overflow-hidden">
                  <img 
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <CardContent className="flex-1 flex flex-col p-6">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-2 py-1 text-xs font-medium text-white rounded-md bg-gradient-to-r ${study.color}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title & Summary */}
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {study.summary}
                  </p>

                  {/* Problem / Solution / Outcome */}
                  <div className="space-y-3 flex-1">
                    {/* Problem */}
                    <div className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                        <Target className="w-3 h-3 text-red-500" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-red-600 dark:text-red-400 uppercase tracking-wider">Problem</span>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-snug">
                          {study.problem}
                        </p>
                      </div>
                    </div>

                    {/* Solution */}
                    <div className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                        <Lightbulb className="w-3 h-3 text-blue-500" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Solution</span>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-snug">
                          {study.solution}
                        </p>
                      </div>
                    </div>

                    {/* Outcome - Highlighted */}
                    <div className="flex items-start bg-green-50 dark:bg-green-900/20 rounded-lg p-3 -mx-1">
                      <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-2 flex-shrink-0">
                        <TrendingUp className="w-3 h-3 text-green-500" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-green-600 dark:text-green-400 uppercase tracking-wider">Outcome</span>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-snug font-medium">
                          {study.outcome}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-5 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <a
                      href={study.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium text-sm hover:underline"
                    >
                      View Live Project
                      <ExternalLink className="ml-1 w-4 h-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
