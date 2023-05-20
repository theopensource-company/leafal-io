import { migrateDatabase } from './_migratetool.ts';

// Make sure that SurrealDB is running before you do this so it doesn't wait for a connection for an eternity.
const migrate = async () => {
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
};

migrate();
