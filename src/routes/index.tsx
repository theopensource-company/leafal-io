import { Title } from 'solid-start';
import { mockup } from '~/components/Product';
import { ProductSummary } from '~/components/Product/Summary';

export default function Home() {
    const standardTitle = 'leafal.io';
    return (
        <>
            <Title>{standardTitle}</Title>
            <ProductSummary product={mockup('celesteia').product} />
            <p>{import.meta.env.VITE_TEST ?? 456}</p>
        </>
    );
}
