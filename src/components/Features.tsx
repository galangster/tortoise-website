import { Brain, Flame, GraduationCap } from 'lucide-react'
import { EffortScoreCard, LeaguePodium } from './AppUI'
import { TortoiseMascot, type Mood } from './TortoiseMascot'
import { Reveal } from './Reveal'

const tiles: { icon: typeof Brain; mood: Mood; accent: string; title: string; body: string }[] = [
  {
    icon: Brain,
    mood: 'analyzing',
    accent: 'text-tortoise-sky',
    title: 'A plan that adapts to your life',
    body: 'Miss a day, sleep badly, or feel strong, and Tortoise reshapes the week so the plan fits you, instead of the other way around.',
  },
  {
    icon: Flame,
    mood: 'flame',
    accent: 'text-tortoise-streak',
    title: 'Streaks without the guilt',
    body: 'Earn XP and keep a streak that rewards showing up. Rest days count, and a missed run is a nudge, never a red mark.',
  },
  {
    icon: GraduationCap,
    mood: 'teaching',
    accent: 'text-tortoise-xp',
    title: 'Learn as you train',
    body: 'Bite-sized lessons on pacing, form, fueling and recovery, so by race day you understand the why behind every run.',
  },
]

const extras = [
  'Live in-run coaching',
  'Apple Watch app',
  'Live Activities',
  'Ghost-runner races',
  'Route challenges',
  'Rest-day recovery tips',
]

export function Features() {
  return (
    <section id="features" className="bg-ink-900 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="font-extrabold text-tortoise-primary">Why Tortoise</p>
          <h2 className="mt-2 max-w-2xl text-balance text-3xl font-black tracking-tight text-cloud sm:text-4xl">
            Everything you need to actually reach the start line.
          </h2>
        </Reveal>

        {/* Row 1 — the two differentiators, each shown as real product (open regions,
            not cards, so the product cards inside them stand on their own) */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-6">
          <Reveal className="flex min-w-0 flex-col justify-between gap-6 lg:col-span-2 lg:flex-row lg:items-center">
            <div className="max-w-sm">
              <h3 className="text-2xl font-black text-cloud">Effort-fair scoring</h3>
              <p className="mt-3 text-pretty font-medium text-cloud-muted">
                Most apps reward the fastest people. Tortoise scores the effort you put in, so a hard
                12-minute mile earns nearly as much as a 7-minute one. Beginners compete on heart, not
                genetics.
              </p>
            </div>
            <EffortScoreCard className="shrink-0" />
          </Reveal>

          <Reveal delay={0.05} className="flex min-w-0 flex-col gap-5">
            <div>
              <h3 className="text-2xl font-black text-cloud">Weekly leagues</h3>
              <p className="mt-2 font-medium text-cloud-muted">
                Get placed with runners at your level. Climb from Bronze to Elite and promote every
                Sunday.
              </p>
            </div>
            <LeaguePodium className="mt-auto" />
          </Reveal>
        </div>

        {/* Row 2 — three tiles, each with its own mascot mood (deliberately not identical) */}
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          {tiles.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.05} className="surface relative min-w-0 overflow-hidden p-6">
              <TortoiseMascot
                mood={t.mood}
                size={96}
                className="absolute -right-3 -top-2 opacity-90"
              />
              <t.icon className={`h-8 w-8 ${t.accent}`} aria-hidden="true" />
              <h3 className="mt-4 max-w-[70%] text-xl font-black text-cloud">{t.title}</h3>
              <p className="mt-2 font-medium text-cloud-muted">{t.body}</p>
            </Reveal>
          ))}
        </div>

        {/* Row 3 — the rest of the kit, as chips instead of repeated cards */}
        <Reveal delay={0.05} className="surface mt-4 flex flex-wrap items-center gap-x-3 gap-y-3 p-6">
          <span className="mr-1 font-black text-cloud">Also in the app:</span>
          {extras.map((e) => (
            <span
              key={e}
              className="rounded-full bg-ink-800 px-3.5 py-1.5 text-sm font-bold text-cloud-muted ring-1 ring-white/10"
            >
              {e}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
