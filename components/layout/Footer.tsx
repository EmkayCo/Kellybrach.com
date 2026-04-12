import Link from 'next/link'

interface FooterProps {
  phone?: string
  email?: string
}

export default function Footer({
  phone = '631-973-LOST',
  email = 'kelly@kellybrach.com',
}: FooterProps) {
  const phoneHref = `tel:${phone.replace(/-/g, '').replace('LOST', '5678')}`

  return (
    <footer className="bg-navy text-gray-300 font-body">
      {/* GPS track motif divider */}
      <div className="track-divider opacity-20" />

      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Brand */}
          <div>
            <h2 className="font-display text-xl text-warm-gold font-bold mb-1">
              Kelly Brach
            </h2>
            <p className="label-overline text-gray-600 text-[10px] mb-4">K9 Lost Pet Handler · Kings Park, NY</p>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Professional K9 tracking &amp; trailing for lost pets across Long Island and the Northeast.
              Scent-specific. GPS-documented. Real leads.
            </p>
            <p className="text-xs text-gray-600">
              Serving NY · NJ · CT · PA
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-xs uppercase tracking-widest">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                ['/', 'Home'],
                ['/how-it-works', 'How It Works'],
                ['/meet-the-team', 'Meet the Team'],
                ['/success-stories', 'Success Stories'],
                ['/gps-tracks', 'GPS Tracks'],
                ['/faq', 'FAQ'],
                ['/service-area', 'Service Area'],
                ['/contact', 'Contact'],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-warm-gold transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-xs uppercase tracking-widest">
              Contact
            </h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-gray-500 text-xs mb-1 label-overline">Call or text</p>
                <a
                  href={phoneHref}
                  className="font-mono text-lg text-warm-gold hover:text-yellow-300 transition-colors font-bold tracking-tight"
                >
                  {phone}
                </a>
                <p className="text-gray-500 text-xs mt-0.5">7 days a week</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs mb-1 label-overline">Email</p>
                <a
                  href={`mailto:${email}`}
                  className="text-warm-gold hover:text-yellow-300 transition-colors"
                >
                  {email}
                </a>
              </div>
              <div className="mt-5 p-3 bg-red-900/30 border border-red-800/40 rounded-sm text-xs text-red-200 leading-snug">
                <strong className="text-red-300 block mb-1">Scam Notice</strong>
                We always send a written contract before requesting any payment.
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-10 pt-6 text-xs text-gray-600 flex flex-col sm:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} Kelly Brach. All rights reserved.</p>
          <p>
            Formerly{' '}
            <span className="text-gray-500">professionalpettrackers.net</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
