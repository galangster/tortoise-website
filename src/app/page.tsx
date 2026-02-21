import type { Metadata } from 'next'
import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { SocialProof } from '@/components/SocialProof'
import { Features } from '@/components/Features'
import { HowItWorks } from '@/components/HowItWorks'
import { Pricing } from '@/components/Pricing'
import { FAQ } from '@/components/FAQ'
import { CTABanner } from '@/components/CTABanner'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Tortoise - Marathon Training That Feels Like a Game',
  description: 'The first running app that makes you addicted to becoming a runner. AI-powered marathon training with Duolingo-style gamification. Join 10,000+ runners.',
  keywords: 'marathon training, running app, gamified running, beginner running, AI coach, Couch to 5K',
  openGraph: {
    title: 'Tortoise - Marathon Training That Feels Like a Game',
    description: 'AI-powered marathon training with Duolingo-style gamification. Join 10,000+ runners.',
    type: 'website',
  },
}

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <SocialProof />
        <Features />
        <HowItWorks />
        <Pricing />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
