import { Surreal } from "surrealdb.js"

export const surreal: Surreal = new Surreal()

export default defineNuxtPlugin(async (nuxtApp) => {
    await surreal.connect(import.meta.env.VITE_SURREAL_ENDPOINT, {
        namespace: import.meta.env.VITE_SURREAL_NAMESPACE ?? 'leafal-io',
        database:
            import.meta.env.VITE_SURREAL_DATABASE ??
            'leafal-io-deployment_local',
    })

    return {
        provide: { surreal }
    }
})