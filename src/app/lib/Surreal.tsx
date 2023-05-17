'use client';
import { Surreal } from "surrealdb.js";

// TODO: Base off provided environment variables.
export const SurrealEndpoint = "http://localhost:14001";
export const SurrealNamespace = "leafal-io";
export const SurrealDatabase = "leafal-deployment_local";

export const SurrealInstance = new Surreal(SurrealEndpoint, {
    prepare: async (surreal) => { await surreal.use(SurrealNamespace, SurrealDatabase); }
});