// ─── GPS Track Records ────────────────────────────────────────────────────
// To add a track: copy one entry, fill in the fields, add the image to
// /public/images/gps/<id>.jpg (a screenshot of the GPS track map).

export interface GPSTrack {
  id: string
  title: string
  date: string           // YYYY-MM-DD
  locationLabel: string  // City/State only — no street addresses
  petType: 'dog' | 'cat' | 'other'
  outcomeNote: string
  image?: string         // path relative to /public
  embedUrl?: string      // optional external map link
}

export const GPS_TRACKS: GPSTrack[] = [
  {
    id: 'track-001',
    title: 'Track #001 — Smithtown, NY',
    date: '2024-06-11',
    locationLabel: 'Long Island, NY',
    petType: 'dog',
    outcomeNote: '2.3 miles recorded. Trail ended at a drainage ditch — trap placed at exit point. Dog recovered 18 hours later.',
    image: '/images/gps/track-001.jpg',
  },
  {
    id: 'track-002',
    title: 'Track #002 — Freehold, NJ',
    date: '2024-03-27',
    locationLabel: 'Central New Jersey',
    petType: 'cat',
    outcomeNote: '0.8 miles. Cold trail (72 hrs). K9 tracked through two backyards to a culvert. Cat located sheltering inside.',
    image: '/images/gps/track-002.jpg',
  },
  {
    id: 'track-003',
    title: 'Track #003 — Greenwich, CT',
    date: '2024-08-04',
    locationLabel: 'Fairfield County, CT',
    petType: 'dog',
    outcomeNote: '1.6 miles. Highway crossing identified at mile 0.9 — critical data that redirected flyer and trap deployment.',
    image: '/images/gps/track-003.jpg',
  },
]
