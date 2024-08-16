import { defineType, defineField } from 'sanity';

export const category = defineType({
  type: 'document',
  name: 'category',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
    }),
    defineField({
      type: 'slug',
      name: 'slug',
      options: { source: 'title' },
    }),
    defineField({
      type: 'number',
      name: 'order',
    }),
    defineField({
      type: 'reference',
      name: 'parent',
      to: [{ type: 'category' }],
    }),
  ],
});
