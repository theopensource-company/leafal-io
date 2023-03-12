import { MockupProduct } from 'constants/Types/Products.types';
import { splitProps } from 'solid-js';
import { ProductBanner } from './Banner';

// TODO: Change this to the product type that is linked to database data.
export type ProductDetailsProps = {
    product: MockupProduct;
};

export function ProductDetails(_props: ProductDetailsProps) {
    const [props, rest] = splitProps(_props, ['product']);

    return <ProductBanner product={props.product} {...rest} />;
}
