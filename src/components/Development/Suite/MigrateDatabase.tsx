import { Button } from '~/components/Button';
import { Tab } from '~/components/Layout/Groups/Tabs';
import { featureFlags } from '~/library/Environment';
import styles from '~/styles/components/Development/Suite.module.scss';

export function MigrateDatabase() {
    const migrate = () => fetch('http://localhost:14002/migrate-database');

    return (
        <Tab.Panel class={styles.migrateDatabasePanel}>
            <h1>Migrate Database</h1>
            <p>
                <b>Warning!</b> This is a tool for development instances only!
            </p>
            <Button onClick={() => migrate?.()}>Execute migrations</Button>
        </Tab.Panel>
    );
}

MigrateDatabase.Tab = function () {
    return (
        <Tab disabled={!featureFlags.allowDatabaseMigration}>
            Migrate database
        </Tab>
    );
};
