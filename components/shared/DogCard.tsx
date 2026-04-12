import Image from 'next/image'
import type { Dog } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'

interface DogCardProps {
  dog: Dog
}

export default function DogCard({ dog }: DogCardProps) {
  const imageUrl = dog.photo
    ? urlFor(dog.photo).width(400).height(400).fit('crop').url()
    : null

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative aspect-square bg-gray-100">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={`K9 ${dog.name}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          />
        ) : (
          <div className="flex items-center justify-center h-full bg-forest/10">
            <svg
              className="w-20 h-20 text-forest/30"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4.5 11.5A.5.5 0 015 11h.5a.5.5 0 010 1H5a.5.5 0 01-.5-.5zm13 0a.5.5 0 01.5-.5h.5a.5.5 0 010 1H18a.5.5 0 01-.5-.5zM12 5c1.38 0 2.5 1.12 2.5 2.5S13.38 10 12 10s-2.5-1.12-2.5-2.5S10.62 5 12 5zM6 14.5C6 12.57 8.69 11 12 11s6 1.57 6 3.5V16H6v-1.5z" />
            </svg>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-display text-xl font-bold text-navy mb-1">
          {dog.name}
        </h3>
        <p className="text-sm text-forest font-semibold mb-2">{dog.breed}</p>
        {dog.specialty && (
          <p className="text-sm text-gray-600 mb-2 italic">{dog.specialty}</p>
        )}
        {dog.trainingBackground && (
          <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
            {dog.trainingBackground}
          </p>
        )}
      </div>
    </div>
  )
}
