import { MockupProduct } from 'constants/Types/Products.types';
import { Link, Title, useParams } from 'solid-start';
import { ProductBanner } from '~/components/Product/Banner';

function mockup(slug: string): MockupProduct {
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

export type StoreItemProps = {
    product: MockupProduct;
};

export default function StoreItemPage(_props: StoreItemProps) {
    const { slug } = useParams();
    const product = mockup(slug);

    return (
        <>
            <Title>{product.title} on leafal.io</Title>
            <Link rel="icon shortcut" href={product.logo} />
            <ProductBanner interactive={false} product={product} />
        </>
    );
}
