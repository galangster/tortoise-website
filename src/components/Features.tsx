'use client'

import { motion } from 'framer-motion'
import { Target, Zap, Users, Brain, Trophy, CalendarClock } from 'lucide-react'

const features = [
  {
    icon: CalendarClock,
    title: 'Race-Day-First Planning',
    description: 'Set your race date first. Every workout is sequenced backwards from that finish line.',
    color: 'bg-tortoise-sky',
    size: 'large', // Featured card
  },
  {
    icon: Brain,
    title: 'Adaptive AI Coach',
    description: 'Plans update when you miss sessions, feel stronger, or hit a stressful week.',
    color: 'bg-tortoise-primary',
    size: 'medium',
  },
  {
    icon: Target,
    title: 'Daily Quest Structure',
    description: 'Every day has a clear mission so you always know exactly what to do next.',
    color: 'bg-tortoise-shell',
    size: 'medium',
  },
  {
    icon: Zap,
    title: 'Streak + XP Motivation',
    description: 'Gamified momentum loops help you stay consistent without burnout.',
    color: 'bg-tortoise-purple',
    size: 'compact', // Smaller card
  },
  {
    icon: Users,
    title: 'Train with Friends',
    description: 'Social features keep you accountable and make race prep feel less lonely.',
    color: 'bg-tortoise-trail',
    size: 'compact',
  },
  {
    icon: Trophy,
    title: 'Performance Milestones',
    description: 'Visual progress from base build to peak week to race-day readiness.',
    color: 'bg-tortoise-xp',
    size: 'large', // Featured card
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 bg-surface-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.h2
            className="text-4xl lg:text-5xl font-black text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Built to Keep You Consistent
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Serious training outcomes, playful UX, and a coaching system that adapts to real life.
          </motion.p>
        </div>

        {/* Editorial Layout - Broken Grid */}
        <div className="grid md:grid-cols-12 gap-6">
          {/* Row 1: Large featured + Medium */}
          <motion.div
            className="md:col-span-7 card-featured group relative overflow-hidden"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-tortoise-sky/20 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative flex flex-col h-full">
              <div className="flex items-start gap-4 mb-4">
                <motion.div 
                  className="bg-tortoise-sky p-4 rounded-2xl shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <CalendarClock className="w-8 h-8 text-white" />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-2xl font-black text-gray-900 mb-3">Race-Day-First Planning</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Set your race date first. Every workout is sequenced backwards from that finish line, 
                    ensuring you peak at exactly the right moment.
                  </p>
                </div>
              </div>
              <div className="mt-auto pt-4 flex items-center gap-2 text-sm font-bold text-tortoise-sky">
                <span>Backwards planning logic</span>
                <span>→</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="md:col-span-5 card group"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="flex flex-col h-full">
              <motion.div 
                className="bg-tortoise-primary p-3 rounded-2xl shadow-lg w-fit mb-4"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Brain className="w-6 h-6 text-white" />
              </motion.div>
              <h3 className="text-xl font-black text-gray-900 mb-2">Adaptive AI Coach</h3>
              <p className="text-gray-600 flex-1">
                Plans update when you miss sessions, feel stronger, or hit a stressful week.
              </p>
            </div>
          </motion.div>

          {/* Row 2: Two mediums */}
          <motion.div
            className="md:col-span-6 card group"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="flex items-start gap-4">
              <motion.div 
                className="bg-tortoise-shell p-3 rounded-2xl shadow-lg"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Target className="w-6 h-6 text-white" />
              </motion.div>
              <div>
                <h3 className="text-xl font-black text-gray-900 mb-2">Daily Quest Structure</h3>
                <p className="text-gray-600">
                  Every day has a clear mission so you always know exactly what to do next.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="md:col-span-6 card-featured-secondary group relative overflow-hidden"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.24, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-tortoise-xp/20 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            <div className="relative flex items-start gap-4">
              <motion.div 
                className="bg-tortoise-xp p-4 rounded-2xl shadow-lg"
                whileHover={{ scale: 1.1, rotate: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Trophy className="w-8 h-8 text-white" />
              </motion.div>
              <div className="flex-1">
                <h3 className="text-2xl font-black text-gray-900 mb-2">Performance Milestones</h3>
                <p className="text-gray-600 text-lg">
                  Visual progress from base build to peak week to race-day readiness. 
                  Watch your fitness unfold week by week.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Row 3: Two compact cards side by side */}
          <motion.div
            className="md:col-span-6 card-compact group"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.32, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="flex items-center gap-4">
              <motion.div 
                className="bg-tortoise-purple p-3 rounded-xl shadow-lg"
                whileHover={{ scale: 1.15 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Zap className="w-5 h-5 text-white" />
              </motion.div>
              <div>
                <h3 className="text-lg font-black text-gray-900">Streak + XP Motivation</h3>
                <p className="text-gray-600 text-sm">Gamified momentum loops without burnout</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="md:col-span-6 card-compact group"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="flex items-center gap-4">
              <motion.div 
                className="bg-tortoise-trail p-3 rounded-xl shadow-lg"
                whileHover={{ scale: 1.15 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Users className="w-5 h-5 text-white" />
              </motion.div>
              <div>
                <h3 className="text-lg font-black text-gray-900">Train with Friends</h3>
                <p className="text-gray-600 text-sm">Social accountability, less lonely prep</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
