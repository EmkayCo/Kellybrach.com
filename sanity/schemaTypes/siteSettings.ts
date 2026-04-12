import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      description: 'Primary contact phone number',
      initialValue: '631-973-LOST',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      description: 'Primary contact email',
      initialValue: 'kelly@kellybrach.com',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'scamAlertText',
      title: 'Scam Alert Text',
      type: 'text',
      rows: 3,
      initialValue:
        '⚠️ Scam Alert: Only contact us at 631-973-LOST or kelly@kellybrach.com. Do not send money without a contract from us.',
    }),
    defineField({
      name: 'scamAlertActive',
      title: 'Show Scam Alert Banner',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'serviceArea',
      title: 'Service Area Description',
      type: 'string',
      initialValue: 'Kings Park, NY — serving the Northeast',
    }),
  ],
  preview: {
    select: {
      title: 'phone',
    },
    prepare({ title }) {
      return {
        title: 'Site Settings',
        subtitle: title,
      }
    },
  },
})
