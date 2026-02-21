import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tortoise - Marathon Training That Feels Like a Game',
  description: 'The first running app that makes you addicted to becoming a runner. AI-powered marathon training with Duolingo-style gamification.',
  keywords: 'marathon training, running app, gamified running, beginner running, AI coach',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-white">
        {children}
      </body>
    </html>
  )
}
