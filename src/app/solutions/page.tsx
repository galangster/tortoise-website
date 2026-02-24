import type { Metadata } from 'next'
import Link from 'next/link'
import { solutionPages } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Running Training Guides | Tortoise',
  description:
    'Explore AI-powered running and marathon training guides built around your race day.',
}

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-white py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-black text-card-dark mb-4">Running Training Guides</h1>
        <p className="text-gray-600 mb-10 max-w-2xl">
          Discover race-specific and goal-specific training guides powered by Tortoise.
        </p>

        <div className="grid md:grid-cols-2 gap-5">
          {solutionPages.map((page) => (
            <Link
              key={page.slug}
              href={`/solutions/${page.slug}`}
              className="rounded-2xl border border-gray-200 p-5 hover:border-tortoise-primary/60 transition-colors"
            >
              <h2 className="text-xl font-bold text-card-dark mb-2">{page.title}</h2>
              <p className="text-gray-600 text-sm">{page.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
