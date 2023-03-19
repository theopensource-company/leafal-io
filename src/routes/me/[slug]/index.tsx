import { Title, useParams } from 'solid-start';
import { mockupUser, toPublic } from '~/components/User';
import { TPublicUserRecord } from '~/library/Types/User.types';

export type ProfileProps = {
    user: TPublicUserRecord;
};

export default function StoreItemPage(_props: ProfileProps) {
    const { slug } = useParams<{ slug: string }>();
    const user = toPublic(mockupUser(slug));
    const pageTitle = `@${user.username} - leafal.io`;

    return (
        <>
            <Title>{pageTitle}</Title>
        </>
    );
}
