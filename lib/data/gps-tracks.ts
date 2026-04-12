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
    title: 'Track #002 — Northport, NY',
    date: '2024-02-27',
    locationLabel: 'Northport, NY',
    petType: 'cat',
    outcomeNote: '0.6 miles. Cat located sheltering in a neighboring yard. K9 tracked directly to position — no guesswork.',
    image: '/images/gps/track-002.jpg',
  },
  {
    id: 'track-003',
    title: 'Track #003 — Secaucus, NJ',
    date: '2024-08-04',
    locationLabel: 'Hudson County, NJ',
    petType: 'dog',
    outcomeNote: '1.4 miles. Highway shoulder worked in coordination with local fire department. Direction of travel confirmed east.',
    image: '/images/gps/track-003.jpg',
  },
]
