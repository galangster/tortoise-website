'use client'

import { motion } from 'framer-motion'
import { Target, Zap, Users, Brain, Trophy, CalendarClock } from 'lucide-react'

const features = [
  {
    icon: CalendarClock,
    title: 'Race-Day-First Planning',
    description: 'Set your race date first. Every workout is sequenced backwards from that finish line.',
    color: 'bg-tortoise-sky',
  },
  {
    icon: Brain,
    title: 'Adaptive AI Coach',
    description: 'Plans update when you miss sessions, feel stronger, or hit a stressful week.',
    color: 'bg-tortoise-primary',
  },
  {
    icon: Target,
    title: 'Daily Quest Structure',
    description: 'Every day has a clear mission so you always know exactly what to do next.',
    color: 'bg-tortoise-shell',
  },
  {
    icon: Zap,
    title: 'Streak + XP Motivation',
    description: 'Gamified momentum loops help you stay consistent without burnout.',
    color: 'bg-tortoise-purple',
  },
  {
    icon: Users,
    title: 'Train with Friends',
    description: 'Social features keep you accountable and make race prep feel less lonely.',
    color: 'bg-tortoise-trail',
  },
  {
    icon: Trophy,
    title: 'Performance Milestones',
    description: 'Visual progress from base build to peak week to race-day readiness.',
    color: 'bg-tortoise-xp',
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="card group"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <div className="flex items-start gap-4">
                <div className={`${feature.color} p-3 rounded-2xl shadow-lg group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
