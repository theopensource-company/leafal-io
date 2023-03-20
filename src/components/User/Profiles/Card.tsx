import { cva } from 'cva';
import { JSX, splitProps } from 'solid-js';
import { VariantPropOptions } from '~/library/Types/Helpers.types';
import { TPublicUserRecord } from '~/library/Types/User.types';
import style from '~/styles/components/User/Profiles/Card.module.scss';

export const cardStyle = cva([style.profile], {
    variants: {
        size: {
            mini: [style.mini],
            small: [style.small],
            normal: [style.normal],
        },
    },
    defaultVariants: {
        size: 'normal',
    },
});

export const statusStyle = cva([style.status], {
    variants: {
        status: {
            offline: [style.offline],
            online: [style.online],
            ingame: [style.ingame],
        },
    },
    defaultVariants: {
        status: 'offline',
    },
});

export type ProfileSize = VariantPropOptions<typeof cardStyle, 'size'>;
export type ProfileCardProps = {
    user: TPublicUserRecord;
    size?: ProfileSize;
};

export function ProfileCard(
    _props: JSX.HTMLElementTags['a'] & ProfileCardProps
) {
    const [props, rest] = splitProps(_props, ['user', 'size']);

    const user = () => props.user;
    const profile = () => props.user.profile;
    const name = () => `${profile().displayname || user().username}`;

    return (
        <a
            href={`/profile/${user().username}`}
            class={cardStyle({
                size: props.size,
            })}
            {...rest}
        >
            <div class={style.avatarContainer} title={name()}>
                <img src={user().picture} />
            </div>

            <div class={style.infoContainer}>
                <span class={style.name}>{name()}</span>
                <span class={statusStyle({ status: 'online' })}>Online</span>
            </div>
        </a>
    );
}