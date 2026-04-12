import Image from 'next/image'
import type { GPSTrack } from '@/lib/data/gps-tracks'

export default function GPSTrackCard({ track }: { track: GPSTrack }) {
  const date = track.date
    ? new Date(track.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    : null

  return (
    <div className="bg-white rounded-sm overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative aspect-video bg-navy/10">
        {track.image ? (
          <Image src={track.image} alt={track.title} fill className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
        ) : (
          <div className="flex items-center justify-center h-full text-4xl">🗺️</div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-display text-base font-bold text-navy mb-2">{track.title}</h3>
        <div className="flex flex-wrap gap-1.5 mb-2">
          <span className="text-xs bg-navy/8 text-gray-600 font-semibold px-2 py-0.5 rounded-sm">📍 {track.locationLabel}</span>
          <span className="text-xs bg-navy/10 text-navy font-semibold px-2 py-0.5 rounded-sm capitalize">{track.petType}</span>
          {date && <span className="text-xs text-gray-400 font-mono">{date}</span>}
        </div>
        <p className="text-xs text-gray-600 leading-relaxed">{track.outcomeNote}</p>
      </div>
    </div>
  )
}
