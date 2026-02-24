'use client'

import { Apple } from 'lucide-react'

export function StickyMobileCTA() {
  return (
    <div className="fixed bottom-3 left-3 right-3 z-50 md:hidden">
      <button className="w-full bg-tortoise-primary text-white rounded-2xl border-b-4 border-tortoise-primary-dark py-3 font-black shadow-xl flex items-center justify-center gap-2">
        <Apple className="w-5 h-5" />
        Set Race Day
      </button>
    </div>
  )
}
