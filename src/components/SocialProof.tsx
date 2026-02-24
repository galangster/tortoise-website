'use client'

import { motion } from 'framer-motion'

const quotes = [
  {
    name: 'Maya K.',
    role: 'First-time marathoner',
    quote:
      'I finally stopped guessing what to run. The race-day plan made everything click.',
  },
  {
    name: 'Daniel R.',
    role: 'Busy dad + runner',
    quote:
      'It adapts when life gets messy. That one feature kept me consistent for 4 months straight.',
  },
  {
    name: 'Chris L.',
    role: 'Half marathon PR',
    quote:
      'The app feels like a coach and a game at the same time. Weirdly addictive in a good way.',
  },
]

export function SocialProof() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-2">Runners are sticking with it</h2>
          <p className="text-gray-600">Consistency wins races. Tortoise makes consistency feel rewarding.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {quotes.map((q, idx) => (
            <motion.div
              key={q.name}
              className="rounded-2xl border border-gray-200 bg-gray-50 p-5"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.07 }}
            >
              <p className="text-gray-700 mb-4">“{q.quote}”</p>
              <p className="font-black text-gray-900">{q.name}</p>
              <p className="text-sm text-gray-500">{q.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
