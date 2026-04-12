import type { Testimonial } from '@/sanity/lib/queries'

interface TestimonialCardProps {
  testimonial: Testimonial
  featured?: boolean
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${star <= rating ? 'text-warm-gold' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function TestimonialCard({
  testimonial,
  featured = false,
}: TestimonialCardProps) {
  const petEmoji = {
    dog: '🐕',
    cat: '🐱',
    other: '🐾',
  }[testimonial.petType] ?? '🐾'

  return (
    <div
      className={`bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 ${
        featured ? 'border-warm-gold' : 'border-forest/30'
      }`}
    >
      <div className="flex items-start justify-between mb-3">
        <StarRating rating={testimonial.rating} />
        {testimonial.outcome === 'found' && (
          <span className="text-xs bg-forest/10 text-forest font-semibold px-2 py-0.5 rounded-full">
            Found! ✓
          </span>
        )}
      </div>

      <blockquote className="text-gray-700 font-body leading-relaxed mb-4 italic">
        "{testimonial.quote}"
      </blockquote>

      <div className="border-t border-gray-100 pt-3">
        <p className="font-semibold text-navy text-sm">
          {testimonial.ownerName}
        </p>
        <p className="text-xs text-gray-500 mt-0.5">
          {petEmoji} {testimonial.petName} · {testimonial.location}
        </p>
        {testimonial.date && (
          <p className="text-xs text-gray-400 mt-0.5">
            {new Date(testimonial.date).toLocaleDateString('en-US', {
              month: 'long',
              year: 'numeric',
            })}
          </p>
        )}
      </div>
    </div>
  )
}
