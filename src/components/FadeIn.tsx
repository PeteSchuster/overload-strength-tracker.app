import { type ReactNode } from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

interface FadeInProps {
  children: ReactNode
  className?: string
  delay?: number
}

export default function FadeIn({ children, className = '', delay = 0 }: FadeInProps) {
  const { ref, isVisible } = useIntersectionObserver(0.1)

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
