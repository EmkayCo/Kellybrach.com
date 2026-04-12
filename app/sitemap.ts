import type { MetadataRoute } from 'next'
import { LOCATIONS } from '@/lib/data/locations'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://kellybrach.com'
  const now = new Date()

  const corePages: MetadataRoute.Sitemap = [
    {
      url: base,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${base}/how-it-works`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${base}/meet-the-team`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${base}/success-stories`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${base}/gps-tracks`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${base}/faq`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${base}/service-area`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${base}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // Locations index
    {
      url: `${base}/locations`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
  ]

  // Individual location pages — tier 1 get higher priority
  const locationPages: MetadataRoute.Sitemap = LOCATIONS.map((loc) => ({
    url: `${base}/locations/${loc.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: loc.tier === 1 ? 0.85 : loc.tier === 2 ? 0.75 : 0.65,
  }))

  return [...corePages, ...locationPages]
}
