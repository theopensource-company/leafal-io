'use client';
import { Surreal } from 'surrealdb.js';

// TODO: Base off provided environment variables.
export const SurrealEndpoint = `${
    process.env.NEXT_PUBLIC_SURREAL_ENDPOINT ?? 'https://euc1-1-db.kards.social'
}/rpc`;
export const SurrealNamespace =
    process.env.NEXT_PUBLIC_SURREAL_NAMESPACE ?? 'leafal-io';
export const SurrealDatabase =
    process.env.NEXT_PUBLIC_SURREAL_DATABASE ?? 'leafal-deployment_unknown';

export const SurrealInstance = new Surreal(SurrealEndpoint, {
    prepare: async (surreal) => {
        await surreal.use(SurrealNamespace, SurrealDatabase);
        if (typeof window !== 'undefined') {
            const token = localStorage.getItem('lusrsess');

            if (token) {
                try {
                    await surreal.authenticate(token);
                } catch {
                    localStorage.removeItem('lusrsess');
                }
            }
        }
    },
});
