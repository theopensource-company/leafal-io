import { Surreal } from "surrealdb.js"

export const useDatabase = async () => {
    const database = new Surreal()
    await database.connect(import.meta.env.VITE_SURREAL_ENDPOINT, {
        namespace: import.meta.env.VITE_SURREAL_NAMESPACE ?? 'leafal-io',
        database: import.meta.env.VITE_SURREAL_DATABASE ?? 'leafal-io-deployment_local',
    })
    return database
}
    