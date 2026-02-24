'use client'

import { motion } from 'framer-motion'
import { TortoiseMascot } from './TortoiseMascot'
import { Play, Trophy, Flame, Star } from 'lucide-react'
import { AuroraBackground } from './AuroraBackground'
import { TextScramble } from './TextScramble'
import { MagneticButton } from './MagneticButton'

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      <AuroraBackground />
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-tortoise-primary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-tortoise-shell/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-tortoise-primary/10 text-tortoise-primary-dark px-4 py-2 rounded-full font-bold text-sm mb-6">
                <Star className="w-4 h-4 fill-tortoise-xp text-tortoise-xp" />
                Super Personalized Marathon Training
              </div>
            </motion.div>

            <motion.h1
              className="text-5xl lg:text-7xl font-black text-gray-900 leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Run Your First<br />
              <span className="gradient-text">
                <TextScramble text="Marathon" duration={1500} />
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Marathon training that is <strong className="text-tortoise-primary">super personalized for you</strong>, 
              fun, and meant to be done with other people. Train with friends and reach your goals together.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <MagneticButton strength={0.2}>
                <button className="btn-primary text-lg flex items-center justify-center gap-2">
                  <Play className="w-5 h-5" />
                  Start Running
                </button>
              </MagneticButton>
              
              <MagneticButton strength={0.2}>
                <button className="btn-secondary text-lg">
                  See How It Works
                </button>
              </MagneticButton>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {[
                { icon: Flame, value: '10K+', label: 'Active Runners' },
                { icon: Trophy, value: '89%', label: 'Finish Rate' },
                { icon: Star, value: '4.9', label: 'App Store' },
              ].map((stat, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-tortoise-primary/10 rounded-full flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-tortoise-primary" />
                  </div>
                  <div>
                    <div className="font-black text-xl text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Mascot */}
          <div className="relative flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: 'spring' }}
              className="relative"
            >
              <TortoiseMascot mood="celebrating" size={280} />
              
              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 bg-tortoise-xp text-white font-black px-4 py-2 rounded-full shadow-lg"
                animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                +50 XP!
              </motion.div>

              <motion.div
                className="absolute bottom-10 -left-8 bg-tortoise-streak text-white font-black px-4 py-2 rounded-full shadow-lg flex items-center gap-2"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
              >
                <Flame className="w-5 h-5 fill-white" />
                7 Day Streak!
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
