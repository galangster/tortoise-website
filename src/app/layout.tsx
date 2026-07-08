import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'
import { siteConfig } from '@/lib/seo'

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-nunito',
  display: 'swap',
})

const title = 'Tortoise: Train for your first marathon, one run at a time'
const description =
  'AI marathon coaching that adapts to your real life. Effort-fair scoring, weekly leagues, and a streak you actually want to keep. Launching Spring 2026. Join the waitlist.'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: title,
    template: '%s',
  },
  description,
  keywords:
    'marathon training, first marathon, beginner running, AI running coach, adaptive training plan, race day training plan, gamified running app, couch to marathon',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title,
    description,
    type: 'website',
    url: siteConfig.siteUrl,
    siteName: 'Tortoise',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Tortoise: train for your first marathon, one run at a time' }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og.png'],
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
    operatingSystem: 'iOS',
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  }

  return (
    <html lang="en" className={nunito.variable}>
      <body className="overflow-x-hidden bg-ink-900 text-cloud antialiased">
        {/* Opt into scroll-reveal transitions only when JS is present, before first
            paint — so content is never invisible without JS and there is no flash. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
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
