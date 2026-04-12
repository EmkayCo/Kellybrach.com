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
    sub: 'documented evidence each time',
  },
  {
    value: '24/7',
    label: 'Available',
    sub: 'emergencies don\'t keep business hours',
  },
]

export default function TrustBar() {
  return (
    <section className="bg-white border-b border-gray-100">
      <div className="section-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-gray-100">
          {stats.map((stat) => (
            <div key={stat.value} className="px-6 py-8 first:pl-0 last:pr-0">
              <p className="stat-number text-4xl md:text-5xl text-forest mb-1">
                {stat.value}
              </p>
              <p className="font-body font-bold text-navy text-sm mb-0.5">
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
