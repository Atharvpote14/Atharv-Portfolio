'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'
import { MailIcon } from '@/components/icons/SocialIcons'

export default function ContactCTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-12 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
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
              viewport={{ once: true }}
            >
              Let's Build Something Amazing Together
            </motion.h2>

            <motion.p
              className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your ideas to life.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Button
                variant="primary"
                size="lg"
                href="/contact"
                className="bg-white !text-primary-600 hover:bg-gray-100 border-2 border-white font-semibold"
              >
                Get In Touch
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                href="mailto:atharvpote14@gmail.com"
                className="border-2 border-white/50 text-white hover:bg-white/10 hover:border-white font-semibold"
              >
                <MailIcon className="mr-2 w-5 h-5" />
                Email Me
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
