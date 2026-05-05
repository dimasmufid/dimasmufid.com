import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional()
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    featured: z.boolean(),
    archieve: z.boolean().default(false),
    demoURL: z.string().optional(),
    demoImage: z.string().optional(),
    repoURL: z.string().optional()
  }),
});

export const collections = { blog, projects };
