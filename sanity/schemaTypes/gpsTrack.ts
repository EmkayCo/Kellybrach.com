import { defineField, defineType } from 'sanity'

export const gpsTrack = defineType({
  name: 'gpsTrack',
  title: 'GPS Track',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'locationLabel',
      title: 'Location Label',
      type: 'string',
      description: 'City/State only — e.g., "Long Island, NY"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'petType',
      title: 'Pet Type',
      type: 'string',
      options: {
        list: [
          { title: 'Dog', value: 'dog' },
          { title: 'Cat', value: 'cat' },
          { title: 'Other', value: 'other' },
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'trackImage',
      title: 'Track Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'embedUrl',
      title: 'Embed URL',
      type: 'url',
      description: 'Optional: iFrame or external map URL for GPS track',
    }),
    defineField({
      name: 'outcomeNote',
      title: 'Outcome Note',
      type: 'string',
      description: 'Brief description of the outcome',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'locationLabel',
      media: 'trackImage',
    },
  },
})
