import { Title, useParams } from 'solid-start';
import { Column } from '~/components/Layout/Groups/Columns/Column';
import { ColumnBar } from '~/components/Layout/Groups/Columns/ColumnBar';
import { MainWrapper } from '~/components/Layout/MainWrapper';
import { mockupProduct } from '~/components/Product';
import { MakerProfile } from '~/components/Product/Maker/Profile';
import { ProductOverview } from '~/components/Product/Overview';
import { PageContent } from '~/components/Product/PageContent';
import { PageSection, SectionHeading } from '~/components/Product/PageSection';
import { TProductRecord } from '~/library/Types/Product.types';

export type StoreItemProps = {
    product: TProductRecord;
};

export default function StoreItemPage(_props: StoreItemProps) {
    const { slug } = useParams<{ slug: string }>();
    const product = mockupProduct(slug);
    const pageTitle = `${product.title} on leafal.io`;

    return (
        <>
            <Title>{pageTitle}</Title>
            <PageContent>
                <ProductOverview product={product} />
                <MainWrapper>
                    <ColumnBar>
                        <Column variant="twothird">
                            {product.description && (
                                <>
                                    <SectionHeading>
                                        About this game
                                    </SectionHeading>
                                    <PageSection wrapped={false}>
                                        <p>{product.description}</p>
                                    </PageSection>
                                </>
                            )}
                        </Column>
                        <Column variant="onethird">
                            <SectionHeading>Details</SectionHeading>
                            <PageSection wrapped={true}>
                                <SectionHeading>Made by</SectionHeading>
                                <MakerProfile maker={product.maker} />
                            </PageSection>
                        </Column>
                    </ColumnBar>
                </MainWrapper>
            </PageContent>
        </>
    );
}
