'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    question: 'Is Tortoise good for complete beginners?',
    answer: 'Absolutely! Tortoise is specifically designed for beginners. Our Couch to Marathon program starts with walk/run intervals and gradually builds your fitness. The AI adapts to your pace, not the other way around. 73% of our users started as complete beginners.',
  },
  {
    question: 'How is this different from other running apps?',
    answer: 'Three key differences: (1) We keep you engaged every day, not just run days, with knowledge lessons and stretching. (2) Our leagues are effort-normalized, so beginners compete fairly with beginners. (3) Our AI actually adapts your plan when life happens — missed a day? We adjust instead of making you feel behind.',
  },
  {
    question: 'What if I miss a workout?',
    answer: 'No guilt, no problem. Our AI automatically adjusts your plan. Take a rest day, and you\'ll find a short knowledge lesson or stretching routine to keep your streak alive. Take a week off, and we\'ll ease you back in safely. The tortoise philosophy is consistency over perfection.',
  },
  {
    question: 'Do I need an Apple Watch?',
    answer: 'Not required, but recommended. The Apple Watch app provides the best experience with real-time heart rate, GPS tracking, and haptic cues. Without a watch, you can still use the app for planning, learning, and logging runs manually.',
  },
  {
    question: 'How does the AI adaptation work?',
    answer: 'We combine your HealthKit data (heart rate, sleep, HRV) with your workout history to detect fatigue, fitness gains, and life stress. The AI then adjusts your daily workout — easier if you\'re tired, harder if you\'re crushing it, different if you have a busy week ahead.',
  },
  {
    question: 'Can I use this for non-marathon goals?',
    answer: 'Yes! While we specialize in marathon training, you can set goals for 5K, 10K, or half marathon. Many users start with a 5K goal and naturally progress to longer distances as their confidence builds.',
  },
  {
    question: 'What happens after I finish my race?',
    answer: 'Celebrate! You\'ll get a personalized race recap, achievement badges, and the option to set a new goal. Many tortoises become "ultra tortoises" and tackle 50Ks, or they become mentors in our community, helping new runners start their journey.',
  },
  {
    question: 'How do I cancel my subscription?',
    answer: 'Easy — cancel anytime from your Account settings or through the App Store/Google Play. Your access continues until the end of your billing period. No hoops to jump through, no guilt trips. We believe in earning your business every month.',
  },
]

function FAQItem({ question, answer, isOpen, onClick }: {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
}) {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        className="w-full py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors px-2 -mx-2 rounded-lg"
        onClick={onClick}
      >
        <span className="text-lg font-bold text-gray-900 pr-4">{question}</span>
        <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
          isOpen ? 'bg-tortoise-primary text-white' : 'bg-gray-100 text-gray-600'
        }`}>
          {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-600 text-lg">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-20 bg-surface-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl lg:text-5xl font-black text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Questions? We've Got Answers.
          </motion.h2>
        </div>

        <motion.div
          className="bg-white rounded-3xl p-8 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
