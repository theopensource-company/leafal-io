import { MockupProduct } from 'constants/Types/Products.types';
import { Title, useParams } from 'solid-start';
import { Column } from '~/components/Layout/Groups/Columns/Column';
import { ColumnBar } from '~/components/Layout/Groups/Columns/ColumnBar';
import { MainWrapper } from '~/components/Layout/MainWrapper';
import { mockup } from '~/components/Product';
import { ProductOverview } from '~/components/Product/Overview';
import { PageContent } from '~/components/Product/PageContent';

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
            <PageContent>
                <ProductOverview product={product} />
                <MainWrapper>
                    <ColumnBar>
                        <Column variant="twothird">
                            <span>Yo but two thirds</span>
                        </Column>
                        <Column variant="onethird">
                            <span>Yo but one third</span>
                        </Column>
                    </ColumnBar>
                </MainWrapper>
            </PageContent>
        </>
    );
}
