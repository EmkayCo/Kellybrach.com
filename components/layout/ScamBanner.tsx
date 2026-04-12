'use client'

import { useState, useEffect } from 'react'

const STORAGE_KEY = 'kb_scam_dismissed_v1'

interface ScamBannerProps {
  text: string
}

export default function ScamBanner({ text }: ScamBannerProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) setVisible(true)
  }, [])

  if (!visible) return null

  return (
    <div className="relative z-50 bg-red-alert text-white text-sm font-body font-semibold" role="alert">
      <div className="section-container py-2.5 flex items-center justify-between gap-4">
        <p className="flex-1 text-center leading-snug">{text}</p>
        <button
          onClick={() => { localStorage.setItem(STORAGE_KEY, '1'); setVisible(false) }}
          aria-label="Dismiss"
          className="shrink-0 text-white/70 hover:text-white text-2xl leading-none font-bold"
        >×</button>
      </div>
    </div>
  )
}
