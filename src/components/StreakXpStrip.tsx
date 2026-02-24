'use client'

import { Flame, Zap, Trophy } from 'lucide-react'
import { motion } from 'framer-motion'

const stats = [
  { icon: Flame, label: 'Current Streak', value: '12 days', color: 'text-tortoise-streak' },
  { icon: Zap, label: 'XP This Week', value: '1,240 XP', color: 'text-tortoise-xp' },
  { icon: Trophy, label: 'Race Readiness', value: '78%', color: 'text-tortoise-primary' },
]

export function StreakXpStrip() {
  return (
    <section className="py-6 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-3">
          {stats.map((item, idx) => (
            <motion.div
              key={item.label}
              className="rounded-2xl bg-gray-50 border border-gray-200 p-4 flex items-center gap-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center">
                <item.icon className={`w-5 h-5 ${item.color}`} />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide">{item.label}</p>
                <p className="font-black text-gray-900">{item.value}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
