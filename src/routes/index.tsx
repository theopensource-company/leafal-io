import { Title } from 'solid-start';
import { MainWrapper } from '~/components/Layout/MainWrapper';
import { mockupProduct } from '~/components/Product';
import { ProductSummary } from '~/components/Product/Summary';

export default function Home() {
    const standardTitle = 'leafal.io';

    return (
        <>
            <Title>{standardTitle}</Title>
            <ProductSummary product={mockupProduct('celesteia')} />
            <MainWrapper />
        </>
    );
}
