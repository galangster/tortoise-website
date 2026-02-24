'use client'

import { motion } from 'framer-motion'

export function RunnerStory() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-8 lg:p-10 shadow-lg">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-wide text-tortoise-primary mb-2">Runner Story</p>
              <h2 className="text-4xl font-black text-gray-900 mb-4">From "I can’t" to finish line</h2>
              <p className="text-gray-600 mb-6">
                “I used to skip runs whenever life got busy. Tortoise kept adapting my plan, and the streak system kept me in motion.
                14 weeks later I finished my first half marathon feeling strong.”
              </p>
              <p className="font-black text-gray-900">— Alex, first-time half marathon finisher</p>
            </div>

            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="rounded-2xl bg-red-50 border border-red-100 p-4">
                <p className="text-xs uppercase text-red-500 font-bold">Before</p>
                <p className="text-3xl font-black text-gray-900 mt-1">2</p>
                <p className="text-sm text-gray-600">runs/week average</p>
              </div>
              <div className="rounded-2xl bg-green-50 border border-green-100 p-4">
                <p className="text-xs uppercase text-green-600 font-bold">After</p>
                <p className="text-3xl font-black text-gray-900 mt-1">5</p>
                <p className="text-sm text-gray-600">runs/week average</p>
              </div>
              <div className="rounded-2xl bg-gray-100 border border-gray-200 p-4 col-span-2">
                <p className="text-xs uppercase text-gray-500 font-bold">Result</p>
                <p className="text-3xl font-black text-gray-900 mt-1">1:59:42</p>
                <p className="text-sm text-gray-600">first half marathon finish time</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
