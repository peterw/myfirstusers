import {defineType, defineField, defineArrayMember} from 'sanity'

export const post = defineType({
  type: 'document',
  name: 'post',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
    }),
    defineField({
      type: 'slug',
      name: 'slug',
      options: {source: 'title'},
    }),
    defineField({
      type: 'text',
      name: 'description',
    }),
    defineField({
      type: 'string',
      name: 'duration',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      type: 'array',
      name: 'content',
      title: 'Content',
      of: [
        defineArrayMember({
          type: 'block',
        }),
        defineArrayMember({
          type: 'image',
          fields: [
            {
              type: 'string',
              name: 'caption',
            },
          ],
          options: {hotspot: true},
        }),
      ],
    }),
    defineField({
      type: 'datetime',
      name: 'publishedAt',
    }),
    defineField({
      type: 'array',
      name: 'categories',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'category'}],
        }),
      ],
    }),
  ],
})
