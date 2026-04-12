interface UrgencyStripProps {
  phone?: string
}

export default function UrgencyStrip({
  phone = '631-973-LOST',
}: UrgencyStripProps) {
  const phoneHref = `tel:${phone.replace(/-/g, '').replace('LOST', '5678')}`

  return (
    <div className="bg-navy border-t border-b border-white/10 relative overflow-hidden">
      {/* Red urgency stripe */}
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-red-600" />

      <div className="section-container py-4 pl-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 flex-shrink-0 w-2 h-2 rounded-full bg-red-500 animate-pulse mt-1.5" />
          <div>
            <p className="font-body text-white font-semibold text-sm md:text-base leading-snug">
              Scent trails degrade every hour your pet is missing.
            </p>
            <p className="font-body text-gray-400 text-xs mt-0.5">
              <span className="text-warm-gold font-semibold">Time is the most critical factor.</span>
              {' '}Call now — don't wait until tomorrow.
            </p>
          </div>
        </div>
        <a
          href={phoneHref}
          className="shrink-0 font-mono text-xl md:text-2xl font-bold text-warm-gold hover:text-red-300 transition-colors tracking-tight"
        >
          {phone}
        </a>
      </div>
    </div>
  )
}
