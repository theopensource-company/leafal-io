import { JSX, splitProps } from 'solid-js';
import { Column } from '~/components/Layout/Groups/Columns/Column';
import { ColumnBar } from '~/components/Layout/Groups/Columns/ColumnBar';
import { Tab } from '~/components/Layout/Groups/Tabs';
import { TPublicUserRecord } from '~/library/Types/User.types';

import { ProfileBanner } from './Banner';
import { ProfileCard } from './Card';
import { Friends } from './Tabs/Friends';
import { GameList } from './Tabs/GameList';
import { Overview } from './Tabs/Overview';

import styles from '~/styles/components/User/Profiles/Page.module.scss';

export function ProfileContainer(
    _props: JSX.HTMLElementTags['div'] & {
        user: TPublicUserRecord;
    }
) {
    const [props, rest] = splitProps(_props, ['user', 'class']);
    const user = () => props.user;

    return (
        <div
            class={[styles.container, props.class].filter((a) => a).join(' ')}
            {...rest}
        >
            <Tab.Group direction="horizontal">
                <ColumnBar>
                    <Column variant="onefourth">
                        <div class={styles.side}>
                            <ProfileBanner>
                                <ProfileCard user={user()} size={`large`} />
                            </ProfileBanner>
                            <Tab.List class={styles.list}>
                                <Overview.Tab />
                                <Friends.Tab />
                                <GameList.Tab />
                            </Tab.List>
                        </div>
                    </Column>
                    <Column variant="threefourth">
                        <div class={styles.main}>
                            <Overview />
                            <Friends />
                            <GameList />
                        </div>
                    </Column>
                </ColumnBar>
            </Tab.Group>
        </div>
    );
}
