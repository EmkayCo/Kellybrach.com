import Link from 'next/link'
import type { Dog } from '@/sanity/lib/queries'
import DogCard from '@/components/shared/DogCard'
import SectionHeader from '@/components/shared/SectionHeader'

interface DogTeamPreviewProps {
  dogs: Dog[]
}

export default function DogTeamPreview({ dogs }: DogTeamPreviewProps) {
  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <SectionHeader
          title="Meet the K9 Team"
          subtitle="Our trained tracking and trailing dogs are the heart of every search. Each K9 is specially trained for lost pet recovery."
          centered
        />

        {dogs.length > 0 ? (
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
            {dogs.slice(0, 4).map((dog) => (
              <DogCard key={dog._id} dog={dog} />
            ))}
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Enzo', 'Maggie', 'Sonja', 'Dino'].map((name) => (
              <div
                key={name}
                className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100"
              >
                <div className="aspect-square bg-forest/10 flex items-center justify-center">
                  <span className="text-5xl">🐕</span>
                </div>
                <div className="p-4">
                  <h3 className="font-display text-xl font-bold text-navy">{name}</h3>
                  <p className="text-sm text-gray-400 italic">Profile coming soon</p>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-10 text-center">
          <Link
            href="/meet-the-team"
            className="btn-secondary inline-flex"
          >
            Meet the Full Team →
          </Link>
        </div>
      </div>
    </section>
  )
}
