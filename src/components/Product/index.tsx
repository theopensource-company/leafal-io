import { SurrealQuery } from '~/library/Surreal';
import { TProductRecord } from '~/library/Types/Product.types';

export function mockupProduct(slug: string): TProductRecord {
    return {
        id: 'product:mockup',
        slug: slug,
        title: 'Celesteia',
        tagline: `Humankind's last hope spreads across the galaxy to rebuild humanity's glory.`,
        overview: `In the wake of a terrible calamity, humankind's last hope spreads across the galaxy to rebuild humanity's glory.`,
        description: `This page reflects a mockup of a product that is intended for testing purposes.
                In its current state, this page does not have any functioning options to purchase or play this game. 
                Don't trust anyone that tells you you can buy this if this text appears. You cannot. Believe me.`,
        logo: `https://raw.githubusercontent.com/leafal-io/${slug}/production/Icon.bmp`,
        thumbnail: `https://raw.githubusercontent.com/leafal-io/${slug}/production/img/thumbnail.jpg`,
        background: `https://raw.githubusercontent.com/leafal-io/${slug}/production/img/background.jpg`,
        pricing: 0.0,
        published: true,
        discoverable: true,
        created: new Date(),
        updated: new Date(),
        platforms: ['Windows', 'Mac OSX', 'Linux'],
        makers: [
            {
                id: 'maker:test',
                slug: 'leafal-io',
                name: 'leafal.io',
                logo: '/images/icons/icon_512x512.png',
            },
        ],
        showcase: [
            {
                type: 'image',
                source: `https://raw.githubusercontent.com/leafal-io/${slug}/production/img/thumbnail.jpg`,
            },
            {
                type: 'image',
                source: `https://pbs.twimg.com/media/Fqh7MYnWcAAmjk0?format=png&name=large`,
            },
            {
                type: 'image',
                source: `https://pbs.twimg.com/media/Fqfnve6WYAAZT19?format=png&name=large`,
            },
        ],
    };
}

export async function getProduct(
    slug: string
): Promise<TProductRecord | null> {
    const result = await SurrealQuery<TProductRecord>(
        `SELECT * FROM product WHERE slug=$slug`,
        { slug }
    );
    return result[0].result ? result[0].result[0] || null : null;
}