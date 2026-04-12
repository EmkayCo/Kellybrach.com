import type { Metadata } from 'next'
import Link from 'next/link'
import TestimonialCard from '@/components/shared/TestimonialCard'
import SectionHeader from '@/components/shared/SectionHeader'
import { getAllTestimonials } from '@/sanity/lib/queries'

export const metadata: Metadata = {
  title: 'Success Stories',
  description:
    'Real stories from families whose pets were found with the help of Kelly Brach K9 tracking. Read testimonials and learn about successful lost pet recoveries.',
}

export default async function SuccessStoriesPage() {
  const testimonials = await getAllTestimonials()
  const featured = testimonials.filter((t) => t.featured)
  const rest = testimonials.filter((t) => !t.featured)

  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-20">
        <div className="section-container">
          <div className="max-w-2xl">
            <p className="font-mono text-warm-gold text-sm tracking-widest mb-4">SUCCESS STORIES</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Being the Difference Between Lost and FOUND
            </h1>
            <p className="text-xl text-gray-200 font-body leading-relaxed">
              Real stories from real families. These are the moments that make this
              work matter.
            </p>
          </div>
        </div>
      </section>

      {/* Featured testimonials */}
      {(featured.length > 0 || testimonials.length === 0) && (
        <section className="section-padding bg-cream">
          <div className="section-container">
            <SectionHeader
              title="Featured Stories"
              subtitle="These families trusted us in their most desperate moment."
              centered
            />

            {featured.length > 0 ? (
              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featured.map((t) => (
                  <TestimonialCard key={t._id} testimonial={t} featured />
                ))}
              </div>
            ) : (
              <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    ownerName: 'Sarah M.',
                    petName: 'Bella',
                    petType: 'dog' as const,
                    location: 'Long Island, NY',
                    quote:
                      'Kelly and her K9 team were incredible. They tracked our dog for miles and gave us hope when we had none. The GPS track showed exactly where Bella had been — it was amazing to see.',
                    rating: 5,
                    featured: true,
                    outcome: 'found',
                    _id: '1',
                  },
                  {
                    ownerName: 'James & Lisa T.',
                    petName: 'Luna',
                    petType: 'cat' as const,
                    location: 'New Jersey',
                    quote:
                      'I was amazed watching the GPS track come in. Our cat had traveled over a mile overnight. We never would have found her without this. Kelly was professional and compassionate throughout.',
                    rating: 5,
                    featured: true,
                    outcome: 'found',
                    _id: '2',
                  },
                  {
                    ownerName: 'Maria R.',
                    petName: 'Max',
                    petType: 'dog' as const,
                    location: 'Connecticut',
                    quote:
                      'Professional, compassionate, and incredibly skilled. The K9 picked up the scent immediately. I had no idea this service existed — wish I\'d known sooner. Highly recommend.',
                    rating: 5,
                    featured: true,
                    outcome: 'found',
                    _id: '3',
                  },
                ].map((t) => (
                  <TestimonialCard key={t._id} testimonial={t} featured />
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* All testimonials */}
      {rest.length > 0 && (
        <section className="section-padding bg-white">
          <div className="section-container">
            <SectionHeader title="More Stories" centered />
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((t) => (
                <TestimonialCard key={t._id} testimonial={t} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Stats strip */}
      <section className="bg-forest text-white py-12">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { num: '100+', label: 'Searches Conducted' },
              { num: '4', label: 'Trained K9s' },
              { num: 'Northeast', label: 'Coverage Area' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-4xl font-bold text-warm-gold mb-1">
                  {stat.num}
                </p>
                <p className="font-body text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-cream">
        <div className="section-container text-center">
          <h2 className="font-display text-3xl font-bold text-navy mb-4">
            Is Your Pet Missing?
          </h2>
          <p className="text-gray-600 text-lg font-body mb-8 max-w-lg mx-auto">
            Your family could be the next success story. Contact us immediately — every
            hour matters.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary text-lg py-4 px-8">
              Request a Search →
            </Link>
            <a href="tel:+16319735678" className="btn-secondary text-lg py-4 px-8 font-mono">
              Call 631-973-LOST
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
