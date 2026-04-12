'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const STORAGE_KEY = 'kb_modal_dismissed_v1'

interface LoadModalProps {
  phone: string
  phoneHref: string
}

export default function LoadModal({ phone, phoneHref }: LoadModalProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!sessionStorage.getItem(STORAGE_KEY)) {
      const t = setTimeout(() => setVisible(true), 400)
      return () => clearTimeout(t)
    }
  }, [])

  function dismiss() {
    sessionStorage.setItem(STORAGE_KEY, '1')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Emergency contact"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/75 backdrop-blur-sm"
        onClick={dismiss}
      />

      {/* Modal — crimson background, white text */}
      <div className="relative z-10 w-full max-w-sm bg-warm-gold shadow-2xl rounded-sm overflow-hidden">

        {/* Close */}
        <button
          onClick={dismiss}
          aria-label="Close"
          className="absolute top-3 right-4 text-white/50 hover:text-white transition-colors text-3xl leading-none font-light z-10"
        >
          ×
        </button>

        <div className="px-8 pt-10 pb-8 text-center">

          {/* Urgency label */}
          <p className="label-overline text-white/60 mb-5 flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            Pet missing right now?
          </p>

          {/* Phone — the visual hero */}
          <a
            href={phoneHref}
            onClick={dismiss}
            className="block font-mono text-4xl sm:text-5xl font-bold text-white hover:text-white/80 transition-colors leading-none tracking-tight mb-1"
          >
            {phone}
          </a>
          <p className="text-xs text-white/50 font-body mb-7">
            Call or text · 7 days a week
          </p>

          {/* Divider */}
          <div className="border-t border-white/20 mb-7" />

          {/* Headline */}
          <h2 className="font-display text-2xl font-bold text-white leading-tight mb-3">
            Don't wait.
          </h2>
          <p className="font-body text-white/70 text-sm leading-relaxed mb-7">
            Every hour the scent trail fades. Call Kelly directly — she'll tell
            you exactly what to do right now.
          </p>

          {/* Primary CTA — outlined white button */}
          <a
            href={phoneHref}
            onClick={dismiss}
            className="block w-full text-center border-2 border-white text-white font-mono font-bold text-lg py-4 rounded-sm hover:bg-white hover:text-warm-gold transition-colors mb-3"
          >
            Call Now
          </a>

          {/* Secondary */}
          <Link
            href="/contact"
            onClick={dismiss}
            className="block text-white/60 hover:text-white transition-colors text-sm font-body mb-4"
          >
            Or fill out a contact form →
          </Link>

          <button
            onClick={dismiss}
            className="text-white/30 hover:text-white/60 transition-colors text-xs font-body"
          >
            I'm just browsing — close
          </button>

        </div>
      </div>
    </div>
  )
}
