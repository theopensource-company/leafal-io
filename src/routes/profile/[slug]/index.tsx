import { Show, createEffect, createSignal } from 'solid-js';
import { Title, useParams } from 'solid-start';
import { MainWrapper } from '~/components/Layout/MainWrapper';
import { PageBackdrop } from '~/components/Layout/PageBackdrop';
import { PublicProfile } from '~/components/User';
import { ProfileContainer } from '~/components/User/Profiles/Container';
import { TPublicUserRecord } from '~/library/Types/User.types';

export type ProfileProps = {
    slug: string;
};

export default function ProfilePage() {
    const { slug } = useParams<{ slug: string }>();

    const [user, setUser] = createSignal<TPublicUserRecord | undefined | null>(
        undefined
    );

    createEffect(() => PublicProfile(slug).then((res) => setUser(res)));

    const resolvedUser = () => user() as TPublicUserRecord;
    const pageTitle = () =>
        `${
            resolvedUser().profile.displayname || resolvedUser().username
        } - leafal.io`;

    return (
        <>
            <Show when={user() === null}>
                <Title>{'User not found - leafal.io'}</Title>

                <MainWrapper>
                    <span>User not found</span>
                </MainWrapper>
            </Show>

            <Show when={user()}>
                <Title>{pageTitle()}</Title>

                <PageBackdrop
                    src={`https://raw.githubusercontent.com/leafal-io/celesteia/production/img/background.jpg`}
                >
                    <MainWrapper>
                        <ProfileContainer user={resolvedUser()} />
                    </MainWrapper>
                </PageBackdrop>
            </Show>
        </>
    );
}
