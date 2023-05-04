import { For, Show, createEffect, createSignal } from 'solid-js';
import { Title, useParams } from 'solid-start';
import { Column } from '~/components/Layout/Groups/Columns/Column';
import { ColumnBar } from '~/components/Layout/Groups/Columns/ColumnBar';
import { MainWrapper } from '~/components/Layout/MainWrapper';
import { getProduct } from '~/components/Product';
import { MakerProfile } from '~/components/Product/Maker/Profile';
import { ProductPageContent } from '~/components/Product/Page/Content';
import {
    ProductPageSection,
    ProductPageSectionHeading,
} from '~/components/Product/Page/Section';
import { ProductTop } from '~/components/Product/Page/Top';
import { TProductRecord } from '~/library/Types/Product.types';

export type StoreItemProps = {
    product: TProductRecord;
};

export default function StoreItemPage(_props: StoreItemProps) {
    const { slug } = useParams<{ slug: string }>();

    const [product, setProduct] = createSignal<
        TProductRecord | undefined | null
    >(undefined);

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

                <ProductPageContent>
                    <ProductTop product={resolvedProduct()} />
                    <MainWrapper>
                        <ColumnBar>
                            <Column variant="twothird">
                                {resolvedProduct().description && (
                                    <>
                                        <ProductPageSectionHeading>
                                            About this game
                                        </ProductPageSectionHeading>
                                        <ProductPageSection wrapped={false}>
                                            <p>
                                                {resolvedProduct().description}
                                            </p>
                                        </ProductPageSection>
                                    </>
                                )}
                            </Column>
                            <Column variant="onethird">
                                <Show
                                    when={
                                        resolvedProduct()
                                            .makers /* && other stuff */
                                    }
                                >
                                    <ProductPageSectionHeading>
                                        Details
                                    </ProductPageSectionHeading>
                                    {resolvedProduct().makers && (
                                        <ProductPageSection wrapped={true}>
                                            <ProductPageSectionHeading>
                                                Made by
                                            </ProductPageSectionHeading>

                                            <For
                                                each={resolvedProduct().makers}
                                            >
                                                {(maker) => (
                                                    <MakerProfile
                                                        maker={maker}
                                                    />
                                                )}
                                            </For>
                                        </ProductPageSection>
                                    )}
                                </Show>
                            </Column>
                        </ColumnBar>
                    </MainWrapper>
                </ProductPageContent>
            </Show>
        </>
    );
}
