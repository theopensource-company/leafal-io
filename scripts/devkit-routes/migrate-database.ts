import { Express } from 'express';
import { migrateDatabase } from '../_migratetool.ts';

export const MigrateDatabaseRoute = (app: Express) => {
    app.get('/migrate-database', async (_req, res) => {
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

        res.json({
            success: true,
        });
    });
};
