import Link from 'next/link'
import Image from 'next/image'

interface HeroProps {
  phone?: string
  heroImageUrl?: string
}

export default function Hero({
  phone = '631-973-LOST',
  heroImageUrl,
}: HeroProps) {
  const phoneHref = `tel:${phone.replace(/-/g, '').replace('LOST', '5678')}`

  return (
    <section className="relative min-h-[92vh] flex items-stretch bg-navy overflow-hidden">

      {/* Photo — right half on desktop, atmospheric bg on mobile */}
      <div className="absolute inset-0 lg:left-[46%]">
        {heroImageUrl ? (
          <Image
            src={heroImageUrl}
            alt="K9 tracking dog working in the field with handler"
            fill
            className="object-cover object-center"
            priority
            sizes="(max-width: 1024px) 100vw, 54vw"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-forest/50 via-navy/80 to-navy" />
        )}
        {/* Stronger left gradient for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/75 lg:via-navy/55 to-navy/10 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-transparent to-navy/25" />
      </div>

      <div className="relative z-10 flex items-center section-container py-24 lg:py-32">
        <div className="max-w-xl">

          {/* Top overline — speaks to the person in crisis */}
          <p className="label-overline text-red-400 mb-6 flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-red-400 animate-pulse" />
            If your pet is missing right now — you're in the right place
          </p>

          {/* Headline — validation + specific hope */}
          <h1 className="font-display font-bold text-white leading-[1.05] mb-6">
            <span className="block text-5xl sm:text-6xl md:text-7xl">
              They went
            </span>
            <span className="block text-5xl sm:text-6xl md:text-7xl">
              somewhere.
            </span>
            <span className="block text-4xl sm:text-5xl md:text-6xl italic text-warm-gold mt-2">
              Our dogs can find that trail.
            </span>
          </h1>

          {/* Body — calm, direct, credible */}
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-3 font-body">
            Every pet leaves a scent trail. Our trained K9s follow the exact path yours
            took — through woods, across roads, through neighborhoods — and give you
            a GPS map of exactly where they went.
          </p>
          <p className="text-base text-gray-400 font-body mb-10">
            That's not guessing. That's not hoping. That's a real lead.
          </p>

          {/* Phone NUMBER is the primary CTA */}
          <div className="mb-8">
            <p className="label-overline text-gray-500 mb-3">
              Call or text Kelly directly — right now
            </p>
            <a
              href={phoneHref}
              className="font-mono text-4xl md:text-5xl font-bold text-white hover:text-warm-gold transition-colors tracking-tight block leading-none mb-2"
            >
              {phone}
            </a>
            <p className="text-gray-500 text-xs font-body">Available 7 days a week · Long Island &amp; Northeast</p>
          </div>

          {/* Secondary actions */}
          <div className="flex flex-col sm:flex-row items-start gap-4 pt-4 border-t border-white/10">
            <Link
              href="/contact"
              className="btn-primary text-sm py-3 px-6"
            >
              Send a message →
            </Link>
            <Link
              href="/how-it-works"
              className="text-gray-400 hover:text-white transition-colors font-body py-3 text-sm flex items-center gap-1"
            >
              How does K9 tracking work? →
            </Link>
          </div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-navy to-transparent pointer-events-none" />
    </section>
  )
}
