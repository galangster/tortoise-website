'use client'

import { motion } from 'framer-motion'

interface StaggeredTextProps {
  text: string
  className?: string
  delay?: number
}

export function StaggeredText({ text, className = '', delay = 0 }: StaggeredTextProps) {
  const words = text.split(' ')
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay },
    }),
  }
  
  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  }
  
  return (
    <motion.span
      className={`inline-flex flex-wrap ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={child}
          className="mr-[0.25em] inline-block"
          style={{ perspective: '1000px' }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  )
}
