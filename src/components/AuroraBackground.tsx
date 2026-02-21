'use client'

import { motion } from 'framer-motion'

export function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-tortoise-primary/5 via-white to-tortoise-shell/5" />
      
      {/* Aurora blobs */}
      <motion.div
        className="absolute -top-1/2 -left-1/2 w-full h-full rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(88, 204, 2, 0.15) 0%, transparent 70%)',
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <motion.div
        className="absolute -bottom-1/2 -right-1/2 w-full h-full rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(255, 150, 0, 0.12) 0%, transparent 70%)',
        }}
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(46, 194, 126, 0.08) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(88, 204, 2, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(88, 204, 2, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
    </div>
  )
}
