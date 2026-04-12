import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/home/Hero'
import UrgencyStrip from '@/components/home/UrgencyStrip'
import TrustBar from '@/components/home/TrustBar'
import HowItWorksPreview from '@/components/home/HowItWorksPreview'
import DogTeamPreview from '@/components/home/DogTeamPreview'
import TestimonialsStrip from '@/components/home/TestimonialsStrip'
import GPSTeaser from '@/components/home/GPSTeaser'
import {
  getSiteSettings,
  getAllDogs,
  getFeaturedTestimonials,
  getRecentGPSTracks,
} from '@/sanity/lib/queries'

export const metadata: Metadata = {
  title: 'Kelly Brach — Lost Pet K9 Handler | Kings Park, NY',
  description:
    'Professional K9 tracking & trailing teams for lost pets in Long Island, NY and the Northeast. Call 631-973-LOST. GPS-documented searches, trained dogs, proven results.',
  openGraph: {
    title: 'Kelly Brach — Lost Pet K9 Handler',
    description:
      'Professional K9 tracking & trailing teams. When your pet goes missing, every hour matters.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Kelly Brach — Lost Pet K9 Handler',
  description: 'Professional K9 tracking & trailing teams for lost pets in the Northeast.',
  telephone: '+16319735678',
  email: 'kelly@kellybrach.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Kings Park',
    addressRegion: 'NY',
    addressCountry: 'US',
  },
  areaServed: ['New York', 'New Jersey', 'Connecticut', 'Pennsylvania'],
  url: 'https://kellybrach.com',
}

export default async function HomePage() {
  const [settings, dogs, testimonials, tracks] = await Promise.all([
    getSiteSettings(),
    getAllDogs(),
    getFeaturedTestimonials(3),
    getRecentGPSTracks(3),
  ])

  const phone = settings?.phone ?? '631-973-LOST'

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <Hero phone={phone} />
      <UrgencyStrip phone={phone} />
      <TrustBar />
      <HowItWorksPreview />
      <DogTeamPreview dogs={dogs} />
      <TestimonialsStrip testimonials={testimonials} />
      <GPSTeaser tracks={tracks} />

      {/* Final CTA */}
      <section className="section-padding bg-warm-gold">
        <div className="section-container text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Is Your Pet Missing Right Now?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto font-body">
            Don't wait. Time is the most critical factor in a successful track.
            Contact us immediately.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="bg-navy text-white font-bold font-body text-lg py-4 px-10 rounded-md hover:bg-navy/90 transition-colors"
            >
              Request a Search — It's an Emergency →
            </Link>
          </div>
          <p className="mt-6 font-mono text-2xl text-white font-bold tracking-wide">
            <a href={`tel:${phone.replace(/-/g, '').replace('LOST', '5678')}`} className="hover:text-navy transition-colors">
              {phone}
            </a>
          </p>
        </div>
      </section>
    </>
  )
}
