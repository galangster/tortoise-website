'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Star } from 'lucide-react'

const plans = {
  monthly: {
    free: {
      name: 'Free',
      price: '$0',
      period: '/month',
      description: 'Try Tortoise and build your running rhythm',
      features: ['Race goal setup', 'Basic training schedule', 'Streak tracking', 'Community access'],
      cta: 'Get Started',
    },
    pro: {
      name: 'Tortoise Pro',
      price: '$7.99',
      period: '/month',
      description: 'AI-native coaching built around your race day',
      badge: 'Most Popular',
      features: [
        'Set race day, train backwards automatically',
        'Adaptive AI plan updates',
        'Advanced analytics + pacing insights',
        'Friend challenges + motivation loops',
        'Knowledge hub + recovery guidance',
        'Priority support',
      ],
      cta: 'Start Pro',
    },
  },
  annual: {
    free: {
      name: 'Free',
      price: '$0',
      period: '/month',
      description: 'Try Tortoise and build your running rhythm',
      features: ['Race goal setup', 'Basic training schedule', 'Streak tracking', 'Community access'],
      cta: 'Get Started',
    },
    pro: {
      name: 'Tortoise Pro',
      price: '$49.99',
      period: '/year',
      description: 'Best value for full-season race prep',
      badge: 'Save big yearly',
      features: [
        'Everything in monthly Pro',
        'Race-day-first AI planning',
        'Adaptive adjustments when life happens',
        'Advanced performance trends',
        'Priority support',
      ],
      cta: 'Start Annual Pro',
    },
  },
}

export function Pricing() {
  const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly')
  const current = plans[billing]

  return (
    <section id="pricing" className="py-20 bg-surface-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl lg:text-5xl font-black text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Pricing That Grows With You
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Start free, then unlock race-day-first AI coaching when you&apos;re ready.
          </motion.p>

          <div className="inline-flex p-1 bg-white rounded-2xl border border-gray-200 shadow-sm">
            <button
              onClick={() => setBilling('monthly')}
              className={`px-5 py-2 rounded-xl font-bold transition-colors ${
                billing === 'monthly' ? 'bg-tortoise-primary text-white' : 'text-gray-600'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling('annual')}
              className={`px-5 py-2 rounded-xl font-bold transition-colors ${
                billing === 'annual' ? 'bg-tortoise-primary text-white' : 'text-gray-600'
              }`}
            >
              Annual
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-center">
          {([current.free, current.pro] as Array<{
            name: string
            price: string
            period: string
            description: string
            features: string[]
            cta: string
            badge?: string
          }>).map((plan, index) => {
            const popular = index === 1
            return (
              <motion.div
                key={plan.name}
                className={`relative rounded-3xl p-8 ${
                  popular
                    ? 'bg-white border-4 border-tortoise-primary shadow-2xl scale-105'
                    : 'bg-white border-2 border-gray-100 shadow-lg'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {popular && plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-tortoise-primary text-white font-black px-4 py-1 rounded-full text-sm flex items-center gap-1">
                      <Star className="w-4 h-4 fill-white" />
                      {plan.badge}
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-black text-gray-900 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-black text-gray-900">{plan.price}</span>
                    <span className="text-gray-500">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 mt-2">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                        popular ? 'bg-tortoise-primary' : 'bg-gray-200'
                      }`}>
                        <Check className={`w-3 h-3 ${popular ? 'text-white' : 'text-gray-600'}`} />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 rounded-2xl font-bold text-lg transition-all ${
                  popular ? 'btn-primary' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  {plan.cta}
                </button>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
