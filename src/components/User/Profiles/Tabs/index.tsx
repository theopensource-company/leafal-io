import { Tab } from '~/components/Layout/Groups/Tabs';
import { Friends } from './Friends';
import { GameList } from './GameList';
import { Overview } from './Overview';

import { Column } from '~/components/Layout/Groups/Columns/Column';
import { ColumnBar } from '~/components/Layout/Groups/Columns/ColumnBar';
import styles from '~/styles/components/User/Profiles/Tabs.module.scss';

export default function ProfileTabs() {
    return (
        <Tab.Group direction="vertical">
            <Tab.List class={styles.list}>
                <Overview.Tab />
                <Friends.Tab />
                <GameList.Tab />
            </Tab.List>

            <ColumnBar>
                <Column variant="twothird">
                    <Overview />
                    <Friends />
                    <GameList />
                </Column>
                <Column variant="onethird">
                    <></>
                </Column>
            </ColumnBar>
        </Tab.Group>
    );
}
