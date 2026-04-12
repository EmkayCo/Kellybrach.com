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
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h2 className="font-display text-xl text-warm-gold font-bold mb-2">
              Kelly Brach
            </h2>
            <p className="text-sm text-gray-400 mb-4">
              Professional K9 tracking &amp; trailing teams serving the Northeast.
            </p>
            <p className="text-xs text-gray-500">
              Kings Park, NY — Long Island base
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">
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
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">
              Contact
            </h3>
            <div className="space-y-2 text-sm">
              <p>
                <span className="text-gray-400">Phone/Text: </span>
                <a
                  href={phoneHref}
                  className="font-mono text-warm-gold hover:text-yellow-300 transition-colors font-bold"
                >
                  {phone}
                </a>
              </p>
              <p>
                <span className="text-gray-400">Email: </span>
                <a
                  href={`mailto:${email}`}
                  className="text-warm-gold hover:text-yellow-300 transition-colors"
                >
                  {email}
                </a>
              </p>
              <div className="mt-4 p-3 bg-red-alert/20 border border-red-alert/40 rounded text-xs text-red-200">
                <strong className="text-red-300">Scam Notice:</strong> We will always
                send a contract before requesting payment.
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-xs text-gray-500 flex flex-col sm:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} Kelly Brach. All rights reserved.</p>
          <p>
            Formerly{' '}
            <span className="text-gray-400">professionalpettrackers.net</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
