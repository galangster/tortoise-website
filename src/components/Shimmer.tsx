'use client'

import { motion } from 'framer-motion'

interface ShimmerCardProps {
  className?: string
  variant?: 'default' | 'featured' | 'compact'
}

export function ShimmerCard({ className = '', variant = 'default' }: ShimmerCardProps) {
  const baseClasses = {
    default: 'rounded-3xl p-6 h-40',
    featured: 'rounded-3xl p-8 h-56',
    compact: 'rounded-2xl p-5 h-24',
  }

  return (
    <motion.div
      className={`bg-gray-100 ${baseClasses[variant]} ${className}`}
      initial={{ opacity: 0.5 }}
      animate={{ opacity: [0.5, 0.8, 0.5] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
    >
      <div className="animate-shimmer bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 bg-[length:200%_100%] h-full w-full rounded-2xl" />
    </motion.div>
  )
}

export function ShimmerFeatures() {
  return (
    <section className="py-20 bg-surface-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="animate-shimmer bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 bg-[length:200%_100%] h-12 w-3/4 mx-auto rounded-2xl mb-4" />
          <div className="animate-shimmer bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 bg-[length:200%_100%] h-6 w-1/2 mx-auto rounded-xl" />
        </div>

        <div className="grid md:grid-cols-12 gap-6">
          <div className="md:col-span-7">
            <ShimmerCard variant="featured" />
          </div>
          <div className="md:col-span-5">
            <ShimmerCard />
          </div>
          <div className="md:col-span-6">
            <ShimmerCard />
          </div>
          <div className="md:col-span-6">
            <ShimmerCard variant="featured" />
          </div>
          <div className="md:col-span-6">
            <ShimmerCard variant="compact" />
          </div>
          <div className="md:col-span-6">
            <ShimmerCard variant="compact" />
          </div>
        </div>
      </div>
    </section>
  )
}
