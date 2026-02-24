'use client'

import { motion } from 'framer-motion'
import { CalendarDays, Dumbbell, Flame, Moon, Flag } from 'lucide-react'

const phases = [
  { title: 'Base', weeks: 'Weeks 1-3', note: 'Build consistency', icon: CalendarDays, color: 'bg-tortoise-sky' },
  { title: 'Build', weeks: 'Weeks 4-7', note: 'Increase volume safely', icon: Dumbbell, color: 'bg-tortoise-trail' },
  { title: 'Peak', weeks: 'Weeks 8-10', note: 'Race-specific intensity', icon: Flame, color: 'bg-tortoise-shell' },
  { title: 'Taper', weeks: 'Weeks 11-12', note: 'Recover + sharpen', icon: Moon, color: 'bg-tortoise-purple' },
  { title: 'Race', weeks: 'Day 84', note: 'Execute your plan', icon: Flag, color: 'bg-tortoise-primary' },
]

export function RaceTimeline() {
  return (
    <section className="py-20 bg-surface-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-3">Your Race Timeline, Visualized</h2>
          <p className="text-xl text-gray-600">A coaching roadmap from day one to your finish line.</p>
        </div>

        <div className="relative rounded-3xl border border-gray-200 bg-white p-6 lg:p-8 shadow-lg">
          <div className="hidden md:block absolute left-10 right-10 top-1/2 h-1 bg-gray-200 -translate-y-1/2" />
          <div className="grid md:grid-cols-5 gap-4 relative">
            {phases.map((phase, idx) => (
              <motion.div
                key={phase.title}
                className="rounded-2xl border border-gray-200 bg-gray-50 p-4 text-center"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
              >
                <div className={`w-10 h-10 rounded-xl ${phase.color} mx-auto mb-3 flex items-center justify-center`}>
                  <phase.icon className="w-5 h-5 text-white" />
                </div>
                <p className="font-black text-gray-900">{phase.title}</p>
                <p className="text-xs text-gray-500">{phase.weeks}</p>
                <p className="text-sm text-gray-600 mt-2">{phase.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
