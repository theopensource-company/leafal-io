import server$ from 'solid-start/server';
import { Button } from '~/components/Button';
import { Tab } from '~/components/Layout/Groups/Tabs';
import { featureFlags } from '~/library/Environment';
import styles from '~/styles/components/Development/Suite.module.scss';
import { migrateDatabase } from '../../../../cli/_migratetool';

export function MigrateDatabase() {
    const migrate = server$(async () => {
        await migrateDatabase(
            {
                SURREAL_HOST: 'http://127.0.0.1:14001',
                SURREAL_NAMESPACE: 'leafal-io',
                SURREAL_DATABASE: 'leafal-deployment_local',
                SURREAL_USERNAME: 'root',
                SURREAL_PASSWORD: 'root',
                LEAFAL_DEFAULT_ADMIN: JSON.stringify({
                    name: 'Terra van Taswell',
                    email: 'admin@leafal.local',
                    password: 'Password1!',
                }),
            },
            false,
            true,
            process.cwd()
        );
    });

    return (
        <Tab.Panel class={styles.migrateDatabasePanel}>
            <h1>Migrate Database</h1>
            <p>
                <b>Warning!</b> This is a tool for development instances only!
            </p>
            <Button onClick={migrate}>Execute migrations</Button>
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
