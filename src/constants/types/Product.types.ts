import { z } from 'zod';
import { record } from './Common.types';

const product: string = /* surrealql */ `
    DEFINE TABLE product SCHEMAFULL
        PERMISSIONS
            FOR select WHERE (published AND (discoverable OR id = $product_id OR slug = $product_slug)) OR $scope = 'admin'
            FOR update, delete WHERE $scope = 'admin';
    
    DEFINE FIELD slug               ON TABLE product TYPE string;

    DEFINE FIELD title              ON TABLE product TYPE string;
    DEFINE FIELD tagline            ON TABLE product TYPE option<string>;
    DEFINE FIELD overview           ON TABLE product TYPE option<string>;
    DEFINE FIELD description        ON TABLE product TYPE option<string>;

    DEFINE FIELD logo               ON TABLE product TYPE string;
    DEFINE FIELD thumbnail          ON TABLE product TYPE option<string>;
    DEFINE FIELD background         ON TABLE product TYPE option<string>;

    DEFINE FIELD pricing            ON TABLE product TYPE number;

    DEFINE FIELD published          ON TABLE product TYPE bool DEFAULT false;
    DEFINE FIELD discoverable       ON TABLE product TYPE bool DEFAULT false;

    DEFINE FIELD links              ON TABLE product TYPE option<array>;
    DEFINE FIELD links.*            ON TABLE product TYPE string;

    DEFINE FIELD carousel           ON TABLE product TYPE option<array>;
    DEFINE FIELD carousel.*         ON TABLE product TYPE object;
    DEFINE FIELD carousel.*.type    ON TABLE product TYPE string ASSERT $value INSIDE ['image', 'video'];
    DEFINE FIELD carousel.*.source  ON TABLE product TYPE string ASSERT $value != NONE;

    DEFINE FIELD created            ON TABLE product VALUE $before OR time::now();
    DEFINE FIELD updated            ON TABLE product VALUE time::now();

    DEFINE INDEX slug ON TABLE product COLUMNS slug UNIQUE;
`;

export const CarouselItem = z.object({
    source: z.string().url(),
    type: z.union([z.literal('image'), z.literal('video')]),
});
export type CarouselItem = z.infer<typeof CarouselItem>;

// TODO: Product platform type, validated by splitting a string by ':', then checking for 'windows', 'osx' or 'linux' on left hand, and architectures on right hand.

export const Product = z.object({
    id: record('product'),

    slug: z.string(),

    title: z.string(),
    tagline: z.string().optional(),
    overview: z.string().optional(),
    description: z.string().optional(),

    logo: z.string().url(),
    thumbnail: z.string().url().optional(),
    background: z.string().url().optional(),

    pricing: z.number(),

    published: z.boolean(),
    discoverable: z.boolean(),

    created: z.coerce.date(),
    updated: z.coerce.date(),

    // platforms

    links: z.array(z.string().url()).optional(),

    carousel: z.array(CarouselItem).optional(),
});

export type Product = z.infer<typeof Product>;

export default product;
