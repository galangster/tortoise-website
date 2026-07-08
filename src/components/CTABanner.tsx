import { WaitlistForm } from './WaitlistForm'
import { TortoiseMascot } from './TortoiseMascot'
import { Reveal } from './Reveal'

export function CTABanner() {
  return (
    <section className="dawn-sky border-y border-white/10 py-20 lg:py-28">
      <div className="mx-auto flex max-w-4xl flex-col items-center px-5 text-center">
        <Reveal>
          <TortoiseMascot mood="finishline" size={168} float alt="The Tortoise mascot crossing a finish line" />
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 text-balance text-3xl font-black tracking-tight text-cloud sm:text-4xl lg:text-5xl">
            Your first marathon starts with your name on the list.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-4 max-w-lg text-pretty text-lg font-medium text-cloud-muted">
            Join the waitlist for early access when we launch in Spring 2026. The first 100 runners get
            Pro free for a month.
          </p>
        </Reveal>
        <Reveal delay={0.15} className="mt-8 flex w-full justify-center">
          <WaitlistForm />
        </Reveal>
      </div>
    </section>
  )
}
