// Import utils from 'astro:content'
import { z, defineCollection } from 'astro:content'

// Define collection
const articles = defineCollection({
    schema: z.object({
        title: z.string(),
        image: z.object({
            src: z.string(),
            alt: z.string(),
        }),
        author: z.string(),
        publish_date: z.string().transform((str) => new Date(str)),
        description: z.string(),
        draft: z.boolean(false).optional(),
    })
});

// export collections object for registration
export const collections = {
    "articles": articles,
};