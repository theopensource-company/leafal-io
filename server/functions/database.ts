import { Surreal } from 'surrealdb.js';

export async function connectDatabase() {
    const database = new Surreal();

    await database.connect(
        process.env.VITE_SURREAL_ENDPOINT ?? 'localhost:14001',
        {
            namespace: process.env.VITE_SURREAL_NAMESPACE ?? 'leafal-io',
            database:
                process.env.VITE_SURREAL_DATABASE ??
                'leafal-io-deployment_local',
        }
    );

    return database;
}
