'use client'

import { motion } from 'framer-motion'

const logos = [
  { name: 'TechCrunch', text: 'Featured in TechCrunch' },
  { name: 'ProductHunt', text: '#1 Product of the Day' },
  { name: 'AppStore', text: 'App Store Featured' },
  { name: 'Strava', text: 'Strava Integration' },
]

export function SocialProof() {
  return (
    <section className="py-8 bg-surface-light border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.p
            className="text-gray-500 font-bold text-sm uppercase tracking-wider"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Trusted by 10,000+ runners
          </motion.p>

          <div className="flex flex-wrap items-center justify-center gap-8">
            {logos.map((logo, index) => (
              <motion.div
                key={logo.name}
                className="text-gray-400 font-bold text-lg hover:text-gray-600 transition-colors cursor-pointer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {logo.name}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
