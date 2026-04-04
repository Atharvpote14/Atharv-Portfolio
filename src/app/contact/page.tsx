'use client'

import { useState, useRef } from 'react'
import Layout from '@/components/Layout'
import { socialLinks } from '@/data/social'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { motion } from 'framer-motion'
import { MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { ContactForm } from '@/types'
import { GitHubIcon, LinkedInIcon, MailIcon } from '@/components/icons/SocialIcons'
import emailjs from '@emailjs/browser'
import { EMAILJS_CONFIG } from '@/config/emailjs'

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<Partial<ContactForm>>({})

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactForm> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Send email using EmailJS
      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        to_email: 'atharvpote14@gmail.com',
      }

      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      )
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setErrors({})
    } catch (error) {
      console.error('EmailJS Error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name as keyof ContactForm]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

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
              Get In Touch
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear from you. 
              Send me a message and I'll get back to you as soon as possible.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Send Me a Message</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Fill out the form below and I'll respond within 24 hours.
                  </p>
                </CardHeader>
                
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border rounded-lg text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${
                          errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                        }`}
                        placeholder="John Doe"
                        disabled={isSubmitting}
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-400 flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border rounded-lg text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${
                          errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                        }`}
                        placeholder="john@example.com"
                        disabled={isSubmitting}
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-400 flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Message Field */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={6}
                        className={`w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border rounded-lg text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none ${
                          errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                        }`}
                        placeholder="Tell me about your project..."
                        disabled={isSubmitting}
                      />
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-400 flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>

                    {/* Status Messages */}
                    {submitStatus === 'success' && (
                      <motion.div
                        className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 flex items-center"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <CheckCircle className="w-5 h-5 mr-2" />
                        Thank you for your message! I'll get back to you soon.
                      </motion.div>
                    )}

                    {submitStatus === 'error' && (
                      <motion.div
                        className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 flex items-center"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <AlertCircle className="w-5 h-5 mr-2" />
                        Something went wrong. Please try again later.
                      </motion.div>
                    )}
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="lg:col-span-1 space-y-6"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Contact Details */}
              <Card>
                <CardHeader>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Contact Information</h3>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <MailIcon className="w-5 h-5 mr-3 text-primary-400" />
                      <a href="mailto:atharvpote14@gmail.com" className="hover:text-primary-400 transition-colors">
                        atharvpote14@gmail.com
                      </a>
                    </div>
                    
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <MapPin className="w-5 h-5 mr-3 text-primary-400" />
                      <span>Pune, India</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card>
                <CardHeader>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Connect With Me</h3>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3">
                    {socialLinks.map((link) => {
                      const IconComponent = link.name === 'GitHub' ? GitHubIcon : link.name === 'LinkedIn' ? LinkedInIcon : MailIcon
                      return (
                        <a
                          key={link.name}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors group"
                        >
                          <span className="text-gray-700 dark:text-gray-300 group-hover:text-primary-400 transition-colors">
                            {link.name}
                          </span>
                          <div className="w-8 h-8 bg-primary-500/20 rounded-full flex items-center justify-center group-hover:bg-primary-500 transition-colors">
                            <IconComponent className="w-4 h-4 text-primary-400 group-hover:text-white" />
                          </div>
                        </a>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Response Time */}
              <Card className="bg-gradient-to-r from-primary-600/10 to-secondary-600/10 border-primary-500/20">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MailIcon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Response Time</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      I typically respond to messages within 24 hours. For urgent inquiries, 
                      please mention it in your message.
                    </p>
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
