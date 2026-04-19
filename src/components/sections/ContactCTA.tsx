'use client'

import { motion } from 'framer-motion'
import { Mail, ArrowRight, CheckCircle } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function ContactCTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-12 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.3 }}
        >
          {/* Background decoration */}
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />

          <div className="relative z-10">
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ amount: 0.3 }}
            >
              Ready to Get Started?
            </motion.h2>

            <motion.p
              className="text-xl text-white/90 mb-4 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ amount: 0.3 }}
            >
              Tell me about your project. I will get back within 24 hours with a clear plan and quote.
              No spam, no pressure — just straightforward communication.
            </motion.p>

            {/* Trust Microcopy */}
            <motion.div
              className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8 text-white/80 text-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ amount: 0.3 }}
            >
              <span className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-1" />
                Response within 24 hours
              </span>
              <span className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-1" />
                Clear pricing. No hidden fees.
              </span>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ amount: 0.3 }}
            >
              <Button
                variant="primary"
                size="lg"
                href="/contact"
                className="bg-white !text-primary-600 hover:bg-gray-100 border-2 border-white font-semibold"
              >
                <Mail className="mr-2 w-5 h-5" />
                Tell me about your project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                href="/projects"
                className="border-2 border-white/50 text-white hover:bg-white/10 hover:border-white font-semibold"
              >
                View More Work
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
