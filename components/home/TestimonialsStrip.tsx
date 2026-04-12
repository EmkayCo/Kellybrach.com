import Link from 'next/link'
import type { Testimonial } from '@/lib/data/testimonials'

function Stars({ n }: { n: number }) {
  return <span className="text-warm-gold tracking-widest">{'★'.repeat(Math.min(n, 5))}</span>
}

export default function TestimonialsStrip({ testimonials }: { testimonials: Testimonial[] }) {
  const [featured, ...rest] = testimonials
  const icon = (t: Testimonial) => t.petType === 'cat' ? '🐱' : '🐾'

  return (
    <section className="section-padding bg-cream grain-overlay">
      <div className="section-container">
        <p className="label-overline text-warm-gold mb-10">What families say</p>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2px_1fr] gap-10 lg:gap-0 items-start mb-14">

          {/* Featured pull quote */}
          <div className="lg:pr-12">
            <div className="text-7xl text-warm-gold font-display leading-none mb-3 select-none">"</div>
            <blockquote className="font-display text-2xl md:text-3xl text-navy font-bold leading-snug mb-6 italic">
              {featured.quote}
            </blockquote>
            <Stars n={featured.rating} />
            <div className="mt-3 flex items-center gap-2">
              <span className="text-lg">{icon(featured)}</span>
              <div>
                <p className="font-body font-bold text-navy text-sm">{featured.ownerName}</p>
                <p className="font-body text-xs text-gray-500">
                  {featured.petName} · {featured.location}
                  {featured.outcome === 'found' && <span className="ml-2 text-forest font-semibold">✓ Found</span>}
                </p>
              </div>
            </div>
          </div>

          <div className="hidden lg:block w-px bg-gray-200 self-stretch mx-auto" />

          {/* Supporting quotes */}
          <div className="lg:pl-12 space-y-8">
            {rest.slice(0, 2).map((t) => (
              <div key={t.id} className="border-l-2 border-warm-gold/30 pl-5">
                <blockquote className="font-body text-gray-700 text-base italic leading-relaxed mb-3">
                  "{t.quote}"
                </blockquote>
                <Stars n={t.rating} />
                <div className="mt-2 flex items-center gap-2">
                  <span>{icon(t)}</span>
                  <div>
                    <p className="font-body font-semibold text-navy text-sm">{t.ownerName}</p>
                    <p className="font-body text-xs text-gray-400">
                      {t.petName} · {t.location}
                      {t.outcome === 'found' && <span className="ml-2 text-forest font-semibold">✓ Found</span>}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="track-divider flex-1 mr-8" />
          <Link href="/success-stories"
            className="shrink-0 text-forest font-body font-semibold text-sm hover:text-warm-gold transition-colors">
            Read more stories →
          </Link>
        </div>
      </div>
    </section>
  )
}
