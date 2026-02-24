import type { Metadata } from 'next'
import './globals.css'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: 'Tortoise - Marathon Training That Feels Like a Game',
    template: '%s',
  },
  description:
    'The AI-native running app that lets you set race day and work backwards with a personalized training plan.',
  keywords:
    'marathon training app, AI running coach, race day training plan, half marathon training plan, gamified running app',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Tortoise - Marathon Training That Feels Like a Game',
    description:
      'Set your race day and train backward with an adaptive AI-native running plan.',
    type: 'website',
    url: siteConfig.siteUrl,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tortoise - AI-Native Marathon Training',
    description: 'Set race day and train backwards with a personalized AI running plan.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Tortoise',
    url: siteConfig.siteUrl,
    description: siteConfig.description,
  }

  const softwareAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Tortoise',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'iOS, Android',
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  }

  return (
    <html lang="en">
      <body className="antialiased bg-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
        />
        {children}
      </body>
    </html>
  )
}
