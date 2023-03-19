import { Tab } from '~/components/Layout/Groups/Tabs';
import { featureFlags } from '~/library/Environment';

export function MigrateDatabase() {
    return <Tab.Panel>Working on it :)</Tab.Panel>;
}

MigrateDatabase.Tab = function () {
    return (
        <Tab disabled={!featureFlags.allowDatabaseMigration}>
            Migrate database
        </Tab>
    );
};
