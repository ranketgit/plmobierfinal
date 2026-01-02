import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string(),
    date: z.date(),
    image: z.string().optional(),
    categories: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  blog: blogCollection,
};