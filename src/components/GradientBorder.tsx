'use client'

import { motion } from 'framer-motion'

interface GradientBorderProps {
  children: React.ReactNode
  className?: string
}

export function GradientBorder({ children, className = '' }: GradientBorderProps) {
  return (
    <div className={`relative group ${className}`}>
      <div className="absolute -inset-[2px] rounded-3xl bg-gradient-to-r from-tortoise-primary via-tortoise-shell to-tortoise-trail opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm">
        <motion.div
          className="absolute inset-0 rounded-3xl"
          style={{
            background: 'linear-gradient(90deg, #58CC02, #FF9600, #2EC27E, #58CC02)',
            backgroundSize: '300% 100%',
          }}
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>
      <div className="relative bg-white rounded-3xl">
        {children}
      </div>
    </div>
  )
}
