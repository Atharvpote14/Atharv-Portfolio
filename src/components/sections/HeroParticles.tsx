'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

// Pre-defined particle positions - increased population (50 particles)
const PARTICLES = [
  { id: 1, left: 5.2, top: 12.3, duration: 3.8, delay: 0.0, size: 4 },
  { id: 2, left: 15.6, top: 25.8, duration: 4.2, delay: 0.2, size: 5 },
  { id: 3, left: 8.9, top: 45.2, duration: 3.5, delay: 0.4, size: 3 },
  { id: 4, left: 22.4, top: 62.1, duration: 4.5, delay: 0.1, size: 4 },
  { id: 5, left: 12.7, top: 78.9, duration: 3.9, delay: 0.3, size: 5 },
  { id: 6, left: 28.3, top: 15.6, duration: 4.1, delay: 0.5, size: 3 },
  { id: 7, left: 35.8, top: 35.4, duration: 3.7, delay: 0.2, size: 4 },
  { id: 8, left: 32.1, top: 55.7, duration: 4.3, delay: 0.4, size: 5 },
  { id: 9, left: 25.6, top: 82.3, duration: 3.6, delay: 0.6, size: 3 },
  { id: 10, left: 42.5, top: 8.9, duration: 4.0, delay: 0.1, size: 4 },
  { id: 11, left: 48.3, top: 28.7, duration: 3.8, delay: 0.3, size: 5 },
  { id: 12, left: 45.7, top: 48.2, duration: 4.4, delay: 0.5, size: 4 },
  { id: 13, left: 52.4, top: 68.5, duration: 3.5, delay: 0.7, size: 3 },
  { id: 14, left: 38.9, top: 88.1, duration: 4.2, delay: 0.2, size: 4 },
  { id: 15, left: 58.6, top: 18.4, duration: 3.9, delay: 0.4, size: 5 },
  { id: 16, left: 65.2, top: 38.9, duration: 4.1, delay: 0.6, size: 4 },
  { id: 17, left: 62.8, top: 58.3, duration: 3.7, delay: 0.8, size: 3 },
  { id: 18, left: 55.3, top: 78.7, duration: 4.5, delay: 0.0, size: 5 },
  { id: 19, left: 72.4, top: 12.6, duration: 3.6, delay: 0.2, size: 4 },
  { id: 20, left: 78.9, top: 32.4, duration: 4.0, delay: 0.4, size: 3 },
  { id: 21, left: 75.6, top: 52.8, duration: 3.8, delay: 0.6, size: 5 },
  { id: 22, left: 68.2, top: 72.5, duration: 4.3, delay: 0.8, size: 4 },
  { id: 23, left: 82.7, top: 85.9, duration: 3.5, delay: 0.1, size: 3 },
  { id: 24, left: 88.4, top: 22.3, duration: 4.1, delay: 0.3, size: 4 },
  { id: 25, left: 92.1, top: 42.7, duration: 3.7, delay: 0.5, size: 5 },
  { id: 26, left: 85.6, top: 62.4, duration: 4.4, delay: 0.7, size: 4 },
  { id: 27, left: 95.3, top: 75.8, duration: 3.6, delay: 0.9, size: 3 },
  { id: 28, left: 18.5, top: 95.2, duration: 4.2, delay: 0.2, size: 5 },
  { id: 29, left: 40.2, top: 95.6, duration: 3.9, delay: 0.4, size: 4 },
  { id: 30, left: 70.5, top: 95.1, duration: 4.0, delay: 0.6, size: 3 },
  { id: 31, left: 5.8, top: 5.5, duration: 3.8, delay: 0.3, size: 4 },
  { id: 32, left: 50.0, top: 50.0, duration: 4.5, delay: 0.5, size: 6 },
  { id: 33, left: 94.5, top: 5.2, duration: 3.7, delay: 0.7, size: 4 },
  { id: 34, left: 5.5, top: 50.0, duration: 4.1, delay: 0.1, size: 5 },
  { id: 35, left: 94.2, top: 50.0, duration: 3.9, delay: 0.3, size: 4 },
  // Additional particles for higher density
  { id: 36, left: 10.0, top: 30.0, duration: 4.3, delay: 0.15, size: 4 },
  { id: 37, left: 20.0, top: 50.0, duration: 3.6, delay: 0.35, size: 3 },
  { id: 38, left: 30.0, top: 20.0, duration: 4.0, delay: 0.55, size: 5 },
  { id: 39, left: 40.0, top: 70.0, duration: 3.8, delay: 0.75, size: 4 },
  { id: 40, left: 60.0, top: 10.0, duration: 4.2, delay: 0.25, size: 3 },
  { id: 41, left: 70.0, top: 60.0, duration: 3.5, delay: 0.45, size: 5 },
  { id: 42, left: 80.0, top: 30.0, duration: 4.1, delay: 0.65, size: 4 },
  { id: 43, left: 90.0, top: 80.0, duration: 3.7, delay: 0.85, size: 3 },
  { id: 44, left: 25.0, top: 35.0, duration: 4.4, delay: 0.05, size: 4 },
  { id: 45, left: 55.0, top: 45.0, duration: 3.9, delay: 0.25, size: 5 },
  { id: 46, left: 75.0, top: 25.0, duration: 4.0, delay: 0.55, size: 3 },
  { id: 47, left: 15.0, top: 65.0, duration: 3.6, delay: 0.75, size: 4 },
  { id: 48, left: 45.0, top: 15.0, duration: 4.3, delay: 0.35, size: 5 },
  { id: 49, left: 85.0, top: 55.0, duration: 3.8, delay: 0.15, size: 4 },
  { id: 50, left: 35.0, top: 75.0, duration: 4.1, delay: 0.95, size: 3 },
]

