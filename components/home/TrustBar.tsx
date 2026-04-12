const stats = [
  { value: '1500+', label: 'Searches conducted' },
  { value: '6',     label: 'Trained K9s' },
  { value: 'GPS',   label: 'Every track documented' },
  { value: '7',     label: 'Days a week' },
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
                'flex flex-col justify-center px-5 py-7 h-[148px]',
                i % 2 === 0 ? 'border-r border-gray-100' : '',
                i < 2      ? 'border-b border-gray-100 lg:border-b-0' : '',
                i > 0 && i < 3 ? 'lg:border-r lg:border-gray-100' : '',
              ].join(' ')}
            >
              <div className="w-7 h-0.5 bg-warm-gold mb-3 opacity-70" />
              <p className="font-display font-bold text-warm-gold leading-none mb-2 text-4xl md:text-5xl tabular-nums">
                {stat.value}
              </p>
              <p className="font-body font-semibold text-navy text-xs tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
