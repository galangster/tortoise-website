'use client'

import { motion } from 'framer-motion'
import { Flag, CalendarDays, RefreshCw, PartyPopper } from 'lucide-react'

const steps = [
  {
    step: '01',
    title: 'Pick Your Race',
    description: 'Choose your target race and date. This anchors your full training timeline.',
    icon: Flag,
  },
  {
    step: '02',
    title: 'Plan Builds Backwards',
    description: 'Tortoise maps the exact progression from today to race day.',
    icon: CalendarDays,
  },
  {
    step: '03',
    title: 'AI Adapts Daily',
    description: 'Busy week? Missed run? Great session? The plan adjusts without losing momentum.',
    icon: RefreshCw,
  },
  {
    step: '04',
    title: 'Show Up Ready',
    description: 'Hit race day with confidence from consistent, structured prep.',
    icon: PartyPopper,
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl lg:text-5xl font-black text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Your Race-Day Workflow
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Not generic plans. A clean sequence from target date to finish-line execution.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((item, idx) => (
            <motion.div
              key={item.step}
              className="rounded-2xl border border-gray-200 bg-gray-50 p-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-tortoise-primary" />
              </div>
              <p className="text-xs font-black text-gray-400 mb-1">STEP {item.step}</p>
              <h3 className="font-black text-xl text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
