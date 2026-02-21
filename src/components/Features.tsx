'use client'

import { motion } from 'framer-motion'
import { TortoiseMascot } from './TortoiseMascot'
import { 
  Target, 
  Zap, 
  Users, 
  Brain,
  BookOpen,
  Trophy,
  Heart,
  TrendingUp
} from 'lucide-react'

const features = [
  {
    icon: Target,
    title: 'Adaptive AI Training',
    description: 'Your plan evolves with you. Missed a day? We adjust. Feeling strong? We push. Injured? We recover.',
    color: 'bg-tortoise-primary',
    mascot: 'thinking' as const,
  },
  {
    icon: Zap,
    title: 'Duolingo-Style Gamification',
    description: 'Streaks, XP, leagues, and daily quests make every run feel rewarding. Build habits that stick.',
    color: 'bg-tortoise-xp',
    mascot: 'celebrating' as const,
  },
  {
    icon: BookOpen,
    title: 'Running Knowledge Hub',
    description: 'Learn form, nutrition, pacing, and mental toughness through bite-sized lessons. Knowledge is power.',
    color: 'bg-tortoise-sky',
    mascot: 'happy' as const,
  },
  {
    icon: Users,
    title: 'Effort-Normalized Social',
    description: 'Compete in leagues with runners at your level. A 12-min/mile effort scores the same as 7-min/mile.',
    color: 'bg-tortoise-purple',
    mascot: 'cheering' as const,
  },
  {
    icon: Brain,
    title: 'Rest Day Engagement',
    description: 'Most apps abandon you on rest days. We keep you learning, stretching, and building habits.',
    color: 'bg-tortoise-trail',
    mascot: 'happy' as const,
  },
  {
    icon: Trophy,
    title: 'Marathon Journey Map',
    description: 'Visualize your path from couch to marathon. Unlock milestones, earn badges, celebrate progress.',
    color: 'bg-tortoise-shell',
    mascot: 'celebrating' as const,
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 bg-surface-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl lg:text-5xl font-black text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Why Tortoise?
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            We combined the best of running science with game design to create 
            the most addictive way to become a runner.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="card group hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-start gap-4">
                <div className={`${feature.color} p-3 rounded-2xl shadow-lg group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-black text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <TortoiseMascot mood={feature.mascot} size={60} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
