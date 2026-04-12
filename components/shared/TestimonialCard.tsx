import type { Testimonial } from '@/lib/data/testimonials'

function Stars({ n }: { n: number }) {
  return <span className="text-warm-gold text-sm tracking-widest">{'★'.repeat(Math.min(n, 5))}</span>
}

export default function TestimonialCard({ t, featured = false }: { t: Testimonial; featured?: boolean }) {
  const icon = t.petType === 'cat' ? '🐱' : '🐾'
  return (
    <div className={`bg-white rounded-sm p-6 shadow-sm border-l-4 ${featured ? 'border-warm-gold' : 'border-forest/20'}`}>
      <Stars n={t.rating} />
      <blockquote className="text-gray-700 font-body leading-relaxed mt-3 mb-4 italic text-sm">
        "{t.quote}"
      </blockquote>
      <div className="border-t border-gray-100 pt-3 flex items-start gap-2">
        <span className="text-base mt-0.5">{icon}</span>
        <div>
          <p className="font-semibold text-navy text-sm">{t.ownerName}</p>
          <p className="text-xs text-gray-500">
            {t.petName} · {t.location}
            {t.outcome === 'found' && <span className="ml-2 text-forest font-semibold">✓ Found</span>}
          </p>
        </div>
      </div>
    </div>
  )
}
