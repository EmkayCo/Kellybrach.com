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

  // Split phone so "LOST" renders in crimson — e.g. "631-973-" + "LOST"
  const lostIndex = phone.indexOf('LOST')
  const phonePrefix = lostIndex !== -1 ? phone.slice(0, lostIndex) : phone
  const phoneSuffix = lostIndex !== -1 ? phone.slice(lostIndex) : ''

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

      {/* Modal — white background, black text */}
      <div className="relative z-10 w-full max-w-sm bg-white shadow-2xl rounded-sm overflow-hidden">

        {/* Close */}
        <button
          onClick={dismiss}
          aria-label="Close"
          className="absolute top-3 right-4 text-gray-400 hover:text-gray-900 transition-colors text-3xl leading-none font-light z-10"
        >
          ×
        </button>

        <div className="px-8 pt-10 pb-8 text-center">

          {/* Urgency label */}
          <p className="label-overline text-gray-500 mb-5 flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-warm-gold animate-pulse" />
            Pet missing right now?
          </p>

          {/* Phone — "LOST" in crimson matching header call button */}
          <a
            href={phoneHref}
            onClick={dismiss}
            className="block font-mono text-4xl sm:text-5xl font-bold leading-none tracking-tight mb-1 hover:opacity-80 transition-opacity"
          >
            <span className="text-gray-900">{phonePrefix}</span>
            {phoneSuffix && <span className="text-warm-gold">{phoneSuffix}</span>}
          </a>
          <p className="text-xs text-gray-400 font-body mb-7">
            Call or text · 7 days a week
          </p>

          {/* Divider */}
          <div className="border-t border-gray-100 mb-7" />

          {/* Headline */}
          <h2 className="font-display text-2xl font-bold text-gray-900 leading-tight mb-3">
            Don't wait.
          </h2>
          <p className="font-body text-gray-500 text-sm leading-relaxed mb-7">
            Every hour the scent trail fades. Call Kelly directly — she'll tell
            you exactly what to do right now.
          </p>

          {/* Primary CTA — matches header call button: bg-warm-gold hover:bg-red-800 */}
          <a
            href={phoneHref}
            onClick={dismiss}
            className="block w-full text-center bg-warm-gold hover:bg-red-800 text-white font-mono font-bold text-lg py-4 rounded-sm transition-colors mb-3"
          >
            Call Now
          </a>

          {/* Secondary */}
          <Link
            href="/contact"
            onClick={dismiss}
            className="block text-gray-500 hover:text-gray-900 transition-colors text-sm font-body mb-4"
          >
            Or fill out a contact form →
          </Link>

          <button
            onClick={dismiss}
            className="text-gray-300 hover:text-gray-500 transition-colors text-xs font-body"
          >
            I'm just browsing — close
          </button>

        </div>
      </div>
    </div>
  )
}
