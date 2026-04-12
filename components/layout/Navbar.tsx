'use client'

import Link from 'next/link'
import { useState } from 'react'

const navLinks = [
  { href: '/how-it-works',    label: 'How It Works' },
  { href: '/meet-the-team',   label: 'The Team' },
  { href: '/success-stories', label: 'Success Stories' },
  { href: '/gps-tracks',      label: 'GPS Tracks' },
  { href: '/faq',             label: 'FAQ' },
  { href: '/service-area',    label: 'Service Area' },
]

export default function Navbar({ phone = '631-973-LOST' }: { phone?: string }) {
  const [open, setOpen] = useState(false)
  const phoneHref = `tel:${phone.replace(/-/g, '').replace('LOST', '5678')}`

  return (
    <nav className="bg-navy text-white sticky top-0 z-40 shadow-md">
      <div className="section-container">
        <div className="flex items-center justify-between h-16 gap-4">

          <Link href="/" className="shrink-0">
            <span className="font-display text-lg font-bold text-warm-gold leading-tight block">Kelly Brach</span>
            <span className="font-body text-[10px] text-gray-400 tracking-wide uppercase leading-tight block">Lost Pet K9 Handler</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-5">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href}
                className="text-xs font-body text-gray-300 hover:text-warm-gold transition-colors tracking-wide uppercase">
                {l.label}
              </Link>
            ))}
          </div>

          {/* Phone — always visible on desktop */}
          <a href={phoneHref}
            className="hidden md:flex items-center gap-2 font-mono text-sm font-bold text-warm-gold hover:text-yellow-300 transition-colors shrink-0">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
            </svg>
            {phone}
          </a>

          {/* Mobile hamburger */}
          <button onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-gray-300 hover:text-white"
            aria-label="Toggle menu" aria-expanded={open}>
            {open
              ? <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
              : <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/></svg>
            }
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-navy border-t border-white/10">
          <div className="section-container py-4 flex flex-col gap-4">
            <a href={phoneHref} className="font-mono text-xl font-bold text-warm-gold">
              {phone}
            </a>
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
                className="text-gray-200 hover:text-warm-gold transition-colors font-body text-sm">
                {l.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)}
              className="btn-primary text-sm mt-2 text-center">
              Request a Search →
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
