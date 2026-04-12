import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/home/Hero'
import UrgencyStrip from '@/components/home/UrgencyStrip'
import TrustBar from '@/components/home/TrustBar'
import HowItWorksPreview from '@/components/home/HowItWorksPreview'
import DogTeamPreview from '@/components/home/DogTeamPreview'
import TestimonialsStrip from '@/components/home/TestimonialsStrip'
import GPSTeaser from '@/components/home/GPSTeaser'
import { SITE } from '@/lib/data/site'
import { DOGS } from '@/lib/data/dogs'
import { TESTIMONIALS } from '@/lib/data/testimonials'
import { GPS_TRACKS } from '@/lib/data/gps-tracks'

export const metadata: Metadata = {
  title: 'Kelly Brach — Lost Pet K9 Handler | Kings Park, NY',
  description:
    'Your pet left a trail. Our K9 can follow it. Professional lost pet tracking serving Long Island, NY and the Northeast. Call 631-973-LOST.',
  openGraph: {
    title: 'Kelly Brach — Lost Pet K9 Handler',
    description: 'Your pet left a trail. Our K9 can follow it.',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Kelly Brach — Lost Pet K9 Handler',
  description: 'Professional K9 tracking & trailing for lost pets in the Northeast.',
  telephone: '+16319735678',
  email: 'kelly@kellybrach.com',
  address: { '@type': 'PostalAddress', addressLocality: 'Kings Park', addressRegion: 'NY', addressCountry: 'US' },
  areaServed: ['New York', 'New Jersey', 'Connecticut', 'Pennsylvania'],
  url: 'https://kellybrach.com',
}

export default function HomePage() {
  const featuredTestimonials = TESTIMONIALS.filter((t) => t.featured).concat(TESTIMONIALS.filter((t) => !t.featured)).slice(0, 3)
  const recentTracks = GPS_TRACKS.slice(0, 3)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

      <Hero phone={SITE.phone} heroImageUrl="/images/hero.jpg" />
      <UrgencyStrip phone={SITE.phone} />
      <TrustBar />
      <HowItWorksPreview />
      <DogTeamPreview dogs={DOGS.filter((d) => d.active)} />
      <TestimonialsStrip testimonials={featuredTestimonials} />
      <GPSTeaser tracks={recentTracks} />

      {/* Final CTA — raw urgency, no polish */}
      <section className="bg-warm-gold grain-overlay relative overflow-hidden">
        <div className="section-container py-20 text-center relative z-10">
          <p className="label-overline text-white/70 mb-4">Don't wait</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Is your pet missing<br />right now?
          </h2>
          <p className="text-white/90 text-xl font-body mb-10 max-w-lg mx-auto">
            Every hour the scent trail fades. Call Kelly directly — she will tell you
            exactly what to do right now, before the trail is gone.
          </p>
          <a href={SITE.phoneHref}
            className="font-mono text-4xl md:text-5xl font-bold text-white hover:text-navy transition-colors block mb-4 tracking-tight">
            {SITE.phone}
          </a>
          <p className="text-white/60 text-sm font-body mb-8">Call or text · 7 days a week</p>
          <Link href="/contact"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm font-body border-b border-white/40 hover:border-white pb-0.5">
            Or fill out the contact form →
          </Link>
        </div>
      </section>
    </>
  )
}
