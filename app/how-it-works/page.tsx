import type { Metadata } from 'next'
import Link from 'next/link'
import SectionHeader from '@/components/shared/SectionHeader'

export const metadata: Metadata = {
  title: 'How It Works',
  description:
    'Learn about our proven K9 tracking process for lost pets. From scent article to GPS track to action plan — a step-by-step guide to professional lost pet recovery.',
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'K9 Lost Pet Tracking',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Kelly Brach — Lost Pet K9 Handler',
    telephone: '+16319735678',
  },
  description:
    'Professional K9 tracking and trailing service for lost pets using scent-based tracking with GPS documentation.',
  areaServed: ['New York', 'New Jersey', 'Connecticut', 'Pennsylvania'],
}

const steps = [
  {
    step: 1,
    title: 'Contact Us Immediately',
    description:
      'Call or text 631-973-LOST as soon as your pet goes missing. Time is the most critical factor — fresh scent trails are far easier to follow. Don\'t wait to "see if they come back."',
    icon: '📞',
  },
  {
    step: 2,
    title: 'Prepare a Scent Article',
    description:
      'Place a recently worn item (blanket, bed, clothing your pet slept on) into a clean sealed bag. Do not let others handle it. This article will be used to give our K9 the target scent.',
    icon: '🧶',
  },
  {
    step: 3,
    title: 'Meet at Last-Known Location',
    description:
      'We\'ll meet you at the exact location your pet was last seen. We\'ll assess the terrain, weather, and time elapsed to strategize the most effective approach.',
    icon: '📍',
  },
  {
    step: 4,
    title: 'K9 Picks Up Scent and Tracks',
    description:
      'Our trained K9 is given the scent article and begins working the area. The dog follows the exact path your pet traveled. Every track is recorded with GPS technology so we can map the direction of travel.',
    icon: '🐕',
  },
  {
    step: 5,
    title: 'Action Plan Delivered',
    description:
      'Based on the track data, we deliver a targeted action plan: where to place humane traps, where to post flyers, what behaviors to watch for, and when to schedule re-checks as the pet moves.',
    icon: '📋',
  },
]

const trackFactors = [
  {
    title: 'Time Elapsed',
    description:
      'The sooner we start, the stronger the scent trail. Tracks within the first 24 hours are far more productive. However, our dogs have successfully tracked cold trails several days old.',
    icon: '⏱️',
  },
  {
    title: 'Weather Conditions',
    description:
      'Rain can wash away surface scent but also trap scent in the ground. Wind disperses scent. Overcast, cool conditions are often ideal. We work in all weather.',
    icon: '🌤️',
  },
  {
    title: 'Terrain & Environment',
    description:
      'Dense brush, pavement, and water crossings all affect how scent behaves. Urban environments have heavy scent contamination from foot traffic. We adapt our approach accordingly.',
    icon: '🌲',
  },
  {
    title: 'Foot Traffic',
    description:
      'Heavy human foot traffic over the area can degrade the trail. If possible, limit the number of people searching the area before our arrival.',
    icon: '👣',
  },
]

const emergencyChecklist = [
  'Call or text Kelly at 631-973-LOST immediately',
  'Prepare a scent article in a sealed bag right now (worn item, NOT washed)',
  'Note the exact last-known location and time',
  'Stop allowing people to search the immediate area (preserve the scent)',
  'Write down your pet\'s description, collar color, microchip number',
  'Have a recent clear photo ready',
  'Do NOT put out food near the house yet (it can alter the search pattern)',
]

export default function HowItWorksPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero */}
      <section className="bg-navy text-white py-20">
        <div className="section-container">
          <div className="max-w-2xl">
            <p className="font-mono text-warm-gold text-sm tracking-widest mb-4">THE PROCESS</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              A Proven Process When Every Minute Counts
            </h1>
            <p className="text-xl text-gray-200 font-body leading-relaxed">
              Our K9 tracking and trailing method follows a precise, science-based
              protocol developed through years of professional training. Here's exactly
              what to expect.
            </p>
          </div>
        </div>
      </section>

      {/* What to do right now */}
      <section className="bg-red-alert/10 border-y-2 border-red-alert/30 py-10">
        <div className="section-container">
          <div className="max-w-3xl">
            <h2 className="font-display text-2xl font-bold text-red-alert mb-4">
              🚨 What to Do Right Now
            </h2>
            <ul className="space-y-3">
              {emergencyChecklist.map((item, i) => (
                <li key={i} className="flex items-start gap-3 font-body text-navy">
                  <span className="shrink-0 w-6 h-6 bg-red-alert text-white text-xs font-bold rounded-full flex items-center justify-center mt-0.5">
                    {i + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Step-by-step */}
      <section className="section-padding bg-cream">
        <div className="section-container">
          <SectionHeader
            title="Step-by-Step: How a Search Works"
            subtitle="From your first call to the action plan delivery, here's what our process looks like."
          />

          <div className="mt-12 space-y-0">
            {steps.map((step, i) => (
              <div
                key={step.step}
                className={`flex gap-6 md:gap-10 relative ${
                  i < steps.length - 1 ? 'pb-10' : ''
                }`}
              >
                {/* Timeline connector */}
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-14 h-14 bg-forest text-white rounded-full flex items-center justify-center text-2xl shadow-md z-10 relative">
                    {step.icon}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-0.5 flex-1 bg-gray-200 mt-2" />
                  )}
                </div>

                {/* Content */}
                <div className="pb-2">
                  <span className="text-xs font-mono text-warm-gold font-bold tracking-widest">
                    STEP {step.step}
                  </span>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-navy mt-1 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 font-body leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What affects a track */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <SectionHeader
            title="What Affects a Track"
            subtitle="Understanding the factors that impact K9 tracking helps set realistic expectations and plan the best strategy."
          />

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {trackFactors.map((factor) => (
              <div key={factor.title} className="bg-cream rounded-sm p-6 border border-gray-100">
                <div className="text-3xl mb-3">{factor.icon}</div>
                <h3 className="font-display text-lg font-bold text-navy mb-2">
                  {factor.title}
                </h3>
                <p className="text-gray-600 font-body text-sm leading-relaxed">
                  {factor.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-forest text-white">
        <div className="section-container text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Ready to Start a Search?
          </h2>
          <p className="text-white/80 text-lg font-body mb-8 max-w-xl mx-auto">
            Don't wait. Contact us now — the sooner we start, the better your
            chances of a successful outcome.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary text-lg py-4 px-8">
              Request a Search →
            </Link>
            <a
              href="tel:+16319735678"
              className="btn-ghost text-lg py-4 px-8 font-mono"
            >
              Call 631-973-LOST
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
