import { TortoiseMascot, type Mood } from './TortoiseMascot'
import { Reveal } from './Reveal'

const steps: { n: number; mood: Mood; title: string; body: string }[] = [
  {
    n: 1,
    mood: 'thinking',
    title: 'Tell us your goal',
    body: 'Your race date and where you are today, whether you are a first-timer or coming back. No fitness test required.',
  },
  {
    n: 2,
    mood: 'analyzing',
    title: 'Get your adaptive plan',
    body: 'A week-by-week path to the start line, built around the days you can actually run.',
  },
  {
    n: 3,
    mood: 'running',
    title: 'Run today’s session',
    body: 'Open the app and go. Live coaching guides your pace on your phone and Apple Watch.',
  },
  {
    n: 4,
    mood: 'trophy',
    title: 'Keep the streak, climb',
    body: 'Small wins compound. Hold your streak, earn XP, and rise through the weekly leagues to race day.',
  },
]

export function HowItWorks() {
  return (
    <section id="how" className="bg-ink-850 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="font-extrabold text-tortoise-primary">How it works</p>
          <h2 className="mt-2 max-w-2xl text-balance text-3xl font-black tracking-tight text-cloud sm:text-4xl">
            From “I could never” to the start line.
          </h2>
        </Reveal>

        <ol className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 0.06} className="surface relative flex flex-col p-6">
              <div className="flex items-center justify-between">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-tortoise-primary/15 text-base font-black text-tortoise-primary">
                  {s.n}
                </span>
                <TortoiseMascot mood={s.mood} size={64} />
              </div>
              <h3 className="mt-4 text-xl font-black text-cloud">{s.title}</h3>
              <p className="mt-2 font-medium text-cloud-muted">{s.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
