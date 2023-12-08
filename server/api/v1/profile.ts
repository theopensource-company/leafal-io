import { PublicUser } from '~/constants/types/User.types';
import { connectDatabase } from '~/server/functions/database';

export default defineEventHandler(async (event) => {
    try {
        const username = getQuery(event)['username'];
        if (!username) throw { message: 'No username provided.' };

        const database = await connectDatabase();
        const user = await database.query<[PublicUser[]]>(
            'SELECT * FROM pubuser WHERE username = $username',
            { username }
        );

        if (!user) throw { error: 'User not found', status: 404 };

        setResponseStatus(event, 200);
        return user[0][0];
    } catch (e: unknown) {
        const error = e as { error: unknown; status: number };
        setResponseStatus(event, error.status);
        return e;
    }
});
