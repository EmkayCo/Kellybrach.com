import type { Metadata } from 'next'
import { playfair, sourceSerif, jetbrainsMono } from '@/lib/fonts'
import '@/styles/globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ScamBanner from '@/components/layout/ScamBanner'
import { getSiteSettings } from '@/sanity/lib/queries'

export const metadata: Metadata = {
  title: {
    default: 'Kelly Brach — Lost Pet K9 Handler | Kings Park, NY',
    template: '%s | Kelly Brach — Lost Pet K9 Handler',
  },
  description:
    'Professional K9 tracking & trailing teams for lost pets. Serving Long Island, NY and the Northeast. Call 631-973-LOST.',
  metadataBase: new URL('https://kellybrach.com'),
  openGraph: {
    siteName: 'Kelly Brach — Lost Pet K9 Handler',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const settings = await getSiteSettings()

  return (
    <html
      lang="en"
      className={`${playfair.variable} ${sourceSerif.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        {settings?.scamAlertActive && (
          <ScamBanner
            text={settings.scamAlertText}
            active={settings.scamAlertActive}
          />
        )}
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer phone={settings?.phone} email={settings?.email} />
      </body>
    </html>
  )
}
