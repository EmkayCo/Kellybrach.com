import Link from 'next/link'

interface HeroProps {
  phone?: string
}

export default function Hero({ phone = '631-973-LOST' }: HeroProps) {
  const phoneHref = `tel:${phone.replace(/-/g, '').replace('LOST', '5678')}`

  return (
    <section className="relative min-h-[90vh] flex items-center bg-navy overflow-hidden">
      {/* Background texture overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/95 to-forest/80" />

      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-warm-gold rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-forest rounded-full translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="relative section-container py-24 text-white">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-warm-gold/20 border border-warm-gold/30 text-warm-gold text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-warm-gold animate-pulse" />
            Kings Park, NY · Serving the Northeast
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
            We Are the Difference Between{' '}
            <span className="text-warm-gold">Lost</span> and{' '}
            <span className="text-warm-gold">FOUND.</span>
          </h1>

          {/* Subhead */}
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-8 max-w-2xl font-body">
            Professional K9 tracking &amp; trailing teams. When your pet goes
            missing, every hour matters — our trained dogs can find the trail
            others can't.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="btn-primary text-lg py-4 px-8 text-center font-bold"
            >
              Request a Search →
            </Link>
            <Link
              href="/how-it-works"
              className="btn-ghost text-lg py-4 px-8 text-center"
            >
              How It Works
            </Link>
          </div>

          {/* Phone */}
          <p className="mt-8 text-gray-300 text-sm">
            Immediate help?{' '}
            <a
              href={phoneHref}
              className="font-mono text-warm-gold hover:text-yellow-300 transition-colors font-bold text-base"
            >
              {phone}
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
