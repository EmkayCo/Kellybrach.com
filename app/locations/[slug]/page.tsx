import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { LOCATIONS, getLocation } from '@/lib/data/locations'
import { SITE } from '@/lib/data/site'
import { TESTIMONIALS } from '@/lib/data/testimonials'

// ─── Static generation ───────────────────────────────────────────────────────
export function generateStaticParams() {
  return LOCATIONS.map((l) => ({ slug: l.slug }))
}

// ─── Metadata ────────────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const loc = getLocation(slug)
  if (!loc) return {}

  return {
    title: loc.metaTitle,
    description: loc.metaDescription,
    alternates: { canonical: `https://kellybrach.com/locations/${loc.slug}` },
    openGraph: {
      title: loc.metaTitle,
      description: loc.metaDescription,
      url: `https://kellybrach.com/locations/${loc.slug}`,
      type: 'website',
    },
  }
}

// ─── JSON-LD schema ───────────────────────────────────────────────────────────
function buildSchema(name: string, stateCode: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Kelly Brach K9 — Lost Pet Tracking',
    url: 'https://kellybrach.com',
    telephone: '+16319735678',
    image: 'https://kellybrach.com/images/og-default.jpg',
    description:
      'Professional K9 scent tracking and trailing for lost pets. GPS-documented. Serving the Northeast.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kings Park',
      addressRegion: 'NY',
      addressCountry: 'US',
    },
    areaServed: {
      '@type': 'State',
      name: name,
      addressRegion: stateCode,
    },
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday', 'Tuesday', 'Wednesday', 'Thursday',
          'Friday', 'Saturday', 'Sunday',
        ],
        opens: '07:00',
        closes: '21:00',
      },
    ],
  }
}

// ─── Tier badge ───────────────────────────────────────────────────────────────
function tierLabel(tier: 1 | 2 | 3) {
  if (tier === 1) return { text: 'Primary Service Area', color: 'bg-warm-gold/20 text-warm-gold' }
  if (tier === 2) return { text: 'Regular Coverage', color: 'bg-navy/10 text-gray-600' }
  return { text: 'Extended Coverage', color: 'bg-gray-100 text-gray-500' }
}

