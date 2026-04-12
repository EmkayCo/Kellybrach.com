import Link from 'next/link'
import Image from 'next/image'
import type { Dog } from '@/lib/data/dogs'

export default function DogTeamPreview({ dogs }: { dogs: Dog[] }) {
  return (
    <section className="section-padding bg-navy">
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="label-overline text-warm-gold mb-3">The K9 Team</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight">
              Four noses.<br />
              <span className="text-warm-gold italic">Proven in the field.</span>
            </h2>
          </div>
          <Link href="/meet-the-team"
            className="text-gray-300 hover:text-warm-gold transition-colors font-body text-sm font-semibold shrink-0">
            Meet the full team →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {dogs.map((dog) => (
            <div key={dog.slug} className="group relative overflow-hidden rounded-sm aspect-[4/5] bg-forest/20">
              <Image src={dog.photo} alt={`K9 ${dog.name}`} fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 25vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="font-display text-xl font-bold text-white">{dog.name}</p>
                <p className="text-xs text-warm-gold font-body mt-0.5">{dog.specialty}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-white/10 pt-8">
          <p className="font-body text-gray-400 text-sm italic max-w-xl">
            "Every one of these dogs has been trained specifically for lost pet recovery —
            not competition, not detection. Their only job is finding your family member."
          </p>
          <p className="font-body text-warm-gold text-xs mt-2 font-semibold">— Kelly Brach</p>
        </div>
      </div>
    </section>
  )
}
