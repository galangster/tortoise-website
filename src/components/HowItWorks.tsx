'use client'

import { motion } from 'framer-motion'
import { TortoiseBubble } from './TortoiseMascot'

const steps = [
  {
    step: '01',
    title: 'Set Your Goal',
    description: 'Tell us your experience level and target race. First 5K? Half marathon? Full marathon? We have got you.',
    mascot: 'thinking' as const,
  },
  {
    step: '02',
    title: 'Get Your Plan',
    description: 'Our AI creates a personalized training plan that adapts to your life, not the other way around.',
    mascot: 'happy' as const,
  },
  {
    step: '03',
    title: 'Run & Learn',
    description: 'Complete workouts, unlock achievements, and learn running skills. Every day counts.',
    mascot: 'running' as const,
  },
  {
    step: '04',
    title: 'Train Together',
    description: 'Run with friends and celebrate milestones together. Slow and steady wins the race.',
    mascot: 'celebrating' as const,
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl lg:text-5xl font-black text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            How It Works
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            From your first step to the finish line, we are with you every mile.
          </motion.p>
        </div>

        <div className="space-y-8">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row items-center gap-8"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <div className={`flex-1 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <TortoiseBubble mood={item.mascot}>
                  <span className="text-tortoise-primary text-sm font-black block mb-1">
                    Step {item.step}
                  </span>
                  {item.title}
                </TortoiseBubble>
              </div>
              
              <div className={`flex-1 ${index % 2 === 1 ? 'md:order-1 md:text-right' : ''}`}>
                <p className="text-lg text-gray-600">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
