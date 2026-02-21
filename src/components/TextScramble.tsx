'use client'

import { useState, useEffect } from 'react'

interface TextScrambleProps {
  text: string
  className?: string
  duration?: number
}

export function TextScramble({ text, className = '', duration = 1500 }: TextScrambleProps) {
  const [displayText, setDisplayText] = useState(text)
  const [hasAnimated, setHasAnimated] = useState(false)
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  
  useEffect(() => {
    if (hasAnimated) return
    
    let iteration = 0
    const totalIterations = text.length * 3
    const interval = duration / totalIterations
    
    const intervalId = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' '
            if (index < iteration / 3) return text[index]
            return chars[Math.floor(Math.random() * chars.length)]
          })
          .join('')
      )
      
      iteration += 1
      
      if (iteration >= totalIterations) {
        clearInterval(intervalId)
        setDisplayText(text)
        setHasAnimated(true)
      }
    }, interval)

    return () => clearInterval(intervalId)
  }, [text, duration, hasAnimated])
  
  return <span className={className}>{displayText}</span>
}
