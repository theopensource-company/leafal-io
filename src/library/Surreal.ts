import AwaitedSurreal from '@theopensource-company/awaited-surrealdb';
import { Result } from 'surrealdb.js';

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

export const SurrealQuery = async <T = unknown>(
    query: string,
    vars?: Record<string, unknown>
): Promise<Result<T[]>[]> => SurrealInstance.query<Result<T[]>[]>(query, vars);
