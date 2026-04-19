'use client'

import { motion } from 'framer-motion'
import { TrendingUp, ShoppingCart, Palette, Code, Sparkles, ArrowRight } from 'lucide-react'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import Button from '@/components/ui/Button'

const services = [
  {
    icon: TrendingUp,
    title: 'Landing Pages That Convert',
    description: 'High-converting landing pages designed to turn visitors into leads and customers. Focused on clear messaging, fast load times, and compelling calls-to-action.',
    outcome: 'More leads, more sales',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce That Sells',
    description: 'Complete online stores with smooth checkout flows, payment integration, and inventory management. Built to maximize conversions and minimize cart abandonment.',
    outcome: 'Increased revenue',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Code,
    title: 'Custom Web Applications',
    description: 'Tailored web apps that solve specific business problems—booking systems, dashboards, client portals, or any tool your business needs to run smoother.',
    outcome: 'Streamlined operations',
    color: 'from-purple-500 to-violet-500',
  },
  {
    icon: Palette,
    title: 'Brand-First Websites',
    description: 'Premium, visually striking websites that make your brand memorable. Perfect for businesses that want to stand out and make a strong first impression.',
    outcome: 'Stronger brand presence',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: Sparkles,
    title: 'Website Optimization',
    description: 'Speed and performance improvements for existing sites. Faster loading, better SEO rankings, and improved user experience that keeps visitors engaged.',
    outcome: 'Better performance',
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: ArrowRight,
    title: 'Product MVPs',
    description: 'Rapid prototype development to validate your idea quickly. Get a working product in front of users fast, then iterate based on real feedback.',
    outcome: 'Faster time to market',
    color: 'from-indigo-500 to-blue-500',
  },
]

export default function Services() {
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
            What I Can Build for You
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Outcome-focused development services that solve real business problems and drive measurable results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ amount: 0.3 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${service.color} text-white`}>
                    {service.outcome}
                  </span>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">
                    {service.description}
                  </p>
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
          <Button
            variant="primary"
            size="lg"
            href="/contact"
          >
            Discuss Your Project
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
