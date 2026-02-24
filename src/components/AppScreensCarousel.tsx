'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Flame, Trophy, CalendarDays } from 'lucide-react'
import Image from 'next/image'

const slides = [
  {
    title: 'Daily Quest',
    subtitle: 'Today: Easy 4 mile recovery run',
    accent: 'bg-tortoise-primary',
    icon: Flame,
    image: '/screenshots/quest.svg',
  },
  {
    title: 'Weekly Plan',
    subtitle: 'Auto-adjusted for your schedule',
    accent: 'bg-tortoise-sky',
    icon: CalendarDays,
    image: '/screenshots/plan.svg',
  },
  {
    title: 'Milestone Unlocked',
    subtitle: 'Longest run completed 🎉',
    accent: 'bg-tortoise-shell',
    icon: Trophy,
    image: '/screenshots/milestone.svg',
  },
]

export function AppScreensCarousel() {
  const [index, setIndex] = useState(0)
  const [broken, setBroken] = useState<Record<number, boolean>>({})
  const slide = slides[index]

  const next = () => setIndex((prev) => (prev + 1) % slides.length)
  const prev = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-3">Inside the Tortoise App</h2>
          <p className="text-xl text-gray-600">Drop real app screenshots into <code>public/screenshots</code> to replace placeholders.</p>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="relative rounded-[2.5rem] border-8 border-gray-900 bg-black p-4 shadow-2xl">
            <div className="rounded-[2rem] bg-white min-h-[520px] p-5 overflow-hidden relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={slide.title}
                  initial={{ opacity: 0, x: 18 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -18 }}
                  className="h-full"
                >
                  <div className={`w-12 h-12 rounded-2xl ${slide.accent} flex items-center justify-center mb-4`}>
                    <slide.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-1">{slide.title}</h3>
                  <p className="text-gray-600 mb-5">{slide.subtitle}</p>

                  {!broken[index] ? (
                    <div className="relative w-full h-[360px] rounded-2xl overflow-hidden border border-gray-200 bg-gray-100">
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        className="object-cover"
                        onError={() => setBroken((prev) => ({ ...prev, [index]: true }))}
                      />
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div className="h-20 rounded-2xl bg-gray-100 border border-gray-200" />
                      <div className="h-20 rounded-2xl bg-gray-100 border border-gray-200" />
                      <div className="h-20 rounded-2xl bg-gray-100 border border-gray-200" />
                      <div className="h-20 rounded-2xl bg-gray-100 border border-gray-200" />
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 mt-6">
            <button onClick={prev} className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center bg-white">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {slides.map((_, i) => (
                <span key={i} className={`w-2.5 h-2.5 rounded-full ${i === index ? 'bg-tortoise-primary' : 'bg-gray-300'}`} />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center bg-white">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
