/**
 * Sanity Studio layout.
 * Renders full-screen in place of the main site chrome by using
 * position:fixed to cover the Navbar and Footer from the root layout.
 */
import type { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  title: 'Sanity Studio — Kelly Brach',
  robots: { index: false, follow: false },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: '#101112',
      }}
    >
      {children}
    </div>
  )
}
