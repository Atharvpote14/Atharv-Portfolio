'use client'

import { useEffect, useRef, useState, useMemo, useCallback } from 'react'
import { motion } from 'framer-motion'

// Optimized: 25 particles total (10 mobile, 25 desktop)
const ALL_PARTICLES = [
  { id: 1, left: 10, top: 20, delay: 0, size: 3, duration: 4 },
  { id: 2, left: 80, top: 15, delay: 0.5, size: 4, duration: 4.2 },
  { id: 3, left: 20, top: 70, delay: 1, size: 3, duration: 3.8 },
  { id: 4, left: 70, top: 60, delay: 1.5, size: 4, duration: 4.5 },
  { id: 5, left: 40, top: 40, delay: 0.3, size: 5, duration: 4 },
  { id: 6, left: 90, top: 80, delay: 0.8, size: 3, duration: 3.6 },
  { id: 7, left: 5, top: 50, delay: 1.2, size: 4, duration: 4.1 },
  { id: 8, left: 60, top: 30, delay: 0.6, size: 3, duration: 3.9 },
  { id: 9, left: 30, top: 85, delay: 1.4, size: 4, duration: 4.3 },
  { id: 10, left: 85, top: 45, delay: 0.2, size: 3, duration: 3.7 },
  // Desktop-only particles (11-25)
  { id: 11, left: 50, top: 10, delay: 0.4, size: 3, duration: 4 },
  { id: 12, left: 15, top: 35, delay: 0.9, size: 4, duration: 4.2 },
  { id: 13, left: 75, top: 25, delay: 1.1, size: 3, duration: 3.8 },
  { id: 14, left: 25, top: 55, delay: 0.7, size: 4, duration: 4.4 },
  { id: 15, left: 65, top: 75, delay: 1.3, size: 3, duration: 3.5 },
  { id: 16, left: 45, top: 5, delay: 0.1, size: 4, duration: 4 },
  { id: 17, left: 95, top: 30, delay: 0.8, size: 3, duration: 3.9 },
  { id: 18, left: 8, top: 80, delay: 1.5, size: 4, duration: 4.2 },
  { id: 19, left: 55, top: 50, delay: 0.5, size: 3, duration: 3.7 },
  { id: 20, left: 35, top: 95, delay: 1, size: 4, duration: 4.1 },
  { id: 21, left: 90, top: 10, delay: 0.3, size: 3, duration: 3.8 },
  { id: 22, left: 5, top: 90, delay: 1.2, size: 4, duration: 4.3 },
  { id: 23, left: 50, top: 70, delay: 0.6, size: 3, duration: 3.6 },
  { id: 24, left: 70, top: 5, delay: 0.9, size: 4, duration: 4 },
  { id: 25, left: 20, top: 45, delay: 1.4, size: 3, duration: 4.2 },
]

// Throttled mouse position hook - updates every 50ms max
const useThrottledMousePosition = (enabled: boolean) => {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 })
  const lastUpdate = useRef(0)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    if (!enabled) return

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now()
      // Throttle to ~20fps for mouse updates (every 50ms)
      if (now - lastUpdate.current < 50) return
      
      lastUpdate.current = now
      
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      
      rafRef.current = requestAnimationFrame(() => {
        setMousePos({
          x: (e.clientX / window.innerWidth) * 100,
          y: (e.clientY / window.innerHeight) * 100,
        })
      })
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [enabled])

  return mousePos
}

export default function HeroParticles() {
  const [isMobile, setIsMobile] = useState(true)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  
  const mousePosition = useThrottledMousePosition(!isMobile)

  useEffect(() => {
    setIsMounted(true)
    
    const checkMobile = () => {
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
      const isSmallScreen = window.innerWidth < 768
      setIsMobile(isTouchDevice || isSmallScreen)
    }
    
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
    
    checkMobile()
    window.addEventListener('resize', checkMobile, { passive: true })
    
    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handleChange)
    
    return () => {
      window.removeEventListener('resize', checkMobile)
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [])

  // Filter particles based on device
  const particles = useMemo(() => {
    if (prefersReducedMotion) return []
    return isMobile ? ALL_PARTICLES.slice(0, 10) : ALL_PARTICLES
  }, [isMobile, prefersReducedMotion])

  if (particles.length === 0) {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-secondary-500/5" />
      </div>
    )
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-secondary-500/5" />
      
      {isMobile ? (
        <MobileParticles particles={particles} isMounted={isMounted} />
      ) : (
        <DesktopParticles particles={particles} mousePosition={mousePosition} isMounted={isMounted} />
      )}
    </div>
  )
}

