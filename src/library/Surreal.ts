import Surreal from 'surrealdb.js';

export const SurrealEndpoint =
    import.meta.env.VITE_SURREAL_ENDPOINT ?? 'http://localhost:14001';
export const SurrealNamespace =
    import.meta.env.VITE_SURREAL_NAMESPACE ?? 'leafal-io';
export const SurrealDatabase =
    import.meta.env.VITE_SURREAL_DATABASE ?? 'leafal-deployment_local';

export const SurrealInstance = new Surreal(SurrealEndpoint, {
    prepare: async (surreal) => {
        await surreal.use(SurrealNamespace, SurrealDatabase);
        if (typeof window !== 'undefined') {
            const token = localStorage.getItem('lusrsess');
            if (token) await surreal.authenticate(token);
        }
    },
});
