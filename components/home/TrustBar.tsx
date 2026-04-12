const stats = [
  {
    value: '100+',
    label: 'Searches conducted',
    sub: 'across the Northeast',
  },
  {
    value: '4',
    label: 'Trained K9s',
    sub: 'tracking & trailing specialists',
  },
  {
    value: 'GPS',
    label: 'Every track recorded',
    sub: 'GPS-documented every time',
  },
  {
    value: '7',
    label: 'Days a week',
    sub: 'emergencies don\'t keep office hours',
  },
]

export default function TrustBar() {
  return (
    <section className="bg-white border-b border-gray-100">
      <div className="section-container">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.value}
              className={[
                'flex flex-col justify-start px-6 py-8 min-h-[160px]',
                // Right border — skip last in each row: col 2 (index 1) and col 4 (index 3)
                i % 2 === 0 ? 'border-r border-gray-100' : '',
                // Bottom border on first row (mobile), removed at lg
                i < 2 ? 'border-b border-gray-100 lg:border-b-0' : '',
                // Vertical dividers at lg
                i > 0 && i < 3 ? 'lg:border-r lg:border-gray-100' : '',
              ].join(' ')}
            >
              <div className="w-8 h-0.5 bg-warm-gold mb-4 opacity-70 shrink-0" />
              <p className="stat-number text-4xl md:text-5xl text-warm-gold mb-2 tabular-nums leading-none shrink-0">
                {stat.value}
              </p>
              <p className="font-body font-bold text-navy text-sm mb-1 leading-snug">
                {stat.label}
              </p>
              <p className="font-body text-xs text-gray-400 leading-snug">
                {stat.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
