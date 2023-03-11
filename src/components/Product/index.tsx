import { MockupProduct } from 'constants/Types/Products.types';

export function mockup(slug: string): MockupProduct {
    return {
        slug: slug,
        title: slug.substring(0, 1).toUpperCase() + slug.substring(1),
        tagline: 'This is a mockup product.',
        overview:
            'This is a mockup of a product intended for testing purposes, it is not a real product and you cannot buy or play it.',
        description:
            'This is a mockup of a product intended for testing purposes, it is not a real product and you cannot buy or play it. Please, do not believe anyone that tells you you can buy this. You cannot. Believe me.',
        logo: `https://raw.githubusercontent.com/leafal-io/${slug}/production/Icon.bmp`,
        thumbnail: `https://raw.githubusercontent.com/leafal-io/${slug}/production/img/thumbnail.jpg`,
        background: `https://raw.githubusercontent.com/leafal-io/${slug}/production/img/background.jpg`,
    };
}
