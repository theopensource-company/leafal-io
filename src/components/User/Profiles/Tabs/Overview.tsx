import { Tab } from '~/components/Layout/Groups/Tabs';
import styles from '~/styles/components/User/Profiles/Tabs.module.scss';

export function Overview() {
    return (
        <Tab.Panel class={styles.overviewPanel}>
            <h1>Overview</h1>
        </Tab.Panel>
    );
}

Overview.Tab = function () {
    return <Tab default>Overview</Tab>;
};
