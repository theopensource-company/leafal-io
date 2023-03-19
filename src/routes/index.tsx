import { Title } from 'solid-start';
import { Column } from '~/components/Layout/Groups/Columns/Column';
import { ColumnBar } from '~/components/Layout/Groups/Columns/ColumnBar';
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
                <ColumnBar>
                    <Column variant="onethird">
                        <ProfileCard
                            size="mini"
                            user={toPublic(mockupUser('johndoe'))}
                        />
                    </Column>
                    <Column variant="onethird">
                        <ProfileCard
                            size="small"
                            user={toPublic(mockupUser('johndoe'))}
                        />
                    </Column>
                    <Column variant="onethird">
                        <ProfileCard
                            size="normal"
                            user={toPublic(mockupUser('johndoe'))}
                        />
                    </Column>
                </ColumnBar>
            </MainWrapper>

            <p>{import.meta.env.VITE_TEST ?? 456}</p>
        </>
    );
}
