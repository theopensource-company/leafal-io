import { ProductSummary } from '~/components/Product/Summary';

export default function Home() {
    return (
        <ProductSummary
            product={{
                slug: 'celesteia',
                title: 'Celesteia',
                description:
                    "Humankind's last hope spreads across the galaxy to rebuild humanity's glory.",
                logo: 'https://raw.githubusercontent.com/leafal-io/celesteia/production/Icon.bmp',
                thumbnail:
                    'https://raw.githubusercontent.com/leafal-io/celesteia/production/img/thumbnail.jpg',
                background:
                    'https://raw.githubusercontent.com/leafal-io/celesteia/production/img/background.jpg',
            }}
        />
    );
}
