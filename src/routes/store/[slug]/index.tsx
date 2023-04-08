import { For, Show, createEffect, createSignal } from 'solid-js';
import { Title, useParams } from 'solid-start';
import { Column } from '~/components/Layout/Groups/Columns/Column';
import { ColumnBar } from '~/components/Layout/Groups/Columns/ColumnBar';
import { MainWrapper } from '~/components/Layout/MainWrapper';
import { getProduct, mockupProduct } from '~/components/Product';
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

    const [product, setProduct] = createSignal<TProductRecord | undefined | null>(
        undefined
    );

    createEffect(() => getProduct(slug).then((res) => setProduct(res)));

    const resolvedProduct = () => product() as TProductRecord;
    const pageTitle = () => `${resolvedProduct().title} - leafal.io`;

    return (
        <>
            <Show when={product() === null}>
                <Title>{'Product not found - leafal.io'}</Title>

                <MainWrapper>
                    <span>Product not found</span>
                </MainWrapper>
            </Show>

            <Show when={product()}>
                <Title>{pageTitle()}</Title>

                <PageContent>
                    <ProductOverview product={resolvedProduct()} />
                    <MainWrapper>
                        <ColumnBar>
                            <Column variant="twothird">
                                {resolvedProduct().description && (
                                    <>
                                        <SectionHeading>
                                            About this game
                                        </SectionHeading>
                                        <PageSection wrapped={false}>
                                            <p>{resolvedProduct().description}</p>
                                        </PageSection>
                                    </>
                                )}
                            </Column>
                            <Column variant="onethird">
                                <Show when={resolvedProduct().makers/* && other stuff */}>
                                    <SectionHeading>Details</SectionHeading>
                                    {resolvedProduct().makers && (
                                        <PageSection wrapped={true}>
                                            <SectionHeading>Made by</SectionHeading>

                                                <For each={resolvedProduct().makers}>{(maker) => 
                                                    <MakerProfile maker={maker} />
                                                }</For>
                                        </PageSection>
                                    )}
                                </Show>
                            </Column>
                        </ColumnBar>
                    </MainWrapper>
                </PageContent>
            </Show>
        </>
    );
}
