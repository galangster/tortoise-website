'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const links = [
  { href: '#how', label: 'How it works' },
  { href: '#features', label: 'Features' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'border-b border-white/10 bg-ink-900/85 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
        <a href="#top" className="flex items-center gap-2.5">
          <Image src="/app-icon.png" alt="" width={32} height={32} className="rounded-lg" />
          <span className="text-lg font-extrabold tracking-tight text-cloud">Tortoise</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-bold text-cloud-muted transition-colors hover:text-cloud"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a href="#waitlist" className="btn-primary px-4 py-2 text-sm">
          Join waitlist
        </a>
      </nav>
    </header>
  )
}
