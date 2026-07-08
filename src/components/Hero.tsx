import { WaitlistForm } from './WaitlistForm'
import { TortoiseMascot } from './TortoiseMascot'
import { TodaysRunCard } from './AppUI'

export function Hero() {
  return (
    <section id="top" className="dawn-sky relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 pb-20 pt-32 lg:grid-cols-[1.1fr_0.9fr] lg:pb-28 lg:pt-40">
        {/* Left: message + capture (rendered static, always visible, LCP-safe) */}
        <div className="min-w-0">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3.5 py-1.5 text-sm font-bold text-cloud-muted ring-1 ring-white/10">
            <span className="inline-block h-2 w-2 rounded-full bg-tortoise-primary" />
            Launching Spring 2026 · Free TestFlight beta
          </span>

          <h1 className="mt-5 text-balance text-4xl font-black leading-[1.05] tracking-tight text-cloud sm:text-5xl lg:text-6xl">
            Train for your first marathon,{' '}
            <span className="text-tortoise-primary">one run at a time.</span>
          </h1>

          <p className="mt-5 max-w-lg text-pretty text-lg font-medium text-cloud-muted">
            Tortoise is an AI running coach that builds a marathon plan around your real life, then
            tells you exactly what to run today. It adapts when you miss a day, celebrates the streak,
            and never makes you feel slow. Consistency beats intensity, every time.
          </p>

          <div className="mt-8">
            <WaitlistForm id="waitlist" />
            <p className="mt-3 text-sm font-semibold text-cloud-faint">
              No spam. One email when we launch. Built for the back of the pack.
            </p>
          </div>
        </div>

        {/* Right: real product + mascot */}
        <div className="relative flex min-w-0 justify-center lg:justify-end">
          <div className="relative">
            <TodaysRunCard />
            <TortoiseMascot
              mood="determined"
              size={132}
              float
              priority
              alt="The Tortoise mascot, laced up and ready to run"
              className="absolute -bottom-10 -left-14 hidden sm:block"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
