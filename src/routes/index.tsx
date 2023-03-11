import { mockup } from '~/components/Product';
import { ProductSummary } from '~/components/Product/Summary';

export default function Home() {
    return <ProductSummary product={mockup('celesteia')} />;
}
