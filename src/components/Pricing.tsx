'use client'

import { motion } from 'framer-motion'
import { Check, Star } from 'lucide-react'
import { TortoiseMascot } from './TortoiseMascot'

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: '/month',
    description: 'Start your journey',
    features: [
      'Basic training plans',
      'Daily streak tracking',
      'Knowledge hub access',
      'Community access',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Tortoise Pro',
    price: '$6',
    period: '/month',
    description: 'Everything you need to finish',
    annualPrice: '$30/year',
    features: [
      'AI adaptive training',
      'Advanced analytics',
      'All knowledge modules',
      'Friend challenges',
      'Streak freezes',
      'Custom workout builder',
      'Priority support',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-surface-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl lg:text-5xl font-black text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Simple Pricing
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Start free. Upgrade when you\'re ready. Cancel anytime.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative rounded-3xl p-8 ${
                plan.popular
                  ? 'bg-white border-4 border-tortoise-primary shadow-2xl scale-105'
                  : 'bg-white border-2 border-gray-100 shadow-lg'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-tortoise-primary text-white font-black px-4 py-1 rounded-full text-sm flex items-center gap-1">
                    <Star className="w-4 h-4 fill-white" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-black text-gray-900 mb-2">{plan.name}</h3>
                
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-black text-gray-900">{plan.price}</span>
                  <span className="text-gray-500">{plan.period}</span>
                </div>
                
                {plan.annualPrice && (
                  <p className="text-tortoise-primary font-bold text-sm mt-1">
                    or {plan.annualPrice} annually
                  </p>
                )}
                
                <p className="text-gray-600 mt-2">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                      plan.popular ? 'bg-tortoise-primary' : 'bg-gray-200'
                    }`}>
                      <Check className={`w-3 h-3 ${plan.popular ? 'text-white' : 'text-gray-600'}`} />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-2xl font-bold text-lg transition-all ${
                  plan.popular
                    ? 'btn-primary'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
