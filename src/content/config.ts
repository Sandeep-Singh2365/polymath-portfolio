import { defineCollection, z } from 'astro:content';

const ledgerCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.enum(['Geopolitics', 'Economics', 'Polity & Governance', 'Technology', 'Tech × Polity', 'Geo-Economics']),
    summary: z.string(),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = {
  'ledger': ledgerCollection,
};
