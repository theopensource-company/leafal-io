import { Accessor, createEffect, createSignal, splitProps } from 'solid-js';
import { Title, useParams } from 'solid-start';
import { clientOnly } from 'solid-start/islands';
import { HttpStatusCode } from 'solid-start/server';
import { MainWrapper } from '~/components/Layout/MainWrapper';
import { PageBackdrop } from '~/components/Layout/PageBackdrop';
import { PublicProfile } from '~/components/User';
import { ProfileContainer } from '~/components/User/Profiles/Container';
import { TPublicUserRecord } from '~/library/Types/User.types';

export type ProfileProps = {
    user: Accessor<TPublicUserRecord | undefined | null>;
};

export default function ProfilePage() {
    const { slug } = useParams<{ slug: string }>();

    const [user, setUser] = createSignal<TPublicUserRecord | undefined | null>(
        undefined
    );

    PublicProfile(slug).then((res) => setUser(res));

    createEffect(() => {
        console.log('Is null: ', user() === null);
        console.log('Is undefined: ', user() === undefined);
    });

    return (
        <>
            {user() === null ? (
                <>
                    <HttpStatusCode code={404} />
                    <span>User does not exist.</span>
                </>
            ) : (
                user() && <Profile user={user} />
            )}
        </>
    );
}

export const Profile = clientOnly(async () => {
    return {
        default: (_props: ProfileProps) => {
            const [props] = splitProps(_props, ['user']);

            if (props.user()) {
                const resolved = props.user() as TPublicUserRecord;
                const name = () =>
                    resolved.profile.displayname || resolved.username;
                const pageTitle = `${name()} - leafal.io`;

                return (
                    <>
                        <Title>{pageTitle}</Title>

                        <PageBackdrop
                            src={`https://raw.githubusercontent.com/leafal-io/celesteia/production/img/background.jpg`}
                        >
                            <MainWrapper>
                                <ProfileContainer user={resolved} />
                            </MainWrapper>
                        </PageBackdrop>
                    </>
                );
            }
        },
    };
});
