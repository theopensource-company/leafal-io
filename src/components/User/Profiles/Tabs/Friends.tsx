import { Tab } from '~/components/Layout/Groups/Tabs';
import styles from '~/styles/components/User/Profiles/Tabs.module.scss';

export function Friends() {
    return (
        <Tab.Panel class={styles.friendsPanel}>
            <h1>Friends</h1>
        </Tab.Panel>
    );
}

Friends.Tab = function () {
    return <Tab>Friends</Tab>;
};
