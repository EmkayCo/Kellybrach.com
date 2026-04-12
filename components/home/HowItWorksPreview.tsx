import Link from 'next/link'
import SectionHeader from '@/components/shared/SectionHeader'

const steps = [
  {
    step: '01',
    title: 'Scent Article',
    description:
      'You provide a sealed scent article belonging exclusively to your pet — a worn item they\'ve touched recently.',
    icon: '🧶',
  },
  {
    step: '02',
    title: 'K9 Track',
    description:
      'Our trained K9 picks up the scent at the last-known location and begins tracking your pet\'s trail with GPS recording.',
    icon: '🐕',
  },
  {
    step: '03',
    title: 'Action Plan',
    description:
      'We provide a full action plan — targeted flyer zones, trap placement recommendations, and scheduled re-checks.',
    icon: '📋',
  },
]

export default function HowItWorksPreview() {
  return (
    <section className="section-padding bg-cream">
      <div className="section-container">
        <SectionHeader
          title="A Proven Process When Every Minute Counts"
          subtitle="Our K9 tracking method follows a precise protocol designed to maximize the chance of finding your pet."
          centered
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={step.step} className="relative flex flex-col items-center text-center">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-warm-gold/30" />
              )}

              <div className="relative z-10 w-20 h-20 bg-forest rounded-full flex items-center justify-center text-3xl mb-4 shadow-md">
                {step.icon}
              </div>

              <span className="text-xs font-mono text-warm-gold font-bold tracking-widest mb-1">
                STEP {step.step}
              </span>
              <h3 className="font-display text-xl font-bold text-navy mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 font-body leading-relaxed text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/how-it-works"
            className="text-forest font-semibold hover:text-warm-gold transition-colors inline-flex items-center gap-1"
          >
            Learn more about the process →
          </Link>
        </div>
      </div>
    </section>
  )
}
