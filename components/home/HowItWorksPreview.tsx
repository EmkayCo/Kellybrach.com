import Link from 'next/link'

const steps = [
  {
    n: '01',
    title: 'You call us the moment they go missing',
    body: "Not after you've looked for a day. The scent trail fades with every passing hour — and every boot that walks through the area.",
  },
  {
    n: '02',
    title: 'Our K9 picks up the exact trail your pet left',
    body: 'Using a scent article sealed in a bag. Not a general "animal" scent — the specific scent of your specific pet.',
  },
  {
    n: '03',
    title: 'You get a GPS track and a real action plan',
    body: 'We map the exact direction of travel. That tells us where to set traps, where to post flyers, and where to search next.',
  },
]

export default function HowItWorksPreview() {
  return (
    <section className="section-padding bg-cream grain-overlay">
      <div className="section-container">

        {/* Editorial header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="label-overline text-warm-gold mb-3">The Process</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy leading-tight max-w-md">
              What we do the moment you call
            </h2>
          </div>
          <Link
            href="/how-it-works"
            className="text-forest font-body font-semibold text-sm hover:text-warm-gold transition-colors flex items-center gap-1 shrink-0"
          >
            Full process walkthrough →
          </Link>
        </div>

        {/* Steps — horizontal on desktop, vertical on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-px bg-gray-200 rounded-lg overflow-hidden shadow-sm">
          {steps.map((step) => (
            <div key={step.n} className="bg-white p-8 relative">
              {/* Step number — large watermark */}
              <span className="absolute top-4 right-6 font-display text-7xl font-bold text-gray-50 select-none leading-none">
                {step.n}
              </span>
              <div className="relative z-10">
                <div className="w-8 h-0.5 bg-warm-gold mb-5" />
                <h3 className="font-display text-xl font-bold text-navy leading-snug mb-3">
                  {step.title}
                </h3>
                <p className="font-body text-sm text-gray-600 leading-relaxed">
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Track line divider */}
        <div className="track-divider mt-14" />

      </div>
    </section>
  )
}