export default function HeroParticles() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {PARTICLES.map((particle) => (
        <Particle
          key={particle.id}
          particle={particle}
          mouseX={mousePosition.x}
          mouseY={mousePosition.y}
          isMounted={isMounted}
        />
      ))}
    </div>
  )
}

function Particle({
  particle,
  mouseX,
  mouseY,
  isMounted,
}: {
  particle: typeof PARTICLES[0]
  mouseX: number
  mouseY: number
  isMounted: boolean
}) {
  // Calculate distance and direction from cursor (anti-gravity: particles escape from cursor)
  const deltaX = particle.left - mouseX
  const deltaY = particle.top - mouseY
  const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)

  // Repulsion strength - particles get pushed away from cursor (anti-gravity effect)
  // Stronger when cursor is close, weaker when far
  const maxOffset = 25
  const repulsionStrength = Math.max(0, 1 - distance / 30) * maxOffset

  // Push away from cursor
  const offsetX = (deltaX / (distance || 1)) * repulsionStrength
  const offsetY = (deltaY / (distance || 1)) * repulsionStrength

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Physics-like spring for anti-gravity float effect
  const springConfig = { damping: 15, stiffness: 80, mass: 0.5 }
  const smoothX = useSpring(x, springConfig)
  const smoothY = useSpring(y, springConfig)

  useEffect(() => {
    if (isMounted) {
      x.set(offsetX)
      y.set(offsetY)
    }
  }, [offsetX, offsetY, x, y, isMounted])

  return (
    <motion.div
      className="absolute rounded-full cursor-pointer"
      style={{
        left: `${particle.left}%`,
        top: `${particle.top}%`,
        width: particle.size,
        height: particle.size,
        background: `radial-gradient(circle, rgba(99, 102, 241, 1) 0%, rgba(99, 102, 241, 0.8) 30%, rgba(99, 102, 241, 0.4) 60%, transparent 100%)`,
        boxShadow: '0 0 20px rgba(99, 102, 241, 1), 0 0 40px rgba(99, 102, 241, 0.7), 0 0 60px rgba(99, 102, 241, 0.4)',
        x: smoothX,
        y: smoothY,
      }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.8, 1, 0.8],
      }}
      transition={{
        duration: particle.duration,
        repeat: Infinity,
        delay: particle.delay,
        ease: 'easeInOut',
      }}
      whileHover={{ scale: 1.5 }}
    />
  )
}
