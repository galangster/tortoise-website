'use client'

import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ConfettiPiece {
  id: number
  x: number
  y: number
  rotation: number
  color: string
  scale: number
}

export function useConfetti() {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([])
  
  const colors = ['#58CC02', '#FF9600', '#FFC800', '#2EC27E', '#CE82FF']
  
  const triggerConfetti = useCallback((x: number, y: number) => {
    const newPieces: ConfettiPiece[] = Array.from({ length: 30 }, (_, i) => ({
      id: Date.now() + i,
      x: x + (Math.random() - 0.5) * 200,
      y: y + (Math.random() - 0.5) * 200,
      rotation: Math.random() * 360,
      color: colors[Math.floor(Math.random() * colors.length)],
      scale: 0.5 + Math.random() * 0.5,
    }))
    
    setPieces(newPieces)
    
    setTimeout(() => setPieces([]), 2000)
  }, [])
  
  const ConfettiComponent = () => (
    <AnimatePresence>
      {pieces.map((piece) => (
        <motion.div
          key={piece.id}
          className="fixed w-3 h-3 rounded-sm pointer-events-none z-50"
          style={{
            backgroundColor: piece.color,
            left: piece.x,
            top: piece.y,
          }}
          initial={{ 
            scale: 0, 
            rotate: 0,
            opacity: 1 
          }}
          animate={{ 
            scale: piece.scale, 
            rotate: piece.rotation,
            y: piece.y + 200 + Math.random() * 200,
            x: piece.x + (Math.random() - 0.5) * 300,
            opacity: 0,
          }}
          exit={{ opacity: 0 }}
          transition={{ 
            duration: 1.5,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        />
      ))}
    </AnimatePresence>
  )
  
  return { triggerConfetti, ConfettiComponent }
}
