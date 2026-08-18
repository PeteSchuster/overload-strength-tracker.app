import { type ReactNode } from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

interface FadeInProps {
  children: ReactNode
  className?: string
  delay?: number
}

// Read once at module load — matches the media query at page load, which is all
// we need: nobody flips this setting mid-scroll.
const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function FadeIn({ children, className = '', delay = 0 }: FadeInProps) {
  const { ref, isVisible } = useIntersectionObserver(0.1)

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
