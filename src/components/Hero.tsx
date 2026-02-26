'use client'

import { motion } from 'framer-motion'
import { Play, CalendarDays, Flag, Sparkles, Flame, Trophy } from 'lucide-react'
import { AuroraBackground } from './AuroraBackground'
import { TextScramble } from './TextScramble'
import { MagneticButton } from './MagneticButton'
import Image from 'next/image'

const milestones = [
  { week: 'Wk 1', label: 'Base Build', icon: CalendarDays },
  { week: 'Wk 6', label: 'Endurance Up', icon: Flame },
  { week: 'Wk 10', label: 'Peak Block', icon: Trophy },
  { week: 'Race Day', label: 'Finish Strong', icon: Flag },
]

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-white">
      <AuroraBackground />

      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-16 left-12 w-72 h-72 bg-tortoise-sky/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.45, 0.25] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-8 right-12 w-96 h-96 bg-tortoise-primary/20 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.25, 0.45, 0.25] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="text-center lg:text-left">
            <motion.div
              className="inline-flex items-center gap-2 bg-white border border-tortoise-primary/20 text-tortoise-primary-dark px-4 py-2 rounded-full font-black text-sm mb-6 shadow-sm"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Sparkles className="w-4 h-4 text-tortoise-shell" />
              AI-native coaching for real runners
            </motion.div>

            <motion.h1
              className="text-5xl lg:text-7xl font-black text-gray-900 leading-[0.98] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Set Race Day.
              <br />
              <span className="gradient-text">
                <TextScramble text="Train Backwards." duration={1400} />
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 mb-9 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Tortoise turns marathon prep into a game: adaptive daily workouts, visible progress, and a race-day-first plan that actually fits your life.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <MagneticButton strength={0.2}>
                <button className="btn-primary text-lg flex items-center justify-center gap-2">
                  <CalendarDays className="w-5 h-5" />
                  Set Race Day
                </button>
              </MagneticButton>

              <MagneticButton strength={0.2}>
                <button className="btn-secondary text-lg flex items-center gap-2 justify-center">
                  <Play className="w-5 h-5" />
                  Preview Plan
                </button>
              </MagneticButton>
            </motion.div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm font-bold text-gray-600">
              <span>🏁 Race-specific plans</span>
              <span>🔥 Streak-driven consistency</span>
              <span>🤝 Train with friends</span>
            </div>
          </div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
          >
            <motion.div
              className="absolute -top-12 -right-8 hidden lg:block"
              animate={{ y: [0, -10, 0], rotate: [0, 1.5, 0] }}
              transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Image
                src="/tortoise-running.png"
                alt="Running tortoise mascot"
                width={140}
                height={140}
                className="drop-shadow-2xl"
              />
            </motion.div>

            <div className="rounded-3xl border-2 border-gray-100 bg-white/95 shadow-2xl p-6 lg:p-7">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-500 font-bold">Mission Board</p>
                  <h3 className="text-2xl font-black text-gray-900">Seattle Marathon</h3>
                </div>
                <motion.div
                  animate={{ y: [0, -8, 0], scale: [1, 1.03, 1] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <Image
                    src="/tortoise-celebrating.png"
                    alt="Celebrating tortoise mascot"
                    width={92}
                    height={92}
                    className="drop-shadow-lg"
                  />
                </motion.div>
              </div>

              <div className="rounded-2xl bg-gray-50 border border-gray-200 p-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-bold text-gray-500">Today → Race Day</span>
                  <span className="text-xs bg-tortoise-primary/10 text-tortoise-primary-dark px-2 py-1 rounded-full font-black">94 days left</span>
                </div>

                <div className="space-y-3">
                  {milestones.map((item, idx) => (
                    <div key={item.week} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center">
                        <item.icon className="w-4 h-4 text-tortoise-primary" />
                      </div>
                      <div className="flex-1 flex items-center justify-between border-b border-dashed border-gray-200 pb-2">
                        <span className="font-bold text-gray-800">{item.week}</span>
                        <span className="text-sm text-gray-500">{item.label}</span>
                      </div>
                      <div className={`w-2.5 h-2.5 rounded-full ${idx === 3 ? 'bg-tortoise-shell' : 'bg-tortoise-primary'}`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