type ParticleType = typeof ALL_PARTICLES[number]

// Mobile: GPU-accelerated CSS transforms only - NO physics, NO mouse tracking
function MobileParticles({ 
  particles, 
  isMounted 
}: { 
  particles: ParticleType[]
  isMounted: boolean 
}) {
  return (
    <>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full will-change-transform"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: particle.size,
            height: particle.size,
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.7) 0%, rgba(99, 102, 241, 0.3) 50%, transparent 100%)',
            transform: isMounted ? 'scale(1)' : 'scale(0)',
            opacity: isMounted ? 0.6 : 0,
            transition: `transform ${0.5 + particle.delay}s ease-out, opacity ${0.5 + particle.delay}s ease-out`,
            animation: isMounted ? `mobileFloat ${particle.duration}s ease-in-out ${particle.delay}s infinite` : 'none',
          }}
        />
      ))}
    </>
  )
}

// Desktop: Anti-gravity with throttled mouse tracking - uses CSS transforms, NOT heavy springs
function DesktopParticles({ 
  particles, 
  mousePosition,
  isMounted
}: { 
  particles: ParticleType[]
  mousePosition: { x: number; y: number }
  isMounted: boolean
}) {
  return (
    <>
      {particles.map((particle) => (
        <DesktopParticle 
          key={particle.id} 
          particle={particle} 
          mouseX={mousePosition.x}
          mouseY={mousePosition.y}
          isMounted={isMounted}
        />
      ))}
    </>
  )
}

// Single desktop particle - uses useMemo for calculations, CSS for transforms
function DesktopParticle({
  particle,
  mouseX,
  mouseY,
  isMounted,
}: {
  particle: typeof ALL_PARTICLES[number]
  mouseX: number
  mouseY: number
  isMounted: boolean
}) {
  // Calculate repulsion with useMemo (no heavy physics)
  const { offsetX, offsetY } = useMemo(() => {
    const deltaX = particle.left - mouseX
    const deltaY = particle.top - mouseY
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)
    
    const maxOffset = 15 // Reduced from 25 for smoother performance
    const repulsionStrength = Math.max(0, 1 - distance / 30) * maxOffset
    
    return {
      offsetX: (deltaX / (distance || 1)) * repulsionStrength,
      offsetY: (deltaY / (distance || 1)) * repulsionStrength,
    }
  }, [particle.left, particle.top, mouseX, mouseY])

  // Use CSS transform instead of useSpring for 60fps performance
  return (
    <motion.div
      className="absolute rounded-full will-change-transform"
      style={{
        left: `${particle.left}%`,
        top: `${particle.top}%`,
        width: particle.size,
        height: particle.size,
        background: 'radial-gradient(circle, rgba(99, 102, 241, 0.9) 0%, rgba(99, 102, 241, 0.5) 40%, transparent 100%)',
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        x: isMounted ? offsetX : 0,
        y: isMounted ? offsetY : 0,
        scale: isMounted ? [1, 1.15, 1] : 0,
        opacity: isMounted ? [0.6, 0.85, 0.6] : 0,
      }}
      transition={{
        x: { type: 'tween', duration: 0.15, ease: 'easeOut' },
        y: { type: 'tween', duration: 0.15, ease: 'easeOut' },
        scale: { duration: particle.duration, repeat: Infinity, delay: particle.delay, ease: 'easeInOut' },
        opacity: { duration: particle.duration, repeat: Infinity, delay: particle.delay, ease: 'easeInOut' },
      }}
    />
  )
}
