import type { Metadata } from 'next'
import '@/styles/globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ScamBanner from '@/components/layout/ScamBanner'
import LoadModal from '@/components/layout/LoadModal'
import { SITE } from '@/lib/data/site'

export const metadata: Metadata = {
  title: {
    default: 'Kelly Brach — Lost Pet K9 Handler | Kings Park, NY',
    template: '%s | Kelly Brach — Lost Pet K9 Handler',
  },
  description:
    'Professional K9 tracking & trailing for lost pets. Serving Long Island, NY and the Northeast. Call or text 631-973-LOST.',
  metadataBase: new URL('https://kellybrach.com'),
  openGraph: {
    siteName: 'Kelly Brach — Lost Pet K9 Handler',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;0,8..60,600;0,8..60,700;1,8..60,400&family=JetBrains+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <style>{`
          :root {
            --font-playfair: 'Playfair Display', Georgia, serif;
            --font-source-serif: 'Source Serif 4', Georgia, serif;
            --font-jetbrains: 'JetBrains Mono', 'Courier New', monospace;
          }
        `}</style>
      </head>
      <body className="min-h-screen flex flex-col">
        <LoadModal phone={SITE.phone} phoneHref={SITE.phoneHref} />
        {SITE.scamAlertActive && <ScamBanner text={SITE.scamAlertText} />}
        <Navbar phone={SITE.phone} />
        <main className="flex-1">{children}</main>
        <Footer phone={SITE.phone} email={SITE.email} />
      </body>
    </html>
  )
}
