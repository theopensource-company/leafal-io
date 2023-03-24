import { Title } from 'solid-start';
import { MainWrapper } from '~/components/Layout/MainWrapper';
import { mockupProduct } from '~/components/Product';
import { ProductSummary } from '~/components/Product/Summary';
import { mockupUser, toPublic } from '~/components/User';
import { ProfileCard } from '~/components/User/Profiles/Card';

export default function Home() {
    const standardTitle = 'leafal.io';
    return (
        <>
            <Title>{standardTitle}</Title>
            <ProductSummary product={mockupProduct('celesteia')} />
            <MainWrapper>
                <ProfileCard
                    size="large"
                    user={toPublic(mockupUser('johndoe'))}
                    status="online"
                />
                <ProfileCard
                    size="large"
                    user={toPublic(mockupUser('johndoe'))}
                    status="online"
                />
            </MainWrapper>
        </>
    );
}
