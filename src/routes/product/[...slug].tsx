import { MockupProduct } from 'constants/Types/Products.types';
import { useParams } from 'solid-start';
import { ProductDetails } from '~/components/Product/Details';

const mockup: MockupProduct = {
    slug: 'celesteia',
    title: 'Celesteia',
    description:
        "Humankind's last hope spreads across the galaxy to rebuild humanity's glory.",
    logo: 'https://raw.githubusercontent.com/leafal-io/celesteia/production/Icon.bmp',
    thumbnail:
        'https://raw.githubusercontent.com/leafal-io/celesteia/production/img/thumbnail.jpg',
    background:
        'https://raw.githubusercontent.com/leafal-io/celesteia/production/img/background.jpg',
};

export function ProductPage() {
    const _params = useParams();
    return <ProductDetails product={mockup} />;
}
