'use client'

import { motion } from 'framer-motion'
import { Rocket, Building2, Users, CheckCircle, ArrowRight } from 'lucide-react'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import Button from '@/components/ui/Button'

const clientTypes = [
  {
    icon: Rocket,
    title: 'SaaS Founders',
    description: 'Early-stage startups that need a high-converting marketing site or a functional MVP to validate their idea with real users.',
    benefits: [
      'Landing pages that explain complex products simply',
      'MVPs built fast to test market demand',
      'Scalable architecture for future growth',
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Building2,
    title: 'Service Businesses',
    description: 'Local and regional service providers who need more leads and a professional online presence to compete effectively.',
    benefits: [
      'Lead generation websites that convert visitors',
      'Booking systems that reduce admin work',
      'Mobile-first design for on-the-go customers',
    ],
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Users,
    title: 'Agencies & Studios',
    description: 'Creative and marketing agencies that need a reliable development partner to execute their designs and strategies.',
    benefits: [
      'Pixel-perfect implementation of designs',
      'Fast turnaround on client projects',
      'Clean code that other developers can work with',
    ],
    color: 'from-purple-500 to-violet-500',
  },
]

export default function WhoIWorkWith() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.3 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Who I Work With
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I partner with businesses that value quality, speed, and clear communication.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clientTypes.map((client, index) => (
            <motion.div
              key={client.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ amount: 0.3 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${client.color} flex items-center justify-center mb-4`}>
                    <client.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {client.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {client.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {client.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ amount: 0.3 }}
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 sm:p-12 text-white">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Not sure if we are a good fit?
            </h3>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">
              Let us talk about your project. I will be honest about whether I can help—or point you to someone who can.
            </p>
            <Button
              variant="primary"
              size="lg"
              href="/contact"
              className="bg-white !text-primary-600 hover:bg-gray-100 font-semibold"
            >
              Get a Free Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
