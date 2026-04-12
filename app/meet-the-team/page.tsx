import type { Metadata } from 'next'
import Link from 'next/link'
import DogCard from '@/components/shared/DogCard'
import SectionHeader from '@/components/shared/SectionHeader'
import { getAllDogs } from '@/sanity/lib/queries'

export const metadata: Metadata = {
  title: 'Meet the Team',
  description:
    'Meet Kelly Brach and her team of professionally trained K9 tracking dogs — Enzo, Maggie, Sonja, Dino and more. Learn about their training and specialties.',
}

const credentials = [
  {
    title: 'Scent-Specific Tracking',
    description:
      'All our K9s are trained on scent-specific articles — meaning they follow your specific pet, not generalized animal scent.',
  },
  {
    title: 'Trailing & Tracking Methodology',
    description:
      'We train in both ground tracking and air-scent trailing, giving us the tools to work any terrain and conditions.',
  },
  {
    title: 'GPS Documentation',
    description:
      'Every search is recorded with GPS technology. You receive a documented record of exactly where the K9 worked and what the dog found.',
  },
  {
    title: 'Lost Pet Behavior',
    description:
      'We study lost pet behavior patterns — panicked pets behave very differently than exploring pets, and our strategy accounts for this.',
  },
  {
    title: 'Ongoing Training',
    description:
      'Our team trains regularly to maintain and advance their skills. Lost pet tracking is a specialized discipline that requires continued investment.',
  },
  {
    title: 'Real-World Experience',
    description:
      'We\'ve worked hundreds of real lost pet cases across varied terrain, weather conditions, and species — experience that a training certificate alone can\'t replace.',
  },
]

export default async function MeetTheTeamPage() {
  const dogs = await getAllDogs()

  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-20">
        <div className="section-container">
          <div className="max-w-2xl">
            <p className="font-mono text-warm-gold text-sm tracking-widest mb-4">THE TEAM</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Meet Kelly &amp; the K9 Team
            </h1>
            <p className="text-xl text-gray-200 font-body leading-relaxed">
              Professional, trained, and deeply committed to bringing your pet home.
            </p>
          </div>
        </div>
      </section>

      {/* Kelly bio */}
      <section className="section-padding bg-cream">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Photo placeholder */}
            <div className="aspect-[4/3] bg-forest/10 rounded-2xl flex items-center justify-center border border-forest/20">
              <div className="text-center text-forest/40">
                <svg className="w-24 h-24 mx-auto mb-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
                <p className="text-sm font-semibold">Kelly Brach</p>
                <p className="text-xs">Photo coming soon</p>
              </div>
            </div>

            {/* Bio */}
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">
                Kelly Brach
              </h2>
              <p className="text-warm-gold font-semibold font-body mb-6">
                K9 Handler · Lost Pet Recovery Specialist · Kings Park, NY
              </p>

              <div className="space-y-4 text-gray-700 font-body leading-relaxed">
                <p>
                  Kelly Brach is a professional K9 handler specializing in lost pet
                  recovery using trained tracking and trailing dogs. Based in Kings
                  Park, NY, Kelly serves families throughout Long Island, the
                  tri-state area, and beyond.
                </p>
                <p>
                  Her journey into lost pet recovery grew from a deep passion for
                  animals and a recognition that traditional searching methods — social
                  media posts, flyers, driving around — leave too much to chance.
                  Professional K9 tracking gives families something those methods can't:
                  actual data about where their pet went.
                </p>
                <p>
                  Kelly has worked hundreds of cases involving dogs, cats, and other
                  animals across varied terrain, weather conditions, and circumstances.
                  She has worked alongside animal control officers, investigated
                  suspected theft cases, and helped families whose pets were missing
                  for days before they knew professional K9 help was available.
                </p>
                <p className="font-semibold text-navy">
                  "I do this work because a lost pet is a family emergency. Every
                  family deserves the best tools available to bring their pet home."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* K9 Team Grid */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <SectionHeader
            title="The K9 Team"
            subtitle="Our trained tracking and trailing dogs. Each one is specifically prepared for the unique challenges of lost pet recovery."
            centered
          />

          {dogs.length > 0 ? (
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
              {dogs.map((dog) => (
                <DogCard key={dog._id} dog={dog} />
              ))}
            </div>
          ) : (
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
              {['Enzo', 'Maggie', 'Sonja', 'Dino'].map((name) => (
                <div
                  key={name}
                  className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100"
                >
                  <div className="aspect-square bg-forest/10 flex items-center justify-center">
                    <span className="text-5xl">🐕</span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-display text-xl font-bold text-navy">{name}</h3>
                    <p className="text-sm text-gray-400 italic mt-1">Profile coming soon</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Training & Credentials */}
      <section className="section-padding bg-cream">
        <div className="section-container">
          <SectionHeader
            title="Training &amp; Credentials"
            subtitle="What makes a properly trained lost pet K9 different from a pet with a good nose."
            centered
          />

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {credentials.map((cred) => (
              <div key={cred.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="w-10 h-10 bg-forest/10 rounded-full flex items-center justify-center mb-3">
                  <div className="w-3 h-3 rounded-full bg-forest" />
                </div>
                <h3 className="font-display text-lg font-bold text-navy mb-2">
                  {cred.title}
                </h3>
                <p className="text-sm text-gray-600 font-body leading-relaxed">
                  {cred.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-warm-gold">
        <div className="section-container text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            Ready to Work With Our Team?
          </h2>
          <p className="text-white/90 text-lg font-body mb-8 max-w-lg mx-auto">
            Don't wait — contact us now and let our K9 team get to work for your family.
          </p>
          <Link
            href="/contact"
            className="bg-navy text-white font-bold font-body text-lg py-4 px-10 rounded-md hover:bg-navy/90 transition-colors inline-block"
          >
            Request a Search →
          </Link>
        </div>
      </section>
    </>
  )
}
