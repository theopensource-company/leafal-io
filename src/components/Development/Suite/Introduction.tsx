import { Tab } from '~/components/Layout/Groups/Tabs';
import styles from '~/styles/components/Development/Suite.module.scss';

export function Introduction() {
    return (
        <Tab.Panel class={styles.introductionPanel}>
            <h1>Choose a tool</h1>
            <p>
                <b>Warning!</b> Incorrect usage WILL break your account.
            </p>
            <p>
                <b>Vite Import Test:</b> {import.meta.env.VITE_TEST ?? 456}
            </p>
        </Tab.Panel>
    );
}

Introduction.Tab = function () {
    return <Tab default hidden />;
};
