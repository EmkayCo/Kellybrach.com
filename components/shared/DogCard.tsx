import Image from 'next/image'
import type { Dog } from '@/lib/data/dogs'

export default function DogCard({ dog }: { dog: Dog }) {
  return (
    <div className="bg-white rounded-sm overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative aspect-square bg-forest/10">
        <Image
          src={dog.photo}
          alt={`K9 ${dog.name}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
        />
      </div>
      <div className="p-4">
        <h3 className="font-display text-xl font-bold text-navy mb-0.5">{dog.name}</h3>
        <p className="text-xs text-forest font-semibold tracking-wide uppercase mb-2">{dog.breed}</p>
        <p className="text-xs text-warm-gold font-body italic mb-2">{dog.specialty}</p>
        <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">{dog.trainingBackground}</p>
      </div>
    </div>
  )
}
