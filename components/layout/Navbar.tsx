'use client'

import Link from 'next/link'
import { useState } from 'react'

const navLinks = [
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/meet-the-team', label: 'Meet the Team' },
  { href: '/success-stories', label: 'Success Stories' },
  { href: '/gps-tracks', label: 'GPS Tracks' },
  { href: '/faq', label: 'FAQ' },
  { href: '/service-area', label: 'Service Area' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="bg-navy text-white sticky top-0 z-40 shadow-md">
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="font-display text-xl font-bold text-warm-gold hover:text-yellow-300 transition-colors"
          >
            Kelly Brach
            <span className="block text-xs font-body font-normal text-gray-300 leading-tight">
              Lost Pet K9 Handler
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-body text-gray-200 hover:text-warm-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn-primary text-sm py-2 px-4"
            >
              Request a Search
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-gray-200 hover:text-white transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-navy border-t border-gray-700">
          <div className="section-container py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-gray-200 hover:text-warm-gold transition-colors font-body py-1"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="btn-primary text-sm mt-2 text-center"
            >
              Request a Search
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
