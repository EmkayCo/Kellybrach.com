import { defineField, defineType } from 'sanity'

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'ownerName',
      title: 'Owner Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'petName',
      title: 'Pet Name',
      type: 'string',
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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'text',
      rows: 5,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rating',
      title: 'Rating (1–5)',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).max(5),
      initialValue: 5,
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'outcome',
      title: 'Outcome',
      type: 'string',
      options: {
        list: [
          { title: 'Found', value: 'found' },
          { title: 'Ongoing', value: 'ongoing' },
          { title: 'Other', value: 'other' },
        ],
      },
    }),
    defineField({
      name: 'photo',
      title: 'Pet Photo (optional)',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'petName',
      subtitle: 'ownerName',
      media: 'photo',
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle: `Owner: ${subtitle}`,
        media,
      }
    },
  },
})
