import type { Metadata } from 'next'
import Link from 'next/link'
import TestimonialCard from '@/components/shared/TestimonialCard'
import { TESTIMONIALS } from '@/lib/data/testimonials'
import { SITE } from '@/lib/data/site'

export const metadata: Metadata = {
  title: 'Success Stories — Kelly Brach K9',
  description:
    'Real stories from families whose pets were found with the help of Kelly Brach K9 tracking. Read testimonials and learn about successful lost pet recoveries.',
}

export default function SuccessStoriesPage() {
  const featured = TESTIMONIALS.filter((t) => t.featured)
  const rest = TESTIMONIALS.filter((t) => !t.featured)

  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-20">
        <div className="section-container">
          <div className="max-w-2xl">
            <p className="label-overline text-warm-gold mb-4">Success Stories</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-4">
              The difference between<br />
              <span className="text-warm-gold italic">lost and found.</span>
            </h1>
            <p className="text-xl text-gray-200 font-body leading-relaxed">
              Real families. Real searches. Real results. These are the moments that
              make this work matter.
            </p>
          </div>
        </div>
      </section>

      {/* Featured pull quote */}
      {featured.length > 0 && (
        <section className="section-padding bg-cream grain-overlay">
          <div className="section-container">
            <p className="label-overline text-warm-gold mb-10">Featured Stories</p>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2px_1fr] gap-10 lg:gap-0 items-start mb-14">
              <div className="lg:pr-12">
                <div className="text-7xl text-warm-gold font-display leading-none mb-3 select-none">"</div>
                <blockquote className="font-display text-2xl md:text-3xl text-navy font-bold leading-snug mb-6 italic">
                  {featured[0].quote}
                </blockquote>
                <span className="text-warm-gold tracking-widest">{'★'.repeat(featured[0].rating)}</span>
                <div className="mt-3 flex items-center gap-2">
                  <span className="text-lg">{featured[0].petType === 'cat' ? '🐱' : '🐾'}</span>
                  <div>
                    <p className="font-body font-bold text-navy text-sm">{featured[0].ownerName}</p>
                    <p className="font-body text-xs text-gray-500">
                      {featured[0].petName} · {featured[0].location}
                      {featured[0].outcome === 'found' && (
                        <span className="ml-2 text-gray-500 font-semibold">✓ Found</span>
                      )}
                    </p>
                  </div>
                </div>
              </div>

              <div className="hidden lg:block w-px bg-gray-200 self-stretch mx-auto" />

              <div className="lg:pl-12 space-y-8">
                {featured.slice(1, 3).map((t) => (
                  <div key={t.id} className="border-l-2 border-warm-gold/30 pl-5">
                    <blockquote className="font-body text-gray-700 text-base italic leading-relaxed mb-3">
                      "{t.quote}"
                    </blockquote>
                    <span className="text-warm-gold tracking-widest text-sm">{'★'.repeat(t.rating)}</span>
                    <div className="mt-2 flex items-center gap-2">
                      <span>{t.petType === 'cat' ? '🐱' : '🐾'}</span>
                      <div>
                        <p className="font-body font-semibold text-navy text-sm">{t.ownerName}</p>
                        <p className="font-body text-xs text-gray-400">
                          {t.petName} · {t.location}
                          {t.outcome === 'found' && (
                            <span className="ml-2 text-gray-500 font-semibold">✓ Found</span>
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="track-divider w-full" />
          </div>
        </section>
      )}

      {/* All other testimonials */}
      {rest.length > 0 && (
        <section className="section-padding bg-white">
          <div className="section-container">
            <p className="label-overline text-warm-gold mb-8">More Stories</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {rest.map((t) => (
                <TestimonialCard key={t.id} t={t} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Stats strip */}
      <section className="bg-white border-y border-gray-100 py-16">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100 text-center">
            {[
              { num: '1500+', label: 'Searches Conducted' },
              { num: '6',     label: 'Trained K9s on the Team' },
              { num: 'NE',    label: 'Northeast Coverage' },
            ].map((stat) => (
              <div key={stat.label} className="py-6 md:py-0">
                <p className="font-display font-bold text-warm-gold text-5xl leading-none mb-2">{stat.num}</p>
                <p className="font-body text-navy font-semibold text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-warm-gold grain-overlay relative overflow-hidden">
        <div className="section-container py-20 text-center relative z-10">
          <p className="label-overline text-white/70 mb-4">Is Your Pet Missing?</p>
          <h2 className="font-display text-4xl font-bold text-white mb-4">
            Your family could be<br />the next success story.
          </h2>
          <p className="text-white/90 font-body mb-8 max-w-lg mx-auto">
            Contact us immediately — every hour matters.
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
