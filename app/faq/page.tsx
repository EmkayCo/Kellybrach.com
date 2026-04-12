import type { Metadata } from 'next'
import Link from 'next/link'
import FAQAccordion from '@/components/faq/FAQAccordion'
import type { FAQCategory } from '@/components/faq/FAQAccordion'

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Frequently asked questions about professional K9 lost pet tracking — how it works, about the dogs, scent articles, costs, and what to expect.',
}

const faqCategories: FAQCategory[] = [
  {
    title: 'How It Works',
    items: [
      {
        q: 'What exactly does a K9 tracker do?',
        a: 'A trained K9 tracking or trailing dog uses scent given from a specific article (an item your pet has touched) to follow the exact path your pet traveled. Unlike human searchers who guess where a pet went, a properly trained K9 follows the actual scent trail left by your pet. This tells us the direction of travel, where your pet crossed roads, and where they ended up.',
      },
      {
        q: 'What is the difference between tracking and trailing?',
        a: 'Tracking dogs follow the ground scent (disturbed vegetation, skin cells left on the ground). Trailing dogs follow the scent cone carried in the air and deposited from a moving animal. Both are effective; our dogs are trained in both disciplines and the handler selects the best approach based on conditions.',
      },
      {
        q: 'How quickly should I call you?',
        a: "Immediately — the moment you realize your pet is missing. Do not wait to see if they come back. Scent trails degrade over time with weather, foot traffic, and temperature changes. The fresher the trail, the more information our K9 can extract. We've worked cold trails 3+ days old, but sooner is always better.",
      },
      {
        q: "Do you guarantee you'll find my pet?",
        a: "No ethical K9 handler can guarantee a find — too many variables are outside our control (time elapsed, weather, terrain, where the pet ultimately went). What we guarantee is a professional, thorough K9 search using proven methodology, with GPS documentation of everything the dog finds.",
      },
      {
        q: 'What happens after the K9 track?',
        a: "Based on what the track reveals, we build a targeted action plan: exact zones for humane trap placement, precise areas to concentrate flyer distribution, behavioral guidance about your pet's likely pattern, and a schedule for re-checks. The GPS data from the track is shared with you.",
      },
    ],
  },
  {
    title: 'About the Dogs',
    items: [
      {
        q: 'Are your dogs professionally trained?',
        a: 'Yes. All our K9s go through extensive professional training in tracking and trailing methodology. This is not "my dog has a good nose" — it\'s structured, systematic training that teaches the dog to follow a specific scent article to source, ignore distractions, and work in real-world conditions.',
      },
      {
        q: 'What breeds do you use?',
        a: 'Our current team includes dogs of several breeds known for scenting ability. Breed matters less than the specific training and drive of the individual dog. Our dogs are selected and trained specifically for lost pet recovery work.',
      },
      {
        q: 'Can your dogs track cats?',
        a: "Yes. Our dogs are trained to follow the scent article you provide, which means they can be put on the trail of any animal as long as you can provide a good scent article. Cats are common — we work many cat cases.",
      },
      {
        q: 'How many dogs will come on a search?',
        a: 'Typically one K9 works at a time to avoid scent contamination. In some cases with complex terrain or large search areas, we may use multiple dogs working separately. Your handler will assess and determine the best approach.',
      },
    ],
  },
  {
    title: 'Scent & Tracking Conditions',
    items: [
      {
        q: 'What makes a good scent article?',
        a: "A recently worn/used item that your pet slept on or wore — their bed, a worn blanket, a toy they chewed. The item should not have been washed and should not have been heavily touched by other people. Place it immediately in a clean, sealed bag.",
      },
      {
        q: 'Does rain ruin a track?',
        a: "Not necessarily. Rain can wash surface scent but can also preserve scent in the ground. Overcast, cool, and slightly humid conditions are often ideal for tracking. We work in all weather — don't wait for 'better' conditions.",
      },
      {
        q: 'What if lots of people searched the area already?',
        a: "Heavy foot traffic does contaminate a trail, but a properly trained K9 can still work through it. Let us know the areas that were heavily searched so we can factor that into our approach. Ideally, limit foot traffic in the immediate last-known location before our arrival.",
      },
      {
        q: 'Can you track on pavement?',
        a: 'Yes. Scent settles on hard surfaces, though it degrades faster there than in vegetation. Pavement tracks require more experience but our dogs are trained to work all surfaces.',
      },
    ],
  },
  {
    title: 'Costs & Logistics',
    items: [
      {
        q: 'How much does a search cost?',
        a: "Fees vary depending on location, travel, and scope of the search. We discuss pricing transparently before any commitment, and a contract is always provided before any payment is requested. If someone claiming to be us asks for money without sending a contract first — that is a scammer.",
      },
      {
        q: 'Do you travel outside of Long Island?',
        a: 'Yes. We regularly travel throughout the Northeast — NY, NJ, CT, PA — and beyond for the right case. Travel fees apply for searches outside of our home base in Kings Park, NY. Contact us and we can discuss your specific location.',
      },
      {
        q: 'What are your hours?',
        a: "Lost pets are an emergency and don't happen on business hours. We are available 7 days a week. Response time varies by case volume but we treat every inquiry as urgent. For immediate situations, call or text — don't just email.",
      },
      {
        q: 'Will you work with law enforcement or animal control?',
        a: 'Yes. We regularly coordinate with animal control officers and local police when appropriate. Our GPS documentation can also be valuable evidence in cases where a pet was stolen.',
      },
    ],
  },
  {
    title: 'What to Expect',
    items: [
      {
        q: 'How long does a search take?',
        a: "A typical search is 2–4 hours on-site, though complex cases with long trails or difficult terrain may take longer. We don't cut corners — the K9 works until the trail ends or conditions make further tracking unproductive.",
      },
      {
        q: 'Should I come with you during the search?',
        a: "One person familiar with the pet can accompany us at a distance. Too many people create scent contamination and can distract the working dog. Children and other dogs should not be present during the active track.",
      },
      {
        q: "What if the dog loses the trail?",
        a: "A K9 losing a trail is data, not failure. It tells us something — possibly a road crossing, a vehicle pickup, or a terrain change. We work the area methodically to attempt to re-acquire the trail or understand what happened at that point.",
      },
      {
        q: 'What if my pet was stolen?',
        a: "Our K9s can be used in theft cases to document that a pet was removed from a location (e.g., leaving a yard in a specific direction that suggests a vehicle pickup). Contact us immediately — the sooner a trail is worked in a theft case, the more information we can recover.",
      },
    ],
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqCategories.flatMap((cat) =>
    cat.items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    }))
  ),
}

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-navy text-white py-20">
        <div className="section-container max-w-2xl">
          <p className="font-mono text-warm-gold text-sm tracking-widest mb-4">
            FREQUENTLY ASKED QUESTIONS
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Everything You Need to Know
          </h1>
          <p className="text-xl text-gray-200 font-body leading-relaxed">
            Questions about our process, our K9 team, what to expect, and how
            to give your pet the best chance of being found.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="section-padding bg-cream">
        <div className="section-container max-w-3xl">
          <FAQAccordion categories={faqCategories} />
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-forest text-white">
        <div className="section-container text-center">
          <h2 className="font-display text-3xl font-bold mb-4">
            Still Have Questions?
          </h2>
          <p className="text-white/80 text-lg font-body mb-8 max-w-lg mx-auto">
            Call or text us directly — we're happy to discuss your situation and
            explain how we can help.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary text-lg py-4 px-8">
              Contact Us →
            </Link>
            <a href="tel:+16319735678" className="btn-ghost text-lg py-4 px-8 font-mono">
              631-973-LOST
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
