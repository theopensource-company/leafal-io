import { Tab } from '~/components/Layout/Groups/Tabs';
import styles from '~/styles/components/User/Profiles/Tabs.module.scss';

export function GameList() {
    return (
        <Tab.Panel class={styles.gameListPanel}>
            <h1>Games</h1>
        </Tab.Panel>
    );
}

GameList.Tab = function () {
    return <Tab>Games</Tab>;
};
