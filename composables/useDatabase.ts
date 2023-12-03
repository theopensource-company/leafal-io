import { Surreal } from 'surrealdb.js';

export const useDatabase = () => {
    const connected = ref(false)

    const database = ref(new Surreal({
        onConnect: () => update(true), onClose: () => update(false),
        onError: () => console.error('⚠️ Database encountered an error.'),
    }));

    function update(c: boolean) {
        if (c) console.log('🎉 Database connected!')
        else console.log('🚫 Database disconnected.')

        connected.value = c
    }

    database.value.connect(import.meta.env.VITE_SURREAL_ENDPOINT, {
        namespace: import.meta.env.VITE_SURREAL_NAMESPACE ?? 'leafal-io',
        database: import.meta.env.VITE_SURREAL_DATABASE ?? 'leafal-io-deployment_local',
    })

    return { connected, database }
}
