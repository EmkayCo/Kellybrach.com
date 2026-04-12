import type { Metadata } from 'next'
import Link from 'next/link'
import GPSTrackCard from '@/components/shared/GPSTrackCard'
import { GPS_TRACKS } from '@/lib/data/gps-tracks'
import { SITE } from '@/lib/data/site'

export const metadata: Metadata = {
  title: 'GPS Track Gallery — Kelly Brach K9',
  description:
    'See GPS-recorded evidence from real K9 tracking searches. Every search by Kelly Brach is documented with GPS technology — proof of where your pet traveled.',
}

const whyGPSMatters = [
  {
    title: 'Proves Direction of Travel',
    description:
      'The GPS track shows exactly which way your pet was heading, allowing strategic placement of traps and flyers.',
    icon: '🧭',
  },
  {
    title: 'Validates the Method',
    description:
      'You can see with your own eyes the actual path the K9 worked. This is transparent, documented evidence — not a guess.',
    icon: '✅',
  },
  {
    title: 'Identifies Key Locations',
    description:
      'Crossings, resting spots, and end-of-trail points are all marked. These become priority locations for trap deployment.',
    icon: '📍',
  },
  {
    title: 'Differentiates from Competitors',
    description:
      'Most handlers don\'t GPS-document their searches. We do — every time. This accountability is part of our standard practice.',
    icon: '📊',
  },
]

export default function GPSTracksPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy relative overflow-hidden py-20">
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'linear-gradient(#8B1818 1px, transparent 1px), linear-gradient(90deg, #8B1818 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />
        <div className="section-container relative z-10">
          <div className="max-w-2xl">
            <p className="label-overline text-warm-gold mb-4">GPS Evidence</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
              Every track we run<br />
              <span className="text-warm-gold italic">is on the record.</span>
            </h1>
            <p className="text-xl text-gray-200 font-body leading-relaxed">
              Most search services give you a hunch. We give you a map. Every search
              is GPS-recorded — direction of travel, crossing points, resting spots,
              trail end.
            </p>
          </div>
        </div>
      </section>

      {/* Why GPS matters */}
      <section className="section-padding bg-cream grain-overlay">
        <div className="section-container">
          <p className="label-overline text-warm-gold mb-3">Why It Matters</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-2 leading-tight">
            GPS Documentation Changes Everything
          </h2>
          <p className="text-gray-600 font-body mb-10 max-w-xl leading-relaxed">
            Most pet tracking services offer no documentation. We record every track —
            because transparency and accountability matter when you're this desperate.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyGPSMatters.map((item) => (
              <div key={item.title} className="bg-white rounded-sm p-6 shadow-sm border border-gray-100">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-display text-base font-bold text-navy mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 font-body leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Track gallery */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <p className="label-overline text-warm-gold mb-3">Track Gallery</p>
          <h2 className="font-display text-3xl font-bold text-navy mb-2 leading-tight">
            GPS Recordings from Real Searches
          </h2>
          <p className="text-gray-500 font-body mb-10 max-w-xl text-sm leading-relaxed">
            Location details are kept general to protect family privacy.
          </p>

          {GPS_TRACKS.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {GPS_TRACKS.map((track) => (
                <GPSTrackCard key={track.id} track={track} />
              ))}
            </div>
          ) : (
            <div className="bg-cream rounded-sm border border-gray-200 p-16 text-center">
              <div className="text-6xl mb-4">🗺️</div>
              <h3 className="font-display text-2xl font-bold text-navy mb-2">
                GPS Track Gallery
              </h3>
              <p className="text-gray-500 font-body max-w-md mx-auto">
                GPS track recordings will be displayed here as they are entered.
                Check back soon — new tracks are added regularly.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-warm-gold grain-overlay relative overflow-hidden">
        <div className="section-container py-20 text-center relative z-10">
          <p className="label-overline text-white/70 mb-4">Want GPS Documentation?</p>
          <h2 className="font-display text-4xl font-bold text-white mb-4">
            Every search includes GPS<br />as standard practice.
          </h2>
          <p className="text-white/90 font-body mb-8 max-w-lg mx-auto">
            Contact Kelly directly — she will tell you exactly what to do right now.
          </p>
          <a href={SITE.phoneHref}
            className="font-mono text-4xl font-bold text-white hover:text-navy transition-colors block mb-4 tracking-tight">
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
