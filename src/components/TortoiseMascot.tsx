'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

type MascotMood = 'happy' | 'cheering' | 'running' | 'celebrating' | 'thinking' | 'resting'

interface TortoiseMascotProps {
  mood?: MascotMood
  size?: number
  animate?: boolean
}

const moodConfig = {
  happy: {
    bg: 'bg-tortoise-primary',
    shadow: 'shadow-tortoise-primary/30',
    emoji: '🐢',
    message: 'Slow and steady!',
  },
  cheering: {
    bg: 'bg-tortoise-shell',
    shadow: 'shadow-tortoise-shell/30',
    emoji: '🙌',
    message: "You've got this!",
  },
  running: {
    bg: 'bg-tortoise-trail',
    shadow: 'shadow-tortoise-trail/30',
    emoji: '🏃',
    message: "Let's move!",
  },
  celebrating: {
    bg: 'bg-tortoise-xp',
    shadow: 'shadow-tortoise-xp/30',
    emoji: '🎉',
    message: 'Outstanding work!',
  },
  thinking: {
    bg: 'bg-tortoise-sky',
    shadow: 'shadow-tortoise-sky/30',
    emoji: '🤔',
    message: 'Let me think...',
  },
  resting: {
    bg: 'bg-tortoise-purple',
    shadow: 'shadow-tortoise-purple/30',
    emoji: '😌',
    message: 'Rest day!',
  },
}

export function TortoiseMascot({ 
  mood = 'happy', 
  size = 120,
  animate = true 
}: TortoiseMascotProps) {
  const config = moodConfig[mood]
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative"
      style={{ width: size, height: size }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      animate={animate ? {
        scale: isHovered ? 1.1 : 1,
        y: [0, -5, 0],
      } : {}}
      transition={{
        scale: { type: 'spring', stiffness: 400, damping: 17 },
        y: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
      }}
    >
      {/* Glow background */}
      <motion.div
        className={`absolute inset-0 rounded-full ${config.bg} opacity-20 blur-xl`}
        animate={animate ? {
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.35, 0.2],
        } : {}}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Main circle */}
      <motion.div
        className={`absolute inset-0 rounded-full ${config.bg} ${config.shadow} shadow-2xl`}
        animate={animate ? {
          scale: [1, 1.06, 1],
        } : {}}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Emoji */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={animate && isHovered ? {
          rotate: [0, -10, 10, 0],
          scale: [1, 1.2, 1],
        } : {}}
        transition={{ duration: 0.5 }}
      >
        <span className="text-4xl">{config.emoji}</span>
      </motion.div>
    </motion.div>
  )
}

export function TortoiseBubble({ 
  mood = 'happy', 
  message,
  children 
}: { 
  mood?: MascotMood
  message?: string
  children?: React.ReactNode
}) {
  const config = moodConfig[mood]
  const displayMessage = message || config.message

  return (
    <motion.div
      className="flex items-center gap-4"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <TortoiseMascot mood={mood} size={80} />
      
      <div className="relative bg-white rounded-2xl px-6 py-4 shadow-lg border-2 border-gray-100 max-w-sm">
        <div className={`absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-l-2 border-b-2 border-gray-100 rotate-45`} />
        <p className="text-gray-800 font-bold text-lg">
          {children || displayMessage}
        </p>
      </div>
    </motion.div>
  )
}
