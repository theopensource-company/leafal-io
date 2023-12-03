import { useDatabase } from '~/composables/useDatabase';
import type { Product } from '~/constants/types/Product.types';

/*export const useProduct = (slug: string) => new Promise(async (resolve, reject) => {
    const { connected, database } = await useDatabase()
    console.log(database)

    const r = database.value.query<[Product[]]>('SELECT * FROM product WHERE slug = $slug', { slug }))[0][0]
    
    useDatabase()
        .then(async c => resolve((await database))
        .catch(reject)
})

export const useProducts = async () => new Promise((resolve, reject) => {
    useDatabase()
        .then(async c => resolve((await c.query<[Product[]]>('SELECT * FROM product'))[0]))
        .catch(reject)
})*/
