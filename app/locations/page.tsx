import type { Metadata } from 'next'
import Link from 'next/link'
import { LOCATIONS, getLocationsByTier } from '@/lib/data/locations'
import { SITE } from '@/lib/data/site'

export const metadata: Metadata = {
  title: 'Service Locations — Northeast K9 Pet Tracking | Kelly Brach K9',
  description:
    'Kelly Brach K9 serves the entire Northeast — New York, New Jersey, Connecticut, Pennsylvania, Massachusetts, and Rhode Island. GPS-documented lost pet K9 tracking. Call 631-973-LOST.',
  alternates: { canonical: 'https://kellybrach.com/locations' },
}

export default function LocationsIndexPage() {
  const tier1 = getLocationsByTier(1)
  const tier2 = getLocationsByTier(2)
  const tier3 = getLocationsByTier(3)

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="bg-navy text-white py-20">
        <div className="section-container">
          <div className="max-w-2xl">
            <p className="label-overline text-warm-gold mb-4">Where We Work</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-4">
              K9 Pet Tracking<br />
              <span className="text-warm-gold italic">Across the Northeast</span>
            </h1>
            <p className="text-xl text-gray-200 font-body leading-relaxed mb-6">
              Based in Kings Park, NY — traveling wherever a lost pet needs a trained nose
              and GPS documentation.
            </p>
            <a href={SITE.phoneHref}
              className="font-mono text-2xl font-bold text-warm-gold hover:text-white transition-colors">
              {SITE.phone}
            </a>
            <p className="text-gray-500 text-sm font-body mt-1">Call or text · 7 days a week</p>
          </div>
        </div>
      </section>

      {/* ── Primary areas ────────────────────────────────────────────── */}
      <section className="section-padding bg-cream">
        <div className="section-container">
          <p className="label-overline text-warm-gold mb-3">Primary Coverage</p>
          <h2 className="font-display text-3xl font-bold text-navy mb-2">
            Where We Work Most Often
          </h2>
          <p className="font-body text-gray-500 text-sm mb-10">
            These are our highest-volume service areas — fastest response, deepest local knowledge.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {tier1.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="group bg-white rounded-sm border border-gray-200 hover:border-warm-gold/40 shadow-sm hover:shadow-md transition-all duration-200 p-6 flex items-start justify-between gap-4"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs bg-warm-gold/15 text-warm-gold font-mono font-semibold px-2 py-0.5 rounded-sm">
                      {loc.stateCode}
                    </span>
                    <span className="text-xs text-gray-400 font-body">Primary Area</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-navy group-hover:text-warm-gold transition-colors mb-1">
                    {loc.name}
                  </h3>
                  <p className="font-body text-gray-500 text-sm leading-snug">{loc.heroSubline}</p>
                </div>
                <span className="text-warm-gold text-xl shrink-0 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Secondary areas ──────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <p className="label-overline text-warm-gold mb-3">Regular Coverage</p>
          <h2 className="font-display text-3xl font-bold text-navy mb-2">
            Additional Service Areas
          </h2>
          <p className="font-body text-gray-500 text-sm mb-10">
            Areas we travel to regularly — may involve travel fees.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tier2.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="group flex items-center justify-between gap-4 border border-gray-200 hover:border-warm-gold/40 rounded-sm p-5 transition-all duration-200 hover:bg-cream"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs bg-navy/8 text-gray-600 font-mono font-semibold px-2 py-0.5 rounded-sm">
                      {loc.stateCode}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-navy group-hover:text-warm-gold transition-colors">
                    {loc.name}
                  </h3>
                  <p className="font-body text-gray-500 text-xs mt-0.5 leading-snug">{loc.heroSubline}</p>
                </div>
                <span className="text-gray-300 group-hover:text-warm-gold text-lg shrink-0 transition-colors">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Extended areas ───────────────────────────────────────────── */}
      <section className="section-padding bg-cream">
        <div className="section-container">
          <p className="label-overline text-warm-gold mb-3">Extended Coverage</p>
          <h2 className="font-display text-3xl font-bold text-navy mb-2">
            We Travel for the Right Case
          </h2>
          <p className="font-body text-gray-500 text-sm mb-10 max-w-xl">
            These areas are at the outer edge of our regular radius — but we have traveled
            further. Don't assume we won't come. Call and ask.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {tier3.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="group flex items-start justify-between gap-3 border border-gray-200 hover:border-warm-gold/30 rounded-sm p-4 bg-white transition-all duration-200"
              >
                <div>
                  <span className="text-xs text-gray-400 font-mono font-semibold">{loc.stateCode}</span>
                  <h3 className="font-display text-base font-bold text-navy group-hover:text-warm-gold transition-colors mt-0.5">
                    {loc.name}
                  </h3>
                </div>
                <span className="text-gray-300 group-hover:text-warm-gold transition-colors shrink-0">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why GPS documentation matters ────────────────────────────── */}
      <section className="section-padding bg-navy text-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="label-overline text-warm-gold mb-3">The Difference</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-6">
                We give you a map,<br />
                <span className="text-warm-gold italic">not a hunch.</span>
              </h2>
              <p className="font-body text-gray-300 text-lg leading-relaxed mb-4">
                Every search we conduct — from Long Island to Pennsylvania — is GPS-recorded.
                Direction of travel, crossing points, resting spots, trail end. That data
                tells you exactly where to set traps and concentrate your search.
              </p>
              <p className="font-body text-gray-500 text-sm leading-relaxed">
                No other service in the Northeast provides this level of documented evidence
                as standard practice.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: '1500+', label: 'Searches documented' },
                { num: '6',     label: 'Trained K9s' },
                { num: 'GPS',   label: 'Every single track' },
                { num: '7',     label: 'Days a week' },
              ].map((s) => (
                <div key={s.label} className="bg-white/5 border border-white/10 rounded-sm p-5 text-center">
                  <p className="font-display font-bold text-warm-gold text-4xl leading-none mb-2">{s.num}</p>
                  <p className="font-body text-gray-400 text-xs">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="bg-warm-gold grain-overlay relative overflow-hidden">
        <div className="section-container py-20 text-center relative z-10">
          <p className="label-overline text-white/70 mb-4">Pet Missing Now?</p>
          <h2 className="font-display text-4xl font-bold text-white mb-4">
            Don&apos;t wait — call immediately.
          </h2>
          <p className="text-white/80 font-body mb-8 max-w-md mx-auto">
            Every hour the scent trail fades. We serve the entire Northeast. Call now.
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
