'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

const navLinks = [
  { href: '/#features', label: 'Features' },
  { href: '/#how-it-works', label: 'How it Works' },
  { href: '/#pricing', label: 'Pricing' },
  { href: '/privacy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-tortoise-primary rounded-full flex items-center justify-center text-xl shadow-lg shadow-tortoise-primary/30">
              🐢
            </div>
            <span className="font-black text-2xl text-gray-900">Tortoise</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-600 font-bold hover:text-tortoise-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <button className="btn-primary">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block py-2 text-gray-600 font-bold hover:text-tortoise-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <button className="w-full btn-primary mt-4">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