// ─── Page ────────────────────────────────────────────────────────────────────
export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const loc = getLocation(slug)
  if (!loc) notFound()

  const schema = buildSchema(loc.name, loc.stateCode)
  const badge = tierLabel(loc.tier)

  // Pull up to 2 testimonials from this state or nearby
  const stateTestimonials = TESTIMONIALS.filter(
    (t) =>
      t.location.toLowerCase().includes(loc.stateCode.toLowerCase()) ||
      t.location.toLowerCase().includes(loc.name.toLowerCase().split(',')[0])
  ).slice(0, 2)

  const nearbyLoc = loc.nearbyPage
    ? LOCATIONS.find((l) => l.slug === loc.nearbyPage)
    : null

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section className="bg-navy text-white py-20">
        <div className="section-container">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className={`text-xs font-mono px-2 py-1 rounded-sm font-semibold ${badge.color}`}>
                {badge.text}
              </span>
            </div>
            <p className="label-overline text-warm-gold mb-4">Lost Pet K9 Tracking</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-4">
              {loc.heroHeadline}
            </h1>
            <p className="text-xl text-gray-200 font-body leading-relaxed mb-8">
              {loc.heroSubline}
            </p>
            {/* Urgent CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={SITE.phoneHref}
                className="btn-primary text-lg py-4 px-8 font-mono inline-flex items-center justify-center gap-2"
              >
                <span>Call {SITE.phone}</span>
              </a>
              <Link
                href="/contact"
                className="btn-ghost text-lg py-4 px-8 inline-flex items-center justify-center"
              >
                Contact Form →
              </Link>
            </div>
            <p className="text-gray-500 text-xs font-body mt-3">
              Call or text · 7 days a week · Don&apos;t wait
            </p>
          </div>
        </div>
      </section>

      {/* ── Intro + local context ────────────────────────────────────── */}
      <section className="section-padding bg-cream">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="label-overline text-warm-gold mb-3">About This Area</p>
              <h2 className="font-display text-3xl font-bold text-navy mb-6">
                Why {loc.name} Requires a Professional
              </h2>
              <p className="font-body text-gray-700 leading-relaxed mb-4">{loc.intro}</p>
              <p className="font-body text-gray-600 leading-relaxed text-sm">{loc.localContext}</p>
            </div>

            <div className="space-y-6">
              {/* Stats */}
              <div className="bg-white rounded-sm border border-gray-200 shadow-sm p-6">
                <p className="label-overline text-warm-gold mb-4">By the Numbers</p>
                <div className="grid grid-cols-3 divide-x divide-gray-100">
                  {[
                    { num: '1500+', label: 'Searches done' },
                    { num: '6',     label: 'Trained K9s' },
                    { num: 'GPS',   label: 'Every track' },
                  ].map((s) => (
                    <div key={s.label} className="px-4 text-center">
                      <p className="font-display font-bold text-warm-gold text-3xl leading-none mb-1">{s.num}</p>
                      <p className="font-body text-gray-500 text-xs">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Kelly */}
              <div className="bg-white rounded-sm border border-gray-200 shadow-sm p-6">
                <p className="label-overline text-warm-gold mb-3">Why Kelly Brach K9</p>
                <p className="font-body text-gray-700 text-sm leading-relaxed">{loc.whyKelly}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Areas served ────────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="label-overline text-warm-gold mb-3">Coverage</p>
              <h2 className="font-display text-3xl font-bold text-navy mb-6">
                Areas We Serve in {loc.name}
              </h2>
              <ul className="space-y-2">
                {loc.areasServed.map((area) => (
                  <li key={area} className="flex items-start gap-3 font-body text-gray-700 text-sm">
                    <span className="text-warm-gold font-bold shrink-0 mt-0.5">✓</span>
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              {/* What we provide */}
              <div>
                <p className="label-overline text-warm-gold mb-3">What You Get</p>
                <h3 className="font-display text-2xl font-bold text-navy mb-4">
                  More Than a Search
                </h3>
                <div className="space-y-3">
                  {[
                    {
                      title: 'GPS-Documented Track',
                      body: 'Every search produces a GPS map of your pet\'s actual route — direction of travel, crossing points, resting spots, trail end.',
                    },
                    {
                      title: 'Targeted Trap Placement',
                      body: 'The GPS data tells us exactly where to recommend humane trap placement for maximum recovery odds.',
                    },
                    {
                      title: 'Action Plan',
                      body: 'Where to post, what to watch for, when to schedule re-checks — delivered at the end of every search.',
                    },
                    {
                      title: 'Six Trained K9s',
                      body: 'Enzo, Sonja, Maggie, Dino, Elenor, and Nova. A family pack built over years of working together.',
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-3">
                      <div className="w-px bg-warm-gold shrink-0 self-stretch" />
                      <div>
                        <p className="font-body font-bold text-navy text-sm">{item.title}</p>
                        <p className="font-body text-gray-500 text-xs leading-relaxed">{item.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials (if any from this area) ────────────────────── */}
      {stateTestimonials.length > 0 && (
        <section className="section-padding bg-cream">
          <div className="section-container max-w-3xl">
            <p className="label-overline text-warm-gold mb-8">From the Field</p>
            <div className="space-y-6">
              {stateTestimonials.map((t) => (
                <div key={t.id} className="bg-white rounded-sm shadow-sm border border-gray-100 p-6">
                  <span className="text-warm-gold tracking-widest text-sm">{'★'.repeat(t.rating)}</span>
                  <blockquote className="font-body text-gray-700 italic leading-relaxed mt-3 mb-4">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{t.petType === 'cat' ? '🐱' : '🐾'}</span>
                    <div>
                      <p className="font-body font-bold text-navy text-sm">{t.ownerName}</p>
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
            <div className="mt-6">
              <Link href="/success-stories" className="text-sm text-warm-gold hover:text-navy transition-colors font-semibold">
                Read more success stories →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── Urgency + closing note ───────────────────────────────────── */}
      <section className="section-padding bg-white border-y border-gray-100">
        <div className="section-container max-w-2xl text-center">
          <p className="label-overline text-warm-gold mb-3">Time Is Critical</p>
          <h2 className="font-display text-3xl font-bold text-navy mb-4">
            Every Hour the Trail Fades
          </h2>
          <p className="font-body text-gray-600 leading-relaxed mb-8">
            {loc.closingNote}
          </p>
          <a
            href={SITE.phoneHref}
            className="font-mono text-4xl font-bold text-warm-gold hover:text-navy transition-colors block mb-2 tracking-tight"
          >
            {SITE.phone}
          </a>
          <p className="text-gray-400 text-sm font-body">Call or text · 7 days a week</p>
        </div>
      </section>

      {/* ── Related location ────────────────────────────────────────── */}
      {nearbyLoc && (
        <section className="bg-navy py-12">
          <div className="section-container">
            <p className="label-overline text-warm-gold mb-4">Also Serving</p>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-display text-2xl font-bold text-white">{nearbyLoc.name}</h3>
                <p className="font-body text-gray-400 text-sm mt-1">{nearbyLoc.heroSubline}</p>
              </div>
              <Link
                href={`/locations/${nearbyLoc.slug}`}
                className="text-warm-gold hover:text-white transition-colors font-semibold text-sm shrink-0"
              >
                View page →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── Global CTA ───────────────────────────────────────────────── */}
      <section className="bg-warm-gold grain-overlay relative overflow-hidden">
        <div className="section-container py-20 text-center relative z-10">
          <p className="label-overline text-white/70 mb-4">Is Your Pet Missing in {loc.name}?</p>
          <h2 className="font-display text-4xl font-bold text-white mb-4">
            Don&apos;t wait.<br />
            <span className="font-normal font-body text-2xl">Every hour matters.</span>
          </h2>
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
