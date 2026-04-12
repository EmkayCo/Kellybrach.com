import type { Metadata } from 'next'
import Link from 'next/link'
import GPSTrackCard from '@/components/shared/GPSTrackCard'
import SectionHeader from '@/components/shared/SectionHeader'
import { getAllGPSTracks } from '@/sanity/lib/queries'

export const metadata: Metadata = {
  title: 'GPS Tracks',
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

export default async function GPSTracksPage() {
  const tracks = await getAllGPSTracks()

  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-20">
        <div className="section-container">
          <div className="max-w-2xl">
            <p className="font-mono text-warm-gold text-sm tracking-widest mb-4">GPS EVIDENCE</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              GPS-Recorded Tracks
            </h1>
            <p className="text-xl text-gray-200 font-body leading-relaxed">
              Every search we conduct is documented with GPS technology. See real
              evidence from real cases — the actual trails our K9s followed.
            </p>
          </div>
        </div>
      </section>

      {/* Why GPS matters */}
      <section className="section-padding bg-cream">
        <div className="section-container">
          <SectionHeader
            title="Why GPS Documentation Matters"
            subtitle="Most pet tracking services offer no documentation. We record every track — because transparency and accountability matter."
            centered
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyGPSMatters.map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 shadow-sm text-center border border-gray-100">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-display text-lg font-bold text-navy mb-2">
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
          <SectionHeader
            title="Track Gallery"
            subtitle="GPS recordings from real searches. Location details are kept general to protect family privacy."
          />

          {tracks.length > 0 ? (
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tracks.map((track) => (
                <GPSTrackCard key={track._id} track={track} />
              ))}
            </div>
          ) : (
            <div className="mt-10 bg-cream rounded-xl border border-gray-200 p-16 text-center">
              <div className="text-6xl mb-4">🗺️</div>
              <h3 className="font-display text-2xl font-bold text-navy mb-2">
                GPS Track Gallery
              </h3>
              <p className="text-gray-500 font-body max-w-md mx-auto">
                GPS track recordings will be displayed here as they are entered into
                the system. Check back soon — new tracks are added regularly.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-forest text-white">
        <div className="section-container text-center">
          <h2 className="font-display text-3xl font-bold mb-4">
            Want GPS Documentation for Your Search?
          </h2>
          <p className="text-white/80 text-lg font-body mb-8 max-w-lg mx-auto">
            Every search we conduct includes GPS recording as standard practice.
            Contact us to get started.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary text-lg py-4 px-8">
              Request a Search →
            </Link>
            <a href="tel:+16319735678" className="btn-ghost text-lg py-4 px-8 font-mono">
              Call 631-973-LOST
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
