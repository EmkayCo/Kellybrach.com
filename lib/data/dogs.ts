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
    breed: 'Czech Shepherd',
    specialty: 'Tracking & Trailing',
    trainingBackground:
      'Enzo has worked hundreds of real lost-pet cases across Long Island and the tri-state area. He was formally commended by the Somerset Town Council for his invaluable effort in finding a lost animal — the kind of real-world validation that speaks louder than any certification.',
    photo: '/images/dogs/enzo.jpg',
    active: true,
  },
  {
    slug: 'sonja',
    name: 'Sonja',
    breed: 'Belgian Shepherd (Tervuren)',
    specialty: 'Trailing Specialist',
    trainingBackground:
      'Sonja is a precision trailer at 65 lbs — fast, focused, and relentless on a cold scent. Her sable coat and black mask are unmistakable in the field. She works dense suburban terrain where contamination is highest, and her drive is the reason her daughter Maggie is on this team.',
    photo: '/images/dogs/sonja.jpg',
    active: true,
  },
  {
    slug: 'maggie',
    name: 'Maggie',
    breed: 'Belgian Shepherd / Malinois',
    specialty: 'Scent Trailing',
    trainingBackground:
      'Maggie is Sonja\'s daughter — her father was a bomb-scent-trained Belgian Malinois. She inherited her mother\'s black coat and her father\'s relentless drive. At 70 lbs she is the most tenacious dog on the team on cold trails, and she does not quit.',
    photo: '/images/dogs/maggie.jpg',
    active: true,
  },
  {
    slug: 'dino',
    name: 'Dino',
    breed: 'Belgian Shepherd',
    specialty: 'Tracking & Trailing',
    trainingBackground:
      'Dino is the biggest dog on the team at 110 lbs — son of Maggie and Enzo, black like his mother. He inherited Enzo\'s endurance and Maggie\'s nose, and he was the youngest dog on this team to work a real case. He has not stopped since.',
    photo: '/images/dogs/dino.jpg',
    active: true,
  },
  {
    slug: 'elenor',
    name: 'Elenor',
    breed: 'Belgian Shepherd',
    specialty: 'Tracking & Trailing',
    trainingBackground:
      'Elenor is the newest addition to the Kelly Brach K9 team. Trained in scent-specific tracking and trailing, she brings fresh drive and focus to every search. Her case history will be updated as she builds her field record.',
    photo: '/images/dogs/elenor.jpg',
    active: true,
  },
  {
    slug: 'nova',
    name: 'Nova',
    breed: 'Belgian Shepherd',
    specialty: 'Trailing Specialist',
    trainingBackground:
      'Nova rounds out the team with precision trailing ability and a nose that does not miss. Like all Kelly Brach K9s, she is trained specifically for lost pet recovery — not competition, not detection. Her only job is finding your family member.',
    photo: '/images/dogs/nova.jpg',
    active: true,
  },
]
