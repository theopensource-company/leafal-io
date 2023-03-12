import { MockupProduct } from 'constants/Types/Products.types';
import { Title, useParams } from 'solid-start';
import { mockup } from '~/components/Product';
import { ProductOverview } from '~/components/Product/Overview';
import style from '~/styles/pages/StoreItem.module.scss';

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
            <div class={style.content}>
                <ProductOverview product={product} />
                <div class={style.columns}>
                    <div class={style.column} />
                    <div class={style.column} />
                </div>
            </div>
        </>
    );
}
