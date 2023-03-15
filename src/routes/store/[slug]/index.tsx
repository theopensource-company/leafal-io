import { MockupProduct } from 'constants/Types/Products.types';
import { Title, useParams } from 'solid-start';
import { Column } from '~/components/Layout/Groups/Columns/Column';
import { ColumnBar } from '~/components/Layout/Groups/Columns/ColumnBar';
import { MainWrapper } from '~/components/Layout/MainWrapper';
import { mockup } from '~/components/Product';
import { MakerProfile } from '~/components/Product/Maker/Profile';
import { ProductOverview } from '~/components/Product/Overview';
import { PageContent } from '~/components/Product/PageContent';
import { PageSection, SectionHeading } from '~/components/Product/PageSection';

export type StoreItemProps = {
    product: MockupProduct;
};

export default function StoreItemPage(_props: StoreItemProps) {
    const { slug } = useParams<{ slug: string }>();
    const mockupProduct = mockup(slug);
    const pageTitle = `${mockupProduct.product.title} on leafal.io`;

    return (
        <>
            <Title>{pageTitle}</Title>
            <PageContent>
                <ProductOverview product={mockupProduct} />
                <MainWrapper>
                    <ColumnBar>
                        <Column variant="twothird">
                            {mockupProduct.product.description && (
                                <>
                                    <SectionHeading>
                                        About this game
                                    </SectionHeading>
                                    <PageSection wrapped={false}>
                                        <p>
                                            {mockupProduct.product.description}
                                        </p>
                                    </PageSection>
                                </>
                            )}
                        </Column>
                        <Column variant="onethird">
                            <SectionHeading>Details</SectionHeading>
                            <PageSection wrapped={true}>
                                <SectionHeading>Made by</SectionHeading>
                                <MakerProfile maker={mockupProduct.maker} />
                            </PageSection>
                        </Column>
                    </ColumnBar>
                </MainWrapper>
            </PageContent>
        </>
    );
}
