// ─── K9 Team Profiles ─────────────────────────────────────────────────────
// To add a dog: copy one entry, fill in the fields, add their photo to
// /public/images/dogs/<slug>.jpg (ideally a square or portrait crop).

export interface Dog {
  slug: string
  name: string
  breed: string
  specialty: string
  trainingBackground: string
  photo: string  // path relative to /public — e.g. /images/dogs/enzo.jpg
  active: boolean
}

export const DOGS: Dog[] = [
  {
    slug: 'enzo',
    name: 'Enzo',
    breed: 'German Shepherd',
    specialty: 'Tracking & Trailing',
    trainingBackground:
      'Enzo has worked hundreds of real lost-pet cases across Long Island and the tri-state area. He was recognized with a formal commendation from the Somerset Town Council for his invaluable effort in finding lost animals — the kind of real-world validation that speaks louder than any title.',
    photo: '/images/dogs/enzo.jpg',
    active: true,
  },
  {
    slug: 'maggie',
    name: 'Maggie',
    breed: 'Bloodhound',
    specialty: 'Trailing Specialist',
    trainingBackground:
      'Maggie brings unmatched scenting ability to cold trails — cases where hours or even days have passed. Her long, low-set ears and wrinkled face funnel scent directly to her nose as she works.',
    photo: '/images/dogs/maggie.jpg',
    active: true,
  },
  {
    slug: 'sonja',
    name: 'Sonja',
    breed: 'German Shepherd',
    specialty: 'Tracking Specialist',
    trainingBackground:
      'Sonja is a precision tracker trained to work in dense suburban environments. She excels in neighborhoods with heavy foot traffic where scent contamination is highest.',
    photo: '/images/dogs/sonja.jpg',
    active: true,
  },
  {
    slug: 'dino',
    name: 'Dino',
    breed: 'Coonhound',
    specialty: 'Tracking & Trailing',
    trainingBackground:
      'Dino was bred for exactly this kind of work. His drive and endurance allow him to work long, complex trails without losing focus. He has located cats, dogs, and other animals on cases spanning multiple days.',
    photo: '/images/dogs/dino.jpg',
    active: true,
  },
]
