import { MockupProduct } from 'constants/Types/Products.types';
import { Title, useParams } from 'solid-start';
import { mockup } from '~/components/Product';
import { ProductOverview } from '~/components/Product/Overview';

export type StoreItemProps = {
    product: MockupProduct;
};

export default function StoreItemPage(_props: StoreItemProps) {
    const { slug } = useParams<{ slug: string }>();
    const product = mockup(slug);
    const pageTitle = `${product.title} on leafal.io`;

    return (
        <>
            <Title>{pageTitle}</Title>
            <ProductOverview product={product} />
        </>
    );
}
