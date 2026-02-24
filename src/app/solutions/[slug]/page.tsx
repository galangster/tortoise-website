import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { siteConfig, solutionBySlug, solutionPages } from '@/lib/seo'

type Props = { params: { slug: string } }

export async function generateStaticParams() {
  return solutionPages.map((page) => ({ slug: page.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = solutionBySlug[params.slug]
  if (!page) return {}

  return {
    title: `${page.title} | Tortoise`,
    description: page.description,
    alternates: { canonical: `/solutions/${page.slug}` },
    openGraph: {
      title: `${page.title} | Tortoise`,
      description: page.description,
      type: 'article',
      url: `${siteConfig.siteUrl}/solutions/${page.slug}`,
    },
  }
}

export default function SolutionDetailPage({ params }: Props) {
  const page = solutionBySlug[params.slug]
  if (!page) notFound()

  const expandedFaqs = [
    ...page.faqs,
    {
      question: 'Can Tortoise build my plan backwards from race day?',
      answer:
        'Yes. Race-day-first planning is a core differentiator: pick your event date and Tortoise builds backward from there.',
    },
    {
      question: 'Is Tortoise AI-native?',
      answer:
        'Yes. Tortoise uses AI-native personalization to adapt training to your goals, schedule, and progress.',
    },
  ]

  const related = solutionPages.filter((item) => item.slug !== page.slug).slice(0, 4)

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: expandedFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <main className="min-h-screen bg-white py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm uppercase tracking-wide text-tortoise-primary font-bold mb-3">Tortoise Guides</p>
        <h1 className="text-4xl font-black text-card-dark mb-5">{page.h1}</h1>
        <p className="text-lg text-gray-600 mb-8">{page.intro}</p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-card-dark mb-4">Why runners choose Tortoise</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            {page.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-card-dark mb-4">Frequently asked questions</h2>
          <div className="space-y-4">
            {expandedFaqs.map((faq) => (
              <div key={faq.question} className="rounded-xl border border-gray-200 p-4">
                <h3 className="font-semibold text-card-dark mb-1">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-card-dark mb-4">Related running guides</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/solutions/${item.slug}`}
                className="rounded-xl border border-gray-200 p-4 hover:border-tortoise-primary/60 transition-colors"
              >
                <h3 className="font-semibold text-card-dark mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <div className="rounded-2xl border border-gray-200 p-6 bg-gray-50">
          <h2 className="text-2xl font-bold text-card-dark mb-2">Train smarter for race day</h2>
          <p className="text-gray-600 mb-4">
            Set your race date, train with an adaptive AI plan, and stay consistent with Tortoise.
          </p>
          <a
            href="#pricing"
            className="inline-block rounded-full bg-tortoise-primary text-card-dark font-bold px-5 py-3"
          >
            Start with Tortoise
          </a>
        </div>

        <p className="mt-8">
          <Link href="/solutions" className="text-sm text-gray-500 hover:text-card-dark">
            ← Back to all guides
          </Link>
        </p>
      </article>
    </main>
  )
}
