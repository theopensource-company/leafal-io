import { Title, useParams } from 'solid-start';
import { MainWrapper } from '~/components/Layout/MainWrapper';
import { PageBackdrop } from '~/components/Layout/PageBackdrop';
import { mockupUser, toPublic } from '~/components/User';
import { ProfileContainer } from '~/components/User/Profiles/Container';
import { TPublicUserRecord } from '~/library/Types/User.types';

export type ProfileProps = {
    user: TPublicUserRecord;
};

export default function StoreItemPage(_props: ProfileProps) {
    const { slug } = useParams<{ slug: string }>();
    const user = toPublic(mockupUser(slug));

    const name = () => `${user.profile.displayname || user.username}`;

    const pageTitle = `${name()} - leafal.io`;

    // Todo: make these components into a context.

    return (
        <>
            <Title>{pageTitle}</Title>

            <PageBackdrop
                src={`https://raw.githubusercontent.com/leafal-io/celesteia/production/img/background.jpg`}
            >
                <MainWrapper>
                    <ProfileContainer user={user} />
                </MainWrapper>
            </PageBackdrop>
        </>
    );
}
