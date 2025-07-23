"use client"

import { type ReactNode, useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

interface LazySectionProps {
  children: ReactNode
  fallback?: ReactNode
  threshold?: number
  className?: string
}

export function LazySection({ children, fallback, threshold = 0.1, className = "" }: LazySectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasLoaded, setHasLoaded] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasLoaded) {
          setIsVisible(true)
          setHasLoaded(true)
        }
      },
      { threshold },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold, hasLoaded])

  return (
    <div ref={ref} className={className}>
      {isVisible ? (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          {children}
        </motion.div>
      ) : (
        fallback || <div className="min-h-[200px]" />
      )}
    </div>
  )
}
