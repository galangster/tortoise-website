import type { Metadata } from 'next'
import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { Features } from '@/components/Features'
import { HowItWorks } from '@/components/HowItWorks'
import { Pricing } from '@/components/Pricing'
import { FAQ } from '@/components/FAQ'
import { CTABanner } from '@/components/CTABanner'
import { SocialProof } from '@/components/SocialProof'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Tortoise - Personalized Marathon Training',
  description: 'Marathon training that is super personalized for you, fun, and social. Train with friends and reach your goals together.',
  keywords: 'marathon training, running app, personalized running, beginner running, AI coach',
  openGraph: {
    title: 'Tortoise - Personalized Marathon Training',
    description: 'Marathon training that is super personalized for you, fun, and social.',
    type: 'website',
  },
}

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
        <SocialProof />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
