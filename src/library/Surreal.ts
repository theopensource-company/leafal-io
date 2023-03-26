import AwaitedSurreal from '@theopensource-company/awaited-surrealdb';

export const SurrealEndpoint =
    process.env.NEXT_PUBLIC_SURREAL_ENDPOINT ?? 'http://localhost:14001';
export const SurrealNamespace =
    process.env.NEXT_PUBLIC_SURREAL_NAMESPACE ?? 'leafal-io';
export const SurrealDatabase =
    process.env.NEXT_PUBLIC_SURREAL_DATABASE ?? 'leafal-deployment_local';

export const SurrealInstance = new AwaitedSurreal({
    endpoint: SurrealEndpoint,
    namespace: SurrealNamespace,
    database: SurrealDatabase,
    token: async () => localStorage.getItem('lusrsess'),
});
