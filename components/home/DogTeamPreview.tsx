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
              Six noses.<br />
              <span className="text-warm-gold italic">Proven in the field.</span>
            </h2>
          </div>
          <Link href="/meet-the-team"
            className="text-gray-300 hover:text-warm-gold transition-colors font-body text-sm font-semibold shrink-0">
            Meet the full team →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {dogs.map((dog) => (
            <div key={dog.slug} className="group relative overflow-hidden rounded-sm aspect-[4/5] bg-navy/20 shadow-lg">
              <Image src={dog.photo} alt={`K9 ${dog.name}`} fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 25vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent" />
              <div className="absolute inset-0 bg-navy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="font-display text-xl font-bold text-white">{dog.name}</p>
                <p className="text-xs text-warm-gold font-body mt-0.5">{dog.specialty}</p>
                <p className="text-xs text-gray-300 font-body mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">{dog.breed}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-white/10 pt-8">
          <p className="font-body text-gray-400 text-sm italic max-w-xl">
            "Enzo and Sonja started it. Maggie is Sonja's daughter. Dino is Maggie and Enzo's son.
            Elenor and Nova round out the team. Six dogs — one mission."
          </p>
          <p className="font-body text-warm-gold text-xs mt-2 font-semibold">— Kelly Brach</p>
        </div>
      </div>
    </section>
  )
}
