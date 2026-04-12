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
    sub: 'documented evidence every time',
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
            <div key={stat.value}
              className={`px-6 py-8 relative ${i < stats.length - 1 ? 'border-r border-gray-100' : ''} ${i >= 2 ? 'border-t border-gray-100 lg:border-t-0' : ''}`}>
              {/* Gold accent line at top */}
              <div className="w-8 h-0.5 bg-warm-gold mb-4 opacity-80" />
              <p className="stat-number text-4xl md:text-5xl text-warm-gold mb-2 tabular-nums">
                {stat.value}
              </p>
              <p className="font-body font-bold text-navy text-sm mb-1">
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
