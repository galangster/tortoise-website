'use client'

import { useEffect, useRef, useState, createElement, type CSSProperties, type ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
  as?: 'div' | 'section' | 'li' | 'span'
}

/**
 * Tasteful scroll-in reveal that CANNOT hide content.
 *
 * Content is visible by default. A synchronous `js` class on <html> (set in
 * layout before paint) opts into the hidden→revealed transition only when JS is
 * present, so there is no flash of invisible content, no LCP gating, and the
 * page degrades to fully visible without JS. prefers-reduced-motion is honored
 * in CSS (see globals.css .reveal rules).
 */
export function Reveal({ children, delay = 0, y = 16, className = '', as = 'div' }: RevealProps) {
  const ref = useRef<HTMLElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true)
            observer.disconnect()
          }
        })
      },
      { rootMargin: '-80px 0px', threshold: 0 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return createElement(
    as,
    {
      ref,
      className: `reveal ${inView ? 'in' : ''} ${className}`.trim(),
      style: { transitionDelay: `${delay}s`, '--reveal-y': `${y}px` } as CSSProperties,
    },
    children,
  )
}
