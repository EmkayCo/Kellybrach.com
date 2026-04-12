interface UrgencyStripProps {
  phone?: string
}

export default function UrgencyStrip({
  phone = '631-973-LOST',
}: UrgencyStripProps) {
  const phoneHref = `tel:${phone.replace(/-/g, '').replace('LOST', '5678')}`

  return (
    <div className="bg-forest relative overflow-hidden">
      {/* Subtle racing stripe */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-warm-gold" />

      <div className="section-container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-body text-white font-semibold text-sm md:text-base">
          Scent trails degrade every hour your pet is missing.{' '}
          <span className="text-warm-gold font-bold">Time is the most critical factor.</span>
        </p>
        <a
          href={phoneHref}
          className="shrink-0 font-mono text-xl md:text-2xl font-bold text-white hover:text-warm-gold transition-colors border-b border-white/30 hover:border-warm-gold pb-0.5"
        >
          {phone}
        </a>
      </div>
    </div>
  )
}
