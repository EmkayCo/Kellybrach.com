import { client } from './client'

// ─── Type Definitions ───────────────────────────────────────────────────────

export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  hotspot?: {
    x: number
    y: number
    height: number
    width: number
  }
}

export interface Dog {
  _id: string
  name: string
  slug: { current: string }
  photo?: SanityImage
  breed: string
  trainingBackground?: string
  specialty?: string
  active: boolean
  order: number
}

export interface Testimonial {
  _id: string
  ownerName: string
  petName: string
  petType: 'dog' | 'cat' | 'other'
  location: string
  quote: string
  rating: number
  date?: string
  featured: boolean
  outcome?: string
  photo?: SanityImage
}

export interface GPSTrack {
  _id: string
  title: string
  date: string
  locationLabel: string
  petType?: string
  trackImage?: SanityImage
  embedUrl?: string
  outcomeNote?: string
}

export interface SiteSettings {
  phone: string
  email: string
  scamAlertText?: string
  scamAlertActive: boolean
  serviceArea?: string
}

// ─── GROQ Queries ───────────────────────────────────────────────────────────

export async function getSiteSettings(): Promise<SiteSettings | null> {
  return client.fetch(
    `*[_type == "siteSettings" && _id == "siteSettings"][0]{
      phone,
      email,
      scamAlertText,
      scamAlertActive,
      serviceArea
    }`
  )
}

export async function getAllDogs(): Promise<Dog[]> {
  return client.fetch(
    `*[_type == "dog" && active == true] | order(order asc, name asc){
      _id,
      name,
      slug,
      photo,
      breed,
      trainingBackground,
      specialty,
      active,
      order
    }`
  )
}

export async function getFeaturedTestimonials(limit = 3): Promise<Testimonial[]> {
  return client.fetch(
    `*[_type == "testimonial" && featured == true] | order(_createdAt desc)[0...$limit]{
      _id,
      ownerName,
      petName,
      petType,
      location,
      quote,
      rating,
      date,
      featured,
      outcome,
      photo
    }`,
    { limit: limit - 1 }
  )
}

export async function getAllTestimonials(): Promise<Testimonial[]> {
  return client.fetch(
    `*[_type == "testimonial"] | order(featured desc, _createdAt desc){
      _id,
      ownerName,
      petName,
      petType,
      location,
      quote,
      rating,
      date,
      featured,
      outcome,
      photo
    }`
  )
}

export async function getAllGPSTracks(): Promise<GPSTrack[]> {
  return client.fetch(
    `*[_type == "gpsTrack"] | order(date desc){
      _id,
      title,
      date,
      locationLabel,
      petType,
      trackImage,
      embedUrl,
      outcomeNote
    }`
  )
}

export async function getRecentGPSTracks(limit = 3): Promise<GPSTrack[]> {
  return client.fetch(
    `*[_type == "gpsTrack"] | order(date desc)[0...$limit]{
      _id,
      title,
      date,
      locationLabel,
      petType,
      trackImage,
      embedUrl,
      outcomeNote
    }`,
    { limit: limit - 1 }
  )
}
