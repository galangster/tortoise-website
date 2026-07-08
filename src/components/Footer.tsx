import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-ink-900 py-14">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <Image src="/app-icon.png" alt="" width={36} height={36} className="rounded-xl" />
              <span className="text-lg font-extrabold tracking-tight text-cloud">Tortoise</span>
            </a>
            <p className="mt-3 max-w-xs font-semibold text-cloud-muted">
              Marathon coaching for the back of the pack. Slow and steady wins the race.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-bold text-cloud-muted">
            <a href="#how" className="transition-colors hover:text-cloud">How it works</a>
            <a href="#features" className="transition-colors hover:text-cloud">Features</a>
            <a href="#pricing" className="transition-colors hover:text-cloud">Pricing</a>
            <a href="#faq" className="transition-colors hover:text-cloud">FAQ</a>
            <a href="/privacy" className="transition-colors hover:text-cloud">Privacy</a>
            <a href="/terms" className="transition-colors hover:text-cloud">Terms</a>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm font-semibold text-cloud-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Tortoise · The Creative Company</p>
          <p>Launching Spring 2026 · Made for first-timers</p>
        </div>
      </div>
    </footer>
  )
}
