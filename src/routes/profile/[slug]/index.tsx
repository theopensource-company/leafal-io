import { Title, useParams } from 'solid-start';
import { MainWrapper } from '~/components/Layout/MainWrapper';
import { PageBackdrop } from '~/components/Layout/PageBackdrop';
import { mockupUser, toPublic } from '~/components/User';
import { ProfileBanner } from '~/components/User/Profiles/Banner';
import { ProfileCard } from '~/components/User/Profiles/Card';
import { ProfileContainer } from '~/components/User/Profiles/Container';
import ProfileTabs from '~/components/User/Profiles/Tabs';
import { TPublicUserRecord } from '~/library/Types/User.types';

export type ProfileProps = {
    user: TPublicUserRecord;
};

export default function StoreItemPage(_props: ProfileProps) {
    const { slug } = useParams<{ slug: string }>();
    const user = toPublic(mockupUser(slug));
    const pageTitle = `@${user.username} - leafal.io`;

    // Todo: make these components into a context.

    return (
        <>
            <Title>{pageTitle}</Title>

            <PageBackdrop
                src={`https://raw.githubusercontent.com/leafal-io/celesteia/production/img/background.jpg`}
            >
                <MainWrapper>
                    <ProfileContainer>
                        <ProfileBanner>
                            <ProfileCard user={user} size={`large`} />
                        </ProfileBanner>
                        <ProfileTabs />
                    </ProfileContainer>
                </MainWrapper>
            </PageBackdrop>
        </>
    );
}
