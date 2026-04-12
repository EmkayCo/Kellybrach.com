interface UrgencyStripProps {
  phone?: string
}

export default function UrgencyStrip({
  phone = '631-973-LOST',
}: UrgencyStripProps) {
  const phoneHref = `tel:${phone.replace(/-/g, '').replace('LOST', '5678')}`

  return (
    <div className="bg-forest text-white py-4">
      <div className="section-container text-center">
        <p className="font-body text-base md:text-lg font-semibold">
          A lost pet is a time-sensitive emergency. Every hour matters.{' '}
          <span className="whitespace-nowrap">
            Call or text:{' '}
            <a
              href={phoneHref}
              className="font-mono text-warm-gold hover:text-yellow-300 transition-colors font-bold ml-1"
            >
              {phone}
            </a>
          </span>
        </p>
      </div>
    </div>
  )
}
