'use client'

import { useState } from 'react'

export interface FAQCategory {
  title: string
  items: { q: string; a: string }[]
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left py-4 flex items-center justify-between gap-4 hover:text-forest transition-colors"
        aria-expanded={open}
      >
        <span className="font-body font-semibold text-navy text-sm md:text-base">
          {question}
        </span>
        <span className="shrink-0 text-warm-gold text-2xl font-bold leading-none">
          {open ? '−' : '+'}
        </span>
      </button>
      {open && (
        <div className="pb-4 pr-8">
          <p className="text-gray-600 font-body text-sm leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQAccordion({ categories }: { categories: FAQCategory[] }) {
  return (
    <div className="space-y-10">
      {categories.map((category) => (
        <div key={category.title}>
          <h2 className="font-display text-2xl font-bold text-forest mb-4 pb-2 border-b-2 border-warm-gold/30">
            {category.title}
          </h2>
          <div className="bg-white rounded-xl px-6 divide-y divide-gray-100 shadow-sm">
            {category.items.map((item) => (
              <FAQItem key={item.q} question={item.q} answer={item.a} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
