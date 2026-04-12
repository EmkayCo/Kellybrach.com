import Image from 'next/image'
import type { GPSTrack } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'

interface GPSTrackCardProps {
  track: GPSTrack
}

const petLabels: Record<string, string> = {
  dog: 'Dog',
  cat: 'Cat',
  other: 'Other',
}

export default function GPSTrackCard({ track }: GPSTrackCardProps) {
  const imageUrl = track.trackImage
    ? urlFor(track.trackImage).width(600).height(400).fit('crop').url()
    : null

  const formattedDate = track.date
    ? new Date(track.date).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      })
    : null

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative aspect-video bg-forest/10">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={track.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : track.embedUrl ? (
          <iframe
            src={track.embedUrl}
            className="w-full h-full"
            loading="lazy"
            title={track.title}
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <div className="text-center text-forest/40">
              <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              <p className="text-sm font-semibold">GPS Track</p>
            </div>
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-display text-lg font-bold text-navy mb-1">
          {track.title}
        </h3>

        <div className="flex flex-wrap gap-2 mb-3">
          <span className="text-xs bg-forest/10 text-forest font-semibold px-2 py-0.5 rounded-full">
            📍 {track.locationLabel}
          </span>
          {track.petType && (
            <span className="text-xs bg-navy/10 text-navy font-semibold px-2 py-0.5 rounded-full">
              {petLabels[track.petType] ?? track.petType}
            </span>
          )}
          {formattedDate && (
            <span className="text-xs text-gray-500">{formattedDate}</span>
          )}
        </div>

        {track.outcomeNote && (
          <p className="text-sm text-gray-600 leading-relaxed">
            {track.outcomeNote}
          </p>
        )}
      </div>
    </div>
  )
}
