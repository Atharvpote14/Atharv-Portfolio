import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

interface CardHeaderProps {
  children: ReactNode
  className?: string
}

interface CardContentProps {
  children: ReactNode
  className?: string
}

interface CardFooterProps {
  children: ReactNode
  className?: string
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <motion.div
      className={cn(
        'bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6',
        hover && 'hover:border-primary-500/50 hover:shadow-lg hover:shadow-primary-500/10 transition-all duration-300',
        className
      )}
      whileHover={hover ? { y: -5 } : {}}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  )
}

export function CardHeader({ children, className }: CardHeaderProps) {
  return (
    <div className={cn('mb-4', className)}>
      {children}
    </div>
  )
}

export function CardContent({ children, className }: CardContentProps) {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  )
}

export function CardFooter({ children, className }: CardFooterProps) {
  return (
    <div className={cn('mt-4 pt-4 border-t border-gray-200 dark:border-gray-700', className)}>
      {children}
    </div>
  )
}
