import Image from 'next/image'
import { Flame, MapPin, Play, Clock, Activity } from 'lucide-react'

/**
 * Faithful recreations of real Tortoise app surfaces, built with the app's own
 * tokens. Used on the marketing site to show the actual product instead of
 * generic feature cards. The card "titles" are <p>, not headings — these are
 * decorative UI recreations, not document structure.
 */

export function TodaysRunCard({ className = '' }: { className?: string }) {
  return (
    <div className={`surface-raised w-full max-w-sm overflow-hidden ${className}`}>
      <div className="flex items-center justify-between px-5 pt-5">
        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-cloud-faint">Today · Week 6</p>
          <p className="mt-0.5 text-xl font-black text-cloud">Easy Run</p>
        </div>
        <span className="flex items-center gap-1.5 rounded-full bg-ink-800 px-3 py-1.5 text-sm font-extrabold text-tortoise-streak">
          <Flame className="h-4 w-4" aria-hidden="true" /> 12
        </span>
      </div>

      <p className="px-5 pt-1 text-sm font-semibold text-tortoise-trail">Conversational pace · Zone 2</p>

      <div className="mx-5 mt-4 grid grid-cols-3 gap-2 rounded-2xl bg-ink-800/70 p-3 text-center">
        {[
          { icon: MapPin, v: '4.0', u: 'miles' },
          { icon: Clock, v: '38', u: 'minutes' },
          { icon: Activity, v: '145', u: 'bpm target' },
        ].map(({ icon: Icon, v, u }) => (
          <div key={u}>
            <Icon className="mx-auto mb-1 h-4 w-4 text-cloud-faint" aria-hidden="true" />
            <p className="text-lg font-black leading-none text-cloud">{v}</p>
            <p className="mt-1 text-[11px] font-semibold text-cloud-faint">{u}</p>
          </div>
        ))}
      </div>

      <div className="mx-5 mt-3 rounded-2xl bg-tortoise-primary/10 p-3 ring-1 ring-tortoise-primary/20">
        <p className="text-sm font-semibold leading-snug text-cloud">
          You crushed Sunday&apos;s long run, so keep today truly easy. Consistency beats intensity.
        </p>
      </div>

      <div className="p-5 pt-4">
        <div className="flex items-center justify-center gap-2 rounded-2xl border-b-4 border-tortoise-cta-pressed bg-tortoise-cta py-3.5 font-extrabold text-white">
          <Play className="h-5 w-5 fill-current" aria-hidden="true" /> Start run
        </div>
      </div>
    </div>
  )
}

export function LeaguePodium({ className = '' }: { className?: string }) {
  const rows = [
    { rank: 1, name: 'maya_runs', xp: 1840, badge: 'gold', you: false },
    { rank: 2, name: 'You', xp: 1710, badge: 'silver', you: true },
    { rank: 3, name: 'trailmix', xp: 1655, badge: 'bronze', you: false },
  ]
  return (
    <div className={`surface w-full max-w-sm p-5 ${className}`}>
      <div className="mb-3 flex items-center justify-between">
        <p className="text-lg font-black text-cloud">Silver League</p>
        <span className="text-xs font-bold text-cloud-faint">2 days left</span>
      </div>
      <ul className="space-y-2">
        {rows.map((r) => (
          <li
            key={r.rank}
            className={`flex items-center gap-3 rounded-2xl px-3 py-2.5 ${
              r.you ? 'bg-tortoise-primary/12 ring-1 ring-tortoise-primary/30' : 'bg-ink-800/60'
            }`}
          >
            <span className="w-5 text-center text-sm font-black text-cloud-muted">{r.rank}</span>
            <Image src={`/badges/${r.badge}.png`} alt="" width={28} height={28} className="shrink-0" />
            <span className={`flex-1 font-bold ${r.you ? 'text-cloud' : 'text-cloud-muted'}`}>{r.name}</span>
            <span className="text-sm font-extrabold text-tortoise-xp">{r.xp.toLocaleString()} XP</span>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-center text-xs font-semibold text-cloud-faint">
        Top 5 promote to Gold on Sunday
      </p>
    </div>
  )
}

export function EffortScoreCard({ className = '' }: { className?: string }) {
  const runners = [
    { name: 'A 7:30 / mile runner', effort: 92 },
    { name: 'A 12:00 / mile beginner', effort: 90 },
  ]
  return (
    <div className={`surface w-full max-w-sm p-5 ${className}`}>
      <p className="text-lg font-black text-cloud">Effort over pace</p>
      <p className="mt-1 text-sm font-semibold text-cloud-muted">
        Same hard-earned effort, nearly the same score.
      </p>
      <div className="mt-4 space-y-4">
        {runners.map((r) => (
          <div key={r.name}>
            <div className="mb-1.5 flex items-center justify-between text-sm font-bold">
              <span className="text-cloud-muted">{r.name}</span>
              <span className="text-tortoise-primary">{r.effort}</span>
            </div>
            <div className="h-2.5 overflow-hidden rounded-full bg-ink-800">
              <div
                className="h-full rounded-full bg-tortoise-primary"
                style={{ width: `${r.effort}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
