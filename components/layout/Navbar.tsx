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
    <nav className="bg-navy text-white sticky top-0 z-40 shadow-md border-b border-white/5">
      <div className="section-container">
        <div className="flex items-center justify-between h-16 gap-4">

          <Link href="/" className="shrink-0 group">
            <span className="font-display text-lg font-bold text-warm-gold leading-tight block group-hover:text-red-300 transition-colors">Kelly Brach</span>
            <span className="font-body text-[10px] text-gray-400 tracking-widest uppercase leading-tight block">K9 Lost Pet Handler</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-5">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href}
                className="text-xs font-body text-gray-400 hover:text-warm-gold transition-colors tracking-wide uppercase">
                {l.label}
              </Link>
            ))}
          </div>

          {/* Desktop phone CTA */}
          <a href={phoneHref}
            className="hidden md:flex items-center gap-2 bg-warm-gold hover:bg-red-800 transition-colors text-white font-mono text-sm font-bold px-4 py-2 rounded-sm shrink-0">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
            </svg>
            {phone}
          </a>

          {/* Mobile: phone pill + hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <a href={phoneHref}
              className="flex items-center gap-1.5 bg-warm-gold text-white font-mono text-sm font-bold px-3 py-2 rounded-sm">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
              </svg>
              Call
            </a>
            <button onClick={() => setOpen(!open)}
              className="p-2 text-gray-300 hover:text-white"
              aria-label="Toggle menu" aria-expanded={open}>
              {open
                ? <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
                : <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/></svg>
              }
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-navy border-t border-white/10">
          <div className="section-container py-5 flex flex-col gap-4">
            {/* Phone prominent at top of mobile menu */}
            <div className="pb-4 border-b border-white/10">
              <p className="label-overline text-gray-500 mb-2">Call or text Kelly directly</p>
              <a href={phoneHref} className="font-mono text-2xl font-bold text-warm-gold hover:text-red-300 transition-colors">
                {phone}
              </a>
              <p className="text-xs text-gray-500 font-body mt-1">7 days a week · emergencies answered</p>
            </div>
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
                className="text-gray-200 hover:text-warm-gold transition-colors font-body text-sm py-0.5">
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
