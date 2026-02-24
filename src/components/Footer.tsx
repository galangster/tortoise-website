'use client'

import Link from 'next/link'
import { TortoiseMascot } from './TortoiseMascot'

const footerLinks = {
  product: [
    { label: 'Features', href: '/#features' },
    { label: 'How it Works', href: '/#how-it-works' },
    { label: 'Pricing', href: '/#pricing' },
    { label: 'Training Guides', href: '/solutions' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-card-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-tortoise-primary rounded-full flex items-center justify-center text-2xl shadow-lg">
                🐢
              </div>
              <span className="font-black text-2xl">Tortoise</span>
            </div>
            
            <p className="text-gray-400 mb-6 max-w-sm">
              Super personalized marathon training that is fun and social. 
              Train with friends and reach your goals together.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Product</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2026 Tortoise. All rights reserved.
          </p>
          
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            Made with
            <TortoiseMascot mood="happy" size={32} animate={false} />
            for runners everywhere
          </div>
        </div>
      </div>
    </footer>
  )
}
