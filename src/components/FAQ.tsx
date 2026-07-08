import { ChevronDown } from 'lucide-react'
import { Reveal } from './Reveal'

const faqs = [
  {
    q: 'When does Tortoise launch?',
    a: 'Spring 2026. Everyone on the waitlist gets first access through TestFlight, and the first 100 to join get Tortoise Pro free for a month.',
  },
  {
    q: 'Do I need to already be a runner?',
    a: 'Tortoise is built for first-timers and the back of the pack. If you can walk, you can start, and the plan meets you where you are and grows with you.',
  },
  {
    q: 'Is there really a free plan?',
    a: 'Yes. The free plan gives you a personalized starter plan, run tracking, streaks, and the Bronze league, free forever. Pro unlocks the full AI coaching, all league tiers, and the complete knowledge library.',
  },
  {
    q: 'How does effort-fair scoring work?',
    a: 'Most apps rank you by raw pace, which quietly punishes slower runners. Tortoise scores how hard the run was for you, so a tough 12-minute mile earns nearly the same as a fast 7-minute one. Effort is the score, so raw speed alone won’t decide your rank.',
  },
  {
    q: 'Does it work with Apple Watch?',
    a: 'Yes. There’s a native Apple Watch app with Live Activities, so you can start runs and see your coaching right from your wrist.',
  },
  {
    q: 'Is it on Android?',
    a: 'iOS first. Android is on the roadmap, so join the waitlist and we’ll let you know the moment it’s ready.',
  },
]

export function FAQ() {
  return (
    <section id="faq" className="bg-ink-900 py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-5">
        <Reveal className="text-center">
          <p className="font-extrabold text-tortoise-primary">FAQ</p>
          <h2 className="mt-2 text-balance text-3xl font-black tracking-tight text-cloud sm:text-4xl">
            The questions runners actually ask.
          </h2>
        </Reveal>

        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.03}>
              <details className="group surface overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-extrabold text-cloud">
                  {f.q}
                  <ChevronDown
                    className="h-5 w-5 shrink-0 text-cloud-faint transition-transform duration-200 group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <p className="px-5 pb-5 font-medium leading-relaxed text-cloud-muted">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
