'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Moon, Sun, ExternalLink } from 'lucide-react'
import { useTheme } from '@/components/ThemeProvider'
import { cn } from '@/lib/utils'
import { GitHubIcon, LinkedInIcon, MailIcon } from '@/components/icons/SocialIcons'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/Atharvpote14', Icon: GitHubIcon },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/atharv-pote-762964395', Icon: LinkedInIcon },
  { name: 'Email', href: 'mailto:atharvpote14@gmail.com', Icon: MailIcon }
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  return (
    <>
      <motion.header
        className={cn(
          'fixed top-0 w-full z-50 transition-all duration-500 ease-in-out',
          scrolled
            ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-lg shadow-gray-200/20 dark:shadow-black/20 border-b border-gray-200/50 dark:border-gray-700/50'
            : 'bg-transparent'
        )}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <motion.div
                className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-primary-500/30 group-hover:ring-primary-500/60 shadow-lg shadow-primary-500/20 group-hover:shadow-primary-500/40 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src="/AP logo.jpg"
                  alt="Atharv Pote"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                  priority
                />
              </motion.div>
              <span className={cn(
                "font-bold text-xl tracking-tight transition-colors duration-300",
                scrolled ? "text-gray-900 dark:text-white" : "text-gray-900 dark:text-white"
              )}>
                Atharv
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="relative px-4 py-2 group"
                  >
                    <span className={cn(
                      "relative z-10 text-sm font-medium transition-colors duration-300",
                      isActive
                        ? "text-primary-600 dark:text-primary-400"
                        : "text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white"
                    )}>
                      {item.name}
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 bg-primary-50 dark:bg-primary-900/20 rounded-lg"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    {!isActive && (
                      <motion.div
                        className="absolute inset-0 bg-gray-50 dark:bg-gray-800/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    )}
                  </Link>
                )
              })}
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-2">
              {/* Social Links - Desktop */}
              <div className="hidden lg:flex items-center space-x-1 pr-4 border-r border-gray-200 dark:border-gray-700">
                {socialLinks.map((social) => {
                  const IconComponent = social.Icon
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.name}
                    >
                      <IconComponent className="w-5 h-5" />
                    </motion.a>
                  )
                })}
              </div>

              {/* Theme Toggle */}
              <motion.button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05, rotate: 15 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait">
                  {!mounted ? (
                    <div key="placeholder" className="w-5 h-5" />
                  ) : theme === 'dark' ? (
                    <motion.div
                      key="sun"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Sun className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Moon className="w-5 h-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                className="md:hidden p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  {mobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-5 h-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Menu */}
            <motion.div
              className="fixed top-24 left-4 right-4 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl shadow-gray-900/20 dark:shadow-black/40 border border-gray-200 dark:border-gray-700 z-50 md:hidden overflow-hidden"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ type: "spring", bounce: 0.3, duration: 0.4 }}
            >
              <div className="p-6 space-y-4">
                {/* Navigation Links */}
                <div className="space-y-2">
                  {navigation.map((item, index) => {
                    const isActive = pathname === item.href
                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={item.href}
                          className={cn(
                            "flex items-center justify-between p-4 rounded-xl transition-all duration-300",
                            isActive
                              ? "bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 font-medium"
                              : "hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
                          )}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <span>{item.name}</span>
                          {isActive && (
                            <motion.div
                              layoutId="activeMobile"
                              className="w-2 h-2 bg-primary-500 rounded-full"
                            />
                          )}
                        </Link>
                      </motion.div>
                    )
                  })}
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 dark:border-gray-700 my-4" />

                {/* Social Links */}
                <div className="flex justify-center space-x-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.Icon
                    return (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <IconComponent className="w-5 h-5" />
                        <span className="text-sm font-medium">{social.name}</span>
                        <ExternalLink className="w-3 h-3 opacity-50" />
                      </motion.a>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
