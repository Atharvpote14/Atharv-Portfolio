'use client'

import Layout from '@/components/Layout'
import Button from '@/components/ui/Button'
import { motion } from 'framer-motion'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="text-9xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              404
            </div>
          </motion.div>
          
          <motion.h1
            className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Page Not Found
          </motion.h1>
          
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-400 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Oops! The page you're looking for seems to have vanished into the digital void. 
            Let's get you back to safety.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              variant="primary"
              size="lg"
              href="/"
            >
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </Layout>
  )
}
