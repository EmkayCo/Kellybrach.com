import Link from 'next/link'
import type { Testimonial } from '@/sanity/lib/queries'
import TestimonialCard from '@/components/shared/TestimonialCard'
import SectionHeader from '@/components/shared/SectionHeader'

interface TestimonialsStripProps {
  testimonials: Testimonial[]
}

export default function TestimonialsStrip({ testimonials }: TestimonialsStripProps) {
  return (
    <section className="section-padding bg-navy">
      <div className="section-container">
        <SectionHeader
          title="Families We've Helped"
          subtitle="Don't just take our word for it — hear from pet owners who called us in their most desperate moment."
          centered
          light
        />

        {testimonials.length > 0 ? (
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <TestimonialCard key={t._id} testimonial={t} featured={t.featured} />
            ))}
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: 'Kelly and her K9 team were incredible. They tracked our dog for miles and gave us hope when we had none.',
                owner: 'Sarah M.',
                pet: 'Bella the Lab',
                location: 'Long Island, NY',
              },
              {
                quote: 'I was amazed watching the GPS track come in. Our cat had traveled over a mile overnight — we never would have found her without this.',
                owner: 'James & Lisa T.',
                pet: 'Luna the Cat',
                location: 'New Jersey',
              },
              {
                quote: 'Professional, compassionate, and incredibly skilled. The K9 picked up the scent immediately. Highly recommend.',
                owner: 'Maria R.',
                pet: 'Max the Beagle',
                location: 'Connecticut',
              },
            ].map((t) => (
              <div key={t.owner} className="bg-white rounded-xl p-6 shadow-md border-l-4 border-warm-gold">
                <blockquote className="text-gray-700 font-body leading-relaxed mb-4 italic">
                  "{t.quote}"
                </blockquote>
                <div className="border-t border-gray-100 pt-3">
                  <p className="font-semibold text-navy text-sm">{t.owner}</p>
                  <p className="text-xs text-gray-500 mt-0.5">🐾 {t.pet} · {t.location}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-10 text-center">
          <Link href="/success-stories" className="btn-ghost inline-flex">
            Read More Stories →
          </Link>
        </div>
      </div>
    </section>
  )
}
