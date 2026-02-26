'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Flame, Trophy, CalendarDays } from 'lucide-react'
import Image from 'next/image'

const slides = [
  {
    title: 'Daily Quest',
    subtitle: 'Today: Easy 4 mile recovery run',
    description:
      'Every day has one clear mission. No guessing, no decision fatigue—just the next best run for your race timeline.',
    accent: 'bg-tortoise-primary',
    icon: Flame,
    mascot: '/tortoise-running-220.webp',
    bgColor: 'from-tortoise-primary/10 to-tortoise-sky/10',
  },
  {
    title: 'Weekly Plan',
    subtitle: 'Auto-adjusted for your schedule',
    description:
      'Your plan updates when life changes. Missed workouts and busy weeks no longer break your progress.',
    accent: 'bg-tortoise-sky',
    icon: CalendarDays,
    mascot: '/tortoise-celebrating-220.webp',
    bgColor: 'from-tortoise-sky/10 to-tortoise-primary/10',
  },
  {
    title: 'Milestone Unlocked',
    subtitle: 'Longest run completed 🎉',
    description:
      'Small wins stack into race-day confidence. Milestones and XP keep momentum high across the full cycle.',
    accent: 'bg-tortoise-shell',
    icon: Trophy,
    mascot: '/tortoise-celebrating-220.webp',
    bgColor: 'from-tortoise-shell/10 to-tortoise-xp/10',
  },
]

export function AppScreensCarousel() {
  const [index, setIndex] = useState(0)
  const slide = slides[index]

  const next = () => setIndex((prev) => (prev + 1) % slides.length)
  const prev = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-3">See the Product, Not Just the Promise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A focused app showcase inspired by top mobile landing patterns: feature tabs + one premium device frame.
          </p>
        </div>

        <div className="rounded-3xl border border-gray-200 bg-gradient-to-br from-white via-white to-gray-50 p-6 lg:p-8 shadow-xl">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                {slides.map((item, i) => (
                  <button
                    key={item.title}
                    onClick={() => setIndex(i)}
                    className={`px-4 py-2 rounded-full text-sm font-black border transition-all ${
                      i === index
                        ? 'bg-gray-900 text-white border-gray-900'
                        : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {item.title}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={slide.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <div className={`w-12 h-12 rounded-2xl ${slide.accent} flex items-center justify-center mb-4`}>
                    <slide.icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-3xl font-black text-gray-900 mb-1">{slide.title}</h3>
                  <p className="text-base text-gray-500 mb-4">{slide.subtitle}</p>
                  <p className="text-lg text-gray-700 leading-relaxed max-w-xl">{slide.description}</p>

                  <div className="flex items-center gap-3 mt-6">
                    <button
                      onClick={prev}
                      className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center bg-white hover:bg-gray-50"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={next}
                      className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center bg-white hover:bg-gray-50"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                    <div className="flex gap-2 ml-1">
                      {slides.map((_, i) => (
                        <span key={i} className={`w-2.5 h-2.5 rounded-full ${i === index ? 'bg-tortoise-primary' : 'bg-gray-300'}`} />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={slide.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className={`relative rounded-3xl bg-gradient-to-br ${slide.bgColor} p-8 lg:p-12 min-h-[400px] flex items-center justify-center overflow-hidden`}
                >
                  {/* Decorative circles */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
                  
                  {/* Mascot */}
                  <motion.div
                    animate={{ y: [0, -12, 0], rotate: [0, 2, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="relative z-10"
                  >
                    <Image
                      src={slide.mascot}
                      alt={slide.title}
                      width={220}
                      height={220}
                      className="drop-shadow-2xl"
                    />
                  </motion.div>

                  {/* Floating card elements */}
                  <motion.div 
                    className="absolute top-6 left-6 bg-white rounded-2xl px-4 py-3 shadow-lg"
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                  >
                    <div className="flex items-center gap-2">
                      <div className={`w-8 h-8 rounded-lg ${slide.accent} flex items-center justify-center`}>
                        <slide.icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-bold text-gray-900 text-sm">{slide.title}</span>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="absolute bottom-6 right-6 bg-white rounded-2xl px-4 py-3 shadow-lg"
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">✨</span>
                      <span className="font-bold text-gray-900 text-sm">+120 XP</span>
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
