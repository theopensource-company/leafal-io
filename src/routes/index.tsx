import { ProductSummary } from '~/components/Product/Summary';

function mockup(slug: string) {
    return {
        slug: slug,
        title: slug.substring(0, 1).toUpperCase() + slug.substring(1),
        tagline: 'This is a mockup product.',
        overview: 'This is a mockup of a product, it is not a real product.',
        description:
            'This is a mockup of a product intended for testing purposes, it is not a real product and you cannot buy or play it.',
        logo: `https://raw.githubusercontent.com/leafal-io/${slug}/production/Icon.bmp`,
        thumbnail: `https://raw.githubusercontent.com/leafal-io/${slug}/production/img/thumbnail.jpg`,
        background: `https://raw.githubusercontent.com/leafal-io/${slug}/production/img/background.jpg`,
    };
}

export default function Home() {
    return <ProductSummary product={mockup('celesteia')} />;
}
