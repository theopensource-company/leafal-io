import { Surreal } from "surrealdb.js"

export const useDatabase = async () => {
    const database = new Surreal()
    await database.connect('http://localhost:14001', {
        namespace: 'leafal-io',
        database: 'leafal-io-deployment_development'
    })
    return database
}
    