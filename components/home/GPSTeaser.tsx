import Link from 'next/link'
import Image from 'next/image'
import type { GPSTrack } from '@/lib/data/gps-tracks'

const petIcon = (type: GPSTrack['petType']) =>
  type === 'cat' ? '🐱' : type === 'dog' ? '🐾' : '🔍'

export default function GPSTeaser({ tracks }: { tracks: GPSTrack[] }) {
  return (
    <section className="section-padding bg-navy relative overflow-hidden">
      {/* Dot grid — map/topography motif */}
      <div className="absolute inset-0 opacity-[0.035] dot-grid" />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div>
            <p className="label-overline text-warm-gold mb-3">GPS Evidence</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Every track we run<br />is on the record.
            </h2>
            <p className="font-body text-gray-300 text-lg leading-relaxed mb-4">
              Most search services give you a hunch. We give you a map. Every search
              is GPS-recorded — direction of travel, crossing points, resting spots,
              trail end. That data tells you where to set traps and concentrate your search.
            </p>
            <p className="font-body text-gray-500 text-sm leading-relaxed mb-8">
              No other service in the region provides this level of documented evidence as standard practice.
            </p>
            <Link href="/gps-tracks" className="btn-ghost text-sm py-2.5 px-5 inline-flex">
              View the track gallery →
            </Link>
          </div>

          <div className="space-y-3">
            {tracks.map((track) => (
              <div key={track.id}
                className="bg-white/5 border border-white/10 hover:border-warm-gold/40 rounded-sm overflow-hidden flex items-stretch transition-all duration-200 hover:bg-white/8">
                <div className="w-24 shrink-0 relative bg-navy/20 min-h-[80px]">
                  {track.image ? (
                    <Image src={track.image} alt={track.title} fill className="object-cover" sizes="96px" />
                  ) : (
                    <div className="flex items-center justify-center h-full text-2xl opacity-40">🗺️</div>
                  )}
                </div>
                <div className="px-4 py-3.5 flex-1 min-w-0">
                  <p className="font-display font-bold text-white text-sm leading-snug mb-1.5">{track.title}</p>
                  <p className="font-mono text-xs text-warm-gold mb-1.5">
                    {petIcon(track.petType)} {track.locationLabel} · {new Date(track.date + 'T00:00:00').getFullYear()}
                  </p>
                  <p className="text-xs text-gray-400 font-body leading-snug line-clamp-2">{track.outcomeNote}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
