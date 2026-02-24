'use client'

import { motion } from 'framer-motion'
import { TortoiseMascot } from './TortoiseMascot'
import { Apple } from 'lucide-react'

export function CTABanner() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-tortoise-primary via-tortoise-primary to-tortoise-shell" />
      
      {/* Decorative elements */}
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-8">
          <TortoiseMascot mood="celebrating" size={180} />
        </div>

        <motion.h2
          className="text-4xl lg:text-6xl font-black text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
Ready to Lock In Race Day?
        </motion.h2>

        <motion.p
          className="text-xl text-white/90 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
Join runners using race-day-first planning to train smarter, stay consistent, and actually enjoy the process.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <button className="bg-white text-gray-900 font-bold py-4 px-8 rounded-2xl flex items-center gap-3 hover:bg-gray-100 transition-colors shadow-xl">
            <Apple className="w-6 h-6" />
            <div className="text-left">
              <div className="text-xs opacity-70">Download on the</div>
              <div className="text-lg leading-none">App Store</div>
            </div>
          </button>
        </motion.div>

        <p className="text-white/70 mt-6 text-sm">
          Free to download. Premium features available. iOS only.
        </p>
      </div>
    </section>
  )
}
