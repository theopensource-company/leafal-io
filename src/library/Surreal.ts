import AwaitedSurreal from '@theopensource-company/awaited-surrealdb';

export const SurrealEndpoint =
    import.meta.env.VITE_SURREAL_ENDPOINT ?? 'http://localhost:14001';
export const SurrealNamespace =
    import.meta.env.VITE_SURREAL_NAMESPACE ?? 'leafal-io';
export const SurrealDatabase =
    import.meta.env.VITE_SURREAL_DATABASE ?? 'leafal-deployment_local';

export const SurrealInstance = new AwaitedSurreal({
    endpoint: SurrealEndpoint,
    namespace: SurrealNamespace,
    database: SurrealDatabase,
    token: async () => localStorage.getItem('lusrsess'),
});
