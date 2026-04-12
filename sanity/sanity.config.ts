import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  title: 'Kelly Brach — Lost Pet K9 Handler',
  schema: {
    types: schemaTypes,
  },
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Site Settings')
              .id('siteSettings')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
              ),
            S.divider(),
            S.listItem()
              .title('K9 Team')
              .schemaType('dog')
              .child(S.documentTypeList('dog').title('K9 Dog Profiles')),
            S.listItem()
              .title('Testimonials')
              .schemaType('testimonial')
              .child(
                S.documentTypeList('testimonial').title('Testimonials')
              ),
            S.listItem()
              .title('GPS Tracks')
              .schemaType('gpsTrack')
              .child(S.documentTypeList('gpsTrack').title('GPS Tracks')),
          ]),
    }),
    visionTool(),
  ],
})
