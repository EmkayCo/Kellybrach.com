import type { Metadata } from 'next'
import ContactForm from '@/components/forms/ContactForm'
import { getSiteSettings } from '@/sanity/lib/queries'

export const metadata: Metadata = {
  title: 'Contact — Request a Search',
  description:
    'Your pet is missing — contact Kelly Brach now. Call or text 631-973-LOST or fill out the form for K9 tracking and trailing service in Long Island, NY and the Northeast.',
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Kelly Brach — Lost Pet K9 Handler',
  telephone: '+16319735678',
  email: 'kelly@kellybrach.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Kings Park',
    addressRegion: 'NY',
    addressCountry: 'US',
  },
  url: 'https://kellybrach.com',
}

export default async function ContactPage() {
  const settings = await getSiteSettings()
  const phone = settings?.phone ?? '631-973-LOST'
  const email = settings?.email ?? 'kelly@kellybrach.com'
  const phoneHref = `tel:${phone.replace(/-/g, '').replace('LOST', '5678')}`

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Hero */}
      <section className="bg-red-alert text-white py-16">
        <div className="section-container text-center">
          <p className="font-mono text-red-200 text-sm tracking-widest mb-3">EMERGENCY CONTACT</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Your Pet Is Missing — Contact Us Now
          </h1>
          <p className="text-xl text-red-100 font-body max-w-lg mx-auto mb-8">
            Time is critical. Every hour matters. Don't wait.
          </p>
          <a
            href={phoneHref}
            className="inline-block font-mono text-3xl md:text-4xl font-bold text-white hover:text-red-200 transition-colors border-b-2 border-white hover:border-red-200 pb-1"
          >
            {phone}
          </a>
          <p className="text-red-200 text-sm font-body mt-3">Call or text — available 7 days a week</p>
        </div>
      </section>

      {/* Main content */}
      <section className="section-padding bg-cream">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="font-display text-2xl font-bold text-navy mb-2">
                Send Us a Message
              </h2>
              <p className="text-gray-600 font-body mb-6">
                Fill out the form below and Kelly will respond as quickly as possible.
                For immediate assistance, call or text directly.
              </p>
              <ContactForm phone={phone} />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">

              {/* Direct contact */}
              <div className="bg-navy text-white rounded-xl p-6">
                <h3 className="font-display text-xl font-bold mb-4">Direct Contact</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Phone / Text</p>
                    <a
                      href={phoneHref}
                      className="font-mono text-2xl font-bold text-warm-gold hover:text-yellow-300 transition-colors"
                    >
                      {phone}
                    </a>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Email</p>
                    <a
                      href={`mailto:${email}`}
                      className="text-warm-gold hover:text-yellow-300 transition-colors text-sm"
                    >
                      {email}
                    </a>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Based In</p>
                    <p className="text-sm text-gray-200">Kings Park, NY (Long Island)</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Availability</p>
                    <p className="text-sm text-gray-200">7 days a week · Lost pets don't keep business hours</p>
                  </div>
                </div>
              </div>

              {/* What to have ready */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-display text-lg font-bold text-navy mb-3">
                  Have Ready When You Call
                </h3>
                <ul className="space-y-2">
                  {[
                    'A scent article in a sealed bag (worn item, unwashed)',
                    'Exact last-known location',
                    'Time pet was last seen',
                    'Pet\'s name, breed, and description',
                    'Recent clear photo',
                    'Your exact location for us to meet you',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm font-body text-gray-700">
                      <span className="text-forest mt-0.5 shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Scam reminder */}
              <div className="bg-red-alert/10 border border-red-alert/30 rounded-xl p-5">
                <h3 className="font-semibold text-red-900 font-body text-sm mb-2">
                  ⚠️ Scam Protection
                </h3>
                <p className="text-red-800 text-xs font-body leading-relaxed">
                  We will always send a written contract from{' '}
                  <span className="font-mono font-bold">kelly@kellybrach.com</span> before
                  requesting any payment. Never send money to anyone without a signed
                  contract from us first.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
