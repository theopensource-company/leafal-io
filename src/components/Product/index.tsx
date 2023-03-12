import { MockupProduct } from 'constants/Types/Products.types';

export function mockup(slug: string): MockupProduct {
    return {
        slug: slug,
        title: 'Celesteia',
        tagline: `Humankind's last hope spreads across the galaxy to rebuild humanity's glory.`,
        overview: `In the wake of a terrible calamity, humankind's last hope spreads across the galaxy to rebuild humanity's glory.`,
        description:
            'This is a mockup of a product intended for testing purposes, it is not a real product and you cannot buy or play it. Please, do not believe anyone that tells you you can buy this. You cannot. Believe me.',
        logo: `https://raw.githubusercontent.com/leafal-io/${slug}/production/Icon.bmp`,
        thumbnail: `https://raw.githubusercontent.com/leafal-io/${slug}/production/img/thumbnail.jpg`,
        background: `https://raw.githubusercontent.com/leafal-io/${slug}/production/img/background.jpg`,
        showcase: {
            slides: [
                {
                    image: `https://raw.githubusercontent.com/leafal-io/${slug}/production/img/thumbnail.jpg`,
                },
                {
                    image: `https://pbs.twimg.com/media/Fqh7MYnWcAAmjk0?format=png&name=large`,
                },
                {
                    image: `https://pbs.twimg.com/media/Fqfnve6WYAAZT19?format=png&name=large`,
                },
            ],
        },
        reception: 0.6,
    };
}
