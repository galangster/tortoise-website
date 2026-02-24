'use client'

import { CheckCircle2, XCircle } from 'lucide-react'

const rows = [
  ['Planning logic', 'Race-day-first backwards planning', 'Generic forward templates'],
  ['Adaptation', 'Adjusts to missed runs + life schedule', 'Mostly static unless manually edited'],
  ['Motivation loop', 'XP, streaks, milestone rewards', 'Mostly reminders and logs'],
  ['Beginner experience', 'Guided daily quests', 'Can feel overwhelming'],
]

export function ComparisonSection() {
  return (
    <section className="py-20 bg-surface-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-3">Tortoise vs Static Training Plans</h2>
          <p className="text-xl text-gray-600">Why race-day-first coaching changes everything.</p>
        </div>

        <div className="rounded-3xl border border-gray-200 overflow-hidden bg-white shadow-lg">
          <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-200">
            <div className="p-4 font-black text-gray-700">Category</div>
            <div className="p-4 font-black text-tortoise-primary">Tortoise</div>
            <div className="p-4 font-black text-gray-500">Typical Apps</div>
          </div>

          {rows.map((row) => (
            <div key={row[0]} className="grid grid-cols-3 border-b border-gray-100 last:border-b-0">
              <div className="p-4 font-semibold text-gray-800">{row[0]}</div>
              <div className="p-4 text-gray-700 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-tortoise-primary mt-0.5" />
                <span>{row[1]}</span>
              </div>
              <div className="p-4 text-gray-600 flex items-start gap-2">
                <XCircle className="w-4 h-4 text-gray-400 mt-0.5" />
                <span>{row[2]}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
