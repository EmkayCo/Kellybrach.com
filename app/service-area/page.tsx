import type { Metadata } from 'next'
import Link from 'next/link'
import SectionHeader from '@/components/shared/SectionHeader'

export const metadata: Metadata = {
  title: 'Service Area',
  description:
    'Kelly Brach serves Kings Park, NY (Long Island) as a home base and travels throughout the Northeast for lost pet K9 tracking. Coverage includes NY, NJ, CT, PA and beyond.',
}

const coveredAreas = [
  { state: 'New York', notes: 'Home base — Long Island, NYC Metro, Hudson Valley, Upstate', priority: true },
  { state: 'New Jersey', notes: 'North & Central NJ', priority: true },
  { state: 'Connecticut', notes: 'Statewide coverage', priority: true },
  { state: 'Pennsylvania', notes: 'Eastern PA, Philadelphia Metro', priority: true },
  { state: 'Massachusetts', notes: 'Select areas — contact to confirm', priority: false },
  { state: 'Rhode Island', notes: 'Available upon request', priority: false },
  { state: 'Other Northeast States', notes: 'Contact us — we travel for the right case', priority: false },
]

export default function ServiceAreaPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-20">
        <div className="section-container">
          <div className="max-w-2xl">
            <p className="font-mono text-warm-gold text-sm tracking-widest mb-4">SERVICE AREA</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Where We Serve
            </h1>
            <p className="text-xl text-gray-200 font-body leading-relaxed">
              Based in Kings Park, NY on Long Island — and traveling throughout
              the Northeast wherever we're needed most.
            </p>
          </div>
        </div>
      </section>

      {/* Map + Intro */}
      <section className="section-padding bg-cream">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeader
                title="Kings Park, NY — Home Base"
                subtitle="Our operations are centered in Kings Park on Long Island's North Shore, giving us rapid access to all of Long Island and easy travel throughout the tri-state area."
              />

              <div className="mt-8 space-y-4 font-body text-gray-700">
                <p>
                  <strong className="text-navy">Long Island:</strong> We cover all of Nassau and Suffolk County as our
                  primary service area. Response times are fastest here.
                </p>
                <p>
                  <strong className="text-navy">New York City & Metro:</strong> We regularly work the five boroughs and
                  Westchester, Rockland, Orange, and surrounding counties.
                </p>
                <p>
                  <strong className="text-navy">Tri-State Area:</strong> New Jersey and Connecticut are frequent
                  destinations — no additional "are you sure you travel here?" hesitation needed.
                </p>
                <p>
                  <strong className="text-navy">Beyond the Northeast:</strong> For the right case, we have traveled
                  further. Don't assume we won't come to you — ask.
                </p>
              </div>
            </div>

            {/* Map embed */}
            <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d355285!2d-73.2440!3d40.8900!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kelly Brach service area — Kings Park, NY and Northeast"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Coverage table */}
      <section className="section-padding bg-white">
        <div className="section-container max-w-2xl">
          <SectionHeader
            title="Northeast Coverage"
            subtitle="Areas we regularly serve."
            centered
          />

          <div className="mt-10 rounded-xl overflow-hidden shadow-sm border border-gray-200">
            {coveredAreas.map((area, i) => (
              <div
                key={area.state}
                className={`flex items-center justify-between p-4 ${
                  i < coveredAreas.length - 1 ? 'border-b border-gray-100' : ''
                } ${area.priority ? 'bg-white' : 'bg-gray-50'}`}
              >
                <div>
                  <p className={`font-semibold font-body ${area.priority ? 'text-navy' : 'text-gray-500'}`}>
                    {area.state}
                    {area.priority && (
                      <span className="ml-2 text-xs bg-forest/10 text-forest px-1.5 py-0.5 rounded font-normal">
                        Primary
                      </span>
                    )}
                  </p>
                  <p className="text-sm text-gray-500 font-body">{area.notes}</p>
                </div>
                <div className={`text-xl ${area.priority ? 'text-forest' : 'text-gray-300'}`}>
                  {area.priority ? '✓' : '~'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel policy */}
      <section className="section-padding bg-cream">
        <div className="section-container max-w-2xl">
          <SectionHeader
            title="Travel Policy"
            subtitle="Transparency about how travel works."
          />
          <div className="mt-8 space-y-4 font-body text-gray-700 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <p>
              Most K9 handlers, including us, charge a travel fee for searches
              outside our immediate area. This covers fuel, time, and overnight
              accommodation if needed for multi-day searches.
            </p>
            <p>
              Travel fees are always disclosed upfront and included in your
              contract before any work begins. There are no surprise charges.
            </p>
            <p>
              For Long Island and the immediate metro area, travel fees are
              minimal. For searches in Connecticut, Pennsylvania, or further,
              fees vary by distance and duration.
            </p>
            <p className="font-semibold text-navy">
              Don't let uncertainty about travel fees stop you from calling. We
              would rather talk through the logistics than have you not reach out
              at all.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-forest text-white">
        <div className="section-container text-center">
          <h2 className="font-display text-3xl font-bold mb-4">
            Not Sure If We Cover Your Area?
          </h2>
          <p className="text-white/80 text-lg font-body mb-8 max-w-lg mx-auto">
            Call us. We'd rather spend 2 minutes on the phone figuring out
            logistics than have you go without help.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:+16319735678" className="btn-primary text-lg py-4 px-8 font-mono">
              Call 631-973-LOST
            </a>
            <Link href="/contact" className="btn-ghost text-lg py-4 px-8">
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
