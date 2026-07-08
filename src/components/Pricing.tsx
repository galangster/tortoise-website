'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'
import { Reveal } from './Reveal'

const freePerks = [
  'A personalized starter plan',
  'Daily run tracking & streaks',
  'Weekly leagues (Bronze tier)',
  'A taste of the knowledge hub',
]

const proPerks = [
  'Full AI adaptive coaching',
  'Live in-run voice coaching',
  'Effort-fair leagues, all tiers',
  'Streak protection & recovery tips',
  'Ghost-runner races & route challenges',
  'The complete knowledge library',
  'Advanced analytics & Apple Watch',
]

export function Pricing() {
  const [annual, setAnnual] = useState(true)

  return (
    <section id="pricing" className="bg-ink-850 py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-5">
        <Reveal className="text-center">
          <p className="font-extrabold text-tortoise-primary">Pricing</p>
          <h2 className="mt-2 text-balance text-3xl font-black tracking-tight text-cloud sm:text-4xl">
            Start free. Go Pro when you’re hooked.
          </h2>
          <p className="mx-auto mt-3 max-w-md font-medium text-cloud-muted">
            Start free and keep the basics forever. Pro comes with a free trial, and you can cancel any
            time (no marathon of cancellation screens).
          </p>
        </Reveal>

        {/* Billing toggle */}
        <Reveal delay={0.05} className="mt-8 flex items-center justify-center gap-3">
          <button
            type="button"
            aria-pressed={!annual}
            onClick={() => setAnnual(false)}
            className={`rounded-full px-4 py-2 text-sm font-bold transition-colors ${
              !annual ? 'bg-white/10 text-cloud' : 'text-cloud-muted hover:text-cloud'
            }`}
          >
            Monthly
          </button>
          <button
            type="button"
            aria-pressed={annual}
            onClick={() => setAnnual(true)}
            className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold transition-colors ${
              annual ? 'bg-white/10 text-cloud' : 'text-cloud-muted hover:text-cloud'
            }`}
          >
            Annual
            <span className="rounded-full bg-tortoise-xp/20 px-2 py-0.5 text-xs font-black text-tortoise-xp">
              Save 48%
            </span>
          </button>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 items-start gap-5 md:grid-cols-2">
          {/* Free */}
          <Reveal className="surface p-7">
            <h3 className="text-xl font-black text-cloud">Free</h3>
            <p className="mt-1 font-medium text-cloud-muted">Everything you need to start running.</p>
            <p className="mt-5 text-4xl font-black text-cloud">
              $0<span className="text-base font-bold text-cloud-faint"> forever</span>
            </p>
            <a href="#waitlist" className="btn-secondary mt-6 w-full">
              Join the waitlist
            </a>
            <ul className="mt-6 space-y-3">
              {freePerks.map((p) => (
                <li key={p} className="flex items-start gap-2.5 font-medium text-cloud-muted">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-cloud-muted" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Pro */}
          <Reveal
            delay={0.05}
            className="relative rounded-3xl bg-ink-700 p-7 ring-2 ring-tortoise-primary"
          >
            <span className="absolute -top-3 left-7 rounded-full bg-tortoise-primary px-3 py-1 text-xs font-black text-ink-900">
              Most popular
            </span>
            <h3 className="text-xl font-black text-cloud">Tortoise Pro</h3>
            <p className="mt-1 font-medium text-cloud-muted">Your full AI coach, all the way to race day.</p>
            <p className="mt-5 text-4xl font-black text-cloud">
              {annual ? '$4.17' : '$7.99'}
              <span className="text-base font-bold text-cloud-faint"> / month</span>
            </p>
            <p className="mt-1 text-sm font-bold text-tortoise-primary">
              {annual ? 'Billed $49.99 yearly' : 'Billed monthly'}
            </p>
            <a href="#waitlist" className="btn-primary mt-6 w-full">
              Join the waitlist
            </a>
            <ul className="mt-6 space-y-3">
              {proPerks.map((p) => (
                <li key={p} className="flex items-start gap-2.5 font-semibold text-cloud">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-tortoise-primary" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
