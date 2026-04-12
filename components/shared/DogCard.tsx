import Image from 'next/image'
import type { Dog } from '@/lib/data/dogs'

export default function DogCard({ dog }: { dog: Dog }) {
  return (
    <div className="bg-white rounded-sm overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
      <div className="relative aspect-square bg-forest/10 overflow-hidden">
        <Image
          src={dog.photo}
          alt={`K9 ${dog.name}`}
          fill
          className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
        />
        {/* Breed reveal on hover */}
        <div className="absolute bottom-0 left-0 right-0 px-3 py-2 bg-gradient-to-t from-navy/90 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <p className="font-body text-xs text-gray-300 leading-snug">{dog.breed}</p>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-baseline justify-between gap-2 mb-1">
          <h3 className="font-display text-xl font-bold text-navy">{dog.name}</h3>
          <span className="shrink-0 label-overline text-warm-gold text-[9px]">{dog.specialty}</span>
        </div>
        <p className="text-xs text-gray-500 font-semibold tracking-wide uppercase mb-3">{dog.breed}</p>
        <div className="w-6 h-px bg-warm-gold mb-3 opacity-60" />
        <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">{dog.trainingBackground}</p>
      </div>
    </div>
  )
}
