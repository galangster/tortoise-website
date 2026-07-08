'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { CheckCircle2, Loader2 } from 'lucide-react'
import { TortoiseMascot } from './TortoiseMascot'

interface WaitlistFormProps {
  id?: string
  /** compact hides the spots-left line (used in the sticky mobile bar) */
  compact?: boolean
  className?: string
}

export function WaitlistForm({ id, compact = false, className = '' }: WaitlistFormProps) {
  const [email, setEmail] = useState('')
  const [state, setState] = useState<'idle' | 'loading' | 'success'>('idle')
  const [error, setError] = useState('')
  const [spotsLeft, setSpotsLeft] = useState<number | null>(null)
  const [gotEarlySpot, setGotEarlySpot] = useState(false)
  const [alreadyJoined, setAlreadyJoined] = useState(false)
  const reduce = useReducedMotion()

  useEffect(() => {
    fetch('/api/waitlist')
      .then((res) => res.json())
      .then((data) => setSpotsLeft(data.spotsLeft))
      .catch(() => {})
  }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')

    const trimmed = email.trim()
    if (!trimmed) {
      setError('Please enter your email.')
      return
    }

    setState('loading')

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: trimmed }),
      })
      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Something went wrong.')
        setState('idle')
        return
      }

      setSpotsLeft(data.spotsLeft)
      setGotEarlySpot(data.gotEarlySpot)
      setAlreadyJoined(data.alreadyJoined)
      setState('success')
    } catch {
      setError('Something went wrong. Please try again.')
      setState('idle')
    }
  }

  return (
    <div id={id} className={`w-full max-w-md ${className}`}>
      {!compact && spotsLeft !== null && spotsLeft > 0 && state !== 'success' && (
        <p className="mb-3 flex items-center gap-2 text-sm font-bold text-tortoise-xp">
          <span
            className="inline-block h-2 w-2 rounded-full bg-tortoise-xp motion-safe:animate-pulse"
            aria-hidden="true"
          />
          Only {spotsLeft} of 100 early spots left. The first 100 get Pro free for a month.
        </p>
      )}

      <AnimatePresence mode="wait">
        {state === 'success' ? (
          <motion.div
            key="success"
            initial={reduce ? false : { opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-3 rounded-2xl bg-tortoise-primary/12 p-4 ring-1 ring-tortoise-primary/30"
          >
            {gotEarlySpot && !alreadyJoined ? (
              <TortoiseMascot mood="celebrating" size={56} className="shrink-0" />
            ) : (
              <CheckCircle2 className="h-7 w-7 shrink-0 text-tortoise-primary" aria-hidden="true" />
            )}
            <div>
              <p className="font-extrabold text-cloud">
                {alreadyJoined ? "You're already on the list." : "You're in."}
              </p>
              <p className="text-sm text-cloud-muted">
                {gotEarlySpot && !alreadyJoined
                  ? 'You grabbed an early spot. Pro is free for a month when we launch.'
                  : "We'll email you the moment Tortoise is ready."}
              </p>
            </div>
          </motion.div>
        ) : (
          <form key="form" onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
            <label htmlFor={`${id ?? 'wl'}-email`} className="sr-only">
              Email address
            </label>
            <input
              id={`${id ?? 'wl'}-email`}
              type="email"
              autoComplete="email"
              placeholder="you@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={state === 'loading'}
              aria-invalid={error ? true : undefined}
              aria-describedby={error ? `${id ?? 'wl'}-error` : undefined}
              className="min-w-0 flex-1 rounded-2xl border-2 border-white/15 bg-white/5 px-5 py-4 text-lg font-medium text-cloud outline-none transition-colors placeholder:text-cloud-faint focus:border-tortoise-primary/70 focus:ring-4 focus:ring-tortoise-primary/20"
            />
            <button type="submit" disabled={state === 'loading'} className="btn-primary shrink-0">
              {state === 'loading' ? (
                <Loader2 className="h-5 w-5 animate-spin" aria-label="Joining" />
              ) : (
                'Join the waitlist'
              )}
            </button>
          </form>
        )}
      </AnimatePresence>

      {error && (
        <p id={`${id ?? 'wl'}-error`} role="alert" className="mt-2 text-sm font-semibold text-tortoise-streak">
          {error}
        </p>
      )}
    </div>
  )
}
