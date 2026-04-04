'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, type Variants } from 'framer-motion'
import { 
  Heart, 
  ExternalLink, 
  ArrowUp,
  MapPin,
  Code2,
  Layers,
  Cpu,
  Code
} from 'lucide-react'
import { socialLinks } from '@/data/social'
import { cn } from '@/lib/utils'
import { GitHubIcon, LinkedInIcon, MailIcon } from '@/components/icons/SocialIcons'

const footerLinks = {
  navigation: [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ],
  projects: [
    { name: 'Brand Advertisement', href: 'https://brandadvertisement.netlify.app/' },
    { name: 'ShopSphere 2.0', href: 'https://atharvpote14.github.io/ShopSphere2.O/' },
    { name: 'CineBook', href: 'https://atharvpote14.github.io/CineBook/' },
    { name: '3D WebGL', href: 'https://3dwebgl.vercel.app/' },
  ],
  technologies: [
    { name: 'Next.js', icon: Code2 },
    { name: 'React', icon: Layers },
    { name: 'TypeScript', icon: Cpu },
    { name: 'Tailwind CSS', icon: Code },
  ]
}

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'Github':
      return <GitHubIcon className="w-5 h-5" />
    case 'Linkedin':
      return <LinkedInIcon className="w-5 h-5" />
    case 'Mail':
      return <MailIcon className="w-5 h-5" />
    default:
      return <ExternalLink className="w-5 h-5" />
  }
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
    }
  }
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 border-t border-gray-200 dark:border-gray-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />
      
      {/* Main Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Brand Column */}
          <motion.div variants={itemVariants} className="lg:col-span-1 space-y-6">
            <Link href="/" className="flex items-center space-x-3 group">
              <motion.div
                className="w-12 h-12 rounded-xl overflow-hidden ring-2 ring-primary-500/30 group-hover:ring-primary-500/60 shadow-lg shadow-primary-500/20 group-hover:shadow-primary-500/40 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src="/images/Atharv Profile Pic.JPG"
                  alt="Atharv Pote"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                  priority
                />
              </motion.div>
              <div>
                <span className="text-gray-900 dark:text-white font-bold text-xl block">Atharv</span>
                <span className="text-gray-500 dark:text-gray-400 text-xs">Full Stack Developer</span>
              </div>
            </Link>
            
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Passionate full-stack developer creating beautiful, functional web experiences with modern technologies. Let's build something amazing together.
            </p>
            
            {/* Location */}
            <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 text-sm">
              <MapPin className="w-4 h-4" />
              <span>Pune, India</span>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 dark:hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.name}
                >
                  {getIcon(link.icon)}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation Column */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-gray-900 dark:text-white font-bold text-lg flex items-center">
              <span className="w-8 h-8 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mr-3">
                <Layers className="w-4 h-4 text-primary-600 dark:text-primary-400" />
              </span>
              Navigation
            </h3>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="group flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300 text-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-600 mr-3 group-hover:bg-primary-500 group-hover:w-3 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Projects Column */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-gray-900 dark:text-white font-bold text-lg flex items-center">
              <span className="w-8 h-8 rounded-lg bg-secondary-100 dark:bg-secondary-900/30 flex items-center justify-center mr-3">
                <Code2 className="w-4 h-4 text-secondary-600 dark:text-secondary-400" />
              </span>
              Featured Projects
            </h3>
            <ul className="space-y-3">
              {footerLinks.projects.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300 text-sm"
                  >
                    <span className="flex items-center">
                      <ExternalLink className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Technologies Column */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-gray-900 dark:text-white font-bold text-lg flex items-center">
              <span className="w-8 h-8 rounded-lg bg-accent-100 dark:bg-accent-900/30 flex items-center justify-center mr-3">
                <Cpu className="w-4 h-4 text-accent-600 dark:text-accent-400" />
              </span>
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {footerLinks.technologies.map((tech) => {
                const IconComponent = tech.icon
                return (
                  <motion.div
                    key={tech.name}
                    className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium"
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <IconComponent className="w-3.5 h-3.5" />
                    <span>{tech.name}</span>
                  </motion.div>
                )
              })}
            </div>
            
            {/* Contact CTA */}
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                Have a project in mind?
              </p>
              <Link 
                href="/contact"
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-primary-500 hover:bg-primary-600 text-white text-sm font-medium transition-colors duration-300"
              >
                <MailIcon className="w-4 h-4" />
                <span>Let's Talk</span>
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div 
          className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        />

        {/* Bottom Bar */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-gray-600 dark:text-gray-400 text-sm text-center md:text-left">
            © {currentYear} Atharv Pote. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-6">
            <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center">
              Made with <Heart className="w-4 h-4 mx-1 text-red-500 animate-pulse" /> using Next.js
            </p>
            
            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 dark:hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
