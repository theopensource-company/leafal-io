import { Surreal } from 'surrealdb.js';

export const database = new Surreal({
    onConnect: () => console.log('🎉 Database connected!'),
    onClose: () => console.log('🚫 Database disconnected.'),
    onError: () => console.error('⚠️ Database encountered an error.'),
});

export const query = (q: string) => database.query(q);
