import { useState, useEffect } from 'react'

/**
 * Helper functions to prevent hydration mismatches
 */

// Generate deterministic random-like values for SSR safety
export function deterministicRandom(index: number, max: number = 100): number {
  // Simple pseudo-random generator based on index
  const seed = index * 9301 + 49297
  return (seed % max) / max
}

// Safe client-only values
export function useClientOnly<T>(value: T): T | undefined {
  const [isClient, setIsClient] = useState(false)
  
  useEffect(() => {
    setIsClient(true)
  }, [])
  
  return isClient ? value : undefined
}

// Generate consistent particle positions
export function generateParticles(count: number) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: deterministicRandom(i, 100),
    top: deterministicRandom(i + 100, 100),
    duration: 3 + deterministicRandom(i + 200, 2),
    delay: deterministicRandom(i + 300, 2)
  }))
}
