import { record } from './Common.types';
import { z } from 'zod';

export const CarouselItem = z.object({
    source: z.string().url(),
    type: z.union([z.literal('image'), z.literal('video')])
});
export type CarouselItem = z.infer<typeof CarouselItem>;

// TODO: Product platform type, validated by splitting a string by ':', then checking for 'windows', 'osx' or 'linux' on left hand, and architectures on right hand.

export const Product = z.object({
    id: record('product'),

    slug: z.string(),
    title: z.string(),
    tagline: z.string().optional(),
    overview: z.string(),
    description: z.string(),

    logo: z.string().url(),
    thumbnail: z.string().url().optional(),
    background: z.string().url().optional(),

    pricing: z.number(),
    
    published: z.boolean(),
    discoverable: z.boolean(),

    created: z.date(),
    updated: z.date(),

    // platforms
    
    links: z.array(z.string().url()),

    carousel: z.array(CarouselItem)
});

export type Product = z.infer<typeof Product>;
