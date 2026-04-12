'use client'

import { useState, useEffect } from 'react'

interface ScamBannerProps {
  text?: string
  active?: boolean
}

const STORAGE_KEY = 'kellybrach_scam_banner_dismissed'

export default function ScamBanner({
  text = '⚠️ Scam Alert: Only contact us at 631-973-LOST or kelly@kellybrach.com. Do not send money without a contract from us.',
  active = true,
}: ScamBannerProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!active) return
    const dismissed = localStorage.getItem(STORAGE_KEY)
    if (!dismissed) {
      setVisible(true)
    }
  }, [active])

  const dismiss = () => {
    localStorage.setItem(STORAGE_KEY, '1')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      className="relative z-50 bg-red-alert text-white text-sm font-body font-semibold"
      role="alert"
    >
      <div className="section-container py-2 flex items-center justify-between gap-4">
        <p className="flex-1 text-center">{text}</p>
        <button
          onClick={dismiss}
          aria-label="Dismiss scam alert"
          className="shrink-0 text-white hover:text-red-200 transition-colors text-xl leading-none font-bold"
        >
          ×
        </button>
      </div>
    </div>
  )
}
