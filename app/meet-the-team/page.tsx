import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import DogCard from '@/components/shared/DogCard'
import { DOGS } from '@/lib/data/dogs'
import { SITE } from '@/lib/data/site'

export const metadata: Metadata = {
  title: 'Meet the Team — Kelly Brach K9',
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

export default function MeetTheTeamPage() {
  const activeDogs = DOGS.filter((d) => d.active)

  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-20">
        <div className="section-container">
          <div className="max-w-2xl">
            <p className="label-overline text-warm-gold mb-4">The Team</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-4">
              Meet Kelly &amp; the K9 Team
            </h1>
            <p className="text-xl text-gray-200 font-body leading-relaxed">
              Professional, trained, and deeply committed to bringing your pet home.
            </p>
          </div>
        </div>
      </section>

      {/* Kelly bio */}
      <section className="section-padding bg-cream grain-overlay">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] bg-forest/10 rounded-sm overflow-hidden">
              <Image
                src="/images/kelly.jpg"
                alt="Kelly Brach — K9 Handler"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div>
              <p className="label-overline text-warm-gold mb-3">Handler &amp; Founder</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-2">
                Kelly Brach
              </h2>
              <p className="text-warm-gold font-semibold font-body text-sm mb-6 tracking-wide">
                K9 Handler · Lost Pet Recovery Specialist · Kings Park, NY
              </p>

              <div className="space-y-4 text-gray-700 font-body leading-relaxed">
                <p>
                  In February 2018, Kelly's own cats — Frankie and Tony — went
                  missing. She searched the way everyone searches: social media,
                  flyers, driving around at night. It wasn't enough. The experience
                  of not knowing where to look, of having no real data, changed
                  everything.
                </p>
                <p>
                  She trained her Czech Shepherd Enzo in lost pet tracking and
                  trailing. Then came Sonja, then Maggie (Sonja's daughter), then
                  Dino (Maggie and Enzo's son). What started from loss became a
                  team — and a mission to give other families the one thing she
                  didn't have: an actual trail to follow.
                </p>
                <p>
                  Kelly has since worked hundreds of cases across Long Island, the
                  tri-state area, and beyond — alongside animal control officers,
                  fire departments, and families who had been searching for days
                  before they knew K9 help existed.
                </p>
              </div>

              <div className="mt-8 border-l-4 border-warm-gold pl-5">
                <p className="font-display text-lg italic text-navy leading-snug">
                  "I do this work because a lost pet is a family emergency. Every
                  family deserves the best tools available to bring their pet home."
                </p>
                <p className="text-warm-gold text-xs font-semibold font-body mt-2">— Kelly Brach</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* K9 Team Grid */}
      <section className="section-padding bg-navy">
        <div className="section-container">
          <div className="mb-12">
            <p className="label-overline text-warm-gold mb-3">The K9 Team</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight">
              Four noses.<br />
              <span className="text-warm-gold italic">Proven in the field.</span>
            </h2>
            <p className="text-gray-300 font-body mt-4 max-w-xl leading-relaxed">
              Each dog is trained specifically for lost pet recovery — not competition,
              not detection. Their only job is finding your family member.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {activeDogs.map((dog) => (
              <DogCard key={dog.slug} dog={dog} />
            ))}
          </div>
        </div>
      </section>

      {/* Training & Credentials */}
      <section className="section-padding bg-cream grain-overlay">
        <div className="section-container">
          <p className="label-overline text-warm-gold mb-3">What We Bring</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-2 leading-tight">
            Training &amp; Credentials
          </h2>
          <p className="text-gray-600 font-body mb-10 max-w-xl leading-relaxed">
            What makes a properly trained lost pet K9 different from a pet with a good nose.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {credentials.map((cred) => (
              <div key={cred.title} className="bg-white rounded-sm p-6 shadow-sm border border-gray-100">
                <div className="track-divider mb-4 w-16" />
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
      <section className="bg-warm-gold grain-overlay relative overflow-hidden">
        <div className="section-container py-20 text-center relative z-10">
          <p className="label-overline text-white/70 mb-4">Ready to Work With Our Team?</p>
          <h2 className="font-display text-4xl font-bold text-white mb-4">
            Don't wait for the trail to go cold.
          </h2>
          <p className="text-white/90 font-body mb-8 max-w-lg mx-auto">
            Contact Kelly directly. She will tell you exactly what to do right now.
          </p>
          <a href={SITE.phoneHref}
            className="font-mono text-4xl font-bold text-white hover:text-navy transition-colors block mb-4 tracking-tight">
            {SITE.phone}
          </a>
          <p className="text-white/60 text-sm font-body mb-8">Call or text · 7 days a week</p>
          <Link href="/contact"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm font-body border-b border-white/40 hover:border-white pb-0.5">
            Or fill out the contact form →
          </Link>
        </div>
      </section>
    </>
  )
}
