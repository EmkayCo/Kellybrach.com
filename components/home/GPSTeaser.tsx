import Link from 'next/link'
import type { GPSTrack } from '@/sanity/lib/queries'
import GPSTrackCard from '@/components/shared/GPSTrackCard'
import SectionHeader from '@/components/shared/SectionHeader'

interface GPSTeaserProps {
  tracks: GPSTrack[]
}

export default function GPSTeaser({ tracks }: GPSTeaserProps) {
  return (
    <section className="section-padding bg-cream">
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <SectionHeader
            title="GPS-Recorded Evidence"
            subtitle="Don't just take our word for it — see our recorded tracks. Every search is documented with GPS technology."
          />
          <Link
            href="/gps-tracks"
            className="shrink-0 text-forest font-semibold hover:text-warm-gold transition-colors inline-flex items-center gap-1"
          >
            View all tracks →
          </Link>
        </div>

        {tracks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tracks.map((track) => (
              <GPSTrackCard key={track._id} track={track} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-xl border border-gray-100">
            <div className="text-5xl mb-4">🗺️</div>
            <p className="text-navy font-display text-xl font-bold mb-2">
              GPS Track Gallery
            </p>
            <p className="text-gray-500 text-sm mb-4">
              Track recordings will be displayed here. Check back soon.
            </p>
            <Link href="/gps-tracks" className="btn-secondary inline-flex text-sm">
              View GPS Tracks →
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
