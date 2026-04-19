'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Target, Lightbulb, TrendingUp } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'
import Button from '@/components/ui/Button'

const caseStudies = [
  {
    title: 'Brand Advertisement Platform',
    category: 'Landing Page',
    problem: 'A local agro brand needed to stand out in a crowded market with a premium online presence that would captivate visitors and drive inquiries.',
    solution: 'Built a cinematic scrollytelling website with immersive animations, premium visuals, and optimized performance to create memorable brand experiences.',
    outcome: '40% increase in user engagement and significantly higher inquiry conversion rates.',
    metrics: ['40% engagement boost', '95+ Lighthouse score', '2x longer session duration'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'E-Commerce Platform',
    category: 'Full-Stack Store',
    problem: 'Small business needed an affordable, professional e-commerce solution with secure payments and inventory management to compete with larger retailers.',
    solution: 'Developed a complete e-commerce platform with Stripe integration, persistent shopping cart, order tracking, and responsive product catalog.',
    outcome: 'Enabled the business to process online orders 24/7 with automated payment handling and inventory tracking.',
    metrics: ['1000+ products managed', 'Secure Stripe checkout', 'Automated order tracking'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Cinema Booking System',
    category: 'Web Application',
    problem: 'Movie theater needed to reduce queues and enable contactless ticketing with real-time seat availability to improve customer experience.',
    solution: 'Created a complete booking platform with real-time seat selection, showtime scheduling, digital ticket generation, and payment processing.',
    outcome: 'Eliminated physical queues, increased booking convenience, and improved theater operational efficiency.',
    metrics: ['Real-time seat selection', 'Digital ticket delivery', 'Contactless payments'],
    color: 'from-purple-500 to-violet-500',
  },
]

export default function ResultsImpact() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.3 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Results & Impact
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Real projects, real problems solved, real business outcomes delivered.
          </p>
        </motion.div>

        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ amount: 0.3 }}
            >
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-4">
                    {/* Project Header */}
                    <div className={`lg:col-span-1 p-6 bg-gradient-to-br ${study.color} text-white`}>
                      <span className="text-xs font-medium opacity-80 uppercase tracking-wider">
                        {study.category}
                      </span>
                      <h3 className="text-xl font-bold mt-2">{study.title}</h3>
                      <div className="mt-4 space-y-2">
                        {study.metrics.map((metric, idx) => (
                          <div key={idx} className="flex items-center text-sm">
                            <ArrowUpRight className="w-4 h-4 mr-1 opacity-80" />
                            <span>{metric}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Case Study Content */}
                    <div className="lg:col-span-3 p-6 lg:p-8">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Problem */}
                        <div>
                          <div className="flex items-center mb-3">
                            <div className="w-8 h-8 rounded-lg bg-red-100 dark:bg-red-900/30 flex items-center justify-center mr-2">
                              <Target className="w-4 h-4 text-red-500" />
                            </div>
                            <h4 className="font-semibold text-gray-900 dark:text-white">Problem</h4>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                            {study.problem}
                          </p>
                        </div>

                        {/* Solution */}
                        <div>
                          <div className="flex items-center mb-3">
                            <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-2">
                              <Lightbulb className="w-4 h-4 text-blue-500" />
                            </div>
                            <h4 className="font-semibold text-gray-900 dark:text-white">Solution</h4>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                            {study.solution}
                          </p>
                        </div>

                        {/* Outcome */}
                        <div>
                          <div className="flex items-center mb-3">
                            <div className="w-8 h-8 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-2">
                              <TrendingUp className="w-4 h-4 text-green-500" />
                            </div>
                            <h4 className="font-semibold text-gray-900 dark:text-white">Outcome</h4>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                            {study.outcome}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ amount: 0.3 }}
        >
          <Button variant="outline" href="/projects">
            View All Projects
            <ArrowUpRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
