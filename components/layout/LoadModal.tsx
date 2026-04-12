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
    // Show once per session — not on every page load
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
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={dismiss}
      />

      {/* Modal card */}
      <div className="relative z-10 w-full max-w-md bg-navy border border-white/10 rounded-sm shadow-2xl overflow-hidden">

        {/* Red urgency bar at top */}
        <div className="h-1 bg-warm-gold w-full" />

        <div className="p-8">
          {/* Close */}
          <button
            onClick={dismiss}
            aria-label="Close"
            className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors text-2xl leading-none font-light"
          >
            ×
          </button>

          {/* Urgency signal */}
          <div className="flex items-center gap-2 mb-5">
            <span className="w-2 h-2 rounded-full bg-warm-gold animate-pulse" />
            <p className="label-overline text-warm-gold text-[10px]">
              Is your pet missing right now?
            </p>
          </div>

          {/* Headline */}
          <h2 className="font-display text-3xl font-bold text-white leading-tight mb-3">
            Don't wait.<br />
            <span className="italic text-warm-gold">The trail fades by the hour.</span>
          </h2>

          <p className="font-body text-gray-300 text-sm leading-relaxed mb-8">
            Call Kelly directly. She'll tell you exactly what to do right now —
            before the scent trail is gone and the search becomes much harder.
          </p>

          {/* Phone CTA — the real action */}
          <a
            href={phoneHref}
            onClick={dismiss}
            className="block w-full text-center bg-warm-gold hover:bg-red-800 transition-colors text-white font-mono text-2xl font-bold py-4 px-6 rounded-sm tracking-tight mb-3"
          >
            {phone}
          </a>
          <p className="text-center text-gray-500 text-xs font-body mb-6">
            Call or text · 7 days a week · emergencies answered
          </p>

          {/* Secondary action */}
          <div className="flex flex-col items-center gap-3">
            <Link
              href="/contact"
              onClick={dismiss}
              className="text-warm-gold hover:text-red-300 transition-colors text-sm font-body border-b border-warm-gold/40 hover:border-red-300/40 pb-0.5"
            >
              Or fill out a contact form →
            </Link>
            <button
              onClick={dismiss}
              className="text-gray-600 hover:text-gray-400 transition-colors text-xs font-body mt-1"
            >
              I'm just browsing — close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
