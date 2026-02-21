'use client'

import Link from 'next/link'
import { TortoiseMascot } from './TortoiseMascot'
import { Github, Twitter, Instagram } from 'lucide-react'

const footerLinks = {
  product: [
    { label: 'Features', href: '/#features' },
    { label: 'How it Works', href: '/#how-it-works' },
    { label: 'Pricing', href: '/#pricing' },
    { label: 'Download', href: '#' },
  ],
  company: [
    { label: 'About', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Press', href: '#' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '#' },
  ],
  support: [
    { label: 'Help Center', href: '#' },
    { label: 'Contact Us', href: '#' },
    { label: 'Community', href: '#' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-card-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-tortoise-primary rounded-full flex items-center justify-center text-2xl shadow-lg">
                🐢
              </div>
              <span className="font-black text-2xl">Tortoise</span>
            </div>
            
            <p className="text-gray-400 mb-6 max-w-sm">
              Marathon training that feels like a game. 
              Join 10,000+ runners who became addicted to running.
            </p>

            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-tortoise-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-tortoise-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-tortoise-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
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
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
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

          <div>
            <h4 className="font-bold text-lg mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
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
            © 2024 Tortoise. All rights reserved.
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
