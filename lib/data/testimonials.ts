// ─── Testimonials / Success Stories ───────────────────────────────────────
// To add a testimonial: copy one entry and fill in the fields.
// Set featured: true to show it in the homepage pull-quote position.
// petPhoto is optional — path relative to /public.

export interface Testimonial {
  id: string
  ownerName: string
  petName: string
  petType: 'dog' | 'cat' | 'other'
  location: string
  quote: string
  rating: number
  date: string          // YYYY-MM-DD
  outcome: 'found' | 'direction' | 'ongoing'
  featured: boolean
  petPhoto?: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    ownerName: 'Sarah M.',
    petName: 'Bella',
    petType: 'dog',
    location: 'Smithtown, NY',
    quote:
      "I had no idea a service like this existed. Kelly and her K9 tracked Bella for over two miles through the woods — the GPS map showed us exactly where she had been. We set a trap at the end of the trail and found her the next morning. I cannot put into words what it meant to have a real lead instead of just hoping.",
    rating: 5,
    date: '2024-06-12',
    outcome: 'found',
    featured: true,
  },
  {
    id: 't2',
    ownerName: 'James T.',
    petName: 'Luna',
    petType: 'cat',
    location: 'Freehold, NJ',
    quote:
      "Luna had been missing for three days before I found Kelly. I assumed it was too late for any tracking. It wasn't. The K9 still picked up her trail and walked us right to where she was sheltering under a neighbor's deck two streets over.",
    rating: 5,
    date: '2024-03-28',
    outcome: 'found',
    featured: false,
  },
  {
    id: 't3',
    ownerName: 'Maria R.',
    petName: 'Max',
    petType: 'dog',
    location: 'Greenwich, CT',
    quote:
      "Professional, calm under pressure, and incredibly skilled. Within minutes of arriving, the K9 had the scent and was working. The GPS track they gave us showed Max had crossed the highway — something we never would have guessed. That information completely changed our search strategy.",
    rating: 5,
    date: '2024-08-05',
    outcome: 'found',
    featured: false,
  },
  {
    id: 't4',
    ownerName: 'Denise & Paul K.',
    petName: 'Cooper',
    petType: 'dog',
    location: 'Huntington, NY',
    quote:
      "We were six hours in, completely lost, and starting to panic. Kelly arrived, her dog got to work, and suddenly we had direction. Not hope — actual direction. Cooper was home by midnight.",
    rating: 5,
    date: '2024-11-03',
    outcome: 'found',
    featured: false,
  },
  {
    id: 't5',
    ownerName: 'Tara F.',
    petName: 'Olive',
    petType: 'cat',
    location: 'Morristown, NJ',
    quote:
      "Olive had gotten out during a move and I was devastated. Kelly drove from Long Island, and even on a rainy morning the K9 tracked her through three backyards and into a culvert. We had her back within 24 hours of the search.",
    rating: 5,
    date: '2023-09-17',
    outcome: 'found',
    featured: false,
  },
]
